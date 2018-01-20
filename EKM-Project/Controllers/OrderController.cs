﻿using EKM_Project.Models;
using System.Linq;
using System.Web.Mvc;

namespace EKM_Project.Controllers
{
    public class OrderController : Controller
    {
        private readonly ApplicationDbContext _context;

        public OrderController()
        {
            _context = new ApplicationDbContext();
        }

        public ActionResult Index()
        {
            var result = _context.Orders.AsEnumerable();

            return View(result);
        }
    }
}