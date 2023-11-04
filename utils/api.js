import { getConnectionRefused, getUrl, setResponse } from "@/utils";



const getProjectList = async (params) => {
  const url = getUrl("/api/group/all", params);
  try {
    const response = await fetch(url);
    return await setResponse(response);
  } catch (e) {
    return getConnectionRefused(e);
  }
}

export const api = {
  getProjectList,
}