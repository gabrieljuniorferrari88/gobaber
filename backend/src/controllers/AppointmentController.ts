/* eslint-disable camelcase */
import { parseISO } from 'date-fns'
import { Request, Response } from 'express'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

class AppointmentsController {
  async create(req: Request, res: Response) {
    const { provider_id, date } = req.body

    const parsedDate = parseISO(date)

    const createAppointment = new CreateAppointmentService()

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    })

    return res.status(201).json(appointment)
  }

  async list(req: Request, res: Response) {
    const appointmentsAll = await AppointmentsRepository.find()

    return res.status(200).json(appointmentsAll)
  }
}

export default AppointmentsController
