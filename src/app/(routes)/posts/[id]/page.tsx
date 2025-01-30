import { getSinglePostDate } from "@/actions";
import Preloader from "@/components/Prealoader";
import SinglePostContent from "@/components/SinglePostContent";
import { Suspense } from "react";

export default async function SinglePostPage({
  params,
}: {
  params: { id: string };
}) {
  const { post, authorProfile, comments, commentsAuthor, myLike, myBookmark } =
    await getSinglePostDate(params.id);

  return (
    <Suspense fallback={<Preloader />}>
      <SinglePostContent
        post={post}
        authorProfile={authorProfile}
        comments={comments}
        commentsAuthor={commentsAuthor}
        myLike={myLike}
        myBookmark={myBookmark}
      />
    </Suspense>
  );
}
