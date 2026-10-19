# WALKTHROUGH & DOKUMENTASI TEKNIS
# SILAB UIR — Sistem Informasi Laboratorium
## Universitas Islam Riau (UIR) Pekanbaru

---

> **Versi:** Revisi Final 2024
> **Teknologi:** HTML5, Vanilla CSS, Vanilla JavaScript (SPA)
> **Pengguna:** 2 Role — Laboran/Admin & ASLAB

---

## STRUKTUR FILE PROYEK

```
Sistem-Laboratorium/
|
|-- index.html        <- Struktur HTML + semua modal + 2 halaman login
|-- app.js            <- Logika utama: database, auth, routing, render
|-- style.css         <- Design system: dark theme, glassmorphism
|-- logo-uir.png      <- Logo Universitas Islam Riau
|-- WALKTHROUGH.md    <- File ini (dokumentasi)
```

---

## ARSITEKTUR SISTEM (SPA — Single Page Application)

SILAB UIR adalah SPA murni tanpa backend. Semua data disimpan sementara
di memori JavaScript (`let db = {...}`).

```
BROWSER
  |-- index.html   <- Kerangka tampilan
  |-- app.js       <- Database + Auth + Router + Render
  |-- style.css    <- Seluruh tampilan visual
```

Alur kerja:
1. User buka halaman -> muncul login sesuai role
2. Setelah login -> sidebar dibangun dinamis oleh JS
3. Klik menu -> navigateTo() -> render halaman yang dipilih
4. Semua data disimpan di objek `db` di memori

---

## PENGGUNA SISTEM (2 Role)

### 1. LABORAN / ADMIN
- Login: Username + Password + PIN 4 digit
- PIN default: 8891
- Akses: Penuh ke semua fitur manajemen

### 2. ASLAB (Asisten Laboratorium)
- Login: Username + Password
- Akses: Terbatas hanya ke data matkul sendiri

**Akun ASLAB bawaan:**
| Username | Password | Mata Kuliah |
| andi     | andi123  | Pemrograman Web, Kecerdasan Buatan |
| budi     | budi123  | Basis Data |
| citra    | citra123 | Jaringan Komputer |
| dian     | dian123  | Pemrograman Mobile |
| eko      | eko123   | Kecerdasan Buatan, Basis Data |

---

## ALUR AUTENTIKASI

```
Buka SILAB
    |
    v
Pilih Portal: [Admin] atau [ASLAB]
    |                |
    v                v
Admin Login      ASLAB Login
(+ PIN 8891)     (username+pass)
    |                |
    v                v
buildAdminSidebar()  buildAslabSidebar()
    |                |
    +-------+--------+
            |
            v
       navigateTo('dashboard')
       renderDashboard()
```

---

## STRUKTUR DATABASE (In-Memory)

### db.aslab[] — Data ASLAB
```
id, nim, nama, username, password, matkul[], lab, contact, status
```

### db.matkul[] — Mata Kuliah
```
id, kode, nama, sks, dosen, status
```

### db.labs[] — Laboratorium
```
id, nama, kapasitas, status, keterangan
Status: 'tersedia' | 'sedang' | 'maintenance'
```

### db.jadwal[] — Jadwal Praktikum
```
id, matkul, aslab, lab, pertemuan(1-8), tanggal, jamMulai, jamSelesai, materi
DIBUAT OLEH LABORAN. ASLAB tidak bisa ubah.
```

### db.absensi[] — Data Absensi
```
id, jadwalId, aslab, matkul, pertemuan, tanggal, waktuAbsen, status
```

### db.modul[] — Modul Praktikum
```
id, matkul, pertemuan, judul, deskripsi
DIBUAT OLEH LABORAN. ASLAB hanya lihat.
```

### db.nilai[] — Nilai Akhir Mahasiswa
```
id, nim, nama, matkul, aslab, nilaiTugas, nilaiUjian
Nilai Akhir = (nilaiTugas x 40%) + (nilaiUjian x 60%)
```

### db.inventaris[] — Aset Lab
```
id, kode, nama, lab, jumlah, kondisi, keterangan
Kondisi: 'Bagus' | 'Perlu Perbaikan' | 'Rusak'
```

---

## PETA HALAMAN PER ROLE

### LABORAN (Admin):
- Dashboard (statistik + status 5 lab)
- Mata Kuliah (CRUD)
- Data ASLAB (CRUD + username/password)
- Laboratorium (CRUD + ubah status)
- Data Jadwal (CRUD — 8 pertemuan per matkul)
- Modul Praktikum (CRUD)
- Data Absensi (View Only + Export CSV)
- Rekap Kegiatan (Export CSV)
- Monitoring ASLAB (Checklist: Absensi/Modul/Nilai)
- Inventaris (CRUD)

### ASLAB:
- Dashboard Saya (hanya data matkul sendiri)
- Data Jadwal Saya (View Only — dibuat Laboran)
- Absensi Saya (TIME-GATED — hanya bisa di hari & jam jadwal)
- Modul Praktikum (View Only)
- Nilai Akhir (CRUD + Export CSV)

