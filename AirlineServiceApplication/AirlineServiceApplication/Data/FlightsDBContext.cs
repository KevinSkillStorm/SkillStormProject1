using Microsoft.EntityFrameworkCore;
using AirlineServiceApplication.Models;

namespace AirlineServiceApplication.Data
{
    public class FlightsDBContext : DbContext
    {
        public FlightsDBContext(DbContextOptions<FlightsDBContext> options) : base(options){ }

        // Need a set of DbSets (models)
        // Flight 
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Passenger> Passengers { get; set; }

        // any advance/complex of mapping to database tables or between models go inside here
        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Bookings>()
            .HasKey(t => new { t.Id });

            builder.Entity<Bookings>()
            .HasOne(fl => fl.Flight)
            .WithMany(p => p.BookedPassengers)
            .HasForeignKey(pID => pID.FlightID);

            builder.Entity<Bookings>()
            .HasOne(fl => fl.Passenger)
            .WithMany(p => p.BookedFlights)
            .HasForeignKey(pID => pID.PassengerID);




            //builder.Entity<Confirmations>()
            //.HasKey(t => new { t.Id });

            //builder.Entity<Confirmations>()
            //.HasOne(fl => fl.Flight)
            //.WithMany(p => p.ConfirmationNumberForFlight)
            //.HasForeignKey(pID => pID.FlightID);

            //builder.Entity<Confirmations>()
            //.HasOne(fl => fl.Passenger)
            //.WithMany(p => p.ConfirmationNumber)
            //.HasForeignKey(pID => pID.PassengerID);




            // https://docs.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key#indirect-many-to-many-relationships


            // Original
            //builder.Entity<Flight>().ToTable("Flight");
            //builder.Entity<Passenger>().ToTable("Passenger");
        }
    }
}
