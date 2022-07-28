import Layout from "../components/Layout";
import InputPost from "../components/InputPost";
import Post from "../components/Post";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <InputPost />
        <Post />
      </div>
    </Layout>
  );
}
