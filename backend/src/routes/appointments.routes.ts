import { Router } from 'express'
import AppointmentsController from '../controllers/AppointmentController'

const appointmentsRouter = Router()

appointmentsRouter.post('/', new AppointmentsController().create)
appointmentsRouter.get('/', new AppointmentsController().list)

export default appointmentsRouter
