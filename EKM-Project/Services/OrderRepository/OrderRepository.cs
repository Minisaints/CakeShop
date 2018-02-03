using EKM_Project.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace EKM_Project.Services.OrderRepository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;

        public OrderRepository()
        {
            _context = new ApplicationDbContext();
        }

        public void CreateOrder(Order order)
        {
            _context.Orders.Add(order);
        }

        public bool Save()
        {
            try
            {
                _context.SaveChanges();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public IEnumerable<Order> GetOrders(string id)
        {
            return _context.Orders.Where(c => c.CustomerAccountId == id).Include(c => c.Cake).Include(c => c.Customer);
        }
    }
}