using System.ComponentModel.DataAnnotations;

namespace EKM_Project.Models
{
    public class Cake
    {
        public int Id { get; set; }

        [Required]
        [Display(Name = "Cake Name")]
        public string CakeName { get; set; }

        [Required]
        [Display(Name = "Cake Description")]
        public string CakeDescription { get; set; }

        [Required]
        [Display(Name = "Price")]
        public float Price { get; set; }
    }
}