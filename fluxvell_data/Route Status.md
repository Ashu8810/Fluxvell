# Fluxvell Route Status

**Source website:** https://fluxvell.com/

This file records route-level findings from the provided architecture diagram and live-site checks. It is not a product or marketing page.

## Live page groups

The provided diagram lists the homepage, five solution routes, five product routes, twelve industry routes, the Partners route, and the Contact route. All listed leaf routes were retrieved from the live website for page-specific documentation.

| Group | Routes listed in the diagram | Live status checked |
|---|---:|---|
| Home | 1 | Live homepage |
| Solutions | 5 | Five live leaf pages; `/solutions` itself returned 404 |
| Products | 5 | Five live leaf pages; `/products` itself returned 404 |
| Industries | 12 | Twelve live leaf pages; `/industries` itself returned 404 |
| Partners | 1 | Live page |
| Contact | 1 | Live page |
| Blog footer-only reference | 1 reference | `/blog` returned 404 |

## Route-count note

The diagram states **Total in live sitemap: 24 public routes**. Its category labels state Home: 1, Solutions: 5, Products: 5, Industries: 12, and Partners + Contact: 2. Those listed category counts add to 25, so this documentation preserves the diagram's stated total and also preserves the category counts without resolving the discrepancy.

## Top-level index behavior

Direct live-site checks of `/solutions`, `/products`, and `/industries` returned the site's standard `# 404` page with the message **This page could not be found.** The route labels therefore function as navigation groupings rather than live index pages in the checked site state.

The diagram identifies `/blog` as a footer-only reference, mentioned in inner-page resources or the footer and not listed in the live sitemap. A direct check of `/blog` also returned the same 404 page.

## References

[1]: https://fluxvell.com/ "Fluxvell website"
[2]: Fluxvell_og.pdf "Fluxvell Website — Page and Section Tree, provided attachment"
