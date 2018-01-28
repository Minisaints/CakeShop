namespace EKM_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterImagePermission : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Cakes", "Image", c => c.Binary());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Cakes", "Image", c => c.Binary(nullable: false));
        }
    }
}
