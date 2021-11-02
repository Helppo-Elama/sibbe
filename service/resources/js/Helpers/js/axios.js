import axiosError from "./errors"

export const axios = async (url) => {
	try {
		const response = await window.axios.get(url)
		return response.data
	} catch (error) {
		axiosError(200, error)
		return false
	}
}

export const axiosPost = async (request) => {
	try {
		const response = await window.axios.post(request.url, request.json, {
			headers: {
				"Content-Type": "application/json"
			}
		})
		return response.data
	} catch (error) {
		axiosError(200, error)
		return false
	}
}

export const axiosDelete = async (request) => {
	try {
		let response
		if (Object.prototype.hasOwnProperty.call(request, "id")) {
			response = await window.axios.delete(
				request.url,
				{ data: { id: request.id } },
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
		}
		if (Object.prototype.hasOwnProperty.call(request, "json")) {
			response = await window.axios.delete(request.url, {
				data: request.json,
				headers: {
					"Content-Type": "application/json"
				}
			})
		}
		if (!response) throw new Error("❌ Cannot delete. No id, json, type or date")
		return response.data
	} catch (error) {
		axiosError(200, error)
		return false
	}
}
