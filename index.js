$(document).ready(function() {
    fetchData();

    $('#btn-get-data').click(function() {
        fetchData();
    });

    function fetchData() {
        $.ajax({
            url: 'https://swapi.dev/api/people/',
            method: 'GET',
            success: function(response) {
                console.log('Fetched Star Wars characters list:', response.results);
                displayCharacterNames(response.results);
            },
            error: function(error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    function displayCharacterNames(characterList) {
        var dataContent = $('#data-content');
        dataContent.empty();

        characterList.forEach(function(character) {
            var characterId = character.url.match(/\/(\d+)\/$/)[1];
            var characterName = `<div class="character-name"><a href="detail.html?id=${characterId}">${character.name}</a></div>`;
            dataContent.append(characterName);
        });
    }
});
