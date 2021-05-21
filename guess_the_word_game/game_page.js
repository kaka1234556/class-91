score1 = 0;
score2 = 0;

player1 = localStorage.getItem("Nick-name1");
player2 = localStorage.getItem("Nick-name2");

document.getElementById("Nick-name1").innerHTML = player1 + ":";
document.getElementById("Nick-name2").innerHTML = player2 + ":";


document.getElementById("score_board1").innerHTML = score1;
document.getElementById("score_board2").innerHTML = score2; 

document.getElementById("question").innerHTML = "question" + player1;
document.getElementById("answer").innerHTML = "answer" + player2 ;

 function send()
 {
 word=document.getElementById("word").Value;
 word=word.toLowerCase();
 console.log(word);


 char1=word.charAt(1);
 console.log(char1);

word_lenght=Math.floor(word.lenght/2);
char2=word.charAt(word_lenght);
console.log(char2);

lenght=word.lenght-1;
char3=word.charAt(length);

console.log(char3);

replace1=word.replace(char1,"_");
replace2=word.replace(char2,"_");
replace3=word.replace(char3,"_");
console.log(replace3);

q1="<h4 id='word_display'>Q." + replace3 +"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";

row = q1+input_box+ button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").innerHTML="";


 }