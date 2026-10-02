import { Suspense } from "react";
import { PageHead } from "@/components/PageHead";
import { BookingForm } from "./BookingForm";

export const metadata = { title: "Booking Konsultasi · SKIN.LAB" };

export default function Page() {
  return (
    <>
      <PageHead eyebrow="Booking" title="Atur jadwal konsultasimu">Isi data singkat, tim kami akan konfirmasi jadwal lewat WhatsApp.</PageHead>
      <div className="px-5 py-10 lg:px-10">
        <Suspense><BookingForm /></Suspense>
      </div>
    </>
  );
}
