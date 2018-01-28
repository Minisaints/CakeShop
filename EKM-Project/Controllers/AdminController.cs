using EKM_Project.Models;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
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
        public ActionResult EditCake([Bind(Include = "Id,CakeName,CakeDescription,Price,ImageUploaded")] Cake _cake, HttpPostedFileBase UploadedImage)
        {

            if (ModelState.IsValid)
            {
                if (UploadedImage != null)
                {
                    MemoryStream target = new MemoryStream();
                    UploadedImage.InputStream.CopyTo(target);
                    byte[] data = target.ToArray();

                    _cake.Image = data;
                }
                else
                {
                    const string defaultImage = "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";
                    _cake.Image = System.Convert.FromBase64String(defaultImage);
                }


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
        public ActionResult Add([Bind(Include = "CakeName,CakeDescription,Price,UploadedImage")]Cake cake, HttpPostedFileBase UploadedImage)
        {

            if (ModelState.IsValid)
            {
                if (UploadedImage != null)
                {
                    MemoryStream target = new MemoryStream();
                    UploadedImage.InputStream.CopyTo(target);
                    byte[] data = target.ToArray();

                    cake.Image = data;
                }
                else
                {
                    const string defaultImage = "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";
                    cake.Image = System.Convert.FromBase64String(defaultImage);
                }


                _context.Cakes.Add(cake);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }

            return View("Cakes/Add", cake);
        }
    }
}