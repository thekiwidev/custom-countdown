const form = document.querySelector(".countDown-form");
const hourInputTag = document.getElementById("hour");
const minuteInputTag = document.getElementById("minute");
const secondsInputTag = document.getElementById("seconds");

const hourCountDownTag = document.querySelector(".content .hours");
const minuteCountDownTag = document.querySelector(".content .minutes");
const secondsCountDownTag = document.querySelector(".content .seconds");

const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const cancelButton = document.querySelector(".cancel-btn");

form.addEventListener("change", (e) => {
  if (
    hourInputTag.value != "00" ||
    minuteInputTag.value != "00" ||
    secondsInputTag.value != "00"
  ) {
    startButton.removeAttribute("disabled");
  } else {
    startButton.setAttribute("disabled", "disabled");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const counter = (h, m, s) => {
  let countDown = setInterval(() => {
    if (s === 0 && m >= 1) {
      m--;
      s = 59;
    } else if (s === 0 && m === 0 && h >= 1) {
      h--;
      m = 59;
      s = 59;
    } else {
      s--;
    }

    h <= 9
      ? (hourCountDownTag.innerHTML = `0${h}:`)
      : (hourCountDownTag.innerHTML = `${h}:`);

    m <= 9
      ? (minuteCountDownTag.innerHTML = `0${m}:`)
      : (minuteCountDownTag.innerHTML = `${m}:`);

    s <= 9
      ? (secondsCountDownTag.innerHTML = `0${s}`)
      : (secondsCountDownTag.innerHTML = `${s}`);

    if (s === 0 && m === 0 && h === 0) {
      clearInterval(countDown);
      pauseButton.setAttribute("disabled", "disabled");
      cancelButton.setAttribute("disabled", "disabled");
      hourInputTag.removeAttribute("disabled");
      minuteInputTag.removeAttribute("disabled");
      secondsInputTag.removeAttribute("disabled");
    }
  }, 1000);
};

startButton.addEventListener("click", () => {
  let hours = Number(hourInputTag.value);
  let minutes = Number(minuteInputTag.value);
  let seconds = Number(secondsInputTag.value);

  hours <= 9
    ? (hourCountDownTag.innerHTML = `0${hours}:`)
    : (hourCountDownTag.innerHTML = `${hours}:`);

  minutes <= 9
    ? (minuteCountDownTag.innerHTML = `0${minutes}:`)
    : (minuteCountDownTag.innerHTML = `${minutes}:`);

  seconds <= 9
    ? (secondsCountDownTag.innerHTML = `0${seconds}`)
    : (secondsCountDownTag.innerHTML = `${seconds}`);

  form.reset();
  startButton.setAttribute("disabled", "disabled");
  counter(hours, minutes, seconds);
  pauseButton.removeAttribute("disabled");
  cancelButton.removeAttribute("disabled");
  hourInputTag.setAttribute("disabled", "disabled");
  minuteInputTag.setAttribute("disabled", "disabled");
  secondsInputTag.setAttribute("disabled", "disabled");
});
