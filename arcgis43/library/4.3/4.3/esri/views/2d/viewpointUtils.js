// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ./math/common ./math/mat2d ./math/vec2 ../../Viewpoint ../../core/promiseUtils ../../core/Error ../../geometry/SpatialReference ../../geometry/Geometry ../../geometry/Point ../../geometry/Extent ../../geometry/support/webMercatorUtils ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils".split(" "),function(R,f,p,g,e,y,z,K,L,A,u,M,v,B,N,O){function C(a,b,c,d){return d&&c&&!d.equals(c)&&v.canProject(d,c)&&d.isWebMercator?
(d.isWebMercator?(c=b[1],89.99999<c?c=89.99999:-89.99999>c&&(c=-89.99999),c=Math.sin(p.toRadian(c)),a=e.set(a,6378137*p.toRadian(b[0]),3189068.5*Math.log((1+c)/(1-c)))):(c=p.toDegree(b[0]/6378137),a=e.set(a,c-360*Math.floor((c+180)/360),p.toDegree(.5*Math.PI-2*Math.atan(Math.exp(-1*b[1]/6378137))))),a):e.copy(a,b)}function t(a){return a.wkid?a:a.spatialReference||L.WGS84}function q(a,b){return b.type?e.set(a,b.x,b.y):e.copy(a,b)}function w(a,b){return Math.max(a.width/b[0],a.height/b[1])*D(a.spatialReference)}
function r(a,b,c){var d;if(!a)return null;if(Array.isArray(a)&&2===a.length&&"number"===typeof a[0]&&"number"===typeof a[1])return new u(a);if(a.reduce)return a.reduce(function(a,c){return r(c,b,a)},c);a instanceof A?d=a:a.geometry&&(d=a.geometry);if(!d)return null;a="point"===d.type?new M({xmin:d.x,ymin:d.y,xmax:d.x,ymax:d.y,spatialReference:d.spatialReference}):d.extent;if(!a)return null;d=v.canProject(a,b);if(!a.spatialReference.equals(b)&&d)a=v.project(a,b);else if(!d)return null;return c=c?c.union(a):
a.clone()}function E(a,b){if(!a)return new y({targetGeometry:new u,scale:0,rotation:0});var c=b.spatialReference,d=b.size,k=b.currentViewpoint,h=b.constraints,f=null;"esri.Viewpoint"===a.declaredClass?f=a:a.viewpoint?f=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(f=a.target);var l=null;if(f&&f.targetGeometry)l=f.targetGeometry;else if(a instanceof A)l=a;else if(a||a&&(a.hasOwnProperty("center")||a.hasOwnProperty("extent")||a.hasOwnProperty("target")))l=r(a.center,c)||r(a.extent,
c)||r(a.target,c)||r(a,c);!l&&k&&k.targetGeometry?l=k.targetGeometry:!l&&b.extent&&(l=b.extent);var g=t(l);c||(c=t(b.spatialReference||b.extent||l));if(!O.canProject(l,c)&&g&&!g.equals(c))return null;var m=q(e.create(),l.center?l.center:l),c=new u(C(m,m,g,c),c),g=null,g=f&&f.targetGeometry&&"point"===f.targetGeometry.type?f.scale:a.hasOwnProperty("scale")&&a.scale?a.scale:a.hasOwnProperty("zoom")&&-1!==a.zoom&&h&&h.effectiveLODs?h.zoomToScale(a.zoom):Array.isArray(l)||"point"===l.type||"extent"===
l.type&&0===l.width&&0===l.height?b.extent?w(b.extent,d):k.scale:w(l.extent,d);b=0;f?b=f.rotation:a.hasOwnProperty("rotation")?b=a.rotation:k&&(b=k.rotation);h&&(h.rotationEnabled||(b=0),h.snapToZoom&&(g=h.snapScale(g)),0!==h.effectiveMinScale&&(g=Math.min(h.effectiveMinScale,g)),0!==h.effectiveMaxScale&&(g=Math.max(h.effectiveMaxScale,g)));return new y({targetGeometry:c,scale:g,rotation:b})}function m(a,b){var c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;
a.scale=b.scale;a.rotation=b.rotation;return a}function F(a,b,c){return c?e.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):e.scale(a,b,.5)}function P(a,b,c){f.getTransform(a,b,c);return g.invert(a,a)}function x(a,b,c){var d=p.toRadian(b.rotation)||0;b=Math.abs(Math.cos(d));d=Math.abs(Math.sin(d));return e.set(a,Math.round(c[1]*d+c[0]*b),Math.round(c[1]*b+c[0]*d))}function n(a){return a.scale*(1/(39.37*(B.getUnitValueForSR(a.targetGeometry.spatialReference)||G)*96))}function D(a){return 39.37*
(B.getUnitValueForSR(a)||G)*96}function H(a){return a.isWrappable?(a=N.getInfo(a),a.valid[1]-a.valid[0]):0}function I(a,b){return Math.round(H(a)/b)}var G=6370997*Math.PI/180,Q=180/Math.PI;f.create=E;f.copy=m;f.getAnchor=F;f.getExtent=function(){var a=e.create();return function(b,c,d){var e=c.targetGeometry;q(a,e);c=.5*n(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}();f.setExtent=function(a,b,c,d,e){f.centerAt(a,b,c.center);
a.scale=w(c,d);e&&e.constraints&&e.constraints.constrain(a);return a};f.getOuterExtent=function(){var a=e.create(),b=e.create();return function(c,d,e){q(a,d.targetGeometry);x(b,d,e);e=.5*n(d);c.set({xmin:a[0]-e*b[0],ymin:a[1]-e*b[1],xmax:a[0]+e*b[0],ymax:a[1]+e*b[1],spatialReference:d.targetGeometry.spatialReference});return c}}();f.getClippedExtent=function(){var a=e.create(),b=e.create();return function(c,d,e){var f=n(d),k=d.targetGeometry.spatialReference,g=I(k,f);q(a,d.targetGeometry);x(b,d,e);
k.isWrappable&&b[0]>g&&(b[0]=g);d=.5*f;c.set({xmin:a[0]-d*b[0],ymin:a[1]-d*b[1],xmax:a[0]+d*b[0],ymax:a[1]+d*b[1],spatialReference:k});return c}}();f.getOuterSize=x;f.getPaddingScreenTranslation=function(){var a=e.create();return function(b,c,d){return e.sub(b,e.scale(b,c,.5),F(a,c,d))}}();var J=function(){var a=g.create(),b=e.create();return function(c,d,k,h){var m=n(d);d=p.toRadian(d.rotation)||0;e.set(b,m,m);g.fromScaling(a,b);g.rotate(a,a,d);g.translate(a,a,f.getPaddingScreenTranslation(b,k,h));
g.translate(a,a,[0,h.top-h.bottom]);return e.set(c,a[4],a[5])}}();f.getResolution=n;f.getResolutionToScaleFactor=D;f.getMatrix=function(){var a=e.create(),b=e.create(),c=e.create();return function(d,f,h,m,l){e.negate(a,f);e.scale(b,h,.5);e.set(c,1/m,-1/m);g.identity(d);g.translate(d,d,b);l&&g.rotate(d,d,l);g.scale(d,d,c);g.translate(d,d,a);return d}}();f.getTransform=function(){var a=e.create();return function(b,c,d){var e=n(c),h=p.toRadian(c.rotation)||0;q(a,c.targetGeometry);return f.getMatrix(b,
a,d,e,h)}}();f.getTransformNoRotation=function(){var a=e.create();return function(b,c,d){var e=n(c);q(a,c.targetGeometry);return f.getMatrix(b,a,d,e,0)}}();f.getWorldWidth=H;f.getWorldScreenWidth=I;f.createAsync=function(a,b){if(a=E(a,b))return z.resolve(a);a=new K("viewpointUtils-createAsync:different-spatialReference","Target spatialReference cannot be projected and is different from out spatialReference");return z.reject(a)};f.angleBetween=function(){var a=e.create(),b=e.create(),c=e.create();
return function(d,f,h){e.subtract(a,d,f);e.normalize(a,a);e.subtract(b,d,h);e.normalize(b,b);e.cross(c,a,b);d=Math.acos(e.dot(a,b)/(e.length(a)*e.length(b)))*Q;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}();f.addPadding=function(){var a=e.create();return function(b,c,d,e){var f=b.targetGeometry;m(b,c);J(a,c,d,e);f.x+=a[0];f.y+=a[1];return b}}();f.removePadding=function(){var a=e.create();return function(b,c,d,e){var f=b.targetGeometry;m(b,c);J(a,c,d,e);f.x-=a[0];f.y-=a[1];return b}}();f.centerAt=function(){var a=
e.create();return function(b,c,d){m(b,c);c=b.targetGeometry;var e=t(d),f=t(c);q(a,d);C(a,a,e,f);c.x=a[0];c.y=a[1];return b}}();f.pixelSizeAt=function(a,b,c){return n(b)};f.resize=function(){var a=e.create();return function(b,c,d,k,h){h||(h="center");e.sub(a,d,k);e.scale(a,a,.5);d=a[0];k=a[1];switch(h){case "center":e.set(a,0,0);break;case "left":e.set(a,-d,0);break;case "top":e.set(a,0,k);break;case "right":e.set(a,d,0);break;case "bottom":e.set(a,0,-k);break;case "top-left":e.set(a,-d,k);break;case "bottom-left":e.set(a,
-d,-k);break;case "top-right":e.set(a,d,k);break;case "bottom-right":e.set(a,d,-k)}f.translateBy(b,c,a);return b}}();f.rotateBy=function(a,b,c){m(a,b);a.rotation+=c;return a};f.rotateTo=function(a,b,c){m(a,b);a.rotation=c;return a};f.scaleBy=function(){var a=e.create();return function(b,c,d,k,h){m(b,c);0!==d&&(f.toMap(a,k,c,h),b.scale=c.scale/d,f.toScreen(a,a,b,h),f.translateBy(b,b,e.set(a,a[0]-k[0],k[1]-a[1])));return b}}();f.scaleTo=function(a,b,c){m(a,b);a.scale=c;return a};f.scaleAndRotateBy=
function(){var a=e.create();return function(b,c,d,k,h,g){m(b,c);0!==d&&(f.toMap(a,h,c,g),b.scale=c.scale/d,b.rotation+=k,f.toScreen(a,a,b,g),f.translateBy(b,b,e.set(a,a[0]-h[0],h[1]-a[1])));return b}}();f.toMap=function(){var a=g.create();return function(b,c,d,f){return e.transformMat2d(b,c,P(a,d,f))}}();f.toScreen=function(){var a=g.create();return function(b,c,d,g){return e.transformMat2d(b,c,f.getTransform(a,d,g))}}();f.translateBy=function(){var a=e.create(),b=g.create();return function(c,d,f){m(c,
d);var h=n(d),k=c.targetGeometry;g.fromRotation(b,p.toRadian(d.rotation)||0);g.scale(b,b,e.fromValues(h,h));e.transformMat2d(a,f,b);k.x+=a[0];k.y+=a[1];return c}}()});