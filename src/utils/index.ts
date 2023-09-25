export const copyToClipboad = (text: string) => {
  return navigator.clipboard.writeText(text);
};
