using System;

namespace dm_api.Models
{
    public partial class WindowsIdentity
    {
        public string loggedin_username { get; set; }
        public bool is_authenticated { get; set; }
        public DateTime authenticated_date { get; set; }
    }
}