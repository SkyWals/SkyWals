//configurando-janela-flutuante
(function () {
    var updateButton = document.getElementById("updateDetails");
    var cancelButton = document.getElementById("cancel");
    var favDialog = document.getElementById("favDialog");
  
    // O botão Update abre uma Dialog
    updateButton.addEventListener("click", function () {
      favDialog.showModal();
    });
  
    // O botão cancelButtom fecha uma Dialog
    cancelButton.addEventListener("click", function () {
      favDialog.close();
    });
  })();

  function getRepos() {
    fetch('https://api.github.com/users/npcwalison/repos')
        .then(async res => {
            if(!res.ok) {
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


getRepos()