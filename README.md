# Shubham Kumar — Matrimonial Biodata

A static, responsive Indian matrimonial biodata built with React, TypeScript and Tailwind CSS. It uses the casual portrait supplied by Shubham. There is no account system, backend, tracking, remote font or API call.

## Run locally

Requires Node.js 22 or later and npm.

```bash
cd website
npm install
npm run dev
```

Open `http://localhost:5173`. Source changes rebuild automatically; refresh the browser to see them. To choose a port, use `PORT=3000 npm run dev` on Linux/macOS.

```bash
npm run build    # Strict TypeScript check, React bundle and Tailwind stylesheet
npm run preview  # Serve the production dist/ folder on port 5173
```

The production `dist/index.html` also opens directly in a browser, without a server. `dist/shubham-biodata.html` is a single-file copy with bundled scripts and styles; local JPG, PNG and WebP photographs are embedded, so the current version can be shared as one HTML file. To host it, upload the entire `dist/` directory to any static host. The application has no authentication; configure host access separately if desired.

## Edit the profile

All profile text is in `src/data/profile.ts`:

- `profile`: personal, educational, professional, family and contact details, plus the short About Me and Partner Preference paragraphs.
- `profile.photo`: points to `public/images/shubham.jpg`. A missing image automatically falls back to a neutral placeholder.
- `profile.webPresence`: website, LinkedIn and Instagram links shown in the contact section.

The shared React components are in `src/components/`. Layout and print rules are in `src/styles.css`. The Node scripts in `scripts/` compile React with esbuild and Tailwind with its official compiler and scanner.

## Print / Save as PDF

The print button opens the browser print dialog. Select **A4**, **100% scale**, and **Save as PDF**. Disable browser headers and footers and enable background graphics for the ivory, maroon and gold styling. Screen and print use the same compact sheet, and the supplied content fits on one A4 page.

## Accessibility and privacy

Semantic headings, a skip link and keyboard focus styles are included. No data is collected or stored. New facts should be confirmed by Shubham before publication. Do not add sensitive history, health information or compensation.

## Validation

`npm test` checks the single-sheet structure, all required facts, portrait configuration, placeholder fallback and text escaping. `npm run build` verifies types and compiles the application. A PDF rendered from the React markup and print CSS is also verified as one A4 page and visually reviewed. Browser pagination can differ slightly, so check print preview before sharing.
