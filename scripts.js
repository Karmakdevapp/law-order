const wa = document.getElementById("whatsapp");
let time = new Date();
let hours = time.getUTCHours();
let day = time.getUTCDay();
if (day != 6 && day != 0) {
  if (hours >= 9 && hours <= 18) {
    wa.style.display = "block";
  }
}
