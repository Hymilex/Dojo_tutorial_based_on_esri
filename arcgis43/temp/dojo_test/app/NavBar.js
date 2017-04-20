define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","http://localhost:8989/arcgis43/temp/dojo_test/test3.html"],
	function(declare,_WidgetBase,_TemplatedMixin,template){
	return declare([_WidgetBase, _TemplatedMixin], {
        // template contains the content of the file "my/widget/templates/NavBar.html"
        templateString: template});
});