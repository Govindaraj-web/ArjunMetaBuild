export const items2 = [
    { label: "TypesOfCss", program: "Typesofcss" },
    { label: "InLine-Css", program: "inlinecss" },
    { label: "Internal-Css", program: "Internalcss" },
    { label: "External-Css", program: "Externalcss" },
    { label: "Selectors", program: "Selectors" },
    { label: "Boxmodel", program: "Boxmodel" },
    { label: "Box1", program: "Box1" },
    { label: "Box2", program: "Box2" },
    { label: "Box3", program: "Box3" },
    { label: "Box4", program: "Box4" },
    { label: "Displaypro", program: "Displaypro" },
    { label: "Displaypro1", program: "Displaypro1" },
    { label: "Displaypro2", program: "Displaypro2" },
    { label: "Displaypro3", program: "Displaypro3" },
    { label: "Flex-Justify-C", program: "flexjustifyc" },
    { label: "Flexrow", program: "flexrow" },
    { label: "cssposition", program: "cssposition" },
    { label: "Mainvscross", program: "mainvscross" },
    { label: "Flexwrapp", program: "flexwrapp" },
    { label: "Flexgrows", program: "flexgrows" },
    { label: "Flexbasisgrow", program: "flexbasisgrow" },
    { label: "Flexsizee", program: "flexsizee" },
    { label: "Strezindex", program: "strezindex" },
    { label: "Postreab", program: "postreab" },
    { label: "Mediascr", program: "mediascr" },  
    { label: "Img_gallery", program: "imggallery" }  

];
export const programContent2 = {
    Typesofcss: ` <img src="hcj/Typesofcss.png" alt="" ">`,
    inlinecss: `
<div >        
             <h1 style="color: green; background-color: black;">Fruits</h1>
             <h1 style="background-color: red;">Aplle</h1>
             <h1 style="background-color: orange;">Orange</h1>
             <h1 style="background-color: yellow;">Mango</h1>
            </div>
  `,
    Internalcss: `

            <style>
                .instyle{
                    background-color: red;
                    width: 300px;
                    height: 100px;
                }
            </style>
            <div class="instyle">
                <h1 style="color: white;">Error Makes clever</h1>
            <p style="color: blue;">Bangalore KR Puram</p>
            </div>
                          
       
  `,
    Externalcss: `
        <style>
            .one{
            color:red;
        }
        #two{
            color: blue;
        
        }
        </style>
        <h1 class="one">Heading</h1>
        <h1 id="two">How are your</h1>
        <p> Fine</p>`,

    Selectors: `

            <!--ID Selector-->
            <h1 id="one">ID Selector</h1>
            
            
            <!--Class Selector-->
            <h1 class="two">Class Selector</h1>
            
            <!--Element Selector-->
            
            <h2 class="h2h">Element Selector</h2>
            <h2 class="h2h">How are you</h2>
            <h3 class="h3h">Fine</h3>
            
            
            <!--Universal Selector-->
            <div class="Universal-selec">
            <h1>Universal Selectors</h1>
            <h1>How are you</h1>
            <p>Fine</p>
        </div>
            
            <img class="imgsel" src="hcj/selectors.jpeg" alt="">
            
            <style> 
               .imgsel{
                   width: 100%;
                   height: auto;
                }
            /* ID Selector */
                #one{
                    color: red;
                    border: solid;
                } 
                /* Class Selector */
                .two{
                    color: blue;
                    border: solid;
                }
                /* Element Selector */
                .h2h{
                    color: green;
                    border: solid;
                }
                .h3h{
                    color: rgb(10, 156, 156);
                    border: solid;
                }
                /* Universal Selector */
                .Universal-selec{
                    color: blueviolet;
                    border: solid;
                }
                
            </style>`,

    Boxmodel: ` 
        <style>
            .boxh1{
                background-color: black;
                 color: white;
                 border-style: solid;
                 border-color: red;
                 border-width: 5px;
                 padding: 30px;
                 margin: 30px; 
            }   
        </style>  
        <h1 class="boxh1">Hello</h1>  
        <img src="cssboxs.png" alt="">`,

    Box1: `      
        <style>
             #box11di1{
                margin-top: 30px;
                background-color: red;
                height: 100px;
                width: 100px;
            }
            .box11div1{
                background-color: red;
                height: 100px;
                width: 100px;
            }
           
        </style>
        <div class="box11div1">  </div>
        
        <div id="box11di1">  </div>`,

    Box2: `
            <style>
                .box21div{
                    background-color: black;
                    color:white;
                    padding: 150px;
                    margin-right: 900px;
                    width: 300px;
                    height: 150px;
                }
            </style>
            <h1 class="box21div">Hi How are you, Hope you are doing good </h1>`,

    Box3: `<style>
            .box31div{   
                background-color: black;
                height: 250px;
                width:300px;     
                border-style: solid;
                border-color: red;
                border-width: 20px;
                margin: 50px;
            }
        </style>
        <div class="box31div">   </div> `,
    Box4: `        <style>
            .box41h1{
                background-color: black;
                color: yellow;
                padding: 20px;
                border-style: solid;
                padding-left: 50px;
                text-align: center;
            }
            .box41div{
                background-color: gray;
                margin-top: 50px;
                border-style: solid;
                border-width: 10px;
                border-color: black;
                padding: 10px;   
            }
        </style>   
        <h1 class="box41h1">Erro Makes Clever </h1>
        <div class="box41div"> 
            <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ut quae mollitia illum vitae veniam beatae tempore unde, nesciunt eveniet.</P>
        </div> `,
    Displaypro: ` <style>
                .dp1{
                    background-color: pink;
                }
                .dp2{
                    background-color: red;
                    display: block;
                }
                .dp3{
                    background-color: blue;
                    display: inline;
            
                }
                .dp4{
                    background-color: yellow;
                    display: inline-block;
                    width: 100px;
                }
                .dp5{
                    background-color: green;
                    color: black;
            
                }
               .proimg1{
               width:400px}
             
            </style>
            <span class="dp1">Element</span>
            <h1 class="dp2">Hello world</h1>
            <p class="dp3">Hi there</p>
            <div class="dp4">Bye</div>
            <h2 class="dp5">Clever Makes acadmey</h2>
            <img class="proimg1" src="hcj/Displaypro.jpg" alt="">`,
    Displaypro1: ` <style>
                .navbardis{
                    background-color: black;
                    color: white;
                    padding: 30px;  
                }
                .dpul,.dpulh1,.ilii {
                    display: inline;
                }
                .dpul{
                    margin-left: 45%;
                  
                }
                
            
            </style>
            <div class="navbardis">
                <h1 class="dpulh1">Navbar</h1>
                <ul class="dpul">
                    <li class="ilii">Home |</li>
                    <li class="ilii">About us |</li>
                    <li class="ilii">Contact us</li>
                </ul>
            </div>  `,
    Displaypro2: `<style>
            .disbox1{
                background-color: black;
                width: 150px;
                height: 100px;
                display: inline-block;
            }
            .disbox2{
                background-color: red;
                width: 150px;
                height: 100px;
                display: inline-block;
            }
            .dish1{
                background-color: yellow;
                display: inline;
            }
            .dish2{
                background-color: red;
                display: inline-block;   
            }
        </style>
        <div class="disbox1"> </div>
        <div class="disbox2"> </div>
        <h1 class="dish1"> Hi </h1>
        <h2 class="dish2"> Bye </h2> `,
    Displaypro3: ` <style>
                    .dispr3{
                           background-color: black;
                           color: white;
                           display: inline;
                           padding: 10px;
                           margin-right: 20px;
                       }
                </style>
                <ul>
                    <li class="dispr3">Home</li>
                    <li class="dispr3">About Us</li>
                    <li class="dispr3">Contact Us</li>
                </ul>`,
    flexjustifyc: ` <style>
                    .div-parent{
                        background-color: rgb(231, 82, 17);
                        display: flex;
                        justify-content: space-between;
                        padding: 10px;
                    }
                
                    .div-parentt{
                        background-color: rgba(7, 42, 219, 0.788);
                        display: flex;
                        justify-content: space-around;
                        padding: 10px;
                    }
                    .div-parenttt{
                        background-color: rgb(9, 195, 111);
                        display: flex;
                        justify-content: space-evenly;
                        padding: 10px;
                    }
                
                
                    .div-child{
                        background-color: black;
                        color: white;
                        padding: 5px;
                        margin: 2px;
                        
                    }
                    .zoom-in:hover{
                       cursor: pointer;
                        color:red;
                    }
                </style>
                <center><h1><u>Justifiy-content you can apply only when display is flex</u></h1></center>
                <h1 class="zoom-in"><u>Space-between</u></h1>
                    <div class="div-parent">
                        <h1 class="div-child">One</h1>
                        <h1 class="div-child">Two</h1>
                        <h1 class="div-child">Three</h1>
                    </div>
                    <h1 class="zoom-in"><u>Space-around</u></h1>
                    <div class="div-parentt">
                        <h1 class="div-child">One</h1>
                        <h1 class="div-child">Two</h1>
                        <h1 class="div-child">Three</h1>
                    </div>
                    <h1 class="zoom-in"><u>Space-evenly</u></h1>
                    <div class="div-parenttt">
                        <h1 class="div-child">One</h1>
                        <h1 class="div-child">Two</h1>
                        <h1 class="div-child">Three</h1>
                    </div>`,
    flexrow: ` <style>
                    .rflex{
                        background-color: greenyellow;
                        margin: 2px;
                        padding: 5px;
                    }
                    .rflexs{
                        display: flex;
                       /* Defult flex-direction: row; */
                    }
                    .cflex{
                        background-color: greenyellow;
                        margin: 2px;
                        padding: 5px;
                    }
                    .cflexs{
                        display: flex;
                        flex-direction: column;
                    }
                    .spaceh2{
                        margin-top: 50px;
                    }
                
                </style>
                <h2>Display: flex; </h2> <br>
                <h2 style="color: red; font-weight: bold;" >Defult flex-direction: row;</h2>
                <div class="rflexs">
                <h1 class="rflex">one</h1>
                <h1 class="rflex">Two</h1>
                <h1 class="rflex">Three</h1>
                </div>

                <h2 class="spaceh2">Display: flex; <br>flex-direction: column;</h2>
                <div class="cflexs">
                <h1 class="cflex">one</h1>
                <h1 class="cflex">Two</h1>
                <h1 class="cflex">Three</h1>
                </div>`,
    cssposition:`
    <img src="./hcj/css_pos.png" style="width:500px" >`,
    mainvscross: `<style>
                    .div66{
                        display: flex;
                        flex-direction: column;/* Main Axis is column */
                        background-color: greenyellow;
                        padding: 10px;
                        height: 400px;
                        align-items: center;
                    }
                    .div67{
                        margin-top: 3%;
                        display: flex;
                        flex-direction: row;/* Main Axis is row */
                        background-color: greenyellow;
                        padding: 10px;
                        height: 400px;
                        align-items: center; 
                    }
                    .ch1{
                        background-color: black;
                        color: white;
                        padding: 5px;
                        margin: 5px;
                        height: fit-content;
                        width: fit-content;
                    }
                    </style>
                    
                    <div class="div66">
                        <h1 class="ch1">one</h1>
                        <h1 class="ch1">Two</h1>
                        <h4>Now used flex-direction:column; align-items:center; whenever the main Axis is Column so cross Axis is Row <br>
                            You want left-center use align-items: center;
                            </h4>
                    </div>
                    <div class="div67">
                        <h1 class="ch1">one</h1>
                        <h1 class="ch1">Two</h1>
                        <h4>Now used flex-direction:row; align-items:center; whenever the main Axis is Row so cross Axis is Column<br>
                            You want top-center use justify-content: center; 
                       </h4>
                    </div>`,
    flexwrapp: `<style>
                    .h1-childf{
                        background-color: black;
                        color: white;
                        margin: 2px;
                        padding: 5px;
                    }
                    .div-parentf{
                        background-color: greenyellow;
                        display: flex;
                        flex-wrap: wrap;  /* Defult flex-wrap: nowrap; */
                        padding: 10px;
                        width: 300px;
                    }
                
                </style>
                <h2> flex-wrap: wrap; control the child items..</h2>
                <div class="div-parentf">
                <h1 class="h1-childf">one</h1>
                <h1 class="h1-childf">Two</h1>
                <h1 class="h1-childf">Three</h1>
                <h1 class="h1-childf">Four</h1>
                <h1 class="h1-childf">Five</h1>
                <h1 class="h1-childf">Six</h1>
                </div>`,
    flexgrows: ` <style>
                    .growdiv{
                        display: flex;
                        background-color: greenyellow;
                        padding: 10px;
                    }
                    .oneee{
                        background-color: black;
                        padding: 5px;
                        margin: 2px;
                        color: white;
                        flex-grow: 1;
                    }
                    .twooo{
                        background-color: black;
                        padding: 5px;
                        margin: 2px;
                        color: white;
                        flex-grow: 3;
                    }
                    .threeee{
                        background-color: black;
                        padding: 5px;
                        margin: 2px;
                        color: white;
                        flex-grow: 3;
                    }
                </style>
                <div class="growdiv">
                    <h1 class="oneee">One</h1>
                    <h1 class="twooo">Two</h1>
                    <h1 class="threeee">Three</h1>
                </div>`,
    flexbasisgrow: ` <style>
                    .flba{
                        display: flex;
                        background-color: greenyellow;
                        padding: 10px;
                        flex-wrap: wrap;
                    }
                    .flbas{
                        background-color: black;
                        color: white;
                        flex-basis: 20%;
                        margin: 5px;
                        flex-grow: 1;
                    }
                </style>
                <div class="flexbasisgr">
                <center> 
                    <h1 style="background-color:white; color: black;">
                    <u>flex-wrap with flex-basis</u></h1></center>
                <div class="flba">
                    <h1 class="flbas">One</h1>
                    <h1 class="flbas">Two</h1>
                    <h1 class="flbas">Three</h1>
                    <h1 class="flbas">Four</h1>
                    <h1 class="flbas">Five</h1>
                    <h1 class="flbas">Six</h1>
                    <h1 class="flbas">Seven</h1>
                    <h1 class="flbas">Eight</h1>
                </div>
            </div>`,
    flexsizee: `<div class="container04">
                    <div class="item04" id="one04"></div>
                    <div class="item04" id="two04"></div>
                    <div class="item04" id="one04"></div>
                    <div class="item04" id="two04"></div>
                </div>
                <style>
                    #one04{
                        background-color: rgb(224, 17, 52);
                        width: 100px;
                        height: 100px;
                        border: 1px;
                        border-style: solid;
                    }
                    #two04{
                        background-color: white;
                        width: 100px;
                        height: 100px;
                        border: 1px;    
                        border-style: solid;
                    }
                    .item04{
                        margin: 10px;
                        padding: 20px;
                    }
                    .container04{
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .item04{
                        flex-grow: 1;
                        flex-basis: 200;
                    }
                </style>`,
    strezindex: ` <style>
                    .one123{
                        background-color: red;
                        height: 100px;
                        width: 100px;
                        margin: 5px;
                        position: static; 
                        /* position: static 
                        (default)in the CSS position */
                        /* You can't use top:50px,
                        bottom,left,right also z-index*/         
                    }
                    .two123{
                        background-color:black;
                        height: 100px;
                        width: 100px;
                        margin: 5px;
                        position: relative;
                        /* position: relative */
                        /* You can use top:50px,
                        bottom,left,right also z-index*/  
                        left: 50px;
                        top: 50px;
                        z-index: 3; 
                        /* which z-index value high 
                        that div will show top */
                    }
                    .three123{
                        background-color:yellow;
                        height: 100px;
                        width: 100px;
                        margin: 5px;
                        position: relative;
                        z-index: 2;
                    }
                </style>
                <div class="one123"></div>
                <div class="two123"></div>
                <div class="three123"></div>`,
    postreab: `<style>
                    .outbox40{
                        margin-top: 200px;
                        margin-left: 100px;
                        border: solid black 2px;
                        width: 300px;
                        height: 300px;
                        /* Defult postion: static */
                    }
                    .h1040{
                        position: relative; 
                        top: 100px;
                        left: 300px; 
                        /* h1 text will go out box */
                    
                    }
                
                    .inbox40{
                        margin-top: 200px;
                        margin-left: 100px;
                        border: solid black 2px;
                        width: 300px;
                        height: 300px;
                        position: relative;
                    }
                    .h2040{
                        position: absolute;
                        left: 50px;
                        top: 50px;
                    }
                    </style>
                    
                    <div class="outbox40">
                        <h1 class="h1040">Postion Parent-Static and Child-Relative</h1>
                    </div>
                    <h2 style="color: red; margin-left: 100px;">You can't control the position inside the box</h2>
                    
                    <!--Box inside the text position-->
                    <div class="inbox40">
                        <h1 class="h2040">Postion Parent-Relative and child-Absolute</h1>
                    </div>
                    <h2 style="color: red; margin-left: 100px;">You can control the position inside the box</h2>
                    <h3 style="color: green; margin-left: 100px;">Absolute means take full screen left,right,top,bottom</h3>`,
    mediascr: ` <style>
                    /* Media query with Max-width */
                    .one122{
                        background-color: black;
                        color: white;
                        height: 100px;
                    }
                    @media screen and (max-width:900px) {
                        .one122{
                            background-color: blue;
                        }
                    }
                    @media screen and (max-width:600px) {
                        .one122{
                            background-color: green;
                        }
                    }
                
                    /* Media query with Min-width */
                    .two122{
                        background-color: black;
                        color: white;
                        height: 100px;
                
                    }
                    @media screen and (min-width:600px) {
                        .two122{
                            background-color: green;
                        }
                    }
                    @media screen and (min-width:900px) {
                        .two122{
                            background-color: blue;
                        }
                    }
                    
                    /* Media query with Print colors */
                    .clrch{
                        color: red;
                    }
                    @media print{
                        .clrch{
                            color: blue;
                        }
                    }
                    @media print and (orientation:landscape){
                        .clrch{
                            color:yellow
                        }
                    }
                
                </style>
                <div class="one122">
                    <h3>Media query with Max-width</h3>
                    
                </div>
                <div class="two122">
                <h2>Media query with Min-width</h2>
                </div>
                
                <h1 class="clrch">Printer color changed when you  ctrl+p and landscape print </h1>`,
                imggallery:`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,
        wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,
        900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
    <div>
        <h1 class="titlebar">Image Gallery</h1>

        <!--Flex container-->
        <div class="container">
            <div>
                <img src="https://picsum.photos/200/200/?animal?1" alt="Random Image">

                <h2>Lion</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200?animals" alt="Grayscale Image">
                <h2>cat</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200/?animal?2" alt="Random Image">

                <h2>Dear</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200/?animal?3" alt="Random Image">
                <h2>Giraffe</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200?animals?2" alt="Grayscale Image">
                <h2>Goat</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200?animals?3" alt="Grayscale Image">
                <h2>Dog</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200/?animal?4" alt="Random Image">
                <h2>Elephant</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div>
                <img src="https://picsum.photos/200/200?animals?4" alt="Grayscale Image">
                <h2>Tiger</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>


        </div>
    </div>

    <style>
      

        body {
            font-family: 'Poppins', sans-serif;
            background-color: darkmagenta;
           
        }

        .titlebar {
            color: white;
            text-align: center;
            padding: 10px;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
           
        }

        .container div {
            width: 200px;
            color: white;
            margin: 10px;
            flex-basis: 20%;
        }
    </style>
</body>`
    


};


