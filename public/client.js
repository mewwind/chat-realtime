var socket = io.connect("localhost:7777");
socket.on("connect", function(data) {
    socket.emit("join","Hello server from client");
});
socket.on("thread", function(data) {
    $("#thread").append("<li>"+data+"</li>");
});
$("form").submit(function(data) {
    socket.emit('messages', $("#message").val());
    this.reset();
    return false;
});