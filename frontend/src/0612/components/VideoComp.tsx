import { Card } from "flowbite-react";
import { Link } from "react-router-dom";


interface Props{
    Image:string;
    Title:string;
    link:string;
    Description:string
}

export const VideoComp = ({Image,Title,link,Description}:Props) => {
  return (
    <div className="max-w-sm h-sm">
  <Link to={link}>
  <Card  className="hover:translate-y-5">
    <img className="w-100 h-60" src={Image}/>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {Title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {Description}
    </p>
  </Card>
  </Link>
</div>
  );
};
