const LAUNCH_URL = 'https://api.spacexdata.com/v4/launches'

function fetchMissions() {
fetch(LAUNCH_URL)
.then(res => res.json())
.then(results => {
    results.forEach(input => 
        addList(input));
})}

// create complete list of all missions
function addList(results) {
    const ol = document.querySelector('#mission-list');
    const li = document.createElement('li');

    const aTag = document.createElement('a')
    aTag.href = '#'
    aTag.innerText = results.name
    
// create new page with indivdual mission specs
    aTag.addEventListener('click', () => {
        ol.innerHTML = ""
        const imageTag = document.createElement('img')
        const likeButton = document.createElement('button')
        const title = document.querySelector('#pageTitle')
        title.innerText = results.name
        ol.appendChild(likeButton)
        likeButton.innerText = "♡"
        imageTag.src = results.links.patch.small
        ol.appendChild(imageTag)
        const infoTag = document.createElement('p')

// User can like mission
    likeButton.addEventListener('click', () => {
      likeButton.innerText = "❤️"
    })

// User can click on mission patch to display large patch image
    imageTag.addEventListener('click', () => {
            const largeImage = results.links.patch.large
            ol.innerHTML = ""
            imageTag.src = largeImage
            ol.appendChild(imageTag)
            ol.appendChild(returnButton)
        })

// calculates days until lift off
        function getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        days = (total / (1000*60*60*24))
        if (days > 0)
            return Math.round(days)
        else 
            return ("Blasted Off!")
        }
// HTML that displays individual mission specs 
        infoTag.innerText = `

        Click Patch to Enlarge

        Mission Number: 
        ${results.flight_number}

        Mission Date: 
        ${results.date_local}

        Days until Launch:
        ${getTimeRemaining(results.date_utc)}

        Mission Details: 
        ${results.details}

        Comments
        `
    
        ol.appendChild(infoTag)

// home button that returns user to home screen and reloads using fetch
        const returnButton = document.createElement('button')
        returnButton.innerText = "Home"
        ol.appendChild(returnButton)
        returnButton.addEventListener('click', () => {
            ol.innerHTML = ""
            title.innerText = "Missions"
            fetchMissions()
        })
    
    })

    li.append(aTag)

    ol.appendChild(li)

};

// initial content load
fetchMissions();
