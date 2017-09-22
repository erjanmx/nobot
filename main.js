/*jshint esversion: 6 */

var socket = io('http://localhost:3000');
socket.on('stream', function(data){
	console.log(data);
    app.responses.push(data);
});

var app = new Vue({
    el: "#app",
        data: {
          responses: [],
        },
    methods: {
    }
});
