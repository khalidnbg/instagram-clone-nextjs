import Comment from "@/components/Comment";
import SessionCommentForm from "@/components/SessionCommentForm";
import { Suspense } from "react";
import { BookmarkIcon } from "lucide-react";
import LikesInfo from "@/components/LikesInfo";
import {
  Bookmark,
  Comment as CommentModal,
  Like,
  Post,
  Profile,
} from "@prisma/client";
import BookmarkButton from "./BookmarkButton";

export default async function SinglePostContent({
  post,
  authorProfile,
  comments,
  commentsAuthor,
  myLike,
  myBookmark,
}: {
  post: Post;
  authorProfile: Profile;
  comments: CommentModal[];
  commentsAuthor: Profile[];
  myLike: Like | null;
  myBookmark: Bookmark | null;
}) {
  // const data = getSinglePostDate(postId);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img src={post.image} alt={post.description} className="rounded-md" />
        </div>

        <div>
          <Comment
            createdAt={post.createdAt}
            text={post.description}
            authorProfile={authorProfile}
          />

          <div className="pt-4 flex flex-col gap-4">
            {comments.map((comment) => (
              <div key={comment.id}>
                <Comment
                  createdAt={comment.createdAt}
                  text={comment.text}
                  authorProfile={commentsAuthor.find(
                    (a) => a.email === comment.author
                  )}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 justify-between text-gray-700 py-4 border-t border-t-gray-300">
            <LikesInfo post={post} sessionLike={myLike} />

            <div className="flex items-center">
              <BookmarkButton post={post} sessionBookmark={myBookmark} />
            </div>
          </div>

          <div className="pt-8 border-t border-t-gray-500">
            <Suspense>
              <SessionCommentForm postId={post.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
