# Platform Axiology

An interactive tool for exploring platform-architecture trade-offs: each trade-off is a spectrum
between two poles, with positions describing what you get, when it is the right choice, how it
fails, and how to correct it. Includes roadmap building and comparison views, and maps positions
to CNCF projects and patterns.

Everything runs in the browser. Your assessments and saved roadmaps are stored locally in
IndexedDB — there is no backend and nothing leaves your machine.

## Stack

React 18, Vite, TypeScript (strict), Tailwind CSS v4, native IndexedDB, Vitest + Testing Library.

## Development

```
npm install
npm run dev      # local dev server
npm test         # run tests
npm run build    # type-check and build to dist/
```

The site is deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.

## License

[MIT](LICENSE) — covers both the code and the written content. Use it freely.
