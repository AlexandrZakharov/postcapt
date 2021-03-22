const setComma = (number) => {
  return number
    .toString()
    .split("")
    .reverse()
    .map((n, i) => (i % 3 === 0 && i !== 0 ? `${n},` : n))
    .reverse()
    .join("");
};

export default setComma;