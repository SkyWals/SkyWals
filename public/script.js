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




/*
{
  "login": "npcwalison",
  "id": 82228528,
  "node_id": "MDQ6VXNlcjgyMjI4NTI4",
  "avatar_url": "https://avatars.githubusercontent.com/u/82228528?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/npcwalison",
  "html_url": "https://github.com/npcwalison",
  "followers_url": "https://api.github.com/users/npcwalison/followers",
  "following_url": "https://api.github.com/users/npcwalison/following{/other_user}",
  "gists_url": "https://api.github.com/users/npcwalison/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/npcwalison/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/npcwalison/subscriptions",
  "organizations_url": "https://api.github.com/users/npcwalison/orgs",
  "repos_url": "https://api.github.com/users/npcwalison/repos",
  "events_url": "https://api.github.com/users/npcwalison/events{/privacy}",
  "received_events_url": "https://api.github.com/users/npcwalison/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Walison Lima",
  "company": "stapp",
  "blog": "http://beacons.ai/walisonls/",
  "location": "Fortaleza-CE",
  "email": null,
  "hireable": null,
  "bio": "Engenheiro de Software,\r\nBuscando sempre o melhor e produtivo \r\n",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 9,
  "following": 2,
  "created_at": "2021-04-09T15:59:29Z",
  "updated_at": "2023-09-19T03:26:53Z"
}
*/