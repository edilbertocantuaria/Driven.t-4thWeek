import { prisma } from '@/config';

async function findBookings(roomId: number) {
  return prisma.booking.findFirst({
    where: {
      roomId
    },
    include: {
      Room: true,
    },
  });
}

async function findRoomsByHotelId(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

const bookingRepository = {
  findBookings,
  findRoomsByHotelId,
};

export default bookingRepository;
