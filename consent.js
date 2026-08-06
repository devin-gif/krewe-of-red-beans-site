(function () {
  var KEY = 'krb_cookie_consent';
  var GA_ID = 'G-WDD69FBPHJ';
  var MC_SRC = 'https://chimpstatic.com/mcjs-connected/js/users/180905c2a2dba8e9ec6bac318/3940a7c318e7a27d39fafa71d.js';

  function loadTrackers() {
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);

    var mc = document.createElement('script');
    mc.async = true;
    mc.id = 'mcjs';
    mc.src = MC_SRC;
    document.head.appendChild(mc);
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'krb-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.style.cssText = [
      'position:fixed', 'left:0', 'right:0', 'bottom:0', 'z-index:9999',
      'background:#1E1E1E', 'color:#FAF6EF',
      'padding:14px 20px',
      'font-family:Inter,system-ui,-apple-system,sans-serif',
      'box-shadow:0 -2px 14px rgba(0,0,0,0.25)'
    ].join(';');
    banner.innerHTML =
      '<div style="max-width:1000px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center;justify-content:space-between;">' +
        '<p style="margin:0;font-size:0.95rem;line-height:1.5;flex:1 1 320px;">' +
          'We use cookies to understand how visitors use this site (Google Analytics and Mailchimp). ' +
          'Nothing is sold. Declining is fine — the site works the same either way.' +
        '</p>' +
        '<div style="display:flex;gap:8px;flex-shrink:0;">' +
          '<button type="button" id="krb-cookie-decline" style="background:transparent;color:#FAF6EF;border:1px solid rgba(250,246,239,0.45);padding:9px 18px;border-radius:6px;font:inherit;cursor:pointer;">Decline</button>' +
          '<button type="button" id="krb-cookie-accept" style="background:#C0392B;color:#FFFFFF;border:0;padding:9px 18px;border-radius:6px;font:inherit;font-weight:600;cursor:pointer;">Accept</button>' +
        '</div>' +
      '</div>';

    function attach() {
      document.body.appendChild(banner);
      document.getElementById('krb-cookie-accept').addEventListener('click', function () {
        try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
        banner.remove();
        loadTrackers();
      });
      document.getElementById('krb-cookie-decline').addEventListener('click', function () {
        try { localStorage.setItem(KEY, 'declined'); } catch (e) {}
        banner.remove();
      });
    }
    if (document.body) attach();
    else document.addEventListener('DOMContentLoaded', attach);
  }

  window.krbCookieChoices = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    location.reload();
  };

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  if (choice === 'accepted') loadTrackers();
  else if (choice !== 'declined') showBanner();
})();
