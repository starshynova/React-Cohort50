export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export  const checkSubtraction = (a, b) => {
    if (a < b) {
        return { a: b, b: a }; 
    }
    return { a, b };
};
