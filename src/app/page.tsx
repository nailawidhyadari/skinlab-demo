import Image from "next/image";
import Link from "next/link";
import { doctors, treatments, rp } from "@/data";
import {
  ArrowRight, ChevronRight, Leaf, LayoutGrid, ShieldCheck, Users, Activity,
} from "lucide-react";

const signals = [
  { k: "Kelembapan", v: 72, c: "bg-blue" },
  { k: "Produksi minyak", v: 56, c: "bg-blue" },
  { k: "Tekstur kulit", v: 61, c: "bg-blue" },
  { k: "Noda & flek", v: 38, c: "bg-[#ff7a5c]" },
  { k: "Sensitivitas", v: 42, c: "bg-[#ff7a5c]" },
];

const concerns = [
  { slug: "acne-clear", n: "Jerawat", d: "Atasi jerawat aktif dan cegah datang lagi", img: "jerawat" },
  { slug: "acne-scar", n: "Bekas Jerawat", d: "Samarkan noda, ratakan tekstur kulit", img: "bekas" },
  { slug: "brightening-laser", n: "Kusam", d: "Kulit tampak lebih cerah dan sehat", img: "kusam" },
  { slug: "pigment-correct", n: "Flek", d: "Bantu samarkan flek dan hiperpigmentasi", img: "flek" },
  { slug: "skin-booster", n: "Sensitif", d: "Rawat skin barrier, kurangi kemerahan", img: "sensitif" },
];

const steps = [
  { n: "01", t: "Konsultasi & Analisis Kulit", d: "Pemeriksaan dengan skin analysis dan diskusi langsung dengan dokter.", img: "step1-v3" },
  { n: "02", t: "Rencana Perawatan Personal", d: "Treatment disesuaikan dengan kondisi, kebutuhan, dan target kulitmu.", img: "step2-v2" },
  { n: "03", t: "Mulai Treatment & Monitoring", d: "Proses perawatan dengan standar medis dan evaluasi hasil secara berkala.", img: "step3-v2" },
];

const baLabels = ["Sebelum", "Minggu ke-2", "Minggu ke-4", "Minggu ke-8"];

