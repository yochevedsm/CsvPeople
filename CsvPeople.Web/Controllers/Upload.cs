using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsvPeople.Web.ViewModels;
using CsvPeople.Data;
using Microsoft.Extensions.Configuration;
using System.IO;
using CsvHelper;
using System.Globalization;

namespace CsvPeople.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly string _connectionString;
        public UploadController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("upload")]
        public void Upload(CsvUpload viewModel)
        {
            int commaIndex = viewModel.Base64File.IndexOf(',');
            string base64 = viewModel.Base64File.Substring(commaIndex + 1);
            byte[] fileData = Convert.FromBase64String(base64);
            System.IO.File.WriteAllBytes($"uploads/{viewModel.Name}", fileData);
            var people = GetFromCsv(fileData);

            var repo = new PeopleRepository(_connectionString);
            foreach (var person in people)
            {
                repo.AddPerson(person);
            }

        }

        [HttpGet]
        [Route("GetAll")]
        public List<Person> GetAll()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();

        }

        [HttpPost]
        [Route("DeleteAll")]
        public void DeleteAll()
        {
            var repo = new PeopleRepository(_connectionString);
            repo.DeletePeople();
        }

        static List<Person> GetFromCsv(byte[] csvBytes)
        {
            using var memoryStream = new MemoryStream(csvBytes);
            using var reader = new StreamReader(memoryStream);
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            return csv.GetRecords<Person>().ToList();
        }

    }
}
