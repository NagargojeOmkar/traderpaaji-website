(function() {
    const navLinks = document.querySelectorAll('.compliance-nav-link');
    const allDetails = document.querySelectorAll('details');
    function openSectionById(id) {
        const target = document.querySelector(id);
        if (!target || target.tagName !== 'DETAILS') return;
        allDetails.forEach(d => { if (d !== target) d.open = false; });
        target.open = true;
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            if (hash && hash.startsWith('#')) { openSectionById(hash); history.pushState(null, '', hash); }
        });
    });
    if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target && target.tagName === 'DETAILS') { allDetails.forEach(d => d.open = false); target.open = true; setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 200); }
    }
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash;
        if (newHash) { const elem = document.querySelector(newHash); if (elem && elem.tagName === 'DETAILS') { document.querySelectorAll('details').forEach(d => { if (d !== elem) d.open = false; }); elem.open = true; elem.scrollIntoView({ behavior: 'smooth' }); } }
    });
})();