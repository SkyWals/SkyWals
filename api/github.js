const username = document.getElementById('username')
const projects = document.getElementById('projects')
const perfilimage = document.getElementById('perfilimage')

const followersValue = document.getElementById('followersValue')
const followingValue = document.getElementById('followingValue')

const txtdescription = document.getElementById('txtdescription')


function getApiGitHub() {
    fetch('https://api.github.com/users/npcwalison')
        .then(async res => {
            if(!res.ok) {
                throw new Error(res.status)
            }

            let data = await res.json()

            console.log(data)

            username.innerHTML = data.name

            projects.innerHTML = data.public_repos

            perfilimage.src = data.avatar_url


            followersValue.innerHTML = data.followers

            followingValue.innerHTML = data.following

            txtdescription.innerHTML = data.bio
        })
}

getApiGitHub()

//importtanto-dados-para-dialog-portifolio
function getRepos() {
    fetch('https://api.github.com/users/npcwalison/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
  
        let dataRespos = await res.json()
  
        dataRespos.map(item => {
          const postProjects = document.getElementById('posts-projects')
  
          postProjects.innerHTML += `
  
                      <button type="submit" class="project-banner">
                          <h3>${item.name}</h3>
                          <p>${item.description}</p>
  
                          <a href="${item.html_url}" target="_blank">Ver mais...</a>
                      </button>
  
                  `;
        })
      })
  }
  
  //chamando-funcção-fatche-que-coleta-dados-para-função-dialog-protifolio
  getRepos()