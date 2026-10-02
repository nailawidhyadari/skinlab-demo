"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { branches, doctors, treatments } from "@/data";

const field = "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-3.5 py-3 text-[14px] outline-none focus:border-blue";

export function BookingForm() {
  const q = useSearchParams();
  const [sent, setSent] = useState<string | null>(null);

  if (sent)
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-black/10 p-8 text-center">
        <CheckCircle2 className="mx-auto text-blue" size={44} />
        <h2 className="mt-4 text-[22px] font-extrabold">Permintaan terkirim</h2>
        <p className="mt-2 text-[14px] text-black/65">Terima kasih, {sent}. Tim kami akan menghubungi lewat WhatsApp untuk konfirmasi jadwal. (Demo: data tidak dikirim ke mana pun.)</p>
      </div>
    );

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(String(new FormData(e.currentTarget).get("nama"))); }}
      className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2"
    >
      <label className="text-[13px] font-semibold">Nama<input name="nama" required className={field} /></label>
      <label className="text-[13px] font-semibold">No. WhatsApp<input name="wa" required inputMode="tel" className={field} /></label>
      <label className="text-[13px] font-semibold sm:col-span-2">Cabang
        <select name="cabang" defaultValue={q.get("cabang") ?? ""} className={field}>
          <option value="">Cabang terdekat yang tersedia</option>
          {branches.map((c) => <option key={c.slug} value={c.slug}>{c.n} · {c.area}</option>)}
        </select>
      </label>
      <label className="text-[13px] font-semibold">Treatment
        <select name="treatment" defaultValue={q.get("treatment") ?? ""} className={field}>
          <option value="">Belum tahu, konsultasi dulu</option>
          {treatments.map((t) => <option key={t.slug} value={t.slug}>{t.n}</option>)}
        </select>
      </label>
      <label className="text-[13px] font-semibold">Dokter
        <select name="dokter" defaultValue={q.get("dokter") ?? ""} className={field}>
          <option value="">Siapa saja yang tersedia</option>
          {doctors.map((d) => <option key={d.slug} value={d.slug}>{d.n}</option>)}
        </select>
      </label>
      <label className="text-[13px] font-semibold">Tanggal<input name="tanggal" type="date" required className={field} /></label>
      <label className="text-[13px] font-semibold">Jam
        <select name="jam" className={field}>{["09.00", "11.00", "13.00", "15.00", "17.00", "19.00"].map((j) => <option key={j}>{j}</option>)}</select>
      </label>
      <label className="text-[13px] font-semibold sm:col-span-2">Keluhan kulit (opsional)<textarea name="keluhan" rows={3} className={field} /></label>
      <button className="rounded-full bg-blue px-7 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-110 sm:col-span-2">Kirim permintaan</button>
    </form>
  );
}
