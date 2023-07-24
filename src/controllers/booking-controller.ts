import httpStatus from 'http-status';
import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import bookingService from '@/services/booking-service';

export async function getBookings(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const booking = await bookingService.getBooking(userId);
    return res.status(httpStatus.OK).send({
      id: booking.id,
      Room: booking.Room
    });
  } catch (error) {

    return res.sendStatus(httpStatus.NOT_FOUND);

  }
}
export async function postBooking(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { hotelId } = req.params;

  try {

  } catch (error) {

  }
}

export async function editBooking(req: AuthenticatedRequest, res: Response) {
}
