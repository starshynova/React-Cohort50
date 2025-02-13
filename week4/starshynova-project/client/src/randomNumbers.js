export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export  const checkSubtraction = (a, b) => {
    return a < b ? { a: b, b: a } : { a, b };
};

