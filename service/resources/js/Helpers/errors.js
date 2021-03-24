const axiosError = (type, e) => {
	switch (type) {
		case 200: {
			console.log(`💔 Axios did not get 200. ${e}`);
			return { axiosError: 200 };
		}
		default:
			console.log(`💔 Axios: ${e}`);
			return { axiosError: `${e}` };
	}
};

export default axiosError;
