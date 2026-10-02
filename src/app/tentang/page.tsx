import Image from "next/image";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";

export const metadata = { title: "Tentang Kami · SKIN.LAB" };

const vals = [
  ["Berbasis data", "Setiap rencana perawatan dimulai dari analisis kulit, bukan tebakan."],
  ["Personal", "Kulit tiap orang punya cerita sendiri, jadi tidak ada paket yang dipaksakan."],
  ["Aman & transparan", "Dokter menjelaskan prosedur, biaya, dan risikonya sebelum kamu setuju."],
];

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Tentang Kami" title="Sains untuk kulit nyata Indonesia">
        SKIN.LAB berdiri dengan satu keyakinan: perawatan kulit terbaik dimulai dengan membaca sinyal kulitmu.
      </PageHead>
      <section className="grid gap-8 px-5 py-10 md:grid-cols-2 lg:px-10">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-blue">
          <Image src="/img/lobby-v2.jpg" alt="Klinik SKIN.LAB" fill sizes="600px" className="object-cover" />
        </div>
        <ul className="space-y-4">
          {vals.map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-black/10 p-5">
              <h2 className="text-[17px] font-extrabold">{t}</h2>
              <p className="mt-1 text-[14px] text-black/65">{d}</p>
            </li>
          ))}
          <li><Link href="/booking" className="inline-block rounded-full bg-blue px-6 py-3 text-[13px] font-semibold text-white">Booking Konsultasi</Link></li>
        </ul>
      </section>
    </>
  );
}
