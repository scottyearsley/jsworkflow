
jsPlumb.ready(function() {

	jsPlumb.Defaults.Container = $("#workflow-container");

	jsPlumb.importDefaults({
	    PaintStyle : {
	        lineWidth:3,
	        strokeStyle: 'rgba(200,200,0,100)'
	    },
	    DragOptions : { cursor: "crosshair" },
	    EndpointStyles : [{ fillStyle:"#225588" }, { fillStyle:"#558822" }]
	});

	jsPlumb.draggable($(".container"), {
	  containment:"#workflow-container"
	});

    var common = {
	    cssClass    :    "myCssClass",
	    hoverClass    :    "myHoverClass"
	};


	jsPlumb.connect({
	    source:"container0",
	    target:"container1"
	});

});