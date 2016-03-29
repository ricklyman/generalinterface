(function(q){var
ub={A:"/",B:" Components",C:/ /g,D:"_",E:"prototypes",F:"_prototypeId",G:"*",H:"The component download timed out",I:"The component download encountered an error",J:"jsx3.io.browser",K:"jsx_ide_file_dialog",L:".",M:"component",N:"jsx_ide_online_search",O:"jsx_ide_online_filter_menu",P:" ",Q:/^(user|featured|uploaded):(.*)/,R:"uploaded:[",S:" TO ",T:"]",U:"featured:true",V:"?fulltext('(",W:" AND ",X:")')",Y:"",Z:"Matrix XML URL: ",_:"Reloading matrix",a:"http://www.generalinterface.org/prototypes/",aa:"license_accepted",b:"images/emptyStar.png",ba:"summary",c:"images/halfStar.png",ca:"online",d:"images/fullStar.png",da:"Not authorized",e:"Class/User",ea:"login",f:"Prototype/",fa:"delete",g:"Rating/",ga:"Accept",h:"feeds/",ha:"application/json",i:"featured",ia:"Content-Type",j:".png",ja:"post",k:"images/",ka:"call1",l:"<img src='",la:"flag",m:"'/>",ma:": ",n:"true",na:"username",o:"<span style='font-weight: bold;'>",oa:"jsx_ide_proto_detail_view",p:"</span>",pa:"(",q:"filterColumn",qa:")",r:"all",ra:"id",s:"rating",sa:"img",t:"downloads",ta:"span",u:"user",ua:"src",v:"uploaded",va:"null",w:"jsxtext",x:"@number,integer",y:"@unescape",z:"@date,medium"};var
yb=ub.a;(jsx3.$O(q)).extend({_emptyStar:q.resolveURI(ub.b),_halfStar:q.resolveURI(ub.c),_fullStar:q.resolveURI(ub.d),uri:{login:yb+ub.e,prototypeRoot:yb+ub.f,rate:yb+ub.g,feeds:yb+ub.h},_currentFilter:ub.i,_getStarImage:function(k){var
k=Number(k),ra=0,K=0;if(isNaN(k)){k=0;}else if(k>0){ra=Math.floor(k);K=k-ra;}var
Ya=ra+ub.j;if(K>=0.75){Ya=ra+1+ub.j;}else if(K>0.25&&K<0.75)Ya=ra+0.5+ub.j;return this.resolveURI(ub.k+Ya);},_getStars:function(p){var
p=Number(p),ra=0,ga=0;if(isNaN(p)){p=0;}else if(p>0){ra=Math.floor(p);ga=p-ra;}var
tb=false;if(ga>=0.75){ra++;}else if(ga>0.25&&ga<0.75)tb=true;var
cb=[];for(var
Ha=0;Ha<5;Ha++)if(Ha<ra){cb.push(this._fullStar._path);}else if(Ha==ra&&tb){cb.push(this._halfStar._path);}else cb.push(this._emptyStar._path);return cb;},formatRating:function(h,i,k,g,e,n){var
qa=k.getRecord(i);h.innerHTML=ub.l+q._getStarImage(qa.rating)+ub.m;},formatComponentName:function(h,i,k,g,e,n){var
Fa=k.getRecord(i);var
x;if(Fa.featured==ub.n){x=ub.o+Fa.name+ub.p;}else x=Fa.name;h.innerHTML=x;},_onOnlineFilterMenuExecute:function(r,c,f){r.selectItem(f,true);var
Xa=r.getRecordNode(f);var
wb=c.getChild(ub.q);switch(f){case ub.r:this._currentFilter=ub.r;c.setXMLURL(this._buildXMLURL());break;case ub.i:this._currentFilter=ub.i;c.setXMLURL(this._buildXMLURL());break;case ub.s:case ub.t:case ub.u:case ub.v:wb.setPath(f,true);wb.setDataType(f!=ub.u?jsx3.gui.Matrix.Column.TYPE_NUMBER:jsx3.gui.Matrix.Column.TYPE_TEXT);wb.setSortDataType(f!=ub.u?jsx3.gui.Matrix.Column.TYPE_NUMBER:jsx3.gui.Matrix.Column.TYPE_TEXT);wb.setText(Xa.getAttribute(ub.w),false);var
E=this.formatRating;if(f==ub.t){E=ub.x;}else if(f==ub.u){E=ub.y;}else if(f==ub.v)E=ub.z;wb.setFormatHandler(E);break;}c.resetCacheData();c.repaint();},_onOnlineFeedMenuExecute:function(a,d){var
Bb=a.getRecordNode(d);window.open(this.uri.feeds+d+ub.A,(Bb.getAttribute(ub.w)+ub.B).replace(ub.C,ub.D));},_onOnlineListExecute:function(f,c,i){var
Bb=c.getRecord(i);f.setOnlineDetail(Bb);},_onOnlineDetailDownload:function(c){var
Na=c.getText();var
Ma=jsx3.ide.getHomeRelativeFile(ub.E),w=jsx3.xml.Document,Cb=this;var
xb=function(n){var
D=n.target;var
Oa=n.subject;var
v=D._objFile;delete D[ub.F];D.unsubscribe(ub.G,xb);if(Oa==w.ON_RESPONSE){D=jsx3.ide.ComponentEditor.prototype.formatXML(D);jsx3.ide.writeUserXmlFile(v,D);}else if(Oa==w.ON_TIMEOUT){jsx3.ide.LOG.error(ub.H);}else if(Oa==w.ON_ERROR)jsx3.ide.LOG.error(ub.I);};(jsx3.ide.getPlugIn(ub.J)).saveFile(jsx3.IDE.getRootBlock(),{name:ub.K,modal:true,folder:Ma,baseFolder:Ma,onChoose:function(f){var
Ga=new
w();Ga.setAsync(true);Ga.subscribe(ub.G,xb);Ga._objFile=f;Ga.load(Cb.uri.prototypeRoot+Na+ub.L+ub.M);}});},_buildXMLURL:function(){var
Ja=jsx3.IDE.getJSXByName(ub.N),qb=jsx3.IDE.getJSXByName(ub.O),Wa=Ja&&jsx3.util.strTrim(Ja.getValue()),Aa=this._currentFilter!=ub.r,cb=this.uri.prototypeRoot,G=[];if(Wa&&Wa.length){G=Wa.split(ub.P);for(var
Ab=G.length;Ab--;){var
F=jsx3.util.strTrim(G[Ab]);if(!F){G.splice(Ab,1);}else{var
zb=F.match(ub.Q);if(!zb){F=F+ub.G;G.splice(Ab,1,F);}else if(!zb[2]){G.splice(Ab,1);}else if(zb[1]==ub.i){Aa=zb[2]==ub.n;G.splice(Ab,1);}else if(zb[1]==ub.v)G.splice(Ab,1,ub.R+zb[2]+ub.S+zb[2]+ub.T);}}}if(Aa)G.push(ub.U);cb=cb+(G.length?ub.V+G.join(ub.W)+ub.X:ub.Y);(this.getLog()).debug(ub.Z+cb);return cb;},_onSearch:function(f,c,l){var
P=this,u=function(j){P._reloadList(j);};if(this._searchTO!=null){window.clearTimeout(this._searchTO);this._searchTO=null;}this._searchTO=window.setTimeout(function(){u(c);this._searchTO=null;},500);},_clearSearch:function(c,a){c.setValue(ub.Y);this._reloadList(a);},_reloadList:function(r){(this.getLog()).debug(ub._);r.setXMLURL(this._buildXMLURL());r.resetCacheData();r.repaint();},getLicenseAgreement:function(){var
da=jsx3.ide.getIDESettings();var
va=this.getId();return da.get(va,ub.aa);},agreeToLicense:function(){var
db=jsx3.ide.getIDESettings();var
Wa=this.getId();db.set(Wa,ub.aa,true);},removeComponent:function(g,j,i,m,d,a){var
mb=this;j.setEnabled(jsx3.gui.Form.STATEDISABLED,true);i.setEnabled(jsx3.gui.Form.STATEDISABLED,true);m.setEnabled(jsx3.gui.Form.STATEDISABLED,true);var
Ga=function(){var
ua=new
jsx3.net.Request();ua.subscribe(jsx3.net.Request.EVENT_ON_RESPONSE,function(k){var
nb=k.target;var
R=nb.getStatus();if(R==204){mb._reloadList(d);g.setOnlineView(ub.ba);}else if(R==401){g.setUserLoginAction(function(){Ga();});g.setLoginBackAction(function(){g.setComponentView(ub.ca);});g.setLoginProblem(ub.da);g.setUserView(ub.ea,true);g.setComponentView(ub.u);}else if(R>=500){}else{}});ua.subscribe(jsx3.net.Request.EVENT_ON_TIMEOUT,function(h){});ua.subscribe(ub.G,function(s){j.setChecked(jsx3.gui.CheckBox.UNCHECKED);j.setEnabled(jsx3.gui.Form.STATEENABLED);m.setEnabled(jsx3.gui.Form.STATEENABLED);});ua.open(ub.fa,mb.uri.prototypeRoot+a.id,true);ua.setRequestHeader(ub.ga,ub.ha);ua.setRequestHeader(ub.ia,ub.ha);ua.send(ub.Y,5000);};Ga();},checkReportCriteria:function(l,b,k,r){var
Xa=l.getValue(),E=jsx3.util.strTrim(b.getValue()),Bb=k.getChecked();r.setEnabled(Xa&&E&&Bb?jsx3.gui.Form.STATEENABLED:jsx3.gui.Form.STATEDISABLED,true);},reportProblem:function(c,k,a,n,g,s){if(!g._selected_detail_record)return;var
Ra=jsx3.ide.getIDESettings(),F=this.getId(),Z=k.getValue(),Fa=k.getRecord(Z),B=jsx3.util.strTrim(a.getValue()),va=g._selected_detail_record,ba=this;var
wb=function(){var
vb=new
jsx3.net.Request();vb.subscribe(jsx3.net.Request.EVENT_ON_RESPONSE,function(j){var
Oa=j.target;var
Mb=Oa.getStatus();if(Mb==201){c.closeReportForm();n.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);window.setTimeout(function(){if(n)n.setDisplay(jsx3.gui.Block.DISPLAYNONE,true);},3000);}else if(Mb==401){c.setUserLoginAction(function(){wb();});c.setLoginBackAction(function(){c.setComponentView(ub.ca);});c.setLoginProblem(ub.da);c.setUserView(ub.ea,true);c.setComponentView(ub.u);}else if(Mb>=500){}else{}});vb.subscribe(jsx3.net.Request.EVENT_ON_TIMEOUT,function(h){});vb.subscribe(ub.G,function(l){s.resetCacheData();});vb.open(ub.ja,ba.uri.prototypeRoot+va.id,true);vb.setRequestHeader(ub.ga,ub.ha);vb.setRequestHeader(ub.ia,ub.ha);vb.send(jsx3.$O.json({id:ub.ka,method:ub.la,params:[Fa.jsxtext+ub.ma+B]}),5000);};if(!Ra.get(F,ub.na)){c.setUserLoginAction(function(){wb();});c.setLoginBackAction(function(){c.setComponentView(ub.ca);});c.setLoginProblem(ub.da);c.setUserView(ub.ea,true);c.setComponentView(ub.u);return;}wb();},rateComponent:function(a,o,k,c){var
Cb=jsx3.ide.getIDESettings();var
Fb=this.getId();var
ea=jsx3.IDE.getJSXByName(ub.oa);if(!ea._selected_detail_record)return;var
Ua=this;var
xa=function(i){var
ya=new
jsx3.net.Request();ya.subscribe(jsx3.net.Request.EVENT_ON_RESPONSE,function(p){var
ba=p.target;var
w=ba.getStatus();if(w==200||w==201){var
mb=jsx3.eval(ub.pa+ba.getResponseText()+ub.qa);ea._selected_detail_record.myRating=mb.rating;ea._selected_detail_record.rating=mb.newRating;c.insertRecord(ea._selected_detail_record,null,false);}else if(w==401){a.setUserLoginAction(function(){xa(function(){a.setComponentView(ub.ca);});});a.setLoginBackAction(function(){a.setComponentView(ub.ca);});a.setLoginProblem(ub.da);a.setUserView(ub.ea,true);a.setComponentView(ub.u);}else if(w>=500){}else{}});ya.subscribe(jsx3.net.Request.EVENT_ON_TIMEOUT,function(b){});ya.subscribe(ub.G,function(p){a.setOnlineDetailRatings(ea._selected_detail_record,true);if(i)i();});ya.open(ub.ja,Ua.uri.rate,true);ya.setRequestHeader(ub.ga,ub.ha);ya.setRequestHeader(ub.ia,ub.ha);ya.send(jsx3.$O.json({prototype_id:ea._selected_detail_record.id,rating:k}),5000);};if(!Cb.get(Fb,ub.na)){a.setUserLoginAction(function(){if(ea._selected_detail_record.user!=Cb.get(Fb,ub.na)){xa(function(){a.setOnlineDetail(ea._selected_detail_record,true);a.setComponentView(ub.ca);});}else{a.setOnlineDetail(ea._selected_detail_record,true);a.setComponentView(ub.ca);}});a.setLoginBackAction(function(){a.setComponentView(ub.ca);});a.setUserView(ub.ea,true);a.setComponentView(ub.u);return;}xa();},onRatingMouseOver:function(e,n){var
w=n.target||n.srcElement;var
Da=jsx3.IDE.getJSXByName(ub.oa);if(!Da._selected_detail_record)return;var
xb;var
S=jsx3.IDE.getJSXById(e.getAttribute(ub.ra));if(w.tagName.toLowerCase()==ub.sa){xb=jsx3.IDE.getJSXById(w.parentNode.getAttribute(ub.ra));}else if(w.tagName.toLowerCase()==ub.ta)xb=jsx3.IDE.getJSXById(w.getAttribute(ub.ra));if(!xb)return;var
Nb=S.getChildren();var
K=xb.getChildIndex();for(var
tb=0,T=Nb.length;tb<T;tb++){var
eb=S.getChild(tb);var
Cb=(tb<=K?this._fullStar:this._emptyStar).toString();eb.setSrc(Cb);var
na=document.getElementById(eb._jsxid);if(na&&na.children[0])na.children[0].setAttribute(ub.ua,Cb);}},onRatingMouseOut:function(f,a){var
xa=jsx3.IDE.getJSXById(f.getAttribute(ub.ra));var
lb=jsx3.IDE.getJSXByName(ub.oa);if(!lb._selected_detail_record)return;var
x=lb._selected_detail_record.myRating;x=x!=ub.va?parseInt(x,10):0;var
ja=xa.getChildren();for(var
ib=0,Ga=ja.length;ib<Ga;ib++){var
ua=xa.getChild(ib);var
ta=(ib<x?this._fullStar:this._emptyStar).toString();ua.setSrc(ta);var
ab=document.getElementById(ua._jsxid);if(ab&&ab.children[0])ab.children[0].setAttribute(ub.ua,ta);}}});})(this);
