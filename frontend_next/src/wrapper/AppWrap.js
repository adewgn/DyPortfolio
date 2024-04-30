import React from 'react';
import { Social } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <Social />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">© 2024 Akash Dewangan</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap;
