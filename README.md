<div align="center">

  # 🌐 Modern Interactive Portfolio & Monorepo Engine
  
  <p align="center">
    <strong>Arsitektur Portofolio Generasi Baru Berbasis Next.js App Router, Sanity CMS Headless, dan Interaksi Visual 3D Adaptif.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15%2B-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Sanity-Studio_v3-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity CMS" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/React_DOM-createPortal-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License MIT" />
  </p>
</div>

---

## 🌟 Fitur Utama & Keunggulan Rekayasa

| Kategori | Fitur & Implementasi Teknis |
| :--- | :--- |
| **UX & Animasi 3D** | Animasi scroll-linked dua arah (*reversible*) dengan akselerasi GPU `translate3d`, efek 3D tilt mengikuti koordinat kursor mouse, dan interactive spotlight glow. |
| **Riwayat Interaktif** | *Glowing spine connector* pada riwayat pendidikan & pengalaman kerja yang mengisi garis (*fill progress*) secara dinamis sesuai pergerakan viewport. |
| **Modal Case Study** | Arsitektur modal multi-fase menggunakan `createPortal` menimpa stacking context `<body>`, mencegah scrolling latar, dan render gambar Sanity CDN real-time. |
| **Taktil & Responsif** | *Micro-interaction sound feedback* sintetis berbasis Web Audio API tanpa aset eksternal dan quick-copy email drawer dengan umpan balik status instan. |
| **SEO & Pratinjau Sosial** | Generator dinamis OpenGraph image (`app/opengraph-image.tsx`) dan favicon canvas SVG murni via Next.js Edge Runtime. |

---

## 🏗️ Tech Stack Monorepo

### 1. Frontend (`portfolio-frontend`)
* **Core Framework:** Next.js (App Router, Turbopack, React 19)
* **Design System:** Tailwind CSS, Dark Mode First (*Slate-Charcoal Palette* `#151923` & `#181a20`)
* **Typography:** Geist Sans & Geist Mono
* **Data Integration:** `@sanity/client`, `@sanity/image-url`, `next-sanity`
* **Performance:** Intersection Observer API teroptimasi via `requestAnimationFrame`

### 2. Backend CMS (`portofolio-backend`)
* **Core Platform:** Sanity Studio v3 (Headless Structured Content)
* **Skema Terstruktur:**
  * `profile` — Data identitas, headline, biografi, resume, dan tautan sosial.
  * `project` — Showcase proyek komprehensif, multi-tahapan studi kasus teknis (*case study phases*), dan tautan repositori/demo.
  * `experience` & `education` — Garis waktu karier dan riwayat akademik terhubung.
  * `skill` & `certification` — Taksonomi keahlian dan verifikasi kredensial lisensi.
  * `mediaContent` & `post` — Kurasi aset multimedia dan publikasi riset ilmiah.

---

## 📁 Struktur Monorepo

```text
Portofolio/
├── .gitignore                   # Konfigurasi ignore universal (Node, Next, Sanity, Env)
├── README.md                    # Dokumentasi arsitektur proyek
│
├── portfolio-frontend/          # Web Client (Next.js App Router)
│   ├── app/
│   │   ├── layout.tsx           # Root layout, theme provider, audio & cursor spotlight
│   │   ├── page.tsx             # Server Component aggregator dengan fetch paralel
│   │   ├── opengraph-image.tsx  # Dynamic OpenGraph Card generator (Edge Runtime)
│   │   ├── icon.tsx             # Dynamic SVG Favicon generator
│   │   └── globals.css          # Desain token, scrollbar styling & color variables
│   ├── components/              # Komponen modular UI & interaksi 3D
│   │   ├── Hero.jsx             # 3D perspective hero card & dynamic CTA
│   │   ├── Navbar.jsx           # Magnetic floating navigation bar
│   │   ├── Projects.jsx         # 3D Tilt project cards & category filtering
│   │   ├── ProjectModal.jsx     # Full-width case study portal dialog (max-w-6xl)
│   │   ├── ExperienceEducation.jsx # Glowing interactive connected timeline
│   │   ├── ScrollReveal.jsx     # Hardware-accelerated dynamic scroll-linked wrapper
│   │   ├── CursorSpotlight.jsx  # Reactive mouse spotlight tracker
│   │   ├── SoundFeedback.jsx    # Haptic audio synthesis click feedback
│   │   └── ContactDrawer.jsx    # Quick contact & clipboard email action
│   └── sanity.js                # Inisialisasi Sanity Client & CDN Image Builder
│
└── portofolio-backend/          # Sanity Studio Content Management
    ├── schemaTypes/             # Definisi skema konten deskriptif
    └── sanity.config.ts         # Konfigurasi workspace, project ID, dan dataset

```

---

## 🚀 Panduan Menjalankan di Lingkungan Lokal

### Prasyarat

* **Node.js** v18.17+ atau v20+
* **Package Manager** `npm` (atau `pnpm` / `yarn`)

### 1. Konfigurasi Backend (Sanity Studio)

```bash
# Pindah ke direktori backend
cd portofolio-backend

# Instal seluruh dependensi
npm install

# Jalankan server pengembangan Sanity
npm run dev

```

> Akses Sanity Studio di: **`http://localhost:3333`**

---

### 2. Konfigurasi Frontend (Next.js)

Buka tab atau jendela terminal baru:

```bash
# Pindah ke direktori frontend
cd portfolio-frontend

# Instal dependensi frontend
npm install

```

Pastikan berkas `.env.local` tersedia di dalam `portfolio-frontend/`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=0dyfyoih
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

```

Jalankan server aplikasi:

```bash
npm run dev

```

> Akses web portofolio di: **`http://localhost:3000`**

---

## ⚡ Deployment & Production Build

### Validasi Build Produksi

Sebelum melakukan rilis, pastikan tidak ada kesalahan kompilasi statis:

```bash
cd portfolio-frontend
npm run build
npm run start

```

### Konfigurasi CORS Sanity (Wajib untuk Domain Publik)

Saat aplikasi di-deploy ke domain publik (misal: Vercel / Netlify):

1. Masuk ke [Sanity Manage Dashboard](https://sanity.io/manage).
2. Pilih project `0dyfyoih` → tab **API** → **CORS origins**.
3. Tambahkan domain production kamu (misal: `https://portofolio-anda.vercel.app`) dan centang **Allow credentials**.

---

## 🔄 Alur Kontribusi & Sinkronisasi Git

Seluruh pembaruan di kedua subfolder dikelola terpusat dari root folder:

```bash
# Status peninjauan berkas
git status

# Menambahkan seluruh pembaruan
git add .

# Commit dengan format konvensional
git commit -m "feat: implement dynamic scroll progress and responsive modal"

# Sinkronisasi ke remote branch utama
git push origin main

```

---

## 📜 Lisensi & Atribusi

Proyek ini dirancang dan dikembangkan secara independen oleh **Muhamad Hafis Ali** di bawah lisensi terbuka [MIT License](https://www.google.com/search?q=LICENSE).
EOF

```

---

### Commit dan Push Perubahan ke GitHub:

```bash
git add README.md
git commit -m "docs: upgrade README with comprehensive engineering showcase and monorepo guide"
git push -u origin main

```
