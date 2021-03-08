using Combinatorics.Collections;
using NUnit.Framework;
using proshore_vehicle_select_server;
using proshore_vehicle_select_server.Model;
using System.Collections.Generic;

namespace proshore_vehicle_select_server_test
{
    public class ApiTest
    {
        [SetUp]
        public void Setup()
        {
        }
        
        [Test]
        public void DoesLoadFitsInPessengerCar()
        {
            List<Load> allLoads = new List<Load>();
            
            allLoads.Add(new Load(15, 12, 33));
            allLoads.Add(new Load(75, 38, 32));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetPessengerCarInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads,vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count, 
                1,
                null,
                vehicle);
           
            Assert.IsTrue(combinationOfAllLoad.Load !=null && combinationOfAllLoad.LoadNumber >0);
        }

        [Test]
        public void TestLoadDoesNotFitInPessengerCar()
        {
            List<Load> allLoads = new List<Load>();

            allLoads.Add(new Load(100, 200, 50));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetPessengerCarInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads,vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue( combinationOfAllLoad == null|| combinationOfAllLoad.Load == null && combinationOfAllLoad.LoadNumber == 0);
        }

        [Test]
        public void DoesLoadFitsInDeliveryVan()
        {
            List<Load> allLoads = new List<Load>();
            allLoads.Add(new Load(250, 150, 143));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetDeliveryVanInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue(combinationOfAllLoad.Load != null && combinationOfAllLoad.LoadNumber > 0);
        }


        [Test]
        public void TestLoadDoesNotFitInDeliveryVan()
        {
            List<Load> allLoads = new List<Load>();

            allLoads.Add(new Load(100, 300, 50));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetDeliveryVanInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue(combinationOfAllLoad == null || combinationOfAllLoad.Load == null && combinationOfAllLoad.LoadNumber == 0);
        }

        [Test]
        public void TestLoadDoesNotFitInPessengerCarButInDeliveryVan()
        {
            List<Load> allLoads = new List<Load>();

            allLoads.Add(new Load(34, 153, 12));
            allLoads.Add(new Load(100, 12, 110));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetDeliveryVanInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);
            vehicle = vehicle.GetPessengerCarInstance();
            loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoadForCar = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);
            Assert.IsTrue((combinationOfAllLoad != null 
                && combinationOfAllLoad.Load != null 
                && combinationOfAllLoad.LoadNumber != 0)&&
                (combinationOfAllLoadForCar == null));
        }

        [Test]
        public void DoesLoadFitsInBothPessengerCarAndDeliveryVan()
        {
            List<Load> allLoads = new List<Load>();
            allLoads.Add(new Load(34, 15, 13));
            allLoads.Add(new Load(43, 25, 33));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetDeliveryVanInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            vehicle = vehicle.GetPessengerCarInstance();
            loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoadForCar = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue(combinationOfAllLoad.Load != null
                && combinationOfAllLoad.LoadNumber > 0);
            Assert.IsTrue(combinationOfAllLoadForCar.Load != null
                && combinationOfAllLoadForCar.LoadNumber > 0);
        }

        [Test]
        public void DoesLoadFitsInTruck()
        {
            List<Load> allLoads = new List<Load>();
            allLoads.Add(new Load(250, 150, 143));
            allLoads.Add(new Load(150, 50, 43));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetTruckInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue(combinationOfAllLoad != null && combinationOfAllLoad.Load != null && combinationOfAllLoad.LoadNumber > 0);

        }

        [Test]
        public void TestLoadDoesNotFitInTruck()
        {
            List<Load> allLoads = new List<Load>();

            allLoads.Add(new Load(100, 300, 50));
            allLoads.Add(new Load(100, 300, 50));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetTruckInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue(combinationOfAllLoad == null || combinationOfAllLoad.Load == null && combinationOfAllLoad.LoadNumber == 0);
        }

        public void DoesLoadFitsInAllVehicle()
        {
            List<Load> allLoads = new List<Load>();
            allLoads.Add(new Load(31, 12, 11));
            allLoads.Add(new Load(41, 21, 31));
            Core core = new Core();
            Vehicle vehicle = new Vehicle();
            vehicle = vehicle.GetDeliveryVanInstance();
            List<LoadWithRotation> loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            vehicle = vehicle.GetPessengerCarInstance();
            loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoadForCar = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);

            Assert.IsTrue(combinationOfAllLoad.Load != null
                && combinationOfAllLoad.LoadNumber > 0);
            Assert.IsTrue(combinationOfAllLoadForCar.Load != null
                && combinationOfAllLoadForCar.LoadNumber > 0);
            vehicle = vehicle.GetTruckInstance();
            loadWithValidRotation = core.GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
             combinationOfAllLoad = core.RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);
            Assert.IsTrue(combinationOfAllLoad.Load != null
             && combinationOfAllLoad.LoadNumber > 0);
        }
    }
}