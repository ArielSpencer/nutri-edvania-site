import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Banner from '@/components/Banner';

const postsDirectory = path.join(process.cwd(), 'app/posts');

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace('.md', ''),
  }));
}

async function getPostData(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return { data, content };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  if (!slug) {
    return <p>404: página não encontrada.</p>;
  }

  const post = await getPostData(slug);

  if (!post) {
    return <p>404: post não encontrado.</p>;
  }

  const { data, content } = post;

  return (
    <section>
      <Banner
        title={data.title}
        description={data.date}
      />

      <article className="container py-20 prose prose-lg max-w-[80vw]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </section>
  );
}