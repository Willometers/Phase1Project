
document.addEventListener('DOMContentLoaded', function () {
    loadData();
})

function loadData() {
    let missionsArray = []
    const spacexAPI = "https://api.spacexdata.com/v2/launches"
    fetch(spacexAPI)
    .then(res => res.json())
    .then(results => {
        results.forEach(miss => 
            addLi(miss.mission_name))
        missionsArray.push(results)
        console.log(missionsArray)
        // const inputForm = document.querySelector('form');
        // inputForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     let input = document.querySelector('input#searchByFn');
        //     console.log(input.value)
        //     let num = input.value-1
        //     let i = 17
        //     missionKeys = Object.keys(missionsArray[0][`${num}`]) 
        //     missionValues = Object.values(missionsArray[0][`${num}`])
        //     // console.log(missionKeys[i])
        //     // console.log(missionValues[i])
        //     addMissionLi(`${missionKeys[i]}` + `:` + ` `+ `${missionValues[i]}`)
        //     document.contact-form.reset();
        // // })
    // }
    })
}

function addLi(input) {
    let ol = document.querySelector('#mission-list');
    let li = document.createElement('li');
    li.innerText = input;
    ol.appendChild(li);
};

function displayInfo() {
    const detailContainer = document.getElementById("mission-info")
    const displayPlace = document.createElement('div')

    displayPlace.innerHTML += `
        <div class='card' id='missionDetails'>
            <h2>${missionValues[i]}</h2>
            <img src="">Mission Patch</img>
        </div>
        `
    detailContainer.appendChild(displayPlace)

    console.log(displayInfo)

}

// num will be submit that allows user to enter a flight number
// will determine key:value set - perhaps preset 
// Need to iterate over keys and values with second array index
// User can "SUBMIT" a number 1 - 109 (+1 index) and get read out of flight data
// User can look at flight names by year via drop down menu
// User can select via "MOUSE CLICK" a flight name and see it's detailed.