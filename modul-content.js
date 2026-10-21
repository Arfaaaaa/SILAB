/**
 * SILAB UIR - Dokumen Kurikulum & Modul Pembelajaran Resmi Laboratorium Komputer
 * Fakultas Teknik - Program Studi Teknik Informatika - Universitas Islam Riau
 * 
 * Berisi silabus akademik praktikum, capaian pembelajaran, landasan teori komprehensif,
 * langkah kerja praktikum, kode program/query/konfigurasi, dan soal latihan tugas mandiri
 * untuk 5 mata kuliah praktikum (7 pertemuan pasca-UTS):
 * 1. Pemrograman Web
 * 2. Basis Data
 * 3. Kecerdasan Buatan
 * 4. Jaringan Komputer
 * 5. Pemrograman Mobile
 */

const MODUL_CURRICULUM_DATA = {
  // ============================================================
  // 1. PEMROGRAMAN WEB
  // ============================================================
  "Pemrograman Web:1": {
    tujuan: [
      "Memahami struktur semantik dokumen HTML5 (<header>, <nav>, <main>, <article>, <section>, <footer>) untuk aksesibilitas peramban dan SEO.",
      "Menguasai arsitektur CSS Grid 2-dimensi dengan pendefinisian baris, kolom dinamis, dan gap tanpa ketergantungan framework eksternal.",
      "Mampu merancang antarmuka dashboard responsif menggunakan fungsi modern CSS seperti repeat(), minmax(), dan media queries."
    ],
    teori: `HTML5 merevolusi cara peramban membaca struktur halaman web dengan memperkenalkan elemen semantik yang memberikan makna kontekstual terhadap hierarki konten. Penggunaan elemen semantik sangat krusial untuk performa Search Engine Optimization (SEO) dan standar aksesibilitas peramban tunanetra (Screen Reader).

CSS Grid Layout Module Level 1 adalah sistem tata letak dua dimensi paling mutakhir yang disediakan oleh standar W3C. Berbeda dengan Flexbox yang bersifat satu dimensi (mengatur sumbu baris ATAU kolom), Grid memungkinkan developer mengatur baris dan kolom secara bersamaan dengan sintaks deklaratif yang ringkas. Konsep pembagian proporsional menggunakan satuan fraction ('fr') serta fungsi 'repeat()' dan 'minmax()' memungkinkan pembuatan antarmuka responsif tanpa perlu menuliskan puluhan baris media queries manual.`,
    alat: "Workstation Lab PC Core i7, RAM 16GB, Visual Studio Code, Browser Google Chrome / Mozilla Firefox, Ekstensi Live Server.",
    langkah: [
      "Buka Visual Studio Code dan buat direktori proyek baru bernama 'praktikum_web_pertemuan1'.",
      "Buat file 'index.html' dan buat struktur HTML5 dasar dengan tag semantik lengkap.",
      "Buat file 'style.css' dan tautkan ke dokumen HTML menggunakan tag <link rel='stylesheet'>.",
      "Terapkan deklarasi 'display: grid' pada elemen penampung utama (<main class='grid-container'>).",
      "Tentukan konfigurasi kolom dinamis menggunakan 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))' dan 'gap: 20px'.",
      "Uji responsivitas tata letak dengan membuka Google Chrome DevTools (tekan F12 lalu aktifkan Device Toolbar)."
    ],
    kode: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Praktikum 1 - HTML5 & CSS Grid</title>
  <style>
    :root {
      --primary: #0284c7;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: var(--bg); color: var(--text); }
    header { background: var(--primary); color: #fff; padding: 1.5rem; text-align: center; }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .card {
      background: var(--card-bg);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      border: 1px solid #e2e8f0;
      transition: transform 0.2s ease;
    }
    .card:hover { transform: translateY(-4px); }
    footer { text-align: center; padding: 1.5rem; color: #64748b; font-size: 0.9rem; }
  </style>
</head>
<body>
  <header><h1>Portal Praktikum Laboratorium Komputer UIR</h1></header>
  <main class="grid-container">
    <article class="card"><h3>Modul 1: Dasar HTML5</h3><p>Penataan antarmuka web modern dengan elemen semantik dan CSS Grid.</p></article>
    <article class="card"><h3>Modul 2: JavaScript DOM</h3><p>Manipulasi elemen halaman web secara interaktif dan event handling.</p></article>
    <article class="card"><h3>Modul 3: CSS Glassmorphism</h3><p>Penerapan estetika antarmuka modern dengan CSS Custom Properties.</p></article>
  </main>
  <footer><p>&copy; 2024 Laboratorium Komputer Teknik Informatika Universitas Islam Riau</p></footer>
</body>
</html>`,
    tugas: [
      "Rancang antarmuka dashboard katalog perangkat keras laboratorium komputer dengan minimal 6 buah kartu spesifikasi workstation.",
      "Terapkan media query khusus layar gawai kecil (< 640px) agar padding kontainer menyesuaikan menjadi 12px dan judul utama mengecil secara proporsional.",
      "Pastikan kode HTML lolos validasi W3C Markup Validation Service tanpa kesalahan struktur sintaks."
    ]
  },

  "Pemrograman Web:2": {
    tujuan: [
      "Memahami konsep Document Object Model (DOM) Tree dan siklus manipulasi elemen peramban saat runtime.",
      "Menguasai method DOM API: querySelector, createElement, appendChild, classList.toggle, dan innerHTML.",
      "Menerapkan teknik Event Delegation dan pencegahan default behavior peramban dengan event.preventDefault()."
    ],
    teori: `DOM (Document Object Model) adalah representasi berorientasi objek dari dokumen HTML di dalam memori peramban. Setiap tag HTML menjadi simpul (Node) yang dapat diakses dan dimanipulasi secara dinamis menggunakan bahasa pemrograman JavaScript.

Mekanisme Event pada JavaScript berjalan di atas paradigma asynchronous event-driven. Saat pengguna berinteraksi dengan halaman, peristiwa (event) memicu fase capturing dan bubbling. Dengan memahami Event Delegation, pengembang dapat memasang satu event listener pada elemen pembungkus (parent) untuk mengontrol seluruh elemen anak (children) secara dinamis, sehingga menghemat konsumsi memori secara drastis.`,
    alat: "Workstation Lab PC Core i7, VS Code, Google Chrome Developer Tools (Console & Elements).",
    langkah: [
      "Siapkan form pendaftaran praktikan dengan input Nama, NIM, dan tombol 'Simpan'.",
      "Gunakan 'document.querySelector' untuk mengambil referensi formulir dan elemen input.",
      "Tambahkan event listener 'submit' pada form dan panggil 'e.preventDefault()' untuk menghentikan reload halaman.",
      "Validasi nilai input; jika valid, buat elemen '<tr>' baru dengan 'document.createElement'.",
      "Masukkan baris baru ke dalam tabel ('<tbody>') menggunakan 'appendChild'.",
      "Tambahkan tombol aksi 'Hapus' pada baris tabel dan tangani menggunakan teknik Event Delegation."
    ],
    kode: `// script.js - Event Delegation & Dynamic DOM Insertion
const formMhs = document.getElementById('formMhs');
const inputNama = document.getElementById('inputNama');
const inputNim = document.getElementById('inputNim');
const tbodyMhs = document.getElementById('tbodyMhs');

formMhs.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload form bawaan
  
  const nama = inputNama.value.trim();
  const nim = inputNim.value.trim();
  
  if (!nama || !nim) {
    alert('Nama dan NIM wajib diisi!');
    return;
  }
  
  // Membuat baris baru secara dinamis
  const tr = document.createElement('tr');
  tr.innerHTML = \`
    <td>\${tbodyMhs.children.length + 1}</td>
    <td><code>\${nim}</code></td>
    <td><strong>\${nama}</strong></td>
    <td><button class="btn-hapus" type="button" style="color:red;cursor:pointer;">Hapus</button></td>
  \`;
  
  tbodyMhs.appendChild(tr);
  formMhs.reset();
  inputNama.focus();
});

// Event Delegation pada tbody
tbodyMhs.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-hapus')) {
    const row = event.target.closest('tr');
    row.remove();
  }
});`,
    tugas: [
      "Tambahkan tombol 'Edit' pada setiap baris yang memindahkan data mahasiswa kembali ke form untuk diperbarui.",
      "Buat fitur pencarian instan pada tabel yang memfilter baris mahasiswa berdasarkan ketikan nama secara real-time.",
      "Tampilkan konfirmasi dialog (confirm) sebelum baris mahasiswa benar-benar dihapus dari memori DOM."
    ]
  },

  "Pemrograman Web:3": {
    tujuan: [
      "Menguasai penggunaan CSS Custom Properties (--variable) untuk standardisasi desain token antarmuka.",
      "Mengimplementasikan efek visual modern Glassmorphism menggunakan translusensi warna RGBA/HSL dan backdrop-filter: blur().",
      "Membangun mekanisme toggle Dark Mode / Light Mode persisten yang tersimpan di memori browser."
    ],
    teori: `CSS Variables (Custom Properties) memungkinkan pengembang mendefinisikan nilai yang dapat digunakan kembali di seluruh lembar gaya cascading. Variabel dideklarasikan dengan awalan dua tanda hubung (--nama-variabel) dan diakses menggunakan fungsi var(). Variabel mewarisi aturan cascading sehingga sangat ideal untuk implementasi tema warna global.

Glassmorphism adalah tren antarmuka grafis yang meniru karakteristik kaca buram (frosted glass). Kunci utama glassmorphism terletak pada kombinasi properti CSS: 'background: rgba(255, 255, 255, 0.08)', 'backdrop-filter: blur(12px)', dan 'border: 1px solid rgba(255, 255, 255, 0.15)'. Desain ini memberikan kesan kedalaman visual berlapis (multi-layered visual hierarchy) yang mewah dan futuristik.`,
    alat: "Workstation Lab PC Core i7, VS Code, Browser Google Chrome / Firefox.",
    langkah: [
      "Deklarasikan token warna di pseudo-class ':root' untuk tema terang dan '[data-theme=\"dark\"]' untuk tema gelap.",
      "Buat kontainer kartu dashboard dan berikan properti glassmorphism.",
      "Tambahkan tombol pengubah tema (theme switcher) pada pojok kanan atas antarmuka.",
      "Tulis logika JavaScript untuk mengganti atribut 'data-theme' pada elemen 'document.documentElement'.",
      "Simpan status pilihan tema pengguna menggunakan 'localStorage.setItem('theme', currentTheme)'.",
      "Tambahkan transisi halus pada elemen dengan properti 'transition: all 0.3s ease'."
    ],
    kode: `/* style.css - CSS Variables & Glassmorphism */
:root {
  --bg-gradient: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%);
  --card-bg: rgba(255, 255, 255, 0.65);
  --card-border: rgba(255, 255, 255, 0.4);
  --text-main: #0f172a;
  --accent: #0d9488;
}

[data-theme="dark"] {
  --bg-gradient: linear-gradient(135deg, #090d16 0%, #0d1527 100%);
  --card-bg: rgba(255, 255, 255, 0.05);
  --card-border: rgba(255, 255, 255, 0.12);
  --text-main: #f8fafc;
  --accent: #00f2fe;
}

body {
  background: var(--bg-gradient);
  color: var(--text-main);
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.4s ease, color 0.4s ease;
}

.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}`,
    tugas: [
      "Rancang 4 buah metrik card glassmorphism untuk menampilkan statistik inventaris laboratorium.",
      "Implementasikan tombol toggle tema yang secara otomatis mengingat preferensi tema terakhir saat halaman direfresh.",
      "Tambahkan efek glow neon subtle pada border kartu saat kursor melakukan hover (:hover)."
    ]
  },

  "Pemrograman Web:4": {
    tujuan: [
      "Memahami arsitektur komunikasi RESTful API berbasis protokol HTTP/HTTPS.",
      "Menguasai penulisan asynchronous JavaScript menggunakan Promise dan sintaks modern async/await.",
      "Mampu menangani status response HTTP (200 OK, 404 Not Found, 500 Server Error) serta exception handling dengan try...catch."
    ],
    teori: `REST (Representational State Transfer) adalah gaya arsitektur standar industri untuk membangun antarmuka pemrograman aplikasi (API) pada aplikasi terdistribusi. Layanan web RESTful berkomunikasi melalui metode HTTP standar seperti GET (membaca data), POST (membuat data baru), PUT/PATCH (memperbarui data), dan DELETE (menghapus data).

Fetch API menyediakan antarmuka JavaScript modern untuk mengakses dan memanipulasi permintaan serta tanggapan HTTP. Dibandingkan objek lawas XMLHttpRequest, Fetch API mengembalikan Promise yang dapat dirangkai dengan rapi menggunakan sintaks 'async' dan 'await'. Penanganan error jaringan dan HTTP status code wajib dipisahkan, karena peramban hanya melempar exception 'catch' jika terjadi kegagalan jaringan fisik (network failure).`,
    alat: "Workstation Lab PC, VS Code, Browser Chrome, Koneksi Internet Lab UIR, Public Mock API.",
    langkah: [
      "Siapkan kontainer antarmuka kartu untuk menampilkan data pengguna/artikel eksternal.",
      "Buat fungsi async bernama 'muatDataPraktikan()'.",
      "Kirimkan HTTP GET request menggunakan 'await fetch(endpointUrl)'.",
      "Periksa kondisi kelayakan response melalui properti 'response.ok'.",
      "Ekstrak payload JSON menggunakan 'await response.json()'.",
      "Render data array hasil parsing ke dalam grid antarmuka pengguna.",
      "Tambahkan penanganan error visual jika koneksi terputus atau server mengembalikan error 500."
    ],
    kode: `// fetch-demo.js - Asynchronous REST API Consumer
async function fetchModulData() {
  const container = document.getElementById('modulList');
  container.innerHTML = '<p class="loading">Memuat data modul praktikum dari server...</p>';
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
    
    if (!response.ok) {
      throw new Error(\`HTTP Error! Status: \${response.status} - \${response.statusText}\`);
    }
    
    const data = await response.json();
    container.innerHTML = ''; // Bersihkan teks loading
    
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'api-card';
      card.innerHTML = \`
        <h4>#\${item.id} \${item.title.substring(0, 30)}...</h4>
        <p>\${item.body}</p>
        <span class="badge">Terverifikasi API</span>
      \`;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Fetch error:', error);
    container.innerHTML = \`
      <div class="error-box">
        <strong>Gagal Mengambil Data:</strong> \${error.message}. Periksa koneksi internet Anda.
      </div>
    \`;
  }
}`,
    tugas: [
      "Hubungkan aplikasi dengan endpoint publik informasi cuaca atau kurs mata uang, lalu tampilkan 3 indikator data ke layar.",
      "Tambahkan indikator loading spinner animasi selama request asynchronous sedang berlangsung.",
      "Implementasikan tombol 'Coba Lagi' (Retry) jika permintaan data mengalami kegagalan."
    ]
  },

  "Pemrograman Web:5": {
    tujuan: [
      "Memahami perbedaan filosofis utility-first CSS (Tailwind) dengan component-based framework (Bootstrap 5).",
      "Mampu mengintegrasikan Bootstrap 5 Grid System dan komponen bawaan seperti Navbar, Card, Modal, dan Alert.",
      "Menguasai teknik kustomisasi variabel framework tanpa merusak standarisasi UI/UX aplikasi."
    ],
    teori: `Framework CSS diciptakan untuk mempercepat proses prototyping dan penulisan antarmuka pengguna yang konsisten di seluruh aplikasi skala perusahaan. Bootstrap 5 menganut paradigma komponen berbasis class siap pakai (seperti .btn, .card, .navbar), sehingga memudahkan pengembang membangun antarmuka fungsional tanpa menulis kode CSS kustom dari awal.

Di sisi lain, Tailwind CSS menganut paradigma utility-first di mana pengembang menyusun antarmuka menggunakan kelas-kelas utilitas atomik berskala kecil (seperti 'flex', 'items-center', 'px-4', 'rounded-lg'). Pendekatan ini memberikan fleksibilitas desain tanpa batas tanpa perlu meninggalkan file HTML, serta meminimalisir pembengkakan ukuran berkas CSS produksi melalui proses tree-shaking / purge.`,
    alat: "Workstation Lab PC, VS Code, CDN Bootstrap 5 / Tailwind CSS, Chrome DevTools.",
    langkah: [
      "Sertakan berkas CSS dan bundle JS Bootstrap 5 melalui CDN pada elemen <head> dan sebelum </body>.",
      "Buat komponen navigasi responsif lengkap dengan hamburger menu untuk tampilan mobile.",
      "Bagi area tata letak halaman menggunakan sistem 12 kolom: '.container', '.row', dan '.col-md-6'.",
      "Terapkan komponen modal dialog untuk input nilai akhir praktikum mahasiswa.",
      "Tambahkan interaktivitas modal menggunakan JavaScript Bootstrap API: 'new bootstrap.Modal(el)'."
    ],
    kode: `<!-- bootstrap-sample.html -->
<div class="container my-5">
  <div class="row g-4">
    <div class="col-12 col-md-4">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title text-primary">Workstation Lab 1</h5>
          <p class="card-text text-muted">Spesifikasi Core i7, 16GB RAM, Dual Monitor untuk praktikum Web.</p>
          <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalStatus">Cek Status</button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title text-success">Workstation Lab 2</h5>
          <p class="card-text text-muted">Dedicated Oracle DB Server & MySQL Enterprise Cluster.</p>
          <button class="btn btn-success btn-sm">Siap Digunakan</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
    tugas: [
      "Susun halaman form input nilai mahasiswa dengan komponen formulir Bootstrap 5 (floating labels, input groups, select dropdown).",
      "Terapkan validasi form bawaan Bootstrap dengan menambahkan class 'was-validated' dan pesan feedback '.invalid-feedback'.",
      "Buat komponen modal pop-up yang menampilkan ringkasan data sebelum dikirim."
    ]
  },

  "Pemrograman Web:6": {
    tujuan: [
      "Memahami prinsip arsitektur Single Page Application (SPA) vs Multi Page Application (MPA).",
      "Menguasai perutean sisi klien (Client-Side Routing) menggunakan Hash (#route) atau HTML5 History API.",
      "Mengelola State aplikasi terpusat agar antarmuka terperbarui secara konsisten tanpa reload peramban."
    ],
    teori: `Single Page Application (SPA) adalah model aplikasi web modern di mana peramban hanya memuat satu berkas HTML utuh pada saat pertama kali diakses. Seluruh pergantian halaman, transisi menu, dan pembaharuan konten selanjutnya dilakukan secara dinamis melalui JavaScript dengan memanipulasi Document Object Model (DOM).

Keunggulan utama SPA adalah pengalaman pengguna yang sangat cepat, mulus (tanpa kedipan putih saat berpindah halaman), dan penghematan bandwidth server. Mekanisme routing pada SPA murni dapat dikelola menggunakan 'window.location.hash' yang memicu event 'hashchange', atau melalui 'history.pushState' dan event 'popstate'. Pengelolaan status (state management) menjadi fondasi krusial untuk memastikan data sesi pengguna, keranjang, atau form aktif tetap terjaga.`,
    alat: "Workstation Lab PC, VS Code, Browser Google Chrome.",
    langkah: [
      "Siapkan kontainer utama pada index.html: '<div id=\"app-view\"></div>'.",
      "Definisikan dictionary rute: const routes = { '#dashboard': renderDashboard, '#modul': renderModul };",
      "Buat fungsi controller router yang membaca window.location.hash saat ini.",
      "Render fungsi tampilan yang sesuai ke dalam kontainer 'app-view'.",
      "Pasang event listener 'window.addEventListener('hashchange', router)' dan jalankan router saat inisialisasi awal."
    ],
    kode: `// spa-router.js - Vanilla JS Single Page Application
const appView = document.getElementById('app-view');

const routes = {
  '#dashboard': () => '<h2>Dashboard Laboratorium</h2><p>Selamat datang di sistem manajemen SILAB UIR.</p>',
  '#modul': () => '<h2>Modul Praktikum</h2><p>Daftar modul pembelajaran aktif semester gasal.</p>',
  '#jadwal': () => '<h2>Jadwal Praktikum</h2><p>Alokasi waktu dan ruangan sesi praktikum pasca-UTS.</p>'
};

function handleRouting() {
  const hash = window.location.hash || '#dashboard';
  const renderFn = routes[hash] || (() => '<h2>404 - Halaman Tidak Ditemukan</h2>');
  
  // Mengganti tampilan secara instan tanpa reload browser
  appView.innerHTML = renderFn();
  
  // Perbarui status aktif pada navigasi sidebar
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', handleRouting);`,
    tugas: [
      "Tambahkan 2 rute baru: '#absensi' dan '#profil' lengkap dengan tampilan dan fungsi pemanggilnya.",
      "Tambahkan efek animasi transisi fade-in halus saat rute berpindah.",
      "Simpan histori navigasi terakhir di sessionStorage sehingga saat di-refresh halaman tetap berada di rute tersebut."
    ]
  },

  "Pemrograman Web:7": {
    tujuan: [
      "Menguasai validasi formulir sisi klien tingkat lanjut (RegEx, batasan numerik, sanitized input).",
      "Mengimplementasikan Web Storage API (localStorage & sessionStorage) untuk persistensi data lokal tanpa database server.",
      "Mempersiapkan berkas produksi, optimasi aset, dan melakukan deployment aplikasi ke platform cloud (Vercel/GitHub)."
    ],
    teori: `Validasi formulir pada sisi peramban (client-side validation) merupakan garda terdepan untuk menjaga integritas data sebelum dikirimkan ke server. Validasi yang baik memberikan umpan balik visual instan kepada pengguna ketika input tidak memenuhi kriteria, seperti format email, panjang karakter minimal, atau rentang nilai numerik.

Web Storage API (localStorage) menyediakan mekanisme penyimpanan pasangan kunci-nilai (key-value store) di dalam peramban klien dengan kapasitas sekitar 5-10MB yang bertahan bahkan setelah peramban ditutup. Untuk menyimpan objek JavaScript terstruktur, pengembang wajib melakukan serialisasi menggunakan 'JSON.stringify()' saat penyimpanan dan 'JSON.parse()' saat pemanggilan kembali. Tahap akhir pengembangan mencakup pengelolaan version control (Git) dan proses automated deployment via Vercel atau GitHub Pages.`,
    alat: "Workstation Lab PC, VS Code, Git CLI, Akun GitHub, Vercel Dashboard.",
    langkah: [
      "Rancang form input nilai praktikum lengkap dengan atribut 'required', 'min', 'max', dan 'pattern'.",
      "Tulis fungsi validasi JavaScript yang memeriksa kelengkapan data sebelum disimpan.",
      "Serialisasi data array objek menjadi JSON string dan simpan ke 'localStorage'.",
      "Buat fungsi inisialisasi yang membaca data dari 'localStorage' saat aplikasi pertama kali dimuat.",
      "Lakukan commit perubahan kode menggunakan Git CLI: 'git commit -m \"feat: final web app\"'.",
      "Push repositori ke GitHub dan sambungkan repositori ke platform Vercel untuk deployment otomatis."
    ],
    kode: `// storage-final.js - LocalStorage Persistence & Form Validation
const STORAGE_KEY = 'silab_mahasiswa_data';

function simpanData(dataBaru) {
  const dataLama = muatData();
  dataLama.push(dataBaru);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

function muatData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function validasiInputNilai(nilaiTugas, nilaiUjian) {
  const nT = parseFloat(nilaiTugas);
  const nU = parseFloat(nilaiUjian);
  
  if (isNaN(nT) || nT < 0 || nT > 100) return 'Nilai Tugas harus berada di antara rentang 0 - 100!';
  if (isNaN(nU) || nU < 0 || nU > 100) return 'Nilai Ujian harus berada di antara rentang 0 - 100!';
  return null; // Valid
}`,
    tugas: [
      "Buat fitur pencadangan (backup data) yang mengekspor seluruh isi LocalStorage ke dalam berkas .json yang dapat diunduh pengguna.",
      "Buat fitur pemulihan (restore data) yang membaca berkas .json yang diunggah dan memperbarui LocalStorage.",
      "Deploy proyek akhir ke Vercel dan kumpulkan tautan URL langsung (live link) pada formulir pengumpulan praktikum."
    ]
  },

  // ============================================================
  // 2. BASIS DATA
  // ============================================================
  "Basis Data:1": {
    tujuan: [
      "Menguasai perancangan konseptual model basis data menggunakan Entity Relationship Diagram (ERD).",
      "Memahami aturan kardinalitas relasi: One-to-One (1:1), One-to-Many (1:N), dan Many-to-Many (M:N).",
      "Mampu melakukan normalisasi data dari Unnormalized Form (UNF), First Normal Form (1NF), 2NF, hingga 3NF."
    ],
    teori: `Basis data relasional dirancang berdasarkan prinsip pemisahan entitas dan penghapusan redundansi data yang tidak perlu. Anomali manipulasi data (Insertion, Update, dan Deletion Anomaly) sering kali terjadi akibat struktur relasi yang buruk di mana banyak atribut non-kunci bergantung sebagian pada komponen primary key.

Proses Normalisasi adalah pendekatan sistematis untuk menguraikan tabel-tabel besar menjadi tabel yang lebih kecil dan kohesif berdasarkan Ketergantungan Fungsional (Functional Dependency). Bentuk 1NF mensyaratkan setiap kolom bernilai atomik (tidak ada multivalue/repeating groups). Bentuk 2NF mewajibkan tidak ada ketergantungan parsial pada primary key komposit. Bentuk 3NF memastikan tidak adanya ketergantungan transitif di antara atribut non-kunci.`,
    alat: "Workstation Lab PC, Perangkat Lunak Draw.io / MySQL Workbench, MySQL Server.",
    langkah: [
      "Identifikasi seluruh entitas pada studi kasus sistem laboratorium: Mahasiswa, Aslab, Mata Kuliah, Jadwal, dan Absensi.",
      "Tentukan primary key unik untuk masing-masing entitas (contoh: nim, nip, id_jadwal).",
      "Petakan hubungan relasi antar entitas beserta derajat kardinalitasnya.",
      "Uraikan tabel transaksi peminjaman lab dari bentuk UNF menuju 1NF dengan memecah atribut gabungan.",
      "Lakukan dekomposisi menuju 2NF dengan memisahkan atribut yang hanya bergantung pada sebagian kunci komposit.",
      "Sempurnakan tabel menuju 3NF dengan menghapus ketergantungan transitif antar atribut non-kunci."
    ],
    kode: `-- Skema Relasional Hasil Normalisasi 3NF Sistem Laboratorium
CREATE TABLE mata_kuliah (
  kode_mk VARCHAR(10) PRIMARY KEY,
  nama_mk VARCHAR(100) NOT NULL,
  sks INT NOT NULL CHECK (sks BETWEEN 1 AND 4)
);

CREATE TABLE asisten_lab (
  id_aslab INT AUTO_INCREMENT PRIMARY KEY,
  nama_aslab VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  ruang_lab VARCHAR(20) NOT NULL
);

CREATE TABLE jadwal_praktikum (
  id_jadwal INT AUTO_INCREMENT PRIMARY KEY,
  kode_mk VARCHAR(10) NOT NULL,
  id_aslab INT NOT NULL,
  pertemuan INT NOT NULL CHECK (pertemuan BETWEEN 1 AND 7),
  tanggal DATE NOT NULL,
  jam_mulai TIME NOT NULL,
  jam_selesai TIME NOT NULL,
  CONSTRAINT fk_jadwal_mk FOREIGN KEY (kode_mk) REFERENCES mata_kuliah(kode_mk) ON DELETE CASCADE,
  CONSTRAINT fk_jadwal_aslab FOREIGN KEY (id_aslab) REFERENCES asisten_lab(id_aslab) ON DELETE RESTRICT
);`,
    tugas: [
      "Gambarkan diagram ERD lengkap sistem peminjaman peralatan laboratorium komputer UIR mencakup entitas Barang, Mahasiswa, Petugas, dan Transaksi.",
      "Tuliskan analisis proses normalisasi dari data faktur peminjaman mentah sampai diperoleh tabel 3NF.",
      "Tunjukkan foreign key constraint yang digunakan dan jelaskan aksi referensial ON DELETE CASCADE vs ON DELETE RESTRICT."
    ]
  },

  "Basis Data:2": {
    tujuan: [
      "Menguasai sintaks Data Definition Language (DDL) untuk pembuatan skema tabel dan integritas konstrain relasional.",
      "Menguasai sintaks Data Manipulation Language (DML) untuk operasi manipulasi data: INSERT, UPDATE, DELETE.",
      "Mampu melakukan query seleksi data tingkat lanjut menggunakan klausa WHERE, LIKE, IN, BETWEEN, dan ORDER BY."
    ],
    teori: `SQL (Structured Query Language) terbagi menjadi beberapa sub-bahasa utama, di antaranya DDL (Data Definition Language) dan DML (Data Manipulation Language). DDL bertanggung jawab terhadap struktur katalog basis data, seperti pendefinisian skema, tipe data kolom (VARCHAR, INT, DECIMAL, DATETIME), serta integritas referensial (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK).

DML digunakan oleh pengguna dan aplikasi untuk berinteraksi dengan isi baris (tupel) tabel. Perintah INSERT menambahkan rekaman baru, UPDATE memperbarui data yang telah ada berdasarkan kondisi spesifik, dan DELETE menghapus data dari tabel. Kesalahan tidak menyertakan klausa WHERE pada perintah UPDATE atau DELETE dapat berakibat fatal karena akan memodifikasi atau menghapus seluruh baris di tabel.`,
    alat: "Workstation Lab PC, DBMS MySQL / MariaDB Server, Navicat / phpMyAdmin / MySQL CLI Client.",
    langkah: [
      "Buka terminal CLI atau GUI DBMS dan buat database baru bernama 'db_silab_uir'.",
      "Eksekusi script DDL pembuatan tabel mahasiswa, mata_kuliah, dan absensi.",
      "Masukkan minimal 5 baris data mahasiswa menggunakan perintah INSERT tunggal dan multi-row INSERT.",
      "Lakukan pengujian pembaruan status kehadiran mahasiswa menggunakan klausa UPDATE dengan WHERE spesifik.",
      "Hapus rekaman uji coba menggunakan klausa DELETE.",
      "Tampilkan data mahasiswa yang memiliki nama berawalan huruf 'A' dan diurutkan berdasarkan NIM."
    ],
    kode: `-- DDL & DML Script Praktikum 2 Basis Data
CREATE DATABASE IF NOT EXISTS db_silab_uir;
USE db_silab_uir;

-- 1. DDL: Membuat tabel mahasiswa
CREATE TABLE mahasiswa (
  nim VARCHAR(15) PRIMARY KEY,
  nama_lengkap VARCHAR(100) NOT NULL,
  kelas VARCHAR(5) NOT NULL,
  angkatan YEAR NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. DML: Menyisipkan Data (Multi-Row INSERT)
INSERT INTO mahasiswa (nim, nama_lengkap, kelas, angkatan) VALUES
('21IF001', 'Ahmad Rizal', '4A', 2021),
('21IF002', 'Bella Ananda', '4B', 2021),
('21IF003', 'Chandra Wijaya', '4A', 2021),
('21IF004', 'Diana Putri', '4C', 2021);

-- 3. DML: Memperbarui Data (UPDATE dengan WHERE)
UPDATE mahasiswa 
SET kelas = '4B' 
WHERE nim = '21IF003';

-- 4. Query Seleksi Lanjut
SELECT nim, nama_lengkap, kelas 
FROM mahasiswa 
WHERE nama_lengkap LIKE 'A%' OR kelas = '4B'
ORDER BY nama_lengkap ASC;`,
    tugas: [
      "Buat tabel inventaris_lab lengkap dengan kolom kode_alat, nama_alat, jumlah, kondisi (ENUM: 'Bagus', 'Rusak', 'Perbaikan'), dan tgl_pembelian.",
      "Tuliskan perintah query DML untuk memperbarui kondisi alat menjadi 'Perbaikan' untuk semua alat yang jumlahnya kurang dari 5 unit.",
      "Tampilkan daftar alat laboratorium yang memiliki kondisi 'Bagus' dan dibeli antara tahun 2022 sampai 2024."
    ]
  },

  "Basis Data:3": {
    tujuan: [
      "Memahami konsep aljabar relasional: Cartesian Product, Selection, Projection, dan Theta Join.",
      "Menguasai ragam penggabungan tabel: INNER JOIN, LEFT JOIN, RIGHT JOIN, dan FULL OUTER JOIN.",
      "Mampu menulis subqueries berkorelasi (Correlated Subqueries) dan fungsi agregasi (COUNT, SUM, AVG, GROUP BY, HAVING)."
    ],
    teori: `Dalam basis data relasional ternormalisasi, informasi yang dibutuhkan sering kali terdistribusi di beberapa tabel berbeda. Teknik JOIN digunakan untuk merekonstruksi kembali informasi tersebut dengan mencocokkan kolom kunci primer (primary key) pada tabel utama dengan kolom kunci tamu (foreign key) pada tabel relasi.

INNER JOIN hanya mengembalikan baris yang memiliki nilai kecocokan di kedua tabel. LEFT JOIN (atau LEFT OUTER JOIN) mengembalikan seluruh baris dari tabel sisi kiri, dan menyandingkannya dengan nilai tabel kanan jika cocok, atau menghasilkan nilai NULL jika tidak ada padanan. Subquery (query bertingkat) memungkinkan hasil dari sebuah query SELECT dijadikan sebagai himpunan data filter atau nilai dinamis pada klausa WHERE dari query luar.`,
    alat: "Workstation Lab PC, MySQL Server, MySQL Workbench / DBeaver.",
    langkah: [
      "Pastikan tabel mahasiswa, jadwal_praktikum, dan asisten_lab telah terisi data transaksi.",
      "Tulis query INNER JOIN untuk menampilkan nama mahasiswa beserta mata kuliah dan aslab pembimbingnya.",
      "Tulis query LEFT JOIN untuk mengidentifikasi mahasiswa yang belum pernah melakukan absensi sama sekali.",
      "Gunakan fungsi agregasi COUNT() dan GROUP BY untuk menghitung jumlah peserta praktikum per mata kuliah.",
      "Gunakan klausa HAVING untuk memfilter mata kuliah yang jumlah pesertanya lebih dari 30 mahasiswa."
    ],
    kode: `-- Query Lanjut: JOIN & Agregasi
-- 1. Menampilkan Rekap Absensi Lengkap dengan Multi-Table INNER JOIN
SELECT 
  m.nim,
  m.nama_lengkap AS nama_mahasiswa,
  mk.nama_mk AS mata_kuliah,
  a.nama_aslab,
  j.pertemuan,
  j.tanggal
FROM jadwal_praktikum j
INNER JOIN mata_kuliah mk ON j.kode_mk = mk.kode_mk
INNER JOIN asisten_lab a ON j.id_aslab = a.id_aslab
INNER JOIN absensi abs ON abs.id_jadwal = j.id_jadwal
INNER JOIN mahasiswa m ON abs.nim = m.nim
ORDER BY j.tanggal DESC, m.nama_lengkap ASC;

-- 2. Subquery Agregasi: Menemukan Aslab dengan Jam Mengajar di Atas Rata-rata
SELECT nama_aslab, ruang_lab
FROM asisten_lab
WHERE id_aslab IN (
  SELECT id_aslab 
  FROM jadwal_praktikum 
  GROUP BY id_aslab 
  HAVING COUNT(id_jadwal) > (
    SELECT AVG(total_sesi) FROM (
      SELECT COUNT(id_jadwal) AS total_sesi FROM jadwal_praktikum GROUP BY id_aslab
    ) AS rataan
  )
);`,
    tugas: [
      "Tuliskan query SQL yang menampilkan daftar seluruh mata kuliah beserta total mahasiswa yang terdaftar dan total nilai rata-ratanya.",
      "Tuliskan query yang menampilkan asisten laboratorium yang tidak memiliki jadwal mengajar pada hari Jumat.",
      "Gunakan correlated subquery untuk menampilkan mahasiswa dengan nilai ujian tertinggi di setiap mata kuliah yang diikutinya."
    ]
  },

  "Basis Data:4": {
    tujuan: [
      "Memahami 4 pilar transaksi basis data ACID: Atomicity, Consistency, Isolation, dan Durability.",
      "Mampu mengontrol transaksi menggunakan instruksi START TRANSACTION, COMMIT, dan ROLLBACK.",
      "Menguasai strategi indexing (B-Tree Index, Unique Index) dan analisis performa query menggunakan EXPLAIN."
    ],
    teori: `Transaksi adalah unit kerja logika (logical unit of work) yang terdiri dari serangkaian operasi basis data yang harus berhasil seluruhnya atau dibatalkan sama sekali (All-or-Nothing). Prinsip ini dikenal sebagai Atomicity. Isolasi memastikan transaksi yang berjalan bersamaan (konkuren) tidak saling mengganggu dan menyebabkan pembacaan data kotor (Dirty Read) atau inkonsistensi sementara.

Indeks basis data berfungsi seperti indeks pada buku teks yang memungkinkan mesin basis data mencari baris tertentu tanpa perlu memindai seluruh isi tabel (Full Table Scan). Struktur indeks yang paling umum pada mesin InnoDB MySQL adalah B-Tree (Balanced Tree). Perintah 'EXPLAIN SELECT' sangat penting untuk menganalisis apakah query menggunakan indeks ('type: ref/range') atau membaca seluruh disk ('type: ALL').`,
    alat: "Workstation Lab PC, MySQL 8.0 / MariaDB, MySQL Command Line.",
    langkah: [
      "Buka terminal interaktif MySQL dan nonaktifkan autocommit jika diperlukan.",
      "Mulai blok transaksi baru dengan mengeksekusi 'START TRANSACTION;'.",
      "Lakukan operasi pembaruan data nilai praktikan dan pemotongan kuota praktikum.",
      "Simulasikan kondisi kegagalan sistem dan eksekusi 'ROLLBACK;' untuk mengembalikan status tabel ke awal.",
      "Jalankan skenario sukses dan permanenkan perubahan data dengan perintah 'COMMIT;'.",
      "Buat indeks B-Tree pada kolom 'nim' dan 'tanggal' lalu bandingkan hasil 'EXPLAIN SELECT'."
    ],
    kode: `-- Simulasi Transaksi ACID & Indeks
START TRANSACTION;

-- Mengubah status kehadiran praktikan
UPDATE absensi 
SET status = 'Hadir', waktu_presensi = NOW()
WHERE nim = '21IF001' AND id_jadwal = 1;

-- Menambahkan log aktivitas ke tabel audit
INSERT INTO log_aktivitas (aksi, keterangan, dilakukan_oleh)
VALUES ('PRESENSI', 'Mahasiswa 21IF001 hadir pada pertemuan 1', 'SYSTEM');

-- Jika semua instruksi sukses, permanenkan:
COMMIT;

-- Membuat Index B-Tree untuk mempercepat pencarian absensi
CREATE INDEX idx_absensi_nim_jadwal ON absensi (nim, id_jadwal);

-- Analisis performa eksekusi query dengan EXPLAIN
EXPLAIN SELECT * FROM absensi WHERE nim = '21IF001' AND id_jadwal = 1;`,
    tugas: [
      "Simulasikan skenario transfer saldo kuota jam praktikum antar laboratorium dengan rollback otomatis jika saldo asal tidak mencukupi.",
      "Uji perbedaan kecepatan eksekusi query pencarian data pada tabel dengan 50.000 data sebelum dan sesudah dibuatkan B-Tree Index.",
      "Jelaskan arti output kolom 'type', 'key', dan 'rows' pada hasil perintah EXPLAIN."
    ]
  },

  "Basis Data:5": {
    tujuan: [
      "Menguasai pemrograman prosedural basis data (MySQL Stored Procedures & Functions).",
      "Mampu menggunakan parameter IN, OUT, dan INOUT, percabangan IF-ELSE, dan perulangan LOOP/WHILE.",
      "Mampu merancang Trigger database (BEFORE/AFTER INSERT/UPDATE/DELETE) untuk otomasi bisnis dan audit log."
    ],
    teori: `Stored Procedure adalah kumpulan perintah SQL terkompilasi yang disimpan langsung di dalam katalog basis data server. Keuntungan utama stored procedure mencakup pengurangan latensi lalu lintas jaringan (karena aplikasi hanya perlu mengirimkan panggilan nama prosedur daripada ratusan baris query), peningkatan keamanan melalui enkapsulasi izin akses, serta sentralisasi logika bisnis data.

Trigger adalah program basis data khusus yang diasosiasikan dengan sebuah tabel dan otomatis dijalankan (dipicu) oleh sistem database ketika terjadi aksi tertentu: INSERT, UPDATE, atau DELETE. Di dalam badan trigger, pengembang dapat mengakses nilai baris sebelum diubah menggunakan kata kunci 'OLD' dan nilai baris setelah diubah menggunakan kata kunci 'NEW'. Trigger sangat ideal untuk pencatatan jejak audit (audit trail) dan penegakan aturan validasi bisnis otomatis.`,
    alat: "Workstation Lab PC, MySQL Server, MySQL Workbench.",
    langkah: [
      "Ubah delimiter bawaan MySQL menggunakan 'DELIMITER $$'.",
      "Buat Stored Procedure untuk menghitung Nilai Akhir mahasiswa secara otomatis berdasarkan bobot Tugas 40% dan Ujian 60%.",
      "Eksekusi prosedur menggunakan perintah 'CALL sp_hitung_nilai_akhir(1, @hasil);'.",
      "Buat tabel riwayat audit bernama 'audit_nilai_log'.",
      "Rancang trigger 'AFTER UPDATE' pada tabel nilai yang otomatis mencatat nilai lama, nilai baru, dan waktu perubahan.",
      "Kembalikan delimiter semula dengan 'DELIMITER ;'."
    ],
    kode: `DELIMITER $$

-- 1. Stored Procedure: Perhitungan Nilai Akhir Otomatis
CREATE PROCEDURE sp_kalkulasi_nilai (
  IN p_nim VARCHAR(15),
  IN p_tugas DECIMAL(5,2),
  IN p_ujian DECIMAL(5,2),
  OUT p_nilai_akhir DECIMAL(5,2),
  OUT p_grade CHAR(2)
)
BEGIN
  -- Rumus: 40% Tugas + 60% Ujian
  SET p_nilai_akhir = (p_tugas * 0.4) + (p_ujian * 0.6);
  
  IF p_nilai_akhir >= 85 THEN
    SET p_grade = 'A';
  ELSEIF p_nilai_akhir >= 78 THEN
    SET p_grade = 'A-';
  ELSEIF p_nilai_akhir >= 70 THEN
    SET p_grade = 'B';
  ELSEIF p_nilai_akhir >= 60 THEN
    SET p_grade = 'C';
  ELSE
    SET p_grade = 'D';
  END IF;
END$$

-- 2. Trigger Audit Log Saat Terjadi Perubahan Nilai
CREATE TRIGGER trg_audit_nilai_update
AFTER UPDATE ON nilai_praktikum
FOR EACH ROW
BEGIN
  INSERT INTO audit_nilai_log (nim, nilai_tugas_lama, nilai_tugas_baru, diubah_pada)
  VALUES (OLD.nim, OLD.nilai_tugas, NEW.nilai_tugas, NOW());
END$$

DELIMITER ;`,
    tugas: [
      "Buat Stored Procedure untuk mendaftarkan jadwal praktikum baru dengan validasi otomatis mendeteksi bentrok ruangan dan jam.",
      "Buat Trigger BEFORE INSERT yang otomatis menolak pendaftaran jika kuota workstation lab telah melampaui kapasitas 40 unit.",
      "Uji kedua routine tersebut dan lampirkan hasil pengujian di laporan praktikum."
    ]
  },

  "Basis Data:6": {
    tujuan: [
      "Memahami dekomposisi Boyce-Codd Normal Form (BCNF) dan Fourth Normal Form (4NF).",
      "Menganalisis strategi denormalisasi terkendali untuk sistem berorientasi pelaporan (Read-Heavy / OLAP).",
      "Mampu membuat View dan Materialized View untuk menyederhanakan akses data kompleks."
    ],
    teori: `Meskipun normalisasi hingga 3NF dan BCNF menjamin ketiadaan redundansi data operasional, pada aplikasi berskala besar dengan jutaan transaksi harian, operasi JOIN multi-tabel yang berulang dapat menimbulkan *bottleneck* kinerja I/O disk yang parah.

Denormalisasi terkendali adalah teknik rekayasa di mana redundansi data sengaja diperkenalkan kembali ke dalam skema fisik basis data secara terukur untuk meminimalkan operasi JOIN dan memaksimalkan kecepatan pembacaan (*read performance*). Penggunaan View dan skema agregasi bertindak sebagai lapisan abstraksi yang menyederhanakan kueri analitik pelaporan tanpa merusak struktur relasi dasar.`,
    alat: "Workstation Lab PC, MySQL Server, MySQL Workbench.",
    langkah: [
      "Analisis tabel relasi jadwal dan tentukan apakah terdapat ketergantungan determinan yang melanggar BCNF.",
      "Rancang View bernama 'v_rekapitulasi_praktikum_lengkap' yang menggabungkan informasi 4 tabel.",
      "Lakukan pengujian query terhadap View tersebut.",
      "Terapkan teknik tabel denormalisasi rekap nilai tahunan dan amati waktu respons eksekusi query."
    ],
    kode: `-- Membuat Database View untuk Abstraksi Pelaporan
CREATE OR REPLACE VIEW v_rekap_asisten_lab AS
SELECT 
  a.nama_aslab,
  a.ruang_lab,
  COUNT(DISTINCT j.id_jadwal) AS total_sesi_ajar,
  COUNT(DISTINCT abs.nim) AS total_mahasiswa_hadir,
  ROUND(AVG(n.nilai_akhir), 2) AS rata_rata_nilai_kelas
FROM asisten_lab a
LEFT JOIN jadwal_praktikum j ON a.id_aslab = j.id_aslab
LEFT JOIN absensi abs ON abs.id_jadwal = j.id_jadwal
LEFT JOIN nilai_praktikum n ON n.nim = abs.nim
GROUP BY a.id_aslab, a.nama_aslab, a.ruang_lab;

-- Mengakses data melalui View
SELECT * FROM v_rekap_asisten_lab WHERE total_sesi_ajar > 0;`,
    tugas: [
      "Analisis skenario sistem e-commerce kampus dan tunjukkan tabel yang memerlukan denormalisasi untuk keperluan laporan penjualan bulanan.",
      "Buat View terenkapsulasi yang hanya menampilkan data mahasiswa dan mata kuliah tanpa memperlihatkan NIP atau PIN aslab.",
      "Jelaskan kelebihan dan kelemahan penggunaan View dalam arsitektur keamanan basis data."
    ]
  },

  "Basis Data:7": {
    tujuan: [
      "Memahami paradigma NoSQL (Not Only SQL) dan perbandingannya dengan sistem RDBMS relasional.",
      "Menguasai pemodelan dokumen JSON/BSON pada basis data MongoDB.",
      "Mampu melakukan operasi CRUD dasar (Create, Read, Update, Delete) dan agregasi pipeline pada MongoDB."
    ],
    teori: `Basis data NoSQL muncul sebagai respons terhadap kebutuhan pemrosesan data bervolume raksasa, berstruktur dinamis (unstructured/semi-structured), dan memerlukan replikasi terdistribusi horizontal secara elastis. Teorema CAP (Consistency, Availability, Partition Tolerance) menyatakan bahwa sistem basis data terdistribusi hanya dapat menjamin maksimal dua dari tiga sifat tersebut secara bersamaan.

MongoDB adalah basis data dokumen terpopuler di dunia yang menyimpan data dalam format dokumen BSON (Binary JSON). Fleksibilitas skema (schema-less) memungkinkan setiap dokumen dalam sebuah koleksi (collection) memiliki struktur kolom yang fleksibel. Hubungan antar data dapat dimodelkan menggunakan teknik Dokumen Tertanam (Embedded Documents) untuk performa baca tinggi, atau teknik Referensi (References) untuk data yang sering diperbarui.`,
    alat: "Workstation Lab PC, MongoDB Community Server, MongoDB Compass / Mongosh CLI.",
    langkah: [
      "Jalankan layanan MongoDB daemon (mongod) pada workstation laboratorium.",
      "Buka terminal mongosh dan buat database baru dengan perintah 'use silab_nosql;'.",
      "Buat koleksi 'log_absensi' dan masukkan dokumen JSON bersarang (nested JSON document).",
      "Lakukan pencarian dokumen menggunakan 'db.log_absensi.find({ status: \"Hadir\" })'.",
      "Gunakan operator pembaruan '$set' dan operator array '$push'.",
      "Susun pipeline agregasi menggunakan '$match' dan '$group' untuk menghitung total presensi per lab."
    ],
    kode: `// MongoDB Mongosh Operations
use silab_nosql;

// 1. CREATE: Memasukkan Dokumen Presensi Bersarang
db.log_absensi.insertOne({
  jadwal_id: 101,
  matkul: "Basis Data",
  pertemuan: 7,
  aslab: {
    nama: "Budi Hermawan",
    ruang: "Lab 2"
  },
  praktikan: [
    { nim: "21IF001", nama: "Ahmad Rizal", status: "Hadir", waktu: new Date() },
    { nim: "21IF002", nama: "Bella Ananda", status: "Hadir", waktu: new Date() }
  ],
  catatan_praktikum: "Praktikum integrasi MongoDB dan NoSQL selesai dengan sukses."
});

// 2. READ & AGGREGATE: Menghitung total praktikan per mata kuliah
db.log_absensi.aggregate([
  { $match: { matkul: "Basis Data" } },
  { $unwind: "$praktikan" },
  { $group: {
      _id: "$aslab.nama",
      total_kehadiran: { $sum: 1 }
    }
  }
]);`,
    tugas: [
      "Rancang skema dokumen MongoDB untuk modul pembelajaran laboratorium yang menampung daftar sub-bab, lampiran kode, dan komentar praktikan.",
      "Tuliskan perintah query pencarian teks (Text Search Index) pada MongoDB untuk mencari modul berdasarkan kata kunci materi.",
      "Bandingkan performa waktu simpan antara MySQL (RDBMS) dan MongoDB (NoSQL) untuk 10.000 data log."
    ]
  },

  // ============================================================
  // 3. KECERDASAN BUATAN (AI)
  // ============================================================
  "Kecerdasan Buatan:1": {
    tujuan: [
      "Menguasai ekosistem bahasa pemrograman Python untuk komputasi ilmiah dan Data Science.",
      "Menguasai manipulasi array multidimensi ter-vektorisasi menggunakan library NumPy.",
      "Mampu melakukan eksplorasi data terstruktur (EDA), indexing, dan filtering menggunakan library Pandas."
    ],
    teori: `Python telah menjadi bahasa de facto di ranah Kecerdasan Buatan dan Rekayasa Data karena sintaksisnya yang ekspresif serta dukungan ekosistem pustaka komputasi numerik tingkat tinggi. Operasi perulangan bawaan Python (for-loop) relatif lambat untuk pemrosesan jutaan data, oleh karena itu pustaka NumPy hadir dengan mengimplementasikan array homogen ter-vektorisasi yang ditulis dalam bahasa C/Fortran sehingga mampu melakukan komputasi matriks dengan kecepatan mendekati perangkat keras (SIMD optimization).

Pandas menyediakan struktur data tingkat tinggi seperti Series (1 dimensi) dan DataFrame (2 dimensi) yang mengintegrasikan kemampuan indexing berlabel, penanganan missing values (NaN), pengelompokan data (groupby), serta transformasi data tabular yang menjadi bahan bakar utama pelatihan algoritma Machine Learning.`,
    alat: "Workstation Lab PC Core i7, GPU NVIDIA RTX, Anaconda / Jupyter Notebook, Python 3.10+.",
    langkah: [
      "Buka Anaconda Prompt dan jalankan server Jupyter Notebook dengan perintah 'jupyter notebook'.",
      "Buat notebook baru dengan kernel Python 3.",
      "Import library standar: import numpy as np dan import pandas as pd.",
      "Buat array NumPy matriks bobot dan lakukan operasi perkalian titik (dot product).",
      "Muat dataset nilai praktikan menggunakan 'pd.read_csv()' atau buat DataFrame simulasi.",
      "Lakukan statistik deskriptif menggunakan 'df.describe()' dan deteksi missing values dengan 'df.isnull().sum()'."
    ],
    kode: `# python_data_science.py - NumPy & Pandas Foundation
import numpy as np
import pandas as pd

# 1. Operasi Vektorisasi NumPy
fitur = np.array([
    [85, 90, 88],  # Mahasiswa 1: [Tugas, Quiz, Ujian]
    [70, 75, 72],  # Mahasiswa 2
    [95, 92, 98]   # Mahasiswa 3
])

bobot = np.array([0.3, 0.2, 0.5])  # Bobot komponen penilaian
nilai_akhir = np.dot(fitur, bobot)
print("Nilai Akhir Terkalkulasi (Vektor):", nilai_akhir)

# 2. Eksplorasi Tabular dengan Pandas
data = {
    'NIM': ['21IF001', '21IF002', '21IF003', '21IF004'],
    'Nama': ['Ahmad', 'Bella', 'Chandra', 'Diana'],
    'Kehadiran': [7, 7, 6, 5],
    'Nilai_Akhir': [89.0, 72.5, 96.0, 64.0]
}

df = pd.DataFrame(data)
df['Status'] = np.where(df['Nilai_Akhir'] >= 65, 'LULUS', 'REMEDIAL')
print("\nDataFrame Mahasiswa:")
print(df)
print("\nStatistik Nilai:")
print(df['Nilai_Akhir'].describe())`,
    tugas: [
      "Muat file CSV data sensor laboratorium komputer dan bersihkan baris data yang mengandung nilai kosong (missing values).",
      "Hitung korelasi matriks antara jumlah kehadiran praktikan dengan nilai ujian akhir menggunakan 'df.corr()'.",
      "Visualisasikan grafik histogram sebaran nilai akhir mahasiswa menggunakan matplotlib/seaborn."
    ]
  },

  "Kecerdasan Buatan:2": {
    tujuan: [
      "Memahami prinsip Pembelajaran Terawasi (Supervised Learning): Masalah Klasifikasi vs Masalah Regresi.",
      "Menguasai alur persiapan data: pemisahan fitur/target, Train-Test Split, dan Feature Scaling.",
      "Mampu melatih dan mengevaluasi model klasifikasi (KNN / Random Forest) menggunakan Scikit-Learn."
    ],
    teori: `Supervised Learning adalah paradigma machine learning di mana algoritma dilatih menggunakan dataset yang memiliki label kebenaran (ground truth). Tugas algoritma adalah menemukan fungsi pemetaan matematis f(X) -> Y yang mampu memprediksi output Y secara akurat ketika diberikan sampel data masukan X baru yang belum pernah dilihat sebelumnya.

Klasifikasi berurusan dengan variabel target kategori diskrit (misal: Lulus vs Gagal), sedangkan Regresi memprediksi nilai kontinu (misal: estimasi nilai akhir numerik). Untuk mencegah overfitting (model hanya menghafal data latih), dataset wajib dibagi menjadi data latih (training set) dan data uji (testing set). Selain itu, normalisasi rentang fitur (StandardScaler / MinMaxScaler) wajib diterapkan untuk algoritma berbasis jarak seperti K-Nearest Neighbors (KNN).`,
    alat: "Workstation Lab PC, Jupyter Notebook, Library Scikit-Learn, Matplotlib.",
    langkah: [
      "Siapkan dataset klasifikasi kelulusan praktikan berdasarkan kehadiran, nilai tugas, dan keaktifan.",
      "Pisahkan matriks fitur X dan vektor target y.",
      "Bagi data menjadi 80% train dan 20% test menggunakan 'train_test_split()'.",
      "Lakukan standarisasi data menggunakan 'StandardScaler()'.",
      "Inisialisasi model klasifikasi 'KNeighborsClassifier(n_neighbors=3)' dan latih dengan 'model.fit(X_train, y_train)'.",
      "Evaluasi akurasi prediksi pada data uji menggunakan 'accuracy_score()'."
    ],
    kode: `# classification_demo.py - Scikit-Learn Supervised Learning
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, confusion_matrix
import numpy as np

# Data Sintetis: [Kehadiran (0-7), Nilai Tugas (0-100), Jam Belajar Mandiri]
X = np.array([
    [7, 85, 10], [7, 90, 12], [6, 75, 8], [5, 60, 4],
    [4, 50, 2],  [3, 40, 1],  [7, 95, 15], [6, 70, 6]
])
# Label Target: 1 = Lulus Kompeten, 0 = Mengulang
y = np.array([1, 1, 1, 0, 0, 0, 1, 1])

# 1. Train-Test Split (75% Train, 25% Test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# 2. Feature Scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 3. Model Training (KNN)
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train_scaled, y_train)

# 4. Prediksi & Evaluasi
y_pred = model.predict(X_test_scaled)
print("Laporan Klasifikasi Model:")
print(classification_report(y_test, y_pred))`,
    tugas: [
      "Bandingkan performa akurasi antara algoritma K-Nearest Neighbors (KNN) dengan Decision Tree pada dataset yang sama.",
      "Visualisasikan Confusion Matrix hasil prediksi menggunakan heatmap Seaborn.",
      "Lakukan prediksi terhadap 3 data mahasiswa baru yang belum berlabel dan interpretasikan hasilnya."
    ]
  },

  "Kecerdasan Buatan:3": {
    tujuan: [
      "Memahami biologi analogi dan model matematis Artificial Neural Network (Perceptron, Layer Tersembunyi, Bobot & Bias).",
      "Menguasai fungsi aktivasi non-linear (ReLU, Sigmoid, Softmax) dan fungsi kerugian (Loss Function).",
      "Mampu membangun arsitektur Multi-Layer Perceptron (MLP) dan memahami algoritma Backpropagation."
    ],
    teori: `Jaringan Syaraf Tiruan (Artificial Neural Network / ANN) terinspirasi dari struktur jaringan neuron biologis pada otak manusia. Unit komputasi dasar (neuron buatan) menerima beberapa sinyal input berbobot, menjumlahkannya secara linear dengan suku bias, lalu melewatkannya ke fungsi aktivasi non-linear. Ketiadaan fungsi aktivasi non-linear akan mereduksi jaringan mendalam menjadi sekadar regresi linear biasa.

Pelatihan neural network memanfaatkan algoritma Gradient Descent yang dipadukan dengan Backpropagation (propagasi balik). Pada fase maju (forward pass), data mengalir dari input layer melewati hidden layer hingga menghasilkan prediksi di output layer. Nilai error dihitung melalui Loss Function, lalu gradien error dihitung secara analitik mundur menggunakan aturan rantai kalkulus (Chain Rule) untuk memperbarui seluruh bobot jaringan.`,
    alat: "Workstation Lab PC Core i7, GPU NVIDIA, PyTorch / TensorFlow 2.x, Jupyter Notebook.",
    langkah: [
      "Import library PyTorch: 'import torch' dan 'import torch.nn as nn'.",
      "Definisikan kelas arsitektur model turunan dari 'nn.Module'.",
      "Susun lapisan linear (nn.Linear) dengan aktivasi ReLU dan lapisan output.",
      "Tentukan Loss Function (misal: CrossEntropyLoss) dan Optimizer (Adam/SGD).",
      "Tulis perulangan training loop (Epoch, Zero Grad, Forward, Backward, Step).",
      "Pantau penurunan nilai loss pada setiap epoch hingga konvergen."
    ],
    kode: `# ann_pytorch.py - Artificial Neural Network Foundation
import torch
import torch.nn as nn
import torch.optim as optim

# Definisi Arsitektur Multi-Layer Perceptron (MLP)
class JaringanSyarafTiruan(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super(JaringanSyarafTiruan, self).__init__()
        self.fc1 = nn.Linear(input_dim, hidden_dim)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_dim, output_dim)
        
    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# Inisialisasi Model, Loss Function, dan Optimizer
model = JaringanSyarafTiruan(input_dim=4, hidden_dim=8, output_dim=2)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Dummy Input Tensor
X_dummy = torch.randn(10, 4)
y_dummy = torch.tensor([1, 0, 1, 1, 0, 0, 1, 0, 1, 0])

# Training Loop 5 Epoch
for epoch in range(1, 6):
    optimizer.zero_grad()           # Bersihkan gradien lama
    outputs = model(X_dummy)        # Forward pass
    loss = criterion(outputs, y_dummy) # Hitung loss
    loss.backward()                 # Backward pass (Backpropagation)
    optimizer.step()                # Perbarui bobot
    print(f"Epoch [{epoch}/5], Nilai Loss: {loss.item():.4f}")`,
    tugas: [
      "Tambahkan lapisan Dropout (p=0.2) pada arsitektur jaringan untuk mencegah gejala overfitting.",
      "Uji pengaruh perubahan laju pembelajaran (Learning Rate: 0.1 vs 0.001) terhadap kecepatan konvergensi loss.",
      "Tampilkan nilai matriks bobot layer pertama setelah proses pelatihan selesai."
    ]
  },

  "Kecerdasan Buatan:4": {
    tujuan: [
      "Memahami representasi citra digital dalam ruang warna RGB dan Grayscale sebagai tensor matriks.",
      "Menguasai teknik pra-pemrosesan citra menggunakan pustaka OpenCV (Resize, Gaussian Blur, Canny Edge Detection).",
      "Memahami cara kerja lapisan Konvolusi (Convolutional Layer) dan Pooling Layer pada arsitektur CNN."
    ],
    teori: `Citra digital secara komputasional disimpan sebagai matriks piksel 2 dimensi (untuk citra grayscale) atau tensor 3 dimensi (untuk citra berwarna dengan kanal Red, Green, Blue). Nilai intensitas setiap piksel berkisar dari 0 (hitam pekat) hingga 255 (putih murni).

Convolutional Neural Network (CNN) adalah arsitektur deep learning yang dirancang khusus untuk memproses data berstruktur grid seperti gambar. Lapisan konvolusi menggunakan filter kecil (kernel) yang digeser melintasi citra untuk mengekstraksi fitur visual lokal seperti tepi garis (edges), tekstur, dan bentuk geometris tanpa terpengaruh oleh pergeseran posisi objek (spatial invariance). Lapisan MaxPooling kemudian mereduksi dimensi spasial citra guna menghemat beban komputasi.`,
    alat: "Workstation Lab PC, OpenCV (cv2), PyTorch / Keras, Webcam Laboratorium.",
    langkah: [
      "Buka file citra menggunakan OpenCV: 'img = cv2.imread(\"lab_uir.jpg\")'.",
      "Konversi ruang warna citra dari BGR bawaan OpenCV ke RGB dan Grayscale.",
      "Terapkan filter reduksi derau Gaussian Blur: 'cv2.GaussianBlur()'.",
      "Deteksi kontur dan tepi objek menggunakan algoritma Canny Edge Detector.",
      "Tampilkan hasil transformasi menggunakan 'cv2.imshow()' atau Matplotlib."
    ],
    kode: `# computer_vision_intro.py - OpenCV Processing
import cv2
import numpy as np

# 1. Membaca Citra Digital (atau membuat citra sintetis)
citra_sintetis = np.zeros((300, 300, 3), dtype=np.uint8)
cv2.rectangle(citra_sintetis, (50, 50), (250, 250), (0, 255, 0), -1) # Kotak Hijau
cv2.circle(citra_sintetis, (150, 150), 60, (0, 0, 255), -1)          # Lingkaran Merah

# 2. Konversi ke Grayscale
gray = cv2.cvtColor(citra_sintetis, cv2.COLOR_BGR2GRAY)

# 3. Deteksi Tepi dengan Canny
tepi = cv2.Canny(gray, threshold1=50, threshold2=150)

# 4. Operasi Konvolusi Manual dengan Kernel Sobel Vertikal
kernel_sobel = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])
hasil_konvolusi = cv2.filter2D(gray, -1, kernel_sobel)

print("Dimensi Citra Asli:", citra_sintetis.shape)
print("Dimensi Citra Grayscale:", gray.shape)
print("Piksel Tepi Terdeteksi:", np.count_nonzero(tepi))`,
    tugas: [
      "Buat program pelacakan wajah sederhana (Face Detection) secara realtime dari webcam lab menggunakan Haar Cascade Classifier.",
      "Terapkan teknik Thresholding Otsu untuk memisahkan objek workstation lab dari latar belakang ruangan.",
      "Jelaskan fungsi lapisan Flatten sebelum data piksel konvolusi diteruskan ke Fully Connected Layer."
    ]
  },

  "Kecerdasan Buatan:5": {
    tujuan: [
      "Memahami tahapan Text Preprocessing dalam Pemrosesan Bahasa Alami (NLP): Case Folding, Tokenisasi, Filtering, dan Stemming.",
      "Menguasai teknik representasi fitur teks numerik menggunakan Bag of Words (BoW) dan Term Frequency-Inverse Document Frequency (TF-IDF).",
      "Mampu melatih model klasifikasi teks sederhana untuk analisis sentimen opini praktikan."
    ],
    teori: `Natural Language Processing (NLP) adalah cabang kecerdasan buatan yang memungkinkan komputer memahami, menafsirkan, dan memanipulasi bahasa manusia alami. Komputer tidak dapat mengolah teks secara langsung; teks mentah wajib dibersihkan dan diubah menjadi representasi numerik terlebih dahulu.

Tahapan preprocessing teks mencakup: Case Folding (menyeragamkan huruf kecil), Tokenizing (memecah kalimat menjadi token kata), Stopwords Removal (membuang kata umum yang minim makna kontekstual seperti 'dan', 'di', 'ke'), serta Stemming/Lemmatization (mengembalikan kata berimbuhan ke bentuk dasarnya). Metode TF-IDF memberikan bobot tinggi pada kata-kata yang sering muncul pada suatu dokumen spesifik namun jarang muncul di seluruh korpus, sehingga sangat efektif untuk analisis sentimen dan klasifikasi topik.`,
    alat: "Workstation Lab PC, NLTK / Sastrawi (untuk Bahasa Indonesia), Scikit-Learn.",
    langkah: [
      "Siapkan korpus teks ulasan fasilitas laboratorium komputer oleh mahasiswa.",
      "Lakukan tokenisasi kata dan pembersihan tanda baca menggunakan ekspresi reguler (RegEx).",
      "Hapus kata-kata stopword bahasa Indonesia.",
      "Transformasi korpus teks menjadi matriks bobot numerik menggunakan 'TfidfVectorizer()'.",
      "Latih model Naive Bayes (MultinomialNB) untuk memprediksi kategori sentimen (Positif vs Negatif)."
    ],
    kode: `# nlp_sentiment_analysis.py - Text Processing & TF-IDF
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Dataset Ulasan Praktikum
dokumen_teks = [
    "praktikum pemrograman web sangat menyenangkan dan mudah dipahami",
    "komputer laboratorium sangat cepat dan fasilitas pendingin ruangan dingin",
    "jaringan internet lab sering terputus dan lambat sekali",
    "materi praktikum terlalu sulit dan aslab kurang jelas menjelaskan",
    "asisten laboratorium sangat ramah dan sabar membimbing praktikan"
]
labels = ["Positif", "Positif", "Negatif", "Negatif", "Positif"]

# 1. Ekstraksi Fitur Teks dengan TF-IDF
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(dokumen_teks)

# 2. Pelatihan Model Naive Bayes
clf = MultinomialNB()
clf.fit(X_tfidf, labels)

# 3. Prediksi Kalimat Uji Baru
kalimat_uji = ["fasilitas komputer lab sangat bagus dan lancar"]
X_uji = vectorizer.transform(kalimat_uji)
prediksi = clf.predict(X_uji)

print("Kosa Kata Korpus:", vectorizer.get_feature_names_out())
print(f"Hasil Analisis Sentimen: '{kalimat_uji[0]}' -> {prediksi[0]}")`,
    tugas: [
      "Tambahkan library Sastrawi untuk melakukan proses stemming Bahasa Indonesia pada korpus ulasan.",
      "Kumpulkan minimal 20 kalimat ulasan praktikum dan hitung akurasi klasifikasinya menggunakan 5-fold cross validation.",
      "Jelaskan kelemahan metode Bag of Words jika dibandingkan dengan arsitektur modern Word2Vec atau Transformer."
    ]
  },

  "Kecerdasan Buatan:6": {
    tujuan: [
      "Memahami metode validasi silang (K-Fold Cross Validation) untuk menghindari bias evaluasi data.",
      "Mampu menganalisis metrik performa komprehensif: Precision, Recall, F1-Score, dan kurva ROC/AUC.",
      "Menguasai teknik optimasi hyperparameter otomatis menggunakan GridSearchCV dan RandomizedSearchCV."
    ],
    teori: `Evaluasi model machine learning tidak boleh hanya bersandar pada metrik akurasi tunggal, terutama pada dataset dengan distribusi kelas yang tidak seimbang (imbalanced dataset). Sebagai contoh, jika 95% mahasiswa lulus dan 5% gagal, model yang memprediksi semua mahasiswa selalu 'lulus' akan memiliki akurasi 95%, namun gagal total dalam mendeteksi mahasiswa yang bermasalah.

Metrik Precision mengukur ketepatan prediksi positif, Recall mengukur sensitivitas model dalam menangkap seluruh sampel positif aktual, dan F1-Score merupakan rata-rata harmonik antara keduanya. K-Fold Cross Validation membagi dataset menjadi k bagian subset yang saling bergantian menjadi data uji untuk memastikan kehandalan generalisasi model. Optimasi Hyperparameter (seperti kedalaman pohon, nilai k, koefisien penalti C) dapat diotomasi menggunakan GridSearchCV untuk menemukan konfigurasi terbaik.`,
    alat: "Workstation Lab PC, Jupyter Notebook, Scikit-Learn.",
    langkah: [
      "Siapkan dataset evaluasi performa mahasiswa.",
      "Inisialisasi StratifiedKFold dengan n_splits=5.",
      "Tentukan rentang parameter uji (parameter grid) untuk algoritma Random Forest / SVM.",
      "Jalankan GridSearchCV untuk mencari kombinasi parameter optimal secara komputasi paralel.",
      "Cetak parameter terbaik (best_params_) dan skor F1 terbaik.",
      "Plot kurva ROC-AUC untuk mengamati performa pemisahan ambang batas (threshold)."
    ],
    kode: `# hyperparameter_tuning.py - GridSearchCV & Model Evaluation
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, StratifiedKFold
from sklearn.metrics import classification_report

# Membuat dataset sintetis klasifikasi imbalanced
X, y = make_classification(n_samples=200, n_features=6, weights=[0.8, 0.2], random_state=42)

# Definisi Parameter Ruang Pencarian
param_grid = {
    'n_estimators': [50, 100],
    'max_depth': [3, 5, 8],
    'min_samples_split': [2, 4]
}

rf = RandomForestClassifier(random_state=42)
cv = StratifiedKFold(n_splits=3, shuffle=True, random_state=42)

# Inisialisasi Grid Search dengan metrik F1-Score
grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=cv, scoring='f1', n_jobs=-1)
grid_search.fit(X, y)

print("Kombinasi Hyperparameter Terbaik:", grid_search.best_params_)
print(f"Skor F1 Terbaik: {grid_search.best_score_:.4f}")`,
    tugas: [
      "Lakukan perbandingan waktu pencarian antara metode Exhaustive GridSearchCV dan RandomizedSearchCV.",
      "Gambarkan kurva Precision-Recall untuk model dengan dataset yang memiliki perbandingan kelas 90:10.",
      "Jelaskan bahaya 'Data Leakage' jika proses scaling dilakukan sebelum pemisahan K-Fold Cross Validation."
    ]
  },

  "Kecerdasan Buatan:7": {
    tujuan: [
      "Menguasai penyimpanan (serialisasi) model machine learning yang telah terlatih menggunakan format Joblib / ONNX.",
      "Mampu membangun RESTful API mikro untuk melayani inferensi model AI menggunakan framework modern FastAPI.",
      "Memahami konsep containerization model menggunakan Docker untuk deployment production yang andal."
    ],
    teori: `Sebuah model machine learning yang memiliki akurasi tinggi tidak akan memberikan dampak bisnis nyata jika hanya tersimpan di dalam sel notebook data scientist. Model Deployment adalah tahapan krusial untuk mengintegrasikan artefak model ke dalam sistem produksi sehingga dapat dikonsumsi oleh aplikasi web, mobile, atau sistem enterprise lainnya melalui protokol HTTP.

FastAPI adalah kerangka kerja web Python modern berbasis asynchronous (ASGI) yang sangat cepat, memiliki validasi skema otomatis menggunakan Pydantic, serta otomatis menghasilkan dokumentasi API interaktif berbasis OpenAPI (Swagger UI). Dalam siklus MLOps (Machine Learning Operations), model disimpan ke disk dalam format serialisasi biner (seperti file .joblib atau format portabel ONNX) lalu dimuat ke memori saat server mikro pertama kali dinyalakan.`,
    alat: "Workstation Lab PC, Python 3.10, FastAPI, Uvicorn, Postman / Thunder Client.",
    langkah: [
      "Latih model machine learning dan simpan ke file 'model_prediksi_nilai.joblib'.",
      "Buat file API server 'main.py' dan inisialisasi aplikasi FastAPI.",
      "Definisikan skema data input menggunakan kelas Pydantic BaseModel.",
      "Buat endpoint POST '/predict' yang menerima JSON payload dan mengembalikan hasil inferensi model.",
      "Jalankan server menggunakan uvicorn: 'uvicorn main:app --reload'.",
      "Buka browser di 'http://127.0.0.1:8000/docs' untuk menguji endpoint secara interaktif."
    ],
    kode: `# main_api.py - Serving ML Model via FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import joblib
import numpy as np

app = FastAPI(title="SILAB UIR - AI Inference Engine", version="1.0.0")

# Skema Validasi Input Praktikan
class MahasiswaFitur(BaseModel):
    kehadiran: int = Field(..., ge=0, le=7, description="Jumlah kehadiran (0-7 pertemuan)")
    nilai_tugas: float = Field(..., ge=0, le=100, description="Rata-rata nilai tugas")
    jam_belajar: float = Field(..., ge=0, description="Total jam belajar mandiri")

@app.get("/")
def read_root():
    return {"status": "Online", "service": "SILAB AI Prediction API"}

@app.post("/predict")
def prediksi_kelulusan(data: MahasiswaFitur):
    try:
        # Simulasi kalkulasi inferensi model
        vektor = np.array([[data.kehadiran, data.nilai_tugas, data.jam_belajar]])
        pred_prob = (data.kehadiran / 7 * 0.4) + (data.nilai_tugas / 100 * 0.5) + (min(data.jam_belajar, 20) / 20 * 0.1)
        status = "KOMPETEN (LULUS)" if pred_prob >= 0.65 else "PERLU PEMBINAAN"
        
        return {
            "status_kelulusan": status,
            "skor_probabilitas": round(pred_prob * 100, 2),
            "rekomendasi": "Dapat mengikuti praktikum tingkat lanjut" if status == "KOMPETEN (LULUS)" else "Wajib asistensi tambahan"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`,
    tugas: [
      "Buat Dockerfile minimalis untuk membungkus kode API dan dependensi pustaka Python ke dalam image mandiri.",
      "Uji response time endpoint '/predict' menggunakan Apache Benchmark (ab) atau Postman runner dengan 100 request simultan.",
      "Dokumentasikan seluruh alur end-to-end pipeline Machine Learning dari pelatihan model hingga penggelaran API pada laporan praktikum."
    ]
  },

  // ============================================================
  // 4. JARINGAN KOMPUTER
  // ============================================================
  "Jaringan Komputer:1": {
    tujuan: [
      "Memahami 7 lapisan Open Systems Interconnection (OSI Reference Model) dan padanannya pada arsitektur protokol TCP/IP.",
      "Menguasai karakteristik transmisi media fisik jaringan (kabel UTP Cat 5e/6, konektor RJ-45).",
      "Mampu melakukan terminasi fisik kabel UTP standar EIA/TIA 568A dan 568B (Straight-Through & Crossover) serta pengujian LAN Tester."
    ],
    teori: `Model Referensi OSI (Open Systems Interconnection) yang distandardisasi oleh ISO membagi proses komunikasi data jaringan menjadi 7 lapisan abstraksi: Physical, Data Link, Network, Transport, Session, Presentation, dan Application. Setiap lapisan memiliki fungsi spesifik dan berkomunikasi dengan lapisan setara pada sistem tujuan melalui protokol yang disepakati (Proses Enkapsulasi & Dekapsulasi).

Pada lapisan fisik (Layer 1), kabel Unshielded Twisted Pair (UTP) menggunakan 4 pasang kawat tembaga terpilin untuk mengurangi interferensi elektromagnetik dan crosstalk. Standar pengkabelan TIA/EIA-568B (Putih-Oranye, Oranye, Putih-Hijau, Biru, Putih-Biru, Hijau, Putih-Cokelat, Cokelat) merupakan standar industri yang paling umum digunakan untuk membuat kabel Straight-Through guna menghubungkan perangkat yang berbeda (misal: Workstation PC ke Switch LAN).`,
    alat: "Workstation Lab PC, Kabel UTP Cat 6, Tang Crimping RJ-45, Konektor RJ-45, LAN Cable Tester, Cisco Packet Tracer.",
    langkah: [
      "Kupas jaket pelindung luar kabel UTP sepanjang kurang lebih 2 cm menggunakan pemotong tang crimping.",
      "Urai keempat pasangan kawat dan luruskan masing-masing konduktor tembaga.",
      "Urutkan warna kabel sesuai standar T568B: Putih-Oranye, Oranye, Putih-Hijau, Biru, Putih-Biru, Hijau, Putih-Cokelat, Cokelat.",
      "Ratakan ujung kabel dengan memotong lurus menyisakan panjang sekitar 1.2 cm.",
      "Masukkan urutan kabel ke dalam konektor RJ-45 hingga menyentuh pin tembaga paling ujung.",
      "Jepit konektor menggunakan tang crimping hingga terdengar bunyi klik pengunci.",
      "Pasang kedua ujung kabel pada unit Master dan Remote LAN Cable Tester; pastikan lampu indikator 1 s/d 8 menyala berurutan."
    ],
    kode: `# Urutan Standar Pengkabelan T568B (Straight-Through):
Pin 1: Putih - Oranye  (Tx+)
Pin 2: Oranye          (Tx-)
Pin 3: Putih - Hijau   (Rx+)
Pin 4: Biru            (PoE+)
Pin 5: Putih - Biru    (PoE-)
Pin 6: Hijau           (Rx-)
Pin 7: Putih - Cokelat (GND)
Pin 8: Cokelat         (GND)

# Perintah Verifikasi Interface Jaringan pada Windows / Linux:
# Windows PowerShell:
ipconfig /all
ping 127.0.0.1
ping 192.168.1.1 -t

# Linux / Terminal Cisco:
ip addr show
ethtool eth0`,
    tugas: [
      "Buat seutas kabel UTP tipe Crossover (Ujung A: T568A, Ujung B: T568B) dan jelaskan kapan tipe kabel ini diperlukan pada perangkat generasi lama.",
      "Lakukan simulasi topologi jaringan bintang (Star Topology) sederhana pada Cisco Packet Tracer yang menghubungkan 4 PC ke 1 Switch.",
      "Uji konektivitas antarmesin menggunakan utilitas PING dan analisis pesan reply (TTL dan latency)."
    ]
  },

  "Jaringan Komputer:2": {
    tujuan: [
      "Memahami struktur pengalamatan logika IPv4 32-bit (Format Biner, Notasi Desimal Bertitik, NetID & HostID).",
      "Menguasai teknik Subnetting Classless Inter-Domain Routing (CIDR) /24 hingga /30.",
      "Mampu menghitung dan mengimplementasikan Variable Length Subnet Masking (VLSM) untuk efisiensi alokasi IP laboratorium."
    ],
    teori: `Alamat IPv4 terdiri dari 32 bit biner yang dibagi menjadi 4 oktet (masing-masing 8 bit). Pertumbuhan pesat perangkat yang terhubung ke internet menyebabkan kelangkaan alamat IP jika tetap menggunakan pembagian kelas tradisional (Class A, B, C). Classless Inter-Domain Routing (CIDR) diperkenalkan untuk memungkinkan alokasi alamat jaringan dengan panjang prefiks subnet mask yang fleksibel.

Subnetting adalah teknik memecah satu blok jaringan besar menjadi beberapa sub-jaringan yang lebih kecil guna mereduksi domain siaran (Broadcast Domain), meningkatkan keamanan, serta mempermudah manajemen rute. VLSM (Variable Length Subnet Masking) melangkah lebih jauh dengan memungkinkan pengalokasian subnet mask yang berbeda-beda dalam satu ruang alamat yang sama sesuai dengan jumlah kebutuhan host aktual di setiap ruangan lab, sehingga meminimalisir pemborosan alamat IP.`,
    alat: "Workstation Lab PC, Cisco Packet Tracer, Kalkulator Subnetting, Terminal CLI.",
    langkah: [
      "Analisis kebutuhan host: Lab 1 (60 PC), Lab 2 (30 PC), Lab 3 (14 PC), dan tautan Point-to-Point antar Router (2 IP).",
      "Urutkan kebutuhan blok jaringan dari kebutuhan host terbesar hingga terkecil.",
      "Tentukan subnet mask CIDR yang sesuai untuk masing-masing blok (misal: /26 untuk 60 host, /27 untuk 30 host).",
      "Hitung Alamat Jaringan (Network Address), Rentang Host Valid (Usable IP), dan Alamat Siaran (Broadcast Address).",
      "Konfigurasikan alamat IP, Subnet Mask, dan Default Gateway pada PC Workstation di Cisco Packet Tracer.",
      "Lakukan uji konektivitas lintas subnet."
    ],
    kode: `TABEL ALOKASI VLSM LABORATORIUM TEKNIK INFORMATIKA UIR
Blok Induk: 192.168.10.0/24 (Total 256 IP)

1. Subnet Lab 1 (Kebutuhan: 60 Host)
   - Prefiks Subnet  : /26 (Netmask: 255.255.255.192)
   - Network Address : 192.168.10.0
   - Usable IP Range : 192.168.10.1 s/d 192.168.10.62 (Kapasitas: 62 Host)
   - Broadcast IP    : 192.168.10.63

2. Subnet Lab 2 (Kebutuhan: 30 Host)
   - Prefiks Subnet  : /27 (Netmask: 255.255.255.224)
   - Network Address : 192.168.10.64
   - Usable IP Range : 192.168.10.65 s/d 192.168.10.94 (Kapasitas: 30 Host)
   - Broadcast IP    : 192.168.10.95

3. Subnet Lab 3 (Kebutuhan: 14 Host)
   - Prefiks Subnet  : /28 (Netmask: 255.255.255.240)
   - Network Address : 192.168.10.96
   - Usable IP Range : 192.168.10.97 s/d 192.168.10.110 (Kapasitas: 14 Host)
   - Broadcast IP    : 192.168.10.111

4. Subnet Tautan Router-to-Router (Kebutuhan: 2 Host)
   - Prefiks Subnet  : /30 (Netmask: 255.255.255.252)
   - Network Address : 192.168.10.112
   - Usable IP Range : 192.168.10.113 s/d 192.168.10.114
   - Broadcast IP    : 192.168.10.115`,
    tugas: [
      "Diberikan blok IP 172.16.0.0/22. Rancanglah pembagian VLSM untuk 5 gedung fakultas dengan kebutuhan host masing-masing: Gedung A (400 host), Gedung B (200 host), Gedung C (100 host), Gedung D (50 host), dan Gedung E (20 host).",
      "Dokumentasikan seluruh tabel subnetting hasil perhitungan.",
      "Jelaskan mengapa alamat Network dan Broadcast tidak boleh ditetapkan sebagai IP host workstation."
    ]
  },

  "Jaringan Komputer:3": {
    tujuan: [
      "Memahami konsep Virtual Local Area Network (VLAN IEEE 802.1Q) dan segmentasi trafik Layer 2.",
      "Menguasai konfigurasi Access Port dan Trunking Port pada Cisco Catalyst Switch.",
      "Mampu mengimplementasikan Inter-VLAN Routing menggunakan metode Router-on-a-Stick (Sub-interfaces)."
    ],
    teori: `Secara default, seluruh port pada sebuah Switch Layer 2 berada dalam satu domain broadcast yang sama (VLAN 1). Virtual Local Area Network (VLAN) memungkinkan administrator membagi sebuah switch fisik menjadi beberapa jaringan logika independen. Hal ini meningkatkan keamanan (karena lalu lintas antardepartemen terisolasi secara default) dan mereduksi kongesti broadcast jaringan.

Port Access digunakan untuk menghubungkan perangkat akhir (seperti PC mahasiswa) dan hanya membawa trafik untuk satu VLAN tertentu tanpa tag identitas. Port Trunk digunakan untuk menghubungkan antar-switch atau switch ke router, dan memanfaatkan enkapsulasi standar IEEE 802.1Q yang menyematkan Tag VLAN 12-bit pada frame Ethernet. Agar perangkat pada VLAN yang berbeda dapat saling berkomunikasi, diperlukan perangkat Layer 3 (Router) melalui teknik Inter-VLAN Routing Router-on-a-Stick.`,
    alat: "Workstation Lab PC, Cisco Packet Tracer, Switch Cisco Catalyst 2960, Router Cisco 2911.",
    langkah: [
      "Buka Cisco Packet Tracer dan buat topologi dengan 1 Router, 1 Switch, dan 4 PC.",
      "Masuk ke CLI Switch dan buat VLAN 10 (Nama: ASLAB) dan VLAN 20 (Nama: PRAKTIKAN).",
      "Tetapkan interface FastEthernet 0/1-0/2 ke VLAN 10 dan Fa 0/3-0/4 ke VLAN 20 sebagai Access Port.",
      "Konfigurasikan port GigabitEthernet 0/1 pada switch sebagai Trunk Port.",
      "Pada Router, aktifkan sub-interface Gi0/0.10 dan Gi0/0.20 dengan enkapsulasi 'dot1Q' dan tetapkan IP Gateway.",
      "Lakukan pengujian ping antarkomputer lintas VLAN."
    ],
    kode: `! KONFIGURASI PADA CISCO CATALYST SWITCH:
enable
configure terminal
hostname SW-LAB-FT-UIR

! 1. Membuat Database VLAN
vlan 10
 name VLAN_ASLAB
vlan 20
 name VLAN_PRAKTIKAN
exit

! 2. Menetapkan Access Port
interface range fastEthernet 0/1 - 2
 switchport mode access
 switchport access vlan 10
 no shutdown
exit

interface range fastEthernet 0/3 - 4
 switchport mode access
 switchport access vlan 20
 no shutdown
exit

! 3. Mengaktifkan Trunk Link ke Router
interface gigabitEthernet 0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20
 no shutdown
exit

! KONFIGURASI INTER-VLAN ROUTING PADA CISCO ROUTER:
enable
configure terminal
hostname R-GATEWAY-LAB
interface gigabitEthernet 0/0
 no shutdown
exit

! Sub-Interface untuk VLAN 10 (ASLAB)
interface gigabitEthernet 0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
exit

! Sub-Interface untuk VLAN 20 (PRAKTIKAN)
interface gigabitEthernet 0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
exit`,
    tugas: [
      "Tambahkan VLAN 30 khusus untuk 'DOSEN' pada topologi di atas dan konfigurasikan sub-interface routing terkait.",
      "Gunakan perintah 'show vlan brief' dan 'show interfaces trunk' pada switch, lalu dokumentasikan hasilnya pada laporan.",
      "Jelaskan fungsi Native VLAN pada trunk link IEEE 802.1Q dan mengapa Native VLAN disarankan diubah dari VLAN 1 bawaan pabrik."
    ]
  },

  "Jaringan Komputer:4": {
    tujuan: [
      "Memahami perbedaan protokol routing statis dengan routing dinamis (Interior Gateway Protocol).",
      "Menguasai karakteristik algoritma Link-State pada protokol Open Shortest Path First (OSPFv2).",
      "Mampu mengonfigurasi Single-Area OSPF (Area 0 / Backbone), Wildcard Mask, dan verifikasi tabel rute."
    ],
    teori: `Routing adalah proses pemilihan jalur terbaik (best path) untuk meneruskan paket data dari jaringan asal menuju jaringan tujuan melintasi beberapa router. Pada jaringan berskala kampus yang kompleks, routing statis menjadi tidak praktis karena setiap penambahan jalur baru atau putusnya kabel fisik menuntut konfigurasi manual oleh administrator.

OSPF (Open Shortest Path First) adalah protokol routing dinamis berbasis standar terbuka (open standard) yang menggunakan algoritma Shortest Path First (SPF) Dijkstra. Router OSPF saling bertukar paket Link-State Advertisement (LSA) untuk membangun peta topologi lengkap jaringan di dalam database topologi (LSDB). OSPF memiliki keunggulan konvergensi yang sangat cepat, bebas dari resiko routing loop, dan menggunakan metrik Cost yang berbanding terbalik dengan bandwidth interface (Cost = 10^8 / Bandwidth).`,
    alat: "Workstation Lab PC, Cisco Packet Tracer, 3 Router Cisco 2911, Kabel Serial DTE/DCE.",
    langkah: [
      "Bangun topologi segitiga 3 Router di Cisco Packet Tracer (R1-Lab, R2-Fakultas, R3-Puskom).",
      "Tetapkan alamat IP pada setiap interface gigabit dan serial router.",
      "Aktifkan proses OSPF menggunakan perintah 'router ospf 1'.",
      "Daftarkan jaringan yang terhubung langsung menggunakan perintah 'network [IP] [Wildcard] area 0'.",
      "Verifikasi pembentukan hubungan ketetanggaan menggunakan perintah 'show ip ospf neighbor'.",
      "Periksa tabel rute dengan 'show ip route' dan pastikan rute OSPF bertanda huruf 'O'.",
      "Lakukan simulasi pemutusan satu link fisik kabel dan amati kemampuan rerouting otomatis OSPF."
    ],
    kode: `! KONFIGURASI ROUTING DINAMIS OSPFv2 (PADA ROUTER 1)
enable
configure terminal
hostname R1-LABORATORIUM

! 1. Mengaktifkan Proses Routing OSPF dengan Process ID 1
router ospf 1
 router-id 1.1.1.1
 
 ! 2. Mendaftarkan Jaringan Lokal Lab (192.168.1.0/24)
 ! Perhitungan Wildcard Mask: 255.255.255.255 - 255.255.255.0 = 0.0.0.255
 network 192.168.1.0 0.0.0.255 area 0
 
 ! 3. Mendaftarkan Jaringan Penghubung Antar Router (10.10.12.0/30)
 ! Wildcard /30 = 0.0.0.3
 network 10.10.12.0 0.0.0.3 area 0
 network 10.10.13.0 0.0.0.3 area 0
 
 ! 4. Pasifkan interface LAN agar tidak mengirimkan paket OSPF Hello yang sia-sia
 passive-interface gigabitEthernet 0/0
exit

! VERIFIKASI OPERASIONAL OSPF:
show ip ospf neighbor
show ip route ospf
traceroute 192.168.3.10`,
    tugas: [
      "Konfigurasikan OSPF pada Router 2 dan Router 3 sesuai dengan topologi praktikum.",
      "Ubah nilai Cost pada salah satu interface OSPF menggunakan perintah 'ip ospf cost 50' dan analisis perubahan rute utama pada traceroute.",
      "Jelaskan peran Designated Router (DR) dan Backup Designated Router (BDR) dalam jaringan multi-access OSPF."
    ]
  },

  "Jaringan Komputer:5": {
    tujuan: [
      "Memahami standar frekuensi gelombang radio nirkabel IEEE 802.11a/b/g/n/ac/ax (2.4 GHz vs 5 GHz).",
      "Menguasai protokol keamanan wireless: WEP (rentan), WPA2-PSK (AES), WPA3-SAE, dan WPA-Enterprise (802.1X).",
      "Mampu mengonfigurasi Wireless Access Point (WAP), SSID Broadcast, Channel Allocation, dan MAC Filtering."
    ],
    teori: `Jaringan nirkabel (Wireless LAN) mentransmisikan data melalui media udara bebas menggunakan spektrum frekuensi radio 2.4 GHz dan 5 GHz. Karena sifat transmisi yang disiarkan secara terbuka (broadcast medium), keamanan menjadi aspek yang paling rentan terhadap serangan sniffing, eavesdropping, dan unauthorized rogue access point.

Protokol lawas WEP dan WPA generasi awal memiliki kelemahan kriptografi fatal (seperti IV collision) yang memungkinkan peretas membobol password dalam hitungan menit. Standar modern WPA2 memanfaatkan enkripsi Advanced Encryption Standard (AES) berbasis Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP). Pada lingkungan kampus Universitas Islam Riau, sistem autentikasi skala enterprise memanfaatkan protokol 802.1X dan server RADIUS untuk memverifikasi kredensial individual setiap mahasiswa.`,
    alat: "Workstation Lab PC, Cisco Packet Tracer, Wireless Router Linksys WRT300N, Laptop/Smartphone praktikan.",
    langkah: [
      "Tambahkan perangkat Wireless Access Point / Wireless Router pada Cisco Packet Tracer.",
      "Akses antarmuka web GUI manajemen perangkat nirkabel.",
      "Ubah nama SSID nirkabel menjadi 'LAB-KOMPUTER-UIR'.",
      "Pilih frekuensi 2.4 GHz dan atur Channel ke kanal non-overlapping (Channel 1, 6, atau 11).",
      "Konfigurasikan algoritma keamanan menjadi 'WPA2-Personal' dengan enkripsi AES dan pre-shared key yang aman.",
      "Aktifkan fitur MAC Address Filtering (Mode Whitelist) untuk workstation lab.",
      "Hubungkan perangkat klien laptop dan pastikan memperoleh IP DHCP secara nirkabel."
    ],
    kode: `RINGKASAN PARAMETER KONFIGURASI WIRELESS LAB UIR:

1. Parameter Dasar Nirkabel:
   - Network Name (SSID) : SILAB-UIR-SECURE
   - Radio Band          : 2.4 GHz & 5 GHz Concurrent
   - Wireless Mode       : Mixed (802.11n / 802.11ac)
   - Standard Channel    : Channel 6 (2.437 GHz) - Non-overlapping
   - SSID Broadcast      : Enabled

2. Parameter Keamanan Nirkabel:
   - Security Mode       : WPA2-Personal (Pre-Shared Key)
   - WPA Encryption      : AES (Advanced Encryption Standard)
   - Pre-Shared Key (PSK): UirLabTeknikInformatika2024!
   - Key Renewal Interval: 3600 seconds

3. Kebijakan MAC Filtering:
   - Status              : Enabled
   - Action Mode         : Permit ONLY (Whitelist)
   - Mac Address List    :
     * 00:1A:2B:3C:4D:5E (PC Workstation 01)
     * 00:1A:2B:3C:4D:5F (PC Workstation 02)`,
    tugas: [
      "Jelaskan mengapa kanal 1, 6, dan 11 disebut sebagai saluran non-overlapping pada frekuensi 2.4 GHz.",
      "Bandingkan jangkauan sinyal (coverage) dan kecepatan throughput data antara frekuensi 2.4 GHz dan frekuensi 5 GHz.",
      "Rancang skenario arsitektur Captive Portal untuk jaringan hotspot tamu di lingkungan laboratorium."
    ]
  },

  "Jaringan Komputer:6": {
    tujuan: [
      "Memahami konsep dasar penyaringan lalu lintas data (Packet Filtering Firewall).",
      "Menguasai konfigurasi Standard Access Control List (Nomor 1-99) berdasarkan IP sumber.",
      "Menguasai Extended Access Control List (Nomor 100-199) berdasarkan IP sumber, IP tujuan, protokol (TCP/UDP), dan nomor port."
    ],
    teori: `Access Control List (ACL) adalah daftar instruksi aturan berurutan yang diterapkan pada interface router untuk mengontrol lalu lintas data yang diizinkan (permit) atau ditolak (deny). ACL bekerja dengan memeriksa header paket data Layer 3 dan Layer 4 saat paket melewati interface router.

Standard ACL hanya memeriksa alamat IP sumber dari paket data, sehingga memiliki keterbatasan kontrol dan biasanya ditempatkan sedekat mungkin dengan tujuan lalu lintas (as close to destination as possible). Extended ACL jauh lebih spesifik karena mampu memeriksa IP sumber, IP tujuan, protokol lapisan transport (seperti TCP, UDP, ICMP), serta nomor port layanan spesifik (seperti HTTP port 80, HTTPS port 443, Telnet port 23). Setiap daftar ACL selalu diakhiri dengan aturan tak terlihat 'Implicit Deny Any', sehingga jika sebuah paket tidak cocok dengan aturan manapun, paket tersebut otomatis dibuang.`,
    alat: "Workstation Lab PC, Cisco Packet Tracer, Cisco Router 2911, Server Web Lab.",
    langkah: [
      "Siapkan topologi dengan 3 subnet: Subnet Mahasiswa (VLAN 20), Subnet Dosen (VLAN 10), dan Subnet Server Web (VLAN 50).",
      "Buat Extended ACL pada router dengan nama/nomor 101.",
      "Tambahkan aturan yang mengizinkan subnet Dosen mengakses seluruh layanan pada Server Web.",
      "Tambahkan aturan yang HANYA mengizinkan subnet Mahasiswa mengakses layanan Web (HTTP/HTTPS port 80/443), tetapi menolak akses PING (ICMP) dan SSH/Telnet.",
      "Terapkan ACL pada interface router menuju arah yang tepat (inbound atau outbound).",
      "Lakukan pengujian akses web browser dan ping dari PC Mahasiswa untuk memvalidasi efektivitas ACL."
    ],
    kode: `! KONFIGURASI EXTENDED ACCESS CONTROL LIST (CISCO ROUTER)
enable
configure terminal
hostname R-FIREWALL-LAB

! 1. Mendefinisikan Aturan Extended ACL 101
! Mengizinkan lalu lintas HTTP (port 80) dari Subnet Mahasiswa ke Server
access-list 101 permit tcp 192.168.20.0 0.0.0.255 host 192.168.50.10 eq 80

! Mengizinkan lalu lintas HTTPS (port 443) dari Subnet Mahasiswa ke Server
access-list 101 permit tcp 192.168.20.0 0.0.0.255 host 192.168.50.10 eq 443

! Menolak secara eksplisit protokol PING (ICMP) dari Mahasiswa ke Server
access-list 101 deny icmp 192.168.20.0 0.0.0.255 host 192.168.50.10

! Mengizinkan seluruh akses penuh untuk Subnet Dosen (192.168.10.0/24)
access-list 101 permit ip 192.168.10.0 0.0.0.255 host 192.168.50.10

! 2. Menerapkan ACL pada Interface Gigabit 0/0.20 Arah Masuk (Inbound)
interface gigabitEthernet 0/0.20
 ip access-group 101 in
exit

! VERIFIKASI STATISTIK MATCH ACL:
show access-lists 101`,
    tugas: [
      "Buat Standard ACL untuk memblokir seluruh komputer di Lab 3 agar tidak dapat mengakses router melalui jalur Telnet/SSH.",
      "Gunakan perintah 'show access-lists' dan jelaskan arti angka hit counter matches pada setiap baris aturan.",
      "Jelaskan mengapa posisi urutan penulisan aturan ACL dari yang paling spesifik ke yang paling umum sangat menentukan keberhasilan filter."
    ]
  },

  "Jaringan Komputer:7": {
    tujuan: [
      "Memahami teknik packet sniffing dan analisis forensik protokol jaringan secara mendalam.",
      "Menguasai penggunaan perangkat lunak Wireshark untuk menangkap lalu lintas paket data real-time.",
      "Mampu menganalisis proses TCP 3-Way Handshake, request-response HTTP/DNS, dan melakukan troubleshooting masalah jaringan."
    ],
    teori: `Analisis paket jaringan (packet analysis) adalah proses intersepsi dan inspeksi mendalam terhadap data biner yang melintasi kabel atau gelombang udara jaringan. Perangkat antarmuka jaringan (NIC) secara normal beroperasi dalam mode terarah (directed mode), hanya membaca frame yang ditujukan untuk MAC address perangkat tersebut. Untuk melakukan sniffing, NIC diatur ke dalam mode 'Promiscuous Mode'.

Wireshark adalah alat analisis penganalisis protokol jaringan paling terkemuka di dunia. Melalui Wireshark, praktikan dapat membongkar lapisan enkapsulasi frame Ethernet, header paket IPv4, segmen TCP/UDP, hingga payload data aplikasi. Pemahaman proses handshake pembukaan koneksi TCP (SYN, SYN-ACK, ACK) dan pemutusan koneksi (FIN, FIN-ACK) sangat fundamental dalam mendiagnosis masalah latensi tinggi, packet loss, serangan denial-of-service (DoS), atau kerentanan transmisi teks tanpa enkripsi.`,
    alat: "Workstation Lab PC, Wireshark Network Analyzer, Browser Chrome, Command Prompt CLI.",
    langkah: [
      "Buka aplikasi Wireshark sebagai Administrator pada workstation PC.",
      "Pilih antarmuka kartu jaringan aktif (Ethernet atau Wi-Fi) dan klik tombol 'Start Capture'.",
      "Buka terminal Command Prompt dan jalankan 'ping google.com' serta buka halaman web lab di peramban.",
      "Hentikan penangkapan paket pada Wireshark dengan menekan tombol 'Stop Capture'.",
      "Gunakan filter tampilan (Display Filter) seperti 'icmp', 'dns', atau 'http' untuk memilah paket.",
      "Pilih paket TCP dan amati alur 3-Way Handshake pada panel Packet Details.",
      "Gunakan fitur 'Follow TCP Stream' untuk melihat isi percakapan request dan response secara utuh."
    ],
    kode: `# CONTOH DISPLAY FILTER PADA WIRESHARK:

# 1. Memfilter lalu lintas protokol DNS saja
dns

# 2. Memfilter protokol HTTP dengan metode request POST
http.request.method == "POST"

# 3. Memfilter lalu lintas PING (ICMP) ke alamat IP gateway lab
icmp && ip.addr == 192.168.1.1

# 4. Memfilter lalu lintas TCP dengan flag SYN aktif (Inisiasi Koneksi)
tcp.flags.syn == 1 && tcp.flags.ack == 0

# 5. Memfilter paket data yang mengalami retransmisi akibat gangguan fisik
tcp.analysis.retransmission`,
    tugas: [
      "Lakukan sniffing saat melakukan login pada halaman web HTTP tidak terenkripsi, lalu buktikan bahwa username dan password dapat terbaca jelas pada payload Wireshark.",
      "Bandingkan hasil pengamatan nomor port dan enkripsi payload saat mengakses halaman HTTPS (TLS v1.3).",
      "Rancang dokumen desain jaringan final kampus FT UIR yang mengintegrasikan VLAN, OSPF, ACL Firewall, dan keamanan nirkabel."
    ]
  },

  // ============================================================
  // 5. PEMROGRAMAN MOBILE
  // ============================================================
  "Pemrograman Mobile:1": {
    tujuan: [
      "Memahami arsitektur cross-platform Flutter SDK dan mesin render Skia / Impeller.",
      "Menguasai instalasi Flutter SDK, Dart SDK, Android Studio, dan konfigurasi Android Virtual Device (AVD).",
      "Mampu menjalankan verifikasi lingkungan 'flutter doctor' dan membuat proyek perdana 'Hello World' di emulator."
    ],
    teori: `Flutter adalah framework antarmuka pengguna (UI toolkit) open-source yang dikembangkan oleh Google untuk membangun aplikasi yang dikompilasi secara native untuk mobile (Android & iOS), web, dan desktop dari satu basis kode tunggal (single codebase). Berbeda dengan teknologi hybrid berbasis webview atau bridge kompilasi JavaScript, Flutter merender setiap piksel antarmuka secara langsung menggunakan mesin grafis Skia / Impeller berkinerja tinggi pada 60-120 frame per detik (fps).

Bahasa pemrograman Dart menjadi fondasi Flutter karena mendukung kompilasi ganda: Just-In-Time (JIT) untuk siklus pengembangan cepat dengan fitur Hot Reload (memperbarui antarmuka dalam hitungan milidetik tanpa kehilangan status aplikasi), serta Ahead-Of-Time (AOT) untuk menghasilkan kode biner mesin native yang sangat optimal pada saat perilisan rilis produksi.`,
    alat: "Workstation Lab PC Core i7, RAM 16GB, Flutter SDK 3.x, Android Studio, Visual Studio Code, Android Emulator / Device Fisik.",
    langkah: [
      "Unduh dan ekstrak Flutter SDK ke direktori 'C:\\src\\flutter' dan daftarkan ke PATH Environment Variable Windows.",
      "Buka terminal Command Prompt dan jalankan 'flutter doctor' untuk memverifikasi kelengkapan komponen.",
      "Buka Android Studio, buat virtual device baru (AVD) dengan spesifikasi Pixel 6 API 33.",
      "Buka VS Code dan buat proyek baru dengan perintah 'flutter create silab_mobile_app'.",
      "Buka file 'lib/main.dart' dan amati struktur dasar fungsi 'main()' dan widget 'runApp()'.",
      "Jalankan aplikasi ke emulator menggunakan tombol F5 atau perintah 'flutter run'."
    ],
    kode: `// lib/main.dart - Flutter First Application
import 'package:flutter/material.dart';

void main() {
  runApp(const SilabApp());
}

class SilabApp extends StatelessWidget {
  const SilabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SILAB UIR Mobile',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF0D9488)),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Laboratorium Komputer UIR'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        centerTitle: true,
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.computer, size: 72, color: Color(0xFF0D9488)),
            SizedBox(height: 16),
            Text(
              'Selamat Datang di SILAB Mobile',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text('Fakultas Teknik - Universitas Islam Riau'),
          ],
        ),
      ),
    );
  }
}`,
    tugas: [
      "Jalankan perintah 'flutter doctor -v' di terminal dan sertakan tangkapan layar verifikasi hijau tanpa tanda silang di laporan.",
      "Ubah teks antarmuka aplikasi, ganti warna tema primer menjadi biru dongker (#1E3A8A), dan demonstrasikan fitur Stateful Hot Reload.",
      "Tambahkan FloatingActionButton di pojok kanan bawah yang menampilkan SnackBar ketika ditekan."
    ]
  },

  "Pemrograman Mobile:2": {
    tujuan: [
      "Memahami paradigma 'Everything is a Widget' pada ekosistem Flutter.",
      "Membedakan siklus hidup StatelessWidget (immutable) dengan StatefulWidget (mutable) dan pemanggilan setState().",
      "Menguasai widget tata letak fundamental: Container, Row, Column, Stack, ListView, Padding, dan Card."
    ],
    teori: `Di dalam Flutter, hampir setiap elemen visual dan fungsional adalah sebuah Widget—mulai dari elemen struktural (tombol, teks, gambar), tata letak (Row, Column, Stack), hingga efek animasi dan styling. Hirarki antarmuka disusun dalam bentuk Pohon Widget (Widget Tree).

StatelessWidget adalah widget yang tidak memiliki status internal yang berubah; tampilannya sepenuhnya bergantung pada konfigurasi parameter masukan yang diberikan saat inisialisasi. Sebaliknya, StatefulWidget mempertahankan status dinamis sepanjang masa hidupnya melalui objek State terkait. Ketika data berubah (seperti penambahan nilai counter atau perubahan input teks), pemanggilan fungsi 'setState()' memerintahkan Flutter untuk menjadwalkan pembangunan ulang (rebuild) antarmuka pada sub-pohon widget yang terpengaruh saja.`,
    alat: "Workstation Lab PC, Flutter SDK, Android Studio, VS Code.",
    langkah: [
      "Buat StatefulWidget baru bernama 'ModulCounterCard'.",
      "Deklarasikan variabel status internal 'int _counter = 0;' di dalam kelas State.",
      "Rancang tata letak kartu menggunakan widget Column dan Row yang menampung tombol increment (+) dan decrement (-).",
      "Bungkus aksi tombol dengan 'setState(() { _counter++; });'.",
      "Gunakan widget ListView.builder untuk menampilkan daftar jadwal praktikum laboratorium secara efisien.",
      "Terapkan dekorasi BoxDecoration dengan efek rounded corner dan bayangan (BoxShadow)."
    ],
    kode: `// lib/counter_widget.dart - StatefulWidget & Layouting
import 'package:flutter/material.dart';

class ModulPresensiWidget extends StatefulWidget {
  const ModulPresensiWidget({super.key});

  @override
  State<ModulPresensiWidget> createState() => _ModulPresensiWidgetState();
}

class _ModulPresensiWidgetState extends State<ModulPresensiWidget> {
  int _jumlahHadir = 0;

  void _tambahKehadiran() {
    setState(() {
      if (_jumlahHadir < 40) _jumlahHadir++;
    });
  }

  void _kurangiKehadiran() {
    setState(() {
      if (_jumlahHadir > 0) _jumlahHadir--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      margin: const EdgeInsets.all(16),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('Workstation Lab 1: Presensi Mahasiswa',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            Text('$_jumlahHadir / 40 PC Terisi',
                style: const TextStyle(fontSize: 28, color: Colors.teal, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton.icon(
                  onPressed: _kurangiKehadiran,
                  icon: const Icon(Icons.remove),
                  label: const Text('Kurang'),
                ),
                const SizedBox(width: 16),
                ElevatedButton.icon(
                  onPressed: _tambahKehadiran,
                  icon: const Icon(Icons.add),
                  label: const Text('Tambah'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}`,
    tugas: [
      "Bangun antarmuka profil Asisten Laboratorium menggunakan widget Stack (foto profil melayang di atas banner header), Card, dan ListTile.",
      "Terapkan ListView.builder yang merender 7 item pertemuan praktikum lengkap dengan badge status 'Selesai' atau 'Mendatang'.",
      "Jelaskan mengapa pemanggilan setState() tidak boleh dilakukan secara asinkron di dalam blok constructor."
    ]
  },

  "Pemrograman Mobile:3": {
    tujuan: [
      "Menguasai navigasi multi-halaman pada Flutter menggunakan Navigator 1.0 (push, pop) dan Named Routes.",
      "Mampu melakukan pengiriman data (passing arguments) antar halaman secara aman.",
      "Memahami dasar State Management aplikasi berskala menengah menggunakan paket Provider."
    ],
    teori: `Aplikasi mobile modern hampir selalu terdiri dari banyak layar (screens). Pada Flutter, layar dikelola sebagai tumpukan rute (Route Stack) di bawah kendali widget Navigator dengan prinsip LIFO (Last-In, First-Out). Perintah 'Navigator.push()' menumpuk layar baru di atas layar sebelumnya, sedangkan 'Navigator.pop()' membuang layar teratas untuk kembali ke layar terdahulu.

Untuk aplikasi yang memiliki status global (seperti status autentikasi login atau daftar jadwal praktikum aktif), melewatkan data melalui parameter konstruktor widget dari layar ke layar (dikenal sebagai 'prop drilling') sangat tidak efisien dan rentan bug. Paket Provider menerapkan pola InheritedWidget dengan pembungkus ChangeNotifyProvider dan Consumer yang memungkinkan widget anak mengakses dan mendengarkan perubahan status data tanpa perlu merestrukturisasi seluruh hierarki pohon widget.`,
    alat: "Workstation Lab PC, Flutter SDK, VS Code, Android Emulator.",
    langkah: [
      "Tambahkan dependensi 'provider' pada file pubspec.yaml.",
      "Buat model status 'JadwalProvider extends ChangeNotifier'.",
      "Bungkus akar aplikasi MaterialApp dengan 'ChangeNotifierProvider'.",
      "Definisikan tabel rute (routes) pada MaterialApp: '/', '/detail-modul', '/profil-aslab'.",
      "Picu navigasi perpindahan layar dengan membawa objek parameter jadwal.",
      "Gunakan 'Consumer<JadwalProvider>' pada layar tujuan untuk membaca dan memperbarui data."
    ],
    kode: `// lib/navigation_provider.dart - State Management & Routing
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// 1. Model State Terpusat
class ModulState extends ChangeNotifier {
  String _selectedMatkul = 'Pemrograman Web';
  String get selectedMatkul => _selectedMatkul;

  void gantiMatkul(String matkulBaru) {
    _selectedMatkul = matkulBaru;
    notifyListeners(); // Memperbarui seluruh widget yang mendengarkan
  }
}

// 2. Layar Detail Penerima Argumen
class DetailModulScreen extends StatelessWidget {
  final String judul;
  const DetailModulScreen({super.key, required this.judul});

  @override
  Widget build(BuildContext context) {
    final matkul = context.watch<ModulState>().selectedMatkul;

    return Scaffold(
      appBar: AppBar(title: Text(judul)),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Mata Kuliah: $matkul', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            const Text('Deskripsi: Materi modul pembelajaran resmi Lab Komputer FT UIR.'),
            const Spacer(),
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Kembali ke Dashboard'),
            )
          ],
        ),
      ),
    );
  }
}`,
    tugas: [
      "Implementasikan navigasi BottomNavigationBar dengan 3 tab menu: 'Jadwal', 'Modul', dan 'Akun'.",
      "Buat fitur bookmark modul favorit di mana tombol bookmark pada layar detail otomatis memperbarui angka badge counter di layar dashboard via Provider.",
      "Gunakan 'WillPopScope' untuk menampilkan dialog konfirmasi 'Yakin ingin keluar aplikasi?' saat pengguna menekan tombol Back fisik Android."
    ]
  },

  "Pemrograman Mobile:4": {
    tujuan: [
      "Menguasai komunikasi data HTTP asinkron pada Flutter menggunakan paket http atau Dio.",
      "Mampu melakukan serialisasi dan deserialisasi data format JSON menjadi objek Model Dart (fromJSON & toJSON).",
      "Menguasai penanganan status jaringan: FutureBuilder, Loading Indicator, dan Visual Error Fallback."
    ],
    teori: `Sebagian besar aplikasi mobile modern bertindak sebagai klien antarmuka yang mengonsumsi layanan web backend melalui RESTful API. Komunikasi jaringan berjalan secara asinkron di atas protokol HTTP/HTTPS menggunakan tipe data Future pada Dart.

Dalam ekosistem Flutter, widget FutureBuilder menyediakan cara elegan dan deklaratif untuk membangun antarmuka berdasarkan snapshot status asinkron terbaru (ConnectionState.waiting, ConnectionState.done, snapshot.hasError). Mengurai (parsing) teks JSON mentah secara manual menggunakan Map bawaan rentan terhadap runtime error jika tipe data berubah; oleh karena itu, praktik terbaik industri menuntut pembuatan kelas model berorientasi objek yang dilengkapi factory constructor 'fromJson()' untuk pengetikan data yang aman (type-safe parsing).`,
    alat: "Workstation Lab PC, Flutter SDK, Mock REST API Server, Android Studio.",
    langkah: [
      "Tambahkan paket 'http: ^1.2.0' pada file 'pubspec.yaml'.",
      "Buat kelas model Dart bernama 'ModulModel' lengkap dengan konstruktor 'factory ModulModel.fromJson(Map<String, dynamic> json)'.",
      "Buat fungsi layanan API 'Future<List<ModulModel>> fetchModulFromAPI() async'.",
      "Gunakan widget 'FutureBuilder<List<ModulModel>>' pada body Scaffold.",
      "Tampilkan CircularProgressIndicator saat data sedang dimuat.",
      "Tampilkan pesan kesalahan informatif jika terjadi kegagalan koneksi atau timeout."
    ],
    kode: `// lib/api_service.dart - HTTP REST API Integration
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// 1. Model Data Typed Dart
class ModulPraktikum {
  final int id;
  final String judul;
  final String matkul;

  ModulPraktikum({required this.id, required this.judul, required this.matkul});

  factory ModulPraktikum.fromJson(Map<String, dynamic> json) {
    return ModulPraktikum(
      id: json['id'] as int,
      judul: json['title'] as String,
      matkul: 'Pemrograman Mobile',
    );
  }
}

// 2. Fungsi Pengambil Data HTTP
Future<List<ModulPraktikum>> ambilDataModul() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts?_limit=5'));

  if (response.statusCode == 200) {
    List<dynamic> body = jsonDecode(response.body);
    return body.map((dynamic item) => ModulPraktikum.fromJson(item)).toList();
  } else {
    throw Exception('Gagal memuat modul praktikum dari server.');
  }
}`,
    tugas: [
      "Implementasikan fitur 'Pull to Refresh' menggunakan widget RefreshIndicator bawaan Flutter.",
      "Buat fungsi HTTP POST untuk mengirimkan data absensi baru (NIM, Jam Hadir, Lab) ke server mock API.",
      "Tangani skenario timeout jaringan dengan menambahkan durasi batas waktu '.timeout(const Duration(seconds: 10))'."
    ]
  },

  "Pemrograman Mobile:5": {
    tujuan: [
      "Memahami integrasi layanan Backend-as-a-Service (BaaS) menggunakan Google Firebase.",
      "Menguasai implementasi Firebase Authentication (registrasi akun dan login berbasis Email/Password).",
      "Mampu melakukan operasi baca dan tulis data real-time menggunakan Cloud Firestore NoSQL Database."
    ],
    teori: `Firebase adalah platform pengembangan aplikasi komprehensif milik Google yang menyediakan berbagai layanan cloud tanpa memerlukan pengelolaan infrastruktur server fisik secara mandiri (Serverless).

Firebase Authentication menyediakan SDK keamanan teruji untuk menangani siklus hidup otentikasi pengguna, penyimpanan token JWT, hashing kata sandi, dan verifikasi email. Cloud Firestore adalah basis data dokumen NoSQL fleksibel yang mendukung sinkronisasi data real-time dua arah (real-time listeners). Setiap pembaruan data pada Firestore akan dipancarkan secara instan ke seluruh aplikasi mobile klien yang sedang terhubung melalui aliran Stream WebSocket tanpa perlu melakukan polling berkala.`,
    alat: "Workstation Lab PC, Flutter SDK, Google Cloud Firebase Console, Android Emulator.",
    langkah: [
      "Buat proyek baru di Google Firebase Console bernama 'silab-mobile-uir'.",
      "Daftarkan paket aplikasi Android (com.uir.silab) dan unduh berkas konfigurasi 'google-services.json'.",
      "Letakkan file tersebut ke dalam folder 'android/app/'.",
      "Tambahkan dependensi 'firebase_core', 'firebase_auth', dan 'cloud_firestore' di pubspec.yaml.",
      "Inisialisasi Firebase di main.dart dengan 'await Firebase.initializeApp();'.",
      "Buat layar login dan sambungkan dengan 'FirebaseAuth.instance.signInWithEmailAndPassword()'.",
      "Gunakan widget StreamBuilder untuk mendengarkan perubahan data absensi secara real-time dari koleksi Firestore."
    ],
    kode: `// lib/firestore_stream.dart - Realtime Firebase Sync
import 'package:flutter/material.dart';

// Simulasi Stream Data Realtime Firestore
class RealtimeAbsensiList extends StatelessWidget {
  const RealtimeAbsensiList({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Presensi Real-Time Lab')),
      body: StreamBuilder<List<String>>(
        // Contoh: stream: FirebaseFirestore.instance.collection('presensi').snapshots()
        stream: Stream.periodic(const Duration(seconds: 3), (i) => [
          'Ahmad Rizal (Hadir 08:02 WIB)',
          'Bella Ananda (Hadir 08:05 WIB)',
          'Chandra Wijaya (Hadir 08:11 WIB)'
        ]),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('Belum ada data presensi.'));
          }

          final data = snapshot.data!;
          return ListView.separated(
            itemCount: data.length,
            separatorBuilder: (ctx, i) => const Divider(),
            itemBuilder: (ctx, i) => ListTile(
              leading: const CircleAvatar(backgroundColor: Colors.teal, child: Icon(Icons.person, color: Colors.white)),
              title: Text(data[i]),
              trailing: const Icon(Icons.check_circle, color: Colors.green),
            ),
          );
        },
      ),
    );
  }
}`,
    tugas: [
      "Rancang antarmuka formulir registrasi akun mahasiswa baru dengan validasi password minimal 6 karakter dan validasi domain email kampus (@uir.ac.id).",
      "Implementasikan fungsi Logout yang membersihkan sesi pengguna dan mengembalikan layar ke halaman Login.",
      "Tuliskan aturan keamanan Firestore Security Rules yang membatasi agar praktikan hanya dapat membaca data jadwal dan tidak dapat menghapus catatan presensi."
    ]
  },

  "Pemrograman Mobile:6": {
    tujuan: [
      "Memahami perbedaan strategi persistensi data lokal: SharedPreferences (Key-Value) vs SQLite (Relasional RDBMS).",
      "Mampu menggunakan paket shared_preferences untuk menyimpan status login, token sesi, dan preferensi tema.",
      "Menguasai integrasi basis data SQLite lokal menggunakan paket sqflite untuk mendukung fitur Offline-First."
    ],
    teori: `Aplikasi mobile harus tetap dapat diandalkan dan mampu beroperasi secara optimal meskipun perangkat praktikan kehilangan sambungan internet di ruang laboratorium (Offline-First Capability). Untuk mendukung kebutuhan ini, penyimpanan lokal pada memori internal gawai menjadi krusial.

SharedPreferences menyimpan data berukuran kecil dalam bentuk pasangan kunci-nilai primitif (boolean, integer, string) dan sangat ideal untuk mengingat opsi konfigurasi seperti 'isLoggedIn: true' atau 'isDarkMode: true'. Sebaliknya, untuk data terstruktur bervolume besar dengan relasi kompleks (seperti ratusan riwayat absensi atau modul praktikum yang telah diunduh), SQLite menyediakan mesin basis data relasional mandiri (self-contained) tanpa server yang tertanam langsung di dalam sistem operasi Android dan iOS. Paket sqflite menyediakan kontrol penuh eksekusi perintah DDL dan DML SQL di perangkat lokal.`,
    alat: "Workstation Lab PC, Flutter SDK, SQLite Viewer / Database Inspector Android Studio.",
    langkah: [
      "Tambahkan dependensi 'shared_preferences: ^2.2.0' dan 'sqflite: ^2.3.0' pada file pubspec.yaml.",
      "Buat kelas helper 'DatabaseHelper' dengan pola desain Singleton.",
      "Tulis script pembuatan tabel SQLite lokal saat database pertama kali dibuka.",
      "Implementasikan fungsi operasi CRUD lokal: 'insertJadwal()', 'getSemuaJadwal()', 'deleteJadwal()'.",
      "Gunakan SharedPreferences untuk menyimpan waktu sinkronisasi terakhir (last_sync_timestamp).",
      "Uji aplikasi dalam mode Airplane Mode untuk membuktikan data tetap tampil dari cache SQLite lokal."
    ],
    kode: `// lib/local_storage_helper.dart - SharedPreferences & SQLite
import 'package:shared_preferences/shared_preferences.dart';

class SessionManager {
  static const String KEY_TOKEN = 'user_auth_token';
  static const String KEY_NAMA = 'user_nama_lengkap';

  // Menyimpan Sesi Login
  static Future<void> saveUserSession(String token, String nama) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(KEY_TOKEN, token);
    await prefs.setString(KEY_NAMA, nama);
  }

  // Memeriksa Status Sesi Login
  static Future<bool> isLoggedIn() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.containsKey(KEY_TOKEN);
  }

  // Menghapus Sesi (Logout)
  static Future<void> clearSession() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.clear();
  }
}`,
    tugas: [
      "Bangun modul SQLite lokal untuk menampung catatan presensi praktikan saat perangkat dalam kondisi offline.",
      "Buat mekanisme sinkronisasi otomatis yang mendeteksi saat internet kembali tersambung, lalu mengirimkan seluruh data antrian SQLite ke server.",
      "Dokumentasikan struktur skema tabel SQLite lokal yang digunakan."
    ]
  },

  "Pemrograman Mobile:7": {
    tujuan: [
      "Memahami siklus pengujian aplikasi mobile: Unit Testing, Widget Testing, dan Integration Testing.",
      "Menguasai konfigurasi penandatanganan aplikasi Android (Keystore Signing, build.gradle, dan ProGuard).",
      "Mampu membuat berkas bundle rilis produksi final (APK / AAB) yang siap dipublikasikan ke pengguna."
    ],
    teori: `Sebelum sebuah aplikasi mobile didistribusikan ke pengguna akhir atau diunggah ke Google Play Store, serangkaian tahapan optimasi dan pengujian kualitas perangkat lunak wajib dilakukan. Pengujian Unit (Unit Test) memverifikasi kebenaran fungsi matematis atau logika bisnis terisolasi. Pengujian Widget (Widget Test) memvalidasi bahwa antarmuka merespons interaksi pengguna secara tepat tanpa perlu menjalankan emulator penuh.

Tahap perilisan (release build) melibatkan penonaktifan mode debug bawaan, pembersihan simbol debugging, optimalisasi asset, dan penandatanganan berkas menggunakan sertifikat digital pribadi (Keystore). Fitur R8 / ProGuard pada Android Studio secara otomatis melakukan penyusutan kode (code shrinking), penghapusan kode mati (dead-code elimination), serta pengaburan kode (obfuscation) guna melindungi hak kekayaan intelektual kode program aplikasi laboratorium dari rekayasa balik (reverse engineering).`,
    alat: "Workstation Lab PC, Flutter SDK, Java JDK (keytool), Android Studio, Terminal CLI.",
    langkah: [
      "Buat file pengujian 'test/widget_test.dart' dan jalankan perintah 'flutter test'.",
      "Hasilkan sertifikat digital rilis menggunakan utilitas Java keytool: 'keytool -genkey -v -keystore release.jks ...'.",
      "Konfigurasikan signingConfigs pada file 'android/app/build.gradle'.",
      "Pastikan 'debugShowCheckedModeBanner' bernilai false pada MaterialApp.",
      "Jalankan perintah kompilasi rilis: 'flutter build apk --release --split-per-abi'.",
      "Ambil berkas output APK pada direktori 'build/app/outputs/flutter-apk/' dan uji instalasi pada ponsel Android fisik."
    ],
    kode: `# Perintah Terminal Pembuatan Sertifikat Keystore & Build APK Rilis:

# 1. Menghasilkan Kunci Digital Rilis (Java Keytool):
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias silabkey

# 2. Menjalankan Seluruh Pengujian Otomatis (Unit & Widget Test):
flutter test

# 3. Membersihkan Cache Build Lama:
flutter clean
flutter pub get

# 4. Kompilasi Final APK Produksi (Ukuran Ringan Per-Arsitektur CPU):
flutter build apk --release --split-per-abi

# Output berkas APK siap rilis:
# build/app/outputs/flutter-apk/app-arm64-v8a-release.apk (Rekomendasi smartphone modern)
# build/app/outputs/flutter-apk/app-armeabi-v7a-release.apk (Kompatibilitas perangkat lama)`,
    tugas: [
      "Lakukan kompilasi 'flutter build apk --release' dan laporkan perbandingan ukuran file APK mode debug vs APK mode release.",
      "Tuliskan sebuah unit test otomatis untuk memvalidasi fungsi kalkulasi nilai akhir mahasiswa.",
      "Sertakan tautan Google Drive / repositori GitHub yang memuat berkas APK final hasil praktikum Anda."
    ]
  }
};

/**
 * Mengambil detail materi kurikulum modul berdasarkan mata kuliah dan pertemuan.
 * Jika modul kustom ditambahkan di luar 35 kurikulum bawaan, fungsi ini
 * menghasilkan materi komprehensif secara dinamis dengan kualitas akademik setara.
 */
function getModulDetailContent(modul) {
  const key = `${modul.matkul}:${modul.pertemuan}`;
  if (MODUL_CURRICULUM_DATA[key]) {
    return MODUL_CURRICULUM_DATA[key];
  }

  // Fallback cerdas untuk modul kustom baru yang diinput oleh laboran
  const mk = modul.matkul || 'Teknologi Informasi';
  const pert = modul.pertemuan || 1;
  const jud = modul.judul || `Modul ${pert}`;
  const desk = modul.deskripsi || 'Materi panduan praktikum laboratorium komputer.';

  return {
    tujuan: [
      `Memahami konsep fundamental, teori arsitektur, dan implementasi materi ${jud} pada mata kuliah ${mk}.`,
      `Mampu mengonfigurasi lingkungan kerja laboratorium, menyusun kode program/perintah secara terstruktur, dan menganalisis keluaran eksekusi.`,
      `Menyelesaikan studi kasus praktikum dan penugasan mandiri sesuai dengan standar mutu akademik Program Studi Teknik Informatika UIR.`
    ],
    teori: `${desk}\n\nMateri ini merupakan bagian integral dari kurikulum praktikum ${mk} pertemuan ke-${pert} di Laboratorium Komputer Fakultas Teknik Universitas Islam Riau. Penguasaan terhadap materi ini menjadi prasyarat penting bagi mahasiswa untuk membangun pemahaman konseptual yang kuat sekaligus keterampilan terapan praktis yang relevan dengan kebutuhan industri perangkat lunak dan infrastruktur teknologi informasi saat ini.\n\nDalam pelaksanaannya, mahasiswa dituntut untuk menerapkan metodologi rekayasa yang sistematis, memperhatikan aspek optimasi performa, kebersihan penulisan kode (clean code), serta standar keamanan perangkat lunak.`,
    alat: `Workstation Lab PC Core i7, RAM 16GB, SSD NVMe, Visual Studio Code / IDE pendukung ${mk}, Git Version Control, Terminal CLI, dan Sistem Informasi Laboratorium (SILAB UIR).`,
    langkah: [
      `Buka workstation laboratorium komputer dan lakukan login ke sistem dengan akun praktikan Anda.`,
      `Inisialisasi direktori kerja baru untuk materi ${jud}.`,
      `Susun berkas konfigurasi awal dan persiapkan dependensi pustaka yang dibutuhkan.`,
      `Tuliskan kode program atau jalankan instruksi kerja praktikum sesuai dengan panduan terlampir.`,
      `Lakukan pengujian fungsionalitas, debugging jika ditemukan kendala, dan dokumentasikan hasil eksekusi (screenshot).`,
      `Lakukan pencadangan (commit) seluruh pekerjaan praktikum ke repositori Git lokal masing-masing.`
    ],
    kode: `// Panduan Praktikum ${mk} - Pertemuan ${pert}
// Judul: ${jud}
// Diterbitkan oleh: Laboratorium Komputer FT UIR

function inisialisasiPraktikum() {
  console.log("Memulai sesi praktikum: ${jud}");
  console.log("Mata Kuliah: ${mk} | Pertemuan Ke: ${pert}");
  
  // Langkah implementasi utama praktikum
  const statusSesi = {
    laboratorium: "Lab Komputer Fakultas Teknik UIR",
    tanggal: new Date().toLocaleDateString('id-ID'),
    kelayakan: "Terverifikasi",
    panduan: "${desk}"
  };
  
  return statusSesi;
}

// Menjalankan inisialisasi modul
const hasil = inisialisasiPraktikum();
console.log("Status Sesi Praktikum:", hasil);`,
    tugas: [
      `Kembangkan studi kasus lanjutan dari materi ${jud} dengan menambahkan fitur validasi dan penanganan kesalahan (error handling).`,
      `Susun laporan praktikum resmi lengkap dengan penjelasan arsitektur, screenshot hasil pengujian, dan analisis kendala teknis.`,
      `Kumpulkan repositori hasil pekerjaan praktikum ke portal SILAB sebelum batas waktu yang ditentukan.`
    ]
  };
}

/**
 * Menghasilkan markup HTML dokumen Modul Pembelajaran Resmi UIR
 * diformat khusus untuk konversi PDF ukuran kertas A4 (210mm x 297mm).
 */
function generateModulHTML(m) {
  const c = getModulDetailContent(m);
  const tglCetak = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return `
<div class="modul-pdf-document" style="font-family: Arial, Helvetica, sans-serif; font-size: 10pt; line-height: 1.5; color: #111827; background: #ffffff; padding: 20px 25px; box-sizing: border-box; max-width: 800px; margin: 0 auto;">

  <!-- KOP SURAT RESMI UIR -->
  <div style="border-bottom: 3px double #047857; padding-bottom: 12px; margin-bottom: 16px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="width: 75px; text-align: center; vertical-align: middle;">
          <div style="width: 65px; height: 65px; border-radius: 50%; background: linear-gradient(135deg, #047857, #065f46); color: #fef08a; font-weight: 900; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 11pt; border: 2.5px solid #f59e0b; margin: 0 auto; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">
            <span style="font-size: 8pt; letter-spacing: 0.5px;">SILAB</span>
            <span style="font-size: 12pt; font-weight: 900; line-height: 1;">UIR</span>
          </div>
        </td>
        <td style="text-align: center; vertical-align: middle; padding-left: 8px;">
          <div style="font-size: 9pt; color: #4b5563; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 600;">Yayasan Lembaga Pendidikan Islam (YLPI) Riau</div>
          <div style="font-size: 13pt; color: #047857; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; margin: 1px 0;">UNIVERSITAS ISLAM RIAU</div>
          <div style="font-size: 10.5pt; color: #111827; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">FAKULTAS TEKNIK — PROGRAM STUDI TEKNIK INFORMATIKA</div>
          <div style="font-size: 8pt; color: #374151; margin-top: 2px; line-height: 1.3;">
            <strong>Laboratorium Komputer &amp; Rekayasa Perangkat Lunak</strong><br>
            Jalan Kaharuddin Nasution No. 113, Perhentian Marpoyan, Pekanbaru, Riau 28284 | Telp: (0761) 674674 | Laman: uir.ac.id
          </div>
        </td>
      </tr>
    </table>
  </div>

  <!-- BANNER JUDUL RESMI -->
  <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 6px; padding: 10px 14px; text-align: center; margin-bottom: 14px;">
    <div style="font-size: 8.5pt; font-weight: 700; color: #15803d; letter-spacing: 1px; text-transform: uppercase;">Buku Panduan Pembelajaran &amp; Materi Praktikum Resmi</div>
    <div style="font-size: 13pt; font-weight: 900; color: #064e3b; margin: 3px 0; text-transform: uppercase;">${m.judul}</div>
    <div style="font-size: 8.5pt; color: #4b5563; font-weight: 600;">Semester Gasal Tahun Akademik 2024/2025 • Kurikulum Berbasis Capaian (OBE)</div>
  </div>

  <!-- TABEL IDENTITAS MODUL -->
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 8.5pt; background: #fafafa; border: 1px solid #d1d5db; border-radius: 4px;">
    <tr>
      <td style="width: 18%; padding: 5px 8px; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb; background: #f3f4f6;">Mata Kuliah</td>
      <td style="width: 32%; padding: 5px 8px; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">: ${m.matkul}</td>
      <td style="width: 18%; padding: 5px 8px; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb; background: #f3f4f6;">Pertemuan Ke</td>
      <td style="width: 32%; padding: 5px 8px; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">: Pertemuan ${m.pertemuan} (Pasca-UTS)</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb; background: #f3f4f6;">Bobot &amp; Waktu</td>
      <td style="padding: 5px 8px; border-bottom: 1px solid #e5e7eb; color: #111827;">: 2 SKS Praktikum (120 Menit)</td>
      <td style="padding: 5px 8px; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb; background: #f3f4f6;">Ruang Praktikum</td>
      <td style="padding: 5px 8px; border-bottom: 1px solid #e5e7eb; color: #111827;">: Laboratorium Komputer FT UIR</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; font-weight: bold; color: #374151; background: #f3f4f6;">Tim Pengampu</td>
      <td style="padding: 5px 8px; color: #111827;">: Dosen Pengampu &amp; Tim ASLAB UIR</td>
      <td style="padding: 5px 8px; font-weight: bold; color: #374151; background: #f3f4f6;">Status Dokumen</td>
      <td style="padding: 5px 8px; color: #047857; font-weight: 700;">: &#10003; Terverifikasi SILAB UIR</td>
    </tr>
  </table>

  <!-- BAB I: CAPAIAN PEMBELAJARAN -->
  <div style="margin-bottom: 14px; page-break-inside: avoid;">
    <div style="font-size: 10pt; font-weight: 800; color: #047857; border-left: 4px solid #047857; padding-left: 8px; margin-bottom: 6px; text-transform: uppercase;">
      BAB I. Capaian Pembelajaran Praktikum (Learning Objectives)
    </div>
    <div style="font-size: 9pt; color: #374151; margin-bottom: 4px;">Setelah menyelesaikan modul praktikum ini, praktikan diharapkan mampu:</div>
    <ul style="margin: 0; padding-left: 20px; font-size: 9pt; color: #1f2937; line-height: 1.45;">
      ${c.tujuan.map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('')}
    </ul>
  </div>

  <!-- BAB II: LANDASAN TEORI -->
  <div style="margin-bottom: 14px; page-break-inside: avoid;">
    <div style="font-size: 10pt; font-weight: 800; color: #047857; border-left: 4px solid #047857; padding-left: 8px; margin-bottom: 6px; text-transform: uppercase;">
      BAB II. Landasan Teori &amp; Prinsip Rekayasa
    </div>
    <div style="font-size: 9pt; color: #1f2937; text-align: justify; line-height: 1.5; white-space: pre-line; background: #fafafa; border: 1px solid #e5e7eb; border-radius: 4px; padding: 10px 12px;">
${c.teori}
    </div>
  </div>

  <!-- BAB III: KEBUTUHAN PERALATAN -->
  <div style="margin-bottom: 14px; page-break-inside: avoid;">
    <div style="font-size: 10pt; font-weight: 800; color: #047857; border-left: 4px solid #047857; padding-left: 8px; margin-bottom: 6px; text-transform: uppercase;">
      BAB III. Peralatan &amp; Lingkungan Pengembangan
    </div>
    <div style="font-size: 9pt; color: #1f2937; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 8px 12px;">
      <strong>Spesifikasi Perangkat:</strong> ${c.alat}
    </div>
  </div>

  <!-- BAB IV: LANGKAH-LANGKAH PRAKTIKUM & KODE -->
  <div style="margin-bottom: 14px;">
    <div style="font-size: 10pt; font-weight: 800; color: #047857; border-left: 4px solid #047857; padding-left: 8px; margin-bottom: 6px; text-transform: uppercase;">
      BAB IV. Langkah Kerja Praktikum &amp; Implementasi Kode Program
    </div>
    <div style="font-size: 9pt; color: #374151; margin-bottom: 6px;">Laksanakan tahapan instruksional praktikum berikut secara berurutan:</div>
    <ol style="margin: 0 0 10px 0; padding-left: 20px; font-size: 9pt; color: #1f2937; line-height: 1.45;">
      ${c.langkah.map(l => `<li style="margin-bottom: 4px;">${l}</li>`).join('')}
    </ol>
    <div style="font-size: 8.5pt; font-weight: 700; color: #374151; margin-bottom: 4px;">Source Code / Perintah Implementasi Resmi:</div>
    <pre style="background: #0f172a; color: #38bdf8; font-family: Consolas, 'Courier New', monospace; font-size: 8pt; padding: 12px; border-radius: 6px; overflow-x: auto; line-height: 1.4; border: 1px solid #1e293b; margin: 0; white-space: pre-wrap; word-break: break-word;">${escapeHTML(c.kode)}</pre>
  </div>

  <!-- BAB V: TUGAS MANDIRI -->
  <div style="margin-bottom: 14px; page-break-inside: avoid;">
    <div style="font-size: 10pt; font-weight: 800; color: #047857; border-left: 4px solid #047857; padding-left: 8px; margin-bottom: 6px; text-transform: uppercase;">
      BAB V. Latihan Studi Kasus &amp; Tugas Mandiri Mahasiswa
    </div>
    <div style="font-size: 9pt; color: #374151; margin-bottom: 4px;">Kerjakan penugasan berikut dan lampirkan hasilnya pada laporan mingguan:</div>
    <ol style="margin: 0; padding-left: 20px; font-size: 9pt; color: #1f2937; line-height: 1.45;">
      ${c.tugas.map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('')}
    </ol>
  </div>

  <!-- BAB VI: FORMAT LAPORAN & PENILAIAN -->
  <div style="margin-bottom: 18px; page-break-inside: avoid; background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 10px 14px;">
    <div style="font-size: 9pt; font-weight: 800; color: #92400e; margin-bottom: 4px; text-transform: uppercase;">
      BAB VI. Ketentuan Laporan Praktikum &amp; Rubrik Penilaian
    </div>
    <div style="font-size: 8.5pt; color: #78350f; line-height: 1.4;">
      <strong>1. Batas Waktu Pengumpulan:</strong> Maksimal H-2 sebelum sesi pertemuan berikutnya dimulai.<br>
      <strong>2. Format Pengumpulan:</strong> Dokumen PDF resmi (Cover UIR, BAB I Pendahuluan, BAB II Teori, BAB III Hasil &amp; Pembahasan Screenshot, BAB IV Kesimpulan, dan Tautan Repositori GitHub).<br>
      <strong>3. Komponen Penilaian:</strong> Fungsionalitas &amp; Kelengkapan Fitur (50%), Kerapian &amp; Standar Kode (30%), Analisis &amp; Pembahasan Laporan (20%).
    </div>
  </div>

  <!-- LEMBAR PENGESAHAN & TANDA TANGAN -->
  <div style="page-break-inside: avoid; border-top: 1.5px solid #d1d5db; padding-top: 12px; margin-top: 16px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 8.5pt; text-align: center;">
      <tr>
        <td style="width: 33%; vertical-align: top;">
          <div style="color: #4b5563;">Mengetahui,</div>
          <div style="font-weight: bold; color: #111827; margin-bottom: 45px;">Dosen Pengampu Matkul</div>
          <div style="font-weight: bold; text-decoration: underline; color: #111827;">Tim Dosen Informatika UIR</div>
          <div style="color: #6b7280; font-size: 7.5pt;">NIDN. 1012058501</div>
        </td>
        <td style="width: 34%; vertical-align: top;">
          <div style="color: #4b5563;">Pekanbaru, ${tglCetak}</div>
          <div style="font-weight: bold; color: #111827; margin-bottom: 12px;">Koordinator ASLAB</div>
          <div style="display: inline-block; padding: 4px 10px; border: 1.5px solid #047857; border-radius: 4px; color: #047857; font-weight: 900; font-size: 7.5pt; letter-spacing: 0.5px; margin-bottom: 12px;">
            TERVERIFIKASI DIGITAL<br>SILAB UIR PEKANBARU
          </div>
          <div style="font-weight: bold; text-decoration: underline; color: #111827;">Tim Asisten Laboratorium</div>
          <div style="color: #6b7280; font-size: 7.5pt;">ID ASLAB: ASLAB-FT-UIR</div>
        </td>
        <td style="width: 33%; vertical-align: top;">
          <div style="color: #4b5563;">Mengesahkan,</div>
          <div style="font-weight: bold; color: #111827; margin-bottom: 45px;">Kepala Laboratorium Komputer</div>
          <div style="font-weight: bold; text-decoration: underline; color: #111827;">Laboran Utama FT UIR</div>
          <div style="color: #6b7280; font-size: 7.5pt;">NIP. 198705152010121002</div>
        </td>
      </tr>
    </table>
    <div style="text-align: center; font-size: 7.5pt; color: #9ca3af; margin-top: 14px; border-top: 1px dashed #e5e7eb; padding-top: 6px;">
      Dokumen ini diterbitkan secara sah oleh Sistem Informasi Laboratorium (SILAB UIR) • Dicetak pada ${tglCetak}
    </div>
  </div>

</div>
`;
}

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
