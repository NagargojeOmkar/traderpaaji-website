(function() {
    document.getElementById('services-section').innerHTML = `
        <div class="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50" id="services" role="region" aria-label="Our Premium Trading Services">
            <div class="max-w-7xl mx-auto px-5">
                <!-- Section Header -->
                <div class="text-center mb-12 sm:mb-16">
                    <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full text-sm text-blue-700 font-medium mb-4">
                        <i class="fas fa-star text-sm" aria-hidden="true"></i> Premium Services
                    </div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 heading-font mb-4">Choose Your Trading Plan</h2>
                    <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Professional research services tailored to your trading style and goals</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- All-In-One Combo (Popular - Now First) -->
                    <div class="group bg-white rounded-2xl shadow-lg border-2 border-blue-500 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 relative" role="article" aria-label="All-In-One Combo Plan">
                        <div class="absolute top-4 right-4 bg-blue-700 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">Popular</div>
                        <div class="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 border-b border-blue-500">
                            <h3 class="text-xl font-bold text-white">All-In-One Combo</h3>
                            <p class="text-sm text-blue-50 mt-1">Complete package for all styles</p>
                        </div>
                        <div class="p-6 space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹5,999</span> <span class="text-gray-600 line-through">₹12,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">50% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹11,999</span> <span class="text-gray-600 line-through">₹36,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">67% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹19,999</span> <span class="text-gray-600 line-through">₹72,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">72% OFF</span></div>
                                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl"><div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-amber-700">₹34,999</span> <span class="text-gray-600 line-through">₹1,44,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">76% OFF</span></div><div class="text-sm font-semibold text-amber-700 mt-1">Yearly - Best Value</div></div>
                            </div>
                            <ul class="text-sm space-y-2 text-gray-600 py-2" aria-label="All-In-One Combo features">
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Index Option Intraday</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Stock Option Swing</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Equity Cash Swing</li>
                            </ul>
                            <button onclick="window.open('https://tinyurl.com/TraderPaaji-Combo','_blank')" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl transition-all font-semibold hover:shadow-lg hover:shadow-blue-700 active:scale-98 min-h-[44px]" aria-label="Select All-In-One Combo Plan">🎯 Select Plan</button>
                        </div>
                    </div>

                    <!-- Intraday Premium -->
                    <div class="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all hover:-translate-y-1" role="article" aria-label="Intraday Premium Plan">
                        <div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                            <h3 class="text-xl font-bold text-gray-900">Intraday Premium</h3>
                            <p class="text-sm text-gray-600 mt-1">Quality intraday calls with max 4 calls/day</p>
                        </div>
                        <div class="p-6 space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹3,999</span> <span class="text-gray-600 line-through">₹8,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">50% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹6,999</span> <span class="text-gray-600 line-through">₹24,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">71% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹9,999</span> <span class="text-gray-600 line-through">₹48,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">79% OFF</span></div>
                                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl"><div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-amber-700">₹14,999</span> <span class="text-gray-600 line-through">₹96,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">84% OFF</span></div><div class="text-sm font-semibold text-amber-700 mt-1">Yearly - Best Value</div></div>
                            </div>
                            <ul class="text-sm space-y-2 text-gray-600 py-2" aria-label="Intraday Premium features">
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Index Options Intraday</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> No Overtrading</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Telegram Updates</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Live Market Guidance</li>
                            </ul>
                            <button onclick="window.open('https://tinyurl.com/TraderPaaji-intraday','_blank')" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all font-semibold hover:shadow-lg hover:shadow-blue-700 active:scale-98 min-h-[44px]" aria-label="Select Intraday Premium Plan">🎯 Select Plan</button>
                        </div>
                    </div>

                    <!-- Options Swing -->
                    <div class="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all hover:-translate-y-1" role="article" aria-label="Options Swing Plan">
                        <div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                            <h3 class="text-xl font-bold text-gray-900">Options Swing</h3>
                            <p class="text-sm text-gray-600 mt-1">For job/business professionals</p>
                        </div>
                        <div class="p-6 space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹3,999</span> <span class="text-gray-600 line-through">₹8,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">50% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹6,999</span> <span class="text-gray-600 line-through">₹24,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">71% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹9,999</span> <span class="text-gray-600 line-through">₹48,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">79% OFF</span></div>
                                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl"><div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-amber-700">₹14,999</span> <span class="text-gray-600 line-through">₹96,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">84% OFF</span></div><div class="text-sm font-semibold text-amber-700 mt-1">Yearly - Best Value</div></div>
                            </div>
                            <ul class="text-sm space-y-2 text-gray-600 py-2" aria-label="Options Swing features">
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Stock & Index Options</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Trade Management</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Telegram Updates</li>
                            </ul>
                            <button onclick="window.open('https://tinyurl.com/TraderPaaji-Positional','_blank')" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all font-semibold hover:shadow-lg hover:shadow-blue-700 active:scale-98 min-h-[44px]" aria-label="Select Options Swing Plan">🎯 Select Plan</button>
                        </div>
                    </div>

                    <!-- Equity Premium (now without Popular badge) -->
                    <div class="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all hover:-translate-y-1" role="article" aria-label="Equity Premium Plan">
                        <div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                            <h3 class="text-xl font-bold text-gray-900">Equity Premium</h3>
                            <p class="text-sm text-gray-600 mt-1">Quality swing stocks with research</p>
                        </div>
                        <div class="p-6 space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹6,999</span> <span class="text-gray-600 line-through">₹24,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">71% OFF</span></div>
                                <div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-gray-900">₹9,999</span> <span class="text-gray-600 line-through">₹48,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">79% OFF</span></div>
                                <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl"><div class="flex items-baseline gap-2"><span class="text-2xl font-bold text-amber-700">₹15,999</span> <span class="text-gray-600 line-through">₹96,000</span> <span class="text-green-700 text-sm font-semibold bg-green-50 px-2 py-0.5 rounded-full">83% OFF</span></div><div class="text-sm font-semibold text-amber-700 mt-1">Yearly - Best Value</div></div>
                            </div>
                            <ul class="text-sm space-y-2 text-gray-600 py-2" aria-label="Equity Premium features">
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Equity Cash for Swing</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Well Researched</li>
                                <li class="flex items-center gap-2"><i class="fas fa-check text-green-700 text-sm w-4" aria-hidden="true"></i> Proper Entry & Exit</li>
                            </ul>
                            <button onclick="window.open('https://tinyurl.com/TraderPaaji-Cash','_blank')" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all font-semibold hover:shadow-lg hover:shadow-blue-700 active:scale-98 min-h-[44px]" aria-label="Select Equity Premium Plan">🎯 Select Plan</button>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-10">
                    <a href="#services-section" class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors" aria-label="View all trading services">
                        View All Services <i class="fas fa-arrow-right text-sm" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
})();
