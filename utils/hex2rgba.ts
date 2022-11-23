// converts hex to rgba with opacity because
// styled components rgba function does not accept hex values

const isValidHex = (hex: string) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

export const hex2rgba = (hex: string, alpha = 1) => {
  if (!isValidHex(hex)) {
    throw new Error("Invalid HEX");
  }

  const [r, g, b] = hex?.match(/\w\w/g)!.map((x) => parseInt(x, 16));

  return `rgba(${r},${g},${b},${alpha})`;
};
