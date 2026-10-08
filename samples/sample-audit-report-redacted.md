# AI Visibility Audit Report (redacted sample)

**Client:** A technical consultancy, Western Massachusetts (name withheld)
**Property:** the client's marketing site (domain withheld; shown as example.com where a URL is needed)
**Engagement:** AI Visibility Audit (Technical + AI Visibility)
**Report date:** 2026
**Prepared by:** Sojutech, LLC
**Baseline window:** two consecutive days | **Re-measurement:** 90 days after baseline


---

## 1. Executive summary

the client's website is technically sound in its bones: a fast-loading static architecture on reliable hosting, indexed correctly, with clean canonical behavior and accurate representation across AI platforms when asked about the brand by name. The problems are not in what the site is. They are in what surrounds it and what it fails to say.

Three findings dominate this audit.

First, the trust gap. Every AI platform tested answers "is the client legit" with some version of "probably, but there is limited independent evidence." There are no reviews anywhere: no Google profile, no Clutch listing, nothing third parties can point to. AI answers now quote that absence back to prospective buyers.

Second, the visibility gap. Of 110 total query runs, 98 were non-brand buyer-intent runs, and the client appeared in exactly one of them. That single appearance matters (see finding 4.2), but the footprint is effectively zero, and thin footprints do worse than stay invisible: at least one engine filled the gaps by inference, and another answered questions about the client with information about a different company entirely.

Third, mobile performance. Desktop scores 94; mobile scores 61, with a Largest Contentful Paint of 5.3 seconds and layout shift well beyond acceptable thresholds. The causes are identified, cheap, and fixable within days.

The 90-day roadmap in section 6 addresses all three. Nothing in it requires a rebuild, a redesign, or a large budget. It requires an entity package, a set of static files, image and font discipline, reviews from real clients, and content that answers the questions buyers are actually asking AI platforms. This report includes three fully specified fix tickets as samples of the implementation standard; the complete Implementation Spec Pack accompanies this engagement.

A note on method and expectations: no one can guarantee placement in AI answers, and anyone who promises rankings or citations is not telling the truth. What this engagement guarantees is a documented, reproducible measurement methodology and honest reporting of what moves and what does not. AI visibility typically begins shifting within 4 to 8 weeks of remediation; the 90-day re-measurement is a checkpoint, not a verdict.

## At a glance: this week, in order

1. Ask an agency client and a software client for a Google review AND a Clutch reference in one combined request (unblocks R1 and R2 together; these have approval lag, so the asks go out first)
2. Start the Cloudflare deployment (R4): DNS propagation and profile approvals are the long poles
3. Create the Google Business Profile (service-area business, address hidden) and Clutch profile (R1)
4. Publish robots.txt, sitemap, llms.txt (R2, one hour)
5. Fix the mobile performance causes (R3, one day: image dimensions, single-logo delivery, icon subset, font strategy, LCP preload)

Everything else is sequenced in section 6. If only the five items above happen this week, the engagement is on track.

## 2. Scope, method, and environment

**Measured:** 28 buyer-intent queries across 4 platforms (ChatGPT with search, Perplexity, Gemini, Google AI Overviews), 110 completed runs, single pass per query-platform cell. What that sample supports: the aggregate visibility conclusion is robust (0-1 mentions across 98 independent non-brand samples). What it does not support: per-query rates. Individual-cell results, including single-response findings, are presence/absence tendencies, and are described as such. The day-90 re-measurement adds a variance sub-study (7 queries run three times each) to quantify run-to-run variability directly. Queries were constructed from the intake (services, ideal customer profile, geography) in five buckets: agency-buyer (10), founder (3), direct/local (7), regional (5), brand (3). Full responses were captured verbatim for every run. Derived fields (mentions, citations, competitors, sources) were machine-extracted and human spot-checked.

**Environment controls:** all runs executed from a US location in fresh sessions. Six early ChatGPT runs were contaminated by a Canada VPN location, detected through .ca domain and CAD pricing signals in the responses, re-run from the US, and logged in the query changelog. Location is treated as a controlled variable throughout: client baselines run from the client's buyer geography.

**Technical inspection:** full source review (repository access), header analysis, PageSpeed Lighthouse runs (mobile and desktop), securityheaders.com scan, isitagentready.com scan, Search Console review, DNS and hosting configuration review.

**Instrument notes, reported for transparency:** two Google AI Overview runs did not trigger (recorded as results, not gaps); run-level date stamps were not captured in this baseline (process gap, corrected for all future measurement); prompt-level search volume data does not exist as a public dataset, so query selection reflects buyer language and empirical response behavior rather than claimed volume numbers; and because AI responses vary between identical runs, single-pass cells capture tendency, not rate (see Measured, above).

