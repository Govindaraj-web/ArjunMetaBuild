export const items = [
    { label: "HTML-Tag", program: "htmltag" },
    { label: "Heading-Tag", program: "Headingtag" },
    { label: "H-Tag", program: "htag" },
    { label: "Anchor-Tag", program: "Anchortag" },
    { label: "Image-Tag", program: "Imagetag" },
    { label: "List-Tag", program: "listtags" },
    { label: "frame-Tag", program: "frametag" },
    { label: "TableNormal", program: "Tableprog" },
    { label: "Table-Form", program: "tableform" },
    { label: "Regform", program: "Regform" },

];

export const programContent = {
    htmltag: `<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">HTML TAG</a>
  <img src="hcj/ht.png">`,
    Headingtag: `
<h1>Web Development</h1>
<h2>Front-end Development</h2>
<h2>----1.HTML</h2>
<h2>----2.CSS</h2>
<h3>-------2.1.Bootstrap</h3>
<h2>----3.JavaScript</h2>
<h3>-------3.1.React</h3>
  `,
    htag: `
<h1>Hello</h1>
<h2>Hello</h2>
<h3>Hello</h3>
<h4>Hello</h4>
<h5>Hello</h5>
<h6>Hello</h6>
  `,
  Anchortag:`<h1>Note: HTML Anchor Tag Creates a hyperlink to a Web page</h1>
                <hr>
             
             <a href="https://www.google.com/">GOOGLE</a>`,
             Imagetag:`  <center>
                <img src="hcj/vijay.jpg" alt="Vijay Image " width="200px"> <br>
                <a href="https://www.youtube.com/watch?v=8FAUEv_E_xQ">Arabic Kuthu</a>
            </center>
            <hr>
            <h1> Note: ( alt="" ) tag,
            
                image not loading some issues
                that time showing alt tag name</h1>`,
    listtags:`
 <h1>  HTML List two types </h1>
   <h2> 1.Ordered List </h2>
   <h2> 2.Unordered List </h2>
 <hr>

<h1>Ordered List</h1>
<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ol>

<br>

<h1>Unordered List</h1>
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>`,
frametag:`<iframe src="https://www.moviesda.love/tamilrockers/" ></iframe>
                
              <hr>
              
              <img src="hcj/iframeta2.png" alt="" style="margin-top: 50px;width:400px">`,
              Tableprog:` <table border="3">
                <tr>
                    <td>Name</td><td>Age</td><td>Team</td>
                </tr>
                <tr>
                    <td>Arjuna</td><td>25</td><td>CSK</td>
                </tr>
                <tr>
                    <td>Gayathri</td><td>24</td><td>RCB</td>
                </tr>
                <tr>
                    <td>Gayanthika</td><td>3</td><td>LSG</td>
                </tr>
            
            </table>`,
            tableform:`<h1>Without table and ->tr->td tag will showing zigzag</h1>
                <form >
                    Name: <input type="text"> <br>
                     Age: <input type="number">
                     <input type="submit">
                     <input type="reset">
                
                </form>
                <hr>
                
                
                
                
                <h1 style="margin-top: 5%;">With Table and ->tr->td tag </h1>
                    <form>
                
                        <table>
                            <tr>
                                <td>Name</td><td><input type="text"></td>
                            </tr>
                            <tr>
                                <td>Age</td><td><input type="number"></td>
                            </tr>
                            <tr>
                                <td> <input type="submit"></td><td><input type="reset"></td>
                            </tr>
                        </table>
                
                    </form>`,
                    Regform:`<center>
                <h1>Student Registration Form</h1>
                
                <form>
                    <table>
                        <tr>
                            <td>Name:</td><td><input type="text" placeholder="Enter Your Name"></td>
                        </tr>
                        <tr>
                            <td>Age:</td><td><input type="number" placeholder="Enter Your Age"></td>
                        </tr>
                        <tr>
                            <td>Address:</td><td><input type="text" placeholder="Enter Your Address"></td>
                        </tr>
                        <tr>
                            <td>Department:</td><td><select>
                                <option>Python Programming</option>
                                <option>SQL</option>
                                <option>GitHub</option>
                            </select></td>  
                        </tr>
                        <tr>
                           <td></td> <td><input type="submit"></td>
                        </tr>
                    </table>
                </form>
                </center>`
};


