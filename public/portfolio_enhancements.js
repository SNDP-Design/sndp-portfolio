(function() {
    'use strict';

    // 1. Toast Notification
    function showToast(msg) {
        var existing = document.getElementById('sndp-toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.id = 'sndp-toast';
        toast.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#18181b;border:1px solid rgba(174,250,29,0.6);color:#ffffff;padding:12px 24px;border-radius:30px;font-size:14px;font-weight:600;font-family:Inter,sans-serif;z-index:999999;box-shadow:0 10px 30px rgba(0,0,0,0.6),0 0 15px rgba(174,250,29,0.25);display:flex;align-items:center;gap:8px;animation:toastIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards;';
        toast.innerHTML = '<span style="color:#aefa1d;">✓</span> ' + msg;

        if (!document.getElementById('toast-style')) {
            var style = document.createElement('style');
            style.id = 'toast-style';
            style.textContent = '@keyframes toastIn { from { opacity:0; transform:translate(-50%, 20px); } to { opacity:1; transform:translate(-50%, 0); } }';
            document.head.appendChild(style);
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

    // 2. Inject Homepage KPI Badges
    function injectKPIBadges() {
        if (window.location.pathname !== '/' && window.location.pathname !== '') return;

        var clixHeaders = document.querySelectorAll('h3');
        clixHeaders.forEach(function(h3) {
            var text = h3.innerText.trim();
            var parent = h3.parentElement;
            if (!parent) return;

            if (text === 'CliX' && !parent.querySelector('.kpi-clix')) {
                var div = document.createElement('div');
                div.className = 'kpi-badge-container kpi-clix';
                div.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;margin-bottom:10px;';
                div.innerHTML = '<span style="background:rgba(174,250,29,0.15);border:1px solid rgba(174,250,29,0.4);color:#aefa1d;font-size:12px;font-weight:600;padding:4px 10px;border-radius:20px;letter-spacing:0.3px;">⚡ +45% Campaign Efficiency</span><span style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#e0e0e0;font-size:12px;font-weight:500;padding:4px 10px;border-radius:20px;">B2B SaaS Engine</span>';
                h3.after(div);
            } else if (text === 'FATCA-CRS' && !parent.querySelector('.kpi-fatca')) {
                var div = document.createElement('div');
                div.className = 'kpi-badge-container kpi-fatca';
                div.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;margin-bottom:10px;';
                div.innerHTML = '<span style="background:rgba(174,250,29,0.15);border:1px solid rgba(174,250,29,0.4);color:#aefa1d;font-size:12px;font-weight:600;padding:4px 10px;border-radius:20px;letter-spacing:0.3px;">⚡ -65% Drop-off Rate</span><span style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#e0e0e0;font-size:12px;font-weight:500;padding:4px 10px;border-radius:20px;">Fintech Compliance</span>';
                h3.after(div);
            } else if (text === 'Member Connect' && !parent.querySelector('.kpi-member')) {
                var div = document.createElement('div');
                div.className = 'kpi-badge-container kpi-member';
                div.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;margin-bottom:10px;';
                div.innerHTML = '<span style="background:rgba(174,250,29,0.15);border:1px solid rgba(174,250,29,0.4);color:#aefa1d;font-size:12px;font-weight:600;padding:4px 10px;border-radius:20px;letter-spacing:0.3px;">⚡ 50k+ Active SMEs</span><span style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#e0e0e0;font-size:12px;font-weight:500;padding:4px 10px;border-radius:20px;">Tide Platform</span>';
                h3.after(div);
            }
        });
    }

    // 3. Inject Executive TL;DR Summary Boxes
    function injectTLDRBoxes() {
        var path = window.location.pathname;
        var h1 = document.querySelector('h1');
        if (!h1 || !h1.parentElement) return;

        var container = h1.parentElement;
        if (container.querySelector('.executive-tldr-box')) return;

        var box = document.createElement('div');
        box.className = 'executive-tldr-box';
        box.style.cssText = 'background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:24px 28px;margin:32px auto 48px auto;max-width:900px;backdrop-filter:blur(12px);font-family:Inter,sans-serif;box-sizing:border-box;text-align:left;';

        if (path.includes('/clix')) {
            box.innerHTML = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:#aefa1d;box-shadow:0 0 10px #aefa1d;"></span><h4 style="color:#ffffff;font-size:15px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0;">Executive Summary & ROI</h4></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;"><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">My Role</div><div style="color:#ffffff;font-size:14px;font-weight:600;">Lead Product / UX Designer</div></div><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Scope & Platform</div><div style="color:#ffffff;font-size:14px;font-weight:600;">B2B Web App & Analytics</div></div><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Key Metric Impact</div><div style="color:#aefa1d;font-size:14px;font-weight:700;">+45% Setup Speed & Efficiency</div></div></div>';
            h1.after(box);
        } else if (path.includes('/fatca-crs')) {
            box.innerHTML = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:#aefa1d;box-shadow:0 0 10px #aefa1d;"></span><h4 style="color:#ffffff;font-size:15px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0;">Executive Summary & ROI</h4></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;"><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">My Role</div><div style="color:#ffffff;font-size:14px;font-weight:600;">Senior Product Designer (Tide)</div></div><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Scope & Platform</div><div style="color:#ffffff;font-size:14px;font-weight:600;">iOS / Android Mobile App</div></div><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Key Metric Impact</div><div style="color:#aefa1d;font-size:14px;font-weight:700;">-65% Onboarding Drop-off</div></div></div>';
            h1.after(box);
        } else if (path.includes('/member-connect')) {
            box.innerHTML = '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:#aefa1d;box-shadow:0 0 10px #aefa1d;"></span><h4 style="color:#ffffff;font-size:15px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0;">Executive Summary & ROI</h4></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;"><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">My Role</div><div style="color:#ffffff;font-size:14px;font-weight:600;">Senior Product Designer (Tide)</div></div><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Scope & Platform</div><div style="color:#ffffff;font-size:14px;font-weight:600;">Mobile & Web Community</div></div><div style="background:rgba(0,0,0,0.3);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);"><div style="color:#808080;font-size:12px;text-transform:uppercase;font-weight:600;margin-bottom:4px;">Key Metric Impact</div><div style="color:#aefa1d;font-size:14px;font-weight:700;">50k+ SME Network Onboarded</div></div></div>';
            h1.after(box);
        }
    }

    // 4. Inject Floating Sticky CTA Bar on Case Studies
    function injectStickyBar() {
        var path = window.location.pathname;
        if (!path.includes('/clix') && !path.includes('/fatca-crs') && !path.includes('/member-connect')) return;
        if (document.getElementById('sticky-cta-bar')) return;

        var bar = document.createElement('div');
        bar.id = 'sticky-cta-bar';
        bar.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(18,18,20,0.88);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.15);padding:10px 20px;border-radius:40px;z-index:99990;display:flex;align-items:center;gap:16px;box-shadow:0 20px 40px rgba(0,0,0,0.6);max-width:90vw;font-family:Inter,sans-serif;';
        bar.innerHTML = '<span style="color:#e0e0e0;font-size:13px;font-weight:500;white-space:nowrap;" class="hide-mobile">Like this case study? Let&apos;s build your next product.</span><div style="display:flex;align-items:center;gap:8px;"><a href="https://www.sndpdesign.uno/contact" style="background:#aefa1d;color:#000000;padding:8px 16px;border-radius:20px;font-size:13px;font-weight:700;text-decoration:none;">Book a Call ↗</a><button onclick="window.copyPortfolioEmail()" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:#ffffff;padding:8px 14px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;">Copy Email ✉</button></div>';

        document.body.appendChild(bar);
    }

    function runAllEnhancements() {
        injectKPIBadges();
        injectTLDRBoxes();
        injectStickyBar();
    }

    // Run on load and observe DOM changes
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runAllEnhancements);
    } else {
        runAllEnhancements();
    }

    setTimeout(runAllEnhancements, 500);
    setTimeout(runAllEnhancements, 1500);
    setTimeout(runAllEnhancements, 3000);

    if (typeof MutationObserver !== 'undefined') {
        var observer = new MutationObserver(function() {
            runAllEnhancements();
        });
        observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    }
})();