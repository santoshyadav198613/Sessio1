using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular22Jan2017.Api.Model
{
    public class Student
    {
        public int StudentId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public DateTime DateOfBirth { get; set; }
    }
}