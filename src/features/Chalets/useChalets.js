import { useQuery } from "@tanstack/react-query";
import { getChalets } from "../../services/apiChalets";

export function useChalets() {
  const {
    isLoading,
    data: chalets,
    error,
  } = useQuery({
    queryKey: ["chalets"],
    queryFn: getChalets,
  });
return { isLoading, chalets, error };
}