/* realistic cover photos (one sprite, 4x5 tiles of 480x360) replace the flat SVG art of these stories everywhere WART is used */
const PHOTO_SPRITE = "https://d2ol7oe51mr4n9.cloudfront.net/user_3LU1bTNxf2Kpq8N85or2hRXYLmA/ba91d37b-a85b-4759-8f90-7c3f10d72563.jpg";
const PHOTO_KEYS = ["cafe", "kids", "firstweek", "tapes", "travel", "movie", "business", "debate", "ielts", "heist", "camp", "roommates", "trial", "podcast", "editor", "interview", "client", "call", "contract"];
function photoArt(k) {
  const i = PHOTO_KEYS.indexOf(k), x = (i % 4) / 3 * 100, y = Math.floor(i / 4) / 4 * 100;
  return `<div class="gw-svg gw-ph" role="img" aria-label=""><i style="background-position:${x.toFixed(3)}% ${y.toFixed(3)}%"></i></div>`;
}
if (typeof WART !== "undefined") PHOTO_KEYS.forEach(k => { WART[k] = () => photoArt(k); });
