export const treatments = [
  { slug: "acne-clear", n: "Acne Clear Program", concern: "Jerawat", d: "Untuk jerawat aktif dan minyak berlebih", p: 899000, t: "1–2 hari", dur: "45 menit", img: "cv2-jerawat",
    long: "Kombinasi pembersihan pori, chemical peel ringan, dan terapi cahaya untuk meredakan jerawat aktif serta mengontrol produksi minyak. Dokter menyesuaikan kekuatan tiap sesi dengan kondisi kulitmu." },
  { slug: "brightening-laser", n: "Brightening Laser", concern: "Kusam & Flek", d: "Untuk kusam dan flek ringan", p: 1500000, t: "1–3 hari", dur: "60 menit", img: "cv2-kusam",
    long: "Laser energi rendah yang membantu menyamarkan flek ringan dan membuat warna kulit tampak lebih merata dan cerah, tanpa membuat kulit terkelupas parah." },
  { slug: "acne-scar", n: "Acne Scar Treatment", concern: "Bekas Jerawat", d: "Untuk bekas jerawat dan tekstur kulit", p: 2500000, t: "2–5 hari", dur: "75 menit", img: "cv2-bekas",
    long: "Perawatan bertahap untuk meratakan tekstur dan menyamarkan bekas jerawat, memakai kombinasi microneedling dan serum regeneratif. Hasil terbaik muncul setelah 3–4 sesi." },
  { slug: "skin-booster", n: "Skin Booster", concern: "Sensitif & Dehidrasi", d: "Untuk hidrasi dan memperkuat skin barrier", p: 1800000, t: "0–1 hari", dur: "50 menit", img: "cv2-sensitif",
    long: "Suntikan mikro hyaluronic acid yang melembapkan dari dalam dan memperkuat skin barrier. Cocok untuk kulit yang mudah kemerahan atau terasa kering." },
  { slug: "pigment-correct", n: "Pigment Correct", concern: "Flek", d: "Untuk flek dan hiperpigmentasi", p: 2100000, t: "2–4 hari", dur: "60 menit", img: "cv2-flek",
    long: "Terapi bertarget untuk flek dan hiperpigmentasi membandel, dipadukan dengan rutinitas di rumah dari dokter agar hasilnya bertahan." },
];

export const doctors = [
  { slug: "aulia-rahma", n: "dr. Aulia Rahma, Sp.DV", s: "Spesialis Kulit & Kelamin", img: "dr1-v2", exp: "9 tahun", focus: "Jerawat, bekas jerawat, skin barrier", today: true },
  { slug: "reza-pratama", n: "dr. Reza Pratama, Sp.DV", s: "Spesialis Kulit & Kelamin", img: "dr2-v2", exp: "7 tahun", focus: "Flek, hiperpigmentasi, laser", today: true },
];

export const articles = [
  { slug: "urutan-skincare", t: "Urutan skincare pagi dan malam yang benar", c: "Rutinitas", m: "4 menit", d: "Mulai dari pembersih sampai tabir surya, ini urutan yang aman untuk kulit berminyak dan kombinasi." },
  { slug: "jerawat-dipencet", t: "Kenapa jerawat jangan dipencet", c: "Jerawat", m: "3 menit", d: "Memencet jerawat bisa memperdalam peradangan dan meninggalkan bekas. Ini yang sebaiknya dilakukan." },
  { slug: "skin-barrier", t: "Tanda skin barrier kamu rusak", c: "Kulit Sensitif", m: "5 menit", d: "Perih saat pakai produk, kemerahan, dan mengelupas bisa jadi tandanya. Begini cara memulihkannya." },
  { slug: "tabir-surya", t: "Tabir surya: SPF berapa yang cukup?", c: "Perlindungan", m: "4 menit", d: "SPF 30 dengan pemakaian ulang sering lebih berguna daripada SPF 100 sekali oles." },
];

export const branches = [
  { slug: "kemang", n: "SKIN.LAB Kemang", area: "Jakarta Selatan", addr: "Jl. Kemang Raya, Kemang, Jakarta Selatan", hours: "Sen–Sab 09.00–20.00 · Min 10.00–16.00", doctors: ["aulia-rahma", "reza-pratama"], flagship: true },
  { slug: "menteng", n: "SKIN.LAB Menteng", area: "Jakarta Pusat", addr: "Jl. HOS Cokroaminoto, Menteng, Jakarta Pusat", hours: "Sen–Sab 09.00–20.00", doctors: ["aulia-rahma"], flagship: false },
  { slug: "puri", n: "SKIN.LAB Puri Indah", area: "Jakarta Barat", addr: "Jl. Puri Indah Raya, Kembangan, Jakarta Barat", hours: "Sen–Sab 10.00–20.00", doctors: ["reza-pratama"], flagship: false },
  { slug: "kelapa-gading", n: "SKIN.LAB Kelapa Gading", area: "Jakarta Utara", addr: "Jl. Boulevard Raya, Kelapa Gading, Jakarta Utara", hours: "Sen–Sab 10.00–20.00", doctors: ["aulia-rahma", "reza-pratama"], flagship: false },
  { slug: "bsd", n: "SKIN.LAB BSD", area: "Tangerang Selatan", addr: "Jl. BSD Raya Utama, Tangerang Selatan", hours: "Sen–Sab 10.00–19.00", doctors: ["reza-pratama"], flagship: false },
];

export const rp = (n: number) => "Rp " + n.toLocaleString("id-ID");
