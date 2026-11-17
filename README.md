<div align="center">

  # Muhamad Hafis Ali — Portfolio & Engineering Monorepo

  <p align="center">
    <strong>Arsitektur Portofolio Generasi Baru Berbasis Next.js App Router, Sanity Headless CMS, dan Desain Sistem Modern untuk Fullstack & Mobile Engineering.</strong>
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
    <img src="https://img.shields.io/badge/Next.js-16%2B_Turbopack-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/Sanity-Studio_v3-F03E2F?style=flat-square&logo=sanity&logoColor=white" alt="Sanity CMS" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages" />
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License MIT" />
  </p>

  <p align="center">
    Akses Langsung: <a href="https://mhmdhfisali.github.io"><strong>https://mhmdhfisali.github.io</strong></a>
  </p>
</div>

---

## Ringkasan Proyek

Repositori monorepo ini menaungi sistem portofolio profesional untuk **Muhamad Hafis Ali** (*Fullstack Developer & Mobile Developer*). Proyek ini menggabungkan frontend berkinerja tinggi berbasis Next.js App Router (Turbopack, SSG) dengan backend konten terstruktur berbasis Sanity Studio v3.

Dua repositori utama yang terhubung:
1. **[mhmdhfisali/Portofolio](https://github.com/mhmdhfisali/Portofolio)** — Repositori utama (*source code*) monorepo pengembangan.
2. **[mhmdhfisali/mhmdhfisali.github.io](https://github.com/mhmdhfisali/mhmdhfisali.github.io)** — Repositori publik dengan otomatisasi GitHub Pages Actions untuk deployment statis live.

---

## Fitur Utama & Keunggulan Rekayasa

| Modul / Fitur | Implementasi & Karakteristik Teknis |
| :--- | :--- |
| **Profil & Hero Dinamis** | Layout foto portrait tanpa frame kaku dengan aksen neon ambient glow dan cincin orbit sirkular. Menampilkan metrik paper riset terbitan nasional, proyek selesai, dan status ketersediaan kerja. |
| **Navigasi Pintar (*Scrollspy & Progress*)** | Floating navbar dengan scroll indicator realtime (progress bar 2px), indikator aktif per seksi, switch bahasa (ID/EN), kontrol audio efek suara, dan tema gelap/terang. |
| **Animasi Keahlian (*Skills Marquee*)** | Running marquee dua baris silang dengan tempo terkalibrasi santai (58s di mobile, 72s di desktop). Dilengkapi *smooth pause* otomatis saat kursor mouse diarahkan atau layar disentuh. |
| **Aktivitas GitHub Real-Time** | Integrasi API GitHub resmi untuk menampilkan commit stream berjalan, rekap metrik kontribusi 12 bulan terakhir, dan streak produktivitas kode publik. |
| **Katalog Proyek Multi-Perusahaan** | Mendukung proyek perusahaan berskala enterprise (**PT Sinar Meadow International Indonesia** maupun perusahaan masa depan) serta proyek publik/riset (misal: absolutestore.id) dengan badge perusahaan terpisah dan filter interaktif. |
| **Studi Kasus & Metrik Bisnis** | Modal dialog studi kasus (`ProjectModal`) menampilkan bento grid metrik efisiensi nyata (misal: `< 5 Menit` otomasi pabrik, `35% Lebih Cepat`, `99.9%` uptime) dan galeri screenshot interaktif dengan fitur zoom lightbox. |
| **Dukungan Bilingual Menyeluruh** | Internationalization (i18n) terintegrasi pada seluruh elemen teks, navigasi, bio, metrik, detail studi kasus, artikel, hingga formulir kontak. |
| **Ergonomi Mobile Terpadu** | Magnetic CSS scroll snap (`snap-x snap-mandatory` dan `snap-center`) pada carousel kartu di layar ponsel, tombol aksi simetris di atas lipatan layar (*above the fold*), dan drawer navigasi samping berikon SVG. |
| **100% SVG Icons Profesional** | Seluruh tampilan bersih dari emoji biasa, digantikan dengan icon SVG vektor modern bergaris tajam dan konsisten. |

---

## Tech Stack Monorepo

### 1. Frontend (`portfolio-frontend`)
* **Framework:** Next.js (App Router, Turbopack, React 19)
* **Styling & Design System:** Tailwind CSS, Slate/Dark Modern Theme
* **Typography:** Geist Sans & Geist Mono
* **Data Integration:** `@sanity/client`, `@sanity/image-url`
* **Static Export:** `output: 'export'` dioptimalkan untuk performa maksimal pada GitHub Pages
* **SEO & Metadata:** OpenGraph dynamic image generator, JSON-LD Schema.org Person, XML Sitemap, dan Webmanifest

### 2. Backend CMS (`portofolio-backend`)
* **Headless Studio:** Sanity Studio v3 (React, Vite, TypeScript/JavaScript)
* **Hosting Studio:** [mhmdhfisali-github-io.sanity.studio](https://mhmdhfisali-github-io.sanity.studio)
* **Skema Konten:**
  * `profile` — Identitas, headline bilingual, bio, metrik hero, URL paper riset/DOI, CV PDF Google Drive, dan kanal komunikasi.
  * `project` — Judul, deskripsi bilingual, kategori enterprise/pribadi, nama perusahaan, metrik dampak bisnis (`impactMetrics`), galeri screenshot (`galleryImages`), dan tahapan studi kasus.
  * `skill` — Kategori teknologi, tingkat kemahiran, dan ikon SVG.
  * `experience` & `education` — Riwayat karier industri, jabatan bilingual, dan poin capaian (*highlights*).
  * `certification` — Lembaga penerbit, ID kredensial lisensi resmi, tanggal terbit, dan URL verifikasi.
  * `post` — Artikel teknis dan publikasi paper ilmiah (status paper, nama jurnal/prosiding, DOI link).

---

## Struktur Direktori

```text
Portofolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD otomatisasi build & deployment ke GitHub Pages
├── .gitignore                    # Universal ignore rule (Node, Next.js, Sanity, dist, .env)
├── README.md                     # Dokumentasi arsitektur proyek
│
├── portfolio-frontend/          # Web Client (Next.js App Router)
│   ├── app/
│   │   ├── layout.tsx            # Metadata SEO, OpenGraph, JSON-LD, Theme & Language Provider
│   │   ├── page.tsx              # Aggregator fetch data Sanity paralel & fallback
│   │   ├── opengraph-image.tsx  # Dynamic OpenGraph Card generator
│   │   ├── icon.tsx              # Favicon generator
│   │   └── globals.css           # Token desain, animasi marquee, dan scrollbar
│   ├── components/               # Komponen antarmuka modular
│   │   ├── Hero.jsx              # Hero portrait cutout, cyber halo & CTA simetris
│   │   ├── Navbar.jsx            # Floating navbar, reading progress bar & drawer menu
│   │   ├── Skills.jsx            # Dynamic dual-track running marquee
│   │   ├── GitHubActivity.jsx    # Realtime GitHub pulse stream & contributions
│   │   ├── Projects.jsx          # Project grid & filter enterprise/pribadi
│   │   ├── ProjectModal.jsx      # Portal modal dengan impact metrics & gallery lightbox
│   │   ├── ExperienceEducation.jsx # Connected glowing timeline
│   │   ├── Certifications.jsx    # Verifikasi kredensial & sertifikat
│   │   ├── Posts.jsx             # Daftar artikel & paper riset ilmiah
│   │   ├── ContactDrawer.jsx     # Bento kontak & direct email
│   │   └── Footer.jsx            # Footer minimalis satu baris dengan zona waktu
│   ├── context/
│   │   └── LanguageContext.jsx   # State management bilingual (ID/EN)
│   ├── lib/
│   │   ├── translations.js       # Kamus bilingual lengkap ID/EN
│   │   ├── defaultProjects.js    # Data fallback proyek terperinci dengan impact metrics
│   │   └── fallbackData.js       # Fallback profil & keahlian untuk resiliensi offline
│   └── sanity.js                 # Inisialisasi client Sanity & image builder
│
└── portofolio-backend/          # Sanity Studio CMS
    ├── schemaTypes/              # Skema konten terstruktur (project, profile, skill, dll.)
    ├── icons.jsx                 # Custom SVG icons untuk navigasi visual studio
    ├── sanity.config.js          # Konfigurasi desk structure & plugin
    ├── sanity.cli.js             # Konfigurasi CLI
    └── BACKEND_GUIDE.md          # Panduan lengkap pengelolaan konten Sanity
```

---

## Panduan Menjalankan di Lingkungan Lokal

### Prasyarat
* **Node.js** v20+ atau v22+
* **Package Manager** `npm`

### 1. Menjalankan Backend (Sanity Studio)

```bash
cd portofolio-backend
npm install
npm run dev
```

Akses visual editor Sanity Studio di browser: **`http://localhost:3333`**

### 2. Menjalankan Frontend (Next.js)

Buka terminal baru:

```bash
cd portfolio-frontend
npm install
npm run dev
```

Akses web portofolio di browser: **`http://localhost:3000`**

---

## Alur Deployment

1. **GitHub Pages (Otomatis):**
   Setiap kali perubahan di-push ke branch `main`, GitHub Actions workflow di `.github/workflows/deploy.yml` akan secara otomatis menjalankan proses kompilasi Next.js (`npm run build`) dan mempublikasikan hasil statis ke domain [mhmdhfisali.github.io](https://mhmdhfisali.github.io).

2. **Sanity Studio Cloud (Opsional):**
   Untuk menyinkronkan skema studio terbaru ke cloud Sanity:
   ```bash
   cd portofolio-backend
   npx sanity deploy
   ```

---

## Lisensi

Proyek ini dirancang dan dikembangkan secara independen oleh **Muhamad Hafis Ali** di bawah lisensi terbuka [MIT License](LICENSE).
