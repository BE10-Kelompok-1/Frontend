import { MdAccountCircle, MdModeEdit, MdComment } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CardPost({
  id,
  profileimg,
  username,
  firstname,
  lastname,
  image,
  caption,
}) {
  return (
    <div className="w-full min-h-16 bg-white dark:bg-[#2C3E50] p-3">
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
        <Link to={``}>
          <MdModeEdit />
        </Link>
      </div>
      <div className="my-3">
        <p className="text-lg">{caption}</p>
      </div>
      <div className="flex justify-between mt-2">
        <span></span>
        <span className="text-sm">
          <MdComment className="inline-block" /> Comment
        </span>
      </div>
    </div>
  );
}
