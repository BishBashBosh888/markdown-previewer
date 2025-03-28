import { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownPreviewer = () =>{
    const [text,setText] = useState("# Type Markdown Here!");

    return (
        <div className="w-screen h-screen flex gap-4 p-4 bg-white shadow-lg">
            <div className="w-1/2 h-full p-4 border rounded-lg bg-gray-100 flex flex-col">
                <div className="pb-2 border-b">
                    <h1>EDITOR</h1>
                </div>
                <div className="flex-1 overflow-hidden p-4">
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type markdown here..."
                        className="w-full h-full p-2 rounded-lg overflow-hidden resize-none bg-gray-300"
                        value={text}
                    />
                </div>
            </div>

            <div className="w-1/2 h-full p-4 border rounded-lg bg-gray-100 flex flex-col">
                <div className="pb-2 border-b">
                    <h1>MARKDOWN PREVIEWER</h1>
                </div>
                <div className="flex-1 overflow-hidden p-4">
                    <div className="w-full h-full p-2 rounded-lg overflow-hidden bg-gray-300">
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarkdownPreviewer;