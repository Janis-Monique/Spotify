document.addEventListener("DOMContentLoaded", () => {
	const searchInput = document.getElementById("search");
	const searchList = document.querySelector('.searchResults');
 
	searchInput.addEventListener('input', debounce(handleSearch, 300));
 
	async function handleSearch() {
	   const query = searchInput.value.trim();
 
	   if (query.length === 0) {
		  searchList.innerHTML = '';
		  return;
	   }
 
	   let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
		  method: 'GET',
		  headers: {
			 'X-RapidAPI-Key': '117c9e5c0amsh4a0f429cd685938p1ed30djsndef3ba6f26d0',
			 'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
		  }
	   });
 
	   let data = await response.json();
 
	   let content = '';
 
	   for (const result of data.data) {
		const artistPageURL = `https://www.deezer.com/artist/${result.artist.id}`;
		content += `
			<a href="${artistPageURL}" class="box">
			<img src="${result.album.cover}" alt="">
			<div class="header">Artist: ${result.artist.name}</div>
			<div class="header">Title: ${result.title}</div>
			</a>
		`;
	   }
 
	   searchList.innerHTML = content;
	}
 
	function debounce(func, delay) {
	   let timeoutId;
	   return function () {
		  clearTimeout(timeoutId);
		  timeoutId = setTimeout(() => {
			 func.apply(this, arguments);
		  }, delay);
	   };
	}
});
