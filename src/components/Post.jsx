import { MdAccountCircle, MdModeEdit, MdComment } from "react-icons/md";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import InputComment from "./inputComment";
import Image from "../asset/loginpage-bg.jpeg"

export default function Post({
  id,
  profileimg,
  username,
  firstname,
  lastname,
  image,
  caption,
}) {
  return (
    <div className="min-h-16 bg-white dark:bg-[#2C3E50] p-3 shadow-md w-full mx-auto rounded-2xl shadow-md mb-10 sm:w-11/12">
      <div className="flex justify-between">
        <div className="flex">
          {profileimg !== undefined ? (
            profileimg
          ) : (
            <MdAccountCircle size={50} />
          )}
          <div className="flex flex-col">
            <span>{`${firstname} ${lastname}`}</span>
            <span>{`@${username}`}</span>
          </div>
        </div>
      </div>
      <div className="my-3">
        <p className="text-lg">{caption}</p>
        <img className="object-fill" src={Image} alt="" />
      </div>
      <div className="flex justify-between mt-2">
        <span></span>
        <span className="text-sm">
          <MdComment className="inline-block" /> Comment
        </span>
      </div>
      <Comment />

      <InputComment />
    </div>
  );
}
