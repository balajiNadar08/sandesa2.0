
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-5 py-24"
      style={{ backgroundImage: "url('/background/grainy-bg.png')" }}
    >
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-8 text-center">
        <p className="text-2xl font-medium leading-relaxed tracking-wide text-white sm:text-3xl md:text-4xl">
          Select news, edit, post.
        </p>

        <Link
          href="/news"
          className="inline-flex rounded-full items-center justify-center border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-md transition duration-300 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-10 sm:py-4 sm:text-lg"
        >
          Select News
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full items-center justify-center gap-3 border border-white/30 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8 sm:py-4 sm:text-xl"
        >
          Sandesa
          <FaInstagram aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}
