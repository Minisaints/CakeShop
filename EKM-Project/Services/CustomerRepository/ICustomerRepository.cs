using EKM_Project.Models;

namespace EKM_Project.Services.CustomerRepository
{
    public interface ICustomerRepository
    {
        void CreateCustomer(Customer customer);
        bool Save();
        Customer GetCustomer(int id);

    }
}
