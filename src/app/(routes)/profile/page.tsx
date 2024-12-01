import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>

        <div className="font-bold flex items-center gap-2">
          nbg{" "}
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />
          </div>
        </div>

        <button>
          <CogIcon />
        </button>
      </section>

      <section className="mt-8 flex justify-center">
        <div className="size-48 bg-gradient-to-tr from-ig-orange to-ig-red rounded-full p-2">
          <div className="size-44 bg-white rounded-full p-2">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">Johny</h1>
        <p className="text-gray-500 mt-1 mb-1">Business account</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, eius!{" "}
          <br />
          Contact: nbg@gmail.com
        </p>
      </section>

      <section className="mt-4">
        <div className="flex justify-center gap-4 font-bold">
          <Link href={""}>Posts</Link>
          <Link href={"/highlights"} className="text-gray-500">
            Highlights
          </Link>
        </div>
      </section>

      <section className="mt-4">
        <PostsGrid />
      </section>
    </main>
  );
}
