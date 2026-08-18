// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Terminal boot sequence ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const bootLines = [
  { html: '<span class="ok">$</span> connect --engineer "Neeraj Vishwakarma"' },
  { html: '<span class="ok">✓</span> role: Technical Delivery Manager' },
  { html: '<span class="ok">✓</span> domain: BFSI · Mortgage · Insurance' },
  { html: '<span class="ok">✓</span> experience: 16y enterprise delivery' },
  { html: '' },
  { html: '<span class="tag">[watch]</span> Appnomic / State Bank of India — APM &amp; Observability' },
  { html: '<span class="tag">[watch]</span> Agentic AI monitoring — incident prediction: <span class="ok">active</span>' },
  { html: '<span class="tag">[stack]</span> OpenTelemetry · Elasticsearch · OpenSearch' },
  { html: '<span class="tag">[stack]</span> Python · AWS · Azure DevOps · CI/CD' },
  { html: '' },
  { html: '<span class="ok">✓</span> all systems operational<span class="cursor"></span>' },
];

const body = document.getElementById('terminalBody');

function typeBoot() {
  if (!body) return;
  body.innerHTML = '';
  bootLines.forEach((l, i) => {
    const div = document.createElement('span');
    div.className = 'line';
    div.innerHTML = l.html;
    div.style.animationDelay = (reduceMotion ? 0 : i * 0.16) + 's';
    body.appendChild(div);
  });
}
typeBoot();

// ---------- Stat counters (animate on scroll into view) ----------
const statNums = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-count'), 10) || 0;
  if (reduceMotion) { el.textContent = target; return; }
  const duration = 900;
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statNums.forEach(el => io.observe(el));
} else {
  statNums.forEach(animateCount);
}
