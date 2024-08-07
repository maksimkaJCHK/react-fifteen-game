import {
  generateBoardItem,
  calcNumbRow,
  calcNumbCol,
  moveFigures,
  generateArr,
  bForCompareArr,
  isStopGame
} from '@/helpers/helpers.js';

const mainReducer = (state, { type, payload }) => {
  const { isGameOver } = state;

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
      count: 0,
      isStart: true,
      isGameOver: false,
      items: firstPosition.map((el) => el)
    }
  }

  if (type === 'newGame') {
    const { size } = state;
    const items = generateBoardItem(size);
    const stopGameCondition = bForCompareArr([...generateArr(size * size)]);

    return {
      ...state,
      items,
      stopGameCondition,
      count: 0,
      isStart: true,
      isGameOver: false,
      id: Date.now(),
      firstPosition: items.map((el) => el)
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