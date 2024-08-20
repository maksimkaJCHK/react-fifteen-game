import React, { useMemo, useCallback } from 'react';
import Settings from './Settings';

import { useGameContext } from '@/context/mainContext';
import useCheckbox from '@/hooks/useCheckbox';

const SettingsContainer = () => {
  const {
    isSettings,
    size,
    closeSettings,
    changeSize,
  } = useGameContext();

  const param = useCheckbox(size);

  const isSettingsMemo = useMemo(() => isSettings, [isSettings]);
  const sizeMemo = useMemo(() => size, [size]);
  const paramMemo = useMemo(() => param, [param]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    changeSize(paramMemo.curState);
  }, [paramMemo]);

  const closeSettingsMemo = useCallback(() => closeSettings(), []);

  return (
    <Settings
      isSettings = { isSettingsMemo }
      size = { sizeMemo }
      param = { paramMemo }
      closeSettings = { closeSettingsMemo }
      onSubmit = { onSubmit }
    />
  )
}

export default SettingsContainer;