export const items3 = [
    { label: "Variables", program: "Variables" },
    { label: "Datatypes", program: "Datatypes" },
    { label: "Operators", program: "Operators" },
    { label: "Logical-Operator", program: "LogicalOperators" },
    { label: "Function", program: "Functiontype" },
    { label: "Parameters", program: "Parameters" },
    { label: "Functionpara", program: "Functionpara" },
    { label: "Funifcond", program: "Funifcond" },
    { label: "Resuablefun", program: "Resuablefun" },
    { label: "Ifelse", program: "Ifelse" },
    { label: "Elseif", program: "Elseif" },
    { label: "Nestedifelse", program: "Nestedifelse" },
    { label: "Forloop", program: "Forloop" },
    { label: "Forloop1", program: "Forloop1" },
    { label: "whileloop", program: "whileloop" },
    { label: "dowhile", program: "dowhile" },
    { label: "whilebreak", program: "whilebreak" },
    { label: "forcontinue", program: "forcontinue" },
    { label: "Ternaryopr", program: "Ternaryopr" },
    { label: "Switchcase", program: "Switchcase" },
    { label: "StringMethod", program: "StringMethod" },
    { label: "Strindex", program: "strindex" },
    { label: "Str-Math-includes", program: "StrMathinclude" },
    { label: "Str-Math-Split", program: "StrMathsplit" },
    { label: "Str-Math-Upperlower", program: "StrMathupperlower" },
    { label: "ChatAt", program: "StrMathChatAt" },
    { label: "MathSlice", program: "MathSlice" },
    { label: "NumMethod", program: "NumMethod" },
    { label: "NumisInt", program: "NumisInt" },
    { label: "NumparseInt", program: "NumparseInt" },
    { label: "NumparseFloat", program: "NumparseFloat" },
    { label: "Numtostring", program: "Numtostring" },
    { label: "Chaining", program: "Chaining" },
    { label: "NumisNan", program: "NumisNan" },
    { label: "Mathmethod", program: "Mathmethod" },
    { label: "Math-floor-random", program: "Mathfloorrandom" },
    { label: "Arraymeth", program: "Arraymeth" },
    { label: "Array-add-delete", program: "Arrayadddelete" },
    { label: "Array-add-delete1", program: "Arrayadddelete1" },
    { label: "Array-Splice", program: "ArrSplice" },
    { label: "Array-Join-Rev", program: "ArrJoinRev" },
    { label: "Array-Concat", program: "ArrConcat" },
    { label: "Array-Dimen", program: "ArrDimen" },
    { label: "Object", program: "Objects" },
    { label: "Object-inheritance", program: "Objectinheritance" },
    { label: "Object1", program: "Object1" },
    { label: "Object2", program: "Object2" },
    { label: "Classes1", program: "Classes1" },
    { label: "Classes2", program: "Classes2" },
    { label: "Classes3", program: "Classes3" },
    { label: "Classes4", program: "Classes4" },
    { label: "Classes5", program: "Classes5" },
    { label: "Classes6", program: "Classes6" },
    { label: "Classes7", program: "Classes7" },
   
    
   
];

