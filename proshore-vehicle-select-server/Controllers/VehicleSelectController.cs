using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using proshore_vehicle_select_server.Dto;
using proshore_vehicle_select_server.Model;

namespace proshore_vehicle_select_server.Controllers
{
    [ApiController]
    [Route("")]
    [Route("[controller]")]
    public class VehicleSelectController : ControllerBase
    {
        private readonly ILogger<VehicleSelectController> _logger;

        public VehicleSelectController(ILogger<VehicleSelectController> logger)
        {
            _logger = logger;
        }
       
        [HttpPost]
        public ActionResult GetVehicleSelect(List<LoadForFormDto> loadForFormDto)
        {
            List<Load> allLoads = new List<Load>();
            int loadNumber = 1;
            foreach(var loadDto in loadForFormDto)
            {
                Load load = new Load(loadDto.Length, loadDto.Width, loadDto.Height);
                if (loadDto.Number > 1)
                {
                    for (int i = 0; i < loadDto.Number; i++)
                    {
                        allLoads.Add(load);
                    }
                }
                else
                {
                    allLoads.Add(load);
                }
                loadNumber++;
            }

            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetPessengerCarInstance();
            Core core = new Core();
            var combinationOfAllLoad = core.GetLoadRotationForPessengerCar(
                vehicle,
                allLoads);
            if(combinationOfAllLoad != null)
            {
                return Ok(new { result = "Pessenger Car" });
            }

            vehicle = vehicle.GetDeliveryVanInstance();
            combinationOfAllLoad = core.GetLoadRotationForPessengerCar(
                vehicle,
                allLoads);
            if (combinationOfAllLoad != null)
            {
                return Ok(new { result= "Delivery Van" });
            }
            vehicle = vehicle.GetTruckInstance();
            combinationOfAllLoad = core.GetLoadRotationForPessengerCar(
                vehicle,
                allLoads);
            if (combinationOfAllLoad != null)
            {
                return Ok(new {result = "Truck" });
            }
            else
            {
                return NotFound(new {result= "Cannot find a suitable vehicle" });
            }
        }

    }
}
