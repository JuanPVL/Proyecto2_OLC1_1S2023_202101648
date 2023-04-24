import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';

function Editor(props) {
  const onChange = React.useCallback((value, viewUpdate) => {
    props.input(value);
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="//TODO - Add code here"
      height="450px"
      theme={aura}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default Editor;