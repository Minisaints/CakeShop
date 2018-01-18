using EKM_Project.Models;
using System;

namespace EKM_Project.Services.OrderRepository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;

        public OrderRepository()
        {
            _context = new ApplicationDbContext();
        }

        public void CreateOrder()
        {
            throw new NotImplementedException();
        }
    }
}