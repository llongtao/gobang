(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),o=s.n(n);o.a},1438:function(t,e,s){"use strict";var n=s("2fe4"),o=s.n(n);o.a},2662:function(t,e,s){"use strict";var n=s("8476"),o=s.n(n);o.a},"2fe4":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("4160"),s("b0c0"),s("159b"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("8bbf"),o=s.n(n),a=s("5880"),i=s.n(a),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{width:"390px",height:"700px",margin:"auto"},attrs:{id:"app"}},[s("div",{staticStyle:{height:"700px"}},[s("victory",{attrs:{type:"danger",title:"我是标题",dangerText:"Delete"},model:{value:t.showVictoryPage,callback:function(e){t.showVictoryPage=e},expression:"showVictoryPage"}}),0==t.status?s("login"):t._e(),1==t.status?s("groupList"):t._e(),2==t.status?s("group"):t._e(),3==t.status&&t.isDraw?s("select-word"):t._e(),4==t.status?s("drawing"):t._e()],1),s("div",[s("el-link",{staticStyle:{"font-size":"5px"},attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[t._v("粤ICP备19032736号-1")])],1)])},c=[],l=(s("c975"),s("5530")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"draw"}},[s("el-container",{on:{click:t.shutAll}},[s("el-header",{staticStyle:{padding:"'0px 0px'",height:"30px"},on:{click:t.shutAll}},[s("span",[s("el-row",[s("el-col",{attrs:{span:8}},[t.me?t._e():s("div",[t._v("等待对手")]),t.me?s("div",[t._v("自己回合")]):t._e()]),s("el-col",{attrs:{span:8}},[1==t.userType?s("div",[t._v("执黑")]):t._e(),2==t.userType?s("div",[t._v("执白")]):t._e()]),s("el-col",{attrs:{span:8}},[2==t.userType?s("div",[t._v("对手 "+t._s(t.otherName)+" 执黑")]):t._e(),1==t.userType?s("div",[t._v("对手 "+t._s(t.otherName)+" 执白")]):t._e()])],1)],1)]),s("el-main",{staticClass:"board"},[s("canvas",{ref:"canvas",attrs:{id:"cvs",width:"380",height:"380"},on:{mousedown:function(e){return t.chessClick(e)}}}),s("chat",{attrs:{messageList:t.messageList}})],1)],1)],1)},d=[],m=(s("cb29"),s("ac1f"),s("1276"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"chat-box"}},[s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline},nativeOn:{submit:function(t){t.preventDefault()}}},[s("el-form-item",[s("el-input",{attrs:{size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)}},model:{value:t.formInline.message,callback:function(e){t.$set(t.formInline,"message",e)},expression:"formInline.message"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.send}},[t._v("发送")])],1)],1),s("div",{staticClass:"chat"},[s("div",{ref:"box",staticClass:"msg"},t._l(t.messageList,(function(e,n){return s("div",{key:n,class:[e.type,"msg-item"]},[s("el-row",[s("el-col",{attrs:{span:5}},[s("div",{staticClass:"name"},[t._v(t._s(e.name))])]),s("el-col",{attrs:{span:19}},[s("div",{staticClass:"content"},[t._v(t._s(e.content))])])],1)],1)})),0)])],1)}),p=[],h={data:function(){return{formInline:{message:""}}},props:["messageList"],computed:Object(l["a"])({},Object(a["mapState"])(["status","ws","keyword","groupId","nickName"])),methods:{onmessage:function(t){this.messageList.unshift(t)},send:function(){this.formInline.message&&(this.ws.send("msg::"+this.formInline.message),this.formInline.message="")}}},f=h,g=(s("2662"),s("2877")),w=Object(g["a"])(f,m,p,!1,null,null,null),v=w.exports,b={data:function(){return{chess:{},context:{},chessBoard:[],count:0,wins:[],myWin:[],computerWin:[],over:!1}},components:{chat:v},computed:Object(l["a"])({},Object(a["mapState"])(["keyword","ws","status","messageList","picture","userType","nickName","groupId","otherName","me"])),mounted:function(){var t=this;setTimeout((function(){t.init()}));var e=this;if(!this.ws)return this.$message("连接失败"),void this.$store.commit("logout");this.ws.onmessage=function(s){var n=JSON.parse(s.data),o=n.type,a=n.msg;if(window.console.log("drow:"+s.data),"err"==o)e.$message(a);else if("msg"==o)e.messageList.unshift(a);else if("group"==o)e.$store.commit("groupChange",a);else if("start"==o)t.init(),e.$store.commit("gameStart",a);else if("show"==o)t.open(a);else if("player:1"==o){if(window.console.log(t.userType),2==t.userType){var i=a.split(":");e.put(i[0],i[1],1)}}else if("player:2"==o&&(window.console.log("play2"),1==t.userType)){window.console.log("play2:in");var r=a.split(":");e.put(r[0],r[1],2)}}},methods:{init:function(){var t=this;this.chess=this.$refs.canvas,window.console.log(this.chess),this.context=this.chess.getContext("2d"),this.drawImage((function(){t.drawChessBoard()})),this.fillArray()},fillArray:function(){for(var t=0;t<15;t++){this.chessBoard[t]=[];for(var e=0;e<15;e++)this.chessBoard[t][e]=0}},drawImage:function(t){t()},drawChessBoard:function(){var t=this.context;t.fillStyle="#fff",t.fillRect(0,0,380,380),t.strokeStyle="#bfbfbf";for(var e=15,s=25,n=0;n<15;n++)t.moveTo(e+n*s,e),t.lineTo(e+n*s,365),t.stroke(),t.moveTo(e,e+n*s),t.lineTo(365,e+n*s),t.stroke(),t.moveTo(e+7*s,e+7*s),t.arc(e+7*s,e+7*s,3,0,2*Math.PI),t.stroke(),t.moveTo(e+3*s,e+3*s),t.arc(e+3*s,e+3*s,3,0,2*Math.PI),t.stroke(),t.moveTo(e+3*s,e+11*s),t.arc(e+3*s,e+11*s,3,0,2*Math.PI),t.stroke(),t.moveTo(e+11*s,e+11*s),t.arc(e+11*s,e+11*s,3,0,2*Math.PI),t.stroke(),t.moveTo(e+11*s,e+3*s),t.arc(e+11*s,e+3*s,3,0,2*Math.PI),t.stroke()},onStep:function(t,e,s){if(window.console.log("player:"+s),s){window.console.log("onstep"+t+e+s);var n=this.context;n.beginPath(),n.arc(15+25*t,15+25*e,11,0,2*Math.PI),n.closePath();var o=n.createRadialGradient(15+25*t+2,15+25*e-2,13,15+25*t+2,15+25*e-2,0);if(1==s)o.addColorStop(0,"#0a0a0a"),o.addColorStop(1,"#636766");else{if(2!=s)return;o.addColorStop(0,"#d1d1d1"),o.addColorStop(1,"#f9f9f9")}n.fillStyle=o,n.fill()}},put:function(t,e,s){window.console.log("play2:put"),this.over||(window.console.log("play2:put:"+this.me),this.me||0===this.chessBoard[t][e]&&(this.chessBoard[t][e]=1,this.onStep(t,e,s),this.$store.commit("changePut",!0)))},chessClick:function(t){if(!this.over&&this.me){var e=t.offsetX,s=t.offsetY,n=Math.floor(e/25),o=Math.floor(s/25);window.console.log(this.chessBoard),window.console.log(n),window.console.log(o),0===this.chessBoard[n][o]&&(this.chessBoard[n][o]=1,this.onStep(n,o,this.userType),this.$store.commit("changePut",!1),this.ws.send("put::"+n+":"+o+":"+this.userType+":"+this.groupId))}},open:function(t){var e=this.$refs.canvas;this.$store.commit("setPicture",e),this.$store.commit("showVictory",t)}}},y=b,k=(s("bbf3"),Object(g["a"])(y,u,d,!1,null,null,null)),x=k.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("el-container",[s("el-header",{staticStyle:{padding:"60px 30px"}},[s("el-input",{attrs:{size:"small",placeholder:"请输入4个字以内的昵称"},model:{value:t.nickName,callback:function(e){t.nickName=e},expression:"nickName"}})],1),s("el-main",[s("el-button",{attrs:{size:"small"},on:{click:t.login}},[t._v("确定")])],1)],1)],1)},S=[],I={data:function(){return{success:!1,nickName:"",status:0}},computed:Object(l["a"])({},Object(a["mapState"])(["keyword","ws","status","messageList","picture"])),methods:{login:function(){if(!this.success)if(this.nickName)if(this.nickName.length>4)this.$message("昵称不能多于4个字");else{var t=this,e="ws://gobang.aexp.top";window.console.log("ws://gobang.aexp.top");var s=new WebSocket(e+"/gobang");s.onopen=function(){s.send("login::"+t.nickName)},s.onmessage=function(e){window.console.log(e);var n=JSON.parse(e.data);window.console.log(n);var o=n.type,a=n.msg;"err"==o?(window.console.log("msg err"),t.$message(a)):"groupList"==o&&(t.$store.commit("login",{name:t.nickName,ws:s}),localStorage.setItem("nickName",t.nickName),t.success=!0)}}else this.$message("昵称不能为空")}},mounted:function(){this.nickName=localStorage.getItem("nickName"),this.nickName&&!this.ws&&this.login()}},N=I,O=(s("9ce0"),Object(g["a"])(N,_,S,!1,null,null,null)),C=O.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"groupList"}},[s("el-container",[s("el-header",{staticStyle:{padding:"20px 10px",height:"160px"}},[s("el-row",{staticStyle:{margin:"10px 0px"}},[s("el-col",{attrs:{span:4}},[s("div",{},[s("el-avatar",{attrs:{size:"small",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}})],1)]),s("el-col",{staticStyle:{padding:"1px 0px","text-align":"left","font-size":"18px"},attrs:{span:12}},[s("div",[t._v(t._s(t.nickName))])]),s("el-col",{attrs:{span:8}},[s("div",[s("el-button",{attrs:{size:"mini"},on:{click:t.logout}},[t._v("退出")])],1)])],1),s("el-divider"),s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"lable-width":"0px",size:"small",model:t.formInline}},[s("el-form-item",{attrs:{label:"编号"}},[s("el-input",{staticStyle:{width:"120px"},attrs:{"label-width":"50%",placeholder:"编号"},model:{value:t.formInline.searchId,callback:function(e){t.$set(t.formInline,"searchId",e)},expression:"formInline.searchId"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),s("el-main",{staticStyle:{"text-align":"center margin: auto"}},[s("div",{staticClass:"grid-content bg-purple-dark"},[s("div",[s("el-table",{staticStyle:{"text-align":"center width: 50% vertical-align:middle margin:0px auto"},attrs:{data:t.tableData,size:"small",stripe:""}},[s("el-table-column",{attrs:{"min-width":"45%",prop:"id",label:"编号"}}),s("el-table-column",{attrs:{"min-width":"45%",prop:"host",label:"房主"}}),s("el-table-column",{attrs:{"min-width":"45%",prop:"memberSum",label:"人数"}}),s("el-table-column",{attrs:{"min-width":"45%",prop:"status",formatter:t.getStatusName,label:"状态"}}),s("el-table-column",{attrs:{label:""},scopedSlots:t._u([{key:"default",fn:function(e){return["2"==e.row.status&&e.row.memberSum<2?s("el-button",{attrs:{size:"mini"},on:{click:function(s){return t.join(e.$index,e.row)}}},[t._v("加入")]):t._e()]}}])})],1)],1)])]),s("el-footer",[s("el-button",{attrs:{size:"small"},on:{click:t.createGroup}},[t._v("创建房间")])],1)],1)],1)},$=[],P=(s("841c"),{data:function(){return{tableData:[],formInline:{searchId:""}}},computed:Object(l["a"])({},Object(a["mapState"])(["status","name","ws","nickName"])),methods:{checkCon:function(){window.console.log("checkconn"),this.ws||(window.console.log("reload"),location.reload())},join:function(t,e){this.checkCon(),window.console.log(t),this.ws.send("join::"+this.nickName+":"+e.id)},search:function(){this.checkCon(),this.ws.send("search::"+this.formInline.searchId)},createGroup:function(){this.checkCon();var t=this;this.ws.send("create::"+t.nickName)},getStatusName:function(t){return"2"==t.status?"等待":"3"==t.status||"4"==t.status?"进行中":void 0},logout:function(){localStorage.setItem("nickName",""),location.reload()}},mounted:function(){this.checkCon();var t=this;this.ws.onmessage=function(e){var s=JSON.parse(e.data),n=s.type;"groupList"==n?(window.console.log(s.msg),t.tableData=s.msg):"create"==n?t.$store.commit("create",s.msg.id):"group"==n&&t.$store.commit("groupChange",s.msg)},this.search(),this.ws.onclose=function(t){window.console.log(t),location.reload()}}}),T=P,L=Object(g["a"])(T,j,$,!1,null,null,null),M=L.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"group"}},[s("el-container",[s("el-header",{staticStyle:{padding:"10px 10px",height:"80px"}},[s("div",{staticStyle:{padding:"10px 20px"}},[t._v("房间号:"+t._s(t.groupId))]),t.isHost?s("el-button",{on:{click:t.start}},[t._v("开始游戏")]):t._e(),t.isHost?t._e():s("span",[t._v("等待房主开始游戏")])],1),s("el-main",{staticStyle:{height:"200px"}},[s("el-table",{attrs:{data:t.tableData,size:"mini",stripe:""}},[s("el-table-column",{attrs:{prop:"name",label:"玩家"}}),s("el-table-column",{attrs:{prop:"isMaster",formatter:t.getRole,label:""}}),s("el-table-column",{attrs:{width:"80%",label:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.name==t.nickName?s("el-button",{attrs:{size:"mini"},on:{click:t.exit}},[t._v("退出")]):t._e()]}}])})],1)],1),s("el-footer",[s("chat",{attrs:{messageList:t.messageList}})],1)],1)],1)},z=[],D={data:function(){return{tableData:[]}},components:{chat:v},computed:Object(l["a"])({},Object(a["mapState"])(["isHost","nickName","groupId","ws","messageList"])),methods:{checkCon:function(){this.ws||location.reload()},search:function(){this.checkCon();var t=this;t.ws.send("group::"+t.groupId)},start:function(){this.checkCon(),this.ws.send("start::"+this.groupId)},getRole:function(t){return t.isMaster?"房主":"已加入"},exit:function(){this.checkCon();var t=this;this.ws.send("exit::"+this.nickName+":"+this.groupId),t.$store.commit("exit")}},mounted:function(){this.checkCon();var t=this;this.search();var e=this.ws;e.onmessage=function(e){var s=JSON.parse(e.data);window.console.log("===>"+e.data);var n=s.type,o=s.msg;"err"==n?t.$message(o):"group"==n?(t.tableData=o.memberList,t.$store.commit("groupChange",o)):"start"==n?t.$store.commit("gameStart",o):"msg"==n&&t.messageList.unshift(o)},e.onclose=function(){location.reload()}}},B=D,E=Object(g["a"])(B,V,z,!1,null,null,null),W=E.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showVictoryPage,expression:"showVictoryPage"}],staticClass:"dialog"},[s("div",{staticClass:"dialog-container"},[s("div",{staticClass:"dialog-title"},[t._v("恭喜 "+t._s(t.winId)+" 胜利了!!!")]),s("div",{staticClass:"dialog-body"},[t.picture?s("el-image",{staticClass:"img",attrs:{id:"img",src:t.picture.toDataURL("image/jpeg")}}):t._e()],1),s("div",{staticClass:"dialog-foot"},[s("el-row",{},[s("el-col",{attrs:{span:12}},[s("el-button",{staticStyle:{background:"#909399",border:"none"},attrs:{type:"primary",size:"mini",icon:"el-icon-download"},on:{click:t.save}})],1),s("el-col",{attrs:{span:12}},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("确定")])],1)],1)],1)])])},H=[],J=(s("ace4"),s("d3b7"),s("466d"),s("5cc6"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7"),{computed:Object(l["a"])({},Object(a["mapState"])(["status","ws","keyword","groupId","nickName","messageList","drawName","picture","showVictoryPage","winId","winWord"])),props:{value:{},type:{type:String,default:"default"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},dangerText:{type:String,default:"删除"},confirmText:{type:String,default:"确认"}},data:function(){return{showMask:!1}},methods:{closeMask:function(){this.$store.commit("closeVictory")},save:function(){if(this.isWeixn())this.$message("微信客户端需要长按图片下载");else{var t=this.picture.toDataURL("image/jpeg");if(window.navigator.msSaveOrOpenBlob){var e=atob(t.split(",")[1]),s=e.length,n=new Uint8Array(s);while(s--)n[s]=e.charCodeAt(s);var o=new Blob([n]);window.navigator.msSaveOrOpenBlob(o,this.winWord+".jpg")}else{var a=document.createElement("a");a.href=t,a.setAttribute("download",this.winWord),a.click()}}},isWeixn:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},confirm:function(){this.closeMask()}},mounted:function(){},watch:{}}),R=J,U=(s("1438"),Object(g["a"])(R,A,H,!1,null,"94c7fb0c",null)),G=U.exports,X={name:"app",components:{drawing:x,login:C,groupList:M,group:W,victory:G},data:function(){return{player:"",role:0,word:"",sendVal:!1,showV:null}},computed:Object(l["a"])({},Object(a["mapState"])(["status","name","isDraw","showVictoryPage","picture"])),methods:{draw:function(){this.player=1},guess:function(){this.player=2},replay:function(){this.player=0,location.reload()},getUrl:function(){var t=window.location.href,e=t,s=e.indexOf("?");return s>0&&(e=e.substring(0,s)),e}},mounted:function(){}},Y=X,q=(s("034f"),Object(g["a"])(Y,r,c,!1,null,null,null)),F=q.exports,K=s("5f72"),Q=s.n(K);o.a.config.productionTip=!1,o.a.use(Q.a),o.a.use(i.a);var Z=new i.a.Store({state:{ws:null,nickName:"",status:0,keyword:"",isHost:!1,groupId:"",isDraw:!1,showDesc:!1,drawName:"",messageList:[],picture:null,showVictoryPage:!1,winId:"",winWord:"",winWordDesc:"",userType:"",otherName:"",me:!0},mutations:{login:function(t,e){window.console.log(e.name),window.console.log(e.ws),t.status=1,t.nickName=e.name,t.ws=e.ws},logout:function(t){t.status=0,t.nickName="",t.ws=null},create:function(t,e){t.groupId=e,t.isHost=!0,t.status=2},join:function(t,e){t.groupId=e,t.status=2,t.isHost=!1},exit:function(t){t.groupId="",t.status=1,t.isHost=!1},start:function(t){t.status=3},groupChange:function(t,e){t.groupId=e.id,t.status=e.status,t.userType=e.blackUser==t.nickName?1:2,t.isHost=e.host==t.nickName,e.memberList.forEach((function(e){e.name!=t.nickName&&(t.otherName=e.name)})),t.otherName||(t.otherName="机器人")},gameStart:function(t,e){t.showVictoryPage=!1,t.me=e.blackUser!=t.nickName,e.useAI&&(t.me=!0),this.commit("groupChange",e)},changeStatus:function(t,e){t.status=e},changePut:function(t,e){t.me=e},setPicture:function(t,e){t.picture=e},showVictory:function(t,e){t.winId=e,t.winWord=t.keyword.name,t.winWordDesc=t.keyword.desc,t.showVictoryPage=!0},closeVictory:function(t){t.showVictoryPage=!1,t.status=2}}});new o.a({el:"#app",render:function(t){return t(F)},store:Z}).$mount("#app")},5880:function(t,e){t.exports=Vuex},"5f72":function(t,e){t.exports=ELEMENT},8476:function(t,e,s){},"85ec":function(t,e,s){},"8bbf":function(t,e){t.exports=Vue},"9ce0":function(t,e,s){"use strict";var n=s("d64c"),o=s.n(n);o.a},bbf3:function(t,e,s){"use strict";var n=s("dc0b"),o=s.n(n);o.a},d64c:function(t,e,s){},dc0b:function(t,e,s){}});
//# sourceMappingURL=app.5c886de0.js.map