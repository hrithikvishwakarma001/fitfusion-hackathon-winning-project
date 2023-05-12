import { SET_AUTH } from "./actionType";

const initialState = {
	isAuth: false,
	user: {},
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_AUTH:
			return {
				...state,
				isAuth: true,
				user: payload,
			};
		default:
			return state;
	}
};
