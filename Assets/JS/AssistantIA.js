document.getElementById('submitQuestion').addEventListener('click', () => {
  const questionField = document.getElementById('userQuestion');
  const responseContainer = document.getElementById('iaResponse');

  const question = questionField.value.trim();
  if (!question) {
    responseContainer.textContent = "Merci de saisir une question ou un problème.";
    return;
  }

  responseContainer.textContent = "Traitement en cours...";
  responseContainer.classList.remove('show');

  // Simuler appel IA asynchrone avec setTimeout (ici à remplacer par vraie API)
  setTimeout(() => {
    // Réponse exemple simulée, ici tu injecteras le résultat de l'API IA
    const simulatedResponse = `Voici une réponse simulée pour la question : "${question}"`;

    responseContainer.textContent = simulatedResponse;
    responseContainer.classList.add('show');
  }, 1400);
});
