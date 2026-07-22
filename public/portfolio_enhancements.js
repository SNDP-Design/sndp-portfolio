(function() {
    'use strict';

    if (!document.getElementById('portfolio-monochrome-style')) {
        var style = document.createElement('style');
        style.id = 'portfolio-monochrome-style';
        style.textContent = '.tldr-grid { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 16px !important; } @media (max-width: 768px) { .tldr-grid { grid-template-columns: 1fr !important; } } .hide-mobile { display: inline-block; } @media (max-width: 640px) { .hide-mobile { display: none !important; } } .sticky-call-btn { transition: transform 0.2s ease; } .sticky-call-btn:hover { transform: scale(1.05); } .sticky-copy-btn:hover { background: rgba(255,255,255,0.2) !important; } .btn-404-purple { transition: all 0.2s ease; } .btn-404-purple:hover { transform: scale(1.05) !important; background: #9639FF !important; box-shadow: 0 10px 30px rgba(134,41,255,0.6) !important; }';
        document.head.appendChild(style);
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

    function handle404Page() {
        var is404 = window.location.pathname.includes('/404') || document.title.includes('404');
        if (!is404) return;

        if (document.getElementById('monzaa-404-hero')) {
            var ex = document.getElementById('monzaa-404-hero');
            ex.style.opacity = '1';
            ex.style.display = 'flex';
            return;
        }

        var richTextContainers = document.querySelectorAll('.framer-16f7bbp, .framer-17a8gyu');
        richTextContainers.forEach(function(el) { el.style.display = 'none'; });

        var container = document.createElement('div');
        container.id = 'monzaa-404-hero';
        container.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px 24px;width:100%;max-width:700px;margin:0 auto;z-index:999;position:relative;font-family:Inter,sans-serif;box-sizing:border-box;opacity:1 !important;visibility:visible !important;';

        container.innerHTML = '<div style="background:rgba(134,41,255,0.25);border:1px solid rgba(134,41,255,0.4);color:#ffffff;font-size:13px;font-weight:600;padding:5px 16px;border-radius:20px;display:inline-flex;align-items:center;gap:8px;margin-bottom:20px;"><span style="width:7px;height:7px;border-radius:50%;background:#ffffff;box-shadow:0 0 8px rgba(255,255,255,0.9);"></span> Error</div><h1 style="font-size:120px;font-weight:800;letter-spacing:-4px;line-height:1;margin:0 0 12px 0;color:#8629FF;text-shadow:0 10px 30px rgba(134,41,255,0.3);">404</h1><h2 style="font-size:32px;font-weight:700;color:#ffffff;margin:0 0 16px 0;">Sorry! Page not found</h2><p style="color:#b0a0c8;font-size:16px;line-height:1.6;max-width:540px;margin:0 0 32px 0;">It looks like the page you&apos;re looking for doesn&apos;t exist or might have been moved. Don&apos;t worry, let&apos;s get you back on track!</p><a href="/" class="btn-404-purple" style="background:#8629FF;color:#ffffff;padding:14px 32px;border-radius:12px;font-size:15px;font-weight:600;text-decoration:none;box-shadow:0 8px 25px rgba(134,41,255,0.5);display:inline-block;">Back to Home</a>';

        var header = document.querySelector('header') || document.querySelector('#header');
        if (header && header.nextElementSibling) {
            header.after(container);
        } else {
            (document.querySelector('#main') || document.body).appendChild(container);
        }
    }

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
        if (!path.includes('/clix') && !path.includes('/fatca-crs') && !path.includes('/member-connect')) return;
        if (document.getElementById('sticky-cta-bar')) return;

        var bar = document.createElement('div');
        bar.id = 'sticky-cta-bar';
        bar.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(18,18,20,0.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.18);padding:10px 20px;border-radius:40px;z-index:99990;display:flex;align-items:center;gap:16px;box-shadow:0 20px 40px rgba(0,0,0,0.7);max-width:90vw;font-family:Inter,sans-serif;';
        bar.innerHTML = '<span style="color:#e0e0e0;font-size:13px;font-weight:500;white-space:nowrap;" class="hide-mobile">Like this case study? Let&apos;s build your next product.</span><div style="display:flex;align-items:center;gap:8px;"><a href="https://calendly.com/sndp-design/30min" target="_blank" rel="noopener noreferrer" class="sticky-call-btn" style="background:#ffffff;color:#000000;padding:8px 16px;border-radius:20px;font-size:13px;font-weight:700;text-decoration:none;">Book a Call ↗</a><button onclick="window.copyPortfolioEmail()" class="sticky-copy-btn" style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);color:#ffffff;padding:8px 14px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;">Copy Email ✉</button></div>';

        document.body.appendChild(bar);
    }

    function runAllEnhancements() {
        handle404Page();
        injectKPIBadges();
        injectTLDRBoxes();
        injectStickyBar();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runAllEnhancements);
    } else {
        runAllEnhancements();
    }

    setTimeout(runAllEnhancements, 400);
    setTimeout(runAllEnhancements, 1200);

    if (typeof MutationObserver !== 'undefined') {
        var observer = new MutationObserver(function() {
            runAllEnhancements();
        });
        observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    }
})();