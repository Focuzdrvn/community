## Focuzdrvn

Inclusive dark-mode landing page for the Focuzdrvn community. The site highlights hybrid hackathons, care resources, and a welcoming onboarding journey with subtle motion and glassmorphism accents that match the provided logo aesthetic.

### Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS v4 + custom utility layer for the glow/animation effects
- shadcn/ui components (Navigation Menu, Card, Button)

### Local development

```bash
npm install       # install dependencies once
npm run dev       # start the dev server on http://localhost:3000

npm run lint      # eslint flat config
npm run build     # production build
```

### Implementation notes

- Copy and tone center inclusion: accessible language, captions/childcare callouts, hybrid-first messaging.
- Theme is custom: near-black background, white type, soft cyan/green accents, gentle blur/glow layers, and utility classes (`surface-glass`, `animate-fade-up`, etc.).
- Hero, events, values, and resource sections reuse shadcn components for consistent spacing and focus states.
- `src/app/page.tsx` is the single page entry—update the arrays (`stats`, `events`, `values`, `resourceHighlights`) to refresh content without altering layout.

### Next steps

- Replace placeholder copy/images with live program data.
- Hook up real forms or CMS endpoints for event applications and partnerships as needed.
