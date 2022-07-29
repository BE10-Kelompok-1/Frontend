import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MdAccountCircle } from "react-icons/md";
import { reduxAction } from "../../utils/redux/actions/action";
import { apiRequest } from "../../utils/apiRequest";

import Layout from "../../components/Layout";
import CardPost from "../../components/CardPost";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    apiRequest("users", "get")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        const { data } = err.response;
        if ([401, 403].includes(data.code)) {
          localStorage.removeItem("token");
          dispatch(reduxAction("IS_LOGGED_IN", false));
          navigate("/login");
        }
        alert(data.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <div className="flex flex-col h-min-screen w-full">
        <div className="flex py-4 text-center justify-center items-center">
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
        <div className="md:hidden px-6 py-4">
          <Link
            to={`/profile/1`}
            className="btn btn-block rounded-full bg-[#F3B405] dark:bg-[#2C3E50] text-white border-none font-bold text-lg"
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
      </div>
    </Layout>
  );
}
