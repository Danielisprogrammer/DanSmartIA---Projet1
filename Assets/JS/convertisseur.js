// Données unités par catégorie
const unites = {
  monnaie: ['USD', 'EUR', 'GBP', 'CFA'],
  poids: ['Kilogramme', 'Grammes', 'Livre', 'Once'],
  distance: ['Mètre', 'Kilomètre', 'Mille', 'Yard'],
  temperature: ['Celsius', 'Fahrenheit', 'Kelvin']
};

// Taux fictifs pour conversion
const tauxConversion = {
  monnaie: { USD: 1, EUR: 0.92, GBP: 0.81, CFA: 600 },
  poids: { Kilogramme: 1, Grammes: 0.001, Livre: 0.4536, Once: 0.02835 },
  distance: { Mètre: 1, Kilomètre: 1000, Mille: 1609.34, Yard: 0.9144 }
};

// Remplir listes unités lors du changement de catégorie
function miseAJourUnites() {
  const categorie = document.getElementById('select-categorie').value;
  const source = document.getElementById('select-unite-source');
  const cible = document.getElementById('select-unite-cible');
  source.innerHTML = '';
  cible.innerHTML = '';
  if (unites[categorie]) {
    unites[categorie].forEach(unite => {
      let optionSource = document.createElement('option');
      optionSource.value = optionSource.textContent = unite;
      source.appendChild(optionSource);
      let optionCible = document.createElement('option');
      optionCible.value = optionCible.textContent = unite;
      cible.appendChild(optionCible);
    });
  }
}

// Fonction conversion appelée au clic sur bouton
function convertirValeur() {
  let valeur = parseFloat(document.getElementById('input-valeur').value);
  if (isNaN(valeur)) {
    alert('Veuillez entrer une valeur numérique valide.');
    return;
  }

  const categorie = document.getElementById('select-categorie').value;
  const uniteSource = document.getElementById('select-unite-source').value;
  const uniteCible = document.getElementById('select-unite-cible').value;

  let resultat;

  if (categorie === 'temperature') {
    if (uniteSource === uniteCible) {
      resultat = valeur;
    } else if (uniteSource === 'Celsius' && uniteCible === 'Fahrenheit') {
      resultat = (valeur * 9 / 5) + 32;
    } else if (uniteSource === 'Fahrenheit' && uniteCible === 'Celsius') {
      resultat = (valeur - 32) * 5 / 9;
    } else if (uniteSource === 'Kelvin' && uniteCible === 'Celsius') {
      resultat = valeur - 273.15;
    } else if (uniteSource === 'Celsius' && uniteCible === 'Kelvin') {
      resultat = valeur + 273.15;
    } else {
      alert('Conversion non prise en charge pour cette unité.');
      return;
    }
  } else {
    const tauxSource = tauxConversion[categorie][uniteSource];
    const tauxCible = tauxConversion[categorie][uniteCible];
    if (!tauxSource || !tauxCible) {
      alert('Conversion impossible avec les unités choisies.');
      return;
    }
    resultat = (valeur * tauxCible) / tauxSource;
  }

  const resultatElt = document.getElementById('resultat-conversion');
  resultatElt.textContent = `${valeur} ${uniteSource} = ${resultat.toFixed(2)} ${uniteCible}`;

  // Animation fade-in du résultat
  resultatElt.classList.add('result-visible');
  setTimeout(() => {
    resultatElt.classList.remove('result-visible');
  }, 3000);
}

// Attachement des événements après DOM chargé
document.addEventListener('DOMContentLoaded', () => {
  miseAJourUnites();
  document.getElementById('select-categorie').addEventListener('change', () => {
    miseAJourUnites();
    document.getElementById('resultat-conversion').textContent = '';
  });
  document.getElementById('btn-convertir').addEventListener('click', convertirValeur);
});
