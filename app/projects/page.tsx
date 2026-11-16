import { redirect } from "next/navigation";

// Konten Projects sekarang ada di halaman utama.
export default function ProjectsPage() {
  redirect("/#projects");
}
