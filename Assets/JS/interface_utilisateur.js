// app.js - Gère la navigation entre sections (convertisseur, calculatrice, contact)

// Récupération des boutons de navigation et sections
const btnConvertisseur = document.getElementById('btn-convertisseur');
const btnCalculatrice = document.getElementById('btn-calculatrice');
const btnContact = document.getElementById('btn-contact');
const btnAssistantIA = document.getElementById('btn-AssistantIA');

const sectionConvertisseur = document.getElementById('section-convertisseur');
const sectionCalculatrice = document.getElementById('section-calculatrice');
const sectionContact = document.getElementById('section-contact');
const sectionAssistantIA = document.getElementById('section-AssistantIA');

const navButtons = document.querySelectorAll('.nav-btn');

function setActiveSection(section) {
  // Cacher toutes les sections
  sectionConvertisseur.classList.remove('active-section');
  sectionCalculatrice.classList.remove('active-section');
  sectionContact.classList.remove('active-section');
  sectionAssistantIA.classList.remove('active-section');

  // Enlever active à tous les boutons
  navButtons.forEach(btn => btn.classList.remove('active'));

  if (section === 'convertisseur') {
    sectionConvertisseur.classList.add('active-section');
    btnConvertisseur.classList.add('active');
  } else if (section === 'calculatrice') {
    sectionCalculatrice.classList.add('active-section');
    btnCalculatrice.classList.add('active');
  } else if (section === 'contact') {
    sectionContact.classList.add('active-section');
    btnContact.classList.add('active');
  } else if (section === 'AssistantIA') {
    sectionAssistantIA.classList.add('active-section');
    btnAssistantIA.classList.add('active');
  }
}

// Évènements clic sur boutons nav pour changer de section
btnConvertisseur.addEventListener('click', () => setActiveSection('convertisseur'));
btnCalculatrice.addEventListener('click', () => setActiveSection('calculatrice'));
btnContact.addEventListener('click', () => setActiveSection('contact'));
btnAssistantIA.addEventListener('click', () => setActiveSection('AssistantIA'));

// Initialiser avec la section convertisseur active
setActiveSection('convertisseur');

