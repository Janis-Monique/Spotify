const url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffeee28345msh5c6941610732f11p142c84jsn084937dabdce',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}