import { Link } from "react-router-dom";

export const ContactNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Contact Not Found</h1>
      <Link to={"/contacts"}>Go to Contact</Link>
    </div>
  );
};
