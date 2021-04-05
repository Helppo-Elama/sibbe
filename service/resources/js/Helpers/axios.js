import axiosError from "./errors";

const axios = async (request) => {
	try {
		const response = await window.axios.get(request.url);
		return response.data;
	} catch (error) {
		axiosError(200, error);
		return false;
	}
};

const axiosPost = async (request) => {
	try {
		const response = await window.axios.post(request.url, request.json, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		axiosError(200, error);
		return false;
	}
};

const axiosDelete = async (request) => {
	try {
		const response = await window.axios.delete(
			request.url,
			{ data: { id: request.id } },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data;
	} catch (error) {
		axiosError(200, error);
		return false;
	}
};

export { axios, axiosPost, axiosDelete };
