import {
  SYMMETRIC_KEY_CHARSET,
  SYMMETRIC_KEY_LENGTH,
  SYMMETRIC_KEY_QUANTITY,
  RAS_KEY_LENGTH,
  RAS_KEY_CHARSET,
  RAS_KEY_QUANTITY,
  PRIVACY_KEY_LENGTH,
  PRIVACY_KEY_CHARSET,
  MIN_KEY_ID_RANGE,
  MAX_KEY_ID_RANGE,
} from "../constants/key.constants";

const generateKey = (keyLength, keyCharset) => {
  let text = "";

  for (let i = 0; i < keyLength; i++) {
    text += keyCharset.charAt(Math.floor(Math.random() * keyCharset.length));
  }

  return text;
};

const generateRandomIntegerInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateUniqeKeyId = (list) => {
  const keyIdCandidate = generateRandomIntegerInRange(
    MIN_KEY_ID_RANGE,
    MAX_KEY_ID_RANGE
  );
  const isKeyIdUniqe = !list.find(({ keyId }) => keyId === keyIdCandidate);

  if (isKeyIdUniqe) {
    return keyIdCandidate;
  }

  return generateUniqeKeyId(list);
};

const mapKeyIdsToSymmetricList = (symmetricList) => {
  return symmetricList.reduce((accumulator, symmetricItem) => {
    const keyId = generateUniqeKeyId(symmetricList);

    accumulator = [...accumulator, { keyId, ...symmetricItem }];
    return accumulator;
  }, []);
};

export const generateSymmetricList = () => {
  return mapKeyIdsToSymmetricList(
    [...Array(SYMMETRIC_KEY_QUANTITY).keys()].map((index) => ({
      id: index,
      value: generateKey(SYMMETRIC_KEY_LENGTH, SYMMETRIC_KEY_CHARSET),
    }))
  );
};

export const generateRasList = () => {
  return [...Array(RAS_KEY_QUANTITY).keys()].map((index) => ({
    id: index,
    value: generateKey(RAS_KEY_LENGTH, RAS_KEY_CHARSET),
  }));
};

export const generatePrivacyKey = () => {
  return {
    id: 0,
    value: generateKey(PRIVACY_KEY_LENGTH, PRIVACY_KEY_CHARSET),
  };
};
