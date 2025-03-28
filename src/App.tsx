import MarkdownPreviewer from "./components/MarkdownPreviewer"
import "./assets/styles/styles.css"
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    document.title="Markdown Previewer"
  })
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <MarkdownPreviewer/>
    </div>
  )
}

export default App
