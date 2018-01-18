using EKM_Project.Models;
using System.Collections.Generic;
using System.Linq;

namespace EKM_Project.Services.CakeRepository
{
    public class CakeRepository : ICakeRepository
    {
        private readonly ApplicationDbContext _context;

        public CakeRepository()
        {
            _context = new ApplicationDbContext();
        }
        public List<Cake> GetAllCakes()
        {
            var result = _context.Cakes.ToList();

            return result;
        }

        public void CreateOrder()
        {
        }
    }
}