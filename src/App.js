import React, { Fragment } from 'react';
import Palette from './components/Palette';
import seedColors from './seedColors';

function App() {
  return (
    <Fragment>
      <Palette {...seedColors[4]} />
    </Fragment>
  );
}

export default App;
