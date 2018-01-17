using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EKM_Project.Startup))]
namespace EKM_Project
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
