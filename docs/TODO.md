# BitBlocks — TODO

The umbrella site + narrative for the stack (BitLogin · BitGate · BitFeed ·
BitUnlock, and Tessera as the worked example).

## Design review — external critique (2026-08-11)

An outside review of the whole stack (concept rated ~9/10). The concept is
strong; the actionable notes are precision and positioning, which matter a lot
for security infrastructure. Distilled, with our take:

### Positioning
- **[agree] Stop calling all five things "primitives."** Tessera is an
  application built WITH the stack, not a fifth primitive. Reframe as
  **"Four primitives. One proof they compose."** — a PRIMITIVES tier
  (BitLogin · BitGate · BitFeed · BitUnlock) and a BUILT-WITH tier (Tessera,
  then future apps). A stronger story than forced five-way symmetry.
- **[agree] Add one architecture diagram:** Nostr / Lightning → the four blocks
  → Tessera / future apps. Communicates the whole project in ~ten seconds.
- **[agree] Sharpen the thesis:** "BitBlocks is an application architecture in
  which identity, policy, discovery, payments, and capabilities are portable
  objects rather than proprietary backend services — the client becomes the
  disposable part." Keep the hero line ("The web made you a tenant. Own the
  stack.").

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
