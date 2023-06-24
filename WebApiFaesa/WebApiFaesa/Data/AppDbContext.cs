using Microsoft.EntityFrameworkCore;
using WebApiFaesa.Models;

namespace WebApiFaesa.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Contato> Contatos { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> opcoes) : base(opcoes)
        {
            
        }
    }
}
