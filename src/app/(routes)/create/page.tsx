"use client";

import { postEntry } from "@/actions";
import { Button, TextArea } from "@radix-ui/themes";
import { CloudUploadIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CreatePage() {
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const fileInRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set("file", file);
      fetch("api/upload", {
        method: "POST",
        body: data,
      }).then((response) =>
        response.json().then((url) => {
          setImageUrl(url);
        })
      );
    }
  }, [file]);

  return (
    <form
      className="max-w-md mx-auto"
      action={async (data) => {
        const id = await postEntry(data);
        router.push(`/post/${id}`);
        router.refresh();
      }}
    >
      <input type="hidden" name="image" value={imageUrl} />
      <div className="flex flex-col gap-4">
        <div>
          {/* {JSON.stringify(imageUrl)} */}
          <div className="min-h-64 bg-gray-400 p-2 rounded-md relative">
            {imageUrl && <img src={imageUrl} className="rounded-md" />}

            <div className="absolute inset-0 flex items-center justify-center">
              <input
                type="file"
                ref={fileInRef}
                className="hidden"
                onChange={(ev) => setFile(ev.target.files?.[0] || null)}
              />
              <Button
                variant="surface"
                type="button"
                onClick={() => fileInRef?.current?.click()}
              >
                Choose Image
                <CloudUploadIcon size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <TextArea
            name="description"
            placeholder="add photo desc"
            className="h-16"
          />
        </div>
      </div>

      <div className="flex mt-4 justify-center">
        <Button>
          <SendIcon size={16} /> Publish
        </Button>
      </div>
    </form>
  );
}
