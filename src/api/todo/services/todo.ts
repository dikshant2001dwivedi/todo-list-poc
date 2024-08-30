import axios from "axios";

const todoService = {
  async fetchTodosFromAPI() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch To-Dos from API");
    }
  },
};

export default todoService;
