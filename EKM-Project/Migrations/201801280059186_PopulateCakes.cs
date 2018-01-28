namespace EKM_Project.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class PopulateCakes : DbMigration
    {
        public override void Up()
        {
            Sql(@"SET IDENTITY_INSERT [dbo].[Cakes] ON
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (1, N'Fish Cake', N'Fishy', 0.33, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (2, N'Fairy Cake', N'It''s a cake', 0.99, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (3, N'Chocolate Cake', N'Chocolatey', 1.29, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (4, N'Eccles Cake', N'Raisin cake', 0.98, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (5, N'Angel Cake', N'Colourful', 2.99, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (6, N'Birthday Cake', N'cakey', 0.99, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (7, N'Jaffa Cake', N'It''s a Jaffa', 0.99, 0x)
INSERT INTO [dbo].[Cakes] ([Id], [CakeName], [CakeDescription], [Price], [Image]) VALUES (8, N'Lemon Cake', N'It''s a cake', 9.99, 0x)
SET IDENTITY_INSERT [dbo].[Cakes] OFF
            ");
        }

        public override void Down()
        {
        }
    }
}
