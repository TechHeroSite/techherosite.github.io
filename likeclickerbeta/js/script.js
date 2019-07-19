//VARIABLES
var likes = 0;
var followers = 0;
var superfans = 0;
var megafans = 0;
var ultrafans = 0;
var hiperfans = 0;
var bots = 0;
var lpc = 1;
var lps = 0;
var followerLPS = 1;
var superFanLPS = 2;
var megaFanLPS = 4;
var ultraFanLPS = 8;
var hiperFanLPS = 16;
var botLPS = 32;
var hypeFollowersPurchased = 0;
var doubleSuperFansPurchased = 0;
var doubleMegaFansPurchased = 0;
var doubleUltraFansPurchased = 0;
var doubleHiperFansPurchased = 0;
var doubleBotsPurchased = 0;
var doubleClickPurchased = 0;
var autoSaveEnabled = 1;
var darkThemeEnabled = 0;
var musicsEnabled = 1;
var addClickCost;
var followerCost = 10;
var superFanCost = 100;
var megaFanCost = 500;
var ultraFanCost = 1000;
var hiperFanCost = 5000;
var botCost = 10000;
var nf = new Intl.NumberFormat(undefined, {style:'decimal'});

document.getElementById('botLPS').innerHTML = botLPS;
document.getElementById('followers').innerHTML = nf.format(followers);
document.getElementById('followerCost').innerHTML = nf.format(followerCost);
document.getElementById('hypeFollowersCost').innerHTML = nf.format(hypeFollowersCost);
document.getElementById('superfans').innerHTML = nf.format(superfans);
document.getElementById('superFanCost').innerHTML = nf.format(superFanCost);
document.getElementById('doubleSuperFanCost').innerHTML = nf.format(doubleSuperFanCost);
document.getElementById('megafans').innerHTML = nf.format(megafans);
document.getElementById('megaFanCost').innerHTML = nf.format(megaFanCost);
document.getElementById('doubleMegaFanCost').innerHTML = nf.format(doubleMegaFanCost);
document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
document.getElementById('ultraFanCost').innerHTML = nf.format(ultraFanCost);
document.getElementById('doubleUltraFanCost').innerHTML = nf.format(doubleUltraFanCost);
document.getElementById('hiperfans').innerHTML = nf.format(hiperfans);
document.getElementById('hiperFanCost').innerHTML = nf.format(hiperFanCost);
document.getElementById('doubleHiperFanCost').innerHTML = nf.format(doubleHiperFanCost);
document.getElementById('bots').innerHTML = nf.format(bots);
document.getElementById('botCost').innerHTML = nf.format(botCost);
document.getElementById('doubleBotsCost').innerHTML = nf.format(doubleBotsCost);
document.getElementById('lpc').innerHTML = "LPC: " + nf.format(lpc);
document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);
document.getElementById('doubleClickCost').innerHTML = nf.format(doubleClickCost);

function manualDarkTheme() {
	if (darkThemeEnabled == 0) {
		disableDarkTheme();
	} else if (darkThemeEnabled == 1) {
		enableDarkTheme();
	}
}

//BUG CORRECTION OF THE ENTER KEY
window.addEventListener("keydown", keyDown);

function keyDown(event) {
	if (window.event.keyCode == 13) 
	{
		event.returnValue=false; 
		event.cancel = true;
	}
}

if (autoSaveEnabled == 0) {
	var saveenabledcheckbox = document.getElementById("saveenabled");
	saveenabledcheckbox.style.display="none";
	saveenabledcheckbox.style.visibility="hidden";
	
	var savedisabledcheckbox = document.getElementById("savedisabled");
	savedisabledcheckbox.style.display="block";
	savedisabledcheckbox.style.visibility="initial";
} else if (autoSaveEnabled == 1) {
	var saveenabledcheckbox = document.getElementById("saveenabled");
	saveenabledcheckbox.style.display="block";
	saveenabledcheckbox.style.visibility="initial";
	
	var savedisabledcheckbox = document.getElementById("savedisabled");
	savedisabledcheckbox.style.display="none";
	savedisabledcheckbox.style.visibility="hidden";
}

if (musicsEnabled == 0) {
	var musicsenabledcheckbox = document.getElementById("musicsenabled");
	musicsenabledcheckbox.style.display="none";
	musicsenabledcheckbox.style.visibility="hidden";
	
	var musicsdisabledcheckbox = document.getElementById("musicsdisabled");
	musicsdisabledcheckbox.style.display="block";
	musicsdisabledcheckbox.style.visibility="initial";
} else if (musicsEnabled == 1) {
	var musicsenabledcheckbox = document.getElementById("musicsenabled");
	musicsenabledcheckbox.style.display="block";
	musicsenabledcheckbox.style.visibility="initial";
	
	var musicsdisabledcheckbox = document.getElementById("musicsdisabled");
	musicsdisabledcheckbox.style.display="none";
	musicsdisabledcheckbox.style.visibility="hidden";
}

//REMOVE X2 UPGRADES
removeHypeFollowers();
removeDoubleSuperFan();
removeDoubleMegaFan();
removeDoubleUltraFan();
removeDoubleHiperFan();
removeDoubleBots();
removeDoubleClick();

//INITIAL COST OF ITEMS
var hypeFollowersCost = 500;
	document.getElementById('hypeFollowersCost').innerHTML = nf.format(hypeFollowersCost);
var doubleSuperFanCost = 1000;
	document.getElementById('doubleSuperFanCost').innerHTML = nf.format(doubleSuperFanCost);
var doubleMegaFanCost = 6000;
	document.getElementById('doubleMegaFanCost').innerHTML = nf.format(doubleMegaFanCost);
var doubleUltraFanCost = 12000;
	document.getElementById('doubleUltraFanCost').innerHTML = nf.format(doubleUltraFanCost);
var doubleHiperFanCost = 25000;
	document.getElementById('doubleHiperFanCost').innerHTML = nf.format(doubleHiperFanCost);
var doubleBotsCost = 50000;
	document.getElementById('doubleBotsCost').innerHTML = nf.format(doubleBotsCost);
var doubleClickCost = 45000;
	document.getElementById('doubleClickCost').innerHTML = nf.format(doubleClickCost);

//RESET THE GAME
function resetGame(){
	removeHypeFollowers();
	removeDoubleSuperFan();
	removeDoubleMegaFan();
	removeDoubleUltraFan();
	removeDoubleHiperFan();
	removeDoubleBots();
	removeDoubleClick();
    likes = 0;
	lps = 0;
	followers = 0;
	superfans = 0;
	megafans = 0;
	ultrafans = 0;
	hiperfans = 0;
	bots = 0;
	lpc = 1;
	followerCost = 10;
	doubleFanCost = 500;
	superFanCost = 100;
	doubleSuperFanCost = 1000;
	megaFanCost = 500;
	doubleMegaFanCost = 6000;
	ultraFanCost = 1000;
	doubleUltraFanCost = 12000;
	hiperFanCost = 5000;
	doubleHiperFanCost = 25000;
	botCost = 10000;
	doubleBotsCost = 50000;
	addClickCost = 20000;
	doubleClickCost = 45000;
	updateLikes();
	updateLPS();
	updateLPC();
	followerLPS = 1;
	document.getElementById('followerLPS').innerHTML = followerLPS;
	superFanLPS = 2;
	document.getElementById('superFanLPS').innerHTML = superFanLPS;
	megaFanLPS = 4;
	document.getElementById('megaFanLPS').innerHTML = megaFanLPS;
	ultraFanLPS = 8;
	document.getElementById('ultraFanLPS').innerHTML = ultraFanLPS;
	hiperFanLPS = 16;
	document.getElementById('hiperFanLPS').innerHTML = hiperFanLPS;
	botLPS = 32;
	document.getElementById('botLPS').innerHTML = botLPS;
	document.getElementById('followers').innerHTML = nf.format(followers);
	document.getElementById('followerCost').innerHTML = nf.format(followerCost);
	document.getElementById('doubleFanCost').innerHTML = nf.format(doubleFanCost);
	document.getElementById('superfans').innerHTML = nf.format(superfans);
	document.getElementById('superFanCost').innerHTML = nf.format(superFanCost);
	document.getElementById('doubleSuperFanCost').innerHTML = nf.format(doubleSuperFanCost);
	document.getElementById('megafans').innerHTML = nf.format(megafans);
	document.getElementById('megaFanCost').innerHTML = nf.format(megaFanCost);
	document.getElementById('doubleMegaFanCost').innerHTML = nf.format(doubleMegaFanCost);
	document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
	document.getElementById('ultraFanCost').innerHTML = nf.format(ultraFanCost);
	document.getElementById('doubleUltraFanCost').innerHTML = nf.format(doubleUltraFanCost);
	document.getElementById('hiperfans').innerHTML = nf.format(hiperfans);
	document.getElementById('hiperFanCost').innerHTML = nf.format(hiperFanCost);
	document.getElementById('doubleHiperFanCost').innerHTML = nf.format(doubleHiperFanCost);
	document.getElementById('bots').innerHTML = nf.format(bots);
	document.getElementById('botCost').innerHTML = nf.format(botCost);
	document.getElementById('doubleBotsCost').innerHTML = nf.format(doubleBotsCost);
	document.getElementById('lpc').innerHTML = "LPC: " + nf.format(lpc);
	document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);
	document.getElementById('doubleClickCost').innerHTML = nf.format(doubleClickCost);
	hypeFollowersPurchased = 0;
	doubleSuperFansPurchased = 0;
	doubleMegaFansPurchased = 0;
	doubleUltraFansPurchased = 0;
	doubleHiperFansPurchased = 0;
	doubleBotsPurchased = 0;
	doubleClickPurchased = 0;
	autoSaveEnabled = 1;
	darkThemeEnabled = 0;
	musicsEnabled = 1;
	localStorage.clear();
};

