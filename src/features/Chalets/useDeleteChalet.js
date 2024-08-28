import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteChalet as deleteChaletApi } from "../../services/apiChalets";
import toast from "react-hot-toast";

export function useDeleteChalet() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteChalet } = useMutation({
    mutationFn: deleteChaletApi,
    onSuccess: () => {
      toast.success("Chalet successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["chalets"],
      });
    },
    onError: (err) => toast.err(err.message),
  });
  
  return { isDeleting, deleteChalet };
}
