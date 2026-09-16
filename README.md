<div align="center">

  # 🌐 Modern Interactive Engineering Portfolio & Monorepo Engine
  
  <p align="center">
    <strong>Arsitektur Portofolio Generasi Baru Berbasis Next.js App Router (SSG), Sanity CMS Headless, dan Estetika Minimalis Cyber-Dark Berorientasi Rekayasa Perangkat Lunak.</strong>
  </p>

  <p align="center">
    <a href="https://mhmdhfisali.github.io" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-mhmdhfisali.github.io-2563EB?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://mhmdhfisali-github-io.sanity.studio" target="_blank">
      <img src="https://img.shields.io/badge/Sanity_Studio-Online-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity Studio" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16%2B_(Turbopack)-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Sanity-Studio_v3-F03E2F?style=flat-square&logo=sanity&logoColor=white" alt="Sanity CMS" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages" />
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License MIT" />
  </p>

  <p align="center">
    🔗 <strong>Akses Langsung:</strong> <a href="https://mhmdhfisali.github.io"><strong>https://mhmdhfisali.github.io</strong></a>
  </p>
</div>

---

## 🌟 Fitur Utama & Keunggulan Rekayasa

| Kategori | Fitur & Implementasi Teknis |
| :--- | :--- |
| **Navigasi Presisi & True-Center** | *Floating pill navbar* dengan auto-initials dinamis, status ketersediaan kerja (*live glow badge*), tata letak navigasi terkunci di sumbu tengah layar (*absolute true-center*), kendali mute audio, dan drawer adaptif mobile. |
| **Interactive CoverFlow Carousel** | Showcase proyek horizontal berorientasi fokus tengah (*Center-Focus Elevation*). Dilengkapi pencarian kata kunci instan, indikator pelacak dinamis (*glowing scrubber progress*), filter kategori real-time, dan peralihan mode *Slider Focus* vs *Grid*. |
| **Live Engineering Pulse (GitHub)** | Visualisasi stream kontribusi tahun berjalan dan siklus kerja pengembang (*Developer Workflow*) yang terhubung langsung dengan repositori publik GitHub. |
| **Suara Mikro Taktil & Mute Control** | Umpan balik suara interaksi tombol berbasis Web Audio API murni tanpa file aset eksternal, dilengkapi toggle mute/unmute dengan penyimpanan preferensi di `localStorage`. |
| **Pencarian Cepat Keyboard (⌘K / Ctrl+K)** | Command palette modal responsif untuk navigasi instan antar-seksi dan tautan repositori eksternal via pintasan keyboard. |
| **Modal Case Study Portals** | Arsitektur dialog multi-fase menggunakan `createPortal` menimpa stacking context `<body>`, mencegah scrolling latar saat pratinjau studi kasus mendalam dan dokumen sertifikasi. |
| **Riwayat & Garis Waktu** | *Glowing spine connector* pada riwayat pendidikan & pengalaman kerja yang mengisi garis (*fill progress*) secara dinamis sesuai pergerakan viewport pengguna. |
| **Bento Contact Hub** | Integrasi kartu kontak terpadu dengan penyalin instan (*one-click clipboard copy*) email, kanal repositori, serta tautan komunikasi langsung (WhatsApp, LinkedIn, Instagram). |

---

## 🏗️ Tech Stack Monorepo

