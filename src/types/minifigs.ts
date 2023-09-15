export interface Minifig {
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
  last_modified_dt: string;
}

export interface MinifigResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results?: Minifig[];
}
