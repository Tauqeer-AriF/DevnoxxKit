/**
 * DevnoxxKit — Theme System v2.1 + Home Dropdown
 * ─────────────────────────────────────────────────────────────
 * Drop this file into your project and add ONE line per page:
 *   <script src="devnoxxkit-theme.js" defer></script>
 *
 * Also add the anti-flash snippet to <head> (see README).
 * Everything else is automatic.
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  const KEY   = 'dnk-theme';
  const root  = document.documentElement;
  const DARK  = 'dark';
  const LIGHT = 'light';

  // ── 1. Read saved preference or system default ────────────
  function getTheme() {
    const saved = localStorage.getItem(KEY);
    if (saved === DARK || saved === LIGHT) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  // ── 2. Apply theme to <html> ──────────────────────────────
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    // Sync meta theme-color for mobile browser chrome
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === DARK ? '#0A0A0C' : '#F7F3EC';
  }

  // ── 3. Save and apply ─────────────────────────────────────
  function setTheme(theme) {
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
    updateAllToggles(theme);
    // Fire a custom event so other scripts can react
    window.dispatchEvent(new CustomEvent('dnk:themechange', { detail: { theme } }));
  }

  // ── 4. Toggle between dark and light ─────────────────────
  function toggle() {
    setTheme(root.getAttribute('data-theme') === DARK ? LIGHT : DARK);
  }

  // ── 5. Update every toggle button on the page ────────────
  function updateAllToggles(theme) {
    const isDark = theme === DARK;

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(!isDark));
      btn.classList.toggle('theme-toggle--light', !isDark);
    });

    document.querySelectorAll('.theme-toggle-track').forEach(track => {
      track.classList.toggle('is-light', !isDark);
    });

    document.querySelectorAll('.theme-toggle-label').forEach(lbl => {
      lbl.textContent = isDark ? 'Dark' : 'Light';
    });

    document.querySelectorAll('.theme-icon-moon').forEach(el => {
      el.style.opacity = isDark ? '1' : '0.35';
    });

    document.querySelectorAll('.theme-icon-sun').forEach(el => {
      el.style.opacity = isDark ? '0.35' : '1';
    });
  }

  // ── 6. Inject the toggle button into .nav-links ───────────
  function injectToggleButton() {
    // Find the nav links list — works across all DevnoxxKit pages
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks || document.querySelector('[data-theme-toggle]')) return;

    const li  = document.createElement('li');
    const btn = document.createElement('button');

    btn.setAttribute('data-theme-toggle', '');
    btn.setAttribute('aria-label', 'Toggle dark / light mode');
    btn.setAttribute('aria-pressed', 'false');
    btn.title = 'Toggle theme (T)';

    btn.innerHTML = `
      <span class="theme-toggle-inner">
        <!-- Moon -->
        <svg class="theme-icon-moon" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13 9.5A6 6 0 117 3.5a4.5 4.5 0 006 6z"
                stroke="currentColor" stroke-width="1.5"/>
        </svg>

        <!-- Pill track + thumb -->
        <span class="theme-toggle-track" aria-hidden="true">
          <span class="theme-toggle-thumb"></span>
        </span>

        <!-- Sun -->
        <svg class="theme-icon-sun" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 2v1M8 13v1M2 8H1M15 8h-1M4.22 4.22L3.5 3.5M12.5 12.5l-.72-.72M4.22 11.78L3.5 12.5M12.5 3.5l-.72.72"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

        <span class="theme-toggle-label">Dark</span>
      </span>
    `;

    btn.addEventListener('click', toggle);
    li.appendChild(btn);
    navLinks.appendChild(li);
  }

  // ── 7. Inject CSS (only once per page) ───────────────────
  function injectCSS() {
    if (document.getElementById('dnk-theme-css')) return;

    const css = `
      /* ── Light mode token overrides ──────────────────────── */
      [data-theme="light"] {
        --bg:          #F7F3EC;
        --bg-2:        #EDE8DF;
        --bg-3:        #E4DED4;
        --surface:     #F0EBE3;
        --border:      rgba(26,24,20,0.10);
        --border-gold: rgba(180,130,60,0.30);
        --ink:         #1A1814;
        --ink-2:       #4A4540;
        --ink-3:       #8A8078;
        --gold:        #B87A2E;
        --gold-light:  #C8953E;
        --gold-dim:    rgba(184,122,46,0.10);
        --noise-op:    0.018;
        --img-filter:  brightness(0.9) saturate(0.85);
        --nav-scrolled-bg: rgba(247,243,236,0.92);
      }

      /* Smooth transition for ALL properties that use tokens */
      *,
      *::before,
      *::after {
        transition:
          background-color 0.35s cubic-bezier(0.16,1,0.3,1),
          border-color     0.35s cubic-bezier(0.16,1,0.3,1),
          color            0.35s cubic-bezier(0.16,1,0.3,1),
          box-shadow       0.35s cubic-bezier(0.16,1,0.3,1),
          opacity          0.35s cubic-bezier(0.16,1,0.3,1) !important;
      }
      /* But never slow down layout / transform */
      *, *::before, *::after {
        transition:
          background-color 0.35s cubic-bezier(0.16,1,0.3,1),
          border-color     0.35s cubic-bezier(0.16,1,0.3,1),
          color            0.35s cubic-bezier(0.16,1,0.3,1) !important;
      }

      /* Images adapt in light mode */
      [data-theme="light"] img {
        filter: var(--img-filter, brightness(0.9) saturate(0.85));
      }
      /* But not images inside logo marks */
      [data-theme="light"] .nav-logo-mark img,
      [data-theme="light"] .logo-mark img { filter: none; }

      /* ── Toggle button styles ──────────────────────────── */
      [data-theme-toggle] {
        display: inline-flex;
        align-items: center;
        background: none;
        border: none;
        padding: 0;
        cursor: none;
        font: inherit;
        line-height: 1;
      }

      .theme-toggle-inner {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 7px 13px;
        background: var(--bg-3);
        border: 1px solid var(--border);
        border-radius: 100px;
        transition: border-color 0.2s, background 0.2s;
      }
      [data-theme-toggle]:hover .theme-toggle-inner {
        border-color: var(--border-gold);
        background: var(--gold-dim);
      }

      .theme-icon-moon,
      .theme-icon-sun {
        color: var(--ink-3);
        display: block;
        flex-shrink: 0;
        transition: opacity 0.3s, color 0.3s;
      }

      /* Track */
      .theme-toggle-track {
        display: inline-flex;
        align-items: center;
        width: 36px;
        height: 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 100px;
        position: relative;
        flex-shrink: 0;
        transition: background 0.35s, border-color 0.35s;
      }
      .theme-toggle-track.is-light {
        background: var(--gold);
        border-color: var(--gold-light);
      }

      /* Thumb */
      .theme-toggle-thumb {
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--ink-3);
        left: 2px;
        transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s;
      }
      .theme-toggle-track.is-light .theme-toggle-thumb {
        transform: translateX(16px);
        background: var(--bg);
      }

      /* Label */
      .theme-toggle-label {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--ink-3);
        transition: color 0.3s;
        white-space: nowrap;
      }
      .theme-toggle-track.is-light ~ .theme-toggle-label,
      [data-theme-toggle].theme-toggle--light .theme-toggle-label {
        color: var(--gold);
      }

      /* On mobile: hide label, keep the pill */
      @media (max-width: 768px) {
        .theme-toggle-label { display: none; }
        .theme-toggle-inner { padding: 7px 10px; gap: 6px; }
      }
    `;

    const style  = document.createElement('style');
    style.id     = 'dnk-theme-css';
    style.textContent = css;
    // document.head.insertBefore(style, document.head.firstChild);
    document.head.appendChild(style);
  }

  // ── 8. Keyboard shortcut: T to toggle ────────────────────
  function bindKeyboard() {
    document.addEventListener('keydown', e => {
      if (e.key.toLowerCase() !== 't') return;
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      toggle();
    });
  }

  // ── 9. React to OS-level theme changes ───────────────────
  function bindMediaQuery() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      // Only follow the OS if the user hasn't set a preference
      if (!localStorage.getItem(KEY)) {
        applyTheme(e.matches ? DARK : LIGHT);
        updateAllToggles(e.matches ? DARK : LIGHT);
      }
    });
  }

  // ── HOME DROPDOWN INIT ─────────────────────────────────────
  function initHomeDropdown() {
    // Add CSS for dropdown
    const dropdownCSS = `
      /* Home Dropdown */
      .nav-links li.relative {
        position: relative;
      }
      .nav-home-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 220px;
        background: rgba(10,10,12,0.98);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 12px 0;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: all 0.25s var(--ease-out);
        z-index: 1001;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      }
      .nav-links li.relative:hover .nav-home-dropdown,
      .nav-links li.relative:focus-within .nav-home-dropdown,
      .nav-home-dropdown:hover,
      .nav-home-dropdown.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .nav-home-item {
        display: block;
        padding: 12px 24px;
        font-size: 0.875rem;
        color: var(--ink-2);
        transition: color 0.2s, padding-left 0.2s;
        position: relative;
      }
      .nav-home-item:hover {
        color: var(--ink);
        padding-left: 32px;
        background: var(--gold-dim);
      }
      .nav-home-item::before {
        content: '';
        position: absolute;
        left: 16px;
        top: 50%;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--gold);
        opacity: 0;
        transform: translateY(-50%) scale(0);
        transition: all 0.2s var(--ease-out);
      }
      .nav-home-item:hover::before {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }
      /* Mobile */
      @media (max-width: 768px) {
        #mobile-nav .nav-home-item { display: none; }
        #mobile-nav.open .nav-home-dropdown { display: block; position: static; background: none; border: none; padding: 16px 0; opacity: 1; visibility: visible; transform: none; }
        .nav-home-trigger-mobile { font-weight: 700; }
      }
    `;
    if (!document.getElementById('dnk-dropdown-css')) {
      const style = document.createElement('style');
      style.id = 'dnk-dropdown-css';
      style.textContent = dropdownCSS;
      document.head.appendChild(style);
    }

    // Add Home dropdown to desktop nav
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      const existingHomeTrigger = navLinks.querySelector('.home-trigger');
      const existingHomeDropdown = navLinks.querySelector('.nav-home-dropdown');
      if (!existingHomeTrigger) {
        const homeLi = document.createElement('li');
        homeLi.className = 'relative';
        homeLi.innerHTML = `
          <a href="index.html" class="home-trigger" aria-haspopup="true" aria-expanded="false">Home</a>
          <div class="nav-home-dropdown">
            <a href="index.html" class="nav-home-item">Default</a>
            <a href="devnoxxkit-home-brutalist.html" class="nav-home-item">Brutalist</a>
            <a href="devnoxxkit-home-ivory.html" class="nav-home-item">Ivory</a>
            <a href="devnoxxkit-home-monochrome.html" class="nav-home-item">Monochrome</a>
            <a href="devnoxxkit-home-teal.html" class="nav-home-item">Teal</a>
          </div>
        `;
        navLinks.insertBefore(homeLi, navLinks.firstChild);
      } else if (!existingHomeDropdown) {
        const homeParent = existingHomeTrigger.closest('li');
        if (homeParent) {
          homeParent.classList.add('relative');
          homeParent.insertAdjacentHTML('beforeend', `
            <div class="nav-home-dropdown">
              <a href="index.html" class="nav-home-item">Default</a>
              <a href="devnoxxkit-home-brutalist.html" class="nav-home-item">Brutalist</a>
              <a href="devnoxxkit-home-ivory.html" class="nav-home-item">Ivory</a>
              <a href="devnoxxkit-home-monochrome.html" class="nav-home-item">Monochrome</a>
              <a href="devnoxxkit-home-teal.html" class="nav-home-item">Teal</a>
            </div>
          `);
        }
      }
    }

    // Mobile: add dropdown after Home
    const mobileHome = document.querySelector('#mobile-nav a[href="index.html"]');
    if (mobileHome && !mobileHome.nextElementSibling?.classList.contains('nav-home-dropdown')) {
      const mobileDropdown = document.createElement('div');
      mobileDropdown.className = 'nav-home-dropdown';
      mobileDropdown.innerHTML = `
        <a href="index.html" class="nav-home-item">Default</a>
        <a href="devnoxxkit-home-brutalist.html" class="nav-home-item">Brutalist</a>
        <a href="devnoxxkit-home-ivory.html" class="nav-home-item">Ivory</a>
        <a href="devnoxxkit-home-monochrome.html" class="nav-home-item">Monochrome</a>
        <a href="devnoxxkit-home-teal.html" class="nav-home-item">Teal</a>
      `;
      mobileHome.parentNode.insertBefore(mobileDropdown, mobileHome.nextSibling);
      mobileHome.classList.add('nav-home-trigger-mobile');
    }
  }

  // ── INIT ──────────────────────────────────────────────────
  function init() {
    const theme = getTheme();
    applyTheme(theme);
    injectCSS();
    bindKeyboard();
    bindMediaQuery();

    // Inject the nav toggle and home dropdown after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        injectToggleButton();
        initHomeDropdown();
        updateAllToggles(getTheme());
      });
    } else {
      injectToggleButton();
      initHomeDropdown();
      updateAllToggles(theme);
    }
  }

  init();

  // ── Public API (optional) ─────────────────────────────────
  window.DevnoxxTheme = { toggle, setTheme, getTheme };

})();
