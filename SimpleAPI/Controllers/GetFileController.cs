using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.StaticFiles;

namespace SimpleAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GetFileController : ControllerBase
    {
        private readonly ILogger<FileUploadController> _logger;

        public GetFileController(ILogger<FileUploadController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFileById(int id)
        {
            try
            {
                // Example: Retrieve the file path based on the ID from your storage (database, filesystem, etc.)
                // This is a placeholder. Replace it with your actual file retrieval logic.
                var filePath = $"C:\\Users\\sergi\\Pictures\\Screenshots\\Screenshot 2023-07-04 160218.png"; // Adjust the path and extension as necessary

                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound();
                }

                // Determine the content type
                new FileExtensionContentTypeProvider().TryGetContentType(filePath, out var contentType);
                contentType ??= "application/octet-stream"; // Default to binary file if no content type is determined

                // Return the file
                var fileBytes = System.IO.File.ReadAllBytes(filePath);
                return File(fileBytes, contentType, Path.GetFileName(filePath));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error getting file: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Error uploading file.");
            }
        }
    }
}