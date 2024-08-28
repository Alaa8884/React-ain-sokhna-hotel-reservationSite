import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUpdateChalet } from "../../services/apiChalets";

export function useCreateChalet() {
  const queryClient = useQueryClient();

  const { mutate: createChalet, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateChalet,
    onSuccess: () => {
      toast.success("New Chalet successfully created");
      queryClient.invalidateQueries({ queryKey: ["chalets"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createChalet };
}
