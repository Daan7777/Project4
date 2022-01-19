fetch("https://covid-19-data.p.rapidapi.com/report/country/name?name=Netherlands&date=2022-01-19", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "9b3d94fd5dmsh7a47ad0245605c6p1a2698jsnba06a2a5d08a"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});