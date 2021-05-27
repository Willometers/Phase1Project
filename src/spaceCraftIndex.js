fetch("https://ll.thespacedevs.com/2.0.0/config/spacecraft/?format=json&limit=10&offset=20")
.then(res => res.json())
.then(craft => {
    console.log(craft.results.id)
    })