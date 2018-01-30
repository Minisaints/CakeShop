using System.Web.Optimization;
using System.Web.Optimization.React;

namespace EKM_Project
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/react").Include(
                    "~/Scripts/react.production.min.js",
                    "~/Scripts/react-dom.production.min.js"
                        ));

            bundles.Add(new BabelBundle("~/bundles/components").Include(
                        "~/Scripts/components/cake.jsx"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/toastr.min.js",
                      "~/Scripts/moment.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/toastr.css",
                      "~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/admincss").Include(
                "~/Content/bootstrap.css",
                "~/Content/Admin.css"));

        }
    }
}
