function triageBlood(inventory, patients) {
  const blood = { O: 0, A: 0, B: 0, AB: 0 };

  for (const type of inventory) {
    blood[type]++;
  }

  let served = 0;

  function give(...types) {
    for (const type of types) {
      if (blood[type] > 0) {
        blood[type]--;
        served++;
        return true;
      }
    }
    return false;
  }

  // O patients
  for (const patient of patients) {
    if (patient === "O") {
      give("O");
    }
  }

  // A patients
  for (const patient of patients) {
    if (patient === "A") {
      give("A", "O");
    }
  }

  // B patients
  for (const patient of patients) {
    if (patient === "B") {
      give("B", "O");
    }
  }

  // AB patients
  for (const patient of patients) {
    if (patient === "AB") {
      give("AB", "A", "B", "O");
    }
  }

  return `${served} of ${patients.length} patients served`;
}
