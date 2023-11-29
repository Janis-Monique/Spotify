document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchList = document.querySelector('.searchResults');

    searchInput.addEventListener('input', handleSearch);

    async function handleSearch() {
        const query = searchInput.value.trim();

        if (query.length === 0) {
            clearSearchResults();
            return;
        }

        try {
            const data = await getSearchResults(query);
            displaySearchResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }

    function clearSearchResults() {
        searchList.innerHTML = '';
    }

    async function getSearchResults(query) {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '117c9e5c0amsh4a0f429cd685938p1ed30djsndef3ba6f26d0',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    }

    function displaySearchResults(data) {
        let content = '';
        console.log(data);
        for (const result of data.data) {
            const artistPageURL = `https://www.deezer.com/artist/${result.artist.id}`;
            content += `
                <a href="${artistPageURL}" class="box">
                    <img src="${result.album.cover}" alt="">
                    <div class="header">Artist: ${result.artist.name}</div>
                    <div class="header">Title: ${result.title}</div>
                    <div class="header">Album: ${result.album.title}</div>
                </a>
            `;
        }

        searchList.innerHTML = content;
    }
});
