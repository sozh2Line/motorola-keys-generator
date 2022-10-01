import { generateSymmetricList } from "../utils/keysGenerators";
import useStorageList from "./useStrorageList";

const useSymmetricList = () => {
  const [list, update] = useStorageList("symmetric", generateSymmetricList());

  return [list, update];
};

export default useSymmetricList;
