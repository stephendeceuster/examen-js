const berekenSomTotGetal = (num) => {
    let som = num.toString().split('').map(e => parseInt(e)).reduce((a ,b) => a + b, 0);
    if (som.toString().split('').length > 1) {
        return berekenSomTotGetal(som);
    } else {
        return som;
    }
}

console.log(berekenSomTotGetal(123456129768));