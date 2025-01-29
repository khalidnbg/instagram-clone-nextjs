import { getSessionEmailOrThrow } from "@/actions";
import { prisma } from "@/db";
import { Follower, Profile } from "@prisma/client";
import { Avatar } from "@radix-ui/themes";
import { PlusIcon } from "lucide-react";

export default async function HomeTopRow({
  follows,
  profiles,
}: {
  follows: Follower[];
  profiles: Profile[];
}) {
  return (
    <div className="flex gap-3">
      <div>
        <button className="bg-gradient-to-tr from-ig-orange to-ig-red rounded-full size-[92px] text-white flex items-center justify-center">
          <PlusIcon size="42" />
        </button>
        <p className="text-center to-gray-400 text-sm">New Story</p>
      </div>

      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="w-24 flex justify-center flex-col items-center"
        >
          <div>
            <div className="inline-block bg-gradient-to-tr from-ig-orange to-ig-red rounded-full p-1.5">
              <div className="inline-block bg-white rounded-full p-0.5">
                <Avatar
                  size="6"
                  radius="full"
                  fallback="avatar"
                  src={profile.avatar || ""}
                />
              </div>
            </div>
          </div>

          <p className="text-center to-gray-400 text-sm">{profile.username}</p>
        </div>
      ))}
    </div>
  );
}
