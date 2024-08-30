import todoService from "../services/todo";
/**
 * A set of functions called "actions" for `todo`
 */

export default {
  fetchTodos: async (ctx, next) => {
    try {
      const todos = await todoService.fetchTodosFromAPI();
      ctx.send(todos);
    } catch (error) {
      ctx.throw(500, "Failed to fetch To-Do list");
    }
  },
};
