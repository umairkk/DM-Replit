import type { SeoPainPoint } from "@/content/seo-pages/types";

/** Unique pain-point copy per USA industry landing page (avoids duplicate SEO content). */
export const USA_INDUSTRY_PAIN_POINTS: Record<string, SeoPainPoint[]> = {
  "dental-clinics-dental-implants": [
    {
      title: "Implant leads confused with general dentistry",
      description:
        "Broad dental ads attract cleanings and insurance questions while full-arch and implant cases need procedure-specific offers and screening questions.",
    },
    {
      title: "Before/after creative blocked or limited",
      description:
        "Healthcare and cosmetic dentistry policies restrict imagery and claims — disapproved ads delay implant and Invisalign campaigns.",
    },
    {
      title: "High CPL on vanity smile campaigns",
      description:
        "Inspiration-style creative drives clicks from browsers, not patients ready for consultations or financing conversations.",
    },
    {
      title: "No tracking for booked consults vs. form fills",
      description:
        "Front-desk outcomes stay offline, so Meta optimizes toward cheap leads that never sit in the chair.",
    },
    {
      title: "Competing on price instead of case value",
      description:
        "Generic “free exam” offers pull price shoppers while implant margins depend on qualified, treatment-ready inquiries.",
    },
    {
      title: "Local radius too wide for surgical cases",
      description:
        "Patients travel for implants, but unmanaged geo targeting wastes spend on areas your team cannot realistically serve.",
    },
  ],
  "roofing-contractors": [
    {
      title: "Storm-chaser audiences without proof",
      description:
        "Facebook campaigns that mimic emergency responders erode trust; homeowners want licensed, local roofers with reviews and warranties.",
    },
    {
      title: "Inspection requests that never answer",
      description:
        "Lead forms optimized for volume flood estimators with wrong zip codes, renters, and tire-kickers after hail events.",
    },
    {
      title: "Creative that hides material and scope",
      description:
        "Pretty roof photos do not explain replacement vs. repair — sales teams chase unclear project types.",
    },
    {
      title: "Seasonal spikes with no retargeting",
      description:
        "Budget disappears after weather events while warm prospects who clicked ads never see follow-up offers.",
    },
    {
      title: "Google and Facebook telling different stories",
      description:
        "Search captures “roof repair near me” while social runs brand awareness — neither funnel hands off to the other.",
    },
    {
      title: "Call tracking gaps on mobile",
      description:
        "Click-to-call counts as a conversion even when the caller wanted a competitor or wrong service line.",
    },
  ],
  "hvac-heating-air-conditioning": [
    {
      title: "AC season budget burned in spring",
      description:
        "Instagram campaigns scaled too early train algorithms on low-intent audiences before heat drives emergency demand.",
    },
    {
      title: "Tune-up offers cannibalizing install leads",
      description:
        "$29 maintenance ads fill the calendar but starve furnace replacement and high-ticket install opportunities.",
    },
    {
      title: "Geo targeting wider than dispatch zones",
      description:
        "Technicians drive hours for “leads” outside your profitable service radius.",
    },
    {
      title: "No separate funnels for repair vs. replacement",
      description:
        "One generic HVAC ad set mixes broken-AC urgency with financing-heavy equipment replacements.",
    },
    {
      title: "Creative fatigue on stock truck photos",
      description:
        "Repeated utility-style images underperform when competitors show real installs, rebates, and same-day service.",
    },
    {
      title: "Offline booked jobs not fed back to Meta",
      description:
        "Without CRM or call data, platforms keep bidding for form fills that never become paid jobs.",
    },
  ],
  "med-spas-aesthetic-clinics": [
    {
      title: "Treatment menus advertised as one offer",
      description:
        "Bundling facials, lasers, and injectables in a single ad confuses intent and attracts mismatched expectations.",
    },
    {
      title: "Instagram creative that triggers policy reviews",
      description:
        "Before/after and body-focused imagery can limit delivery for med spa categories.",
    },
    {
      title: "Consultation no-shows from discount hunters",
      description:
        "Aggressive promo creative fills the CRM with guests who only wanted a Groupon-style deal.",
    },
    {
      title: "Weak differentiation from chain med spas",
      description:
        "Generic “self-care Sunday” messaging fails to highlight provider credentials and device technology.",
    },
    {
      title: "Retargeting pools too small locally",
      description:
        "Short remarketing windows miss prospects researching multiple treatments over weeks.",
    },
    {
      title: "Attribution split across booking software",
      description:
        "Zenoti, Boulevard, or similar tools do not talk to pixel events — ROAS looks random.",
    },
  ],
  "solar-panel-installation": [
    {
      title: "Lead gen partners reselling the same homeowner",
      description:
        "Shared solar lead marketplaces mean your Facebook spend competes against three other installers calling the same list.",
    },
    {
      title: "Misleading savings claims in ad copy",
      description:
        "Overstated bill offsets trigger disapprovals and erode trust with savvy homeowners.",
    },
    {
      title: "Consultation requests outside utility territory",
      description:
        "Nationwide targeting or broad lookalikes produce roofs your interconnection team cannot serve.",
    },
    {
      title: "Long sales cycles ignored in reporting",
      description:
        "Seven-day click windows undercount appointments that close after site surveys and financing.",
    },
    {
      title: "Creative focused on panels, not ownership story",
      description:
        "Technical specs underperform against local proof, financing, and battery backup narratives.",
    },
    {
      title: "No nurture for “research mode” homeowners",
      description:
        "Single-step lead forms miss audiences comparing PPAs, leases, and cash purchases.",
    },
  ],
  "bathroom-remodeling": [
    {
      title: "Pinterest-style creative with no project scope",
      description:
        "Inspiration ads attract DIY browsers, not homeowners ready for tub-to-shower conversions and permits.",
    },
    {
      title: "Estimate requests without budget qualification",
      description:
        "Forms skip timeline and budget fields, so sales chases $3k expectations on $25k remodels.",
    },
    {
      title: "Instagram reach limited to design lovers",
      description:
        "Algorithm favors aesthetic reels while accessibility and aging-in-place buyers never see your offer.",
    },
    {
      title: "Competing remodelers remarketing your visitors",
      description:
        "Without first-party audience strategy, competitors pixel the same local interest pools.",
    },
    {
      title: "Showroom traffic not tied to ad source",
      description:
        "Walk-ins get credit while paid social looks expensive.",
    },
    {
      title: "Seasonal slowdown treated as creative failure",
      description:
        "Budget cuts in winter ignore retargeting and financing angles that keep pipelines full.",
    },
  ],
  "kitchen-remodeling": [
    {
      title: "Cabinet promos pulling low-ticket leads",
      description:
        "Refacing offers dominate spend while full gut remodel inquiries need different creative and longer forms.",
    },
    {
      title: "Visual ads without layout or timeline clarity",
      description:
        "Homeowners love the photo but do not know if you handle structural, electrical, and permitting.",
    },
    {
      title: "Lookalikes built on past website traffic only",
      description:
        "Small retargeting lists in mid-size metros limit Meta’s ability to find renovation-ready households.",
    },
    {
      title: "Competing on appliance bundles instead of craftsmanship",
      description:
        "Big-box messaging trains audiences to compare on SKU deals, not design-build value.",
    },
    {
      title: "Consultation scheduling friction",
      description:
        "Lead forms stop at name and phone while design consults need photos, measurements, or inspiration uploads.",
    },
    {
      title: "Google search ignored for high-intent remodel terms",
      description:
        "Social-only plans miss “kitchen remodeler near me” searches with immediate project intent.",
    },
  ],
  "windows-doors-installation": [
    {
      title: "Lead forms missing home type and window count",
      description:
        "Without basic qualification, reps visit homes that only wanted one broken pane.",
    },
    {
      title: "Facebook offers copied from national brands",
      description:
        "Generic “40% off windows” creative trains skepticism and attracts comparison shoppers.",
    },
    {
      title: "Measurement appointments treated as conversions",
      description:
        "Platforms optimize for booked visits that cancel or no-show after aggressive telemarketing follow-up.",
    },
    {
      title: "Seasonal energy-saving angles under-tested",
      description:
        "Summer heat and winter draft messages stay static while utility rebates change by state.",
    },
    {
      title: "Video walkthroughs never used in ads",
      description:
        "Install proof and noise-reduction demos outperform stock product shots but rarely get tested.",
    },
    {
      title: "Territory overlap with dealer networks",
      description:
        "Geo conflicts waste spend where another authorized dealer already owns the ZIP.",
    },
  ],
  "plumbing-services": [
    {
      title: "Emergency and install leads in one campaign",
      description:
        "Burst-pipe urgency budgets get spent on water heater replacement browsers.",
    },
    {
      title: "Call-only ads without after-hours routing",
      description:
        "Nighttime clicks reach voicemail while competitors answer live.",
    },
    {
      title: "Discount drain cleaning offers attracting wrong CLV",
      description:
        "Cheap service promos fill the schedule but do not seed repipe or remodel opportunities.",
    },
    {
      title: "Location extensions misaligned with service area",
      description:
        "Homeowners outside your licensed counties still see “near me” messaging.",
    },
    {
      title: "Creative lacks trust signals for invasive work",
      description:
        "Licensed, insured, and review proof is buried while price-led ads dominate feeds.",
    },
    {
      title: "Job booking software not synced to ad reporting",
      description:
        "Dispatch closes jobs that ads never get credit for, so scaling decisions stall.",
    },
  ],
  "personal-injury-lawyers": [
    {
      title: "Lead forms that violate state bar rules",
      description:
        "Aggressive injury creative and implied guarantees trigger compliance reviews and account restrictions.",
    },
    {
      title: "Case quality hidden behind cheap CPL",
      description:
        "Volume vendors optimize for any form submit, not retained clients with viable claims.",
    },
    {
      title: "Retargeting accident keywords too broadly",
      description:
        "Sensitive event targeting creates brand risk and platform policy friction.",
    },
    {
      title: "Intake speed slower than competitor firms",
      description:
        "Strong Meta CPL fails when calls go to voicemail during peak accident hours.",
    },
    {
      title: "Creative mimicking news outlets",
      description:
        "“Breaking” style ads erode trust and invite disapproval in legal categories.",
    },
    {
      title: "Attribution wars between TV, search, and social",
      description:
        "Stakeholders cut Meta budget because CRM source fields stay manual and inconsistent.",
    },
  ],
  "cosmetic-surgery-clinics": [
    {
      title: "Procedure ads without surgeon authority",
      description:
        "Pretty clinic imagery underperforms when credentials, board certification, and facility accreditation are absent.",
    },
    {
      title: "Instagram policies limiting body-focused creative",
      description:
        "Rejection loops delay launches for liposuction, tummy tuck, and breast procedures.",
    },
    {
      title: "Consultation requests from out-of-country travelers",
      description:
        "Global reach settings waste spend on patients you cannot pre-op locally.",
    },
    {
      title: "Financing and recovery timelines omitted",
      description:
        "Prospects submit leads without understanding downtime, driving low show rates.",
    },
    {
      title: "Patient testimonial usage without consent workflow",
      description:
        "User-generated content risks HIPAA and platform violations.",
    },
    {
      title: "Competing on price with med-tourism offers",
      description:
        "Race-to-bottom promos attract shoppers, not surgical candidates ready for OR scheduling.",
    },
  ],
  "hair-transplant-clinics": [
    {
      title: "Sensitive health positioning in ad copy",
      description:
        "Hair restoration categories face extra scrutiny — vague claims or misleading density promises get flagged.",
    },
    {
      title: "Consultation leads lacking procedure fit",
      description:
        "Forms do not screen donor area, prior transplants, or medical history.",
    },
    {
      title: "Creative showing unrealistic density",
      description:
        "Over-edited results invite refunds, bad reviews, and ad disapprovals.",
    },
    {
      title: "International patient inquiries diluting local spend",
      description:
        "Broad targeting pulls travel patients when your team focuses on domestic consults.",
    },
    {
      title: "Weak privacy messaging on lead forms",
      description:
        "Embarrassment-sensitive prospects abandon forms that feel public or shared.",
    },
    {
      title: "No content funnel for research-phase men and women",
      description:
        "Single-step “free consult” ads miss audiences comparing FUE, FUT, and non-surgical options.",
    },
  ],
  "real-estate": [
    {
      title: "Listing ads without agent brand story",
      description:
        "Property carousel ads alone fail to capture seller listings and buyer representation leads.",
    },
    {
      title: "Lead forms missing pre-approval or timeline",
      description:
        "Buyer inquiries flood agents who cannot filter serious purchasers.",
    },
    {
      title: "Hyper-local farming ignored on Meta",
      description:
        "City-wide targeting wastes spend outside farm neighborhoods you dominate.",
    },
    {
      title: "Open house traffic not retargeted",
      description:
        "One-day events miss follow-up sequences for undecided attendees.",
    },
    {
      title: "Compliance issues with housing special categories",
      description:
        "Detailed targeting restrictions require careful audience and copy design.",
    },
    {
      title: "Zillow and Realtor.com leads mixed in reporting",
      description:
        "Paid social looks weak when CRM defaults attribute everything to portals.",
    },
  ],
  "insurance-services": [
    {
      title: "Quote requests without line-of-business clarity",
      description:
        "Auto, home, and life leads land in one inbox with no routing rules.",
    },
    {
      title: "Special ad category limits on Meta",
      description:
        "Credit and insurance campaigns face restricted targeting — copy-paste B2C tactics fail.",
    },
    {
      title: "Creative promising savings without licensed disclaimers",
      description:
        "State-specific compliance language missing from images and primary text.",
    },
    {
      title: "Call center speed-to-lead slower than aggregators",
      description:
        "Facebook leads age while online quote engines instant-bind competitors.",
    },
    {
      title: "Remarketing lists too small for multi-policy households",
      description:
        "Short windows miss life events that trigger bundling opportunities.",
    },
    {
      title: "Offline bound policies not imported to ads",
      description:
        "Algorithms never learn which lead types actually premiumize.",
    },
  ],
  "mortgage-home-loans": [
    {
      title: "Rate-focused ads violating fair lending perception",
      description:
        "Teaser rates without APR context create compliance risk and mistrust.",
    },
    {
      title: "Special category restrictions on housing audiences",
      description:
        "Lookalike and interest stacks from 2019 no longer apply — creative must do the targeting work.",
    },
    {
      title: "Refi and purchase intent blended",
      description:
        "One funnel mixes homeowners exploring cash-out with first-time buyers needing education.",
    },
    {
      title: "Lead forms skipping credit and timeline questions",
      description:
        "Loan officers chase unqualified inquiries that never reach application.",
    },
    {
      title: "Long close cycles break short attribution windows",
      description:
        "Meta looks expensive when fundings happen 45 days after the first click.",
    },
    {
      title: "Co-marketing with realtors not tracked",
      description:
        "Partner referrals obscure which ad creative sourced the borrower.",
    },
  ],
  "water-damage-restoration": [
    {
      title: "Emergency keywords bid up without local proof",
      description:
        "Generic “water damage” creative loses to franchises with 24/7 dispatch branding.",
    },
    {
      title: "Calls routed to office lines during floods",
      description:
        "After-hours disasters go to competitors when ads do not connect to on-call teams.",
    },
    {
      title: "Mold and mitigation services advertised together",
      description:
        "Different urgency levels and price points need separate ad sets and landing pages.",
    },
    {
      title: "Geo fences too tight during wide-area storms",
      description:
        "Hyper-local radius misses adjacent counties with the same weather event.",
    },
    {
      title: "Insurance claim guidance missing from ads",
      description:
        "Homeowners hesitate without copy that explains documentation and adjuster coordination.",
    },
    {
      title: "Job management systems not feeding conversions",
      description:
        "Restoration CRM completions stay invisible to Facebook optimization.",
    },
  ],
  "foundation-repair": [
    {
      title: "Fear-based creative without engineering credibility",
      description:
        "Crack photos alone do not explain pier systems, warranties, or inspection process.",
    },
    {
      title: "Free inspection leads with no structural urgency",
      description:
        "Cosmetic crack inquiries consume estimator time away from heave and settlement jobs.",
    },
    {
      title: "Seasonal soil movement ignored in messaging",
      description:
        "Dry vs. wet season angles stay static while homeowner concern peaks differ.",
    },
    {
      title: "Broad homeowner targeting vs. property age filters",
      description:
        "New builds receive ads meant for aging slab and pier-and-beam homes.",
    },
    {
      title: "Competing franchise disclaimers in remarketing",
      description:
        "Prospects compare three foundation offers because shared audiences overlap.",
    },
    {
      title: "Long sales cycles after engineering reports",
      description:
        "Without offline conversion imports, Meta pauses winners too early.",
    },
  ],
  "pest-control": [
    {
      title: "One-off treatment promos vs. recurring revenue",
      description:
        "Discount termite inspections attract one-time buyers, not annual plan subscribers.",
    },
    {
      title: "Seasonal pest narratives untested",
      description:
        "Ants, rodents, and mosquitoes need different creative calendars — one ad set cannot cover the year.",
    },
    {
      title: "Service area polygons misdrawn",
      description:
        "Suburban sprawl leads include rural properties outside economical routes.",
    },
    {
      title: "Fear creative triggering ad policy flags",
      description:
        "Close-up insect imagery can limit delivery in family feeds.",
    },
    {
      title: "Call tracking on shared main lines",
      description:
        "Office staff cannot tie inbound calls to the Instagram ad that triggered them.",
    },
    {
      title: "Upsell paths missing from landing pages",
      description:
        "Rodent leads never see attic insulation or moisture control add-ons.",
    },
  ],
  "landscaping-services": [
    {
      title: "Inspiration reels without install capacity cues",
      description:
        "Viral patio content books more consults than crews can build before fall.",
    },
    {
      title: "Mowing leads mixed with hardscape projects",
      description:
        "Maintenance promos starve budget for outdoor living and irrigation installs.",
    },
    {
      title: "Weather-dependent creative running year-round",
      description:
        "Snow regions still push planting ads in winter without greenhouse or planning angles.",
    },
    {
      title: "Portfolio photos lacking location tags",
      description:
        "Prospects assume you serve their town when work was three counties away.",
    },
    {
      title: "Quote forms missing lot size and scope",
      description:
        "Designers visit properties that only wanted weekly lawn service.",
    },
    {
      title: "Referral word-of-mouth not modeled in ads",
      description:
        "Happy clients never seed lookalikes because CRM tags stay empty.",
    },
  ],
  "pool-installation": [
    {
      title: "Dream pool creative without budget framing",
      description:
        "Luxury renders attract inquiries far below your minimum project size.",
    },
    {
      title: "Permit and timeline questions absent from forms",
      description:
        "Homeowners expect summer swim dates without understanding build duration.",
    },
    {
      title: "Renovation vs. new build funnels combined",
      description:
        "Resurfacing and equipment upgrades need different offers than gunite construction.",
    },
    {
      title: "Seasonality misread as poor ad performance",
      description:
        "Winter planning campaigns get cut when they should nurture spring contracts.",
    },
    {
      title: "Drone footage never split-tested against static",
      description:
        "High-production video underused while stock lagoon photos fatigue.",
    },
    {
      title: "Financing and HOA copy missing locally",
      description:
        "Subdivision rules kill deals that ads never pre-qualified.",
    },
  ],
  "flooring-installation": [
    {
      title: "Sample request spam from distant zip codes",
      description:
        "Free sample offers pull national traffic outside install territories.",
    },
    {
      title: "Material trends advertised without install expertise",
      description:
        "LVP and hardwood ads look like big-box retail, not craftsman installers.",
    },
    {
      title: "Square footage not collected on lead forms",
      description:
        "Sales quotes blind without room count and subfloor context.",
    },
    {
      title: "Before/after photos without room type labels",
      description:
        "Kitchen vs. whole-home scope stays unclear until the walkthrough.",
    },
    {
      title: "Google Local Services ignored for urgent repairs",
      description:
        "Social prospecting runs while search captures “floor repair near me.”",
    },
    {
      title: "Low-show appointments after sample drop-offs",
      description:
        "No reminder or retargeting sequence after samples ship.",
    },
  ],
  "painting-contractors": [
    {
      title: "Exterior seasonality ignored in Instagram plans",
      description:
        "Interior promos run during peak exterior weather, splitting crew focus.",
    },
    {
      title: "Cabinet niche buried in general painting ads",
      description:
        "High-margin refinishing offers compete with basic room repaint coupons.",
    },
    {
      title: "Lead forms missing project photos",
      description:
        "Estimators arrive without knowing prep level, height, or color complexity.",
    },
    {
      title: "Before/after creative over-filtered",
      description:
        "Unrealistic color pop triggers skepticism and policy scrutiny.",
    },
    {
      title: "Neighborhood hero campaigns too wide",
      description:
        "City targeting misses the HOA and block clusters where referrals spread.",
    },
    {
      title: "Reviews and warranty copy below the fold",
      description:
        "Price-led ads win clicks but lose trust on landing pages.",
    },
  ],
  "garage-door-services": [
    {
      title: "Repair and replacement messages in one ad set",
      description:
        "Spring replacement tickets get priced like quick opener fixes.",
    },
    {
      title: "Emergency creative without true dispatch SLA",
      description:
        "“Same day” claims hurt reviews when parts are back-ordered.",
    },
    {
      title: "Home age targeting omitted",
      description:
        "New subdivisions see ads meant for aging door and opener upgrades.",
    },
    {
      title: "Commercial leads mixed with residential forms",
      description:
        "Warehouse roll-up inquiries clog residential scheduler queues.",
    },
    {
      title: "Video of quiet openers underused",
      description:
        "Noise and smart-home angles differentiate but rarely get tested.",
    },
    {
      title: "Call extensions billing wrong department",
      description:
        "Sales line clicks counted when service techs answered install questions.",
    },
  ],
  "auto-detailing-ceramic-coating": [
    {
      title: "Ceramic packages advertised to daily-driver budgets",
      description:
        "Premium coating creative attracts shoppers expecting $199 wash-and-wax.",
    },
    {
      title: "Instagram carousels without shop credibility",
      description:
        "Glossy reels miss certifications, bay lighting, and brand partnerships.",
    },
    {
      title: "Calendar booking links sending mobile traffic away",
      description:
        "Extra taps drop completion rates on in-feed lead forms.",
    },
    {
      title: "Fleet and consumer campaigns shared",
      description:
        "B2B dealership detail bids skew metrics for consumer ceramic funnels.",
    },
    {
      title: "Weather windows ignored for paint correction",
      description:
        "Outdoor shoots run campaigns when humidity ruins coating cure.",
    },
    {
      title: "Membership and maintenance upsells missing",
      description:
        "One-time detail leads never see recurring interior care offers.",
    },
  ],
  "senior-home-care": [
    {
      title: "Sensitive caregiving copy treated like retail promos",
      description:
        "Discount language feels disrespectful to families making care decisions.",
    },
    {
      title: "Lead forms without care level or hours needed",
      description:
        "Intake teams chase vague “need help” submissions.",
    },
    {
      title: "Targeting caregivers vs. seniors unclear",
      description:
        "Adult children and spouses respond to different messages and CTAs.",
    },
    {
      title: "Compliance with healthcare advertising norms",
      description:
        "Claims about medical tasks need careful wording to avoid policy issues.",
    },
    {
      title: "Local trust signals buried",
      description:
        "Background checks, training, and supervisor visits belong in primary creative.",
    },
    {
      title: "Long decision cycles abandoned after one touch",
      description:
        "Families research for weeks — single-form campaigns stop nurturing too soon.",
    },
  ],
  "physical-therapy-chiropractic": [
    {
      title: "Pain relief promises edging into medical claims",
      description:
        "Facebook reviews ad copy that implies guaranteed outcomes or cure language.",
    },
    {
      title: "Insurance and cash-pay paths not separated",
      description:
        "Mixed offers confuse patients about benefits verification.",
    },
    {
      title: "New patient specials attracting one-visit churn",
      description:
        "Low-ticket promos fill slots without plan-of-care adherence.",
    },
    {
      title: "Referring physician relationships omitted",
      description:
        "Hospital and PCP trust angles underused in local awareness ads.",
    },
    {
      title: "Appointment software not tied to ad source",
      description:
        "Front desk manual entry hides which creative drove bookings.",
    },
    {
      title: "Video demos of techniques never tested",
      description:
        "Educational motion content underperforms static clinic photos by default.",
    },
  ],
  "weight-loss-clinics": [
    {
      title: "Before/after imagery heavily restricted",
      description:
        "Medical weight loss ads face policy limits on body transformation creative.",
    },
    {
      title: "GLP-1 interest without clinical screening",
      description:
        "Forms skip contraindications, producing consults clinicians must decline.",
    },
    {
      title: "Comparing programs on price alone",
      description:
        "Race-to-bottom coupons undermine medically supervised positioning.",
    },
    {
      title: "Telehealth vs. in-clinic offers combined",
      description:
        "Different regulatory and state license rules need split funnels.",
    },
    {
      title: "Testimonial usage without proper disclaimers",
      description:
        "Individual results language missing from landing pages.",
    },
    {
      title: "Short funnels for long treatment adherence",
      description:
        "One lead form does not nurture months-long patient journeys.",
    },
  ],
  "moving-companies": [
    {
      title: "Long-distance and local moves in one form",
      description:
        "Van line inquiries get quoted like hourly local jobs.",
    },
    {
      title: "Lead forms missing move date and inventory size",
      description:
        "Sales teams cannot prioritize booked trucks vs. tire-kickers.",
    },
    {
      title: "Seasonal demand spikes handled with static budgets",
      description:
        "End-of-month and summer peaks need flexible caps and creative rotation.",
    },
    {
      title: "Trust badges lost among discount movers",
      description:
        "Licensed, insured, and BBB proof should lead — not $199 gimmicks.",
    },
    {
      title: "Negative review bombs ignored in ad comments",
      description:
        "Unmoderated social proof scares off high-value household moves.",
    },
    {
      title: "Completed move revenue not uploaded offline",
      description:
        "Meta keeps optimizing for quote requests that never book.",
    },
  ],
  "cleaning-services": [
    {
      title: "Deep clean promos cannibalizing recurring clients",
      description:
        "One-time discounts fill routes but do not convert to weekly plans.",
    },
    {
      title: "Move-out cleaning urgency mis-timed in ads",
      description:
        "Campaigns run mid-month instead of aligning with lease turnover peaks.",
    },
    {
      title: "Service area sprawl for solo teams",
      description:
        "Wide radius leads force long drives that erase margin.",
    },
    {
      title: "Before/after photos without room context",
      description:
        "Prospects cannot tell if you handle post-construction vs. standard homes.",
    },
    {
      title: "Instagram aesthetic over clear pricing structure",
      description:
        "Pretty reels hide minimums and hourly policies until friction at booking.",
    },
    {
      title: "Employee vs. owner-operator trust not addressed",
      description:
        "Background checks and bonding belong in primary ad text for in-home work.",
    },
  ],
  "home-security-systems": [
    {
      title: "Equipment price wars vs. monitored service value",
      description:
        "DIY kit ads attract shoppers who never commit to monthly monitoring.",
    },
    {
      title: "Smart home integrations buried in generic alarm copy",
      description:
        "Camera, doorbell, and automation bundles need feature-led creative.",
    },
    {
      title: "Renters seeing homeowner-only install offers",
      description:
        "Audience and copy misalignment wastes spend on non-buyers.",
    },
    {
      title: "False urgency on crime stats without local data",
      description:
        "Fear tactics erode brand trust and can trigger ad disapprovals.",
    },
    {
      title: "Consultation scheduling without property type questions",
      description:
        "Technicians arrive unprepared for multi-family vs. single-family layouts.",
    },
    {
      title: "Contract length and cancellation terms missing",
      description:
        "Leads feel bait-and-switched when sales reveals term commitments.",
    },
  ],
};

export function painPointsKeywordFromMetaTitle(metaTitle: string): string {
  return metaTitle.replace(/\s*\|\s*Lead Generation\s*$/i, "").trim();
}
