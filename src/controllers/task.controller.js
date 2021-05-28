import Task from '../models/Task'
import {getPagination} from '../libs/getPagination'

export const findAllTasks = async (req, res) => {
    try {
        const {size,page} = req.query
        getPagination(page,size)
        const tasks = await Task.paginate({},{offset,limit})
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal mientras se regresaban las tareas" || error.message,
        });
    }

}

export const createTask = async (req, res) => {

    if (!req.params.title) {
        return res.status(400).send({ message: 'Contenido requirido' })
    }
    try {
        const newTasks = new Task({
            title: req.body.title,
            descripcion: req.body.descripcion,
            done: req.body.done ? req.body.done : false
        })
        const taskSaved = await newTasks.save();
        console.log(newTasks);
        res.json(taskSaved);
    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal mientras se creaba la tarea" || error.message,
        });
    }

}

export const findAllDoneTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ done: true });
        res.json(tasks);

    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal mientras se buscaba las tarea Listas   " || error.message,
        });
    }

}

export const findOneTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task)
            return res.status(4004).json({
                message: 'Task con Id ${id} no existe'
            });

        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal mientras se buscaba la tarea " || error.message,
        });
    }

}

export const deleteTasks = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json(
            {
                message: "Tasks were deleted successfully"
            }
        );
    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal mientras se eliminaba la tarea " || error.message,
        });
    }

}

export const updateTaks = async (req, res) => {
    try {
        const update = await Task.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            message: "Realizado actualizacion"
        });

    } catch (error) {
        res.status(500).json({
            message: "Algo salio mal mientras se actualizaba la tarea " || error.message,
        });
    }

}