import { useState, useEffect } from 'react'
import './App.css'
import Button from './Components/Button'
import Code from './Components/Code'

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [active, setActive] = useState("html");
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(` `);

  const onTabClick = editorName => {
    setOpenedEditor(editorName);
    setActive(editorName)
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <div className='App'>
      <h1>Code Editor</h1>
      <div className='button-container'>
        <Button className={active === "html" ? "active": ""} title="HTML" onclick={() => {
          onTabClick("html")}} id="html" />
        <Button className={active === "css" ? "active": ""} title="CSS" onclick={() => {
          onTabClick("css")}}id="css"/>
        <Button className={active === "js" ? "active": ""} title="JavaScript" onclick={() => {
          onTabClick("js")}} id="js"/>  
      </div>
      <div className='code-container'>
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
        <div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="1"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}

export default App
