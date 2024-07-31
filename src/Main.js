import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from '@/context/mainContext.js'
import Board from '@/components/Board';

import './styles/style.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const FifteenGame = () => {
  return (
    <div className = "fifteen-game">
      <Provider>
        <Board />
      </Provider>
    </div>
  );
}

root.render(<FifteenGame />);