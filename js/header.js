(function() {
    document.getElementById('main-header').innerHTML = `
        <div class="sticky top-0 z-30 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">
                    <!-- Logo + Brand -->
                    <div class="flex items-center gap-3 sm:gap-4">
                        <div class="relative flex-shrink-0">
                            <img src="https://res.cloudinary.com/dkv9ghftb/image/upload/v1777579236/logo-B5RMp3Hm_zzg5te.png"
                                 alt="TraderPaaji Logo"
                                 class="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain transition-transform hover:scale-105"
                                 loading="lazy">
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 flex-wrap">
                                <div class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 heading-font truncate">TraderPaaji</div>
                                <span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-sm font-semibold px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                                    <i class="fas fa-shield-check text-sm" aria-hidden="true"></i>
                                    <span>SEBI</span> INH000014845
                                </span>
                            </div>
                            <p class="text-sm text-gray-700 mt-0.5 truncate hidden sm:block">Kulneet Singh Bindra | BSE 6015</p>
                        </div>
                    </div>

                    <!-- Desktop Nav -->
                    <div class="hidden md:flex items-center gap-1 lg:gap-2">
                        <a href="/disclosure" class="text-sm font-medium text-gray-600 hover:text-blue-700 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50 transition-all" aria-label="View disclosure">Disclosure</a>
                        <a href="/complaint-board" class="text-sm font-medium text-gray-600 hover:text-blue-700 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50 transition-all" aria-label="View complaint board">Complaint Board</a>
                        <a href="/investor-charter" class="text-sm font-medium text-gray-600 hover:text-blue-700 px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-50 transition-all" aria-label="View investor charter and grievance redressal">Investor Charter</a>
                        <div class="w-px h-6 bg-gray-200 mx-2"></div>
                        <a href="https://wa.me/918591689535" target="_blank" rel="noopener noreferrer" class="bg-green-700 hover:bg-green-800 text-white px-4 lg:px-5 py-2 rounded-full text-sm flex items-center gap-1.5 font-medium transition-all hover:shadow-lg active:scale-95 min-h-[44px]" aria-label="Chat on WhatsApp: +91 85916 89535">
                            <i class="fab fa-whatsapp text-base" aria-hidden="true"></i>
                            <span class="hidden lg:inline">WhatsApp</span>
                        </a>
                    </div>

                    <!-- Mobile Hamburger -->
                    <button id="mobileMenuBtn" class="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileMenu">
                        <i class="fas fa-bars text-lg" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobileMenu" class="md:hidden hidden bg-white backdrop-blur-md border-t border-gray-100 overflow-hidden" aria-hidden="true">
                <div class="px-4 py-3 space-y-1">
                    <a href="/disclosure" class="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 px-4 py-3 rounded-xl transition-all min-h-[44px]" aria-label="View disclosure">
                        <i class="fas fa-file-contract text-blue-600 w-5 text-center" aria-hidden="true"></i>
                        Disclosure
                    </a>
                    <a href="/complaint-board" class="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 px-4 py-3 rounded-xl transition-all min-h-[44px]" aria-label="View complaint board">
                        <i class="fas fa-clipboard-list text-blue-600 w-5 text-center" aria-hidden="true"></i>
                        Complaint Board
                    </a>
                    <a href="/investor-charter" class="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 px-4 py-3 rounded-xl transition-all min-h-[44px]" aria-label="View investor charter and grievance redressal">
                        <i class="fas fa-file-alt text-blue-600 w-5 text-center" aria-hidden="true"></i>
                        Investor Charter
                    </a>
                    <div class="pt-2 pb-1">
                        <a href="https://wa.me/918591689535" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl text-sm font-semibold transition-all active:scale-98 min-h-[44px] shadow-lg" aria-label="Chat on WhatsApp: +91 85916 89535">
                            <i class="fab fa-whatsapp text-lg" aria-hidden="true"></i>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Mobile menu toggle
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', function() {
            const isOpen = !menu.classList.contains('hidden');
            if (isOpen) {
                menu.classList.add('hidden');
                btn.setAttribute('aria-expanded', 'false');
                menu.setAttribute('aria-hidden', 'true');
                btn.innerHTML = '<i class="fas fa-bars text-lg" aria-hidden="true"></i>';
            } else {
                menu.classList.remove('hidden');
                btn.setAttribute('aria-expanded', 'true');
                menu.setAttribute('aria-hidden', 'false');
                btn.innerHTML = '<i class="fas fa-times text-lg" aria-hidden="true"></i>';
            }
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                btn.setAttribute('aria-expanded', 'false');
                menu.setAttribute('aria-hidden', 'true');
                btn.innerHTML = '<i class="fas fa-bars text-lg" aria-hidden="true"></i>';
            }
        });
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    menu.classList.add('hidden');
                    btn.setAttribute('aria-expanded', 'false');
                    menu.setAttribute('aria-hidden', 'true');
                    btn.innerHTML = '<i class="fas fa-bars text-lg" aria-hidden="true"></i>';
                }
            });
        });
    }
})();
