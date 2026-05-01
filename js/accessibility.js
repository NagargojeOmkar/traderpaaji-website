(function() {
    const widgetBtn = document.getElementById('accessibilityWidgetBtn');
    const panel = document.getElementById('accessPanel');
    const resetBtn = document.getElementById('resetAccessibility');

    const cycles = {
        'contrast': { values: ['normal', 'high', 'inverted'], labels: ['Normal', 'High Contrast', 'Inverted'], classMap: { 'normal': '', 'high': 'contrast-high', 'inverted': 'contrast-inverted' } },
        'grayscale': { values: ['off', 'on'], labels: ['Off', 'On'], classMap: { 'off': '', 'on': 'grayscale-on' } },
        'text-size': { values: ['normal', 'bigger', 'largest'], labels: ['Normal', 'Bigger (120%)', 'Largest (150%)'], classMap: { 'normal': '', 'bigger': 'text-size-bigger', 'largest': 'text-size-largest' } },
        'line-height': { values: ['normal', 'increased', 'extra'], labels: ['Normal', 'Increased (1.6)', 'Extra (2.0)'], classMap: { 'normal': '', 'increased': 'line-height-increased', 'extra': 'line-height-extra' } },
        'text-align': { values: ['left', 'center', 'justify'], labels: ['Left', 'Center', 'Justify'], classMap: { 'left': '', 'center': 'text-align-center', 'justify': 'text-align-justify' } },
        'font-family': { values: ['default', 'sans', 'serif'], labels: ['Default', 'Open Sans', 'Georgia Serif'], classMap: { 'default': '', 'sans': 'font-sans-readable', 'serif': 'font-serif-readable' } },
        'underline-links': { values: ['none', 'underline', 'dotted'], labels: ['None', 'Underline', 'Dotted'], classMap: { 'none': 'underline-links-none', 'underline': 'underline-links-underline', 'dotted': 'underline-links-dotted' } },
        'reduce-motion': { values: ['off', 'on'], labels: ['Animate', 'Reduce Motion'], classMap: { 'off': '', 'on': 'reduce-motion-on' } }
    };

    function applySetting(category, value) {
        const body = document.body;
        const cycle = cycles[category];
        if (!cycle) return;
        Object.values(cycle.classMap).forEach(cls => { if (cls) body.classList.remove(cls); });
        const newClass = cycle.classMap[value];
        if (newClass) body.classList.add(newClass);
        const btn = document.querySelector(`.cycle-btn[data-category="${category}"]`);
        if (btn) {
            const idx = cycle.values.indexOf(value);
            btn.textContent = cycle.labels[idx];
            btn.setAttribute('data-value', value);
            btn.setAttribute('aria-label', `${category} mode, current: ${cycle.labels[idx]}`);
        }
        localStorage.setItem(`access_${category}`, value);
    }

    function cycleCategory(category) {
        const cycle = cycles[category];
        if (!cycle) return;
        let current = localStorage.getItem(`access_${category}`) || cycle.values[0];
        let nextIndex = (cycle.values.indexOf(current) + 1) % cycle.values.length;
        applySetting(category, cycle.values[nextIndex]);
    }

    function loadSettings() {
        Object.keys(cycles).forEach(category => {
            const saved = localStorage.getItem(`access_${category}`);
            const cycle = cycles[category];
            if (saved && cycle.values.includes(saved)) applySetting(category, saved);
            else applySetting(category, cycle.values[0]);
        });
    }

    function bindEvents() {
        document.querySelectorAll('.cycle-btn').forEach(btn => {
            const category = btn.getAttribute('data-category');
            btn.addEventListener('click', (e) => { e.stopPropagation(); cycleCategory(category); });
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cycleCategory(category); }
            });
        });
    }

    function resetAll() {
        Object.keys(cycles).forEach(category => applySetting(category, cycles[category].values[0]));
        panel.focus();
    }

    // Panel open/close with focus management
    if (widgetBtn) {
        widgetBtn.addEventListener('click', () => {
            const isOpen = panel.classList.toggle('open');
            panel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            widgetBtn.setAttribute('aria-label', isOpen ? 'Close accessibility options' : 'Open accessibility options');
            widgetBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (isOpen) {
                // Focus first interactive element in panel
                const firstBtn = panel.querySelector('.cycle-btn, .reset-btn');
                if (firstBtn) firstBtn.focus();
            } else {
                // Return focus to widget button
                widgetBtn.focus();
            }
        });
        widgetBtn.setAttribute('aria-expanded', 'false');
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetAll);
        resetBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); resetAll(); }
        });
    }

    // Close panel on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panel.classList.contains('open')) {
            panel.classList.remove('open');
            panel.setAttribute('aria-hidden', 'true');
            widgetBtn.setAttribute('aria-expanded', 'false');
            widgetBtn.setAttribute('aria-label', 'Open accessibility options');
            widgetBtn.focus();
        }
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (panel && !panel.contains(e.target) && widgetBtn && !widgetBtn.contains(e.target) && panel.classList.contains('open')) {
            panel.classList.remove('open');
            panel.setAttribute('aria-hidden', 'true');
            widgetBtn.setAttribute('aria-expanded', 'false');
            widgetBtn.setAttribute('aria-label', 'Open accessibility options');
        }
    });

    loadSettings();
    bindEvents();
})();
