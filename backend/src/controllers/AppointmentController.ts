import { parseISO } from 'date-fns'
import { Request, Response } from 'express'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

class AppointmentsController {
  async create(req: Request, res: Response) {
    try {
      const { provider_id, date } = req.body

      const parsedDate = parseISO(date)

      const createAppointment = new CreateAppointmentService()

      const appointment = await createAppointment.execute({
        date: parsedDate,
        provider_id,
      })

      return res.status(201).json(appointment)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

  async list(req: Request, res: Response) {
    try {
      const appointmentsAll = await AppointmentsRepository.find()

      return res.status(200).json(appointmentsAll)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Erro no servidor' })
    }
  }
}

export default AppointmentsController
