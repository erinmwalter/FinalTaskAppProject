using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskApp.Models
{
    public class TaskItem
    {
        [Key]
        public int TaskId { get; set; }
        public string TmName { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string DueDate { get; set; }
        public bool IsCompleted { get; set; }

    }
}
