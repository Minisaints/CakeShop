namespace EKM_Project.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class PopulateCakes : DbMigration
    {
        public override void Up()
        {
            Sql(@"SET IDENTITY_INSERT [dbo].[Cakes] ON
            INSERT INTO[dbo].[Cakes]([Id], [CakeName], [CakeDescription], [Price]) VALUES(1, N'Fish Cake', N'Fishy', 0.33)
            INSERT INTO[dbo].[Cakes]([Id], [CakeName], [CakeDescription], [Price]) VALUES(2, N'Fairy Cake', N'It''s a cake', 0.99)
            INSERT INTO[dbo].[Cakes]([Id], [CakeName], [CakeDescription], [Price]) VALUES(3, N'Chocolate Cake', N'Chocolatey', 1.29)
            INSERT INTO[dbo].[Cakes]([Id], [CakeName], [CakeDescription], [Price]) VALUES(4, N'Eccles Cake', N'Flat cake', 0.98)
            INSERT INTO[dbo].[Cakes]([Id], [CakeName], [CakeDescription], [Price]) VALUES(5, N'Angel Cake', N'Colourful', 2.99)
            SET IDENTITY_INSERT[dbo].[Cakes] OFF
            ");
        }

        public override void Down()
        {
        }
    }
}
