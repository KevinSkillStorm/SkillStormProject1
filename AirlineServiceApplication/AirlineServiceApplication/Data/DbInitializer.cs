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
                    var flightsToAdd = new Flight[]
                    {
                    new Flight { FlightNumber = "AH123", Destination = "Los Angeles", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "JFK", ArrivalAirport ="LAX", MaxCapacity = 200},
                    new Flight { FlightNumber = "WN297", Destination = "Chicago", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "SAN", ArrivalAirport ="MDW", MaxCapacity = 300},
                    new Flight { FlightNumber = "B6748", Destination = "New York", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "LAS", ArrivalAirport ="JFK", MaxCapacity = 150},
                    new Flight { FlightNumber = "DL2861", Destination = "Los Angeles", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "LAX", ArrivalAirport ="DTW", MaxCapacity = 200},
                    new Flight { FlightNumber = "EK222", Destination = "Dubai", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "DFW", ArrivalAirport ="DXB", MaxCapacity = 300},
                    new Flight { FlightNumber = "AA60", Destination = "Dallas", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "NRT", ArrivalAirport = "DFW", MaxCapacity = 225},
                    new Flight { FlightNumber = "WS230", Destination = "Halifax", DepartureDateTime = DateTime.Parse("2005-09-01"),ArrivalDateTime = DateTime.Parse("2005-09-20"), DepartureAirport = "YYC", ArrivalAirport ="YHZ", MaxCapacity = 150},
                    
                    };
                    context.Flights.AddRange(flightsToAdd);
                    context.SaveChanges();
                }
                if (!(context.Passengers.Any()))
                {
                    var passengersToAdd = new Passenger[]
                    {
                    new Passenger { Name = "Christian Ronaldo", Job = "Soccer Player", Email = "Ronaldo@gmail.com", Age= 37},
                    new Passenger { Name = "Johnny Depp", Job = "Actor", Email = "jDepp@gmail.com", Age= 59},
                    new Passenger { Name = "Kevin Yi", Job = "FullStack .Net Developer", Email = "kyi@skillstorm", Age= 22},
                    new Passenger { Name = "John Robert", Job = "Gamer", Email = "jRobert@gmail.com", Age= 24},
                    new Passenger { Name = "Jennifer Lawrence", Job = "Actor", Email = "jLawrence@gmail.com", Age= 31},
                    new Passenger { Name = "Peter Parker", Job = "Super Hero", Email = "spidey@gmail.com", Age= 18},
                    new Passenger { Name = "Darth Vader", Job = "Ruler of the Galaxy", Email = "sith@gmail.com", Age= 50},

                    };
                    context.Passengers.AddRange(passengersToAdd);
                    context.SaveChanges();
                }
            if (!context.Bookings.Any())
            {
                var bookingsToAdd = new Bookings[]
                {
                    new Bookings { ConfirmationNumber = "HS123CA", PassengerID = 1, FlightID = 1},
                    new Bookings { ConfirmationNumber = "AB456CD", PassengerID = 2, FlightID = 2},
                    new Bookings { ConfirmationNumber = "EF789GH", PassengerID = 3, FlightID = 3},
                    new Bookings { ConfirmationNumber = "IJ012KL", PassengerID = 4, FlightID = 4},
                    new Bookings { ConfirmationNumber = "MN345OP", PassengerID = 5, FlightID = 5},
                    new Bookings { ConfirmationNumber = "QR678ST", PassengerID = 6, FlightID = 6},
                    new Bookings { ConfirmationNumber = "WX901YZ", PassengerID = 7, FlightID = 7},

                };
                context.Bookings.AddRange(bookingsToAdd);
                context.SaveChanges();
            }

        }
    }
}
