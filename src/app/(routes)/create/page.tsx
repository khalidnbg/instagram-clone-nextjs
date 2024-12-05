"use client";

import { Button, TextArea } from "@radix-ui/themes";
import { CloudUploadIcon, SendIcon } from "lucide-react";
import { useState } from "react";

export default function CreatePage() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div>
      <div className="flex gap-4">
        <div>
          {!imageUrl && (
            <div className="size-64 bg-gray-400 rounded-md flex justify-center items-center">
              <Button variant="surface" className="">
                Choose Image
                <CloudUploadIcon size={16} />
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <TextArea placeholder="add photo desc" className="h-24" />
        </div>
      </div>

      <div className="flex mt-4 justify-center">
        <Button>
          <SendIcon size={16} /> Publish
        </Button>
      </div>
    </div>
  );
}