export default function Page() {
  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="hero-bg px-5 pb-10 pt-10 lg:px-10 lg:pb-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,540px)_1fr] xl:grid-cols-[minmax(0,540px)_1fr_312px]">
          <div className="relative z-10">
            <h1 className="font-display text-[84px] uppercase leading-[0.92] tracking-tight sm:text-[104px] lg:text-[96px]">
              Kulitmu<br />punya <span className="text-blue">cerita.</span>
            </h1>
            <p className="mt-3 text-[34px] font-medium leading-tight tracking-tight sm:text-[38px]">Kami bantu membacanya.</p>
            <p className="mt-3 max-w-[400px] text-[14px] leading-relaxed text-black/70">
              Dengan teknologi skin analysis dan dokter berpengalaman, kami bantu kamu memahami sinyal kulit dan menemukan perawatan yang tepat, personal, dan aman.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <Link href="/booking" className="inline-flex items-center gap-3 rounded-full bg-blue px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_-8px_#0f3bff] transition hover:brightness-110">
                Booking Konsultasi <ArrowRight size={16} />
              </Link>
              <a href="#signal" className="inline-flex items-center gap-2.5 text-[14px] font-medium">
                <span className="grid size-9 place-items-center rounded-full border border-black/25"><Activity size={16} /></span>
                Cek Skin Signal
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-[11px] leading-tight text-black/65">
              <li className="flex items-center gap-2"><ShieldCheck size={22} strokeWidth={1.4} />Ditangani dokter<br />berpengalaman</li>
              <li className="flex items-center gap-2"><Users size={22} strokeWidth={1.4} />Teknologi kulit<br />terkini</li>
              <li className="flex items-center gap-2"><Leaf size={22} strokeWidth={1.4} />Aman & sesuai<br />untuk kulit Indonesia</li>
            </ul>
          </div>

          {/* photo */}
          <div className="relative mx-auto min-h-[340px] w-full max-w-xl overflow-hidden rounded-3xl lg:mx-0 lg:max-w-none lg:rounded-none">
            <div className="hero-photo absolute inset-0"><Image src="/img/hero-v2.jpg" alt="Potret kulit wajah" fill priority sizes="(min-width:1024px) 35vw, 448px" className="object-cover object-[55%_25%]" /></div>
            <span className="absolute bottom-6 left-6 -rotate-6 font-hand text-[22px] leading-tight text-white drop-shadow-[0_1px_6px_rgba(0,0,0,.5)]">
              Kulit sehat<br />versi kamu<br />pasti bisa.
              <span className="scribble mt-1 block w-28" />
            </span>
          </div>

          {/* signal card + note */}
          <div className="relative lg:col-span-2 xl:col-span-1">
            <aside id="signal" className="mx-auto max-w-md rounded-xl bg-white/95 p-4 shadow-[0_20px_60px_-20px_rgba(20,40,120,.35)] backdrop-blur lg:mx-0 xl:max-w-none">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold tracking-[0.18em] text-blue">SKIN SIGNAL <span className="text-lime">→</span></span>
                <span className="flex items-center gap-1.5 text-black/60"><i className="size-2.5 rounded-full bg-lime" />Analisis selesai</span>
              </div>
              <div className="mt-3 flex gap-3">
                <div className="relative h-[130px] w-[105px] shrink-0 overflow-hidden rounded-lg">
                  <Image src="/img/scan-v2.jpg" alt="Hasil pemindaian kulit" fill sizes="105px" className="object-cover" />
                </div>
                <ul className="flex-1 space-y-2">
                  {signals.map((s) => (
                    <li key={s.k} className="text-[10.5px]">
                      <div className="flex justify-between"><span>{s.k}</span><b>{s.v}</b></div>
                      <div className="bar mt-0.5 h-[5px] rounded-full bg-black/10">
                        <i className={`block h-full rounded-full ${s.c}`} style={{ width: `${s.v}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-mist p-3 text-[11px] leading-snug text-blue">
                <p className="flex-1">Kulitmu cenderung kombinasi dengan tanda dehidrasi ringan dan flek awal. Yuk konsultasi untuk rencana perawatan yang tepat!</p>
                <Link href="/booking" aria-label="Booking konsultasi" className="grid size-8 shrink-0 place-items-center rounded-full bg-[#cfdcff]"><ArrowRight size={14} /></Link>
              </div>
            </aside>
            <p className="mt-6 hidden -rotate-[6deg] pl-4 font-hand text-[26px] uppercase leading-[1.05] xl:block">Sains untuk kulit nyata Indonesia</p>
            <ul className="mt-8 hidden pl-4 text-[9px] font-medium uppercase tracking-[0.2em] text-black/45 xl:block">
              {["Analyze", "Understand", "Treat", "Glow real"].map((w) => <li key={w} className="mb-1.5">{w}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* CONCERN EXPLORER */}
      <section className="flex flex-col gap-4 border-t border-black/5 bg-white p-4 lg:h-[118px] lg:flex-row lg:items-center lg:gap-3 lg:px-5 lg:py-0">
        <div className="flex shrink-0 items-center gap-3 lg:w-[210px]">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue">Concern Explorer</p>
            <h2 className="mt-1 text-[22px] font-extrabold leading-[1.05] tracking-tight">Mulai dari<br />masalahmu</h2>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lime"><ArrowRight size={20} /></span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {concerns.map((c) => (
            <Link key={c.n} href={`/treatment#${c.slug}`} className="group relative aspect-[1.6/1] overflow-hidden rounded-md lg:aspect-auto lg:h-[98px]">
              <Image src={`/img/cv2-${c.img}.jpg`} alt="" fill sizes="200px" className="object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1a1a]/85 via-[#3a1a1a]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
                <p className="flex items-center gap-1 text-[13px] font-semibold">{c.n} <ArrowRight size={11} /></p>
                <p className="mt-0.5 text-[8.5px] leading-tight text-white/85">{c.d}</p>
              </div>
            </Link>
          ))}
          <Link href="/treatment" className="flex flex-col items-center justify-center gap-1.5 rounded-md bg-mist p-3 text-center text-[11px] font-medium text-ink transition hover:bg-[#d5e0f7]">
            <LayoutGrid size={18} className="text-blue" />
            Lihat semua<br />concern <ArrowRight size={11} className="inline" />
          </Link>
        </div>
      </section>

      {/* PLAN + RESULTS */}
      <section className="grid border-t border-black/5 lg:grid-cols-[255px_1fr]">
        <div className="flex flex-col lg:row-span-2">
          <div className="bg-blue p-5 text-white">
            <h2 className="text-[22px] font-extrabold leading-[1.1] tracking-tight">Rencana kulitmu,<br />jelas dari awal.</h2>
            <p className="mt-3 text-[11px] leading-snug text-white/85">Dari konsultasi hingga hasil, semua terstruktur dengan jelas dan transparan.</p>
          </div>
          <div className="relative h-[260px] overflow-hidden bg-blue lg:h-auto lg:flex-1 lg:min-h-[190px]">
            <Image src="/img/lobby-v2.jpg" alt="Ruang treatment SKIN.LAB" fill sizes="255px" className="object-cover" />
            <p className="absolute bottom-0 right-0 w-[110px] bg-blue p-2.5 pr-3 font-hand text-[19px] font-semibold uppercase leading-[1.05] text-white ">
              Same skin, different story
            </p>
          </div>
        </div>

        <ol className="grid divide-black/10 border-b border-black/10 sm:grid-cols-3 sm:divide-x">
          {steps.map((s, i) => (
            <li key={s.n} className="flex items-center gap-3 p-4 lg:h-[88px]">
              <div className="relative h-[68px] w-[100px] shrink-0 overflow-hidden rounded-md">
                <Image src={`/img/${s.img}.jpg`} alt="" fill sizes="100px" className="object-cover object-top" />
              </div>
              <div className="flex-1">
                <p className="text-[12px] font-bold text-blue">{s.n}</p>
                <h3 className="text-[13px] font-bold leading-tight">{s.t}</h3>
                <p className="mt-1 text-[9.5px] leading-snug text-black/60">{s.d}</p>
              </div>
              {i < 2 && <ChevronRight size={16} className="hidden shrink-0 xl:block" />}
            </li>
          ))}
        </ol>

        <div className="grid lg:grid-cols-[1.05fr_1fr_0.9fr]">
          {/* hasil nyata */}
          <div className="relative p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em]">Hasil nyata, bertahap <span className="text-lime">→</span> <span className="font-normal normal-case tracking-normal text-black/40">(ilustrasi)</span></p>
            <div className="mt-3 grid grid-cols-4 gap-1.5 md:max-w-md lg:w-[80%]">
              {baLabels.map((l, i) => (
                <figure key={l}>
                  <div className="relative aspect-[0.78/1] overflow-hidden rounded-sm">
                    <Image src={`/img/bav2-${i}.jpg`} alt={`Kulit ${l}`} fill sizes="100px" className="object-cover" />
                  </div>
                  <figcaption className="mt-1 text-center text-[8.5px] text-black/70">{l}</figcaption>
                </figure>
              ))}
            </div>
            <p className="pointer-events-none mt-3 -rotate-6 text-right font-hand text-[21px] font-semibold uppercase leading-none lg:absolute lg:bottom-3 lg:right-3 lg:w-[110px] lg:text-left">
              Progres nyata, bukan instan.
              <span className="scribble mt-1 block w-24" />
            </p>
          </div>

          {/* treatment populer */}
          <div className="border-black/10 p-4 lg:border-x">
            <div className="grid grid-cols-[1fr_auto] gap-x-4 text-[9px] sm:grid-cols-[1fr_auto_auto] font-bold uppercase tracking-wider">
              <span>Treatment populer</span><span className="w-[72px]">Harga</span><span className="hidden w-[52px] sm:block">Downtime</span>
            </div>
            <ul className="mt-2 divide-y divide-black/10">
              {treatments.slice(0, 4).map((t) => (
                <li key={t.n} className="grid grid-cols-[1fr_auto] items-center gap-x-4 py-2 sm:grid-cols-[1fr_auto_auto]">
                  <div>
                    <Link href={`/treatment#${t.slug}`} className="text-[11px] font-bold hover:text-blue">{t.n}</Link>
                    <p className="text-[8.5px] text-black/55">{t.d}</p>
                  </div>
                  <span className="w-[72px] text-[10px] font-medium">{rp(t.p)}</span>
                  <span className="hidden w-[52px] text-[10px] text-black/70 sm:block">{t.t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* dokter */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-bold">Dokter tersedia hari ini</p>
              <Link href="/dokter" className="text-[9px] font-semibold text-blue">Lihat semua →</Link>
            </div>
            <ul className="mt-3 space-y-2.5">
              {doctors.map((d) => (
                <li key={d.n} className="flex items-center gap-3 rounded-md border border-black/10 p-2">
                  <div className="relative size-[54px] shrink-0 overflow-hidden rounded-md bg-mist">
                    <Image src={`/img/${d.img}.jpg`} alt={d.n} fill sizes="54px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-bold">{d.n}</p>
                    <p className="text-[8.5px] text-black/55">{d.s}</p>
                    <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#e3f5c8] px-1.5 py-0.5 text-[8px] text-[#2f6b12]">
                      <i className="size-1.5 rounded-full bg-[#5fb320]" />Tersedia hari ini
                    </span>
                  </div>
                  <Link href={`/booking?dokter=${d.slug}`} className="shrink-0 rounded-md border border-blue px-2.5 py-1.5 text-[9.5px] font-semibold text-blue transition hover:bg-blue hover:text-white">
                    Pilih Jadwal
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
