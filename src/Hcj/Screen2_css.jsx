import React, { useState } from "react";
import LangList2 from "./LangList2";
import { programContent2 } from "../Data/css_data";
import CodeSnippet from "../Codesnippet/CodeSnippet";
import LivePreview from "../Codesnippet/LivePreview";

function Screen1({ program }) {
  const code = programContent2[program] || "";
  return (
    <div className="prg-screen">
      {program ? (
        <LivePreview code={code} />
      ) : (
        <p style={{ fontSize: "30px", color: "rgb(54, 158, 219)", fontWeight: "bold" }}>
          Select an item above the list...
        </p>
      )}
    </div>
  );
}

function Screen2({ program }) {
  const code = programContent2[program] || "";
  return (
    <div className="show-prog">
      {program && <CodeSnippet code={code} language="javascript" />}
    </div>
  );
}

export default function Screen2_css() {
  const [program, setProgram] = useState("");

  return (
    <>
      <div className="btm">
        <LangList2 setProgram={setProgram} />
      </div>

      <div className="proscreen">
        {/* First screen: run the HTML+CSS+JS */}
        <Screen1 program={program} />

        {/* Second screen: show raw snippet */}
        <Screen2 program={program} />
      </div>
    </>
  );
}
