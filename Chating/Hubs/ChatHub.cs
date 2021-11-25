using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chating.Hubs
{
    public class ChatHub:Hub
    {
        public async Task SentMessage(string fromuser,string message)
        {
            await Clients.All.SendAsync("recieveMessage", fromuser, message);
        }
    }
}
