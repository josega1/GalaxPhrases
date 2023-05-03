export const getRandomNumber = (number) => {
    const random = Math.random();
    const roundRandom = Math.round(random * number);

    return roundRandom
};
getRandomNumber(100)