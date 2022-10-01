import { generateRasList } from "../utils/keysGenerators";
import useStorageList from "./useStrorageList";

const useRasList = () => {
  const [list, update] = useStorageList("ras", generateRasList());

  return [list, update];
};

export default useRasList;
