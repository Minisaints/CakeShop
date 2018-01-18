using EKM_Project.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace EKM_Project.Controllers
{

    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AdminController()
        {
            _context = new ApplicationDbContext();

        }

        [Authorize]
        public ActionResult Index()
        {
            var result = _context.Cakes.ToList();

            return View("Cakes/Index", result);
        }

        [Authorize]
        public ActionResult EditCake(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Cake _cake = _context.Cakes.Find(id);

            return View("Cakes/EditCake", _cake);
        }

        [HttpPost]
        [Authorize]
        public ActionResult EditCake([Bind(Include = "Id,CakeName,CakeDescription,Price")] Cake _cake)
        {
            if (ModelState.IsValid)
            {
                _context.Entry(_cake).State = EntityState.Modified;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View("Cakes/EditCake", _cake);
        }

        [Authorize]
        public ActionResult Delete(int id)
        {
            var cake = _context.Cakes.SingleOrDefault(c => c.Id == id);

            if (cake == null)
                return HttpNotFound();

            _context.Cakes.Remove(cake);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [Authorize]
        public ActionResult Add()
        {
            return View("Cakes/Add");
        }

        [HttpPost]
        [Authorize]
        public ActionResult Add([Bind(Include = "CakeName,CakeDescription,Price")]Cake cake)
        {
            if (ModelState.IsValid)
            {
                _context.Cakes.Add(cake);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View("Cakes/Add", cake);
        }
    }
}