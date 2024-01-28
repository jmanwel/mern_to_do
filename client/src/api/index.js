import axios from "axios";

const url = "http://132.226.242.181:5000/todos";


export const readTodos = ()=> axios.get(url);
export const createTodo = newTodo => axios.post(url, newTodo);