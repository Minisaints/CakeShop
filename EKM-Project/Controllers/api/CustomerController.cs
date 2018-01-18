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
        public IHttpActionResult CreateCustomer()
        {
            return Ok();
        }
    }
}
