import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from '@/context/mainContext.js'
import Board from '@/components/Board';

import './styles/style.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const Numpuz = () => {
  return (
    <div className = "Numpuz">
      <Provider>
        <Board />
      </Provider>
    </div>
  );
}

root.render(<Numpuz />);