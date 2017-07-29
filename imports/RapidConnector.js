<script>


var GameSession = {
	"players" : [
		"Joe" : {
			"name": "Joe",
			"ready": false,
			"level": 1,
			"points": 0
		},
		"Harjit" : {
			"name": "Harjit"
			"ready": false,
			"level": 1,
			"points": 0
		},
		"Bhavesh" : {
			"name": "Bhavesh",
			"ready": false,
			"level": 1,
			"points": 0
		},
		"Andrew" : {
			"name": "Andrew",
			"ready": false,
			"level": 1,
			"points": 0
		}
	],
	"started": false,
	"completed": false,
	"startCounter" : 5

}

var L1Words = ["are", "ate", "rat", "tar", "pin", "tap", "ski", "sky"];
var L2Words = ["tree", "neat", "tear", "pear", "trap", "prem", "barn", "scar"];
var L3Words = ["burnt", "meant", "paint", "braid", "learn", "rapid", "drear", "point"];
var L4Words = ["parent", "number", "corner", "reader", "seeder", "teeter", "andrew", "harjit", "joseph"];
var L5Words = ["Bhavesh", "letters", "slaters", "columns", "monster", "pranker"];

/**
Create Game Session

GetPlayers()

GetScore(player)

GetWords(level)

ChangeLevel(player, level)

LevelUp(player)

LevelDown(player)

ChangePoints(player, points)

AddPoints(player, points)

SubtractPoints(player, points)

**/

//Returns the array of player objects and everything in them
function GetPlayers()
{
	return GameSession.players;
}

//returns game session object. in case you need something. let me know if you need something that I am not offering
//we will eventually want to stray away from allowing access to the entire game...
function GetGameSession()
{

	return GameSession;
}

function GetPlayer(player)
{

	if(player.points != null)
	{
		return player;
	}else
	{
		return GameSession.players[player];
	}
}

//get scores for a specific player by name
function GetPoints(player)
{
	var p = GetPlayer(player);
	return p.points;
}

function AddPoints(player, points)
{
	var p = GetPlayer(player);
	p.points += points;
	return p;
}

function SubtractPoints(player, points)
{
	var p = GetPlayer(player);
	p.points -= points;
	return p;
}

function LevelUp(player)
{
	var p = GetPlayer(player);
	if(p.level < 5){
		p.level += 1;
	}
	return p;
}

function LevelDown(player)
{
	var p = GetPlayer(player);
	if(p.level > 0){
		p.level -= 1;
	}

	return p;
}
function ChangeLevel(player, level)
{
	var p = GetPlayer(player);
	p.level = level;
	return p;
}

function GetWords(level)
{
	switch(level)
	{
		case 1:
			return L1Words;

		case 2:
			return L2Words;

		case 3:
			return L3Words;

		case 4:
			return L4Words;

		case 5:
			return L5Words;

		case default:
			return ["Andrew/Bhavesh, don't be a cunt and tell me what level you want"];
			

	}

}

</script>