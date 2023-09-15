export interface Minifig {
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
  last_modified_dt: string;
}

export interface MinifigPart {
  set_num: string;
  quantity: number;
  num_sets: number;
  part: MinifigPartDetails;
  color: MinifigColorDetails;
  is_spare: boolean;
  inv_part_id: number;
  id: number;
  element_id: string | null;
}

export interface MinifigPartDetails {
  print_of: string | null;
  part_url: string;
  part_num: string;
  part_img_url: string;
  part_cat_id: number;
  name: string;
}

export interface MinifigColorDetails {
  id: number;
  is_trans: boolean;
  name: string;
  rgb: string;
}

export interface RebrickableResponse {
  count: number;
  next: string | null;
  previous: string | null;
}
export interface MinifigsResponse extends RebrickableResponse {
  results?: Minifig[];
}

export interface MinifigPartsResponse extends RebrickableResponse {
  results?: MinifigPart[];
}
