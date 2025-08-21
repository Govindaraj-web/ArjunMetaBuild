import React, { useState, useEffect } from "react";

function LivePreview({ code }) {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(code);
    }, 250); // small delay for better performance
    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <iframe
      srcDoc={srcDoc}
      title="live preview"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="700px"
      style={{
      background: "white",
      borderRadius: "8px",


      }}
    />
  );
}

export default LivePreview;
