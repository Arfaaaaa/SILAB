# 🎯 PANDUAN PRESENTASI SILAB UIR - STEP BY STEP

## 📋 DAFTAR FILE YANG SUDAH DIBUAT

✅ **Presentasi_Sistem_Laboratorium_UIR.pptx** - 14 Slide PowerPoint
✅ **Dokumentasi_Sistem_Laboratorium_UIR.docx** - Dokumen lengkap
✅ **index.html** - Interface Sistem
✅ **app.js** - Logic JavaScript
✅ **style.css** - Styling CSS

---

## 📊 ISI PRESENTASI POWERPOINT (14 SLIDE)

### SLIDE 1: Cover
- Judul: SISTEM INFORMASI LABORATORIUM
- Subtitle: UNIVERSITAS ISLAM RIAU (UIR) PEKANBARU
- Tagline: Sistem Manajemen 5 Laboratorium Komputer Terpadu

**TIPS PRESENTASI:**
- Perkenalkan diri dan tim
- Jelaskan latar belakang pembuatan sistem
- Durasi: 1-2 menit

---

### SLIDE 2: Gambaran Umum Sistem

**ISI SLIDE:**
- 🎯 Tujuan: Mengelola 5 lab secara terpadu
- 🏛️ Cakupan: Lab 1-5 (Web, Database, Jaringan, Mobile, AI)
- 👥 Pengguna: Admin Laboran & ASDOS
- ⚡ Fitur Utama: Jadwal, Presensi, Inventaris, Modul, Nilai

**PENJELASAN DETAIL:**

> "Sistem SILAB UIR dirancang untuk mengelola 5 laboratorium komputer secara terpadu. Lab 1 khusus Pemrograman Web dengan 40 PC, Lab 2 untuk Basis Data 35 PC, Lab 3 Jaringan Komputer 30 PC, Lab 4 Pemrograman Mobile 25 PC, dan Lab 5 untuk AI & Multimedia 40 PC."

> "Sistem ini punya 2 tipe pengguna: Admin Laboran yang punya akses penuh, dan ASDOS yang hanya bisa akses data kelas mereka sendiri. Ini penting untuk keamanan data."

**TIPS:**
- Tunjukkan bahwa sistem mengelola total 170 PC workstation
- Tekankan pentingnya integrasi 5 lab dalam 1 sistem
- Durasi: 3 menit

---

### SLIDE 3: ERD Context Diagram

**ISI SLIDE:**
- Penjelasan ERD (Entity Relationship Diagram)
- Entitas: Laboratorium, Mata Kuliah, Mahasiswa
- Relasi: 1 to N (One to Many), 1 to 1 (One to One)
- Primary Key & Foreign Key

**PENJELASAN STEP BY STEP:**

> **"Apa itu ERD?"**
> "ERD adalah diagram yang menunjukkan hubungan antar data dalam database kita. Bayangkan seperti peta yang menunjukkan siapa berhubungan dengan siapa."

> **"Contoh Relasi 1 to N:"**
> "Satu Laboratorium (Lab 1) bisa punya BANYAK jadwal praktikum. Misalnya Senin jam 8, Selasa jam 10, Rabu jam 1. Jadi 1 Lab → N Jadwal. Ini dinamakan relasi One-to-Many."

> **"Contoh Relasi 1 to 1:"**
> "Satu Mahasiswa hanya punya SATU nilai akhir per mata kuliah. Jadi Ahmad di Pemrograman Web cuma punya 1 nilai final. 1 Mahasiswa → 1 Nilai Akhir."

> **"Apa itu Primary Key?"**
> "Primary Key (PK) itu seperti KTP untuk setiap data. Misalnya id_lab = 1 untuk Lab 1, id_lab = 2 untuk Lab 2. Ini unik dan tidak boleh sama."

> **"Apa itu Foreign Key?"**
> "Foreign Key (FK) itu seperti nomor referensi. Misalnya di tabel Jadwal ada kolom id_lab yang menunjuk ke Lab mana. Ini menghubungkan 2 tabel."

