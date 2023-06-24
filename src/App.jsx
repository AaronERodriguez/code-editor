import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");

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
              <p>The html editor is open</p>
            ) : openedEditor === "css" ? (
              <p>The CSS editor is open!!!!!!</p>
            ) : (
              <p>The JavaScript editor is open</p>
            )
          }
      </div>
    </div>
  )
}

export default App
