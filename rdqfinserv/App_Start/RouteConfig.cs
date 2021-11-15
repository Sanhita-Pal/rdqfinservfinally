using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace rdq_finserv
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
          "about-us",
          "about-us",
          new { controller = "Home", action = "AboutUs" }
          );

            routes.MapRoute(
           "consumer-durable",
           "consumer-durable",
           new { controller = "Home", action = "consumerdurable" }
           );

            routes.MapRoute(
          "credit-card",
          "credit-card",
          new { controller = "Home", action = "creditcard" }
          );

            routes.MapRoute(
          "emi-protection",
          "emi-protection",
          new { controller = "Home", action = "emiprotection" }
          );

            routes.MapRoute(
         "faq",
         "faq",
         new { controller = "Home", action = "Faq" }
         );



            routes.MapRoute(
       "loan-against-securities",
       "loan-against-securities",
       new { controller = "Home", action = "las" }
       );

            routes.MapRoute(
      "personal_loan",
      "personal_loan",
      new { controller = "Home", action = "personalloan" }
      );
            routes.MapRoute(
      "products",
      "products",
      new { controller = "Home", action = "products" }
      );

            routes.MapRoute(
      "sign-up",
      "sign-up",
      new { controller = "Home", action = "SignUp" }
      );

            routes.MapRoute(
     "support",
     "support",
     new { controller = "Home", action = "Support" }
     );





            routes.MapRoute(
     "privacy_policy",
     "privacy_policy",
     new { controller = "Home", action = "Privacy_Policy" }
     );
 routes.MapRoute(
     "terms_and_condition",
     "terms_and_condition",
     new { controller = "Home", action = "Terms_and_condition" }
     );
 routes.MapRoute(
     "disclaimer",
     "disclaimer",
     new { controller = "Home", action = "Disclaimer" }
     );
 routes.MapRoute(
     "sitemap",
     "sitemap",
     new { controller = "Home", action = "Sitemap" }
     );
 routes.MapRoute(
     "accessibility_statement",
     "accessibility_statement",
     new { controller = "Home", action = "Accessibility_Statement" }
     );











            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
