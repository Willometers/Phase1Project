const LAUNCH_URL = 'https://api.spacexdata.com/v4/launches'

function fetchMissions() {
fetch(LAUNCH_URL)
.then(res => res.json())
.then(results => {
    results.forEach(input => 
        addList(input));
})}

function addList(results) {
    const ol = document.querySelector('#mission-list');
    const li = document.createElement('li');

    const aTag = document.createElement('a')
    aTag.href = '#'
    aTag.innerText = results.name
    
    aTag.addEventListener('click', () => {
        ol.innerHTML = ""
        const imageTag = document.createElement('img')
        imageTag.src = results.links.patch.small
        ol.appendChild(imageTag)
        const infoTag = document.createElement('p')
        // const timer = () => {
        //     const launchTime = results.date_utc
        //     const endDate = Date.parse(launchTime)
        //     const startDate = 
        //     console.log(launchTime)
        // }
        infoTag.innerText = `
        Mission Number: 
        ${results.flight_number}

        Mission Name: 
        ${results.name}

        Mission Date: 
        ${results.date_local}

        Countdown:
        

        Mission Details: 
        ${results.details}
        `
    
        ol.appendChild(infoTag)

        const returnButton = document.createElement('button')
        returnButton.innerText = "Return"
        ol.appendChild(returnButton)
        returnButton.addEventListener('click', () => {
            ol.innerHTML = ""
            fetchMissions()
        })

    })

    li.append(aTag)

    ol.appendChild(li)

    // const searchBar = document.getElementById('form')
    
    // searchBar.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log(e.value)
   
    // })
    

};

fetchMissions()


  
