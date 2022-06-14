import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NumberToWord from './components/Form';
import Form from './components/Form';
import Game from './components/Game';
import Text from './components/Text';
import Navbar from './components/Navbar';
import Error from './components/Error';

function App() {
  return (<>
<Navbar />
  <Routes >
    <Route path="/" element={<Game />} />
    <Route path="/form" element={<Form />} />
    <Route path="/text" element={<Text />} />
    <Route path="/number" element={<NumberToWord />} />
    <Route path="*" element={<Error />} />
  </Routes>
  
  </>

  );
}

export default App;
