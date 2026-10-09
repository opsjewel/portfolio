# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Responsive improvements

- Added consistent responsive horizontal padding to the shared `Container` component.
- Added global box sizing, responsive media defaults, smooth anchor scrolling, reduced-motion support, and protection against accidental horizontal overflow.
- Improved flexible sizing in the Home, About, Skills, Projects, and Contact layouts for narrow mobile screens and tablets.
- Fixed the invalid Tailwind positioning class on the course timeline marker in the Education section.
- The contact form now opens a pre-filled email draft instead of only logging the form data. Replace `your.email@example.com` in `src/components/Contact/Contact.jsx` with your real email address. This uses the visitor's email app and does not send messages through a server.

## Local setup

```bash
npm install
npm run dev
```

Before publishing, add your actual CV as `public/Jewel-CV.pdf` (the Home section links to `/Jewel-CV.pdf`) and replace placeholder contact/social links with your real profiles.
