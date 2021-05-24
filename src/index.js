document.addEventListener('DOMContentLoaded', function () {
    loadData();
})

function loadData() {
    let missionsArray = []
    const spacexAPI = "https://api.spacexdata.com/v2/launches"
    fetch(spacexAPI)
    .then(res => res.json())
    .then(results => {
        
        // num will be submit that allows user to enter a flight number
        missionsArray.push(results)

        const inputForm = document.querySelector('form');
        inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let input = document.querySelector('input#searchByFn');
        console.log(input.value)
        let num = 7
        let i = input.value
        missionKeys = Object.keys(missionsArray[0][`${num}`]) 
        missionValues = Object.values(missionsArray[0][`${num}`])
        console.log(missionKeys[i])
        console.log(missionValues[i])
        addLi(`${missionKeys[i]}` + `:` + ` `+ `${missionValues[i]}`)
            })

        
        // let i = input.value
        //  will determine key:value set - perhaps preset 
        
            // missionsArray[0] = id index
            // missionsArray[0][0] = keys 
            // Need to iterate over keys and values with second array index
            // User can "SUBMIT" a number 1 - 109 (+1 index) and get read out of flight data
            // User can look at flight names by year via drop down menu
            // User can select via "MOUSE CLICK" a flight name and see it's detailed info
    })
}

function addLi(input) {
    let ul = document.querySelector('#mission-list');
    let li = document.createElement('li');
    li.innerText = input;
    ul.appendChild(li);
}

