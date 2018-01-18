using EKM_Project.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace EKM_Project.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CustomerController()
        {
            _context = new ApplicationDbContext();
        }

        public ActionResult Index()
        {
            var result = _context.Customers.ToList();

            return View(result);
        }

        [Authorize]
        public ActionResult EditCustomer(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Customer _customer = _context.Customers.Find(id);

            return View("EditCustomer", _customer);
        }

        [HttpPost]
        [Authorize]
        public ActionResult EditCustomer([Bind(Include = "Id,FirstName,LastName,DateOfBirth,Address")] Customer _customer)
        {
            if (ModelState.IsValid)
            {
                _context.Entry(_customer).State = EntityState.Modified;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View("EditCustomer", _customer);
        }

        public ActionResult Delete(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return HttpNotFound();

            _context.Customers.Remove(customer);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}