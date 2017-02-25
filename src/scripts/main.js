var screenFill = document.getElementsByClassName("interview-een")[0];
var containerContainer = document.getElementsByClassName("container")[0];
var currentSlide = 0;

function launchIntoFullscreen(element) {
  // if(element.requestFullscreen) {
  //   element.requestFullscreen();
  // } else if(element.mozRequestFullScreen) {
  //   element.mozRequestFullScreen();
  // } else if(element.webkitRequestFullscreen) {
  //   element.webkitRequestFullscreen();
  // } else if(element.msRequestFullscreen) {
  //   element.msRequestFullscreen();
  // }
}

function modifyText() {
	var containerCanvas = document.getElementsByClassName("gradient")[0];
	var videoBg = document.getElementsByClassName("video-background")[0];
	containerCanvas.removeChild(videoBg);

	removeIntro();
	window.setTimeout(startDocu, 1500);
}



function startDocu() {
	var menuLeft = document.getElementsByClassName("menu-left")[0];
	var credits = document.getElementsByClassName("bottom")[0];
	launchIntoFullscreen(document.documentElement); // the whole page

	// insertBarista();
	insertVerhuizer();
	menuLeft.style.display = "block";
	credits.style.display = "block";
}

function insertFirstStory(){
	insertCharacter('hoofdstuk een', 'de pont');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" autoplay><source src="images/hoofdstuk_een_video_235.mp4" type="video/mp4"></video>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);
}

function insertBarista(){
	// stopTimer();
	insertCharacter('tijdstip 6:17', 'de barista');
	insertQuote(6.5, '\"Ik stem nooit, ook nog nooit gedaan. Het maakt mij echt niets uit. Het wordt toch altijd wel een feestje.\"', '&mdash; de barista');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay muted loop><source src="images/barista_com.mp4" type="video/mp4"></video>');
	screenFill.insertAdjacentHTML('beforeend', '<audio src="images/bgnoise.mp3" autoplay></audio>');
	insertTimeSweeper(16);
}

function insertSchilder(){
	// stopTimer();
	insertCharacter('tijdstip 7:13', 'de schilder');
	insertQuote(6.5, '\“Natuurlijk stem ik op de PVV! Ik heb een hekel aan uitkeringstrekkers. Turken, Marokkanen... Maar ik heb ook een hekel aan luie Nederlanders hoor. Mijn collega’s moeten nu tot hun 67e doorwerken, op een steiger. Dat ken toch nie?\”', '&mdash; de schilder (34 jaar)');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay muted loop><source src="images/weerspiegeling.mp4" type="video/mp4"></video>');
	screenFill.insertAdjacentHTML('beforeend', '<audio src="images/brommers_zacht.mp3" autoplay></audio>');
	insertTimeSweeper(18);
}

function insertSecondStory(){
	insertCharacter('hoofdstuk twee', 'de mensen op de pont');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" autoplay><source src="images/hoofdstuk_twee.mp4" type="video/mp4"></video>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);}

function insertBouwvakker(){
	insertCharacter('tijdstip 6:44', 'de bouwvakker');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" autoplay><source src="images/dierenstemmer.mp4" type="video/mp4"></video>');
	// screenFill.insertAdjacentHTML('beforeend', '<audio src="images/hoofdstukeen.mp3" autoplay></audio>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);
}

function insertThirdStory(){
	insertCharacter('hoofdstuk drie', 'de politiek');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay><source src="images/hoofdstuk_3.mp4" type="video/mp4"></video>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);
	// screenFill.insertAdjacentHTML('beforeend', '<audio src="images/hoofdstuk3.mp3" autoplay></audio>');
}

function insertVerhuizer(){
	insertCharacter('tijdstip 6:31', 'de verhuizer');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een video-schilder" id="bgvid" playsinline autoplay><source src="images/ben.mp4" type="video/mp4"></video>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);
}

