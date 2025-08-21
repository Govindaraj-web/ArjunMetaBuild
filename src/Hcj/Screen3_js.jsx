import React, { useState, useEffect } from "react";
import LangList3 from "./LangList3";
import { programContent3 } from "../Data/js_data";
import CodeSnippet from "../Codesnippet/CodeSnippet";
import Rawcode from "../Codesnippet/Rawcode";


function Screen1({ program }) {
  const code = programContent3[program] || "";
  return (
    <div className="prg-screen">
      {program ? (
        <CodeSnippet code={code} language="javascript" />
      ) : (
        <p
          style={{
            fontSize: "30px",
            color: "rgb(54, 158, 219)",
            fontWeight: "bold",
          }}
        >
          Select an item above the list...
        </p>
      )}
    </div>
  );
}

function Screen2({ program, logs, clearLogs }) {
  const code = programContent3[program] || "";
  return (
    <div className="show-prog">
      {program ? (
        <>
          <Rawcode code={code} />

          {/* Console Output Panel */}
          <div
            style={{
              background: "#1e1e1e",
              color: "#0f0",
              fontFamily: "monospace",
              fontSize: "14px",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "6px",
              minHeight: "600px",
              overflowY: "auto",
              maxHeight: "600px",
            }}
          >
            {logs.length > 0 ? (
              logs.map((log, idx) => <div key={idx}>{log}</div>)
            ) : (
              <div style={{ color: "#888" }}>Console output will appear here…</div>
            )}
          </div>

          {/* Clear Button */}
          <button
            onClick={clearLogs}
            style={{
              marginTop: "8px",
              padding: "6px 12px",
              background: "#ff4d4d",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Clear Console
          </button>
        </>
      ) : null}
    </div>
  );
}

export default function Screen3_js() {
  const [program, setProgram] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "console") {
        setLogs((prev) => [...prev, event.data.data.join(" ")]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const clearLogs = () => setLogs([]);

  return (
    <>
      <div className="btm">
        <LangList3 setProgram={setProgram} />
      </div>

      <div className="proscreen">
        {/* First screen: run the HTML+CSS+JS + show logs */}
        <Screen1 program={program} />

        {/* Second screen: show raw snippet */}
        <Screen2 program={program} logs={logs} clearLogs={clearLogs} />
      </div>
    </>
  );
}
