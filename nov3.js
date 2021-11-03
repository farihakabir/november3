function process() {
var userAge = document.getElementById("ageBox").value ;
var userSemester = document.getElementById("semesterBox").value ;

if (userAge >= 19) {
    p2.innerText = "yes, you are eligible for the prize"
}
else {
     p2.innerText = "sorry, better luck next time"
}




 var msg = "hellow student, " + userAge + " please check semester completed at: " + userSemester; 

document.getElementById("ageBox").value = '';
 document.getElementById("semesterBox").value = '';
p1.innerText = msg ;
}