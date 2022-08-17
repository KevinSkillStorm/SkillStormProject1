using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AirlineServiceApplication.Data;
using AirlineServiceApplication.Models;
using AirlineServiceApplication.DTO;

namespace AirlineServiceApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly FlightsDBContext _context;
        private readonly ILogger<FlightsController> _logger;

        public FlightsController(ILogger<FlightsController> logger, FlightsDBContext context)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/Flights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlights()
        {
          if (_context.Flights == null)
          {
              return NotFound();
          }
            return await _context.Flights.ToListAsync();
        }

        // GET: api/Flights/5
        [HttpGet("{id}")]
        // TODO: Why he has detail model to and implemented here
        public async Task<ActionResult<FlightDetailDTO>> GetFlight(int id)
        {
          if (_context.Flights == null)
          {
              return NotFound();
          }
            var flight = await _context.Flights.FindAsync(id);

            if (flight == null)
            {
                return NotFound();
            }

            // TODO: This part, why is he adding the httpget and whats the benefit.
            //var passenger = await _context.Passengers.Where(p => p.)

            return flight;
        }

        // PUT: api/Flights/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // Updates the table
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlight(int id, Flight flight)
        {
            if (id != flight.Id)
            {
                return BadRequest();
            }

            _context.Entry(flight).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Flights
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // Adds a record
        [HttpPost]
        
        // TODO: Change flight to DTO
        public async Task<ActionResult<FlightDTO>> PostFlight(FlightDTO flightDTO)
        {
          if (_context.Flights == null)
          {
              return Problem("Entity set 'FlightsDBContext.Flights'  is null.");
          }
            var flight = new Flight(flightDTO);
            _context.Flights.Add(flight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Flights/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight(int id)
        {
            if (_context.Flights == null)
            {
                return NotFound();
            }
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FlightExists(int id)
        {
            return (_context.Flights?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
