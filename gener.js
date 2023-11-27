const url = 'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '117c9e5c0amsh4a0f429cd685938p1ed30djsndef3ba6f26d0',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}