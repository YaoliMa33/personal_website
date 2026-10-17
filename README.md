# Yaoli Ma & Yihan Zhang

A personal website with a shared entrance and two independent profiles.

[Live website](https://yaolima33.github.io/personal_website/) · [Yaoli Ma](https://yaolima33.github.io/personal_website/yaoli.html?lang=en) · [Yihan Zhang](https://yaolima33.github.io/personal_website/yihan.html?lang=en)

## Open locally

Open dist/index.html, or serve the directory:

    python -m http.server 4174 --bind 127.0.0.1 --directory dist

Then visit http://127.0.0.1:4174.

No build step or package installation is required.

## Edit

- dist/profiles.js: biographies, education, experience, projects, contact details and galleries.
- dist/app.js: page structure and interactions.
- dist/styles.css: visual design and responsive/print layouts.
- dist/assets/: supplied photos and self-hosted open-source fonts.

Run node verify.mjs for static rendering, content and local-link checks.

## Content

Content is based on the two supplied CVs and the additional school information.
Phone numbers, full postal addresses and dates of birth are not displayed.
Research illustrations are conceptual diagrams, not plotted research data.
Project results are attributed personal research summaries from the CVs.
The machine-learning comparison retains the qualification about hedging and costs.
The supplied CV documents are not exposed as public downloads.

## Design references

Original implementation; no third-party portfolio source was copied.

- Brittany Chiang: https://brittanychiang.com/ — clear research and experience hierarchy
- Open-source reference: https://github.com/bchiang7/v4
- Bruno Simon: https://bruno-simon.com/ — exploratory entrance
- Open-source reference: https://github.com/brunosimon/folio-2019
- Henry Heffernan: https://henryheffernan.com/ — a cohesive personal world
- Open-source reference: https://github.com/henryjeff/portfolio-website
- Lusion: https://lusion.co/ — atmospheric composition

DM Sans and Space Grotesk are self-hosted under their SIL Open Font Licenses.
License files are included in dist/assets/fonts/.

## Hosting

GitHub Pages publishes dist automatically after a push to main through .github/workflows/pages.yml. During deployment, prepare-pages.mjs adds content hashes to CSS and JavaScript URLs so returning visitors receive updated files.
The repository Pages source is GitHub Actions. No paid hosting or custom domain is required.
The profile links above can be added to LinkedIn contact information or Featured.
Social sharing metadata and 1200 x 630 preview cards are included for all three pages.

## Languages

Complete English, Chinese, German and French versions are available through the header selector.
The selected language persists and is included in links (?lang=en, zh, de or fr).
Update the matching locale-zh.js, locale-de.js and locale-fr.js when profile content changes.

## Verification

All twelve page/language combinations were checked at desktop and mobile viewport sizes.
No horizontal overflow, clipped headings or broken images were observed.
Language switching and cross-profile links retain the selected language.
Research disclosure, gallery navigation, Escape-to-close and email copy feedback were tested.
Static checks cover all profile fields, local assets, section anchors and translation coverage.
Keyboard and reduced-motion behavior are implemented; printing uses beforeprint/afterprint
handlers to include research details. Print output has not been visually reviewed.

## School logo sources

Education timelines display the institutions' official marks on light badges, preserving their artwork and colors. Logo images are decorative beside the accessible institution headings. The shared school mapping in dist/app.js follows the education-row order in all four profile languages.

- TUM: [official university website](https://www.tum.de/), public inline wordmark saved as dist/assets/schools/tum.svg.
- Schloss Schule Kirchberg: [official school website](https://schloss-schule.de/), full wordmark saved as dist/assets/schools/kirchberg.svg.
- École Polytechnique: [official school website](https://www.polytechnique.edu/) and [media resources](https://www.polytechnique.edu/presse/kit-media), standalone school mark saved as dist/assets/schools/polytechnique.svg.
- HEC Paris: [official logo asset](https://www.hec.edu/themes/custom/hec_theme/logo.svg), saved as dist/assets/schools/hec-paris.svg.
- The Chinese University of Hong Kong: [official bilingual logo asset](https://www.cuhk.edu.hk/english/images/cuhk_logo_2x.png?20221027), saved as dist/assets/schools/cuhk.png.

The TUM inline mark retains its original currentColor fill, which renders black as a standalone image. The Kirchberg SVG retains the original red/black styling; its viewBox capitalization and embedded styles were normalized for standalone display. Logo artwork is not cropped, redrawn or tinted by the website. Institutional trademarks remain the property of their respective owners and identify the educational institutions listed in the profiles.
