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

const getMembersList = async (params) => {
  const url = getUrl("/api/member/all", params);
  try {
    const response = await fetch(url);
    return await setResponse(response);
  } catch (e) {
    return getConnectionRefused(e);
  }
}

const getRoleList = async (params) => {
  const url = getUrl("/api/role", params);
  try {
    const response = await fetch(url);
    return await setResponse(response);
  } catch (e) {
    return getConnectionRefused(e);
  }
}

const getResponsibilityList = async (params) => {
  const url = getUrl("/api/responsibility", params);
  try {
    const response = await fetch(url);
    return await setResponse(response);
  } catch (e) {
    return getConnectionRefused(e);
  }
}

const createProject = async (body) => {
  const url = getUrl("/api/group/add");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await setResponse(response);
  } catch (e) {
    return getConnectionRefused(e);
  }
}

export const api = {
  getProjectList,
  getMembersList,
  getResponsibilityList,
  getRoleList,
  createProject,
}