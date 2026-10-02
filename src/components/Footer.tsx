import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 bg-ink px-5 py-10 text-white lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-[20px] tracking-[0.14em]">SKIN.LAB</p>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-white/60">Dermatology & Skin Health Clinic. Perawatan kulit personal dengan analisis teknologi dan dokter berpengalaman.</p>
        </div>
        <div className="text-[13px]"><p className="mb-3 font-semibold">Layanan</p>
          <ul className="space-y-2 text-white/60"><li><Link href="/treatment">Treatment</Link></li><li><Link href="/harga">Harga</Link></li><li><Link href="/booking">Booking</Link></li></ul></div>
        <div className="text-[13px]"><p className="mb-3 font-semibold">Klinik</p>
          <ul className="space-y-2 text-white/60"><li><Link href="/dokter">Dokter</Link></li><li><Link href="/cabang">Cabang</Link></li><li><Link href="/artikel">Artikel</Link></li><li><Link href="/tentang">Tentang Kami</Link></li></ul></div>
        <div className="text-[13px] text-white/60"><p className="mb-3 font-semibold text-white">Jam buka</p><p>Senin–Sabtu 09.00–20.00</p><p>Minggu 10.00–16.00</p></div>
      </div>
      <p className="mx-auto mt-8 max-w-[1440px] text-[11px] text-white/40">Situs demo. Hasil perawatan berbeda pada tiap orang.</p>
    </footer>
  );
}
