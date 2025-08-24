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
    { label: "bgcolorchange", program: "bgcolorchange" },
    { label: "textcolorchange", program: "textcolorchange" },
    { label: "showhidetext", program: "showhidetext" },
    { label: "TodoList", program: "todo" },
    { label: "Counter", program: "counterfun" },
    { label: "Toggle", program: "togglebtn" },
    { label: "slideimage", program: "slideimage" },
    { label: "Navbar_simple", program: "navbar1" },
    { label: "Student_resutl", program: "studentresutl" },




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
bgcolorchange: `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background Color</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}

h1 {
    color: #333;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}


    </style>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <button id="colorButton">Change Background Color</button>

    <script>
        document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

    </script>
</body>
</html>`,
    textcolorchange: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Color</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}
button {
    padding: 10px 20px;
    font-size: 16px;
}

    </style>
</head>
<body>
    <h1 id="text">Change my color!</h1>
    <button id="colorButton">Change Color</button>
    <script>
        document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('text').style.color = randomColor;
});

    </script>
</body>
</html>
`,
 showhidetext:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show/Hide Text</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}
button {
    padding: 10px 20px;
    font-size: 16px;
}

    </style>
</head>
<body>
    <button id="toggleButton">Show/Hide Text</button>
    <p id="text" style="display: none;">This is some text.</p>
    <script>
        document.getElementById('toggleButton').addEventListener('click', function() {
    const text = document.getElementById('text');
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
});

    </script>
</body>
</html>
`, 
todo:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }

        input {
            margin: 10px;
            padding: 5px;
            font-size: 16px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin: 5px 0;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="New Task">
    <button id="addButton">Add Task</button>
    <ul id="taskList"></ul>
    <script>
        document.getElementById('addButton').addEventListener('click', function () {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');

            if (taskInput.value !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = taskInput.value;
                taskList.appendChild(listItem); //The newly created list item (listItem) is appended to the taskList (the unordered list).
                taskInput.value = ''; //clearing the input field for the next task entry
            }
        });

    </script>
</body>

</html>`,
counterfun:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 0 10px;
        }

        span {
            font-size: 24px;
            margin: 0 20px;
        }
    </style>
</head>

<body>
    <button id="decrement">-</button>
    <span id="counter">0</span>
    <button id="increment">+</button>
    <script>
        let count = 0;
        const counterDisplay = document.getElementById('counter');

        document.getElementById('increment').addEventListener('click', function () {
            count++;
            counterDisplay.textContent = count;
        });

        document.getElementById('decrement').addEventListener('click', function () {
            count--;
            counterDisplay.textContent = count;
        });

    </script>
</body>

</html>`,
togglebtn:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Light/Dark Mode</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: white;
            color: black;
            transition: background-color 0.3s, color 0.3s;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
        }

        body.dark-mode {
            background-color: black;
            color: white;
        }
    </style>
</head>

<body>
    <button id="toggleMode">Toggle Mode</button>
    <script>
        document.getElementById('toggleMode').addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });

    </script>
</body>

</html>`,
slideimage:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #282c34;
        }

        .slider-container {
            position: relative;
            max-width: 800px;
        }

        .slider img {
            width: 100%;
            border-radius: 10px;
        }

        button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
        }

        button:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        .prev {
            left: 10px;
        }

        .next {
            right: 10px;
        }
    </style>
</head>

<body>
    
    <div class="slider-container">
        <div class="slider">
            <img id="slide-image" src="image1.jpg" alt="Slide Image">
        </div>
        <button class="prev" onclick="prevImage()">❮</button>
        <button class="next" onclick="nextImage()">❯</button>
    </div>

    <script>
        const images = [
            './hcj/image1.jfif',
            './hcj/image2.jfif',
            './hcj/image3.jfif',
            './hcj/image4.jfif',
            './hcj/image5.jfif'
        ];

        let currentIndex = 0;

        function showImage(index) {
            const imageElement = document.getElementById('slide-image');
            imageElement.src = images[index];
        }

        function prevImage() {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            showImage(currentIndex);
        }

        function nextImage() {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        }

        // Initial call to display the first image
        showImage(currentIndex);

    </script>
</body>

</html>`,
navbar1:`
<nav>
    <a href="#">Home</a>
    <a href="#">Product</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>
<style>
    nav{
        background-color: white;
        display: flex;
        justify-content: space-between;
        width: 360px;
        padding: 5px;
        border-radius: 22px;
        box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.3);
    }
    nav>a{
        text-decoration: none;
        color: black;
        padding: 8px 16px;
    }
    nav>a:hover{
        background-color: skyblue;
        border-radius: 22px;
    }
</style>

`,
studentresutl:`
<html>

<head>
    <title>Student</title>
</head>

<body>
    <center>
        <h1>Student Result</h1>
        <input type="number" id="marks" onkeyup="gradd()">
        <input type="checkbox" id="yesorno" onchange="gradd()" style="display:none;">College Student
        <p id="grades">Grade?</p>
    </center>
    <script>
        function gradd() {
            let student = document.getElementById("marks").value;
            let grade = document.getElementById("grades");
            let collegeCheckbox = document.getElementById("yesorno");

            if(student >= 100) {
                grade.textContent = "You entered a wrong mark";
                collegeCheckbox.style.display = "none";
            } else if (student >= 90) {
                grade.textContent = "Grade: A";
                collegeCheckbox.style.display = "none";
            } else if (student >= 70) {
                grade.textContent = "Grade: B";
                collegeCheckbox.style.display = "none";
            } else if (student >= 60) {
                grade.textContent = "Grade: C";
                collegeCheckbox.style.display = "none";
            } else if (student >= 50) {
                grade.textContent = "Grade: D";
                collegeCheckbox.style.display = "none";
            } else {
                collegeCheckbox.style.display = "inline";
                grade.textContent = "Fail";
            }
        }

        document.getElementById("yesorno").addEventListener("change", function() {
            if (this.checked) {
                document.getElementById("grades").textContent = "RA";
            } else {
                gradd(); // Update grade based on the input value if checkbox is unchecked
            }
        });
    </script>
</body>

</html>
`




}