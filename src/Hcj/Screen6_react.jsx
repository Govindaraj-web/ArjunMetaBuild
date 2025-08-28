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

function Screen1({ program }) {
  const [jsxCode, setJsxCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    if (program && programFiles[program]) {
      // Import JSX
      import(`../Programs/${programFiles[program].jsx}?raw`).then((mod) =>
        setJsxCode(mod.default)
      );

      // Import CSS only if it exists
      if (programFiles[program].css) {
        import(`../Programs/${programFiles[program].css}?raw`).then((mod) =>
          setCssCode(mod.default)
        );
      } else {
        setCssCode(""); // No CSS, clear state
      }
    } else {
      setJsxCode("");
      setCssCode("");
    }
  }, [program]);

  return (
    <div className="prg-screen">
      {program ? (
        <>
          <CodeSnippet code={jsxCode} language="jsx" />

          {/* Only show CSS snippet if it exists */}
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
