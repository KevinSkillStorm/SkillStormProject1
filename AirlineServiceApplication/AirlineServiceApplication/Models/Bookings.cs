namespace AirlineServiceApplication.Models
{
    public class Bookings
    {
        public int Id { get; set; }

        public string ConfirmationNumber { get; set; }
        public int PassengerID { get; set; }
        public Passenger Passenger { get; set; }
        public int FlightID { get; set; }
        public Flight Flight { get; set; }
    }
}
