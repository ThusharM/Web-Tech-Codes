var events=require("events");
var em=new events.EventEmitter();

var listener1=function listener1(){
    console.log("Listener 1 is called");
};
var listener2=function listener2(){
    console.log("Listener 2 is called");
};


//binding events/subscribing to an event
em.addListener("Connection",listener1);
em.on("Connection",listener2);

var eventlistner=events.EventEmitter.listenerCount(em,"Connection");
console.log(eventlistner+"Listeners listening to em object");

//Firing/raising an event
em.emit("Connection");

//removing an event
em.removeListener("Connection",listener1);
console.log("Listener 1 removed");

em.emit("Connection");