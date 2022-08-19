using AirlineServiceApplication.DTO;

namespace AirlineServiceApplication.Models;
public class Flight
{
    public int Id { get; set; }
    public string FlightNumber { get; set; }
    public string Destination { get; set; }        

    // Double check what virtual does, don't know if i need it here
    public DateTime DepartureDateTime { get; set; }
    public DateTime ArrivalDateTime { get; set; }
    public string DepartureAirport { get; set; }
    public string ArrivalAirport { get; set; }
    public int MaxCapacity { get; set; }

    // Possibly can compare the MaxCapacity with
    // PassengerCount to see maintain constraint
    // of 'flight cannot have more passengers
    // on them/booked on their limit allows.'

    public int PassengerCount => BookedPassengers?.Count ?? 0;

    

    

    // Navigation property
    public virtual ICollection<Bookings>? BookedPassengers { get; set; }
    //public virtual ICollection<Confirmations> ConfirmationNumberForFlight { get; set; }

    // why we use dDTO
    // if trying to post back thorugh web api, we need viertual icolleciton when we post back.
    // if empty array of bookedPassnegersw, best practice for DTO rep data comingi n.

    public Flight(){ }

    // TODO: Why do we need flight constructor being overloaded with flightDTO
    public Flight(FlightDTO dto)
    {
        this.FlightNumber = dto.FlightNumber;
        this.Destination = dto.Destination;
        this.DepartureDateTime = dto.DepartureDateTime;
        this.ArrivalDateTime = dto.ArrivalDateTime;
        this.DepartureAirport = dto.DepartureAirport;
        this.ArrivalAirport = dto.ArrivalAirport;
        this.MaxCapacity = dto.MaxCapacity;

        this.BookedPassengers = new List<Bookings>();
    }

}
