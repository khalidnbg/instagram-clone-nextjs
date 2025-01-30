import { Profile } from "@prisma/client";
import Avatar from "./Avatar";
import { format } from "date-fns";

export default function Comment({
  text,
  createdAt,
  authorProfile,
}: {
  text: string;
  createdAt: Date;
  authorProfile?: Profile;
}) {
  return (
    <div className="flex gap-2">
      <div>
        <Avatar src={authorProfile?.avatar || ""} />
      </div>

      <div className="">
        <div className="flex justify-between gap-2">
          <div>
            <h3 className="flex gap-1">{authorProfile?.name} </h3>
            <h4>
              <span className="text-gray-600 dark:text-gray-300 text-sm -mt-1">
                @{authorProfile?.username}
              </span>
            </h4>
          </div>
        </div>

        <div>
          <div className="bg-gray-200 rounded-md dark:bg-gray-700 dark:border-0 dark:text-gray-200 p-4 mt-2 border border-gray-300">
            <p>{text}</p>
          </div>

          <div className="text-xs to-gray-400 text-right">
            {format(createdAt, "yyyy-MM-dd HH:mm:ss")}
          </div>
        </div>
      </div>
    </div>
  );
}
