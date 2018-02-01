using System.Web.Mvc;

namespace EKM_Project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return RedirectToAction("Index", "Cake");
        }
    }
}