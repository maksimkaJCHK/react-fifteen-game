import {
  generateBoardItem,
  calcNumbRow,
  calcNumbCol,
  moveFigures,
  generateArr,
  bForCompareArr,
  isStopGame,
  saveGameParam
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

    const gameParams = {
      ...state,
      ...startGameDefParam,
      stopGameCondition,
      items,
      id: Date.now(),
      isSettings: false,
      size: payload,
      firstPosition: [ ...items ],
    }

    saveGameParam(gameParams);

    return gameParams;
  }

  if (type === 'changeSettings') {
    return {
      ...state,
      isSettings: payload
    }
  }

  if (type === 'reloadGame') {
    const { firstPosition } = state;

    const gameParams = {
      ...state,
      ...startGameDefParam,
      items: [ ...firstPosition ]
    }

    saveGameParam(gameParams);

    return gameParams;
  }

  if (type === 'newGame') {
    const { size } = state;
    const { items, stopGameCondition } = startGameGenerate(size);

    const gameParams = {
      ...state,
      items,
      stopGameCondition,
      ...startGameDefParam,
      id: Date.now(),
      firstPosition: [ ...items ]
    }

    saveGameParam(gameParams);

    return gameParams;
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

      const gameParams = {
        ...state,
        items: newItems,
        count: count + 1,
        isGameOver: isStopGame(newItems, stopGameCondition),
        isStart: !isStopGame(newItems, stopGameCondition),
      }

      saveGameParam(gameParams);

      return gameParams;
    }

    return {
      ...state,
    }
  }

  return state;
};

export default mainReducer;