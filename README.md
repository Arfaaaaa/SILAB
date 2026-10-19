# 🏛️ SILAB UIR — Sistem Informasi Laboratorium Komputer
### Universitas Islam Riau (UIR) Pekanbaru

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://sistem-laboratorium-silab.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)](https://uir.ac.id)
[![Status](https://img.shields.io/badge/Status-Tahap%20Pengujian%20(UAT)-success)](https://uir.ac.id)

Sistem Informasi Laboratorium Terpadu (**SILAB UIR**) adalah aplikasi web (*Single Page Application* / SPA) yang dirancang untuk mengelola dan memonitor seluruh operasional praktikum di **5 Laboratorium Komputer Fakultas Teknik Universitas Islam Riau**.

---

## 👥 Pengguna Sistem (2 Role Berbeda)

### 1. 🛡️ Laboran / Admin Lab
* **NIP / Username:** `admin_uir`
* **Password:** `admin123`
* **PIN Otorisasi:** `8891`
* **Hak Akses:** Hak kelola penuh (CRUD Mata Kuliah, Data ASLAB, Laboratorium, Jadwal Praktikum 8 pertemuan, Modul Praktikum, Data Absensi *view-only*, Rekap Kegiatan, Monitoring Checklist Kepatuhan, dan Inventaris Perangkat).

### 2. 👨‍🏫 Asisten Laboratorium (ASLAB)
* **Hak Akses:** Akses terisolasi (*isolated scope*), hanya dapat melihat dan mengelola data praktikum untuk mata kuliah yang diampunya.
* **Akun Demo ASLAB Tersedia:**
  * **Andi Prasetyo:** `andi` / `andi123` *(Pemrograman Web, Kecerdasan Buatan)*
  * **Budi Hermawan:** `budi` / `budi123` *(Basis Data)*
  * **Citra Dewi:** `citra` / `citra123` *(Jaringan Komputer)*
  * **Dian Safitri:** `dian` / `dian123` *(Pemrograman Mobile)*
  * **Eko Santoso:** `eko` / `eko123` *(Kecerdasan Buatan, Basis Data)*

---

## ⚡ Fitur Unggulan Sistem

1. **Presensi Real-Time (*Time-Gated Attendance*):**
   - Tombol **`✅ ABSEN`** hanya aktif apabila tanggal dan jam saat ini telah memasuki waktu jadwal praktikum.
   - Dilengkapi **Mode Pengujian Dosen**: Jadwal hari ini otomatis aktif agar dosen dapat langsung menguji tombol presensi, serta tombol **`↺ Uji Ulang`** untuk simulasi berulang.
2. **Formula Penilaian Otomatis:**
   - Rumus Nilai Akhir: `(Nilai Tugas × 40%) + (Nilai Ujian × 60%)`.
   - Konversi Grade otomatis: A (≥ 85), B (≥ 75), C (≥ 65), D (< 65).
3. **Penyimpanan Data Lokal (*Persistence via LocalStorage*):**
   - Data jadwal, nilai, absensi, dan inventaris tetap tersimpan saat halaman web di-*refresh*.
   - Tersedia tombol **`🔄 Reset Data Demo`** di bilah atas (*topbar*) untuk mengembalikan data awal kapan saja.
4. **Unduh Modul Nyata:**
   - Tombol **`📥 Unduh Modul`** menghasilkan dokumen resmi petunjuk praktikum lab (`.txt`) lengkap dengan tata tertib workstation.
5. **Ekspor & Impor Data:**
   - Ekspor data Absensi, Rekap Kegiatan, dan Nilai Akhir ke format **CSV**.
   - Impor data nilai mahasiswa via berkas **Excel (.xlsx, .xls)** atau **CSV** dengan pemrosesan *drag-and-drop*.
6. **Monitoring Kepatuhan ASLAB (*Compliance Checklist*):**
   - Kartu pemantauan visual bagi Laboran untuk memverifikasi kelengkapan Absensi, Modul, dan Nilai dari masing-masing asisten.

---

## 🏛️ Cakupan 5 Ruang Laboratorium UIR

* **Lab 1:** Lab Pemrograman Web & Frontend (Kapasitas: 40 Workstation PC)
* **Lab 2:** Lab SQL & Basis Data (Kapasitas: 35 Workstation PC)
* **Lab 3:** Lab Cisco & Networking (Kapasitas: 30 Workstation PC)
* **Lab 4:** Lab Mobile App & Android Studio (Kapasitas: 25 Workstation PC)
* **Lab 5:** Lab Deep Learning & AI Studio (Kapasitas: 40 Workstation PC)

---

## 🚀 Menjalankan Secara Lokal

```bash
# Clone repositori
git clone https://github.com/Arfaaaaa/Sistem-Laboratorium-SILAB-.git
cd Sistem-Laboratorium-SILAB-

# Jalankan server lokal
python -m http.server 8000

# Buka di browser:
# http://localhost:8000
```

---

## 📄 Dokumen Pendukung dalam Repositori
* `WALKTHROUGH.md` : Dokumentasi arsitektur teknis dan panduan pengujian alur.
* `PANDUAN_PRESENTASI_DETAIL.md` : Panduan presentasi step-by-step beserta tanya jawab dosen/penguji.
* `Presentasi_Sistem_Laboratorium_UIR.pptx` : Slide presentasi resmi (14 Slide).
* `Dokumentasi_Sistem_Laboratorium_UIR.docx` : Laporan dokumentasi lengkap sistem.

---
© Universitas Islam Riau (UIR) — Fakultas Teknik Informatika
