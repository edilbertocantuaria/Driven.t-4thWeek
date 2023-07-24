import { ApplicationError } from '@/protocols';

export function cannotListBookingsError(): ApplicationError {
  return {
    name: 'CannotListBookingError',
    message: 'Cannot list Booking!',
  };
}