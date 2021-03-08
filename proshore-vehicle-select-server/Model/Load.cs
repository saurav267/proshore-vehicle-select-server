using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proshore_vehicle_select_server.Model
{
    public class Load
    {
        public int Length { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
 
        public Load() { }
        public Load(int length,int width,int height)
        {
            this.Length = length;
            this.Width = width;
            this.Height = height;
        }
    }
}
