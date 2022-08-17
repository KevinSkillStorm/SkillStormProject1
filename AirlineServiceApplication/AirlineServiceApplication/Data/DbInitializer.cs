using AirlineServiceApplication.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace AirlineServiceApplication.Data
{
    public static class DbInitializer
    {
        public static void Initialize(FlightsDBContext context)
        {
           
                // Checks to ensure that Database is even created
                context.Database.EnsureCreated();

                if (!(context.Flights.Any()))
                {
                    var flightsToAdd = new FlightDTO[]
                    {
                    new FlightDTO { FlightNumber = "AH123", Destination = "Los Angeles", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "JFK", ArrivalAirport ="LAX", MaxCapacity = 200},
                    new FlightDTO { FlightNumber = "WN297", Destination = "Chicago", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "SAN", ArrivalAirport ="MDW", MaxCapacity = 300},
                    new FlightDTO { FlightNumber = "B6748", Destination = "New York", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "LAS", ArrivalAirport ="JFK", MaxCapacity = 150},
                    new FlightDTO { FlightNumber = "DL2861", Destination = "Los Angeles", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "LAX", ArrivalAirport ="DTW", MaxCapacity = 200},
                    new FlightDTO { FlightNumber = "EK222", Destination = "Dubai", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "DFW", ArrivalAirport ="DXB", MaxCapacity = 300},
                    new FlightDTO { FlightNumber = "AA60", Destination = "Dallas", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "NRT", ArrivalAirport = "DFW", MaxCapacity = 225},
                    new FlightDTO { FlightNumber = "WS230", Destination = "Halifax", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "YYC", ArrivalAirport ="YHZ", MaxCapacity = 150},
                    new FlightDTO { FlightNumber = "AA1798", Destination = "New York", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "SFO", ArrivalAirport ="JFK", MaxCapacity = 200},
                    };
                    context.Flights.AddRange(flightsToAdd);
                    context.SaveChanges();
                }
                if (!(context.Passengers.Any()))
                {
                    var passengersToAdd = new PassengerDTO[]
                    {
                    new PassengerDTO { Name = "Christian Ronaldo", Job = "Soccer Player", Email = "Ronaldo@gmail.com", Age= 37},
                    new PassengerDTO { Name = "Johnny Depp", Job = "Actor", Email = "jDepp@gmail.com", Age= 59},
                    new PassengerDTO { Name = "Kevin Yi", Job = "FullStack .Net Developer", Email = "kyi@skillstorm", Age= 22},
                    new PassengerDTO { Name = "John Robert", Job = "Gamer", Email = "jRobert@gmail.com", Age= 24},
                    new PassengerDTO { Name = "Jennifer Lawrence", Job = "Actor", Email = "jLawrence@gmail.com", Age= 31},
                    new PassengerDTO { Name = "Peter Parker", Job = "Super Hero", Email = "spidey@gmail.com", Age= 18},
                    new PassengerDTO { Name = "Darth Vader", Job = "Ruler of the Galaxy", Email = "sith@gmail.com", Age= 50},

                    };
                    context.Passengers.AddRange(passengersToAdd);
                    context.SaveChanges();
                }
            
        }
    }
}
