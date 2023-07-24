import bookingRepository from '@/repositories/booking-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { notFoundError } from '@/errors';
import ticketsRepository from '@/repositories/tickets-repository';
import { cannotListBookingsError } from '@/errors/cannot-list-bookings-error';

async function listBookings(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket || ticket.status === 'RESERVED' || ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) {
    throw cannotListBookingsError(); // LANÇA UM ERRO PARA A FUNÇÃO QUE O CHAMOU
  }
}

async function getBooking(userId: number) {
  await listBookings(userId);

  const booking = await bookingRepository.findBookings(userId);

  if (!booking) throw notFoundError();

  return booking;
}

async function postBooking(userId: number, roomId: number)

export default {
  getBooking,
  postBooking
};
