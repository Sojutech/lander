/* Sojutech shared site JS: theme toggle, nav, footer year, contact form tracking. */
(function () {
  'use strict';

  /* Theme toggle */
  var THEME_KEY = 'sojutech-theme';
  var html = document.documentElement;

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  setTheme(getPreferredTheme());

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(THEME_KEY)) setTheme(e.matches ? 'dark' : 'light');
    });
  }

  /* Mobile nav toggle and hide-on-scroll */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  var nav = document.querySelector('.main-nav');
  if (toggle && menu && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    var lastScrollY = window.scrollY || 0;
    var scrollThreshold = 360;
    var scrollUpDelta = 100;
    var hidePoint = 0;
    function onScroll() {
      var y = window.scrollY || 0;
      if (y > scrollThreshold) {
        if (y > lastScrollY) {
          nav.classList.add('nav-hidden');
          hidePoint = y;
        } else if (y <= hidePoint - scrollUpDelta || y <= scrollThreshold) {
          nav.classList.remove('nav-hidden');
        }
      } else {
        nav.classList.remove('nav-hidden');
      }
      lastScrollY = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Contact form: AJAX submit to Formspree, dataLayer event on success (Ticket 2) */
  document.querySelectorAll('form.contact-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var existingError = form.querySelector('.contact-form-error');
      if (existingError) existingError.remove();

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      function showError() {
        if (submitBtn) submitBtn.disabled = false;
        var err = document.createElement('p');
        err.className = 'contact-form-error';
        err.setAttribute('role', 'alert');
        err.innerHTML = 'Something went wrong sending this. Email us directly at <a href="mailto:hello@sojutech.com">hello@sojutech.com</a> and we will take it from there.';
        form.appendChild(err);
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'contact_form_submit', form_id: 'contact' });
          var done = document.createElement('p');
          done.className = 'contact-form-success';
          done.setAttribute('role', 'status');
          done.textContent = 'Got it. We read everything and reply within one business day.';
          form.replaceWith(done);
        } else {
          showError();
        }
      }).catch(showError);
    });
  });
})();
