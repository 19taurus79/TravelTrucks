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

type getCampersProps = {
  pageParam?: number;
  activeFilters: {
    equipment: string[];
    vehicleType: string;
    location: string;
  };
};

export const getCampers = async ({
  pageParam = 1,
  activeFilters,
}: getCampersProps): Promise<PaginatedCampersResponse> => {
  const params: any = { page: pageParam, limit: 4 };

  if (activeFilters?.location) {
    params.location = activeFilters.location;
  }

  if (activeFilters?.vehicleType) {
    params.form = activeFilters.vehicleType;
  }

  if (activeFilters?.equipment?.length > 0) {
    activeFilters.equipment.forEach((item) => {
      if (item === "automatic") {
        params.transmission = "automatic";
      } else {
        params[item] = true;
      }
    });
  }

  const response = await api.get<PaginatedCampersResponse>("/campers", { params });
  return response.data;
};
