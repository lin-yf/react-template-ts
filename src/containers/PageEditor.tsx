import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

// @ts-ignore
// window.MonacoEnvironment = {
//   getWorkerUrl(_moduleId: any, label: string) {
//     if (label === 'json') {
//       return './json.worker.bundle.js';
//     }
//     if (label === 'css' || label === 'scss' || label === 'less') {
//       return './css.worker.bundle.js';
//     }
//     if (label === 'html' || label === 'handlebars' || label === 'razor') {
//       return './html.worker.bundle.js';
//     }
//     if (label === 'typescript' || label === 'javascript') {
//       return './ts.worker.bundle.js';
//     }
//     return './editor.worker.bundle.js';
//   },
// };

export const Editor: React.FC = () => {
  const divEl = useRef<HTMLDivElement>(null);
  let editor: monaco.editor.IStandaloneCodeEditor;
  useEffect(() => {
    if (divEl.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editor = monaco.editor.create(divEl.current, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
          '\n'
        ),
        language: 'html',
      });
    }
    return () => {
      editor.dispose();
    };
  }, []);
  return (
    <div
      className="Editor"
      ref={divEl}
      style={{ width: '800px', height: '600px' }}
    />
  );
};

export default Editor;
