import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/auth";

const useUser = () => {
  const token = localStorage.getItem("token") || "";
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
  });
  return query;
};

export default useUser;
