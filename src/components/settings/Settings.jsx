import React, { useEffect } from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import Close from '@/components/UI/close/close';
import Checkbox from '@/components/UI/checkbox/Checkbox';
import Button from '@/components/UI/buttons/button';

import { useGameContext } from '@/context/mainContext';
import useCheckbox from '@/hooks/useCheckbox';

import './settings.scss';

const Settings = () => {
  const {
    isSettings,
    closeSettings,
    changeSize,
    size
  } = useGameContext();
  const param = useCheckbox(size);

  useEffect(() => {
    if (!isSettings) param.onChange(size);
  }, [isSettings]);

  const onSubmit = (e) => {
    e.preventDefault();

    changeSize(param.curState);
  }

  return (
    <div className = { `settings ${isSettings ? 'open' : ''}` }>
      <Wrapper onClick = { closeSettings }>
        <div
          className="settings-wrapper"
          onClick = { (e) => e.stopPropagation() }
        >
          <div className="settings-block">
            <Close onClick = { closeSettings } />

            <div className="settings-header">
              Size game
            </div>

            <form
              action="example.php"
              onSubmit = { onSubmit }
            >
              <Checkbox
                val = { 3 }
                label = "3 X 3"
                { ...param }
              />
              <Checkbox
                val = { 4 }
                label = "4 X 4"
                { ...param }
              />
              <Checkbox
                val = { 5 }
                label = "5 X 5"
                { ...param }
              />

              <Button classNames = { ['settings-submit'] }>
                Save settings
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Settings;