**DEMO DI KODE (app.js baris 3-40):**
```javascript
let db = {
  labs: [
    { id: 1, name: 'Lab 1', matkul: 'Pemrograman Web', ... },
    { id: 2, name: 'Lab 2', matkul: 'Basis Data', ... },
  ],
  jadwal: [
    { id: 1, lab: 'Lab 1', ... }, // FK: lab menunjuk ke labs
    { id: 2, lab: 'Lab 2', ... }
  ]
}
```

**TIPS:**
- Gunakan analogi sederhana (KTP, Nomor Referensi)
- Tunjukkan di kode JavaScript object db
- Durasi: 4-5 menit

---

### SLIDE 4: Hirarki Chart

**ISI SLIDE:**
- Struktur Organisasi Sistem
- Admin Laboran (Top Level)
- ASDOS #1 - #5 (Bottom Level)
- Isolated Scope Concept

**PENJELASAN STEP BY STEP:**

> **"Struktur Akses Sistem"**
> "Sistem kita punya 2 tingkat akses seperti struktur organisasi:"

> **"Level 1: Admin Laboran (Super User)"**
> "Admin adalah bos. Bisa lihat semua data, kelola semua lab, bahkan bisa override kalau ada jadwal bentrok. Admin punya NIP, Password, dan PIN keamanan 4 digit."

> **"Level 2: ASDOS (Restricted User)"**
> "ASDOS itu asisten dosen atau asisten lab. Misalnya ASDOS #1 pegang Pemrograman Web, ASDOS #2 pegang Basis Data. Mereka cuma bisa akses data kelas mereka sendiri."

> **"Konsep Isolated Scope"**
> "Isolated Scope artinya ASDOS Pemrograman Web tidak bisa lihat atau edit data ASDOS Basis Data. Data mereka terisolasi, terpisah. Ini untuk keamanan dan privacy."

**DEMO DI KODE (app.js baris 117-150):**
```javascript
function applyRolePermissions() {
  const isAsdos = currentRole === 'asisten';
  
  if (isAsdos && currentAslabUser) {
    // Filter otomatis ke matkul ASDOS
    // ASDOS cuma bisa lihat data matkul sendiri
  }
}
```

**DEMO LIVE DI BROWSER:**
1. Buka index.html
2. Login sebagai Admin (admin_uir / password / 8891)
3. Tunjukkan bisa lihat semua data
4. Logout, login sebagai ASDOS (20IF001 / password)
5. Tunjukkan hanya bisa lihat data Pemrograman Web

**TIPS:**
- Gunakan analogi "Bos vs Karyawan"
- Demo langsung di browser sangat penting
- Durasi: 4 menit

---

### SLIDE 5: DFD Level 1

**ISI SLIDE:**
- Data Flow Diagram Level 1
- 4 Proses Utama:
  1. Manajemen Mata Kuliah
  2. Penjadwalan Laboratorium
  3. Presensi & Materi
  4. Rekapitulasi Nilai

**PENJELASAN STEP BY STEP:**

> **"Apa itu DFD?"**
> "DFD adalah diagram alur data. Menunjukkan INPUT → PROSES → OUTPUT dari setiap fitur sistem."

> **"PROSES 1: Manajemen Mata Kuliah"**
> - INPUT: Kode Matkul (IF201), Nama (Pemrograman Web), SKS (3), Dosen
> - PROSES: Validasi data, cek duplikasi kode
> - OUTPUT: Master data mata kuliah tersimpan
> - STORAGE: Tabel [matkul]

**DEMO DI KODE (app.js baris 600-650):**
```javascript
function addMatkul() {
  const kode = document.getElementById('mkKode').value;
  const nama = document.getElementById('mkNama').value;
  
  // Validasi duplikasi kode
  const duplicate = db.matkul.find(m => m.kode === kode);
  if (duplicate) {
    showToast('Kode matkul sudah ada!', 'error');
    return;
  }
  
  // Simpan ke database
  db.matkul.push({ id: counters.matkul++, kode, nama, ... });
}
```

> **"PROSES 2: Penjadwalan Lab"**
> - INPUT: Pilih Lab (Lab 1), Matkul, Hari (Senin), Jam (08:00-10:30), Asisten
> - PROSES: **DETEKSI BENTROK JADWAL** → Jika Lab 1 Senin 08:00 sudah terisi, tolak atau minta konfirmasi Admin
> - OUTPUT: Jadwal tersimpan dengan status
> - STORAGE: Tabel [jadwal] + update status [labs]

