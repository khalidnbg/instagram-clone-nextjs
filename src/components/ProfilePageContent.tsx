import ProfilePosts from "@/components/ProfilePosts";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { Follower, Profile } from "@prisma/client";
import FollowButton from "./FollowButton";

export default function ProfilePageContent({
  profile,
  isOurProfile = false,
  ourFollow = null,
}: {
  profile: Profile;
  isOurProfile?: boolean;
  ourFollow?: Follower | null;
}) {
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

        <div>
          {isOurProfile && (
            <Link href={"/settings"}>
              <CogIcon />
            </Link>
          )}
        </div>
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
        <p>{profile.bio}</p>
      </section>

      {!isOurProfile && (
        <section className="flex justify-center my-4">
          <FollowButton ourFollow={ourFollow} profileIdToFollow={profile.id} />
        </section>
      )}

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
