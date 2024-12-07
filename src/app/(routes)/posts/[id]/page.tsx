import Avatar from "@/components/Avatar";
import CommentForm from "@/components/CommentForm";
import { prisma } from "@/db";
import { Suspense } from "react";

export default async function SinglePostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findFirstOrThrow({ where: { id: params.id } });
  const authorProfile = await prisma.profile.findFirstOrThrow({
    where: { email: post.author },
  });

  return (
    <div>
      {/* {params.id} */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img src={post.image} alt={post.description} className="rounded-md" />
        </div>

        <div>
          <div className="flex gap-2">
            <div>
              <Avatar src={authorProfile.avatar || ""} />
            </div>

            <div>
              <h3 className="flex gap-1">{authorProfile.name} </h3>
              <h4>
                <span className="text-gray-600 text-sm -mt-1">
                  @{authorProfile.username}
                </span>
              </h4>
              <div className="bg-gray-200 rounded-md p-4 mt-2 border border-gray-300">
                <p>{post.description}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t mt-8 border-t-gray-500">
            <Suspense>
              <CommentForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