**DEMO LIVE FITUR CONFLICT DETECTION:**
1. Buka menu Jadwal Lab
2. Tambah jadwal: Lab 1, Senin, 08:00-10:30
3. Coba tambah lagi jadwal yang sama
4. **Sistem akan deteksi bentrok dan tolak!**

**KODE CONFLICT DETECTION (app.js baris 350-370):**
```javascript
function addJadwal() {
  // Deteksi Bentrok
  const conflict = db.jadwal.find(j => 
    j.lab === lab && 
    j.hari === hari && 
    j.jam.toLowerCase() === jam.toLowerCase()
  );
  
  if (conflict) {
    if (currentRole !== 'admin') {
      showToast('JADWAL BERTABRAKAN!', 'error');
      return; // ASDOS tidak bisa tambah
    } else {
      // Admin bisa override dengan konfirmasi
      if (!confirm('Jadwal bentrok. Lanjutkan?')) return;
    }
  }
}
```

> **"PROSES 3: Presensi dengan Smart Reference"**
> - INPUT: NIM, Nama, Pertemuan, Matkul
> - PROSES: **SMART MATERIAL AUTO-SUGGEST** → Sistem otomatis suggest materi sesuai matkul dan pertemuan
> - OUTPUT: Data presensi tersimpan
> - STORAGE: Tabel [absensi]

**DEMO SMART REFERENCE (app.js baris 47-75):**
```javascript
const smartMaterials = {
  'Pemrograman Web': {
    'Pertemuan 1': 'Pengenalan HTML5, Semantic Elements & CSS Flexbox',
    'Pertemuan 2': 'Manipulasi DOM JavaScript & Event Handling',
    'Pertemuan 3': 'CSS Variables, Glassmorphism UI & Animations'
  }
}
```

**DEMO LIVE:**
1. Login sebagai ASDOS
2. Klik "Input Presensi"
3. Pilih Pertemuan 3
4. **Lihat materi otomatis muncul:** "CSS Variables, Glassmorphism UI..."
5. Input NIM dan nama mahasiswa
6. Simpan

> **"PROSES 4: Rekapitulasi Nilai"**
> - INPUT: NIM, Nilai Tugas, Nilai Ujian
> - PROSES: Hitung Nilai Akhir = (0.4 × Tugas) + (0.6 × Ujian)
> - OUTPUT: Nilai akhir & status lulus/tidak lulus
> - STORAGE: Tabel [hasil]

**DEMO PERHITUNGAN NILAI (app.js baris 780-800):**
```javascript
function addHasil() {
  const tugas = parseFloat(document.getElementById('hsNilaiTugas').value);
  const ujian = parseFloat(document.getElementById('hsNilaiUjian').value);
  
  // Rumus: 40% Tugas + 60% Ujian
  const nilaiAkhir = (tugas * 0.4) + (ujian * 0.6);
  const statusLulus = nilaiAkhir >= 60 ? 'Lulus' : 'Tidak Lulus';
}
```

**CONTOH PERHITUNGAN:**
- Tugas: 85
- Ujian: 90
- Nilai Akhir = (85 × 0.4) + (90 × 0.6) = 34 + 54 = **88** ✅ Lulus

**TIPS:**
- Fokus pada 2 fitur unggulan: Conflict Detection & Smart Reference
- Demo live sangat penting
- Durasi: 6-7 menit (paling penting!)

---

### SLIDE 6: DFD Level 2 - Inventaris

**ISI SLIDE:**
- Detail proses Inventaris Aset
- Input, Validasi, Output

**PENJELASAN:**

> "DFD Level 2 adalah detail lebih dalam dari 1 proses. Kita fokus ke Inventaris."

> **"Input Data Inventaris:"**
> - Kode Aset: AST-L1-PC (Aset Lab 1 PC)
> - Nama Perangkat: PC Workstation Core i7 / 16GB / SSD 512GB
> - Lab: Lab 1
> - Jumlah: 40 Unit
> - Kondisi: Bagus / Perlu Perbaikan / Rusak
> - Fungsionalitas: Fungsional / Non-Fungsional

> **"Validasi:"**
> 1. Cek duplikasi kode aset
> 2. Logic Check: Jika kondisi "Rusak" → Fungsionalitas harus "Non-Fungsional"
> 3. Update total unit per lab