function insertFacilitair(){
	insertCharacter('tijdstip 7:14', 'de facilitair medewerker');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een video-facilitair" id="bgvid" playsinline autoplay><source src="images/facilitair.mp4" type="video/mp4"></video>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);
}

function insertSportschool(){
	// stopTimer();
	insertCharacter('tijdstip 6:50', 'de sportschoolmedewerker');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay><source src="images/doenstemmer.mp4" type="video/mp4"></video>');
  document.getElementsByClassName('video-een')[0].addEventListener('ended',slideUpWithPause,false);
}

function insertSupermarkt(){
	// stopTimer();
	insertCharacter('tijdstip 7:27', 'de supermarktmedewerkster', '');
	insertQuote(1, '\“Ik stem nooit. In die tijd kan ik wel drie wassen ophangen. Weet je hoeveel wasmanden ik thuis heb staan? Ik ben alleen en woon met mijn vier kinderen en kleinkind. Ik heb ook geen verstand van die politieke rotzooi. Dan moet je niet gaan stemmen.\”', '&mdash; de supermarktmedewerkster (48 jaar)');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay loop><source src="images/vrouw_achterkant.mp4" type="video/mp4"></video>');
	screenFill.insertAdjacentHTML('beforeend', '<audio src="images/brommers.mp3" autoplay></audio>');
	insertTimeSweeper(18);

}

function insertStratenmaker(){
	// stopTimer();
	insertCharacter('tijdstip 7:19', 'de stratenmaker');
	insertQuote(1, '\“Ik ben bang dat het toch Wilders wordt voor mij dit jaar. Hij is er voor ons, weet je. Aan de andere kant, het is wel een racist. Ik sta er niet honderd procent achter, maar je moet wat. Heel Noord stemt Wilders, serieus. Vroeger was dat de PvdA. Maar ja, die hebben ook nooit wat gedaan.\”', '&mdash; de stratenmaker (32 jaar)');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay loop><source src="images/roker.mp4" type="video/mp4"></video>');
	insertTimeSweeper(18);
}

function insertAmbtenaar(){
	// stopTimer();
	insertCharacter('tijdstip 6:45', 'de ambtenaar');
	insertQuote(1, '\“Ik heb er weinig vertrouwen in op het moment. Partijen doen allerlei beloftes, maar er komt nooit wat van. Ik begrijp dat het water bij de wijn doen is, maar er blijft geen wijn meer over. Als ik al ga stemmen, dan maar op Partij van de Dieren. Naja, die dieren hebben ook aandacht nodig hè?\”', '&mdash; de ambtenaar (56 jaar)');
	screenFill.insertAdjacentHTML('beforeend', '<video class="video-een" id="bgvid" playsinline autoplay loop><source src="images/achterkant.mp4" type="video/mp4"></video>');
}


/* Blokjes story */
function insertCharacter(time, prof){
	var character = '<div class="character-introduction"><div class="character-time">' + time + '</div><div class="character-function">' + prof + '</div></div>';
	screenFill.insertAdjacentHTML('afterbegin', character);	

	var nameInDOM = document.getElementsByClassName('character-introduction')[0];

	TweenLite.to(nameInDOM, 1, {
	 opacity: 0,
	 delay: 4
	});

	window.setTimeout(removeChar, 5000);

	function removeChar(){
	screenFill.removeChild(nameInDOM);
	}

}

var timeOutStills;

function insertTimeSweeper(time){
	var timeSeconds = time;
	var timeMiliseconds = time * 1000;


	containerContainer.insertAdjacentHTML('afterbegin', '<div class="loadingbar"><div class="loadingbar-loper"></div></div>');
	var innerLoader = document.getElementsByClassName('loadingbar-loper')[0];
	var loadingBar = document.getElementsByClassName('loadingbar')[0];
	console.log(innerLoader);

	TweenLite.to(innerLoader, timeSeconds, {
	 height: window.innerHeight,
	 ease: Power0.easeNone
	});

	timeOutStills = window.setTimeout(slideUpWithPause, timeMiliseconds);
	window.setTimeout(removeBar, (timeMiliseconds + 1000));

	function removeBar(){
		containerContainer.removeChild(loadingBar)
	}
}

