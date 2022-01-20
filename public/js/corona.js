fetch("https://covid-19-data.p.rapidapi.com/report/country/code?code=GB&date=2020-04-01", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});