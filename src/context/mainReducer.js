import {
  generateBoardItem,
  calcNumbRow,
  calcNumbCol,
  moveFigures,
  generateArr,
  bForCompareArr,
  isStopGame
} from '@/helpers/helpers.js';

const startGameDefParam = {
  count: 0,
  isStart: true,
  isGameOver: false,
}

const startGameGenerate = (size) => {
  const items = generateBoardItem(size);
  const stopGameCondition = bForCompareArr([...generateArr(size * size)]);

  return {
    items,
    stopGameCondition
  }
};

const mainReducer = (state, { type, payload }) => {
  const { isGameOver } = state;

  if (type === 'changeSize') {
    const { items, stopGameCondition } = startGameGenerate(payload);

    return {
      ...state,
      ...startGameDefParam,
      stopGameCondition,
      items,
      id: Date.now(),
      isSettings: false,
      size: payload,
      firstPosition: [ ...items ],
    }
  }

  if (type === 'changeSettings') {
    return {
      ...state,
      isSettings: payload
    }
  }

  if (type === 'reloadGame') {
    const { firstPosition } = state;

    return {
      ...state,
      ...startGameDefParam,
      items: [ ...firstPosition ]
    }
  }

  if (type === 'newGame') {
    const { size } = state;
    const { items, stopGameCondition } = startGameGenerate(size);

    return {
      ...state,
      items,
      stopGameCondition,
      ...startGameDefParam,
      id: Date.now(),
      firstPosition: [ ...items ]
    }
  }

  if (type === 'move' && !isGameOver) {
    const {
      items,
      count,
      size,
      stopGameCondition
    } = state;

    const idxNull = items.findIndex((el) => el === null);

    const fIdx = items.findIndex((el) => el === payload);
    const isColInRow = calcNumbRow(idxNull, size) === calcNumbRow(fIdx, size);
    const isColInCols = calcNumbCol(idxNull, size) === calcNumbCol(fIdx, size);

    if (isColInRow || isColInCols) {
      const newItems = moveFigures({
        items,
        idxNull,
        curIdx: fIdx,
        smes: isColInCols ? size : 1
      });

      return {
        ...state,
        items: newItems,
        count: count + 1,
        isGameOver: isStopGame(newItems, stopGameCondition),
        isStart: !isStopGame(newItems, stopGameCondition),
      }
    }

    return {
      ...state,
    }
  }

  return state;
};

export default mainReducer;