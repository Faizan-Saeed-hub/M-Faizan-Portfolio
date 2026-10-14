# Muhammad Faizan — Personal Developer Portfolio

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A premium, production-ready personal developer portfolio built for **Muhammad Faizan**, showcasing his verified background as a **Software Engineer & Full-Stack Developer**. Designed with a sophisticated dark aesthetic (#070510), purple accents (#A855F7, #C084FC), fine borders, glowing micro-animations, and full responsiveness across mobile, tablet, and desktop viewports.

---

## 🌟 Key Highlights & Features

- **Verified Professional Identity**: Computer Science graduate from the University of Sargodha (CGPA: 3.24 / 4.00) with proven project experience and industry training.
- **Real Portrait & Visual Polish**: Custom glowing portrait treatment featuring Muhammad Faizan's authentic professional photo, double glowing rings, and responsive floating badges.
- **Authentic Project Showcase**: Real captured screenshots, live demo links, and GitHub repository links for:
  1. **UniPortal — University Admission Support System (Final Year Project)**: [Live Demo](https://uniportal-uos.vercel.app/) | [GitHub](https://github.com/Faizan-Saeed-hub/university-portal)
  2. **Faizan Vault — Personal Document & Media Vault**: [Live Demo](https://faizan-vault.vercel.app/) | [GitHub](https://github.com/Faizan-Saeed-hub/Faizan-Vault)
  3. **PDF Editor (PDF Faiz) — Privacy-First Web PDF Utility**: [Live Demo](https://pdf-editor1.netlify.app/) | [GitHub](https://github.com/Faizan-Saeed-hub/pdf-editor)
  4. **Fashion World — Clothing & Accessories Showcase**: [Live Demo](https://fashion-world-cloth.netlify.app/) | [GitHub](https://github.com/Faizan-Saeed-hub/faizan-tech)
  5. **Credit Loan Approval Prediction**: Supervised machine learning classification pipeline
  6. **SmartCart Clustering System**: Unsupervised customer segmentation & analytics
  7. **Text Summarizer Using Transformers**: Sequence-to-sequence NLP transformer model
  8. **Image Generation Using GAN**: Deep Generative Adversarial Network architecture
  9. **Aura Assistant — Conversational AI System**: [GitHub](https://github.com/Faizan-Saeed-hub/aura.assistant.ai)
- **Verified Credentials**: Official Google Coursera certificate verification link (`OBQARE49HBAK`), MathWorks Machine Learning & Image Processing Onramps, and MorphLabs AI/ML Internship.
- **Functional & Honest Contact**: Direct 1-click email copying, phone calling, and pre-formatted email client launcher without fabricated API submissions.
- **CV Download**: Integrated download button serving Muhammad Faizan's verified resume (`/CV.pdf`).
- **Fully Responsive & Accessible**: WCAG 2.2 AA compliant, keyboard accessible navigation with skip link, visible focus states, and zero horizontal scroll.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based interactive UI |
| **TypeScript** | Strict type safety and maintainable data contracts |
| **Tailwind CSS 3.4** | Utility-first styling with custom design tokens |
| **Vite** | Blazing-fast development server & optimized production build |
| **Lucide React** | Consistent, lightweight icons |
| **Vercel** | Recommended deployment platform |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── CV.pdf                 # Verified resume PDF
│   ├── faizan-portrait.png    # High-resolution portrait of Muhammad Faizan
│   ├── favicon.svg            # Custom SVG monogram favicon
│   └── projects/              # Verified captured project screenshots
│       ├── uniportal.png
│       ├── faizan-vault.png
│       ├── pdf-editor.png
│       └── fashion-world.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Fixed responsive navigation with active section spy
│   │   ├── Hero.tsx           # Two-column hero with glowing portrait & CTAs
│   │   ├── About.tsx          # Educational narrative & core discipline cards
│   │   ├── Skills.tsx         # 4-card technical capability grid
│   │   ├── Experience.tsx     # Vertical timeline of internships & projects
│   │   ├── Projects.tsx       # Filterable showcase with project cards
│   │   ├── ProjectCard.tsx    # Reusable card with screenshots & links
│   │   ├── Education.tsx      # Academic milestones from UOS and BISE Lahore
│   │   ├── Certifications.tsx # Verified credentials & Coursera verification link
│   │   ├── Contact.tsx        # Honest contact section with validation & mailto
│   │   ├── Footer.tsx         # Sleek footer with dynamic year & quick links
│   │   └── Icons.tsx          # Custom SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.ts   # Centralized, strictly verified data records
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for data models
│   ├── App.tsx                # Main single-page application layout
│   ├── index.css              # Design system tokens, grid backgrounds & scrollbar
│   └── main.tsx               # React root entrypoint
├── index.html                 # Optimized HTML with Google Fonts & Open Graph SEO
├── tailwind.config.js         # Custom palette (#070510, #A855F7, etc.)
├── vercel.json                # Vercel SPA rewrites and build settings
└── package.json               # Dependencies and build scripts
```

---

## 🚀 Running Locally

1. **Clone or open the repository**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```
   Open `http://localhost:4173/` in your browser.

---

## 🚢 Deployment to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Push this repository to GitHub under Muhammad Faizan's account (`https://github.com/Faizan-Saeed-hub/portfolio`).
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the `portfolio` GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and assign your permanent production URL (e.g. `https://muhammad-faizan-portfolio.vercel.app`).

### Option 2: Deploying via Vercel CLI
1. Log in to Vercel:
   ```bash
   npx vercel login
   ```
2. Deploy to production:
   ```bash
   npx vercel --prod
   ```

---

## 👤 Author Information

- **Name**: Muhammad Faizan
- **Role**: Software Engineer & Full-Stack Developer
- **Degree**: BS Computer Science, University of Sargodha (CGPA: 3.24 / 4.00)
- **Location**: Sharaqpur Sharif, District Sheikhupura, Pakistan
- **GitHub**: [Faizan-Saeed-hub](https://github.com/Faizan-Saeed-hub)
- **LinkedIn**: [muhammad-faizan-966b36261](https://www.linkedin.com/in/muhammad-faizan-966b36261/)
- **Email**: [muhammadfaizan25092003@gmail.com](mailto:muhammadfaizan25092003@gmail.com)
- **Phone**: [+92 325 6839601](tel:+923256839601)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
