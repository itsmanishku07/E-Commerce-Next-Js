import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-black flex justify-center items-center h-screen text-3xl font-serif border-double border-4 border-sky-500 ...">
        <Link href="/fatchapi">
          <div class="border-double border-4 border-sky-500 p-5 bg-yellow-600 font-bold">
            Start Shopping
          </div>
        </Link>
      </div>
    </div>
  );
}
