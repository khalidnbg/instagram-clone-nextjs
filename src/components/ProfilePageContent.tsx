import ProfilePosts from "@/components/ProfilePosts";
import { Suspense } from "react";

import { Follower, Profile } from "@prisma/client";
import ProfilePageInfo from "./ProfilePageInfo";
import ProfileNav from "./ProfileNav";

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
      <ProfilePageInfo
        profile={profile}
        isOurProfile={isOurProfile}
        ourFollow={ourFollow}
      />

      <ProfileNav
        isOurProfile={isOurProfile}
        username={profile.username || ""}
      />

      <section className="mt-4">
        <Suspense fallback="Loading...">
          <ProfilePosts email={profile.email} />
        </Suspense>
      </section>
    </main>
  );
}
