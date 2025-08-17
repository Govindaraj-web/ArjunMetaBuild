import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: copied ? "#4caf50" : "#444",
          color: "white",
          border: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
          zIndex: 1,
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Syntax Highlighted Code */}
      <SyntaxHighlighter
        language={language}
        style={dracula} className = "codesnippet"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
