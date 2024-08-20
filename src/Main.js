import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from '@/context/mainContext.js';

import Wrapper from '@/components/wrapper/Wrapper';
import Header from '@/components/header/Header';
import BoardContainer from '@/components/board/BoardContainer';
import Services from '@/components/services/Services';
import Info from '@/components/info/Info';
import Footer from '@/components/footer/Footer';
import Settings from '@/components/settings/Settings';

import './styles/style.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const FifteenGame = () => {
  return (
    <div className = "fifteen-game">
      <Provider>
        <Settings />
        <Header />

        <Wrapper className = "mainContent">
          <main>
            <Info />
            <BoardContainer />
            <Services />
          </main>
        </Wrapper>
      </Provider>

      <Footer />
    </div>
  );
}

root.render(<FifteenGame />);