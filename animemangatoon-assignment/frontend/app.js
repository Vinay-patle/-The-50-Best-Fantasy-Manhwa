document.addEventListener("DOMContentLoaded", () => {
    // Fetch top webtoons
    fetch('/api/webtoons')
        .then(response => response.json())
        .then(data => {
            const webtoonList = document.getElementById('webtoon-list');
            data.webtoons.forEach(webtoon => {
                const webtoonItem = document.createElement('div');
                webtoonItem.classList.add('webtoon-item');
                webtoonItem.innerHTML = `
                    <h3>${webtoon.title}</h3>
                    <img src="${webtoon.image}" alt="${webtoon.title}" width="150">
                    <p>${webtoon.description}</p>
                `;
                webtoonList.appendChild(webtoonItem);
            });
        });

    // Voting Logic
    const voteResults = document.getElementById('vote-results');
    document.getElementById('vote-manhwa').addEventListener('click', () => vote('manhwa'));
    document.getElementById('vote-anime').addEventListener('click', () => vote('anime'));

    function vote(type) {
        fetch(`/api/vote?type=${type}`)
            .then(response => response.json())
            .then(data => {
                voteResults.innerHTML = `Manhwa: ${data.manhwaVotes}, Anime: ${data.animeVotes}`;
            });
    }
});
