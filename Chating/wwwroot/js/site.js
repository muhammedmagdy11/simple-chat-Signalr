var connection = new signalR.HubConnectionBuilder().withUrl("/chathub").build();
connection.on("recieveMessage", function (fromuser, message) {
    var Message = `${fromuser} : ${message}`;
    var item = document.createElement('li');
    item.textContent = Message;
    $('#chat-list').prepend(item);
});
connection.start();
$('#btnSend').on("click", function () {
    var fromuser= $('#user').val();
    var message = $('#message').val();
    connection.invoke("SentMessage", fromuser, message);
    $('#user').val("");
    $('#message').val("");
});