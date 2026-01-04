# tr-scroll-toggle
Proyek ini merupakan implementasi Vue 2 (Options API) yang terinspirasi dari website berikut:
https://tr-scroll-toggle.webflow.io/

Tujuan utama dari technical test ini adalah mereplikasi pola interaksi berbasis scroll, seperti:

-Section yang di-pin

-Perubahan konten berdasarkan posisi scroll

-Transisi visual yang halus

-Sinkronisasi teks dan gambar

Karena durasi pengerjaan terbatas (2 hari), fokus pengerjaan diarahkan pada logika interaksi, animasi, dan struktur kode, bukan kesamaan visual 100%.

## Tech Stack

-Teknologi yang Digunakan (Tech Stack)

-Vue.js 2 (Options API) – struktur aplikasi & komponen

-GSAP + ScrollTrigger – animasi berbasis scroll & pinning

-Lenis – smooth scrolling

-SASS (SCSS) – styling, variables & mixins

-Vue CLI – project setup

## Fitur utama yang diimplementasikan

-Visual kanan yang pinned saat scroll

-State aktif Plan / Design / Build mengikuti scroll

-Crossfade image + efek scale ringan

-Navigasi header sinkron dengan posisi scroll

-Smooth scroll menggunakan Lenis

-Responsive (desktop, tablet, mobile)

-Struktur komponen terpisah dan rapi

## catatan & Batasan

-Tampilan visual belum sepenuhnya identik dengan website referensi

-Fokus utama pada:

    -Alur scroll

    -Perilaku animasi

    -Kerapian dan keterbacaan kode

-Font menggunakan Google Fonts (Inter), bukan font lokal, demi kesederhanaan dan performa

Keputusan ini diambil secara sadar untuk memastikan fitur inti berjalan dengan baik dalam waktu yang tersedia.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
