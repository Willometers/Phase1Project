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
        missionKeys = Object.keys(missionsArray[0][3])
        missionValues = Object.values(missionsArray[0][3])
        console.log(missionKeys)
        console.log(missionValues)
        addMission(missionKeys)
        addMission(missionValues)
            // missionsArray[0] = id index
            // missionsArray[0][0] = keys 
            // Need to iterate over keys and values with second array index
            // User can "SUBMIT" a number 1 - 109 (+1 index) and get read out of flight data
            // User can look at flight names by year via drop down menu
            // User can select via "MOUSE CLICK" a flight name and see it's detailed info
       
    })
}

function addMission(input) {
    let ul = document.querySelector('#mission-list');
    let li = document.createElement('li');
    li.innerText = input;
    ul.appendChild(li);
}

