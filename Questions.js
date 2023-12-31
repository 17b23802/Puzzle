var Lives = 3;
var x = 100;
var xLeftChange = 0;
var xRightChange = 0;
var y = 480;
var yChange = 0;
var Animation = true;
var Fall = false;
var Jump = false;
var Retry = false
var Repeating = 0;

function Wrong(){
    if (Lives > 0) {
        if (Lives > 3){
            Lives = 0;
        }
        Lives --;
        if (Lives == 2){
            document.getElementById("lives3").style.display='none'
        }
        else if (Lives == 1){
        document.getElementById("lives2").style.display='none'
        }
        else if (Lives < 1) {
        document.getElementById("youlose").style.display='block';
        Animation = false;
        }
    }
}

function Reset(){
    Lives = 3;
    document.getElementById("youlose").style.display='none';
    document.getElementById("page1").style.display='block';
    document.getElementById("page2").style.display='none';
    document.getElementById("page3").style.display='none';
    document.getElementById("page4").style.display='none';
    document.getElementById("page5").style.display='none';
    document.getElementById("lives3").style.display='block';
    document.getElementById("lives2").style.display='block';
    document.getElementById("lives1").style.display='block';
}

function Qone(){
    if (Lives > 0) {
        document.getElementById("page1").style.display='none';
        document.getElementById("page2").style.display='block';
        return false;
    }
}

function Qtwo(){
    if (Lives > 0) {
        if (document.getElementById("page2-input").value == '1') {
            document.getElementById("page2").style.display='none';
            document.getElementById("page3").style.display='block';
        } 
        else{
            Wrong();
        }
        return false;
    }
}

function Qthree(){
    if (Lives > 0) {
        if (document.getElementById("page3-input").value == '45') {
            document.getElementById("page3").style.display='none';
            document.getElementById("page4").style.display='block';
            document.getElementById("page420").style.display='block';
        } 
        else{
            Wrong();
        } 
        return false;
    }
}

function QfourPuzzle(){
    document.getElementById("lives3").style.display='none';
    document.getElementById("lives2").style.display='none';
    document.getElementById("lives1").style.display='none';
    document.getElementById("page42").style.display='none';
    document.getElementById("page4-puzzle").style.display='block';
    document.getElementById("page4-header").style.display='block';
}

function QfourWrong(){
    if (Lives > 0) {
        Lives --;
        document.getElementById("page4-puzzle").style.display='none';
        document.getElementById("page4-header").style.display='none';
        document.getElementById("page42").style.display='block';
        if (Lives == 3){
            document.getElementById("lives3").style.display='block';
            document.getElementById("lives2").style.display='block';
            document.getElementById("lives1").style.display='block';
        }
        else if (Lives == 2){
            document.getElementById("lives2").style.display='block';
            document.getElementById("lives1").style.display='block';
        }
        else if (Lives == 1){
            document.getElementById("lives1").style.display='block';
        }
        if (Lives < 1) {
            document.getElementById("page4-puzzle").style.display='none';
            document.getElementById("page420").style.display='none';
            document.getElementById("youlose").style.display='block';
        }
    }
}

function Click(){
    if (event.button == 2){
        alert("HOW DARE YOU!");
        alert("Right click trivialises the entire challenge!");
        QfourWrong();
    }
}

function Qfour(){
    if (Lives > 0){
        document.getElementById("page42").style.display='block';
        document.getElementById("page4-puzzle").style.display='none';
        document.getElementById("page4-header").style.display='none';
        document.getElementById("page4").style.display='none';
        document.getElementById("page5").style.display='block';
        if (Lives == 3){
            document.getElementById("lives3").style.display='block';
            document.getElementById("lives2").style.display='block';
            document.getElementById("lives1").style.display='block';
        }
        else if (Lives == 2){
            document.getElementById("lives2").style.display='block';
            document.getElementById("lives1").style.display='block';
        }
        else if (Lives == 1){
            document.getElementById("lives1").style.display='block';
        }
        Animation = true;
        Animate()
        return false;
    }
}

