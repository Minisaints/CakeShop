using AutoMapper;
using EKM_Project.Models;
using EKM_Project.Models.Dtos;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EKM_Project.Startup))]
namespace EKM_Project
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Customer, CustomerDto>();
                cfg.CreateMap<CustomerDto, Customer>();
                cfg.CreateMap<Order, OrderDto>();
                cfg.CreateMap<OrderDto, Order>();
            });

            ConfigureAuth(app);
        }
    }
}
