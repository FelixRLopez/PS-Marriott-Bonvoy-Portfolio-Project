// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  // Step 1: Create a new filteredPlaces array and store it in a variable
  let filteredPlaces = [];

  // Step 2: Loop through PLACES
  // Step 3: If a place object's type property matches the typePreference parameter, add it to filteredPlaces
  for (let place of PLACES) {
    if (place.type === typePreference) {
      filteredPlaces.push(place);
    }
  }

  // Step 4: After the loop, return filteredPlaces
  return filteredPlaces;
}

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  const div = document.createElement("div");

  // Step 2: Add the col class to the new div element
  div.className = "col";

  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html
  div.innerHTML = `
    <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
      <img src="${place.img}" class="card-img-top h-100" alt="Image of ${place.name}"/>
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
      </div>
    </div>
  `
  
  // Step 4: Return the element
  return div;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id of "recommendations" in a variable
  const recommendations = document.getElementById("recommendations");

  // Step 2: Clear the "recommendations" innerHTML
  recommendations.innerHTML = "";

  // Step 3: Loop through the filteredPlaces array
  // Step 4: Create a card for each place using the createCard function
  // Step 5: Add/append each card to the recommendations DOM element
  for (const filteredPlace of filteredPlaces) {
    const card = createCard(filteredPlace);
    recommendations.appendChild(card);
  }
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array
  // Step 2: If a place object's name property matches the placeName parameter, return that place object
  for (const place of PLACES) {
    if (place.name === placeName) {
      return place;
    }
  }
}
