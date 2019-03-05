(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(26)},19:function(t,e,n){},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=(n(19),n(1)),c=n.n(s),u=n(2),l=n(5),d=n(6),f=n(11),h=n(7),p=n(12),m=n(8),v=n.n(m),g=(n(22),n(9)),y=n(10),w=n.n(y),b=function(t){return w()(t.slice(0,10),"YYYY-MM-DD")},k=function(t){var e=b(t.from);return t.data.reduce(function(t,n){return n&&(t[e.format("YYYY-MM-DD")]=Number(n)),e.add(1,"days"),t},{})},Y=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(f.a)(this,Object(h.a)(e).call(this,t))).getAddon=function(){try{var t=new g.Addon({});return t.on("init",function(t){console.log("Addon initialization",t),n.loadData(t)}),t.on("reload",function(){}),t.on("update",function(t){console.log("Addon update - options: ",t),n.loadData(t)}),t}catch(e){console.log(e)}return null},n.state={addon:n.getAddon(),currencyCache:{},portfolioPerDay:{},portfolios:[],isLoaded:!1},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"loadCurrenciesCache",value:function(){var t=Object(u.a)(c.a.mark(function t(){var e=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!Object.keys(this.state.currencyCache).length){t.next=3;break}return console.log("Skip re-loading currency cache."),t.abrupt("return");case 3:return console.log("Loading currencies data."),t.next=6,this.state.addon.request({method:"GET",endpoint:"currencies/usd/history",query:{base:"cad"}}).then(function(t){var n=k(t);console.log("Currency cache: ",n),e.setState({currencyCache:n})}).catch(function(t){console.error("Failed to load currency data.",t)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t=Object(u.a)(c.a.mark(function t(e){var n,a,r,o,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadCurrenciesCache();case 2:return t.next=4,this.loadPortfolioData(e);case 4:return n=t.sent,t.next=7,this.loadTransactions(e);case 7:a=t.sent,r=Object.keys(n).reduce(function(t,e){var r=a[e]||{};return r.value=n[e],t[e]={value:n[e],deposit:r.deposit||0,withdrawal:r.withdrawal||0,income:r.income||0,interest:r.interest||0},t},{}),o=[],i=0,Object.keys(r).sort().forEach(function(t){var e=r[t];i=e.deposit-e.withdrawal,o.push({date:t,value:e.value,deposits:i})}),this.setState({portfolios:o,portfolioPerDay:r,isLoaded:!0}),console.log("Loaded the data",o);case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"loadPortfolioAndTransactions",value:function(){var t=Object(u.a)(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{portfolio:this.loadPortfolioData(e),transactions:this.loadTransactions(e)});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"loadPortfolioData",value:function(t){console.log("Loading portfolio data.");var e={from:t.dateRangeFilter&&t.dateRangeFilter[0],to:t.dateRangeFilter&&t.dateRangeFilter[1],groups:t.groupsFilter,institutions:t.institutionsFilter,investments:"all"===t.investmentsFilter?null:t.investmentsFilter};return this.state.addon.request({query:e,method:"GET",endpoint:"portfolio"}).then(function(t){var e=function(t){var e=t.history.total,n=b(e.from);return e.data.reduce(function(t,e){return e&&(t[n.format("YYYY-MM-DD")]=Number(e)),n.add(1,"days"),t},{})}(t);return console.log("Portfolio data: ",e),e}).catch(function(t){console.error("Failed to load portfolio data.",t)})}},{key:"loadTransactions",value:function(t){var e=this;console.log("Loading transactions data.");var n={groups:t.groupsFilter,institutions:t.institutionsFilter,investments:"all"===t.investmentsFilter?null:t.investmentsFilter};return this.state.addon.request({query:n,method:"GET",endpoint:"transactions"}).then(function(t){var n=function(t,e){return t.reduce(function(t,n){var a=n.type;if(["sell","buy","transfer"].includes(a))return t;var r=b(n.date),o=r.format("YYYY-MM-DD"),i=t[o]?t[o]:{deposit:0,withdrawal:0,interest:0,income:0},s=Number(n.currency_amount);return s=n.investment&&n.investment.includes(":usd")?function(t,e,n){var a=n[t.format("YYYY-MM-DD")];return a?e/a:e}(r,s,e):s,"deposit"==a&&i?i.deposit+=s:["fee","interest","tax"].includes(a)?i.interest+=Math.abs(s):["income","dividend","distribution"].includes(a)?i.income+=s:"withdrawal"==a?i.withdrawal+=Math.abs(s):console.error("Unknown type",a),t[o]=i,t},{})}(t,e.state.currencyCache);return console.log("Transactions data: ",n),n}).catch(function(t){console.error("Failed to load transactions data.",t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Wealthica React Portfolio add using highcharts."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.ea3fc4a7.chunk.js.map