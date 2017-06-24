module.exports = (app) => {
    let todoList = require('../controllers/todoListController');

    // routes 
    app.route('/tasks')
        .post(todoList.createTask)
        .get(todoList.listAllTasks);
    
    app.route('/tasks/:id')
        .get(todoList.readTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask)
};