using System;
using System.Threading.Tasks;
using dm_api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dm_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class WindowsIdentityController : ControllerBase
    {
        // GET api/BiapAppDataSecurityCode
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var windowsIdentity = new WindowsIdentity();
            windowsIdentity.loggedin_username = HttpContext.User.Identity.Name;
            windowsIdentity.is_authenticated = HttpContext.User.Identity.IsAuthenticated;
            windowsIdentity.authenticated_date = DateTime.Now;
            return Ok(windowsIdentity);
        }

        // GET api/BiapAppDataSecurityCode
        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {
            user.message = "POST Success";
            return Ok(user);
        }


        // GET api/BiapAppDataSecurityCode
        [HttpDelete]
        public async Task<IActionResult> DeleteUser()
        {
            var user = new User();
            user.message = "DELETE Success";
            return Ok(user);
        }
    }
}