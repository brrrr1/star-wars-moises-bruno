$(document).ready(function() {
  var characterId = new URLSearchParams(window.location.search).get('id');
  if (characterId) {
    $.ajax({
      url: 'https://swapi.dev/api/people/' + characterId + '/',
      method: 'GET',
      success: function(response) {
        console.log('Fetched Star Wars character details:', response);
        var detailContent = $('#detail-content');
        if (detailContent.length === 0) {
          console.error('Detail content container not found');
          return;
        }

        var characterDetail = `
          <div class="character-detail">
            <div class="character-name">${response.name}</div>
            <div class="character-details">
              <div>Height: ${response.height}</div>
              <div>Mass: ${response.mass}</div>
              <div>Gender: ${response.gender}</div>
              <div>Birth Year: ${response.birth_year}</div>
              <div>Hair Color: ${response.hair_color}</div>
              <div>Skin Color: ${response.skin_color}</div>
              <div>Eye Color: ${response.eye_color}</div>
              <div>Films: ${response.films.join(', ')}</div>
              <div>Species: ${response.species.join(', ')}</div>
              <div>Vehicles: ${response.vehicles.join(', ')}</div>
              <div>Starships: ${response.starships.join(', ')}</div>
            </div>
          </div>
        `;
        detailContent.html(characterDetail);
      },
      error: function(error) {
        console.error('Error fetching character details:', error);
      }
    });
  }
});
