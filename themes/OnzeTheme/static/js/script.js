var unirest = require("unirest");

var req = unirest("POST", "https://minecraft-server-status1.p.rapidapi.com/servers/single/full/live");

req.headers({
	"content-type": "application/json",
	"x-rapidapi-host": "minecraft-server-status1.p.rapidapi.com",
	"x-rapidapi-key": "43fa1b0ac7mshb319b300365de5ap1a70ccjsnf784600171fb",
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