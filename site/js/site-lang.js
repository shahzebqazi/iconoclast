(function () {
  var STORAGE_KEY = "iconoclastSiteLang";

  function readStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === "fr" || v === "en") return v;
    } catch (e) {}
    return null;
  }

  function writeStored(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function queryParamLang() {
    try {
      var v = new URLSearchParams(window.location.search).get("lang");
      if (!v) return null;
      v = v.toLowerCase();
      if (v === "fr" || v === "en") return v;
    } catch (e) {}
    return null;
  }

  function isRatesPage() {
    return document.body.classList.contains("rates-menu-page");
  }

  function isRatesWide() {
    return window.matchMedia("(min-width: 900px)").matches;
  }

  function updateSwitchers(isFr) {
    document.querySelectorAll("[data-site-lang-switcher]").forEach(function (g) {
      var bEn = g.querySelector('[data-lang="en"]');
      var bFr = g.querySelector('[data-lang="fr"]');
      if (bEn) bEn.setAttribute("aria-pressed", isFr ? "false" : "true");
      if (bFr) bFr.setAttribute("aria-pressed", isFr ? "true" : "false");
    });
  }

  function applyRatesLayout() {
    if (!isRatesPage()) {
      document.documentElement.lang = "en";
      return;
    }
    var storedFr = readStored() === "fr";
    if (isRatesWide()) {
      document.body.classList.remove("rates-lang-fr");
      document.documentElement.lang = "en";
    } else {
      document.body.classList.toggle("rates-lang-fr", storedFr);
      document.documentElement.lang = storedFr ? "fr" : "en";
    }
  }

  function setSiteLang(lang) {
    if (lang !== "en" && lang !== "fr") lang = "en";
    writeStored(lang);
    updateSwitchers(lang === "fr");
    applyRatesLayout();
  }

  function init() {
    var qp = queryParamLang();
    var stored = readStored();
    var effective = qp || stored || "en";
    if (effective !== "en" && effective !== "fr") effective = "en";
    if (qp) writeStored(qp);
    updateSwitchers(effective === "fr");
    applyRatesLayout();
  }

  document.querySelectorAll("[data-site-lang-switcher]").forEach(function (group) {
    var btnEn = group.querySelector('[data-lang="en"]');
    var btnFr = group.querySelector('[data-lang="fr"]');
    if (btnEn) {
      btnEn.addEventListener("click", function () {
        setSiteLang("en");
      });
    }
    if (btnFr) {
      btnFr.addEventListener("click", function () {
        setSiteLang("fr");
      });
    }
  });

  var mqRates = window.matchMedia("(min-width: 900px)");
  mqRates.addEventListener("change", function () {
    applyRatesLayout();
    updateSwitchers(readStored() === "fr");
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
