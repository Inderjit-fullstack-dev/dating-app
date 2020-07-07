using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models
{
    public class Value
    {
        [Key]
        public long Id { get; set; }
        
        [Required]
        public string Name { get; set; }
    }
}