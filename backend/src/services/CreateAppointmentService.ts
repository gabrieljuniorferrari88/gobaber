/* eslint-disable camelcase */
import { startOfHour } from 'date-fns'
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

import AppError from '../errors/AppError'

interface Request {
  provider_id: string
  date: Date
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = await AppointmentsRepository.findOne({
      where: { date: appointmentDate },
    })

    if (findAppointmentInSameDate) {
      throw new AppError('Esse horário já esta agendado!')
    }

    const appointment = AppointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    })

    await AppointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateAppointmentService
