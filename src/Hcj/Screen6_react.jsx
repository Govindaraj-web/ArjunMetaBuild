import React, { useEffect, useState } from "react";
import LangList6 from "./LangList6";
import CodeSnippet from "../Codesnippet/Reactcode";
import { items6, programFiles } from "../Data/react_data";

// Import React components for live preview
import UseState1 from "../Programs/UseState1.jsx";
import UseState2 from "../Programs/UseState2.jsx";
import UseState33 from "../Programs/UseState33.jsx";
import UseState44 from "../Programs/UseState44.jsx";
import UseState5 from "../Programs/UseState5.jsx";
import UseEffect1 from "../Programs/UseEffect1.jsx";
import UseEffect2 from "../Programs/UseEffect2.jsx";
import UseRefHook1 from "../Programs/UseRefHook1.jsx";
import UsememoUsecallback1 from "../Programs/UsememoUsecallback1.jsx"; 

// Map React components for live preview
const programComponents = {
  UseState1: <UseState1 />,
  UseState2: <UseState2 />,
  UseState33: <UseState33 />,
  UseState44: <UseState44 />,
  UseState5: <UseState5 />,
  UseEffect1: <UseEffect1 />,
  UseEffect2: <UseEffect2 />,
  UseRefHook1: <UseRefHook1 />,
  UsememoUsecallback1: <UsememoUsecallback1 />,
};

// Let Vite know all files for raw loading
const jsxFiles = import.meta.glob("../Programs/*.jsx", { as: "raw" });
const cssFiles = import.meta.glob("../Programs/*.css", { as: "raw" });

function Screen1({ program }) {
  const [jsxCode, setJsxCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    if (!program || !programFiles[program]) {
      setJsxCode("");
      setCssCode("");
      return;
    }

    const { jsx, css } = programFiles[program];

    // Load JSX file
    if (jsx && jsxFiles[`../Programs/${jsx}`]) {
      jsxFiles[`../Programs/${jsx}`]().then((code) => {
        setJsxCode(code);
      });
    } else {
      setJsxCode("");
    }

    // Load CSS file if exists
    if (css && cssFiles[`../Programs/${css}`]) {
      cssFiles[`../Programs/${css}`]().then((code) => {
        setCssCode(code);
      });
    } else {
      setCssCode("");
    }
  }, [program]);

  return (
    <div className="prg-screen">
      {program ? (
        <>
          <CodeSnippet code={jsxCode} language="jsx" />
          {cssCode && (
            <div className="codesnippet">
              <CodeSnippet code={cssCode} language="css" />
            </div>
          )}
        </>
      ) : (
        <p className="select-msg">Select an item above the list...</p>
      )}
    </div>
  );
}

function Screen2({ program }) {
  return <div className="show-prog">{programComponents[program]}</div>;
}

function Screen6_react() {
  const [program, setProgram] = useState("");

  return (
    <>
      <div className="btm">
        <LangList6 setProgram={setProgram} />
      </div>

      <div className="proscreen">
        <Screen1 program={program} />
        <Screen2 program={program} />
      </div>
    </>
  );
}

export default Screen6_react;
