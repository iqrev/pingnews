# PingNews 📰

**PingNews** adalah portal berita modern yang sangat mengutamakan pengalaman seluler (*mobile-first*) layaknya aplikasi *native*, namun diarsiteki dengan mesin backend tangguh menggunakan ekosistem Laravel modern.

---

## 🚀 Fitur-Fitur Utama

### 📱 1. Antarmuka Ruang Baca (Reader Experience)
- **Aplikasi Satu Halaman (SPA):** Transisi antar halaman artikel terjadi dalam hitungan milidetik karena dibangun dengan **React + Inertia.js**. Membaca berita tidak pernah terasa sedinamis ini!
- **Mobile-First & UI/UX Premium:** Dilengkapi dengan struktur desain khusus untuk layar ponsel, meliputi *Bottom Navigation Bar*, *Sticky Header*, dan *Card* artikel yang menggunakan efek material *Glassmorphism*.
- **Otomatisasi Mode Gelap:** Terintegrasi penuh dengan sistem operasi pengguna, aplikasi ini beradaptasi mendalam melalui antarmuka *Dark Mode* cantik bawaan **Tailwind CSS**.

### 💼 2. Dapur Redaksi (Editorial CMS)
- **Panel Manajemen Kuat:** Mengelola penerbitan artikel, memecah kategori berita, dan menandai topik menggunakan antarmuka modern dan responsif dari **Filament PHP**.
- **Fitur Hierarki Peran (Role-Based Access):** Menghindari masalah manipulasi data yang tidak disengaja berkat integrasi **Spatie Laravel Permission** untuk peran pengguna terpisah (contoh: *Editor*, *Penulis*, *Admin*).

### ⚡ 3. Pemrosesan Media & Kecepatan
- **Konversi WebP Otomatis:** Menjaga agar pengalaman seluler tetap hemat kuota tanpa mengurangi ketajaman gambar. Terkoneksi dengan **Spatie Medialibrary**; di mana gambar sampul yang diunggah jurnalis otomatis dirender di latar belakang menjadi ekstensi WebP dan disesuaikan ukurannya secara dinamis (`thumb` dan `cover`).
- **Skema Arsitektur Andal:** Bersiap menggunakan mesin singgah cache (Redis) untuk merender artikel populer secara kilat (*blazingly fast!*).

### 🌍 4. Progressive Web App (PWA)
- **Pengalaman Offline:** Website diinjeksi dengan *Service Workers* (`sw.js`). Apabila saat mengeksplor berita sinyal pembaca perlahan menghilang, aplikasi tidak akan mendadak bertransisi ke layar putih raksasa tak berguna (Dinosaurus). 
- **Homescreen Installable:** Dapat dipasang menjadi "aplikasi independen" di antarmuka depan iOS atau Android pengguna berkat konfigurasi `manifest.json`.

---

## 🛠️ Tech Stack yang Digunakan

| Komponen | Teknologi |
| --- | --- |
| **Backend & Perutean** | Laravel 11/13 |
| **Frontend Renderer** | React.js (melalui Inertia.js v2) |
| **Bentuk & Gaya** | Tailwind CSS v4 + Heroicons |
| **Admin Panel** | Filament v3/v5 |
| **Otorisasi & Media** | Spatie Roles & Spatie Medialibrary |

---

## 🏁 Memulai Proyek Secara Lokal

1. Salin *(clone)* repositori ini.
2. Jalankan kompilasi awal modul paket:
   ```bash
   composer install
   npm install --legacy-peer-deps
   ```
3. Lakukan pengaturan lingkungan dengan menyalin konfigurasi environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Eksekusi skema basis data beserta pengisian data percontohan *(seeder)*:
   ```bash
   php artisan migrate:fresh --seed
   ```
   **Catatan:** Akun *default* Admin ber-alamat email: `admin@pingnews.com` dengan sandi: `password`.
5. Kompilasi aset-aset frontend:
   ```bash
   npm run build
   ```
6. Jalankan proyek menggunakan:
   ```bash
   php artisan serve
   ```
   Buka `http://localhost:8000` di broser Anda (untuk melihat UI *Mobile* tekan Inspect *F12* dan atur *Viewport* ke mode HP) serta akses CMS redaksi di `http://localhost:8000/admin`.
# pingnews
