
/**
 * Returns an array with the titles of the two most played songs.
 *
 * @param {Object[]} playlist - The iPod playlist represented as an array of song objects.
 * @param {string} playlist[].title - The title of the song.
 * @param {number} playlist[].plays - The number of times the song has been played.
 * @returns {string[]} An array containing the titles of the two most played songs, with the most played first.
 *
 * @example
 * const songs = [
 *   { title: "Song A", plays: 120 },
 *   { title: "Song B", plays: 200 },
 *   { title: "Song C", plays: 150 }
 * ];
 * // favoriteSongs(songs) → ["Song B", "Song C"]
 */

function favoriteSongs(playlist) {
  return playlist
    .sort((a, b) => b.plays - a.plays) // sort by plays (descending)
    .slice(0, 2)                       // get top 2
    .map(song => song.title);          // extract titles
}