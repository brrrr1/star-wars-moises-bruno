$(document).ready(function() {
  var characterId = getParameterByName('id');
  if (characterId) {
    fetchCharacterDetails(characterId);
  }

  function fetchCharacterDetails(id) {
    $.ajax({
      url: 'https://swapi.dev/api/people/' + id + '/',
      method: 'GET',
      success: function(response) {
        console.log('Fetched Star Wars character details:', response);
        displayCharacterDetails(response);
      },
      error: function(error) {
        console.error('Error fetching character details:', error);
      }
    });
  }

  function displayCharacterDetails(characterData) {
    var detailContent = $('#detail-content');
    if (detailContent.length === 0) {
      console.error('Detail content container not found');
      return;
    }

    var characterDetail = `
      <div class="character-detail">
        <div class="character-name">${characterData.name}</div>
        <div class="character-details">
          <div>Height: ${characterData.height}</div>
          <div>Mass: ${characterData.mass}</div>
          <div>Gender: ${characterData.gender}</div>
          <div>Birth Year: ${characterData.birth_year}</div>
          <div>Hair Color: ${characterData.hair_color}</div>
          <div>Skin Color: ${characterData.skin_color}</div>
          <div>Eye Color: ${characterData.eye_color}</div>
          <div>Films: ${characterData.films.join(', ')}</div>
          <div>Species: ${characterData.species.join(', ')}</div>
          <div>Vehicles: ${characterData.vehicles.join(', ')}</div>
          <div>Starships: ${characterData.starships.join(', ')}</div>
        </div>
      </div>
    `;
    detailContent.html(characterDetail);
  }

  function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
});
