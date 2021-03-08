using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proshore_vehicle_select_server.Model
{
    public class Vehicle
    {
        public int Length { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public VehicleTypeEnum VehicleType { get; set; }

        public Vehicle GetPessengerCarInstance()
        {
            this.Length = 100;
            this.Width = 50;
            this.Height = 75;
            this.VehicleType = VehicleTypeEnum.PessengerCar;
            return this;
        }
        public Vehicle GetDeliveryVanInstance()
        {
            this.Length = 250;
            this.Width = 150;
            this.Height = 150;
            this.VehicleType = VehicleTypeEnum.DeliveryVan;
            return this;
        }
        public Vehicle GetTruckInstance()
        {
            this.Length = 400;
            this.Width = 200;
            this.Height = 250;
            this.VehicleType = VehicleTypeEnum.Truck;
            return this;
        }
        public enum VehicleTypeEnum
        {
            PessengerCar,
            DeliveryVan,
            Truck
        }
    }
}
