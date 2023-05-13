import React from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
return (
    <div className="px-5 py-2 bg-blue-200 ">
    <ul className="flex gap-10 justify-center ">
        <Link to="/">
            <li className="hover:bg-sky-700 py-1 px-3 rounded hover:text-white ">Video</li>
        </Link>
        <Link to="/blogs">
            <li className="hover:bg-sky-700 py-1 px-3 rounded hover:text-white">Blogs</li>
        </Link>
        <Link to="/articles">
            <li className="hover:bg-sky-700 py-1 px-3 rounded hover:text-white">Articles</li>
        </Link>
    </ul>
    </div>
);
};
