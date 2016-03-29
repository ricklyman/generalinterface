jsx3.lang.Package.definePackage("jsx3.amp",function(o){var
ub={a:"http://www.generalinterface.org/gi/amp",b:"amp",c:"plugins.xml",d:"plugin.xml",e:"plugins",f:"jsx3.amp",g:"string",h:"function",i:"",j:/\s/g};o.NS=ub.a;o.AC={"http://www.tibco.com/gi/amp":true,"http://www.generalinterface.org/gi/amp":true};o.isNS=function(c){return o.AC[c];};o.getXmlNS=function(h){var
Nb={};Nb[h.getNamespaceURI()]=ub.b;return Nb;};o.DESCRIPTOR=ub.c;o.METAFILE=ub.d;o.DIR=ub.e;o.LOG=jsx3.util.Logger.getLogger(ub.f);o.jh=function(i){var
Q=i;if(typeof Q==ub.g)Q=jsx3.Class.forName(Q)||jsx3.lang.getVar(Q);if(Q instanceof jsx3.Class)Q=Q.getConstructor();if(typeof Q!=ub.h)Q=null;return Q;};o.kn=function(h,n){var
eb=(jsx3.$S(h||ub.i)).trim();if(eb.length>0){var
ia=jsx3.$A(eb.split(ub.j));var
Z=n.getSearchPath();var
ua=(jsx3.$A(Z)).find(function(i){return ia.contains(i.toString());});if(ua)return ua.toString();}return ub.i;};});jsx3.lang.Package.definePackage("jsx3.amp.util",function(e){});jsx3.lang.Class.defineInterface("jsx3.amp.Bindable",null,function(b,g){g.f5=function(){if(!this._bindings)this._bindings=jsx3.$H();return this._bindings;};g.addBindableProp=function(d,i){var
ub=this.f5();ub[d]={H0:d,LM:i};};g.getBindableProps=function(){return (this.f5()).keys();};g.updateBindableOn=function(p,o,c){o.subscribe(c,(jsx3.$F(this.updateBindable)).bind(this,[p]));};g.updateBindable=function(f){var
Q=(this.f5())[f];this.setBindableProp(f,this.eval(Q.LM));};g.setBindableProp=function(q,p){var
ab=this[q];if(ab!==p){this[q]=p;if(this.publish)this.publish({subject:q,oldValue:ab,value:p});}};});jsx3.lang.Class.defineClass("jsx3.amp.Ext",null,null,function(f,q){var
ub={a:".",b:"?",c:"id",d:"name",e:"point"};var
w=jsx3.amp;q.init=function(i,c){this._xml=new
w.XML(c);this.E0=i;};q.getId=function(){var
la=this.getLocalId();return this.getPlugIn()+ub.a+(la||ub.b);};q.getLocalId=function(){return this._xml.attr(ub.c);};q.getName=function(){return this._xml.attr(ub.d);};q.getPlugIn=function(){return this.E0;};q.getEngine=function(){return this.E0.getEngine();};q.getPointId=function(){return this._xml.attr(ub.e);};q.getPoint=function(){return (this.getEngine()).getExtPoint(this.getPointId());};q.getData=function(){return this._xml.children();};q.toString=function(){return this.getId();};});jsx3.lang.Class.defineClass("jsx3.amp.ExtPoint",null,[jsx3.util.EventDispatcher],function(c,f){var
ub={a:"extended",b:".",c:"id",d:"name",e:"processor",f:"type",g:"Parameter objProcessor must not be null."};var
w=jsx3.amp;c.EXTENDED=ub.a;f.init=function(s,m){this._xml=new
w.XML(m,true);this.E0=s;};f.getId=function(){return this.E0.getId()+ub.b+this.getLocalId();};f.getLocalId=function(){return this._xml.attr(ub.c);};f.getName=function(){return this._xml.attr(ub.d);};f.getPlugIn=function(){return this.E0;};f.getEngine=function(){return this.E0.getEngine();};f.getExts=function(){return (this.getEngine()).getExts(this.getId());};f.processExts=function(e,k){if(!e){var
Xa=this._xml.child(ub.e);if(Xa)e=w.ExtProc.getProcessor(Xa.attr(ub.f),Xa);if(!e)throw new
jsx3.Exception(ub.g);}if(!k)k=this.getExts();return w.ExtProc.process(k,e);};f.onExtension=function(m){this.publish({subject:c.EXTENDED,exts:m});};f.toString=function(){return this.getId();};});jsx3.lang.Class.defineClass("jsx3.amp.ExtProc",null,null,function(n,p){var
ub={a:"function",b:"instance-class",c:"ext-class",d:"amp.36",e:"load",f:"true"};var
ca=jsx3.amp;n.process=function(q,a){var
pb=jsx3.$A();for(var
C=0;C<q.length;C++){var
Gb=q[C];var
t=Gb.getData();for(var
Ga=0;Ga<t.length;Ga++){var
Ha=t[Ga];if(typeof a==ub.a){pb.push(a(Gb,Ha));}else pb.push(a.process(Gb,Ha));}}return pb;};n.Q8={eval:function(a){return n.EVAL;},"return":function(i){return n.RETURN;},"return-async":function(k){return n.RETURN_ASYNC;},instantiator:function(g){return n.newDescrProc(g.attr(ub.b));}};n.addProcessorFactory=function(l,c){n.Q8[l]=c;};n.getProcessor=function(e,i){var
ib=n.Q8[e];if(ib){return ib(i);}else return null;};n.TJ=function(d){this._constructor=d;};n.TJ.prototype.process=function(l,s){var
_=s.attr(ub.c);var
Ia=this._constructor;if(_){var
Hb=ca.jh(_);if(Hb)Ia=Hb;else ca.LOG.error(jsx3._msg(ub.d,_));}return new
Ia(l,s);};n.EVAL={process:function(e,s){var
Q=s.attr(ub.e)==ub.f;var
Na=s.value();if(Q){((e.getPlugIn()).load()).when(function(){e.eval(Na);});}else e.eval(Na);}};n.RETURN={process:function(l,s){var
N=s.value();return l.eval(N);}};n.RETURN_ASYNC={process:jsx3.$Y(function(a){var
Wa=(a.args())[0];var
S=(a.args())[1];var
na=S.attr(ub.e)==ub.f;var
_a=S.value();if(na){((Wa.getPlugIn()).load()).when(function(){a.done(Wa.eval(_a));});}else a.done(Wa.eval(_a));})};n.newDescrProc=function(a){return new
n.TJ(ca.jh(a));};});jsx3.lang.Class.defineClass("jsx3.amp.PlugIn",null,[jsx3.util.EventDispatcher,jsx3.net.URIResolver,jsx3.amp.Bindable],function(i,o){var
ub={A:"amp.44",B:"{",C:"}",D:/[^\w\$]+/g,E:"with(this){",a:"ready",b:"extended",c:"id",d:"global",e:"true",f:"name",g:"version",h:"requires",i:"amp:plugin",j:"event",k:"extension-point",l:"class",m:"amp.38",n:"amp.39",o:"extension",p:"amp.40",q:"amp.41",r:"/",s:"vB",t:"amp.42",u:"jsxapp",v:"jsxplugin",w:"Parent container not specified for loading resource ",x:".",y:"No resource ",z:" in plug-in "};var
La=jsx3.amp;i.READY=ub.a;i.EXTENDED=ub.b;i.CP=0;i.CF=1;i.ls=2;o.init=function(){this.wP=i.CP;this.lw=jsx3.$A();this.KR=jsx3.$A();this.ry={};this.xt=jsx3.$A();this.pF={};this.DI=jsx3.$A();this.v3={};this.f3=jsx3.$A();};o.setData=function(p){this.H0=p.getAttribute(ub.c);this.pK=p.getAttribute(ub.d)==ub.e;this.Sv=p.getAttribute(ub.f);this.I9=p.getAttribute(ub.g);var
ya=(p.getChildNodes()).toArray(true);for(var
E=0;E<ya.length;E++){var
qa=ya[E];var
Na=qa.getBaseName();if(Na==ub.h){for(var
ca=qa.selectNodeIterator(ub.i,La.getXmlNS(qa));ca.hasNext();)this.lw.push((ca.next()).getAttribute(ub.c));}else if(Na==ub.j){this.f3.push(qa.getAttribute(ub.c));}else if(Na==ub.k){var
Ja=null;var
N=qa.getAttribute(ub.l);if(N){Ja=La.jh(N);if(!Ja)La.LOG.error(jsx3._msg(ub.m,N));}if(!Ja)Ja=La.ExtPoint;var
lb=new
Ja(this,qa);var
Q=lb.getLocalId();if(this.pF[Q]){La.LOG.error(jsx3._msg(ub.n,this,Q));}else{La.Engine.uj(lb,qa);this.pF[Q]=lb;this.xt.push(lb);}}else if(Na==ub.o){var
Xa=null;var
V=qa.getAttribute(ub.l);if(V){Xa=La.jh(V);if(!Ja)La.LOG.error(jsx3._msg(ub.p,V));}if(!Xa)Xa=La.Ext;var
F=new
Xa(this,qa);var
Q=F.getLocalId();if(Q!=null)if(this.v3[Q]){La.LOG.error(jsx3._msg(ub.q,this,Q));}else this.v3[Q]=F;La.Engine.uj(F,qa);this.DI.push(F);}}};o.setEngine=function(a){this.tr=a;};o.setPath=function(a){this.nM=a;this.io=new
jsx3.net.URI(a+ub.r);this.Co=(jsx3.app.Browser.getLocation()).resolve(this.io);};o.setResources=function(p){this.KR=jsx3.$A(p);this.ry={};for(var
Fb=0;Fb<p.length;Fb++){var
Pa=p[Fb];Pa.ih(this);if(!Pa.isLoaded())Pa.subscribe(La.Resource.READY,this,ub.s);this.ry[Pa.getLocalId()]=Pa;}};o.getId=function(){return this.H0;};o.isGlobal=function(){return this.pK;};o.getName=function(){return this.Sv;};o.getVersion=function(){return this.I9;};o.getResources=function(){return this.KR;};o.getEvents=function(){return this.f3;};o.getResource=function(a){return this.ry[a];};o.getRequires=function(){return this.lw;};o.load=jsx3.$Y(function(s){if(this.wP==i.CP){La.LOG.debug(jsx3._msg(ub.t,this));this.wP=i.CF;return this.tr.se(this);}else if(!this.isLoaded())this.subscribe(i.READY,(jsx3.$F(s.done)).bind(s));else s.done();});o.loaded=jsx3.$Y(function(c){if(this.isLoaded()){c.done();}else this.subscribe(i.READY,(jsx3.$F(c.done)).bind(c));});o.vB=function(k){};o.gf=function(){this.wP=i.ls;this.onLoaded();this.publish({subject:i.READY});};o.isLoaded=function(){return this.wP==i.ls;};o.getEngine=function(){return this.tr;};o.getServer=function(){return this.tr.getServer();};o.getExtPoints=function(){return this.xt;};o.getExtPoint=function(j){return this.pF[j];};o.addExtPoint=function(f){var
U=f.getLocalId();this.pF[U]=f;this.xt.push(f);this.tr.ai(f);};o.removeExtPoint=function(e){var
Fa=e.getLocalId();if(e===this.pF[Fa])delete this.pF[Fa];this.xt.remove(e);this.tr.Og(e);};o.addExt=function(a){var
Ga=a.getLocalId();if(Ga!=null)if(this.v3[Ga]){La.LOG.error(jsx3._msg(ub.q,this,Ga));}else this.v3[Ga]=a;this.DI.push(a);this.tr.Ek(a,true);};o.removeExt=function(r){var
X=r.getLocalId();if(r===this.v3[X])delete this.v3[X];this.DI.remove(r);this.tr.fj(r);};o.getExts=function(){return this.DI;};o.getExt=function(n){return this.v3[n];};o.onRegister=function(){};o.onLoaded=function(){};o.onStartup=function(){};o.onExtension=function(f,b){this.publish({subject:i.EXTENDED,extpt:f,exts:b});};o.resolveURI=function(n){var
Ja=jsx3.net.URI.valueOf(n);if(Ja.getScheme()==ub.u&&!Ja.getHost())return (this.getServer()).resolveURI((Ja.getPath()).substring(1));if(!jsx3.net.URIResolver.isAbsoluteURI(Ja))Ja=this.io.resolve(Ja);return jsx3.net.URIResolver.DEFAULT.resolveURI(Ja);};o.getUriPrefix=function(){return this.io.toString();};o.relativizeURI=function(e,c){var
Za=jsx3.app.Browser.getLocation();var
Fb=this.Co.relativize(Za.resolve(e));if(Fb.isAbsolute()||c)return Fb;else return jsx3.net.URI.fromParts(ub.v,null,this.getId(),null,ub.r+Fb.getPath(),Fb.getQuery(),Fb.getFragment());};o.toString=function(){return this.H0;};o.getLog=function(){return jsx3.util.Logger.getLogger(this.getId());};o.loadRsrcComponent=function(f,a,q){if(!a)throw new
jsx3.Exception(ub.w+f+ub.x);var
xa=f instanceof La.Resource?f:this.getResource(f);if(!xa)throw new
jsx3.Exception(ub.y+f+ub.z+this+ub.x);var
P=a.loadXML(xa.getData(),false,this);P.getPlugIn=(jsx3.$F(function(){return this;})).bind(this);if(P.onRsrcLoad)try{P.onRsrcLoad();}catch(Kb){La.LOG.error(jsx3._msg(ub.A,f),jsx3.NativeError.wrap(Kb));}if(q!==false)a.paintChild(P);return P;};i.isBindExpr=function(k){return k.indexOf(ub.B)==0&&(jsx3.$S(k)).endsWith(ub.C);};o.regBindExpr=function(h,k){var
B=h.substring(1,h.length-1);var
za=jsx3.$H(B.split(ub.D));var
ba=(this.getBindableProps()).filter(function(b){return za[b];});var
P=(jsx3.$F(function(){var
t=this.eval(ub.E+B+ub.C);k(t);})).bind(this);if(ba.length>0)ba.each((jsx3.$F(function(s){this.subscribe(s,P);})).bind(this));P();};});jsx3.lang.Class.defineClass("jsx3.amp.ClassPlugIn",jsx3.amp.PlugIn,null,function(a,l){var
ub={a:"class",b:"jsx:/js/",c:/\./g,d:"/",e:".js",f:"script"};var
Nb=jsx3.amp;l.isLoaded=function(){return jsx3.Class.forName(this.getId())!=null;};l.setResource=function(o){};l.getResources=function(){if(!this.KR||this.KR.length==0){var
F=new
Nb.Resource(this,ub.a,{"@path":ub.b+(this.getId()).replace(ub.c,ub.d)+ub.e,"name()":ub.f});this.KR=jsx3.$A([F]);}return this.KR;};});jsx3.lang.Class.defineClass("jsx3.amp.XML",null,null,function(k,n){var
ub={a:"@",b:"name()",c:"/",d:"children()",e:"value()",f:""};n.init=function(b){if(b instanceof jsx3.xml.Entity)this._native=true;this._xml=b;};n.attr=function(q){return this._native?this._xml.getAttribute(q):this._xml[ub.a+q];};n.nname=function(){return this._native?this._xml.getBaseName():this._xml[ub.b];};n.child=function(a){if(this._native){for(var
L=this._xml.getChildIterator();L.hasNext();){var
Z=L.next();if(Z.getBaseName()==a)return new
k(Z);}return null;}else{var
bb=this._xml[ub.c+a];return bb?new
k(bb):null;}};n.children=function(){if(this._native)return (jsx3.$A((this._xml.getChildNodes()).toArray())).map(function(b){return new
k(b);});else return (jsx3.$A(this._xml[ub.d])).map(function(l){return new
k(l);});};n.value=function(){if(this._native)return this._xml.getValue();else return this._xml[ub.e];};n.toNative=function(){if(this._native)return this._xml;};n.toString=function(){if(this._native)return this._xml.toString();else return ub.f;};});jsx3.lang.Class.defineClass("jsx3.amp.Resource",null,[jsx3.util.EventDispatcher],function(s,i){var
ub={a:"ready",b:"script",c:"css",d:"xml",e:"xsl",f:"jss",g:"propsbundle",h:"early",i:"normal",j:"manual",k:"_j",l:"Po",m:"uT",n:".",o:"path",p:"",q:"locales",r:/\s+/g,s:"/",t:"load",u:"J6"};var
Aa=jsx3.amp;s.READY=ub.a;s.TYPE_SCRIPT=ub.b;s.TYPE_CSS=ub.c;s.TYPE_XML=ub.d;s.TYPE_XSL=ub.e;s.TYPE_JSS=ub.f;s.TYPE_BUNDLE=ub.g;s.LOAD_EARLY=ub.h;s.LOAD_NORMAL=ub.i;s.LOAD_MANUAL=ub.j;s.fQ={early:1,normal:1,manual:1};s.CP=0;s.CF=1;s.ls=2;s.wh=function(d,e,o,p,l){var
t=new
s(null,o,p);t._j=d;t.Po=e;t.uT=l;return t;};i.init=function(c,d,h){this.SR=new
Aa.XML(h||{});this.dV=h;this.E0=c;this.H0=d;this.dD=jsx3.$A();this.wP=s.CP;this.J6=null;};i.ih=function(p){this.E0=p;delete this[ub.k];delete this[ub.l];delete this[ub.m];};i.attr=function(j){return this.SR.attr(j);};i.xml=function(){return this.dV;};i.getPlugIn=function(){return this.E0;};i.getId=function(){return (this.E0?this.E0.getId():this._j)+ub.n+this.H0;};i.getLocalId=function(){return this.H0;};i.getPath=function(){return this.attr(ub.o);};i.getFullPath=function(d){var
Ea=d||this.getPath();return this.E0?ub.p+this.E0.resolveURI(Ea):this.Po+Ea;};i.getLocales=function(){var
ba=this.attr(ub.q);if(ba){ba=(jsx3.$S(ba)).trim();if(ba.length>0)return ba.split(ub.r);}return [];};i.getPathForLocale=function(d){var
Db=this.getPath();if(d){var
Ma=Aa.kn(this.attr(ub.q),d);if(Ma){var
pb=Db.lastIndexOf(ub.n);if(pb<0||pb<Db.lastIndexOf(ub.s))pb=Db.length;Db=Db.substring(0,pb)+ub.n+Ma+Db.substring(pb);}}return Db;};i.getType=function(){return this.SR.nname();};i.getLoadType=function(){var
Ib=this.attr(ub.t);return s.fQ[Ib]?Ib:s.LOAD_NORMAL;};i.bf=function(){return this.dD;};i.uc=function(f,l){this.dD.push({id:f,type:l});};i.isLoaded=function(){return this.wP==s.ls;};i.loaded=jsx3.$Y(function(c){if(this.isLoaded()){c.done();}else this.subscribe(s.READY,(jsx3.$F(c.done)).bind(c));});i.load=jsx3.$Y(function(c){if(this.wP==s.CP){return (this.E0?this.E0.getEngine():this.uT).Ng(this);}else if(!this.isLoaded())this.subscribe(s.READY,(jsx3.$F(c.done)).bind(c));else c.done();});i.ge=function(h){this.wP=s.CF;};i.Od=function(o){this.wP=s.ls;this.J6=o;this.publish({subject:s.READY});};i.getData=function(b){var
pb=this.J6;if(b)delete this[ub.u];return pb;};i.toString=function(){return this.getId();};});jsx3.lang.Class.defineClass("jsx3.amp.Engine",null,[jsx3.util.EventDispatcher],function(f,p){var
ub={A:"/plugin.",Aa:"method",B:".xml",Ba:"lazy",C:"amp.53",Ca:"true",D:"amp.54",Da:"params",E:"extension-point",Ea:" = function(",F:"extension",Fa:") {",G:"amp:",Ga:"async",H:"[@id]",Ha:"amp.16",I:'[@id="',Ia:"Already loaded plug-in ",J:'"]',Ja:"amp.11",K:"amp.55",Ka:"amp.12",L:"amp:resources",La:"amp.18",M:"amp.26",Ma:"property",N:"amp.08",Na:"amp.43",O:"_assigned_",Oa:"amp.20",P:"_",Pa:"amp.21",Q:"amp:prereq",Qa:"shared",R:"rsrc",Ra:"system",S:"amp:requires/amp:plugin",Sa:"r.",T:"global",Ta:"cache",U:"amp.09",Ua:"cachekey",V:"function",Va:"amp.52",W:"amp.10",Wa:"amp.23",X:"amp:bindable",Xa:"css",Y:"value",Ya:"jss",Z:"subscribe",Za:"propsbundle",_:/\s+/g,_a:"xml",a:"load",aa:"Mz",ab:"xsl",b:"error",ba:"amp:subscribe",bb:"eval",c:"register",ca:"event",cb:"amp.32",d:"progress",da:"handler",db:"amp.33",e:"namespace",ea:"when",eb:"amp.22",f:"gH",fa:"this.",fb:"amp.25",g:"jsxplugin",ga:"(evt);",gb:"amp:data",h:"/",ha:"this.load().when(jsx3.$F(function(){",hb:"style",i:'<?xml version="1.0" encoding="UTF-8"?><plugins xmlns="http://www.generalinterface.org/gi/amp" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.generalinterface.org/gi/amp http://www.generalinterface.org/xsd/plugins.xsd">\n\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.HotKey"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Heavyweight"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Interactive">\n    <requires>\n      <plugin id="jsx3.gui.HotKey"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Painted"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Block">\n    <requires>\n      <plugin id="jsx3.gui.Interactive"/>\n      <plugin id="jsx3.gui.Painted"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Label">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.app.UserSettings"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.net.Form"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.xml.Cacheable"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Form"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Alerts"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.BlockX">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.ToolbarButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.WindowBar">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Dialog">\n    <requires>\n      <plugin id="jsx3.gui.Alerts"/>\n      <plugin id="jsx3.gui.ToolbarButton"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Button">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeFileUpload">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeHidden">\n    <requires>\n      <plugin id="jsx3.gui.Painted"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeForm">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.TextBox">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NumberInput">\n    <requires>\n      <plugin id="jsx3.gui.TextBox"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.CheckBox">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.RadioButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Splitter">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.LayoutGrid">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Stack">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.StackGroup">\n    <requires>\n      <plugin id="jsx3.gui.LayoutGrid"/>\n      <plugin id="jsx3.gui.Stack"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Tab">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.TabbedPane">\n    <requires>\n      <plugin id="jsx3.gui.Tab"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Select">\n    <requires>\n      <plugin id="jsx3.gui.Heavyweight"/>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.NativeSelect">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Menu">\n    <requires>\n      <plugin id="jsx3.gui.Heavyweight"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n      <plugin id="jsx3.gui.ToolbarButton"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Tree">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.DatePicker">\n    <requires>\n      <plugin id="jsx3.gui.Heavyweight"/>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Slider">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Sound">\n    <requires>\n      <plugin id="jsx3.gui.Interactive"/>\n      <plugin id="jsx3.gui.Painted"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Window"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.ImageButton">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.ColorPicker">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.TimePicker">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Matrix.Column">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Matrix">\n    <requires>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n      <plugin id="jsx3.gui.Matrix.Column"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Image">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.net.Service"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Table">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.xml.Cacheable"/>\n      <plugin id="jsx3.gui.Form"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.html.DOM"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.html.Style"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.Template">\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n      <plugin id="jsx3.html.DOM"/>\n      <plugin id="jsx3.html.Style"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.util.Dojo"/>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.xml.DojoDataStore">\n    <requires>\n      <plugin id="jsx3.util.Dojo"/>\n    </requires>\n  </plugin>\n  <plugin class="jsx3.amp.ClassPlugIn" id="jsx3.gui.DojoWidget">\n    <requires>\n      <plugin id="jsx3.util.Dojo"/>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n  </plugin>\n\n  <plugin id="jsx3.gui.Alerts.alert">\n    <requires>\n      <plugin id="jsx3.gui.Button"/>\n      <plugin id="jsx3.gui.Alerts"/>\n    </requires>\n    <resources>\n      <xml cache="shared" id="xml" path="jsx:/xml/components/dialog_alert.xml"/>\n    </resources>\n  </plugin>\n  <plugin id="jsx3.gui.Alerts.confirm">\n    <requires>\n      <plugin id="jsx3.gui.Button"/>\n      <plugin id="jsx3.gui.Alerts"/>\n    </requires>\n    <resources>\n      <xml cache="shared" id="xml" path="jsx:/xml/components/dialog_confirm.xml"/>\n    </resources>\n  </plugin>\n  <plugin id="jsx3.gui.Alerts.prompt">\n    <requires>\n      <plugin id="jsx3.gui.Button"/>\n      <plugin id="jsx3.gui.Alerts"/>\n    </requires>\n    <resources>\n      <xml cache="shared" id="xml" path="jsx:/xml/components/dialog_prompt.xml"/>\n    </resources>\n  </plugin>\n\n  <plugin class="jsx3.amp.Main" id="jsx3.amp.main" name="Controller Plug-In" version="0.1">\n\n    <requires>\n      <plugin id="jsx3.gui.Block"/>\n    </requires>\n\n    <resources>\n      <script id="Main" load="early">\n        <data><![CDATA[jsx3.lang.Class.defineClass("jsx3.amp.Main",jsx3.amp.PlugIn,null,function(r,g){var\nub={a:"Main.onRegister",b:"vu",c:"Main.onExtension ",d:" [",e:"]",f:"progress",g:"init",h:"layout",i:"onComplete",j:"setProgress",k:"Main.onStartup"};var\nw=jsx3.amp;g.onRegister=function(){w.LOG.debug(ub.a);this._progress=jsx3.$A();this._pctdone=0;this._mainComp=null;(this.getEngine()).subscribe(w.Engine.PROGRESS,this,ub.b);this.load();};g.onExtension=function(k,e){this.jsxsuper(k,e);w.LOG.debug(ub.c+k+ub.d+e+ub.e);var\nu=k.getLocalId();if(u==ub.f){(k.processExts(null,e)).each((jsx3.$F(function(c){c.when((jsx3.$F(function(m){m.setProgress(this._pctdone);this._progress.push(m);})).bind(this));})).bind(this));}else if(u==ub.g){(jsx3.$A(e)).each(function(q){(q.getPlugIn()).load();});}else if(u==ub.h)(jsx3.$A(e)).each(function(h){(h.getPlugIn()).load();});};g.vu=function(i){this._pctdone=i.pct;var\nF=i.done?ub.i:ub.j;var\neb=this._pctdone;this._progress.each(function(a){a[F](eb);});};g.onStartup=function(){(this.loaded()).when((jsx3.$F(function(){w.LOG.debug(ub.k);(this.getExtPoint(ub.g)).processExts();var\nha=(this.getExtPoint(ub.h)).processExts();if(ha.length>0){var\nca=(this.getServer()).getBodyBlock();ha[0].when(function(j){j(ca);});}})).bind(this));};});]]></data>\n      </script>\n    </resources>\n\n    \n    <extension-point id="progress" name="Initialization Progress Extension Point">\n      \n      <processor type="return-async"/>\n    </extension-point>\n\n    \n    <extension-point id="init" name="Initialization Extension Point">\n      <processor type="eval"/>\n    </extension-point>\n\n    \n    <extension-point id="layout" name="Main Component Extension Point">\n      \n      <processor type="return-async"/>\n    </extension-point>\n\n  </plugin>\n\n  <plugin class="jsx3.amp.AutoReg" id="jsx3.amp.autoreg" name="Plug-In Auto-Registration Plug-In" version="0.1">\n\n    <resources>\n      <script id="js" load="early">\n        <data><![CDATA[jsx3.lang.Class.defineClass("jsx3.amp.AutoReg",jsx3.amp.PlugIn,null,function(l,q){var\nub={a:"plugins_auto",b:"/",c:"dirlist",d:/^([\\w\\-]+)(\\.[\\w\\-]+)*$/,e:"done"};var\nw=jsx3.amp;l.DIR=ub.a;q.hasProvider=function(){return this._hasProvider;};q.hasCompleted=function(){return this._done;};q.onRegister=function(){this._hasProvider=false;this._done=false;this._uri=(jsx3.app.Browser.getLocation()).resolve((this.getServer()).resolveURI(l.DIR+ub.b));};q.onExtension=function(d,s){this.jsxsuper(d,s);if(d.getLocalId()==ub.c)if(!this._hasProvider)for(var\nA=0;A<s.length;A++){var\nU=s[A];if(U.isAvailable(this._uri.getScheme())){this._hasProvider=true;this._loadWith(U);break;}}};q._loadWith=function(b){((b.getPlugIn()).load()).when((jsx3.$F(function(){var\nZ=b.getDirNames(this._uri);Z=Z.filter(function(r){return r.match(ub.d);});Z.each((jsx3.$F(function(a){(this.getEngine()).register(a,this._uri);})).bind(this));this._done=true;this.publish({subject:ub.e});})).bind(this));};});]]></data>\n      </script>\n    </resources>\n\n    \n    <event id="done"/>\n\n    <extension-point id="dirlist" name="Provide Directory Listing">\n      \n    </extension-point>\n  </plugin>\n\n  <plugin id="jsx3.amp.persist" name="Data Persistance Plug-In" version="0.1">\n\n    <method id="getFirstProvider">\n      return this.getExtPoint("provider").getExts().find(function(e) { return e.isAvailable(); });\n    </method>\n\n    <extension-point id="provider" name="Provide Persistance">\n      \n    </extension-point>\n\n    <extension id="cookie" point="jsx3.amp.persist.provider">\n      <method id="_getKey" params="k">\n        return "com_tibco_gi_amp_persist_" + k;\n      </method>\n\n      <method id="isAvailable">\n        var s = this.getPlugIn().getServer();\n        var k = this._getKey("__test"), v = "foobar";\n        s.setCookie(k, v);\n        var ok = s.getCookie(k) == v;\n        s.deleteCookie(k);\n        return ok;\n      </method>\n\n      <method id="get" params="k">\n        var s = this.getPlugIn().getServer();\n        return s.getCookie(this._getKey(k));\n      </method>\n\n      <method id="put" params="k, v">\n        var s = this.getPlugIn().getServer();\n        s.deleteCookie(this._getKey(k));\n        var now = new Date();\n        s.setCookie(this._getKey(k), v, new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()));\n      </method>\n\n      <method id="remove" params="k">\n        var s = this.getPlugIn().getServer();\n        s.deleteCookie(this._getKey(k));\n      </method>\n    </extension>\n  </plugin>\n\n  <plugin id="jsx3.amp.util.menumgr" name="MenuManager Plug-In" version="0.1">\n    <requires>\n      <plugin id="jsx3.gui.Menu"/>\n    </requires>\n    <resources>\n      <script id="js" path="MenuManager.js"/>\n    </resources>\n  </plugin>\n\n  <plugin id="jsx3.amp.util.toolbarmgr" name="ToolbarManager Plug-In" version="0.1">\n    <requires>\n      <plugin id="jsx3.gui.ToolbarButton"/>\n    </requires>\n    <resources>\n      <script id="js" path="ToolbarManager.js"/>\n    </resources>\n  </plugin>\n\n  <plugin global="true" id="jsx3.amp.util.prefspanel" name="PrefsPane Plug-In" property="jsx3.amp.util.PrefsPane.PLUGIN" version="0.1">\n    <resources>\n      <script id="js" path="PrefsController.js"/>\n      <xml id="controller" path="controller.xml"/>\n    </resources>\n  </plugin>\n\n  <plugin global="true" id="jsx3.amp.util.wizard" name="Wizard Plug-In" property="jsx3.amp.util.Wizard.PLUGIN" version="0.1">\n    <resources>\n      <script id="js" path="Wizard.js"/>\n      <xml id="controller" path="controller.xml"/>\n    </resources>\n  </plugin>\n\n</plugins>',ia:"}).bind(this));",ib:"type",j:"jsx3.amp.autoreg",ja:"loaded",jb:"text/css",k:"done",ka:"if(this.isLoaded()){",kb:"head",l:"amp.02",la:"}",lb:"beforeEnd",m:"plugins",ma:"_evt_",mb:'<style type="text/css">\n',n:"",na:/\./g,nb:"\n</style>",o:"plugin",oa:"var ",ob:"amp.29",p:"amp.04",pa:" = function(evt){",pb:"*",q:"amp.03",qa:"}; ",qb:"GET",r:"id",ra:";",rb:"TG",s:"class",sa:".",sb:"link",t:"path",ta:"amp.13",tb:"stylesheet",u:"p.",ua:"amp.17",ub:"rq",v:"amp.01",va:"amp:script | amp:field | amp:method",vb:"amp.34",w:"amp.05",wa:"script",wb:"amp.35",x:"amp.06",xa:"amp.14",y:"amp.07",ya:"field",z:"locales",za:"amp.15"};var
na=jsx3.amp;var
wa=jsx3.xml.Document;var
S=jsx3.util.Job;f.LOAD=ub.a;f.ERROR=ub.b;f.REGISTER=ub.c;f.PROGRESS=ub.d;f.BP={};f.rY={};f.getEngine=function(a){var
I=a.getEnv(ub.e);if(!f.BP[I])f.BP[I]=new
f(a);return f.BP[I];};f.zi=function(b){var
Ab=b.getAddins();for(var
Cb=0;Cb<Ab.length;Cb++)if(Ab[Cb]==na.ADDIN){f.getEngine(b);return;}};f.Cm=function(){var
Mb=jsx3.app.Server;var
ab=Mb.allServers();for(var
pb=0;pb<ab.length;pb++)f.zi(ab[pb]);Mb.subscribe(Mb.INITED,f,ub.f);};f.gH=function(s){f.zi(s.target);};jsx3.net.URIResolver.register(ub.g,function(q){var
Lb=q.getHost();for(var Wa in f.BP){var
ga=f.BP[Wa].getPlugIn(Lb);if(ga)return ga;}return null;});p.init=function(r){this.yu=r;this.j5=jsx3.$A();this.zp={};this.fw={__ct:0};this.pF={};this.v3={};this.jx=0;this.kC=jsx3.util.EventDispatcher.jsxclass.newInnerClass();this.sU=0;this.WB={};this.mZ={};this.ev=new
db(this);this.qw=false;this.IT();};p.IT=jsx3.$Y(function(r){var
z=na.DIR+ub.h+na.DESCRIPTOR;var
Fb=na.ADDIN.resolveURI(z);var
K=(new
jsx3.xml.Document()).loadXML(ub.i);var
fb=this.uQ(K,Fb);fb.when((jsx3.$F(function(){this.ev.yN();})).bind(this));var
ia=f.nL(this.yu.resolveURI(z));var
ea=this.uQ(ia,fb);var
da=this.dW(ea);var
v=jsx3.$Z(this.xp,this)(da);return v;});p.dW=jsx3.$Y(function(b){var
da=this.getPlugIn(ub.j);(da.load()).when(function(){if(da.hasProvider()&&!da.hasCompleted())da.subscribe(ub.k,function(){b.done();});else b.done();});});p.uQ=jsx3.$Y(function(a){var
R=(a.args())[0];var
Ua=(a.args())[1]||R.getSourceURL();na.LOG.debug(jsx3._msg(ub.l,Ua));if(!R.hasError()){var
mb=R.getBaseName();var
C=R.getNamespaceURI();if(mb==ub.m&&na.isNS(C)){var
hb=((new
jsx3.net.URI(Ua)).resolve(ub.n)).toString();hb=hb.substring(0,hb.length-1);var
Va=null;for(var
Mb=(R.getChildNodes()).iterator();Mb.hasNext();){var
ra=Mb.next();if(ra.getBaseName()==ub.o&&na.isNS(ra.getNamespaceURI())){var
eb=this.sI(ra,hb);Va=Va?Va.and(eb):eb;}}if(Va)return Va;a.done();}else{na.LOG.error(jsx3._msg(ub.p,mb,C));this.publish({subject:f.ERROR,xml:R});a.done();}}else{na.LOG.error(jsx3._msg(ub.q,R.getError()));this.publish({subject:f.ERROR,xml:R});a.done();}});p.sI=jsx3.$Y(function(o){var
ga=(o.args())[0],va=(o.args())[1];var
lb=ga.getAttribute(ub.r);this.fw[lb]=this.fw.__ct++;var
ob=ga.getFirstChild()==null&&ga.getAttribute(ub.s)==null;var
C=ga.getAttribute(ub.t);if(C)va=((jsx3.net.URI.valueOf(va)).resolve(C)).toString();return this.Kx(va,lb,ob?null:ga);});p.Kx=jsx3.$Y(function(o){var
ya=o.args();var
_a=ya[0],eb=ya[1],La=ya[2];this.ev.G3(ub.u+eb);if(!La){var
R=(_a?_a+ub.h:ub.n)+eb+ub.h+na.METAFILE;na.LOG.debug(jsx3._msg(ub.v,R,eb));La=f.nL(R);}return this.Oo(_a,eb,La);});p.Oo=jsx3.$Y(function(i){var
Za=i.args();var
Oa=Za[0],_=Za[1],hb=Za[2];this.ev.yU(ub.u+_);if(!hb.hasError()){var
Pa=hb.getBaseName();var
pa=hb.getNamespaceURI();if(Pa==ub.o&&na.isNS(pa)){return this.FT(_,Oa,hb);}else{na.LOG.error(jsx3._msg(ub.w,_,Pa,pa));i.done();}}else{na.LOG.error(jsx3._msg(ub.x,_,hb.getError()));i.done();}});p.FT=jsx3.$Y(function(o){var
Ua=o.args();var
vb=Ua[0],Ga=Ua[1],jb=Ua[2];var
Z=jb.getAttribute(ub.r);if(!Z||Z!=vb){na.LOG.error(jsx3._msg(ub.y,vb,Z));o.done();}else{var
La=na.kn(jb.getAttribute(ub.z),(this.getServer()).getLocale());if(La){(this.C9(Ga+ub.h+vb,jb,La)).when((jsx3.$F(function(){o.done(this.L1(vb,Ga,jb));})).bind(this));}else return this.L1(vb,Ga,jb);}});p.C9=jsx3.$Y(function(h){var
L=h.args();var
La=L[0],Z=L[1],Ha=L[2];La=La+(ub.A+Ha+ub.B);(f.nL(La)).when((jsx3.$F(function(n){if(n&&!n.hasError())this.cL(Z,n);else na.LOG.error(jsx3._msg(ub.C,La,n?n.getError():null));h.done();})).bind(this));});f.jw={script:1,method:1,field:1,processor:1};f.oN={script:1,method:1,field:1};p.cL=function(m,r){if(r.getBaseName()!=ub.o||!na.isNS(r.getNamespaceURI())){na.LOG.error(jsx3._msg(ub.D,r.getSourceURL()));return;}(jsx3.$A(r.getAttributeNames())).each(function(g){m.setAttribute(g,r.getAttribute(g));});this.Hu(m,r,ub.E,f.jw);this.Hu(m,r,ub.F,f.oN);};p.Hu=function(l,s,k,q){for(var
Ea=s.selectNodeIterator(ub.G+k+ub.H,na.getXmlNS(s));Ea.hasNext();){var
H=Ea.next();var
O=H.getAttribute(ub.r);var
Jb=l.selectSingleNode(ub.G+k+ub.I+O+ub.J,na.getXmlNS(l));if(Jb){(jsx3.$A(H.getAttributeNames())).each(function(m){Jb.setAttribute(m,H.getAttribute(m));});var
Ua=(H.getChildNodes()).toArray();if(Ua.length>0){(jsx3.$A(((Jb.getChildNodes()).toArray()).reverse())).each(function(e){if(!na.isNS(e.getNamespaceURI())||!q[e.getBaseName()])Jb.removeChild(e);});(jsx3.$A(Ua)).each(function(e){Jb.appendChild(e);});}}else na.LOG.error(jsx3._msg(ub.K,l.getAttribute(ub.r),k,O));}};p.L1=jsx3.$Y(function(a){var
_a=a.args();var
Wa=_a[0],Ca=_a[1],mb=_a[2];this.WB[Wa]=mb;var
V=this.FW(mb.selectSingleNode(ub.L,na.getXmlNS(mb)),Wa,Ca);var
pb=this.OL(Wa,mb);var
F=this.Mx(Wa,V,pb);return jsx3.$Z(this._F,this)(Wa,Ca,mb,V,F);});p.OL=jsx3.$Y(function(b){var
Oa=b.args();var
Ga=Oa[0],mb=Oa[1];var
ja=this.Q9(mb);ja=ja.filter((jsx3.$F(function(m){var
Ra=this.getPlugIn(m);if(!Ra&&!this.fw[m])na.LOG.warn(jsx3._msg(ub.M,Ga,m));return !Ra;})).bind(this));if(ja.length>0){var
Cb=(jsx3.$F(function(a){ja.remove(a.plugin.getId());if(ja.length==0){this.unsubscribe(f.REGISTER,Cb);b.done();}})).bind(this);this.subscribe(f.REGISTER,Cb);}else b.done();});p.Mx=jsx3.$Y(function(r){var
Qa=r.args();var
P=Qa[0],ta=Qa[1];var
Ba={};ta.each(function(g){Ba[g.getLocalId()]=g;});this.mZ[P]=Ba;var
ya=null;ta.each((jsx3.$F(function(s){if(s.getLoadType()==na.Resource.LOAD_EARLY){var
O=this.r5(s);ya=ya?ya.and(O):O;}})).bind(this));if(ya)return ya;r.done();});p.FW=function(k,q,c){var
Ka={};var
Nb=jsx3.$A();if(k)for(var
rb=(k.getChildNodes()).iterator();rb.hasNext();){var
Hb=rb.next();if(na.isNS(Hb.getNamespaceURI())){var
wb=Hb.getAttribute(ub.r);if(Ka[wb]){na.LOG.error(jsx3._msg(ub.N,wb,q));wb=null;}if(wb==null||wb==ub.n)wb=ub.O+q+ub.P+
++this.jx;var
da=na.Resource.wh(q,c+ub.h+q+ub.h,wb,Hb,this);for(var
gb=Hb.selectNodeIterator(ub.Q,na.getXmlNS(Hb));gb.hasNext();){var
Mb=gb.next();var
H=Mb.getAttribute(ub.r);if(H)da.uc(H,ub.R);else da.uc(Mb.getAttribute(ub.o),ub.o);}Nb.push(da);Ka[wb]=da;}}return Nb;};p.Q9=function(o){var
da=jsx3.$A();for(var
lb=o.selectNodeIterator(ub.S,na.getXmlNS(o));lb.hasNext();)da.push((lb.next()).getAttribute(ub.r));return da;};p.vu=function(){var
kb=this.ev.pct();var
bb={subject:f.PROGRESS,pct:100*kb};if(kb>=1)bb.done=true;this.publish(bb);};p._F=function(b,o,r,d){var
sb=r.getAttribute(ub.T);if(sb&&f.rY[b]){}var
G;var
Wa=r.getAttribute(ub.s);if(Wa){G=na.jh(Wa);if(!G)na.LOG.error(jsx3._msg(ub.U,Wa,b));}if(!G)G=na.PlugIn;var
Fa=new
G();if(typeof Fa.setEngine==ub.V)Fa.setEngine(this);if(typeof Fa.setPath==ub.V)Fa.setPath(o+ub.h+b);if(typeof Fa.setData==ub.V)Fa.setData(r);if(typeof Fa.setResources==ub.V)Fa.setResources(d);this.j5.push(Fa);this.zp[b]=Fa;na.LOG.debug(jsx3._msg(ub.W,Fa));var
T=Fa.getExtPoints();for(var
ya=0;ya<T.length;ya++)this.ai(T[ya]);var
Kb={};var
nb=Fa.getExts();for(var
ya=0;ya<nb.length;ya++){var
za=nb[ya];var
J=za.getPointId();this.Ek(za);if(!Kb[J])Kb[J]=jsx3.$A();Kb[J].push(za);}f.uj(Fa,r);for(var J in Kb){var
O=this.pF[J];if(O){(O.getPlugIn()).onExtension(O,Kb[J]);O.onExtension(Kb[J]);}}for(var
ya=r.selectNodeIterator(ub.X,na.getXmlNS(r));ya.hasNext();){var
tb=ya.next();var
ca=tb.getAttribute(ub.r);Fa.addBindableProp(ca,tb.getAttribute(ub.Y));Fa[ca]=null;var
bb=((jsx3.$S(tb.getAttribute(ub.Z)||ub.n)).trim()).split(ub._);(jsx3.$A(bb)).each((jsx3.$F(function(k){if(k)Fa.updateBindableOn(ca,this.kC,k);})).bind(this));Fa.subscribe(ca,this,ub.aa);}(jsx3.$A(Fa.getEvents())).each((jsx3.$F(function(h){Fa.subscribe(h,this,ub.aa);})).bind(this));this.b6(Fa,r);Fa.onRegister();this.publish({subject:f.REGISTER,plugin:Fa});};p.b6=function(o,i){for(var
tb=i.selectNodeIterator(ub.ba,na.getXmlNS(i));tb.hasNext();){var
ba=tb.next();var
ua=(ba.getAttribute(ub.ca)).split(ub._);var
M=ba.getAttribute(ub.da);var
pb=ba.getAttribute(ub.ea);var
J=M?ub.fa+M+ub.ga:ba.getValue();if(pb==ub.a){J=ub.ha+J+ub.ia;}else if(pb==ub.ja)J=ub.ka+J+ub.la;for(var
Lb=0;Lb<ua.length;Lb++){var
v=ub.ma+ua[Lb].replace(ub.na,ub.P)+ub.P+this.sU++;var
ea=jsx3.eval(ub.oa+v+ub.pa+J+ub.qa+v+ub.ra);o[v]=ea;this.kC.subscribe(ua[Lb],o,v);}}};p.Mz=function(c){var
nb=(jsx3.$O(c)).clone();nb.subject=c.target.getId()+ub.sa+c.subject;na.LOG.debug(jsx3._msg(ub.ta,nb.subject));this.kC.publish(nb);if(window.OpenAjax&&OpenAjax.hub)try{OpenAjax.hub.publish(nb.subject,nb);}catch(nb){na.LOG.error(jsx3._msg(ub.ua,nb.subject),jsx3.NativeError.wrap(nb));}};f.uj=function(i,k){for(var
x=k.selectNodeIterator(ub.va,na.getXmlNS(k));x.hasNext();){var
Ka=x.next();var
kb=Ka.getBaseName();if(ub.wa==kb){try{i.eval(Ka.getValue());}catch(Kb){na.LOG.error(jsx3._msg(ub.xa,i),jsx3.NativeError.wrap(Kb));}}else if(ub.ya==kb){try{i[Ka.getAttribute(ub.r)]=i.eval(Ka.getValue());}catch(Kb){na.LOG.error(jsx3._msg(ub.za,Ka.getAttribute(ub.r),i),jsx3.NativeError.wrap(Kb));}}else if(ub.Aa==kb)try{var
qa=Ka.getAttribute(ub.r);if(Ka.getAttribute(ub.Ba)==ub.Ca){t=this.bB(qa);}else{var
aa=Ka.getAttribute(ub.Da)||ub.n;var
t=jsx3.eval(ub.oa+qa+ub.Ea+aa+ub.Fa+Ka.getValue()+ub.qa+qa+ub.ra);if(Ka.getAttribute(ub.Ga)==ub.Ca)t=jsx3.$Y(t);}i[qa]=t;}catch(Kb){na.LOG.error(jsx3._msg(ub.Ha,Ka.getAttribute(ub.r),i),jsx3.NativeError.wrap(Kb));}(Ka.getParent()).removeChild(Ka);}};f.bB=function(r){return function(){(this.load()).when((jsx3.$F(function(n,h){this[n].apply(this,h);})).bind(this,[r,arguments]));};};p.isLoaded=function(){return this.qw;};p.getServer=function(){return this.yu;};p.getPlugIns=function(){return this.j5;};p.getPlugIn=function(h){return this.zp[h];};p.getExtPoint=function(q){return this.pF[q];};p.getExts=function(o){var
gb=this.v3[o];if(gb&&gb.eR){gb.sort((jsx3.$F(function(gb,n){var
y=this.fw[(gb.getPlugIn()).getId()]||0;var
oa=this.fw[(n.getPlugIn()).getId()]||0;return y>oa?1:y==oa?0:-1;})).bind(this));gb.eR=false;}return gb||jsx3.$A();};p.register=jsx3.$Y(function(q){var
Na=q.args();var
Fa=Na[0];var
Sa=Na[1];var
fb=Na[2];if(this.zp[Fa])throw new
jsx3.IllegalArgumentException(ub.Ia+Fa+ub.sa);this.fw[Fa]=this.fw.__ct++;return this.Kx(Sa,Fa,fb);});p.deregister=function(r){var
t=this.getPlugIn(r);if(t){this.j5.remove(t);var
ma=t.getExtPoints();for(var
w=0;w<ma.length;w++)this.Og(ma[w]);var
hb=t.getExts();for(var
w=0;w<hb.length;w++)this.fj(hb[w]);delete this.zp[r];delete this.fw[r];delete this.WB[r];delete this.mZ[r];}};p.ai=function(d){na.LOG.debug(jsx3._msg(ub.Ja,d));this.pF[d.getId()]=d;};p.Og=function(n){var
K=n.getId();delete this.pF[K];};p.Ek=function(i,k){var
Ea=i.getPointId();if(!this.v3[Ea])this.v3[Ea]=jsx3.$A();this.v3[Ea].push(i);this.v3[Ea].eR=true;na.LOG.debug(jsx3._msg(ub.Ka,i,Ea));if(k){var
La=this.pF[Ea];if(La){(La.getPlugIn()).onExtension(La,[i]);La.onExtension([i]);}}};p.fj=function(g){var
Va=this.v3[g.getPointId()];if(Va)Va.remove(g);};p.se=jsx3.$Y(function(o){var
ha=(o.args())[0];var
zb=this.Ov(ha);var
fa=this.it(ha,zb);var
xb=jsx3.$Z(this.cG,this)(ha,fa);return xb;});p.Ov=jsx3.$Y(function(a){var
_=(a.args())[0];var
Hb=null;var
Gb=_.getRequires();Gb.each((jsx3.$F(function(l){var
D=this.getPlugIn(l);if(D){if(!D.isLoaded()){var
rb=D.load();Hb=Hb?Hb.and(rb):rb;}}else na.LOG.error(jsx3._msg(ub.La,_,l));})).bind(this));if(Hb)return Hb;else a.done();});p.it=jsx3.$Y(function(l){var
V=(l.args())[0];var
ya=null;var
Ua=V.getResources();Ua.each(function(r){if(!r.isLoaded()&&r.getLoadType()==na.Resource.LOAD_NORMAL){var
cb=r.load();ya=ya?ya.and(cb):cb;}});if(ya)return ya;else l.done();});p.cG=function(r){var
G=this.WB[r.getId()];if(G){delete this.WB[r.getId()];delete this.mZ[r.getId()];(r.getBindableProps()).each(function(h){r.updateBindable(h);});var
ia=G.getAttribute(ub.Ma);if(ia)jsx3.lang.setVar(r.isGlobal()?ia:(r.getServer()).getEnv(ub.e)+ub.sa+ia,r);}r.gf();na.LOG.debug(jsx3._msg(ub.Na,r));};p.Ng=jsx3.$Y(function(b){var
X=(b.args())[0];X.ge();var
T=this.cz(X,X.getPlugIn());(this.lY(X,T)).when(function(m){X.Od(m);b.done();});});p.r5=jsx3.$Y(function(d){var
H=d.args();var
Aa=H[0];(this.cz(Aa)).when(function(){(Aa.load()).when(d);});});p._getSiblingResource=function(o,d){var
Za=o.getPlugIn();return Za?Za.getResource(d):this.mZ[o._j][d];};p.cz=jsx3.$Y(function(i){var
tb=i.args();var
za=tb[0];var
Nb=null;var
Ca=za.bf();Ca.each((jsx3.$F(function(k){var
ja=null;if(k.type==ub.o){var
t=this.getPlugIn(k.id);if(t){if(!t.isLoaded())ja=t.load();}else na.LOG.error(jsx3._msg(ub.Oa,k.id,za));}else{var
Jb=this._getSiblingResource(za,k.id);if(Jb){if(!Jb.isLoaded())ja=Jb.load();}else na.LOG.error(jsx3._msg(ub.Pa,k.id,za));}if(ja)Nb=Nb?Nb.and(ja):ja;})).bind(this));if(Nb)return Nb;else i.done();});p.xp=function(){this.qw=true;for(var
sb=0;sb<this.j5.length;sb++)this.j5[sb].onStartup();this.publish({subject:f.LOAD});};p.pH=function(j,n){if(ub.Qa==n)return jsx3.getSharedCache();else if(ub.Ra==n)return jsx3.getSystemCache();else return j.getCache();};p.lY=jsx3.$Y(function(k){var
Ia=(k.args())[0];var
K=this.getServer();var
Xa=Ia.getPathForLocale(K.getLocale());var
lb=Ia.getType();var
Qa=ub.Sa+Ia.getId();this.ev.G3(Qa);var
Da=this.pH(K,Ia.attr(ub.Ta));var
Fa=Ia.attr(ub.Ua);if(!Fa)if(Xa&&Da!=K.getCache())Fa=jsx3.resolveURI(Ia.getFullPath(Xa));else Fa=Ia.getId();if(Xa){var
ia=Ia.getFullPath(Xa);na.LOG.debug(jsx3._msg(ub.Va,Ia,ia));var
xb=(jsx3.$F(function(h){na.LOG.debug(jsx3._msg(ub.Wa,Ia,ia));this.ev.yU(Qa);k.done(h);})).bind(this);switch(lb){case ub.wa:if(Ia.attr(ub.bb)==ub.Ca)(f.BC(ia)).when((jsx3.$F(function(m){if(m!=null){var
t=Ia.getPlugIn()||jsx3;try{t.eval(m);}catch(Kb){na.LOG.error(jsx3._msg(ub.cb,ia,t),jsx3.NativeError.wrap(Kb));}}else na.LOG.error(jsx3._msg(ub.db,ia));xb();})).bind(this));else (f.r2(ia)).when(xb);break;case ub.Xa:(f.JY(ia)).when(xb);break;case ub.Ya:(f.nL(ia)).when((jsx3.$F(function(c){if(Da)Da.setDocument(Fa,c);K.JSS.loadXML(c,Fa);xb(c);})).bind(this));break;case ub.Za:jsx3.app.PropsBundle.getPropsAsync(Ia.getFullPath(),K.getLocale(),function(W){K.LJSS.addParent(W);xb(W);},K.getCache());break;case ub._a:(f.nL(ia,jsx3.xml.CDF.Document.jsxclass)).when((jsx3.$F(function(e){e.convertProperties((this.getServer()).getProperties());if(Da)Da.setDocument(Fa,e);xb(e);})).bind(this));break;case ub.ab:(f.nL(ia,jsx3.xml.XslDocument.jsxclass)).when((jsx3.$F(function(j){if(Da)Da.setDocument(Fa,j);xb(j);})).bind(this));break;default:na.LOG.error(jsx3._msg(ub.eb,lb));xb();}}else{na.LOG.debug(jsx3._msg(ub.fb,Ia));var
G=Ia.xml();var
Nb=G.selectSingleNode(ub.gb,na.getXmlNS(G));var
_=null;switch(lb){case ub.wa:if(Ia.attr(ub.bb)==ub.Ca){(Ia.getPlugIn()||jsx3).eval((Nb||G).getValue());}else if(!f.DA[Ia.getId()]){f.DA[Ia.getId()]=1;jsx3.eval((Nb||G).getValue());}break;case ub.Xa:if(jsx3.CLASS_LOADER.IE){var
Ka=document.createElement(ub.hb);Ka.setAttribute(ub.ib,ub.jb);(document.getElementsByTagName(ub.kb))[0].appendChild(Ka);Ka.styleSheet.cssText=((Nb||G).getValue()).toString();}else jsx3.html.insertAdjacentHTML((document.getElementsByTagName(ub.kb))[0],ub.lb,ub.mb+(Nb||G).getValue()+ub.nb);break;case ub.Ya:if(Nb){K.JSS.loadXML(Nb.getFirstChild(),Ia.getId());_=K.JSS;}else na.LOG.error(jsx3._msg(ub.ob,Ia));break;case ub.Za:case ub._a:if(Nb){_=new
jsx3.xml.CDF.Document(Nb.getFirstChild());_.convertProperties((this.getServer()).getProperties());if(Da)Da.setDocument(Fa,_);if(lb==ub.Za){var
tb=Ia.getFullPath(Nb.getAttribute(ub.t));if(Da)Da.setDocument(tb,_);var
W=jsx3.app.PropsBundle.getProps(tb,K.getLocale(),Da);K.LJSS.addParent(W);}}else na.LOG.error(jsx3._msg(ub.ob,Ia));break;case ub.ab:if(Nb){_=new
jsx3.xml.XslDocument(Nb.getFirstChild());if(Da)Da.setDocument(Fa,_);}else na.LOG.error(jsx3._msg(ub.ob,Ia));break;default:na.LOG.error(jsx3._msg(ub.eb,lb));}this.ev.yU(Qa);k.done(_);}});f.nL=jsx3.$Y(function(a){var
K=a.args();var
wb=K[0],Ya=K[1];var
Ta=(Ya||jsx3.xml.Document.jsxclass).newInstance();Ta.setAsync(true);Ta.subscribe(ub.pb,function(){a.done(Ta);});Ta.load(wb);});f.BC=jsx3.$Y(function(d){var
C=d.args();var
mb=C[0];var
Mb=jsx3.net.Request.open(ub.qb,mb,true);Mb.subscribe(ub.pb,function(){d.done(Mb.getResponseText());});Mb.send();});f.JY=jsx3.$Y(function(d){return this.py((d.args())[0],ub.rb);});f.TG=jsx3.$Y(function(c){var
lb=(c.args())[0];var
H=document.createElement(ub.sb);H.href=lb;H.rel=ub.tb;H.type=ub.jb;(document.getElementsByTagName(ub.kb))[0].appendChild(H);c.done();});f.r2=jsx3.$Y(function(h){return this.py((h.args())[0],ub.ub);});f.rq=jsx3.$Y(function(h){var
pa=(h.args())[0];jsx3.CLASS_LOADER.loadJSFile(pa,function(){h.done();});});f.DA={};f.py=jsx3.$Y(function(i){var
Da=(i.args())[0];var
ia=f.DA[Da];if(ia){if(ia instanceof jsx3.$AsyncRV)return ia;else i.done();}else{var
ja=(i.args())[1];var
sb=f.DA[Da]=this[ja](Da);sb.when(function(){f.DA[Da]=1;});return sb;}});var
db=function(b){this._eng=b;this._ids={};this._total=0;this._donect=0;this._on=0;};(jsx3.$O(db.prototype)).extend({yN:function(){this._on=1;},G3:function(h){if(this._ids[h])na.LOG.warn(jsx3._msg(ub.vb,h));else if(this._on){this._ids[h]=1;this._total++;this._eng.vu();}else this._ids[h]=-1;},yU:function(o){var
Ka=this._ids[o];if(Ka){delete this._ids[o];if(Ka>0){this._donect++;this._eng.vu();}}else na.LOG.warn(jsx3._msg(ub.wb,o));},pct:function(){return this._total>0?this._donect/this._total:0;}});});jsx3.amp.Engine.Cm();