(this["webpackJsonpdaily-wheater"]=this["webpackJsonpdaily-wheater"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/error.b2c36c2a.svg"},function(e,t,a){e.exports=a.p+"static/media/cloud.9d62948d.svg"},function(e,t,a){e.exports=a.p+"static/media/eye-open.68bfd197.svg"},function(e,t,a){e.exports=a.p+"static/media/storm.381339ec.svg"},function(e,t,a){e.exports=a.p+"static/media/place.d89527ca.svg"},,,,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),s=(a(30),function(e){return e.children}),c=(a(31),function(){return i.a.createElement("header",{className:"Header"},i.a.createElement("p",null,"Daily Wheater"))}),l=(a(32),function(e){return i.a.createElement(s,null,i.a.createElement(c,null),i.a.createElement("main",{className:"app-container"},e.children))}),u=a(22),m=a(13),h=a(14),d=a(23),f=a(15),p=a(2),E=a(24),v=a(16),g=a.n(v),b=(a(50),a(17)),w=a.n(b),q=function(e){return i.a.createElement(s,null,i.a.createElement("article",{className:"Error tada"},i.a.createElement("img",{width:"50",src:w.a,alt:"Error icon"}),i.a.createElement("p",null,e.message)))},k=(a(51),function(){return i.a.createElement("div",{class:"Loader"})}),y=(a(52),function(e){var t=["Button","small"===e.type?"sm":""];return i.a.createElement("button",{onClick:e.click,className:t.join(" ")},e.icon?i.a.createElement("img",{width:"20",src:e.icon,alt:e.text}):null,i.a.createElement("span",null,e.text))}),W=(a(53),a(18)),j=a.n(W),A=a(19),N=a.n(A),x=function(e){var t=e.weather;if(t&&t.description&&e.show){var a=t.main,n=t.description,r=e.regionName,o=["weather-card",e.show?"enter":"dsd"];return i.a.createElement(s,null,i.a.createElement("article",{className:o.join(" ")},i.a.createElement("header",null,i.a.createElement("div",{className:"header-info"},i.a.createElement("img",{width:"90",src:j.a,alt:"Nuvens"}),i.a.createElement("span",null,e.main.temp," \xb0")),i.a.createElement("h3",null,r)),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",null,i.a.createElement("h5",null,a),i.a.createElement("p",null,n)),i.a.createElement(y,{text:"Ver mais detalhes",type:"small",icon:N.a}))))}},O=a(20),R=a.n(O),H=(a(54),function(e){var t=["no-content",e.initialAnimation?"activeNoContent":"dsd",e.finishAnimation?"finish":"leaveActiveContent"];return i.a.createElement("section",null,i.a.createElement("div",{className:t.join(" ")},i.a.createElement("img",{width:"70",src:R.a,alt:"\xcdcone de tempestade"}),i.a.createElement("p",null,i.a.createElement("span",null,e.span)," ",e.message),i.a.createElement(y,{click:e.click,text:e.btnText,icon:e.btnIcon})))}),L=(a(55),a(21)),U=a.n(L),G=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={hasGeolocation:void 0,userDenied:!1,currentWeather:[],initialAnimation:!1,finishAnimation:!1,loadingRequest:!1,hasweater:!1},e.getUserGeolocationHandler=function(t){var a=t.coords.latitude,n={lon:t.coords.longitude,lat:a,APPID:"3cc15f29b5e1a6baec11ab23768ab424",units:"metric"};e.setState({hasGeolocation:!0}),e.requestWeatherForescast(n)},e.requestUserLocation=e.requestUserLocation.bind(Object(p.a)(e)),e.getUserGeolocationHandler=e.getUserGeolocationHandler.bind(Object(p.a)(e)),e.userRequestLocationHandler=e.userRequestLocationHandler.bind(Object(p.a)(e)),e.requestWeatherForescast=e.requestWeatherForescast.bind(Object(p.a)(e)),e}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({initialAnimation:!0}),setTimeout((function(){e.setState({finishAnimation:!0})}),600)}},{key:"userRequestLocationHandler",value:function(e){e&&1===e.code&&this.setState({userDenied:!0})}},{key:"requestUserLocation",value:function(e){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.getUserGeolocationHandler,this.userRequestLocationHandler)}},{key:"requestWeatherForescast",value:function(e){var t=this;this.setState({loadingRequest:!0}),g.a.get("http://api.openweathermap.org/data/2.5/weather",{params:e}).then((function(e){var a=e.data,n=Object(u.a)(e.data.weather,1)[0];a.weather=n,t.setState({currentWeather:a,hasWeater:!0,loadingRequest:!1})})),console.log(this.state)}},{key:"render",value:function(){var e,t=this,a=i.a.createElement(s,null,i.a.createElement(H,{initialAnimation:this.state.initialAnimation,finishAnimation:this.state.finishAnimation,span:"opss!",message:"Precisamos de sua localiza\xe7\xe3o para iniciar!",btnText:"Ativar localiza\xe7\xe3o",btnIcon:U.a,click:this.requestUserLocation}));if(this.state&&this.state.hasWeater&&!this.state.loadingRequest){var n=this.state.currentWeather.name;return e=n,i.a.createElement(s,null,i.a.createElement(x,{weather:t.state.currentWeather.weather,regionName:e.regionName,show:t.state.hasGeolocation,main:t.state.currentWeather.main}))}return this.state&&this.state.userDenied&&!this.state.loadingRequest?i.a.createElement(q,{message:"Voc\xea n\xe3o autorizou nossa aplica\xe7\xe3o acessar sua localiza\xe7\xe3o :/"}):this.state&&this.state.loadingRequest?i.a.createElement(k,null):a}}]),t}(n.Component);var D=function(){return i.a.createElement(s,null,i.a.createElement(l,null,i.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.f53db64d.chunk.js.map