## 3. Baseline visibility results

| Bucket | Runs | Mentioned | Cited |
|---|---|---|---|
| Agency-buyer | 40 | 0 | 0 |
| Founder | 12 | 0 | 0 |
| Direct/local | 26 | 0 | 0 |
| Regional | 20 | 1 | 1 |
| Brand | 12 | 12 | 7 |

Non-brand visibility: approximately 1 percent. Brand-name visibility: complete and accurate. The gap between those two rows is the entire engagement.

## 4. Findings

Severity scale: critical (actively costing trust or revenue), high (materially limits visibility or performance), medium (meaningful but not urgent), low (hygiene).

**The brand representation gap (synthesis of findings 4.1-4.4).** Together, the first four findings measure one thing: the distance between what the client says it is (the intake and the site's positioning) and what AI systems currently represent it as (uncertain legitimacy, confusable with other entities, details filled in by inference, absent from buyer questions). This gap is measurable, it is now the default first impression for any buyer who checks, and closing it is the core of the engagement.

### 4.1 CRITICAL: The trust gap

On "the client reviews" and "is the client legit," all four platforms converge on cautious uncertainty. ChatGPT stated there is not enough independent public review evidence to give the company a reputation score. Perplexity advised hypothetical buyers to demand references, role-clarified portfolio evidence, written scope, and staged payments before engaging. These are reasonable instructions. They are also now the default first impression for any buyer who checks.

There is no Google Business Profile, no Clutch listing, no reviews on any platform, and a bare Bizapedia record. The absence of third-party evidence is not neutral; it is the content of the AI's answer.

**Action:** create a Google Business Profile as a service-area business (address hidden) and a Clutch profile; obtain three to five reviews from current and past clients. Roadmap items R1, R2.

### 4.2 HIGH: The visibility gap, and the one exception that proves the positioning

Zero appearances across agency-buyer, founder, and local queries. The single organic appearance: ChatGPT, asked for a "technical consultant for marketing agencies Massachusetts," surfaced the client unprompted, called it probably the closest match to the query's wording, and cited example.com. The site's positioning language is being read and matched by at least one engine when a query lands near it. The message works. The footprint does not exist. Remediation is therefore footprint construction, not repositioning.

**Action:** entity package, content program, targeted third-party presence. Roadmap items R1, C1-C4, O1-O2.

### 4.3 HIGH: Name-collision cluster and inherited reputation

Three confusable entities surfaced during brand queries. a similarly named site, a site flagged by ScamAdviser with scam allegations on Trustpilot, was explicitly disambiguated by ChatGPT, which nonetheless placed the word "scam" inside an answer about the client. a similarly named company, a large Canadian AV company, hijacked two answers outright: Google's AI Overview answered the reviews query about a similarly named company and embedded a a similarly named company video in the legitimacy answer. Sojitech, a Vietnamese industrial firm, appeared as a third confusable.

A thin entity footprint does not merely produce absence. It invites misdirection and inherited reputation. Entity disambiguation here is active defense, not hygiene.

**Action:** structured data with a complete sameAs array (the four live social profiles are already on the page and unreferenced by the schema), consistent NAP, GBP, authoritative profiles. Sample fix ticket 1 specifies the schema work in full. Roadmap item R1.

### 4.4 HIGH: AI inference fills thin footprints

Gemini stated that the client operates enterprise-focused brands "like an internal brand." an internal brand is a dormant internal the client brand shown on the site as a portfolio item; the operational relationship Gemini asserted is never stated anywhere. The inference happened to be substantively true. It could as easily not have been. When source material is thin, engines interpolate, and the interpolations become the public profile. The audit's implication: manage what is inferable from your surfaces, not only what is stated.

Related transparency note: the portfolio presents an internal brand alongside client work without labeling it as an internal venture, and one portfolio item links to a legacy subdomain from a previous company name. Both are small credibility risks for a brand whose differentiation is honesty.

**Action:** label or relocate an internal brand; consolidate the legacy domain estate with 301 redirects (preserving the rebrand continuity signal Perplexity already reads correctly). Roadmap items R5, R6.

### 4.5 HIGH: Mobile performance

Lighthouse mobile: 61. Largest Contentful Paint 5.3 seconds (threshold: 2.5). Cumulative Layout Shift 0.284 (threshold: 0.1). Desktop: 94. No field data exists in CrUX because traffic is below threshold, which is itself a datapoint about current visibility.

Identified causes, all visible in source: hero logo images without width and height attributes (the layout shift); both dark-theme and light-theme logo variants loading on every visit regardless of theme; the complete Font Awesome library loaded render-blocking from a CDN to serve roughly eight icons; Google Fonts in the critical rendering path; no fetch priority or preload on the LCP image.

**Action:** image attributes, conditional or combined logo delivery, icon subsetting or inline SVG, font loading strategy, LCP preload. Estimated one focused day. Roadmap item R3.

### 4.6 MEDIUM-HIGH: Security headers, grade D

securityheaders.com scan, the baseline dates: HSTS present (served by GitHub). Missing: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. CORS policy is wide open (access-control-allow-origin: *), acceptable for a public static site but flagged.

GitHub Pages provides no mechanism to set response headers. The remediation is architectural: place Cloudflare (free tier) in front of the site and set headers via Transform Rules. The same move provides the redirect layer for the the previous company name consolidation, caching control, and a deliberate, documented AI-crawler allow policy in place of today's accidental default.

**Action:** Cloudflare deployment. Roadmap item R4.

### 4.7 MEDIUM: Machine-readable surface absent

No robots.txt, no XML sitemap, no llms.txt. isitagentready.com score: 0 of 100. The absence of robots.txt means crawlers are allowed by default, which is why AI engines could read the site at all: unblocked by accident rather than policy. The sitemap becomes material the moment content pages exist. llms.txt and related signals are labeled honestly: cheap insurance on emerging standards, with no evidence of major-platform consumption today, recommended because the cost is minutes.

**Action:** three static files plus content signals. Roadmap item R2 (partial), included in sample scope.

### 4.8 MEDIUM: Conversion plumbing

The contact form (Formspree) works but fires no analytics event; GTM and GA4 are installed but no conversion is defined, so form submissions are invisible in analytics and no lead can be traced to a source. There is one call to action on the page; for a single-page site this is acceptable, but each future content page will need its own path to contact. SMS consent language is present and correct.

**Action:** thank-you flow plus GA4 conversion event. Sample fix ticket 2 specifies this in full. Roadmap item R7.

### 4.9 MEDIUM: Content answers none of the questions buyers ask

The site is a well-written single page of positioning prose. It answers no informational query directly: nothing defines a technical audit, fractional technical leadership, white-label development, or GEO, in a market where the baseline showed definition-style responses dominating several query categories with no established provider ecosystem behind them. Those categories are unclaimed. Structured, answer-first content claims them.

**Action:** content program, seven pieces specified, sequenced in the roadmap. Items C1-C4.

### 4.10 LOW: Hygiene items

The meta description contains an em dash (house style violation). Additional schema types (ProfessionalService, areaServed, founder) are absent alongside the missing sameAs. The Instagram handle differs from the other social handles; minor, worth knowing. Social profiles exist but are dormant; dormant is acceptable for sameAs purposes, and the LinkedIn company page warrants light activity because LinkedIn appeared as a citation source four times in the baseline.

### 4.11 Reported clean

Canonicalization is correct (www and http variants 301 to the canonical, verified; Search Console exclusions are healthy redirect behavior). Indexing is clean, no manual actions. Rendering requires no JavaScript; all content is server-delivered by construction. Desktop performance is strong. HSTS is present. The site's representation in AI brand answers is accurate, including the the previous company name rebrand history. Accessibility scores 96 on both form factors.

## 5. Competitive and citation landscape

The recurring names in buyer-query answers are volume white-label shops (GetDevDone, The White Label Agency, DoodleWeb, Resourcifi) and, on founder queries, marketplaces (Toptal). Regional queries surface Boston-area agencies. No answer in 110 runs described anything resembling a senior embedded technical partner with AI visibility capability. The differentiation lane is empty.

The citation surface is fragmented: the most-cited domain appeared in only 4 of 110 runs, and no gatekeeper directory dominates these categories the way legal directories dominate law. Competitors earn citations primarily by publishing structured comparison content on their own domains. Implication: a small set of profile placements (LinkedIn, Clutch, GBP) plus answer-first content on example.com covers a meaningful share of the citation surface at near-zero outreach cost. Fragmentation favors small players.

## 6. The 90-day roadmap

Ordered by priority within each track. Effort is calendar-realistic for one senior operator.

### Implement now (weeks 1-2)

- **R1. Entity package.** Expanded structured data with sameAs (ticket 1), Google Business Profile as service-area business, Clutch profile, LinkedIn company page completeness, NAP consistency pass. Effort: 1 day plus profile approval lag.
- **R2. Reviews and machine-readable surface.** Request 3-5 reviews from current clients and past collaborators, combined with Clutch reference requests in a SINGLE ask per client (Clutch verification requests client references; sequencing the two asks together avoids asking the same people twice). Publish robots.txt (explicit allow-all including named AI crawlers), XML sitemap, llms.txt. Effort: half day plus the asks.
- **R3. Mobile performance pass.** Image dimensions, single-logo delivery, icon subset or inline SVG, font strategy, LCP preload. Target: mobile 90+, CLS under 0.1, LCP under 2.5s. Effort: 1 day.
- **R4. Cloudflare deployment.** DNS move from Porkbun-direct to Cloudflare (registrar stays), security headers via Transform Rules (target grade A), the previous company name 301s, documented AI-crawler allow policy. Effort: half day plus DNS propagation.
- **R5. Portfolio transparency.** Label an internal brand as an internal venture or relocate it. Effort: 30 minutes.
- **R6. Legacy domain consolidation.** 301 the legacy domain to example.com via Cloudflare (preserves the rebrand continuity signal Perplexity already reads correctly); update a legacy portfolio credit to the client's current name; plan the legacy subdomain migration. Effort: 1-2 hours after R4.
- **R7. Conversion tracking.** Thank-you flow and GA4 conversion event (ticket 2). Effort: 2 hours.

### Needs content (weeks 2-10, sequenced): the content architecture

Content items are derived from the baseline, not brainstormed. Each page targets specific measured queries where definition-style answers dominate and no provider is established. The map:

| Page (under new /insights/ structure) | Targets baseline queries | Why |
|---|---|---|
| C1. What is a technical website audit (and what should it include) | Q17 "GEO audit for small business" adjacency, audit-intent phrasings | Unclaimed definition category, direct service relevance |
| C2. What is fractional technical leadership | Q9, Q12, Q13, Q15 (embedded lead / fractional CTO / founder phrasings) | Four measured queries, zero established providers |
| C3. The SSR vs dynamic schema debate is missing the point | Expertise/citation-bait; supports Q10, Q19 (GEO partner queries) | Flagship demonstration; competitors win citations with exactly this content type |
| C4. How AI visibility is measured (and what nobody can measure) | Q18, Q19 (how-to-get-mentioned, what-is-GEO) | Methodology honesty piece; doubles as sales education |

Structural requirements, all pages: answer-first (definition in the first two sentences), H2s phrased as the target questions, FAQPage schema where eligible plus Article schema, internal links to services and contact, sitemap updated per publish. Sample content ticket: Ticket 3 below. Editorial voice and brand narrative remain the owner's (for the client, our own; for white-label clients, the agency's). Effort: one piece per 1-2 weeks alongside other work.

