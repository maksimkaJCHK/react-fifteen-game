import { useReducer, useMemo } from "react";

const useCheckbox = (initValue = 3) => {
  const [ curState, onChange ] = useReducer((_, e) => Number(e?.target?.value || e), initValue);

  return useMemo(() => ({
      curState,
      onChange
    }), [curState]
  )
}

export default useCheckbox;