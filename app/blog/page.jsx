import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Banner from '@/components/Banner';
import { Button } from '@/components/ui/button';

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
        description="Lorem ipsum dolor sit amet as, Imperdiet convallis aenean vehicula, turpis adipiscing maximus varius ante."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-16">
          {posts.map((post, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="mb-4">{post.excerpt}</p>
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