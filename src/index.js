document.addEventListener('DOMContentLoaded', function () {
    loadData();
})

function loadData() {
    let array = []
    const spacexAPI = "https://api.spacexdata.com/v2/launches"
    fetch(spacexAPI)
    .then(res => res.json())
    .then(results => {
        // console.log(results[`${missionId}`])
        results.forEach(element => addMission(element))
        console.log(results.length)
        console.log(results[4].rocket.rocket_name)
       
    })
}

function addMission(input) {
    let container = document.querySelector('#mission-list')
    let li = document.createElement('li')
    li.src = input
    container.appendChild(li)
}