### Needs outreach (weeks 4-12, deliberately light)

- **O1.** Profile placements are the outreach: GBP, Clutch, LinkedIn (covered in R1-R2).
- **O2.** Two or three listicle or roundup inclusions if opportunities arise organically. The fragmented citation surface does not reward heavy outreach spend; effort caps at a few hours.

### Re-measurement (week 12-13)

Full 28-query locked-set re-run, identical platforms, US-MA environment, per-row dates and environment logged. Variance sub-study: the 3 brand queries plus 4 key buyer queries run three times each to quantify run-to-run variability, reported alongside the before/after. Grader and scanner re-runs for secondary scores. Honest write-up of movement and non-movement, with movement interpreted against measured variance.

## 7. Sample fix tickets

The following three tickets demonstrate the implementation specification standard, on technical work (tickets 1-2) and content work (ticket 3). The complete Implementation Spec Pack contains a ticket at this level of detail for every roadmap item.

---

### Ticket 1: Entity schema with disambiguation (R1 partial)

**Objective:** replace the minimal Organization schema with a disambiguation-grade entity block that connects the client to its verified profiles and attributes, directly countering the name-collision findings (4.3, 4.4).

**File:** index.html, replacing the existing application/ld+json Organization block.

**Implementation:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://example.com/#organization",
  "name": "<Legal Name>, LLC",
  "alternateName": "<Brand>",
  "url": "https://example.com",
  "logo": "https://example.com/assets/logo.png",
  "description": "Fractional technical leadership for marketing agencies and growing businesses. Web development, technical SEO and schema, AI visibility, performance, and infrastructure.",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Western Massachusetts" },
    { "@type": "Country", "name": "United States" }
  ],
  "knowsAbout": [
    "Technical SEO",
    "Schema.org structured data",
    "Generative engine optimization",
    "WordPress architecture",
    "Web performance optimization",
    "Cloudflare configuration"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/<handle>/",
    "https://www.facebook.com/<handle>",
    "https://www.instagram.com/<handle>",
    "https://x.com/<handle>"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@example.com",
    "contactType": "sales",
    "areaServed": "US"
  }
}
</script>
```

**Notes:** add the GBP profile URL and Clutch profile URL to sameAs as soon as each exists (R1). Do not add address fields while operating without a public address; areaServed carries the geography. If a founder or About section ships later, add a founder Person entity with its own @id and link it here.

**Validation:** passes Google Rich Results Test and Schema.org validator with zero errors or warnings; sameAs URLs all return 200; re-crawl requested via Search Console after deploy.

**Done looks like:** validator screenshots archived in /methodology; block present in production source; Search Console shows the updated structured data on next crawl.

---

### Ticket 2: Form conversion tracking (R7)

**Objective:** make form submissions measurable and attributable. Currently Formspree submissions fire no analytics event; leads are invisible in GA4 (finding 4.8).

**Approach:** AJAX submission with a dataLayer event (preserves the single-page experience; avoids dependence on Formspree redirect behavior).

**Implementation:**

1. Intercept the form's submit event; send the POST to Formspree via fetch with an Accept: application/json header.
2. On success (HTTP 200), push to dataLayer:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "contact_form_submit",
  form_id: "contact"
});
```

