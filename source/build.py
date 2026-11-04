import base64, pathlib
R = pathlib.Path("/home/claude/mv")
band = ""
css = (R / "src/style.css").read_text()
MODS = ["words", "data", "data2", "tr", "tr2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "audmap", "core", "art", "home", "share", "tapes", "voyage", "wild", "travel", "views2", "mystery", "v2", "v3", "admin", "app", "course", "course2", "drill", "people", "skills", "safi", "friends", "social", "learn2", "uisound", "lesson", "level", "teacher", "mascot"]
SV_DROP = {"home", "tapes", "voyage", "wild", "travel", "mystery", "art"}  # Minaraverse-site-only pages: not part of the Safiverse app
js = "\n".join((R / f"src/{n}.js").read_text() for n in MODS if (R / f"src/{n}.js").exists())
js_sv = "\n".join((R / f"src/{n}.js").read_text() for n in MODS if n not in SV_DROP and (R / f"src/{n}.js").exists())
js = js.replace("__BAND__", band); js_sv = js_sv.replace("__BAND__", band)
# natural-voice clips available in img/tts (file name = fnv1a hash of the text)
_tts = R / ".." / "img" / "tts"
_clips = "".join(sorted(f.stem for f in _tts.glob("*.mp3"))) if _tts.exists() else ""
js = 'const TTS_CLIPS = "' + _clips + '";\n' + js; js_sv = 'const TTS_CLIPS = "' + _clips + '";\n' + js_sv
fonts = ("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,0..100;1,9..144,300..700,0..100"
         "&family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=IM+Fell+English:ital@0;1&family=Special+Elite&family=Great+Vibes&family=Nunito:wght@500;600;700;800;900&family=Condiment&display=swap")
def page(js, css=css):
  return f"""<title>Minaraverse 2.0</title>
<meta name="description" content="Minaraverse: English through stories. Five story worlds, a daily word, a level test and DİM exam practice. EN · AZ · RU.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{fonts}">
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
<style>
{css}
</style>
<div id="view"></div>
<script>
{js}
document.documentElement.lang = LANG;
Router.mount();
</script>
"""
html = page(js)
(R / "../minaraverse-v2.html").write_text(html)
(R / "check.js").write_text(js)
print(len(html))

# standalone build for own hosting (GitHub Pages)
import shutil
D = R / "dist"; (D / "img").mkdir(parents=True, exist_ok=True)
(D / "index.html").write_text('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  '<meta property="og:title" content="Minaraverse — English through stories"><meta property="og:description" content="Five story worlds, a daily word, a level test and DİM exam practice. EN · AZ · RU.">'
  '<link rel="icon" href="favicon.png">'
  '<link rel="manifest" href="manifest.json"><meta name="theme-color" content="#17161B"><link rel="apple-touch-icon" href="icon-180.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Minaraverse"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">'
  '<script>if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))</script>'
  '<style>:root{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + html + '</body></html>')
for f in pathlib.Path("/home/claude/img").iterdir():
    if f.suffix in (".jpg", ".webp", ".mp4") and not f.name.startswith(("ship-gen", "p-ship.png")): shutil.copy(f, D / "img" / f.name)


# ===== Safiverse: same app as its own installable product at /safiverse/ =====
import re as _re
S = D / "safiverse"; (S / "img").mkdir(parents=True, exist_ok=True)
# minified Safiverse bundle (falls back to the plain one if terser/csso are not installed)
import subprocess, tempfile, os
css_sv = css
try:
    td = pathlib.Path(tempfile.mkdtemp()); (td / "a.js").write_text(js_sv); (td / "a.css").write_text(css)
    subprocess.run(["node", str(R / "tools/minify.js"), str(td / "a.js"), str(td / "b.js"), str(td / "a.css"), str(td / "b.css")], check=True, env=dict(os.environ, NODE_PATH=os.environ.get("NODE_PATH", "")))
    js_sv = (td / "b.js").read_text(); css_sv = (td / "b.css").read_text(); print("safiverse: minified")
except Exception as e:
    print("safiverse: NOT minified", e)
sv_html = _re.sub(r'''(["'(`])img/''', r'\1../img/', page(js_sv, css_sv)).replace("<title>Minaraverse 2.0</title>", "<title>Safiverse</title>")
sv_html = sv_html.replace('<meta name="description" content="Minaraverse: English through stories. Five story worlds, a daily word, a level test and DİM exam practice. EN · AZ · RU.">',
  '<meta name="description" content="Safiverse: learn English step by step — short lessons, sounds, stars, quests and leagues. EN · AZ · RU.">')
(S / "index.html").write_text('<!doctype html><html lang="en" class="ap-mode"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  '<meta property="og:title" content="Safiverse — English step by step"><link rel="icon" href="favicon.png">'
  '<link rel="manifest" href="manifest.json"><meta name="theme-color" content="#0b0a20"><link rel="apple-touch-icon" href="icon-180.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Safiverse">'
  '<script>if(!location.hash)history.replaceState(null,"",location.pathname+"#app-learn");if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))</script>'
  '<style>:root{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}body{margin:0;background:#0b0a20}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + sv_html + '</body></html>')
(S / "manifest.json").write_text('{"name":"Safiverse — English step by step","short_name":"Safiverse","start_url":"./#app-learn","scope":"./","display":"standalone","background_color":"#0b0a20","theme_color":"#0b0a20","orientation":"portrait",'
  '"icons":[{"src":"icon-192.png","sizes":"192x192","type":"image/png","purpose":"any"},{"src":"icon-512.png","sizes":"512x512","type":"image/png","purpose":"any"},{"src":"icon-512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}]}')
(S / "sw.js").write_text('/* Safiverse offline cache: network first (fresh version), but if the network is slow (>3.5 s) open the saved copy at once */\nconst C = "sv-v21";\n'
  'self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(["./", "./index.html"])).then(() => self.skipWaiting())); });\n'
  'self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("sv-") && k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });\n'
  'self.addEventListener("fetch", e => { const r = e.request; if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;\n'
  '  const net = fetch(r, r.mode === "navigate" ? { cache: "no-store" } : {}).then(res => { if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; });\n'
  '  const cached = () => caches.match(r).then(m => m || caches.match("./index.html"));\n'
  '  const slow = new Promise(ok => setTimeout(ok, 3500)).then(cached).then(m => m || net);\n'
  '  e.respondWith(Promise.race([net.catch(cached), slow]).then(x => x || net)); e.waitUntil(net.catch(() => {})); });\n')


# ===== Safiverse at its own address (safiverse.github.io): same page, images at root =====
S2 = R / "dist-sv"; (S2 / "img").mkdir(parents=True, exist_ok=True)
sv_root = (S / "index.html").read_text().replace('../img/', 'img/')
(S2 / "index.html").write_text(sv_root)
for f in ["manifest.json", "sw.js", "favicon.png", "icon-180.png", "icon-192.png", "icon-512.png"]:
    if (S / f).exists(): shutil.copy(S / f, S2 / f)
shutil.copytree(D / "img", S2 / "img", dirs_exist_ok=True)
(S2 / ".nojekyll").write_text("")
