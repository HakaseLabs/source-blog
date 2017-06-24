const mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

// export from the route
exports.listAllTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err)
            res.send(err);
        
        res.json(task);
    });
};

// create a task

exports.createTask = (req, res) => {
    let newTask = new Task(req.body);
    newTask.save( (err, task) => {
        if (err)
            res.send(err);
        
        res.json(task);
    });
};

// read a single task 

exports.readTask = (req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if (err)
            res.send(err);

        res.json(task);
    });
};

// update a particular task 

exports.updateTask = (req, res) => {
  Task.findOneAndUpdate(req.params.id, req.body, { new: true }, (err, task) => {
    if (err) 
        res.send(err);

    res.json(task);
  });
};

// delete a single task 

exports.deleteTask = (req, res) => {
    Task.remove({
        _id: req.params.id
    }, (err, task) => {
        if (err)
            res.send(err);
        res.json({ message: 'Task deleted!!' });
    });
};