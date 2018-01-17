using EKM_Project.Models;
using System.Collections.Generic;

namespace EKM_Project.Services
{
    public interface ICakeRepository
    {
        List<Cake> GetAllCakes();
    }
}
