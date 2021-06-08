// fanction decleration

console.log(add(1,1));

function add(x,y){
var result = x+y;
return result;
}

var result2 = add(3,5);
 document.write("<p style='color:green;'> "+ result2+ "</p>")

 // while(condition){
 // }
  var favmusic = prompt("whats your fav from : music, one piece, AOT");
 // favmusic=AOT
 function favmusicFun() {

    while (favmusic != "piano" && favAnime != "one piece" && favmusic != "AOT") {

    favmusic = prompt("please enter on of : piano, one piece, AOT");
  }


  var x = prompt("how many times do you want to see a piano image ?")

var pianoFun = function () {
  var output='';
  var i = 0;
  while (i < x) {
    
   output = output +  "<img src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-piano-icon-png-image_3581516.jpg />"

    console.log(i,output)
  }


favmusicFun();



// var result = musicFun();
// document.write(result);