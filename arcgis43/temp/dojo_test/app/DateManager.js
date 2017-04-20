define(["dojo/_base/declare","dojo/dom"],
	function(declare,dom,dateFormatter){
		return declare(null,{
			showDate:function(id){
				dom.byId(id).innerHTML="hello world!";
			}
		});
});