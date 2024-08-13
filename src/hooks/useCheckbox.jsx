import { useReducer } from "react";

const useCheckbox = (initValue = 3) => {
  const [ curState, onChange ] = useReducer((_, e) => Number(e?.target?.value || e), initValue);

  return {
    curState,
    onChange
  };
}

export default useCheckbox;