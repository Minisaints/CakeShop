using EKM_Project.Services.CakeRepository;
using System.Linq;
using System.Web.Http;

namespace EKM_Project.Controllers.api
{
    public class CakeController : ApiController
    {
        private readonly ICakeRepository _repository;

        public CakeController(ICakeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("api/cakes")]
        public IHttpActionResult GetAllCakes()
        {

            var result = _repository.GetAllCakes();

            if (!result.Any())
                return NotFound();

            return Ok(result);
        }



    }


}
