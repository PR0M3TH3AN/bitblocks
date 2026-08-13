# Architecture

Durable architectural decisions and constraints for this repository.

## Strict CSP as a hard deployment constraint

Deployment config serves every path with a strict Content-Security-Policy
(`default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'`,
plus `frame-ancestors 'none'`, `form-action 'none'`, `object-src 'none'`),
alongside `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and
`Referrer-Policy: no-referrer`. Any change must work under this policy: no
inline scripts, no CDN or other external origins for scripts, styles, or
fonts; images are limited to same-origin and `data:` URIs.

Authoritative source:
- vercel.json
