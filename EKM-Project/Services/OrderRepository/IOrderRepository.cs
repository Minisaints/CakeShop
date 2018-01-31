using EKM_Project.Models;
using System.Collections.Generic;

namespace EKM_Project.Services.OrderRepository
{
    public interface IOrderRepository
    {
        void CreateOrder(Order order);
        bool Save();
        IEnumerable<Order> GetOrders(string id);
    }
}
