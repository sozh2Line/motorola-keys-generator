import fsBrowser from "fs-browsers";

export const exportSymmetricKeys = (symmetricList) => {
  const keyString = symmetricList.reduce(
    (accumulator, { keyId, id, value }, index) => {
      const separator = index > 0 ? "\n" : "";
      accumulator = `${accumulator}${separator}${keyId} key${id + 1} ${value}`;

      return accumulator;
    },
    ""
  );

  fsBrowser.exportFile(keyString, { fileName: "motorola-symmetric-keys.txt" });
};
