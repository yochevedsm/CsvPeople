using CsvPeople.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CsvPeople.Web.ViewModels
{
    public class CsvUpload
    {
        public string Name { get; set; }
        public string Base64File { get; set; }

    }
}
