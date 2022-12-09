const endDate = document.getElementById("end-date").innerText;
const input = document.querySelectorAll("input");
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return 0;

  const Days = Math.floor(diff / 3600 / 24);
  const Hours = Math.floor(diff / 3600) % 24;
  const Minutes = Math.floor(diff / 60) % 60;
  const Seconds = Math.floor(diff) % 60;
  input[0].value = Days > 9 ? Days : "0" + Days;
  input[1].value = Hours > 9 ? Hours : "0" + Hours;
  input[2].value = Minutes > 9 ? Minutes : "0" + Minutes;
  input[3].value = Seconds > 9 ? Seconds : "0" + Seconds;
}
setInterval(() => {
  clock();
}, 1000);
