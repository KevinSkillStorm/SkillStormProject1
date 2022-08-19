using AirlineServiceApplication.DTO;

namespace AirlineServiceApplication.Models;

public class Passenger
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Job { get; set; }
    public string Email { get; set; }
    public int Age { get; set; }

    // (One number for every flight they book)
    // Which means can have multiple flights
   //public int ConfirmationNumber {get; set;}      

  
    public virtual ICollection<Bookings>? BookedFlights { get; set; }
    public Passenger() { }

    public Passenger(PassengerDTO dto)
    {
        this.Name = dto.Name;
        this.Job = dto.Job;
        this.Email = dto.Email;
        this.Age = dto.Age;

        this.BookedFlights = new List<Bookings>();
    }
}
