const SERVER_IP = "apirestisma-2c6598226d63.herokuapp.com";

export const ENV = {
	BASE_PATH: `https://${SERVER_IP}`,
	BASE_IMG: `https://storage.googleapis.com/apirest-isma/`,
	BASE_API: `https://${SERVER_IP}/api/v1`,
	API_ROUTES: {
		REGISTER: "auth/register",
		LOGIN: "auth/login",
		USER_ME: "user/me",
		USER: "user",
		REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
		USERS: "users",
		MENU: "menu",
		COURSE: "courses",
		NEWSLETTER: "newsletter",
		POST: "post",
	},
	JWT: {
		ACCESS: "access",
		REFRESH: "refresh",
	},
};
