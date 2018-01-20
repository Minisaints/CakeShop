﻿using AutoMapper;
using EKM_Project.Models;
using EKM_Project.Models.Dtos;
using EKM_Project.Services.CustomerRepository;
using System.Web.Http;

namespace EKM_Project.Controllers.api
{
    public class CustomerController : ApiController
    {
        private readonly ICustomerRepository _repository;

        public CustomerController(ICustomerRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        [Route("api/customer")]
        public IHttpActionResult CreateCustomer(CustomerDto customer)
        {
            if (!ModelState.IsValid)
                return BadRequest();




            var result = Mapper.Map<Customer>(customer);

            if (result == null)
                InternalServerError();

            _repository.CreateCustomer(result);

            if (!_repository.Save())
                return InternalServerError();

            return Ok(result); // Use Created response (GET single Customer controller)
        }
    }
}
