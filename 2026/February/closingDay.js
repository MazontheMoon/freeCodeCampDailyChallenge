function countMedals(events) {
  const medals = {};

  // Count medals
  for (const [gold, silver, bronze] of events) {
    if (!medals[gold]) medals[gold] = { gold: 0, silver: 0, bronze: 0 };
    if (!medals[silver]) medals[silver] = { gold: 0, silver: 0, bronze: 0 };
    if (!medals[bronze]) medals[bronze] = { gold: 0, silver: 0, bronze: 0 };

    medals[gold].gold++;
    medals[silver].silver++;
    medals[bronze].bronze++;
  }

  // Convert to array for sorting
  const sorted = Object.entries(medals)
    .map(([country, counts]) => ({
      country,
      gold: counts.gold,
      silver: counts.silver,
      bronze: counts.bronze,
      total: counts.gold + counts.silver + counts.bronze
    }))
    .sort((a, b) => {
      if (b.gold !== a.gold) {
        return b.gold - a.gold; // sort by gold descending
      }
      return a.country.localeCompare(b.country); // alphabetical tie
    });

  // Build CSV
  const lines = ["Country,Gold,Silver,Bronze,Total"];

  for (const c of sorted) {
    lines.push(`${c.country},${c.gold},${c.silver},${c.bronze},${c.total}`);
  }

  return lines.join("\n");
}
