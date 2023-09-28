//configurando-janela-flutuante-portifolio
(function () {
  var openDialogForm = document.getElementById("openDialogForm");
  var closeDialogForm = document.getElementById("closeDialogForm");
  var portifolioForm = document.getElementById("portifolioForm");
  var sendForm = document.getElementById('sendForm')

  // O botão Update abre uma Dialog
  openDialogForm.addEventListener("click", function () {
    portifolioForm.showModal();
  });

  // O botão cancelButtom fecha uma Dialog
  closeDialogForm.addEventListener("click", function () {
    portifolioForm.close();
  });

  //enviar dados do formulário
  sendForm.addEventListener('click', function() {
    document.getElementById('meuFormulario').submit();
});
})();

