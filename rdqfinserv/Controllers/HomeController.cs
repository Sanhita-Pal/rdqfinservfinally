using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace rdq_finserv.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AboutUs()
        {
            ViewBag.Message = "About Us";

            return View();
        }

        public ActionResult personalloan()
        {
            ViewBag.Message = "Personal Loan";
            return View();
        }
        public ActionResult emiprotection()
        {
            ViewBag.Message = "Emi Protection";
            return View();
        }
        public ActionResult products()
        {
            ViewBag.Message = "Products";
            return View();
        }
        public ActionResult creditcard()
        {
            ViewBag.Message = "Credit Card";
            return View();
        }

        public ActionResult las()
        {
            ViewBag.Message = "Loan Against Securities";
            return View();
        }

        public ActionResult consumerdurable()
        {
            ViewBag.Message = "Consumer Durable";
            return View();
        }
        public ActionResult Support()
        {
            ViewBag.Message = "Support";
            return View();
        }
      

        public ActionResult SignUp()
        {
            
            return View();
        }
        public ActionResult Privacy_Policy()
        {
            
            return View();
        }
        public ActionResult Terms_and_condition()
        {
            
            return View();
        }public ActionResult Disclaimer()
        {
            
            return View();
        }public ActionResult Sitemap()
        {
            
            return View();
        }
        public ActionResult Accessibility_Statement()
        {
            
            return View();
        }
    }
}