import {Router} from 'express'
import Task from '../models/Task'
import * as taskCtrl from '../controllers/task.controller'

const router = Router()

router.get('/',taskCtrl.findAllTasks);

router.post('/',taskCtrl.createTask);

router.get('/done',taskCtrl.findAllDoneTasks);

router.get('/:id',taskCtrl.findOneTasks);

router.delete('/:id',taskCtrl.deleteTasks);

router.put('/:id',taskCtrl.updateTaks);


export default router;