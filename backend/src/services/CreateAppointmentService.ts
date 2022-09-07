import { startOfHour } from 'date-fns'
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
  provider: string
  date: Date
}

class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = await AppointmentsRepository.findOne({
      where: { date: appointmentDate },
    })

    if (findAppointmentInSameDate) {
      throw Error('Esse horário já esta agendado!')
    }

    const appointment = AppointmentsRepository.create({
      provider,
      date: appointmentDate,
    })

    await AppointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateAppointmentService
