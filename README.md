# StackMatch

This project is supposed to be used on mobile. So either use your mobile device or open dev tools and switch to the mobile view.

The deployed version can be found here:

- `https://sarah-die.github.io/StackMatch/`

StackMatch is a conference networking app that helps attendees create meaningful connections faster.
Users enter their tech stack, current learning topics, and experience level. After scanning each other's QR codes, they instantly receive a match score and personalized conversation starters.

## Why it exists

Networking at events can be random and uncertain. StackMatch improves event experience by helping people discover relevant participants and start better conversations right away.

## How it works

1. Attendee completes a short profile (stack, learning goals, seniority).
2. Two attendees scan each other's QR code.
3. StackMatch calculates compatibility and shows tailored icebreakers.

## Product focus

- Mobile-first experience for conference usage.
- Intended for phone use as a Progressive Web App (PWA).
- Built with KendoReact components for a consistent, professional UI.

## Tech stack

- React + TypeScript + Vite
- KendoReact UI components and theme
- React Router
- Zustand

## Run locally

```bash
pnpm install
pnpm dev
```
