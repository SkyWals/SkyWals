const username = document.getElementById('username')
const projects = document.getElementById('projects')
const perfilimage = document.getElementById('perfilimage')

const followersValue = document.getElementById('followersValue')
const followingValue = document.getElementById('followingValue')


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
        })
}

getApiGitHub()