### 1. Frontend (`portfolio-frontend`)
* **Core Framework:** Next.js (App Router, Turbopack, React 19)
* **Hosting Platform:** [GitHub Pages](https://mhmdhfisali.github.io)
* **Styling Engine:** Tailwind CSS v4, Dark Mode First (*Slate-Charcoal Palette: `#181a20`*)
* **Typography:** Geist Sans & Geist Mono
* **Data Integration:** `@sanity/client`, `@sanity/image-url`
* **Static Site Generation (SSG):** Optimal untuk GitHub Pages via `output: 'export'`

### 2. Backend CMS (`portofolio-backend`)
* **Core Platform:** Sanity Studio v3 (Headless Structured Content)
* **Cloud Studio:** [mhmdhfisali-github-io.sanity.studio](https://mhmdhfisali-github-io.sanity.studio)
* **Skema Data Terstruktur:**
  * `profile` — Data identitas, status ketersediaan kerja, metrik hero, berkas CV (PDF), dan kontak sosial.
  * `project` — Katalog proyek komprehensif, multi-tahapan studi kasus teknis (*case study phases*), dan tautan repositori/demo.
  * `skill` — Taksonomi keahlian rekayasa, persentase kemahiran, dan pemetaan ikon teknologi otomatis.
  * `experience` & `education` — Garis waktu karier profesional dan riwayat akademik.
  * `certification` — Showcase dokumen kredensial, verifikasi tautan resmi, dan galeri berkas sertifikat.
  * `post` — Publikasi makalah riset ilmiah dan catatan komputasi teknis.

---

## 📁 Struktur Monorepo

```text
Portofolio/
├── .gitignore                      # Konfigurasi ignore universal (Node, Next, Sanity, Env)
├── README.md                       # Dokumentasi komprehensif arsitektur proyek
│
├── portfolio-frontend/            # Web Client (Next.js App Router)
│   ├── app/
│   │   ├── layout.tsx              # Root layout, ThemeProvider React 19, metadata & sensor global
│   │   ├── page.tsx                # Server Component aggregator dengan parallel fetching Sanity & SSG
│   │   ├── opengraph-image.tsx    # Dynamic OpenGraph Card generator
│   │   ├── icon.tsx                # Dynamic SVG Favicon generator
│   │   └── globals.css             # Desain token, scrollbar styling, cross-browser hide-scrollbar
│   ├── components/                 # Komponen antarmuka modular
│   │   ├── Hero.jsx                # 3D perspective hero card, telemetry metrics & direct CV CTA
│   │   ├── Navbar.jsx              # Floating true-center navbar dengan auto-initials & sound toggle
│   │   ├── GitHubActivity.jsx      # Heatmap aktivitas commit & developer workflow bento
│   │   ├── Projects.jsx            # CoverFlow center-focus carousel, search bar & glowing scrubber
│   │   ├── ProjectModal.jsx        # Case study portal dialog multi-fase & image lightbox
│   │   ├── Skills.jsx              # Grid kemahiran instrumen rekayasa & filter kategori
│   │   ├── ExperienceEducation.jsx # Connected timeline dengan dynamic glowing spine progress
│   │   ├── Certifications.jsx      # Kredensial sertifikasi resmi dengan multi-image slider modal
│   │   ├── Posts.jsx               # Publikasi ilmiah & artikel dengan external link resolver
│   │   ├── ContactDrawer.jsx       # Bento grid kontak resmi & integrasi saluran terverifikasi
│   │   ├── CommandPalette.jsx      # Quick command palette modal (Cmd+K / Ctrl+K)
│   │   ├── SoundFeedback.jsx       # Synthesizer audio klik mikro taktil (Web Audio API)
│   │   ├── CursorSpotlight.jsx     # Ambient spotlight tracker mouse
│   │   ├── ScrollProgress.jsx      # Laser progress bar di bagian atas layar
│   │   ├── ScrollToTop.jsx         # Floating smooth return-to-top button
│   │   ├── ScrollReveal.jsx        # IntersectionObserver motion wrapper
│   │   └── ThemeProvider.tsx       # Custom clean theme provider (React 19 compatible)
│   └── sanity.js                   # Inisialisasi Sanity Client & visual asset builder
│
└── portofolio-backend/            # Sanity Studio Content Management
    ├── schemaTypes/                # Definisi skema data (profile, project, skill, post, dll.)
    ├── sanity.config.js            # Konfigurasi desk structure, project ID, dan dataset
    └── sanity.cli.js               # Konfigurasi CLI deployment Sanity

```

---

## 🚀 Panduan Menjalankan di Lingkungan Lokal

### Prasyarat

* **Node.js** v18.17+ atau v20+
* **Package Manager** `npm`

### 1. Konfigurasi Backend (Sanity Studio)

```bash
# Masuk ke direktori backend
cd portofolio-backend

# Instal seluruh dependensi
npm install

# Jalankan server pengembangan Sanity
npm run dev

```

> Akses Sanity Studio lokal di: **`http://localhost:3333`**

---

### 2. Konfigurasi Frontend (Next.js)

Buka jendela terminal baru:

```bash
# Masuk ke direktori frontend
cd portfolio-frontend

# Instal dependensi frontend
npm install

```

Pastikan berkas `.env.local` tersedia di dalam folder `portfolio-frontend/`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=0dyfyoih
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

```

Jalankan server pengembangan:

```bash
npm run dev

```

> Akses web portofolio lokal di: **`http://localhost:3000`**

---

## ⚡ Deployment & Workflow

### 1. Cloud Sanity Studio

Untuk memperbarui definisi skema ke cloud studio:

```bash
cd portofolio-backend
npx sanity deploy

```

### 2. GitHub Pages Live Deployment

Frontend secara otomatis di-build dan di-deploy ke GitHub Pages melalui workflow GitHub Actions setiap kali ada dorongan kode (*push*) ke cabang `main`:

* **Live URL:** [https://mhmdhfisali.github.io](https://mhmdhfisali.github.io)

---

## 🔄 Alur Sinkronisasi Git

Pembaruan monorepo dikelola terpusat dari root direktori proyek:

```bash
# Cek status berkas yang dimodifikasi
git status

# Tambahkan seluruh perubahan berkas
git add .

# Buat commit pesan terstruktur
git commit -m "docs: update comprehensive README with latest architecture and live links"

# Dorong perubahan ke cabang utama GitHub
git push origin main

```

---

## 📜 Lisensi

Proyek ini dirancang dan dikembangkan secara independen oleh **Muhamad Hafis Ali** di bawah lisensi terbuka [MIT License](https://www.google.com/search?q=LICENSE).

```

Simpan berkas `README.md` tersebut di root proyekmu, lalu dorong ke repositori remote:

```bash
cd ~/Proyek/Portofolio
git add README.md
git commit -m "docs: update comprehensive README with latest architecture and live links"
git push origin main

```
