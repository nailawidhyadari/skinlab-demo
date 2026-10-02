import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { treatments, rp } from "@/data";

export const metadata = { title: "Treatment · SKIN.LAB" };

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Treatment" title="Perawatan sesuai masalahmu">
        Setiap treatment diawali analisis kulit dan konsultasi dokter, jadi kamu tahu apa yang dikerjakan dan kenapa.
      </PageHead>
      <div className="space-y-5 px-5 py-10 lg:px-10">
        {treatments.map((t, i) => (
          <article key={t.slug} id={t.slug} className="grid scroll-mt-24 overflow-hidden rounded-2xl border border-black/10 bg-white md:grid-cols-[320px_1fr]">
            <div className={`relative min-h-[200px] ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={`/img/${t.img}.jpg`} alt="" fill sizes="320px" className="object-cover" />
            </div>
            <div className="p-6 lg:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue">{t.concern}</p>
              <h2 className="mt-2 text-[26px] font-extrabold tracking-tight">{t.n}</h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-black/70">{t.long}</p>
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
                <div><dt className="text-black/50">Mulai dari</dt><dd className="font-bold">{rp(t.p)}</dd></div>
                <div><dt className="text-black/50">Durasi</dt><dd className="flex items-center gap-1 font-bold"><Clock size={13} />{t.dur}</dd></div>
                <div><dt className="text-black/50">Downtime</dt><dd className="font-bold">{t.t}</dd></div>
              </dl>
              <Link href={`/booking?treatment=${t.slug}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-[13px] font-semibold text-white transition hover:brightness-110">
                Booking treatment ini <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
