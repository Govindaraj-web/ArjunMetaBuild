import React, { useState, useEffect } from "react";

function Rawcode({ code }) {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const wrappedCode = `
        <html>
          <body></body>
          <script>
            // Capture console.log and forward to parent
            (function() {
              const oldLog = console.log;
              console.log = function(...args) {
                window.parent.postMessage({ type: "console", data: args }, "*");
                oldLog.apply(console, args);
              };
              const oldError = console.error;
              console.error = function(...args) {
                window.parent.postMessage({ type: "console", data: ["Error:", ...args] }, "*");
                oldError.apply(console, args);
              };
            })();
          </script>
          <script>
            try {
              ${code}
            } catch (e) {
              console.error(e.message);
            }
          </script>
        </html>
      `;
      setSrcDoc(wrappedCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <iframe
      srcDoc={srcDoc}
      title="live preview"
      sandbox="allow-scripts allow-modals"
      frameBorder="0"
      width="100%"
      height="400px"
      style={{
        background: "white",
        borderRadius: "8px",
        marginTop: "-50%"
      }}
    />
  );
}

export default Rawcode;
