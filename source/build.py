import base64, pathlib
R = pathlib.Path(__file__).resolve().parent
band = ""
css = (R / "src/style.css").read_text()
js = "\n".join((R / f"src/{n}.js").read_text() for n in ["words", "data", "data2", "tr", "tr2", "data3", "data4", "data5", "data6", "data7", "core", "art", "home", "tapes", "voyage", "wild", "travel", "views2", "mystery", "v2", "v3", "admin", "app", "course", "drill", "people"] if (R / f"src/{n}.js").exists())
js = js.replace("__BAND__", band)
fonts = ("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,0..100;1,9..144,300..700,0..100"
         "&family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=IM+Fell+English:ital@0;1&family=Special+Elite&family=Great+Vibes&family=Nunito:wght@500;600;700;800;900&family=Condiment&display=swap")
html = f"""<title>Minaraverse 2.0</title>
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
(R / "minaraverse-v2.html").write_text(html)
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
for f in (R / ".." / "img").iterdir():
    if f.suffix in (".jpg", ".webp", ".mp4") and not f.name.startswith(("ship-gen", "p-ship.png")): shutil.copy(f, D / "img" / f.name)
