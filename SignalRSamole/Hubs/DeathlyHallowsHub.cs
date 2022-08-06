using Microsoft.AspNetCore.SignalR;

namespace SignalRSamole.Hubs
{
    public class DeathlyHallowsHub : Hub
    {
        public Dictionary<string, int> GetRaceStatus()
        {
            return SD.DealthyHallowRace;
        }
    }
}