---

## FITUR ABSENSI TIME-GATED (Unggulan)

Tombol ABSEN hanya aktif jika:
1. Tanggal hari ini == tanggal jadwal
2. Jam sekarang >= jam mulai jadwal

```javascript
function isWaktuAbsen(jamMulai, now) {
  const [h, m] = jamMulai.split(':').map(Number);
  return now.getHours() > h ||
    (now.getHours() === h && now.getMinutes() >= m);
}
```

Status tombol:
- Sudah absen         -> disabled hijau (Selesai)
- Bisa absen sekarang -> AKTIF dengan animasi pulse
- Belum waktunya      -> disabled abu-abu (Terkunci)
- Jadwal sudah lewat  -> disabled merah (Tidak Absen)
- Jadwal masa depan   -> disabled kuning (Belum waktunya)

---

## FORMULA NILAI AKHIR

```
Nilai Akhir = (nilaiTugas x 0.4) + (nilaiUjian x 0.6)

Grade:
  >= 85  -> A (Sangat Baik)
  >= 75  -> B (Baik)
  >= 65  -> C (Cukup)
  <  65  -> D (Mengulang)
```

---

## MONITORING ASLAB (Checklist)

Untuk setiap ASLAB x Mata Kuliah, Laboran bisa melihat:
- [v] Data Absensi   -> Ada di db.absensi?
- [v] Modul Tersedia -> Ada di db.modul?
- [v] Nilai Akhir    -> Ada di db.nilai?

Card hijau = semua selesai
Card normal = masih ada yang belum

---

## PANDUAN PENGUJIAN

### Test 1: Login Admin
1. Buka http://localhost:8000
2. Username: admin_uir | Password: admin123 | PIN: 8891
3. Klik MASUK CONTROL CENTER LABORAN
4. [OK] Dashboard Admin muncul

### Test 2: Tambah Jadwal
1. Login Admin -> klik Data Jadwal
2. Klik + Tambah Jadwal
3. Isi semua field -> Simpan
4. [OK] Jadwal muncul di tabel

### Test 3: Login ASLAB
1. Klik "Login Portal ASLAB" di halaman login
2. Username: andi | Password: andi123
3. [OK] Dashboard ASLAB hanya tampilkan data Andi
4. [OK] Sidebar hanya ada menu ASLAB

### Test 4: Absensi
1. Login ASLAB andi
2. Klik Absensi Saya
3. Jika ada jadwal hari ini & jam sudah masuk -> tombol ABSEN aktif
4. Klik ABSEN -> toast muncul -> status berubah
TIPS: Tambahkan jadwal baru dengan tanggal=hari ini dari akun Admin dulu

### Test 5: Export CSV Nilai
1. Login ASLAB -> Nilai Akhir
2. Input beberapa data nilai
3. Klik Export CSV Nilai
4. [OK] File .csv terunduh

### Test 6: Monitoring Checklist (Admin)
1. Login Admin -> Monitoring ASLAB
2. [OK] Semua ASLAB tampil dengan checklist per matkul

---

## CARA MENJALANKAN

```bash
cd "C:\Users\Lenovo\Desktop\Sistem-Laboratorium"
python -m http.server 8000
# Buka: http://localhost:8000
```

---

## CATATAN TEKNIS

1. Data tidak persisten - reset saat refresh halaman
2. Password plain text (untuk produksi harus di-hash)
3. Tidak ada session persistence - harus login ulang setelah refresh
4. Tidak ada backend - murni client-side JavaScript
5. Compatible: Chrome, Firefox, Edge (browser modern)

---

## RINGKASAN REVISI

| # | Revisi                                          | Status |
|---|-------------------------------------------------|--------|
| 1 | Pengguna hanya 2: Admin/Laboran dan ASLAB      | DONE   |
| 2 | Hapus role mahasiswa                            | DONE   |
| 3 | ASLAB login username+password (bukan kode unik) | DONE   |
| 4 | ASLAB hanya lihat data matkul sendiri           | DONE   |
| 5 | Jadwal dibuat Laboran, ASLAB tidak bisa ubah    | DONE   |
| 6 | 8 pertemuan per matkul, data seed lengkap       | DONE   |
| 7 | Absensi time-gated (cek hari + jam)             | DONE   |
| 8 | Data Absensi Admin: View Only                   | DONE   |
| 9 | Modul: dibuat Admin, ASLAB hanya lihat          | DONE   |
|10 | Nilai Akhir: 40% tugas + 60% ujian              | DONE   |
|11 | Monitoring ASLAB: checklist 3 item              | DONE   |
|12 | Export CSV: Absensi, Rekap, Nilai               | DONE   |
|13 | Rekap Kegiatan per ASLAB per Matkul             | DONE   |
|14 | Inventaris sederhana                            | DONE   |
|15 | Sidebar dinamis berdasarkan role                | DONE   |
|16 | Hapus halaman Blueprint/Diagram                 | DONE   |

---

Universitas Islam Riau — Sistem Informasi Laboratorium Komputer (SILAB UIR)
