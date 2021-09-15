import { SUPPORTED_IMAGE_EXTENSIONS } from "./constants";

const EXTENSION_REGEX = /\.[0-9a-z]+$/i;

const getFileExtension = (path: string) =>
  (path.match(EXTENSION_REGEX) || [])[0];

export const checkImageExtension = (path: string) => {
  const extension = getFileExtension(path);
  return SUPPORTED_IMAGE_EXTENSIONS.some((v) => v === extension);
};
