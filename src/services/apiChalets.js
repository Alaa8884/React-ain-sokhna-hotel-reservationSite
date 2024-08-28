import supabase, { supabaseUrl } from "./supabase";

export async function getChalets() {
  const { data, error } = await supabase.from("chalets").select("*");

  if (error) {
    console.log(error);
    throw new Error("Chalets couldn't be loaded");
  }
  return data;
}

export async function createUpdateChalet(newChalet, id) {
  const hasImagePath = newChalet.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newChalet.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newChalet.image
    : `${supabaseUrl}/storage/v1/object/public/CabinImages/${imageName}`;

  let query = supabase.from("chalets");

  if (!id) query = query.insert([{ ...newChalet, image: imagePath }]);

  if (id) query = query.update({ ...newChalet, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Chalet couldn't be created");
  }

  if (hasImagePath) return data;
  
  const { storageError } = await supabase.storage
    .from("CabinImages")
    .upload(imageName, newChalet.image);

  if (storageError) {
    await supabase.from("chalets").delete().eq("id", data.id);
    console.log(error);
    throw new Error("Chalet image couldn't be uploaded and it deleted");
  }
  return data;
}

export async function deleteChalet(id) {
  const { data, error } = await supabase.from("chalets").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Chalets couldn't be deleted");
  }
  return data;
}
