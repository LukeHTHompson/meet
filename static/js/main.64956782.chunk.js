(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(23),o=n.n(s),i=(n(30),n(3)),c=n(4),u=n(6),l=n(5),d=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hidden:!0},e.toggleClass=function(){var t=e.state.hidden;e.setState({hidden:!t})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event,t=Object.values(e.start)[0],n=t.slice(11,16)+" - "+t.slice(0,10),a=Object.values(e.description),r=Object.values(e.htmlLink),s=Object.values(e.organizer)[0];return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsxs)("div",{className:"details-collapsed",children:[Object(d.jsx)("p",{className:"time",children:n}),Object(d.jsxs)("p",{className:"title",children:[e.summary," | ",e.location]}),Object(d.jsx)("p",{className:"group",children:s}),Object(d.jsx)("p",{className:"attendee-count",children:"Attendees: Count"})]}),!this.state.hidden&&Object(d.jsxs)("div",{className:"details-expanded",children:[Object(d.jsx)("p",{className:"location",children:"ADDRESS TO GO HERE"}),Object(d.jsx)("p",{className:"description",children:a}),Object(d.jsx)("p",{className:"public",children:"public"}),Object(d.jsx)("p",{className:"event-link",children:r})]}),Object(d.jsx)("button",{className:"details-button",onClick:this.toggleClass,children:"Details"})]})}}]),n}(a.Component),p=h,m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),v=m,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t,n){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:this.state.showSuggestions?"suggestions":"suggestions hidden",children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t,e.props.NumberOfEvents)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all",e.props.NumberOfEvents)},children:Object(d.jsx)("b",{children:"See All Cities"})},"all")]})]})}}]),n}(a.Component),b=f,g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={limit:32},e.handleLimitChanged=function(t){var n=t.target.value;e.setState({limit:n}),e.props.updateNumberOfEvents(n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.updateNumberOfEvents(this.props.NumberofEvents)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("input",{type:"text",value:this.props.NumberofEvents,className:"limit",onChange:function(t){return e.props.updateNumberOfEvents(t.target.value)}})}}]),n}(a.Component),j=g,w=(n(32),n(7)),O=n.n(w),y=n(8),k=n(25),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(13),E=n.n(S),N=n(11),C=n.n(N),T=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},Z=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n,a,r,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",x);case 4:return e.next=6,I();case 6:if(!(t=e.sent)){e.next=16;break}return q(),n="https://6iiyeovdya.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,E.a.get(n);case 12:return(a=e.sent).data&&(r=T(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=(n(51),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32},e.updateEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;M().then((function(a){var r="all"===(t=t||"all")?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n||e.state.numberOfEvents)})}))},e.updateNumberOfEvents=function(t){void 0===t||""===t||t<0?(e.setState({numberOfEvents:32}),e.updateEvents(null,32)):void 0!==t&&""!==t&&t>0&&(e.setState({numberOfEvents:t}),e.updateEvents(null,t))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t,locations:T(t),numberOfEvents:32})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(d.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(d.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component)),W=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};n(24).config("eb8baee199c5492b934e437b2573835d").install(),o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[53,1,2]]]);
//# sourceMappingURL=main.64956782.chunk.js.map