const colInRow = (x, rowNumb) => {
  if (x < rowNumb) return 1;

  return Math.floor(x / rowNumb) + 1;
};

const colInCols = (x, rowNumb) => {
  if (x < rowNumb) return x + 1;

  return x%rowNumb + 1;
};

// Генерю нужный массив
const genrateArray = (num, add) => {
  const puzzle = [...Array(num)].map((_, i) => i + add);
  puzzle.push(null);

  return puzzle;
};

// Проверяю решаема ли пятнашка
const isSolvable = (puzzle, sizeBoard = 4) => {
  let parity = 0;
  let row = 0;
  let blankRow = 0;

  for (let i = 0; i < puzzle.length; i++) {
    if (i % sizeBoard === 0) {
      // advance to next row
      row++;
    }
    if (puzzle[i] === 0) {
      blankRow = row;

      continue;
    }
    for (var j = i + 1; j < puzzle.length; j++) {
      if (puzzle[i] > puzzle[j] && puzzle[j] != 0) parity++;
    }
  }

  if (sizeBoard % 2 == 0) {
    if (blankRow % 2 == 0) {
      return parity % 2 == 0;
    } else {
      return parity % 2 != 0;
    }
  } else {
    return parity % 2 == 0;
  }
};

// Перетасовываю пятнашки
const shuffle = (array) => {
  let i = array.length;
  let randomNumIndex;
  let randomNum;

  while (--i > 0) {
    randomNumIndex = Math.floor(Math.random() * (i + 1));
    randomNum = array[randomNumIndex];
    array[randomNumIndex] = array[i];
    array[i] = randomNum;
  }

  return array;
};

export const generateBoardItem = (sizeBoard) => {
  const calcWidth = sizeBoard * sizeBoard - 1;
  let newPuzzle = shuffle(genrateArray(calcWidth, 1));

  while (!isSolvable(newPuzzle, sizeBoard)) {
    newPuzzle = shuffle(genrateArray(calcWidth, 1));
  }

  return newPuzzle;
}