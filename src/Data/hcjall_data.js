export const items5 = [
    { label: "border_radius", program: "borderradius" },
    { label: "gray_scale_img", program: "grayscaleimg" },
    { label: "Zoom_eff", program: "Zoomeff" },
    { label: "EventListener_btn", program: "EventListenerbtn" },
    { label: "Popupfun", program: "Popupfun" },
    { label: "PopupEventLi", program: "PopupEventLi" },
    { label: "MultiScreen", program: "MultiScreen" },
    { label: "ContactForm", program: "contactform" },
    { label: "timee", program: "timee" },
    { label: "Navbar_res", program: "Navbarres" },
    { label: "Tab_nav3", program: "tabnav3" },
    { label: "Light_on_off", program: "lightonoff" },
    { label: "Login_page", program: "loginpage1" },
    { label: "Search_1", program: "search1" },
    { label: "Search_2", program: "search2" },
    { label: "Stopwatch", program: "stopwatch" },
    { label: "Weather_app", program: "weatherapp" },
    { label: "Choose_correct", program: "choosecorrect" },

];

export const programContent5 = {
    borderradius: `  
                <div class="main-frameko">
                <div class="bro-ok" id="onew"><p>border-radius: <br> none; </p> </div>
                <div class="bro-ok" id="twow"><p>border-radius: <br> 32px;</p></div>
                <div class="bro-ok" id="three"><p>border-radius: <br> 32px  64px;</p></div>
                <div class="bro-ok" id="four"><p>border-radius: <br> 64px 96px 128px 32px;</p></div>
                <div class="bro-ok" id="five"><p>border-radius: <br> 50%;</p></div>
                <div class="bro-ok" id="six"><p>border-radius: <br> 10px 100px / 120px 100px;</p></div>
                </div>
            
                <style>      
            .main-frameko{
                    width: 40%;
                    height: 95%;
                    display: flex;
                    flex-direction: column;
                    background-color: black;
                    align-items: center;
                    font-size: 25px;
                    margin: 5%;
                  }
            
             .bro-ok{
                    background-color: yellow;
                        width: 210px;
                        height: 140px;
                        display: inline-block;
                        text-align: center;
                        margin-top: 20px;
            
                  }
                    #onew{
                        border-radius: none;   
                    }
                    #twow{
                        border-radius: 32px;          
                    }
                    #three{
                        border-radius: 32px  64px;
                    }
                    #four{
                        border-radius: 64px 96px 128px 32px;        
                    }
                    #five{
                        border-radius: 50%;      
                    }
                    #six{
                        border-radius: 10px 100px / 120px 100px;        
                    }     
                </style>`,
    grayscaleimg: `
                <div class="img-boxg">
                <img class="grgimg" src="./hcj/grayimg.jpg" alt="">
                </div>
                <style>
                    .img-boxg{
                        padding: 20px;
                    }
                    .grgimg{
                        filter: grayscale(100%);
                    }
                    .grgimg:hover{
                        filter: grayscale(0%);
                    }
                </style>`,
    Zoomeff: `
                <div class="zoome">
                <img class="zoogimg" src="./hcj/zoomimg.jpeg" alt="">
                </div>
                
                <style>
                    .zoome{
                        padding: 8%;
                    }
                    .zoogimg{
                        max-width: 20%;
                        max-height: 20%;
                    }
                    .zoogimg:hover{
                        transform: scale(1.4);
                    }
                </style>
        `,
    EventListenerbtn: `
                <button id="btng" style="background-color: aquamarine; border-radius: 20%; border: solid;">Show Event</button>
                // <script>
                //     var buttong=document.getElementById("btng")
                    
                // // Anonymous funciton ( wihtout extra name like this add() ) 
                //     buttong.addEventListener("click", function(){
                //         alert("Hello")
                //     })
                //     buttong.addEventListener("mouseover", function(){
                //         alert("mouse over")
                //     })
                //     buttong.addEventListener("mouseleave", function(){
                //         alert("Mouse leave")
                //     })
                //     buttong.addEventListener("mouseenter",function(){
                //         alert("Mouse center")
                //     })
                    
                // </script>`,
    Popupfun: `
             <style>
                .overlayr{
                    background-color: black;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    opacity: 0.8;
                    z-index: 1;
                    display: none;
                }
                .popupboxr{
                    position: absolute;
                    z-index: 2;
                    background-color: white;
                    color: black;
                    width: 40%;
                    padding: 20px;
                    border-radius: 10px;
                    left: 30%;
                    display: none;
                     
                }
            </style>
            
            <button onclick="showr()" 
            style="background-color: rgb(85, 182, 150); border-radius: 20%; border: solid;">Show</button>
            <div class="overlayr"></div>
            <div class="popupboxr">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Error eveniet et voluptate rem voluptatem animi culpa 
                sequi molestiae tempora quis.</p>
            <button onclick="closepopupr()" 
            style="background-color: rgb(19, 105, 77); border-radius: 20%; border: solid;">Close</button>
            </div>
            <script>
                //popup overlay & popup box
                var popupoverlayr=document.querySelector(".overlayr")
                var popupboxr=document.querySelector(".popupboxr")
                function showr()
                {
                    popupboxr.style.display="block"
                    popupoverlayr.style.display="block"
                }
                function closepopupr()
                {
                    popupboxr.style.display="none"
                    popupoverlayr.style.display="none"
                }
            </script>  `,
    PopupEventLi: `
             <style>
                .overlayb{
                       background-color: black;
                       opacity: 0.8;
                       height: 100%;
                       width: 100%;
                       z-index: 1;
                       position: absolute;
                       left: 0;
                       top: 0;
                       display: none;     
                   }
                   .popupmsgb{
                       background-color: white;
                       top:10%;
                       left: 10%;
                       text-align: center;
                       z-index: 2;
                       padding: 10px;
                       position: absolute;
                       display: none;
                   }
               </style>
               <button id="addbuttonb" 
               style="background-color: rgb(200, 32, 212); border-radius: 20%; border: solid;">Show</button>
               <div class="overlayb">
               </div>
               <div class="popupmsgb">
                   <h1>Story</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                       Cum, possimus! Voluptas modi adipisci laudantium alias
                        nihil harum at tempora ullam.</p>
                   <button id="closepopupb" 
                   style="background-color: rgb(134, 7, 134); border-radius: 20%; border: solid;">Close</button>
               </div>
               <script>
               //addEventListener function below
               //select popupmsg, addbutton
               var addbuttonb=document.getElementById("addbuttonb")
               var popupmsgb=document.querySelector(".popupmsgb")
               var overlayb=document.querySelector(".overlayb")
               addbuttonb.addEventListener("click",function(){
                   popupmsgb.style.display="block"
                   overlayb.style.display="block"
               })
               var closepopupb=document.getElementById("closepopupb")
               closepopupb.addEventListener("click",function(){
                   popupmsgb.style.display="none"
                   overlayb.style.display="none"
               })
               </script>
                
      `,
    MultiScreen: `
                 <button onclick="showsram('proggg')"  
                 style="background-color: rgba(13, 56, 228, 0.115); 
                 border-radius: 5%; border: solid;">Program One</button>
                <button onclick="showsram('prog2g')" 
                style="background-color:  rgba(149, 201, 28, 0.115); 
                border-radius: 5%; border: solid;">Program Two</button>
                
                <!-- Screen -->
                <div class="show-progg">
                  <div id="proggg" style="display: none;">
                    <!-- Content for prog1 -->
                    <h1>Program 1 Content</h1>
                    <p>This is the content for Program 1.</p>
                  </div>
                
                  
                  <div id="prog2g" style="display: none;">
                    <!-- Content for prog2 -->
                    <h1>Program 2 Content</h1>
                    <p>This is the content for Program 2.</p>
                  </div>
                </div>
                
                <script>
                  function showsram(program) {
                    // Hide all program sections
                    var programSections = document.querySelectorAll('.show-progg > div');
                    programSections.forEach(function(section) {
                      section.style.display = 'none';
                    });
                
                    // Show the selected program section
                    var selectedProgram = document.getElementById(program);
                    if (selectedProgram) {
                      selectedProgram.style.display = 'block';
                    }
                  }
                </script>`,
    contactform:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
* {
  margin: 0px;
  padding: 0px;
  font-family: "Poppins", sans-serif;
}

.container {
  background-color: #c164be;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
}

form {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2vw 4vw;
  width: 60%;
  max-width: 600px;
  border-radius: 10px;
}

form h2 {
  text-align: center;
  color: #e65b00;
  margin-bottom: 20px;
}

form input, textarea {
  border: 0;
  margin: 10px 0px;
  padding: 20px;
  outline: none;
  background: #f5f5f5;
  font-size: 16px;
  border-radius: 10px;
  resize: none;
}

form button {
  background: white;
  color: #e65b00;
  border: 1px solid #e65b00;
  padding: 15px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  margin: 20px auto 0;
  border-radius: 30px;
  transition: all .5s ease-in;
}

form button:hover {
  border: 1px solid #e65b00;
  background: #e65b00;
  color: white;
}
    </style>
</head>
<body>

    <div class="container">
        <form>
            <h2> GET IN TOUCH </h2>
            <input type="text" id="name" placeholder="Enter Your Name" required>
            <input type="email" id="email" placeholder="Enter Your Email" required>
            <input type="phone" id="phone" placeholder="Enter Your Phone Number" required>
            <input type="text" id="coupon" placeholder="Enter Coupen Code" required>

            <textarea id="message" rows="4" placeholder="Write Something"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
    <!-- Contact form using HTML and CSS by raju_webdev -->
</body>
</html>`,
timee:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #282c34;
            color: #61dafb;
        }

        .clock-container {
            text-align: center;
        }

        #clock {
            font-size: 3em;
        }
    </style>


</head>

<body>
    
    <div class="clock-container">
        <div id="clock"></div>
    </div>


    <script>
        function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const timeString = \`$\{hours}:$\{minutes}:$\{seconds} $\{ampm}\`;
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately

    </script>


</body>

</html>`,
Navbarres:`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu:wght@300;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
}

.navbar {
    background-color: rgb(22, 7, 36);
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 5rem;
}

.left h1 {
    font-size: 2rem;
    cursor: pointer;
}

.checkBtn {
    display: none;
}

#check {
    display: none;
}

.checkBtn {
    cursor: pointer;
    font-size: 10px;
    float: right;
    color: #ed1e79;
    line-height: 80px;
}

.right ul {
    display: flex;
    list-style: none;
}

.right ul li a {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
    transition: all 1s;
}

.right ul li a:hover {
    background-color: #fff;
    border-radius: 7px;
    color: rgb(22, 7, 36);
}

@media screen and (max-width:600px) {
    .list {
        width: 100%;
        height: 100vh;
        background-color: rgb(22, 7, 36);
        text-align: center;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 4rem;
        left: 100%;
        transition: all 1s;
    }

    #check {
        display: none;
    }

    .checkBtn {
        display: block;
    }

    #check:checked~ul {
        left: 0%;
    } 

}
    </style>
</head>

<body>
    <nav class="navbar">
        <div class="left">
            <h1>Navbar</h1>
        </div>
        <div class="right">
            <input type="checkbox" id="check">
            <label for="check" class="checkBtn">
                <i class="fa fa-bars"></i>  
            </label>
            <ul class="list">           
                <li><a href="#">Home</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </nav>
</body>
</html>`,
tabnav3:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tab Navigation</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.tab-container {
    width: 80%;
    margin: 50px auto;
    background-color: #fff;  
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.tab-buttons {
    display: flex;
    justify-content: space-around;
    background-color: #61dafb;
    border-bottom: 1px solid #ccc;
}

.tab-buttons button {
    background-color: inherit;
    border: none;
    outline: none;
    padding: 14px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1em;
}

.tab-buttons button:hover {
    background-color: #21a1f1;
}

.tab-buttons button.active {
    background-color: #282c34;
    color: #61dafb;
}

.tab-content {
    padding: 20px;
}

.tab-pane {
    display: none;
}

    </style>
</head>
<body>
    <div class="tab-container">
        <div class="tab-buttons">
            <button class="tab-link active" onclick="openTab(event, 'Tab1')">Tab 1</button>
            <button class="tab-link" onclick="openTab(event, 'Tab2')">Tab 2</button>
            <button class="tab-link" onclick="openTab(event, 'Tab3')">Tab 3</button>
        </div>
        <div class="tab-content">
            <div id="Tab1" class="tab-pane" style="display: block;">
                <h2>Tab 1 Content</h2>
                <p>This is the content of Tab 1.</p>
            </div>
            <div id="Tab2" class="tab-pane">
                <h2>Tab 2 Content</h2>
                <p>This is the content of Tab 2.</p>
            </div>
            <div id="Tab3" class="tab-pane">
                <h2>Tab 3 Content</h2>
                <p>This is the content of Tab 3.</p>
            </div>
        </div>
    </div>
    <script>
        function openTab(event, tabName) {
    // Hide all tab content
    const tabPanes = document.getElementsByClassName('tab-pane');
    for (let i = 0; i < tabPanes.length; i++) {
        tabPanes[i].style.display = 'none';
    }

    // Remove 'active' class from all tab links
    const tabLinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    // Show the current tab content and add 'active' class to the clicked tab link
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

// Show the first tab content by default
document.getElementById('Tab1').style.display = 'block';

    </script>
</body>
</html>
`,
lightonoff:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Light on and off</title>
</head>
<body>
    <img src="./hcj/off.jpg" alt="" width="250px" height="250px">

    <script>
        var img = document.querySelector('img');

        img.onclick=function(){
            var srcc=img.getAttribute("src");
            if(srcc==="./hcj/off.jpg"){
                img.setAttribute("src","./hcj/on.jpg")
            }else{
                img.setAttribute("src","./hcj/off.jpg")
            }
        }
    </script>
</body>

</html>`,
loginpage1:`

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Ubuntu', sans-serif;
        }

        body {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #8fd5d5;
        }

        .container {
            background-color: white;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem 3rem;
            border-radius: .5rem;
        }

        .container form {
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
        }

        .container h2 {
            font-size: 1.5rem;
            margin: 2rem;
        }

        .container form input {
            font-weight: lighter;
            border: none;
        }

        input:focus {
            outline: none;
        }

        .container form .username {
            margin-bottom: .7rem;
        }

        .container form i {
            font-size: 1rem;
            margin-right: 0.5rem;
        }

        .container form input {
            font-size: 1rem;
        }

        .userArea {
            margin-bottom: .7rem;
        }

        .container form .forgotPassword {
            position: absolute;
            right: 0rem;
            cursor: pointer;
            bottom: 17rem;
            color: rgb(113, 119, 124);
            font-size: .8rem;
        }

        .inputDiv {
            display: flex;
            flex-direction: column;
            padding-bottom: .8rem;
        }

        .formBottom {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .formBottom ul {
            margin-bottom: 3rem;
        }

        .formBottom p {
            margin-bottom: .5rem;
            font-size: .8rem;
        }

        .flexUl {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .flexUl a {
            text-decoration: none;
        }

        .flexUl li {
            list-style: none;
        }

        .flexUl li i {
            height: 35px;
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .fa-brands {
            margin-top: 1rem;
            cursor: pointer;
            color: white;
            padding: 0.5rem;
            border-radius: 50%;
        }

        .fa-google {
            background-color: orangered;
        }

        .fa-twitter {
            background-color: rgb(43, 71, 228);
        }

        .fa-facebook-f {
            background-color: darkblue;
        }


        /* Utility Classes */
        .t-center {
            text-align: center;
        }

        .btn {
            border: none;
            border-radius: 0.8rem;
            cursor: pointer;
            padding: 0.7rem 0.8rem;
            background: linear-gradient(to right, #8d68c5, #e34494);
            margin-top: 2rem;
            margin-bottom: 3rem;
            color: #fff;
        }

        #signUp {
            font-size: 1rem;
            cursor: pointer;
        }

        #signUp:hover {
            color: #8d68c5;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2 class="t-center">Login</h2>
        <form action="">
            <div class="inputDiv">
                <label for="name" class="username">Username</label>
                <div class="userArea">
                    <i class="fa-solid fa-user"></i><input type="text" name="name" id="name"
                        placeholder="Type your username">
                </div>
                <hr>
            </div>
            
            <div class="inputDiv">
                <label for="password" class="username">Password</label>
                <div class="userArea">
                    <i class="fa-solid fa-key"></i><input type="password" name="password" id="password"
                        placeholder="Type your password">
                </div>
                <hr>
            </div>

            <span class="forgotPassword">Forgot password?</span>

            <button class="btn">Login</button>

            <div class="formBottom">
                <p>Or Sign Up using</p>
                <ul class="flexUl">
                    <a href="https://www.faceboook.com" target="_blank">
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <li><i class="fa-brands fa-twitter"></i></li>
                    </a>
                    <a href="https://www.google.com" target="_blank">
                        <li><i class="fa-brands fa-google"></i></li>
                    </a>
                </ul>

                <p class="signUp">Or Sign Up using</p>
                <p id="signUp">SIGN UP</p>

            </div>
        </form>
    </div>
    <!-- Login Form using HTML and CSS by raju_webdev -->
</body>

</html>`,
search1:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autocomplete Searhbar</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            box-sizing: border-box;
        }

        body {
            background: #262a2f;
            color: #333;
        }

        .search-box {
            width: 600px;
            background: #fff;
            margin: 200px auto 0;
            border-radius: 5px;
        }

        .row {
            display: flex;
            align-items: center;
            padding: 10px 20px;

        }

        input {
            flex: 1;
            height: 50px;
            background: transparent;
            border: 0;
            outline: 0;
            font-size: 18px;
            color: #333;

        }

        button {
            background: transparent;
            border: 0;
            outline: 0;
        }

        button .fa {
            width: 25px;
            color: #555;
            font-size: 22px;
            cursor: pointer;
        }

        ::placeholder {
            color: #555;
        }

        .result-box ul {
            border-top: 1px solid #999;
            padding: 15px 10px;
        }

        .result-box ul li {
            list-style: none;
            border-radius: 3px;
            padding: 15px 10px;
            cursor: pointer;
        }

        .result-box ul li:hover {
            background-color: #e9f3ff;
        }

        .result-box {
            max-height: 300px;
            overflow-y: scroll;
        }
    </style>
</head>

<body>

    <div class="search-box">
        <div class="row">
            <input type="text" id="input-box" placeholder="Search anything" autocomplete="off">
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div class="result-box">

        </div>
    </div>
    <script>
        let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'javaScript',
    'Where to learn coding online',
    'where to learn web design',
    'How to create a website'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length) {
        resultsBox.innerHTML = '';
    }
};

