// api.js
export async function fetchAPI(selectedDate) {
    // Simulez ici l'appel à votre API réelle et renvoyez des données simulées
    // Par exemple, renvoyez un tableau d'heures de réservation en fonction de la date sélectionnée
    return Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  }
  
  export async function submitAPI(formData) {
    // Simulez ici l'envoi de données de formulaire à votre API réelle
    // Vous pouvez implémenter la logique d'envoi vers votre endpoint réel ici
    console.log('Envoi des données du formulaire à l\'API :', formData);
    return Promise.resolve({ success: true });
  }
  