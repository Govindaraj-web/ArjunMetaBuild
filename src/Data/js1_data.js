export const items4 = [
    { label: "add2withbtn", program: "add2withbtn" },
    { label: "Inputbox", program: "Inputboxx" },
    { label: "Adjucent_Ele", program: "AdjucentEle" },
    { label: "Prepend_doc", program: "Prependd" },
    { label: "Divbox_moving", program: "Divboxmoving" },
    { label: "QuerySelector", program: "QuerySelectorr" },
    { label: "QuerySelectors", program: "QuerySelectorrs" },
    { label: "TodoList", program: "TodoList" },
    { label: "HideNumber", program: "HideNumber" },
    { label: "Guess_number", program: "guessnumber" },
    { label: "Bgchangei", program: "bgchangei" },



];

export const programContent4 = {
    add2withbtn: `  <!--Add Two Number-->
            <input id="num11">
            <input id="num21">
            <button onclick="add()" style="border: solid; background-color: rgb(13, 98, 162);">Add</button>
            <p id="resultt">result</p>
            <script>
                var box11=document.getElementById("num11")
                var box21=document.getElementById("num21")
                var resultt=document.getElementById("resultt")
            function add()
            {
                var box11value=Number(box11.value)
                var box21value=Number(box21.value)
                var totall=box11value+box21value
                resultt.textContent=totall
            
            }
            </script>
            
   <!--Button color-->
            <hr>
            <button id="btnn" onclick="updatee()" style="border: solid; background-color: rgb(214, 220, 225);">Change Color</button>
            
            <script>
                var btnn=document.getElementById("btnn")
            
                function updatee()
                {
                    btnn.style.backgroundColor="red"
                }
            </script>
            
   <!--Name up and down change-->
            <hr>
            <h1 id="h11">Govindaraj</h1>
            <button onclick="Nextt()" style="border: solid; background-color: rgb(13, 98, 162);">Next</button>
            
            <script>
                var h11=document.getElementById("h11")
                console.log(h11.textContent)
            
                function Nextt()
                {
                    h11.textContent="Arjun"
                }
            </script> `,
    Inputboxx: `
           <input id="inputboxxx" onkeyup="updatedd()">
            <h1 id="resulted"></h1>
            
            <script> 
                var inputbox=document.getElementById("inputboxxx")
                var result=document.getElementById("resulted")
            
                function updatedd()
                {
                    resulted.textContent=inputboxxx.value
                }
            </script>
  `,
    AdjucentEle: `
       <div class="vivoo">
            <h1 id="oppoo"> Arjun </h1>
            <h1 id="oppoo"> Gayanti </h1>
        </div>
        
        <script>
            var vivoo=document.querySelector(".vivoo")
            var oppoo=document.createElement("oppoo")
            oppoo.textContent="Hello"
            vivoo.insertAdjacentElement("afterbegin",oppoo)
        </script>`,
    Prependd: `
    <div class="prepdiv">
            <h1>Arjun</h1>
        </div>
        
        <script>
            var prepdiv=document.querySelector(".prepdiv")
            prepdiv.prepend("Hello")
        
        </script>`,
    Divboxmoving: `
         <style>
            .divmovingg{
                background-color: green;
                width: 100px;
                height: 100px;
                transition: 2s;
            }
            .widthmax{
                background-color: green;
                height: 100px;
                transition: 2s;
                width: 900px;
            }
            .widthmin{
                background-color: green;
                height: 100px;
                transition: 2s;
                width: 100px;
            }
        </style>
        
        <div id="boxdede" class="divmovingg"></div>
        <button onclick="changeable()" onmouseleave="changging()" style="border: solid; background-color: rgb(192, 210, 223);">Change color
        </button>
        
        <script>
            var boxded=document.getElementById("boxdede")
        
            function changeable()
            {
                boxdede.setAttribute("class","widthmax")
                boxdede.style.backgroundColor="blue"
            }
            function changging()
            {
                boxdede.style.backgroundColor="green"
                boxdede.setAttribute("class","widthmin")
            
            }
        </script>`,
    QuerySelectorr: `
            <div class="onee">Hello</div>
            <script>
                var onee=document.querySelector(".onee")
                console.log(onee.textContent)
            </script>`,
    QuerySelectorrs: `
               <h1 class="okk">One</h1>
                <h1 class="okk">Two</h1>
                <h1 class="okk">Three</h1>
                
                <script>
                    var okk=document.querySelectorAll(".okk")
                    for(count=0;count<okk.length;count=count+1)
                    {
                       console.log(okk[count].textContent) 
                    }
                </script>`,
    TodoList: `
             <input id="inputn">
                <button onclick="addm()" style="border: solid; background-color: rgb(192, 210, 223);">Add</button>
                <ul id="list-containerm">
                    <li id="lil">Hello</li>
                    <button onclick="deleteItemm(event)" style="border: solid; background-color: rgb(192, 210, 223);">delete</button>
                </ul>
                <script>
                    var ull=document.getElementById("list-containerm")
                    var inputn=document.getElementById("inputn")
                
                    function addm()
                    {
                        var listitemn=document.createElement("lil")
                        listitemn.innerHTML=
                        inputn.value+
                        "<button onClick='deleteItemm(event)' style='border: solid; background-color: rgb(192, 210, 223);'>delete</button>"
                        ull.append(listitemn)
                    }
                    function deleteItemm(event)
                    {
                        event.target.parentElement.remove()
                    }
                </script>`,
    HideNumber: `
                <style>
                h1:hover{
                    cursor: pointer;
                }
                </style>
               <h1 onclick="deleteitemqq(event)">One</h1>
                <h1 onclick="deleteitemqq(event)">Two</h1>
                <h1 onclick="deleteitemqq(event)">Three</h1>
                <h1 onclick="deleteitemqq(event)">Four</h1>
                <h1 onclick="deleteitemqq(event)">Five<h1>
                <h1 onclick="deleteitemqq(event)">Six</h1>
                
                <script>
                    function deleteitemqq(event)
                    {
                        event.target.remove()
                    }
                    
                </script>`,
    guessnumber: `
            <style>
                .unisel{
                margin: 0;
                padding: 0;
              }
              .gudiv{
                background-color: gray;
                text-align: center;
                width: 100%;
                height: 100%;
                padding-top: 20%;
                font-size: xx-large;
              
              }
              </style>
              <div class="unisel">
              <div class="gudiv">
              <h1>Guess the Number</h1>
              <input id="guessnumber">
              <button onclick="check()">Check</button>
              <p id="resultr">You are Wrong/Right</p>
              <p id="scorer">Score:10</p>
              </div>
              </div>
              <script>
                var guessnumber=document.getElementById("guessnumber")
                var resultr=document.getElementById("resultr")
                var scorer=document.getElementById("scorer")
                var randomNumber=Math.floor(Math.random()*10)+1
                var totalscore=10
              
                function check()
                {
                    var enterednumber=guessnumber.value
              if(randomNumber==enterednumber)
              {
                console.log("Right")
                resultr.textContent="Right"
                alert("You Won...")
              
              }   else
              {
                totalscore=totalscore-1
                scorer.textContent="score:"+totalscore
                resultr.textContent="Wrong"
              }
              }
              </script>`,
    bgchangei: `
                <style>.card51 {
                        background: white;
                        padding: 15px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        width: 300px;
                        text-align: center;
                        margin: 30px;
                    }
                    .thumbnail-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;

                        margin-top: 10px;
                    }
                    .thumbnail {
                        width: 50px;
                        height: 50px;
                        margin: 5px;
                        border: 2px solid transparent;
                        border-radius: 2px;
                        cursor: pointer;
                    }
                    .thumbnail.selected {
                        border-color: blue;
                    }</style>
                <div class="card51">
                    <h3>Background Change</h3>
                    
                    <div class="thumbnail-container">
                        <img class="thumbnail selected" src="hcj/imb1.jpg" onclick="changeBackground(this, 'hcj/imb1.jpg')">
                        <img class="thumbnail" src="hcj/imb2.jpg" onclick="changeBackground(this, 'hcj/imb2.jpg')">
                        <img class="thumbnail" src="hcj/imb3.jpg" onclick="changeBackground(this, 'hcj/imb3.jpg')">
                        <img class="thumbnail" src="hcj/imb4.jpg" onclick="changeBackground(this, 'hcj/imb4.jpg')">
                        <img class="thumbnail" src="hcj/imb5.jpg" onclick="changeBackground(this, 'hcj/imb5.jpg')">
                        <img class="thumbnail" src="hcj/imb6.jpg" onclick="changeBackground(this, 'hcj/imb6.jpg')">
                        <img class="thumbnail" src="hcj/imb7.jpg" onclick="changeBackground(this, 'hcj/imb7.jpg')">
                        <img class="thumbnail" src="hcj/imb8.jpg" onclick="changeBackground(this, 'hcj/imb8.jpg')">
                        <img class="thumbnail" src="hcj/imb9.jpg" onclick="changeBackground(this, 'hcj/imb9.jpg')">
                        <img class="thumbnail" src="hcj/imb10.jpg" onclick="changeBackground(this, 'hcj/imb10.jpg')">
                        <img class="thumbnail" src="hcj/imb11.jpg" onclick="changeBackground(this, 'hcj/imb11.jpg')">
                        
                    </div>
                </div>
            
                <script>
                    function changeBackground(thumbnail, imagePath) {
                        document.body.style.backgroundImage = \`url('$\{imagePath}')\`;
                        document.querySelectorAll(".thumbnail").forEach(img => img.classList.remove("selected"));
                        thumbnail.classList.add("selected");
                    }
                </script>`,



}