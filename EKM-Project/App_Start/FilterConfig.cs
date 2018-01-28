using System.Web.Mvc;
using RequireHttpsAttribute = EKM_Project.Services.RequireHttpsAttribute;

namespace EKM_Project
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new RequireHttpsAttribute());
        }
    }
}
