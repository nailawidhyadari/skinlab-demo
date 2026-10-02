"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, MapPin, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Beranda", "/"], ["Treatment", "/treatment"], ["Harga", "/harga"],
  ["Dokter", "/dokter"], ["Cabang", "/cabang"], ["Artikel", "/artikel"], ["Tentang Kami", "/tentang"],
] as const;

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3.5 lg:gap-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="text-[22px] font-medium tracking-[0.14em]">SKIN.LAB</span>
          <span className="hidden border-l border-black/30 pl-2.5 text-[8px] font-medium uppercase leading-tight tracking-wider text-black/60 sm:block">
            Dermatology<br />Skin Health Clinic
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 whitespace-nowrap text-[13px] font-medium lg:flex xl:gap-7">
          {nav.map(([l, h]) => (
            <Link key={h} href={h} className={active(h) ? "text-blue" : "hover:text-blue"}>{l}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5 lg:ml-0">
          <Link href="/cabang" className="hidden items-center gap-1.5 whitespace-nowrap text-[13px] font-medium xl:flex"><MapPin size={15} /> Jakarta <ChevronDown size={13} /></Link>
          <Search size={17} className="hidden xl:block" aria-hidden />
          <Link href="/booking" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-blue sm:px-5">
            Booking<span className="hidden sm:inline">&nbsp;Konsultasi</span> <ArrowRight size={14} />
          </Link>
          <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && (
        <nav className="grid border-t border-black/10 bg-white px-5 pb-3 lg:hidden">
          {nav.map(([l, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)} className={`border-b border-black/5 py-3 text-[15px] font-medium ${active(h) ? "text-blue" : ""}`}>{l}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
