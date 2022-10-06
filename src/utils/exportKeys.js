import fsBrowser from "fs-browsers";

export const exportKeys = (privacyKey, symmetricList, rasList) => {
  const keySctring = [privacyKey, ...symmetricList, ...rasList].reduce(
    (accumulator, key, index) => {
      const separator = index > 0 ? "/" : "";
      accumulator = `${accumulator}${separator}${key.value}`;
      return accumulator;
    },
    ""
  );

  fsBrowser.exportFile(keySctring, { fileName: "motorola-keys.txt" });
};
