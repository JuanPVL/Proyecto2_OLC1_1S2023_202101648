import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';

function Consola() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value=""
      height="450px"
      theme={aura}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default Consola;