export default {
  routes: [
    // {
    //  method: 'GET',
    //  path: '/todo',
    //  handler: 'todo.exampleAction',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    // },
    {
      method: "GET",
      path: "/todo",
      handler: "todo.fetchTodos",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
