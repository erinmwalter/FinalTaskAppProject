using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskApp.Models
{
    public class TaskItemDAL
    {
        //CREATE
        public void CreateTask(TaskItem t)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"insert into tasks values(0, '{t.TmName}', \"{t.TaskName}\", \"{t.Description}\"," +
                    $" '{t.DueDate}', 0)";
                connect.Open();
                connect.Query<TaskItem>(sql);
                connect.Close();

            }
        }

        //READ
        //read all tasks
        public List<TaskItem> GetTasks()
        {
            using (var connect = new MySqlConnection(Secret.Connection)) 
            {
                string sql = "select * from tasks";
                connect.Open();
                List<TaskItem> t = connect.Query<TaskItem>(sql).ToList();
                connect.Close();

                return t;
            }
        }
        //read one by Id
        public TaskItem GetTask(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"select * from tasks where taskId={id}";
                connect.Open();
                TaskItem t = connect.Query<TaskItem>(sql).FirstOrDefault();
                connect.Close();
                if(t == null)
                {
                    t = new TaskItem();
                    t.TaskName = $"Error: TaskId: {id} does not exist in database";
                }

                return t;
            }
        }

        //UPDATE
        public void UpdateTask(TaskItem t, int id) 
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"update tasks set tmName='{t.TmName}', taskName=\"{t.TaskName}\", `description`=\"{t.Description}\"," +
                    $"dueDate='{t.DueDate}', isCompleted={t.IsCompleted} where taskId={id}";
                connect.Open();
                connect.Query<TaskItem>(sql);
                connect.Close();

            }
        }

        //DELETE
        public void DeleteTask(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"delete from tasks where taskId={id}";
                connect.Open();
                connect.Query<TaskItem>(sql);
                connect.Close();

            }
        }
    }
}
