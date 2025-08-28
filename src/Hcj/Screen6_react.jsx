import React, { useEffect, useState } from "react";
import LangList6 from "./LangList6";
import CodeSnippet from "../Codesnippet/Reactcode";
import { items6, programFiles } from "../Data/react_data";

// Import React components for live preview
import Usestate1 from "../Programs/UseState1.jsx";
import Usestate2 from "../Programs/UseState2.jsx";
import Usestate3 from "../Programs/UseState3.jsx";
import Usestate4 from "../Programs/UseState4.jsx";
import Usestate5 from "../Programs/UseState5.jsx";
import UseEffect1 from "../Programs/UseEffect1.jsx";
import UseEffect2 from "../Programs/UseEffect2.jsx";
import UserefHook from "../Programs/UserefHook.jsx";
import Usememousecallback from "../Programs/Usememousecallback.jsx";

// Map React components for live preview
const programComponents = {
  UseState1: <Usestate1 />,
  UseState2: <Usestate2 />,
  UseState3: <Usestate3 />,
  UseState4: <Usestate4 />,
  UseState5: <Usestate5 />,
  UseEffect1: <UseEffect1 />,
  UseEffect2: <UseEffect2 />,
  UserefHook: <UserefHook />,
  Usememousecallback: <Usememousecallback />,
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
