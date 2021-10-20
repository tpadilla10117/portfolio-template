import './App.css';

import { Intro, About, ProductList, Contact, Toggle } from './utils';

function App() {
  return (
    <div className="App">

      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />

    </div>
  );
}

export default App;
