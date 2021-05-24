document.addEventListener('DOMContentLoaded', function () {
    loadData();
})

function loadData() {
    let missionArray = []
    const spacexAPI = "https://api.spacexdata.com/v2/launches"
    fetch(spacexAPI)
    .then(res => res.json())
    .then(results => {
        // console.log(results[`${missionId}`])
        // results.forEach(element => (element))
        console.log(results.length)
        console.log(results[0].flight_number)
        missionArray.push(results)
        console.log(missionArray)
        // addMission(results[0].mission_name)
       
    })
}

function addMission(input) {
    let ul = document.querySelector('#mission-list');
    let li = document.createElement('li');
    li.innerText = input;
    ul.appendChild(li);
}

