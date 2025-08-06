import Image from "next/image";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";

const posts = [
  {
    title: "Ein Yo'",
    image: "/img/user1.jpg",
    content: "One Bridge.",
  },
  {
    title: "The Wave, It Sets",
    image: "/img/user3.jpg",
    content: "Abstract Mix.",
  },
];

export default function Gallery() {
  return (
    <div>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-900">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
