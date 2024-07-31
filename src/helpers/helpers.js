export const colInRow = (x, rowNumb) => {
  if (x < rowNumb) return 1;

  return Math.floor(x / rowNumb) + 1;
};

export const colInCols = (x, rowNumb) => {
  if (x < rowNumb) return x + 1;

  return x%rowNumb + 1;
};

export const isEqualArr = (arr, size) => {
  // Пока не доделано, но как определять конец игры я уже понимаю
  return arr.map((el) => String(el)).join(',') === '1,2,3,4,5,6,7,8,null';
};

const changeArr = ({ items, idx1, idx2 }) => {
  const elem1 = items[idx1];
  const elem2 = items[idx2];

  const newItems = items.with(idx1, elem2).with(idx2, elem1);

  return newItems;
};

export const moveFigures = ({
  items,
  idxNull,
  curIdx,
  smes = 1
}) => {
  let newItems = [ ...items ];

  if (idxNull < curIdx) {
    while (idxNull < curIdx) {
      newItems = changeArr({
        items: newItems,
        idx1: idxNull,
        idx2: idxNull + smes
      });

      idxNull += smes;
    }

    return newItems;
  }

  while (idxNull > curIdx) {
    newItems = changeArr({
      items: newItems,
      idx1: idxNull - smes,
      idx2: idxNull
    });

    idxNull -= smes;
  }

  return newItems;
}

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
    if (i % sizeBoard === 0) row++;

    if (puzzle[i] === 0) {
      blankRow = row;

      continue;
    }

    for (var j = i + 1; j < puzzle.length; j++) {
      if (puzzle[i] > puzzle[j] && puzzle[j] != 0) parity++;
    }
  }

  if (sizeBoard % 2 === 0) {
    if (blankRow % 2 === 0) {
      return parity % 2 === 0;
    }

    if ((blankRow % 2 !== 0)) {
      return parity % 2 !== 0;
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

// Генерю пятнашки
export const generateBoardItem = (sizeBoard = 3) => {
  const calcWidth = sizeBoard * sizeBoard - 1;
  let newPuzzle = shuffle(genrateArray(calcWidth, 1));

  while (!isSolvable(newPuzzle, sizeBoard)) {
    newPuzzle = shuffle(genrateArray(calcWidth, 1));
  }

  return newPuzzle;
}