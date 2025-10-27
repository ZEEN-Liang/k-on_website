import { useEffect, useState } from 'react';

export default function Post({ slug }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) {
          throw new Error('Post not found');
        }
        const data = await res.json();
        setContent(data.content);
      } catch (err) {
        setError('文章未找到');
      }
    }

    fetchPost();
  }, [slug]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
