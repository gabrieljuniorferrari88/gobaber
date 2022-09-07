import AppDataSource from '../dataSource'
import Appointment from '../models/Appointment'

const AppointmentsRepository = AppDataSource.getRepository(Appointment)

export default AppointmentsRepository
