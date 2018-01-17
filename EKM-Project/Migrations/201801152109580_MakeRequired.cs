namespace EKM_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MakeRequired : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Cakes", "CakeName", c => c.String(nullable: false));
            AlterColumn("dbo.Cakes", "CakeDescription", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Cakes", "CakeDescription", c => c.String());
            AlterColumn("dbo.Cakes", "CakeName", c => c.String());
        }
    }
}
