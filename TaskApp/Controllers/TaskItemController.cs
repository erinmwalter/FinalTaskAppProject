using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskApp.Models;

namespace TaskApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemController : ControllerBase
    {
        TaskItemDAL tDB = new TaskItemDAL();

        //GET
        //get list of tasks
        //localhost/api/taskitem
        [HttpGet]
        public List<TaskItem> GetTasks()
        {
            List<TaskItem> t = tDB.GetTasks();
            return t;
        }
        //get single task by id
        //localhost/api/taskitem/id
        [HttpGet("{id}")]
        public TaskItem GetTask(int id)
        {
            TaskItem t = tDB.GetTask(id);
            return t;
        }

        //POST
        //localhost/api/taskitem/create
        [HttpPost("create")]
        public void CreateTask(TaskItem t)
        {
            tDB.CreateTask(t);
        }

        //PUT
        //localhost/api/taskitem/update/id
        [HttpPut("update/{id}")]
        public void UpdateTask(TaskItem t, int id) 
        {
            tDB.UpdateTask(t, id);
        }

        //DELETE
        //localhost/api/taskitem/delete/id
        [HttpDelete("delete/{id}")]
        public void DeleteTask(int id)
        {
            tDB.DeleteTask(id);
        }

    }
}