export const programContent3 = {
    Variables: `// Variable Global scope and Global access
{
    var a=10
}
console.log(a)

{
    var a=10
    console.log(a)
}


// Let is Private access and Block scope
{
    let a = 10
    console.log(a) 

}


/* Constant variable is Once assigned a value, 
can't be reassigned */
{

const a=7 //Weekdays
// a=20 can be change is let & var only
console.log(a) 

}`,
Datatypes:`// String
var product="iphone15" // var product=iphone15 without double quotation is wrong
console.log(product)

// Number
console.log(typeof(10))
var a=10
console.log(a)

// Boolean
console.log(typeof(true))
var a=true
console.log(a)

//Null
console.log(typeof(null))
var a=null
console.log(a)


//Undefined
console.log(typeof(undefined))
var a
console.log(a)`,
Operators:`//Post Increment
var a=10
a++
console.log(a)

//Post Decrement
var a=10
a--
console.log(a)

//Pre Increment
var a=10
++a
console.log(a)

//Pre Decrement
var a=10
--a
console.log(a)`,
LogicalOperators:`// Logical AND && operator Ex: 1 
// One false between ambastor total statement false
// 1 * 1 * 1 = 1(t), 1 * 0 * 1 = 0(f)
console.log(true && true && true) 
console.log(true && false && false) 


// Logical OR || operator Ex: 1
// One true between or operator total statement true
// 0 + 0 + 1 = 1(t), 0 + 0 + 0 = 0(f)
console.log(false || false || true) 


// Logical Not! operator Ex: 1
// Exlamotry operator opposite Answer
console.log(!true) 
console.log(!false)`,
Functiontype:`//function called one mobile to know another mobile 
// Ex: 1
function hi()
{
    console.log("Hey Arjun")
}
hi()

// Ex: 2
function realme()
{
    console.log("This is Realme Phone")

}
function redmi()
{
    console.log("This is Redmi Phone")

}
function oppo()
{
    console.log("This is Oppo Phone")
}
realme()
realme()
oppo()

// Ex: 3
var factor="Vijay"
var fplayer="sachin"
var fmovie="Beast"
function favourite()
{
    console.log("favourite Actor:"+factor)
    console.log("favourite Player:"+fplayer)
    console.log("favourite Movie:"+fmovie)
}
favourite()`,
Parameters:`// Parameters Ex:1
function add(a,b)
{
    console.log(a+b)
}
add(10,20)

// Ex: 2

function area(l,b)
{
    var a=l*b
    console.log("Area is:"+a)
}
area(10,20)



// Return function Ex: 1

function myname()
{
    return "Arjun"
}
var a=myname()
console.log(a)

// Return function Ex: 2

function add(a,b)
{
    return (a+b)
}
var a=add(10,20)
console.log(a)`,
Functionpara:`//Funcitons

//Parameters not passing
function summ(){
    return 2+2;
}
console.log(summ(10,2));



//Parameters passed
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(10,2)) // You can call many times
console.log(sum(100,2))
console.log(sum(1,2))
console.log(sum(10,20))
`,
Funifcond:`

//parameters with if condition
function sum(num1,num2){
    console.log(num1);
    console.log(num2);
    if(num2 === undefined){
        return num1+num1;
    }
    return num1+num2;
}
console.log(sum(10,100))


`,
Resuablefun:`//Reusable code called function



//Subract the username from email
let gmail="insurancehub66@gmail.com"

console.log(gmail.slice(0,gmail.indexOf("@")))


//getuser name from email
function getUserNameFromEmail(email){
return (email.slice(0,email.indexOf("@")))
}
console.log(getUserNameFromEmail("insurancehub66@gmail.com"))
console.log(getUserNameFromEmail("bajajinsurance@gmail.com"))
console.log(getUserNameFromEmail("iciciinsurance@gmail.com"))



//Propercase (Frist letter only Uppercase)
function toProperCase(name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(toProperCase("arJuNa"))



//Function name store in one variable
const toProperCases=function (name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(toProperCases("gayaNtHiKa"))



//Without function decalre
const toProperCas = (name) =>{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
console.log(toProperCas("gaYaThRi"))
`,
Ifelse:`// If else condition Ex: 1
if(true)
{
    console.log("Its true")
}
else{
    console.log("Its false")
}

// Ex: 2

if(false)
{
    console.log("Its true")
}
else{
    console.log("Its false")
}

// Ex: 3
var rain=true // select false answer is Enjoy the sunshine
if (rain)
{
    console.log("Take an Umbrela")
}
else
{
    console.log("Enjoy the sunshine")
}`,
Elseif:`// Else if Ex: 1

//apply this number 60 & 80 you can see difference
var score= 40 
if(score<=50)
{
    console.log("You need to Improve")
}
else if(score>50 && score<=70)
{
    console.log("Good Job")
}
else if(score>70)
{
    console.log("Excellent Performance")
}`,
Nestedifelse:`let testScore = 40;
let grade;
let collegeStudent = false;

if(testScore>=90){
    grade="A"
}
else if(testScore>=80){
    grade="B"
}
else if(testScore>=70){
    grade="C"
}
else if(testScore>=60){
    grade="D"
}
else{ //Nested If-else
    if(collegeStudent){
        grade="RA"
    }else{
        grade="F"
    }
}
console.log(grade);
`,
Switchcase:`//Switch Statements

//Basic
switch (1) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;

    default:
        console.log("No Match");
}

//Level One
switch (Math.floor(Math.random()*4)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;

    default:
        console.log("No Match");
}



//Level Two
let player = "rock";
let computer = "paper"; // you change rock answer will be Tie!

switch (player) {
    case computer:
        console.log("Tie!");
        break;


        default:
            console.log("No Tie!");
}


//Level Three
let players = "rock";
// you change rock answer or paper you will see result other
let computers = "scissors"; 

switch (players) {
    case computers:
        console.log("Tie!");
        break;
        
        case "rock":
            if(computers === "scissors") {
                console.log("Player wins");
            }else
            { console.log("Computer wins");
        }
        break;
        
        default:
            console.log("No Tie!");
}`,

Forloop:`// For loop Statement 
// Ex: 1

for (count=1; count<=5; count=count+1)
{
    console.log("Arjun")
}

// Ex: 2 Add
for (count=1; count<=10; count=count+1)
{
    console.log(count)
}

// Ex: 3 Multiple 
for (count=1; count<=10; count=count+1)
{
    console.log(count+"x2="+count*2)
}

// Ex: 4 Revers order
for (count=10; count>=1; count=count-1)
{
    console.log(count)
}

// Ex: 5 Odd number

for (count=1; count<=10; count=count+2)
{
    console.log(count)
}`,
Forloop1:`//for while loop

/*
for(i=0; i<50;i++){
    console.log(i)
}
Answer is : 0 to 49 becuase i=0; i<50;
*/
for(i=1; i<=50;i++){
    console.log(i)
}




Ex:1
let name="Arjuna"
for(let i=0; i<=name.length;i++)
{
    console.log(name.charAt(i));
}

/*
Ex:2
let name="Arjuna"
for(let i=0; i<=name.length;i+=2)
{
    console.log(name.charAt(i));
}
*/
`,
whileloop:`//While loop
let i=1;
while(i<=50){
    console.log(i);
    i = i+1; //   i++;, i=i+2;, i=i+10
  
}


/*
let i=0;
while(i<50){
    console.log(i);
    i = i+1;
}
Answer is : 0 to 49 only Because i=0; while(i<50)
*/


/*
let i=1;
while(i<=50){
    console.log(i);
}


Answer is : continuously run the program finally crash your app without i=i=1;
*/


`,
dowhile:`//Do While loop

let i=50;
do{
    console.log(i);
    i=i+10;
}while(i<50)

// do while loop means one time inside conditon will run `,
whilebreak:`let i = 0;

while (i<6){
    if(i === 3){
        break; // 0 to 3 checked after value wouldn't check
    }
    i = i + 1;
}
console.log(i);

//Expected output: 3

//Loops



`,
forcontinue:`//EX:1
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) { 
    continue;  // 3 value doesn't show
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"



//EX:2
let textt = '';

for (let i = 0; i < 10; i++) {
  if (i === 6) {
    continue; // 6 value doesn't show
  }
  textt = textt + i;
}

console.log(textt);
// Expected output: "012345789"`,
Ternaryopr:`//Ternary Operators-1
let programmer = "I'm Programmer"; // You just type Let programmer only answer will be show other.
let respone = programmer
  ? "Your best Programmer"
  : "Improve your code Language";
console.log(respone);



//Ternary Operators-2
let testScore = 90; // change testscore will see different garde
let grade =
  testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : "D";
console.log(grade);




//Ternary Operators-3
let player = "paper";
let computer = "scissors"; //Change paper or earse the scissors
let result =
  player === computer
    ? "Tie"
    : player === "rock" && computer === "paper"
    ? "Computer wins!"
    : player === "paper" && computer === "scissors"
    ? "Computer wins!"
    : player === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "Player wins";
console.log(result);
`,
StringMethod:`//Strings
const myVariable = "Mathematics";
console.log(myVariable)

//lenth property 
console.log(myVariable.length)
console.log("Subscribe to our channel".length)


const myname = "Arjun"
console.log(myname.indexOf('jun')) //Ans: 2
console.log(myname.indexOf('Ar'))  //Ans: 0
console.log(myname.indexOf('ar'))  //Ans: -1
console.log(myname.indexOf('gov')) //Ans: -1


const myVar = "Mathematics";
console.log(myVar.includes("arjun")) // Ans: false
console.log(myVar.includes("mat"))  // Ans: true
console.log(myVar.includes("ti"))  // Ans: true


const myVari = "Mathematics";
console.log(myVari.split("e"))                
console.log("Subscribe to Arjun".split(" "))  
console.log("Earn,Grow,Give".split(","))      
console.log("Earn,Grow,Give".split(""))       
console.log(myVari.split(""))                 


const myVaria = "Mathematics";
console.log(myVaria.charAt(0)) //Ans: M
console.log(myVaria.charAt(6)) //Ans: a


const myVariab = "Mathematics";
console.log(myVariab.slice(5,8)) //Ans: mat
console.log(myVariab.slice(5,2)) 


const myVariabl = "Mathematics";
console.log(myVariabl.toUpperCase()) //Ans: MATHEMATICS
console.log(myVariabl.toLowerCase()) //Ans: mathematics`,
strindex:`const myVariable = "Mathematics";
console.log(myVariable.indexOf("at")) // start the number 0,1,2
console.log(myVariable.indexOf("m"))
console.log(myVariable.indexOf("Mat"))
console.log(myVariable.lastIndexOf("aicst")) // answer is minus value because letter not arrange 
console.log(myVariable.lastIndexOf("t")) // Last index value will take and show that`,
StrMathinclude:`const myVariable = "Mathematics";
console.log(myVariable.includes("arjun")) // insert the character and store character letter checking 
console.log(myVariable.includes("mat")) // myVariable stored letter match with includes letter
console.log(myVariable.includes("ti")) 
`,
StrMathsplit:`const myVariable = "Mathematics";
console.log(myVariable.split("e"))
console.log("Subscribe to Arjun".split(" "))
console.log("Earn,Grow,Give".split(","))
console.log("Earn,Grow,Give".split(""))
console.log(myVariable.split(""))`,
StrMathupperlower:`const myVariable = "Mathematics";
console.log(myVariable.toUpperCase())
console.log(myVariable.toLowerCase())`,
StrMathChatAt:`const myVariable = "Mathematics";
//Count the letter 0 to 6 which letter you entered charAt() inside that letter only showing
console.log(myVariable.charAt(0)) 

// 6 letter only showing
console.log(myVariable.charAt(6)) `,
MathSlice:`const myVariable = "Mathematics";
console.log(myVariable.slice(5,8)) // calculate the index value 5 to 8 between 
console.log(myVariable.slice(5,2)) // index value not show there because 5 to 2 reverse `,
NumMethod:`//Numbers
const myVariable = "423";
const myNumber = 42

//Number methods
console.log(myNumber === myVariable)
console.log(myVariable)
console.log(Number(myVariable)+3)
console.log(Number("Arjun")+3)//String is not a number
console.log(Number(true)) // True value 1
console.log(Number(false)) //False value 0`,
NumisInt:`// Integer without point the value answer is: true (Integer not point value)
console.log(Number.isInteger(42)); 

// Integer with point the value answer is: false
console.log(Number.isInteger(42.077)); `,
NumparseInt:`const myFloat = 42.0566
const myVariable = "423.098aaa";


console.log(Number.parseInt(myFloat)); // parseInt cut the after point values
console.log(Number.parseInt(myVariable));`,
NumparseFloat:`const myVariable = "423.098aaa";
const myFloat = 42.0566

 //parseFloat will subtract the number value and show the numbers only extra character not show the result
console.log(Number.parseFloat(myVariable));

//Fixed last 2digit values
console.log(Number.parseFloat(myVariable).toFixed(2)); 
console.log(Number.parseFloat(myFloat));
`,
Numtostring:`//Numbers

const myNumber = 42

const myFloat = 42.0566


//How to change Number to String below
console.log(myNumber.toString());
console.log(myFloat.toString())

//If you want check the code numbers or string
console.log(typeof myNumber.toString()) `,
Chaining:`//Numbers
const myVariable = "423.098aaa";
const myVariables = "423.098313213";
const myVariabless = "423aaa.098aaa";
const myVariablesss = "aaa423aaa.098313213aaa"; // system can't identify the value
//Chaning
console.log(parseFloat(myVariable).toFixed(3).toString());
console.log(parseFloat(myVariables).toFixed(3).toString());
console.log(parseFloat(myVariabless).toFixed(3).toString());
console.log(parseFloat(myVariablesss).toFixed(3).toString());



//Subract the username from email
let gmail="insurancehub66@gmail.com"

console.log(gmail.slice(0,gmail.indexOf("@")))


//Subract the between -
let namee="arjun-Govindaraj"
console.log((namee.split("-")))

function namefu(namee){
    return (namee.split("-"))
}
console.log(namefu("Govindaraj-sampath"))
console.log(namefu("sampath-chinnaraj"))`,
NumisNan:`//isNan
Number.isNaN() //Numbers isNan()
isNaN() //Global isNan()

// This not a Nan(Not a Number)  because before added Number.isNan() inside anything type  Answer is false
console.log(Number.isNaN(42)) 

console.log(Number.isNaN("Arjun"))

console.log(isNaN("Arjun"))//This is not a Number answer is True`,
Mathmethod:`//MATH Method and properties

console.log(Math.PI); 
console.log(Math.trunc(Math.PI)); // trunc show short value
console.log(Math.round(Math.PI)); // round of the value
console.log(Math.round(4.8));
console.log(Math.ceil(4.1)); //ceil show 4.1 after the value .1 added 
console.log(Math.pow(3,4)) //pow 3 (4times Multiply)
console.log(Math.pow(10,3))
console.log(Math.min(10,3,1,6,32)) // min show the value which is the Minmum value
console.log(Math.max(10,3,1,6,32)) //max show the value which is the Mixmum value
console.log(Math.floor(4.8)); //floor point after value won't take that
console.log(Math.random()); // Math.random show the value 0.5454465 
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);
// 1 to 100
console.log(Math.floor(Math.random()*100)+1);

`,
Mathfloorrandom:`//Code Challange Projects

//This way code is not good solutions
console.log("ArjunaGovindaraj".charAt((Math.floor(Math.random()*16))));

//This way code is right
const myName = "ArjunaGovindaraj"
console.log(myName.length)
console.log(myName.charAt((Math.floor(Math.random()*myName.length))));`,
Arraymeth:`//Arrays
const myArray=[];
//adding element

myArray[0]="Arjuna";
myArray[1]="Subscribe";
myArray[2]=777
myArray[3]=true

console.log(myArray);

console.log(myArray.length);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[myArray.length-1]); // Last Array showing`,
Arrayadddelete:`//Arrays
const myArray=[];
//adding element

myArray[0]="Arjuna";
myArray[1]="Subscribe";
myArray[2]=777
myArray[3]=true

console.log(myArray);


myArray.unshift("click") // first array or element add tools
console.log(myArray)

myArray.push("click"); //Last array or element added 
console.log(myArray)

myArray.shift()
console.log(myArray) // first array or element delete tools


myArray.pop();        // Last  array or element delete
console.log(myArray);`,
Arrayadddelete1:`//Arrays
const myArray=[];
//adding element

myArray[0]="Arjuna";
myArray[1]="Subscribe";
myArray[2]=777
myArray[3]=true
console.log(myArray);


//stored variable the result is lenght value showing


const firstItem = myArray.unshift("Arjun"); // first array or element add tools
console.log(myArray)
console.log(firstItem);

const lastItem = myArray.push("Arjun"); //Last array or element added 
console.log(myArray)
console.log(lastItem);

// delete length 
const firstItems = myArray.shift(); // first array or element delete tools
console.log(myArray)
console.log(firstItems);

const lastItems = myArray.pop();   // Last  array or element delete
console.log(myArray)
console.log(lastItems);
`,
ArrSplice:`//Arrays
const myArray=[];
//adding element

myArray[0]="Arjuna";
myArray[1]="Subscribe";
myArray[2]=777
myArray[3]=true
console.log(myArray);

/*
This way wrong (Resutl showing empty)
delete myArray[2]
console.log(myArray);
*/


// splice can delete and replace the date in between data


//(2 is location,1 is position only) / Splice center data delete
myArray.splice(2,1) 
console.log(myArray);


//2 is location, 0 positon can't delete the data you can replace the data  2location
myArray.splice(2,0,"Gayanthika")

myArray.splice(0,1,"Arjun Shri")  //Replace the data
console.log(myArray)

myArray.splice(1,2) // two position delete
console.log(myArray)`,
ArrJoinRev:`//Arrays
const myArray=[];
//adding element

myArray[0]="Arjuna";
myArray[1]="Subscribe";
myArray[2]=777
myArray[3]=true
console.log(myArray);


//1 start 3 before data showing on the result
const newArray = myArray.slice(1,3) 
console.log(myArray)
console.log(newArray)


//1 start 3 before data showing on the result
const newArrays = myArray.reverse() 
console.log(myArray)
console.log(newArrays)


// Hole data join in one string
const newwArray = myArray.join(); 
console.log(myArray)
console.log(newwArray)


//split work done but not identitfy the string number boolean
const newwwArray = newwArray.split(',') 
console.log(newwwArray)

`,
ArrConcat:`//Arrays
const myArray=[];
//adding element

myArray[0]="Arjuna";
myArray[1]="Subscribe";
myArray[2]=777
myArray[3]=true
console.log(myArray);


myArrayA =["false", 56,445];
console.log(myArrayA);

//concat
const newArray = myArray.concat(myArrayA); // two stored array joined
console.log(newArray);

//Another way of concat
//spread array
const newArrays = [...myArrayA,...myArray] // two stored array joined
console.log(newArrays);`,
ArrDimen:`//Two & Three Dimensional Array

const earnMoneyA = ["FrontEnd","BackEnd","Fullstack"]
const earnMoneyB = ["AI","Blockchain","DataAnalytics"]
const growMoneyA = ["Stocks","Relestate","FixedIncome"]
const growMoneyB = ["Options","Futures"]
const giveMoney = ["QualityEducation"]

// One Dimensional  Array
console.log(earnMoneyA[1],growMoneyB[1])

// Two Dimensional Array
const earnMoney = [earnMoneyA,earnMoneyB]
const growMoney = [growMoneyA,growMoneyB]
console.log(earnMoney[0][1],growMoney[1][1])

// Three Dimensional Array
const myArray = [earnMoney,growMoney,giveMoney]
console.log(myArray[0][0][1])
console.log(myArray[0][0][0])
console.log(myArray[2][0])
`,
Objects:`//Objects
//key-value pairs in curly braces

//Simple Object
const myObj = {name:"Arjuna"}
console.log(myObj.name)// . show inside the value

//Another Object
const anotherObj ={
    subscriber: true,
    no: 10000,
    content: {
        earn:"JS",
        grow:"Stocks"
    },
    subdivisions: ["Earn","Grow","Give"],
    action: function(){
        return \`Earn by learning $\{this.content.earn}\`; // or return "Hello World" -> Simply called; 
    }
};
/* Way of calling the function
console.log(anotherobj.subdivisions[1])
console.log(anotherObj.content.earn)
console.log(anotherObj["subscriber"])

*/
console.log(anotherObj.action());`,
Objectinheritance:`//Objects
//key-value pairs in curly braces



const vehicle ={
    doors:2,
    engine: function(){
        return "Vrrooom";
    }
};
console.log(vehicle.engine());

/* You can access parent property
 const car = Object.create(vehicle);
console.log(car.engine()) */

//2nd Object
const car = Object.create(vehicle);
car.wheels =4;
car.engine = function(){return "Whoosh"};
console.log(car.engine());


//3rd Object
const tesla = Object.create(car);
tesla.engine = function(){ return "Shhhh"};
console.log(tesla.engine())
`,
Object1:`//Objects
//key-value pairs in curly braces

const movie = {
    actor: "Vijay",
    music: "AR Raha",
    director: "Lokesh",
    producer: "Anbu"
};

//How to delete the object key 
delete movie.producer;

console.log(Object.keys(movie)); //Ans: Actor,music,director,producer
console.log(Object.values(movie)); //Ans: Vijay, AR Raha, Lokesh, Anbu



/* simply showing values only 

for (let job in movie){
    console.log(movie[job])
}
*/


// hasOwnProperty  is there or not showing the boolean
console.log(movie.hasOwnProperty("producer")); 

//this method called for-in-loop
for (let job in movie){
    console.log(\`$\{job}, it's $\{movie[job]}\`)
}`,
Object2:`//Object is key-value pairs in curly braces

const movie = {
    actor: "Vijay",
    music: "AR Raha",
    director: "Lokesh",
    producer: "Anbu"
};

//destructuring the objects

/* How to store the variable on the object in one key 
 
const {name: myNickname} =biodata
console.log(name)

*/

const {actor, music, director, producer} = movie;
console.log(actor) // console.log(music) you can select key or value anything access here


/* How to call the function

const {music} = movie;
function sings({music}) {
    return{music};
}
console.log(sings(movie))

*/`,
Classes1:`//classes

const myPizza ={
    size: "medium",
    crust: "original",
    bake: function(){
        return console.log(\`Baking $\{this.size} $\{this.crust} crust pizza\`)
    }
}
myPizza.bake()

class Pizza{
    constructor(){
        this.size="medium";
        this.crust="original"
    }
    bake(){
        return console.log(\`Baking $\{this.size} $\{this.crust} crust pizza\`)
    }
}
const anotherPizza = new Pizza();
anotherPizza.bake();`,
Classes2:`//classes

const myPizza ={
    size: "medium",
    crust: "original",
    bake: function(){
        return console.log(\`Baking $\{this.size} $\{this.crust} crust pizza\`)
    }
}
myPizza.bake()

class Pizza{
    constructor(typePizza){
        this.type=typePizza;
        this.size="medium";
        this.crust="original"
    }
    bake(){
        return console.log(\`Baking $\{this.size} $\{this.type} $\{this.crust} crust pizza\`)
    }
}
const anotherPizza = new Pizza("margarita"); // Parameteres passed
anotherPizza.bake();`,
Classes3:`//classes
/* classes are blueprints

const myPizza ={
    size: "medium",
    crust: "original",
    bake: function(){
        return console.log(\`Baking $\{this.size} $\{this.crust} crust pizza\`)
    }
}
myPizza.bake() */

class Pizza{
    constructor(typePizza,sizePizza,crustPizza){
        this.type=typePizza;
        this.size=sizePizza;
        this.crust=crustPizza;
    }
    bake(){
        return console.log(\`Baking $\{this.size} $\{this.type} $\{this.crust} crust pizza\`)
    }
}
const anotherPizza = new Pizza("margarita","small","thin"); // Parameteres passed
anotherPizza.bake();

const anPizza = new Pizza("Pepperonni","Medium","original")
anPizza.bake();`,
Classes4:`//Classes
//set and get

class Pizza{
    constructor(typePizza,sizePizza,crustPizza){
        this.type=typePizza;
        this.size=sizePizza;
        this.crust=crustPizza;
        this.toppings="olives"; // Added one property 
    }
    getToppings(){                    // get method used and paramerters passed
        return this.toppings
    }
    setToppings(toppingsPizza){      // set method used and paramerters passed
        this.toppings=toppingsPizza
    }
    bake(){
        return console.log(\`Baking $\{this.size} $\{this.type} $\{this.crust} crust pizza with $\{this.toppings}\`)
    }
}
const myPizza = new Pizza("margarita","small","thin"); // Parameteres passed
myPizza.setToppings("sausage")  //toppingPizza parameters passed
console.log(myPizza.getToppings()) // checked pararmeters passed or not

myPizza.bake();
 
`,
Classes5:`//Classes

class Pizza{
    constructor(typePizza,sizePizza,crustPizza){
        this.type=typePizza;
        this.size=sizePizza;
        this.crust=crustPizza;
        this.toppings=[]; // Added one property  and added empty array
    }
    getToppings(){                    // get method used and paramerters passed
        return this.toppings
    }
    setToppings(toppingsPizza){      // set method used and paramerters passed
        this.toppings.push(toppingsPizza) // array pushed function 8th line
    }
    bake(){
        return console.log(\`Baking $\{this.size} $\{this.type} $\{this.crust} crust pizza with $\{this.toppings}\`)
    }
}
const myPizza = new Pizza("margarita","small","thin"); // Parameteres passed
myPizza.setToppings("sausage")  // toppingPizza parameters passed
myPizza.setToppings("Egg")      // Another toppings parameters passed with added array
console.log(myPizza.getToppings()) // checked pararmeters passed or not

myPizza.bake();
 
`,
Classes6:`//Classes // Child classes create acces to parent classes

class Pizza{
    constructor(sizePizza){
        this.size=sizePizza;
        this.crust="original";
    }
    getCrust(){                    // get method used and paramerters passed
        return this.crust
    }
    setCrust(crustPizza){      // set method used and paramerters passed
        this.crust= crustPizza; 
    }
  
}

class specialPizza extends Pizza {  // Parent class linked extends keyword
    constructor(sizePizza){
        super(sizePizza);  // Parent class called using function key super
        this.type = "Margarita"
    }
    slice(){
        console.log(\`Our $\{this.type} $\{this.size} $\{this.crust} pizza has 8 slices\`)
    }
}

const myspecialPizza = new specialPizza("medium")
myspecialPizza.slice()
 
`,
Classes7:`//Classes
// Can't acces the key and value #name because that is private proparty

class Pizza{
    crust = "original"
    #sauce = "tomato"
    constructor(sizePizza){
        this.size=sizePizza;
    }
    getCrust(){                    // get method used and paramerters passed
        return this.crust
    }
    setCrust(crustPizza){      // set method used and paramerters passed
        this.crust= crustPizza; 
    }
    bake(){
        return console.log(\`Baking a $\{this.size} $\{this.crust} $\{this.#sauce} pizza\`)
    }
}

const myPizza = new Pizza("small");
myPizza.bake()
// console.log(myPizza.#sauce) // You can't access the key and value because that is private property
 
`,

    
};


