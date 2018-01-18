using System.Web.Http;

namespace EKM_Project.Controllers.api
{
    public class OrderController : ApiController
    {

        [HttpPost]
        [Route("api/order")]
        public IHttpActionResult CreateOrder()
        {
            return Ok();
        }

    }
}
