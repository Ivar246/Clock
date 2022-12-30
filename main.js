const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const audio = new Audio("tiktik.m4a ");

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
  }
  let hoursOffsetDegree = (minutes / 60) * 30;
  const hoursDegrees = (360 / 12) * hours + 90 + hoursOffsetDegree;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  let minutesOffsetDegree = (seconds / 60) * 6;
  const minutesDegrees = (minutes / 60) * 360 + 90 + minutesOffsetDegree;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  audio.play();
}
setInterval(setDate, 1000);
