import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from '@/context/mainContext.js';

import Wrapper from '@/components/wrapper/Wrapper';
import Board from '@/components/board/Board';
import Services from '@/components/services/Services';

import './styles/style.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const FifteenGame = () => {
  return (
    <div className = "fifteen-game">
      <Provider>
        <Wrapper>
          <Board />
          <Services />
        </Wrapper>
      </Provider>
    </div>
  );
}

root.render(<FifteenGame />);