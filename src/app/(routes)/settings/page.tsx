import { auth } from "@/auth";
import SettingsForm from "@/components/SettingsForm";
import { prisma } from "@/db";

export default async function page() {
  const session = await auth();

  if (!session?.user?.email) {
    return "not logged in";
  }

  const profile = await prisma.profile.findFirstOrThrow({
    where: { email: session.user.email },
  });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile Settings</h1>

      <SettingsForm profile={profile} userEmail={session?.user?.email} />
    </div>
  );
}
