import React, {useState} from 'react';
import Lobby from './components/Lobby';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Scrap from './components/Scraps';
import Index from './components/Index';

export const App = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <GlobalStyles />
      <Header setPage={setPage} />
      <div style={{paddingTop: 100, paddingLeft: 30, paddingRight: 30}}>
          {page === 0 && 
            <>
              <Lobby />
              <Scrap />
            </>}
        {page === 1 && <Index />}
        {page === 2 && <Scrap />}
      </div>
    </>
  )
}

export default App;