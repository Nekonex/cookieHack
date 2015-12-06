function loadCookie()
{
	var choice = prompt("Do you want: 1. To set your cookie ammount or 2. To add to your cookie ammount?");
	if (choice = 1) {
	setCookie();
	}
	if (choice = 2) {
	addToAmmount();
	}
}

function setCookie()
{
	var cookieAmmount = prompt("Enter the ammount to set your cookies to:");
	Game.cookies = cookieAmmount;
	Game.Popup("Set cookies!");
	throw '';
}

function addToAmmount()
{
	var cookieAmmountToAdd = prompt("Enter the ammount of cookies you want to add:");
	Game.cookies = Game.cookiesEarned + cookieAmmountToAdd;
	Game.Popup("Added!");
	throw '';
}
