import { getMinifigDetails, getMinifigParts } from "actions/minifigs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Minifig, MinifigPart } from "types/minifigs";

//The nice way would be use reactQuery here, but I wanted to present the classic approach without external packages

const useMinifigDetails = () => {
  const { id } = useParams();
  const [minifig, setMinifig] = useState<Minifig>();
  const [minifigParts, setMinifigParts] = useState<MinifigPart[]>();

  useEffect(() => {
    if (!id) {
      return;
    }

    getMinifigDetails(id)
      .then(setMinifig)
      .catch((e) => {
        //capt
        console.error(e);
      });
  }, []);

  useEffect(() => {
    if (!minifig) {
      return;
    }

    getMinifigParts(minifig.set_num)
      .then(({ results }) => setMinifigParts(results))
      .catch((e) => {
        //capt
        console.error(e);
      });
  }, [minifig]);

  return { minifig, minifigParts };
};

export default useMinifigDetails;
