import { useNavigate, useParams } from "react-router-dom";

import { MdAccountCircle, MdPhotoCamera } from "react-icons/md";

import Layout from "../../../components/Layout";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const { user_id } = useParams();
  return (
    <Layout>
      <div className="w-full">
        <div className="min-h-screen flex flex-col justify-between items-center p-8">
          <div className="w-full flex justify-center">
            <div className="relative h-full">
              <MdAccountCircle size={200} />
              <MdPhotoCamera
                size={20}
                className="absolute w-14 h-14 bottom-0 right-0 bg-white dark:bg-black rounded-full p-1"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-sm md:text-lg">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input w-full bg-inherit border-b-2 border-black dark:border-white font-medium text-lg md:text-2xl"
              />
            </div>
            <div className="inline-flex">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-sm md:text-lg">
                    Firstname
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered w-full bg-inherit border-b-2 border-black dark:border-white font-medium text-lg md:text-2xl"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-sm md:text-lg">
                    Lastname
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered w-full bg-inherit border-b-2 border-black dark:border-white font-medium text-lg md:text-2xl"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-sm md:text-lg">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-inherit border-b-2 border-black dark:border-white font-medium text-lg md:text-2xl"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-sm md:text-lg">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-inherit border-b-2 border-black dark:border-white font-medium text-lg md:text-2xl"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-sm md:text-lg">
                  Birthdate
                </span>
              </label>
              <input
                type="number"
                placeholder="dd/mm/yyyy"
                className="input input-bordered w-full bg-inherit border-b-2 border-black dark:border-white font-medium text-lg md:text-2xl"
              />
            </div>
          </div>
          <div className="lg:my-8">
            <button
              type="button"
              className="btn btn-wide md:btn-lg rounded-full bg-[#F3B405] dark:bg-[#2C3E50] text-white border-none font-bold text-lg md:text-2xl"
              onClick={() => navigate(-1)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
