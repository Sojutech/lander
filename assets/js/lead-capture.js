/* Sojutech lead capture: first-touch attribution and Formspree submit (CSZ07 R7). */
(function () {
  var KEY = 'sjt_first_touch';
  try {
    if (!sessionStorage.getItem(KEY)) {
      var p = new URLSearchParams(location.search);
      sessionStorage.setItem(KEY, JSON.stringify({
        landing_page: location.pathname,
        referrer: document.referrer || '(direct)',
        utm_source: p.get('utm_source') || '',
        utm_medium: p.get('utm_medium') || '',
        utm_campaign: p.get('utm_campaign') || ''
      }));
    }
  } catch (e) {}

  document.querySelectorAll('form[action*="formspree.io"]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var touch = {};
      try { touch = JSON.parse(sessionStorage.getItem(KEY) || '{}'); } catch (e) {}
      Object.keys(touch).forEach(function (k) {
        if (form.elements[k]) form.elements[k].value = touch[k];
      });
      if (form.elements.submitted_from) form.elements.submitted_from.value = location.pathname;
      var btn = form.querySelector('[type="submit"]');
      if (btn) btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'contact_form_submit',
          form_id: form.dataset.formId || 'contact',
          page_path: location.pathname
        });
        form.outerHTML = '<p class="form-confirm" role="status">Got it. We read everything and reply within one business day.</p>';
      }).catch(function () {
        if (btn) btn.disabled = false;
        var err = form.querySelector('.form-error');
        if (!err) {
          err = document.createElement('p');
          err.className = 'form-error';
          err.setAttribute('role', 'alert');
          form.appendChild(err);
        }
        err.textContent = 'That did not send. Email hello@sojutech.com and we will pick it up.';
      });
    });
  });
})();