> **"Output:"**
> - Dashboard Metrics: Total 180 Unit, 162 Bagus, 12 Perbaikan, 6 Rusak
> - Persentase kondisi bagus: 90%

**DEMO DI BROWSER:**
1. Buka menu Inventaris
2. Lihat metrics dashboard di atas
3. Klik "+ Tambah Aset Inventaris"
4. Input contoh data
5. Lihat tabel update

**TIPS:**
- Tekankan pentingnya tracking kondisi aset
- Durasi: 3 menit

---

### SLIDE 7: Use Case Diagram

**ISI SLIDE:**
- Aktor: Admin & ASDOS
- Use Case Admin: UC-01 sampai UC-07
- Use Case ASDOS: UC-11 sampai UC-16

**PENJELASAN:**

> **"Apa itu Use Case?"**
> "Use Case adalah daftar apa yang bisa dilakukan user di sistem."

> **"Admin Bisa:"**
> - Login (UC-01)
> - Kelola Mata Kuliah (UC-02)
> - Kelola Jadwal + Override Bentrok (UC-03)
> - Kelola Inventaris (UC-04)
> - Monitor Dashboard Real-Time (UC-05)
> - Lihat Semua Laporan (UC-06)
> - Manage Akun ASDOS (UC-07)

> **"ASDOS Bisa:"**
> - Login Portal ASDOS (UC-11)
> - Input Presensi Kelas Sendiri (UC-12)
> - Upload Modul (UC-13)
> - Entry Nilai (UC-14)
> - Lihat Dashboard Terisolasi (UC-15)
> - Download Rekap Kelas Sendiri (UC-16)

**TIPS:**
- Bandingkan Admin vs ASDOS secara side-by-side
- Durasi: 3 menit

---

### SLIDE 8: Class Diagram

**ISI SLIDE:**
- Class Laboratorium
- Class Jadwal
- Class Absensi

**PENJELASAN:**

> "Class Diagram menunjukkan struktur data object-oriented. Setiap class punya Attributes (data) dan Methods (fungsi)."

> **"Class Laboratorium:"**
> - Attributes: id_lab, nama_lab, kapasitas, status
> - Methods: updateStatus(), getJadwalAktif()

> **"Contoh Method updateStatus():"**
```javascript
// Fungsi untuk update status lab
function updateStatus(newStatus) {
  this.status = newStatus;
  // Update di database
  // Refresh dashboard
}
```

**TIPS:**
- Tidak perlu terlalu detail di bagian ini
- Durasi: 2 menit

---

### SLIDE 9: Activity Diagram

**ISI SLIDE:**
- Alur lengkap Input Presensi
- START → 10 Step → END

**PENJELASAN STEP BY STEP:**

> **"Activity Diagram = Flowchart detail dari 1 proses"**

**DEMO LIVE SAMBIL JELASKAN:**

1. **START** → ASDOS Login
2. Pilih Menu "Absensi & Materi"
3. Klik "+ Input Presensi Mahasiswa"
4. **Modal Form Terbuka** → Dropdown Matkul otomatis terisi "Pemrograman Web" (sesuai ASDOS)
5. **Pilih Pertemuan** → Misal "Pertemuan 3"
6. **TRIGGER SMART REFERENCE** → Materi auto-suggest: "CSS Variables, Glassmorphism UI..."
7. **Input Data Mahasiswa:**
   - NIM: 21IF001
   - Nama: Ahmad Rizal
   - Status: Hadir
8. **Validasi** → Cek duplikat NIM di pertemuan sama
   - ❌ Invalid → Error toast
   - ✅ Valid → Lanjut
9. **Simpan ke Database** [Tabel: absensi]
10. **Refresh Tabel** & Update dashboard metrics
11. **Toast Success:** "Data presensi berhasil disimpan!"
12. **END**

**DEMO LIVE SANGAT PENTING DI SLIDE INI!**

**TIPS:**
- Jalan pelan-pelan sambil demo
- Tunjukkan setiap step di browser
- Durasi: 5 menit

---

### SLIDE 10: ERD Detail - Relasi Tabel

**ISI SLIDE:**
- 6 Tabel Database
- Field detail dengan tipe data
- Constraint & Relasi

