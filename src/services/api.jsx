import axios from "axios";

const API = axios.create({ baseURL: "https://personal-note-manager-backend-2.onrender.com" });

export const fetchNotes = (filters) => API.get("/notes", { params: filters });
export const createNote = (note) => API.post("/notes", note);
export const updateNote = (id, note) => API.put(`/notes/${id}`, note);
export const deleteNote = (id) => API.delete(`/notes/${id}`);