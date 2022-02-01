(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},204:function(e,t,n){},337:function(e,t,n){},338:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=(n(201),n(23)),i=n.n(c),l=n(51),u=n(25),d=n(31),h=n(26),f=n(27),p=n(357),v=n(361),m=n(362),b=n(186),j=n(187),g=n(78),O=n(191),w=n(3),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hidden:!0},e.toggleClass=function(){var t=e.state.hidden;e.setState({hidden:!t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=Object.values(e.start)[0],n=t.slice(11,16)+" - "+t.slice(0,10),a=e.description,r=e.htmlLink,o=e.hangoutLink,s=e.created?e.created:"",c=e.updated?e.updated:"",i=Object.values(e.organizer)[0];return Object(w.jsxs)("div",{className:"event",children:[Object(w.jsxs)("div",{className:"details-collapsed",children:[Object(w.jsx)("p",{className:"time",children:n}),Object(w.jsxs)("p",{className:"title",children:[e.summary," | ",e.location]}),i&&Object(w.jsx)("a",{className:"group",href:"mailto:".concat(i),children:"Email Organizer"})]}),!this.state.hidden&&Object(w.jsxs)("div",{className:"details-expanded",children:[a&&Object(w.jsx)("p",{className:"description",children:a}),Object(w.jsx)("p",{className:"public",children:"Public/Private: Public"}),r&&Object(w.jsx)("p",{children:Object(w.jsx)("a",{className:"calendar-event-link",href:r,children:"Calendar Event Link"})}),o&&Object(w.jsx)("p",{children:Object(w.jsx)("a",{className:"event-hangout-link",href:o,children:"Event Hangout Link"})}),s&&Object(w.jsxs)("p",{className:"created",children:["Created: ",s]}),c&&Object(w.jsxs)("p",{className:"updated",children:["Updated: ",c]})]}),Object(w.jsx)("button",{className:"details-button",onClick:this.toggleClass,children:"Details"})]})}}]),n}(a.Component),y=x,k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(w.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(y,{event:e})},e.id)}))})}}]),n}(a.Component),S=k,T=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.getType=function(){return{type:a.type}},a.color=null,a.type=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{className:this.getType().type,children:Object(w.jsx)("div",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.type="infoAlert",a}return n}(T),N=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.type="errorAlert",a}return n}(T),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,suggestions:a,infoText:"We cannot find the city you are looking for. Please try again."})},e.handleItemClicked=function(t,n){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t,n)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){if(!navigator.onLine)return this.setState({infoText:"Events shown may not be up to date as you are offline. Please connect to enable searching."})}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"CitySearch",children:[Object(w.jsx)(E,{text:this.state.infoText}),Object(w.jsx)("div",{children:"City to Search:"}),!navigator.onLine&&Object(w.jsx)("input",{type:"text",className:"city",value:"Searching is disabled while offline"}),navigator.onLine&&Object(w.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(w.jsxs)("ul",{className:this.state.showSuggestions?"suggestions":"suggestions hidden",children:[this.state.suggestions.map((function(t){return Object(w.jsx)("li",{onClick:function(){return e.handleItemClicked(t,e.props.NumberOfEvents)},children:t},t)})),Object(w.jsx)("li",{onClick:function(){return e.handleItemClicked("all",e.props.NumberOfEvents)},children:Object(w.jsx)("b",{children:"See All Cities"})},"all")]})]})}}]),n}(a.Component),L=C,W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={errorText:""},e.handleLimitChanged=function(t){var n=t.target.value,a=new RegExp(/^\d+$/);console.log(n),n.length>0&&!a.test(n)?e.setState({errorText:"Select a positive integer."}):e.setState({errorText:""}),e.props.updateNumberOfEvents(n)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.updateNumberOfEvents(this.props.NumberofEvents)}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{text:this.state.errorText}),Object(w.jsx)("div",{children:"Number of Events: "}),Object(w.jsx)("input",{type:"text",value:this.props.NumberofEvents,className:"limit",onChange:function(t){return e.handleLimitChanged(t)}})]})}}]),n}(a.Component),Z=W;n(204);var A=function(e){return e.showWelcomeScreen?Object(w.jsxs)("div",{className:"WelcomeScreen",children:[Object(w.jsx)("h1",{children:"Welcome to the Meet app"}),Object(w.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(w.jsx)("div",{className:"button_cont",align:"center",children:Object(w.jsxs)("div",{class:"google-btn",children:[Object(w.jsx)("div",{class:"google-icon-wrapper",children:Object(w.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(w.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(w.jsx)("b",{children:"Sign in with google"})})]})}),Object(w.jsx)("a",{href:"https://LukeHTHompson.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},I=n(18),M=n(364),D=n(181),J=n(95),R=n(74),q=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(I.a)(n,2),o=r[0],s=r[1];Object(a.useEffect)((function(){s((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]);var c=["#ff9900","#1ae7ff","#c90076","#2d7566","#fed96d"];return Object(w.jsx)(p.a,{height:400,children:Object(w.jsxs)(M.a,{width:400,height:400,children:[Object(w.jsx)(D.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(w.jsx)(J.a,{fill:c[t%c.length]},"cell-".concat(t))}))}),Object(w.jsx)(R.a,{layout:"horizontal",verticalAlign:"top",align:"center",height:45})]})})},U=(n(337),n(338),n(190)),B=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],P=n(121),z=n.n(P),F=n(77),_=n.n(F),H=function(e){var t=e.map((function(e){return e.location}));return Object(U.a)(new Set(t))},G=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return _.a.done(),e.abrupt("return",B);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),_.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,K();case 10:if(!(n=e.sent)){e.next=20;break}return V(),a="https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,z.a.get(a);case 16:return(r=e.sent).data&&(o=H(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),_.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,G(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,z.a.get("https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&X(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},X=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],searchLocation:"all",numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Y().then((function(a){t?e.setState({searchLocation:t}):e.setState({searchLocation:"all"});var r="all"===(t=e.state.searchLocation)?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n||e.state.numberOfEvents)})}))},e.updateNumberOfEvents=function(t){var n=e.state.searchLocation?e.state.searchLocation:"all";void 0===t||""===t||t<0?(e.setState({numberOfEvents:32}),e.updateEvents(n,32)):void 0!==t&&""!==t&&t>0&&(e.setState({numberOfEvents:parseInt(t,10)}),e.updateEvents(n,t))},e.getData=function(){console.log("chart: ",e.state);var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,G(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&Y().then((function(e){o.mounted&&o.setState({events:e,locations:H(e),numberOfEvents:o.state.numberOfEvents?o.state.numberOfEvents:32})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){if(void 0===this.state.showWelcomeScreen)return Object(w.jsx)("div",{className:"App"});var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(L,{locations:t,updateEvents:this.updateEvents,numberOfEvents:n}),Object(w.jsx)(Z,{numberOfEvents:n,updateNumberOfEvents:this.updateNumberOfEvents}),Object(w.jsxs)("div",{className:"data-vis-wrapper",children:[Object(w.jsx)(q,{events:a}),Object(w.jsx)(p.a,{height:400,children:Object(w.jsxs)(v.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(w.jsx)(m.a,{}),Object(w.jsx)(b.a,{type:"category",dataKey:"city",name:"city"}),Object(w.jsx)(j.a,{type:"number",dataKey:"number",name:"number of events"}),Object(w.jsx)(g.a,{cursor:{strokeDasharray:"3 3"}}),Object(w.jsx)(O.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(w.jsx)(S,{events:a}),Object(w.jsx)(A,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){K()}})]})}}]),n}(a.Component),$=Q,ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(188).config("eb8baee199c5492b934e437b2573835d").install(),s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne()}},[[356,1,2]]]);
//# sourceMappingURL=main.60879c65.chunk.js.map