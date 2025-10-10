import { Camper } from "@/types/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

// Define the paginated response type we expect from MockAPI
type PaginatedCampersResponse = {
  items: Camper[];
  total: number;
};

export const getCampers = async ({ pageParam = 1 }): Promise<Camper[]> => {
  const response = await api.get<PaginatedCampersResponse>("/campers", {
    params: {
      page: pageParam,
      limit: 4,
    },
  });
  // Return only the array of items from the response object
  return response.data.items;
};
