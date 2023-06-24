using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiFaesa.Data;
using WebApiFaesa.Models;

namespace WebApiFaesa.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : Controller
    {
        private readonly AppDbContext _context;

        public ContatoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contato>>> GetAll()
        {
            return await _context.Contatos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Contato>> Create(Contato contato)
        {
            await _context.Contatos.AddAsync(contato);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
