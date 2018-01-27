using AutoMapper;
using EKM_Project.Models;
using EKM_Project.Models.Dtos;
using EKM_Project.Services.OrderRepository;
using System;
using System.Web.Http;

namespace EKM_Project.Controllers.api
{
    public class OrderController : ApiController
    {
        private readonly IOrderRepository _repository;

        public OrderController(IOrderRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        [Route("api/order")]
        public IHttpActionResult CreateOrder(OrderDto order)
        {
            if (!ModelState.IsValid)
                return BadRequest();



            var result = Mapper.Map<Order>(order);

            if (result == null)
                return InternalServerError();

            _repository.CreateOrder(result);

            if (!_repository.Save())
                return InternalServerError();

            return Created(new Uri(Request.RequestUri + "/" + result.Id), order);

        }

    }
}
