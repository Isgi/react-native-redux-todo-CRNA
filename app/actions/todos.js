const allTodos = () => {
  // data simulation
  const todos= [
    { name: 'Bambang', address: 'Ciwuni' },
    { name: 'Sudarno', address: 'Cilacap' }
  ];
  return {
    type: 'ALL_TODOS',
    payload: {
      todos: todos
    }
  }
}

export {
  allTodos
}