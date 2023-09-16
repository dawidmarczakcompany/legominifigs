import { getMinifigs } from "actions/minifigs";
import { useEffect, useState } from "react";
import { Minifig } from "types/minifigs";

//The nice way would be use reactQuery here, but I wanted to present the classic approach without external packages

const useDrawMinifigs = () => {
  const [minifigs, setMinifigs] = useState<Minifig[]>();
  const [errorFetchingMinifigs, setErrorFetchingMinifigs] = useState(false);

  useEffect(() => {
    getMinifigs()
      .then(({ results }) => setMinifigs(results))
      .catch(() => {
        //Could be improved by e.g. sending error events to Sentry
        setErrorFetchingMinifigs(true);
        setMinifigs([]);
      });
  }, []);

  return { minifigs, errorFetchingMinifigs };
};

export default useDrawMinifigs;
