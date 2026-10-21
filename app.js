/* ===================================================================
   APP.JS — SILAB UIR (Sistem Informasi Laboratorium)
   Universitas Islam Riau — Revisi Final
   Pengguna: 1) Admin/Laboran  2) ASLAB
   =================================================================== */

let db = {
  admins: [
    { id:1, nip:'198705152010121002', nama:'Laboran Utama FT', username:'admin_uir', password:'admin123', pin:'8891' }
  ],
  aslab: [
    { id:1, nim:'ASLAB001', nama:'Andi Prasetyo',  username:'andi',  password:'andi123',  matkul:['Pemrograman Web','Kecerdasan Buatan'], lab:'Lab 1', contact:'0812-7654-3210', status:'Aktif' },
    { id:2, nim:'ASLAB002', nama:'Budi Hermawan',  username:'budi',  password:'budi123',  matkul:['Basis Data'],                          lab:'Lab 2', contact:'0813-9876-5432', status:'Aktif' },
    { id:3, nim:'ASLAB003', nama:'Citra Dewi',     username:'citra', password:'citra123', matkul:['Jaringan Komputer'],                   lab:'Lab 3', contact:'0821-4567-8901', status:'Aktif' },
    { id:4, nim:'ASLAB004', nama:'Dian Safitri',   username:'dian',  password:'dian123',  matkul:['Pemrograman Mobile'],                  lab:'Lab 4', contact:'0852-1234-5678', status:'Aktif' },
    { id:5, nim:'ASLAB005', nama:'Eko Santoso',    username:'eko',   password:'eko123',   matkul:['Kecerdasan Buatan','Basis Data'],       lab:'Lab 5', contact:'0819-3344-5566', status:'Aktif' },
  ],
  matkul: [
    { id:1, kode:'IF201', nama:'Pemrograman Web',    sks:3, dosen:'Dr. Ahmad Fauzi',    status:'Aktif' },
    { id:2, kode:'IF202', nama:'Basis Data',          sks:3, dosen:'Dr. Siti Rahayu',    status:'Aktif' },
    { id:3, kode:'IF203', nama:'Jaringan Komputer',   sks:2, dosen:'Prof. Budi Santoso', status:'Aktif' },
    { id:4, kode:'IF301', nama:'Pemrograman Mobile',  sks:3, dosen:'Dr. Dewi Lestari',   status:'Aktif' },
    { id:5, kode:'IF305', nama:'Kecerdasan Buatan',   sks:3, dosen:'Dr. Ir. Hendra',     status:'Aktif' },
  ],
  labs: [
    { id:1, nama:'Lab 1', kapasitas:40, status:'tersedia',    keterangan:'Lab Pemrograman Web dan Frontend' },
    { id:2, nama:'Lab 2', kapasitas:35, status:'sedang',      keterangan:'Lab SQL dan Database' },
    { id:3, nama:'Lab 3', kapasitas:30, status:'tersedia',    keterangan:'Lab Cisco dan Networking' },
    { id:4, nama:'Lab 4', kapasitas:25, status:'maintenance', keterangan:'Setup Emulator dan Maintenance' },
    { id:5, nama:'Lab 5', kapasitas:40, status:'tersedia',    keterangan:'Lab Deep Learning dan AI Studio' },
  ],
  jadwal: [
    { id:1,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:1, tanggal:'2024-09-10', jamMulai:'08:00', jamSelesai:'10:00', materi:'Pengenalan HTML5 dan CSS Grid' },
    { id:2,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:2, tanggal:'2024-09-17', jamMulai:'08:00', jamSelesai:'10:00', materi:'Manipulasi DOM dan JavaScript Event' },
    { id:3,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:3, tanggal:'2024-09-24', jamMulai:'08:00', jamSelesai:'10:00', materi:'CSS Variables dan Glassmorphism UI' },
    { id:4,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:4, tanggal:'2024-10-01', jamMulai:'08:00', jamSelesai:'10:00', materi:'Integrasi REST API dan Fetch' },
    { id:5,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:5, tanggal:'2024-10-08', jamMulai:'08:00', jamSelesai:'10:00', materi:'Framework CSS Bootstrap dan Tailwind' },
    { id:6,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:6, tanggal:'2024-10-15', jamMulai:'08:00', jamSelesai:'10:00', materi:'SPA Single Page Application' },
    { id:7,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:7, tanggal:'2024-10-22', jamMulai:'08:00', jamSelesai:'10:00', materi:'Form Validation dan Local Storage' },
    { id:8,  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', lab:'Lab 1', pertemuan:8, tanggal:'2024-10-29', jamMulai:'08:00', jamSelesai:'10:00', materi:'Deployment dan Project Final Web' },
    { id:9,  matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:1, tanggal:'2024-09-10', jamMulai:'10:00', jamSelesai:'12:00', materi:'Konsep Basis Data Relasional dan ERD' },
    { id:10, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:2, tanggal:'2024-09-17', jamMulai:'10:00', jamSelesai:'12:00', materi:'DDL dan DML SQL CREATE INSERT UPDATE' },
    { id:11, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:3, tanggal:'2024-09-24', jamMulai:'10:00', jamSelesai:'12:00', materi:'SQL Joins dan Aggregate Functions' },
    { id:12, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:4, tanggal:'2024-10-01', jamMulai:'10:00', jamSelesai:'12:00', materi:'Transaction Management dan Indexing' },
    { id:13, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:5, tanggal:'2024-10-08', jamMulai:'10:00', jamSelesai:'12:00', materi:'Stored Procedures dan Trigger' },
    { id:14, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:6, tanggal:'2024-10-15', jamMulai:'10:00', jamSelesai:'12:00', materi:'Normalisasi dan Denormalisasi' },
    { id:15, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:7, tanggal:'2024-10-22', jamMulai:'10:00', jamSelesai:'12:00', materi:'NoSQL dan MongoDB Dasar' },
    { id:16, matkul:'Basis Data',        aslab:'Budi Hermawan', lab:'Lab 2', pertemuan:8, tanggal:'2024-10-29', jamMulai:'10:00', jamSelesai:'12:00', materi:'Project Final Basis Data' },
    { id:17, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:1, tanggal:'2024-09-11', jamMulai:'13:00', jamSelesai:'15:00', materi:'Pengenalan AI dan Python for Data Science' },
    { id:18, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:2, tanggal:'2024-09-18', jamMulai:'13:00', jamSelesai:'15:00', materi:'Supervised Learning dan Scikit-Learn' },
    { id:19, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:3, tanggal:'2024-09-25', jamMulai:'13:00', jamSelesai:'15:00', materi:'Neural Networks dan Deep Learning' },
    { id:20, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:4, tanggal:'2024-10-02', jamMulai:'13:00', jamSelesai:'15:00', materi:'Computer Vision dan OpenCV' },
    { id:21, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:5, tanggal:'2024-10-09', jamMulai:'13:00', jamSelesai:'15:00', materi:'NLP Natural Language Processing' },
    { id:22, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:6, tanggal:'2024-10-16', jamMulai:'13:00', jamSelesai:'15:00', materi:'Reinforcement Learning Dasar' },
    { id:23, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:7, tanggal:'2024-10-23', jamMulai:'13:00', jamSelesai:'15:00', materi:'Model Deployment dan API' },
    { id:24, matkul:'Kecerdasan Buatan', aslab:'Andi Prasetyo', lab:'Lab 5', pertemuan:8, tanggal:'2024-10-30', jamMulai:'13:00', jamSelesai:'15:00', materi:'Project Final AI' },
    { id:25, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:1, tanggal:'2024-09-11', jamMulai:'08:00', jamSelesai:'10:00', materi:'Model OSI dan Topologi LAN' },
    { id:26, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:2, tanggal:'2024-09-18', jamMulai:'08:00', jamSelesai:'10:00', materi:'Subnetting IPv4 dan VLSM' },
    { id:27, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:3, tanggal:'2024-09-25', jamMulai:'08:00', jamSelesai:'10:00', materi:'VLAN dan Inter-VLAN Routing' },
    { id:28, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:4, tanggal:'2024-10-02', jamMulai:'08:00', jamSelesai:'10:00', materi:'Routing Dinamik OSPF' },
    { id:29, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:5, tanggal:'2024-10-09', jamMulai:'08:00', jamSelesai:'10:00', materi:'Wireless Security dan WPA' },
    { id:30, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:6, tanggal:'2024-10-16', jamMulai:'08:00', jamSelesai:'10:00', materi:'Firewall dan Network Security' },
    { id:31, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:7, tanggal:'2024-10-23', jamMulai:'08:00', jamSelesai:'10:00', materi:'Monitoring Jaringan dan Wireshark' },
    { id:32, matkul:'Jaringan Komputer', aslab:'Citra Dewi',    lab:'Lab 3', pertemuan:8, tanggal:'2024-10-30', jamMulai:'08:00', jamSelesai:'10:00', materi:'Project Final Jaringan' },
    { id:33, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:1, tanggal:'2024-09-12', jamMulai:'08:00', jamSelesai:'10:00', materi:'Setup Flutter dan Android SDK' },
    { id:34, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:2, tanggal:'2024-09-19', jamMulai:'08:00', jamSelesai:'10:00', materi:'Layout Widgets dan State Management' },
    { id:35, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:3, tanggal:'2024-09-26', jamMulai:'08:00', jamSelesai:'10:00', materi:'Navigasi Multi-Screen dan Routing' },
    { id:36, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:4, tanggal:'2024-10-03', jamMulai:'08:00', jamSelesai:'10:00', materi:'Firebase Auth dan Realtime DB' },
    { id:37, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:5, tanggal:'2024-10-10', jamMulai:'08:00', jamSelesai:'10:00', materi:'REST API Integration Flutter' },
    { id:38, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:6, tanggal:'2024-10-17', jamMulai:'08:00', jamSelesai:'10:00', materi:'Local Storage dan SQLite' },
    { id:39, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:7, tanggal:'2024-10-24', jamMulai:'08:00', jamSelesai:'10:00', materi:'Push Notification dan FCM' },
    { id:40, matkul:'Pemrograman Mobile',aslab:'Dian Safitri',  lab:'Lab 4', pertemuan:8, tanggal:'2024-10-31', jamMulai:'08:00', jamSelesai:'10:00', materi:'Project Final Mobile App' },
  ],
  absensi: [
    { id:1, jadwalId:1,  aslab:'Andi Prasetyo', matkul:'Pemrograman Web',   pertemuan:1, tanggal:'2024-09-10', waktuAbsen:'08:05', status:'Hadir' },
    { id:2, jadwalId:9,  aslab:'Budi Hermawan', matkul:'Basis Data',         pertemuan:1, tanggal:'2024-09-10', waktuAbsen:'10:02', status:'Hadir' },
    { id:3, jadwalId:25, aslab:'Citra Dewi',    matkul:'Jaringan Komputer',  pertemuan:1, tanggal:'2024-09-11', waktuAbsen:'08:03', status:'Hadir' },
  ],
  modul: [
    { id:1,  matkul:'Pemrograman Web',    pertemuan:1, judul:'Modul 1 - Dasar HTML5 dan CSS Grid',        deskripsi:'Membuat antarmuka web modern responsive dengan CSS variabel dan Grid Layout.' },
    { id:2,  matkul:'Pemrograman Web',    pertemuan:2, judul:'Modul 2 - DOM dan JavaScript Event',        deskripsi:'Manipulasi DOM secara dinamis dan pengelolaan event handling modern.' },
    { id:3,  matkul:'Pemrograman Web',    pertemuan:3, judul:'Modul 3 - CSS Variables dan Glassmorphism', deskripsi:'Desain UI modern dengan CSS custom properties dan efek kaca.' },
    { id:4,  matkul:'Pemrograman Web',    pertemuan:4, judul:'Modul 4 - REST API dan Fetch',              deskripsi:'Integrasi API publik menggunakan Fetch API dan async/await.' },
    { id:5,  matkul:'Pemrograman Web',    pertemuan:5, judul:'Modul 5 - Bootstrap dan Tailwind',          deskripsi:'Penggunaan framework CSS untuk mempercepat pengembangan UI.' },
    { id:6,  matkul:'Pemrograman Web',    pertemuan:6, judul:'Modul 6 - Single Page Application',         deskripsi:'Membangun SPA tanpa reload halaman dengan state management.' },
    { id:7,  matkul:'Pemrograman Web',    pertemuan:7, judul:'Modul 7 - Form Validation dan Storage',     deskripsi:'Validasi form sisi klien dan penyimpanan data lokal.' },
    { id:8,  matkul:'Pemrograman Web',    pertemuan:8, judul:'Modul 8 - Deployment Project Web',          deskripsi:'Deploy aplikasi ke Netlify/Vercel dan presentasi proyek akhir.' },
    { id:9,  matkul:'Basis Data',         pertemuan:1, judul:'Modul 1 - ERD dan Normalisasi',             deskripsi:'Perancangan ERD dan normalisasi hingga 3NF.' },
    { id:10, matkul:'Basis Data',         pertemuan:2, judul:'Modul 2 - DDL dan DML SQL',                 deskripsi:'Perintah dasar CREATE, INSERT, UPDATE, DELETE.' },
    { id:11, matkul:'Basis Data',         pertemuan:3, judul:'Modul 3 - SQL Joins',                       deskripsi:'INNER, LEFT, RIGHT JOIN dan UNION.' },
    { id:12, matkul:'Basis Data',         pertemuan:4, judul:'Modul 4 - Transaction dan Index',           deskripsi:'ACID, BEGIN TRANSACTION, ROLLBACK, dan Index strategi.' },
    { id:13, matkul:'Basis Data',         pertemuan:5, judul:'Modul 5 - Stored Procedure',                deskripsi:'Pembuatan stored procedure dan trigger database.' },
    { id:14, matkul:'Basis Data',         pertemuan:6, judul:'Modul 6 - Normalisasi Lanjut',              deskripsi:'Normalisasi BCNF dan denormalisasi untuk performa.' },
    { id:15, matkul:'Basis Data',         pertemuan:7, judul:'Modul 7 - NoSQL dan MongoDB',               deskripsi:'Pengenalan NoSQL dan operasi CRUD di MongoDB.' },
    { id:16, matkul:'Basis Data',         pertemuan:8, judul:'Modul 8 - Project Final Basis Data',        deskripsi:'Integrasi semua konsep dalam proyek database lengkap.' },
    { id:17, matkul:'Kecerdasan Buatan',  pertemuan:1, judul:'Modul 1 - Python for Data Science',         deskripsi:'Dasar Python, NumPy, Pandas, dan Jupyter Notebook.' },
    { id:18, matkul:'Kecerdasan Buatan',  pertemuan:2, judul:'Modul 2 - Supervised Learning',             deskripsi:'Klasifikasi dan regresi dengan Scikit-Learn.' },
    { id:19, matkul:'Kecerdasan Buatan',  pertemuan:3, judul:'Modul 3 - Neural Networks',                 deskripsi:'Arsitektur ANN dan implementasi PyTorch.' },
    { id:20, matkul:'Kecerdasan Buatan',  pertemuan:4, judul:'Modul 4 - Computer Vision',                 deskripsi:'Pengolahan gambar dengan OpenCV dan CNN.' },
    { id:21, matkul:'Kecerdasan Buatan',  pertemuan:5, judul:'Modul 5 - NLP',                             deskripsi:'Tokenisasi, embedding, dan analisis sentimen.' },
    { id:22, matkul:'Kecerdasan Buatan',  pertemuan:6, judul:'Modul 6 - Reinforcement Learning',          deskripsi:'Konsep Q-Learning dan Policy Gradient.' },
    { id:23, matkul:'Kecerdasan Buatan',  pertemuan:7, judul:'Modul 7 - Model Deployment',                deskripsi:'Serving model via Flask/FastAPI.' },
    { id:24, matkul:'Kecerdasan Buatan',  pertemuan:8, judul:'Modul 8 - Project Final AI',                deskripsi:'Proyek AI lengkap dari data hingga deployment.' },
    { id:25, matkul:'Jaringan Komputer',  pertemuan:1, judul:'Modul 1 - OSI dan LAN',                    deskripsi:'Model OSI, topologi, dan kabel UTP.' },
    { id:26, matkul:'Jaringan Komputer',  pertemuan:2, judul:'Modul 2 - Subnetting',                     deskripsi:'Subnetting IPv4 Classless dan VLSM.' },
    { id:27, matkul:'Jaringan Komputer',  pertemuan:3, judul:'Modul 3 - VLAN',                           deskripsi:'Konfigurasi VLAN dan Inter-VLAN Routing Cisco.' },
    { id:28, matkul:'Jaringan Komputer',  pertemuan:4, judul:'Modul 4 - Routing OSPF',                   deskripsi:'Dynamic routing OSPF pada Cisco Packet Tracer.' },
    { id:29, matkul:'Jaringan Komputer',  pertemuan:5, judul:'Modul 5 - Wireless Security',              deskripsi:'WPA2/3, keamanan jaringan wireless.' },
    { id:30, matkul:'Jaringan Komputer',  pertemuan:6, judul:'Modul 6 - Firewall',                       deskripsi:'Konfigurasi ACL dan firewall Cisco.' },
    { id:31, matkul:'Jaringan Komputer',  pertemuan:7, judul:'Modul 7 - Wireshark',                      deskripsi:'Monitoring dan analisis paket jaringan.' },
    { id:32, matkul:'Jaringan Komputer',  pertemuan:8, judul:'Modul 8 - Project Final Jaringan',         deskripsi:'Implementasi jaringan perusahaan lengkap.' },
    { id:33, matkul:'Pemrograman Mobile', pertemuan:1, judul:'Modul 1 - Flutter Setup',                  deskripsi:'Instalasi Flutter SDK, Dart, dan Android Studio.' },
    { id:34, matkul:'Pemrograman Mobile', pertemuan:2, judul:'Modul 2 - Layout dan Widgets',             deskripsi:'Widget dasar, Column, Row, Container, dan StatefulWidget.' },
    { id:35, matkul:'Pemrograman Mobile', pertemuan:3, judul:'Modul 3 - Navigasi',                       deskripsi:'Multi-screen navigation, routes, dan passing data.' },
    { id:36, matkul:'Pemrograman Mobile', pertemuan:4, judul:'Modul 4 - Firebase',                       deskripsi:'Auth Firebase dan Realtime Database.' },
    { id:37, matkul:'Pemrograman Mobile', pertemuan:5, judul:'Modul 5 - REST API',                       deskripsi:'HTTP request dan integrasi API menggunakan Dio.' },
    { id:38, matkul:'Pemrograman Mobile', pertemuan:6, judul:'Modul 6 - Local Storage',                  deskripsi:'SharedPreferences dan SQLite lokal.' },
    { id:39, matkul:'Pemrograman Mobile', pertemuan:7, judul:'Modul 7 - Push Notification',              deskripsi:'FCM dan local notification Flutter.' },
    { id:40, matkul:'Pemrograman Mobile', pertemuan:8, judul:'Modul 8 - Project Final Mobile',           deskripsi:'Proyek app Android lengkap siap publish.' },
  ],
  nilai: [
    { id:1, nim:'21IF001', nama:'Ahmad Rizal',     matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', nilaiTugas:88, nilaiUjian:92 },
    { id:2, nim:'21IF002', nama:'Bella Ananda',    matkul:'Basis Data',         aslab:'Budi Hermawan', nilaiTugas:82, nilaiUjian:85 },
    { id:3, nim:'21IF003', nama:'Chandra Wijaya',  matkul:'Pemrograman Web',   aslab:'Andi Prasetyo', nilaiTugas:90, nilaiUjian:87 },
    { id:4, nim:'21IF004', nama:'Diana Putri',     matkul:'Jaringan Komputer',  aslab:'Citra Dewi',    nilaiTugas:75, nilaiUjian:70 },
    { id:5, nim:'21IF005', nama:'Eko Santoso Jr.', matkul:'Basis Data',         aslab:'Budi Hermawan', nilaiTugas:65, nilaiUjian:60 },
  ],
  inventaris: [
    { id:1, kode:'INV-L1-001', nama:'PC Workstation Core i7 / 16GB / SSD 512GB', lab:'Lab 1', jumlah:40, kondisi:'Bagus',           keterangan:'Siap digunakan' },
    { id:2, kode:'INV-L2-001', nama:'PC Workstation Core i5 / 16GB RAM',          lab:'Lab 2', jumlah:35, kondisi:'Bagus',           keterangan:'Oracle DB Ready' },
    { id:3, kode:'INV-L3-001', nama:'Cisco Router 2911 dan Switch 2960',          lab:'Lab 3', jumlah:12, kondisi:'Perlu Perbaikan', keterangan:'2 Port Console Perlu Repair' },
    { id:4, kode:'INV-L4-001', nama:'Apple Mac Mini M2 / 16GB',                   lab:'Lab 4', jumlah:25, kondisi:'Rusak',           keterangan:'Power Supply Fault' },
    { id:5, kode:'INV-L5-001', nama:'Workstation RTX 4080 AI Deep Learning',      lab:'Lab 5', jumlah:40, kondisi:'Bagus',           keterangan:'Kondisi Prima dan Terkalibrasi' },
  ],
};

let counters = { jadwal:41, absensi:4, nilai:6, inventaris:6, matkul:6, aslab:6, modul:41 };
let currentRole = null;
let currentUser = null;

// Simpan clone data bawaan untuk keperluan Reset Data Demo
const defaultDbSeed = JSON.parse(JSON.stringify(db));
const defaultCountersSeed = JSON.parse(JSON.stringify(counters));

// ============================================================
// STORAGE & DATA PERSISTENCE (LOCALSTORAGE)
// ============================================================
function saveDB() {
  try {
    localStorage.setItem('silab_uir_db', JSON.stringify(db));
    localStorage.setItem('silab_uir_counters', JSON.stringify(counters));
  } catch (e) {
    console.error('Gagal menyimpan database ke localStorage:', e);
  }
}

function loadDB() {
  try {
    const rawDB = localStorage.getItem('silab_uir_db');
    const rawCounters = localStorage.getItem('silab_uir_counters');
    if (rawDB) {
      db = JSON.parse(rawDB);
      if (!db.admins || !Array.isArray(db.admins) || db.admins.length === 0) {
        db.admins = [
          { id:1, nip:'198705152010121002', nama:'Laboran Utama FT', username:'admin_uir', password:'admin123', pin:'8891' }
        ];
      }
    } else {
      ensureTestScheduleForToday();
      saveDB();
    }
    if (rawCounters) {
      counters = JSON.parse(rawCounters);
    }
    // Pastikan selalu ada jadwal untuk hari ini agar tombol absensi bisa diuji
    ensureTestScheduleForToday();
  } catch (e) {
    console.error('Gagal memuat database dari localStorage:', e);
    ensureTestScheduleForToday();
  }
}

function ensureTestScheduleForToday() {
  const todayStr = toDateString(new Date());
  if (!db || !Array.isArray(db.aslab) || !Array.isArray(db.jadwal)) return;
  let added = false;
  db.aslab.forEach(a => {
    const hasToday = db.jadwal.some(j => j.aslab === a.nama && j.tanggal === todayStr);
    if (!hasToday) {
      const mk = (a.matkul && a.matkul[0]) ? a.matkul[0] : 'Pemrograman Web';
      db.jadwal.unshift({
        id: counters.jadwal++,
        matkul: mk,
        aslab: a.nama,
        lab: a.lab || 'Lab 1',
        pertemuan: 6,
        tanggal: todayStr,
        jamMulai: '07:00',
        jamSelesai: '23:59',
        materi: 'Sesi Praktikum Aktif Hari Ini (' + formatTanggal(todayStr) + ') — Siap Presensi'
      });
      added = true;
    }
  });
  if (added) saveDB();
}

function saveSession(role, user, page) {
  try {
    localStorage.setItem('silab_session', JSON.stringify({ role, user, page: page || 'dashboard' }));
  } catch (e) {
    console.error('Gagal menyimpan sesi:', e);
  }
}

function clearSession() {
  try {
    localStorage.removeItem('silab_session');
  } catch (e) {
    console.error('Gagal menghapus sesi:', e);
  }
}

function restoreSession() {
  try {
    const raw = localStorage.getItem('silab_session');
    if (!raw) return false;
    const session = JSON.parse(raw);
    if (!session || !session.role || !session.user) return false;

    // Bersihkan sesi jika role admin tapi user adalah akun ASLAB
    if (session.role === 'admin' && session.user) {
      const uName = (session.user.username || session.user.nama || '').toLowerCase();
      const isAslab = db.aslab && db.aslab.some(a => a.username.toLowerCase() === uName);
      if (isAslab) {
        clearSession();
        return false;
      }
    }

    currentRole = session.role;
    currentUser = session.user;

    document.querySelectorAll('.auth-fullscreen-view').forEach(el => el.classList.remove('active-view'));
    document.getElementById('app-dashboard-container').classList.remove('hidden');

    if (currentRole === 'admin') {
      document.getElementById('currentRoleText').textContent = 'Laboran (Admin)';
      document.getElementById('roleDot').style.background = 'var(--emerald)';
      document.getElementById('userName').textContent = currentUser.nama || 'Laboran';
      document.getElementById('userEmail').textContent = 'laboran.admin@uir.ac.id';
      document.getElementById('userAvatar').textContent = (currentUser.nama || 'A').charAt(0).toUpperCase();
      buildAdminSidebar();
    } else {
      document.getElementById('currentRoleText').textContent = 'ASLAB';
      document.getElementById('roleDot').style.background = 'var(--cyan)';
      document.getElementById('userName').textContent = currentUser.nama;
      document.getElementById('userEmail').textContent = (currentUser.nim || 'aslab').toLowerCase() + '@aslab.uir.ac.id';
      document.getElementById('userAvatar').textContent = currentUser.nama.charAt(0);
      buildAslabSidebar();
    }
    navigateTo(session.page || 'dashboard');
    return true;
  } catch (e) {
    console.error('Gagal memulihkan sesi login:', e);
    return false;
  }
}

function resetDataWithConfirm() {
  if (confirm('Apakah Anda yakin ingin mengembalikan seluruh data sistem ke kondisi awal (default)?\nSemua data lokal akan disinkronkan kembali ke pengaturan awal.')) {
    localStorage.removeItem('silab_uir_db');
    localStorage.removeItem('silab_uir_counters');
    showToast('Data sistem berhasil disinkronkan ke kondisi awal!');
    setTimeout(() => location.reload(), 600);
  }
}

// ============================================================
// AUTH
// ============================================================
function handleAdminAuth() {
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value.trim();
  const pin  = document.getElementById('adminPin').value.trim();
  if (!user || !pass || !pin) { showToast('Semua field wajib diisi!','error'); return; }

  // 1. Blokir akun ASLAB yang mencoba login di Portal Laboran
  const aslabFound = db.aslab && db.aslab.find(a => a.username.toLowerCase() === user.toLowerCase());
  if (aslabFound) {
    showToast('Akses Ditolak! Akun "' + user + '" (' + aslabFound.nama + ') adalah Asisten Laboratorium (ASLAB), bukan Laboran. Silakan gunakan Portal Login ASLAB.', 'error');
    return;
  }

  // 2. Validasi PIN Otorisasi Khusus Laboran
  if (pin !== '8891') { 
    showToast('PIN Otorisasi salah! (Gunakan 8891)', 'error'); 
    return; 
  }

  // 3. Validasi Kredensial Resmi Laboran / Admin
  const adminList = (db.admins && db.admins.length > 0) ? db.admins : [
    { username: 'admin_uir', password: 'admin123', nama: 'Laboran Utama FT', nip: '198705152010121002' }
  ];
  const foundAdmin = adminList.find(a => a.username.toLowerCase() === user.toLowerCase() && a.password === pass);

  if (!foundAdmin) {
    showToast('NIP / Username atau Kata Sandi Laboran salah!', 'error');
    return;
  }

  currentRole = 'admin';
  currentUser = { 
    nama: foundAdmin.nama || 'Laboran FT UIR', 
    username: foundAdmin.username, 
    nip: foundAdmin.nip || '198705152010121002',
    role: 'admin' 
  };
  saveSession('admin', currentUser, 'dashboard');
  document.getElementById('view-login-admin').classList.remove('active-view');
  document.getElementById('app-dashboard-container').classList.remove('hidden');
  document.getElementById('currentRoleText').textContent = 'Laboran (Admin)';
  document.getElementById('roleDot').style.background = 'var(--emerald)';
  document.getElementById('userName').textContent = currentUser.nama;
  document.getElementById('userEmail').textContent = 'laboran.admin@uir.ac.id';
  document.getElementById('userAvatar').textContent = currentUser.nama.charAt(0).toUpperCase();
  buildAdminSidebar();
  navigateTo('dashboard');
  showToast('Selamat datang, ' + currentUser.nama + '! Control Center Laboran aktif.', 'success');
}

function handleAslabAuth() {
  const username = document.getElementById('aslabUsername').value.trim();
  const password = document.getElementById('aslabPassword').value.trim();
  if (!username || !password) { showToast('Username dan password wajib diisi!','error'); return; }

  // 1. Blokir akun Admin/Laboran yang mencoba login di Portal ASLAB
  const adminList = (db.admins && db.admins.length > 0) ? db.admins : [{ username: 'admin_uir' }];
  const isAdmin = adminList.some(adm => adm.username.toLowerCase() === username.toLowerCase());
  if (isAdmin) {
    showToast('Akun "' + username + '" adalah akun Laboran/Admin! Silakan gunakan Portal Login Laboran.', 'error');
    return;
  }

  // 2. Validasi Akun ASLAB
  const found = db.aslab.find(a => a.username.toLowerCase() === username.toLowerCase() && a.password === password);
  if (!found) { showToast('Username atau password ASLAB salah!','error'); return; }
  if (found.status !== 'Aktif') { showToast('Akun ASLAB tidak aktif. Hubungi Laboran.','error'); return; }

  currentRole = 'aslab';
  currentUser = found;
  saveSession('aslab', currentUser, 'dashboard');
  document.getElementById('view-login-aslab').classList.remove('active-view');
  document.getElementById('app-dashboard-container').classList.remove('hidden');
  document.getElementById('currentRoleText').textContent = 'ASLAB';
  document.getElementById('roleDot').style.background = 'var(--cyan)';
  document.getElementById('userName').textContent = found.nama;
  document.getElementById('userEmail').textContent = found.nim.toLowerCase() + '@aslab.uir.ac.id';
  document.getElementById('userAvatar').textContent = found.nama.charAt(0);
  buildAslabSidebar();
  navigateTo('dashboard');
  showToast('Selamat datang, ' + found.nama + '! Akses ASLAB aktif.', 'success');
}

function logoutToLoginScreen() {
  clearSession();
  document.getElementById('app-dashboard-container').classList.add('hidden');
  if (currentRole === 'admin') {
    document.getElementById('view-login-admin').classList.add('active-view');
  } else {
    document.getElementById('view-login-aslab').classList.add('active-view');
  }
  currentRole = null; currentUser = null;
  showToast('Anda telah keluar dari SILAB UIR.');
}

function switchToAslabLogin() {
  document.getElementById('view-login-admin').classList.remove('active-view');
  document.getElementById('view-login-aslab').classList.add('active-view');
}
function switchToAdminLogin() {
  document.getElementById('view-login-aslab').classList.remove('active-view');
  document.getElementById('view-login-admin').classList.add('active-view');
}

function quickFillAslab(u, p) {
  switchToAslabLogin();
  document.getElementById('aslabUsername').value = u;
  document.getElementById('aslabPassword').value = p;
  handleAslabAuth();
}

function quickFillAdmin() {
  switchToAdminLogin();
  document.getElementById('adminUser').value = 'admin_uir';
  document.getElementById('adminPass').value = 'admin123';
  document.getElementById('adminPin').value = '8891';
  handleAdminAuth();
}

// ============================================================
// SIDEBAR BUILDER
// ============================================================
function buildAdminSidebar() {
  document.getElementById('sidebar-nav').innerHTML =
    '<div class="nav-section"><span class="nav-section-title">IKHTISAR</span>' +
    navItem('dashboard','📊','Dashboard') + '</div>' +
    '<div class="nav-section"><span class="nav-section-title">MANAJEMEN DATA</span>' +
    navItem('matkul','📚','Mata Kuliah') +
    navItem('aslab','👨‍🏫','Data ASLAB') +
    navItem('lab','🏛️','Laboratorium') +
    navItem('jadwal','📅','Data Jadwal') +
    navItem('modul-admin','📁','Modul Praktikum') + '</div>' +
    '<div class="nav-section"><span class="nav-section-title">MONITORING</span>' +
    navItem('absensi-admin','📝','Data Absensi') +
    navItem('rekap','📊','Rekap Kegiatan') +
    navItem('monitoring','☑️','Monitoring ASLAB','Checklist') + '</div>' +
    '<div class="nav-section"><span class="nav-section-title">OPERASIONAL</span>' +
    navItem('inventaris','💻','Inventaris') + '</div>';
}

function buildAslabSidebar() {
  document.getElementById('sidebar-nav').innerHTML =
    '<div class="nav-section"><span class="nav-section-title">IKHTISAR</span>' +
    navItem('dashboard','📊','Dashboard Saya') + '</div>' +
    '<div class="nav-section"><span class="nav-section-title">KEGIATAN SAYA</span>' +
    navItem('jadwal-aslab','📅','Data Jadwal Saya') +
    navItem('absensi-aslab','📝','Absensi Saya') +
    navItem('modul-aslab','📁','Modul Praktikum') +
    navItem('nilai','🏆','Nilai Akhir') + '</div>';
}

function navItem(page, icon, label, tag) {
  return '<a href="#" class="nav-item" data-page="' + page + '" onclick="navigateTo(\'' + page + '\');return false;">' +
    '<span class="nav-icon">' + icon + '</span><span>' + label + '</span>' +
    (tag ? '<span class="nav-tag">' + tag + '</span>' : '') + '</a>';
}

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(pageId) {
  // Proteksi Hak Akses (Route Guard)
  const adminOnlyPages = ['matkul', 'aslab', 'lab', 'jadwal', 'modul-admin', 'absensi-admin', 'rekap', 'monitoring', 'inventaris'];
  const aslabOnlyPages = ['jadwal-aslab', 'absensi-aslab', 'modul-aslab', 'nilai'];

  if (currentRole === 'aslab' && adminOnlyPages.includes(pageId)) {
    showToast('Akses Ditolak! Halaman ini hanya dapat diakses oleh Laboran / Admin.', 'error');
    pageId = 'dashboard';
  } else if (currentRole === 'admin' && aslabOnlyPages.includes(pageId)) {
    showToast('Halaman ini khusus untuk tampilan Asisten Laboratorium (ASLAB).', 'warning');
    pageId = 'dashboard';
  }

  document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const tp = document.getElementById('page-' + pageId);
  if (tp) tp.classList.add('active');
  const tn = document.querySelector('.nav-item[data-page="' + pageId + '"]');
  if (tn) tn.classList.add('active');
  const labels = {
    dashboard:'Dashboard', matkul:'Mata Kuliah', aslab:'Data ASLAB', lab:'Laboratorium',
    jadwal:'Data Jadwal', 'modul-admin':'Modul Praktikum', 'absensi-admin':'Data Absensi',
    rekap:'Rekap Kegiatan', monitoring:'Monitoring ASLAB', inventaris:'Inventaris',
    'jadwal-aslab':'Data Jadwal Saya', 'absensi-aslab':'Absensi Saya',
    'modul-aslab':'Modul Praktikum', nilai:'Nilai Akhir'
  };
  const bc = document.getElementById('breadcrumbText');
  if (bc) bc.textContent = labels[pageId] || pageId;
  if (currentRole && currentUser) {
    saveSession(currentRole, currentUser, pageId);
  }
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar')?.classList.remove('mobile-open');
  }
  switch(pageId) {
    case 'dashboard':     renderDashboard();     break;
    case 'matkul':        renderMatkul();        break;
    case 'aslab':         renderAslab();         break;
    case 'lab':           renderLab();           break;
    case 'jadwal':        renderJadwalAdmin();   break;
    case 'modul-admin':   renderModulAdmin();    break;
    case 'absensi-admin': renderAbsensiAdmin();  break;
    case 'rekap':         renderRekap();         break;
    case 'monitoring':    renderMonitoring();    break;
    case 'inventaris':    renderInventaris();    break;
    case 'jadwal-aslab':  renderJadwalAslab();   break;
    case 'absensi-aslab': renderAbsensiAslab();  break;
    case 'modul-aslab':   renderModulAslab();    break;
    case 'nilai':         renderNilai();         break;
  }
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const el = document.getElementById('page-dashboard');
  if (!el) return;
  if (currentRole === 'admin') {
    el.innerHTML =
      '<div class="view-header"><div><h1 class="view-title">Dashboard Pengelolaan Laboratorium UIR</h1>' +
      '<p class="view-desc">Monitoring operasional Lab Komputer Universitas Islam Riau.</p></div>' +
      '<div class="header-actions"><button class="btn btn-outline" onclick="navigateTo(\'monitoring\')">☑️ Monitoring ASLAB</button>' +
      '<button class="btn btn-primary" onclick="navigateTo(\'jadwal\')">+ Tambah Jadwal</button></div></div>' +
      '<div class="metrics-grid">' +
      metricCard('cyan','👨‍🏫', db.aslab.length, 'Total ASLAB Aktif') +
      metricCard('emerald','📅', db.jadwal.length, 'Total Pertemuan Terjadwal') +
      metricCard('amber','📝', db.absensi.length, 'Data Absensi Tercatat') +
      metricCard('purple','🏆', db.nilai.length, 'Data Nilai Masuk') +
      '</div>' +
      '<div class="glass-card mb-4"><div class="card-title-bar"><h3>⚡ Pintasan Cepat</h3></div>' +
      '<div class="quick-actions-grid">' +
      qaBtn('navigateTo(\'jadwal\')','📅','Tambah Jadwal','Input jadwal ASLAB') +
      qaBtn('navigateTo(\'aslab\')','👨‍🏫','Kelola ASLAB','Data dan penugasan ASLAB') +
      qaBtn('navigateTo(\'absensi-admin\')','📝','Lihat Data Absensi','Rekap absensi semua ASLAB') +
      qaBtn('navigateTo(\'monitoring\')','☑️','Monitoring ASLAB','Status checklist pekerjaan') +
      '</div></div>' +
      '<div class="glass-card"><div class="card-title-bar"><h3>📊 Status Lab</h3></div>' +
      '<div class="labs-5-grid">' +
      db.labs.map(lab =>
        '<div class="lab-card-item"><div class="lab-card-top">' +
        '<div class="lab-title-group"><span class="lab-icon-sm">🏛️</span><span class="lab-name-title">' + lab.nama + '</span></div>' +
        statusBadge(lab.status) + '</div>' +
        '<p style="font-size:12px;color:var(--text-muted);margin-top:4px;">' + lab.keterangan + '</p>' +
        '<div class="lab-meta-row"><div class="lab-meta-item"><span>Kapasitas:</span> <span class="lab-meta-val">' + lab.kapasitas + ' PC</span></div></div></div>'
      ).join('') + '</div></div>';
  } else {
    const mk = currentUser.matkul;
    const myJ = db.jadwal.filter(j => j.aslab === currentUser.nama);
    const myA = db.absensi.filter(a => a.aslab === currentUser.nama);
    const myN = db.nilai.filter(n => mk.includes(n.matkul) && n.aslab === currentUser.nama);
    el.innerHTML =
      '<div class="view-header"><div><h1 class="view-title">Dashboard ASLAB - ' + currentUser.nama + '</h1>' +
      '<p class="view-desc">Mata Kuliah: <strong>' + mk.join(' dan ') + '</strong></p></div></div>' +
      '<div class="glass-card mb-4" style="background:rgba(0,242,254,0.05);border:1px solid rgba(0,242,254,0.3);">' +
      '<div class="asdos-banner-content"><div class="asdos-banner-badge-icon">🎓</div>' +
      '<div class="asdos-banner-info"><div class="asdos-banner-header">' +
      '<span class="asdos-banner-tag">AKSES ASLAB TERISOLASI</span>' +
      '<h3 class="asdos-banner-title">' + currentUser.nama + ' (' + currentUser.nim + ')</h3></div>' +
      '<p class="asdos-banner-sub">Anda hanya dapat melihat dan mengurus data untuk matkul: <strong>' + mk.join(' dan ') + '</strong>. Data ASLAB lain tidak ditampilkan.</p>' +
      '</div></div></div>' +
      '<div class="metrics-grid">' +
      metricCard('cyan','📅', myJ.length, 'Jadwal Saya (' + mk.length + ' Matkul)') +
      metricCard('emerald','📝', myA.length + ' / ' + myJ.length, 'Absensi Selesai') +
      metricCard('amber','🏆', myN.length, 'Data Nilai Diinput') +
      '</div>' +
      '<div class="glass-card"><div class="card-title-bar"><h3>⚡ Aksi Cepat</h3></div>' +
      '<div class="quick-actions-grid">' +
      qaBtn('navigateTo(\'jadwal-aslab\')','📅','Lihat Jadwal Saya','Jadwal dari Laboran') +
      qaBtn('navigateTo(\'absensi-aslab\')','📝','Absensi Saya','Klik Absen saat waktunya') +
      qaBtn('navigateTo(\'modul-aslab\')','📁','Modul Praktikum','Lihat modul yang tersedia') +
      qaBtn('navigateTo(\'nilai\')','🏆','Input Nilai Akhir','Input dan export CSV nilai') +
      '</div></div>';
  }
}

function metricCard(color, icon, val, label) {
  return '<div class="metric-card ' + color + '"><div class="metric-icon">' + icon + '</div>' +
    '<div class="metric-body"><span class="metric-number">' + val + '</span><span class="metric-label">' + label + '</span></div></div>';
}

function qaBtn(onclick, icon, title, sub) {
  return '<button class="quick-action-btn" onclick="' + onclick + '">' +
    '<span class="qa-icon">' + icon + '</span><div class="qa-text"><strong>' + title + '</strong><small>' + sub + '</small></div></button>';
}

// ============================================================
// ADMIN - MATA KULIAH
// ============================================================
function renderMatkul() {
  const el = document.getElementById('page-matkul');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Mata Kuliah Praktikum</h1>' +
    '<p class="view-desc">Data mata kuliah yang dikelola di laboratorium.</p></div>' +
    '<button class="btn btn-primary" onclick="openMatkulModal()">+ Tambah Mata Kuliah</button></div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>📚 Daftar Mata Kuliah</h3>' +
    '<input type="text" class="search-input input-sm" id="searchMatkul" placeholder="🔍 Cari..." oninput="renderMatkulTable()"/></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>Kode</th><th>Nama Mata Kuliah</th><th>SKS</th><th>Dosen Pengampu</th><th>Status</th><th>Aksi</th></tr></thead>' +
    '<tbody id="matkulBody"></tbody></table></div></div>';
  renderMatkulTable();
}

function renderMatkulTable() {
  const s = (document.getElementById('searchMatkul')?.value || '').toLowerCase();
  const tbody = document.getElementById('matkulBody');
  if (!tbody) return;
  let d = db.matkul.filter(m => m.nama.toLowerCase().includes(s) || m.kode.toLowerCase().includes(s));
  tbody.innerHTML = d.length === 0 ? '<tr><td colspan="7" class="empty-cell">Tidak ada data.</td></tr>' :
    d.map((m, i) => '<tr><td>' + (i+1) + '</td><td><code>' + m.kode + '</code></td><td><strong>' + m.nama + '</strong></td>' +
      '<td>' + m.sks + ' SKS</td><td>' + m.dosen + '</td><td>' + statusBadge(m.status) + '</td>' +
      '<td><button class="btn btn-xs btn-outline me-1" onclick="editMatkul(' + m.id + ')">✏️ Edit</button>' +
      '<button class="btn btn-xs btn-danger" onclick="deleteMatkul(' + m.id + ')">🗑 Hapus</button></td></tr>').join('');
}

function openMatkulModal() {
  document.getElementById('mkEditId').value = -1;
  document.getElementById('mkKode').value = '';
  document.getElementById('mkNama').value = '';
  document.getElementById('mkSks').value = 3;
  document.getElementById('mkDosen').value = '';
  document.getElementById('modalMatkulTitle').textContent = '📚 Tambah Mata Kuliah';
  openModal('modalMatkul');
}

function editMatkul(id) {
  const m = db.matkul.find(x => x.id === id);
  if (!m) return;
  document.getElementById('mkEditId').value = m.id;
  document.getElementById('mkKode').value = m.kode;
  document.getElementById('mkNama').value = m.nama;
  document.getElementById('mkSks').value = m.sks;
  document.getElementById('mkDosen').value = m.dosen;
  document.getElementById('modalMatkulTitle').textContent = '✏️ Edit Mata Kuliah';
  openModal('modalMatkul');
}

function addMatkul() {
  const editId = parseInt(document.getElementById('mkEditId').value) || -1;
  const kode = document.getElementById('mkKode').value.trim();
  const nama = document.getElementById('mkNama').value.trim();
  const sks  = parseInt(document.getElementById('mkSks').value) || 3;
  const dosen= document.getElementById('mkDosen').value.trim();
  if (!kode||!nama||!dosen) { showToast('Semua field wajib diisi!','error'); return; }

  if (editId > 0) {
    const item = db.matkul.find(m => m.id === editId);
    if (item) { item.kode = kode; item.nama = nama; item.sks = sks; item.dosen = dosen; }
    showToast('Mata kuliah berhasil diperbarui!');
  } else {
    db.matkul.push({ id:counters.matkul++, kode, nama, sks, dosen, status:'Aktif' });
    showToast('Mata kuliah berhasil ditambahkan!');
  }
  saveDB();
  closeModal('modalMatkul');
  renderMatkul();
}

function deleteMatkul(id) {
  if (!confirm('Hapus mata kuliah ini?')) return;
  db.matkul = db.matkul.filter(m => m.id !== id);
  saveDB();
  renderMatkulTable();
  showToast('Mata kuliah dihapus.','error');
}

// ============================================================
// ADMIN - DATA ASLAB
// ============================================================
function renderAslab() {
  const el = document.getElementById('page-aslab');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Data ASLAB</h1>' +
    '<p class="view-desc">Daftar Asisten Laboratorium yang terdaftar di sistem.</p></div>' +
    '<button class="btn btn-primary" onclick="openAslabModal()">+ Tambah ASLAB</button></div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>👨‍🏫 Daftar ASLAB UIR</h3></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>NIM/ID</th><th>Nama ASLAB</th><th>Mata Kuliah Pengampuan</th><th>Lab</th><th>Kontak</th><th>Status</th><th>Aksi</th></tr></thead>' +
    '<tbody id="aslabBody"></tbody></table></div></div>';
  renderAslabTable();
}

function renderAslabTable() {
  const tbody = document.getElementById('aslabBody');
  if (!tbody) return;
  tbody.innerHTML = db.aslab.length === 0 ? '<tr><td colspan="8" class="empty-cell">Belum ada data ASLAB.</td></tr>' :
    db.aslab.map((a, i) => '<tr><td>' + (i+1) + '</td><td><code>' + a.nim + '</code></td><td><strong>' + a.nama + '</strong></td>' +
      '<td>' + a.matkul.map(m => '<span class="pill-tag glow" style="font-size:11px;">' + m + '</span>').join(' ') + '</td>' +
      '<td>' + a.lab + '</td><td style="font-size:12px;color:var(--text-muted);">' + a.contact + '</td>' +
      '<td>' + statusBadge(a.status) + '</td>' +
      '<td><button class="btn btn-xs btn-outline me-1" onclick="editAslab(' + a.id + ')">✏️ Edit</button>' +
      '<button class="btn btn-xs btn-danger" onclick="deleteAslab(' + a.id + ')">🗑 Hapus</button></td></tr>').join('');
}

function openAslabModal() {
  document.getElementById('asEditId').value = -1;
  document.getElementById('asNim').value = '';
  document.getElementById('asNama').value = '';
  document.getElementById('asUsername').value = '';
  document.getElementById('asPassword').value = '';
  document.getElementById('asMatkul').value = '';
  document.getElementById('asContact').value = '';
  document.getElementById('modalAslabTitle').textContent = '👨‍🏫 Tambah Data ASLAB';
  openModal('modalAslab');
}

function editAslab(id) {
  const a = db.aslab.find(x => x.id === id);
  if (!a) return;
  document.getElementById('asEditId').value = a.id;
  document.getElementById('asNim').value = a.nim;
  document.getElementById('asNama').value = a.nama;
  document.getElementById('asUsername').value = a.username;
  document.getElementById('asPassword').value = a.password;
  document.getElementById('asLab').value = a.lab;
  document.getElementById('asMatkul').value = a.matkul.join(', ');
  document.getElementById('asContact').value = a.contact === '-' ? '' : a.contact;
  document.getElementById('modalAslabTitle').textContent = '✏️ Edit Data ASLAB';
  openModal('modalAslab');
}

function addAslab() {
  const editId = parseInt(document.getElementById('asEditId').value) || -1;
  const nim = document.getElementById('asNim').value.trim();
  const nama= document.getElementById('asNama').value.trim();
  const uname=document.getElementById('asUsername').value.trim();
  const pw  = document.getElementById('asPassword').value.trim();
  const lab = document.getElementById('asLab').value;
  const con = document.getElementById('asContact').value.trim();
  const mkv = document.getElementById('asMatkul').value;
  if (!nim||!nama||!uname||!pw) { showToast('NIM, Nama, Username, Password wajib!','error'); return; }
  const matkul = mkv ? mkv.split(',').map(s=>s.trim()).filter(Boolean) : [];

  if (editId > 0) {
    const item = db.aslab.find(a => a.id === editId);
    if (item) {
      item.nim = nim; item.nama = nama; item.username = uname; item.password = pw;
      item.lab = lab; item.contact = con || '-'; item.matkul = matkul;
    }
    showToast('Data ASLAB berhasil diperbarui!');
  } else {
    db.aslab.push({ id:counters.aslab++, nim, nama, username:uname, password:pw, matkul, lab, contact:con||'-', status:'Aktif' });
    showToast('ASLAB berhasil ditambahkan!');
  }
  saveDB();
  closeModal('modalAslab');
  renderAslabTable();
}

function deleteAslab(id) {
  if (!confirm('Hapus data ASLAB ini?')) return;
  db.aslab = db.aslab.filter(a => a.id !== id);
  saveDB();
  renderAslabTable();
  showToast('Data ASLAB dihapus.','error');
}

// ============================================================
// ADMIN - LABORATORIUM
// ============================================================
function renderLab() {
  const el = document.getElementById('page-lab');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Laboratorium</h1>' +
    '<p class="view-desc">Daftar dan status ruang laboratorium.</p></div>' +
    '<button class="btn btn-primary" onclick="openLabModal()">+ Tambah Lab</button></div>' +
    '<div class="labs-5-grid mb-4">' +
    db.labs.map(lab =>
      '<div class="lab-card-item"><div class="lab-card-top">' +
      '<div class="lab-title-group"><span class="lab-icon-sm">🏛️</span><span class="lab-name-title">' + lab.nama + '</span></div>' +
      statusBadge(lab.status) + '</div>' +
      '<p style="font-size:12px;color:var(--text-muted);margin:4px 0;">' + lab.keterangan + '</p>' +
      '<div class="lab-meta-row"><div class="lab-meta-item"><span>Kapasitas:</span> <span class="lab-meta-val">' + lab.kapasitas + ' PC</span></div></div>' +
      '<div style="margin-top:8px;display:flex;gap:6px;">' +
      '<select class="form-select" style="font-size:12px;" onchange="updateLabStatus(' + lab.id + ', this.value)">' +
      '<option value="tersedia"'    + (lab.status==='tersedia'    ?' selected':'') + '>🟢 Tersedia</option>' +
      '<option value="sedang"'      + (lab.status==='sedang'      ?' selected':'') + '>🟡 Sedang Dipakai</option>' +
      '<option value="maintenance"' + (lab.status==='maintenance' ?' selected':'') + '>🔴 Maintenance</option>' +
      '</select>' +
      '<button class="btn btn-xs btn-outline" onclick="editLab(' + lab.id + ')">✏️</button>' +
      '<button class="btn btn-xs btn-danger" onclick="deleteLab(' + lab.id + ')">🗑</button>' +
      '</div></div>'
    ).join('') + '</div>';
}

function openLabModal() {
  document.getElementById('lbEditId').value = -1;
  document.getElementById('lbNama').value = '';
  document.getElementById('lbKapasitas').value = 30;
  document.getElementById('lbKeterangan').value = '';
  document.getElementById('modalLabTitle').textContent = '🏛️ Tambah Laboratorium';
  openModal('modalLab');
}

function editLab(id) {
  const l = db.labs.find(x => x.id === id);
  if (!l) return;
  document.getElementById('lbEditId').value = l.id;
  document.getElementById('lbNama').value = l.nama;
  document.getElementById('lbKapasitas').value = l.kapasitas;
  document.getElementById('lbKeterangan').value = l.keterangan;
  document.getElementById('modalLabTitle').textContent = '✏️ Edit Data Laboratorium';
  openModal('modalLab');
}

function updateLabStatus(id, status) {
  const lab = db.labs.find(l => l.id===id);
  if (lab) {
    lab.status = status;
    saveDB();
    showToast('Status ' + lab.nama + ' diperbarui.');
  }
}

function addLab() {
  const editId = parseInt(document.getElementById('lbEditId').value) || -1;
  const nama = document.getElementById('lbNama').value.trim();
  const kap  = parseInt(document.getElementById('lbKapasitas').value) || 30;
  const ket  = document.getElementById('lbKeterangan').value.trim();
  if (!nama) { showToast('Nama lab wajib diisi!','error'); return; }

  if (editId > 0) {
    const item = db.labs.find(l => l.id === editId);
    if (item) { item.nama = nama; item.kapasitas = kap; item.keterangan = ket || '-'; }
    showToast('Data lab berhasil diperbarui!');
  } else {
    db.labs.push({ id:db.labs.length+1, nama, kapasitas:kap, status:'tersedia', keterangan:ket||'-' });
    showToast('Lab berhasil ditambahkan!');
  }
  saveDB();
  closeModal('modalLab');
  renderLab();
}

function deleteLab(id) {
  if (!confirm('Hapus lab ini?')) return;
  db.labs = db.labs.filter(l => l.id!==id);
  saveDB();
  renderLab();
  showToast('Lab dihapus.','error');
}

// ============================================================
// ADMIN - DATA JADWAL
// ============================================================
function renderJadwalAdmin() {
  const el = document.getElementById('page-jadwal');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Data Jadwal</h1>' +
    '<p class="view-desc">Jadwal praktikum per ASLAB. Dibuat oleh Laboran, 8 pertemuan per mata kuliah.</p></div>' +
    '<button class="btn btn-primary" onclick="openJadwalModal()">+ Tambah Jadwal</button></div>' +
    '<div class="filter-toolbar mb-4">' +
    '<div class="filter-group"><span class="filter-label">Filter ASLAB:</span>' +
    '<select id="filterJadwalAslab" class="form-select" onchange="renderJadwalAdminTable()">' +
    '<option value="">Semua ASLAB</option>' + db.aslab.map(a => '<option>' + a.nama + '</option>').join('') + '</select></div>' +
    '<div class="filter-group"><span class="filter-label">Filter Matkul:</span>' +
    '<select id="filterJadwalMatkul" class="form-select" onchange="renderJadwalAdminTable()">' +
    '<option value="">Semua Matkul</option>' + db.matkul.map(m => '<option>' + m.nama + '</option>').join('') + '</select></div></div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>📅 Tabel Data Jadwal</h3></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>Mata Kuliah</th><th>ASLAB</th><th>Lab</th><th>Pertemuan</th><th>Tanggal</th><th>Jam</th><th>Materi</th><th>Aksi</th></tr></thead>' +
    '<tbody id="jadwalAdminBody"></tbody></table></div></div>';
  renderJadwalAdminTable();
}

function renderJadwalAdminTable() {
  const fA = document.getElementById('filterJadwalAslab')?.value || '';
  const fM = document.getElementById('filterJadwalMatkul')?.value || '';
  const tbody = document.getElementById('jadwalAdminBody');
  if (!tbody) return;
  let d = db.jadwal;
  if (fA) d = d.filter(j => j.aslab === fA);
  if (fM) d = d.filter(j => j.matkul === fM);
  tbody.innerHTML = d.length === 0 ? '<tr><td colspan="9" class="empty-cell">Tidak ada data jadwal.</td></tr>' :
    d.map((j,i) => '<tr><td>' + (i+1) + '</td><td><strong>' + j.matkul + '</strong></td><td>' + j.aslab + '</td>' +
      '<td>' + j.lab + '</td><td><span class="pill-tag">Pertemuan ' + j.pertemuan + '</span></td>' +
      '<td>' + formatTanggal(j.tanggal) + '</td><td>' + j.jamMulai + ' - ' + j.jamSelesai + '</td>' +
      '<td style="font-size:12px;color:var(--text-muted);">' + j.materi + '</td>' +
      '<td><button class="btn btn-xs btn-outline me-1" onclick="editJadwal(' + j.id + ')">✏️ Edit</button>' +
      '<button class="btn btn-xs btn-danger" onclick="deleteJadwal(' + j.id + ')">🗑 Hapus</button></td></tr>').join('');
}

function openJadwalModal() {
  document.getElementById('jdEditId').value = -1;
  document.getElementById('jdTanggal').value = toDateString(new Date());
  document.getElementById('jdJamMulai').value = '08:00';
  document.getElementById('jdJamSelesai').value = '10:00';
  document.getElementById('jdMateri').value = '';
  document.getElementById('modalJadwalTitle').textContent = '📅 Tambah Jadwal Praktikum';
  populateJadwalModalSelects();
  openModal('modalJadwal');
}

function editJadwal(id) {
  const j = db.jadwal.find(x => x.id === id);
  if (!j) return;
  populateJadwalModalSelects();
  document.getElementById('jdEditId').value = j.id;
  document.getElementById('jdMatkul').value = j.matkul;
  document.getElementById('jdAslab').value = j.aslab;
  document.getElementById('jdLab').value = j.lab;
  document.getElementById('jdPertemuan').value = j.pertemuan;
  document.getElementById('jdTanggal').value = j.tanggal;
  document.getElementById('jdJamMulai').value = j.jamMulai;
  document.getElementById('jdJamSelesai').value = j.jamSelesai;
  document.getElementById('jdMateri').value = j.materi;
  document.getElementById('modalJadwalTitle').textContent = '✏️ Edit Jadwal Praktikum';
  openModal('modalJadwal');
}

function addJadwal() {
  const editId  = parseInt(document.getElementById('jdEditId').value) || -1;
  const matkul  = document.getElementById('jdMatkul').value;
  const aslab   = document.getElementById('jdAslab').value;
  const lab     = document.getElementById('jdLab').value;
  const pert    = parseInt(document.getElementById('jdPertemuan').value) || 1;
  const tanggal = document.getElementById('jdTanggal').value;
  const jMulai  = document.getElementById('jdJamMulai').value;
  const jSelesai= document.getElementById('jdJamSelesai').value;
  const materi  = document.getElementById('jdMateri').value.trim();
  if (!matkul||!aslab||!tanggal||!jMulai||!jSelesai) { showToast('Semua field wajib diisi!','error'); return; }

  if (editId > 0) {
    const item = db.jadwal.find(j => j.id === editId);
    if (item) {
      item.matkul = matkul; item.aslab = aslab; item.lab = lab; item.pertemuan = pert;
      item.tanggal = tanggal; item.jamMulai = jMulai; item.jamSelesai = jSelesai; item.materi = materi || 'Materi Praktikum';
    }
    showToast('Jadwal berhasil diperbarui!');
  } else {
    db.jadwal.push({ id:counters.jadwal++, matkul, aslab, lab, pertemuan:pert, tanggal, jamMulai:jMulai, jamSelesai:jSelesai, materi:materi||'Materi Praktikum' });
    showToast('Jadwal berhasil ditambahkan!');
  }
  saveDB();
  closeModal('modalJadwal');
  renderJadwalAdmin();
}

function deleteJadwal(id) {
  if (!confirm('Hapus jadwal ini?')) return;
  db.jadwal = db.jadwal.filter(j => j.id !== id);
  saveDB();
  renderJadwalAdminTable();
  showToast('Jadwal dihapus.','error');
}

// ============================================================
// ADMIN - MODUL PRAKTIKUM
// ============================================================
function renderModulAdmin() {
  const el = document.getElementById('page-modul-admin');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Modul Praktikum</h1>' +
    '<p class="view-desc">Modul yang disiapkan Laboran. ASLAB tinggal menggunakannya.</p></div>' +
    '<button class="btn btn-primary" onclick="openModulModal()">+ Tambah Modul</button></div>' +
    '<div class="filter-toolbar mb-4"><div class="filter-group"><span class="filter-label">Filter Matkul:</span>' +
    '<select id="filterModulAdminMk" class="form-select" onchange="renderModulAdminGrid()">' +
    '<option value="">Semua Matkul</option>' + db.matkul.map(m => '<option>' + m.nama + '</option>').join('') +
    '</select></div></div><div class="modul-grid" id="modulAdminGrid"></div>';
  renderModulAdminGrid();
}

function renderModulAdminGrid() {
  const f = document.getElementById('filterModulAdminMk')?.value || '';
  const grid = document.getElementById('modulAdminGrid');
  if (!grid) return;
  let d = db.modul;
  if (f) d = d.filter(m => m.matkul === f);
  grid.innerHTML = d.length === 0 ? '<p class="empty-cell">Belum ada modul.</p>' :
    d.map(m =>
      '<div class="modul-card">' +
      '<button class="modul-delete" onclick="deleteModul(' + m.id + ')" title="Hapus">x</button>' +
      '<div class="modul-icon">📁</div>' +
      '<div class="modul-title">' + m.judul + '</div>' +
      '<div class="modul-sub">📚 ' + m.matkul + ' - Pertemuan ' + m.pertemuan + '</div>' +
      '<div class="modul-desc">' + m.deskripsi + '</div>' +
      '<button class="btn btn-xs btn-outline mt-3" onclick="downloadModul(' + m.id + ')">📥 Unduh Modul</button></div>'
    ).join('');
}

function openModulModal() {
  document.getElementById('mdJudul').value = '';
  document.getElementById('mdDeskripsi').value = '';
  populateJadwalModalSelects();
  openModal('modalModul');
}

function addModul() {
  const judul = document.getElementById('mdJudul').value.trim();
  const matkul= document.getElementById('mdMatkul').value;
  const pert  = parseInt(document.getElementById('mdPertemuan').value) || 1;
  const desk  = document.getElementById('mdDeskripsi').value.trim() || 'Tidak ada deskripsi.';
  if (!judul) { showToast('Judul modul wajib diisi!','error'); return; }
  db.modul.push({ id:counters.modul++, judul, matkul, pertemuan:pert, deskripsi:desk });
  saveDB();
  closeModal('modalModul');
  renderModulAdmin();
  showToast('Modul berhasil ditambahkan!');
}

function deleteModul(id) {
  if (!confirm('Hapus modul ini?')) return;
  db.modul = db.modul.filter(m => m.id !== id);
  saveDB();
  renderModulAdminGrid();
  showToast('Modul dihapus.','error');
}

function downloadModul(id) {
  const m = db.modul.find(item => item.id === id);
  if (!m) return;
  const content = `========================================================================
UNIVERSITAS ISLAM RIAU (UIR) PEKANBARU
FAKULTAS TEKNIK - PROGRAM STUDI TEKNIK INFORMATIKA
SILAB UIR — DOKUMEN RESMI MODUL PRAKTIKUM LABORATORIUM KOMPUTER
========================================================================

KODE / MATA KULIAH : ${m.matkul}
PERTEMUAN          : Pertemuan ke-${m.pertemuan}
JUDUL MODUL        : ${m.judul}
STATUS             : Terverifikasi oleh Laboran & Dosen Pengampu

------------------------------------------------------------------------
DESKRIPSI & MATERI PRAKTIKUM
------------------------------------------------------------------------
${m.deskripsi}

PETUNJUK UMUM PRAKTIKAN:
1. Mahasiswa wajib hadir di ruang laboratorium 10 menit sebelum praktikum dimulai.
2. Setiap mahasiswa menempati workstation PC sesuai nomor urut yang ditentukan.
3. Kerjakan langkah-langkah praktikum secara bertahap dan simpan pekerjaan di repositori lokal.
4. Konsultasikan kendala teknis kepada ASLAB yang bertugas.
5. Tugas akhir pertemuan dikumpulkan maksimal 2 hari sebelum pertemuan berikutnya.

STANDAR KESELAMATAN & KETERTIBAN LAB:
- Dilarang membawa makanan dan minuman ke dalam ruang lab komputer.
- Harap menjaga kebersihan dan kerapian perangkat setelah sesi praktikum selesai.
- Lakukan shutdown workstation PC setelah praktikum berakhir.

========================================================================
Dokumen diterbitkan secara otomatis oleh Sistem Informasi Laboratorium (SILAB UIR)
Tanggal Unduh : ${new Date().toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric'})}
Waktu         : ${formatTimeDisplay(new Date())} WIB
========================================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Modul_${m.matkul.replace(/\s+/g, '_')}_Pertemuan_${m.pertemuan}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Dokumen modul ' + m.judul + ' berhasil diunduh!');
}

// ============================================================
// ADMIN - DATA ABSENSI (READ ONLY)
// ============================================================
function renderAbsensiAdmin() {
  const el = document.getElementById('page-absensi-admin');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Data Absensi</h1>' +
    '<p class="view-desc">Rekap Data Absensi ASLAB. Laboran hanya melihat - tidak dapat mengubah.</p></div>' +
    '<button class="btn btn-outline" onclick="exportAbsensiCSV()">⬇ Export CSV Absensi</button></div>' +
    '<div class="filter-toolbar mb-4">' +
    '<div class="filter-group"><span class="filter-label">Filter Matkul:</span>' +
    '<select id="filterAbsMatkul" class="form-select" onchange="renderAbsensiAdminTable()">' +
    '<option value="">Semua Matkul</option>' + db.matkul.map(m => '<option>' + m.nama + '</option>').join('') + '</select></div>' +
    '<div class="filter-group"><span class="filter-label">Filter ASLAB:</span>' +
    '<select id="filterAbsAslab" class="form-select" onchange="renderAbsensiAdminTable()">' +
    '<option value="">Semua ASLAB</option>' + db.aslab.map(a => '<option>' + a.nama + '</option>').join('') + '</select></div>' +
    '<div class="filter-group"><span class="filter-label">Filter Pertemuan:</span>' +
    '<select id="filterAbsPert" class="form-select" onchange="renderAbsensiAdminTable()">' +
    '<option value="">Semua</option>' + [1,2,3,4,5,6,7,8].map(p => '<option value="' + p + '">Pertemuan ' + p + '</option>').join('') +
    '</select></div></div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>📝 Rekap Data Absensi ASLAB</h3>' +
    '<span class="pill-tag glow">View Only</span></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>ASLAB</th><th>Mata Kuliah</th><th>Pertemuan</th><th>Tanggal</th><th>Waktu Absen</th><th>Status</th></tr></thead>' +
    '<tbody id="absensiAdminBody"></tbody></table></div></div>';
  renderAbsensiAdminTable();
}
function renderAbsensiAdminTable() {
  const fM = document.getElementById('filterAbsMatkul')?.value || '';
  const fA = document.getElementById('filterAbsAslab')?.value || '';
  const fP = document.getElementById('filterAbsPert')?.value || '';
  const tbody = document.getElementById('absensiAdminBody');
  if (!tbody) return;
  let d = db.absensi;
  if (fM) d = d.filter(a => a.matkul === fM);
  if (fA) d = d.filter(a => a.aslab === fA);
  if (fP) d = d.filter(a => a.pertemuan === parseInt(fP));
  tbody.innerHTML = d.length === 0 ? '<tr><td colspan="7" class="empty-cell">Belum ada data absensi.</td></tr>' :
    d.map((a,i) => '<tr><td>' + (i+1) + '</td><td><strong>' + a.aslab + '</strong></td><td>' + a.matkul + '</td>' +
      '<td><span class="pill-tag">Pertemuan ' + a.pertemuan + '</span></td>' +
      '<td>' + formatTanggal(a.tanggal) + '</td><td><strong>' + a.waktuAbsen + '</strong> WIB</td>' +
      '<td>' + statusBadge(a.status) + '</td></tr>').join('');
}
function exportAbsensiCSV() {
  const rows = [['No','ASLAB','Mata Kuliah','Pertemuan','Tanggal','Waktu Absen','Status']];
  db.absensi.forEach((a,i) => rows.push([i+1, a.aslab, a.matkul, 'Pertemuan ' + a.pertemuan, a.tanggal, a.waktuAbsen, a.status]));
  downloadCSV(rows, 'Rekap_Absensi_ASLAB_UIR.csv');
  showToast('Export CSV Absensi berhasil!');
}

// ============================================================
// ADMIN - REKAP KEGIATAN
// ============================================================
function renderRekap() {
  const el = document.getElementById('page-rekap');
  if (!el) return;
  let rows = '';
  let idx = 0;
  db.aslab.forEach(a => {
    a.matkul.forEach(mk => {
      idx++;
      const tJ = db.jadwal.filter(j => j.aslab===a.nama && j.matkul===mk).length;
      const tA = db.absensi.filter(ab=> ab.aslab===a.nama && ab.matkul===mk).length;
      const tM = db.modul.filter(m => m.matkul===mk).length;
      const tN = db.nilai.filter(n => n.aslab===a.nama && n.matkul===mk).length;
      const aOk=tA>0, mOk=tM>0, nOk=tN>0, allOk=aOk&&mOk&&nOk;
      const chk = v => v ? '<span class="badge-status tersedia">✅ Ada</span>' : '<span class="badge-status maintenance">⬜ Belum</span>';
      rows += '<tr><td>' + idx + '</td><td><strong>' + mk + '</strong></td><td>' + a.nama + '</td>' +
        '<td>' + tJ + ' Pertemuan</td><td>' + chk(aOk) + '</td><td>' + chk(mOk) + '</td><td>' + chk(nOk) + '</td>' +
        '<td>' + (allOk ? '<span class="badge-status tersedia">✅ Selesai</span>' : '<span class="badge-status sedang">⏳ Proses</span>') + '</td></tr>';
    });
  });
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Rekap Kegiatan</h1>' +
    '<p class="view-desc">Rekap keseluruhan kegiatan ASLAB - absensi, modul, dan nilai.</p></div>' +
    '<button class="btn btn-outline" onclick="exportRekapCSV()">⬇ Export CSV Rekap</button></div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>📊 Tabel Rekap per Mata Kuliah dan ASLAB</h3></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>Mata Kuliah</th><th>ASLAB</th><th>Total Jadwal</th><th>Absensi</th><th>Modul</th><th>Nilai Akhir</th><th>Status</th></tr></thead>' +
    '<tbody>' + (rows || '<tr><td colspan="8" class="empty-cell">Belum ada data.</td></tr>') + '</tbody></table></div></div>';
}
function exportRekapCSV() {
  const rows = [['No','Mata Kuliah','ASLAB','Total Jadwal','Absensi','Modul','Nilai']];
  let i = 0;
  db.aslab.forEach(a => {
    a.matkul.forEach(mk => {
      i++;
      const tJ = db.jadwal.filter(j => j.aslab===a.nama && j.matkul===mk).length;
      const tA = db.absensi.filter(ab=> ab.aslab===a.nama && ab.matkul===mk).length;
      const tM = db.modul.filter(m => m.matkul===mk).length;
      const tN = db.nilai.filter(n => n.aslab===a.nama && n.matkul===mk).length;
      rows.push([i, mk, a.nama, tJ, tA, tM, tN]);
    });
  });
  downloadCSV(rows, 'Rekap_Kegiatan_SILAB_UIR.csv');
  showToast('Export CSV Rekap berhasil!');
}

// ============================================================
// ADMIN - MONITORING ASLAB (CHECKLIST)
// ============================================================
function renderMonitoring() {
  const el = document.getElementById('page-monitoring');
  if (!el) return;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Monitoring ASLAB</h1>' +
    '<p class="view-desc">Checklist status pekerjaan setiap ASLAB. Laboran memantau siapa yang sudah dan belum selesai.</p></div></div>' +
    '<div class="monitoring-grid">' + db.aslab.map(a => renderMonitoringCard(a)).join('') + '</div>';
}
function renderMonitoringCard(aslab) {
  const checks = aslab.matkul.map(mk => {
    const tJ = db.jadwal.filter(j => j.aslab===aslab.nama && j.matkul===mk).length;
    const tA = db.absensi.filter(ab=> ab.aslab===aslab.nama && ab.matkul===mk).length;
    const tM = db.modul.filter(m => m.matkul===mk).length;
    const tN = db.nilai.filter(n => n.aslab===aslab.nama && n.matkul===mk).length;
    return { mk, tJ, tA, tM, tN, aOk:tA>=tJ&&tJ>0, mOk:tM>0, nOk:tN>0 };
  });
  const allDone = checks.every(c => c.aOk && c.mOk && c.nOk);
  return '<div class="glass-card monitoring-card ' + (allDone?'monitoring-done':'') + '">' +
    '<div class="card-title-bar"><div style="display:flex;align-items:center;gap:10px;">' +
    '<div class="avatar" style="width:36px;height:36px;font-size:14px;">' + aslab.nama.charAt(0) + '</div>' +
    '<div><div style="font-weight:700;color:var(--text-main);">' + aslab.nama + '</div>' +
    '<div style="font-size:11px;color:var(--text-muted);">' + aslab.nim + ' - ' + aslab.lab + '</div></div></div>' +
    (allDone ? '<span class="pill-tag glow" style="color:var(--emerald);">✅ Semua Selesai</span>' :
               '<span class="pill-tag" style="color:var(--amber);">⏳ Sedang Berjalan</span>') + '</div>' +
    checks.map(c =>
      '<div class="monitoring-matkul-block"><div style="font-size:12px;font-weight:700;color:var(--cyan);margin-bottom:8px;">📚 ' + c.mk + '</div>' +
      '<div class="checklist-items">' +
      '<div class="checklist-item ' + (c.aOk?'done':'') + '"><span class="check-icon">' + (c.aOk?'☑️':'⬜') + '</span><span class="check-text">Data Absensi <small>(' + c.tA + '/' + c.tJ + ' pertemuan)</small></span></div>' +
      '<div class="checklist-item ' + (c.mOk?'done':'') + '"><span class="check-icon">' + (c.mOk?'☑️':'⬜') + '</span><span class="check-text">Modul Tersedia <small>(' + c.tM + ' modul)</small></span></div>' +
      '<div class="checklist-item ' + (c.nOk?'done':'') + '"><span class="check-icon">' + (c.nOk?'☑️':'⬜') + '</span><span class="check-text">Nilai Akhir <small>(' + c.tN + ' data)</small></span></div>' +
      '</div></div>'
    ).join('') + '</div>';
}

// ============================================================
// ADMIN - INVENTARIS
// ============================================================
function renderInventaris() {
  const el = document.getElementById('page-inventaris');
  if (!el) return;
  const tot = db.inventaris.reduce((s,i)=>s+i.jumlah,0);
  const bag = db.inventaris.filter(i=>i.kondisi==='Bagus').reduce((s,i)=>s+i.jumlah,0);
  const per = db.inventaris.filter(i=>i.kondisi==='Perlu Perbaikan').reduce((s,i)=>s+i.jumlah,0);
  const rus = db.inventaris.filter(i=>i.kondisi==='Rusak').reduce((s,i)=>s+i.jumlah,0);
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Inventaris</h1>' +
    '<p class="view-desc">Pencatatan aset dan perangkat laboratorium.</p></div>' +
    '<button class="btn btn-primary" onclick="openInventarisModal()">+ Tambah Aset</button></div>' +
    '<div class="metrics-grid mb-4">' +
    metricCard('cyan','🖥️', tot + ' Unit', 'Total Aset') +
    metricCard('emerald','✅', bag + ' Unit', 'Kondisi Bagus') +
    metricCard('amber','⚠️', per + ' Unit', 'Perlu Perbaikan') +
    metricCard('purple','🛠️', rus + ' Unit', 'Rusak') +
    '</div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>💻 Daftar Aset Laboratorium</h3></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>Kode Aset</th><th>Nama Perangkat</th><th>Lab</th><th>Jumlah</th><th>Kondisi</th><th>Keterangan</th><th>Aksi</th></tr></thead>' +
    '<tbody id="inventarisBody"></tbody></table></div></div>';
  renderInventarisTable();
}

function renderInventarisTable() {
  const tbody = document.getElementById('inventarisBody');
  if (!tbody) return;
  tbody.innerHTML = db.inventaris.length===0 ? '<tr><td colspan="8" class="empty-cell">Belum ada data inventaris.</td></tr>' :
    db.inventaris.map((inv,i) => '<tr><td>' + (i+1) + '</td><td><code>' + inv.kode + '</code></td>' +
      '<td><strong>' + inv.nama + '</strong></td><td>' + inv.lab + '</td>' +
      '<td><span class="pill-tag glow">' + inv.jumlah + ' Unit</span></td>' +
      '<td>' + statusBadge(inv.kondisi) + '</td>' +
      '<td style="font-size:12px;color:var(--text-muted);">' + inv.keterangan + '</td>' +
      '<td><button class="btn btn-xs btn-outline me-1" onclick="editInventaris(' + inv.id + ')">✏️</button>' +
      '<button class="btn btn-xs btn-danger" onclick="deleteInventaris(' + inv.id + ')">🗑</button></td></tr>').join('');
}

function openInventarisModal() {
  document.getElementById('invEditId').value = -1;
  document.getElementById('invNama').value = '';
  document.getElementById('invJumlah').value = 1;
  document.getElementById('invKeterangan').value = '';
  document.getElementById('modalInventarisTitle').textContent = '💻 Tambah Aset Inventaris';
  openModal('modalInventaris');
}

function editInventaris(id) {
  const inv = db.inventaris.find(x => x.id === id);
  if (!inv) return;
  document.getElementById('invEditId').value = inv.id;
  document.getElementById('invNama').value = inv.nama;
  document.getElementById('invLab').value = inv.lab;
  document.getElementById('invJumlah').value = inv.jumlah;
  document.getElementById('invKondisi').value = inv.kondisi;
  document.getElementById('invKeterangan').value = inv.keterangan === '-' ? '' : inv.keterangan;
  document.getElementById('modalInventarisTitle').textContent = '✏️ Edit Aset Inventaris';
  openModal('modalInventaris');
}

function addInventaris() {
  const editId = parseInt(document.getElementById('invEditId').value) || -1;
  const nama   = document.getElementById('invNama').value.trim();
  const lab    = document.getElementById('invLab').value;
  const jumlah = parseInt(document.getElementById('invJumlah').value) || 1;
  const kondisi= document.getElementById('invKondisi').value;
  const ket    = document.getElementById('invKeterangan').value.trim() || '-';
  if (!nama) { showToast('Nama perangkat wajib diisi!','error'); return; }

  if (editId > 0) {
    const item = db.inventaris.find(i => i.id === editId);
    if (item) { item.nama = nama; item.lab = lab; item.jumlah = jumlah; item.kondisi = kondisi; item.keterangan = ket; }
    showToast('Aset inventaris berhasil diperbarui!');
  } else {
    const kode = 'INV-' + lab.replace(' ','') + '-' + String(counters.inventaris).padStart(3,'0');
    db.inventaris.push({ id:counters.inventaris++, kode, nama, lab, jumlah, kondisi, keterangan:ket });
    showToast('Aset berhasil ditambahkan!');
  }
  saveDB();
  closeModal('modalInventaris');
  renderInventaris();
}

function deleteInventaris(id) {
  if (!confirm('Hapus aset inventaris ini?')) return;
  db.inventaris = db.inventaris.filter(i => i.id!==id);
  saveDB();
  renderInventarisTable();
  showToast('Aset dihapus.','error');
}

// ============================================================
// ASLAB - JADWAL SAYA
// ============================================================
function renderJadwalAslab() {
  const el = document.getElementById('page-jadwal-aslab');
  if (!el) return;
  const myJ = db.jadwal.filter(j => j.aslab === currentUser.nama);
  let html =
    '<div class="view-header"><div><h1 class="view-title">Data Jadwal Saya</h1>' +
    '<p class="view-desc">Jadwal yang dibuat oleh Laboran untuk <strong>' + currentUser.nama + '</strong>. Tidak dapat diubah.</p></div></div>' +
    '<div class="glass-card mb-4" style="padding:14px 18px;background:rgba(0,242,254,0.04);border:1px solid rgba(0,242,254,0.2);">' +
    '<span style="font-size:13px;color:var(--text-muted);">📌 Total: <strong>' + myJ.length + ' pertemuan</strong> untuk matkul: <strong>' + currentUser.matkul.join(' dan ') + '</strong></span></div>';
  currentUser.matkul.forEach(mk => {
    const jMk = myJ.filter(j => j.matkul===mk);
    html += '<div class="glass-card mb-4"><div class="card-title-bar"><h3>📚 ' + mk + '</h3>' +
      '<span class="pill-tag glow">' + jMk.length + ' Pertemuan</span></div>' +
      '<div class="table-responsive"><table class="custom-table">' +
      '<thead><tr><th>Pertemuan</th><th>Tanggal</th><th>Jam</th><th>Lab</th><th>Materi</th><th>Status Absensi</th></tr></thead><tbody>';
    if (jMk.length===0) {
      html += '<tr><td colspan="6" class="empty-cell">Belum ada jadwal.</td></tr>';
    } else {
      jMk.forEach(j => {
        const abs = db.absensi.find(a => a.jadwalId===j.id && a.aslab===currentUser.nama);
        html += '<tr><td><span class="pill-tag">Pertemuan ' + j.pertemuan + '</span></td>' +
          '<td>' + formatTanggal(j.tanggal) + '</td><td>' + j.jamMulai + ' - ' + j.jamSelesai + '</td>' +
          '<td>' + j.lab + '</td><td style="font-size:12px;color:var(--text-muted);">' + j.materi + '</td>' +
          '<td>' + (abs ? '<span class="badge-status tersedia">✅ Hadir (' + abs.waktuAbsen + ')</span>' :
                         '<span class="badge-status maintenance">⬜ Belum Absen</span>') + '</td></tr>';
      });
    }
    html += '</tbody></table></div></div>';
  });
  el.innerHTML = html;
}

// ============================================================
// ASLAB - ABSENSI (TIME-GATED & TESTABLE)
// ============================================================
function renderAbsensiAslab() {
  const el = document.getElementById('page-absensi-aslab');
  if (!el) return;
  const myJ = db.jadwal.filter(j => j.aslab === currentUser.nama);
  const myA = db.absensi.filter(a => a.aslab === currentUser.nama);
  const now = new Date();
  const todayStr = toDateString(now);

  let html =
    '<div class="view-header"><div><h1 class="view-title">Absensi Saya</h1>' +
    '<p class="view-desc">Klik tombol <strong>ABSEN</strong> saat jam praktikum dimulai. Sistem otomatis memvalidasi hari dan jam.</p></div>' +
    '<button class="btn btn-outline" onclick="tambahJadwalHariIni()">➕ Buat Sesi Praktikum Hari Ini</button></div>' +
    '<div class="glass-card mb-4" style="background:rgba(255,200,0,0.05);border:1px solid rgba(255,200,0,0.25);padding:14px 18px;">' +
    '<span style="font-size:13px;">⏰ <strong>Waktu Sekarang:</strong> ' + formatTimeDisplay(now) + ' WIB — ' + formatTanggal(todayStr) +
    '<br><small style="color:var(--text-muted);">Absensi hanya bisa dilakukan saat sudah memasuki waktu jadwal.</small></span></div>' +
    '<div class="glass-card mb-4" style="background:rgba(0,230,118,0.06);border:1px solid rgba(0,230,118,0.3);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">' +
    '<div><div style="font-weight:700;color:var(--emerald);font-size:13.5px;">🟢 Sesi Praktikum Aktif Hari Ini (' + formatTanggal(todayStr) + ')</div>' +
    '<div style="font-size:12px;color:var(--text-muted);margin-top:3px;">Sesi praktikum terdaftar secara resmi. Asisten Lab silakan lakukan presensi kehadiran melalui tombol <strong>✅ ABSEN</strong>.</div></div>' +
    '<button class="btn btn-xs btn-primary" onclick="tambahJadwalHariIni()">➕ Tambah Sesi Praktikum</button></div>';

  currentUser.matkul.forEach(mk => {
    const jMk = myJ.filter(j => j.matkul===mk);
    html += '<div class="glass-card mb-4"><div class="card-title-bar"><h3>📚 ' + mk + '</h3></div>';
    if (jMk.length===0) {
      html += '<p class="empty-cell">Belum ada jadwal untuk mata kuliah ini.</p>';
    } else {
      jMk.forEach(j => {
        const abs = myA.find(a => a.jadwalId===j.id);
        const isToday = j.tanggal===todayStr;
        const bisaAbsen = isToday && !abs && isWaktuAbsen(j.jamMulai, now);
        let statusHtml = '';
        if (abs) {
          statusHtml = '<span class="badge-status tersedia">✅ Sudah Absen (' + abs.waktuAbsen + ' WIB)</span> ' +
            '<button class="btn btn-xs btn-outline" style="font-size:11px;margin-left:6px;" onclick="batalAbsen(' + abs.id + ')" title="Batalkan presensi">↺ Batal Presensi</button>';
        } else if (!isToday) {
          const tgl = new Date(j.tanggal + 'T00:00:00');
          statusHtml = tgl < now ?
            '<span class="badge-status maintenance">❌ Tidak Absen (Waktu Lewat)</span>' :
            '<span class="badge-status sedang">📅 Belum waktunya (' + formatTanggal(j.tanggal) + ')</span>';
        } else if (!isWaktuAbsen(j.jamMulai, now)) {
          statusHtml = '<span class="badge-status sedang">⏳ Belum waktunya (mulai ' + j.jamMulai + ' WIB)</span>';
        } else {
          statusHtml = '<span class="badge-status tersedia">✅ Bisa Absen Sekarang</span>';
        }
        html += '<div class="absensi-row-card"><div class="absensi-row-info">' +
          '<div class="absensi-row-header"><span class="pill-tag">Pertemuan ' + j.pertemuan + '</span>' +
          '<strong style="margin-left:8px;">' + formatTanggal(j.tanggal) + '</strong>' +
          '<span style="margin-left:8px;color:var(--text-muted);font-size:12px;">' + j.jamMulai + ' - ' + j.jamSelesai + ' WIB - ' + j.lab + '</span></div>' +
          '<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">📖 ' + j.materi + '</div>' +
          '<div style="margin-top:6px;">' + statusHtml + '</div></div>' +
          '<div class="absensi-row-action">' +
          (bisaAbsen ?
            '<button class="btn btn-primary btn-absen" onclick="doAbsen(' + j.id + ')">✅ ABSEN</button>' :
            abs ?
            '<button class="btn btn-sm" onclick="batalAbsen(' + abs.id + ')" style="background:rgba(0,230,118,0.15);color:var(--emerald);cursor:pointer;" title="Klik untuk reset dan coba absen lagi">☑️ Selesai (Klik Uji Ulang)</button>' :
            '<button class="btn btn-sm" disabled style="background:rgba(255,255,255,0.05);color:var(--text-muted);cursor:not-allowed;">🔒 Belum Waktunya</button>'
          ) + '</div></div>';
      });
    }
    html += '</div>';
  });
  el.innerHTML = html;
}

function doAbsen(jadwalId) {
  const jadwal = db.jadwal.find(j => j.id===jadwalId);
  if (!jadwal) return;
  const now = new Date();
  const todayStr = toDateString(now);
  if (jadwal.tanggal !== todayStr) { showToast('❌ Tanggal tidak sesuai jadwal!','error'); return; }
  if (!isWaktuAbsen(jadwal.jamMulai, now)) { showToast('❌ Belum bisa absen. Jadwal mulai jam ' + jadwal.jamMulai + ' WIB.','error'); return; }
  const sudah = db.absensi.find(a => a.jadwalId===jadwalId && a.aslab===currentUser.nama);
  if (sudah) { showToast('Anda sudah absen untuk sesi ini!','error'); return; }
  const waktuAbsen = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  db.absensi.push({ id:counters.absensi++, jadwalId, aslab:currentUser.nama, matkul:jadwal.matkul,
    pertemuan:jadwal.pertemuan, tanggal:jadwal.tanggal, waktuAbsen, status:'Hadir' });
  saveDB();
  showToast('✅ Absensi Pertemuan ' + jadwal.pertemuan + ' (' + jadwal.matkul + ') berhasil!','success');
  renderAbsensiAslab();
}

function batalAbsen(absId) {
  if (!confirm('Reset status absensi ini agar Anda dapat menguji tombol ABSEN kembali?')) return;
  db.absensi = db.absensi.filter(a => a.id !== absId);
  saveDB();
  renderAbsensiAslab();
  showToast('Status absensi berhasil di-reset untuk uji coba ulang.');
}

function tambahJadwalHariIni() {
  const now = new Date();
  const todayStr = toDateString(now);
  const mk = (currentUser && currentUser.matkul && currentUser.matkul[0]) ? currentUser.matkul[0] : 'Pemrograman Web';
  const lab = (currentUser && currentUser.lab) ? currentUser.lab : 'Lab 1';
  const count = db.jadwal.filter(j => j.aslab === currentUser.nama && j.matkul === mk).length;
  const pert = (count % 8) + 1;
  const newJadwal = {
    id: counters.jadwal++,
    matkul: mk,
    aslab: currentUser.nama,
    lab: lab,
    pertemuan: pert,
    tanggal: todayStr,
    jamMulai: '07:00',
    jamSelesai: '23:59',
    materi: 'Sesi Uji Coba Presensi Praktikum (' + formatTanggal(todayStr) + ')'
  };
  db.jadwal.unshift(newJadwal);
  saveDB();
  renderAbsensiAslab();
  showToast('Sesi praktikum hari ini berhasil ditambahkan! Tombol ABSEN aktif.');
}

// ============================================================
// ASLAB - MODUL (VIEW ONLY)
// ============================================================
function renderModulAslab() {
  const el = document.getElementById('page-modul-aslab');
  if (!el) return;
  const mk = currentUser.matkul;
  const myM = db.modul.filter(m => mk.includes(m.matkul));
  let html =
    '<div class="view-header"><div><h1 class="view-title">Modul Praktikum</h1>' +
    '<p class="view-desc">Modul yang sudah disiapkan Laboran. Anda tidak perlu menginput ulang.</p></div></div>' +
    '<div class="glass-card mb-4" style="padding:14px 18px;background:rgba(99,102,241,0.05);border:1px solid rgba(99,102,241,0.2);">' +
    '<span style="font-size:13px;color:var(--text-muted);">📁 Total <strong>' + myM.length + ' modul</strong> tersedia untuk matkul: <strong>' + mk.join(' dan ') + '</strong></span></div>';
  mk.forEach(m => {
    const mMk = myM.filter(mod => mod.matkul===m);
    html += '<div class="mb-4"><h3 style="color:var(--cyan);margin-bottom:12px;font-size:15px;">📚 ' + m + '</h3><div class="modul-grid">';
    if (mMk.length===0) {
      html += '<p class="empty-cell">Belum ada modul untuk ' + m + '.</p>';
    } else {
      mMk.forEach(mod => {
        html += '<div class="modul-card"><div class="modul-icon">📁</div>' +
          '<div class="modul-title">' + mod.judul + '</div>' +
          '<div class="modul-sub">Pertemuan ' + mod.pertemuan + '</div>' +
          '<div class="modul-desc">' + mod.deskripsi + '</div>' +
          '<button class="btn btn-xs btn-outline mt-3" onclick="downloadModul(' + mod.id + ')">📥 Unduh Modul</button></div>';
      });
    }
    html += '</div></div>';
  });
  el.innerHTML = html;
}

// ============================================================
// ASLAB - NILAI AKHIR
// ============================================================
function renderNilai() {
  const el = document.getElementById('page-nilai');
  if (!el) return;
  const mk = currentUser.matkul;
  const myN = db.nilai.filter(n => mk.includes(n.matkul) && n.aslab===currentUser.nama);
  const nils = myN.map(h => Math.round(h.nilaiTugas*0.4+h.nilaiUjian*0.6));
  const avg  = nils.length ? Math.round(nils.reduce((a,b)=>a+b,0)/nils.length) : 0;
  const lulus= nils.filter(n=>n>=65).length;
  const grA  = nils.filter(n=>n>=85).length;
  el.innerHTML =
    '<div class="view-header"><div><h1 class="view-title">Nilai Akhir</h1>' +
    '<p class="view-desc">Input nilai mahasiswa untuk mata kuliah Anda. Bisa diimpor dari CSV/Excel dan diekspor ke CSV.</p></div>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;"><button class="btn btn-outline" onclick="openImportNilaiModal()">⬆ Import Data</button>' +
    '<button class="btn btn-outline" onclick="exportNilaiCSV()">⬇ Export CSV Nilai</button>' +
    '<button class="btn btn-primary" onclick="openNilaiModal()">+ Input Nilai</button></div></div>' +
    '<div class="metrics-grid mb-4">' +
    metricCard('cyan','👨‍🎓', myN.length, 'Total Mahasiswa') +
    metricCard('emerald','📊', avg + '/100', 'Rata-rata Nilai Akhir') +
    metricCard('amber','✅', lulus, 'Status Lulus (lebih dari 65)') +
    metricCard('purple','🏆', grA, 'Grade A (lebih dari 85)') +
    '</div>' +
    '<div class="glass-card"><div class="card-title-bar"><h3>🏆 Transkrip Nilai Akhir Mahasiswa</h3>' +
    '<select id="filterNilaiMatkul" class="form-select form-select-sm" onchange="renderNilaiTable()">' +
    '<option value="">Semua Mata Kuliah</option>' + mk.map(m=>'<option>'+m+'</option>').join('') +
    '</select></div>' +
    '<div class="table-responsive"><table class="custom-table">' +
    '<thead><tr><th>No</th><th>NIM</th><th>Nama Mahasiswa</th><th>Mata Kuliah</th><th>Nilai Tugas (40%)</th><th>Nilai Ujian (60%)</th><th>Nilai Akhir</th><th>Grade</th><th>Aksi</th></tr></thead>' +
    '<tbody id="nilaiBody"></tbody></table></div></div>';
  renderNilaiTable();
}

function renderNilaiTable() {
  const filter = document.getElementById('filterNilaiMatkul')?.value || '';
  const mk = currentUser.matkul;
  const tbody = document.getElementById('nilaiBody');
  if (!tbody) return;
  let d = db.nilai.filter(n => mk.includes(n.matkul) && n.aslab===currentUser.nama);
  if (filter) d = d.filter(n => n.matkul===filter);
  tbody.innerHTML = d.length===0 ? '<tr><td colspan="9" class="empty-cell">Belum ada data nilai.</td></tr>' :
    d.map((h,i) => {
      const na = Math.round(h.nilaiTugas*0.4+h.nilaiUjian*0.6);
      return '<tr><td>'+(i+1)+'</td><td><code>'+h.nim+'</code></td><td><strong>'+h.nama+'</strong></td>' +
        '<td>'+h.matkul+'</td><td><strong>'+h.nilaiTugas+'</strong>/100</td><td><strong>'+h.nilaiUjian+'</strong>/100</td>' +
        '<td><strong style="font-size:15px;color:var(--cyan);">'+na+'</strong></td><td>'+getGrade(na)+'</td>' +
        '<td><button class="btn btn-xs btn-outline me-1" onclick="editNilai('+h.id+')">✏️ Edit</button>' +
        '<button class="btn btn-xs btn-danger" onclick="deleteNilai('+h.id+')">🗑️</button></td></tr>';
    }).join('');
}

function openNilaiModal() {
  document.getElementById('nvEditId').value = -1;
  document.getElementById('nvNim').value = '';
  document.getElementById('nvNama').value = '';
  document.getElementById('nvNilaiTugas').value = '';
  document.getElementById('nvNilaiUjian').value = '';
  document.getElementById('nvPreview').textContent = 'Nilai Akhir: - | Grade: -';
  document.getElementById('modalNilaiTitle').textContent = '🏆 Input Nilai Akhir Mahasiswa';
  const sel = document.getElementById('nvMatkul');
  sel.innerHTML = currentUser.matkul.map(mk => '<option>'+mk+'</option>').join('');
  openModal('modalNilai');
}

function calcNilaiPreview() {
  const nt = parseFloat(document.getElementById('nvNilaiTugas')?.value)||0;
  const nu = parseFloat(document.getElementById('nvNilaiUjian')?.value)||0;
  const na = Math.round(nt*0.4+nu*0.6);
  let g='D (Mengulang)';
  if (na>=85) g='A (Sangat Baik)';
  else if (na>=75) g='B (Baik)';
  else if (na>=65) g='C (Cukup)';
  const p=document.getElementById('nvPreview');
  if (p) p.textContent='Nilai Akhir: '+na+' | Grade: '+g;
}

function saveNilai() {
  const editId = parseInt(document.getElementById('nvEditId').value);
  const nim    = document.getElementById('nvNim').value.trim();
  const nama   = document.getElementById('nvNama').value.trim();
  const matkul = document.getElementById('nvMatkul').value;
  const nt     = parseFloat(document.getElementById('nvNilaiTugas').value)||0;
  const nu     = parseFloat(document.getElementById('nvNilaiUjian').value)||0;
  if (!nim||!nama) { showToast('NIM dan Nama wajib diisi!','error'); return; }
  if (editId>0) {
    const item=db.nilai.find(n=>n.id===editId);
    if (item) { item.nim=nim; item.nama=nama; item.matkul=matkul; item.nilaiTugas=nt; item.nilaiUjian=nu; }
    showToast('Nilai '+nama+' berhasil diperbarui!');
  } else {
    db.nilai.push({ id:counters.nilai++, nim, nama, matkul, aslab:currentUser.nama, nilaiTugas:nt, nilaiUjian:nu });
    showToast('Nilai '+nama+' berhasil ditambahkan!');
  }
  saveDB();
  closeModal('modalNilai');
  renderNilai();
}

function editNilai(id) {
  const item=db.nilai.find(n=>n.id===id);
  if (!item) return;
  document.getElementById('nvEditId').value=item.id;
  document.getElementById('nvNim').value=item.nim;
  document.getElementById('nvNama').value=item.nama;
  document.getElementById('nvNilaiTugas').value=item.nilaiTugas;
  document.getElementById('nvNilaiUjian').value=item.nilaiUjian;
  document.getElementById('modalNilaiTitle').textContent='✏️ Edit Nilai Akhir';
  const sel=document.getElementById('nvMatkul');
  sel.innerHTML=currentUser.matkul.map(mk=>'<option'+(mk===item.matkul?' selected':'')+'>'+mk+'</option>').join('');
  calcNilaiPreview();
  openModal('modalNilai');
}

function deleteNilai(id) {
  if (!confirm('Hapus data nilai ini?')) return;
  db.nilai=db.nilai.filter(n=>n.id!==id);
  saveDB();
  renderNilai();
  showToast('Nilai dihapus.','error');
}

function exportNilaiCSV() {
  const mk=currentUser.matkul;
  const d=db.nilai.filter(n=>mk.includes(n.matkul)&&n.aslab===currentUser.nama);
  const rows=[['No','NIM','Nama Mahasiswa','Mata Kuliah','ASLAB','Nilai Tugas','Nilai Ujian','Nilai Akhir','Grade']];
  d.forEach((h,i)=>{
    const na=Math.round(h.nilaiTugas*0.4+h.nilaiUjian*0.6);
    rows.push([i+1,h.nim,h.nama,h.matkul,h.aslab,h.nilaiTugas,h.nilaiUjian,na,na>=85?'A':na>=75?'B':na>=65?'C':'D']);
  });
  downloadCSV(rows,'Nilai_Akhir_'+currentUser.nama+'_UIR.csv');
  showToast('Export CSV Nilai berhasil!');
}

// ============================================================
// ASLAB - IMPORT NILAI (CSV / EXCEL)
// ============================================================
let importNilaiRows = [];
let importNilaiRaw = null;

function reprocessImportNilai() { if (importNilaiRaw) processImportRows(importNilaiRaw); }

function openImportNilaiModal() {
  importNilaiRows = [];
  importNilaiRaw = null;
  const f = document.getElementById('importNilaiFile');
  if (f) f.value = '';
  document.getElementById('importFileName').textContent = '';
  document.getElementById('importPreview').innerHTML = '';
  document.getElementById('btnConfirmImport').disabled = true;
  document.getElementById('importDropzone').classList.remove('has-file');
  setupImportDropzone();
  openModal('modalImportNilai');
}

function setupImportDropzone() {
  const dz = document.getElementById('importDropzone');
  if (!dz || dz.dataset.ready) return;
  dz.dataset.ready = '1';
  ['dragenter','dragover'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('dragover'); }));
  ['dragleave','drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('dragover'); }));
  dz.addEventListener('drop', e => { const file = e.dataTransfer.files[0]; if (file) handleImportNilaiFile(file); });
}

function downloadNilaiTemplate() {
  const mk = currentUser.matkul[0] || 'Pemrograman Web';
  downloadCSV([
    ['NIM','Nama Mahasiswa','Mata Kuliah','Nilai Tugas','Nilai Ujian'],
    ['21IF010','Contoh Mahasiswa Satu', mk, 85, 90],
    ['21IF011','Contoh Mahasiswa Dua',  mk, 78, 80],
  ], 'Template_Import_Nilai.csv');
  showToast('Template CSV berhasil diunduh!');
}

function handleImportNilaiFile(file) {
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();
  if (!['csv','xlsx','xls'].includes(ext)) { showToast('Format file tidak didukung. Gunakan CSV atau Excel.','error'); return; }
  document.getElementById('importFileName').textContent = '📄 ' + file.name;
  document.getElementById('importDropzone').classList.add('has-file');
  const reader = new FileReader();
  reader.onload = e => {
    try {
      let rows;
      if (ext === 'csv') {
        rows = parseCSVText(e.target.result);
      } else {
        if (typeof XLSX === 'undefined') { showToast('Library Excel gagal dimuat (cek internet). Gunakan file CSV.','error'); return; }
        const wb = XLSX.read(new Uint8Array(e.target.result), { type:'array' });
        rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header:1, defval:'', raw:false });
      }
      processImportRows(rows);
    } catch (err) {
      console.error(err);
      showToast('Gagal membaca file: ' + err.message, 'error');
    }
  };
  if (ext === 'csv') reader.readAsText(file, 'UTF-8'); else reader.readAsArrayBuffer(file);
}

// Parser CSV sederhana: mendukung tanda kutip dan pemisah koma atau titik koma
function parseCSVText(text) {
  text = text.replace(/^\uFEFF/, '');
  const firstLine = text.split(/\r?\n/)[0] || '';
  const delim = (firstLine.split(';').length > firstLine.split(',').length) ? ';' : ',';
  const rows = []; let row = []; let cell = ''; let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i+1] === '"') { cell += '"'; i++; }
      else if (c === '"') inQ = false;
      else cell += c;
    } else if (c === '"') inQ = true;
    else if (c === delim) { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i+1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

function processImportRows(rows) {
  importNilaiRaw = rows;
  rows = (rows || []).filter(r => r.some(c => String(c).trim() !== ''));
  if (rows.length < 2) { showToast('File kosong atau hanya berisi header.','error'); return; }
  const norm = s => String(s).toLowerCase().replace(/[^a-z]/g,'');
  const header = rows[0].map(norm);
  const findCol = keys => header.findIndex(h => keys.some(k => h.includes(k)));
  const col = {
    nim:    findCol(['nim','npm']),
    nama:   findCol(['nama']),
    matkul: findCol(['matakuliah','matkul','mk']),
    tugas:  findCol(['tugas']),
    ujian:  findCol(['ujian']),
  };
  const missing = Object.entries(col).filter(([,v]) => v < 0).map(([k]) => k);
  if (missing.length) { showToast('Kolom tidak ditemukan: ' + missing.join(', '),'error'); return; }

  const myMk = currentUser.matkul;
  const overwrite = document.getElementById('importOverwrite').checked;
  importNilaiRows = rows.slice(1).map((r, i) => {
    const nim  = String(r[col.nim] ?? '').trim();
    const nama = String(r[col.nama] ?? '').trim();
    const mkRaw = String(r[col.matkul] ?? '').trim();
    const matkul = myMk.find(m => m.toLowerCase() === mkRaw.toLowerCase()) || mkRaw;
    const nt = parseFloat(String(r[col.tugas]).replace(',','.'));
    const nu = parseFloat(String(r[col.ujian]).replace(',','.'));
    let error = '';
    if (!nim || !nama) error = 'NIM/Nama kosong';
    else if (!myMk.includes(matkul)) error = 'Bukan mata kuliah Anda';
    else if (isNaN(nt) || nt < 0 || nt > 100) error = 'Nilai tugas tidak valid';
    else if (isNaN(nu) || nu < 0 || nu > 100) error = 'Nilai ujian tidak valid';
    const exists = !error && db.nilai.some(n => n.nim === nim && n.matkul === matkul && n.aslab === currentUser.nama);
    if (exists && !overwrite) error = 'Duplikat (dilewati)';
    return { line: i + 2, nim, nama, matkul, nilaiTugas: nt, nilaiUjian: nu, error, exists };
  });
  renderImportPreview();
}

function renderImportPreview() {
  const valid = importNilaiRows.filter(r => !r.error);
  const invalid = importNilaiRows.length - valid.length;
  const box = document.getElementById('importPreview');
  box.innerHTML =
    '<div class="import-summary">' +
      '<span class="imp-chip ok">✔ ' + valid.length + ' siap diimpor</span>' +
      (invalid ? '<span class="imp-chip err">✖ ' + invalid + ' bermasalah</span>' : '') +
      '<span class="imp-chip">Total ' + importNilaiRows.length + ' baris</span>' +
    '</div>' +
    '<div class="table-responsive import-table-wrap"><table class="custom-table">' +
    '<thead><tr><th>Baris</th><th>NIM</th><th>Nama</th><th>Mata Kuliah</th><th>Tugas</th><th>Ujian</th><th>Akhir</th><th>Status</th></tr></thead><tbody>' +
    importNilaiRows.map(r => {
      const na = r.error ? '-' : Math.round(r.nilaiTugas*0.4 + r.nilaiUjian*0.6);
      const st = r.error ? '<span class="badge-status maintenance">' + r.error + '</span>'
               : r.exists ? '<span class="badge-status sedang">Perbarui</span>'
               : '<span class="badge-status tersedia">Baru</span>';
      return '<tr class="' + (r.error ? 'row-error' : '') + '"><td>' + r.line + '</td><td><code>' + escapeHtml(r.nim) + '</code></td><td>' + escapeHtml(r.nama) +
        '</td><td>' + escapeHtml(r.matkul) + '</td><td>' + (isNaN(r.nilaiTugas)?'-':r.nilaiTugas) + '</td><td>' + (isNaN(r.nilaiUjian)?'-':r.nilaiUjian) +
        '</td><td><strong>' + na + '</strong></td><td>' + st + '</td></tr>';
    }).join('') +
    '</tbody></table></div>';
  document.getElementById('btnConfirmImport').disabled = valid.length === 0;
}

function confirmImportNilai() {
  const valid = importNilaiRows.filter(r => !r.error);
  if (!valid.length) return;
  let added = 0, updated = 0;
  valid.forEach(r => {
    const item = db.nilai.find(n => n.nim === r.nim && n.matkul === r.matkul && n.aslab === currentUser.nama);
    if (item) { item.nama = r.nama; item.nilaiTugas = r.nilaiTugas; item.nilaiUjian = r.nilaiUjian; updated++; }
    else { db.nilai.push({ id: counters.nilai++, nim: r.nim, nama: r.nama, matkul: r.matkul, aslab: currentUser.nama, nilaiTugas: r.nilaiTugas, nilaiUjian: r.nilaiUjian }); added++; }
  });
  saveDB();
  closeModal('modalImportNilai');
  renderNilai();
  showToast('Import selesai: ' + added + ' data baru, ' + updated + ' diperbarui.');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ============================================================
// HELPERS
// ============================================================
function getGrade(na) {
  if (na>=85) return '<span class="badge-status tersedia">A (Sangat Baik)</span>';
  if (na>=75) return '<span class="badge-status sedang">B (Baik)</span>';
  if (na>=65) return '<span class="badge-status sedang">C (Cukup)</span>';
  return '<span class="badge-status maintenance">D (Mengulang)</span>';
}

function statusBadge(status) {
  const s=(status||'').toLowerCase();
  let cls='tersedia',icon='🟢';
  if (s.includes('sedang')||s.includes('perbaikan')) { cls='sedang'; icon='🟡'; }
  else if (s.includes('maintenance')||s.includes('rusak')||s.includes('non')) { cls='maintenance'; icon='🔴'; }
  return '<span class="badge-status '+cls+'">'+icon+' '+status+'</span>';
}

function isWaktuAbsen(jamMulai, now) {
  const [h,m]=jamMulai.split(':').map(Number);
  return now.getHours()>h || (now.getHours()===h && now.getMinutes()>=m);
}

function toDateString(date) {
  return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');
}

function formatTanggal(str) {
  if (!str) return '-';
  const d = new Date(str+'T00:00:00');
  return d.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
}

function formatTimeDisplay(date) {
  return String(date.getHours()).padStart(2,'0')+':'+String(date.getMinutes()).padStart(2,'0')+':'+String(date.getSeconds()).padStart(2,'0');
}

function downloadCSV(rows, filename) {
  const csv=rows.map(r=>r.map(c=>'"'+c+'"').join(',')).join('\n');
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download=filename; a.click();
  URL.revokeObjectURL(url);
}

function openModal(id) { const el=document.getElementById(id); if(el) el.classList.add('open'); }
function closeModal(id) { const el=document.getElementById(id); if(el) el.classList.remove('open'); }

function showToast(msg, type='success') {
  const container=document.getElementById('toast');
  if(!container) return;
  const toast=document.createElement('div');
  toast.className='toast-msg '+type;
  toast.innerHTML='<span>'+(type==='success'?'✅':'⚠️')+'</span> <span>'+msg+'</span>';
  container.appendChild(toast);
  setTimeout(()=>{
    toast.style.opacity='0'; toast.style.transform='translateX(100%)';
    setTimeout(()=>toast.remove(),300);
  },3500);
}

function updateClock() {
  const el=document.getElementById('timeDisplay');
  if(el) el.textContent=formatTimeDisplay(new Date())+' WIB';
}
setInterval(updateClock,1000);
updateClock();

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const mc = document.getElementById('mainContent');
  if (window.innerWidth <= 768) {
    sb?.classList.toggle('mobile-open');
  } else {
    sb?.classList.toggle('collapsed');
    mc?.classList.toggle('expanded');
  }
}

// ============================================================
// PROFILE SETTINGS MODAL
// ============================================================
function openProfileModal() {
  if (!currentUser) return;

  const initial = (currentUser.nama || 'U').charAt(0).toUpperCase();
  const profAvatar = document.getElementById('profAvatar');
  if (profAvatar) profAvatar.textContent = initial;

  const profNamaHeader = document.getElementById('profNamaHeader');
  if (profNamaHeader) profNamaHeader.textContent = currentUser.nama;

  const profRoleBadge = document.getElementById('profRoleBadge');
  if (profRoleBadge) {
    if (currentRole === 'admin') {
      profRoleBadge.textContent = '🛡️ Laboran / Admin';
      profRoleBadge.className = 'auth-badge-tag admin-badge';
    } else {
      profRoleBadge.textContent = '👨‍🏫 Asisten Laboratorium (ASLAB)';
      profRoleBadge.className = 'auth-badge-tag user-badge';
    }
  }

  const profEmailHeader = document.getElementById('profEmailHeader');
  if (profEmailHeader) {
    const email = currentRole === 'admin'
      ? 'laboran.admin@uir.ac.id'
      : ((currentUser.nim || 'aslab').toLowerCase() + '@aslab.uir.ac.id');
    profEmailHeader.textContent = email;
  }

  // Field nilai identitas
  const profNama = document.getElementById('profNama');
  if (profNama) profNama.value = currentUser.nama || '';

  const profId = document.getElementById('profId');
  if (profId) {
    profId.value = currentRole === 'admin'
      ? (currentUser.nip || '198705152010121002')
      : (currentUser.nim || '-');
  }

  const profIdLabel = document.getElementById('profIdLabel');
  if (profIdLabel) {
    profIdLabel.textContent = currentRole === 'admin' ? 'NIP Laboran' : 'NIM ASLAB';
  }

  const profContact = document.getElementById('profContact');
  if (profContact) {
    profContact.value = currentUser.contact || (currentRole === 'admin' ? '0812-7654-0001' : '-');
  }

  // Khusus ASLAB: penugasan
  const profAslabDetails = document.getElementById('profAslabDetails');
  if (profAslabDetails) {
    if (currentRole === 'aslab') {
      profAslabDetails.style.display = 'block';
      const profMatkul = document.getElementById('profMatkul');
      if (profMatkul) {
        profMatkul.value = Array.isArray(currentUser.matkul) ? currentUser.matkul.join(', ') : (currentUser.matkul || '-');
      }
      const profLab = document.getElementById('profLab');
      if (profLab) profLab.value = currentUser.lab || 'Lab 1';
    } else {
      profAslabDetails.style.display = 'none';
    }
  }

  // Kosongkan field kata sandi
  const newP = document.getElementById('profNewPass');
  if (newP) newP.value = '';
  const confP = document.getElementById('profConfirmPass');
  if (confP) confP.value = '';

  openModal('modalProfile');
}

function saveProfileSettings() {
  const newNama = (document.getElementById('profNama')?.value || '').trim();
  const newContact = (document.getElementById('profContact')?.value || '').trim();
  const newPass = (document.getElementById('profNewPass')?.value || '').trim();
  const confirmPass = (document.getElementById('profConfirmPass')?.value || '').trim();

  if (!newNama) {
    showToast('Nama lengkap tidak boleh kosong!', 'error');
    return;
  }

  if (newPass) {
    if (newPass.length < 5) {
      showToast('Kata sandi baru minimal 5 karakter!', 'error');
      return;
    }
    if (newPass !== confirmPass) {
      showToast('Konfirmasi kata sandi tidak cocok!', 'error');
      return;
    }
  }

  const oldNama = currentUser.nama;
  currentUser.nama = newNama;
  currentUser.contact = newContact;

  if (currentRole === 'admin') {
    if (db.admins) {
      const adm = db.admins.find(a => a.username === (currentUser.username || 'admin_uir'));
      if (adm) {
        adm.nama = newNama;
        if (newContact) adm.contact = newContact;
        if (newPass) adm.password = newPass;
      }
    }
  } else if (currentRole === 'aslab') {
    const aslab = db.aslab.find(a => a.id === currentUser.id || a.username === currentUser.username);
    if (aslab) {
      aslab.nama = newNama;
      aslab.contact = newContact;
      if (newPass) aslab.password = newPass;

      // Update referensi nama di jadwal, absensi, dan nilai jika nama diedit
      if (oldNama !== newNama) {
        db.jadwal.forEach(j => { if (j.aslab === oldNama) j.aslab = newNama; });
        db.absensi.forEach(a => { if (a.aslab === oldNama) a.aslab = newNama; });
        db.nilai.forEach(n => { if (n.aslab === oldNama) n.aslab = newNama; });
      }
    }
  }

  // Perbarui elemen UI yang menampilkan profil
  const userNameEl = document.getElementById('userName');
  if (userNameEl) userNameEl.textContent = newNama;
  const userAvatarEl = document.getElementById('userAvatar');
  if (userAvatarEl) userAvatarEl.textContent = newNama.charAt(0).toUpperCase();

  saveDB();
  saveSession(currentRole, currentUser, 'dashboard');
  closeModal('modalProfile');
  navigateTo('dashboard');
  showToast('Profil pengguna berhasil diperbarui!', 'success');
}

// populate jadwal modal selects
function populateJadwalModalSelects() {
  const jdMatkul = document.getElementById('jdMatkul');
  if (jdMatkul) jdMatkul.innerHTML = db.matkul.map(m=>'<option>'+m.nama+'</option>').join('');
  const jdAslab = document.getElementById('jdAslab');
  if (jdAslab) jdAslab.innerHTML = db.aslab.map(a=>'<option>'+a.nama+'</option>').join('');
  const jdLab = document.getElementById('jdLab');
  if (jdLab) jdLab.innerHTML = db.labs.map(l=>'<option>'+l.nama+'</option>').join('');
  const mdMatkul = document.getElementById('mdMatkul');
  if (mdMatkul) mdMatkul.innerHTML = db.matkul.map(m=>'<option>'+m.nama+'</option>').join('');
}

document.addEventListener('DOMContentLoaded', () => {
  // Muat data dari localStorage jika pernah disimpan
  loadDB();

  // Coba pulihkan sesi aktif (jika pengguna me-refresh halaman)
  const restored = restoreSession();
  if (!restored) {
    document.getElementById('view-login-admin').classList.add('active-view');
  }

  // Override openModal to also populate selects
  const _openModal = openModal;
  window.openModal = function(id) {
    populateJadwalModalSelects();
    _openModal(id);
  };
});