function stopTimer() {
  clearTimeout(timeOutStills);
}

function insertQuote(timeDelay, citaat, details){
	var quoteje = "<div class='pontquote'>" + citaat + "</div>"; 
	var details_quote = "<div class='details_quote'>" + details + "</div>";
	var screenFill = document.getElementsByClassName("interview-een")[0];
	screenFill.insertAdjacentHTML('beforeend', quoteje);	
	var quoteInserted = document.getElementsByClassName('pontquote')[0];
	quoteInserted.insertAdjacentHTML('beforeend', details_quote);	
	TweenLite.from(quoteInserted, 1, {
	 opacity: 0,
	 y: 10,
	 delay: timeDelay
	});
}

var startButton = document.getElementsByClassName("start-button")[0];
var isFullscreen = false;
var fullscreenButton = document.getElementsByClassName("fullscreen")[0];
startButton.addEventListener("click", modifyText, false);

startButton.addEventListener('click', function(){
    document.body.webkitRequestFullscreen();
    document.body.requestFullscreen();
    isFullscreen = true;
});

fullscreenButton.addEventListener("click", function(){
	if (isFullscreen){
		console.log('JA HIJ IS FULLSCREEN')
    document.body.webkitRequestFullscreen();
    document.body.requestFullscreen();
	} else {
		document.webkitExitFullscreen();
		document.exitFullscreen();
	}
});


var logo = document.getElementsByClassName("pontlogo")[0];
var text = document.getElementsByClassName("pontintroduction")[0];
var button = document.getElementsByClassName("start-button")[0];

var tween = TweenLite.to(logo, 1, {
 y: -10,
 ease: Power1.easeInOut,
 delay: 2,
 opacity: 1
});

TweenLite.to(text, 1, {
 y: -10,
 ease: Power1.easeInOut,
 delay: 2.5,
 opacity: 1
});

TweenLite.to(button, 1, {
 y: -10,
 ease: Power1.easeInOut,
 delay: 3,
 opacity: 1
});

function removeIntro(){
	var tween = TweenLite.to(logo, .5, {
	 y: 10,
	 ease: Power1.easeInOut,
	 delay: .6,
	 opacity: 0
	});

	TweenLite.to(text, .5, {
	 y: 10,
	 ease: Power1.easeInOut,
	 delay: .3,
	 opacity: 0
	});

	TweenLite.to(button, .5, {
	 y: 10,
	 ease: Power1.easeInOut,
	 delay: 0,
	 opacity: 0
	});
}

/* navigatie */

var prev = document.getElementsByClassName("left-arrow")[0];
var next = document.getElementsByClassName("right-arrow")[0];

var verhuizerClick = document.getElementsByClassName("verhuizer")[0];
var firstStoryClick = document.getElementsByClassName("firststory")[0];
var secondStoryClick = document.getElementsByClassName("secondstory")[0];
var baristaClick = document.getElementsByClassName("barista")[0];
var schilderClick = document.getElementsByClassName("schilder")[0];
var stratenmakerClick = document.getElementsByClassName("stratenmaker")[0];
var bouwvakkerClick = document.getElementsByClassName("bouwvakker")[0];
var supermarktClick = document.getElementsByClassName("supermarkt")[0];
var facilitairClick = document.getElementsByClassName("facilitair")[0];
var thirdStoryClick = document.getElementsByClassName("thirdstory")[0];
var sportschoolClick = document.getElementsByClassName("sportschool")[0];
var ambtenaarClick = document.getElementsByClassName("ambtenaar")[0];

prev.addEventListener("click", slideDown, false);
next.addEventListener("click", slideUp, false);

