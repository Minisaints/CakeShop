namespace EKM_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NameChangePrice : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "Price", c => c.Single(nullable: false));
            DropColumn("dbo.Orders", "TotalPrice");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "TotalPrice", c => c.Single(nullable: false));
            DropColumn("dbo.Orders", "Price");
        }
    }
}
