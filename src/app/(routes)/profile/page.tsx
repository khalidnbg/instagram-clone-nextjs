import { auth } from "@/auth";
import PostsGrid from "@/components/PostsGrid";
import ProfilePosts from "@/components/ProfilePosts";
import { prisma } from "@/db";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function ProfilePage() {
  const session = await auth();

  const profile = await prisma.profile.findFirst({
    where: { email: session?.user?.email as string },
  });

  if (!profile) {
    return redirect("/settings");
  }

  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ChevronLeft />
        </button>

        <div className="font-bold flex items-center gap-2">
          {profile.username}
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />
          </div>
        </div>

        <Link href={"/settings"}>
          <CogIcon />
        </Link>
      </section>

      <section className="mt-8 flex justify-center">
        <div className="size-48 bg-gradient-to-tr from-ig-orange to-ig-red rounded-full p-2">
          <div className="size-44 bg-white rounded-full p-2">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img src={profile.avatar || ""} alt="" className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p className="text-gray-500 mt-1 mb-1">{profile.subtitle}</p>
        <p>
          {profile.bio}
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
        <Suspense fallback="Loading...">
          <ProfilePosts email={profile.email} />
        </Suspense>
      </section>
    </main>
  );
}
