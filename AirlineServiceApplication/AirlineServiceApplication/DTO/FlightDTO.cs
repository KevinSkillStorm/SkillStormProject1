namespace AirlineServiceApplication.DTO;

public class FlightDTO
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

    

    // why we use dDTO
    // if trying to post back thorugh web api, we need viertual icolleciton when we post back.
    // if empty array of bookedPassnegersw, best practice for DTO rep data comingi n.
}
