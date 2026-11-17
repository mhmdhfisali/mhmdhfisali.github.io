# Panduan Pengelolaan Konten Portofolio (Sanity Studio CMS)

Panduan ini memudahkan **Muhamad Hafis Ali** dalam menambah, mengedit, atau mengkustomisasi seluruh konten portofolio melalui antarmuka visual Sanity Studio.

## Menjalankan Sanity Studio Lokal

1. Buka terminal dan masuk ke folder backend:
   ```bash
   cd portofolio-backend
   ```
2. Jalankan server pengembangan Sanity Studio:
   ```bash
   npm run dev
   ```
3. Buka browser di alamat:
   ```
   http://localhost:3333
   ```
4. Masuk dengan akun Sanity Anda.

---

## 1. Katalog Proyek (*Projects*)

Di menu navigasi kiri, pilih **Katalog Proyek**:

### A. Proyek Perusahaan (Contoh: PPIC, IPC, Dashboard SMII)
* **Jenis Proyek**: Pilih `Proyek Perusahaan / Enterprise`
* **Nama Perusahaan**: Masukkan `PT Sinar Meadow International Indonesia` (atau nama perusahaan baru di masa depan).
* **Kategori Platform**: Pilih `Web Application` atau `System, Cloud & Architecture`.
* **Status Hosting / Akses**: Pilih `Jaringan Internal / On-Premise`.
* **Metrik Dampak Bisnis**: Tambahkan 2–3 angka dampak nyata:
  - Nilai: `< 5 Menit` | Keterangan: `Otomasi jadwal produksi pabrik (dari sebelumnya manual 2 jam)`
  - Nilai: `35% Lebih Cepat` | Keterangan: `Akselerasi alur validasi mutu in-process lab`
* **Galeri Screenshot**: Anda bisa mengunggah tangkapan layar antarmuka dashboard / tabel data untuk ditampilkan di galeri modal.
* **Tahapan Studi Kasus**: Langkah arsitektur, relasi database, dan validasi operasional.

### B. Proyek Pribadi (Contoh: absolutestore.id)
* **Jenis Proyek**: Pilih `Proyek Pribadi & Riset`
* **Status Hosting**: Pilih `Live Production (Dihosting Publik)`
* **Tautan Demo**: Masukkan `https://absolutestore.id`
* **Metrik Dampak**: Misal `99.9%` (Uptime server), `< 3 Detik` (Validasi QRIS).

---

## 2. Profil Utama (*Profile*)

Di menu navigasi kiri, pilih **Profil Utama**:
* **Headline & Bio**: Tersedia versi Bahasa Indonesia dan Bahasa Inggris (`headlineEn`, `bioEn`).
* **Metrik Hero**:
  - `Jumlah Paper Riset Terbit`: Nilai angka (misal: `1`).
  - `URL Tautan Paper Riset / DOI`: Tautan langsung ke publikasi jurnal di SINTA, Google Scholar, atau IEEE.
  - `Total Proyek Selesai`: Misal `10+`.
  - `Workspace / Environment`: Misal `100% Linux`.
* **Kontak & CV**: Email, WhatsApp, GitHub, LinkedIn, Instagram, Telegram, dan link Google Drive file PDF CV.

---

## 3. Sertifikasi Resmi (*Certifications*)

* **Nama & Lembaga**: Misal `Dicoding`, `BNSP`, `Cisco`.
* **ID Kredensial**: Nomor seri sertifikat (misal: `DICODING-2024-ABCDE`).
* **Tautan Verifikasi**: URL sertifikat online resmi agar recruiter bisa memverifikasi langsung.
* **Berkas Gambar**: Unggah foto sertifikat depan & transkrip nilai/lampiran.

---

## 4. Artikel & Publikasi Riset (*Posts*)

* **Apakah ini Paper Riset?**: Centang jika artikel ini adalah jurnal atau prosiding ilmiah.
* **Nama Jurnal / Penerbit**: Masukkan nama jurnal (misal: `SINTA 3 / Seminar Nasional`).
* **Tautan Eksternal / DOI**: Masukkan link langsung ke jurnal atau PDF makalah.

---

## 5. Menyinkronkan ke Website Portofolio (GitHub Pages)

Portofolio statis di `mhmdhfisali.github.io` otomatis menarik data dari Sanity saat proses build:
1. Setelah selesai menambah/mengubah data di Sanity Studio, klik tombol hijau **Publish**.
2. Webhook GitHub Actions di repositori akan otomatis memicu rebuild dan deploy ke GitHub Pages dalam 1-2 menit.

