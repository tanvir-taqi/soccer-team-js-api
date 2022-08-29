


const loadTeam = (input) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTeam(data))
}


const displayTeam = (data) => {
    const teams = data.teams
    const teamContainer = document.getElementById('team-container')
    teamContainer.innerHTML = ''
    teams.forEach(team => {
        const col = document.createElement('div')
        col.innerHTML = `<div class="card bg-white d-flex flex-column flex-md-row align-items-center justify-between p-2">
        <img src="${team.strTeamBadge}" class="img-fluid card-image" >
        <div class="card-body text-center">
          <h3 class="card-title my-2">${team.strTeam}</h3>
          <h5 class="card-text my-2">${team.strCountry}</h5>
          <h6 class="card-text my-2">${team.strLeague}</h6>
        </div>
      </div> `
        col.classList.add('col')
        teamContainer.appendChild(col)


    });
}







const inputBtn = document.getElementsByClassName('input-btn')
for (let btn of inputBtn) {
    btn.addEventListener('click', (e) => {
        const btnValue = e.target.value
       
        loadTeam(btnValue)
    })
}

loadTeam('England')