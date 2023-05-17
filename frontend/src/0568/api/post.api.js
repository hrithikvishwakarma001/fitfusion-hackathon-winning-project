import axios from 'axios';
import { BASEURL } from '../../utils';

export const getPosts = () => axios.get(`${BASEURL}/posts/getallpost`);
export const createPost = (newPost) => axios.post(`${BASEURL}/posts/addpost`, newPost);
export const createComment = (comment) => axios.post(`${BASEURL}/posts/comment`, comment);
export const deletePost = (id) => axios.delete(`${BASEURL}/posts/deletepost/${id}`);