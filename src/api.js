import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: 'https://judge0-ce.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'x-rapidapi-key': 'e34688be40msh5d1796b1b014966p19ab4bjsn6d6160f8aaa0',
    'Content-Type': 'application/json',
  }
});

export const executeCode = async (language, sourceCode) => {
  try {
    const submissionResponse = await API.post("/submissions", {
      source_code: sourceCode,
      language_id: LANGUAGE_VERSIONS[language].id,
      wait: true,
    });

    const { token } = submissionResponse.data;

    const resultResponse = await API.get(`/submissions/${token}`);

    return resultResponse.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};
