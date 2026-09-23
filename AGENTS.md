## What this repo is
Static HTML site for Sojutech, LLC (sojutech.com). Deployed via GitHub
Pages behind Cloudflare. Pages are extensionless (/services, not
/services.html). index.md is a live markdown mirror of the homepage and
must be updated whenever homepage copy changes.

## House style, always
- No em dashes or non-typeable characters anywhere: HTML, JSON-LD, meta,
  CSS comments. Straight quotes only.
- Do not rewrite, polish, or add copy. Copy comes from the owner verbatim.
- FAQPage JSON-LD text must be character-identical to the visible FAQ
  text on the same page.
- One h1 per page. Entity JSON-LD block identical on every page.
- Never commit to master directly. Never push or deploy unless told to.

## Implementation ticket sets
Work sometimes arrives as a ticket set: a markdown file named like
CSZ07-ticket-set.md, produced by Sojutech's audit process. Structure:
- A summary table (ID, ticket, column, priority, status, effort, owner).
- One section per ticket with: Status, What, Why (finding reference),
  Priority/Effort/Owner, Exact artifacts (code, config, records), a
  Validation block (commands or checks), Done looks like, QA.
- Ticket ID prefixes: R = implement now, C = needs content, O = needs
  outreach, M = re-measurement.

How to execute a ticket set:
- First, read the whole file and propose a plan: which tickets you will
  execute, in what order, which you will skip and why, and any decisions
  you need from the owner (URLs, credentials, choices the ticket leaves
  open). Wait for approval before changing anything.
- R tickets: execute as specified. C tickets: build the structure,
  schema, and navigation, and draft the copy following the ticket's page
  spec; mark every drafted prose region with
  <!-- COPY: owner rewrite pending --> since the owner rewrites all
  content in his own words before publish. Do not deploy drafted copy.
- O tickets (outreach) and M tickets (measurement) are the owner's;
  list them as skipped.
- Follow "Exact artifacts" as written. Deviate only with a stated reason.
- Run the ticket's Validation block and paste the output in the commit.
- One branch per ticket set (named after the file), one commit per
  ticket, commit title is the ticket ID.
- Report per ticket: ID / Status (Done, Partial, Blocked) / Validation
  output / Deviations and why / Anything the owner must do by hand.

## Things to know
- GTM container: GTM-WVFLHH46. GA4 is configured through GTM.
- Forms post to Formspree. Cloudflare Transform Rules set security
  headers; the CSP allows googletagmanager, google-analytics, fonts, and
  formspree. Adding a new external script means updating the CSP too.
- The "Findings 4.x" references in tickets point to CSZ04, the audit
  report, which is not in this repo. You do not need it; the ticket
  contains everything required to execute.
