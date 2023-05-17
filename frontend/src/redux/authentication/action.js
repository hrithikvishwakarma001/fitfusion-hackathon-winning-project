import axios from "axios";
import { SET_AUTH } from "./actionType";
import { BASEURL } from "../../utils";
import {toast} from "react-toastify";
export const getLogin = (params) => async (dispatch) => {
	try {
		const { data } = await axios.get(`${BASEURL}/getuser`, params);
		dispatch({ type: SET_AUTH, payload: data });
		console.log("👻 -> file: action.js:9 -> getLogin -> data:", data);
		// if (data.img) {
		// 	toast.success("Login Successful");
		// 	// alert("Login Successful");
		// } else {
		// 	toast.error("Login Failed");
		// 	// alert("Login Failed");
		// }
	} catch (err) {
		console.log("👻 -> file: action.js:9 -> getLogin -> err", err);
		toast.error("Login Failed");
		// alert("Login Failed");
		return err.message;
	}
};
