export const items5 = [
    { label: "border_radius", program: "borderradius" },
    { label: "gray_scale_img", program: "grayscaleimg" },
    { label: "Zoom_eff", program: "Zoomeff" },
    { label: "EventListener_btn", program: "EventListenerbtn" },
    { label: "Popupfun", program: "Popupfun" },
    { label: "PopupEventLi", program: "PopupEventLi" },
    { label: "MultiScreen", program: "MultiScreen" },
   



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
        grayscaleimg:`
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
        Zoomeff:`
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
        EventListenerbtn:`
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
        Popupfun:`
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
        PopupEventLi:`
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
      MultiScreen:`
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

}