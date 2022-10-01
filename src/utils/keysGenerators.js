import {
  SYMMETRIC_KEY_CHARSET,
  SYMMETRIC_KEY_LENGTH,
  SYMMETRIC_KEY_QUANTITY,
  RAS_KEY_LENGTH,
  RAS_KEY_CHARSET,
  RAS_KEY_QUANTITY,
  PRIVACY_KEY_LENGTH,
  PRIVACY_KEY_CHARSET,
} from "../constants/key.constants";

export const generateKey = (keyLength, keyCharset) => {
  let text = "";

  for (let i = 0; i < keyLength; i++) {
    text += keyCharset.charAt(Math.floor(Math.random() * keyCharset.length));
  }

  return text;
};

export const generateSymmetricList = () => {
  return [...Array(SYMMETRIC_KEY_QUANTITY).keys()].map((index) => ({
    id: index,
    value: generateKey(SYMMETRIC_KEY_LENGTH, SYMMETRIC_KEY_CHARSET),
  }));
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
