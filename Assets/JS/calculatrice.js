
// calculatrice.js - Logique calculatrice simple (+, -, *, /, racine carrée, puissance)

const ecran = document.getElementById('ecran-calculatrice');
const boutons = document.querySelectorAll('.btn-calc');

let expression = '';

// Fonction utile pour calcul racine carré (√) et puissance (^)
function calculer(expression) {
  try {
    // Remplacer les symboles par JS interprétable
    let exp = expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/\^/g, '**');
    // Remplacer racine carrée par fonction Math.sqrt
    if (exp.includes('√')) {
      exp = exp.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
    }
    // Evaluer expression JavaScript
    let resultat = eval(exp);
    return resultat;
  } catch {
    return null;  // En cas d'erreur syntaxique
  }
}

boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const val = bouton.getAttribute('data-value');

    if (val !== null) {
      // Ajout valeur normale (nombre ou opérateur)
      expression += val;
      ecran.value = expression;
    } else {
      // Cas bouton sans data-value (ex =, C, racine, puissance)
      if (bouton.id === 'btn-egale') {
        const res = calculer(expression);
        ecran.value = res !== null ? res : 'Erreur';
        expression = res !== null ? res.toString() : '';
      } else if (bouton.id === 'btn-clear') {
        expression = '';
        ecran.value = '';
      } else if (bouton.id === 'btn-racine') {
        expression += '√';
        ecran.value = expression;
      } else if (bouton.id === 'btn-puissance') {
        expression += '^';
        ecran.value = expression;
      }
    }
  });
});