**PENJELASAN:**

> "Ini adalah struktur database lengkap dengan 6 tabel utama."

**TABEL PENTING:**

1. **laboratorium**
   - id_lab (PK)
   - nama_lab (UNIQUE)
   - kapasitas, status

2. **jadwal**
   - id_jadwal (PK)
   - id_lab (FK → laboratorium)
   - id_matkul (FK → matkul)
   - **CONSTRAINT:** UNIQUE(id_lab, hari, jam) → **Ini yang cegah bentrok!**

3. **absensi**
   - id_absensi (PK)
   - nim, nama_mahasiswa
   - id_matkul (FK → matkul)
   - **CONSTRAINT:** UNIQUE(nim, id_matkul, pertemuan) → Cegah input duplikat

4. **hasil_nilai**
   - nilai_akhir (COMPUTED: 0.4*tugas + 0.6*ujian)

**TIPS:**
- Fokus pada CONSTRAINT yang penting
- Jelaskan kenapa perlu UNIQUE constraint
- Durasi: 4 menit

---

### SLIDE 11: Teknologi & Stack

**ISI SLIDE:**
- Frontend: HTML5, CSS3, Vanilla JS
- Backend Konsep: Node.js, MySQL
- Security: Multi-Role Auth
- UI/UX: Glassmorphism

**PENJELASAN:**

> **"Teknologi Frontend yang Digunakan:"**

1. **HTML5** - Semantic Elements
```html
<section class="page-view" id="page-dashboard">
  <header class="view-header">
    <h1 class="view-title">Dashboard Lab</h1>
  </header>
</section>
```

2. **CSS3** - Glassmorphism Design
```css
.glass-card {
  background: rgba(14, 18, 32, 0.85);
  backdrop-filter: blur(24px);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
}
```

> **"Apa itu Glassmorphism?"**
> "Glassmorphism adalah desain seperti kaca buram. Ada efek blur di belakang card, membuat tampilan modern dan elegant."

**DEMO DI BROWSER:**
- Tunjukkan glass card dengan efek blur
- Tunjukkan ambient glow spheres di background
- Scroll dan lihat smooth animations

3. **Vanilla JavaScript** - No Framework
> "Kita tidak pakai framework React atau Vue. Semua logic ditulis manual dengan JavaScript murni. Ini membuat sistem lebih lightweight dan cepat."

**FITUR KEAMANAN:**
- Multi-Role Authentication
- Isolated Scope
- Input Validation
- Conflict Detection

**TIPS:**
- Demo visual glassmorphism effect
- Durasi: 4 menit

---

### SLIDE 12: Fitur Unggulan

**ISI SLIDE:**
- 6 Fitur Unggulan

**PENJELASAN DETAIL:**

> **"✨ Fitur 1: SMART MATERIAL REFERENCE"**
> "Ketika ASDOS input presensi dan pilih pertemuan, sistem otomatis suggest materi yang sesuai. Tidak perlu ingat-ingat lagi materi apa pertemuan 3, sistem sudah tau."

> **"✨ Fitur 2: CONFLICT DETECTION"**
> "Sistem otomatis deteksi jadwal bentrok. ASDOS tidak bisa input jadwal yang sama. Tapi Admin bisa override kalau memang diperlukan dengan konfirmasi."

> **"✨ Fitur 3: ISOLATED SCOPE"**
> "ASDOS Pemrograman Web tidak bisa lihat data Basis Data. Privacy terjaga."

> **"✨ Fitur 4: REAL-TIME DASHBOARD"**
> "Dashboard langsung update ketika ada perubahan data. Metrics live."

> **"✨ Fitur 5: GLASSMORPHISM UI"**
> "Desain modern dengan glass effect, ambient glow, smooth animations. Dark theme dengan warna UIR hijau dan emas."

> **"✨ Fitur 6: RESPONSIVE"**
> "Sistem bisa dibuka di laptop, tablet, atau HP. Layout otomatis menyesuaikan."

**TIPS:**
- Tekankan 3 fitur utama: Smart Reference, Conflict Detection, Isolated Scope
- Durasi: 4 menit

---

### SLIDE 13: Kesimpulan

**ISI SLIDE:**
- Ringkasan sistem
- Manfaat utama
- Saran pengembangan

**PENJELASAN:**

