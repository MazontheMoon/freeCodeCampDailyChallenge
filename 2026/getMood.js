function getMood(genre, bpm) {
  if (genre === "classical") {
    if (bpm >= 60 && bpm <= 109) return "focus";
    if (bpm >= 110 && bpm <= 180) return "happy";
  }

  if (genre === "electronic") {
    if (bpm >= 60 && bpm <= 89) return "focus";
    if (bpm >= 90 && bpm <= 134) return "happy";
    if (bpm >= 135 && bpm <= 180) return "hype";
  }

  if (genre === "pop") {
    if (bpm >= 60 && bpm <= 180) return "happy";
  }

  if (genre === "rock") {
    if (bpm >= 130 && bpm <= 180) return "hype";
    if (bpm >= 60 && bpm <= 129) return "happy";
  }

  return null; // or undefined depending on FCC expectations
}
