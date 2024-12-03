import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-7xl">Home Page</h1>
      <button>
        <Link className="bg-zinc-50 text-black p-3 text-2xl rounded-lg hover:text-white hover:bg-zinc-600 ease-in-out 3s" href={'/electronics'}>
          Electronics
        </Link>
      </button>
    </div>
  );
}