/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.util.Dojo","jsx3.gui.Block");jsx3.util.Dojo.load();dojo.require("dojox.lang.docs");dojo.require("dojo._base.connect");dojo.require("dojo._base.Deferred");dojo.require("dojo._base.json");dojo.require("dojo._base.array");dojo.require("dojo._base.Color");dojo.require("dojo._base.browser");dojo.require("dijit.dijit");dojo.require("dojox.html._base");jsx3.Class.defineClass("jsx3.gui.DojoWidget",jsx3.gui.Block,null,function(l,e){var
ub={A:"getJSON",B:"(",C:")",D:"prop",E:"master.xml",F:"GI_Builder/plugins/jsx3.ide.palette.properties/templates/master.xml",G:"1",H:"dojo",I:"Dojo",J:"attributeMap",K:"params",L:"string",M:'attr("',N:'")',O:'", val)',P:"boolean",Q:"jsxselect",R:/\n/,S:"jsxtextarea",T:"jsxtext",U:"objJSX.set",V:"(vntValue);",W:"enum",X:"jsxid",Y:"jsx3.Boolean.TRUE",Z:"True",_:"jsx3.Boolean.FALSE",a:"/dijit/themes/",aa:"False",b:"/",ba:"event",c:".css",ca:"objEVENT",d:"head",da:"jsx3.gui.Event",e:"style",ea:"the browser event that triggers this event.",f:"type",fa:"button.gif",g:"text/css",ga:"checkbox.gif",h:"dijit_",ha:"colorpicker.gif",i:"No dijitClassName defined",ia:"slider.gif",j:"open",ja:"vertical-slider.gif",k:".dijitPopup",ka:"timepicker.gif",l:"jsx30block",la:"textbox.gif",m:"onChange",ma:"datepicker.gif",n:"value",na:"textbox-area.gif",o:"beforeEnd",oa:"GI_Builder/images/prototypes/",p:"tundra",q:"100%",r:"_",s:"undefined",t:"function",u:"extends",v:"id",w:"class",x:"get",y:"set",z:"object"};e.dijit=null;var
va={};var
Bb;l._insertThemeStyleSheets=function(b,a){var
qa=jsx3.util.Dojo.getPath(ub.a+b+ub.b+b+ub.c);if(!va[qa]){l._insertStyleSheet(qa,a);dojo.addClass(dojo.body(),b);}};l._insertStyleSheet=function(g,r){var
sa=r.ownerDocument;var
M=(sa.getElementsByTagName(ub.d))[0];var
Pa=va[g];if(!Pa){Pa=va[g]=sa.createElement(ub.e);Pa.setAttribute(ub.f,ub.g);M.appendChild(Pa);dojo.xhrGet({url:g,sync:true,load:function(j){var
j=dojox.html._adjustCssPaths(g,j);if(Pa.styleSheet){if(!Pa.styleSheet.cssText){Pa.styleSheet.cssText=j;}else Pa.styleSheet.cssText+=j;}else Pa.appendChild(sa.createTextNode(j));}});}};e.init=function(m,q,g,k,h,i,s,b){this.dijitClassName=i;this.dijitProps=s||{};this.dijitStyleSheets=b||[];this.jsxsuper(m,q,g,k,h);this._createDijit(this.dijitProps);};e.onAfterAssemble=function(){var
_a={};for(var wb in this)if(wb.substring(0,6)==ub.h)_a[wb.substring(6)]=this[wb];this.jsxsuper.apply(this,arguments);this._createDijit(_a);for(var wb in this._jsxHj)this.setEvent(this._jsxHj[wb],wb);};e.onSetChild=function(){return false;};e._subPropId=function(){return this.dijitClassName;};e._createDijit=function(g){if(!this.dijit){if(!this.dijitClassName)throw new
Error(ub.i);dojo._postLoad=true;dojo.require(this.dijitClassName);if(!Bb&&dijit.popup){Bb=true;dojo.connect(dijit.popup,ub.j,function(){(dojo.query(ub.k)).addClass(ub.l);});}this.dijit=new
(dojo.getObject(this.dijitClassName))(g);setupAccessors(this);var
x=this;dojo.connect(x.dijit,ub.m,function(){x.dijit_value=x.dijit.attr(ub.n);});}};e.isDomPaint=function(){return !(!this.dijitClassName);};e.paintDom=function(){jsx3.html.insertAdjacentHTML(document.body,ub.o,this.paint());var
bb=document.body.lastChild;l._insertThemeStyleSheets(ub.p,bb);if(this.dijitStyleSheets)dojo.forEach(this.dijitStyleSheets,function(q){l._insertStyleSheet(jsx3.util.Dojo.getPath(ub.b+q),bb);});this.dijit.placeAt(bb);if(this.getHeight())bb.firstChild.style.height=ub.q;return bb;};e.attr=function(g,h){return this.dijit.attr.apply(this.dijit,arguments);};e.onDestroy=function(f){this.dijit.destroyRecursive();this.jsxsuper(f);};e.setEvent=function(j,o){(this.getEvents())[o]=j;var
Ka=this._eventHandles=this._eventHandles||{};if(Ka[o])dojo.disconnect(Ka[o]);var
Ga=this;Ka[o]=dojo.connect(this.dijit,o,function(event){Ga.doEvent(o,{objEVENT:event});});return this;};function
iterateProperties(j,h){var
B,na=j.dijit.constructor;while(na){for(var Ib in na.properties){B=true;if(Ib.charAt(0)!=ub.r){var
t=na.properties[Ib];var
ib=typeof j.dijit[Ib];if(!t.type&&ib!=ub.s&&ib!=ub.t)t.type=ib;h(na.properties[Ib],Ib);}}na=na[ub.u];}if(!B)for(var Ib in j.dijit){var
cb=typeof j.dijit[Ib];if(Ib.charAt(0)!=ub.r&&cb!=ub.t)h({type:cb},Ib);}}var
Db=[];function
setupAccessors(s){if(!Ea)Db.push(s);iterateProperties(s,function(p,d){var
P=(d.charAt(0)).toUpperCase()+d.substring(1,d.length);if(d!=ub.v&&d!=ub.w)if(!s[ub.x+P]&&!s[ub.y+P]){var
na=s[ub.x+P]=function(){return s.dijit.attr(d);};na._dojoGetter=true;var
wb=s.dijit.constructor.prototype[d];if(wb&&typeof wb==ub.z)s[ub.A+P]=function(){return ub.B+dojo.toJson(s.dijit.attr(d))+ub.C;};s[ub.y+P]=function(q){s[ub.h+d]=q;s.dijit.attr(d,q);};}});}var
Ea;e.getMetadataXML=function(o){if(!Ea){Ea=true;dojox.lang.docs.init();for(var
Eb=0,mb=Db.length;Eb<mb;Eb++)setupAccessors(Db[Eb]);}var
Y=this;var
Cb,w=this.dijit.constructor;var
ba=jsx3.xml.CDF.Document.newDocument();if(o==ub.D){ba.insertRecord({include:ub.E,absinclude:ub.F,group:ub.z});ba.insertRecord({group:ub.G,jsxid:ub.H,jsxtext:ub.I});function
addProperty(r,Eb){if(r.type==ub.z&&r.name!=ub.J&&r.name!=ub.K)return;var
sa=(Eb.charAt(0)).toUpperCase()+Eb.substring(1,Eb.length);if(Y[ub.x+sa]._dojoGetter){var
na=w.prototype[Eb];var
db={jsxid:Eb,jsxtext:sa,jsxtip:r.description,eval:r.type==ub.L?0:1,docgetter:typeof na==ub.s?ub.M+Eb+ub.N:ub.x+sa,docsetter:typeof na==ub.s?ub.M+Eb+ub.O:ub.y+sa,getter:na&&typeof na==ub.z?ub.A+sa:ub.x+sa,jsxmask:r.type==ub.P?ub.Q:ub.R.test(w.prototype[Eb])?ub.S:ub.T,jsxexecute:ub.U+sa+ub.V};var
zb=ba.insertRecord(db,ub.H);if(r.type==ub.P){var
Aa=ba.getXML();var
Da=Aa.createNode(1,ub.W);Da.setAttribute(ub.X,ub.Y);Da.setAttribute(ub.T,ub.Z);zb.appendChild(Da);var
vb=Aa.createNode(1,ub.W);vb.setAttribute(ub.X,ub._);vb.setAttribute(ub.T,ub.aa);zb.appendChild(vb);}}}iterateProperties(Y,addProperty);for(var Eb in {position:1,1:1,font:1,box_nobg:1,css:1,interaction:1,access:1})ba.insertRecord({include:ub.E,absinclude:ub.F,group:Eb});}else if(o==ub.ba){function
addMethod(r,Eb){ba.insertRecord({group:ub.H,jsxid:Eb,jsxtext:Eb,jsxtip:r.description},ub.H);ba.insertRecord({jsxid:ub.ca,type:ub.da,jsxtext:ub.ea},Eb);}while(w){for(var Eb in w.methods){Cb=true;if(Eb.charAt(0)!=ub.r)addMethod(w.methods[Eb],Eb);}w=w[ub.u];}if(!Cb)for(var Eb in this.dijit)if(Eb.charAt(0)!=ub.r&&typeof this.dijit[Eb]==ub.t)addMethod({},Eb);}return ba;};l._icons={"dijit.form.Button":ub.fa,"dijit.form.CheckBox":ub.ga,"dijit.ColorPalette":ub.ha,"dijit.form.HorizontalSlider":ub.ia,"dijit.form.VerticalSlider":ub.ja,"dijit.form.TimeTextBox":ub.ka,"dijit.form.CurrencyTextBox":ub.la,"dijit.form.DateTextBox":ub.ma,"dijit.form.NumberSpinner":null,"dijit.ProgressBar":null,"dijit.Editor":ub.na,"dijit.form.Rating":null};e.getIconPath=function(){var
u=l._icons[this.dijitClassName];return u?ub.oa+u:null;};});
