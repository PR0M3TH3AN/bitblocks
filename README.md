# bitblocks.network

The umbrella site for the BitBlocks stack — composable Nostr + Bitcoin building
blocks for apps that can't lock anyone in.

Static site, no build step. Deployed to the apex `bitblocks.network`.

## The blocks

| Block | Question | Site |
| --- | --- | --- |
| BitLogin | who are you | login.bitblocks.network |
| BitGate | what may you do | gate.bitblocks.network |
| BitFeed | what do you see | feed.bitblocks.network |
| BitUnlock | how you're paid | bitunlock.network |
| Tessera | what you can do | tessera.bitblocks.network |

## Design

Deliberately distinct from any single product: a monochrome, architectural
parent identity where the five product colours are the only chroma — the
Alphabet-to-Google relationship rendered in design. Monumental condensed
Ubuntu Sans display, Ubuntu Sans Mono for annotations, theme-aware.

## Local

```sh
python3 -m http.server 8080   # then open localhost:8080
```
