let totalSeconds;
let timerInterval;
let timerPaused = false;

function startTimer(minutes) {
  totalSeconds = minutes * 60;
  updateTimerUI();

  timerInterval = setInterval(() => {
    if (timerPaused) return; // pause countdown during distraction cooldown

    totalSeconds--;
    updateTimerUI();

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      finishSession();
    }
  }, 1000);
}

function updateTimerUI() {
  const min = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  document.getElementById("timerDisplay").innerText =
    `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

// ===== Pause & Resume Timer =====
function pauseTimer() {
  timerPaused = true;
}

function resumeTimer() {
  timerPaused = false;
}