# Production SSL/DNS Incident — Zaobora Domain Migration to Vercel

**Date:** 29 September 2026
**Scope:** Zaobora website hosting, domain DNS, and HTTPS certificate delivery

## Summary

`https://zaobora.co.tz/` experienced an HTTPS certificate error during the migration of the Zaobora website from the previous Namecheap-hosted configuration to the already-deployed Vercel application.

The website deployment on Vercel was already successful. The remaining production problem was domain routing: the apex domain still resolved to the old Namecheap hosting endpoint, which presented an expired Namecheap/Sectigo certificate.

## Symptoms

- Browsers displayed `NET::ERR_CERT_DATE_INVALID` for `https://zaobora.co.tz/`.
- The certificate presented was an expired Namecheap/Sectigo certificate.
- Vercel had the website deployment available, but the domain was not yet routing to it.
- A normal browser session initially continued to show the old certificate after the DNS change because of cached DNS/browser state.

## Root cause / contributing factors

The apex DNS record still pointed to the previous Namecheap hosting server (`66.29.132.165`), so requests did not reach Vercel. That server presented an expired certificate.

The Namecheap free SSL entitlement for the domain had already been exhausted, so another free Namecheap certificate could not be issued. cPanel AutoSSL was also unavailable for this account, and cPanel SSL/TLS Status indicated that the existing certificate would not renew through AutoSSL because it had not been issued through AutoSSL.

The website hosting/DNS path, SSL certificate management, and email infrastructure were separate concerns. The certificate problem was resolved by routing the website to Vercel, not by changing email records.

## Investigation

- Confirmed the browser error was caused by an expired certificate served for the domain.
- Checked the cPanel SSL/TLS Status and confirmed AutoSSL would not renew the existing certificate.
- Confirmed with Namecheap that the domain had consumed its one-time free SSL entitlement.
- Confirmed that cPanel AutoSSL was not available for this account.
- Confirmed that the Zaobora website had already been deployed successfully to Vercel.
- Identified the apex DNS record as the remaining connection between the domain and the old hosting environment.

## Resolution

The apex DNS record was changed from the old Namecheap hosting IP to the Vercel-provided IP. Vercel then served the website and managed HTTPS for the domain.

No application code, environment variables, email configuration, or repository deployment configuration was changed as part of this infrastructure resolution.

## DNS changes

| Host | Type | Previous value | Final value | Purpose |
| --- | --- | --- | --- | --- |
| `zaobora.co.tz` | `A` | `66.29.132.165` | `216.198.79.1` | Route the apex website domain to Vercel |
| `www.zaobora.co.tz` | `CNAME` | `zaobora.co.tz` | `zaobora.co.tz` | Preserve the www alias to the apex domain |

## Email/DNS records intentionally preserved

The following email-related infrastructure was deliberately left unchanged:

- MX records
- `mail.zaobora.co.tz`
- SPF
- DKIM
- DMARC
- autodiscover
- all other email-related DNS records

This preserved email delivery and mail services while changing only the website’s hosting/DNS path.

## Verification

Vercel subsequently reported both domains as valid:

- `zaobora.co.tz` — **Valid Configuration**
- `www.zaobora.co.tz` — **Valid Configuration**

The website was confirmed working over HTTPS in an Incognito browser session. The initial continued display of the old certificate in the normal browser session was attributed to cached DNS/browser state and did not represent the final DNS configuration.

## Lessons / operational notes

- Domain DNS routing must be verified separately from application deployment status.
- Website hosting/DNS changes must be planned separately from SSL certificate management and email infrastructure.
- A successful Vercel deployment does not by itself move an existing domain away from its prior hosting provider.
- Incognito or a clean DNS resolver is useful for validating DNS and certificate changes while local browser state is still stale.
- Managed HTTPS from the active hosting platform avoids dependence on manually purchased or manually renewed certificates when the platform supports the domain.

This incident should inform the future CYREX hosting and managed-technology workflow so client websites do not depend on manually purchased SSL certificates where the hosting platform can provide managed HTTPS. This is a Zaobora-specific resolution and an operational lesson; it does not mean every future CYREX client should use Vercel.

## Follow-up recommendations

- Add a domain cutover checklist covering apex and `www` DNS, certificate status, and email-record preservation.
- Record the authoritative DNS provider, website hosting provider, and certificate manager for each managed client domain.
- Prefer managed HTTPS when the selected hosting platform supports it, while choosing hosting per client requirements.
- Monitor certificate expiry and domain configuration before production cutovers.
- Validate both apex and `www` hostnames from a clean browser session or external resolver after DNS changes.
- Keep email DNS records explicitly documented before changing website DNS.
