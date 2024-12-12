"use client";

import { updateProfile } from "@/actions";
import { Profile } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SettingsForm({
  profile,
}: {
  profile?: Profile | null;
}) {
  const router = useRouter();

  const fileInRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar || null);

  // Effect to upload the file when selected
  useEffect(() => {
    if (file) {
      const data = new FormData(); // Create a FormData object for file upload
      data.set("file", file); // Append the file to the FormData

      // Send a POST request to upload the file
      fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        response.json().then((url) => {
          setAvatarUrl(url); // Update the avatar URL with the response
        });
      });
    }
  }, [file]);

  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data); // Call the updateProfile action

        router.push("/profile"); // Redirect to the profile page
        router.refresh();
      }}
    >
      <input type="hidden" name="avatar" value={avatarUrl || ""} />
      <div className="flex gap-4 items-center">
        <div>
          <div className="bg-gray-400 rounded-full overflow-hidden border border-gray-400 shadow-md shadow-gray-200 aspect-square">
            <img src={avatarUrl || ""} alt="" />
          </div>
        </div>

        <div>
          <input
            type="file"
            ref={fileInRef} // Attach the file input reference
            className="hidden"
            onChange={(ev) => setFile(ev.target?.files?.[0] || null)}
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
        defaultValue={profile?.username || ""}
        placeholder="your_username"
      />

      <p className="mt-2 font-bold">name</p>
      <TextField.Root
        name="name"
        defaultValue={profile?.name || ""}
        placeholder="nbg"
      />

      <p className="mt-2 font-bold">subtitle</p>
      <TextField.Root
        name="subtitle"
        defaultValue={profile?.subtitle || ""}
        placeholder="web developer"
      />

      <p className="mt-2 font-bold">bio</p>
      <TextArea name="bio" defaultValue={profile?.bio || ""} />

      <div className="mt-2 flex justify-center">
        <Button variant="solid">Save settings</Button>
      </div>
    </form>
  );
}
