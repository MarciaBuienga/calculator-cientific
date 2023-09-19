//screen
let screen = document.getElementById("screen");
//type to the screen
function press (numValue){
    if (screen.value == 0) screen.value ='';
    screen.value += numValue;
}

//clear screen
function clearScreen (val){
    screen.value = val;
}

//delete key
function backspace (){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1)
}

//calculate function
function calculate (){
    if (screen.value !==''){
        try{
            clearScreen(eval(screen.value))
        }catch(err){
            clearScreen("Bad expression")
        }
    }
}

//Function to calculate sine, cosine, tan of an angle in DEG
function sine(){
    screen.value = Math.sin (screen.value*( Math.PI / 180))
}

function cosine(){
    screen.value = Math.cos(screen.value * (Math.PI / 180))
}

function tan(){
    screen.value = Math.tan (screen.value*(Math.PI/180))
}

//Function to calcule asin, acos and atan
function invsine(){
    screen.value = Math.asin(screen.value) *( 180 /Math.PI)
}

function invcosine(){
    screen.value = Math.ceil(Math.acos(screen.value)*(180 / Math.PI))
}

function invtan(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI)
}

//function to calculate the natural logarithm
function ln (){
    screen.value = Math.log10 (screen.value)
}

function log (){
    screen.value = Math.log (screen.value)
}

//function for percentage
function percent(){
    screen.value = (screen.value / 100)
}

//function for square cube and square root
function square(){
    screen.value =Math.pow (screen.value, 2)
}

function cube (){
    screen.value = Math.pow (screen.value, 3)
}

function sqrt(){
    screen.value = Math.sqrt (screen.value)
}

//function for +/- (plusminus)

function plusminus (){
    var x = screen;
    var y = x.value;
    y = y* -1;
    x.value = y;
}

//function expr
function exp(){
    screen.value = Math.pow(10, screen.value)
}