using AirlineServiceApplication.DTO;

namespace AirlineServiceApplication.Models
{
    public class Bookings
    {
        public int Id { get; set; }

        public string ConfirmationNumber { get; set; }
        public int PassengerID { get; set; }
        public Passenger? Passenger { get; set; }
        public int FlightID { get; set; }
        public Flight? Flight { get; set; }

        public Bookings() { }
        public Bookings(BookingsDTO dto)
        {
            this.ConfirmationNumber = dto.ConfirmationNumber;
            this.PassengerID = dto.PassengerID;
            this.Passenger = dto.Passenger;
            this.FlightID = dto.FlightID;
            this.Flight = dto.Flight;
        }
    }
}
