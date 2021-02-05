const doTheMagic = (arr) => {
    return arr.filter((el, i) => ((i+1)%4 === 0))
    .map(e => Math.pow(e, 3))
    .reduce((a ,b) => a + b, 0);
};

console.log(doTheMagic([1,2,3,2,1,3,8,12,6]));