import { api } from "api";
import {
  Minifig,
  MinifigPartsResponse,
  MinifigsResponse,
} from "types/minifigs";

//Id of Harry Potter theme = 246; Assumed to use here by default as checked previously.

export const getMinifigs = async () => {
  const { data } = await api().get<MinifigsResponse>(
    `minifigs/?in_theme_id=246`,
  );

  return data;
};

export const getMinifigDetails = async (id: string) => {
  const { data } = await api().get<Minifig>(`minifigs/${id}`);

  return data;
};

export const getMinifigParts = async (id: string) => {
  const { data } = await api().get<MinifigPartsResponse>(
    `minifigs/${id}/parts`,
  );

  return data;
};
