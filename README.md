# MyFashionSpace — Landing Page

A static HTML/CSS landing page for **MyFashionSpace**, an imagined early-access financial-intelligence platform for the business of beauty, fashion, and modeling.
The page mimics both the structure and the styling of the Victoria's Secret storefronts — a white page with black type, blush `#FFE3ED` colour blocks, crimson `#C8102E` actions, square corners and small uppercase letterspaced labels — but with entirely original content. Built with hand-written HTML and CSS only: no JavaScript, no frameworks. Layout is flexbox throughout, with a single `max-width: 640px` media query for the phone version and the pure-CSS checkbox hack driving the hamburger menu and the expanding footer sections. The backdrop and both campaign images are animated from inside their own SVG files, so the page keeps moving without a line of script.

## Screenshots

Desktop hero:

![Desktop hero with the pink-and-gold runway image and email capture](css-screencap/desktop-hero.png)

The whole page:

![Full desktop page, hero through footer](css-screencap/desktop-full.png)

Phone width, and the hamburger overlay opened with the CSS checkbox hack:

| Mobile | Menu open |
| --- | --- |
| ![Phone-width hero](css-screencap/mobile-hero.png) | ![Full-screen nav overlay](css-screencap/mobile-menu.png) |

A few details worth pointing out:

| | |
| --- | --- |
| ![Camera-flash glints firing round the hero](css-screencap/desktop-glints.png) | Three of the twelve glints mid-flash. They fire on separate clocks, so the hero never repeats the same frame. |
| ![Crimson glare on the hovered button](css-screencap/hover-glare.png) | The hover glare, colour-matched: this control is crimson, so the light it throws is crimson. |
| ![Footer accordion expanded on a phone](css-screencap/mobile-accordion.png) | The footer headings expand on tap at phone width — checkbox hack, no JavaScript. |

The unstyled Part 1 structure, for comparison, is in [`html-screencap/`](html-screencap/).

## Setup

This is a plain HTML/CSS site with no build step and no dependencies to install for the site itself. To view it:

1. Clone/open this repo.
2. Open `index.html` directly in a browser (double-click it, or `open index.html` on macOS), or serve the folder with any static file server, e.g. `npx serve .`.

`npm install` is only needed inside `tests/`, for the structural test suite — see "Running the provided tests" below.

## Deployment

Deployed via GitHub Pages, serving from the `main` branch:

**https://dartmouth-cs52.github.io/lab1-landing-page-Minh-Nguyen-2005/**

## Acknowledgments

- **Content:** All landing-page copy comes from the provided content handoff, [`MyFashionSpace-Landing-Page-Content.md`](MyFashionSpace-Landing-Page-Content.md).
- **Structural and visual inspiration:** [Victoria’s Secret US](https://www.victoriassecret.com/us/) and [Victoria’s Secret UK](https://www.victoriassecret.co.uk/). Two things were taken from them. The structural rhythm — promo strip → nav → hero + email capture → grouped feature links → footer. And the visual system, read off the live UK storefront with browser devtools: the white/black base, the blush `#FFE3ED` panels, the crimson `#C8102E` actions, the square corners and the small uppercase letterspaced labels. No markup or CSS was copied; every rule in `style.css` is written from scratch, and all copy is original. The photography is credited separately below.
- **Display type:** the intended face is [IvyOra Display](https://ivyfoundry.com/families/ivyora/) Light, by Jan Maack of [Ivy Foundry](https://ivyfoundry.com/licensing/) and distributed through [Adobe Fonts](https://fonts.adobe.com/fonts/ivyora) and Type Network. It needs a licence and so cannot be linked from here. The stack names it first, then falls back to [Cormorant](https://fonts.google.com/specimen/Cormorant) Light from Google Fonts, which is what every visitor sees in practice. IvyOra is a Dutch Old Face revival, so an old-style with fine hairlines and a real 300 sits far closer to it than a Didone would; Cormorant is the display cut of that family, drawn for large sizes, which is what this page uses it for. The IvyOra names are kept at the front of the stack so the real face takes over automatically if it is ever licensed and installed, or served from a web project. To serve IvyOra to everyone, create an Adobe Fonts web project and add its stylesheet link to the `<head>`; no CSS change is needed, since the family is already first in the stack.
- **Body copy:** [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin) ExtraLight sets the running copy in every section, against the Didone used for headings, navigation and buttons.
- **Script accents:** the emphasised phrase in each headline is set in a calligraphic face. The intended face is [Classic Script MN](https://fonts.adobe.com/fonts/classic-script-mn) (Mecanorma Collection, distributed through Adobe Fonts), which needs an Adobe Fonts licence and so cannot be linked from here. The stack lists it first, then falls back to [Pinyon Script](https://fonts.google.com/specimen/Pinyon+Script) from Google Fonts, so the real face is used automatically wherever it is installed. To switch fully to Classic Script MN, create an Adobe Fonts web project and add its stylesheet link to the `<head>`.
- **Icons:** [Font Awesome 6 Free](https://fontawesome.com/) via the cdnjs CSS build (the CSS build, not the JS one, so the page stays JavaScript-free).
- **Techniques referenced:** the [CSS-Tricks guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for layout properties, and the CSS "checkbox hack" pattern (a hidden `input type="checkbox"` plus a `label`, with `:checked ~ sibling` selectors) for the hamburger overlay and the expanding footer headings — as described in [this CSS-only hamburger menu write-up](https://unused-css.com/blog/css-only-hamburger-menu/). Both were read for the technique; the rules in `style.css` are written from scratch.
- **Images:** every image in the final design is photography, credited below. Earlier drafts used original SVG artwork of mine, which the photographs replaced.
- **Photography:** the `editorial*` files in [`img/`](img/) are supplied fashion-editorial photographs, not my own work. (`editorial0.png` as the hero backdrop; `editorial8.jpg` behind the platform section; `editorial11.png`, `editorial10.png`, `editorial12.png` and `editorial13.jpg` on the four feature cards; `editorial14.png` behind the coverage strip; `editorial9.jpeg` behind the modeling spotlight; `editorial2.jpeg` shared behind the editorial preview and the closing band; `editorial6.jpeg` behind the personalize band — the other files are unused and are for a later stage). None of Victoria's Secret's own site imagery is used.
- **AI assistance:** Claude Code was used to learn the syntax of semantic HTML elements and of the CSS used here (flexbox, the checkbox hack, transitions/keyframes), to set up the classes and IDs used as styling targets, and to help draft these citations.

## Running the provided tests

These check structure only, and they don't grade you. From the repo root:

```
cd tests
npm install
npm run setup   # one time only - downloads a browser to test with
npm run test
```

`npm run test:ui` opens a visual runner. Needs Node 20 or newer. On WSL,
`npm run setup` also installs the Linux libraries the browser needs.
