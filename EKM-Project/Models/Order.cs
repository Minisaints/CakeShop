namespace EKM_Project.Models
{
    public class Order
    {
        public int Id { get; set; }

        public int CakeId { get; set; }
        public Cake Cake { get; set; }

        public string CustomerId { get; set; }

        public float Price { get; set; }
    }
}