function Animate(){
    if (Animation){
        x += xLeftChange;
        x += xRightChange;
        y -= yChange;
        Decisions();
        Ground();
        document.getElementById("page5-square").style.left=x;
        document.getElementById("page5-square").style.top=y;
        setInterval(Animate,1500);
    }
}

function Input(ButtonPress){
    if (ButtonPress.keyCode == 37 || ButtonPress.keyCode == 65){
        xLeftChange = -0.1;
    }
    if ((ButtonPress.keyCode == 38 || ButtonPress.keyCode == 87) && yChange == 0){
        yChange = 1;
    }
    if (ButtonPress.keyCode == 39 || ButtonPress.keyCode == 68){
        xRightChange = 0.1;
    }
    if (ButtonPress.keyCode == 32 && Retry == true){
        Animation = true;
        Retry = false;
        document.getElementById("page5-retry").style.display='none';
    }
}

function Change(ButtonUp){
    if (ButtonUp.keyCode == 37 || ButtonUp.keyCode == 65){
        xLeftChange = 0;
    }
    if (ButtonUp.keyCode == 38 || ButtonUp.keyCode == 87 && Jump == true){
        Repeating = 0;
    }
    if (ButtonUp.keyCode == 39 || ButtonUp.keyCode == 68){
        xRightChange = 0;
    }
}

function Ground(){
    if (Jump == false && Fall == false){
        if (((y > 80 && y < 90) && (x > 80 && x < 150)) || ((y > 280 && y < 290) && (x > 280 && x < 350)) || ((y > 480 && y < 490) && (x > 480 && x < 550)) || ((y > 80 && y < 90) && (x > 480 && x < 550)) || ((y > 480 && y < 490) && (x > 80 && x < 150)) || ((y > 480 && y < 490) && (x > 480 && x < 550)) || ((y > 80 && y < 90) && (x > 480 && x < 550)) || ((y > 480 && y < 490) && (x > 80 && x < 150)) || ((y > 280 && y < 290) && (x > 680 && x < 750)) || ((y > 80 && y < 90) && (x > 880 && x < 950)) || ((y > 480 && y < 490) && (x > 880 && x < 950))){
            Repeating = 2000;
        }
        else{
            Fall = true;
            yChange = -0.05;
        }
    }
}

function Decisions(){
    if (Fall){
        FallYes()
    }
    else if (Jump){
        JumpingYes()
    }
    else if (yChange !== 0){
        Jump = true;
        Repeating = 2000;
    }
}

function FallYes(){
    if (((y > 80 && y < 90) && (x > 80 && x < 150)) || ((y > 280 && y < 290) && (x > 280 && x < 350)) || ((y > 480 && y < 490) && (x > 480 && x < 550)) || ((y > 80 && y < 90) && (x > 480 && x < 550)) || ((y > 480 && y < 490) && (x > 80 && x < 150)) || ((y > 480 && y < 490) && (x > 480 && x < 550)) || ((y > 80 && y < 90) && (x > 480 && x < 550)) || ((y > 480 && y < 490) && (x > 80 && x < 150)) || ((y > 280 && y < 290) && (x > 680 && x < 750)) || ((y > 80 && y < 90) && (x > 880 && x < 950)) || ((y > 480 && y < 490) && (x > 880 && x < 950))){
        Fall = false;
        yChange = 0;
    }
    else if (y > 650 || y < 0 || x < 10){
        x = 100;
        y = 480;
        yChange = 0;
        xLeftChange = 0;
        xRightChange = 0;
        Wrong()
        if (Lives > 0){
            Animation = false;
            Retry = true;
            document.getElementById("page5-retry").style.display='block';
        }
    }
    else if (x > 1000){
        Qfive()
    }
    else{
        yChange = yChange * 1.001;
    }
}

function JumpingYes(){
    if (Repeating == 0){
        Fall = true;
        Jump = false;
        yChange = -0.1;
    }
    else{
        yChange = yChange*0.995;
        Repeating--;
    }
}

function Qfive(){
    document.getElementById("page5").style.display='none';
    Animation = false;
}