(function() {
    const complianceHtml = `
        <div class="bg-slate-50 py-16 px-5" id="compliance-wrapper" role="region" aria-label="Legal and Compliance Information">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 heading-font mb-8">Legal & Compliance</h2>
                <div class="flex flex-wrap justify-center gap-2 mb-12 compliance-nav" role="navigation" aria-label="Compliance section navigation">
                    <a href="#disclosure-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View disclosure information">Disclosure</a>
                    <a href="#complaint-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View complaint data">Complaint Data</a>
                    <a href="#charter-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View investor charter">Investor Charter</a>
                    <a href="#grievance-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View grievance redressal process">Grievance Redressal</a>
                    <a href="#terms-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View terms and conditions">Terms & Conditions</a>
                    <a href="#refund-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View refund policy">Refund Policy</a>
                    <a href="#privacy-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View privacy policy">Privacy Policy</a>
                    <a href="#dodont-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View investor do's and don'ts">Do's & Don'ts</a>
                    <a href="#contact-sec" class="bg-blue-800 text-white px-4 py-2.5 rounded-full text-sm hover:bg-blue-600 compliance-nav-link min-h-[44px] inline-flex items-center" aria-label="View contact information">Contact Us</a>
                </div>
                <div class="space-y-5">
                    <!-- DISCLOSURE -->
                    <details id="disclosure-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-file-alt" aria-hidden="true"></i> Disclosure – SEBI RA INH000014845
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md border-t space-y-4 text-sm overflow-x-auto">
                            <p class="text-center mb-4">
                                <img src="https://res.cloudinary.com/dkv9ghftb/image/upload/v1777579236/logo-B5RMp3Hm_zzg5te.png" alt="TraderPaaji Logo" class="mx-auto h-20 object-contain" loading="lazy">
                            </p>
                            <p class="text-center text-gray-600 text-sm mb-4">As per SEBI (Research Analysts) Regulations, 2014</p>

                            <h3 class="font-bold text-base">Regulatory Disclosures</h3>
                            <h4 class="font-semibold text-sm mt-3">About Myself</h4>
                            <p>I am Kulneet Singh Gurmeet Singh Bindra, a SEBI Registered research analyst (Registration no - INH000014845) and BSE Enlistment number 6015.</p>
                            <p><strong>Qualifications:</strong> Master of Commerce; Investment Advisor Level 1 NISM Certified; NCFM Technical Analysis Certification.</p>
                            <p><strong>Professional Experience:</strong></p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Served as Mentor and Taught Stock Market Trading Strategies, Option Trading for more than 3 years</li>
                                <li>More than 8 years ++ experience of Options Trading, Intraday Trading and Swing Trading</li>
                                <li>Event Management: 10 Years Experience</li>
                                <li>D2C SALES: 10 Years Experience</li>
                            </ul>

                            <h4 class="font-semibold text-sm mt-3">About My Business Activity</h4>
                            <p>SEBI Registered Research Analyst since Jan 2024, providing research recommendation in Equity (Short Term as well as Long Term), Intraday Index Options, Stock Options Swing, Commodity Intraday.</p>

                            <h4 class="font-semibold text-sm mt-3">Disciplinary History</h4>
                            <p>There is no disciplinary history in my name, and there are no pending orders or outstanding litigations.</p>

                            <h3 class="font-bold text-base mt-4">Terms And Conditions For Research Report</h3>
                            <h4 class="font-semibold text-sm mt-3">Details of associates:</h4>
                            <p>I do not have any employees</p>

                            <h4 class="font-semibold text-sm mt-3">Disclosure with regard to ownership and material conflicts of interest:</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>The Research Analyst or his relatives or associates do not have financial interest in the subject Company</li>
                                <li>The Research Analyst or his relatives or associates do not have actual/beneficial ownership of one per cent or more securities of the subject Company, at the end of the month immediately preceding the date of publication of the research report</li>
                                <li>The Research Analyst or his relatives or associates do not have any other material conflict of interest at the time of publication of the research report</li>
                            </ul>

                            <h4 class="font-semibold text-sm mt-3">Disclosure with regard to receipt of Compensation:</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>The Research Analyst or his associates have not received compensation from the subject Company in the past twelve months</li>
                                <li>The Research Analyst or his associates have not managed or co-managed public offering of securities for the subject Company in the past twelve months</li>
                                <li>The Research Analyst or his associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject Company in the past twelve months</li>
                                <li>The Research Analyst or his associates have not received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company in the past twelve months</li>
                                <li>The Research Analyst or his associates have not received any compensation or other benefits from the subject Company or third party in connection with the research report</li>
                            </ul>

                            <h4 class="font-semibold text-sm mt-3">Disclosure with regard to receipt of Compensation (For the purpose of Public appearance):</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Whether it or its associates have received any compensation from the subject company in the past twelve months - <strong>No</strong></li>
                                <li>Whether the subject company is or was a client during twelve months preceding the date of distribution of the research report and the types of services provided - <strong>No</strong></li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">General Disclosure</h3>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>The Research Analyst has not served as an officer, director or employee of the subject Company</li>
                                <li>The Research Analyst has not been engaged in market making activity for the subject Company</li>
                            </ul>

                            <h4 class="font-semibold text-sm mt-3">Disclosure Regarding Use of Artificial Intelligence (AI) Tools in Research Services:</h4>
                            <p>In compliance with Regulation 19(vii) and Regulation 24(7) of the SEBI (Research Analyst) Regulations, we hereby declare that no Artificial Intelligence (AI) tools are currently used in the preparation, generation, or distribution of our research services. All research outputs and recommendations are derived through human analysis and traditional research methodologies. Should there be any change in this status, appropriate disclosure will be made in accordance with applicable regulatory requirements.</p>

                            <h3 class="font-bold text-base mt-4">Definitions of Terms Used</h3>
                            <p><strong>Buy:</strong> Buy means that the stock recommended to be bought either at Market or at price or within price band mentioned in the recommendation. Stock to be bought at Market or Current Market price (CMP) must be bought immediately or near the closing time of market at closing price. Stock with limit price order or where buying price or price band is mentioned, such stock can be bought at the price or within the price band mentioned.</p>
                            <p><strong>Sell / Target:</strong> Sell or target price is the price at which stock must be sold. For Stocks which have reached to their target price or trading above target price must be sold upon reaching the target price or price band mentioned.</p>
                            <p><strong>Hold:</strong> Hold means that a stock may be held and no exit is required. Hold recommendation is given if stock has not achieved its mentioned target or hit the mentioned stop loss price. Hold recommendation can also be given in case if research analyst is of opinion that even after reaching the target price, the stock may go beyond target price due to change in circumstances.</p>
                            <p><strong>Stop loss price:</strong> Stop loss is a price at which the stock must be exited or sold due to adverse situation or market move contrary to recommendation. When the stop loss price is reached, stock can be exited immediately or near the close of trading session at price which is near the closing price. Second scenario is mentioned given the fact that some times the stop loss price is reached due to intra day volatility of market but it recovers towards the end of session showing the strength of stock & in such case stock can be held. This mechanism helps the Investor from a wrong exit/ pre mature exit from stock. It must be noted, however, that if the stock is trading below/at stop loss near the closing trading time, then it must be exited.</p>

                            <h3 class="font-bold text-base mt-4">Additional Disclosures</h3>
                            <p><strong>Brand Name/ Trade Name:</strong> TraderPaaji</p>
                            <p><strong>Complete address with telephone nos:</strong> C2, 2-3, New Avadhut Society, Near Seventh Day School, Sec - 7, Sanpada, MUMBAI, MAHARASHTRA, 400705</p>
                            <p><strong>Membership no. of SEBI recognized supervisory body:</strong> Not applicable</p>
                            <p><strong>Name of the Grievance Officer, telephone number and email address:</strong> Kulneet Singh Bindra, 8591689535, traderpaajicompliance@gmail.com</p>

                            <h3 class="font-bold text-base mt-4">Warnings and Disclaimers</h3>
                            <p class="font-bold text-amber-700">Warning:</p>
                            <p>"Investments in securities market are subject to market risks. Read all the related documents carefully before investing."</p>
                            <p class="font-bold text-amber-700 mt-3">Disclaimer:</p>
                            <p>"Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors."</p>
                            <p class="mt-3"><strong>RISK ASSOCIATED IN OPEN POSITIONS:</strong> Our recommendations may be open, we may not provide any stop-loss or target price in securities recommendations. This will cause a huge loss on your portfolio in adverse market conditions or company events.</p>
                            <p><strong>LOSS POSSIBILITY:</strong> Market risks may result in partial or permanent loss of investments under certain market conditions.</p>
                            <p><strong>ILLUSTRATIVE PURPOSES:</strong> The securities mentioned are for illustration only and are not recommendations.</p>
                            <p><strong>PAST PERFORMANCE:</strong> Past performance is not indicative of future results.</p>
                            <p><strong>EDUCATIONAL PURPOSES:</strong> Information provided on social media platforms is for educational purposes and should not be considered investment advice. Investors are advised to consult their investment advisor before making any decisions.</p>
                            <p><strong>NO WARRANTIES:</strong> The Research Analyst makes no warranties, expressed or implied, regarding the accuracy, likely results, or reliability of the materials on its website or linked sites. This includes disclaimers related to merchantability, fitness for a particular purpose, and non-infringement of intellectual property or other violations of rights. Please be aware that investment decisions should be made with due diligence, considering your risk tolerance and consulting with a qualified financial advisor. The provided information is for informational and educational purposes only.</p>
                            <p><strong>EXERCISE CAUTION:</strong> We provide research analysis and specific securities recommendations but do not offer portfolio management services, personal account handling, profit sharing, or risk-profiling-based investment advisory services.</p>
                            <p class="mt-3">Report any unethical practices to our support/compliance team or SEBI.</p>
                            <p>Report any unethical practices to our compliance team: traderpaajicompliance@gmail.com</p>
                            <p><strong>SEBI Toll-Free Number:</strong> 1800 22 7575 or 1800 266 7575</p>

                            <h3 class="font-bold text-base mt-4">Important Notice</h3>
                            <p>If you are dissatisfied with our services, kindly raise your initial complaint to traderpaajicompliance@gmail.com or contact: +91 85916 89535 or visit our social media or website for more details.</p>
                            <p><strong>Trade Name or Website:</strong> traderpaaji@gmail.com</p>
                            <p>If the issue remains unresolved after 7 days or if you are still not satisfied with our response, you have the option to escalate your concern to SEBI through the following channels:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>SEBI SCORES:</strong> <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://scores.sebi.gov.in/</a></li>
                                <li><strong>SEBI ODR:</strong> <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://smartodr.in/</a></li>
                                <li><strong>SEBI Toll-Free Number:</strong> 1800 22 7575 or 1800 266 7575</li>
                                <li><strong>SEBI Office Addresses:</strong> <a href="https://www.sebi.gov.in/contact-us.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://www.sebi.gov.in/contact-us.html</a></li>
                                <li><strong>SCORES iOS App:</strong> <a href="https://apps.apple.com/us/app/sebiscores/id6478849917" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://apps.apple.com/us/app/sebiscores/id6478849917</a></li>
                                <li><strong>SCORES Google Play Store App:</strong> <a href="https://play.google.com/store/apps/details?id=com.sebi" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://play.google.com/store/apps/details?id=com.sebi</a></li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">Registration & Contact Information</h3>
                            <h4 class="font-semibold text-sm">Registration Details:</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>SEBI Registration Number:</strong> INH000014845</li>
                                <li><strong>BSE Enlistment Number:</strong> 6015</li>
                                <li><strong>Validity:</strong> Feb-09 - Perpetual</li>
                            </ul>
                            <h4 class="font-semibold text-sm mt-3">Contact Information:</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>Registered Office:</strong> C2, 2-3, New Avadhut Society, Near Seventh Day School, Sec - 7, Sanpada, MUMBAI, MAHARASHTRA, 400705</li>
                                <li><strong>Compliance Officer:</strong> Kulneet Singh Bindra</li>
                                <li><strong>Phone:</strong> +91 85916 89535</li>
                                <li><strong>Email:</strong> traderpaajicompliance@gmail.com</li>
                                <li><strong>SEBI Contact:</strong> Toll-Free Number: 1800 22 7575 or 1800 266 7575</li>
                            </ul>
                        </div>
                    </details>

                    <!-- COMPLAINT DATA -->
                    <details id="complaint-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-chart-simple" aria-hidden="true"></i> Complaint Data
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-4 text-sm text-center">
                            <p class="text-gray-600 mb-4">As per SEBI regulations, we maintain complete transparency in our complaint resolution process.</p>
                            <p>
                                <img src="https://res.cloudinary.com/dkv9ghftb/image/upload/v1775835498/Enhanced_Complaint_Report_wk1bdx.jpg"
                                     alt="SEBI Complaint Report - TraderPaaji INH000014845"
                                     class="mx-auto max-w-full h-auto rounded-xl shadow-sm"
                                     loading="lazy">
                            </p>
                            <p class="text-gray-600 text-sm mt-4">SEBI Registration: INH000014845 | Zero pending complaints as on date.</p>
                        </div>
                    </details>

                    <!-- INVESTOR CHARTER -->
                    <details id="charter-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-scroll" aria-hidden="true"></i> Investor Charter
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-4 text-sm">
                            <h3 class="font-bold text-base">A. Vision and Mission Statements for Investors</h3>
                            <p><strong>Vision:</strong> Invest with knowledge & safety.</p>
                            <p><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>

                            <h3 class="font-bold text-base mt-4">B. Details of Business Transacted by the Research Analyst with Respect to the Investors</h3>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>To publish research report based on the research activities of the RA</li>
                                <li>To provide an independent unbiased view on securities.</li>
                                <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
                                <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
                                <li>To conduct audit annually</li>
                                <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
                                <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">C. Details of Services Provided to Investors (No Indicative Timelines)</h3>
                            <h4 class="font-semibold text-sm mt-2">Onboarding of Clients</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Sharing of terms and conditions of research services</li>
                                <li>Completing KYC of fee paying clients</li>
                            </ul>
                            <h4 class="font-semibold text-sm mt-2">Disclosure to Clients:</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>To disclose information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
                                <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
                                <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</li>
                                <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
                            </ul>
                            <h4 class="font-semibold text-sm mt-2">Service Standards:</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                                <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
                                <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
                                <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
                                <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
                                <li>To treat all clients with honesty and integrity</li>
                                <li>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.</li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">D. Details of Grievance Redressal Mechanism and How to Access It</h3>
                            <p><strong>1. Investor can lodge complaint/grievance against Research Analyst in the following ways:</strong></p>
                            <p><strong>Mode of filing the complaint with research analyst:</strong></p>
                            <p>In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.</p>
                            <p><strong>Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB):</strong></p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>SCORES 2.0</strong> (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (https://scores.sebi.gov.in)</li>
                                <li>Two level review for complaint/grievance against Research Analyst:
                                    <ul class="list-disc pl-5 space-y-1 mt-1">
                                        <li>First review done by designated body (RAASB)</li>
                                        <li>Second review done by SEBI</li>
                                    </ul>
                                </li>
                                <li>Email to designated email ID of RAASB</li>
                            </ul>
                            <p><strong>2. If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.</strong></p>
                            <p><strong>With regard to physical complaints, investors may send their complaints to:</strong></p>
                            <p>Office of Investor Assistance and Education,<br>
                            Securities and Exchange Board of India,<br>
                            SEBI Bhavan, Plot No. C4-A, 'G' Block,<br>
                            Bandra-Kurla Complex, Bandra (E),<br>
                            Mumbai - 400 051</p>

                            <h3 class="font-bold text-base mt-4">E. Rights of Investors</h3>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Right to Privacy and Confidentiality</li>
                                <li>Right to Transparent Practices</li>
                                <li>Right to fair and Equitable Treatment</li>
                                <li>Right to Adequate Information</li>
                                <li>Right to Initial and Continuing Disclosure - Right to receive information about all the statutory and regulatory disclosures</li>
                                <li>Right to Fair & True Advertisement</li>
                                <li>Right to Awareness about Service Parameters and Turnaround Times</li>
                                <li>Right to be informed of the timelines for each service</li>
                                <li>Right to be Heard and Satisfactory Grievance Redressal</li>
                                <li>Right to have timely redressal</li>
                                <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</li>
                                <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
                                <li>Additional Rights to vulnerable consumers - Right to get access to services in a suitable manner even if differently abled</li>
                                <li>Right to provide feedback on the financial products and services used</li>
                                <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">F. Expectations from the Investors (Responsibilities of Investors)</h3>
                            <h4 class="font-semibold text-green-700 text-sm mt-2">Do's</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Always deal with SEBI registered Research Analyst.</li>
                                <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                                <li>Check for SEBI registration number. Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website: <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">View SEBI Registered Research Analysts</a></li>
                                <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                                <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralised Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</li>
                                <li>Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.</li>
                                <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.</li>
                                <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.</li>
                                <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
                                <li>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
                                <li>Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.</li>
                                <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
                            </ul>
                            <h4 class="font-semibold text-red-700 text-sm mt-2">Don'ts</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Do not provide funds for investment to the Research Analyst.</li>
                                <li>Don't fall prey to luring advertisements or market rumors.</li>
                                <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                                <li>Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.</li>
                            </ul>
                        </div>
                    </details>

                    <!-- GRIEVANCE REDRESSAL -->
                    <details id="grievance-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-headset" aria-hidden="true"></i> Grievance Redressal
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-6 text-sm">
                            <p class="text-center text-gray-600 mb-4">We are committed to resolving your concerns promptly</p>

                            <h3 class="font-bold text-base">Contact Details</h3>
                            <div class="overflow-x-auto">
                                <table class="complaint-table w-full text-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Hours</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Customer Care</th>
                                            <td>Kulneet Singh Bindra</td>
                                            <td>C2 2:3 New Avadhut Society, Sector 7, Sanpada, 400705</td>
                                            <td>8591689535</td>
                                            <td>traderpaajicompliance@gmail.com</td>
                                            <td>11 am to 7pm</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Head of Customer Care</th>
                                            <td>Kulneet Singh Bindra</td>
                                            <td>C2 2:3 New Avadhut Society, Sector 7, Sanpada, 400705</td>
                                            <td>8591689535</td>
                                            <td>traderpaajicompliance@gmail.com</td>
                                            <td>11 am to 7pm</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Compliance Officer</th>
                                            <td>Kulneet Singh Bindra</td>
                                            <td>C2 2:3 New Avadhut Society, Sector 7, Sanpada, 400705</td>
                                            <td>8591689535</td>
                                            <td>traderpaajicompliance@gmail.com</td>
                                            <td>11 am to 7pm</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">CEO</th>
                                            <td>Kulneet Singh Bindra</td>
                                            <td>C2 2:3 New Avadhut Society, Sector 7, Sanpada, 400705</td>
                                            <td>8591689535</td>
                                            <td>traderpaajicompliance@gmail.com</td>
                                            <td>11 am to 7pm</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Principal Officer</th>
                                            <td>Kulneet Singh Bindra</td>
                                            <td>C2 2:3 New Avadhut Society, Sector 7, Sanpada, 400705</td>
                                            <td>8591689535</td>
                                            <td>traderpaajicompliance@gmail.com</td>
                                            <td>11 am to 7pm</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Nodal Officer</th>
                                            <td>Kulneet Singh Bindra</td>
                                            <td>C2 2:3 New Avadhut Society, Sector 7, Sanpada, 400705</td>
                                            <td>8591689535</td>
                                            <td>traderpaajicompliance@gmail.com</td>
                                            <td>11 am to 7pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="font-bold text-base mt-6">Resolution Process</h3>
                            <div class="space-y-4">
                                <div class="bg-slate-50 p-4 rounded-xl">
                                    <h4 class="font-semibold text-sm mb-2">1. Contact Research Analyst</h4>
                                    <p>First contact our Research Analyst using the details in the contact table above.</p>
                                </div>
                                <div class="bg-slate-50 p-4 rounded-xl">
                                    <h4 class="font-semibold text-sm mb-2">2. SEBI SCORES Platform</h4>
                                    <p>If unsatisfied, lodge grievance through SEBI's SCORES platform</p>
                                    <p><i class="fas fa-external-link-alt" aria-hidden="true"></i> <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">scores.sebi.gov.in</a></p>
                                </div>
                                <div class="bg-slate-50 p-4 rounded-xl">
                                    <h4 class="font-semibold text-sm mb-2">3. Online Dispute Resolution</h4>
                                    <p>Use Smart ODR portal for alternative dispute resolution</p>
                                    <p><i class="fas fa-external-link-alt" aria-hidden="true"></i> <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">smartodr.in</a></p>
                                </div>
                            </div>

                            <h3 class="font-bold text-base mt-6">Our Commitment</h3>
                            <p>We resolve grievances within <strong>15 working days</strong>. Your feedback helps us improve our services.</p>
                        </div>
                    </details>

                    <!-- TERMS & CONDITIONS -->
                    <details id="terms-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-file-contract" aria-hidden="true"></i> Terms & Conditions
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-4 text-sm overflow-x-auto">
                            <h3 class="font-bold text-base mt-2">1. INTRODUCTION</h3>
                            <h4 class="font-semibold text-sm">1.1. Parties</h4>
                            <p><strong>Research Analyst</strong> (hereinafter "RA," "We," "Our," or "Us") – Registered with the Securities and Exchange Board of India ("SEBI") under Registration No. INH000014845 and Name Kulneet Singh Gurmeet Singh Bindra.</p>
                            <p><strong>Client or User</strong> ("You," "Your," or "Client") – The individual or entity subscribing to or availing research services. Must meet the eligibility requirements set forth herein and under Indian law.</p>

                            <h3 class="font-bold text-base mt-4">2. PURPOSE</h3>
                            <p>2.1. These Terms & Conditions ("T&C") govern the Client's, from time to time, use or subscription of Our research services ("Services"), including any Digital Platforms, or technology solutions that We or our service provider(s) provide.</p>
                            <p>2.2. <strong>Compliance with SEBI Circular</strong> – This document incorporates the minimum mandatory provisions contained in the SEBI circular SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2025/004 dated January 08, 2025 ("the Circular") and relevant amendments to the SEBI (Research Analysts) Regulations, 2014 ("RA Regulations"). In case of conflict between these T&C and any applicable regulations/guidelines issued by SEBI, the SEBI regulations/guidelines shall prevail.</p>

                            <h3 class="font-bold text-base mt-4">3. DEFINITIONS</h3>
                            <p>3.1. Unless the context otherwise requires, the following definitions apply in this T&C:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li><strong>"Client" or "User":</strong> Any person or entity that registers with the RA and agrees to these T&C to avail the Services.</li>
                                <li><strong>"Services":</strong> Includes (a) research reports, data, model portfolios, or analyses pertaining to Indian-listed securities; (b) any online or offline advisory/research support; (c) any communications related thereto.</li>
                                <li><strong>"Digital Platform":</strong> Includes websites, mobile or web applications, or other technology platforms (including third-party service providers) used for delivering the Services.</li>
                                <li><strong>"KYC":</strong> Know Your Customer – verification process mandated by SEBI (and other applicable laws) to establish the identity of Clients.</li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">4. SCOPE OF SERVICES</h3>
                            <p>4.1. <strong>Research-Only / No Execution</strong> – You hereby agree and acknowledge that the RA provides research and analysis only and We do not execute trades on behalf of Clients, hold Clients' funds, or provide any assured returns.</p>
                            <p>4.2. <strong>Model Portfolios</strong> – Where offered, Our model portfolios are recommendations for basket(s) of securities with weightages. You hereby agree and acknowledge that such recommendations are for informational purposes only and do not guarantee performance or returns. We shall ensure compliance with the SEBI's model portfolio guidelines, as outlined in Annexure-A of the Circular.</p>
                            <p>4.3. <strong>Use of Artificial Intelligence (AI)</strong> – In an event we use AI tools (in whole or part) to generate or support research outputs, We shall remain solely responsible for the quality, accuracy, security, and confidentiality of data. We shall disclose the extent of AI usage to the Client when providing Services (or whenever material changes occur).</p>
                            <p>4.4. <strong>No Guarantee of Returns</strong> – You hereby agree and acknowledge that all investments carry market risk. Any past performance is not indicative of future returns, and the RA does not assure or promise any specific gain or outcome.</p>

                            <h3 class="font-bold text-base mt-4">5. ELIGIBILITY</h3>
                            <p>5.1. <strong>Legal Capacity</strong> – Only individuals aged 18 years or older (and otherwise competent to contract) or legally incorporated entities may register. If You are a minor or otherwise incapacitated to enter into a contract, You are not permitted to use or subscribe to the Services.</p>
                            <p>5.2. <strong>KYC Compliance</strong> – You hereby agree and acknowledge that You shall provide accurate and complete information for the purpose of KYC. RA shall verify and/or store such KYC in accordance with SEBI regulations. The RA may terminate or suspend Services if KYC requirements are not met as the applicable regulations or if the information provided is incomplete, false, or misleading.</p>

                            <h3 class="font-bold text-base mt-4">6. REGISTRATION & ACCOUNTS</h3>
                            <p>6.1. <strong>Registration Process</strong> – To access Our paid Services, Clients shall complete the registration form, provide all mandatory details, and accept these T&C. The RA reserves the right to reject or cancel registration if any of the information provided by You is incorrect or if the Client is ineligible to avail the Services under applicable law.</p>
                            <p>6.2. <strong>Security of Credentials</strong> – You agree and acknowledge that You shall keep Your login information (including but not limited to username, password) confidential. You shall be liable for any unauthorized use of your account resulting from negligence or sharing of Your credentials. You shall notify Us immediately if You suspect any breach of Your account security.</p>
                            <p>6.3. <strong>Use of Services</strong> – You shall not reproduce, distribute, copy, sell, or otherwise exploit Our research content without express written consent from the RA. Any unauthorized use of Our Services shall constitute grounds for termination of Services and may lead to legal action against You.</p>

                            <h3 class="font-bold text-base mt-4">7. FEES & PAYMENT</h3>
                            <p>7.1. <strong>Maximum Fee for Individual/HUF Clients</strong> – As Per Regulation 15A of the RA Regulations and the Circular, We may charge fees up to INR 1,51,000 (Rupees One Lakh Fifty-One Thousand) per annum per "family of client" (for individual and HUF clients). You hereby agree that this amount excludes any statutory taxes and charges. We may revise fees in line with the Cost Inflation Index or as specified by SEBI and/or Research Analyst Administration and Supervisory Body ("RAASB") every three years.</p>
                            <p>7.2. <strong>Fees for Non-Individual or Accredited Investors</strong> – For corporates, institutions, or accredited investors, fees may be negotiated bilaterally without the above limit, subject to fairness and reasonableness.</p>
                            <p>7.3. <strong>Billing & Mode of Payment</strong> – Fees may be charged quarterly in advance or in another mutually agreed schedule, subject to the one-quarter advance limit mandated by SEBI. We may offer or guide you regarding the Centralised Fee Collection Mechanism (CeFCOM) as an optional method of fee payment if made available by SEBI.</p>
                            <p>7.4. <strong>Refund Policy</strong> – In case of premature termination of Services, We shall refund fees for the unexpired subscription period on a pro rata basis. No "breakage" fee or penalty shall be imposed. Partial-month subscriptions are generally not refunded except at RA's sole discretion or as required by SEBI. If the RA's SEBI registration is suspended for more than 60 days or cancelled, We shall refund any unutilized fees from that effective date onward.</p>
                            <p>7.5. <strong>Renewal Price</strong> – The fee mentioned under Annexure A of this T&C (along with the details of Your chosen plan details and RA details) is the maximum price for renewal. The RA may reduce the renewal fee at its sole discretion without prior notice to the Client.</p>

                            <h3 class="font-bold text-base mt-4">8. MANDATORY TERMS & CONDITIONS (AS PER CIRCULAR ANNEXURE-B)</h3>
                            <p>Below are the minimum mandatory T&C required by the Circular. These provisions are integral to Our agreement with You:</p>
                            <p>8.1. <strong>Availing the Services</strong> – By subscribing to or otherwise using Our Services, You hereby acknowledge and confirm that You do so at Your sole discretion. Our Services are rendered in accordance with the applicable SEBI (Research Analysts) Regulations, 2014 as well as all other applicable laws.</p>
                            <p>8.2. <strong>Obligations on RA</strong> – Both RA and Client agree to be bound by the SEBI Act, SEBI (RA) Regulations, and all rules/regulations/circulars in force from time to time.</p>
                            <p>8.3. <strong>Client Information & KYC</strong> – You shall furnish all required details for KYC in the form mandated by SEBI/RAASB. We will collect, store, verify, and update KYC records as per SEBI norms.</p>
                            <p>8.4. <strong>Standard Terms of Service</strong> – By giving consent (online/offline) to these T&C, You hereby read and understood the terms and conditions applicable to RA as defined under regulation 2(1)(u) of SEBI (Research Analyst) Regulations, 2014, including the fee structure.</p>
                            <p>You hereby agree and acknowledge that You are subscribing to the Services for Your own benefits and consumption, and any reliance placed on the research report provided by Us shall be as per Your own judgement and assessment of the conclusions contained in the research report.</p>
                            <p>You further agree and acknowledge that: (a) Any investment made based on the recommendations in the research report are subject to market risk; (b) Recommendations in the research report do not provide any assurance of returns; and (c) There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report.</p>
                            <p>We agree and acknowledge that: (a) We are duly registered with SEBI as an RA pursuant to the SEBI (Research Analysts) Regulations, 2014 and Our registration details are: (INH000014845); (b) We have the registration and qualifications required to render the Services contemplated under the RA Regulations, and the same are valid and subsisting; (c) Our Services do not conflict with or violate any provision of law, rule or regulation, contract, or other instrument to which it is a party or to which any of its property is or may be subject and (d) We are not engaged in any additional professional or business activities, on a whole-time basis or in an executive capacity, which interfere with/influence or have the potential to interfere with/influence the independence of research report and/or recommendations contained therein.</p>
                            <p>8.5. <strong>Consideration & Mode of Payment</strong> – You shall pay the agreed fees plus any statutory charges via permissible methods. We shall not render any research services until Your consent is received and initial fees are paid (as applicable).</p>
                            <p>8.6. <strong>Risk Factors</strong> – You hereby acknowledge that investing in securities is subject to market risk, including but not limited to volatility and potential loss of principal and any past performance is no indicator of future performance and no returns are guaranteed.</p>
                            <p>8.7. <strong>Conflict of Interest</strong> – We shall disclose any conflicts of interest as mandated by SEBI and take steps to mitigate or avoid them. Full disclosures, if required, will be provided in each research report or at the time of giving a recommendation.</p>
                            <p>8.8. <strong>Termination of Service & Refund of Fees</strong> – If Our registration is suspended or canceled by SEBI, We shall refund any residual amount for the unexpired subscription period. We may also suspend/terminate services in an event You breach these T&C or as otherwise allowed by law.</p>
                            <p>8.9. <strong>Grievance Redressal & Dispute Resolution</strong> – For any grievances (e.g., non-receipt of a research report, missing pages, or other deficiencies), please email to Our designated Grievance Officer at traderpaajicompliance@gmail.com within 7 business days of the issue. We shall resolve the grievances within 7 (seven) business working days or such timelines as may be specified by SEBI under the RA Regulation from time to time. If unresolved, You may escalate the complaint to SEBI via the SCORES portal or use any other dispute resolution mechanism specified by SEBI (e.g., arbitration).</p>
                            <p>8.10. <strong>Additional Clauses</strong> – Any additional voluntary clauses in this T&C shall not conflict with SEBI regulations/circulars. Any changes to such voluntary clauses shall be preceded by 15 days' notice.</p>
                            <p>8.11. <strong>Mandatory Notice</strong> – Clients shall refer to the Do's and Don'ts while dealing with the Services as specified in SEBI Master Circular No. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024, or as may be specified by SEBI from time to time.</p>
                            <p>8.12. <strong>Most Important Terms & Conditions (MITC)</strong> – We shall also disclose MITC (as standardized by the Industry Standards Forum, in consultation with SEBI/RAASB). The MITC explicitly informs Clients that the RA cannot execute trades on behalf of Clients.</p>
                            <p>8.13. <strong>Optional Centralised Fee Collection Mechanism (CeFCOM)</strong> – If and when available, We will inform you of the optional Centralised Fee Collection Mechanism for IA and RA ("CeFCOM") to facilitate fee payment.</p>

                            <h3 class="font-bold text-base mt-4">9. REPRESENTATIONS & WARRANTIES</h3>
                            <p>9.1. <strong>RA's Declarations</strong> – The RA declares that it is duly registered under the SEBI (Research Analysts) Regulations, 2014. The RA, including its Principal Officer (if applicable), meets or exceeds the qualification and certification requirements mandated by SEBI or National Institute of Securities Markets ("NISM"). The RA's services do not conflict with or violate any law or regulation to which it is subject.</p>
                            <p>9.2. <strong>Client's Declarations</strong> – You represent that You are legally entitled to enter this Agreement and that Your KYC details are true and correct. You understand the nature of market risks and volatility inherent in securities investments.</p>

                            <h3 class="font-bold text-base mt-4">10. CONFIDENTIALITY & DATA PROTECTION</h3>
                            <p>10.1. <strong>Privacy of Client Data</strong> – We respect Your privacy and will not share or disclose Your personal data except as required by law or to fulfill regulatory obligations (e.g., KYC checks). However, We may share aggregated or anonymized data for research or compliance purposes, without revealing individual identities.</p>
                            <p>10.2. <strong>Security of Client Data</strong> – While we endeavor to protect data transmissions, we cannot guarantee the complete security of data over the internet. You acknowledge that data transfers may be unencrypted and may pass over multiple networks.</p>

                            <h3 class="font-bold text-base mt-4">11. LIMITATION OF LIABILITY</h3>
                            <p>11.1. <strong>No Assured Returns</strong> – We shall not be liable for any direct, indirect, incidental, or consequential losses, including lost profits, due to Your reliance on Our research reports or model portfolios.</p>
                            <p>11.2. <strong>Force Majeure</strong> – The RA is not liable for failures or delays in performance arising from events beyond its control, including natural disasters, power outages, or disruptions in telecommunication systems.</p>
                            <p>11.3. <strong>Third-Party Data</strong> – We rely on third-party market data providers. We do not audit or guarantee the correctness of such data, and shall not be held liable for inaccuracies.</p>

                            <h3 class="font-bold text-base mt-4">12. INDEMNIFICATION</h3>
                            <p>12.1. You agree to indemnify and hold harmless the RA, its officers, employees, and affiliates from any and all claims, damages, losses, or liabilities arising out of: Your breach of these T&C or violation of law; Unauthorized or improper use of Your account; Third-party claims related to Your actions or inactions.</p>

                            <h3 class="font-bold text-base mt-4">13. SUSPENSION & TERMINATION</h3>
                            <p>13.1. <strong>Suspension</strong> – We reserve the right to suspend Your account or access to Services with or without notice if You breach these T&C or if required by SEBI/regulators.</p>
                            <p>13.2. <strong>Termination</strong> – We may terminate this Agreement immediately upon: Violation of T&C by You; Directions from SEBI or any competent regulatory authority; Non-payment of fees (beyond the grace period, if any). Refunds (if any) shall be governed by Section 7.4 above.</p>

                            <h3 class="font-bold text-base mt-4">14. MISCELLANEOUS</h3>
                            <p>14.1. <strong>Amendments</strong> – We may modify or update these T&C in accordance with SEBI regulations. Notice of material changes will be posted on Our website/app or emailed to You. Continued use of the Services indicates Your acceptance of updated T&C.</p>
                            <p>14.2. <strong>Severability</strong> – If any provision is held invalid by a competent authority, the remaining provisions shall continue in effect.</p>
                            <p>14.3. <strong>Governing Law & Jurisdiction</strong> – These T&C shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts/tribunals in Delhi or as directed by SEBI.</p>
                            <p>14.4. <strong>No Agency</strong> – Nothing in these T&C shall be deemed to constitute a partnership, agency, or joint venture between the RA and the Client.</p>
                            <p>14.5. <strong>Disclaimer</strong> – Registration granted by SEBI and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors. Investing in stocks/ETFs is subject to market risks. Read all related documents carefully before investing. Consult a qualified financial advisor to understand suitability.</p>

                            <hr class="my-6 border-t border-gray-300">
                            <h3 class="font-bold text-lg mt-4">ANNEXURE A</h3>
                            <h4 class="font-semibold text-base">Most Important Terms and Conditions (MITC)</h4>
                            <p class="italic">[Forming part of the Terms and Conditions for providing research services]</p>
                            <p>These terms and conditions, and consent thereon are for the research services provided by the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell transaction) on behalf of, the client. Thus, the clients are advised not to permit RA to execute any trade on their behalf.</p>
                            <p>The fee charged by RA to the client will be subject to the maximum of amount prescribed by SEBI/ Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients).</p>
                            <p><strong>Note:</strong></p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>The current fee limit is Rs 1,51,000/- per annum per family of client for all research services of the RA.</li>
                                <li>The fee limit does not include statutory charges.</li>
                                <li>The fee limits do not apply to a non-individual client / accredited investor.</li>
                            </ul>
                            <p>RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI; presently it is one quarter. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for unexpired period.</p>
                            <p>Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCOM) managed by BSE Limited (i.e. currently recognized RAASB).</p>
                            <p>The RA is required to abide by the applicable regulations/ circulars/ directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavor to promptly inform the client of any conflict of interest that may affect the services being rendered to the client.</p>
                            <p>Any assured/guaranteed/fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA.</p>
                            <p>The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA's research services. All opinions, projections, estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of research report.</p>
                            <p>Any investment made based on recommendations in research reports are subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client's own judgement and assessment of the conclusions contained in the research report.</p>
                            <p>The SEBI registration, Enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client.</p>

                            <h4 class="font-semibold text-base mt-4">Grievance Redressal</h4>
                            <p>For any grievances, follow these steps:</p>
                            <ul class="list-decimal pl-5 space-y-1">
                                <li><strong>Step 1:</strong> Contact the RA using the details on its website: traderpaajicompliance@gmail.com</li>
                                <li><strong>Step 2:</strong> If the resolution is unsatisfactory, lodge grievances through SEBI's SCORES platform at www.scores.sebi.gov.in</li>
                                <li><strong>Step 3:</strong> Consider Online Dispute Resolution (ODR) through the Smart ODR portal at https://smartodr.in</li>
                            </ul>
                            <p>Clients are required to keep contact details, including email id and mobile number/s updated with the RA at all times.</p>
                            <p>The RA shall never ask for the client's login credentials and OTPs for the client's Trading Account, Demat Account and Bank Account. Never share such information with anyone including RA.</p>

                            <h4 class="font-semibold text-base mt-4">Standard Terms of Services</h4>
                            <p>The client's consent will be obtained based on the following understanding:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>I/We have read and understood the terms and conditions applicable to a research analyst as defined under regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure.</li>
                                <li>I/We are subscribing to the research services for our own benefit and consumption; any reliance on the research report provided by the research analyst will be based on our own judgment and assessment of the conclusions within the report.</li>
                                <li>I/We understand that:
                                    <ul class="list-disc pl-5 space-y-1 mt-1">
                                        <li>Investments based on recommendations in the research report are subject to market risk.</li>
                                        <li>Holding positions without stop-loss or target may lead to significant losses in unfavorable market conditions or company events.</li>
                                        <li>Market risks may result in partial or total loss of investments under certain conditions.</li>
                                        <li>Registration by SEBI and certification from NISM do not guarantee the performance of the intermediary or assure returns to investors.</li>
                                        <li>Past performance is not indicative of future results.</li>
                                        <li>Recommendations in the research report do not guarantee accuracy or results of recommended securities.</li>
                                        <li>There is no avenue for claiming losses incurred based on the recommendations in the research report.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4 class="font-semibold text-base mt-4">Additional Risk Disclosure</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Investing in securities carries several risks that could negatively impact your investments or portfolio.</li>
                                <li><strong>MARKET RISKS WARNING:</strong> "Investments in the securities market are subject to market risks. Please read all related documents carefully before investing."</li>
                                <li><strong>LOSS POSSIBILITY WARNING:</strong> "Market risks may lead to partial or total loss of investments under certain market conditions."</li>
                                <li>Risks in Open Futures and Options Trading are VERY HIGH.</li>
                                <li><strong>SEBI REGISTRATION:</strong> Registration granted by SEBI and certification from NISM do not guarantee performance by the intermediary or assure returns to investors.</li>
                                <li><strong>PAST PERFORMANCE WARNING:</strong> Past performance is not indicative of future results.</li>
                                <li><strong>NO WARRANTIES WARNING:</strong> The Research Analyst does not guarantee the accuracy or results of recommended securities.</li>
                                <li><strong>EXERCISE CAUTION WARNING:</strong> RA KULNEET SINGH GURMEET SINGH BINDRA: INH000014845 provides research analysis and specific securities recommendations but does not offer portfolio management services, personal account handling, profit sharing, or risk-profiling-based investment advisory services.</li>
                            </ul>
                            <p class="text-sm text-gray-600 mt-4">SEBI Logo: SEBI भारतीय प्रतिभूति और विनिमय बोर्ड Securities and Exchange Board of India</p>
                            <p class="text-sm text-gray-600">Page 3 of 4</p>
                        </div>
                    </details>

                    <!-- REFUND POLICY -->
                    <details id="refund-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-undo-alt" aria-hidden="true"></i> Refund Policy
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-4 text-sm">
                            <p class="text-center text-gray-600 mb-4">Transparent policies for your peace of mind</p>
                            <p class="text-center text-sm text-gray-600 mb-6">SEBI Registered Research Analyst: INH000014845</p>

                            <h3 class="font-bold text-base">Refund Policy</h3>
                            <p>We prioritize our customers and are dedicated to delivering the highest quality services.</p>
                            <div class="bg-slate-50 p-4 rounded-xl mt-3">
                                <h4 class="font-semibold text-sm mb-2">Key Points:</h4>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>We cannot provide return assurance or guarantee on our calls</li>
                                    <li>Refunds are issued on subscriptions on pro-rata basis</li>
                                    <li>Services can be cancelled or refunded under pro-rata basis</li>
                                    <li>Dissatisfied clients can reach out to us for guidance and support</li>
                                </ul>
                            </div>

                            <h3 class="font-bold text-base mt-6">Before Making Payment</h3>
                            <div class="bg-amber-50 p-4 rounded-xl mt-3">
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Review all information about our services</li>
                                    <li>Familiarize yourself with our Terms and Conditions</li>
                                    <li>Read our Privacy Policy and Refund Policy</li>
                                    <li>Understand refunds are only possible on pro-rata basis</li>
                                </ul>
                            </div>

                            <h3 class="font-bold text-base mt-6">Important Notice</h3>
                            <p class="mt-2">There is no avenue for claiming losses incurred based on recommendations in research reports.</p>
                            <p class="mt-2">
                                <i class="fas fa-external-link text-blue-600" aria-hidden="true"></i>
                                <a href="https://www.traderpaaji.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Visit our Investor Charter and Complaint Table: WWW.TRADERPAAJI.COM</a>
                            </p>
                        </div>
                    </details>

                    <!-- PRIVACY POLICY -->
                    <details id="privacy-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-lock" aria-hidden="true"></i> Privacy Policy
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-4 text-sm">
                            <h3 class="font-bold text-base">1. Introduction</h3>
                            <p>TRADER PAAJI values your privacy and is committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your information.</p>

                            <h3 class="font-bold text-base mt-4">2. Information We Collect</h3>
                            <h4 class="font-semibold text-sm mt-2">Personal Information</h4>
                            <p>Name, email, phone, address, and other contact details</p>
                            <h4 class="font-semibold text-sm mt-2">Financial Information</h4>
                            <p>Payment details processed through secure gateways</p>
                            <h4 class="font-semibold text-sm mt-2">Demographic Information</h4>
                            <p>Age, location, investment preferences and experience</p>
                            <h4 class="font-semibold text-sm mt-2">Usage Data</h4>
                            <p>IP address, browser type, pages visited, and other analytics</p>

                            <h3 class="font-bold text-base mt-4">3. How We Use Your Information</h3>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Provide and improve our services</li>
                                <li>Process transactions and manage accounts</li>
                                <li>Communicate about updates and offers</li>
                                <li>Analyze website usage to enhance performance</li>
                                <li>Comply with legal obligations including SEBI regulations</li>
                                <li>Prevent fraud and abusive activities</li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">4. How We Share Your Information</h3>
                            <h4 class="font-semibold text-sm mt-2">Service Providers</h4>
                            <p>Trusted partners for payment processing and support</p>
                            <h4 class="font-semibold text-sm mt-2">Legal Authorities</h4>
                            <p>When required by law or to protect our rights</p>
                            <h4 class="font-semibold text-sm mt-2">Business Transfers</h4>
                            <p>In case of merger or acquisition</p>

                            <h3 class="font-bold text-base mt-4">5. Data Security</h3>
                            <p>We implement security measures to protect your information:</p>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Encryption for sensitive information</li>
                                <li>Secure servers with limited access</li>
                                <li>Regular security monitoring</li>
                                <li>Strict data security policies</li>
                            </ul>

                            <h3 class="font-bold text-base mt-4">Contact Us</h3>
                            <h4 class="font-semibold text-sm mt-2">Email</h4>
                            <p><i class="fas fa-envelope" aria-hidden="true"></i> TRADERPAAJICOMPLIANCE@gmail.com</p>
                            <h4 class="font-semibold text-sm mt-2">Phone</h4>
                            <p><i class="fas fa-phone-alt" aria-hidden="true"></i> +91 8591689535</p>
                            <h4 class="font-semibold text-sm mt-2">Address</h4>
                            <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> KULNEET SINGH BINDRA PROP OF TRADERPAAJI<br>
                            C2, 2-3, New Avadhut Society, Near Seventh Day School<br>
                            Sec - 7, Sanpada, MUMBAI, MAHARASHTRA, 400705</p>
                        </div>
                    </details>

                    <!-- DO'S & DON'TS -->
                    <details id="dodont-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-check-circle" aria-hidden="true"></i> Do's & Don'ts for Investors
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-6 text-sm">
                            <p class="text-center text-gray-600 mb-4">Essential guidelines for safe and informed investing with research analysts</p>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 class="font-bold text-green-700 text-base">Do's for Investors</h3>
                                    <ul class="list-disc pl-5 space-y-1">
                                        <li>Always deal with SEBI registered Research Analyst</li>
                                        <li>Ensure that the Research Analyst has a valid registration certificate</li>
                                        <li>Check for SEBI registration number. Verify on SEBI website: <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">SEBI Registered Analysts</a></li>
                                        <li>Always pay attention to disclosures made in research reports</li>
                                        <li>Pay through banking channels only and maintain signed receipts</li>
                                        <li>Check research recommendations before trading</li>
                                        <li>Ask questions and clear doubts before acting on recommendations</li>
                                        <li>Seek clarifications for complex/high-risk products</li>
                                        <li>Know your right to stop availing services as per terms</li>
                                        <li>Provide feedback to your Research Analyst</li>
                                        <li>Know you're not bound by clauses contravening regulations</li>
                                        <li>Inform SEBI about analysts offering assured/guaranteed returns</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 class="font-bold text-red-700 text-base">Don'ts for Investors</h3>
                                    <ul class="list-disc pl-5 space-y-1">
                                        <li>Do not provide funds for investment to the Research Analyst</li>
                                        <li>Don't fall prey to luring advertisements or market rumors</li>
                                        <li>Do not get attracted to limited period discounts, incentives, or gifts</li>
                                        <li>Do not share login credentials and passwords of trading, demat or bank accounts</li>
                                        <li>Never share OTPs or sensitive financial information</li>
                                        <li>Don't act on recommendations without understanding the risks</li>
                                        <li>Avoid making investment decisions based solely on social media tips</li>
                                        <li>Don't ignore the risk disclosure documents</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="bg-amber-50 p-4 rounded-xl mt-6">
                                <h3 class="font-bold text-base text-amber-800">Important Notice</h3>
                                <p class="mt-2">Always verify the credentials of any financial advisor or research analyst before engaging their services. Report any suspicious activities to SEBI immediately.</p>
                                <p class="mt-2">
                                    <i class="fas fa-external-link text-blue-600" aria-hidden="true"></i>
                                    <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Visit SEBI Official Website</a>
                                </p>
                            </div>
                        </div>
                    </details>

                    <!-- CONTACT US -->
                    <details id="contact-sec">
                        <summary class="faq-summary p-5 text-lg font-semibold text-blue-800 bg-white rounded-xl shadow-md" aria-expanded="false">
                            <i class="fas fa-envelope" aria-hidden="true"></i> Contact Us
                        </summary>
                        <div class="p-6 bg-white rounded-b-xl shadow-md space-y-6 text-sm">
                            <p class="text-center text-gray-600 mb-4">Have questions or feedback? Reach out to us and we'll get back to you as soon as possible.</p>

                            <h3 class="font-bold text-base">Contact Information</h3>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div><i class="fas fa-map-marker-alt text-blue-600" aria-hidden="true"></i> <strong>Address:</strong> C2, 2-3, New Avadhut Society, Near Seventh Day School, Sec - 7, Sanpada, MUMBAI, MAHARASHTRA, 400705</div>
                                <div><i class="fas fa-phone-alt" aria-hidden="true"></i> <strong>Phone:</strong> +91 85916 89535</div>
                                <div><i class="fas fa-envelope" aria-hidden="true"></i> <strong>Email:</strong> traderpaajicompliance@gmail.com</div>
                                <div><i class="fab fa-whatsapp text-green-800" aria-hidden="true"></i> <strong>WhatsApp:</strong> <a href="https://wa.me/918591689535" class="text-green-800 hover:underline" aria-label="Chat on WhatsApp: +91 85916 89535">+91 85916 89535</a></div>
                            </div>

                            <h3 class="font-bold text-base mt-4">Support Hours</h3>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div><i class="fas fa-clock" aria-hidden="true"></i> <strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</div>
                                <div><i class="fas fa-clock" aria-hidden="true"></i> <strong>Saturday:</strong> 9:00 AM - 1:00 PM</div>
                            </div>

                            <h3 class="font-bold text-base mt-4">Follow Us</h3>
                            <div class="flex gap-4">
                                <a href="https://t.me/TraderPaajiKulneet" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-blue-600 hover:underline" aria-label="Follow us on Telegram">
                                    <i class="fab fa-telegram text-xl" aria-hidden="true"></i> Telegram
                                </a>
                                <a href="https://www.instagram.com/traderpaaji" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-pink-600 hover:underline" aria-label="Follow us on Instagram">
                                    <i class="fab fa-instagram text-xl" aria-hidden="true"></i> Instagram
                                </a>
                                <a href="https://www.youtube.com/@traderpaaji" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-red-600 hover:underline" aria-label="Subscribe to our YouTube channel">
                                    <i class="fab fa-youtube text-xl" aria-hidden="true"></i> YouTube
                                </a>
                                <a href="https://wa.me/918591689535" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-green-800 hover:underline" aria-label="Chat with us on WhatsApp">
                                    <i class="fab fa-whatsapp text-xl" aria-hidden="true"></i> WhatsApp
                                </a>
                            </div>

                            <h3 class="font-bold text-base mt-4">Compliance Information</h3>
                            <h4 class="font-semibold text-sm mt-2">Grievance Officer</h4>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div><i class="fas fa-user" aria-hidden="true"></i> <strong>Name:</strong> Kulneet Singh Bindra</div>
                                <div><i class="fas fa-phone-alt" aria-hidden="true"></i> <strong>Phone:</strong> +91 85916 89535</div>
                                <div><i class="fas fa-envelope" aria-hidden="true"></i> <strong>Email:</strong> traderpaajicompliance@gmail.com</div>
                            </div>

                            <h4 class="font-semibold text-sm mt-3">SEBI Registration</h4>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div><i class="fas fa-id-card" aria-hidden="true"></i> <strong>Registration Number:</strong> INH000014845</div>
                                <div><i class="fas fa-id-card" aria-hidden="true"></i> <strong>BSE Enlistment Number:</strong> 6015</div>
                            </div>
                            <div class="mt-2"><i class="fas fa-phone-alt" aria-hidden="true"></i> <strong>SEBI Helpline:</strong> 1800 22 7575 or 1800 266 7575</div>
                            <p class="mt-3 text-sm text-gray-600">For compliance-related queries, please contact our grievance officer at traderpaajicompliance@gmail.com</p>
                        </div>
                    </details>
                </div>
                <p class="text-center text-gray-600 text-sm mt-10">SEBI Registration: INH000014845 | BSE Enlistment: 6015 | Kulneet Singh Bindra (TraderPaaji)</p>
            </div>
        </div>
    `;
    document.getElementById('compliance-section').innerHTML = complianceHtml;

    // Initialize aria-expanded on page load
    const allDetails = document.querySelectorAll('details');
    allDetails.forEach(d => {
        const summary = d.querySelector('summary');
        if (summary) summary.setAttribute('aria-expanded', d.open ? 'true' : 'false');
    });

    const navLinks = document.querySelectorAll('.compliance-nav-link');
    function openSectionById(id) {
        const target = document.querySelector(id);
        if (!target || target.tagName !== 'DETAILS') return;
        allDetails.forEach(d => {
            d.open = false;
            const summary = d.querySelector('summary');
            if (summary) summary.setAttribute('aria-expanded', 'false');
        });
        target.open = true;
        const targetSummary = target.querySelector('summary');
        if (targetSummary) targetSummary.setAttribute('aria-expanded', 'true');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                openSectionById(hash);
                history.pushState(null, '', hash);
            }
        });
    });

    if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        if (target && target.tagName === 'DETAILS') {
            allDetails.forEach(d => {
                d.open = false;
                const summary = d.querySelector('summary');
                if (summary) summary.setAttribute('aria-expanded', 'false');
            });
            target.open = true;
            const targetSummary = target.querySelector('summary');
            if (targetSummary) targetSummary.setAttribute('aria-expanded', 'true');
            setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 200);
        }
    }

    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash;
        if (newHash) {
            const elem = document.querySelector(newHash);
            if (elem && elem.tagName === 'DETAILS') {
                document.querySelectorAll('details').forEach(d => {
                    d.open = false;
                    const summary = d.querySelector('summary');
                    if (summary) summary.setAttribute('aria-expanded', 'false');
                });
                elem.open = true;
                const elemSummary = elem.querySelector('summary');
                if (elemSummary) elemSummary.setAttribute('aria-expanded', 'true');
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
})();
