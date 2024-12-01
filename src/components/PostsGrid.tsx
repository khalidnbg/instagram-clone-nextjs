"use client";

import Masonry from "react-masonry-css";

const images = [
  "https://picsum.photos/id/32/1024/768",
  "https://picsum.photos/id/33/768/1024",

  "https://picsum.photos/id/34/1024/768",
  "https://picsum.photos/id/35/768/1024",

  "https://picsum.photos/id/36/1024/768",
  "https://picsum.photos/id/37/768/1024",

  "https://picsum.photos/id/38/1024/768",
  "https://picsum.photos/id/39/768/1024",

  "https://picsum.photos/id/40/1024/768",
  "https://picsum.photos/id/41/768/1024",

  "https://picsum.photos/id/42/1024/768",
  "https://picsum.photos/id/43/768/1024",
];

export default function PostsGrid() {
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
        {images.map((src, index) => (
          <div className="mb-4">
            <img src={src} alt="" key={index} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
