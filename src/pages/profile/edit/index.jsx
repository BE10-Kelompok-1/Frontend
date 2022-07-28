import { useNavigate,useParams } from "react-router-dom";

import { MdAccountCircle, MdPhotoCamera } from "react-icons/md";

import Layout from "../../../components/Layout";

export default function ProfileEdit() {
    const navigate = useNavigate();
  const { user_id } = useParams();
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-between items-center p-8">
        <div className="w-full flex justify-center">
          <div className="relative h-full">
            <MdAccountCircle size={200} />
            <MdPhotoCamera
              size={20}
              className="absolute w-14 h-14 bottom-0 right-0 bg-white rounded-full p-1"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input w-full bg-inherit border-b-2 border-black"
            />
          </div>
          <div className="inline-flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Firstname</span>
              </label>
              <input
                type="text"
                placeholder="Firstname"
                className="input input-bordered w-full bg-inherit border-b-2 border-black"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Lastname</span>
              </label>
              <input
                type="text"
                placeholder="Lastname"
                className="input input-bordered w-full bg-inherit border-b-2 border-black"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-inherit border-b-2 border-black"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-inherit border-b-2 border-black"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Birthdate</span>
            </label>
            <input
              type="number"
              placeholder="dd/mm/yyyy"
              className="input input-bordered w-full bg-inherit border-b-2 border-black"
            />
          </div>
        </div>
        <div className="lg:my-8">
          <button
            type="button"
            className="btn btn-wide rounded-full bg-[#F3B405] dark:bg-[#2C3E50] text-white border-none font-bold text-lg"
            onClick={() => navigate(-1)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
}
