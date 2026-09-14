<div align="center">

  # 🌐 Modern Interactive Portfolio & Monorepo Engine
  
  <p align="center">
    <strong>Arsitektur Portofolio Generasi Baru Berbasis Next.js App Router, Sanity CMS Headless, dan Estetika Minimalis Berorientasi Rekayasa Perangkat Lunak.</strong>
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
    <img src="https://img.shields.io/badge/Next.js-15%2B-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Sanity-Studio_v3-F03E2F?style=flat-square&logo=sanity&logoColor=white" alt="Sanity CMS" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
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
| **Navigasi Dinamis & Responsif** | *Magnetic floating navbar* dengan penanganan inisial nama otomatis berbasis data Sanity, status ketersediaan *active-glow*, badge logo teknis `</>`, serta drawer navigasi adaptif untuk perangkat bergerak. |
| **Bento Contact Hub** | Integrasi kartu kontak terpadu dengan penyalin instan (*one-click clipboard copy*) email, kanal repositori, serta tautan komunikasi langsung (WhatsApp, LinkedIn, Instagram) tanpa redundansi elemen. |
| **Publikasi & Riset Ilmiah** | Integrasi artikel dan prosiding riset ilmiah dengan dukungan rute internal Next.js serta *smart external resolver* menuju repositori jurnal institusi resmi. |
| **Riwayat & Garis Waktu** | *Glowing spine connector* pada riwayat pendidikan & pengalaman kerja yang mengisi garis (*fill progress*) secara dinamis sesuai pergerakan viewport. |
| **Modal Case Study Portals** | Arsitektur dialog multi-fase menggunakan `createPortal` menimpa stacking context `<body>`, mencegah scrolling latar saat pratinjau studi kasus mendalam. |
| **Footer Presisi** | Tata letak footer ringkas satu baris dengan zona aman bagi elemen *floating* (pencarian cepat ⌘K & tombol kembali ke atas), penanda zona waktu, dan metadata build. |

---

## 🏗️ Tech Stack Monorepo

### 1. Frontend (`portfolio-frontend`)
* **Core Framework:** Next.js (App Router, Turbopack, React 19)
* **Hosting Platform:** [GitHub Pages](https://mhmdhfisali.github.io)
* **Design System:** Tailwind CSS, Dark Mode First (*Slate-Charcoal Palette*)
* **Typography:** Geist Sans & Geist Mono
* **Data Integration:** `@sanity/client`, `@sanity/image-url`
* **Static Site Generation (SSG):** Optimal untuk GitHub Pages via `output: 'export'`

### 2. Backend CMS (`portofolio-backend`)
* **Core Platform:** Sanity Studio v3 (Headless Structured Content)
* **Cloud Studio:** [mhmdhfisali-github-io.sanity.studio](https://mhmdhfisali-github-io.sanity.studio)
* **Skema Terstruktur:**
  * `profile` — Data identitas, nama lengkap, ringkasan profil, kontak, dan tautan sosial.
  * `project` — Showcase proyek komprehensif, multi-tahapan studi kasus teknis (*case study phases*), dan tautan repositori/demo.
  * `experience` & `education` — Garis waktu karier profesional dan riwayat akademik.
  * `skill` & `certification` — Taksonomi keterampilan rekayasa dan verifikasi kredensial lisensi.
  * `post` — Publikasi makalah riset ilmiah dan catatan teknis.

---

## 📁 Struktur Monorepo

```text
Portofolio/
├── .gitignore                    # Konfigurasi ignore universal (Node, Next, Sanity, Env)
├── README.md                     # Dokumentasi arsitektur proyek
│
├── portfolio-frontend/          # Web Client (Next.js App Router)
│   ├── app/
│   │   ├── layout.tsx            # Root layout, theme provider, metadata & cursor/audio setup
│   │   ├── page.tsx              # Server Component aggregator dengan fetch paralel & SSG
│   │   ├── opengraph-image.tsx  # Dynamic OpenGraph Card generator
│   │   ├── icon.tsx              # Dynamic SVG Favicon generator
│   │   └── globals.css           # Desain token, scrollbar styling & color variables
│   ├── components/               # Komponen antarmuka modular
│   │   ├── Hero.jsx              # 3D perspective hero card & dynamic CTA
│   │   ├── Navbar.jsx            # Floating navigation bar dengan auto-initials & badge </>
│   │   ├── Projects.jsx          # Project showcase & filter kategori
│   │   ├── ProjectModal.jsx      # Case study portal dialog multi-fase
│   │   ├── ExperienceEducation.jsx # Interactive connected timeline
│   │   ├── Certifications.jsx    # Showcase kredensial & sertifikasi terverifikasi
│   │   ├── Posts.jsx             # Daftar publikasi ilmiah dengan link resolver eksternal
│   │   ├── ContactDrawer.jsx     # Bento grid kontak resmi & integrasi platform sosial
│   │   └── ScrollReveal.jsx      # Reusable motion wrapper
│   └── sanity.js                 # Inisialisasi Sanity Client & image builder
│
└── portofolio-backend/          # Sanity Studio Content Management
    ├── schemaTypes/              # Definisi skema data (profile, project, skill, post, dll.)
    ├── sanity.config.js          # Konfigurasi desk structure, project ID, dan dataset
    └── sanity.cli.js             # Konfigurasi CLI deployment Sanity

```

---

## 🚀 Panduan Menjalankan di Lingkungan Lokal

### Prasyarat

* **Node.js** v18.17+ atau v20+
* **Package Manager** `npm`

### 1. Konfigurasi Backend (Sanity Studio)

```bash
# Pindah ke direktori backend
cd portofolio-backend

# Instal seluruh dependensi
npm install

# Jalankan server pengembangan Sanity
npm run dev

```

> Akses Sanity Studio lokal di: **`http://localhost:3333`**

---

### 2. Konfigurasi Frontend (Next.js)

Buka terminal baru:

```bash
# Pindah ke direktori frontend
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

Untuk memperbarui skema ke dashboard online:

```bash
cd portofolio-backend
npx sanity deploy

```

### 2. GitHub Pages Live Deployment

Frontend secara otomatis di-build dan di-deploy ke GitHub Pages melalui GitHub Actions setiap kali ada push ke branch `main`:

* **Live URL:** [https://mhmdhfisali.github.io](https://www.google.com/url?sa=E&source=gmail&q=https://mhmdhfisali.github.io)

---

## 🔄 Sinkronisasi Git

Pembaruan monorepo dikelola terpusat dari root folder:

```bash
# Status berkas
git status

# Tambahkan seluruh perubahan
git add .

# Commit konvensional
git commit -m "docs: add direct live demo link and update README"

# Push ke repositori remote
git push origin main

```

---

## 📜 Lisensi & Atribusi

Proyek ini dirancang dan dikembangkan secara independen oleh **Muhamad Hafis Ali** di bawah lisensi terbuka [MIT License](https://www.google.com/search?q=LICENSE).

```

---

Jalankan perintah ini di terminal untuk langsung memperbaruinya di GitHub:

```bash
cd ~/Proyek/Portofolio
git add README.md
git commit -m "docs: add live portfolio and studio links to README"
git push origin main

```
