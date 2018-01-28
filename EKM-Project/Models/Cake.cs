using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;

namespace EKM_Project.Models
{
    public class Cake
    {
        public int Id { get; set; }

        [NotMapped]
        public HttpPostedFileBase UploadedImage { get; set; }

        public byte[] Image { get; set; }

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