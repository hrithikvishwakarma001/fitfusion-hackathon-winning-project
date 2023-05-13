import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

interface Props{
    Title:string;
    Desc:string;
    link:string
}

export const BlogComp = ({Title,Desc,link}:Props) => {
  return (
    <div className="max-w-sm hover:translate-y-5">
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {Title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {Desc}
    </p>
    <button className="border-2 rounded text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900"><Link to={link}>Read More</Link></button>
  </Card>
</div>
  )
}
