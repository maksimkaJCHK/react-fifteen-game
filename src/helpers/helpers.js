const colInRow = (x, rowNumb) => {
  if (x < rowNumb) return 1;

  return Math.floor(x / rowNumb) + 1;
}

const colInCols = (x, rowNumb) => {
  if (x < rowNumb) return x + 1;

  return x%rowNumb + 1;
}