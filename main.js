document.addEventListener("DOMContentLoaded", () => {
    const topAlbumsList = document.getElementById("topAlbumsList");

 
    async function fetchDifferentRandomAlbums() {
        try {
            const data = await getDifferentRandomAlbums();
            displayDifferentRandomAlbums(data);
        } catch (error) {
            console.error("Error fetching different random albums:", error);
        }
    }

  
    async function getDifferentRandomAlbums() {
        const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=album", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '117c9e5c0amsh4a0f429cd685938p1ed30djsndef3ba6f26d0',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
     
        const shuffledData = shuffleArray(data.data);

        return shuffledData.slice(0, 5);
    }

   
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

   
    function displayDifferentRandomAlbums(data) {
        let content = '';

        for (const result of data) {
            const artistPageURL = `https://www.deezer.com/artist/${result.artist.id}`;
            content += `
                <div class="item">
                    <a href="${artistPageURL}" target="_blank">
                        <img src="${result.album.cover_medium}" alt="${result.album.title}">
                        <p>Artist: ${result.artist.name}</p>
                        <p>Album: ${result.album.title}</p>
                    </a>
                </div>
            `;
        }

        topAlbumsList.innerHTML = content;
    }


    fetchDifferentRandomAlbums();
});
