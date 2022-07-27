import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";

export default function ProfileEdit() {
  const { user_id } = useParams();
  return (
    <Layout>
      <div>Edit Profile {user_id}</div>
    </Layout>
  );
}
