import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Banner from '@/components/Banner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CategoriesBlog from '@/components/blog/CategoriesBlog';

const Blog = () => {
  const postsDirectory = path.join(process.cwd(), 'app/posts');

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: fileName.replace('.md', ''),
      ...data,
    };
  });

  return (
    <section>
      <Banner
        title="Blog"
        description="Descubra artigos e estratégias focadas em nutrição e bem-estar para empresas, com soluções práticas para melhorar a saúde e a produtividade no ambiente corporativo."
      />
      <CategoriesBlog />
      <div className="container mx-auto px-16 pt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {posts.map((post, index) => (
            <div key={index}>
              <Image
                src={`/assets/home/banner-bg-home-edvania-soares.png`}
                alt={post.title}
                priority
                quality={100}
                width={512}
                height={512}
                className="w-full rounded-[4px] object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-title">{post.title}</h2>
              <p className="py-4 text-justify pr-8">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
              >
                <Button>Leia mais...</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;