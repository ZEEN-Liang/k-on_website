import { MongoClient } from 'mongodb';

export async function getServerSideProps({ params }) {
  const { id } = params;
  
  const client = await MongoClient.connect('mongodb+srv://zeenliang:pipi2006@cluster0.hrjd4wv.mongodb.net/?appName=Cluster0');
  const db = client.db();
  const postsCollection = db.collection('posts');
  
  const post = await postsCollection.findOne({ _id: new ObjectId(id) });
  
  client.close();

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}

export default function Post({ post }) {
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
