using EKM_Project.Models;

namespace EKM_Project.Services.OrderRepository
{
    public interface IOrderRepository
    {
        void CreateOrder(Order order);
        bool Save();
    }
}
