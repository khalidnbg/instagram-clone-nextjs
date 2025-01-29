"use client";

import { Post } from "@prisma/client";
import Link from "next/link";
import Masonry from "react-masonry-css";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Masonry
        breakpointCols={{
          default: 4,
          860: 3,
          500: 2,
        }}
        className="flex -ml-4"
        columnClassName="pl-4"
      >
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} className="block mb-4">
            <img className="rounded-lg" src={post.image} alt="" />
          </Link>
        ))}
      </Masonry>
    </div>
  );
}
