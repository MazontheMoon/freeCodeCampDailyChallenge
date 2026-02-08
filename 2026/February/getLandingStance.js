/*
FUNCTION getLandingStance(stance, rotation):
    rotation = ABS(rotation) % 360
    flips = rotation / 180

    IF flips is odd:
        IF stance is "Regular":
            RETURN "Goofy"
        ELSE:
            RETURN "Regular"

    RETURN stance

*/

function getLandingStance(stance, rotation) {
  const effectiveRotation = Math.abs(rotation) % 360;
  const flips = Math.floor(effectiveRotation / 180);

  if (flips % 2 === 1) {
    return stance === "Regular" ? "Goofy" : "Regular";
  }

  return stance;
}




