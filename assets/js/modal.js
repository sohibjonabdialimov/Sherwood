/*
Basic :focus-trapping in 556 bytes before gzip.
Replace `href` with `button,[href],select,textarea,input:not([type="hidden"]),[tabindex]:not([tabindex="-1"])` for supporting all focusable elements.
*/
let D = document;
function K(e) {
  if ("Tab" === e.key) {
    e.preventDefault();
    let t = this.__f.length - 1,
      n = this.__f.indexOf(e.target);
    (n = e.shiftKey ? n - 1 : n + 1) < 0 && (n = t),
      n > t && (n = 0),
      this.__f[n].focus();
  }
  "Escape" === e.key && (location.hash = "#");
}
addEventListener("hashchange", (e) => {
  let t = location.hash;
  if (t.length > 1) {
    let e = D.getElementById(t.substr(1));
    e &&
      (e.addEventListener("keydown", K),
      (e.__f = [...e.querySelectorAll("[href]")]),
      e.__f[0].focus());
  } else {
    let [t, n] = e.oldURL.split("#");
    n &&
      (D.getElementById(n).removeEventListener("keydown", K),
      D.querySelector(`[href="#${n}"]`).focus());
  }
});

/* DEMO: Trigger open */
location.hash = "modal";
