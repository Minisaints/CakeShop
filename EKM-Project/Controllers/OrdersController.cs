using System.Web.Mvc;

namespace EKM_Project.Controllers
{
    public class OrdersController : Controller
    {
        // GET: Orders
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}