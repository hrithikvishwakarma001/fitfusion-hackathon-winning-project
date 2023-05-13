import axios from "axios";

const BASEURL = "https://boiled-glorious-ox.glitch.me";
// https://boiled-glorious-ox.glitch.me
// bodypart, equipment, target, exercise
const cache = {};
export const getExercises = async () => {
	try {
		const response = await axios.request({
			method: "GET",
			url: `${BASEURL}/exercise`,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getBodyPartList = async () => {
	const url = `${BASEURL}/bodypart`;
	try {
		const response = await axios.request({
			method: "GET",
			url,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getLIstByBodyPart = async (bodyPart, page = 1) => {
	const url = `${BASEURL}/exercise?bodyPart=${bodyPart}`;
	try {
		const response = await axios.get(url, {
			params: { bodyPart}
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getEquipmentList = async () => {
	const url = `${BASEURL}/equipment`;

	try {
		const response = await axios.request({
			method: "GET",
			url,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListByEquipment = async (equipment) => {
	const url = `${BASEURL}/exercise?equipment=${equipment}`;
	if (cache[equipment]) {
		console.log("cache hit");
		return cache[equipment];
	}
	try {
		console.log("fetching.....");
		const response = await axios.request({
			method: "GET",
			url,
		});
		cache[equipment] = response.data;
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getMusculeTargetList = async () => {
	const url = `${BASEURL}/target`;
	try {
		const response = await axios.request({
			method: "GET",
			url,
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListByMusculeTarget = async (target) => {
	const url = `${BASEURL}/exercise?target=${target}`;
	if (cache[target]) {
		console.log("cache hit");
		return cache[target];
	}
	try {
		const response = await axios.request({
			method: "GET",
			url,
		});
		cache[target] = response.data;
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getListByName = async (name) => {
	const url = `${BASEURL}/exercise?name=${name}`;

	try {
		const response = await axios.request({
			method: "GET",
			url, // hammer,abs,chest
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
