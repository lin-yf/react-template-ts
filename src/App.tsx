import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoot from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  );
}
export default App;
