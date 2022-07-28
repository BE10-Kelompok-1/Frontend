import { Link } from "react-router-dom";

import { MdAccountCircle } from "react-icons/md";

import Layout from "../../components/Layout";
import CardPost from "../../components/CardPost";

export default function Profile() {
  return (
    <Layout>
      <div className="flex py-4 h-auto text-center justify-center items-center">
        <MdAccountCircle size={100} />
        <div className="flex flex-col px-8 text-lg">
          <h1 className="font-bold">Fullname</h1>
          <h1 className="font-medium">Username</h1>
          <Link
            to={`/profile/1`}
            type="button"
            className="hidden md:flex btn btn-wide rounded-full bg-[#F3B405] dark:bg-[#2C3E50] text-white border-none font-bold text-lg items-center"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <Link
          to={`/profile/1`}
          className="md:hidden btn btn-block rounded-full bg-[#F3B405] dark:bg-[#2C3E50] text-white border-none font-bold text-lg"
        >
          Edit Profile
        </Link>
      </div>
      <div className="divide-y">
        <CardPost
          id={1}
          firstname="Jack"
          lastname="Sparrow"
          username="Jack.Sparrow"
          caption="Nice weather!"
        />
        <CardPost
          id={2}
          firstname="Jack"
          lastname="Sparrow"
          username="Jack.Sparrow"
          caption="Need more coffee..."
        />
      </div>
    </Layout>
  );
}
