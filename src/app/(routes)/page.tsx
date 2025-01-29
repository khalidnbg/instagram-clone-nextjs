import { auth, signIn, signOut } from "@/auth";
import HomeTopRow from "@/components/HomeTopRow";

export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      {session && (
        <div>
          <HomeTopRow />
        </div>
      )}

      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="border px-4 py-2 bg-ig-red text-white rounded-lg"
            type="submit"
          >
            Login with google
          </button>
        </form>
      )}
    </div>
  );
}
