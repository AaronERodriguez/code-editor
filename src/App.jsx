import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import Code from './Components/Code'

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const onTabClick = editorName => {
    setOpenedEditor(editorName);
  };

  return (
    <div className='App'>
      <h1>Code Editor</h1>
      <div className='button-container'>
        <Button title="HTML" onclick={() => {
          onTabClick("html")}} />
        <Button title="CSS" onclick={() => {
          onTabClick("css")}} />
        <Button title="JavaScript" onclick={() => {
          onTabClick("js")}} />  
      </div>
      <div className='editor-container'>
          {
            openedEditor === "html" ? (
              <Code language="xml"
              value={html}
              setEditorState={setHtml} />
            ) : openedEditor === "css" ? (
              <Code language="css"
              value={css}
              setEditorState={setCss} />
            ) : (
              <Code language="javascript"
              value={js}
              setEditorState={setJs} />
            )
          }
      </div>
    </div>
  )
}

export default App
