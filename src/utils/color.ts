export const generateColor = () => {
  const HEX_SYMBOLS = '0123456789ABCDEF';
  let color = '';

  for (let i = 0; i < 6; i++) {
    color += HEX_SYMBOLS[Math.floor(Math.random() * HEX_SYMBOLS.length)];
  }

  return `#${color}`;
};
