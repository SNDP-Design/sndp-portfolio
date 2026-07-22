(function() {
    function createCmdKModal() {
        if (document.getElementById('cmdk-modal')) return;

        var modal = document.createElement('div');
        modal.id = 'cmdk-modal';
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.75);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:999999;display:none;align-items:center;justify-content:center;padding:16px;font-family:Inter,sans-serif;';
        
        var html = '<div style="background:#121214;border:1px solid rgba(255,255,255,0.15);width:100%;max-width:580px;border-radius:20px;box-shadow:0 25px 50px rgba(0,0,0,0.7);overflow:hidden;">' +
            '<div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px;">' +
                '<span style="color:#808080;font-size:18px;">🔍</span>' +
                '<input id="cmdk-input" type="text" placeholder="Search case studies, experience, or actions... (Esc to close)" style="width:100%;background:transparent;border:none;outline:none;color:#ffffff;font-size:15px;font-family:Inter,sans-serif;">' +
                '<span style="background:rgba(255,255,255,0.1);color:#808080;font-size:11px;padding:3px 8px;border-radius:6px;font-weight:600;">ESC</span>' +
            '</div>' +
            '<div id="cmdk-results" style="max-height:360px;overflow-y:auto;padding:12px 16px;">' +
                '<div style="color:#808080;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:8px 8px 12px 8px;">Quick Navigation</div>' +
                '<a href="/clix" class="cmdk-item" style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;text-decoration:none;color:#ffffff;transition:background 0.2s;margin-bottom:4px;">' +
                    '<div><div style="font-weight:600;font-size:14px;">CliX — B2B Campaign Engine Case Study</div><div style="color:#808080;font-size:12px;margin-top:2px;">+45% Campaign setup efficiency & UX ROI</div></div>' +
                    '<span style="color:#ffffff;font-weight:600;font-size:13px;">Jump ↗</span>' +
                '</a>' +
                '<a href="/fatca-crs" class="cmdk-item" style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;text-decoration:none;color:#ffffff;transition:background 0.2s;margin-bottom:4px;">' +
                    '<div><div style="font-weight:600;font-size:14px;">FATCA-CRS — Tide Compliance Flow</div><div style="color:#808080;font-size:12px;margin-top:2px;">-65% Onboarding drop-off rate</div></div>' +
                    '<span style="color:#ffffff;font-weight:600;font-size:13px;">Jump ↗</span>' +
                '</a>' +
                '<a href="/member-connect" class="cmdk-item" style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;text-decoration:none;color:#ffffff;transition:background 0.2s;margin-bottom:4px;">' +
                    '<div><div style="font-weight:600;font-size:14px;">Member Connect — Tide SME Platform</div><div style="color:#808080;font-size:12px;margin-top:2px;">50k+ Active business network</div></div>' +
                    '<span style="color:#ffffff;font-weight:600;font-size:13px;">Jump ↗</span>' +
                '</a>' +
                '<a href="/about" class="cmdk-item" style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;text-decoration:none;color:#ffffff;transition:background 0.2s;margin-bottom:4px;">' +
                    '<div><div style="font-weight:600;font-size:14px;">About Sandeep Rathi</div><div style="color:#808080;font-size:12px;margin-top:2px;">7+ Years of B2B SaaS & Fintech UX Leadership</div></div>' +
                    '<span style="color:#ffffff;font-weight:600;font-size:13px;">Jump ↗</span>' +
                '</a>' +
                '<div style="color:#808080;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:16px 8px 12px 8px;">Actions</div>' +
                '<div id="cmdk-copy-btn" class="cmdk-item" style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;cursor:pointer;color:#ffffff;transition:background 0.2s;">' +
                    '<div><div style="font-weight:600;font-size:14px;">Copy Official Email (hello@sndpdesign.uno)</div><div style="color:#808080;font-size:12px;margin-top:2px;">Instant 1-click clipboard copy</div></div>' +
                    '<span style="color:#ffffff;font-weight:600;font-size:13px;">Copy ✉</span>' +
                '</div>' +
            '</div>' +
        '</div>';

        modal.innerHTML = html;
        document.body.appendChild(modal);

        var style = document.createElement('style');
        style.textContent = '.cmdk-item:hover { background: rgba(255,255,255,0.08) !important; }';
        document.head.appendChild(style);

        document.getElementById('cmdk-copy-btn').addEventListener('click', function() {
            if (window.copyPortfolioEmail) window.copyPortfolioEmail();
            modal.style.display = 'none';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.style.display = 'none';
        });

        var input = document.getElementById('cmdk-input');
        input.addEventListener('input', function() {
            var q = input.value.toLowerCase().trim();
            var items = modal.querySelectorAll('.cmdk-item');
            items.forEach(function(item) {
                if (item.innerText.toLowerCase().includes(q)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            createCmdKModal();
            var modal = document.getElementById('cmdk-modal');
            modal.style.display = 'flex';
            document.getElementById('cmdk-input').focus();
        } else if (e.key === 'Escape') {
            var modal = document.getElementById('cmdk-modal');
            if (modal) modal.style.display = 'none';
        }
    });

    window.openCmdKSearch = function() {
        createCmdKModal();
        var modal = document.getElementById('cmdk-modal');
        modal.style.display = 'flex';
        document.getElementById('cmdk-input').focus();
    };
})();