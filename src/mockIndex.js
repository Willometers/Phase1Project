fetch("https://api.spacexdata.com/v2/launches")
.then(res => res.json())
.then(flights => {
    flights.forEach(flight => {
        addList(flight.mission_name)
    })
})

function addList(input) {
    let ol = document.querySelector('#mission-list');
    let li = document.createElement('li');
    li.innerText = input;
    ol.appendChild(li);
};

const missionDetails = `
<div class='mission-info' id='${flight.flight_number}>
    <img src="${flight.links.mission_patch}"</img>
    <h2>Name: ${flight.mission_name}></h2>
    <p>Number: ${flight.flight_number}</p>
    <p>Year: ${flight.launch_year}</p>
    <p>Success: ${flight.launch_success}</p>
</div>
`
