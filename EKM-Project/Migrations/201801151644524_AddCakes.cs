namespace EKM_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCakes : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cakes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CakeName = c.String(),
                        CakeDescription = c.String(),
                        Price = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Cakes");
        }
    }
}
