function addUser()
{
player1_name = document.getElementById("player1_name_input").value ;
player2_name = document.getElementById("player2_name_input").value ;
//index .html se lo or addUser wale function me player1,2_name ko save karo


localStorage.setItem("player1", player1_name);
localStorage.setItem("player2",player2_name);
//it will save the name in key and value that is in application

window.location="game_page.html";
//it will open the next window of game_page.html

}


