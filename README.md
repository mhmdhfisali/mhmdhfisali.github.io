````bash
cat << 'EOF' > README.md
# 🌐 Personal Engineering & Creative Portfolio

Portofolio modern responsif yang dibangun dengan **Next.js (App Router)** dan **Sanity CMS**, mengusung desain *ambient slate-charcoal*, efek transisi 3D scroll-linked dua arah, modal case study interaktif, serta integrasi CMS headless real-time.

---

## 🛠️ Tech Stack

### Frontend (`portfolio-frontend`)
* **Framework:** Next.js (App Router, Turbopack)
* **Styling:** Tailwind CSS (Theme Variables, Custom Dark Mode)
* **Icons & Fonts:** Geist Sans & Geist Mono
* **CMS Client:** `next-sanity`, `@sanity/image-url`
* **Interactions:** Dynamic 3D Scroll Reveal, Real-time Mouse Spotlight, Web Audio API Click Feedback

### Backend (`portofolio-backend`)
* **Platform:** Sanity Studio v3 (Headless CMS)
* **Schemas:** Profiles, Projects (Multi-Phase Case Studies), Skills, Experiences, Educations, Certifications, Research Metrics, Media Content, Posts.

---

## 📁 Struktur Direktori

```text
.
├── portfolio-frontend/      # Next.js Application
│   ├── app/                 # App Router (Pages, Layout, OG & Favicon Generators)
│   ├── components/          # Reusable UI & Interactive Components
│   └── sanity.js            # Sanity Client Configuration
└── portofolio-backend/       # Sanity Studio CMS
    └── schemaTypes/         # Sanity Document Schemas

````

---

## 🚀 Panduan Menjalankan Proyek

### 1. Persiapan Awal

Pastikan mesin kamu sudah terpasang:

- **Node.js:** Versi 18+ atau 20+
- **Package Manager:** `npm` (atau `pnpm` / `yarn`)

---

### 2. Jalankan Backend (Sanity Studio)

Masuk ke folder backend, instal dependensi, lalu jalankan server Sanity:

```bash
cd portofolio-backend
npm install
npm run dev

```

- Sanity Studio akan aktif di: **`http://localhost:3333`** (atau port yang tertera di terminal).
- Masuk menggunakan akun Sanity kamu untuk mengelola konten portofolio.

---

### 3. Jalankan Frontend (Next.js)

Buka jendela atau tab terminal baru, masuk ke direktori frontend:

```bash
cd portfolio-frontend
npm install

```

Pastikan variabel lingkungan (`.env.local`) sudah terkonfigurasi:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=0dyfyoih
NEXT_PUBLIC_SANITY_DATASET=production

```

Jalankan development server:

```bash
npm run dev

```

- Web portofolio akan aktif di: **`http://localhost:3000`** (atau `http://localhost:3001` jika port 3000 terpakai).

---

### 4. Build untuk Production

Untuk menguji performa build sebelum publikasi:

```bash
# Di dalam folder portfolio-frontend
npm run build
npm run start

```

---

## 📝 Alur Kerja Pembaruan (Git)

Jika melakukan perubahan dari direktori root `~/Proyek/Portofolio`:

```bash
git add .
git commit -m "feat/update: deskripsi perubahan"
git push

```

---

## 📜 Lisensi

Dikelola secara mandiri di bawah lisensi MIT.
EOF

````

Setelah itu, perbarui git kamu:

```bash
git add README.md
git commit -m "docs: complete README with setup and execution guide"
git push

````