3. Replace the form in the DOM with a confirmation message ("Got it. We read everything and reply within one business day.").
4. On failure, show an inline error with the direct email address as fallback.
5. In GTM: create a Custom Event trigger for contact_form_submit firing a GA4 event tag (event name: generate_lead).
6. In GA4: mark generate_lead as a key event (conversion).

**Validation:** test submission from a clean profile arrives in Formspree AND appears in GA4 Realtime as generate_lead; confirmation message renders; error path tested by submitting with network blocked.

**Done looks like:** one test lead visible end to end (form, Formspree, GA4 key event) with screenshots archived; the test submission deleted from Formspree.

---

### Ticket 3: Content architecture spec, C2 (sample content ticket)

**Objective:** claim the unclaimed definition category measured at baseline queries Q9, Q12, Q13, and Q15, where all four platforms returned generic explainer answers citing no providers.

**Page:** /insights/what-is-fractional-technical-leadership/

**Target queries (from the locked baseline set):** "embedded technical lead for agencies" (Q9), "fractional CTO for non-technical founder" (Q12), "technical partner for startup without a CTO" (Q13), "fractional technical leadership for small business" (Q15).

**Structure specification:**
1. H1: What Is Fractional Technical Leadership?
2. First two sentences: the complete definition, extractable standalone (an AI should be able to lift them verbatim as an answer)
3. H2 sections phrased as the target questions: "What does a fractional technical leader actually do?", "Fractional CTO vs. agency vs. full-time hire: which fits?", "What does fractional technical leadership cost?", "When is a business ready for one?"
4. Each H2 section opens answer-first (2-3 sentence direct answer), then depth
5. Comparison table (fractional vs. agency vs. full-time: cost, commitment, seniority, fit) - comparison-structured content is what earns citations in this category per the baseline's source analysis
6. Internal links: services section, contact; one link each to C1 and C4 when published
7. Length: 1,100-1,400 words. Voice: per the owner's editorial direction (plain, senior, zero hype)

**Schema:** Article (headline, datePublished, author -> Organization @id) plus FAQPage covering the four H2 questions with their answer-first paragraphs as acceptedAnswer text. Validates clean in Rich Results Test.

**Validation:** extractability test - paste the page text to an LLM and ask each target question; the model should be able to answer from the page alone. Rich Results Test passes. Page in sitemap, indexed within two weeks (request via Search Console).

**Done looks like:** page live, schema validated, sitemap updated, extractability test screenshots archived, queries Q9/Q12/Q13/Q15 flagged for attention in the day-90 re-run.

---

## 8. What we did not find, and what we do not promise

No security compromise, no penalties, no indexing pathology, no rendering problems, no structural rebuild required. And no promises: this report contains no guarantee of rankings, citations, or AI answer placement, because no honest practitioner can make one. It contains a measured starting point, a prioritized plan, and a re-measurement date. The next version of the numbers arrives in November, and it will be published either way.

---

*Prepared under the Sojutech Deep Audit methodology. Query changelog, extracted baseline data, and environment logs are archived in the engagement repository and available on request.*
