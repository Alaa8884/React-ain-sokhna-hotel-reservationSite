import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUpdateChalet } from "../../services/apiChalets";

export function useUpdateChalet() {
  const queryClient = useQueryClient();

  const { mutate: updateChalet, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newChaletData, id }) =>
      createUpdateChalet(newChaletData, id),
    onSuccess: () => {
      toast.success("Chalet successfully edited");
      queryClient.invalidateQueries({ queryKey: ["chalets"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    isUpdating,
    updateChalet,
  };
}
