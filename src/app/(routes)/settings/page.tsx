import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon, UploadIcon } from "lucide-react";

export default function page() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile Settings</h1>
      <form action="">
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gray-400 size-24 rounded-full"></div>
          </div>

          <div>
            <Button variant="surface">
              <CloudUploadIcon />
              Change avatar
            </Button>
          </div>
        </div>
        <p className="mt-2 font-bold">username</p>
        <TextField.Root placeholder="your_username" />
        <p className="mt-2 font-bold">name</p>
        <TextField.Root placeholder="nbg" />
        <p className="mt-2 font-bold">subtitle</p>
        <TextField.Root placeholder="web developer" />
        <p className="mt-2 font-bold">bio</p>
        <TextArea />
        <div className="mt-2 flex justify-center">
          <Button variant="solid">Save settings</Button>
        </div>
      </form>
    </div>
  );
}
