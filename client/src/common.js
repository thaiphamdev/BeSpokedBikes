const HOST = "http://localhost:8080";

const errorObj = {
    status: false,
    message: "Something went wrong...",
}

export const getAPI = async (endPoint, extraOptions) => {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        ...extraOptions
    }
    const url = `${HOST}/${endPoint}`;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return errorObj;
        }
        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        return errorObj;
    }
}

export const putAPI = async (endPoint, payload, extraOptions) => {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        ...extraOptions
    }
    const url = `${HOST}/${endPoint}/${payload?.id}`;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return errorObj;
        }
        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        return errorObj;
    }
}