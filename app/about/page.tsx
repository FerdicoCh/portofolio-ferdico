import { redirect } from "next/navigation";

// Konten About sekarang ada di halaman utama.
export default function AboutPage() {
  redirect("/#about");
}
