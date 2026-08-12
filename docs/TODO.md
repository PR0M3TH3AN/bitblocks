# BitBlocks — TODO

The umbrella site + narrative for the stack (BitLogin · BitGate · BitFeed ·
BitUnlock, and Tessera as the worked example).

## Design review — external critique (2026-08-11)

An outside review of the whole stack (concept rated ~9/10). The concept is
strong; the actionable notes are precision and positioning, which matter a lot
for security infrastructure. Distilled, with our take:

### Positioning
- **[DONE 2026-08-12] Stop calling all five things "primitives."** §02 is now
  "Four primitives. One proof." with a "built with the four ↓" band separating
  BitLogin/BitGate/BitFeed/BitUnlock from Tessera; §03 splits the tiers
  explicitly (see the diagram below).
- **[DONE 2026-08-12] Architecture diagram.** §03 now shows a layered diagram —
  OPEN SUBSTRATE (Nostr · Lightning) → FOUR PRIMITIVES → BUILT WITH THE STACK
  (Tessera + your app + what's next), read bottom to top. The ghost app slots
  make the "one family of apps, not one app" point. Communicates the stack in
  ten seconds, as intended.
- **[PARTIAL 2026-08-12] Sharpen the thesis.** Added "the client is the
  disposable part" to §03; the §01 tenant-vs-owner framing already carries the
  thesis. Still could add the crisp one-liner ("identity, policy, discovery,
  payments, and capabilities are portable objects rather than proprietary
  backend services") verbatim near the hero. Kept the hero line.

### Claim precision (highest priority — this is security infra)
- **[strongly agree] "No server of record" overclaims.** BitUnlock is a hosted
  service with a D1 database. Reframe the principle to **"No platform-owned
  source of truth"** / "Portable state first, replaceable services where
  services are necessary." Servers are allowed; a server OWNING the user is not.
- **[strongly agree] Drop impossibility claims** like "no one can delete your
  history." Relay retention is best-effort (BitLogin's own docs say so). Use
  "no single operator controls…", "portable across…", "doesn't depend on one
  host…". Audit every absolute claim on the umbrella page AND each block site.

### Strategy
- **[agree] Resist over-expansion.** We have enough primitives. The validation
  goal is NOT a fifth infrastructure layer — it's a SECOND, radically different
  application on the same four blocks with no special-casing. Two unlike apps
  composing cleanly from the four primitives proves an *architecture*, not a
  product family. That's the north star; let real application pressure decide
  what the stack is missing.
