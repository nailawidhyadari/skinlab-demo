import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { treatments, rp } from "@/data";

export const metadata = { title: "Harga · SKIN.LAB" };

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Harga" title="Transparan dari awal">
        Harga per sesi sudah termasuk konsultasi dokter. Dokter akan menyampaikan jumlah sesi yang kamu butuhkan sebelum mulai.
      </PageHead>
      <div className="px-5 py-10 lg:px-10">
        <div className="overflow-x-auto rounded-2xl border border-black/10">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-mist text-[11px] uppercase tracking-wider">
              <tr><th className="p-4">Treatment</th><th className="hidden p-4 md:table-cell">Cocok untuk</th><th className="hidden p-4 md:table-cell">Durasi</th><th className="hidden p-4 md:table-cell">Downtime</th><th className="p-4">Harga</th><th /></tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {treatments.map((t) => (
                <tr key={t.slug}>
                  <td className="p-3 font-bold sm:p-4">{t.n}<span className="mt-0.5 block text-[12px] font-normal text-black/55 md:hidden">{t.dur} · downtime {t.t}</span></td>
                  <td className="hidden p-4 text-black/70 md:table-cell">{t.d}</td>
                  <td className="hidden p-4 md:table-cell">{t.dur}</td>
                  <td className="hidden p-4 md:table-cell">{t.t}</td>
                  <td className="whitespace-nowrap p-3 font-semibold sm:p-4">{rp(t.p)}</td>
                  <td className="whitespace-nowrap p-3 sm:p-4"><Link href={`/booking?treatment=${t.slug}`} className="font-semibold text-blue">Booking</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-2xl bg-blue p-6 text-white">
          <p className="text-[18px] font-extrabold">Konsultasi pertama gratis untuk analisis Skin Signal.</p>
          <p className="mt-1 text-[13px] text-white/80">Syarat: melanjutkan minimal satu treatment di hari yang sama. Harga bisa berubah, konfirmasi ke klinik.</p>
        </div>
      </div>
    </>
  );
}