//CLICK FUNCTION
function likeClick(lpc){
    likes = likes + lpc;
	updateLikes();
};

//SHOP

//+1 FOLLOWER
function gainFollower(){
    var followerCost = Math.floor(10 * Math.pow(1.1,followers));     //adds a cost amount to each unit purchased
    if(likes >= followerCost){                                   //check if the player has enough likes
        followers = followers + 1;                                   //item lpc increases
    	likes = likes - followerCost;                          //spend the likes
        document.getElementById('followers').innerHTML = followers;  //updates the lpc of units purchased
        updateLikes();                                    //update likes
		lps += followerLPS;                                    //increases the total dps according to item dps
		updateLPS();                                     //update dps
    }
	else {
		notEnoughLikes();                                //if you do not have enough likes, show an alert
	};
	var nextCostFollower = Math.floor(10 * Math.pow(1.1,followers));
    document.getElementById('followerCost').innerHTML = nextCostFollower;  //update the lpc for the player
};

//HYPE FOLLOWERS
function hypeFollowers(){
    var hypeFollowersCost = 500;                              //set the value of the item
    if(likes >= hypeFollowersCost){
    	likes = likes - hypeFollowersCost;
        updateLikes();
		removeHypeFollowers();
		hypeFollowersLPS();
		updateLPS();                                     //update dps
		hypeFollowersPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeHypeFollowers()                                 //"remove" the x2 upgrade from the respective item
{ 
   var rmvHypeFollowers = document.getElementById("HypeFollowers"); 
   rmvHypeFollowers.style.display="none"; 
   rmvHypeFollowers.style.visibility="hidden";
   var rmvHypeFollowersBR = document.getElementById("brHypeFollowers"); 
   rmvHypeFollowersBR.style.display="none"; 
   rmvHypeFollowersBR.style.visibility="hidden";
}

function recreateHypeFollowers()                                 //"recreates" the x2 upgrade of the respective item
{ 
   var rctHypeFollowers = document.getElementById("HypeFollowers"); 
   rctHypeFollowers.style.display="block"; 
   rctHypeFollowers.style.visibility="initial";
   var rctHypeFollowersBR = document.getElementById("brHypeFollowers"); 
   rctHypeFollowersBR.style.display="block"; 
   rctHypeFollowersBR.style.visibility="initial";
}

function hypeFollowersLPS() {                                 //updates the followers dps
	var hypeFollowersLPS = document.getElementById("HypeFollowers");
	if (hypeFollowersLPS.style.visibility == "hidden") {
			followerLPS = 2;
			updateLPS();
		} else {
			followerLPS = 1;
		}
}

//+1 SUPER FAN
function addSuperFan(){
    var superFanCost = Math.floor(100 * Math.pow(1.1,superfans));
    if(likes >= superFanCost){
        superfans = superfans + 1;
    	likes = likes - superFanCost;
        document.getElementById('superfans').innerHTML = superfans;
        lps += superFanLPS;
		updateLPS();
    }
	else {
		notEnoughLikes();
	};
	var nextCostSuperFan = Math.floor(100 * Math.pow(1.1,superfans));
    document.getElementById('superFanCost').innerHTML = nextCostSuperFan;
};

//x2 SUPER FANS
function doubleSuperFan(){
    var doubleSuperFanCost = 1000;
    if(likes >= doubleSuperFanCost){
    	likes = likes - doubleSuperFanCost;
        updateLikes();
		removeDoubleSuperFan();
		doubleSuperFanLPS();
		updateLPS();
		doubleSuperFansPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleSuperFan() 
{ 
   var rmvDoubleSuperFan = document.getElementById("DoubleSuperFans"); 
   rmvDoubleSuperFan.style.display="none"; 
   rmvDoubleSuperFan.style.visibility="hidden";
   var rmvDoubleSuperFanBR = document.getElementById("brDoubleSuper"); 
   rmvDoubleSuperFanBR.style.display="none"; 
   rmvDoubleSuperFanBR.style.visibility="hidden";
}

function recreateDoubleSuperFan() 
{ 
   var rctDoubleSuperFan = document.getElementById("DoubleSuperFans"); 
   rctDoubleSuperFan.style.display="block"; 
   rctDoubleSuperFan.style.visibility="initial";
   var rctDoubleSuperFanBR = document.getElementById("brDoubleSuper"); 
   rctDoubleSuperFanBR.style.display="block"; 
   rctDoubleSuperFanBR.style.visibility="initial";
}

function doubleSuperFanLPS() {
	var doubleSuperFansLPS = document.getElementById("DoubleSuperFans");
	if (doubleSuperFansLPS.style.visibility == "hidden") {
			superFanLPS = 4;
			updateLPS();
		} else {
			superFanLPS = 2;
		}
}

//+1 MEGA FAN
function addMegaFan(){
    var megaFanCost = Math.floor(500 * Math.pow(1.1,megafans));
    if(likes >= megaFanCost){
        megafans = megafans + 1;
    	likes = likes - megaFanCost;
        document.getElementById('megafans').innerHTML = megafans;
        lps += megaFanLPS;
		updateLPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostMegaFan = Math.floor(500 * Math.pow(1.1,megafans));
    document.getElementById('megaFanCost').innerHTML = nextCostMegaFan;
};

//x2 MEGA FANS
function doubleMegaFan(){
    var doubleUltraFanCost = 6000;
    if(likes >= doubleMegaFanCost){
    	likes = likes - doubleMegaFanCost;
        updateLikes();
		removeDoubleMegaFan();
		doubleMegaFanLPS();
		updateLPS();
		doubleMegaFansPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleMegaFan() 
{ 
   var rmvDoubleMegaFan = document.getElementById("DoubleMegaFans"); 
   rmvDoubleMegaFan.style.display="none"; 
   rmvDoubleMegaFan.style.visibility="hidden";
   var rmvDoubleMegaFanBR = document.getElementById("brDoubleMega"); 
   rmvDoubleMegaFanBR.style.display="none"; 
   rmvDoubleMegaFanBR.style.visibility="hidden";
}

function recreateDoubleMegaFan() 
{ 
   var rctDoubleMegaFan = document.getElementById("DoubleMegaFans"); 
   rctDoubleMegaFan.style.display="block"; 
   rctDoubleMegaFan.style.visibility="initial";
   var rctDoubleMegaFanBR = document.getElementById("brDoubleMega"); 
   rctDoubleMegaFanBR.style.display="block"; 
   rctDoubleMegaFanBR.style.visibility="initial";
}

function doubleMegaFanLPS() {
	var doubleMegaFansLPS = document.getElementById("DoubleMegaFans");
	if (doubleMegaFansLPS.style.visibility == "hidden") {
			megaFanLPS = 8;
			updateLPS();
		} else {
			megaFanLPS = 4;
		}
}

//+1 ULTRA FAN
function addUltraFan(){
    var ultraFanCost = Math.floor(1000 * Math.pow(1.1,ultrafans));
    if(likes >= ultraFanCost){
        ultrafans = ultrafans + 1;
    	likes = likes - ultraFanCost;
        document.getElementById('ultrafans').innerHTML = ultrafans;
        lps += ultraFanLPS;
		updateLPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostUltraFan = Math.floor(1000 * Math.pow(1.1,ultrafans));
    document.getElementById('ultraFanCost').innerHTML = nextCostUltraFan;
};

//x2 ULTRA FANS
function doubleUltraFan(){
    var doubleUltraFanCost = 12000;
    if(likes >= doubleUltraFanCost){
    	likes = likes - doubleUltraFanCost;
        updateLikes();
		removeDoubleUltraFan();
		doubleUltraFanLPS();
		updateLPS();
		doubleUltraFansPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleUltraFan() 
{ 
   var rmvDoubleUltraFan = document.getElementById("DoubleUltraFans"); 
   rmvDoubleUltraFan.style.display="none"; 
   rmvDoubleUltraFan.style.visibility="hidden";
   var rmvDoubleUltraFanBR = document.getElementById("brDoubleUltra"); 
   rmvDoubleUltraFanBR.style.display="none"; 
   rmvDoubleUltraFanBR.style.visibility="hidden";
}

function recreateDoubleUltraFan() 
{ 
   var rctDoubleUltraFan = document.getElementById("DoubleUltraFans"); 
   rctDoubleUltraFan.style.display="block"; 
   rctDoubleUltraFan.style.visibility="initial";
   var rctDoubleUltraFanBR = document.getElementById("brDoubleUltra"); 
   rctDoubleUltraFanBR.style.display="block"; 
   rctDoubleUltraFanBR.style.visibility="initial";
}

function doubleUltraFanLPS() {
	var doubleUltraFansLPS = document.getElementById("DoubleUltraFans");
	if (doubleUltraFansLPS.style.visibility == "hidden") {
			ultraFanLPS = 16;
			updateLPS();
		} else {
			ultraFanLPS = 8;
		}
}

//+1 HIPER FAN
function addHiperFan(){
    var hiperFanCost = Math.floor(5000 * Math.pow(1.1,hiperfans));
    if(likes >= hiperFanCost){
        hiperfans = hiperfans + 1;
    	likes = likes - hiperFanCost;
        document.getElementById('hiperfans').innerHTML = hiperfans;
        lps += ultraFanLPS;
		updateLPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostHiperFan = Math.floor(5000 * Math.pow(1.1,hiperfans));
    document.getElementById('hiperFanCost').innerHTML = nextCostHiperFan;
};

//x2 HIPER FANS
function doubleHiperFan(){
    var doubleHiperFanCost = 25000;
    if(likes >= doubleHiperFanCost){
    	likes = likes - doubleHiperFanCost;
        updateLikes();
		removeDoubleHiperFan();
		doubleHiperFanLPS();
		updateLPS();
		doubleHiperFansPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleHiperFan() 
{ 
   var rmvDoubleHiperFan = document.getElementById("DoubleHiperFans"); 
   rmvDoubleHiperFan.style.display="none"; 
   rmvDoubleHiperFan.style.visibility="hidden";
   var rmvDoubleHiperFanBR = document.getElementById("brDoubleHiper"); 
   rmvDoubleHiperFanBR.style.display="none"; 
   rmvDoubleHiperFanBR.style.visibility="hidden";
}

function recreateDoubleHiperFan() 
{ 
   var rctDoubleHiperFan = document.getElementById("DoubleHiperFans"); 
   rctDoubleHiperFan.style.display="block"; 
   rctDoubleHiperFan.style.visibility="initial";
   var rctDoubleHiperFanBR = document.getElementById("brDoubleHiper"); 
   rctDoubleHiperFanBR.style.display="block"; 
   rctDoubleHiperFanBR.style.visibility="initial";
}

function doubleHiperFanLPS() {
	var doubleHiperFanLPS = document.getElementById("DoubleHiperFans");
	if (doubleHiperFanLPS.style.visibility == "hidden") {
			hiperFanLPS = 32;
			updateLPS();
		} else {
			ultraFanLPS = 16;
		}
}

//+1 BOT
function addBot(){
    var botCost = Math.floor(10000 * Math.pow(1.1,bots));
    if(likes >= botCost){
        bots = bots + 1;
    	likes = likes - botCost;
        document.getElementById('bots').innerHTML = bots;
        lps += botLPS;
		updateLPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostBot = Math.floor(10000 * Math.pow(1.1,bots));
    document.getElementById('botCost').innerHTML = nextCostBot;
};

//x2 BOTS
function doubleBots(){
    var doubleBotsCost = 50000;
    if(likes >= doubleBotsCost){
    	likes = likes - doubleBotsCost;
        updateLikes();
		removeDoubleBots();
		doubleBotsLPS();
		updateLPS();
		doubleBotsPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleBots()
{ 
   var rmvDoubleBots = document.getElementById("DoubleBots"); 
   rmvDoubleBots.style.display="none"; 
   rmvDoubleBots.style.visibility="hidden";
   var rmvDoubleBotsBR = document.getElementById("brDoubleBot"); 
   rmvDoubleBotsBR.style.display="none"; 
   rmvDoubleBotsBR.style.visibility="hidden";
}

function recreateDoubleBots()
{ 
   var rctDoubleBots = document.getElementById("DoubleBots"); 
   rctDoubleBots.style.display="block"; 
   rctDoubleBots.style.visibility="initial";
   var rctDoubleBotsBR = document.getElementById("brDoubleBot"); 
   rctDoubleBotsBR.style.display="block"; 
   rctDoubleBotsBR.style.visibility="initial";
}

function doubleBotsLPS() {
	var doubleBotsLPS = document.getElementById("DoubleBots");
	if (doubleBotsLPS.style.visibility == "hidden") {
			botLPS = 64;
			updateLPS();
		} else {
			botLPS = 32;
		}
}

//+1 CLICK
function addClick(){
    var addClickCost = Math.floor(20000 * Math.pow(1.1,lpc));
    if(likes >= addClickCost){
        lpc = lpc + 1;
    	likes = likes - addClickCost;
        document.getElementById('lpc').innerHTML = lpc;
		document.getElementById('addClickCost').innerHTML = nextCostAddClick;
        updateLikes();
		updateLPC();
    }
	else {
		notEnoughLikes();
	};
    var nextCostAddClick = Math.floor(20000 * Math.pow(1.1,lpc));
    document.getElementById('addClickCost').innerHTML = nextCostAddClick;
};

//x2 CLICK
function doubleClick(){
    var doubleClickCost = 45000;
    if(likes >= doubleClickCost){
        lpc = lpc * 2;
    	likes = likes - doubleClickCost;
        document.getElementById('lpc').innerHTML = lpc;
		var nextCostAddClick = Math.floor(20000 * Math.pow(1.1,lpc));
		document.getElementById('addClickCost').innerHTML = nextCostAddClick;
        updateLikes();
		removeDoubleClick();
		updateLPC();
		doubleClickPurchased = 1;
		document.getElementById("newupgradeicon").style.display = "none";
		document.getElementById("newupgradeicon").style.visibility = "hidden";
		document.getElementById("newupgradeicon2").style.display = "none";
		document.getElementById("newupgradeicon2").style.visibility="hidden";
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleClick()
{ 
   var rmvDoubleClick = document.getElementById("DoubleClick");
   rmvDoubleClick.style.display="none";
   rmvDoubleClick.style.visibility="hidden";
   /*var rmvDoubleClickBR = document.getElementById("brDoubleClick");
   rmvDoubleClickBR.style.display="none";
   rmvDoubleClickBR.style.visibility="hidden";*/
}

function recreateDoubleClick()
{ 
   var rctDoubleClick = document.getElementById("DoubleClick"); 
   rctDoubleClick.style.display="block"; 
   rctDoubleClick.style.visibility="initial";
   /*var rctDoubleClickBR = document.getElementById("brDoubleClick"); 
   rctDoubleClickBR.style.display="block"; 
   rctDoubleClickBR.style.visibility="initial";*/
}

//INSUFFICIENT LIKES
function notEnoughLikes() {
	createNotEnoughLikes();
	window.setTimeout(function(){
		removeNotEnoughLikes();
	}, 3000);
}

function createNotEnoughLikes()                                 //"creates" the text "You have not got enough likes."
{ 
   var crtNotEnoughLikes = document.getElementById("NotEnoughLikes"); 
   crtNotEnoughLikes.style.display="block"; 
   crtNotEnoughLikes.style.visibility="visible"; 
}

function removeNotEnoughLikes()                                 //"remove" the text "You have not got enough likes."
{ 
   var rmvNotEnoughLikes = document.getElementById("NotEnoughLikes");
   rmvNotEnoughLikes.style.display="none";
   rmvNotEnoughLikes.style.visibility="hidden";
}

//FUNCTION OF UPDATING LIKES
function updateLikes(){
	document.getElementById('LabelLikes').innerHTML = nf.format(likes);
	document.getElementById('likestxt').innerHTML = "You have " + nf.format(likes) + " likes";
}

//FUNCTION OF UPDATING LPS
function updateLPS(){
	document.getElementById('lps').innerHTML = 'LPS: ' + nf.format(lps);
	document.getElementById('followerLPS').innerHTML = followerLPS;
	document.getElementById('superFanLPS').innerHTML = superFanLPS;
	document.getElementById('megaFanLPS').innerHTML = megaFanLPS;
	document.getElementById('ultraFanLPS').innerHTML = ultraFanLPS;
	document.getElementById('hiperFanLPS').innerHTML = hiperFanLPS;
	document.getElementById('botLPS').innerHTML = botLPS;
}

//FUNCTION OF UPDATING LPC
function updateLPC(){
	document.getElementById('lpc').innerHTML = 'LPC: ' + nf.format(lpc);
	document.getElementById('lpcshop').innerHTML = nf.format(lpc);
}

//TIME INTERVAL (LIKES PER SECOND)
window.setInterval(function(){
	likes += (followerLPS * followers);
	likes += (superFanLPS * superfans);
	likes += (megaFanLPS * megafans);
	likes += (ultraFanLPS * ultrafans);
	likes += (hiperFanLPS * hiperfans);
	likes += (botLPS * bots);
	updateLikes();
}, 1000);

//TABS
function showHome() {
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="none";
	ShopPage.style.visibility="hidden";
	document.getElementById("MenuCellShop").style.background="#c1c1c1";
	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="none";
	SettingsPage.style.visibility="hidden";
	document.getElementById("MenuCellSettings").style.background="#c1c1c1";
	
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="block"; 
	LikePage.style.visibility="visible";
	document.getElementById("MenuCellHome").style.background="#a3a3a3";
}

function showShop() {
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="none"; 
	LikePage.style.visibility="hidden";
	document.getElementById("MenuCellHome").style.background="#c1c1c1";
	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="none";
	SettingsPage.style.visibility="hidden";
	document.getElementById("MenuCellSettings").style.background="#c1c1c1";
	
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="block";
	ShopPage.style.visibility="visible";
	document.getElementById("MenuCellShop").style.background="#a3a3a3";
}

function showSettings() {
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="none"; 
	LikePage.style.visibility="hidden";
	document.getElementById("MenuCellHome").style.background="#c1c1c1";
	
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="none";
	ShopPage.style.visibility="hidden";
	document.getElementById("MenuCellShop").style.background="#c1c1c1";
	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="block";
	SettingsPage.style.visibility="visible";
	document.getElementById("MenuCellSettings").style.background="#a3a3a3";
}

function showShopTab() {
	var UpgradeTab = document.getElementById("UpgradeTab"); 
	UpgradeTab.style.display="none";
	UpgradeTab.style.visibility="hidden";
	document.getElementById("MenuUpgradesTab").style.background="#c1c1c1";
	
	var ShopTab = document.getElementById("ShopTab"); 
	ShopTab.style.display="block"; 
	ShopTab.style.visibility="visible";
	document.getElementById("MenuShopTab").style.background="#a3a3a3";
}

function showUpgradesTab() {
	var UpgradeTab = document.getElementById("UpgradeTab"); 
	UpgradeTab.style.display="block";
	UpgradeTab.style.visibility="visible";
	document.getElementById("MenuUpgradesTab").style.background="#a3a3a3";
	
	var ShopTab = document.getElementById("ShopTab"); 
	ShopTab.style.display="none"; 
	ShopTab.style.visibility="hidden";
	document.getElementById("MenuShopTab").style.background="#c1c1c1";
}

//DIALOGS
var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('.showchangelog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
	
	var dialogReset = document.querySelector('#resetDialog');
    var showDialogResetButton = document.querySelector('.reset');
    if (! dialogReset.showModal) {
      dialogPolyfill.registerDialog(dialogReset);
    }
    showDialogResetButton.addEventListener('click', function() {
		dialogReset.showModal();
    });
    dialogReset.querySelector('.closedialog').addEventListener('click', function() {
      dialogReset.close();
    });
	dialogReset.querySelector('.resetgame').addEventListener('click', function() {
      dialogReset.close();
    });
	
var dialogCredits = document.querySelector('#creditsDialog');
var showDialogCreditsButton = document.querySelector('.showcredits');
if (! dialogCredits.showModal) {
	dialogPolyfill.registerDialog(dialogCredits);
}
showDialogCreditsButton.addEventListener('click', function() {
	document.getElementById('creditsiframe').src = document.getElementById('creditsiframe').src;
	dialogCredits.showModal();
});
dialogCredits.querySelector('.closecredits').addEventListener('click', function() {
	dialogCredits.close();
});

/*function creditsReset() {
	document.getElementById('creditsDialog').src = document.getElementById('creditsDialog').src;
}*/

function showLikeOverlay() {
	document.querySelector("#like-icon").style.color = "#595959";
}

function hideLikeOverlay() {
	document.querySelector("#like-icon").style.color = "black";	
}

document.getElementById("newupgradeicon").style.display = "none";
document.getElementById("newupgradeicon").style.visibility = "hidden";
document.getElementById("newupgradeicon2").style.display = "none";
document.getElementById("newupgradeicon2").style.visibility="hidden";

window.setInterval(function(){
	if (followers >= 10 && hypeFollowersPurchased == 0) {
		recreateHypeFollowers();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

window.setInterval(function(){
	if (superfans >= 10 && doubleSuperFansPurchased == 0) {
		recreateDoubleSuperFan();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

window.setInterval(function(){
	if (megafans >= 10 && doubleMegaFansPurchased == 0) {
		recreateDoubleMegaFan();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

window.setInterval(function(){
	if (ultrafans >= 10 && doubleUltraFansPurchased == 0) {
		recreateDoubleUltraFan();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

window.setInterval(function(){
	if (hiperfans >= 10 && doubleHiperFansPurchased == 0) {
		recreateDoubleHiperFan();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

window.setInterval(function(){
	if (bots >= 10 && doubleBotsPurchased == 0) {
		recreateDoubleBots();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

window.setInterval(function(){
	if (lpc >= 10 && doubleClickPurchased == 0) {
		recreateDoubleClick();
		document.getElementById("newupgradeicon").style.display = "initial";
		document.getElementById("newupgradeicon").style.visibility = "visible";
		document.getElementById("newupgradeicon2").style.display = "initial";
		document.getElementById("newupgradeicon2").style.visibility="visible";
	}
}, 100);

var unknvar = 0;

function unknfunc(){
	if (unknvar == 0){
		unknvar = 1;
	}
	else if (unknvar == 1){
		unknvar = 2;
	}
	else if (unknvar == 2){
		unknvar = 3;
	}
	else if (unknvar == 3){
		unknvar = 4;
	}
	else if (unknvar == 4){
		showunkndlg();
		document.getElementById('minigameiframe').src = document.getElementById('minigameiframe').src;
	}
}

var dialogUnknown = document.querySelector('#eastereggDialog');
if (! dialogUnknown.showModal) {
	dialogPolyfill.registerDialog(dialogUnknown);
}
dialogUnknown.querySelector('.closeminigame').addEventListener('click', function() {
	dialogUnknown.close();
	unknvar = 0;
});

function showunkndlg(){
	dialogUnknown.showModal();
}

function saveGame() {
	localStorage.setItem("likes", JSON.stringify(likes));
	localStorage.setItem("lps", JSON.stringify(lps));
	localStorage.setItem("lpc", JSON.stringify(lpc));
	localStorage.setItem("followerLPS", JSON.stringify(followerLPS));
	localStorage.setItem("followers", JSON.stringify(followers));
	localStorage.setItem("superFanLPS", JSON.stringify(superFanLPS));
	localStorage.setItem("superfans", JSON.stringify(superfans));
	localStorage.setItem("megaFanLPS", JSON.stringify(megaFanLPS));
	localStorage.setItem("megafans", JSON.stringify(megafans));
	localStorage.setItem("ultraFanLPS", JSON.stringify(ultraFanLPS));
	localStorage.setItem("ultrafans", JSON.stringify(ultrafans));
	localStorage.setItem("hiperFanLPS", JSON.stringify(hiperFanLPS));
	localStorage.setItem("hiperfans", JSON.stringify(hiperfans));
	localStorage.setItem("botLPS", JSON.stringify(botLPS));
	localStorage.setItem("bots", JSON.stringify(bots));
	localStorage.setItem("followerCost", JSON.stringify(followerCost));
	localStorage.setItem("superFanCost", JSON.stringify(superFanCost));
	localStorage.setItem("megaFanCost", JSON.stringify(megaFanCost));
	localStorage.setItem("ultraFanCost", JSON.stringify(ultraFanCost));
	localStorage.setItem("hiperFanCost", JSON.stringify(hiperFanCost));
	localStorage.setItem("botCost", JSON.stringify(botCost));
	localStorage.setItem("addClickCost", JSON.stringify(Math.floor(20000 * Math.pow(1.1,lpc))));
	localStorage.setItem("hypeFollowersPurchased", JSON.stringify(hypeFollowersPurchased));
	localStorage.setItem("doubleSuperFansPurchased", JSON.stringify(doubleSuperFansPurchased));
	localStorage.setItem("doubleMegaFansPurchased", JSON.stringify(doubleMegaFansPurchased));
	localStorage.setItem("doubleUltraFansPurchased", JSON.stringify(doubleUltraFansPurchased));
	localStorage.setItem("doubleHiperFansPurchased", JSON.stringify(doubleHiperFansPurchased));
	localStorage.setItem("doubleBotsPurchased", JSON.stringify(doubleBotsPurchased));
	localStorage.setItem("doubleClickPurchased", JSON.stringify(doubleClickPurchased));
	localStorage.setItem("autoSaveEnabled", JSON.stringify(autoSaveEnabled));
	localStorage.setItem("darkThemeEnabled", JSON.stringify(darkThemeEnabled));
	localStorage.setItem("musicsEnabled", JSON.stringify(musicsEnabled));
	saveGameAlert();
}

function loadGame() {
	likes = JSON.parse(localStorage.getItem("likes"));
	if (JSON.parse(localStorage.getItem("likes")) == null) {
		likes = 0;
	}
	lps = JSON.parse(localStorage.getItem("lps"));
	if (JSON.parse(localStorage.getItem("lps")) == null) {
		lps = 0;
	}
	lpc = JSON.parse(localStorage.getItem("lpc"));
	if (JSON.parse(localStorage.getItem("lpc")) == null) {
		lpc = 1;
	}
	followerLPS = JSON.parse(localStorage.getItem("followerLPS"));
	if (JSON.parse(localStorage.getItem("followerLPS")) == null) {
		followerLPS = 1;
	}
	followers = JSON.parse(localStorage.getItem("followers"));
	if (JSON.parse(localStorage.getItem("followers")) == null) {
		followers = 0;
	}
	superFanLPS = JSON.parse(localStorage.getItem("superFanLPS"));
	if (JSON.parse(localStorage.getItem("superFanLPS")) == null) {
		superFanLPS = 2;
	}
	superfans = JSON.parse(localStorage.getItem("superfans"));
	if (JSON.parse(localStorage.getItem("superfans")) == null) {
		superfans = 0;
	}
	megaFanLPS = JSON.parse(localStorage.getItem("megaFanLPS"));
	if (JSON.parse(localStorage.getItem("megaFanLPS")) == null) {
		megaFanLPS = 4;
	}
	megafans = JSON.parse(localStorage.getItem("megafans"));
	if (JSON.parse(localStorage.getItem("megafans")) == null) {
		megafans = 0;
	}
	ultraFanLPS = JSON.parse(localStorage.getItem("ultraFanLPS"));
	if (JSON.parse(localStorage.getItem("ultraFanLPS")) == null) {
		ultraFanLPS = 8;
	}
	ultrafans = JSON.parse(localStorage.getItem("ultrafans"));
	if (JSON.parse(localStorage.getItem("ultrafans")) == null) {
		ultrafans = 0;
	}
	hiperFanLPS = JSON.parse(localStorage.getItem("hiperFanLPS"));
	if (JSON.parse(localStorage.getItem("hiperFanLPS")) == null) {
		hiperFanLPS = 16;
	}
	hiperfans = JSON.parse(localStorage.getItem("hiperfans"));
	if (JSON.parse(localStorage.getItem("hiperfans")) == null) {
		hiperfans = 0;
	}
	botLPS = JSON.parse(localStorage.getItem("botLPS"));
	if (JSON.parse(localStorage.getItem("botLPS")) == null) {
		botLPS = 16;
	}
	bots = JSON.parse(localStorage.getItem("bots"));
	if (JSON.parse(localStorage.getItem("bots")) == null) {
		bots = 0;
	}
	fanCost = JSON.parse(localStorage.getItem("fanCost"));
	if (JSON.parse(localStorage.getItem("fanCost")) == null) {
		fanCost = 10;
	}
	superFanCost = JSON.parse(localStorage.getItem("superFanCost"));
	if (JSON.parse(localStorage.getItem("superFanCost")) == null) {
		superFanCost = 100;
	}
	megaFanCost = JSON.parse(localStorage.getItem("megaFanCost"));
	if (JSON.parse(localStorage.getItem("megaFanCost")) == null) {
		megaFanCost = 500;
	}
	ultraFanCost = JSON.parse(localStorage.getItem("ultraFanCost"));
	if (JSON.parse(localStorage.getItem("ultraFanCost")) == null) {
		ultraFanCost = 1000;
	}
	hiperFanCost = JSON.parse(localStorage.getItem("hiperFanCost"));
	if (JSON.parse(localStorage.getItem("hiperFanCost")) == null) {
		hiperFanCost = 5000;
	}
	botCost = JSON.parse(localStorage.getItem("botCost"));
	if (JSON.parse(localStorage.getItem("botCost")) == null) {
		botCost = 10000;
	}
	addClickCost = JSON.parse(localStorage.getItem("addClickCost"));
	if (JSON.parse(localStorage.getItem("addClickCost")) == null) {
		addClickCost = 22000;
	}
	hypeFollowersPurchased = JSON.parse(localStorage.getItem("hypeFollowersPurchased"));
	if (JSON.parse(localStorage.getItem("hypeFollowersPurchased")) == null) {
		hypeFollowersPurchased = 0;
	}
	doubleSuperFansPurchased = JSON.parse(localStorage.getItem("doubleSuperFansPurchased"));
	if (JSON.parse(localStorage.getItem("doubleSuperFansPurchased")) == null) {
		doubleSuperFansPurchased = 0;
	}
	doubleMegaFansPurchased = JSON.parse(localStorage.getItem("doubleMegaFansPurchased"));
	if (JSON.parse(localStorage.getItem("doubleMegaFansPurchased")) == null) {
		doubleMegaFansPurchased = 0;
	}
	doubleUltraFansPurchased = JSON.parse(localStorage.getItem("doubleUltraFansPurchased"));
	if (JSON.parse(localStorage.getItem("doubleUltraFansPurchased")) == null) {
		doubleUltraFansPurchased = 0;
	}
	doubleHiperFansPurchased = JSON.parse(localStorage.getItem("doubleHiperFansPurchased"));
	if (JSON.parse(localStorage.getItem("doubleHiperFansPurchased")) == null) {
		doubleHiperFansPurchased = 0;
	}
	doubleBotsPurchased = JSON.parse(localStorage.getItem("doubleBotsPurchased"));
	if (JSON.parse(localStorage.getItem("doubleBotsPurchased")) == null) {
		doubleBotsPurchased = 0;
	}
	doubleClickPurchased = JSON.parse(localStorage.getItem("doubleClickPurchased"));
	if (JSON.parse(localStorage.getItem("doubleClickPurchased")) == null) {
		doubleClickPurchased = 0;
	}
	autoSaveEnabled = JSON.parse(localStorage.getItem("autoSaveEnabled"));
	if (JSON.parse(localStorage.getItem("autoSaveEnabled")) == null) {
		autoSaveEnabled = 1;
	}
	darkThemeEnabled = JSON.parse(localStorage.getItem("darkThemeEnabled"));
	if (JSON.parse(localStorage.getItem("darkThemeEnabled")) == null) {
		darkThemeEnabled = 0;
	}
	musicsEnabled = JSON.parse(localStorage.getItem("musicsEnabled"));
	if (JSON.parse(localStorage.getItem("musicsEnabled")) == null) {
		musicsEnabled = 1;
	}
	
	updateLikes();
	updateLPS();
	updateLPC();
	
	document.getElementById('followers').innerHTML = nf.format(followers);
	document.getElementById('followerLPS').innerHTML = followerLPS;
	document.getElementById('followerCost').innerHTML = nf.format(followerCost);
	document.getElementById('superfans').innerHTML = nf.format(superfans);
	document.getElementById('superFanLPS').innerHTML = superFanLPS;
	document.getElementById('superFanCost').innerHTML = nf.format(superFanCost);
	document.getElementById('megafans').innerHTML = nf.format(megafans);
	document.getElementById('megaFanLPS').innerHTML = megaFanLPS;
	document.getElementById('megaFanCost').innerHTML = nf.format(megaFanCost);
	document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
	document.getElementById('ultraFanLPS').innerHTML = ultraFanLPS;
	document.getElementById('ultraFanCost').innerHTML = nf.format(ultraFanCost);
	document.getElementById('hiperfans').innerHTML = nf.format(hiperfans);
	document.getElementById('hiperFanLPS').innerHTML = hiperFanLPS;
	document.getElementById('hiperFanCost').innerHTML = nf.format(hiperFanCost);
	document.getElementById('bots').innerHTML = nf.format(bots);
	document.getElementById('botLPS').innerHTML = botLPS;
	document.getElementById('botCost').innerHTML = nf.format(botCost);
	document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);
}

function enableDisableAutoSave() {
	if (autoSaveEnabled == 0) {
		var saveenabledcheckbox = document.getElementById("saveenabled");
		saveenabledcheckbox.style.display="block";
		saveenabledcheckbox.style.visibility="initial";
	
		var savedisabledcheckbox = document.getElementById("savedisabled");
		savedisabledcheckbox.style.display="none";
		savedisabledcheckbox.style.visibility="hidden";
		
		autoSaveEnabled = 1;
	} else if (autoSaveEnabled == 1) {
		var saveenabledcheckbox = document.getElementById("saveenabled");
		saveenabledcheckbox.style.display="none";
		saveenabledcheckbox.style.visibility="hidden";
	
		var savedisabledcheckbox = document.getElementById("savedisabled");
		savedisabledcheckbox.style.display="block";
		savedisabledcheckbox.style.visibility="initial";
		
		autoSaveEnabled = 0;
	}
}

window.setInterval(function(){
	if (autoSaveEnabled == 1) {
		saveGame();
	}
}, 30000);

function saveGameAlert() {
	createSaveGameAlert();
	window.setTimeout(function(){
		removeSaveGameAlert();
	}, 3000);
}

function createSaveGameAlert()
{ 
   var crtSaveGameAlert = document.getElementById("SaveGameAlert"); 
   crtSaveGameAlert.style.display="block"; 
   crtSaveGameAlert.style.visibility="visible"; 
}

function removeSaveGameAlert()
{ 
   var rmvSaveGameAlert = document.getElementById("SaveGameAlert");
   rmvSaveGameAlert.style.display="none";
   rmvSaveGameAlert.style.visibility="hidden";
}

if (lpc == 1) {
	addClickCost = 20000;
	document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);
} else if (lpc > 1) {
	addClickCost = Math.floor(20000 * Math.pow(1.1,lpc));
	document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);
}

function enableDisableDarkTheme() {
	if (darkThemeEnabled == 0) {
		var darkthemeenabledcheckbox = document.getElementById("darkthemeenabled");
		darkthemeenabledcheckbox.style.display="block";
		darkthemeenabledcheckbox.style.visibility="initial";
	
		var darkthemedisabledcheckbox = document.getElementById("darkthemedisabled");
		darkthemedisabledcheckbox.style.display="none";
		darkthemedisabledcheckbox.style.visibility="hidden";
		
		darkThemeEnabled = 1;
	} else if (darkThemeEnabled == 1) {
		var darkthemeenabledcheckbox = document.getElementById("darkthemeenabled");
		darkthemeenabledcheckbox.style.display="none";
		darkthemeenabledcheckbox.style.visibility="hidden";
	
		var darkthemedisabledcheckbox = document.getElementById("darkthemedisabled");
		darkthemedisabledcheckbox.style.display="block";
		darkthemedisabledcheckbox.style.visibility="initial";
		
		darkThemeEnabled = 0;
	}
}

window.setInterval(function(){
	if (darkThemeEnabled == 0) {
		disableDarkTheme();
	} else if (darkThemeEnabled == 1) {
		enableDarkTheme();
	}
}, 100);

function enableDarkTheme() {
	var darkthemeenabledcheckbox = document.getElementById("darkthemeenabled");
	darkthemeenabledcheckbox.style.display="block";
	darkthemeenabledcheckbox.style.visibility="initial";
	var darkthemedisabledcheckbox = document.getElementById("darkthemedisabled");
	darkthemedisabledcheckbox.style.display="none";
	darkthemedisabledcheckbox.style.visibility="hidden";
	document.body.style.background = "#333333";
	document.body.style.color = "white";
	document.getElementById("TopActionBar").style.borderBottom = "1px solid white";
	document.getElementById("TopActionBar").style.backgroundColor = "#333333";
	document.querySelector(".likelabelicon").style.color = "white";
	document.querySelector(".likeicon").style.color = "white";
	document.querySelector(".shopitem1").style.backgroundColor = "#333333";
	document.querySelector(".shopitem1").style.border = "1px solid white";
	document.querySelector(".shopitem1btn").style.border = "1px solid white";
	document.querySelector(".shopitem1icon").style.color = "white";
	document.querySelector(".shopitem2").style.backgroundColor = "#333333";
	document.querySelector(".shopitem2").style.border = "1px solid white";
	document.querySelector(".shopitem2btn").style.border = "1px solid white";
	document.querySelector(".shopitem2icon").style.color = "white";
	document.querySelector(".shopitem3").style.backgroundColor = "#333333";
	document.querySelector(".shopitem3").style.border = "1px solid white";
	document.querySelector(".shopitem3btn").style.border = "1px solid white";
	document.querySelector(".shopitem3icon").style.color = "white";
	document.querySelector(".shopitem4").style.backgroundColor = "#333333";
	document.querySelector(".shopitem4").style.border = "1px solid white";
	document.querySelector(".shopitem4btn").style.border = "1px solid white";
	document.querySelector(".shopitem4icon").style.color = "white";
	document.querySelector(".shopitem5").style.backgroundColor = "#333333";
	document.querySelector(".shopitem5").style.border = "1px solid white";
	document.querySelector(".shopitem5btn").style.border = "1px solid white";
	document.querySelector(".shopitem5icon").style.color = "white";
	document.querySelector(".shopitem6").style.backgroundColor = "#333333";
	document.querySelector(".shopitem6").style.border = "1px solid white";
	document.querySelector(".shopitem6btn").style.border = "1px solid white";
	document.querySelector(".shopitem6icon").style.color = "white";
	document.querySelector(".shopitem7").style.backgroundColor = "#333333";
	document.querySelector(".shopitem7").style.border = "1px solid white";
	document.querySelector(".shopitem7btn").style.border = "1px solid white";
	document.querySelector(".shopitem7icon").style.color = "white";
	document.querySelector(".shopitem8").style.backgroundColor = "#333333";
	document.querySelector(".shopitem8").style.border = "1px solid white";
	document.querySelector(".shopitem8btn").style.border = "1px solid white";
	document.querySelector(".shopitem8icon").style.color = "white";
	document.querySelector(".shopitem9").style.backgroundColor = "#333333";
	document.querySelector(".shopitem9").style.border = "1px solid white";
	document.querySelector(".shopitem9btn").style.border = "1px solid white";
	document.querySelector(".shopitem9icon").style.color = "white";
	document.querySelector(".shopitem10").style.backgroundColor = "#333333";
	document.querySelector(".shopitem10").style.border = "1px solid white";
	document.querySelector(".shopitem10btn").style.border = "1px solid white";
	document.querySelector(".shopitem10icon").style.color = "white";
	document.querySelector(".shopitem11").style.backgroundColor = "#333333";
	document.querySelector(".shopitem11").style.border = "1px solid white";
	document.querySelector(".shopitem11btn").style.border = "1px solid white";
	document.querySelector(".shopitem11icon").style.color = "white";
	document.querySelector(".shopitem12").style.backgroundColor = "#333333";
	document.querySelector(".shopitem12").style.border = "1px solid white";
	document.querySelector(".shopitem12btn").style.border = "1px solid white";
	document.querySelector(".shopitem12icon").style.color = "white";
	document.querySelector(".shopitem13").style.backgroundColor = "#333333";
	document.querySelector(".shopitem13").style.border = "1px solid white";
	document.querySelector(".shopitem13btn").style.border = "1px solid white";
	document.querySelector(".shopitem13icon").style.color = "white";
	document.querySelector(".shopitem14").style.backgroundColor = "#333333";
	document.querySelector(".shopitem14").style.border = "1px solid white";
	document.querySelector(".shopitem14btn").style.border = "1px solid white";
	document.querySelector(".shopitem14icon").style.color = "white";
	document.querySelector(".commontab").style.borderRight = "1px solid white";
	document.querySelector(".menuicon1").style.color = "white";
	document.querySelector(".menuicon2").style.color = "white";
	document.querySelector(".menuicon3").style.color = "white";
	document.querySelector(".confighr1").style.border = "1px solid white";
	document.querySelector(".confighr2").style.border = "1px solid white";
	document.querySelector(".confighr3").style.border = "1px solid white";
	document.querySelector(".confighr4").style.border = "1px solid white";
	document.querySelector(".confighr5").style.border = "1px solid white";
	document.querySelector(".confighr6").style.border = "1px solid white";
	document.querySelector(".configoption1").style.border = "1px solid white";
	document.querySelector(".configoption1").style.color = "white";
	document.querySelector(".option1icon").style.color = "white";
	document.querySelector(".configoption2").style.border = "1px solid white";
	document.querySelector(".configoption2").style.color = "white";
	document.querySelector(".option2icon").style.color = "white";
	document.querySelector(".configoption3").style.border = "1px solid white";
	document.querySelector(".configoption3").style.color = "white";
	document.querySelector(".option3icon").style.color = "white";
	document.querySelector(".configoption4").style.border = "1px solid white";
	document.querySelector(".configoption4").style.color = "white";
	document.querySelector(".option4icon").style.color = "white";
	document.querySelector(".configoption5").style.border = "1px solid white";
	document.querySelector(".configoption5").style.color = "white";
	document.querySelector(".option5icon").style.color = "white";
	document.querySelector(".configoption6").style.border = "1px solid white";
	document.querySelector(".configoption6").style.color = "white";
	document.querySelector(".option6icon").style.color = "white";
	document.querySelector(".configoption7").style.border = "1px solid white";
	document.querySelector(".configoption7").style.color = "white";
	document.querySelector(".option7icon").style.color = "white";
	document.querySelector(".configoption8").style.border = "1px solid white";
	document.querySelector(".configoption8").style.color = "white";
	document.querySelector(".option8icon").style.color = "white";
	document.querySelector(".configoption9").style.border = "1px solid white";
	document.querySelector(".configoption9").style.color = "white";
	document.querySelector(".option9icon").style.color = "white";
	document.querySelector(".configoption10").style.border = "1px solid white";
	document.querySelector(".configoption10").style.color = "white";
	document.querySelector(".option10icon").style.color = "white";
	document.querySelector(".configoption11").style.border = "1px solid white";
	document.querySelector(".configoption11").style.color = "white";
	document.querySelector(".option11icon").style.color = "white";
	document.querySelector(".configoption12").style.border = "1px solid white";
	document.querySelector(".configoption12").style.color = "white";
	document.querySelector(".option12icon").style.color = "white";
	document.querySelector(".configoption13").style.border = "1px solid white";
	document.querySelector(".configoption13").style.color = "white";
	document.querySelector(".option13icon").style.color = "white";
	document.querySelector(".configoption14").style.border = "1px solid white";
	document.querySelector(".configoption14").style.color = "white";
	document.querySelector(".option14icon").style.color = "white";
	document.querySelector(".configoption15").style.border = "1px solid white";
	document.querySelector(".configoption15").style.color = "white";
	document.querySelector(".option15icon").style.color = "white";
	
	if (musicsEnabled == 1) {
		document.querySelector('#HouseInAForestLoop').pause();
		document.querySelector('#NoMoreMagic').play();
	}
}

function disableDarkTheme() {
	var darkthemeenabledcheckbox = document.getElementById("darkthemeenabled");
	darkthemeenabledcheckbox.style.display="none";
	darkthemeenabledcheckbox.style.visibility="hidden";
	var darkthemedisabledcheckbox = document.getElementById("darkthemedisabled");
	darkthemedisabledcheckbox.style.display="block";
	darkthemedisabledcheckbox.style.visibility="initial";
	document.body.style.background = "white";
	document.body.style.color = "black";
	document.getElementById("TopActionBar").style.borderBottom = "1px solid black";
	document.getElementById("TopActionBar").style.backgroundColor = "white";
	document.querySelector(".likelabelicon").style.color = "black";
	document.querySelector(".likeicon").style.color = "black";
	document.querySelector(".shopitem1").style.backgroundColor = "white";
	document.querySelector(".shopitem1").style.border = "1px solid black";
	document.querySelector(".shopitem1btn").style.border = "1px solid black";
	document.querySelector(".shopitem1icon").style.color = "black";
	document.querySelector(".shopitem2").style.backgroundColor = "white";
	document.querySelector(".shopitem2").style.border = "1px solid black";
	document.querySelector(".shopitem2btn").style.border = "1px solid black";
	document.querySelector(".shopitem2icon").style.color = "black";
	document.querySelector(".shopitem3").style.backgroundColor = "white";
	document.querySelector(".shopitem3").style.border = "1px solid black";
	document.querySelector(".shopitem3btn").style.border = "1px solid black";
	document.querySelector(".shopitem3icon").style.color = "black";
	document.querySelector(".shopitem4").style.backgroundColor = "white";
	document.querySelector(".shopitem4").style.border = "1px solid black";
	document.querySelector(".shopitem4btn").style.border = "1px solid black";
	document.querySelector(".shopitem4icon").style.color = "black";
	document.querySelector(".shopitem5").style.backgroundColor = "white";
	document.querySelector(".shopitem5").style.border = "1px solid black";
	document.querySelector(".shopitem5btn").style.border = "1px solid black";
	document.querySelector(".shopitem5icon").style.color = "black";
	document.querySelector(".shopitem6").style.backgroundColor = "white";
	document.querySelector(".shopitem6").style.border = "1px solid black";
	document.querySelector(".shopitem6btn").style.border = "1px solid black";
	document.querySelector(".shopitem6icon").style.color = "black";
	document.querySelector(".shopitem7").style.backgroundColor = "white";
	document.querySelector(".shopitem7").style.border = "1px solid black";
	document.querySelector(".shopitem7btn").style.border = "1px solid black";
	document.querySelector(".shopitem7icon").style.color = "black";
	document.querySelector(".shopitem8").style.backgroundColor = "white";
	document.querySelector(".shopitem8").style.border = "1px solid black";
	document.querySelector(".shopitem8btn").style.border = "1px solid black";
	document.querySelector(".shopitem8icon").style.color = "black";
	document.querySelector(".shopitem9").style.backgroundColor = "white";
	document.querySelector(".shopitem9").style.border = "1px solid black";
	document.querySelector(".shopitem9btn").style.border = "1px solid black";
	document.querySelector(".shopitem9icon").style.color = "black";
	document.querySelector(".shopitem10").style.backgroundColor = "white";
	document.querySelector(".shopitem10").style.border = "1px solid black";
	document.querySelector(".shopitem10btn").style.border = "1px solid black";
	document.querySelector(".shopitem10icon").style.color = "black";
	document.querySelector(".shopitem11").style.backgroundColor = "white";
	document.querySelector(".shopitem11").style.border = "1px solid black";
	document.querySelector(".shopitem11btn").style.border = "1px solid black";
	document.querySelector(".shopitem11icon").style.color = "black";
	document.querySelector(".shopitem12").style.backgroundColor = "white";
	document.querySelector(".shopitem12").style.border = "1px solid black";
	document.querySelector(".shopitem12btn").style.border = "1px solid black";
	document.querySelector(".shopitem12icon").style.color = "black";
	document.querySelector(".shopitem13").style.backgroundColor = "white";
	document.querySelector(".shopitem13").style.border = "1px solid black";
	document.querySelector(".shopitem13btn").style.border = "1px solid black";
	document.querySelector(".shopitem13icon").style.color = "black";
	document.querySelector(".shopitem14").style.backgroundColor = "white";
	document.querySelector(".shopitem14").style.border = "1px solid black";
	document.querySelector(".shopitem14btn").style.border = "1px solid black";
	document.querySelector(".shopitem14icon").style.color = "black";
	document.querySelector(".commontab").style.borderRight = "1px solid black";
	document.querySelector(".menuicon1").style.color = "black";
	document.querySelector(".menuicon2").style.color = "black";
	document.querySelector(".menuicon3").style.color = "black";
	document.querySelector(".confighr1").style.border = "1px solid black";
	document.querySelector(".confighr2").style.border = "1px solid black";
	document.querySelector(".confighr3").style.border = "1px solid black";
	document.querySelector(".confighr4").style.border = "1px solid black";
	document.querySelector(".confighr5").style.border = "1px solid black";
	document.querySelector(".confighr6").style.border = "1px solid black";
	document.querySelector(".configoption1").style.border = "1px solid black";
	document.querySelector(".configoption1").style.color = "black";
	document.querySelector(".option1icon").style.color = "black";
	document.querySelector(".configoption2").style.border = "1px solid black";
	document.querySelector(".configoption2").style.color = "black";
	document.querySelector(".option2icon").style.color = "black";
	document.querySelector(".configoption3").style.border = "1px solid black";
	document.querySelector(".configoption3").style.color = "black";
	document.querySelector(".option3icon").style.color = "black";
	document.querySelector(".configoption4").style.border = "1px solid black";
	document.querySelector(".configoption4").style.color = "black";
	document.querySelector(".option4icon").style.color = "black";
	document.querySelector(".configoption5").style.border = "1px solid black";
	document.querySelector(".configoption5").style.color = "black";
	document.querySelector(".option5icon").style.color = "black";
	document.querySelector(".configoption6").style.border = "1px solid black";
	document.querySelector(".configoption6").style.color = "black";
	document.querySelector(".option6icon").style.color = "black";
	document.querySelector(".configoption7").style.border = "1px solid black";
	document.querySelector(".configoption7").style.color = "black";
	document.querySelector(".option7icon").style.color = "black";
	document.querySelector(".configoption8").style.border = "1px solid black";
	document.querySelector(".configoption8").style.color = "black";
	document.querySelector(".option8icon").style.color = "black";
	document.querySelector(".configoption9").style.border = "1px solid black";
	document.querySelector(".configoption9").style.color = "black";
	document.querySelector(".option9icon").style.color = "black";
	document.querySelector(".configoption10").style.border = "1px solid black";
	document.querySelector(".configoption10").style.color = "black";
	document.querySelector(".option10icon").style.color = "black";
	document.querySelector(".configoption11").style.border = "1px solid black";
	document.querySelector(".configoption11").style.color = "black";
	document.querySelector(".option11icon").style.color = "black";
	document.querySelector(".configoption12").style.border = "1px solid black";
	document.querySelector(".configoption12").style.color = "black";
	document.querySelector(".option12icon").style.color = "black";
	document.querySelector(".configoption13").style.border = "1px solid black";
	document.querySelector(".configoption13").style.color = "black";
	document.querySelector(".option13icon").style.color = "black";
	document.querySelector(".configoption14").style.border = "1px solid black";
	document.querySelector(".configoption14").style.color = "black";
	document.querySelector(".option14icon").style.color = "black";
	document.querySelector(".configoption15").style.border = "1px solid black";
	document.querySelector(".configoption15").style.color = "black";
	document.querySelector(".option15icon").style.color = "black";
	
	if (musicsEnabled == 1) {
		document.querySelector('#NoMoreMagic').pause();
		document.querySelector('#HouseInAForestLoop').play();
	}
}

function enableDisableMusics() {
	if (musicsEnabled == 0) {
		var musicsenabledcheckbox = document.getElementById("musicsenabled");
		musicsenabledcheckbox.style.display="block";
		musicsenabledcheckbox.style.visibility="initial";
	
		var musicsdisabledcheckbox = document.getElementById("musicsdisabled");
		musicsdisabledcheckbox.style.display="none";
		musicsdisabledcheckbox.style.visibility="hidden";
		
		musicsEnabled = 1;
		manualDarkTheme();
	} else if (musicsEnabled == 1) {
		var musicsenabledcheckbox = document.getElementById("musicsenabled");
		musicsenabledcheckbox.style.display="none";
		musicsenabledcheckbox.style.visibility="hidden";
	
		var musicsdisabledcheckbox = document.getElementById("musicsdisabled");
		musicsdisabledcheckbox.style.display="block";
		musicsdisabledcheckbox.style.visibility="initial";
		
		musicsEnabled = 0;
		stopMusic();
	}
}

if (JSON.parse(localStorage.getItem("musicsEnabled")) == 0) {
	var musicsenabledcheckbox = document.getElementById("musicsenabled");
	musicsenabledcheckbox.style.display="none";
	musicsenabledcheckbox.style.visibility="hidden";
	
	var musicsdisabledcheckbox = document.getElementById("musicsdisabled");
	musicsdisabledcheckbox.style.display="block";
	musicsdisabledcheckbox.style.visibility="initial";
	
	stopMusic();
	} else if (JSON.parse(localStorage.getItem("musicsEnabled")) == 1) {
	var musicsenabledcheckbox = document.getElementById("musicsenabled");
	musicsenabledcheckbox.style.display="block";
	musicsenabledcheckbox.style.visibility="initial";
	
	var musicsdisabledcheckbox = document.getElementById("musicsdisabled");
	musicsdisabledcheckbox.style.display="none";
	musicsdisabledcheckbox.style.visibility="hidden";
	
	stopMusic();
	manualDarkTheme();
}

function stopMusic() {
	document.querySelector('#HouseInAForestLoop').pause();
	document.querySelector('#NoMoreMagic').pause();
}

window.setInterval(function(){
	if (musicsEnabled == 0) {
		stopMusic();
	}
}, 100);