function horoscopeMatch(sign1, sign2) {
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];

  const compatibility = {
    0: "100%",
    1: "40%",
    2: "80%",
    3: "30%",
    4: "90%",
    5: "20%",
    6: "50%"
  };

  const i1 = signs.indexOf(sign1);
  const i2 = signs.indexOf(sign2);

  const diff = Math.abs(i1 - i2);
  const distance = Math.min(diff, 12 - diff);

  return compatibility[distance];
}
