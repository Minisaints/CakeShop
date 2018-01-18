using EKM_Project.Models;
using System.Collections.Generic;

namespace EKM_Project.Services.CakeRepository
{
    public interface ICakeRepository
    {
        List<Cake> GetAllCakes();
        void CreateOrder();
    }
}
