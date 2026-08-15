import API from "./api";

export const getEducation = async () => {
    const response = await API.get("education/");
    return response.data;
};