> **"Kesimpulan:"**
> "SILAB UIR adalah solusi terpadu untuk mengelola 5 laboratorium komputer dengan total 170 PC. Sistem mengintegrasikan penjadwalan, presensi, inventaris, dan nilai dalam satu platform."

> **"Manfaat Utama:"**
> ✅ Efisiensi: Otomasi jadwal, deteksi konflik
> ✅ Akurasi: Smart reference, validasi otomatis
> ✅ Keamanan: Multi-role auth, isolated scope
> ✅ UX: Modern UI, intuitive, responsive

> **"Pengembangan Kedepan:"**
> - Backend API (Node.js + MySQL) untuk production
> - Mobile App (Flutter)
> - Export Report (PDF/Excel)
> - Email Notification
> - QR Code untuk presensi otomatis

**TIPS:**
- Rangkum poin-poin penting
- Buka sesi Q&A
- Durasi: 3 menit

---

### SLIDE 14: Terima Kasih

**ISI SLIDE:**
- Thank you
- Contact info

**PENJELASAN:**

> "Terima kasih atas perhatiannya. Ada pertanyaan?"

**TIPS:**
- Siap jawab pertanyaan
- Durasi: 2 menit + Q&A

---

## 🔥 TIPS PRESENTASI PENTING

### 1. PERSIAPAN
- ✅ Test buka index.html di browser SEBELUM presentasi
- ✅ Login sebagai Admin dan ASDOS untuk latihan
- ✅ Bookmark halaman-halaman penting
- ✅ Siapkan data dummy untuk demo

### 2. STRUKTUR WAKTU (Total 45 menit)
- Slide 1-2: 5 menit (Intro)
- Slide 3-4: 8 menit (ERD & Hirarki)
- Slide 5-6: 10 menit (DFD) ⭐ PALING PENTING
- Slide 7-9: 10 menit (Use Case, Class, Activity)
- Slide 10-11: 7 menit (Database & Tech)
- Slide 12-13: 5 menit (Fitur & Kesimpulan)
- Q&A: 10-15 menit

### 3. DEMO LIVE YANG WAJIB
1. ✅ Login Admin vs ASDOS (Slide 4)
2. ✅ Conflict Detection - Jadwal Bentrok (Slide 5)
3. ✅ Smart Material Reference - Auto-suggest (Slide 5)
4. ✅ Input Presensi Step-by-Step (Slide 9)
5. ✅ Dashboard Metrics Real-Time (Slide 11)
6. ✅ Glassmorphism UI Effects (Slide 11)

### 4. BAHASA PRESENTASI
- Gunakan bahasa campuran Indonesia-Inggris yang natural
- Hindari bahasa terlalu teknis untuk dosen non-IT
- Gunakan analogi sederhana (KTP, Nomor Referensi, dll)

### 5. ANTISIPASI PERTANYAAN

**Q: "Kenapa tidak pakai framework seperti React?"**
A: "Untuk pembelajaran fundamental, kami menggunakan Vanilla JavaScript agar memahami konsep dasar. Kedepannya bisa di-migrate ke framework modern."

**Q: "Bagaimana dengan database? Kok pakai object JavaScript?"**
A: "Saat ini masih prototype dengan in-memory object untuk demo. Struktur database SQL sudah kami siapkan untuk implementasi production dengan MySQL."

**Q: "Apa perbedaan Admin dan ASDOS?"**
A: "Admin punya full access, bisa kelola semua lab dan data. ASDOS hanya bisa akses data mata kuliah yang mereka ampu. Ini untuk keamanan dan privacy data."

**Q: "Bagaimana cara sistem deteksi jadwal bentrok?"**
A: "Sistem cek kombinasi Lab + Hari + Jam. Jika sudah ada yang sama, sistem tolak atau minta konfirmasi Admin." (Tunjukkan kode baris 350-370)

**Q: "Apa itu Smart Material Reference?"**
A: "Ketika ASDOS input presensi dan pilih pertemuan, sistem otomatis suggest materi yang sesuai berdasarkan mata kuliah dan nomor pertemuan. Ini mengurangi kesalahan entry." (Tunjukkan kode baris 47-75)

### 6. CLOSING
- Tekankan 3 fitur unggulan: Smart Reference, Conflict Detection, Isolated Scope
- Mention pengembangan kedepan
- Ucapkan terima kasih

