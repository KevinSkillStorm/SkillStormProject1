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
    public class BookingsController : ControllerBase
    {
        private readonly FlightsDBContext _context;
        private readonly ILogger<FlightsController> _logger;

        public BookingsController(ILogger<FlightsController> logger, FlightsDBContext context)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/Bookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookings>>> GetBookings()
        {
          if (_context.Bookings == null)
          {
              return NotFound();
          }
            return await _context.Bookings.ToListAsync();
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookings>> GetBookings(int id)
        {
          if (_context.Bookings == null)
          {
              return NotFound();
          }
            var bookings = await _context.Bookings.FindAsync(id);

            if (bookings == null)
            {
                return NotFound();
            }

            return bookings;
        }

        // GET: api/Bookings/Passenger/5
        [HttpGet("Passenger/{id}")]
        public async Task<ActionResult<List<Bookings>>> GetBookingFromPassenger(int id)
        {
            if (_context.Bookings == null)
            {
                return NotFound();
            }
            // List of bookings asscoiated with id
            var bookings = await _context.Bookings.Where(b => b.PassengerID == id).ToListAsync();

            if (bookings == null)
            {
                return NotFound();
            }
            // Returning list    
            return bookings;
        }


        // PUT: api/Bookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookings(int id, Bookings bookings)
        {
            if (id != bookings.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingsExists(id))
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

        // POST: api/Bookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BookingsDTO>> PostBookings(BookingsDTO bookingsDTO)
        {
          if (_context.Bookings == null)
          {
              return Problem("Entity set 'FlightsDBContext.Bookings'  is null.");
          }
            var booking = new Bookings(bookingsDTO);
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Bookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookings(int id)
        {
            if (_context.Bookings == null)
            {
                return NotFound();
            }
            var bookings = await _context.Bookings.FindAsync(id);
            if (bookings == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(bookings);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookingsExists(int id)
        {
            return (_context.Bookings?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
