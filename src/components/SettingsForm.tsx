"use client";

import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SettingsForm({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: Profile;
}) {
  const router = useRouter();

  const fileInRef = useRef<HTMLInputElement>();
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set("file", file);

      fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {});
    }
  }, [file]);

  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data, userEmail);

        router.push("/profile");
        router.refresh();
      }}
    >
      <div className="flex gap-4 items-center">
        <div>
          <div className="bg-gray-400 size-24 rounded-full"></div>
        </div>

        <div>
          <input
            type="file"
            ref={fileInRef}
            className="hidden"
            onChange={(ev) => setFile(ev.target?.files?.[0])}
          />
          <Button
            type="button"
            variant="surface"
            onClick={() => fileInRef.current?.click()}
          >
            <CloudUploadIcon />
            Change avatar
          </Button>
        </div>
      </div>

      <p className="mt-2 font-bold">username</p>
      <TextField.Root
        name="username"
        defaultValue={profile.username || ""}
        placeholder="your_username"
      />

      <p className="mt-2 font-bold">name</p>
      <TextField.Root
        name="name"
        defaultValue={profile.name || ""}
        placeholder="nbg"
      />

      <p className="mt-2 font-bold">subtitle</p>
      <TextField.Root
        name="subtitle"
        defaultValue={profile.subtitle || ""}
        placeholder="web developer"
      />

      <p className="mt-2 font-bold">bio</p>
      <TextArea name="bio" defaultValue={profile.bio || ""} />

      <div className="mt-2 flex justify-center">
        <Button variant="solid">Save settings</Button>
      </div>
    </form>
  );
}