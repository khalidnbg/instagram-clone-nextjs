"use client";

import { followProfile, unFollowProfile } from "@/actions";
import { Follower } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import { UserMinusIcon, UserPlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FollowButton({
  profileIdToFollow,
  ourFollow = null,
}: {
  profileIdToFollow: string;
  ourFollow: Follower | null;
}) {
  const [isFollowed, setIsFollowed] = useState<boolean>(!!ourFollow);
  const router = useRouter();

  return (
    <form
      action={async () => {
        setIsFollowed((prev) => !prev);

        if (isFollowed) {
          // unfollow
          await unFollowProfile(profileIdToFollow);
        } else {
          await followProfile(profileIdToFollow);
        }
        router.refresh();
      }}
    >
      <Button
        size="3"
        className="bg-gradient-to-tr from-ig-orange to-ig-red to-80%"
      >
        {isFollowed ? <UserMinusIcon /> : <UserPlusIcon />}
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </form>
  );
}
