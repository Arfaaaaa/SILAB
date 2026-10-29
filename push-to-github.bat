@echo off
title Push Pembaruan SILAB UIR ke GitHub
cls
echo ============================================================
echo   SILAB UIR - Push Otomatis ke GitHub
echo   Repository: https://github.com/Arfaaaaa/SILAB
echo ============================================================
echo.
cd /d "%~dp0"

echo [1/3] Menambahkan file yang diubah (git add)...
git add .

echo [2/3] Menyimpan perubahan commit...
git commit -m "feat: gabungkan login Laboran/Admin dan ASLAB menjadi satu portal login terpadu dengan deteksi role otomatis"

echo [3/3] Mengunggah ke GitHub (git push origin main)...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================================
    echo [SUKSES] Semua perbaikan SILAB berhasil diunggah ke GitHub!
    echo Vercel akan otomatis men-deploy versi terbaru ini.
    echo ============================================================
) else (
    echo.
    echo ============================================================
    echo [INFO] Jika gagal karena otentikasi, pastikan sudah login GitHub di browser.
    echo ============================================================
)

echo.
echo Tekan sembarang tombol untuk keluar...
pause >nul
