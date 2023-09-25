//configurando-janela-flutuante-portifolio
(function () {
  var openDialogPortifolio = document.getElementById("openDialogPortifolio");
  var closeDialogPortifolio = document.getElementById("closeDialogPortifolio");
  var portifolioDialog = document.getElementById("portifolioDialog");

  // O botão Update abre uma Dialog
  openDialogPortifolio.addEventListener("click", function () {
    portifolioDialog.showModal();
  });

  // O botão cancelButtom fecha uma Dialog
  closeDialogPortifolio.addEventListener("click", function () {
    portifolioDialog.close();
  });
})();