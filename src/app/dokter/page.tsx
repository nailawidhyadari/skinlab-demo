import Image from "next/image";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { doctors } from "@/data";

export const metadata = { title: "Dokter · SKIN.LAB" };

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Dokter" title="Yang menangani kulitmu">
        Semua dokter kami spesialis kulit dan kelamin (Sp.DV) dengan pengalaman klinis bertahun-tahun.
      </PageHead>
      <ul className="grid gap-5 px-5 py-10 md:grid-cols-2 lg:px-10">
        {doctors.map((d) => (
          <li key={d.slug} className="flex gap-5 rounded-2xl border border-black/10 p-5">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-xl bg-mist">
              <Image src={`/img/${d.img}.jpg`} alt={d.n} fill sizes="112px" className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-[18px] font-extrabold">{d.n}</h2>
              <p className="text-[13px] text-black/60">{d.s}</p>
              <p className="mt-3 text-[13px]"><b>Pengalaman:</b> {d.exp}</p>
              <p className="text-[13px]"><b>Fokus:</b> {d.focus}</p>
              {d.today && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#e3f5c8] px-2.5 py-1 text-[11px] text-[#2f6b12]">
                  <i className="size-1.5 rounded-full bg-[#5fb320]" />Tersedia hari ini
                </span>
              )}
              <div><Link href={`/booking?dokter=${d.slug}`} className="mt-4 inline-block rounded-md border border-blue px-4 py-2 text-[12px] font-semibold text-blue transition hover:bg-blue hover:text-white">Pilih Jadwal</Link></div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
