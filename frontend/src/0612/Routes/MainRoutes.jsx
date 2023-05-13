import { Route, Routes } from "react-router-dom"
import { Video } from "../pages/Video"
import { Blogs } from "../pages/Blogs"
import { Articles } from "../pages/Article"

export const MainRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Video/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/articles" element={<Articles/>}></Route>
    </Routes>
  )
}
