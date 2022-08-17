using AirlineServiceApplication.Models;

namespace AirlineServiceApplication.DTO
{
    public class FlightDetailDTO
    {
        // TODO: This detailDTO file is to prevent cycling of JSON, Find out why we need list<passenger>
        // 
        public int Id { get; set; }
        public string FlightNumber { get; set; }
        public string Destination { get; set; }
        public DateTime DepartureDateTime { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public string DepartureAirport { get; set; }
        public string ArrivalAirport { get; set; }
        public int MaxCapacity { get; set; }

        public List<Passenger> passenger { get; set; }
    }
}
