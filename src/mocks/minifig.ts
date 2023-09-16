import { Minifig, MinifigPart } from "types/minifigs";

export const minifigGenerator = (props?: Partial<Minifig>) => ({
  name: "mockedMinifigName",
  num_parts: "mockedNumParts",
  set_img_url: "mockedImgUrl",
  set_num: "mockedSetNum",
  set_url: "mockedUrl",
  last_modified_dt: "mockedDt",
  ...props,
});

export const minifigPartGenerator = (props?: Partial<MinifigPart>) => ({
  set_num: "mockedPartSetNum",
  quantity: 1,
  num_sets: "mockedPartSetsNum",
  part: {},
  color: {},
  is_spare: false,
  inv_part_id: 1,
  id: 1,
  element_id: "mockedPartElementId",
  ...props,
});
