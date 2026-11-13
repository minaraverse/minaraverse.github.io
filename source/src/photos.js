/* realistic cover photos (one sprite, 4x5 tiles of 480x360) replace the flat SVG art of these stories everywhere WART is used */
const PHOTO_SPRITE = "https://d2ol7oe51mr4n9.cloudfront.net/user_3LU1bTNxf2Kpq8N85or2hRXYLmA/ba91d37b-a85b-4759-8f90-7c3f10d72563.jpg";
const PHOTO_KEYS = ["cafe", "kids", "firstweek", "tapes", "travel", "movie", "business", "debate", "ielts", "heist", "camp", "roommates", "trial", "podcast", "editor", "interview", "client", "call", "contract"];
/* only these keep the photo (owner's choice); all other stories use their original art */
const PHOTO_KEEP = ["heist", "debate", "podcast"];
function photoArt(k) {
  const i = PHOTO_KEYS.indexOf(k), x = (i % 4) * 480, y = Math.floor(i / 4) * 360;
  /* SVG "slice" = cover-fit that works in every browser (old iPhones too) */
  return `<div class="gw-svg gw-ph gw-ph-${k}"><svg viewBox="${x} ${y} 480 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href="${PHOTO_SPRITE}" xlink:href="${PHOTO_SPRITE}" x="0" y="0" width="1920" height="1800"/></svg></div>`;
}
if (typeof WART !== "undefined") PHOTO_KEYS.filter(k => PHOTO_KEEP.includes(k)).forEach(k => { WART[k] = () => photoArt(k); });  /* Tape Club keeps its original shelf art */