---

## 📝 PENJELASAN KODE UNTUK DOSEN PENGUJI

### STRUKTUR FILE

```
📂 Sistem-Laboratorium/
├── 📄 index.html         (3000+ baris) - UI Interface
├── 📄 app.js             (1500+ baris) - Logic JavaScript
├── 📄 style.css          (1600+ baris) - Styling Glassmorphism
├── 🖼️ logo-uir.png       - Logo UIR
├── 🖼️ admin-bg.jpg       - Background Login Admin
└── 🖼️ user-bg.jpg        - Background Login ASDOS
```

### PENJELASAN KODE PENTING

#### 1. DATABASE STRUCTURE (app.js baris 3-90)
```javascript
let db = {
  labs: [...],      // 5 Laboratorium
  matkul: [...],    // Mata Kuliah
  jadwal: [...],    // Jadwal Praktikum
  inventaris: [...],// Aset PC
  absensi: [...],   // Presensi Mahasiswa
  hasil: [...]      // Nilai Akhir
};
```

#### 2. SMART MATERIAL REFERENCE (app.js baris 47-75)
```javascript
const smartMaterials = {
  'Pemrograman Web': {
    'Pertemuan 1': 'Pengenalan HTML5...',
    'Pertemuan 2': 'DOM Manipulation...',
    'Pertemuan 3': 'CSS Variables, Glassmorphism...'
  },
  'Basis Data': {
    'Pertemuan 1': 'ERD & Normalisasi 3NF...',
    // ...
  }
};
```

#### 3. CONFLICT DETECTION (app.js baris 350-375)
```javascript
const conflict = db.jadwal.find(j => 
  j.lab === lab && 
  j.hari === hari && 
  j.jam.toLowerCase() === jam.toLowerCase()
);

if (conflict) {
  if (currentRole !== 'admin') {
    showToast('JADWAL BERTABRAKAN!', 'error');
    return; // ASDOS tidak bisa tambah
  } else {
    // Admin bisa override
    if (!confirm('Bentrok. Lanjutkan?')) return;
  }
}
```

#### 4. ISOLATED SCOPE (app.js baris 117-180)
```javascript
function applyRolePermissions() {
  const isAsdos = currentRole === 'asisten';
  
  if (isAsdos && currentAslabUser) {
    // Filter otomatis ke matkul ASDOS
    const fAbs = document.getElementById('filterAbsensiMatkul');
    if (fAbs) {
      fAbs.value = currentAslabUser.matkul; // Auto-preset
      renderAbsensi(); // Tampilkan hanya data matkul sendiri
    }
  }
}
```

#### 5. NILAI AKHIR CALCULATION (app.js baris 780-810)
```javascript
const nilaiAkhir = (tugas * 0.4) + (ujian * 0.6);
const statusLulus = nilaiAkhir >= 60 ? 'Lulus' : 'Tidak Lulus';
```

#### 6. GLASSMORPHISM CSS (style.css baris 200-220)
```css
.glass-card {
  background: rgba(14, 18, 32, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

## 🎯 CHECKLIST SEBELUM PRESENTASI

- [ ] PowerPoint sudah dibuka dan di-preview
- [ ] Browser sudah buka index.html
- [ ] Test login Admin (admin_uir / password / 8891)
- [ ] Test login ASDOS (20IF001 / password / ASLAB-UIR-8891)
- [ ] Bookmark fitur penting untuk demo
- [ ] Siapkan data dummy untuk input
- [ ] Laptop full battery atau colok charger
- [ ] File backup di USB/cloud
- [ ] Latihan presentasi minimal 2x

---

## 💪 PERCAYA DIRI!

Anda sudah membuat sistem yang sangat lengkap dengan:
✅ 6 tabel database terstruktur
✅ Multi-role authentication
✅ Smart features (Material Reference, Conflict Detection)
✅ Modern glassmorphism UI
✅ Responsive design
✅ 3000+ baris kode

Ini adalah project yang solid! Jelaskan dengan percaya diri, demo dengan lancar, dan jawab pertanyaan dengan tenang.

**GOOD LUCK! 🚀**

---

*Generated by: Kiro AI Assistant for UIR SILAB Presentation*
