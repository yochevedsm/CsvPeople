using CsvHelper;
using CsvPeople.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsvPeople.Web.Controllers
{
    public class FileController : Controller
    {
        public IActionResult ViewFile(string name)
        {
            byte[] fileData = System.IO.File.ReadAllBytes($"uploads/{name}");
            return File(fileData, "APPLICATION/octet-stream", name);
        }

        public IActionResult GetFromCsv(int amount)
        {
             var people = new List<Person>();
            for (int i = 0; i < amount; i++)
            {
                people.Add(new Person
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Age = Faker.RandomNumber.Next(0, 100),
                    Address = Faker.Address.StreetAddress(),
                    Email = Faker.Internet.Email()


                });
            }
                string csvString = GetCsv(people);
                var bytes = Encoding.UTF8.GetBytes(csvString);
                return File(bytes, "text/csv", "people.csv");

            }

            static string GetCsv(List<Person> people)
        {
            var builder = new StringBuilder();
            var stringWriter = new StringWriter(builder);

            using var csv = new CsvWriter(stringWriter, CultureInfo.InvariantCulture);
            csv.WriteRecords(people);

            return builder.ToString();
        }
    }
}
