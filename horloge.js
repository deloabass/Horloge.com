let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  
  // Calculer les angles de rotation pour les aiguilles de l'horloge
  let hh = (day.getHours() % 12) * 30 + day.getMinutes() * 0.5; // 360° / 12h = 30° par heure. Chaque minute ajoute 0.5°.
  let mm = day.getMinutes() * 6; // 360° / 60min = 6° par minute.
  let ss = day.getSeconds() * 6; // 360° / 60s = 6° par seconde.

  // Mettre à jour les styles de transformation
  hr.style.transform = `rotateZ(${hh}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000); // Met à jour toutes les secondes
