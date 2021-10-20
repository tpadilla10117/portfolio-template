import React, {useState, useContext} from 'react';
import './App.css';
import { ThemeContext } from '../context';
import { Intro, About, ProductList, Contact, Toggle } from './utils';

function App() {
/* State to handle dark mode toggle: */
  const [ dark, setDark ] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={ {backgroundColor:darkMode ? '#222' : "white", color:darkMode && 'white' }}>

      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />

    </div>
  );
}

export default App;
