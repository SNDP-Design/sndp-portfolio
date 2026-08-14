(function() {
    'use strict';

    if (!document.getElementById('portfolio-monochrome-style')) {
        var style = document.createElement('style');
        style.id = 'portfolio-monochrome-style';
        style.textContent = '.tldr-grid { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; } @media (max-width: 768px) { .tldr-grid { grid-template-columns: 1fr !important; } } .hide-mobile { display: inline-block; } @media (max-width: 640px) { .hide-mobile { display: none !important; } #sticky-cta-bar { left: 16px !important; right: 16px !important; transform: none !important; width: calc(100vw - 32px) !important; max-width: none !important; bottom: 16px !important; padding: 8px 10px !important; border-radius: 30px !important; justify-content: space-between !important; box-sizing: border-box !important; } #sticky-cta-bar > div { width: 100% !important; display: flex !important; gap: 8px !important; } #sticky-cta-bar .sticky-call-btn, #sticky-cta-bar .sticky-copy-btn { flex: 1 1 50% !important; text-align: center !important; justify-content: center !important; white-space: nowrap !important; padding: 10px 8px !important; font-size: 13px !important; box-sizing: border-box !important; } } .sticky-call-btn { transition: transform 0.2s ease; } .sticky-call-btn:hover { transform: scale(1.05); } .sticky-copy-btn:hover { background: rgba(255,255,255,0.2) !important; } .framer-1lie902, .framer-1yblziv { width: 100% !important; max-width: 1000px !important; height: auto !important; aspect-ratio: 1.5 !important; border-radius: 16px !important; overflow: hidden !important; } .framer-1uxbk4c, .framer-svjgg5 { width: 100% !important; max-width: 1000px !important; height: auto !important; aspect-ratio: 1.6 !important; border-radius: 16px !important; overflow: hidden !important; } .btn-404-purple { transition: all 0.2s ease; } .btn-404-purple:hover { transform: scale(1.05) !important; background: #9639FF !important; box-shadow: 0 10px 30px rgba(134,41,255,0.6) !important; }';
        document.head.appendChild(style);
    }

    // Ensure context_footer.css is loaded
    if (!document.getElementById('context-footer-css')) {
        var cssLink = document.createElement('link');
        cssLink.id = 'context-footer-css';
        cssLink.rel = 'stylesheet';
        cssLink.href = '/context_footer.css';
        document.head.appendChild(cssLink);
    }

    function showToast(msg) {
        var existing = document.getElementById('sndp-toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.id = 'sndp-toast';
        toast.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#18181b;border:1px solid rgba(255,255,255,0.3);color:#ffffff;padding:12px 24px;border-radius:30px;font-size:14px;font-weight:600;font-family:Inter,sans-serif;z-index:999999;box-shadow:0 10px 30px rgba(0,0,0,0.7);display:flex;align-items:center;gap:8px;animation:toastIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards;';
        toast.innerHTML = '<span style="color:#ffffff;">✓</span> ' + msg;

        if (!document.getElementById('toast-style')) {
            var st = document.createElement('style');
            st.id = 'toast-style';
            st.textContent = '@keyframes toastIn { from { opacity:0; transform:translate(-50%, 20px); } to { opacity:1; transform:translate(-50%, 0); } }';
            document.head.appendChild(st);
        }

        document.body.appendChild(toast);
        setTimeout(function() {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
            setTimeout(function() { if (toast.parentNode) toast.remove(); }, 300);
        }, 2500);
    }

    window.copyPortfolioEmail = function() {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('hello@sndpdesign.uno').then(function() {
                showToast('Official Email copied to clipboard!');
            }).catch(function() {
                showToast('Email: hello@sndpdesign.uno');
            });
        } else {
            showToast('Email: hello@sndpdesign.uno');
        }
    };

    document.addEventListener('click', function(e) {
        var link = e.target.closest('a');
        if (link && (link.href.includes('mailto:hello@sndpdesign.uno') || (link.innerText && link.innerText.includes('hello@sndpdesign.uno')))) {
            e.preventDefault();
            window.copyPortfolioEmail();
        }
    });

    function injectKPIBadges() {
        if (window.location.pathname !== '/' && window.location.pathname !== '') return;

        var headers = document.querySelectorAll('h3');
        headers.forEach(function(h3) {
            var text = h3.innerText.trim();
            var parent = h3.parentElement;
            if (!parent) return;

            var chip_style = 'background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);color:#ffffff;font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px;letter-spacing:0.3px;';

            if (text === 'CliX' && !parent.querySelector('.kpi-clix')) {
                var div = document.createElement('div');
                div.className = 'kpi-badge-container kpi-clix';
                div.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:18px;margin-bottom:22px;padding-top:2px;padding-bottom:2px;';
                div.innerHTML = '<span style="' + chip_style + '">⚡ +45% Campaign Efficiency</span><span style="' + chip_style + '">B2B SaaS Engine</span>';
                h3.after(div);
            } else if (text === 'FATCA-CRS' && !parent.querySelector('.kpi-fatca')) {
                var div = document.createElement('div');
                div.className = 'kpi-badge-container kpi-fatca';
                div.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:18px;margin-bottom:22px;padding-top:2px;padding-bottom:2px;';
                div.innerHTML = '<span style="' + chip_style + '">⚡ -65% Drop-off Rate</span><span style="' + chip_style + '">Fintech Compliance</span>';
                h3.after(div);
            } else if (text === 'Member Connect' && !parent.querySelector('.kpi-member')) {
                var div = document.createElement('div');
                div.className = 'kpi-badge-container kpi-member';
                div.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:18px;margin-bottom:22px;padding-top:2px;padding-bottom:2px;';
                div.innerHTML = '<span style="' + chip_style + '">⚡ 50k+ Active SMEs</span><span style="' + chip_style + '">Tide Platform</span>';
                h3.after(div);
            }
        });
    }

    function injectTLDRBoxes() {
        var path = window.location.pathname;
        var h1 = document.querySelector('h1');
        if (!h1 || !h1.parentElement) return;

        var container = h1.parentElement;
        if (container.querySelector('.executive-tldr-grid')) return;

        var grid = document.createElement('div');
        grid.className = 'executive-tldr-grid tldr-grid';
        grid.style.cssText = 'width:100%;max-width:900px;margin:48px auto 16px auto;font-family:Inter,sans-serif;box-sizing:border-box;';

        var cardStyle = 'background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.12);padding:18px 20px;border-radius:16px;box-sizing:border-box;backdrop-filter:blur(10px);';
        var labelStyle = 'color:#a0a0a0;font-size:11px;text-transform:uppercase;font-weight:700;letter-spacing:0.5px;margin-bottom:6px;';
        var valStyle = 'color:#ffffff;font-size:14px;font-weight:600;';

        if (path.includes('/clix')) {
            grid.innerHTML = '<div style="' + cardStyle + '"><div style="' + labelStyle + '">My Role</div><div style="' + valStyle + '">Sole Product Designer</div></div><div style="' + cardStyle + '"><div style="' + labelStyle + '">Scope & Platform</div><div style="' + valStyle + '">B2B Web App & Analytics</div></div><div style="' + cardStyle + '"><div style="' + labelStyle + '">Key Metric Impact</div><div style="' + valStyle + '">+45% Setup Speed & Efficiency</div></div>';
            h1.after(grid);
        } else if (path.includes('/fatca-crs')) {
            grid.innerHTML = '<div style="' + cardStyle + '"><div style="' + labelStyle + '">My Role</div><div style="' + valStyle + '">Sole Product Designer</div></div><div style="' + cardStyle + '"><div style="' + labelStyle + '">Scope & Platform</div><div style="' + valStyle + '">iOS / Android Mobile App</div></div><div style="' + cardStyle + '"><div style="' + labelStyle + '">Key Metric Impact</div><div style="' + valStyle + '">-65% Onboarding Drop-off</div></div>';
            h1.after(grid);
        } else if (path.includes('/member-connect')) {
            grid.innerHTML = '<div style="' + cardStyle + '"><div style="' + labelStyle + '">My Role</div><div style="' + valStyle + '">Sole Product Designer</div></div><div style="' + cardStyle + '"><div style="' + labelStyle + '">Scope & Platform</div><div style="' + valStyle + '">Mobile & Web Community</div></div><div style="' + cardStyle + '"><div style="' + labelStyle + '">Key Metric Impact</div><div style="' + valStyle + '">50k+ SME Network Onboarded</div></div>';
            h1.after(grid);
        }
    }

    function injectStickyBar() {
        var path = window.location.pathname;
        var isCaseStudy = path.includes('/clix') || path.includes('/fatca-crs') || path.includes('/member-connect');
        var existingBar = document.getElementById('sticky-cta-bar');

        if (!isCaseStudy) {
            if (existingBar) existingBar.remove();
            return;
        }

        if (existingBar) return;

        var bar = document.createElement('div');
        bar.id = 'sticky-cta-bar';
        bar.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(18,18,20,0.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.18);padding:10px 20px;border-radius:40px;z-index:99990;display:flex;align-items:center;gap:16px;box-shadow:0 20px 40px rgba(0,0,0,0.7);max-width:90vw;font-family:Inter,sans-serif;';
        bar.innerHTML = '<span style="color:#e0e0e0;font-size:13px;font-weight:500;white-space:nowrap;" class="hide-mobile">Like this case study? Let&apos;s build your next product.</span><div style="display:flex;align-items:center;gap:8px;"><a href="https://calendly.com/sndp-design/30min" target="_blank" rel="noopener noreferrer" class="sticky-call-btn" style="background:#ffffff;color:#000000;padding:8px 16px;border-radius:20px;font-size:13px;font-weight:700;text-decoration:none;">Book a Call ↗</a><button onclick="window.copyPortfolioEmail()" class="sticky-copy-btn" style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);color:#ffffff;padding:8px 14px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;">Copy Email ✉</button></div>';

        document.body.appendChild(bar);
    }

    function injectGithub() {
        var instaLinks = document.querySelectorAll('a[href*="instagram.com/sndp.rathi"]');
        instaLinks.forEach(function(instaLink) {
            // Never touch the context-footer
            if (instaLink.closest('.context-footer')) return;

            var container = instaLink.parentElement;
            if (container && !container.querySelector('a[href*="github.com"]')) {
                var githubLink = document.createElement('a');
                githubLink.className = instaLink.className;
                githubLink.href = 'https://github.com/SNDP-Design';
                githubLink.target = '_blank';
                githubLink.rel = 'noopener noreferrer';
                if (instaLink.hasAttribute('data-framer-name')) {
                    githubLink.setAttribute('data-framer-name', 'GitHub');
                }
                githubLink.innerHTML = instaLink.innerHTML;
                var svgContainer = githubLink.querySelector('.svgContainer') || githubLink.querySelector('svg')?.parentElement;
                if (svgContainer) {
                    svgContainer.innerHTML = '<svg style="width:100%;height:100%;" viewBox="0 0 20 20" fill="white"><g transform="translate(1, 1) scale(0.9)"><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 10 5.1c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0z"/></g></svg>';
                }
                var innerDiv = githubLink.querySelector('div[data-framer-name]');
                if (innerDiv) {
                    innerDiv.setAttribute('data-framer-name', 'GitHub');
                }
                instaLink.after(githubLink);
            }
        });
    }

    var CONTEXT_FOOTER_HTML = `
  <div class="context-footer-container">
    <!-- Top Row: Minimalist Brand & Single Clean Radar Badge -->
    <div class="context-footer-top">
      <div class="context-footer-brand">
        <a href="/" class="context-footer-logo" title="SNDP Design">
          <span class="context-footer-logo-text">sndp.</span>
        </a>
        <p class="context-footer-tagline">
          Building founders' vision, from idea to MVP.
        </p>
        <div class="context-footer-socials">
          <!-- Email with Copy Toast Trigger -->
          <a href="mailto:hello@sndpdesign.uno" onclick="window.copyPortfolioEmail && window.copyPortfolioEmail(); return false;" aria-label="Email Sandeep" class="context-footer-social-link" title="Copy Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"></path>
              <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/sndpdesign/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="context-footer-social-link" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <!-- X / Twitter -->
          <a href="https://x.com/sndpdesign" target="_blank" rel="noopener noreferrer" aria-label="X Profile" class="context-footer-social-link" title="X / Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <!-- GitHub -->
          <a href="https://github.com/SNDP-Design" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" class="context-footer-social-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="https://www.instagram.com/sndp.rathi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" class="context-footer-social-link" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right Column: Single Clean Interactive Radar Badge -->
      <div class="context-footer-right">
        <a href="https://calendly.com/sndp-design/30min" target="_blank" rel="noopener noreferrer" class="context-radar-badge-wrapper" title="Book a 30-min strategy call">
          <div class="context-radar-badge">
            <div class="context-radar-spinner"></div>
            <div class="context-radar-border"></div>
            <div class="context-radar-core">
              <div class="context-radar-glow-top"></div>
              <div class="context-radar-scanlines"></div>
              <div class="context-radar-glow-bottom"></div>
              <div class="context-radar-content">
                <span class="context-radar-label-top">Certified</span>
                <span class="context-radar-title">UX/UI</span>
                <div class="context-radar-sub">
                  <span class="context-radar-sub-line"></span>
                  <span class="context-radar-sub-text">8+ Yrs</span>
                  <span class="context-radar-sub-line reverse"></span>
                </div>
              </div>
            </div>
          </div>
          <p class="context-radar-status">
            <span class="context-ping-dot">
              <span class="context-ping-ring"></span>
              <span class="context-ping-core"></span>
            </span>
            Available for Projects
          </p>
        </a>
      </div>
    </div>

    <!-- Navigation Columns Grid: 3 Clean Spaced Columns -->
    <div class="context-footer-grid">
      <!-- Col 1: Selected Works -->
      <div class="context-footer-col">
        <p class="context-footer-col-title">Works</p>
        <ul class="context-footer-nav-list">
          <li><a href="/clix" class="context-footer-nav-link">CliX — Campaign Engine</a></li>
          <li><a href="/fatca-crs" class="context-footer-nav-link">FATCA-CRS Flow</a></li>
          <li><a href="/member-connect" class="context-footer-nav-link">Member Connect</a></li>
          <li><a href="/#b2b-saas" class="context-footer-nav-link">Design Systems</a></li>
        </ul>
      </div>

      <!-- Col 2: Navigation -->
      <div class="context-footer-col">
        <p class="context-footer-col-title">Explore</p>
        <ul class="context-footer-nav-list">
          <li><a href="/" class="context-footer-nav-link">Home</a></li>
          <li><a href="/about" class="context-footer-nav-link">About</a></li>
          <li><a href="/contact" class="context-footer-nav-link">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/18GOFmYdjRyapVHBDZVk2HLvi_w066nJ8/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="context-footer-nav-link">Resume ↗</a></li>
          <li><a href="https://calendly.com/sndp-design/30min" target="_blank" rel="noopener noreferrer" class="context-footer-nav-link">Book a Call ↗</a></li>
        </ul>
      </div>

      <!-- Col 3: Connect & Contact -->
      <div class="context-footer-col">
        <p class="context-footer-col-title">Connect</p>
        <ul class="context-footer-nav-list">
          <li><a href="https://www.linkedin.com/in/sndpdesign/" target="_blank" rel="noopener noreferrer" class="context-footer-nav-link">LinkedIn ↗</a></li>
          <li><a href="https://x.com/sndpdesign" target="_blank" rel="noopener noreferrer" class="context-footer-nav-link">X / Twitter ↗</a></li>
          <li><a href="https://github.com/SNDP-Design" target="_blank" rel="noopener noreferrer" class="context-footer-nav-link">GitHub ↗</a></li>
          <li><a href="mailto:hello@sndpdesign.uno" onclick="window.copyPortfolioEmail && window.copyPortfolioEmail(); return false;" class="context-footer-nav-link">hello@sndpdesign.uno</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Middle Bar with 4 Corner Anchor Dots & Dashed Border -->
  <div class="context-footer-middle">
    <div class="context-footer-middle-container">
      <!-- 4 Corner Anchors -->
      <div class="context-corner-dot tl"></div>
      <div class="context-corner-dot tr"></div>
      <div class="context-corner-dot bl"></div>
      <div class="context-corner-dot br"></div>

      <!-- Copyright -->
      <span class="context-footer-copyright">© 2026 SNDP Design</span>

      <!-- Built with Heart in India -->
      <span class="context-footer-builtwith">
        Crafted with
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#268BFF" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        in India
      </span>

      <!-- Middle Links -->
      <div class="context-footer-middle-links">
        <a href="/about" class="context-footer-middle-link">About</a>
        <a href="/contact" class="context-footer-middle-link">Contact</a>
        <a href="javascript:window.scrollTo({top:0,behavior:'smooth'})" class="context-footer-middle-link">Back to Top ↑</a>
      </div>
    </div>
  </div>

  <!-- Giant Responsive Watermark with Context.dev Outline Stroke + Solid Fill + Blue Pointer Cursor -->
  <div class="context-footer-watermark">
    <svg aria-hidden="true" viewBox="0 0 140 24" preserveAspectRatio="xMidYMid meet" class="context-footer-watermark-svg">
      <text x="70" y="22" text-anchor="middle" font-size="23" fill="white" style="font-family:'Plus Jakarta Sans', Inter, -apple-system, sans-serif;font-weight:800">
        <tspan fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.98)" stroke-width="0.9" stroke-dasharray="16 12" vector-effect="non-scaling-stroke">sndp.</tspan><tspan fill="#FFFFFF">design</tspan>
      </text>
      <!-- Signature Context.dev Electric Blue Vector Cursor Icon -->
      <svg width="8" height="8" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="109" y="6">
        <g filter="url(#footer-cursor-shadow)">
          <path d="M36.16 32.93C32.65 32.44 30.21 36.34 32.19 39.27L48.13 62.93C50.03 65.75 54.34 65.16 55.41 61.93L58.87 51.53L66.7 43.85C69.13 41.47 67.77 37.34 64.4 36.87L36.16 32.93Z" fill="#268BFF"></path>
          <path d="M31.36 39.83C28.901 36.18 31.93 31.33 36.29 31.939L64.54 35.88C68.73 36.47 70.42 41.6 67.4 44.57L59.75 52.07L56.36 62.25C55.02 66.26 49.66 66.99 47.3 63.49L31.36 39.83Z" stroke="#0D0D0F" stroke-width="2"></path>
        </g>
        <defs>
          <filter id="footer-cursor-shadow" x="25.4788" y="30.8857" width="48.4595" height="43.8496" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2082_117351"></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2082_117351" result="shape"></feBlend>
          </filter>
        </defs>
      </svg>
    </svg>
  </div>
    `;

    function injectContextFooter() {
        // Hide legacy Framer footer or legacy bottom elements
        var legacyFooters = document.querySelectorAll('footer.framer-49zou5, footer[data-framer-name="footer"]:not(.context-footer), .framer-110s66v, .framer-1l9zl6p, div[data-framer-name="Rights Reserved"]');
        legacyFooters.forEach(function(el) {
            el.style.setProperty('display', 'none', 'important');
            el.style.setProperty('visibility', 'hidden', 'important');
            el.style.setProperty('height', '0px', 'important');
            el.style.setProperty('opacity', '0', 'important');
            el.style.setProperty('overflow', 'hidden', 'important');
            el.style.setProperty('pointer-events', 'none', 'important');
        });

        var main = document.querySelector('main') || document.getElementById('main') || document.body;
        var existingContextFooter = document.querySelector('footer.context-footer');

        if (!existingContextFooter) {
            var footer = document.createElement('footer');
            footer.className = 'context-footer';
            footer.innerHTML = CONTEXT_FOOTER_HTML;
            if (main) {
                main.appendChild(footer);
            } else {
                document.body.appendChild(footer);
            }
        } else {
            existingContextFooter.innerHTML = CONTEXT_FOOTER_HTML;
            if (main && existingContextFooter.parentElement !== main) {
                main.appendChild(existingContextFooter);
            }
        }
    }

    var isUpdating = false;
    function safeRunAllEnhancements() {
        if (isUpdating) return;
        isUpdating = true;
        try {
            injectContextFooter();
            injectGithub();
            injectKPIBadges();
            injectTLDRBoxes();
            injectStickyBar();
        } catch (e) {}
        setTimeout(function() { isUpdating = false; }, 150);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', safeRunAllEnhancements);
    } else {
        safeRunAllEnhancements();
    }

    setTimeout(safeRunAllEnhancements, 200);
    setTimeout(safeRunAllEnhancements, 600);
    setTimeout(safeRunAllEnhancements, 1200);
    setTimeout(safeRunAllEnhancements, 2500);

    if (typeof MutationObserver !== 'undefined') {
        var observer = new MutationObserver(function(mutations) {
            if (isUpdating) return;
            var shouldRun = false;
            for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                if (m.addedNodes) {
                    for (var j = 0; j < m.addedNodes.length; j++) {
                        var node = m.addedNodes[j];
                        if (node.nodeType === 1) {
                            var isEnhancementNode = (node.classList && (node.classList.contains('kpi-badge-container') || node.classList.contains('executive-tldr-grid') || node.classList.contains('context-footer'))) || node.id === 'sticky-cta-bar' || node.id === 'sndp-toast';
                            if (!isEnhancementNode) {
                                shouldRun = true;
                                break;
                            }
                        }
                    }
                }
                if (shouldRun) break;
            }
            if (shouldRun) {
                safeRunAllEnhancements();
            }
        });
        observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    }
})();