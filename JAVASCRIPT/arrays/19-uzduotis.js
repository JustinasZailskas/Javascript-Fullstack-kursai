let marksList = [8, 6, 9, 10, 10, 5, 3, 2];

let result = marksList.reduce((res, mark) => res + mark, 0) / marksList.length;

console.log(result);
