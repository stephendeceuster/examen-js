const splitsOpEnGeefDeTweeGemiddeldes = (arr) => {
    const odd = parseFloat(gemiddelde(arr.filter(el => el%2 !== 0)).toFixed(2));
    const even = parseFloat(gemiddelde(arr.filter(el => el%2 === 0)).toFixed(2));
    return [odd, even];
};

const gemiddelde = (arr) => {
    const len = arr.length || 1;
    return arr.reduce((a, b) => a + b, 0)/len;
};


console.log(splitsOpEnGeefDeTweeGemiddeldes([1,2,3,1,5616,112,13,1212,3,7]));
