import { generatePrivacyKey } from "../utils/keysGenerators";
import useStorageList from "./useStrorageList";

const usePrivacyKey = () => {
  const [key, update] = useStorageList("privacy", generatePrivacyKey());

  return [key, update];
};

export default usePrivacyKey;
