import Link from "next/link";
import { Clock, MapPin, Navigation } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { branches, doctors } from "@/data";

export const metadata = { title: "Cabang · SKIN.LAB" };

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Cabang" title="Dekat denganmu">
        {branches.length} cabang di Jabodetabek. Pilih yang paling dekat, lalu booking jadwal konsultasi langsung.
      </PageHead>
      <ul className="grid gap-5 px-5 py-10 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {branches.map((b) => (
          <li key={b.slug} id={b.slug} className="flex scroll-mt-24 flex-col rounded-2xl border border-black/10 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue">{b.area}</p>
                <h2 className="mt-1.5 text-[20px] font-extrabold tracking-tight">{b.n}</h2>
              </div>
              {b.flagship && <span className="shrink-0 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold">Flagship</span>}
            </div>
            <p className="mt-4 flex gap-2 text-[13px] text-black/70"><MapPin size={15} className="mt-0.5 shrink-0" />{b.addr}</p>
            <p className="mt-2 flex gap-2 text-[13px] text-black/70"><Clock size={15} className="mt-0.5 shrink-0" />{b.hours}</p>
            <p className="mt-4 text-[12px] text-black/55">
              Dokter: {b.doctors.map((s) => doctors.find((d) => d.slug === s)?.n).join(", ")}
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link href={`/booking?cabang=${b.slug}`} className="rounded-full bg-blue px-5 py-2.5 text-[12px] font-semibold text-white transition hover:brightness-110">Booking di sini</Link>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.n + " " + b.addr)}`} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/20 px-5 py-2.5 text-[12px] font-semibold transition hover:border-blue hover:text-blue">
                <Navigation size={13} /> Petunjuk arah
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
