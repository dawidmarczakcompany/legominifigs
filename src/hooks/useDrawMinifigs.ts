import { getMinifigs } from "actions/minifigs";
import { useEffect, useState } from "react";
import { Minifig } from "types/minifigs";

const useDrawMinifigs = () => {
  const [minifigs, setMinifigs] = useState<Minifig[]>();

  useEffect(() => {
    getMinifigs()
      .then(({ results }) => setMinifigs(results))
      .catch((e) => {
        //Could be improved by e.g. sending error events to Sentry
        console.error(e);
      });
  }, []);

  return { minifigs };
};

export default useDrawMinifigs;
