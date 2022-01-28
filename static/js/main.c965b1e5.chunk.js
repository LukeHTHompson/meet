(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{188:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(84),s=n.n(o),i=(n(188),n(19)),c=n.n(i),l=n(43),u=n(24),d=n(28),h=n(25),p=n(26),f=n(347),v=n(351),m=n(174),b=n(175),g=n(73),j=n(179),w=n(2),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hidden:!0},e.toggleClass=function(){var t=e.state.hidden;e.setState({hidden:!t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=Object.values(e.start)[0],n=t.slice(11,16)+" - "+t.slice(0,10),a=Object.values(e.description),r=Object.values(e.htmlLink),o=Object.values(e.organizer)[0];return Object(w.jsxs)("div",{className:"event",children:[Object(w.jsxs)("div",{className:"details-collapsed",children:[Object(w.jsx)("p",{className:"time",children:n}),Object(w.jsxs)("p",{className:"title",children:[e.summary," | ",e.location]}),Object(w.jsx)("p",{className:"group",children:o}),Object(w.jsx)("p",{className:"attendee-count",children:"Attendees: Count"})]}),!this.state.hidden&&Object(w.jsxs)("div",{className:"details-expanded",children:[Object(w.jsx)("p",{className:"location",children:"ADDRESS TO GO HERE"}),Object(w.jsx)("p",{className:"description",children:a}),Object(w.jsx)("p",{className:"public",children:"public"}),Object(w.jsx)("p",{className:"event-link",children:r})]}),Object(w.jsx)("button",{className:"details-button",onClick:this.toggleClass,children:"Details"})]})}}]),n}(a.Component),x=O,y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(w.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)(x,{event:e})},e.id)}))})}}]),n}(a.Component),k=y,S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.getType=function(){return{type:a.type}},a.color=null,a.type=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{className:this.getType().type,children:Object(w.jsx)("div",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.type="infoAlert",a}return n}(S),E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.type="errorAlert",a}return n}(S),N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,suggestions:a,infoText:"We cannot find the city you are looking for. Please try again."})},e.handleItemClicked=function(t,n){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t,n)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){if(!navigator.onLine)return this.setState({infoText:"Events shown may not be up to date as you are offline. Please connect to enable searching."})}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"CitySearch",children:[Object(w.jsx)(T,{text:this.state.infoText}),Object(w.jsx)("div",{children:"City to Search:"}),!navigator.onLine&&Object(w.jsx)("input",{type:"text",className:"city",value:"Searching is disabled while offline"}),navigator.onLine&&Object(w.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(w.jsxs)("ul",{className:this.state.showSuggestions?"suggestions":"suggestions hidden",children:[this.state.suggestions.map((function(t){return Object(w.jsx)("li",{onClick:function(){return e.handleItemClicked(t,e.props.NumberOfEvents)},children:t},t)})),Object(w.jsx)("li",{onClick:function(){return e.handleItemClicked("all",e.props.NumberOfEvents)},children:Object(w.jsx)("b",{children:"See All Cities"})},"all")]})]})}}]),n}(a.Component),C=N,W=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={limit:32,errorText:""},e.handleLimitChanged=function(t){var n=t.target.value,a=new RegExp(/^\d+$/);console.log(n),n.length>0&&!a.test(n)?e.setState({errorText:"Select a positive integer."}):e.setState({limit:n,errorText:""}),e.props.updateNumberOfEvents(n)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.updateNumberOfEvents(this.props.NumberofEvents)}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{text:this.state.errorText}),Object(w.jsx)("div",{children:"Number of Events: "}),Object(w.jsx)("input",{type:"text",value:this.props.NumberofEvents,className:"limit",onChange:function(t){return e.handleLimitChanged(t)}})]})}}]),n}(a.Component),Z=W;n(191);var A=function(e){return e.showWelcomeScreen?Object(w.jsxs)("div",{className:"WelcomeScreen",children:[Object(w.jsx)("h1",{children:"Welcome to the Meet app"}),Object(w.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(w.jsx)("div",{className:"button_cont",align:"center",children:Object(w.jsxs)("div",{class:"google-btn",children:[Object(w.jsx)("div",{class:"google-icon-wrapper",children:Object(w.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(w.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(w.jsx)("b",{children:"Sign in with google"})})]})}),Object(w.jsx)("a",{href:"https://LukeHTHompson.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},L=(n(192),n(193),n(178)),I=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],D=n(112),M=n.n(D),R=n(70),q=n.n(R),J=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,M.a.get("https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",I);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,U();case 11:if(!(n=e.sent)){e.next=21;break}return F(),a="https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,M.a.get(a);case 17:return(r=e.sent).data&&(o=H(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),q.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},H=function(e){var t=e.map((function(e){return e.location}));return Object(L.a)(new Set(t))},z=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=Object(l.a)(c.a.mark((function t(){var n,a,r=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:null,a=r.length>1&&void 0!==r[1]?r[1]:null,t.next=4,_().then((function(t){var r="all"===(n=n||"all")?t:t.filter((function(e){return e.location===n}));e.setState({events:r.slice(0,a||e.state.numberOfEvents)})}));case 4:case"end":return t.stop()}}),t)}))),e.updateNumberOfEvents=function(t){void 0===t||""===t||t<0?(e.setState({numberOfEvents:32}),e.updateEvents(null,32)):void 0!==t&&""!==t&&t>0&&(e.setState({numberOfEvents:t}),e.updateEvents(null,t))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,J(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&_().then((function(e){o.mounted&&o.setState({events:e,locations:H(e),numberOfEvents:32})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){if(void 0===this.state.showWelcomeScreen)return Object(w.jsx)("div",{className:"App"});var e=this.state;e.locations,e.numberOfEvents;return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(C,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(w.jsx)(Z,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(w.jsxs)(f.a,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(w.jsx)(v.a,{}),Object(w.jsx)(m.a,{type:"category",dataKey:"City",name:"City"}),Object(w.jsx)(b.a,{type:"number",dataKey:"Number",name:"Number of Events"}),Object(w.jsx)(g.a,{cursor:{strokeDasharray:"3 3"}}),Object(w.jsx)(j.a,{data:this.getData(),fill:"#8884d8"})]}),Object(w.jsx)(k,{events:this.state.events}),Object(w.jsx)(A,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){U()}})]})}}]),n}(a.Component),P=z,G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,353)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(176).config("eb8baee199c5492b934e437b2573835d").install(),s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Y(t,e)}))}}(),V()}},[[345,1,2]]]);
//# sourceMappingURL=main.c965b1e5.chunk.js.map