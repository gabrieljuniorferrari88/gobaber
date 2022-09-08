import { Router } from 'express'
import AppointmentsController from '../controllers/AppointmentController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const appointmentsRouter = Router()

appointmentsRouter.use(ensureAuthenticated)
appointmentsRouter.post('/', new AppointmentsController().create)
appointmentsRouter.get('/', new AppointmentsController().list)

export default appointmentsRouter
