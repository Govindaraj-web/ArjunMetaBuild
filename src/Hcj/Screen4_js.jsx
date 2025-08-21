import React, { useState } from "react";
import LangList4 from "./LangList4";
import { programContent4 } from "../Data/js1_data";
import CodeSnippet from "../Codesnippet/CodeSnippet";
import LivePreview from "../Codesnippet/LivePreview";

function Screen1({ program }) {
  const code = programContent4[program] || "";
  return (
    <div className="prg-screen">
      {program ? (<CodeSnippet code={code} language="javascript" />) :
        (<p
          style={{
            fontSize: "30px",
            color: "rgb(54, 158, 219)",
            fontWeight: "bold",
          }}
        >
          Select an item above the list...
        </p>)}
    </div>
  );
}

function Screen2({ program }) {
  const code = programContent4[program] || "";
  return (
    <div className="show-prog">
      {program ? (
        <LivePreview code={code} />
      ) : null}
    </div>
  );
}


function Screen4_js() {
   const [program, setProgram] = useState("");
   
     return (
       <>
         <div className="btm">
           <LangList4 setProgram={setProgram} />
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

export default Screen4_js