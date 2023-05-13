import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

interface Props{
    Title:string;
    link:string
}

export const ArticleComp = ({Title,link}:Props) => {
  return (
    <div className="max-w-sm">
  <Card className="text-center">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {Title}
    </h5>
    <button className="border-2 rounded text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900"><Link to={link}>Read More</Link></button>
  </Card>
</div>
  )
}
