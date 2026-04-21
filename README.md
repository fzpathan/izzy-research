# Izzy Research — Landing Page

> Professional thesis & research consultancy landing page for higher education students.

## Tech Stack

- **React 18** — functional components with hooks
- **Tailwind CSS v3** — utility-first styling
- **Lucide React** — icon library
- **Vite** — build tool & dev server

## Sections

| Section | Description |
|---|---|
| Hero | Headline, trust stats, thesis progress tracker |
| Services | Research Methodology, Literature Review, Editing |
| How It Works | 3-step process flow |
| Testimonials | 3 student reviews with star ratings |
| Payment | UPI QR code + `upi://pay` link |
| FAQ | Accordion with smooth CSS animation |
| CTA | WhatsApp + Email conversion band |
| Footer | Brand + legal links |

## Design

Stripe × Notion hybrid — academic blues (`#061b31`), purple accent (`#533afd`), Inter font. Mobile-responsive throughout.

## Setup

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build → dist/
```

## Before Going Live

1. Replace `WHATSAPP_URL` in `src/App.jsx` with your real WhatsApp link
2. Replace `UPI_URL` with your UPI ID
3. Replace the QR code placeholder in the Payment section with a real QR image
4. Update testimonials with real student reviews

## License

MIT — © 2026 Izzy Research
