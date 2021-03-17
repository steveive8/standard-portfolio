import React from 'react';
import Main from './components/main';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Scrap from './components/scraps';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Scrap />
    </>
  )
}

export default App;