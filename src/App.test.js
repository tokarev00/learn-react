import {act} from '@testing-library/react';
import WholeApp from './App';
import React from "react";
import {createRoot} from "react-dom/client";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(()=>{
    root.render(<WholeApp/>);
    root.unmount();
  })
});
