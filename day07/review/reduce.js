//누적시킴(쌓기)
const result = [1, 2, 3, 4, 5].reduce((acc, current) => acc + current);
console.log(result);

const coffee = "americano";
coffee.split("a").reduce((x, y) => x + y);
console.log(coffee.split("a").reduce((x, y) => x + y));
