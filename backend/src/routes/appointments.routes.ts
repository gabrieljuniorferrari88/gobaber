import { Router } from 'express'
import { parseISO } from 'date-fns'

import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

const appointmentsRouter = Router()
const appointmentsRepository = new AppointmentsRepository()

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all()

  return res.json(appointments)
})

appointmentsRouter.post('/', (req, res) => {
  try {
    const { provider, date } = req.body

    const parsedDate = parseISO(date)

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    )

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    })

    return res.json({ message: appointment })
  } catch (err: any) {
    return res.status(404).json({ error: err.message })
  }
})

export default appointmentsRouter