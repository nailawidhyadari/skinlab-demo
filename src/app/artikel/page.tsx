import { PageHead } from "@/components/PageHead";
import { articles } from "@/data";

export const metadata = { title: "Artikel · SKIN.LAB" };

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Artikel" title="Belajar baca kulitmu">Panduan singkat dari dokter kami, tanpa jargon berlebihan.</PageHead>
      <ul className="grid gap-5 px-5 py-10 sm:grid-cols-2 lg:px-10">
        {articles.map((a) => (
          <li key={a.slug} className="rounded-2xl border border-black/10 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue">{a.c} · {a.m} baca</p>
            <h2 className="mt-2 text-[20px] font-extrabold leading-snug">{a.t}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-black/65">{a.d}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
