import { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownPreviewer = () =>{
    const [text,setText] = useState("# Type Markdown Here!");

    return (
        <div className="flex gap-4 p-4">
            <textarea onChange={(e) => setText(e.target.value)} placeholder="Type markdown here..." 
            className="w-1/2 h-96 p-2 border rounded-lg"
            value={text}/>

            <div className="w-1/2 h-96 p-4 border rounded-lg overflow-auto bg-gray-100 prose">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownPreviewer;