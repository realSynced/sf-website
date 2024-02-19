let autho;
const possibleCombs = ["tjhsst", "tj", "thomas jefferson", "sf"]
let body = document.body;
let stuCheck = false;

// possibleCombs.forEach(function(poss){
    do{
        autho = prompt("What school's club is this website for?");
    }
    while(autho == null || autho == "");

    if(possibleCombs.includes(autho.toLowerCase())){
        stuCheck = false;
        alert("You can pass!\nWelcome to the Studio Finish Website!"); 
    }
    else{
        alert("You can not pass!\nThis Website is only for the students affiliated with the school.");
        changeLast()
        // window.stop();
    }


    function changeLast(){
        document.getElementById('pres').innerHTML = "President - @Abraham";
        document.getElementById('vice').innerHTML = "Vice President - @Kyril";
        document.getElementById('hist').innerHTML = "Historian - @Roman";
        document.getElementById('activ').innerHTML = "Activities Coordinator - @Alaura";
        document.getElementById('tres').innerHTML = "Treasurer - @Ryeen";
        document.getElementById('secre').innerHTML = "Secretary - @Ling";
    }