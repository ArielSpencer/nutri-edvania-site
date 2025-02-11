"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const lastestBlogPosts = [
    {
      image: "/assets/blog/frutas-e-vitaminas.jpg",
      category: "Saúde",
      title: "Frutas e Vitaminas",
      description: "Descubra como aliar as vitaminas a sua rotina.",
      urlPost: "/",
    },
    {
      image: "/assets/blog/pratos-nutritivos.jpg",
      category: "Receitas",
      title: "Café da Manhã",
      description: "3 Receitas para acompanhar sue café.",
      urlPost: "/",
    },
  ];

  return (
    <section className="bg-background text-primary text-writing flex flex-col justify-center items-center py-16 gap-12">
      <div className="container w-[50vw] text-center mx-auto">
        <h2 className="text-xl text-secondary uppercase mb-4">Últimos Posts do Blog</h2>
        <p className="text-2xl font-bold text-title">
          Dicas e informações úteis para cuidar da sua saúde e bem-estar.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 w-[90vw] md:w-[60vw]">
        {lastestBlogPosts.map((post, index) => (
          <Link
            key={index}
            href={post.urlPost}
            className="relative flex flex-col items-center text-center hover:cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.title}
              quality={85}
              width={384}
              height={384}
              className="rounded-[64px_4px] w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start pb-4 bg-black bg-opacity-40 hover:bg-opacity-30 px-4 rounded-[64px_4px]">
              <p className="bg-background-highlight rounded-[16px_4px] px-2 mb-2">
                {post.category}
              </p>
              <h3 className="text-2xl font-bold text-primary">{post.title}</h3>
              <p className="text-primary font-semibold mb-4 line-clamp-2">
                {post.description}
              </p>
              <HiArrowUpRight className="text-2xl text-primary mb-2" />
            </div>
          </Link>
        ))}
      </div>

      <Link href="/">
        <Button variant="secundary">Confira todos os posts</Button>
      </Link>
    </section>
  );
};

export default BlogSection;