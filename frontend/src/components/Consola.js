import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { aura } from '@uiw/codemirror-theme-aura';

function Consola(props) {

  return (
    <CodeMirror
      value={props.consola}
      height="450px"
      width='550px'
      maxWidth='550px'
      theme={aura}
    />
  );
}
export default Consola;