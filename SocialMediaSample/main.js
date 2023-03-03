const body = document.querySelector('body');
const header = document.querySelector('header');
/* ------------------------------theme - 1 ---------------------------------*/
const btn1 = document.querySelector('#light-theme');
btn1.addEventListener('click', () => {
	lightTheme();
	const socialCard = document.getElementsByClassName('social-card');
	socialCard.onmouseover = function hoverOnMainBoard(e)
	{
		for (var i = 0; i < socialCard.length; i++)
		{
    	socialCard[i].style.backgroundColor = "pink";
    }
	};
})


function lightTheme(){
	body.style.backgroundColor = "#fff";
	header.style.backgroundColor = "hsl(225, 100%, 98%)";
	document.getElementById('mode-txt').style.color = "hsl(228, 12%, 44%)";
	document.getElementById('toggle').style.backgroundColor = "hsl(228, 12%, 44%)";
	document.getElementById('toggle').style.backgroundImage = "none";
	document.getElementById('light-theme').style.visibility = "hidden";
	document.getElementById('dark-theme').style.visibility = "visible";
	document.getElementById('heading-label').style.color = "#000";
	document.getElementById('second-div-txt').style.color = "hsl(228, 12%, 44%)";

	var mainBoardBg = document.getElementsByClassName("social-card");
	let countData = document.getElementsByClassName('countData');

  	for (var i = 0; i < mainBoardBg.length; i++) {
    	mainBoardBg[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    	countData[i].style.color = "#000";
    }
    var card = document.getElementsByClassName("card");
	let valueCount = document.getElementsByClassName('valueCount');

  	for (var i = 0; i < card.length; i++) {
    	card[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    	valueCount[i].style.color = "#000";
    }

}

/* ------------------------------theme - 2 ---------------------------------*/
const btn2 = document.querySelector('#dark-theme');
btn2.addEventListener('click', () => {
	darkTheme();
})

function darkTheme(){
	body.style.backgroundColor = "";
	header.style.backgroundColor = "";
	document.getElementById('mode-txt').style.color = "";
	document.getElementById('toggle').style.backgroundColor = "";
	document.getElementById('toggle').style.backgroundImage = "";
	document.getElementById('light-theme').style.visibility = "";
	document.getElementById('dark-theme').style.visibility = "";
	document.getElementById('heading-label').style.color = "";
	document.getElementById('second-div-txt').style.color = "";

	var mainBoardBg = document.getElementsByClassName("social-card");
	let countData = document.getElementsByClassName('countData');

  	for (var i = 0; i < mainBoardBg.length; i++) {
    	mainBoardBg[i].style.backgroundColor = "";
    	countData[i].style.color = "";
    }

    var card = document.getElementsByClassName("card");
	let valueCount = document.getElementsByClassName('valueCount');

  	for (var i = 0; i < card.length; i++) {
    	card[i].style.backgroundColor = "";
    	valueCount[i].style.color = "";
    }
}