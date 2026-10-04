## Perubahan yang sudah diterapkan

### Metadata halaman

- Memperbarui title dan meta description utama di `index.html` agar menjelaskan layanan Mavost.
- Mengganti favicon default Vite dengan favicon brand di `/favicon.svg`.
- Menghapus referensi Open Graph dan Twitter image bawaan Bolt, lalu menggantinya dengan `/og-image.svg`.
- Menambahkan Open Graph URL, tipe halaman, teks alternatif gambar, dan metadata Twitter title/description.
- Menambahkan canonical URL homepage di HTML awal.
- Membuat komponen `src/components/SEO.tsx` untuk menetapkan title, description, canonical, Open Graph, Twitter Card, bahasa dokumen, dan JSON-LD berdasarkan route.
- Memasang metadata unik untuk homepage (`/`) dan halaman portfolio (`/work`).

### Structured data

- Homepage sekarang menyertakan JSON-LD `Organization` dan `WebSite`.
- Halaman `/work` menyertakan JSON-LD `CollectionPage` yang terhubung ke website Mavost.

### Crawling dan sitemap

- Menambahkan `public/robots.txt` yang mengizinkan crawling umum dan menunjuk ke sitemap.
- Menambahkan `public/sitemap.xml` dengan URL homepage dan `/work`.

### Konten dan struktur halaman

- Mengubah H1 hero homepage agar secara eksplisit menyebut web design dan development untuk brand.
- Membungkus konten utama homepage dan portfolio dengan elemen semantik `<main>`.
- Mengganti card portfolio yang sebelumnya berupa link `#` tanpa tujuan menjadi elemen artikel semantik.
- Memperjelas alt text gambar portfolio dengan konteks proyek dan Mavost.

### Gambar portfolio

- Mengubah referensi gambar portfolio dari path string `./src/assets/...` menjadi import aset langsung di `Portfolio.tsx` dan `RecentWork.tsx`.
- Aset sekarang ikut diproses dan diberi nama ber-hash oleh Vite saat production build.
- File founder juga sudah menunjuk ke `founder.webp` sesuai aset yang tersedia. Perubahan ini sudah ada di worktree sebelum pekerjaan SEO ini dan dipertahankan.

## File yang terkait

- `index.html` — metadata HTML awal dan favicon.
- `src/components/SEO.tsx` — pengelola metadata per route dan JSON-LD.
- `src/pages/Home.tsx` — metadata/schema homepage dan struktur `<main>`.
- `src/pages/RecentWork.tsx` — metadata/schema portfolio dan import gambar.
- `src/components/Hero.tsx` — H1 yang menjelaskan layanan.
- `src/components/Portfolio.tsx` — import gambar, alt text, dan semantik card.
- `public/favicon.svg` — ikon brand yang digunakan sebagai favicon.
- `public/og-image.svg` — gambar pratinjau sosial.
- `public/robots.txt` — aturan crawling dan alamat sitemap.
- `public/sitemap.xml` — daftar URL publik yang saat ini ada.

## Verifikasi

- `npm run build` berhasil.
- Production build menghasilkan seluruh tujuh gambar portfolio di `dist/assets`.
- Output build menyertakan `favicon.svg`, `og-image.svg`, `robots.txt`, dan `sitemap.xml`.
- `git diff --check` berhasil tanpa whitespace error.
- `npm run lint` belum berhasil dijalankan: konfigurasi ESLint mengimpor `typescript-eslint`, tetapi paket tersebut tidak tersedia di dependency project.
- Pemeriksaan TypeScript terpisah juga belum bisa dijalankan karena executable `tsc` tidak tersedia di `node_modules/.bin`.

## Asumsi dan batasan

- URL canonical, Open Graph, schema, dan sitemap menggunakan `https://mavost.id`. Pastikan domain produksi memang memakai hostname ini sebelum deploy.
- Konten website tetap berbahasa Inggris, jadi atribut dokumen menggunakan `lang="en"`.
- Sitemap berisi route yang sudah ada saja: `/` dan `/work`. Tambahkan URL saat halaman layanan atau studi kasus baru dibuat.
- Hosting harus mengarahkan permintaan langsung ke `/work` ke aplikasi SPA. Pastikan route ini tidak mengembalikan 404 saat dibuka langsung.
- JSON-LD saat ini ditambahkan oleh React setelah halaman dimuat. Untuk crawler atau platform sosial yang perlu metadata pada HTML awal, pertimbangkan prerendering atau server-side rendering.
- `og-image.svg` adalah aset SVG. Jika platform sosial yang dipakai tidak menampilkan SVG, sediakan gambar Open Graph raster (umumnya PNG/JPG) dan perbarui URL metadata.

## Tindak lanjut setelah deploy

1. Pastikan domain production adalah `https://mavost.id` dan route `/work` berfungsi saat dibuka langsung.
2. Periksa `https://mavost.id/robots.txt`, `https://mavost.id/sitemap.xml`, dan `https://mavost.id/og-image.svg` setelah deploy.
3. Tambahkan properti website ke Google Search Console dan submit `https://mavost.id/sitemap.xml`.
4. Gunakan URL Inspection untuk meminta crawling homepage dan `/work`, lalu cek hasil render serta canonical.
5. Buat halaman layanan dan case study dengan URL, title, description, H1, konten, dan schema yang relevan untuk tiap halaman; masukkan URL baru ke sitemap.
6. Untuk meningkatkan relevansi pencarian lokal, tentukan apakah pasar utama Indonesia atau internasional. Jika menargetkan Indonesia, terjemahkan konten utama secara konsisten dan buat halaman Bahasa Indonesia; bila menyediakan dua bahasa, gunakan URL berbeda dan anotasi `hreflang`.
7. Audit performa dengan Lighthouse/PageSpeed dan pantau klik, impresi, serta masalah indexing di Search Console.

## Acuan

- [Google Search developer guide](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Crawlable link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
