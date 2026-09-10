import Link from "next/link";
import { BRAND } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <p className="font-display text-7xl font-semibold text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-2 text-mist">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-accent mt-8">
        Back to Home
      </Link>
    </div>
  );
}