verhuizerClick.addEventListener("click", function(){ currentSlide = 0; slideNumber() }, false);
firstStoryClick.addEventListener("click", function(){ currentSlide = 1; slideNumber() }, false);
baristaClick.addEventListener("click", function(){ currentSlide = 2; slideNumber() }, false);
schilderClick.addEventListener("click", function(){ currentSlide = 3; slideNumber() }, false);
secondStoryClick.addEventListener("click", function(){ currentSlide = 5; slideNumber() }, false);
bouwvakkerClick.addEventListener("click", function(){ currentSlide = 4; slideNumber() }, false);
supermarktClick.addEventListener("click", function(){ currentSlide = 6; slideNumber() }, false);
facilitairClick.addEventListener("click", function(){ currentSlide = 7; slideNumber() }, false);
stratenmakerClick.addEventListener("click", function(){ currentSlide = 8; slideNumber() }, false);
thirdStoryClick.addEventListener("click", function(){ currentSlide = 9; slideNumber() }, false);
sportschoolClick.addEventListener("click", function(){ currentSlide = 10; slideNumber() }, false);
ambtenaarClick.addEventListener("click", function(){ currentSlide = 11; slideNumber() }, false);


function cleanScreen(){
	stopTimer();
	screenFill.innerHTML = "";
}

function removeAllActives() {
	/* Loopen bitch */
	allCircles = document.getElementsByClassName('menucircle');
	for (var i = 0; i < allCircles.length; i++){
		allCircles[i].classList.remove("active");
	}
}

function slideDown(){
	currentSlide = currentSlide - 1;
	slideNumber();
	console.log(currentSlide)
}

function slideUp(){
	currentSlide++;
	slideNumber();
	console.log(currentSlide)
}

function slideUpWithPause(){
	window.setTimeout(function(){
		currentSlide++;
		slideNumber();
	}, 1000);
}

function slideNumber(){
	if(currentSlide == 0){
		removeAllActives();
		verhuizerClick.classList.add("active");
		cleanScreen();
		insertVerhuizer();
	} else if (currentSlide == 1 ) {
		removeAllActives();
		firstStoryClick.classList.add("active");
		cleanScreen();
		insertFirstStory();
	} else if (currentSlide == 2 ) {
		removeAllActives();
		baristaClick.classList.add("active");
		cleanScreen();
		insertBarista();
	} else if (currentSlide == 3 ) {
		removeAllActives();
		schilderClick.classList.add("active");
		cleanScreen();
		insertSchilder();
	} else if (currentSlide == 4 ) {
		removeAllActives();
		bouwvakkerClick.classList.add("active");
		cleanScreen();
		insertBouwvakker();
	} else if (currentSlide == 5 ) {
				removeAllActives();
		secondStoryClick.classList.add("active");
		cleanScreen();
		insertSecondStory();
	} else if (currentSlide == 6 ) {
				removeAllActives();
		supermarktClick.classList.add("active");
		cleanScreen();
		insertSupermarkt();
	} else if (currentSlide == 7 ) {
				removeAllActives();
		facilitairClick.classList.add("active");
		cleanScreen();
		insertFacilitair();
	} else if (currentSlide == 8 ) {
				removeAllActives();
		stratenmakerClick.classList.add("active");
		cleanScreen();
		insertStratenmaker();
	} else if (currentSlide == 9 ) {
				removeAllActives();
		thirdStoryClick.classList.add("active");
		cleanScreen();
		insertThirdStory();
	} else if (currentSlide == 10 ) {
				removeAllActives();
		sportschoolClick.classList.add("active");
		cleanScreen();
		insertSportschool();
	} else if (currentSlide == 11 ) {
				removeAllActives();
		ambtenaarClick.classList.add("active");
		cleanScreen();
		insertAmbtenaar();
	}
}

/* Credits */
var creditsLink = document.getElementsByClassName('creditslink')[0];
var creditsBlock = document.getElementsByClassName('credits')[0];

creditsLink.addEventListener("mouseover", function( event ) {   
	creditsBlock.style.display = "block";
})

creditsLink.addEventListener("mouseleave", function(event){
	creditsBlock.style.display = "none";
})












