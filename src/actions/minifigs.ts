import { api } from "api";
import { MinifigResponse } from "types/minifigs";

//Id of Harry Potter theme = 246; Assumed to use here by default as checked previously.

export const getMinifigs = async () => {
  const { data } = await api().get<MinifigResponse>(
    `minifigs/?in_theme_id=246`
  );

  return data;
};
