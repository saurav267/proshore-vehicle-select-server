using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proshore_vehicle_select_server.Model
{
    public class LoadWithRotation
    {
        public int LoadNumber { get; set; }
        public Load Load { get; set; }
        public LoadWithRotation() { }
        public LoadWithRotation(int loadNumber,Load load)
        {
            this.LoadNumber = loadNumber;
            this.Load = load;
        }
    }
    
}
