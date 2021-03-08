using Combinatorics.Collections;
using proshore_vehicle_select_server.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq;


namespace proshore_vehicle_select_server
{
    //This is the class which has all the logic
    public class Core
    {
        //This method will return all the possible way a load can be stacked
        //After rotating the items their length,width,and height are changed
        //It will return the list of all possible Permutation value without repeat
        public Permutations<int> GetAllPossibleDimensionWithRotation(Load load)
        {
            int[] dimensions = new int[] { load.Height, load.Width, load.Length };
            Permutations<int> allPossibleRotationDimensions = new Permutations<int>(dimensions);
            return allPossibleRotationDimensions;
        }

        //It will return those combination of dimension that can fit on the vehicle
        public List<LoadWithRotation> GetAllDimensionCombinationForLoadValidForVehicle(List<Load> allLoads,
            Vehicle vehicle)
        {
            int loadNumber = 0;
            List<LoadWithRotation> loadWithValidRotation = new List<LoadWithRotation>();

            foreach (var load in allLoads)
            {
                loadNumber++;
                //Getting all the possible dimension combination
                var allPossibleDimensionsAfterRotating = GetAllPossibleDimensionWithRotation(load);
                //Stripping away the unvalid combination for car and asigning a Load number
                var allDimensionCombinationForLoadValidForVehicle = GenerateListOfValidLoadWithAllRotationForVehicle(loadNumber,
                    allPossibleDimensionsAfterRotating,
                    vehicle);
                loadWithValidRotation.AddRange(allDimensionCombinationForLoadValidForVehicle);
            }
            return loadWithValidRotation;
        }

        //This method returns back all the valid Dimension Combination
        public List<LoadWithRotation> GenerateListOfValidLoadWithAllRotationForVehicle(int loadNumber,
            Permutations<int> allPossibleDimensionsAfterRotating,
            Vehicle vehicle)
        {
            List<LoadWithRotation> loadsWithValidRotation = new List<LoadWithRotation>();
            foreach (var dimensions in allPossibleDimensionsAfterRotating)
            {
                Load loadWithDimension = new Load(dimensions[0], dimensions[1], dimensions[2]);
                if (DimensionFitsInTheSpecificVehicle(loadWithDimension,vehicle))
                {
                    loadsWithValidRotation.Add(new LoadWithRotation(loadNumber, loadWithDimension));
                }
            }
            return loadsWithValidRotation;
        }

        public bool DimensionFitsInTheSpecificVehicle(Load loadWithDimension,Vehicle vehicle)
        {
            if (loadWithDimension.Height <= vehicle.Height && loadWithDimension.Width <= vehicle.Width
                   && loadWithDimension.Length <= vehicle.Length)
            {
                return true;
            }
            return false;
        }

        public LoadWithRotation GetLoadRotationForPessengerCar(
         Vehicle vehicle,
         List<Load> allLoads)
        {
            List<LoadWithRotation> loadWithValidRotation =GetAllDimensionCombinationForLoadValidForVehicle(allLoads, vehicle);
            var combinationOfAllLoad = RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithValidRotation,
                allLoads.Count,
                1,
                null,
                vehicle);
            return combinationOfAllLoad;
        }

        public LoadWithRotation RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(List<LoadWithRotation> loadWithRotationAllList,
         int totalLoadNumber,
         int currentLoad,
         LoadWithRotation loadWithRotation,
         Vehicle vehicle)
        {
            //This is our base case, which says that we have checked all the loads
            if (currentLoad == totalLoadNumber+1)
            {
                return loadWithRotation;
            }
            else
            {
                //Get all the possible combination of dimension for that load
                var dimensionsFromSpecificLoad = loadWithRotationAllList.Where(x => x.LoadNumber == currentLoad);
                foreach (var x in dimensionsFromSpecificLoad)
                {
                    if(x.Load.Length == 250)
                    {
                        var aa = "";
                    }
                    LoadWithRotation combinedLoad = new LoadWithRotation(x.LoadNumber,x.Load);

                    //loadWithRotation will be null only on the first case
                    //Combined load is the sum of dimensions of load until now
                    //If the combined load already exceeds the threshold for pessenger car then
                    //no we can ignore that combination and move to next combination
                    if (loadWithRotation != null)
                    {
                    combinedLoad.Load = new Load(x.Load.Length + loadWithRotation.Load.Length
                        , x.Load.Width + loadWithRotation.Load.Width
                        , x.Load.Height + loadWithRotation.Load.Height);
                        if (!DimensionFitsInTheSpecificVehicle(combinedLoad.Load,vehicle))
                        {
                            continue;
                        }
                    }
                    
                    var totalCombinedLoad = RunRecursiveTestToSeeIfCombinedLoadFitsInThePessen(loadWithRotationAllList
                        , totalLoadNumber, 
                        currentLoad + 1, 
                        combinedLoad,
                        vehicle);
                    //totalCombinedLoad will only be null when the load does not satisfy the condition for pessenger car
                    if(totalCombinedLoad != null &&
                        totalCombinedLoad.Load != null && totalCombinedLoad.LoadNumber != 0)
                    {
                        return totalCombinedLoad;
                    }
                }
                return null;
            }
        }
    }
}
