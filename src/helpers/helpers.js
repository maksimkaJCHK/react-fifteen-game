export const calcNumbRow = (x, rowNumb) => {
  if (x < rowNumb) return 1;

  return Math.floor(x / rowNumb) + 1;
};

export const calcNumbCol = (x, rowNumb) => {
  if (x < rowNumb) return x + 1;

  return x%rowNumb + 1;
};

// Генерю нужный массив
export const generateArr = function* (endCount) {
  let count = 1;
  while (count < endCount) yield count++;
  yield null;
};

export const bForCompareArr = (arr) => arr.map((el) => String(el)).join(',');
export const isStopGame = (arr, stopGameCondition) => bForCompareArr(arr) === stopGameCondition;

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

// Проверяю решаема ли пятнашка
const isSolvable = (puzzle, sizeBoard = 4) => {
  let parity = 0;
  let row = 0;
  let blankRow = 0;

  for (let i = 0; i < puzzle.length; i++) {
    if (i % sizeBoard === 0) row++;

    if (puzzle[i] === null) {
      blankRow = row;

      continue;
    }

    for (let j = i + 1; j < puzzle.length; j++) {
      if (puzzle[i] > puzzle[j] && puzzle[j] !== null) parity++;
    }
  }

  if (sizeBoard % 2 === 0) {
    if (blankRow % 2 === 0) return parity % 2 === 0;
    if (blankRow % 2 !== 0) return parity % 2 !== 0;
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
  const calcWidth = sizeBoard * sizeBoard;
  let newPuzzle = shuffle([...generateArr(calcWidth)]);

  while (!isSolvable(newPuzzle, sizeBoard)) {
    newPuzzle = shuffle([...generateArr(calcWidth)]);
  }

  return newPuzzle;
}

const nameForLS = 'game:settings';

export const saveGameParam = (state) => {
  localStorage.setItem(nameForLS, JSON.stringify(state));
};

export const getParamGame = () => {
  const params = localStorage.getItem(nameForLS);

  return params ? JSON.parse(params) : null;
};