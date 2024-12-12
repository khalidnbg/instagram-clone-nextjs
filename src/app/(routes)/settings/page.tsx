import { auth, signOut } from "@/auth";
import SettingsForm from "@/components/SettingsForm";
import { prisma } from "@/db";
import { Button } from "@radix-ui/themes";

export default async function page() {
  // Authenticate the user and get their session
  const session = await auth();

  // Check if the user is logged in by verifying their email
  if (!session?.user?.email) {
    return "not logged in";
  }

  // Fetch the user's profile from the database using their email
  const profile = await prisma.profile.findFirst({
    where: { email: session.user.email },
  });

  if (!profile) {
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile Settings</h1>

      <p className="text-gray-500 text-sm text-center -mt-4 mb-4">
        {session.user.email}
      </p>

      <SettingsForm profile={profile} />

      <div className="flex justify-center mt-4 pt-4 border-t border-gray-200">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit" variant="outline">
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
