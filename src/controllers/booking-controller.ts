import httpStatus from 'http-status';
import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import bookingService from '@/services/booking-service';

export async function getBookings(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
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


  try {
    const { userId } = req;
    const { roomId } = req.body;

    const booking = await bookingService.postBooking(userId, roomId);
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === 'DuplicatedEmailError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }

  try {

  } catch (error) {

  }
}

export async function editBooking(req: AuthenticatedRequest, res: Response) {
}
