import { Session } from "next-auth";
import HomeTopRow from "./HomeTopRow";
import { prisma } from "@/db";
import { getSessionEmailOrThrow } from "@/actions";

export default async function UserHome({ session }: { session: Session }) {
  const follows = await prisma.follower.findMany({
    where: {
      followingProfileEmail: (await getSessionEmailOrThrow()) || "",
    },
  });

  const profiles = await prisma.profile.findMany({
    where: {
      id: { in: follows.map((f) => f.followedProfileId) },
    },
  });

  return (
    <div>
      <HomeTopRow follows={follows} profiles={profiles} />
      posts
    </div>
  );
}
