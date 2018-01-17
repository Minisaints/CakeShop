using EKM_Project.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace EKM_Project.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<EKM_Project.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EKM_Project.Models.ApplicationDbContext context)
        {
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var user = new ApplicationUser { Email = "admin@test.com", UserName = "admin@test.com" };
            userManager.Create(user, "123456");

            // CREATE NEW ROLE (ADMINISTRATOR)
            var rm = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(new ApplicationDbContext()));
            rm.Create(new IdentityRole("Administrator"));

            // ADD ADMIN ACCOUNT TO ROLE
            var email = userManager.FindByEmail("admin@test.com");
            userManager.AddToRole(email.Id, "Administrator");
        }
    }
}
