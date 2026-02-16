/**
 * Determines semi-final matchups for ice hockey.
 *
 * @param {string[]} teams
 * @returns {string}
 */
function getSemifinalMatchups(teams) {
  const standings = teams.map(entry => {
    const [team, record] = entry.split(": ");
    const [W, OTW, OTL, L] = record.split("-").map(Number);

    const points = (W * 3) + (OTW * 2) + (OTL * 1);

    return { team, points };
  });

  // Sort by points descending
  standings.sort((a, b) => b.points - a.points);

  const first = standings[0].team;
  const second = standings[1].team;
  const third = standings[2].team;
  const fourth = standings[3].team;

  return `The semi-final games will be ${first} vs ${fourth} and ${second} vs ${third}.`;
}
