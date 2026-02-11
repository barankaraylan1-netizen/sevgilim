const hitaplar = [
  "Canım",
  "Aşkım",
  "Güzelim",
  "Hayatım",
  "Kalbim"
];

const secilen = hitaplar[Math.floor(Math.random() * hitaplar.length)];
document.getElementById("hitap").innerText = secilen;
