using System.ComponentModel.DataAnnotations;

namespace EKM_Project.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Display(Name = "Cake Id")]
        public int CakeId { get; set; }
        public Cake Cake { get; set; }

        [Display(Name = "Customer Account Id")]
        public string CustomerAccountId { get; set; }

        [Display(Name = "Customer Id")]
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        [Display(Name = "Price")]
        public float Price { get; set; }

        [Display(Name = "Status")]
        public int Status { get; set; }
    }
}