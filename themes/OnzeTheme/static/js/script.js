var unirest = require("unirest");

var req = unirest("POST", "https://minecraft-server-status1.p.rapidapi.com/servers/single/lite");

req.headers({
	"content-type": "application/json",
	"x-rapidapi-host": "minecraft-server-status1.p.rapidapi.com",
	"x-rapidapi-key": "9b3d94fd5dmsh7a47ad0245605c6p1a2698jsnba06a2a5d08a",
	"useQueryString": true
});

req.type("json");
req.send({
	"host": "mc.hypixel.net"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});