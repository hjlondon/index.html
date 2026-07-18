// Supreme Cooling Services — minimal site JS
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  // Lead forms: intercept submit until a form endpoint is wired up.
  // TODO(owner): point the form at a real endpoint (e.g. Netlify Forms,
  // Formspree, or a mailto handler) and remove this interception.
  document.querySelectorAll('form.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var thanks = form.parentElement.querySelector('.form-thanks');
      form.style.display = 'none';
      if (thanks) thanks.classList.add('visible');
    });
  });
})();
