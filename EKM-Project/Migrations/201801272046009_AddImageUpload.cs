namespace EKM_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddImageUpload : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cakes", "Image", c => c.Binary(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Cakes", "Image");
        }
    }
}
