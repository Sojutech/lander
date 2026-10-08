/* Sojutech lead capture: first-touch attribution and Formspree submit (CSZ07 R7). */
(function () {
  var KEY = 'sjt_first_touch';
  var TTL = 90 * 24 * 60 * 60 * 1000;
  var FIELDS = ['landing_page', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'msclkid', 'fbclid'];

  function store() {
    try { localStorage.setItem('__sjt_test', '1'); localStorage.removeItem('__sjt_test'); return localStorage; }
    catch (e) { return sessionStorage; }
  }

  function readTouch() {
    try {
      var raw = store().getItem(KEY);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || typeof obj.ts !== 'number' || Date.now() - obj.ts > TTL) return null;
      return obj;
    } catch (e) { return null; }
  }

  try {
    if (!readTouch()) {
      var p = new URLSearchParams(location.search);
      store().setItem(KEY, JSON.stringify({
        ts: Date.now(),
        landing_page: location.pathname,
        referrer: document.referrer || '(direct)',
        utm_source: p.get('utm_source') || '',
        utm_medium: p.get('utm_medium') || '',
        utm_campaign: p.get('utm_campaign') || '',
        gclid: p.get('gclid') || '',
        msclkid: p.get('msclkid') || '',
        fbclid: p.get('fbclid') || ''
      }));
    }
  } catch (e) {}

  document.querySelectorAll('form[action*="formspree.io"]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var touch = readTouch() || {};
      FIELDS.forEach(function (k) {
        if (form.elements[k]) form.elements[k].value = touch[k] || '';
      });
      if (form.elements.submitted_from) form.elements.submitted_from.value = location.pathname;
      var btn = form.querySelector('[type="submit"]');
      if (btn) btn.disabled = true;

      function fallback() {
        if (btn) btn.disabled = false;
        form.submit();
      }

      var req;
      try {
        req = fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
      } catch (e) { fallback(); return; }

      req.then(function (res) {
        if (!res.ok) { fallback(); return; }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'contact_form_submit',
          form_id: form.dataset.formId || 'contact',
          page_path: location.pathname
        });
        form.outerHTML = '<p class="form-confirm" role="status">Got it. We read everything and reply within one business day.</p>';
      }).catch(fallback);
    });
  });
})();
