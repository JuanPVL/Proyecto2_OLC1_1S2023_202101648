import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';

function Editor(props) {
  const onChange = React.useCallback((value, viewUpdate) => {
    props.input(value);
    //console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value={props.value}
      height="450px"
      width='500px'
      maxWidth='500px'
      theme={aura}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default Editor;