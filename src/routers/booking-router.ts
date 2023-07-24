import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getBookings, postBooking, editBooking } from '@/controllers/booking-controller';

const bookingRouter = Router();

bookingRouter
    .all('/*', authenticateToken)
    .get('/', getBookings)
    .post('/', postBooking)
    .put('/:bookingId', editBooking);

export { bookingRouter };