function display(result) {
    if(result.length > 0) {
        const content = result.map((list) => {
            return "<li onclick=selectInput(this)>" + list + "</li>";
        });
        resultsBox.innerHTML = "<ul>" + content.join(' ') + "</ul>";
    } else {
        resultsBox.innerHTML = '';
    }
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

    </script>
</body>

</html>`,
search2:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search list item</title>

    <style>
        * {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
        body {
            margin: 100px;
            background: #262a2f;
            color: white;
        }
        .search {
            padding: 20px;
            text-align: center;
        }
        input {
            width: 40%;
            padding: 15px;
            border-radius: 30px;
            outline: none;
        }
        .list-items{
            margin-top: 2%;
            margin-left: 30%;
        }
        .list-item {
            padding: 10px;
        }
    </style>

</head>

<body>
    <div class="search">
        <input type="text" id="find" placeholder="Search here..." onkeyup="search()">
    </div>

    <div class="list-items">
        <div class="list-item"><h3>HTML</h3></div>
        <div class="list-item"><h3>CSS</h3></div>
        <div class="list-item"><h3>JavaScript</h3></div>
        <div class="list-item"><h3>Easy to learn</h3></div>
        <div class="list-item"><h3>Front-end Developer</h3></div>
        <div class="list-item"><h3>Where to learn coding online</h3></div>
        <div class="list-item"><h3>Where to learn web design</h3></div>
        <div class="list-item"><h3>How to create a website</h3></div>
        <div class="list-item"><h3>How do I create my own website?</h3></div>
        <div class="list-item"><h3>Can I create a website for free?</h3></div>
    </div>

    <script>
        function search() {
            let filter = document.getElementById("find").value.toUpperCase();
            let items = document.querySelectorAll(".list-item");

            for (let i = 0; i < items.length; i++) {
          
                let itemName = items[i].querySelector("h3").textContent.toUpperCase();

                if (itemName.indexOf(filter) > -1) {
                    items[i].style.display = "block"; // or any other appropriate display value
                } else {
                    items[i].style.display = "none";
                }
            }
        }
    </script>
</body>

</html>










<!--
.search {
    width: 400px;
    height: 20px;
    background-color: white;
    border-radius: 45px;
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 50px;
}

input {
    width: 440px;
    height: 40px;
    align-items: center;
    border: none;
    outline: none;
    color: #333;
    font-size: 18px;
}-->`,
stopwatch:`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #282c34;
            color: #61dafb;
        }

        .stopwatch-container {
            text-align: center;
        }

        #stopwatch {
            font-size: 3em;
            margin-bottom: 20px;
        }

        .buttons button {
            padding: 10px 20px;
            margin: 5px;
            font-size: 1em;
            cursor: pointer;
            border: none;
            background-color: #61dafb;
            color: #282c34;
            border-radius: 5px;
        }

        .buttons button:hover {
            background-color: #21a1f1;
        }
    </style>
</head>

<body>
    <div class="stopwatch-container">
        <div id="stopwatch">00:00:00</div>
        <div class="buttons">
            <button onclick="startStopwatch()">Start</button>
            <button onclick="stopStopwatch()">Stop</button>
            <button onclick="resetStopwatch()">Reset</button>
        </div>
    </div>
    <script>
        let startTime, interval, elapsedTime = 0;

        function updateStopwatch() {
            const now = new Date().getTime();
            const timeElapsed = elapsedTime + (now - startTime);
            const hours = String(Math.floor(timeElapsed / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((timeElapsed % (1000 * 60)) / 1000)).padStart(2, '0');
            document.getElementById('stopwatch').innerText = \`$\{hours}:$\{minutes}:$\{seconds}\`;
        }

        function startStopwatch() {
            if (!interval) {
                startTime = new Date().getTime();
                interval = setInterval(updateStopwatch, 1000);
            }
        }

        function stopStopwatch() {
            if (interval) {
                clearInterval(interval);
                elapsedTime += new Date().getTime() - startTime;
                interval = null;
            }
        }

        function resetStopwatch() {
            clearInterval(interval);
            interval = null;
            elapsedTime = 0;
            document.getElementById('stopwatch').innerText = '00:00:00';
        }

    </script>
</body>

</html>`,
weatherapp:`

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Weather App</title>
 <style>
 body {
  font-family: Arial;
  /* background-color: #e0f7fa; */
  background: url("./hcj/imb6.jpg");
  text-align: center;
  padding: 50px;
  
}
.container {
  background: white;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}
input, button {
  padding: 10px;
  margin: 10px 0;
  width: 80%;
}
.result {
  margin-top: 20px;
  font-size: 18px;
}
</style>
</head>
<body>
  <div class="container">
    <h1>Weather App</h1>
    <input type="text" id="city" placeholder="Enter city name" />
    <button onclick="getWeather()">Get Weather</button>
    <div id="result" class="result"></div>
  </div>
  <script>
  
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "fe7ba8019329d9b676e2f154eb748e85"; 

  const response = await fetch(
    \`https://api.openweathermap.org/data/2.5/weather?q=$\{city}&appid=$\{apiKey}&units=metric\`
  );

  const data = await response.json();

  const result = document.getElementById("result");

  if (data.cod === "404") {
    result.innerHTML = \`<p>City not found</p>\`;
  } else {
    result.innerHTML = \`
      <p><strong>City:</strong> $\{data.name}</p>
      <p><strong>Temperature:</strong> $\{data.main.temp}°C</p>
      <p><strong>Condition:</strong> $\{data.weather[0].main}</p>
    \`;
  }
}
</script>
</body>
</html>
`,
choosecorrect:`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz SP</title>
</head>
<body>
    <h1>1. Enna panra machi</h1>
    <ul>
        <li><input type="radio" name="question1" value="correct"> What are you doing?</li>
        <li><input type="radio" name="question1" value="incorrect"> What's up bro?</li>
    </ul>

    <h1>2. Nan veliyadenu irruka</h1>
    <ul>
        <li><input type="radio" name="question2" value="incorrect"> I'm not playing</li>
        <li><input type="radio" name="question2" value="correct"> I'm playing</li>
    </ul>

    <button onclick="checkAnswers()">Submit</button>
    
    <p id="result"></p>
    <div class="score">
        <p>Score:</p><p id="score">0/2</p>
        
    </div>

    <script>
        function checkAnswers() {
            const result = document.getElementById("result");
            const scoreDisplay = document.getElementById("score");

            // Select all radio buttons for each question
            const question1 = document.querySelector('input[name="question1"]:checked');
            const question2 = document.querySelector('input[name="question2"]:checked');

            // Initialize score
            let score = 0;

            // Check if answers are correct
            if (question1 && question1.value === "correct") {
                score++;
            }
            if (question2 && question2.value === "correct") {
                score++;
            }

            // Display the result
            result.textContent = score === 2 ? "All answers are correct!" : "Some answers are incorrect. Try again!";
            scoreDisplay.textContent = \`$\{score}/2\`;
        }
    </script>
</body>
</html>
`
   }