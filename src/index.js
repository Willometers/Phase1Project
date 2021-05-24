document.addEventListener('DOMContentLoaded', function () {
    loadData();
})

function loadData() {
    let missionsArray = []
    const spacexAPI = "https://api.spacexdata.com/v2/launches"
    fetch(spacexAPI)
    .then(res => res.json())
    .then(results => {
        missionsArray.push(results)
        addMission(missionsArray[0][105].flight_number)
        addMission(missionsArray[0][105].launch_year)
        addMission(missionsArray[0][105].details)

        missionArray.forEach(element => console.log(element))
       
    })
}

function addMission(input) {
    let ul = document.querySelector('#mission-list');
    let li = document.createElement('li');
    li.innerText = input;
    ul.appendChild(li);
}

