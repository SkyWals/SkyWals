//configurando-janela-flutuante-portifolio
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
/*
-
-
-
-
-
-
-
-
-
-
*/
//formulairo-de-contato-dialog
(function () {
  var updateFormButton = document.getElementById("updateFormButton");
  var cancelFormButton = document.getElementById("cancelFormButton");
  var favDialogForm = document.getElementById("favDialogForm");

  // O botão Update abre uma Dialog
  updateFormButton.addEventListener("click", function () {
    favDialogForm.showModal();
  });

  // O botão cancelButtom fecha uma Dialog
  cancelFormButton.addEventListener("click", function () {
    favDialogForm.close();
  });
})();
/*enviar-dados-contidos-em-formulario*/
function handleMessage() {
  console.log(`mensagem enviada: message
      nome: walison lima, \n
      email: walison@email.com \n
      message: resumo de mensagem simulada para teste de envio. \n
  `)
}