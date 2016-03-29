/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
Array.prototype.indexOf=function(j,g){if(g==null)g=0;for(var
Ka=g;Ka<this.length;Ka++)if(this[Ka]==j)return Ka;return -1;};Array.prototype.lastIndexOf=function(f,n){if(n==null)n=this.length-1;for(var
rb=n;rb>=0;rb--)if(this[rb]==f)return rb;return -1;};Array.prototype.contains=function(o){return this.indexOf(o)>=0;};Array.prototype.remove=function(l){var
ba=this.indexOf(l);if(ba>=0)return (this.splice(ba,1))[0];return null;};Array.prototype.clone=function(){return this.concat();};Array.prototype.pushAll=function(s){this.push.apply(this,s);};Array.prototype.contentsEqual=function(f){if(f==null)return false;if(this.length!=f.length)return false;for(var
mb=0;mb<f.length;mb++)if(this[mb]!=f[mb])return false;return true;};Array.prototype.filter=function(g){var
K=[];for(var
B=0;B<this.length;B++)if(g(this[B]))K.push(this[B]);return K;};Array.prototype.map=function(f,i,d){var
Aa=null;if(i){if(d){Aa={};for(var
hb=0;hb<this.length;hb++){var
ia=f(this[hb]);for(var
fa=0;fa<ia.length;fa=fa+2)Aa[ia[hb]]=ia[hb+1];}}else{Aa=[];for(var
hb=0;hb<this.length;hb++){var
C=f(this[hb]);if(C instanceof Array)Aa.pushAll(C);else Aa.push(C);}}}else if(d){Aa={};for(var
hb=0;hb<this.length;hb++){var
ma=f(this[hb]);Aa[ma[0]]=ma[1];}}else{Aa=new
Array(this.length);for(var
hb=0;hb<this.length;hb++)Aa[hb]=f(this[hb]);}return Aa;};Math.modpos=function(n,i){return jsx3.util.numMod(n,i);};Math.isNaN=function(b){return jsx3.util.numIsNaN(b);};Number.prototype.roundTo=function(s){return jsx3.util.numRound(this,s);};Number.prototype.zeroPad=function(e){var
Ga=""+this;while(Ga.length<e)Ga="0"+Ga;return Ga;};Date.prototype.getLastDateOfMonth=function(){var
ja=this.getMonth();return Date.AH[ja]||((new
Date(this.getYear(),ja,29)).getMonth()==ja?29:28);};Date.prototype.equals=function(l){return l!=null&&l instanceof Date&&l.valueOf()==this.valueOf();};Date.prototype.compareTo=function(g){var
Jb=this.valueOf();var
eb=g.valueOf();return Jb==eb?0:Jb>eb?1:-1;};Date.AH=[31,null,31,30,31,30,31,31,30,31,30,31];String.prototype.trim=function(){return jsx3.util.strTrim(this);};String.prototype.doReplace=function(f,h){var
ba=new
RegExp(f,["g"]);return this.replace(ba,h);};String.prototype.escapeHTML=function(){return jsx3.util.strEscapeHTML(this);};String.prototype.doTruncate=function(q){return jsx3.util.strTruncate(this,q,"...",1);};String.prototype.toAbsolute=function(){var
ca;if(this.substring(0,1)=="/"||(this.substring(0,7)).toUpperCase()=="HTTP://"||(this.substring(0,8)).toUpperCase()=="HTTPS://"){ca=this.toString();}else if(this.substring(0,4)=="JSX/"){ca=jsx3.getEnv("jsxabspath")+this;}else ca=jsx3.getEnv("jsxhomepath")+this;return ca;};String.prototype.urlTo=function(r){var
B=null;var
Bb=this.lastIndexOf("/");if(Bb==this.length-1)B=this+r;else if(Bb<0)B=r;else B=this.substring(0,Bb+1)+r;B=B.replace(/\\/g,"/");var
wa=B.split("/");for(var
P=0;P<wa.length;P++){var
ka=wa[P];if(ka=="."){wa.splice(P--
,1);}else if(ka=="..")if(P>0&&wa[P-1]!=".."){wa.splice(P--
,1);wa.splice(P--
,1);}}return wa.join("/");};String.prototype.endsWith=function(r){return jsx3.util.strEndsWith(this,r);};String.prototype.constrainLength=function(i,q){return jsx3.util.strTruncate(this,i,q,0.6666666666666666);};String.prototype.toBase64=function(){return jsx3.util.strEncodeBase64(this);};String.prototype.fromBase64=function(){return jsx3.util.strDecodeBase64(this);};(function(c){var
ub={a:"undefined",b:"null",c:"[",d:",",e:"]",f:"object",g:":",h:"{",i:"}",j:"string",k:/(^\s*)|(\s*$)/g,l:"",m:"MH",n:"May not call $AsyncRV.rv() before the return value is set.",o:"function",p:"t3",q:"number"};var
R=function(l,n){for(var B in n)l[B]=n[B];return l;};var
fb=function(b,q){if(typeof q==ub.a)q=true;var
qa;if(b==null)qa=ub.b;else if(c.$A.is(b)){var
Ja=[];for(var
y=0;y<b.length;y++)Ja.push(q?fb(b[y]):b[y]);qa=ub.c+Ja.join(ub.d)+ub.e;}else if(typeof b==ub.f){var
Ja=[];for(var H in b)if(!b.hasOwnProperty||b.hasOwnProperty(H))Ja.push(H+ub.g+(q?fb(b[H]):b[H]));qa=ub.h+Ja.join(ub.d)+ub.i;}else if(typeof b==ub.j){qa=c.util.strEscapeJSON(b);}else qa=b.toString();return qa;};c.$Object={extend:function(j){return R(this,j);},clone:function(){var
gb=c.$O();gb.extend(this);return gb;}};c.$O=function(n){return R(n||{},c.$Object);};c.$O.json=fb;c.$Array={each:function(d){for(var
ja=0;ja<this.length;ja++)d(this[ja]);},map:function(k){var
Za=c.$A();for(var
wb=0;wb<this.length;wb++)Za[wb]=k(this[wb]);return Za;},filter:function(p){var
Ga=c.$A();for(var
_a=0;_a<this.length;_a++)if(p(this[_a]))Ga.push(this[_a]);return Ga;},indexOf:function(f){for(var
Qa=0;Qa<this.length;Qa++)if(this[Qa]===f)return Qa;return -1;},contains:function(p){return this.indexOf(p)>=0;},remove:function(s){var
Da=this.indexOf(s);if(Da>=0)return (this.splice(Da,1))[0];},find:function(e){for(var
M=0;M<this.length;M++)if(e(this[M]))return this[M];},unique:function(){var
sa=this.concat();for(var
x=sa.length-1;x>=1;x--)for(var
ua=x-1;ua>=0;ua--)if(sa[x]===sa[ua]){sa.splice(x,1);break;}return c.$A(sa);},addAll:function(p){this.push.apply(this,p);},eq:function(s){if(this.length!=s.length)return false;for(var
Qa=0;Qa<this.length;Qa++)if(this[Qa]!==s[Qa])return false;return true;},clone:function(){return c.$A(this.concat());}};c.$Hash=(c.$Object.clone()).extend({each:function(s){for(var lb in this)if(this[lb]!=this.constructor.prototype[lb]&&this[lb]!=c.$Hash[lb])s(lb,this[lb]);},keys:function(){var
Cb=[];for(var v in this)if(this[v]!=this.constructor.prototype[v]&&this[v]!=c.$Hash[v])Cb.push(v);return c.$A(Cb);},values:function(){var
da=[];for(var ib in this)if(this[ib]!=this.constructor.prototype[ib]&&this[ib]!=c.$Hash[ib])da.push(this[ib]);return c.$A(da);}});c.$Function={bind:function(g,o){var
sa=this;if(o==null||o.length==0){return c.$F(function(){return sa.apply(g,arguments);});}else return function(){var
ob;if(arguments.length>0){ob=[];for(var
Ka=0;Ka<o.length;Ka++)ob.push(o[Ka]);for(var
Ka=0;Ka<arguments.length;Ka++)ob.push(arguments[Ka]);}else ob=o;return sa.apply(g,ob);};},throttled:function(){var
nb=this;return c.$F(function(){if(nb._thlto)window.clearTimeout(nb._thlto);nb._thlto=window.setTimeout((c.$F(nb)).bind(this,arguments));});},slept:function(){var
P=this;return c.$F(function(){window.setTimeout(P.bind(this,arguments));});}};c.$String=(c.$Object.clone()).extend({endsWith:function(d){return this.lastIndexOf(d)==this.length-d.length;},trim:function(){return c.$S(this.replace(ub.k,ub.l));}});c.$F=function(j){return R(j,c.$Function);};var
K=c.$F(function(d,h,l){d[h]=l.rv();});var
tb=function(n){var
P=null;for(var
La=0;La<n.length;La++){var
mb=n[La];if(mb instanceof Ha)if(mb.yU){n[La]=mb.rv();}else{mb.when(K.bind(null,[n,La,mb]));P=P?P.and(mb):mb;}}return P;};c.$AsyncCB=function(m,l){this.aX=m;this.jT=l;this.PM=tb(l);};R(c.$AsyncCB.prototype,{IG:c.$F(function(s,d){this.jT[s]=d.rv();}),done:function(m){this.yU=true;this.nC=m;if(this.t3)this.t3(m);},args:function(){return this.jT;}});var
Ha=c.$AsyncRV=function(){};R(Ha.prototype,{CM:function(a){this.yU=true;this.nC=a;if(this.MH){this.MH.each(function(l){l(a);});delete this[ub.m];}},rv:function(){if(!this.yU)throw new
Error(ub.n);return this.nC;},when:function(s,i){var
Xa=null;if(typeof s==ub.o)Xa=s;else if(s instanceof c.$AsyncCB){if(arguments.length>1)Xa=(function(){s.done(i);});else Xa=(function(l){s.done(l);});}else throw new
Error();if(this.yU){Xa(this.nC);}else{if(!this.MH)this.MH=c.$A();this.MH.push(Xa);}},and:function(l){var
Lb=[this];for(var
Hb=0;Hb<arguments.length;Hb++)Lb.push(arguments[Hb]);return new
zb(Lb);},or:function(m){var
E=[this];for(var
z=0;z<arguments.length;z++)E.push(arguments[z]);return new
pb(E);}});var
ia=function(s){this.HW=s;s.t3=this.cE.bind(this);};ia.prototype=new
Ha();R(ia.prototype,{cE:c.$F(function(i){delete this.HW[ub.p];this.CM(i);})});var
zb=function(l){this.HA=l.length;this.Lz=0;(c.$A(l)).each((c.$F(function(e){if(e.yU)this.Lz++;else e.when(this.JK.bind(this));})).bind(this));if(this.HA==this.Lz)this.CM();};zb.prototype=new
Ha();R(zb.prototype,{JK:c.$F(function(){this.Lz++;if(this.Lz==this.HA)this.CM();})});var
pb=function(k){(c.$A(k)).each((c.$F(function(d){if(d.yU)this.JK();else d.when(this.JK.bind(this));})).bind(this));};pb.prototype=new
Ha();R(pb.prototype,{JK:c.$F(function(){if(!this.yU)this.CM();})});c.$A=function(k){if(k==null){k=[];}else if(k instanceof Array){}else if(c.$A.is(k)){var
H=[];for(var
eb=0;eb<k.length;eb++)H[eb]=k[eb];k=H;}else k=[k];return R(k,c.$Array);};c.$A.is=function(b){return b&&typeof b==ub.f&&(b instanceof Array||typeof b.length==ub.q);};c.$H=function(q){if(c.$A.is(q)){var
ja={};for(var
Ab=0;Ab<q.length;Ab++)ja[q[Ab]]=1;return R(ja,c.$Hash);}else return R(q||{},c.$Hash);};c.$S=function(r){if(r==null)return r;return R(new
String(r),c.$String);};c.$Y=function(g){return function(){var
Ma=new
c.$AsyncCB(this,arguments);var
_=new
ia(Ma);if(Ma.PM){var
Ga=this;Ma.PM.when(function(){var
Lb=g.apply(Ga,[Ma]);if(Lb instanceof Ha)Lb.when(Ma);});}else{var
Lb=g.apply(this,[Ma]);if(Lb instanceof Ha)Lb.when(Ma);}return _;};};c.$Z=function(j,m){if(m instanceof Ha)m.when(function(a){m=a;});return function(){var
Wa=new
Ha();var
Ta=c.Method.argsAsArray(arguments);if(m instanceof Ha){m.when(function(){Y(m,j,Ta,Wa);});}else Y(m||this,j,Ta,Wa);return Wa;};};var
Y=function(o,h,l,f){var
jb=typeof h==ub.o?h:o[h];var
Pa=tb(l);if(Pa){Pa.when(function(){f.CM(jb.apply(o,l));});}else f.CM(jb.apply(o,l));};})(jsx3);if(jsx3.lang==null)jsx3.lang={};(function(d){var
ub={a:"."};d.STACK_MAX=50;d.getCaller=function(q){var
ia=(q!=null?q:0)+1;var
gb=arguments;if(gb.callee){for(gb=gb.callee;gb!=null;gb=gb.caller){if(--ia>=0)continue;return gb.caller;}}else for(gb=gb.caller;gb!=null;gb=gb.caller){if(--ia>=0)continue;return gb.callee;}return null;};d.getStack=function(q){var
zb=[];var
Ya=(q!=null?q:0)+1;var
fa=arguments;if(fa.callee){for(fa=fa.callee;fa&&fa.caller&&zb.length<jsx3.lang.STACK_MAX;fa=fa.caller){if(--Ya>=0)continue;zb[zb.length]=fa.caller;}}else for(fa=fa.caller;fa&&fa.callee;fa=fa.caller){if(--Ya>=0)continue;zb[zb.length]=fa.callee;}return zb;};d.setVar=function(s,n){var
fa=s.split(ub.a);var
Ib=window;for(var
ca=0;ca<fa.length-1;ca++){var
hb=fa[ca];if(!Ib[hb])Ib[hb]={};Ib=Ib[hb];}Ib[fa[fa.length-1]]=n;};d.getVar=function(h){var
Cb=h.split(ub.a);var
pb=window;for(var
sa=0;sa<Cb.length;sa++){if(pb==null)return;pb=pb[Cb[sa]];}return pb;};})(jsx3.lang);if(window["jsx3"]==null)window["jsx3"]={};if(jsx3.lang==null)jsx3.lang={};jsx3.lang.Uj=new
window.Object();jsx3.lang.Jl=new
window.Object();jsx3.lang.qg=function(){var
ub={a:"obj.no_inst"};return function(){if(arguments[0]!=jsx3.lang.Uj){var
db=this.getClass?this.getClass():null;throw new
jsx3.Exception(jsx3._msg(ub.a,db||this));}};};jsx3.lang.Oj=function(){var
ub={a:"obj.no_init"};return function(){if(arguments[0]!==jsx3.lang.Jl)if(this.init){this.init.apply(this,arguments);}else{var
ha=jsx3.lang.getCaller(-1);throw new
jsx3.Exception(jsx3._msg(ub.a,ha.jsxclass));}};};jsx3.lang.Object=function(){this.init();};window._jsxZ0=function(r,j){var
ub={a:"function",b:"string",c:"objClass",d:"@",e:"obj.super_funct",f:"obj.super_static",g:"obj.super_none",h:"undefined",i:"obj.supmx_funct",j:"obj.supmx_static",k:"obj.supmx_none",l:"INTERFACES",m:/jsx3/g,n:"jsx3.gui",o:"SUPERS",p:"",q:"."};j.init=function(){};j.getClass=function(){return this.__jsxclass__.jsxclass;};j.equals=function(i){return this===i;};j.clone=function(){return (this.getClass()).bless(this);};j.instanceOf=function(o){if(o instanceof jsx3.lang.Class){return o.isInstance(this);}else if(typeof o==ub.a&&o.prototype!=null){return this instanceof o||o.jsxclass!=null&&o.jsxclass.isInstance(this);}else if(typeof o==ub.b){o=jsx3.lang.Class.forName(o);if(o!=null)return o.isInstance(this);}throw new
jsx3.IllegalArgumentException(ub.c,o);};j.toString=function(){return ub.d+(this.getClass()).getName();};j.jsxsuper=function(f){var
La=jsx3.Exception;var
gb=jsx3.lang.getCaller();var
la=gb!=null?gb.jsxmethod:null;if(la==null||!(la instanceof jsx3.lang.Method))throw new
La(jsx3._msg(ub.e,gb));if(la.isStatic())throw new
La(jsx3._msg(ub.f,la));var
sb=la.getDeclaringClass();var
Ua=sb.rn(la);if(Ua==null)throw new
La(jsx3._msg(ub.g,la));var
F=Ua.apply(this,arguments);if(typeof F!=ub.h)return F;};j.jsxsupermix=function(d){var
cb=jsx3.Exception;var
Oa=jsx3.lang.getCaller();var
z=Oa!=null?Oa.jsxmethod:null;if(z==null||!(z instanceof jsx3.lang.Method))throw new
cb(jsx3._msg(ub.i,Oa));if(z.isStatic())throw new
cb(jsx3._msg(ub.j,z));var
pb=z.getDeclaringClass();var
xb=pb.dn(z);if(xb==null)throw new
cb(jsx3._msg(ub.k,z));var
ta=xb.apply(this,arguments);if(typeof ta!=ub.h)return ta;};j.jsxmix=function(g){};j.isInstanceOf=function(d,q,h){if(this.getClass()&&(typeof d!=ub.b||jsx3.lang.Class.forName(d)!=null))return this.instanceOf(d);var
A=jsx3.getClass(this.getInstanceOf());if(A==null)A=this.constructor;if(typeof A==ub.a){var
Kb=A[q?q:ub.l];var
zb=Kb?Kb[d]:null;if(zb==1){return true;}else if(h){return false;}else return this.isInstanceOf(d.replace(ub.m,ub.n),q,true);}return false;};j.isSubclassOf=function(a){return this.isInstanceOf(a,ub.o);};j.getInstanceOf=function(){if(this.getClass())return (this.getClass()).getName();return this._jsxinstanceof?this._jsxinstanceof:this.constructor.className;};j.setInstanceOf=function(o){this._jsxinstanceof=o;return this;};j.getInstanceOfPackage=function(){if(this.getClass())return (this.getClass()).getPackageName();var
O=this.getInstanceOf();if(O==null)return ub.p;var
zb=O.lastIndexOf(ub.q);if(zb>=0)return O.substring(0,zb);else return ub.p;};j.getInstanceOfClass=function(){if(this.getClass()){var
L=(this.getClass()).getName();return L.substring(L.lastIndexOf(ub.q)+1);}var
ma=this.getInstanceOf();if(ma==null)return ub.p;var
X=ma.lastIndexOf(ub.q);if(X>=0)return ma.substring(X+1);else return ma;};j.eval=function(s,g){return jsx3.eval.call(this,s,g);};};window._jsxZ0(jsx3.lang.Object,jsx3.lang.Object.prototype);window._jsxZ0=null;jsx3.lang.Object.prototype.__noSuchMethod__=function(d,h){throw new
jsx3.Exception(jsx3._msg("class.nsm",(this.getClass()).getName()+"#"+d+"()"));};window.inheritance=jsx3.lang.Object;if(window["jsx3"]==null)window["jsx3"]={};if(jsx3.lang==null)jsx3.lang={};jsx3.lang.Method=jsx3.lang.qg();jsx3.lang.Method.prototype=new
jsx3.lang.Object();jsx3.lang.Method.prototype.constructor=jsx3.lang.Method;window._jsxZ0=function(d,f){var
ub={a:/^\s*function(\s+\w+)?\s*\(\s*([^\)]*?)\s*\)/,b:/\s*,\s*/,c:"method.call",d:".",e:"",f:/^[a-zA-Z_]\w*$/,g:"paramNames[",h:"]",i:"'",j:"', ",k:'var method = arguments.callee.jsxmethod;if (method instanceof jsx3.lang.Method) {  throw new jsx3.Exception("method " + method.getName() + " in class " + method.getDeclaringClass() +    " is abstract and may not be invoked");} else {  throw new jsx3.Exception("invoked abstract method improperly initialized");}',l:"new Function(",m:"');",n:"return this.",o:".apply(this.",p:", arguments);"};d.z0=ub.a;f.dB=function(){if(d.z0.exec((this.getFunction()).toString())){var
Z=RegExp.$2;this.X3=Z?Z.split(ub.b):[];}else this.X3=[];};f.getName=function(){return this.Sv;};f.getArity=function(){if(this.X3==null)this.dB();return this.X3.length;};f.getParameterNames=function(){if(this.X3==null)this.dB();return this.X3.concat();};f.getParameterName=function(h){if(this.X3==null)this.dB();return this.X3[h];};f.getDeclaringClass=function(){return this.fB;};f.isPackageMethod=function(){return this.fB instanceof jsx3.lang.Package;};f.isStatic=function(){return this.Pc;};f.isAbstract=function(){return this.pl;};f.getFunction=function(){if(this.isPackageMethod()){return (this.fB.getNamespace())[this.Sv];}else if(this.Pc){return (this.fB.getConstructor())[this.Sv];}else return (this.fB.getConstructor()).prototype[this.Sv];};f.apply=function(e,n){return (this.getFunction()).apply(e,n);};f.call=function(j){var
Hb=arguments;if(Hb.length>11)throw new
jsx3.Exception(jsx3._msg(ub.c,+Hb.length));return (this.getFunction()).call(Hb[0],Hb[1],Hb[2],Hb[3],Hb[4],Hb[5],Hb[6],Hb[7],Hb[8],Hb[9],Hb[10]);};f.toString=function(){return this.fB.getName()+ub.d+this.Sv;};d.newAbstract=function(k){var
cb=ub.e;for(var
y=0;y<arguments.length;y++){if(!arguments[y].match(ub.f))throw new
jsx3.IllegalArgumentException(ub.g+y+ub.h,arguments[y]);cb=cb+(ub.i+arguments[y]+ub.j);}var
W=ub.k;var
Ma=jsx3.eval(ub.l+cb+ub.i+W+ub.m);Ma.pl=true;return Ma;};d.newDelegate=function(r,o){var
pa=ub.n+o+ub.d+r+ub.o+o+ub.p;return new
Function(pa);};d.argsAsArray=function(n,e,l){if(e==null)e=0;if(l==null)l=n.length;else l=Math.min(l,n.length);var
v=l-e;if(v<=0)return [];var
Db=new
Array(v);for(var
qb=0;qb<v;qb++)Db[qb]=n[qb+e];return Db;};};window._jsxZ0(jsx3.lang.Method,jsx3.lang.Method.prototype);window._jsxZ0=null;if(window["jsx3"]==null)window["jsx3"]=new
window.Object();if(jsx3.lang==null)jsx3.lang=new
window.Object();jsx3.lang.Class=jsx3.lang.qg();jsx3.lang.Class.prototype=new
jsx3.lang.Object();jsx3.lang.Class.prototype.__jsxclass__=jsx3.lang.Class;window._jsxZ0=function(a,e){var
ub={a:"toString",b:"valueOf",c:"jsx3.util.Logger.Manager",d:"jsx3.lang.Class",e:".",f:"jsx3.lang.Object",g:"function",h:"class.bad_super",i:"class.redefine",j:"class.int_ext_class",k:"class.class_ext_int",l:"object",m:"jsx3.lang",n:"class.def_error",o:"class.no_init",p:"loaded ",q:"class.bad_int",r:"class.class_imp_class",s:"class.redef_method"};a.lX={"jsx3.lang.Object":1,"jsx3.lang.Method":1,"jsx3.lang.ClassLoader":1,"jsx3.lang.Class":2};a.jU=[ub.a,ub.b];a.wx={prototype:1,constructor:1,jsxclass:1,__jsxclass__:1};a.dK=null;a.defineClass=function(c,l,q,o){this.E8(c,l,q,o,false);};a.defineInterface=function(p,f,b){this.E8(p,f,null,b,true);};a.E8=function(b,k,r,p,h){if(a.dK==null&&a.forName&&a.forName(ub.c)&&jsx3.util.Logger.Manager.getManager())a.dK=jsx3.util.Logger.getLogger(ub.d);var
xb=b.split(ub.e);var
Ra=xb.pop();var
_=this.gn(xb);var
ha=this.lX[b]!=null;var
Bb=null;if(k==null){Bb=h||b==ub.f?window.Object:jsx3.lang.Object;}else if(k instanceof a){Bb=k.getConstructor();}else if(typeof k==ub.g&&k.prototype!=null){Bb=k;}else a.R2(jsx3._msg(ub.h,k));if(_[Ra]&&_[Ra].jsxclass){a.R2(jsx3._msg(ub.i,b,_[Ra].jsxclass),null,2);}else{var
V=false;if(!ha){if(Bb.jsxclass!=null){if(h&&!Bb.jsxclass.isInterface())a.R2(jsx3._msg(ub.j,b,Bb.jsxclass));if(!h&&Bb.jsxclass.isInterface())a.R2(jsx3._msg(ub.k,b,Bb.jsxclass));}if(typeof _[Ra]==ub.g){V=true;}else if(h){_[Ra]=jsx3.lang.qg();}else if(typeof _[Ra]==ub.l){var
Nb=_[Ra];_[Ra]=jsx3.lang.Oj();for(var Na in Nb)_[Ra][Na]=Nb[Na];}else _[Ra]=jsx3.lang.Oj();_[Ra].prototype=this.Bz(Bb,h);}_[Ra].prototype.__jsxclass__=_[Ra];var
t=_[Ra];if(xb.join(ub.e)==ub.m)jsx3[Ra]=t;var
fb=a.gi(a);fb.Sv=b;fb.h1=t;if(Bb!=null)fb.AE=Bb.jsxclass;fb.Wt=h;fb.FY=[];fb.VN=[];fb.E6=[];var
qb=fb.TH=[];var
Lb=fb.UL=[];fb.rE={};fb.VG={};t.jsxclass=fb;try{p(t,t.prototype);}catch(Kb){var
za=jsx3.NativeError?jsx3.NativeError.wrap(Kb):null;a.R2(jsx3._msg(ub.n,b,za||Kb.description),za);}for(var Na in t){if(a.wx[Na])continue;if(typeof t[Na]==ub.g){this.hv(t[Na],fb,Na,true);}else qb[qb.length]=Na;}for(var
R=0;R<a.jU.length;R++){var
ua=a.jU[R];if(t[ua]!=null&&t[ua]!=window.Function.prototype[ua]&&t[ua].jsxmethod==null)this.hv(t[ua],fb,ua,true);}for(var Na in t.prototype){if(a.wx[Na])continue;var
ib=t.prototype[Na];if(typeof ib==ub.g){if(Bb==null||ib!=Bb.prototype[Na])this.hv(ib,fb,Na,false);}else Lb[Lb.length]=Na;}for(var
R=0;R<a.jU.length;R++){var
ua=a.jU[R];if(t.prototype[ua]!=null&&t.prototype[ua]!=window.Object.prototype[ua]&&t.prototype[ua].jsxmethod==null)this.hv(t.prototype[ua],fb,ua,false);}if(!V&&!h&&!(typeof t.prototype.init==ub.g))a.R2(jsx3._msg(ub.o,b));if(jsx3.$A.is(r))for(var
R=r.length-1;R>=0;R--)a.YP(fb,t,r[R]);if(a.dK)a.dK.trace(ub.p+b);jsx3.CLASS_LOADER.Xi(fb);}};a.YP=function(b,s,o){if(typeof o==ub.g&&o.jsxclass!=null)o=o.jsxclass;else if(!(o instanceof a))a.R2(jsx3._msg(ub.q,b,o));if(!o.isInterface())a.R2(jsx3._msg(ub.r,b,o));var
t=(o.getConstructor()).prototype;for(var Ib in t){var
eb=t[Ib];var
ea=typeof eb==ub.g?eb.jsxmethod:null;if(ea==null)continue;var
W=s.prototype[Ib];if(W==null){s.prototype[Ib]=eb;}else if(!(W.jsxmethod.getDeclaringClass()).equals(b))s.prototype[Ib]=eb;}b.FY.unshift(o);};a.gn=function(g){var
Ia=window;for(var
Va=0;Va<g.length;Va++){var
Ea=g[Va];if(Ia[Ea]==null)Ia[Ea]=new
window.Object();Ia=Ia[Ea];}return Ia;};a.hv=function(o,c,h,d){if(o.jsxmethod instanceof jsx3.lang.Method)if((o.jsxmethod.getDeclaringClass()).equals(c))a.R2(jsx3._msg(ub.s,o.jsxmethod,c+ub.e+h));else return;var
jb=a.gi(jsx3.lang.Method);jb.fB=c;jb.Sv=h;jb.Pc=d;jb.pl=Boolean(o.pl);o.jsxmethod=jb;var
Qa=d?c.VN:c.E6;Qa[Qa.length]=jb;};a.Bz=function(g,f){if(g==Object)return {};return new
g(f?jsx3.lang.Uj:jsx3.lang.Jl);};a.gi=function(n){return new
n(jsx3.lang.Uj);};a.R2=function(n,d,b){if(a.dK){a.dK.log(b||1,n,d);}else if(jsx3.Exception){var
Oa=new
jsx3.Exception(n,d);window.alert(Oa.printStackTrace());}else window.alert(n);};};window._jsxZ0(jsx3.lang.Class,jsx3.lang.Class.prototype);window._jsxZ0=null;jsx3.lang.Class.defineClass("jsx3.lang.Class",null,null,function(f,s){var
ub={a:".",b:"",c:"class.new_inst",d:"class.bless_int",e:"function",f:"get",g:"is",h:"set",i:"class.int_imp_int",j:"class.class_imp_class",k:"class.already_imp",l:"o2",m:"class.mmix_bad",n:"class.no_aop",o:"m:",p:"undefined"};f.forName=function(l){var
Xa=jsx3.lang.getVar(l);return Xa?Xa.jsxclass:null;};s.getName=function(){return this.Sv;};s.getPackage=function(){var
bb=this.Sv;while(true){var
ob=bb.lastIndexOf(ub.a);if(ob<0)break;bb=bb.substring(0,ob);var
A=jsx3.lang.Package.forName(bb);if(A!=null)return A;if(f.forName(bb)==null)break;}return null;};s.getPackageName=function(){var
Va=this.getPackage();if(Va){return Va.getName();}else{var
S=this.Sv.lastIndexOf(ub.a)+1;return S>=0?this.Sv.substring(0,S-1):ub.b;}};s.getConstructor=function(){if(this.h1!=null)return this.h1;var
wb=jsx3.lang.getVar(this.Sv);return wb||null;};s.getSuperClass=function(){return this.AE;};s.isInterface=function(){return this.Wt;};s.toString=function(){return this.Sv;};s.newInstance=function(o){if(arguments.length>10)throw new
jsx3.Exception(jsx3._msg(ub.c));var
ob=arguments;var
Fb=this.getConstructor();return new
Fb(ob[0],ob[1],ob[2],ob[3],ob[4],ob[5],ob[6],ob[7],ob[8],ob[9]);};s.isInstance=function(n){var
Ga=n.__jsxclass__?n.__jsxclass__.jsxclass:null;return Ga!=null&&this.isAssignableFrom(Ga);};s.isAssignableFrom=function(k){if(this.equals(k))return true;if(k.o2==null)k.dF();return k.o2[this.getName()]==true;};s.dF=function(){this.o2={};for(var
Ja=0;Ja<this.FY.length;Ja++){var
Ra=this.FY[Ja];this.o2[Ra.getName()]=true;if(Ra.o2==null)Ra.dF();for(var I in Ra.o2)this.o2[I]=true;}if(this.AE!=null){this.o2[this.AE.getName()]=true;if(this.AE.o2==null)this.AE.dF();for(var I in this.AE.o2)this.o2[I]=true;}};s.mixin=function(l,r,b){if(b){for(var
Aa=0;Aa<b.length;Aa++){var
ka=this.getInstanceMethod(b[Aa]);if(ka&&l[ka.getName()]==null||!r)l[ka.getName()]=ka.getFunction();}}else for(var
Aa=0;Aa<this.E6.length;Aa++){var
ka=this.E6[Aa];if(l[ka.getName()]==null||!r)l[ka.getName()]=ka.getFunction();}};s.bless=function(e){if(this.isInterface())throw new
jsx3.Exception(jsx3._msg(ub.d,this));var
N=f.Bz(this.getConstructor());if(e!=null)for(var aa in e)if(!(typeof e[aa]==ub.e))N[aa]=e[aa];return N;};s.newInnerClass=function(c){if(this.isInterface()){return f.gi(this.getConstructor());}else return this.newInstance.apply(this,arguments);};s.getStaticMethods=function(){return this.VN.concat();};s.getInstanceMethods=function(){return this.E6.concat();};s.getStaticMethod=function(q){for(var
bb=0;bb<this.VN.length;bb++)if(q==this.VN[bb].getName())return this.VN[bb];return null;};s.getInstanceMethod=function(d){if(!this.dM){this.dM={};for(var
Da=0;Da<this.E6.length;Da++)this.dM[this.E6[Da].getName()]=this.E6[Da];}return this.dM[d]||null;};s.getGetter=function(p){p=(p.charAt(0)).toUpperCase()+p.substring(1);return this.mF(ub.f+p)||this.mF(ub.g+p);};s.getSetter=function(r){r=(r.charAt(0)).toUpperCase()+r.substring(1);return this.mF(ub.h+r);};s.getStaticFieldNames=function(){return this.TH.concat();};s.getInstanceFieldNames=function(){return this.UL.concat();};s.getInterfaces=function(){return this.FY.concat();};s.addInterface=function(p){var
Db=null;if(this.isInterface())Db=ub.i;else if(!p.isInterface())Db=ub.j;else if(p.isAssignableFrom(this))Db=ub.k;if(Db)throw new
jsx3.Exception(jsx3._msg(Db,this,p));f.YP(this,this.getConstructor(),p);delete this[ub.l];};s.getInheritance=function(){var
Lb=this.FY.concat();if(this.AE!=null){Lb[Lb.length]=this.AE;Lb.push.apply(Lb,this.AE.getInheritance());}return Lb;};s.getClasses=function(){var
G=this.getConstructor();var
y=[];for(var xb in G)if(typeof G[xb]==ub.e&&G[xb].jsxclass instanceof f){y[y.length]=G[xb].jsxclass;y.push.apply(y,G[xb].jsxclass.getClasses());}return y;};s.addMethodMixin=function(l,c,e){var
J=this.getInstanceMethod(l);if(!J)f.R2(jsx3._msg(ub.m,this,l));var
eb=jsx3.AOP;if(!eb)f.R2(jsx3._msg(ub.n,this,l));var
pb=this.getName()+ub.a+l+ub.a+c.getName();(eb.pc(pb,{classes:this,methods:l,type:c})).after(pb,function(){this[e].apply(this,jsx3.Method.argsAsArray(arguments,1));});};s.mF=function(m,c){var
Ba=null;if(!c)Ba=this.getInstanceMethod(m);var
W=this.getInheritance();for(var
bb=0;Ba==null&&bb<W.length;bb++)Ba=W[bb].getInstanceMethod(m);return Ba;};s.iQ=function(d,g){var
pa=null;if(!g)pa=this.getInstanceMethod(d);if(pa==null&&this.AE!=null)pa=this.AE.iQ(d);return pa;};s.Ey=function(o){var
ba=null;for(var
gb=0;gb<this.FY.length&&ba==null;gb++)ba=this.FY[gb].getInstanceMethod(o);if(ba==null&&this.AE!=null)ba=this.AE.Ey(o);return ba;};s.rn=function(j){var
Q=j.getName();var
L=this.rE[ub.o+Q];if(typeof L==ub.p)this.rE[ub.o+Q]=L=this.iQ(Q,true);return L;};s.dn=function(k){var
R=k.getName();var
Za=this.VG[ub.o+R];if(typeof Za==ub.p)this.VG[ub.o+R]=Za=this.Ey(R);return Za;};});jsx3.lang.Class.defineClass("jsx3.lang.Object",null,null,function(){});jsx3.lang.Class.defineClass("jsx3.lang.Method",null,null,function(){});jsx3.lang.Class.jsxclass.AE=jsx3.lang.Object.jsxclass;jsx3.Class.defineClass("jsx3.lang.AOP",null,null,function(o,q){var
ub={a:"$",b:"EI",c:"G3",d:"qW",e:"NO",f:"YG",g:/^\w+$/,h:"^",i:"*",j:"\\w*",k:"string",l:"function",m:"strClass"};var
yb=jsx3.IllegalArgumentException;o.Kz={};o.w4={};o.pc=function(m,r){if(o.Kz[m])throw new
yb();var
Xa=o.Kz[m]={Sv:m,qW:[],NO:[],YG:[],aF:r,nD:[]};var
sb=o.So(r);for(var
wb=0;wb<sb.length;wb++){var
Ma=sb[wb];var
Oa=o.UK(Ma);o.w4[Oa].bG.push(Xa);Xa.nD.push(Oa);}return o;};o.pcrem=function(f){var
S=o.Kz[f];if(S){var
ya=S.nD;for(var
tb=0;tb<ya.length;tb++){var
ib=o.w4[ya[tb]];ib.bG.splice(jsx3.util.arrIndexOf(ib.bG,S),1);if(ib.bG.length==0)o.fS(ya[tb]);}delete o.Kz[f];}};o.UK=function(b){var
lb=b[0],oa=b[1];var
Ta=lb.getName()+ub.a+oa;if(!o.w4[Ta]){var
Ha=(lb.getConstructor()).prototype;if(!Ha[oa]._aoppc){o.w4[Ta]={yT:Ha[oa],bG:[]};var
pa=Ha[oa].jsxmethod;Ha[oa]=o.xG(Ta);Ha[oa].jsxmethod=pa;}else o.w4[Ta]={yT:o.w4[Ha[oa]._aopkey].yT,bG:[]};}return Ta;};o.fS=function(k){var
ba=o.w4[k];var
y=ba.yT;var
R=y.jsxmethod;((R.getDeclaringClass()).getConstructor()).prototype[R.getName()]=y;delete o.w4[k];};o.before=function(f,i,n){o[n?ub.b:ub.c](f,i,ub.d);};o.after=function(i,k,d){o[d?ub.b:ub.c](i,k,ub.e);};o.around=function(b,e,j){o[j?ub.b:ub.c](b,e,ub.f);};o.G3=function(e,b,l){o.Kz[e][l].push(b);};o.EI=function(k,r,f){var
t=o.Kz[k][f];for(var
x=t.length-1;x>=0;x--)if(t[j]===r)t.splice(x,1);};o.xG=function(l){var
La=function(){return o.qX(l,this,arguments);};La._aoppc=1;La._aopkey=l;return La;};o.qX=function(f,d,c){var
pb=o.gx(d,o.w4[f].bG);var
X=o.aN(pb,ub.f);if(X.length>0){return (new
o.Vt(f,X,d,c)).yN();}else return o.jP(f,d,c,pb);};o.jP=function(e,n,d,a){if(!a)a=o.gx(n,o.w4[e].bG);var
K=o.aN(a,ub.d);for(var
B=0;B<K.length;B++)K[B].apply(n,d);var
F=o.w4[e].yT.apply(n,d);var
T=o.aN(a,ub.e);if(T.length>0){var
M=jsx3.Method.argsAsArray(d);M.unshift(F);for(var
B=0;B<T.length;B++)T[B].apply(n,M);}return F;};o.gx=function(j,m){var
M=[];for(var
kb=0;kb<m.length;kb++){var
db=m[kb];var
v=db.aF;if(!v||!v.type||j.instanceOf(v.type))M.push(db);}return M;};o.aN=function(e,s){var
X=[];for(var
B=0;B<e.length;B++)X.push.apply(X,e[B][s]);return X;};o.So=function(d){var
wa=[];var
db=o.a4(d.classes);for(var
da=0;da<db.length;da++)wa.push.apply(wa,o.hX(db[da],d.methods));return wa;};o.a4=function(d){if(!jsx3.$A.is(d))d=[d];var
fb=[];for(var
bb=0;bb<d.length;bb++)fb[bb]=o.lZ(d[bb]);return fb;};o.hX=function(b,j){var
Ra=[];var
nb=(b.getConstructor()).prototype;if(!jsx3.$A.is(j))j=[j];for(var
eb=0;eb<j.length;eb++){var
P=j[eb];if(P.match(ub.g)){var
Pa=nb[P];if(Pa)Ra.push([b,P]);}else{var
qb=new
RegExp(ub.h+P.replace(ub.i,ub.j)+ub.a);for(var z in nb)if(z.match(qb))Ra.push([b,z]);}}return Ra;};o.lZ=function(s){if(typeof s==ub.k)return jsx3.Class.forName(s);else if(typeof s==ub.l)return s.jsxclass;else if(s instanceof jsx3.Class)return s;else throw new
yb(ub.m,s);};o.Vt=function(k,n,l,d){this.vc=k;this.GW=n;this.aX=l;this.jT=d;};o.Vt.prototype.yN=function(){return this.proceed.apply(this,this.jT);};o.Vt.prototype.proceed=function(){var
v=this.GW.shift();if(v){var
Pa=jsx3.Method.argsAsArray(arguments);Pa.unshift(this);return v.apply(this.aX,Pa);}else return o.jP(this.vc,this.aX,arguments);};});jsx3.Class.defineClass("jsx3.lang.Exception",null,null,function(n,o){var
ub={a:"jsxsuper",b:"jsxsupermix",c:"__noSuchMethod__",d:"",e:"\n",f:"    at ",g:"#",h:".",i:"()",j:"^function(\\s+\\w+)?\\s*\\(([^\\)]*)\\)\\s*{",k:"anonymous",l:/\s+/g,m:" ",n:"(",o:/\s*,\s*/,p:", ",q:")",r:" { ",s:"anonymous()",t:": ",u:"\nCaused By:\n"};var
xb=jsx3.lang.Method;n.N7=false;n.je=null;o.init=function(f,l){n.je=this;this.Q3=f;this.ZP=l;this.eg=[];this.k4();if(n.N7&&window.onerror==null)window.alert(f+this.printStackTrace());var
Q=jsx3.util.Logger;if(Q){var
zb=Q.getLogger(n.jsxclass.getName());if(zb.isLoggable(6))zb.trace(f,this);}};o.toString=function(){return this.Q3;};o.getMessage=function(){return this.Q3;};o.getCause=function(){return this.ZP;};o.getStack=function(){return this.eg;};n.L0=[jsx3.Object.jsxclass.getInstanceMethod(ub.a),jsx3.Object.jsxclass.getInstanceMethod(ub.b),jsx3.Object.jsxclass.getInstanceMethod(ub.c)];n.formatStack=function(c){var
S=ub.d;if(!jsx3.util||!jsx3.util.jsxpackage)return S;for(var
vb=0;vb<c.length;vb++){var
J=c[vb];if(J==null)continue;if(J.jsxmethod instanceof xb){var
Jb=c[vb+1];if(Jb!=null&&jsx3.util.arrIndexOf(n.L0,Jb.jsxmethod)>=0)if(J==xb.prototype.apply)continue;if(jsx3.util.arrIndexOf(n.L0,J.jsxmethod)>=0)continue;if(S.length>0)S=S+ub.e;S=S+ub.f;S=S+(J.jsxmethod.getDeclaringClass()).getName();S=S+(J.jsxmethod.isStatic()?ub.g:ub.h);S=S+(J.jsxmethod.getName()+ub.i);}else{if(S.length>0)S=S+ub.e;S=S+ub.f;if(J.jsxclass instanceof jsx3.lang.Class){S=S+(J.jsxclass.getName()+ub.i);}else{var
Gb=J.toString();if(Gb.match(new
RegExp(ub.j))){var
Q=RegExp.$1||ub.k;var
ia=RegExp.$2;var
ba=RegExp.rightContext;ba=jsx3.util.strTruncate((jsx3.util.strTrim(ba)).replace(ub.l,ub.m),70);S=S+(jsx3.util.strTrim(Q)+ub.n+((jsx3.util.strTrim(ia)).split(ub.o)).join(ub.p)+ub.q+(ba?ub.r+ba:ub.d));}else S=S+ub.s;}}}return S;};o.printStackTrace=function(){var
Ba=(this.getClass()).getName()+ub.t+this+ub.e+n.formatStack(this.eg);if(this.ZP!=null)Ba=Ba+(ub.u+this.ZP.printStackTrace());return Ba;};o.k4=function(){var
rb=jsx3.lang.getStack(1);var
N=-1;for(var
G=0;G<rb.length;G++)if(rb[G].jsxclass!=null){N=G;break;}if(N>=0)rb.splice(0,N+1);this.eg=rb;};});jsx3.Class.defineClass("jsx3.lang.IllegalArgumentException",jsx3.lang.Exception,null,function(d,o){var
ub={a:"exc.ill_arg"};o.init=function(g,n){this.jsxsuper(jsx3._msg(ub.a,g,n));};});jsx3.Class.defineClass("jsx3.lang.NativeError",jsx3.lang.Exception,null,function(d,g){var
ub={A:"line:",B:"file:",C:")",a:"",b:"uncaught exception:",c:"jsx3.util.Logger",d:"string",e:"error.trap",f:"error.uncaught",g:"\n",h:"error.trap_err",i:"objError",j:/\s*$/,k:"EvalError",l:"RangeError",m:"ReferenceError",n:"SyntaxError",o:"TypeError",p:"Error",q:": ",r:/\n/g,s:"\nCaused By:\n",t:/^([^\(]*)\((.*)\)@(.*):(\d+)$/,u:"    at ",v:"anonymous",w:"(), line:",x:", file:",y:" (type:",z:", "};var
mb=jsx3.Exception;d.D1=false;d.EW=true;d.wrap=function(s){if(s instanceof Error)return new
d(s);else if(s instanceof mb)return s;else return new
mb(ub.a+s);};d.initErrorCapture=function(l){window.onerror=arguments.length>0?l:d.S3;};d.stopErrorCapture=function(r){window.onerror=null;};d.Pr=ub.b;d.S3=function(b,p,h){try{if(!d.D1&&jsx3.Class.forName(ub.c)!=null&&jsx3.util.Logger.GLOBAL!=null){if(typeof b==ub.d&&b.indexOf(d.Pr)>=0)if(mb.je!=null){var
Ba=jsx3.lang.getStack(0);if(Ba.length<2||Ba.contentsEqual(mb.je.getStack())){if(Ba.length<2)jsx3.util.Logger.GLOBAL.logStack(2,jsx3._msg(ub.e,b,d.T9(h),p),1);jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.f),mb.je);mb.je=true;return true;}}jsx3.util.Logger.GLOBAL.logStack(2,jsx3._msg(ub.e,b,d.T9(h),p),1);return true;}else if(d.EW){if(typeof b==ub.d&&b.indexOf(d.Pr)>=0)if(mb.je!=null){var
Ba=jsx3.lang.getStack(0);if(Ba.contentsEqual(mb.je.getStack())){window.alert(jsx3._msg(ub.f)+ub.g+mb.je.printStackTrace());return true;}}var
Ba=jsx3.lang.getStack(0);window.alert(jsx3._msg(ub.e,b,d.T9(h),p)+ub.g+mb.formatStack(Ba));return true;}else return false;}catch(Kb){window.alert(jsx3._msg(ub.h,d.wrap(Kb),b,d.T9(h),p));}};g.dN=null;g.init=function(h){if(!(h instanceof Error))throw new
jsx3.IllegalArgumentException(ub.i,h);this.dN=h;this.jsxsuper();};g.getMessage=function(){return (this.dN.message||this.dN.toString()).replace(ub.j,ub.a);};g.getFileName=function(){return this.dN.sourceURL;};g.getLineNumber=function(){return this.dN.line;};d.T9=function(a){if(jsx3.util.numIsNaN(a))return null;return a;};g.getName=function(){return this.dN.name;};g.isStructural=function(){return false;};g.getType=function(){if(this.dN instanceof EvalError)return ub.k;if(this.dN instanceof RangeError)return ub.l;if(this.dN instanceof ReferenceError)return ub.m;if(this.dN instanceof SyntaxError)return ub.n;if(this.dN instanceof TypeError)return ub.o;return ub.p;};g.printStackTrace=function(){var
D=(this.getClass()).getName()+ub.q+this+ub.g+mb.formatStack(this.eg);if(this.dN.stack){var
pa=(String(this.dN.stack)).split(ub.r);D=D+ub.s;for(var
vb=0;vb<pa.length;vb++)if(ub.t.exec(pa[vb])){D=D+(ub.u+(RegExp.$1?RegExp.$1:ub.v)+ub.w+RegExp.$4+ub.x+RegExp.$3+ub.g);}else D=D+(pa[vb]+ub.g);}if(this._cause!=null)D=D+(ub.s+this._cause.printStackTrace());return D;};g.toString=function(){var
I=this.getLineNumber();var
V=this.getFileName();var
va=this.getMessage();if(I||V){va=va+(ub.y+this.getType()+ub.z);if(I)va=va+(ub.A+I);if(V){if(I)va=va+ub.z;va=va+(ub.B+V);}va=va+ub.C;}return va;};});jsx3.lang.Package=jsx3.lang.qg();jsx3.lang.Class.defineClass("jsx3.lang.Package",null,null,function(s,k){var
ub={a:".",b:"jsx3.util.Logger",c:"jsx3.lang",d:"pkg.redefine",e:"pkg.def_error",f:"jsxpackage",g:"function",h:"object",i:"class.nsm",j:"#",k:"()",l:"class.redef_method"};var
hb=jsx3.lang.Class;var
ea=jsx3.lang.Method;s.R8=[];s.definePackage=function(l,f){var
t=hb.gn(l.split(ub.a));var
aa=false;var
rb=null;if(t.jsxpackage!=null){if(jsx3.Class.forName(ub.b))(jsx3.util.Logger.getLogger(ub.c)).info(jsx3._msg(ub.d,l));rb=t.jsxpackage;aa=true;rb.TH=[];rb.VN=[];}else{rb=hb.gi(s);rb.bO=l;rb.TH=[];rb.VN=[];t.jsxpackage=rb;}try{f(t);}catch(Kb){var
D=jsx3.NativeError.wrap(Kb);throw new
jsx3.Exception(jsx3._msg(ub.e,l,D),D);}for(var lb in t){if(lb==ub.f)continue;if(typeof t[lb]==ub.g){if(t[lb].jsxclass==null)this.hv(t[lb],rb,lb);}else if(t[lb]==null||typeof t[lb]!=ub.h||t[lb].jsxpackage==null)rb.TH.push(lb);}if(t.__noSuchMethod__==null)t.__noSuchMethod__=function(a,e){throw new
jsx3.Exception(jsx3._msg(ub.i,l+ub.j+a+ub.k));};s.R8.push(rb);jsx3.CLASS_LOADER.pk(rb);};s.hv=function(d,a,p){if(d.jsxmethod instanceof ea)if((d.jsxmethod.getDeclaringClass()).equals(a)&&d.jsxmethod.getName()!=p){throw new
jsx3.Exception(jsx3._msg(ub.l,d.jsxmethod,a+ub.a+p));}else{if((d.jsxmethod.getDeclaringClass()).equals(a)&&jsx3.util.arrIndexOf(a.VN,d.jsxmethod)<0)a.VN.push(d.jsxmethod);return;}var
t=hb.gi(ea);t.fB=a;t.Sv=p;t.Pc=true;d.jsxmethod=t;a.VN.push(t);};s.forName=function(l){var
E=jsx3.lang.getVar(l);return E?E.jsxpackage:null;};s.getPackages=function(){return s.R8.concat();};k.bO=null;k.Ev=null;k.VN=null;k.TH=null;k.getName=function(){return this.bO;};k.getNamespace=function(){if(this.Ev!=null)return this.Ev;var
Db=jsx3.lang.getVar(this.bO);return Db||null;};k.getClasses=function(){var
Oa=[];var
z=this.getNamespace();for(var sa in z)if(typeof z[sa]==ub.g&&z[sa].jsxclass instanceof hb)if(z[sa].jsxclass.getPackage()==this&&this.getName()+ub.a+sa==z[sa].jsxclass.getName()){Oa[Oa.length]=z[sa].jsxclass;Oa.push.apply(Oa,z[sa].jsxclass.getClasses());}return Oa;};k.getStaticMethods=function(){return this.VN.concat();};k.getStaticMethod=function(g){for(var
gb=0;gb<this.VN.length;gb++)if(g==this.VN[gb].getName())return this.VN[gb];return null;};k.getStaticFieldNames=function(){return this.TH.concat();};k.toString=function(){return this.bO;};});jsx3.Package.definePackage("jsx3",function(){var
ub={A:"INHR01",B:"Super class '",C:"' of '",D:"' not properly defined",E:"1",F:"jsx3.util.Logger",G:"GP",a:"JSX/addins/",b:"Msxml2.FreeThreadedDOMDocument.3.0",c:"Msxml2.XSLTemplate.3.0",d:"Msxml2.XMLHTTP.3.0",e:"JSX30DESERIALIZE",f:"JSX30INITIALIZE",g:"",h:"var ",i:" = _ec.",j:";",k:"string",l:"object",m:"jsx3.gui.MatrixColumn",n:"jsx3.gui.Matrix.Column",o:"queueDone",p:"jsx3.net.Request.INSYNC",q:"gi",r:"http://www.tibco.com/gi",s:"boot.oah",t:/\s+/,u:"script",v:"function",w:".prototype",x:".",y:")",z:"\n"};jsx3.ADDINSPATH=ub.a;jsx3.XMLREGKEY=ub.b;jsx3.XSLREGKEY=ub.c;jsx3.HTTPREGKEY=ub.d;jsx3.getXmlVersion=function(){return 6;};jsx3.DESERIALIZE=ub.e;jsx3.INITIALIZE=ub.f;jsx3.LOG10E=0.4342944819032518;jsx3.STARTUP_EVENT=null;jsx3.CACHE=null;jsx3.EVENT=null;jsx3.getSharedCache=function(){if(jsx3.CACHE==null)jsx3.CACHE=new
jsx3.app.Cache();return jsx3.CACHE;};jsx3.getSystemCache=function(){if(jsx3.kA==null)jsx3.kA=new
jsx3.app.Cache();return jsx3.kA;};jsx3.eval=function(q,i){if(q!=null&&q!==ub.g){var
Ba=ub.g;if(i){var
_ec=i;var
sa=[];for(var N in _ec)if(jsx3.util.isName(N))sa[sa.length]=ub.h+N+ub.i+N+ub.j;Ba=sa.join(ub.g);}return eval(Ba+q);}};jsx3.resolveURI=function(l){return (jsx3.net.URIResolver.DEFAULT.resolveURI(l)).toString();};jsx3.makeCallback=function(e,p,b){var
Ja=jsx3.Method.argsAsArray;var
t=Ja(arguments,2);if(typeof e==ub.k)e=p[e];return function(){var
ba=arguments;var
T=ba.length>0?t.concat(Ja(ba)):t;return e.apply(p,T);};};jsx3.clone=function(h){if(typeof h!=ub.l)return h;var
_={};for(var Ha in h)_[Ha]=h[Ha];return _;};jsx3.E7={};jsx3.E7[ub.m]=ub.n;jsx3.require=function(b){for(var
R=0;R<arguments.length;R++){var
Ma=arguments[R];Ma=jsx3.E7[Ma]||Ma;if(jsx3.Class.forName(Ma)==null)jsx3.CLASS_LOADER.loadClass(Ma);}};jsx3.requireAsync=jsx3.$Y(function(j){var
S=j.args();var
A=S[0];jsx3.CLASS_LOADER.loadClassAsync(A,function(){if(S.length>=2){(jsx3.requireAsync.apply(jsx3,jsx3.Method.argsAsArray(S,1))).when(function(){j.done();});}else j.done();});});jsx3.e8=[];jsx3.pW=[];jsx3.yv=null;jsx3.sleep=function(q,o,c,n){if(o&&jsx3.pW[o])if(n)jsx3.pW[o][0]=null;else return;var
tb=[q,o,c];var
Na=jsx3.e8;Na[Na.length]=tb;if(o!=null)jsx3.pW[o]=tb;if(!jsx3.yv)jsx3.yv=window.setTimeout(jsx3.DE,0);};jsx3.QUEUE_DONE=ub.o;jsx3.DE=function(){try{if(jsx3.lang.getVar(ub.p))return;var
Ca=jsx3.e8;jsx3.e8=[];for(var
Ga=0;Ga<Ca.length;Ga++){var
Lb=Ca[Ga];if(Lb&&Lb[0])try{if(Lb[1]!=null)delete jsx3.pW[Lb[1]];Lb[0].apply(Lb[2]);}catch(Kb){var
ha=jsx3.util.Logger;if(ha){var
qb=jsx3.NativeError.wrap(Kb);ha.GLOBAL.error(qb,qb);}}}}finally{if(jsx3.e8.length>0)jsx3.yv=window.setTimeout(jsx3.DE,0);else{jsx3.yv=null;jsx3.publish({subject:jsx3.QUEUE_DONE});}}};jsx3.startup=function(){if(window.OpenAjax)try{OpenAjax.hub.registerLibrary(ub.q,ub.r,jsx3.getVersion());}catch(Kb){var
ra=jsx3.util.Logger;if(ra)ra.GLOBAL.error(jsx3._msg(ub.s),jsx3.NativeError.wrap(Kb));}};jsx3.destroy=function(){if(jsx3.app&&jsx3.app.Server){var
x=jsx3.app.Server.allServers();for(var
Ka=0;Ka<x.length;Ka++)try{x[Ka].destroy();}catch(Kb){}}if(jsx3.gui&&jsx3.gui.Event){var
ba="BEFOREUNLOAD BLUR CHANGE CLICK DOUBLECLICK ERROR FOCUS KEYDOWN KEYPRESS KEYUP LOAD MOUSEDOWN MOUSEMOVE MOUSEOUT MOUSEOVER MOUSEUP MOUSEWHEEL UNLOAD RESIZE".split(ub.t);for(var
Ka=0;Ka<ba.length;Ka++)jsx3.gui.Event.unsubscribeAll(jsx3.gui.Event[ba[Ka]]);}jsx3.NativeError.stopErrorCapture();var
Fa=document.getElementsByTagName(ub.u);for(var
Ka=0;Ka<Fa.length;Ka++){var
mb=Fa.item(Ka);mb.parentNode.removeChild(mb);}jsx3.CLASS_LOADER.destroy();window.jsx3=null;};jsx3.getClass=function(p){try{var
Ma=eval(p);return typeof Ma==ub.v?Ma:null;}catch(Kb){return null;}};jsx3.tl=function(f){try{var
db=eval(f+ub.w);return typeof db==ub.l&&typeof db.constructor==ub.v?db:null;}catch(Kb){return null;}};jsx3.getClassConstants=function(q){var
Oa=jsx3.getClass(q);if(Oa!=null){var
A=[];for(var Jb in Oa)if(Jb.toUpperCase()==Jb)A[A.length]=q+ub.x+Jb;return A;}};jsx3.getInstanceMethods=function(e){var
J=jsx3.tl(e);var
fa=[];for(var ga in J)if(typeof J[ga]==ub.v){var
I=J[ga].toString();fa[fa.length]=I.substring(9,I.indexOf(ub.y)+1);}return fa;};jsx3.getClassMethods=function(o){var
sb=jsx3.getClass(o);var
Ab=ub.g;for(var hb in sb)if(typeof sb[hb]==ub.v){var
u=sb[hb].toString();Ab=Ab+(hb+u.substring(8,u.indexOf(ub.y)+1)+ub.z);}return Ab;};jsx3.doInherit=function(p,e,n){var
Sa=jsx3.getClass(p);var
ia=jsx3.getClass(e);if(ia==null){jsx3.util.Logger.doLog(ub.A,ub.B+e+ub.C+p+ub.D,1,false);return;}if(Sa.isInherited==null||n!=null&&n){if(!n){Sa.SUPER=e;Sa.SUPERS={};for(var Ja in ia.SUPERS){Sa.SUPERS[Ja]=ia.SUPERS[Ja];Sa.SUPERS[p]=1;}}Sa.className=p;if(Sa.INHERITANCE==null)Sa.INHERITANCE=[p];if(ia.INHERITANCE)for(var
L=ia.INHERITANCE.length-1;L>=0;L--)Sa.INHERITANCE.splice(1,0,ia.INHERITANCE[L]);else Sa.INHERITANCE.splice(1,0,e);if(Sa.INTERFACES==null)Sa.INTERFACES={};if(ia.INTERFACES){for(var Ja in ia.INTERFACES)Sa.INTERFACES[Ja]=ia.INTERFACES[Ja];}else Sa.INTERFACES[e]=ub.E;Sa.INTERFACES[p]=ub.E;if(!(n!=null&&n))Sa.isInherited=true;var
lb=jsx3.tl(e);var
Pa=jsx3.tl(p);for(var Ja in lb)if(typeof Pa[Ja]!=ub.v)Pa[Ja]=lb[Ja];}};jsx3.doImplement=function(r,g){jsx3.doInherit(r,g,true);};jsx3.doMixin=function(f,l){var
Ja=jsx3.tl(l);for(var fa in Ja)if(typeof Ja[fa]==ub.v)f[fa]=Ja[fa];};jsx3.doDefine=function(n,h){var
E=jsx3.getClass(n);if(E.isDefined==null){E.isDefined=true;h();}};jsx3.out=function(b,r,n,o){if(jsx3.Class.forName(ub.F))jsx3.util.Logger.doLog(b,r,n,o);};window.doInherit=jsx3.doInherit;window.doImplement=jsx3.doImplement;window.doMixin=jsx3.doMixin;window.doDefine=jsx3.doDefine;jsx3.log=function(d){if(jsx3.Class.forName(ub.F)&&jsx3.util.Logger.GLOBAL){if(jsx3.GP){for(var
nb=0;nb<jsx3.GP.length;nb++)jsx3.util.Logger.GLOBAL.info(jsx3.GP[nb]);delete jsx3[ub.G];}jsx3.util.Logger.GLOBAL.info(d);}else{var
gb=jsx3.GP;if(!gb)jsx3.GP=gb=[];gb[gb.length]=d;}};});jsx3.Package.definePackage("jsx3.app",function(){});jsx3.Boolean={};jsx3.Boolean.TRUE=1;jsx3.Boolean.FALSE=0;jsx3.Boolean.valueOf=function(k){return k?1:0;};jsx3.Package.definePackage("jsx3.gui",function(d){var
ub={a:"className"};d.no=function(q,m){var
ib=[];for(var
db=0;db<arguments.length-1;db=db+2){q=arguments[db];if(q._jsxRr)continue;q._jsxRr=true;m=arguments[db+1];var
Y={};for(var Hb in m)Y[Hb]=Hb==ub.a?q.className:q.style[Hb];ib.push(q,Y,m);}d.NF(ib,0,6);};d.NF=function(h,k,m){if(k==m){for(var
qb=0;qb<h.length-2;qb=qb+3){var
ga=h[qb];ga._jsxRr=null;}return;}for(var
qb=0;qb<h.length-2;qb=qb+3){var
ga=h[qb];var
Mb=k%2==0?h[qb+2]:h[qb+1];for(var rb in Mb)if(rb==ub.a)ga.className=Mb[rb];else ga.style[rb]=Mb[rb];}window.setTimeout(function(){d.NF(h,k+1,m);},75);};d.isMouseEventModKey=function(q){if(jsx3.app.Browser.macosx)return q.metaKey();else return q.ctrlKey();};});jsx3.Package.definePackage("jsx3.lang",function(p){});jsx3.Package.definePackage("jsx3.net",function(h){});jsx3.Class.defineInterface("jsx3.net.URIResolver",null,function(g,l){var
ub={a:"jsxabspath",b:"jsxhomepath",c:"jsxscriptapppath",d:"JSXAPPS",e:"/",f:"..",g:"jsx",h:"JSX",i:"jsxuser",j:"GI_Builder/",k:"function",l:"jsxurirslv",m:"3.6",n:"strURI",o:"bRel"};g.wK={};g.register=function(b,p){g.wK[b]=p;};g.eX=function(){if(this.V0==null)this.V0=new
jsx3.net.URI(jsx3.getEnv(ub.a));return this.V0;};g.PN=function(){var
P=jsx3.getEnv(ub.b);if(P==null)return new
jsx3.net.URI(jsx3.getEnv(ub.c));if(this.my==null)this.my=new
jsx3.net.URI(P);return this.my;};g.DEFAULT=g.jsxclass.newInnerClass();g.DEFAULT.resolveURI=function(e){var
Ua=jsx3.net.URI.valueOf(e);var
Za=Ua.getScheme();var
F=Ua.getPath();var
wa=g.getResolver(Ua);var
T=Ua;if(wa&&wa!=g.DEFAULT){if(Ua.isAbsolute())Ua=jsx3.net.URI.fromParts(null,null,null,null,F.substring(1),Ua.getQuery(),Ua.getFragment());T=wa.resolveURI(Ua);}else if(wa){T=(g.eX()).resolve(Ua);}else if((Ua.toString()).indexOf(ub.d+ub.e)==0){T=g.USER.resolveURI(Ua);}else if(!Za&&F.indexOf(ub.f)>=0){var
ca=jsx3.app.Browser.getLocation();T=ca.relativize(ca.resolve(Ua));}return T;};g.DEFAULT.getUriPrefix=function(){return (g.eX()).toString();};g.DEFAULT.relativizeURI=function(m,a){return jsx3.net.URI.valueOf(m);};g.JSX=g.jsxclass.newInnerClass();g.register(ub.g,g.JSX);g.JSX.getURI=function(){if(this._uri==null)this._uri=(g.eX()).resolve(ub.h+ub.e);return this._uri;};g.JSX.resolveURI=function(e){var
Ma=jsx3.net.URI.valueOf(e);if(!g.isAbsoluteURI(Ma))Ma=(this.getURI()).resolve(Ma);return g.DEFAULT.resolveURI(Ma);};g.JSX.getUriPrefix=function(){return g.eX()+ub.h+ub.e;};g.JSX.relativizeURI=function(f,s){var
Ba=(this.getURI()).relativize(f);if(Ba.isAbsolute()||s)return Ba;else return jsx3.net.URI.fromParts(ub.g,null,null,null,ub.e+Ba.getPath(),Ba.getQuery(),Ba.getFragment());};g.USER=g.jsxclass.newInnerClass();g.register(ub.i,g.USER);g.USER.resolveURI=function(d){var
qa=jsx3.net.URI.valueOf(d);if((qa.getPath()).indexOf(ub.d+ub.e)==0||!g.isAbsoluteURI(qa))return (g.PN()).resolve(qa);return g.DEFAULT.resolveURI(qa);};g.USER.getUriPrefix=function(){return (g.PN()).toString();};g.USER.relativizeURI=function(n,b){var
Oa=jsx3.app.Browser.getLocation();var
X=(Oa.resolve(jsx3.getEnv(ub.b))).relativize(Oa.resolve(n));if(X.isAbsolute()||b)return X;else return jsx3.net.URI.fromParts(ub.i,null,null,null,ub.e+X.getPath(),X.getQuery(),X.getFragment());};g.isAbsoluteURI=function(b){var
jb=jsx3.net.URI.valueOf(b);if(jb.getScheme()!=null)return true;var
ba=jb.getPath();return ba.indexOf(ub.e)==0||ba.indexOf(ub.h+ub.e)==0||ba.indexOf(ub.d+ub.e)==0||ba.indexOf(ub.j)==0;};g.getResolver=function(s){var
X=jsx3.net.URI.valueOf(s);var
_=X.getScheme();var
J=null;if(_){J=g.wK[_];if(typeof J==ub.k)J=J(X);}else{var
Hb=X.getPath();if(Hb.indexOf(ub.h+ub.e)==0||Hb.indexOf(ub.j)==0)J=g.DEFAULT;else if(jsx3.getEnv(ub.l)==ub.m&&Hb.indexOf(ub.d+ub.e)==0)J=g.USER;}return J;};l.resolveURI=jsx3.Method.newAbstract(ub.n);l.getUriPrefix=jsx3.Method.newAbstract();l.relativizeURI=jsx3.Method.newAbstract(ub.n,ub.o);});jsx3.Package.definePackage("jsx3.xml",function(s){});jsx3.Package.definePackage("jsx3.util",function(c){var
ub={A:"&lt;",B:/>/g,C:"&gt;",D:/\"/g,E:"&quot;",F:/[^\x09\x0A\x0D\x20-\x7F]/g,G:"\\u",H:"...",I:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J:"=",a:",",b:/^[\\$_a-zA-Z][\w\\$]*$/,c:/^(\d+)?([a-zA-Z_]\w*)?$/,d:/[\._]/,e:"",f:"\b",g:"\\b",h:"\t",i:"\\t",j:"\n",k:"\\n",l:"\u000C",m:"\\f",n:"\r",o:"\\r",p:'"',q:'\\"',r:"\\",s:"\\\\",t:/[\"\\\x00-\x1f]/,u:/[\x00-\x1f\\\"]/g,v:"\\u00",w:/(^\s*)|(\s*$)/g,x:/&/g,y:"&amp;",z:/</g};c.RESERVED=jsx3.$H("abstract,boolean,break,byte,case,catch,char,class,const,continue,debugger,default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,goto,if,implements,import,in,instanceof,int,interface,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,typeof,var,void,volatile,while,with".split(ub.a));c.isName=function(l){return Boolean(!c.RESERVED[l]&&l.match(ub.b));};c.compareVersions=function(f,e){var
ca=ub.c;var
Jb=f.split(ub.d);var
kb=e.split(ub.d);var
db=Math.max(Jb.length,kb.length);var
zb,Kb,ha,Da;for(var
E=0;E<db;E++){if(Jb.length>E&&ca.test(Jb[E])){zb=parseInt(RegExp.$1)||Number(0);Kb=RegExp.$2;}else{zb=0;Kb=ub.e;}if(kb.length>E&&ca.test(kb[E])){ha=parseInt(RegExp.$1)||Number(0);Da=RegExp.$2;}else{ha=0;Da=ub.e;}if(zb>ha)return 1;if(zb<ha)return -1;if(Kb>Da)return 1;if(Kb<Da)return -1;}return 0;};c.numMod=function(n,i){var
ka=n%i;return ka<0?ka+i:ka;};c.numIsNaN=function(a){return a==null||a===ub.e||isNaN(a);};c.numRound=function(r,k){return Math.round(r/k)*k;};c.strEmpty=function(b){return b==null||b===ub.e;};c._jsxi9={};c._jsxi9[ub.f]=ub.g;c._jsxi9[ub.h]=ub.i;c._jsxi9[ub.j]=ub.k;c._jsxi9[ub.l]=ub.m;c._jsxi9[ub.n]=ub.o;c._jsxi9[ub.p]=ub.q;c._jsxi9[ub.r]=ub.s;c.strEscapeJSON=function(j){if(ub.t.test(j))return ub.p+j.replace(ub.u,function(g){var
ra=c._jsxi9[g];if(ra)return ra;ra=g.charCodeAt();return ub.v+(Math.floor(ra/16)).toString(16)+(ra%16).toString(16);})+ub.p;return ub.p+j+ub.p;};c.arrIndexOf=function(o,a){for(var
N=0;N<o.length;N++)if(o[N]===a)return N;return -1;};c.tq=ub.w;c.strTrim=function(h){return h.replace(c.tq,ub.e);};c.strEscapeHTML=function(g){return (((((String(g)).replace(ub.x,ub.y)).replace(ub.z,ub.A)).replace(ub.B,ub.C)).replace(ub.D,ub.E)).replace(ub.F,function(h){var
nb=h.charCodeAt(0);if(nb<32||nb>55295&&nb<57344||nb>65533&&nb<65536||nb>1114111)return ub.G+nb.toString(16);else return h;});};c.strTruncate=function(h,r,p,e){if(p==null)p=ub.H;if(e==null)e=1;if(h.length>r&&p.length<r){var
Ca=r-p.length;var
Ib=Math.round(Ca*e);var
H=h.substring(0,Ib);var
P=h.substring(h.length-(Ca-Ib));return H+p+P;}else return h;};c.strEndsWith=function(h,g){var
z=h.lastIndexOf(g);return z>=0&&z==h.length-g.length;};c.gA=ub.I;c.strEncodeBase64=function(k){var
Z=c.gA;var
u=new
Array(Math.ceil(k.length*4/3));var
Ha=0,Kb=0,db=k.length;for(;Ha<=db-3;Ha=Ha+3){var
N=(k.charCodeAt(Ha)&255)<<16|(k.charCodeAt(Ha+1)&255)<<8|k.charCodeAt(Ha+2)&255;u[Kb++
]=Z.charAt((N&16515072)>>18);u[Kb++
]=Z.charAt((N&258048)>>12);u[Kb++
]=Z.charAt((N&4032)>>6);u[Kb++
]=Z.charAt(N&63);}if(Ha<db){var
ha=Ha<db-1;var
N=(k.charCodeAt(Ha)&255)<<16;if(ha)N=N|(k.charCodeAt(Ha+1)&255)<<8;u[Kb++
]=Z.charAt((N&16515072)>>18);u[Kb++
]=Z.charAt((N&258048)>>12);if(ha)u[Kb++
]=Z.charAt((N&4032)>>6);else u[Kb++
]=ub.J;u[Kb++
]=ub.J;}return u.join(ub.e);};c.strDecodeBase64=function(e){var
jb=c.gA;var
lb=new
Array(Math.ceil(e.length/4));var
Oa=0,Aa=0,ja=e.length;for(;Oa<ja;Oa=Oa+4){var
Eb=(jb.indexOf(e.charAt(Oa))&255)<<18|(jb.indexOf(e.charAt(Oa+1))&255)<<12|(jb.indexOf(e.charAt(Oa+2))&255)<<6|jb.indexOf(e.charAt(Oa+3))&255;lb[Aa++
]=String.fromCharCode((Eb&16711680)>>16,(Eb&65280)>>8,Eb&255);}if(e.charCodeAt(Oa-2)==61)lb[Aa-1]=lb[Aa-1].substring(0,1);else if(e.charCodeAt(Oa-1)==61)lb[Aa-1]=lb[Aa-1].substring(0,2);return lb.join(ub.e);};});jsx3.Class.defineClass("jsx3.util.List",null,null,function(m,o){var
ub={a:"a",b:"number",c:"[",d:"]"};m.wrap=function(g){if(g instanceof m){return g;}else if(g instanceof Array){return new
m(g,true);}else throw new
jsx3.IllegalArgumentException(ub.a,g);};o.init=function(l,h){if(typeof l==ub.b){this.aV=new
Array(l);}else if(l instanceof m){this.aV=l.aV.concat();}else{l=m.wI(l);if(l instanceof Array){this.aV=h?l:l.concat();}else this.aV=[];}this.U1=-1;};o.size=function(){return this.aV.length;};o.get=function(k){return this.aV[k];};o.set=function(i,k){this.aV[i]=k;};o.iterator=function(){return new
m.Iterator(this);};o.clear=function(){this.aV.splice(0,this.aV.length);};o.indexOf=function(p,r){if(r==null)r=0;var
Ta=this.size();for(var
sa=r;sa<Ta;sa++)if(this.get(sa)===p)return sa;return -1;};o.lastIndexOf=function(d,f){if(f==null)f=this.size()-1;for(var
ea=f;ea>=0;ea--)if(this.get(ea)===d)return ea;return -1;};o.contains=function(h){return this.indexOf(h)>=0;};o.remove=function(f){var
va=this.indexOf(f);if(va>=0)return (this.aV.splice(va,1))[0];return null;};o.removeAt=function(n,b){if(arguments.length==2){return m.wrap(this.aV.splice(n,b-n));}else return (this.aV.splice(n,1))[0];};o.clone=function(){return new
m(this);};o.add=function(q,n){var
bb=this.aV;if(n==null)bb[bb.length]=q;else bb.splice(n,0,q);};o.addAll=function(l,q){if(l instanceof m)l=l.toArray(true);else l=m.wI(l);if(jsx3.$A.is(l)){if(q==null)this.aV.push.apply(this.aV,l);else this.aV=(this.aV.slice(0,q)).concat(l,this.aV.slice(q));}else throw new
jsx3.IllegalArgumentException(ub.a,l);};m.wI=function(s){if(s==null||s instanceof Array){return s;}else if(typeof s.length==ub.b){var
H=new
Array(s.length);for(var
Z=0;Z<s.length;Z++)H[Z]=s[Z];return H;}else return s;};o.slice=function(i,a){return m.wrap(arguments.length>1?this.aV.slice(i,a):this.aV.slice(i));};o.sort=function(e){if(e)this.aV.sort(e);else this.aV.sort();};o.toArray=function(q){return q?this.aV:this.aV.concat();};o.equals=function(d){if(this===d)return true;if(!(d instanceof m))return false;var
mb=this.size();if(mb!=d.size())return false;for(var
ob=0;ob<mb;ob++)if(this.get(ob)!==d.get(ob))return false;return true;};o.filter=function(r){var
ua=[];var
wb=this.size();for(var
Fa=0;Fa<wb;Fa++){var
Ra=this.get(Fa);if(r(Ra))ua[ua.length]=Ra;}return m.wrap(ua);};o.map=function(e,j,c){var
xa=this.size();if(j){if(c){var
ca={};for(var
Za=0;Za<xa;Za++){var
Na=e(this.get(Za));for(var
B=0;B<Na.length;B=B+2)ca[Na[B]]=Na[B+1];}return ca;}else{var
ca=[];for(var
Za=0;Za<xa;Za++){var
Ia=e(this.get(Za));if(Ia instanceof Array)ca.push.apply(ca,Ia);else ca[ca.length]=Ia;}return m.wrap(ca);}}else if(c){var
ca={};for(var
Za=0;Za<xa;Za++){var
jb=e(this.get(Za));ca[jb[0]]=jb[1];}return ca;}else{var
ca=new
Array(xa);for(var
Za=0;Za<xa;Za++)ca[Za]=e(this.get(Za));return m.wrap(ca);}};o.toString=function(){return ub.c+this.aV+ub.d;};o.reset=function(){this.U1=-1;return this;};o.next=function(){return this.get(
++this.U1);};o.move=function(k){this.U1=k;return this;};o.hasNext=function(){return this.U1<this.size()-1;};o.getIndex=function(){return this.U1;};o.getItem=function(i){return this.get(i);};o.getLength=function(){return this.size();};});jsx3.Class.defineInterface("jsx3.util.Iterator",null,function(n,r){r.next=jsx3.Method.newAbstract();r.hasNext=jsx3.Method.newAbstract();r.remove=jsx3.Method.newAbstract();});jsx3.Class.defineClass("jsx3.util.List.Iterator",null,[jsx3.util.Iterator],function(n,r){r.init=function(b){this.Hl=b;this.wm=b?b.size():0;this.ty=0;};r.next=function(){return this.Hl.get(this.ty++);};r.hasNext=function(){return this.ty<this.wm;};r.remove=function(){if(this.ty>0){this.Hl.removeAt(
--this.ty);this.wm--;}};});jsx3.Class.defineClass("jsx3.app.AddIn",null,[jsx3.net.URIResolver],function(d,j){var
ub={a:"prototypes/",b:"user:",c:"jsxuser:/addins/",d:"/",e:"id",f:"name",g:"description",h:"version",i:"jsxversion",j:"3.1",k:"config.xml",l:"JSX_SETTINGS::",m:"3.2",n:"jsxaddin",o:/:/,p:"!",q:":"};var
C=jsx3.net.URIResolver;d.PROTOTYPES_DIR=ub.a;j.init=function(p){this.vc=p;this.nM=p.indexOf(ub.b)==0?jsx3.resolveURI(ub.c+p.substring(5)+ub.d):jsx3.resolveURI(jsx3.ADDINSPATH+p+ub.d);this.io=new
jsx3.net.URI(this.nM);this.Co=(jsx3.app.Browser.getLocation()).resolve(this.io);this.hs=null;};j.getId=function(){return (this.getSettings()).get(ub.e);};j.getName=function(){return (this.getSettings()).get(ub.f);};j.getDescription=function(){return (this.getSettings()).get(ub.g);};j.getVersion=function(){return (this.getSettings()).get(ub.h);};j.getJsxVersion=function(){return (this.getSettings()).get(ub.i)||ub.j;};j.getKey=function(){return this.vc;};j.getPath=function(){return this.nM;};j.getSettings=function(){if(this.hs==null){var
ka=(jsx3.getSystemCache()).getOrOpenDocument(this.io.resolve(ub.k),ub.l+this.getKey());this.hs=new
jsx3.app.Settings(ka);}return this.hs;};j.setSettings=function(l){this.hs=l;};j.resolveURI=function(o){var
N=jsx3.net.URI.valueOf(o);if(jsx3.util.compareVersions(this.getJsxVersion(),ub.m)>=0&&!C.isAbsoluteURI(N))N=this.io.resolve(N);return C.DEFAULT.resolveURI(N);};j.getUriPrefix=function(){return this.io.toString();};j.relativizeURI=function(s,g){var
ob=jsx3.app.Browser.getLocation();var
Ga=this.Co.relativize(ob.resolve(s));if(Ga.isAbsolute()||g)return Ga;else return jsx3.net.URI.fromParts(ub.n,null,(this.getKey()).replace(ub.o,ub.p),null,ub.d+Ga.getPath(),Ga.getQuery(),Ga.getFragment());};j.toString=function(){return this.vc;};C.register(ub.n,function(h){var
B=((h.getHost()).split(ub.p,2)).join(ub.q);return jsx3.System.getAddin(B);});});jsx3.Class.defineInterface("jsx3.util.EventDispatcher",null,function(c,m){var
ub={a:"*",b:"object",c:"function",d:"string",e:"objHandler, objFunction",f:"{",g:"}, {",h:"}",i:"objEvent"};c.i4=1;c.VS=2;c.Ly=3;c.nW=4;c.TA=5;c.SUBJECT_ALL=ub.a;m.subscribe=function(l,q,d){var
P=typeof q;var
Aa=typeof d;var
La=null;if(P==ub.b||P==ub.c){if(Aa==ub.c){La=[c.i4,q,d];}else if(Aa==ub.d){La=[c.VS,q,d];}else if(P==ub.c)La=[c.TA,q];}else if(P==ub.d)if(Aa==ub.c){La=[c.Ly,q,d];}else if(Aa==ub.d)La=[c.nW,q,d];if(La==null&&P==ub.b&&q.call&&q.apply)La=[c.TA,q];if(La==null)throw new
jsx3.IllegalArgumentException(ub.e,ub.f+typeof q+ub.g+typeof d+ub.h);if(!jsx3.$A.is(l))l=[l];for(var
Fb=0;Fb<l.length;Fb++){var
wa=this.b0();var
da=l[Fb];if(!wa[da])wa[da]=[La];else wa[da].push(La);}};m.unsubscribe=function(q,l){if(!jsx3.$A.is(q))q=[q];for(var
lb=0;lb<q.length;lb++){var
A=(this.b0())[q[lb]];if(A)for(var
Na=0;Na<A.length;Na++)if(A[Na][1]===l)A.splice(Na--
,1);}};m.unsubscribeAll=function(k){if(this._jsxeventreg)delete this._jsxeventreg[k];};m.unsubscribeAllFromAll=function(){this._jsxeventreg={};};m.publish=function(a){if(a.target==null)a.target=this;var
rb=a.subject;if(rb==null)throw new
jsx3.IllegalArgumentException(ub.i,a);var
t=this._jsxeventreg;if(!t)return;var
ya=t[rb];var
ea=t[ub.a];if(!ya&&!ea)return;var
yb=[];if(ya)yb.push.apply(yb,ya);if(ea)yb.push.apply(yb,ea);for(var
db=0;db<yb.length;db++){var
Ua=yb[db];var
H=Ua[0];var
ta=Ua[1];var
sa=Ua[2];if(H==c.i4){sa.call(ta,a);}else if(H==c.VS){ta[sa](a);}else if(H==c.Ly){var
zb=(this.getServer()).getJSX(ta);if(zb)sa.call(zb,a);}else if(H==c.nW){var
zb=(this.getServer()).getJSX(ta);if(zb)zb[sa](a);}else if(H==c.TA){ta.call(null,a);}else{}}return yb.length;};m.getSubscriberCount=function(k){var
db=(this.b0())[k];return db?db.length:0;};m.b0=function(){if(this._jsxeventreg==null)this._jsxeventreg={};return this._jsxeventreg;};});jsx3.util.EventDispatcher.jsxclass.mixin(jsx3);jsx3.EventDispatcher=jsx3.util.EventDispatcher;jsx3.Class.defineClass("jsx3.net.URI",null,null,function(s,f){var
ub={A:"%0",B:/[^a-fA-F0-9]/,a:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",b:"0123456789",c:"_-!.~'()*",d:",;:$&+=",e:"?/[]@",f:"%",g:"^[",h:"][\\-\\.\\+",i:"]*\\:",j:"arguments",k:"@",l:":",m:"",n:"/@",o:"//",p:"?",q:"#",r:"string",s:"/",t:".",u:"..",v:"&",w:"=",x:/(\W)/g,y:"\\$1",z:"]*$"};s.i2=ub.a;s.NY=ub.b;s.ou=s.i2+s.NY;s.B4=s.ou+ub.c;s.bP=ub.d;s.eD=s.bP+ub.e;s.FJ=ub.f;s.gr=new
RegExp(ub.g+s.i2+ub.h+s.i2+ub.i);f._5=null;f.RR=null;f.GH=null;f.fs=null;f.Bq=null;f.nM=null;f.dp=null;f.EC=null;f.v0=null;f.mB=null;s.fromParts=function(k,p,e,m,o,r,l){var
sb=s.jsxclass.bless();var
wa=arguments;var
B=null,N=null;if(wa.length==3){sb.RR=wa[0];N=s.encode(wa[1],s.B4+s.eD+s.FJ);sb.GH=s.decode(wa[1]);sb.fs=s.decode(wa[2]);}else if(wa.length==7){sb.RR=wa[0];sb.EC=s.decode(wa[1]);sb.v0=wa[2];sb.mB=wa[3];sb.nM=s.decode(wa[4]);sb.dp=s.decode(wa[5]);sb.fs=s.decode(wa[6]);}else throw new
jsx3.IllegalArgumentException(ub.j,jsx3.Method.argsAsArray(wa));if(sb.Bq==null&&sb.v0!=null){sb.Bq=B=sb.v0;if(sb.EC){sb.Bq=sb.EC+ub.k+sb.Bq;B=s.encode(sb.EC,s.B4+s.bP+s.FJ)+ub.k+B;}if(sb.mB){sb.Bq=sb.Bq+ub.l+sb.mB;B=B+ub.l+sb.mB;}}if(sb.GH==null){sb.GH=N=ub.m;if(sb.nM){sb.GH=sb.nM;N=s.encode(sb.nM,s.B4+s.bP+s.FJ+ub.n);}if(sb.Bq!=null){sb.GH=ub.o+sb.Bq+sb.GH;N=ub.o+B+N;}if(sb.dp){sb.GH=sb.GH+ub.p+sb.dp;N=N+ub.p+s.encode(sb.dp,s.B4+s.bP+s.FJ);}}if(sb._5==null){sb._5=N;if(sb.RR)sb._5=sb.RR+ub.l+sb._5;if(sb.fs!=null)sb._5=sb._5+ub.q+s.encode(sb.fs,s.B4+s.eD+s.FJ);}return sb;};f.init=function(j){if(j==null)j=ub.m;if(typeof j!=ub.r)j=j.toString();this._5=j;var
Ja=j;var
Ua;if(s.gr.test(Ja)){var
Bb=RegExp.lastMatch;this.RR=Ja.substring(0,Bb.length-1);Ja=Ja.substring(Bb.length);}if((Ua=Ja.indexOf(ub.q))>=0){this.fs=s.decode(Ja.substring(Ua+1));Ja=Ja.substring(0,Ua);}this.GH=Ja;var
Z=this.RR!=null;var
Ea=Z&&Ja.indexOf(ub.s)!=0;if(!Ea){if(Ja.indexOf(ub.o)==0){Ua=Ja.indexOf(ub.s,2);this.Bq=Ja.substring(2,Ua>=0?Ua:Ja.length);Ja=Ua>=0?Ja.substring(Ua):ub.m;}if((Ua=Ja.indexOf(ub.p))>=0){this.dp=s.decode(Ja.substring(Ua+1));Ja=Ja.substring(0,Ua);}this.nM=s.decode(Ja);var
Ma=this.Bq;if(Ma){if((Ua=Ma.indexOf(ub.k))>=0){this.EC=s.decode(Ma.substring(0,Ua));Ma=Ma.substring(Ua+1);}if((Ua=Ma.indexOf(ub.l))>=0){this.mB=parseInt(Ma.substring(Ua+1));Ma=Ma.substring(0,Ua);}}this.v0=Ma;}};f.normalize=function(){if(jsx3.util.strEmpty(this.nM))return this;var
La=this.nM.split(ub.s);s.N0(La);var
u=La.join(ub.s);return u==this.nM?this:s.fromParts(this.RR,this.EC,this.v0,this.mB,u,this.dp,this.fs);};s.N0=function(g){var
Na=g[0]!==ub.m;for(var
Lb=g.length-1;Lb>=0;Lb--)if(g[Lb]==ub.t)g.splice(Lb,1);for(var
Lb=0;Lb<g.length;Lb++)if(Lb>0&&g[Lb]==ub.u&&g[Lb-1]!=ub.u){g.splice(Lb-1,2);Lb=Lb-2;}if(Na&&g[0]!=null&&g[0].indexOf(ub.l)>=0)g.unshift(ub.t);};f.resolve=function(e){e=s.valueOf(e);if(this._5==ub.m)return e;if(e.isAbsolute()||this.isOpaque())return e;if(e.fs&&!e.nM&&!e.RR&&!e.Bq&&!e.dp)return s.fromParts(this.RR,this.EC,this.v0,this.mB,this.nM,this.dp,e.fs);var
Va=this.RR;var
wb=e.dp;var
ob=e.fs;var
sa=null,Mb=null,ya=null,gb=null;if(e.Bq!=null){sa=e.EC;Mb=e.v0;ya=e.mB;gb=e.nM;}else{sa=this.EC;Mb=this.v0;ya=this.mB;if(e.nM.indexOf(ub.s)==0){gb=e.nM;}else{var
U=this.nM.split(ub.s);U.pop();U.push.apply(U,e.nM.split(ub.s));s.N0(U);gb=U.join(ub.s);}}return s.fromParts(Va,sa,Mb,ya,gb,wb,ob);};f.relativize=function(b){b=s.valueOf(b);if(this._5==ub.m)return b;if(this.isOpaque()||b.isOpaque())return b;if(this.RR!=b.RR)return b;var
Hb=this.Bq!=null?this.Bq:ub.m;var
Sa=b.Bq!=null?b.Bq:ub.m;if(Hb!=Sa)return b;var
D=this.nM||ub.m;var
wa=b.nM||ub.m;var
cb=D.split(ub.s);cb.pop();var
C=wa.split(ub.s);var
wb=[];var
X=0;while(X<cb.length&&X<C.length){if(cb[X]!=C[X])break;X++;}var
ea=null;if(X<2&&D.indexOf(ub.s)==0){ea=wa;}else{for(var
Db=X;Db<cb.length;Db++)wb[wb.length]=ub.u;for(var
Db=X;Db<C.length;Db++)wb[wb.length]=C[Db];ea=wb.join(ub.s);}return s.fromParts(null,null,null,null,ea,b.dp,b.fs);};f.getAuthority=function(){return this.Bq;};f.getFragment=function(){return this.fs;};f.getHost=function(){return this.v0;};f.getPath=function(){return this.nM;};f.getPort=function(){return this.mB;};f.getQuery=function(){return this.dp;};f.getQueryParam=function(g){var
u=this.dp;if(u){var
T=0;var
ba=g.length;var
mb=null;while((mb=u.indexOf(g,T))>=0){if(mb==0||u.charAt(mb-1)==ub.v){var
fa=u.charAt(mb+ba);if(fa==ub.v||jsx3.util.strEmpty(fa)){return true;}else if(fa==ub.w){var
Fb=u.indexOf(ub.v,mb+ba+1);return Fb>=0?u.substring(mb+ba+1,Fb):u.substring(mb+ba+1);}}T=mb+ba;}}return null;};f.getQueryParams=function(){var
da={};if(this.dp){var
Ma=this.dp.split(ub.v);for(var
K=0;K<Ma.length;K++){var
u=Ma[K];var
La=u.indexOf(ub.w);if(La>=0){da[u.substring(0,La)]=u.substring(La+1);}else da[u]=true;}}return da;};f.getScheme=function(){return this.RR;};f.getSchemeSpecificPart=function(){return this.GH;};f.getUserInfo=function(){return this.EC;};f.isAbsolute=function(){return this.RR!=null;};f.isOpaque=function(){return this.RR!=null&&this.GH.indexOf(ub.s)!=0;};f.equals=function(p){if(this===p)return true;if(!(p instanceof jsx3.net.URI))return false;var
Wa=this.RR;var
ga=p.RR;if(Wa==null&&ga!=null||Wa!=null&&ga==null)return false;if(Wa!=null&&Wa.toLowerCase()!=ga.toLowerCase())return false;if(this.fs!=p.fs)return false;if(this.isOpaque()){if(!p.isOpaque())return false;return this.GH==p.GH;}else return this.nM==p.nM&&this.dp==p.dp&&this.Bq==p.Bq;};f.toString=function(){return this._5;};s.encode=function(q,j){if(q==null)return null;if(j==null)j=s.B4;var
sa=new
RegExp(ub.g+j.replace(ub.x,ub.y)+ub.z);if(q.match(sa))return q;var
z=q.length;var
P=new
Array(z);for(var
C=0;C<z;C++){var
nb=q.charAt(C);if(j.indexOf(nb)<0){var
Ca=nb.charCodeAt(0);if(Ca<16){P[C]=ub.A+(Ca.toString(16)).toUpperCase();}else if(Ca<256){P[C]=ub.f+(Ca.toString(16)).toUpperCase();}else P[C]=nb;}else P[C]=nb;}return P.join(ub.m);};s.decode=function(k){if(k==null)return null;if(k.indexOf(ub.f)<0)return k;var
K=k.length;var
Oa=new
Array(K);var
P=0;for(var
ga=0;ga<k.length;ga++){var
aa=k.charAt(ga);if(aa==ub.f){var
Ua=k.substring(ga+1,ga+3);if(Ua.match(ub.B)){Oa[P++
]=aa;}else{Oa[P++
]=String.fromCharCode(parseInt(Ua,16));ga=ga+2;}}else Oa[P++
]=aa;}return Oa.join(ub.m);};s.valueOf=function(b){if(jsx3.util.strEmpty(b))return s.o5;return b instanceof s?b:new
s(b);};s.o5=new
s();});jsx3.Class.defineClass("jsx3.gui.Event",null,null,function(k,a){var
ub={A:": ",B:/\s+/g,C:" ",D:"attaching event listener ",E:" to ",F:".",G:"adding event listener ",H:"setting event handler ",I:" on ",J:"error subscribing to event ",K:"_focusHandler  lost focus:",L:" (",M:")",N:"function",O:"subscribeLoseFocus ",P:"... adding event listener to ",Q:"unsubscribeLoseFocus ",R:"... removing event listener from ",S:"Unsubscribing from event ",T:"Unsubscribing all from event ",U:"Publishing event: ",V:"Handling event: ",W:"detaching event listener ",X:" from ",Y:"removing event listener ",Z:"unsetting event handler ",_:"",a:"beforeunload",aa:"mouse",b:"blur",ba:"key",c:"change",ca:"KeyEvents",d:"click",da:"MouseEvent",e:"dblclick",ea:"KeyEvent",f:"error",fa:"tabindex",g:"focus",ga:"onclick",h:"keydown",ha:"@jsx3.gui.Event <empty>",i:"keypress",ia:"@jsx3.gui.Event ",j:"keyup",ja:":",k:"load",l:"mousedown",m:"mousemove",n:"mouseout",o:"mouseover",p:"mouseup",q:"mousewheel",r:"unload",s:"resize",t:"jsx3.util.Logger",u:"registering window ",v:"deregistering window ",w:"Window ",x:" not registered.",y:"on",z:"Subscribing to event "};k.BEFOREUNLOAD=ub.a;k.BLUR=ub.b;k.CHANGE=ub.c;k.CLICK=ub.d;k.DOUBLECLICK=ub.e;k.ERROR=ub.f;k.FOCUS=ub.g;k.KEYDOWN=ub.h;k.KEYPRESS=ub.i;k.KEYUP=ub.j;k.LOAD=ub.k;k.MOUSEDOWN=ub.l;k.MOUSEMOVE=ub.m;k.MOUSEOUT=ub.n;k.MOUSEOVER=ub.o;k.MOUSEUP=ub.p;k.MOUSEWHEEL=ub.q;k.UNLOAD=ub.r;k.RESIZE=ub.s;k.KEY_ALT=18;k.KEY_ARROW_DOWN=40;k.KEY_ARROW_LEFT=37;k.KEY_ARROW_RIGHT=39;k.KEY_ARROW_UP=38;k.KEY_BACKSPACE=8;k.KEY_CONTROL=17;k.KEY_DELETE=46;k.KEY_END=35;k.KEY_ENTER=13;k.KEY_ESCAPE=27;k.KEY_HOME=36;k.KEY_INSERT=45;k.KEY_META=224;k.KEY_PAGE_DOWN=34;k.KEY_PAGE_UP=33;k.KEY_SHIFT=16;k.KEY_SPACE=32;k.KEY_TAB=9;k.KEY_0=48;k.KEY_9=57;k.KEY_A=65;k.KEY_Z=90;k.KEY_NP0=96;k.KEY_NP9=105;k.KEY_NPDIV=111;k.KEY_NPMUL=106;k.KEY_NPSUB=109;k.KEY_NPADD=107;k.KEY_NPDEC=110;k.KEY_F1=112;k.KEY_F15=126;k.cx=[];k.NC=[];k.n9=jsx3.util.EventDispatcher.jsxclass.newInnerClass();k.LS=[];var
y=null;k.tZ=function(){if(k._LOG==null)if(jsx3.Class.forName(ub.t)!=null){y=jsx3.util.Logger;k._LOG=y.getLogger(k.jsxclass.getName());}return k._LOG;};k._registerWindow=function(h){var
Eb=k.tZ();if(Eb!=null&&Eb.isLoggable(5))Eb.debug(ub.u+h.name);k.cx.push(h);k.NC.push({});k.LS.push({});};k._isWindowRegistered=function(d){return jsx3.util.arrIndexOf(k.cx,d)>=0;};k._deregisterWindow=function(s){var
Ea=jsx3.util.arrIndexOf(k.cx,s);if(Ea>=0){var
Ba=k.tZ();if(Ba!=null&&Ba.isLoggable(5))Ba.debug(ub.v+s.name);k.cx.splice(Ea,1);k.NC.splice(Ea,1);k.LS.splice(Ea,1);}else throw new
jsx3.Exception(ub.w+s+ub.x);};k._registerWindow(window);k.subscribe=function(f,d,j){k.n9.subscribe(f,d,j);var
C=ub.y+f;var
pb=k.tZ();if(pb!=null&&pb.isLoggable(5))pb.debug(ub.z+f+ub.A+((d.toString()).substring(0,50)).replace(ub.B,ub.C));var
bb=k.cp(f)?[window]:k.cx;for(var
eb=0;eb<bb.length;eb++)try{var
sb=bb[eb];var
v=k.gG(sb,f);if(v.attachEvent&&k.HS(f)){var
_a=k.LS[eb];if(!_a[f]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.D+f+ub.E+v+ub.F);v.attachEvent(C,k.Ft);_a[f]=true;}}else if(v.addEventListener&&k.l1(f)){var
_a=k.LS[eb];if(!_a[f]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.G+f+ub.E+v+ub.F);v.addEventListener(f,k.Ft,false);_a[f]=true;}}else{var
u=k.NC[eb];if(v[C]!=k.Ft){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.H+C+ub.I+v+ub.F);if(v[C]!=null)u[C]=v[C];v[C]=k.Ft;}}}catch(Kb){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.J+f,jsx3.NativeError.wrap(Kb));k._deregisterWindow(sb);eb--;}};k.H8=[];k._q=function(g){var
ob=k.wrap(g);var
Q=ob.srcElement();var
x=k.H8.concat();var
Ya=k.tZ();L2:for(var
_a=0;_a<x.length;_a++){var
Z=x[_a];var
Bb=Z[0];var
eb=Z[1];var
z=Z[2];var
nb=Q;if(eb.containsHtmlElement){if(eb.containsHtmlElement(Q))continue;}else while(nb!=null){if(nb==eb)continue L2;nb=nb.parentNode;}if(Ya!=null&&Ya.isLoggable(5))Ya.debug(ub.K+eb+ub.L+Bb+ub.M);var
na={target:k,event:ob};if(typeof z==ub.N)z.call(Bb,na);else Bb[z](na);}};k.subscribeLoseFocus=function(q,e,d){var
Sa=k.tZ();if(Sa!=null&&Sa.isLoggable(5))Sa.debug(ub.O+q+ub.C+e);k.H8.push([q,e,d]);if(k.H8.length==1){var
ma=e.ownerDocument||e.getDocument();if(Sa!=null&&Sa.isLoggable(5))Sa.debug(ub.P+ma);ma.addEventListener(ub.g,k._q,true);}};k.unsubscribeLoseFocus=function(p){var
fb=k.tZ();if(fb!=null&&fb.isLoggable(5))fb.debug(ub.Q+p);var
wa=null;for(var
Xa=0;Xa<k.H8.length;Xa++)if(k.H8[Xa][0]==p){var
Ra=k.H8[Xa][1];wa=Ra.ownerDocument||Ra.getDocument();k.H8.splice(Xa--
,1);}if(k.H8.length==0&&wa!=null){if(fb!=null&&fb.isLoggable(5))fb.debug(ub.R+wa);wa.removeEventListener(ub.g,k._q,true);}};k.preventSelection=function(n){};k.unsubscribe=function(s,j){var
xa=k.tZ();if(xa!=null&&xa.isLoggable(5))xa.debug(ub.S+s+ub.A+((j.toString()).substring(0,50)).replace(ub.B,ub.C));k.n9.unsubscribe(s,j);if(k.n9.getSubscriberCount(s)==0)k.Fw(s);};k.unsubscribeAll=function(i){var
Eb=k.tZ();if(Eb!=null&&Eb.isLoggable(5))Eb.debug(ub.T+i+ub.F);k.n9.unsubscribeAll(i);k.Fw(i);};k.publish=function(m){var
z={subject:m.getType(),target:k,event:m};k.PA(z);};k.PA=function(c){var
K=ub.y+c.subject.toLowerCase();var
C=k.tZ();if(C!=null&&C.isLoggable(6))C.trace(ub.U+K+ub.F);var
Oa=k.NC[0];if(Oa[K]!=null)Oa[K]();k.n9.publish(c);};k.Ft=function(n){var
Db=new
k(n!=null?n:window.event);var
ja=k.tZ();if(ja!=null&&ja.isLoggable(6))ja.trace(ub.V+Db.getType()+ub.F);if(Db.getType()==ub.s){var
mb=document.body.offsetWidth,Fa=document.body.offsetHeight;if(mb===k.yP&&Fa===k._E)return;k.yP=mb;k._E=Fa;}var
za={subject:Db.getType(),target:k,event:Db};k.PA(za);if(za.returnValue)return za.returnValue;};k.Fw=function(o){var
ta=ub.y+o;var
pb=k.tZ();var
Na=k.cp(o)?[window]:k.cx;for(var
Ja=0;Ja<Na.length;Ja++)try{var
Bb=Na[Ja];var
wb=k.gG(Bb,o);if(wb.attachEvent&&k.HS(o)){var
xa=k.LS[Ja];if(xa[o]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.W+o+ub.X+wb);wb.detachEvent(ta,k.Ft);xa[o]=false;}}else if(wb.removeEventListener&&k.l1(o)){var
xa=k.LS[Ja];if(xa[o]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.Y+o+ub.X+wb+ub.F);wb.removeEventListener(o,k.Ft,false);xa[o]=false;}}else{var
Mb=k.NC[Ja];if(pb!=null&&pb.isLoggable(5))pb.debug(ub.Z+ta+ub.I+wb+ub.F);if(Mb[ta]!=null){wb[ta]=Mb[ta];delete Mb[ta];}else wb[ta]=null;}}catch(Kb){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.J+o,jsx3.NativeError.wrap(Kb));k._deregisterWindow(Bb);Ja--;}};k.gG=function(n,m){return m==ub.a||m==ub.r||m==ub.s?n:n.document;};k.HS=function(l){return l!=ub.a;};k.l1=function(l){return l!=ub.a;};k.cp=function(f){return f==ub.a||f==ub.r;};a.init=function(b,r){this.yq=b;if(r)this._clone=jsx3.clone(b);};a.yh=function(){if(this._clone==null)this._clone=jsx3.clone(this.yq);this._clone._jsxky=true;};k.wrap=function(l,j){return l instanceof k?l:new
k(l,j);};k.getCurrent=function(p){return window.event?new
k(window.event,p):null;};a._event=function(){if(this.yq==null)return this._clone;else return this.yq;};a.event=function(){return this._event();};a.getType=function(){return (this._event()).type;};a.srcElement=function(){var
gb=this._event();return gb.target||gb.srcElement;};a.toElement=function(){var
Fa=this._event();return Fa.type==ub.n?Fa.relatedTarget:Fa.target;};a.fromElement=function(){var
sb=this._event();return sb.type==ub.o?sb.relatedTarget:sb.target;};a.isMouseEvent=function(){var
L=this.getType()||ub._;return L.indexOf(ub.aa)==0||L==ub.d||L==ub.e;};a.isKeyEvent=function(){return (this.getType()||ub._).indexOf(ub.ba)==0;};a.setCapture=function(h){};a.releaseCapture=function(g){};a.keyCode=function(){var
Ya=this._event();return Ya.keyCode;};a.clientX=function(){var
pb=this._event();return pb?pb.clientX:Number.NaN;};a.clientY=function(){var
ha=this._event();return ha?ha.clientY:Number.NaN;};a.getOffsetX=function(){var
pb=(this._event()).target;var
ha=(this._event()).clientX;return ha-(jsx3.html.getRelativePosition(pb.ownerDocument.body,pb)).L;};a.getOffsetY=function(){var
Ka=(this._event()).target;var
sa=(this._event()).clientY;return sa-(jsx3.html.getRelativePosition(Ka.ownerDocument.body,Ka)).T;};a.getScreenX=function(){return (this._event()).screenX;};a.getScreenY=function(){return (this._event()).screenY;};a.getTrueX=function(){return (this._event()).clientX;};a.getTrueY=function(){return (this._event()).clientY;};a.getWheelDelta=function(){var
cb=(this._event()).wheelDelta;var
Fa=cb>0?Math.ceil(cb/120):Math.floor(cb/120);return Fa;};a.shiftKey=function(){var
sa=this._event();return sa.shiftKey;};a.ctrlKey=function(){var
Z=this._event();return Z.ctrlKey;};a.altKey=function(){var
Va=this._event();return Va.altKey;};a.metaKey=function(){var
Ia=this._event();return Ia.metaKey;};a.enterKey=function(){return (this._event()).keyCode==13;};a.spaceKey=function(){return (this._event()).keyCode==32;};a.tabKey=function(){return (this._event()).keyCode==9;};a.rightArrow=function(){return (this._event()).keyCode==39;};a.leftArrow=function(){return (this._event()).keyCode==37;};a.upArrow=function(){return (this._event()).keyCode==38;};a.downArrow=function(){return (this._event()).keyCode==40;};a.deleteKey=function(){return (this._event()).keyCode==46;};a.backspaceKey=function(){return (this._event()).keyCode==8;};a.insertKey=function(){return (this._event()).keyCode==45;};a.homeKey=function(){return (this._event()).keyCode==36;};a.endKey=function(){return (this._event()).keyCode==35;};a.pageUpKey=function(){return (this._event()).keyCode==33;};a.pageDownKey=function(){return (this._event()).keyCode==34;};a.escapeKey=function(){return (this._event()).keyCode==27;};a.exists=function(){return this._event()!=null;};a.cancelBubble=function(){var
ja=this._event();ja._jsxAt=true;if(!ja._jsxky)ja.stopPropagation();};a.cancelReturn=function(){(this._event()).returnValue=false;};a.preventDefault=function(){var
ma=this._event();if(!ma._jsxky)ma.preventDefault();};a.cancelKey=function(){var
Ea=this._event();if(!Ea._jsxky){Ea.stopPropagation();Ea.preventDefault();}};a.cancelAll=function(){this.cancelBubble();this.cancelKey();this.cancelReturn();};a.leftButton=function(){var
z=this._event();if(jsx3.app.Browser.macosx&&z.ctrlKey)return false;var
ha=this.getType();if(ha==ub.l||ha==ub.p){return z.button==0;}else if(ha==ub.d||ha==ub.e)return z.button==0;return false;};a.rightButton=function(){var
ca=this._event();var
Pa=this.getType();if(Pa==ub.l||Pa==ub.p)return ca.button==2||jsx3.app.Browser.macosx&&ca.ctrlKey;else return false;};a.button=function(){var
wb=this._event();return wb.button;};a.setReturn=function(b){(this._event()).returnValue=b;};a.setKeyCode=function(s){var
Ba=this._event();if(Ba.charCode==13){var
T=(this.getDocument()).createEvent(ub.ca);T.initKeyEvent(ub.i,true,true,(this.getDocument()).defaultView,Ba.ctrlKey(),Ba.altKey(),Ba.shiftKey(),false,0,s);Ba.preventDefault();Ba.target.dispatchEvent(T);}};a.isModifierKey=function(){var
ya=this._event();return ya.keyCode==16||ya.keyCode==17||ya.keyCode==18||ya.keyCode==224;};a.hasModifier=function(q){return !q&&this.shiftKey()||this.ctrlKey()||this.altKey()||this.metaKey();};a.isArrowKey=function(){var
eb=this.keyCode();return eb>=37&&eb<=40;};a.isFunctionKey=function(){var
I=this.keyCode();return I>=112&&I<=126;};a.getAttribute=function(n){return (this._event())[n];};a.setAttribute=function(f,i){(this._event())[f]=i;};a.removeAttribute=function(j){(this._event())[j]=null;};k.dispatchMouseEvent=function(f,c,p){var
K=document.createEvent(ub.da);K.initMouseEvent(c,true,true,window,0,0,0,0,0,false,false,false,false,0,f);if(p)for(var Ua in p)K[Ua]=p[Ua];f.dispatchEvent(K);};k.dispatchKeyEvent=function(s,p,r,o,n,b,j){var
xa=document.createEvent(ub.ea);xa.initMouseEvent(p,true,true,window,0,0,0,0,0,false,n,b,o,0,s);xa.keyCode=r;if(j)for(var Fb in j)xa[Fb]=j[Fb];s.dispatchEvent(xa);};if(jsx3.CLASS_LOADER.SAF3)k.subscribe(ub.d,function(l){var
vb=l.event.srcElement();while(vb){if(vb.getAttribute){var
va=vb.getAttribute(ub.fa);if(parseInt(va)>=0){jsx3.html.focus(vb);break;}if(vb.getAttribute(ub.ga))break;}vb=vb.parentNode;}});a.isFakeOut=function(d){if(this.getType()==ub.n){var
ga=this.toElement();try{while(ga!=null){if(ga==d)return true;ga=ga.parentNode;}}catch(Kb){return false;}}return false;};a.isFakeOver=function(h){if(this.getType()==ub.o){var
Va=this.fromElement();try{while(Va!=null){if(Va==h)return true;Va=Va.parentNode;}}catch(Kb){return false;}}return false;};a.toString=function(){var
Lb=this._event();if(Lb==null)return ub.ha;var
Ha=[];for(var Ja in Lb)if(typeof Lb[Ja]!=ub.N)Ha[Ha.length]=Ja;Ha.sort();var
Ta=[ub.ia];for(var
_=0;_<Ha.length;_++)Ta[Ta.length]=Ha[_]+ub.ja+Lb[Ha[_]]+ub.C;return Ta.join(ub._);};});jsx3.gui.Event.subscribe("unload",jsx3.destroy);jsx3.Class.defineClass("jsx3.app.Browser",null,null,function(a,s){var
ub={a:"win32",b:"linux",c:"macosx",d:"other",e:/[_-]/,f:"_",g:"Win",h:"Linux",i:"Mac OS X"};a.WIN32=ub.a;a.LINUX=ub.b;a.MACOSX=ub.c;a.OTHER=ub.d;a.getLocaleString=function(){var
Eb=window.navigator.language;var
Aa=Eb.split(ub.e);if(Aa.length>0){Aa[0]=Aa[0].toLowerCase();if(Aa.length>1)Aa[1]=Aa[1].toUpperCase();}return Aa.join(ub.f);};a.isTableMoveBroken=function(h){return true;};a.tP=null;a.getStyleClass=function(q){q=q.toLowerCase();if(a.tP==null){var
wb={};for(var
za=0;za<document.styleSheets.length;za++){var
ba=document.styleSheets[za];try{for(var
gb=0;gb<ba.cssRules.length;gb++){var
fb=ba.cssRules[gb];wb[fb.selectorText]=fb.style;}}catch(Kb){}}a.tP=wb;}return a.tP[q];};a.getLocation=function(){if(a.VF==null)a.VF=new
jsx3.net.URI(window.location.href);return a.VF;};a.getSystem=function(){if(a.Rx==null){var
N=navigator.platform;var
Ea=navigator.userAgent;var
fb=ub.d;if(N.indexOf(ub.g)==0)fb=ub.a;else if(N.indexOf(ub.h)==0)fb=ub.b;else if(Ea.indexOf(ub.i)!=-1)fb=ub.c;a.Rx=fb;}return a.Rx;};a[a.getSystem()]=true;});jsx3.Class.defineClass("jsx3.app.Settings",null,null,function(r,i){var
ub={a:"undefined",b:"/data",c:"/record[@jsxid='",d:"']",e:"ut",f:"./record",g:"type",h:"jsxid",i:"true",j:"data",k:"map",l:"./record[@jsxid='",m:"record",n:"null",o:"string",p:"number",q:"boolean",r:"false",s:"object",t:"array",u:"function",v:"idPR02",w:"Cannot persist object of type "};i.init=function(b){this.OM=b||jsx3.xml.CDF.newDocument();this.dc=this.OM.getRootNode();};i.get=function(q){var
Hb=this.yx(arguments);if(typeof Hb==ub.a){var
ka=this.getNode.apply(this,arguments);if(ka==null)return r.UNDEF;Hb=r.K0(ka);this.PR(Hb,arguments);}return Hb;};i.getNode=function(a){var
ab=this.dc;var
Ba=ub.b;for(var
bb=0;ab&&bb<arguments.length;bb++)Ba=Ba+(ub.c+arguments[bb]+ub.d);return ab.selectSingleNode(Ba);};i.PR=function(b,s){if(s.length==0){this.ut=b;}else{if(!this.ut)this.ut={_jsxa8:true};var
ia=this.ut;for(var
za=0;za<s.length-1;za++){var
Xa=s[za];if(ia[Xa]==null)ia[Xa]={_jsxa8:true};ia=ia[Xa];}ia[s[s.length-1]]=b;}};i.yx=function(h){var
Da=this.ut;for(var
Nb=0;Da&&Nb<h.length;Nb++)Da=Da[h[Nb]];return Da&&Da._jsxa8?r.UNDEF:Da;};i.z2=function(){delete this[ub.e];};r.HM={array:function(q){var
xb=q.selectNodeIterator(ub.f);var
T=[];while(xb.hasNext()){var
ea=xb.next();var
qa=r.HM[ea.getAttribute(ub.g)];T[T.length]=qa?qa(ea):ea.getValue();}return T;},map:function(e){var
gb=e.selectNodeIterator(ub.f);var
ha={};while(gb.hasNext()){var
Z=gb.next();var
Ga=r.HM[Z.getAttribute(ub.g)];ha[Z.getAttribute(ub.h)]=Ga?Ga(Z):Z.getValue();}return ha;},number:function(j){return Number(j.getValue());},"boolean":function(p){return p.getValue()===ub.i;},"null":function(s){return null;},string:function(a){return a.getValue();},eval:function(s){try{return jsx3.eval(s.getValue());}catch(Kb){return null;}}};r.K0=function(e){var
cb=e.getNodeName()==ub.j?ub.k:e.getAttribute(ub.g);var
Mb=r.HM[cb];return Mb?Mb(e):e.getValue();};i.set=function(p,o){var
ja=this.dc;for(var
Wa=0;Wa<arguments.length-2;Wa++){var
E=ja.selectSingleNode(ub.l+arguments[Wa]+ub.d);if(E&&E.getAttribute(ub.g)!=ub.k){ja.removeChild(E);E=null;}if(!E){E=ja.createNode(1,ub.m);E.setAttribute(ub.h,arguments[Wa]);E.setAttribute(ub.g,ub.k);ja.appendChild(E);}ja=E;}r.hK(ja,arguments[arguments.length-2],arguments[arguments.length-1]);this.z2();};i.remove=function(m){var
sb=null;var
H=this.dc;for(var
db=0;H&&db<arguments.length;db++){sb=H;H=H.selectSingleNode(ub.l+arguments[db]+ub.d);}if(H&&sb){sb.removeChild(H);this.z2();}};r.hK=function(c,a,k){var
ob=r.S7(a,c);ob.removeChildren();var
Pa=typeof k;if(k==null||Pa==ub.a){ob.setAttribute(ub.g,ub.n);ob.setValue(null);}else if(Pa==ub.o||Pa==ub.p){ob.setAttribute(ub.g,Pa);ob.setValue(k);}else if(Pa==ub.q){ob.setAttribute(ub.g,ub.q);ob.setValue(k?ub.i:ub.r);}else if(Pa==ub.s){if(jsx3.$A.is(k)){ob.setAttribute(ub.g,ub.t);for(var
M=0;M<k.length;M++)r.hK(ob,M.toString(),k[M]);}else{ob.setAttribute(ub.g,ub.k);for(var Db in k)r.hK(ob,Db,k[Db]);}}else if(Pa==ub.u){}else jsx3.ERROR.doLog(ub.v,ub.w+Pa,5);};r.S7=function(k,m){var
ma=m.selectSingleNode(ub.l+k+ub.d);if(!ma){ma=m.createNode(1,ub.m);ma.setAttribute(ub.h,k);m.appendChild(ma);}return ma;};});jsx3.Settings=jsx3.app.Settings;jsx3.Class.defineClass("jsx3.xml.Entity",null,null,function(m,a){var
ub={a:"xml.wrap_type",b:"",c:"xml.clone_tp",d:"xml.err_append",e:"xmlns:",f:":",g:"@",h:'="',i:'"',j:"xml.str_err",k:"xml.str_empty",l:"object",m:"<foo ",n:"/>",o:"text/xml",p:"jsx3.xml.Template",q:"transformToObject",r:"transform",s:"[",t:"]",u:"undefined",v:" ",w:"3.0.0"};m.TYPEELEMENT=1;m.TYPEATTRIBUTE=2;m.TYPETEXT=3;m.TYPECDATA=4;m.TYPECOMMENT=8;m.HH={1:true,2:true,3:true,4:true,7:true,8:true};a.init=function(p){this.bW=p;this.fA=p.nodeType;if(!m.HH[this.fA]){this.Dk(300,jsx3._msg(ub.a,this.fA));}else if(this.dN)this.Dk(0);};a.createNode=function(d,k,n){var
qb=this.Kt();var
C=null;if(n==null||n==ub.b)n=null;if(d==2){C=qb.createAttributeNS(n,k);}else if(d==3){C=qb.createTextNode(k);}else if(d==4){C=qb.createCDATASection(k);}else if(d==8){C=qb.createComment(k);}else C=qb.createElementNS(n,k);return new
m(C);};a.cloneNode=function(p){if(this.fA==1){var
K=this.bW.cloneNode(p);return new
m(K);}else this.Dk(301,jsx3._msg(ub.c,this.fA));};a.appendChild=function(l){var
Ga=l.bW;var
ra=Ga.ownerDocument!=this.bW.ownerDocument;if(ra)Ga=this.bW.ownerDocument.importNode(Ga,true);if(this.bW!=null&&Ga!=null&&this.fA==1){this.bW.appendChild(Ga);if(ra&&l.bW.parentNode)l.bW.parentNode.removeChild(l.bW);l.bW=Ga;}else this.Dk(302,jsx3._msg(ub.d,l));return this;};a.insertBefore=function(q,f){if(f==null){if(this.fA==1){this.appendChild(q);return q;}}else{var
Za=q.bW;var
yb=Za.ownerDocument!=this.bW.ownerDocument;if(yb)Za=this.bW.ownerDocument.importNode(Za,true);if(this.fA==1&&f.fA!=2&&q.fA!=2)if(f.getParent()!=null&&(f.getParent()).equals(this)){var
rb=new
m(this.bW.insertBefore(Za,f.bW));if(yb&&q.bW.parentNode)q.bW.parentNode.removeChild(q.bW);q.bW=Za;return rb;}return null;}};a.replaceNode=function(k,b){var
qa=k.bW;var
Ja=qa.ownerDocument!=this.bW.ownerDocument;if(Ja)qa=this.bW.ownerDocument.importNode(qa,true);if(this.fA==1&&b.fA==1&&k.fA==1&&this.equals(b.getParent())){var
Cb=new
m(this.bW.replaceChild(qa,b.bW));if(Ja&&k.bW.parentNode)k.bW.parentNode.removeChild(k.bW);k.bW=qa;return Cb;}return null;};a.setAttribute=function(c,l){if(l!=null)this.bW.setAttribute(c,String(l));else this.removeAttribute(c);return this;};a.getAttribute=function(s){return this.bW?this.bW.getAttribute(s):null;};a.getAttributeNode=function(f){if(this.bW!=null&&this.fA==1){var
za=this.bW.getAttributeNode(f);if(za!=null)return new
m(za);}};a.setAttributeNode=function(o){var
Fa=o.bW;if(!jsx3.util.strEmpty(o.getPrefix()))this.setAttribute(ub.e+o.getPrefix(),o.getNamespaceURI());var
B=Fa.ownerDocument!=this.bW.ownerDocument;if(B){Fa=this.bW.ownerDocument.createAttribute(Fa.nodeName);Fa.nodeValue=o.bW.nodeValue;o.bW=Fa;}this.bW.setAttributeNodeNS(Fa);return this;};a.getAttributes=function(){if(this.bW!=null&&this.fA==1)return new
m.List(this.bW.attributes);else return null;};a.getAttributeNames=function(){var
F=this.bW.attributes;var
u=new
Array(F.length);for(var
ib=0;ib<u.length;ib++)u[ib]=F[ib].nodeName;return u;};a.getRootNode=function(){return this.bW?new
m(this.Kt(1)):null;};a.getParent=function(){return this.bW!=this.Kt(1)?new
m(this.bW.parentNode):null;};a.getChildIterator=function(e){return new
m.ChildIterator(this.bW?this.bW.childNodes:[],e);};a.getChildNodes=function(f){if(!this.bW)return new
m.List([]);var
bb=this.bW.childNodes;var
S=[];for(var
Db=0;Db<bb.length;Db++){var
Ta=bb[Db];if(Ta.nodeType==1||f&&(Ta.nodeType==3||Ta.nodeType==4))S[S.length]=Ta;}return new
m.List(S);};a.removeChild=function(p){var
t=p.getParent();return t!=null&&t.equals(this)?new
m(this.bW.removeChild(p.bW)):null;};a.removeChildren=function(){var
kb=this.bW.childNodes;for(var
Xa=kb.length-1;Xa>=0;Xa--)this.bW.removeChild(kb[Xa]);};a.removeAttribute=function(d){if(this.fA==1)this.bW.removeAttribute(d);};a.removeAttributeNode=function(g){this.bW.removeAttributeNode(g.bW);return this;};a.equals=function(o){return o!=null&&o.bW==this.bW;};a.getNodeType=function(){return this.fA;};a.getNodeName=function(){return this.bW.nodeName;};a.getNamespaceURI=function(){var
va=this.bW.namespaceURI;if(va==null)va=ub.b;return va;};a.selectSingleNode=function(d,h){if(!this.bW)return null;return this.rt(d,h,0);};a.selectNodes=function(i,c){if(!this.bW)return new
m.List([]);return this.rt(i,c,1);};a.selectNodeIterator=function(h,d){if(!this.bW)return new
m.SelectIterator();return this.rt(h,d,2);};a.getBaseName=function(){var
P=this.getNodeName();var
ga=P.indexOf(ub.f);return ga>=0?P.substring(ga+1):P;};a.getPrefix=function(){var
I=this.getNodeName();var
P=I.indexOf(ub.f);return P>=0?I.substring(0,P):ub.b;};a.getXML=function(){return this.toString();};a.toString=function(){var
_a=ub.g+(this.getClass()).getName();if(this.bW!=null&&!this.hasError()){if(this.getNodeType()==2){return this.getNodeName()+ub.h+this.getValue()+ub.i;}else return (new
XMLSerializer()).serializeToString(this.bW);}else return this.hasError()?jsx3._msg(ub.j,_a,this.getError()):jsx3._msg(ub.k,_a);};a.getValue=function(){if(this.fA==1){var
Oa=new
Array(this.bW.childNodes.length);for(var
G=0;G<this.bW.childNodes.length;G++){var
Wa=this.bW.childNodes[G];if(Wa.nodeType==3||Wa.nodeType==4)Oa[G]=Wa.nodeValue;else Oa[G]=Wa.textContent;}return Oa.join(ub.b);}else return this.bW.nodeValue;};a.setValue=function(q){if(q==null)q=ub.b;if(this.fA==1){this.removeChildren();this.appendChild(this.createNode(3,q));}else this.bW.nodeValue=q;return this;};m.JU=new
XPathEvaluator();m.RH=[XPathResult.FIRST_ORDERED_NODE_TYPE,XPathResult.ORDERED_NODE_ITERATOR_TYPE,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE];a.rt=function(n,q,g){if(typeof q==ub.l)q=jsx3.xml.Document.ao(q);var
La=this.bW.ownerDocument;var
Xa=La.documentElement;var
ka=q?m.gs(q,Xa):m.C7(La)||m.JU.createNSResolver(Xa);var
jb=null;try{jb=m.JU.evaluate(n,this.bW,ka,m.RH[g],null);}catch(Kb){}if(g==1){var
z=null;var
pa=[];if(jb)while(z=jb.iterateNext())pa[pa.length]=z;return new
m.List(pa);}else if(g==2){return new
m.SelectIterator(jb);}else return jb&&jb.singleNodeValue?new
m(jb.singleNodeValue):null;};m.C7=function(b){if(!b._jsxpd)if(b._jsxIm)b._jsxpd=m.gs(b._jsxIm);return b._jsxpd;};m.ww={};m.gs=function(l){var
Xa=m.ww[l];if(!Xa){var
jb=(new
DOMParser()).parseFromString(ub.m+l+ub.n,ub.o);Xa=m.ww[l]=m.JU.createNSResolver(jb.documentElement);}return Xa;};a.Kt=function(h){if(h==null){return this.bW.ownerDocument;}else if(h==1){var
Pa=this.bW.ownerDocument;return Pa!=null?Pa.documentElement:null;}else if(h==2)return this.bW.documentElement;};a.getNative=function(){return this.bW;};a.getFirstChild=function(){if(this.fA==1){var
lb=this.bW.firstChild;while(lb!=null&&lb.nodeType!=1)lb=lb.nextSibling;if(lb!=null)return new
m(lb);}return null;};a.getLastChild=function(){if(this.fA==1){var
db=this.bW.lastChild;while(db!=null&&db.nodeType!=1)db=db.previousSibling;if(db!=null)return new
m(db);}return null;};a.getPreviousSibling=function(){if(this.fA==1){var
Ua=this.bW.previousSibling;while(Ua!=null&&Ua.nodeType!=1)Ua=Ua.previousSibling;if(Ua!=null)return new
m(Ua);}return null;};a.getNextSibling=function(){if(this.fA==1){var
xb=this.bW.nextSibling;while(xb!=null&&xb.nodeType!=1)xb=xb.nextSibling;if(xb!=null)return new
m(xb);}return null;};a.transformNode=function(q,c,s){jsx3.require(ub.p);var
aa=new
jsx3.xml.Template(q);if(c)aa.setParams(c);return aa[s?ub.q:ub.r](this);};m.OR=function(){};m.OR.prototype.toString=function(){return ub.s+this.code+ub.t+(typeof this.description!=ub.u?ub.v+this.description:ub.b);};a.Dk=function(n,q){if(this.dN==null)this.dN=new
m.OR();this.dN.code=n;this.dN.description=q;};a.getError=function(){if(!this.dN)this.Dk(0);return this.dN;};a.hasError=function(){return this.dN!=null&&this.dN.code!=0;};a.getOwnerDocument=function(){return this.bW?new
jsx3.xml.Document(this.Kt()):null;};m.getVersion=function(){return ub.w;};});jsx3.Entity=jsx3.xml.Entity;jsx3.Class.defineClass("jsx3.xml.Entity.List",jsx3.util.List,null,function(l,p){var
ub={a:"Not implemented",b:"[",c:"]"};var
K=jsx3.Exception;p.init=function(f){this.jsxsuper(null,true);this.aV=f;};p.get=function(f){var
pa=this.aV[f];return pa!=null?new
jsx3.xml.Entity(pa):pa;};var
Z=ub.a;p.add=function(){throw new
K(Z);};p.addAll=function(){throw new
K(Z);};p.set=function(){throw new
K(Z);};p.remove=function(){throw new
K(Z);};p.removeAt=function(){throw new
K(Z);};p.sort=function(){throw new
K(Z);};p.slice=function(n,b){return new
l(arguments.length>1?this.aV.slice(n,b):this.aV.slice(n));};p.toString=function(){return ub.b+this.toArray()+ub.c;};p.clone=function(){return new
l(this.aV.concat());};p.toArray=function(){var
Mb=this.size();var
Ya=new
Array(Mb);for(var
na=0;na<Mb;na++)Ya[na]=this.get(na);return Ya;};});jsx3.Class.defineClass("jsx3.xml.Entity.ChildIterator",null,[jsx3.util.Iterator],function(r,c){c.init=function(e,d){this.QN=e;this.ty=0;this.Ny=d;this.i6();this.bW=null;};c.next=function(){if(!this._next)return null;if(this.bW){this.bW.init(this._next);}else this.bW=new
jsx3.xml.Entity(this._next);this.i6();return this.bW;};c.hasNext=function(){return this._next!=null;};c.i6=function(){this._next=null;var
gb=this.QN;var
E=gb.length;while(this._next==null&&this.ty<E){var
cb=gb[this.ty];if(cb.nodeType==1||this.Ny&&(cb.nodeType==3||cb.nodeType==4))this._next=cb;this.ty++;}};});jsx3.Class.defineClass("jsx3.xml.Entity.SelectIterator",null,[jsx3.util.Iterator],function(b,f){f.init=function(s){this.OC=s;this.x2=0;this.bW=null;};f.next=function(){var
ea=this.OC.snapshotItem(this.x2++);if(!ea)return null;if(this.bW){this.bW.init(ea);}else this.bW=new
jsx3.xml.Entity(ea);return this.bW;};f.hasNext=function(){return this.OC&&this.x2<this.OC.snapshotLength;};});jsx3.Collection=jsx3.xml.Entity.List;jsx3.util.Collection=jsx3.Collection;jsx3.Class.defineClass("jsx3.net.Request",null,[jsx3.util.EventDispatcher],function(g,f){var
ub={a:"response",b:"timeout",c:"req_inst",d:"_timeoutto",e:"getAllResponseHeaders",f:"getResponseHeader",g:"statusText",h:"status",i:"req.bad_xml",j:"UniversalBrowserRead",k:"req.netsc",l:"req.open",m:"req.err_open",n:"req.err_state",o:"hS",p:"req.err_send",q:" ",r:"3.00.00"};g.STATUS_OK=200;g.STATUS_ERROR=400;g.EVENT_ON_RESPONSE=ub.a;g.EVENT_ON_TIMEOUT=ub.b;g.uV={};f.init=function(d){if(d!=null)g.uV[d]=this;try{this._request=new
XMLHttpRequest();}catch(Kb){throw new
jsx3.Exception(jsx3._msg(ub.c),jsx3.NativeError.wrap(Kb));}};f.abort=function(){if(this._timeoutto){window.clearTimeout(this._timeoutto);delete this[ub.d];}this._request.onreadystatechange=new
Function();this._request.abort();return this;};f.EP=function(j,m,c){try{return m==1?this._request[j]():m==2?this._request[j](c):this._request[j];}catch(Kb){this.hS=13030;return null;}};f.getAllResponseHeaders=function(){return this.EP(ub.e,1);};f.getResponseHeader=function(n){return this.EP(ub.f,2,n);};f.getStatusText=function(){return this.EP(ub.g);};f.getStatus=function(){var
ba=this.hS;if(ba==null)ba=this.EP(ub.h);if(ba<0||ba==112)ba=400;return ba==0?200:ba;};f.getResponseText=function(){return this._request.responseText;};f.getResponseXML=function(){var
A=new
jsx3.xml.Document();A.po(this);if(!A.hasError()){return A;}else{g.Q2(2,jsx3._msg(ub.i,this.eE,A.getError()));return null;}};f.getNative=function(){return this._request;};f.setRequestHeader=function(p,i){this._request.setRequestHeader(p,String(i));return this;};f.getReadyState=function(){return this._request.readyState;};g.open=function(n,l,r,s,e){var
va=jsx3.net.URI.valueOf(l);var
yb=va.getScheme();var
F=g._HANDLERS[yb]||g.jsxclass;return (F.newInstance()).open(n,va,r,s,e);};g._HANDLERS={};g.addSchemeHandler=function(k,c){g._HANDLERS[k]=c;};g.getSchemeHandler=function(s){return g._HANDLERS[s];};f.open=function(s,e,m,n,b){this.hS=0;this.OJ=Boolean(m);this.yT=s;this.eE=jsx3.net.URIResolver.DEFAULT.resolveURI(e);try{if(window.netscape&&netscape.security)netscape.security.PrivilegeManager.enablePrivilege(ub.j);}catch(Kb){g.Q2(5,jsx3._msg(ub.k,jsx3.NativeError.wrap(Kb)));}try{g.Q2(6,jsx3._msg(ub.l,this.eE));this._request.open(s,this.eE.toString(),this.OJ,n,b);}catch(Kb){this.hS=400;g.Q2(2,jsx3._msg(ub.m,e,jsx3.NativeError.wrap(Kb)));}return this;};g.cancelRequest=function(l){var
E=g.uV[l];if(E)E.abort();};g.getRequest=function(m){return g.uV[m];};f.getURL=function(){return this.eE&&this.eE.toString();};f.setTimeouts=function(h,c,q,j){return this;};f.send=function(n,d){if(this.hS==400)throw new
jsx3.Exception(jsx3._msg(ub.n));var
M=false;try{if(!this.OJ)g.INSYNC=true;this._request.send(n);if(this.OJ)this.hS=0;else delete this[ub.o];}catch(Kb){this.hS=400;g.Q2(2,jsx3._msg(ub.p,this.eE,jsx3.NativeError.wrap(Kb)));M=this;}finally{g.INSYNC=false;}if(this.OJ)if(M||this._request.readyState==4){jsx3.sleep(function(){this.publish({subject:ub.a});},null,this);}else{var
v=this;this._request.onreadystatechange=function(){if(v._request.readyState==4)if(g.INSYNC){jsx3.sleep(function(){v.nG();});}else v.nG();};if(!isNaN(d)&&d>0)this._timeoutto=window.setTimeout(function(){v.LZ();},d);}return this;};f.LZ=function(){delete this[ub.d];this.abort();this.hS=408;this.publish({subject:ub.b});};f.nG=function(){delete this[ub.o];if(this._timeoutto){window.clearTimeout(this._timeoutto);delete this[ub.d];}this._request.onreadystatechange=new
Function();this.publish({subject:ub.a});};f.toString=function(){return this.jsxsuper()+ub.q+this.yT+ub.q+this.getStatus()+ub.q+this.eE;};g.Q2=function(r,q){if(g.dK==null)if(jsx3.util.Logger){g.dK=jsx3.util.Logger.getLogger(g.jsxclass.getName());if(g.dK==null)return;}else return;g.dK.log(r,q);};g.getVersion=function(){return ub.r;};});jsx3.HttpRequest=jsx3.net.Request;jsx3.Class.defineClass("jsx3.xml.Document",jsx3.xml.Entity,[jsx3.util.EventDispatcher],function(e,m){var
ub={A:/[\n\r]/g,B:" ",C:"xml.unknown",D:"1.0",E:"<?xml",F:' version="',G:'"',H:' encoding="',I:' standalone="',J:"yes",K:"no",L:"?>\n",M:"xml",N:"<!-- ",O:" -->",P:"\n",Q:"XPath",R:"xmlns:",S:"='",T:"'",U:"object",V:"([^=]*)=['\"]([^\"^']*)['\"]",W:"g",X:":",Y:"http://www.w3.org/XML/1998/namespace",Z:"undefined",_:"jsx",a:"response",aa:"attribute::* | child::*",b:"error",ba:"3.0.0",c:"timeout",d:"http://xsd.tns.tibco.com/gi/cxf/2006",e:"jsx_xmlns",f:/xmlns:([^=]*)=['\"]([^\"^']*)['\"]/g,g:"",h:"xml.parser",i:"MV",j:"GET",k:"*",l:"CY",m:"lw",n:"content-type",o:/xml|xsl/i,p:"xml.doc_status",q:"xml.timeout",r:"text/xml",s:"0",t:"xml.err_fmt",u:"xml.doc_bad_ex",v:"xml.doc_bad",w:'<x xmlns:x="http://www.w3.org/1999/xhtml"/>',x:"x",y:"http://www.w3.org/1999/xhtml",z:"//x:parsererror//x:div"};var
Ma=jsx3.xml.Entity;e.ON_RESPONSE=ub.a;e.ON_ERROR=ub.b;e.ON_TIMEOUT=ub.c;e.SEARCHABLE_NAMESPACE=ub.d;e.SEARCHABLE_PREFIX=ub.e;e.CE=ub.f;m.init=function(n){var
C=n instanceof Ma;if(!n||C){try{this.MV=window.document.implementation.createDocument(ub.g,ub.g,null);}catch(Kb){this.Dk(101,jsx3._msg(ub.h,jsx3.NativeError.wrap(Kb)));delete this[ub.i];}if(n){this.MV.appendChild((n.getNative()).cloneNode(true));this.jsxsuper(this.MV.documentElement);}}else{this.MV=n;this.jsxsuper(n.documentElement);}};m.load=function(r,f){var
nb=jsx3.net;var
xa=nb.Request;this.eE=r.toString();this.abort();var
Mb=Boolean(this.getAsync());var
E=xa.open(ub.j,r,Mb);if(E.getStatus()!=400){if(Mb){this.lw=E;E.subscribe(ub.k,this,ub.l);}E.send(null,f);}else if(Mb)jsx3.sleep(function(){this.po(E);},null,this);if(!Mb)this.po(E);return this;};m.abort=function(){this.Dk(0);if(this.lw){this.lw.unsubscribe(ub.k,this);this.lw.abort();delete this[ub.m];}};m.po=function(j){var
ba=this.eE;this.Gs(j);this.eE=ba;if(this.hasError())this.publish({subject:ub.b});else this.publish({subject:ub.a});};m.Gs=function(l){var
B=l.getStatus();var
tb=B>=200&&B<400;var
P=ub.g;if(!tb)try{P=l.getResponseHeader(ub.n);}catch(Kb){}if(tb||jsx3.util.strEmpty(P)||ub.o.test(P)){this.loadXML(l.getResponseText());}else this.Dk(102,jsx3._msg(ub.p,this.eE,B));};m.CY=function(i){var
ib=jsx3.net.Request;var
T=i.target;var
Wa=i.subject;delete this[ub.m];T.unsubscribe(ub.k,this);if(Wa==ub.a){this.po(T);}else if(Wa==ub.c){this.Dk(111,jsx3._msg(ub.q));this.publish({subject:ub.c});}else e.Q2();};m.CB=function(n){Ma.prototype.init.call(this,n);};m.loadXML=function(r){this.eE=null;this.Dk(0);try{this.MV=(new
DOMParser()).parseFromString(r,ub.r);if(!this.X8(this.MV))this.CB(this.MV.documentElement);}catch(Kb){this.X8(this.MV,jsx3.NativeError.wrap(Kb));}return this;};m.getSourceURL=function(){return this.eE;};m.X8=function(p,f){if(p!=null){var
Nb=p.parseError;if(Nb!=null&&Nb.errorCode!=ub.s){var
jb=jsx3._msg(ub.t,Nb.errorCode,Nb.line,Nb.linepos,jsx3.util.strTrim(String(Nb.reason)),jsx3.util.strTruncate(Nb.srcText),Nb.url);this.Dk(Nb.errorCode,jb);return true;}var
I=p.documentElement;if(I==null){if(f)this.Dk(156,jsx3._msg(ub.u,f));else this.Dk(106,jsx3._msg(ub.v));return true;}else{var
ea=new
XPathEvaluator();var
A=jsx3.CLASS_LOADER.GOG?ea.createNSResolver((new
DOMParser()).parseFromString(ub.w,ub.r)):(function(h){if(h==ub.x)return ub.y;return null;});var
Ra=ea.evaluate(ub.z,p,A);var
Kb=Ra.iterateNext();if(Kb){this.Dk(107,Kb.textContent.replace(ub.A,ub.B));return true;}}}if(f!=null){this.Dk(110,jsx3._msg(ub.C,jsx3.NativeError.wrap(f)));return true;}return false;};m.getValidateOnParse=function(){return this.MV.validateOnParse;};m.setValidateOnParse=function(a){this.MV.validateOnParse=a;};m.getResolveExternals=function(){return this.MV.resolveExternals;};m.setResolveExternals=function(s){this.MV.resolveExternals=s;};m.cloneDocument=function(){var
Ya=new
e();Ya.loadXML(this.getXML());return Ya;};m.toString=function(){if(this.MV!=null&&!this.hasError()){return (new
XMLSerializer()).serializeToString(this.MV);}else return this.jsxsuper();};m.getXmlVersion=function(){return this.MV.xmlVersion;};m.getXmlEncoding=function(){return this.MV.xmlEncoding;};m.getXmlStandalone=function(){return this.MV.xmlStandalone;};m.serialize=function(r,l,i){if(r===true)r=this.getXmlVersion()||ub.D;if(l===true)l=this.getXmlEncoding();var
la=r||l||i;if(la){var
Ga=ub.E;if(r)Ga=Ga+(ub.F+r+ub.G);if(l)Ga=Ga+(ub.H+l+ub.G);if(i!=null)Ga=Ga+(ub.I+(i?ub.J:ub.K)+ub.G);Ga=Ga+ub.L;var
zb=new
Array(this.MV.childNodes.length+1);zb[0]=Ga;for(var
Lb=0;Lb<this.MV.childNodes.length;Lb++){var
Fa=this.MV.childNodes[Lb];if(Fa.nodeType!=7||Fa.nodeName!=ub.M){var
ja=new
Ma(Fa);zb[Lb+1]=ja.hasError()?ub.N+ja+ub.O:ja.toString();}}}else{var
zb=new
Array(this.MV.childNodes.length);for(var
Lb=0;Lb<this.MV.childNodes.length;Lb++){var
Fa=this.MV.childNodes[Lb];var
ja=new
Ma(Fa);zb[Lb]=ja.hasError()?ub.N+ja+ub.O:ja.toString();if(Fa.nodeType==7||Fa.nodeName==ub.M)zb[Lb]+=ub.P;}}return zb.join(ub.g);};m.createDocumentElement=function(r,i){if(i==null)i=null;var
Sa=this.MV.createElementNS(i,r);if(this.MV.documentElement!=null)this.MV.replaceChild(Sa,this.MV.documentElement);else this.MV.appendChild(Sa);this.CB(this.MV.documentElement);return new
jsx3.xml.Entity(Sa);};m.createProcessingInstruction=function(n,q){var
X=this.MV.createProcessingInstruction(n,q);this.MV.appendChild(X);};m.setAsync=function(f){this._jsxhJ=f;return this;};m.getAsync=function(a){return Boolean(this._jsxhJ);};m.setSelectionLanguage=function(g){return this;};m.getSelectionLanguage=function(){return ub.Q;};e.ao=function(h){var
Oa=[];for(var W in h)Oa[Oa.length]=ub.R+h[W]+ub.S+W+ub.T;return Oa.join(ub.B);};m.setSelectionNamespaces=function(c){if(typeof c==ub.U)c=e.ao(c);this.MV._jsxIm=c;this.MV._jsxpd=null;return this;};m.getSelectionNamespaces=function(g){return this.MV._jsxIm?this.MV._jsxIm:ub.g;};m.createNamespaceAxis=function(){var
Sa=this.getRootNode();var
S=Sa.toString();var
gb=ub.g;do{var
ua=new
RegExp(ub.R+ub.e+gb+ub.V,ub.W);var
yb=S.search(ua);if(yb>=0)gb=gb==ub.g?0:gb+1;}while(yb>=0);this.fv(Sa,ub.e+gb);this.loadXML(this.getXML());return ub.e+gb;};m.fv=function(c,p){var
t=(c.cloneNode(false)).getXML();var
Ta;while(Ta=e.CE.exec(t))if(RegExp.$1!=p&&RegExp.$1!=ub.M){var
Ab=c.createNode(2,p+ub.X+RegExp.$1,e.SEARCHABLE_NAMESPACE);Ab.setValue(RegExp.$2);c.setAttributeNode(Ab);}else if(RegExp.$1==ub.M)jsx3.log(t);for(var
Da=c.getChildIterator();Da.hasNext();)this.fv(Da.next(),p);};m.getDeclaredNamespaces=function(r){this._jsxNZ={};var
ea=this.getRootNode();if(ea)this.z8(ea,{index:0},r);return this._jsxNZ;};m.z8=function(b,j,r){var
bb=b.getNamespaceURI();if(bb!=ub.g&&bb!=ub.Y){var
M;if(!this._jsxNZ[bb]||r&&(M=b.getPrefix())!=ub.g&&typeof r[M]!=ub.Z)if(M){this._jsxNZ[bb]=M;}else{j.index+=1;this._jsxNZ[bb]=ub._+j.index;}}if(b.getNodeType()==1)for(var
tb=b.selectNodeIterator(ub.aa);tb.hasNext();){var
N=tb.next();if(N.getNodeType()==1||N.getNodeType()==2)this.z8(N,j,r);}};m.getNativeDocument=function(){return this.MV;};e.Q2=function(l,d){if(e.dK==null)if(jsx3.util.Logger){e.dK=jsx3.util.Logger.getLogger(e.jsxclass.getName());if(e.dK==null)return;}else return;e.dK.log(l,d);};e.getVersion=function(){return ub.ba;};});jsx3.Document=jsx3.xml.Document;jsx3.Class.defineClass("jsx3.xml.Template",null,null,function(p,s){var
ub={a:"temp.init_err",b:"stylesheet",c:"temp.nat_err",d:"temp.root_elm",e:"",f:"temp.empty",g:"temp.temp_err",h:"temp.doc_err",i:"temp.err"};p.DISABLE_OUTPUT_ESCAPING=1;p.s6={};p.supports=function(n){return p.s6[n]||Boolean(0);};s.init=function(e){if(e.hasError())throw new
jsx3.Exception(jsx3._msg(ub.a,e.getError()));if(e.getBaseName()==ub.b){try{this.hM=new
XSLTProcessor();this.hM.importStylesheet(e.getNativeDocument());}catch(Kb){this.Dk(202,jsx3._msg(ub.c,jsx3.NativeError.wrap(Kb)));}}else this.Dk(201,jsx3._msg(ub.d));this._src=e.getSourceURL();};s.setParam=function(j,n){if(!this.X3)this.X3=new
jsx3.util.List();if(this.X3.indexOf(j)<0)this.X3.add(j);this.hM.setParameter(ub.e,j,n!=null?n.toString():ub.e);};s.c1=function(h,d){var
Y=h instanceof jsx3.xml.Document?h.getNativeDocument():h.getNative();var
Aa=this.hM.transformToDocument(Y);var
Va=null;if(Aa&&Aa.documentElement){Va=d?new
jsx3.xml.Document(Aa):(new
XMLSerializer()).serializeToString(Aa);}else this.Dk(203,jsx3._msg(ub.f));return Va;};s.reset=function(){if(this.X3){for(var
u=this.X3.iterator();u.hasNext();)this.hM.removeParameter(ub.e,u.next());this.X3.clear();}};s.setParams=function(d){for(var Bb in d)this.setParam(Bb,d[Bb]);};s.transform=function(i,c){if(this.hasError())throw new
jsx3.Exception(jsx3._msg(ub.g,this.getError()));if(i.hasError())throw new
jsx3.Exception(jsx3._msg(ub.h,i.getError()));try{return this.c1(i,c);}catch(Kb){this.Dk(204,jsx3._msg(ub.i,jsx3.NativeError.wrap(Kb)));return null;}};s.transformToObject=function(h){return this.transform(h,true);};s.toString=function(){return this._src;};});jsx3.xml.Entity.jsxclass.mixin(jsx3.xml.Template.prototype,true,["getError","hasError","Dk"]);jsx3.Class.defineClass("jsx3.xml.XslDocument",jsx3.xml.Document,null,function(o,i){var
ub={a:"temp.parse",b:"_M"};i.setParam=function(k,l){(this.Z6()).setParam(k,l);};i.setParams=function(l){(this.Z6()).setParams(l);};i.reset=function(){if(this._M)this._M.reset();};i.transform=function(m){return (this.Z6()).transform(m);};i.transformToObject=function(n){return (this.Z6()).transformToObject(n);};i.Z6=function(){if(this._M==null){this._M=new
jsx3.xml.Template(this);if(this._M.hasError())throw new
jsx3.Exception(jsx3._msg(ub.a,this.getSourceURL(),this._M.getError()));}return this._M;};i.load=function(q){delete this[ub.b];return this.jsxsuper(q);};i.loadXML=function(r){delete this[ub.b];return this.jsxsuper(r);};i.hasError=function(){return this.jsxsuper()||this._M!=null&&this._M.hasError();};i.getError=function(){var
Ga=null;if(this._M)Ga=this._M.getError();if(!Ga)Ga=this.jsxsuper();return Ga;};o.wrap=function(r){return new
o(r.getNativeDocument());};i.cloneDocument=function(){return o.wrap(this.jsxsuper());};i.isMutable=function(){return true;};});jsx3.Class.defineClass("jsx3.xml.Processor",null,null,function(q,n){var
la=jsx3.xml.Template;q.DISABLE_OUTPUT_ESCAPING=1;q.supports=function(h){return la.supports(h);};n.init=function(k,r,s){this.SR=k;this.DP=r;this.X3=s;};n.setXML=function(a){this.SR=a;return this;};n.setXSL=function(i){this.DP=i;return this;};n.setParams=function(a){this.X3=a;return this;};n.transformToObject=function(){return this.transform(true);};n.transform=function(m){var
w=new
la(this.DP);if(!w.hasError()){if(this.X3)w.setParams(this.X3);var
ra=w.transform(this.SR,m);if(!w.hasError())return ra;}var
V=w.getError();this.Dk(V.code,V.description);return null;};});jsx3.xml.Entity.jsxclass.mixin(jsx3.xml.Processor.prototype,true,["getError","hasError","Dk"]);jsx3.Class.defineClass("jsx3.util.Logger",null,null,function(h,m){var
ub={a:"FATAL",b:"ERROR",c:"WARN",d:"INFO",e:"DEBUG",f:"TRACE",g:"",h:"logr.err_hand",i:" ",j:"(",k:") ",l:":",m:"ERRO01",n:"TIME: ",o:"\n",p:"CODE: ",q:"DESC: "};var
qa=jsx3.Method;var
Ua=jsx3.Exception;h.OFF=0;h.FATAL=1;h.ERROR=2;h.WARN=3;h.INFO=4;h.DEBUG=5;h.TRACE=6;h.qR=1;h.d0=6;h.GLOBAL=null;h.getLogger=function(n){var
Jb=h.Manager.getManager();if(Jb==null)return null;var
fb=Jb.getLogger(n);if(fb==null){fb=new
h(n);Jb.addLogger(fb);}return fb;};h.FL=[null,ub.a,ub.b,ub.c,ub.d,ub.e,ub.f];h.levelAsString=function(r){return h.FL[r]||ub.g;};m.Sv=null;m.XJ=null;m.y5=null;m.UA=4;m.dC=null;m.fz=true;m.ys=null;m.init=function(k){this.Sv=k;};m.getName=function(){return this.Sv;};m.addHandler=function(n){if(!this.XJ)this.XJ=jsx3.$A();this.XJ.push(n);};m.removeHandler=function(i){if(this.XJ)this.XJ.remove(i);};m.getLevel=function(){return this.y5;};m.getEffectiveLevel=function(){return this.UA;};m.setLevel=function(q){q=Math.max(0,Math.min(h.d0,q));this.y5=q;this.CD();};m.CD=function(){var
pa=null;if(this.y5!=null){pa=this.y5;}else if(this.dC!=null){pa=this.dC.UA;}else pa=m.UA;if(pa!=this.UA){this.UA=pa;if(this.ys)for(var
db=0;db<this.ys.length;db++)this.ys[db].CD();}};m.getParent=function(){return this.dC;};m.setParent=function(j){if(this.dC!=null)this.dC.ys.remove(this);this.dC=j;if(this.dC!=null){if(!this.dC.ys)this.dC.ys=jsx3.$A();this.dC.ys.push(this);}this.CD();};m.getUseParentHandlers=function(){return this.fz;};m.setUseParentHandlers=function(j){this.fz=j;};m.yG=function(g){var
hb=this;var
Jb=g.getLevel();while(hb){var
Nb=hb.XJ;if(Nb)for(var
mb=0;mb<Nb.length;mb++){var
K=Nb[mb];if(K.isLoggable(Jb))try{K.handle(g);}catch(Kb){Kb=jsx3.NativeError.wrap(Kb);(h.getLogger(h.jsxclass.getName())).error(jsx3._msg(ub.h,K.getName(),Kb),Kb);}}if(!hb.getUseParentHandlers())break;hb=hb.getParent();}};m.log=function(b,n,j){b=Math.max(b,h.qR);if(this.UA<b)return;var
ia=jsx3.$A.is(j)?j:qa.argsAsArray(arguments,2);var
jb=new
h.Record(n,ia,b,this.getName(),jsx3.lang.getCaller(1),null);this.yG(jb);};m.logError=function(a,o,g){a=Math.max(a,h.qR);if(this.UA<a)return;var
ga=new
h.Record(o,null,a,this.getName(),jsx3.lang.getCaller(1),g);this.yG(ga);};m.logStack=function(s,p,k){s=Math.max(s,h.qR);if(this.UA<s)return;var
T=new
h.Record(p,null,s,this.getName(),jsx3.lang.getStack(k!=null?k:0),null);this.yG(T);};m.isLoggable=function(f){f=Math.max(f,h.qR);return this.UA>=f;};m.fatal=function(j,n){if(n==null||jsx3.$A.is(n))this.log(1,j,n);else if(n instanceof Ua)this.logError(1,j,n);else if(this.UA>=1)this.log(1,j,qa.argsAsArray(arguments,1));};m.error=function(n,j){if(j==null||jsx3.$A.is(j))this.log(2,n,j);else if(j instanceof Ua)this.logError(2,n,j);else if(this.UA>=2)this.log(2,n,qa.argsAsArray(arguments,1));};m.warn=function(p,b){if(b==null||jsx3.$A.is(b))this.log(3,p,b);else if(b instanceof Ua)this.logError(3,p,b);else if(this.UA>=3)this.log(3,p,qa.argsAsArray(arguments,1));};m.info=function(l,g){if(g==null||jsx3.$A.is(g))this.log(4,l,g);else if(g instanceof Ua)this.logError(4,l,g);else if(this.UA>=4)this.log(4,l,qa.argsAsArray(arguments,1));};m.debug=function(d,a){if(a==null||jsx3.$A.is(a))this.log(5,d,a);else if(a instanceof Ua)this.logError(5,d,a);else if(this.UA>=5)this.log(5,d,qa.argsAsArray(arguments,1));};m.trace=function(e,s){if(s==null||jsx3.$A.is(s))this.log(6,e,s);else if(s instanceof Ua)this.logError(6,e,s);else if(this.UA>=6)this.log(6,e,qa.argsAsArray(arguments,1));};m.toString=function(){return this.jsxsuper()+ub.i+this.getName();};h.reset=function(){};h.doLog=function(l,p,e,f){if(e==null)e=4;else if(e<4)e=4;else e=5;if(h.GLOBAL){var
Pa=p!=null?ub.j+l+ub.k+p:l;if(f||f==null)h.GLOBAL.logStack(e,Pa,1);else h.GLOBAL.log(e,Pa);}};h.logError=function(g,i){var
oa=ub.g;for(var fa in g){if(oa)oa=oa+ub.i;oa=oa+(fa+ub.l+g[fa]);}h.doLog(ub.m,oa,i,false);};h.getMinPriority=function(){return 3;};h.getLog=function(){return [];};h.errorToString=function(e){var
nb=ub.g;nb=nb+(ub.n+new
Date(e.timestamp)+ub.o);nb=nb+(ub.p+e.code+ub.o);nb=nb+(ub.q+e.description+ub.o);return nb;};h.toString=function(){return ub.g;};});jsx3.Class.defineClass("jsx3.util.Logger.Manager",null,null,function(o,l){var
ub={A:"logr.bn_setr",B:"/configuration/logger[@name='",C:"useParent",D:"false",E:"./handler-ref",F:"logr.no_hand",G:".",a:"jsx:/../logger.xml",b:"global",c:'<configuration><handler name="console" class="jsx3.util.Logger.ConsoleHandler"/><logger name="global" level="INFO"><handler-ref name="console"/></logger></configuration>',d:"jsx_logger_config",e:"logr.err_conf",f:"[@lazy='true' and @class='",g:"']",h:"/configuration/logger[handler-ref/@name='",i:"name",j:"/configuration/handler",k:"",l:"class",m:"lazy",n:"true",o:"require",p:"level",q:"number",r:"logr.no_class",s:"logger.require",t:"jsx.js",u:"hG",v:"[@require='true']",w:"./property",x:"value",y:"eval",z:"logr.bn_eval"};var
rb=jsx3.Exception;var
Jb=jsx3.util.Logger;o._N=ub.a;o.n6=ub.b;o.P7=null;o.bx=-1;o.Ew=ub.c;l.initialize=function(c){if(c===false){}else if(!c){var
ib=jsx3.getEnv(ub.d);if(ib==null)ib=o._N;if(ib)c=(new
jsx3.xml.Document()).load(ib);}if(c&&c.hasError()){window.alert(jsx3._msg(ub.e,c.getError(),jsx3.resolveURI(c.getSourceURL())));c=null;}if(!c)c=(new
jsx3.xml.Document()).loadXML(o.Ew);this._s=c;this.l4();for(var wa in this.Nx)this.addLogger(this.Nx[wa]);};o.getManager=function(){if(o.P7==null){o.P7=new
o();Jb.GLOBAL=new
Jb(o.n6);o.P7.addLogger(Jb.GLOBAL);}return o.P7;};l._s=null;l.Nx=null;l.XJ=null;l.init=function(s){this.Nx={};this.XJ={};};l.Ou=function(p){var
Da=this.l4(ub.f+p.getName()+ub.g);this.hF(Da);};l.hF=function(c){for(var
N=0;N<c.length;N++){var
yb=c[N];var
W=this.getHandler(yb);var
A=this._s.selectNodeIterator(ub.h+yb+ub.g);while(A.hasNext()){var
Kb=A.next();var
D=Kb.getAttribute(ub.i);var
J=this.getLogger(D);if(J!=null)J.addHandler(W);}}};l.l4=function(q){var
wb=[];if(!this._s)return wb;var
L=this._s.selectNodeIterator(ub.j+(q!=null?q:ub.k));var
G=this.hG==null;while(L.hasNext()){var
Za=L.next();var
y=Za.getAttribute(ub.i);if(this.getHandler(y)!=null)continue;var
Na=Za.getAttribute(ub.l);var
Qa=Za.getAttribute(ub.m)==ub.n;var
T=Za.getAttribute(ub.o)==ub.n;var
X=jsx3.Class.forName(Na);if(X==null&&T){if(this.hG==null)this.hG=[];this.hG.push(Na);this.XJ[y]=o.bx;continue;}if(X){var
Ha=X.newInstance(y);this.zZ(Ha,Za);Ha.onAfterInit();var
Hb=Za.getAttribute(ub.p);if(Hb&&typeof Jb[Hb]==ub.q)Ha.setLevel(Jb[Hb]);this.addHandler(Ha);wb[wb.length]=y;}else if(!Qa&&!T){window.alert(jsx3._msg(ub.r,Na));}else this.XJ[y]=o.bx;}if(G&&this.hG!=null){var
z=this;var
Ib=new
jsx3.util.Job(ub.s);Ib.run=function(){jsx3.sleep(function(){this.eH();},null,z);};jsx3.CLASS_LOADER.addJob(Ib,ub.t);}return wb;};l.eH=function(p){(jsx3.requireAsync.apply(jsx3,this.hG)).when((jsx3.$F(function(){delete this[ub.u];var
Oa=this.l4(ub.v);this.hF(Oa);})).bind(this));};l.zZ=function(d,r){var
lb=d.getClass();for(var
ma=r.selectNodeIterator(ub.w);ma.hasNext();){var
wa=ma.next();var
Y=wa.getAttribute(ub.i);var
w=wa.getAttribute(ub.x);var
Eb=wa.getAttribute(ub.y)==ub.n;var
Fb=lb.getSetter(Y);if(Fb!=null){if(Eb)try{w=isNaN(w)?d.eval(w):Number(w);}catch(Kb){throw new
rb(jsx3._msg(ub.z,Y,w,d),jsx3.NativeError.wrap(Kb));}Fb.apply(d,[w]);}else throw new
rb(jsx3._msg(ub.A,Y,lb));}};l.addLogger=function(q){var
za=q.getName();this.Nx[za]=q;if(this._s){var
U=this._s.selectSingleNode(ub.B+za+ub.g);if(U!=null){var
ib=U.getAttribute(ub.p);if(ib&&typeof Jb[ib]==ub.q)q.setLevel(Jb[ib]);var
kb=U.getAttribute(ub.C)!=ub.D;q.setUseParentHandlers(kb);var
F=U.selectNodeIterator(ub.E);while(F.hasNext()){var
Hb=F.next();var
W=Hb.getAttribute(ub.i);var
gb=this.getHandler(W);if(gb!=null){q.addHandler(gb);}else if(this.XJ[W]!=o.bx)throw new
rb(jsx3._msg(ub.F,za,W));}this.zZ(q,U);}}if(za!=o.n6){var
Da=za.lastIndexOf(ub.G);var
Ma=Da>=0?za.substring(0,Da):o.n6;q.setParent(Jb.getLogger(Ma));}};l.addHandler=function(i){this.XJ[i.getName()]=i;};l.getLogger=function(p){return this.Nx[p];};l.getHandler=function(g){var
ba=this.XJ[g];return ba==o.bx?null:ba;};l.getHandlerNames=function(){var
xa=[];for(var A in this.XJ)xa[xa.length]=A;return xa;};});jsx3.Class.defineClass("jsx3.util.Logger.Record",null,null,function(a,i){var
ub={a:"function"};a.lp=1;i.xs=null;i.DM=null;i.Q3=null;i.X3=null;i.UA=null;i.dI=null;i.eg=null;i.dN=null;i.init=function(b,n,p,k,d,r){this.xs=a.lp++;this.DM=new
Date();this.Q3=b;this.X3=n;this.UA=p;this.dI=k;this.eg=d;this.dN=r;};i.getSerial=function(){return this.xs;};i.getDate=function(){return this.DM;};i.getMessage=function(){return this.Q3;};i.getParameters=function(){return this.X3;};i.getLevel=function(){return this.UA;};i.getLoggerName=function(){return this.dI;};i.getFunction=function(){return typeof this.eg==ub.a?this.eg:null;};i.getStack=function(){return jsx3.$A.is(this.eg)?this.eg:null;};i.getError=function(){return this.dN;};});jsx3.Class.defineClass("jsx3.util.Logger.Handler",null,null,function(j,s){var
ub={a:"",b:"objRecord"};var
Ta=jsx3.util.Logger;var
jb=jsx3.util.Logger.Manager;j.registerHandlerClass=function(f){(jb.getManager()).Ou(f);};s.Sv=ub.a;s.UA=null;s.init=function(f){this.Sv=f;};s.onAfterInit=function(){};s.getName=function(){return this.Sv;};s.getLevel=function(){return this.UA;};s.setLevel=function(l){l=Math.max(0,Math.min(Ta.d0,l));this.UA=l;};s.isLoggable=function(o){return this.UA==null||this.UA>=o;};s.handle=jsx3.Method.newAbstract(ub.b);});jsx3.Class.defineClass("jsx3.util.Logger.MemoryHandler",jsx3.util.Logger.Handler,null,function(r,a){a.S9=null;a.hx=100;a.init=function(q){this.jsxsuper(q);this.S9=[];};a.handle=function(b){this.S9[this.S9.length]=b;if(this.S9.length>this.hx)this.S9.shift();};a.clearBuffer=function(){this.S9=[];};a.getBufferSize=function(){return this.hx;};a.setBufferSize=function(p){this.hx=Math.max(1,p);if(this.S9.length>this.hx)this.S9.splice(0,this.S9.length-this.hx);};a.getRecords=function(o){if(o==null)o=this.S9.length;return this.S9.slice(this.S9.length-o);};});jsx3.Class.defineClass("jsx3.util.Logger.FormatHandler",jsx3.util.Logger.Handler,null,function(c,d){var
ub={a:"%d %t %n (%l) - %M",b:"",c:" ",d:" (",e:") ",f:"\n",g:/\%s/g,h:"{0}",i:/\%n/g,j:"{1}",k:/\%l/g,l:"{2}",m:/\%M/g,n:"{3}",o:/\%f/g,p:"{4}",q:/\%d/g,r:"{5,date,yyyy-MM-dd}",s:/\%t/g,t:"{5,date,HH:mm:ss.SSS}"};d.jL=ub.a;d.Sq=ub.b;d.init=function(e){this.jsxsuper(e);};d.format=function(r){var
ab=r.getDate();var
T=r.getFunction();var
E=r.getMessage()||ub.b;var
Ta=this.os();var
Gb=jsx3.util.Logger.levelAsString(r.getLevel());var
ra=Ta?Ta.format(r.getSerial(),r.getLoggerName(),Gb,E,T!=null?T.jsxmethod!=null?T.jsxmethod.toString():T.toString():ub.b,ab):ab+ub.c+r.getLoggerName()+ub.d+Gb+ub.e+E;var
J=r.getError();var
ya=r.getStack();if(J!=null){ra=ra+(ub.f+J.printStackTrace());}else if(ya!=null)ra=ra+(ub.f+jsx3.Exception.formatStack(ya));return ra;};d.getFormat=function(){return this.jL;};d.setFormat=function(h){this.jL=h;this.yD=null;};d.os=function(){if(this.yD==null&&jsx3.util.MessageFormat){var
U=this.jL||ub.b;U=U.replace(ub.g,ub.h);U=U.replace(ub.i,ub.j);U=U.replace(ub.k,ub.l);U=U.replace(ub.m,ub.n);U=U.replace(ub.o,ub.p);U=U.replace(ub.q,ub.r);U=U.replace(ub.s,ub.t);this.yD=new
jsx3.util.MessageFormat(U);}return this.yD;};d.getResourceUrls=function(){return this.Sq;};d.setResourceUrls=function(l){this.Sq=l;};});jsx3.Class.defineClass("jsx3.util.Logger.ConsoleHandler",jsx3.util.Logger.FormatHandler,null,function(b,r){var
ub={a:"error",b:"warn",c:"info",d:"debug"};var
Gb=[null,ub.a,ub.a,ub.b,ub.c,ub.d,ub.d];r.handle=function(p){if(window.console){var
t=Gb[p.getLevel()];if(t)try{(console[t]||console.log)(this.format(p));}catch(Kb){}}};});jsx3.Class.defineClass("jsx3.util.Logger.AlertHandler",jsx3.util.Logger.FormatHandler,null,function(a,f){var
ub={a:"logr.alrt_ctd",b:"logr.alrt_err"};f.gW=5;f.hA=0;f.u1=false;f.handle=function(g){if(this.u1)return;this.hA++;try{if(this.gW>0&&this.hA%this.gW==0)if(!window.confirm(jsx3._msg(ub.a,this.getName()))){this.u1=true;return;}window.alert(this.format(g));}catch(Kb){window.alert(jsx3._msg(ub.b,jsx3.NativeError.wrap(Kb)));}};f.getConfirmInterval=function(){return this.gW;};f.setConfirmInterval=function(p){this.gW=p;};});jsx3.ERROR=jsx3.util.Logger;jsx3.Class.defineClass("jsx3.util.Locale",null,null,function(b,j){var
ub={a:"",b:"en",c:"US",d:"GB",e:"string.lang.",f:"string.terr.",g:"format.locale.displayname",h:"_",i:/[\-_]/};j.init=function(a,d){this.vt=a?a.toLowerCase():ub.a;this.AS=d?d.toUpperCase():ub.a;};b.ROOT=new
b(ub.a);b.ENGLISH=new
b(ub.b);b.US=new
b(ub.b,ub.c);b.UK=new
b(ub.b,ub.d);j.getLanguage=function(){return this.vt;};j.getCountry=function(){return this.AS;};j.getDisplayLanguage=function(d){return (jsx3.System.getLocaleProperties(d)).get(ub.e+this.vt)||ub.a;};j.getDisplayCountry=function(p){return (jsx3.System.getLocaleProperties(p)).get(ub.f+this.AS)||ub.a;};j.getDisplayName=function(n){var
Qa=this.getDisplayLanguage(n);var
Ga=this.getDisplayCountry(n);if(!Qa)return Ga;if(!Ga)return Qa;var
la=(jsx3.System.getLocaleProperties(n)).get(ub.g);return (new
jsx3.util.MessageFormat(la)).format(Qa,Ga);};j.getSearchPath=function(){var
V=[this];if(this.AS!=ub.a||this.vt!=ub.a){if(this.AS!=ub.a&&this.vt!=ub.a)V.push(new
b(this.vt));V.push(new
b(ub.a));}return V;};j.equals=function(o){return this===o||o instanceof b&&o.vt==this.vt&&o.AS==this.AS;};j.toString=function(){if(this.AS)return this.vt+ub.h+this.AS;else return this.vt;};b.valueOf=function(n){var
ta=n.split(ub.i);return new
b(ta[0],ta[1]);};});jsx3.Class.defineClass("jsx3.util.NumberFormat",null,null,function(h,o){var
ub={A:"'",B:"nmfmt.sq",C:";",D:"nmfmt.numpt",E:",",F:"nmfmt.gpdec",G:"#",H:"\u00A4",I:"%",J:"\u2030",K:"-",a:".integer",b:"",c:".currency",d:".percent",e:"format.number",f:"._instance",g:"number.NaN",h:"number",i:"number.minus",j:"number.infinity",k:"number.zero",l:/\-?(\d+(\.\d*)?|\d*\.\d+)([eE]\-?\d+)?/,m:"number.percent",n:"number.permille",o:"number.currency",p:/[\s\u00a0]/g,q:" ",r:".",s:"number.currency.grouping",t:"number.grouping",u:"number.currency.decimal",v:"number.decimal",w:"unshift",x:"push",y:"0",z:"0#,."};h.NUMBER=1;h.INTEGER=2;h.CURRENCY=3;h.getInstance=function(e,l){switch(e){case 2:return h.getIntegerInstance(l);case 3:return h.getCurrencyInstance(l);default:return h.getNumberInstance(l);}};h.getIntegerInstance=function(n){return h.DT(n,ub.a);};h.getNumberInstance=function(g){return h.DT(g,ub.b);};h.getCurrencyInstance=function(p){return h.DT(p,ub.c);};h.getPercentInstance=function(s){return h.DT(s,ub.d);};h.DT=function(a,r){var
Hb=h.K4(a);var
_=ub.e+r+ub.f;var
aa=Hb.get(_);if(!Hb.containsKey(_)||aa==null){var
H=Hb.get(ub.e+r);aa=new
h(H,a);Hb.set(_,aa);}return aa;};o.k5=0;o.vH=ub.b;o.vE=ub.b;o.y3=null;o.Yw=null;o.ky=false;o.kG=Number.MAX_VALUE;o.YC=0;o.NM=0;o.G4=0;o.pM=1;o.XH=false;o.init=function(d,l){this.jL=d;this.fu=l||jsx3.System.getLocale();this._O();};o.getLocale=function(){return this.fu;};o.setLocale=function(q){this.fu=q;this._O();};o.format=function(r){var
v=this.K4();if(isNaN(r)){return v.get(ub.g);}else{if(typeof r!=ub.h)r=Number(r);var
W=r>=0;var
wa=W?this.vH:this.y3!=null?this.y3:v.get(ub.i)+this.vH;var
Db=W?this.vE:this.Yw!=null?this.Yw:this.vE;var
x=null;if(!isFinite(r)){x=v.get(ub.j);}else{r=this.pM*Math.abs(r);var
Qa=h.cV(r);var
_a=Qa[0];var
Va=Qa[1];if(this.NM<_a.length-Va){var
Fa=_a.splice(Va+this.NM,_a.length-Va-this.NM);if(h.jy(_a,Fa))Va++;}var
E=Va>=0?_a.slice(0,Va):_a;var
La=Va>=0?_a.slice(Va):[];h.y2(E,this.kG,this.YC,true);h.y2(La,this.NM,this.G4,false);var
mb=v.get(ub.k);h.WX(E,mb);h.WX(La,mb);if(this.k5>0){var
Ga=this.LN(this.XH);for(var
gb=E.length-this.k5;gb>=1;gb=gb-this.k5)E.splice(gb,0,Ga);}x=E.join(ub.b);if(this.ky||La.length>0)x=x+(this.At(this.XH)+La.join(ub.b));}return wa+x+Db;}};h.VW=ub.l;o.parse=function(p){var
Ba=this.K4();if(p==Ba.get(ub.g))return NaN;var
ob=false;var
R=1;var
ta=false;var
tb=Ba.get(ub.i);var
W=this.y3,Ka=this.Yw;if(W||Ka){W=this.Xw(W,Ba);Ka=this.Xw(Ka,Ba);if(p.indexOf(W)==0&&p.lastIndexOf(Ka)==p.length-Ka.length){ob=true;p=W.replace(tb,ub.b)+p.substring(W.length,p.length-Ka.length)+Ka.replace(tb,ub.b);}}var
xb=p.indexOf(tb);if(xb==0){ob=true;p=p.substring(0,xb)+p.substring(xb+tb.length);}var
u=Ba.get(ub.m);var
ua=p.indexOf(u);if(ua>=0){R=100;p=p.substring(0,ua)+p.substring(ua+u.length);}else{var
sb=Ba.get(ub.n);ua=p.indexOf(sb);if(ua>=0){R=1000;p=p.substring(0,ua)+p.substring(ua+sb.length);}}var
v=Ba.get(ub.o);var
F=p.indexOf(v);if(F>=0){ta=true;p=p.substring(0,F)+p.substring(F+v.length);}if(p==Ba.get(ub.j))return ob?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;var
Ab=ub.p;p=p.replace(Ab,ub.q);var
O=(this.LN(ta)).replace(Ab,ub.q);if(O){var
Jb=-1;while((Jb=p.indexOf(O))>=0)p=p.substring(0,Jb)+p.substring(Jb+O.length);}var
vb=(this.At(ta)).replace(Ab,ub.q);if(vb!=ub.r){var
aa=p.indexOf(vb);if(aa>=0)p=(p=p.substring(0,aa)+ub.r+p.substring(aa+O.length));}if(!h.VW.exec(p))return NaN;return (ob?-1:1)*Number(RegExp.lastMatch)/R;};o.LN=function(b){var
Ba=this.K4();return b&&Ba.get(ub.s)||Ba.get(ub.t)||ub.b;};o.At=function(g){var
Jb=this.K4();return g?Jb.get(ub.u)||Jb.get(ub.v):Jb.get(ub.v);};h.MW="0".charCodeAt(0);h.mE=".".charCodeAt(0);h.cV=function(g){if(g<0)throw new
jsx3.Exception();var
Da=Math.log(g)*jsx3.LOG10E;if(!isFinite(Da)){if(g==0)return [[0],1];throw new
jsx3.Exception();}var
Ga=g.toString();var
Na=[];var
V=null;for(var
yb=0;yb<Ga.length;yb++){var
oa=Ga.charCodeAt(yb);var
Hb=oa-h.MW;if(Hb>=0&&Hb<=9){Na[Na.length]=Hb;}else if(oa==h.mE){}else break;}if(Da>=0){var
M=Math.floor(Da+1);if(Na.length>M){V=M;}else{if(Na.length<M)for(var
yb=Na.length;yb<M;yb++)Na[Na.length]=0;V=Na.length;}}else{var
Oa=Math.ceil(-1-Da);var
ab=Na.indexOf(0);Na.splice(0,ab+1);for(var
yb=0;yb<Oa;yb++)if(Na[yb]!=0)Na.splice(yb,0,0);V=0;}return [Na,V];};h.y2=function(s,b,k,a){if(s.length>b){if(a){s.splice(0,s.length-b);}else s.splice(b,s.length-b);}else if(s.length<k){var
Ha=a?ub.w:ub.x;for(var
S=s.length;S<k;S++)s[Ha](ub.y);}};h.jy=function(a,s){if(s[0]>=5)for(var
x=a.length-1;x>=0;x--){var
Lb=a[x]+1;if(Lb>=10){a[x]=0;if(x==0){a.unshift(1);return true;}}else{a[x]=Lb;break;}}return false;};h.WX=function(a,p){var
F=p.charCodeAt(0);for(var
Ha=0;Ha<a.length;Ha++)a[Ha]=String.fromCharCode(a[Ha]+F);};h.TD=ub.z;o._O=function(){var
zb=ub.A;var
N=this.K4();var
u=this.jL;var
Pa=0;var
ma=u.length;var
Fa=1;var
wb=null,pb=null;while(Pa<ma){var
Ia=u.charAt(Pa);if(Fa==1){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.vH+=zb;Pa=Pa+2;}else if(lb>=0){this.vH+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else if(h.TD.indexOf(Ia)>=0){wb=Pa;Fa++;}else{this.vH+=this.Qz(Ia,N);Pa++;}}else if(Fa==2){if(h.TD.indexOf(Ia)>=0){Pa++;}else{pb=Pa;Fa++;}}else if(Fa==3){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.vE+=zb;Pa=Pa+2;}else if(lb>=0){this.vE+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else if(Ia==ub.C){this.y3=ub.b;this.Yw=ub.b;Fa++;}else this.vE+=this.Qz(Ia,N);Pa++;}else if(Fa==4){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.y3+=zb;Pa=Pa+2;}else if(lb>=0){this.y3+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else if(h.TD.indexOf(Ia)>=0){Fa++;}else{this.y3+=this.Qz(Ia,N);Pa++;}}else if(Fa==5){if(h.TD.indexOf(Ia)>=0){Pa++;}else Fa++;}else if(Fa==6){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.Yw+=zb;Pa=Pa+2;}else if(lb>=0){this.Yw+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.B,Pa,this));}else this.Yw+=this.Qz(Ia,N);Pa++;}}if(pb==null)pb=ma;if(wb==null)throw new
jsx3.Exception(jsx3._msg(ub.D,u));this.Uu(u.substring(wb,pb));};o.Uu=function(j){var
Va=j.indexOf(ub.r);if(Va<0)Va=j.length;else if(Va==j.length-1)this.ky=true;var
H=j.lastIndexOf(ub.E);if(H>=0){var
Pa=Va-H-1;if(Pa<1)throw new
jsx3.Exception(jsx3._msg(ub.F,j));this.k5=Pa;}for(var
C=0;C<Va;C++)if(j.charAt(C)==ub.y)this.YC++;for(var
C=Va+1;C<j.length;C++)if(j.charAt(C)==ub.y){this.G4++;this.NM++;}else if(j.charAt(C)==ub.G)this.NM++;};h.K4=function(l){return jsx3.System.getLocaleProperties(l);};o.K4=function(){return h.K4(this.fu);};o.Xw=function(d,i){var
x=d.split(ub.b);for(var
Ta=0;Ta<x.length;Ta++)x[Ta]=this.Qz(x[Ta],i);return x.join(ub.b);};o.Qz=function(b,l){if(b==ub.H){this.XH=true;return l.get(ub.o);}else if(b==ub.I){this.pM=100;return l.get(ub.m);}else if(b==ub.J){this.pM=1000;return l.get(ub.n);}else if(b==ub.K){return l.get(ub.i);}else return b;};o.toString=function(){return this.jL;};});jsx3.Class.defineClass("jsx3.util.DateFormat",null,null,function(r,e){var
ub={A:"m",B:"s",C:"S",D:"gmt",E:"string",F:"M",G:"E",H:"a",I:"x",J:"'",K:/[a-zA-Z']/g,L:"dtfmt.sq",M:"dtfmt.token",N:"objDate",O:"dtfmt.parse",P:"dtfmt.inv",a:"short",b:"medium",c:"long",d:"full",e:"format.date.",f:"intType",g:"format.time.",h:"intDateType",i:"intTimeType",j:"format.datetime",k:"date.era",l:"date.era.long",m:"date.day.narrow",n:"date.day.abbrev",o:"date.day",p:"time.ampm",q:"GMT",r:":",s:"",t:"date.month.abbrev",u:"date.month",v:"-",w:"+",x:"0",y:"y",z:"d"};r.SHORT=1;r.MEDIUM=2;r.LONG=3;r.FULL=4;r.ct=2;r.r3=[null,ub.a,ub.b,ub.c,ub.d];r.getDateInstance=function(k,f){var
w=(jsx3.System.getLocaleProperties(f)).get(ub.e+r.r3[k||r.ct]);if(w==null)throw new
jsx3.IllegalArgumentException(ub.f,k);return new
r(w,f);};r.getTimeInstance=function(s,q){var
lb=(jsx3.System.getLocaleProperties(q)).get(ub.g+r.r3[s||r.ct]);if(lb==null)throw new
jsx3.IllegalArgumentException(ub.f,s);return new
r(lb,q);};r.getDateTimeInstance=function(o,f,n){var
gb=jsx3.System.getLocaleProperties(n);var
Na=gb.get(ub.e+r.r3[o||r.ct]);var
qb=gb.get(ub.g+r.r3[f||r.ct]);if(Na==null)throw new
jsx3.IllegalArgumentException(ub.h,o);if(qb==null)throw new
jsx3.IllegalArgumentException(ub.i,f);var
cb=new
jsx3.util.MessageFormat(gb.get(ub.j));return new
r(cb.format(qb,Na),n);};r.tN={G:function(b,m,s){var
wa=b.getFullYear()<1;return r.eU((s.T1(m<4?ub.k:ub.l))[wa?0:1]);},y:function(l,d,j){return r.V5(l.getFullYear(),d);},M:function(a,l,k){return r.k6(k,a.getMonth(),l);},d:function(q,i,o){return r.ZC(q.getDate(),i);},E:function(f,q,d){return r.eU((d.T1(q<3?ub.m:q<4?ub.n:ub.o))[f.getDay()]);},H:function(g,p,c){return r.ZC(g.getHours(),p);},h:function(d,o,b){return r.ZC(d.getHours()%12||Number(12),o);},m:function(l,d,j){return r.ZC(l.getMinutes(),d);},s:function(i,a,g){return r.ZC(i.getSeconds(),a);},S:function(h,s,f){return r.ZC(h.getMilliseconds(),s);},a:function(l,p,c){return r.eU((c.T1(ub.p))[Math.floor(l.getHours()/12)]);},z:function(m,n,k){var
Ia=r.m2(m,k);return ub.q+Ia[0]+ub.r+Ia[1];},Z:function(j,b,h){var
_=r.m2(j,h);return _[0]+_[1];}};r.V5=function(q,p){if(p==2){var
Xa=ub.s+q;return Xa.substring(Xa.length-2);}else{if(q<1)q=1-q;return r.ZC(q,p);}};r.ZC=function(a,m){var
H=a.toString();while(H.length<m)H="0000000000".substring(0,m-H.length)+H;return H;};r.eU=function(d,j){if(j==null||j>=4||d.length<=j)return d;else return d.substring(0,j);};r.k6=function(q,d,i){if(i<=2)return r.ZC(d+1,i);else return r.eU((q.T1(i<4?ub.t:ub.u))[d],i);};r.m2=function(b,a){var
V=a.getTimeZoneOffset(b);var
fa=V<0?ub.v:ub.w;V=Math.abs(V);var
L=(Math.floor(V/60)).toString();var
tb=(Math.floor(V%60)).toString();if(L.length<2)L=ub.x+L;if(tb.length<2)tb=ub.x+tb;return [fa+L,tb];};r.No={G:function(o,s,c,g,m,k,n){var
S=r.AZ(s,c,[o.T1(ub.k),o.T1(ub.l)],g,false,k);var
u=S[0],D=S[1];if(u>=0){n.bc=u==0;return D;}else return -1;},y:function(i,f,p,a,g,d,k){if(a<=2){var
Pa=r.Gp(f,p,a,null,d);var
Ra=Number(Pa);if(!isNaN(Ra)){if(Pa.length==2){var
eb=new
Date();var
Ib=eb.getFullYear();var
V=100*Math.floor(Ib/100)+Ra;if(V>=Ib+20){V=V-100;}else if(V<Ib-80)V=V+100;Ra=V;}k.y=Ra;return Pa.length;}else return -1;}else{var
aa=r.Gp(f,p,a,null,d);return r.KN(aa,ub.y,k);}},M:function(q,p,f,i,o,m,c){if(i<=2){var
V=r.Gp(p,f,i,2,m);var
bb=Number(V);if(!isNaN(bb)){c.M=bb-1;return V.length;}else return -1;}else{var
_a=r.AZ(p,f,[q.T1(ub.t),q.T1(ub.u)],i,false,m);var
Ib=_a[0],fa=_a[1];if(Ib>=0){c.M=Ib;return fa;}else return -1;}},d:function(n,a,b,f,l,j,o){var
aa=r.Gp(a,b,f,2,j);return r.KN(aa,ub.z,o);},E:function(q,p,f,i,o,m,c){var
Eb=r.AZ(p,f,[q.T1(ub.m),q.T1(ub.o),q.T1(ub.n)],i,false,m);var
w=Eb[0],ha=Eb[1];if(w>=0){return ha;}else return 0;},H:function(s,o,g,k,q,j,a){var
jb=r.Gp(o,g,k,2,j);var
Mb=Number(jb);if(!isNaN(Mb)){a.hours24=Mb;return jb.length;}else return -1;},h:function(h,g,o,s,f,d,l){var
Ua=r.Gp(g,o,s,2,d);var
ha=Number(Ua);if(!isNaN(ha)){l.hours12=ha;return Ua.length;}else return -1;},m:function(h,g,o,s,f,d,l){var
E=r.Gp(g,o,s,2,d);return r.KN(E,ub.A,l);},s:function(s,o,g,k,q,j,a){var
bb=r.Gp(o,g,k,2,j);return r.KN(bb,ub.B,a);},S:function(a,n,h,l,o,p,s){var
E=r.Gp(n,h,l,3,p);return r.KN(E,ub.C,s);},a:function(j,a,q,b,h,f,m){var
zb=r.OX(a,q,j.T1(ub.p),b,false,f);var
Ta=zb[0],Bb=zb[1];if(Ta>=0){m.pm=Ta==1;return Bb;}else return -1;},z:function(f,i,m,q,d,b,n){var
Ca=i.substring(m,m+3);var
sa=i.charAt(m+3);var
Lb=Number(i.substring(m+4,m+6));var
aa=Number(i.substring(m+7,m+9));if(Ca.toLowerCase()==ub.D&&(sa==ub.w||sa==ub.v)&&!isNaN(Lb)&&!isNaN(aa)){var
V=60*Lb+aa;if(sa==ub.v)V=V*-1;n.timezone=V;return 9;}else return -1;},Z:function(d,k,p,o,b,s,f){var
J=k.charAt(p);var
zb=Number(k.substring(p+1,p+3));var
xa=Number(k.substring(p+3,p+5));if((J==ub.w||J==ub.v)&&!isNaN(zb)&&!isNaN(xa)){var
ia=60*zb+xa;if(J==ub.v)ia=ia*-1;f.timezone=ia;return 5;}else return -1;}};r.PD=function(a,b,j){if(a.indexOf(j,b)==b)return j.length;else return -1;};r.Gp=function(g,o,b,p,m){var
O=m==null||typeof m==ub.E&&!r.EV(m,0);if(jsx3.$A.is(m))O=O||m[0]==ub.F&&m[1]>2||m[0]==ub.G||m[0]==ub.H;if(O){var
Qa=o;while(r.EV(g,Qa))Qa++;return g.substring(o,Qa);}else{for(var
D=0;D<b;D++)if(!r.EV(g,o+D))return ub.I;return g.substring(o,o+b);}};r.AZ=function(g,o,m,s,n,a){var
H=[];for(var
Ab=0;Ab<m.length;Ab++)H.push.apply(H,m[Ab]);var
hb=r.OX(g,o,H,s,n,a);hb[0]=hb[0]%m[0].length;return hb;};r.OX=function(l,j,k,n,s,h){var
ha=-1;var
Jb=0;if(!s)l=l.toLowerCase();for(var
hb=0;hb<k.length;hb++){var
U=0;var
gb=s?k[hb]:k[hb].toLowerCase();while(l.length>U&&gb.length>U&&l.charAt(j+U)==gb.charAt(U))U++;if(U>Jb){Jb=U;ha=hb;}}return [ha,Jb];};r.KN=function(g,p,n){var
rb=Number(g);if(!isNaN(rb)){n[p]=rb;return g.length;}else return -1;};r.EV=function(a,k){var
_a=a.charCodeAt(k);return _a>=48&&_a<=57;};e.init=function(k,o){this.jL=k;this.v8=null;this.fu=o||jsx3.System.getLocale();this.Jy();};e.getLocale=function(){return this.fu;};e.setLocale=function(q){this.fu=q;};e.getTimeZoneOffset=function(b){return this.v8!=null?this.v8:-1*(b||new
Date()).getTimezoneOffset();};e.setTimeZoneOffset=function(n){this.v8=n;};e.T1=function(j){return (jsx3.System.getLocaleProperties(this.fu)).get(j);};e.Jy=function(){var
ja=ub.J;var
Gb=[];this.JZ=Gb;var
E=this.jL;var
ib=E.length;var
aa=0;var
t=[];var
O=ub.K;while(aa<ib){var
L=E.charAt(aa);if(L==ja){var
ea=E.indexOf(ja,aa+1);if(ea==aa+1){t[t.length]=ja;aa=aa+2;}else if(ea>=0){t[t.length]=E.substring(aa+1,ea);aa=ea+1;}else throw new
jsx3.Exception(jsx3._msg(ub.L,aa,this));}else if(r.tN[L]){var
Ib=1;while(E.charAt(aa+Ib)==L)Ib++;var
Bb=t.join(ub.s);if(Bb.length>0){Gb[Gb.length]=Bb;t.splice(0,t.length);}Gb[Gb.length]=[L,Ib];aa=aa+Ib;}else if(L.match(O)){throw new
jsx3.Exception(jsx3._msg(ub.M,aa,E));}else{O.lastIndex=aa+1;if(O.exec(E)){t[t.length]=E.substring(aa,O.lastIndex-1);aa=O.lastIndex-1;}else{t[t.length]=E.substring(aa);break;}}}var
Bb=t.join(ub.s);if(Bb.length>0){Gb[Gb.length]=Bb;t.splice(0,t.length);}};e.format=function(f){if(!(f instanceof Date)){if(!isNaN(f)){f=new
Date(Number(f));}else f=new
Date(f);if(isNaN(f))throw new
jsx3.IllegalArgumentException(ub.N,f);}var
da=new
Array(this.JZ.length);var
pb=new
Date();pb.setTime(f.getTime()+(this.getTimeZoneOffset(f)+f.getTimezoneOffset())*1000*60);for(var
B=0;B<this.JZ.length;B++){var
La=this.JZ[B];if(jsx3.$A.is(La)){var
Ia=La[0];var
jb=La[1];da[B]=r.tN[Ia](pb,jb,this);}else da[B]=La;}return da.join(ub.s);};e.parse=function(q){var
ia=new
Date();ia.setTime(0);var
B=0;var
pa={};for(var
Lb=0;Lb<this.JZ.length;Lb++){var
oa=this.JZ[Lb];var
ab=-1;if(jsx3.$A.is(oa)){ab=r.No[oa[0]](this,q,B,oa[1],ia,this.JZ[Lb+1],pa);}else ab=r.PD(q,B,oa);if(ab<0)throw new
jsx3.Exception(jsx3._msg(ub.O,q,this));B=B+ab;}if(pa.y!=null)ia.setUTCFullYear(pa.y);if(pa.bc)ia.setUTCFullYear(1-ia.getUTCFullYear());if(pa.M!=null)ia.setUTCMonth(pa.M);if(pa.d!=null)ia.setUTCDate(pa.d);if(pa.hours24){ia.setUTCHours(pa.hours24);}else if(pa.hours12){var
E=pa.hours12;if(pa.pm)E=E+12;ia.setUTCHours(E);}if(pa.m!=null)ia.setUTCMinutes(pa.m);if(pa.s!=null)ia.setUTCSeconds(pa.s);if(pa.S!=null)ia.setUTCMilliseconds(pa.S);if(pa.timezone!=null){ia.setTime(ia.getTime()-pa.timezone*1000*60);}else ia.setTime(ia.getTime()-this.getTimeZoneOffset(ia)*1000*60);if(isNaN(ia.getTime()))throw new
jsx3.Exception(jsx3._msg(ub.P,q,this));return ia;};e.getFormat=function(){return this.jL;};e.toString=function(){return this.jL;};});jsx3.Class.defineClass("jsx3.util.MessageFormat",null,null,function(k,j){var
ub={a:"{",b:"}",c:"string",d:"number",e:"null",f:"",g:"'",h:"msfmt.sq",i:"msfmt.bracket",j:"getDateInstance",k:"getTimeInstance",l:"getDateTimeInstance",m:",",n:"msfmt.bad_ind",o:"short",p:"medium",q:"long",r:"full",s:"datetime",t:"integer",u:"percent",v:"currency",w:"msfmt.bad_type"};var
Ea=jsx3.util.NumberFormat;var
L=jsx3.util.DateFormat;j.init=function(d,l){this.jL=d;this.fu=l||jsx3.System.getLocale();this._O();};j.getLocale=function(){return this.fu;};j.setLocale=function(f){this.fu=f;this._O();};j.format=function(b){var
t=new
Array(this.JZ.length);var
Da=arguments[0] instanceof Array?arguments[0]:arguments;for(var
w=0;w<t.length;w++){var
Ta=this.JZ[w];if(jsx3.$A.is(Ta)){var
Db=Ta[0];var
Ha=Ta[1];var
ya=Da[Db];if(Db>=Da.length){t[w]=ub.a+Db+ub.b;}else if(Ha!=null){t[w]=Ha.format(ya);}else if(typeof ya==ub.c){t[w]=ya;}else if(typeof ya==ub.d&&Ea){if(!this.qK)this.qK=Ea.getNumberInstance(this.fu);t[w]=this.qK.format(ya);}else if(ya==null){t[w]=ub.e;}else if(ya instanceof Date&&L){t[w]=(L.getDateTimeInstance(1,1,this.fu)).format(ya);}else t[w]=ya.toString();}else t[w]=this.JZ[w];}return t.join(ub.f);};j._O=function(){var
fb=ub.g;var
va=[];this.JZ=va;var
Bb=this.jL;var
ya=Bb.length;var
sb=0;var
w=false;var
Ya=[];while(sb<ya){var
Ka=Bb.indexOf(fb,sb);var
Lb=Bb.indexOf(ub.a,sb);if(Ka>=0&&(Ka<Lb||Lb<0)){if(Ka>sb)Ya[Ya.length]=Bb.substring(sb,Ka);var
Ga=Bb.indexOf(fb,Ka+1);if(Ga==Ka+1){Ya[Ya.length]=fb;sb=Ga+1;}else if(Ga>=0){Ya[Ya.length]=Bb.substring(Ka+1,Ga);sb=Ga+1;}else throw new
jsx3.Exception(jsx3._msg(ub.h,Ka,this));}else if(Lb>=0){if(Lb>sb)Ya[Ya.length]=Bb.substring(sb,Lb);va[va.length]=Ya.join(ub.f);Ya.splice(0,Ya.length);sb=Lb+1;var
ua=[];while(true){var
Ib=Bb.charAt(sb);if(Ib==ub.f)throw new
jsx3.Exception(jsx3._msg(ub.i,ya-ua.length-1,this));if(Ib==fb){if(Bb.charAt(sb+1)==fb){ua[ua.length]=Ib;sb=sb+2;}else{w=!w;sb=sb+1;}}else if(w){ua[ua.length]=Ib;sb++;}else if(Ib==ub.b){sb++;break;}else{ua[ua.length]=Ib;sb++;}}va[va.length]=this.IS(ua.join(ub.f));}else{Ya[Ya.length]=Bb.substring(sb);break;}}var
la=Ya.join(ub.f);if(la.length>0)va[va.length]=la;};k.hR={date:ub.j,time:ub.k,datetime:ub.l};j.IS=function(s){var
nb=s.split(ub.m);var
xb=Number(nb[0]);if(isNaN(xb))throw new
jsx3.Exception(jsx3._msg(ub.n,s,this));if(nb.length>1){var
mb=nb[1];var
X=(nb.slice(2)).join(ub.m);if(k.hR[mb]){if(!L)return [xb,null];var
yb=k.hR[mb];var
Aa=null;if(X==ub.o)Aa=1;else if(X==ub.p)Aa=2;else if(X==ub.q)Aa=3;else if(X==ub.r)Aa=4;if(Aa!=null||jsx3.util.strEmpty(X))return [xb,mb==ub.s?L[yb](Aa,Aa,this.fu):L[yb](Aa,this.fu)];return [xb,new
L(X,this.fu)];}else if(mb==ub.d){if(!Ea)return [xb,null];if(jsx3.util.strEmpty(X))return [xb,Ea.getNumberInstance(this.fu)];else if(X==ub.t)return [xb,Ea.getIntegerInstance(this.fu)];else if(X==ub.u)return [xb,Ea.getPercentInstance(this.fu)];else if(X==ub.v)return [xb,Ea.getCurrencyInstance(this.fu)];else return [xb,new
Ea(X,this.fu)];}else throw new
jsx3.Exception(jsx3._msg(ub.w,s,this));}else return [xb,null];};j.toString=function(){return this.jL;};});jsx3.Package.definePackage("jsx3.html",function(r){var
ub={A:"<",B:' xmlns="',C:'"',D:" ",E:'="',F:"/>",G:">",H:"</",I:"<![CDATA[",J:"]]>",K:"&",L:";",M:"<!--",N:"-->",O:"html.set_outer",P:"beforeend",Q:"beforebegin",R:"html.adj",S:"opacity:",T:"text",U:"jsx:///images/icons/h.png",V:"jsx:///images/icons/v.png",W:"background-image:url(",X:");",Y:"_jsx_",Z:"disable-output-escp",_:/&lt;/g,a:"",aa:/&gt;/g,b:"overflow:hidden;font-size:0px;",ba:/&quot;/g,c:"body",ca:/&amp;/g,d:'<input type="text" id="_jsx3_html_b1" style="position:absolute;top:0px;left:-120px;width:100px;height:30px;padding:8px;margin:0px;"/>',da:/&([a-zA-Z_]+);/g,e:"beforeEnd",ea:"class",f:"_jsx3_html_b1",fa:/<span class=\"disable-output-escp\">([\s\S]*?)<\/span>/g,g:'<div id="_jsx3_html_b2" style="position:absolute;top:0px;left:-116px;width:100px;height:24px;padding:8px;"></div>',ga:"&#",h:"_jsx3_html_b2",ha:"jsx_image_loader",i:"string",ia:"none",j:/^<([^\s]*)([\s\S]*)\/>$/i,ja:"_",k:"<$1$2></$1>",ka:"img",l:"span",la:"alt",m:"div",ma:"id",n:/^on/,na:"src",o:"function",oa:"unshift",p:"event",pa:"push",q:"head",qa:/\//g,r:"undefined",ra:" A AREA BUTTON INPUT OBJECT SELECT TEXTAREA SPAN DIV ",s:"http://www.w3.org/1999/xhtml",sa:"focus",t:"style",ta:/\s+/g,u:" {",v:"}",w:"type",x:"text/css",y:"media",z:"screen"};var
kb=jsx3.gui.Event;r.MODE_IE_QUIRKS=0;r.MODE_FF_QUIRKS=1;r.MODE_IE_STRICT=2;r.MODE_FF_STRICT=3;r._d=ub.a;r.co=ub.b;r.getMode=function(g){if(r.XE==null){var
P=g!=null?g.ownerDocument:document;var
pa=g||(document.getElementsByTagName(ub.c))[0];r.XE=0;var
ua=ub.d;jsx3.html.insertAdjacentHTML(pa,ub.e,ua);var
wa=P.getElementById(ub.f);if(wa.offsetHeight!=30){r.XE=jsx3.CLASS_LOADER.IE?2:3;}else{var
db=ub.g;jsx3.html.insertAdjacentHTML(pa,ub.e,db);var
W=P.getElementById(ub.h);if(parseInt(W.offsetWidth)>100)r.XE=1;pa.removeChild(W);}pa.removeChild(wa);}return r.XE;};r.emptyToClosed=function(c){return typeof c==ub.i?c.replace(ub.j,ub.k):c;};r.restoreScrollPosition=function(i){};r.persistScrollPosition=function(i){};r._tn=function(h){return (h.nodeName||h.tagName||ub.a).toLowerCase();};r.scrollIntoView=function(m,s,b,a){var
ob=m.parentNode;if(b==null)b=0;if(a==null)a=0;while(ob!=null){var
Za=r._tn(ob);if(Za==ub.l||Za==ub.m){var
Ba=r.getRelativePosition(ob,m);var
ra=ob.scrollLeft,H=ob.scrollTop;var
Db=ra,Kb=H;Ba.L+=ra;Ba.T+=H;if(ob.clientWidth+Db<=Ba.L){Db=Ba.L+m.offsetWidth-ob.clientWidth+b;}else if(b&&ob.clientWidth+Db<Ba.L+m.offsetWidth)Db=Ba.L+m.offsetWidth-ob.clientWidth+b;if(Db>=Ba.L+m.offsetWidth){Db=Ba.L-b;}else if(b&&Db>Ba.L)Db=Ba.L-b;if(ob.clientHeight+Kb<=Ba.T){Kb=Ba.T+m.offsetHeight-ob.clientHeight+a;}else if(a&&ob.clientHeight+Kb<Ba.T+m.offsetHeight)Kb=Ba.T+m.offsetHeight-ob.clientHeight+a;if(Kb>=Ba.T+m.offsetHeight){Kb=Ba.T-a;}else if(a&&Kb>Ba.T)Kb=Ba.T-a;if(Db!=ra)ob.scrollLeft=Db;if(Kb!=H)ob.scrollTop=Kb;}if(ob==s)break;ob=ob.parentNode;}};r.getScrollSizeOffset=function(a,q){return 0;};r.addEventListener=function(k,e,j){e=e.replace(ub.n,ub.a);k.addEventListener(e,typeof j==ub.o?j:new
Function(ub.p,j),false);};r.removeEventListener=function(f,j,o){j=j.replace(ub.n,ub.a);f.removeEventListener(j,o,false);};r.removeStyle=function(e,k){e.style.removeProperty(k);};r._FOCUSABLE={input:true,textarea:true,select:true,body:true,a:true,img:true,button:true,frame:true,iframe:true,object:true};r.isFocusable=function(a){return a.focus!=null&&(parseInt(a.tabIndex)>=0||r._FOCUSABLE[r._tn(a)]);};r.createRule=function(h,c,p){if(!p)p=document;var
Db=(p.getElementsByTagName(ub.q))[0];var
nb=typeof p.createElementNS!=ub.r?p.createElementNS(ub.s,ub.t):p.createElement(ub.t);var
y=p.createTextNode(h+ub.u+c+ub.v);nb.appendChild(y);nb.setAttribute(ub.w,ub.x);nb.setAttribute(ub.y,ub.z);Db.appendChild(nb);};r.getRuleByName=function(n){var
W=document.styleSheets;for(var
Ma=0;Ma<W.length;Ma++){var
db=W[Ma];for(var
da=0;da<db.cssRules.length;da++)if(db.cssRules[da].selectorText==n)return db.cssRules[da];}return null;};r.getOuterHTML=function(s){if(window.SVGElement&&s instanceof SVGElement){return (new
XMLSerializer()).serializeToString(s);}else{var
da=[];switch(s.nodeType){case 1:da[da.length]=ub.A+r._tn(s);if(s.namespaceURI)da[da.length]=ub.B+s.namespaceURI+ub.C;for(var
Ca=0;Ca<s.attributes.length;Ca++){var
jb=s.attributes.item(Ca);if(jb.nodeValue!=null)da[da.length]=ub.D+jb.nodeName+ub.E+jb.nodeValue+ub.C;}if(s.childNodes.length==0)da[da.length]=ub.F;else da[da.length]=ub.G+s.innerHTML+ub.H+r._tn(s)+ub.G;break;case 3:da[da.length]=s.nodeValue;break;case 4:da[da.length]=ub.I+s.nodeValue+ub.J;break;case 5:da[da.length]=ub.K+s.nodeName+ub.L;break;case 8:da[da.length]=ub.M+s.nodeValue+ub.N;break;default:if(s.childNodes)for(var
Mb=0;Mb<s.childNodes.length;Mb++)da.push(r.getOuterHTML(s.childNodes[Mb]));break;}return da.join(ub.a);}};r.setOuterHTML=function(p,h){if(window.SVGElement&&p instanceof SVGElement){if(!h){p.parentNode.removeChild(p);}else{var
ia=p.ownerDocument.createRange();ia.setStartBefore(p);var
R=ia.createContextualFragment(h);p.parentNode.replaceChild(R,p);}}else try{var
ia=p.ownerDocument.createRange();ia.setStartBefore(p);var
R=ia.createContextualFragment(h);p.parentNode.replaceChild(R,p);}catch(Kb){var
qa=typeof h==ub.i?h.substring(0,50):h;throw new
jsx3.Exception(jsx3._msg(ub.O,p,qa),jsx3.NativeError.wrap(Kb));}};r.removeNode=function(n){n.parentNode.removeChild(n);};r.setInnerText=function(f,g){for(var
da=f.childNodes.length-1;da>=0;da--)f.removeChild(f.childNodes[da]);f.appendChild(f.ownerDocument.createTextNode(g));};r.insertAdjacentHTML=function(a,g,l){if(g.toLowerCase()==ub.P){var
zb=a.ownerDocument.createRange();zb.setStartAfter(a);var
fb=zb.createContextualFragment(l);a.appendChild(fb);return l;}else if(g.toLowerCase()==ub.Q){var
zb=a.ownerDocument.createRange();zb.setStartBefore(a);var
fb=zb.createContextualFragment(l);a.parentNode.insertBefore(fb,a);return l;}else throw new
jsx3.Exception(jsx3._msg(ub.R,g));};r.updateCSSOpacity=function(j,s){j.style.opacity=s.toString();};r.getCSSOpacity=function(o){return ub.S+o+ub.L;};r.getRelativePosition=function(j,c){j=j||(c.ownerDocument.getElementsByTagName(ub.c))[0];var
Bb={W:c.offsetWidth,H:c.offsetHeight};var
A=c.scrollLeft;var
fb=c.scrollTop;var
Ca=0;var
O=0;var
Q=c.offsetTop;var
Ya=c.offsetLeft;var
ja=c;var
ta=0;var
N=0;var
ba;if(c.offsetParent){N=N-c.offsetParent.scrollLeft;ta=ta-c.offsetParent.scrollTop;ba=c.offsetParent.style.borderLeftWidth?parseInt(c.offsetParent.style.borderLeftWidth):0;if(!isNaN(ba))Ca=Ca+ba;ba=c.offsetParent.style.borderTopWidth?parseInt(c.offsetParent.style.borderTopWidth):0;if(!isNaN(ba))O=O+ba;}while((c=c.offsetParent)!=null&&c!=j){Q=Q+c.offsetTop;Ya=Ya+c.offsetLeft;if(c.offsetParent){ba=c.offsetParent.style.borderLeftWidth?parseInt(c.offsetParent.style.borderLeftWidth):0;if(!isNaN(ba))Ca=Ca+ba;ba=c.offsetParent.style.borderTopWidth?parseInt(c.offsetParent.style.borderTopWidth):0;if(!isNaN(ba))O=O+ba;N=N+c.offsetParent.scrollLeft;ta=ta+c.offsetParent.scrollTop;}if(c.offsetParent){var
Ma=c.offsetParent.scrollTop;if(!isNaN(Ma))ta=ta-Ma;var
aa=c.offsetParent.scrollLeft;if(!isNaN(aa))N=N-aa;}}c=ja;while((c=c.parentNode)!=null&&c!=j)if(c.parentNode){var
Ma=c.parentNode.scrollTop;if(!isNaN(Ma)&&Ma>0)ta=ta-Ma;var
aa=c.parentNode.scrollLeft;if(!isNaN(aa)&&aa>0)N=N-aa;}Bb.L=Ya+N+2*Ca+j.scrollLeft;Bb.T=Q+ta+2*O+j.scrollTop;return Bb;};r.copy=function(a){window.clipboardData.setData(ub.T,a);};r.paste=function(){return window.clipboardData.getData(ub.T);};r.OG=jsx3.resolveURI(ub.U);r.R1=jsx3.resolveURI(ub.V);r.getCSSFade=function(f){return r.getCSSPNG(f?r.OG:r.R1);};r.getCSSPNG=function(i){return ub.W+i+ub.X;};r.getJSXParent=function(p,f){while(p!=null){if(p.id&&p.id.indexOf(ub.Y)==0){var
N=f?f.getJSXById(p.id):jsx3.GO(p.id);if(N!=null)return N;}if(!p.parentNode){var
mb=p.parentWindow||p.defaultView;p=mb?mb.frameElement:null;}else p=p.parentNode;}return null;};r.removeOutputEscaping=function(g){var
H=g?[g]:[];while(H.length>0){var
Gb=H.shift();if(Gb.nodeName&&r._tn(Gb)==ub.l&&Gb.className==ub.Z){Gb.innerHTML=((((Gb.innerHTML.replace(ub._,ub.A)).replace(ub.aa,ub.G)).replace(ub.ba,ub.C)).replace(ub.ca,ub.K)).replace(ub.da,r.KQ);Gb.removeAttribute(ub.ea);}else if(Gb.childNodes)H.push.apply(H,this.nodesToArray(Gb.childNodes));}};r.removeOutputEscapingSpan=function(c){return c.replace(ub.fa,function(p,s){return ((((s.replace(ub._,ub.A)).replace(ub.aa,ub.G)).replace(ub.ba,ub.C)).replace(ub.ca,ub.K)).replace(ub.da,r.KQ);});};r.EE={nbsp:160,copy:169,reg:174,deg:176,middot:183,le:8804,ge:8805,lt:60,gt:62,euro:8364,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,ldquo:8220,rdquo:8221,permil:8240};r.KQ=function(g,f){var
Eb=r.EE[f];return Eb?ub.ga+Eb+ub.L:g;};r.YN=ub.ha;r.loadImages=function(h){var
qb=document.getElementById(r.YN);if(qb==null){var
_a=(document.getElementsByTagName(ub.c))[0];if(_a){qb=document.createElement(ub.m);qb.id=r.YN;qb.style.display=ub.ia;_a.insertBefore(qb,_a.firstChild);}else return;}var
la=jsx3.$A.is(h)?h:arguments;for(var
Da=0;Da<la.length;Da++){if(!la[Da])continue;var
ia=jsx3.resolveURI(la[Da]);var
V=r.YN+ub.ja+ia;if(document.getElementById(V)==null){var
ab=document.createElement(ub.ka);ab.setAttribute(ub.la,ub.a);ab.setAttribute(ub.ma,V);ab.setAttribute(ub.na,ub.a+ia);qb.appendChild(ab);}}};r.updateRule=function(j,b,c){var
xa=jsx3.html.getRuleByName(j);if(xa)xa.style[b]=c;};r.getElementById=function(c,o,j){return this.findElements(c,function(i){return i.id==o;},j,false,false,true);};r.getElementByTagName=function(f,d,m){d=d.toLowerCase();return this.findElements(f,function(b){return r._tn(b)==d;},m,false,false,true);};r.getElementsByTagName=function(e,c,l){c=c.toLowerCase();return this.findElements(e,function(b){return r._tn(b)==c;},l,true,false,true);};r.findElements=function(q,n,e,a,f,s){var
Ya=e?ub.oa:ub.pa;var
T=a?[]:null;var
za=s?[q]:this.nodesToArray(q.childNodes);while(za.length>0){var
Q=za.shift();if(n.call(null,Q))if(a)T[T.length]=Q;else return Q;if(!f)za[Ya].apply(za,this.nodesToArray(Q.childNodes));}return T;};r.getElmUpByTagName=function(q,f,j){return r.findElementUp(q,function(i){return r._tn(i)==f;},j);};r.findElementUp=function(b,s,n){var
Mb=b.ownerDocument.documentElement;var
Nb=n?b:b.parentNode;while(Nb!=null){if(s.call(null,Nb))return Nb;if(Nb==Mb)break;Nb=Nb.parentNode;}return null;};r.selectSingleElm=function(s,h){var
oa=1,W=arguments;if(arguments.length==2)if(typeof h==ub.i){oa=0;W=h.split(ub.qa);}else if(jsx3.$A.is(h)){oa=0;W=h;}var
ab=s;for(var
Wa=oa;ab!=null&&Wa<W.length;Wa++){var
Bb=W[Wa];if(!isNaN(Bb)){var
Q=Number(Bb);var
Ab=ab.childNodes.length;var
hb=0,db=0;for(;hb<Ab&&db<Q;hb++)if(ab.childNodes[hb].nodeType==1)db++;ab=ab.childNodes[hb];}else throw new
jsx3.Exception();}return ab;};r.nodesToArray=function(f){var
da=new
Array(f.length);for(var
z=0;z<f.length;z++)da[z]=f[z];return da;};r.getSelection=function(a){return new
r.Selection(a);};r.focusNext=function(h,e){var
rb=h;while(rb.lastChild)rb=rb.lastChild;while(!r.isFocusable(rb)&&rb!=h)rb=rb.previousSibling||rb.parentNode;if(rb!=h||r.isFocusable(rb))if(rb.onfocus!=null){var
S=rb.onfocus;rb.onfocus=null;rb.focus();jsx3.sleep(function(){rb.onfocus=S;});}else rb.focus();};r.focusPrevious=function(a,l){var
ma=this.findElements(a,function(h){return r.isFocusable(h);},true,false,false,true);if(ma!=null)if(ma.onfocus!=null){var
Db=ma.onfocus;ma.onfocus=null;ma.focus();jsx3.sleep(function(){ma.onfocus=Db;});}else ma.focus();};r._CANTAB=ub.ra;r.focus=function(o){if(o.focus&&r._CANTAB.indexOf((ub.D+o.tagName+ub.D).toUpperCase())>=0){try{o.focus();}catch(Kb){}}else jsx3.gui.Event.dispatchMouseEvent(o,ub.sa,{});};r.addClass=function(i,m){var
Ba=i.className;if(Ba){if(!(jsx3.$A(Ba.split(ub.ta))).contains(m))i.className=Ba+ub.D+m;}else i.className=m;};r.removeClass=function(q,b){var
Ra=q.className;if(Ra&&Ra.indexOf(b)>=0){var
aa=jsx3.$A(Ra.split(ub.ta));if(aa.remove(b))q.className=aa.join(ub.D);}};});jsx3.Class.defineClass("jsx3.html.Selection",null,null,function(m,g){var
ub={a:"end"};var
E=jsx3.html;g.init=function(n){this.RW={elm:n,start:n.selectionStart,end:n.selectionEnd,scrollt:n.scrollTop,scrolll:n.scrollLeft};};g.getStartIndex=function(){return this.RW.start;};g.getEndIndex=function(){return this.RW.end;};g.setRange=function(f,l){this.RW.start=f;this.RW.end=l;this.RW.elm.setSelectionRange(f,l);};g.getOffsetLeft=function(){if(this.RW.pos==null)this.RW.pos=jsx3.html.getRelativePosition(null,this.RW.elm);return this.RW.pos.L;};g.getOffsetTop=function(){if(this.RW.pos==null)this.RW.pos=jsx3.html.getRelativePosition(null,this.RW.elm);return this.RW.pos.T;};g.getText=function(){return this.RW.elm.value.substring(this.RW.start,this.RW.end);};g.setText=function(i){this.RW.elm.value=this.RW.elm.value.substring(0,this.RW.start)+i+this.RW.elm.value.substring(this.RW.end);this.RW.elm.setSelectionRange(this.RW.start,this.RW.start+i.length);this.RW.elm.end=this.RW.elm.selectionEnd;};g.insertCaret=function(r){this.RW.elm.focus();if(r==ub.a){this.RW.elm.setSelectionRange(this.RW.elm.end,this.RW.elm.end);}else throw new
jsx3.Exception();this.RW.elm.scrollTop=this.RW.scrollt;this.RW.elm.scrollLeft=this.RW.scrolll;};});jsx3.Class.defineClass("jsx3.app.Cache",null,[jsx3.util.EventDispatcher],function(c,l){var
ub={a:"remove",b:"add",c:"change",d:"http://xsd.tns.tibco.com/gi/cache",e:'<loading xmlns="',f:'"/>',g:'<timeout xmlns="',h:'<error xmlns="',i:"*",j:"p1",k:"_jsxkt",l:"response",m:"timeout",n:"error",o:"load.",p:"load",q:"strId",r:"objDocument",s:"ty",t:"sJ"};var
yb=jsx3.xml.Document;c.REMOVE=ub.a;c.ADD=ub.b;c.CHANGE=ub.c;c.ASYNC_TIMEOUT=60000;c.XSDNS=ub.d;c.zt=(new
yb()).loadXML(ub.e+c.XSDNS+ub.f);c.Iw=(new
yb()).loadXML(ub.g+c.XSDNS+ub.f);c.OZ=(new
yb()).loadXML(ub.h+c.XSDNS+ub.f);l.init=function(){this.ty={};this.sJ=[];};l.addParent=function(d){this.sJ.push(d);};l.clearById=function(j){var
Db=this.ty[j];if(Db){delete this.ty[j];this.Er(Db);this.publish({subject:j,action:ub.a});this.publish({subject:ub.c,id:j,action:ub.a});return Db.kD;}};l.isSystem=function(d){return false;};l.clearByTimestamp=function(b){if(b instanceof Date)b=b.getTime();var
Nb=[];for(var Xa in this.ty){var
Cb=this.ty[Xa];if(Cb.PK<b){delete this.ty[Xa];this.Er(Cb);this.publish({subject:Xa,action:ub.a});Nb.push(Xa);}}if(Nb.length>0)this.publish({subject:ub.c,ids:Nb,action:ub.a});return Nb;};l.getDocument=function(o){if(this.ty[o]!=null)return this.ty[o].kD;for(var
F=0;F<this.sJ.length;F++){var
Qa=this.sJ[F].getDocument(o);if(Qa!=null)return Qa;}return null;};l.getOrOpenDocument=function(p,q,f){if(q==null)q=p.toString();return this.getDocument(q)||this.JD(p,q,f,false);};l.openDocument=function(k,r,b){return this.JD(k,r,b,false);};l.getOrOpenAsync=function(a,m,i){if(m==null)m=a.toString();return this.getDocument(m)||this.JD(a,m,i,true);};l.JD=function(j,d,e,a){if(e==null)e=yb.jsxclass;if(d==null)d=j.toString();var
rb=e.newInstance();rb.setAsync(a);if(a){var
Nb=rb;Nb.subscribe(ub.i,this,ub.j);Nb._jsxkt=d;Nb.load(j,c.ASYNC_TIMEOUT);rb=c.zt.cloneDocument();rb.Rr=Nb;}else rb.load(j);this.setDocument(d,rb);return rb;};l.ic=function(a,d){if(this.ty[a])this.ty[a].kD=d;else this.ty[a]={kD:d,PK:(new
Date()).getTime()};};l.Er=function(g){var
u=g.kD.Rr;if(u){u.unsubscribe(ub.i,this);u.abort();}};l.p1=function(s){var
Fa=s.target;var
db=s.subject;var
u=Fa._jsxkt;delete Fa[ub.k];Fa.unsubscribe(ub.i,this);if(this.ty){var
la;if(db==ub.l){la=Fa;}else if(db==ub.m){la=c.Iw.cloneDocument();}else if(db==ub.n){la=c.OZ.cloneDocument();la.setAttribute(ub.n,(Fa.getError()).toString());}else return;this.setDocument(u,la);this.publish({subject:ub.o+u,action:ub.p,response:db,id:u});}};l.setDocument=function(o,g){if(o==null)throw new
jsx3.IllegalArgumentException(ub.q,o);if(g==null)throw new
jsx3.IllegalArgumentException(ub.r,g);var
F={};F.PK=(new
Date()).getTime();F.kD=g;var
la=ub.b;var
Ga=this.ty[o];if(Ga){la=ub.c;this.Er(Ga);}this.ty[o]=F;this.publish({subject:o,action:la,id:o});this.publish({subject:ub.c,action:la,id:o});};l.getTimestamp=function(h){var
Q=this.ty[h];return Q!=null?Q.PK:null;};l.keys=function(){var
jb=[];for(var Ia in this.ty)jb[jb.length]=Ia;return jb;};l.destroy=function(){delete this[ub.s];delete this[ub.t];};});jsx3.Cache=jsx3.app.Cache;jsx3.Class.defineClass("jsx3.app.Properties",null,null,function(m,d){var
ub={a:"_global",b:"./record",c:"jsxid",d:"eval",e:"jsxtext",f:"1",g:"true",h:"props.eval",i:"undefined",j:"strValue"};var
pb=jsx3.util.Logger.getLogger(m.jsxclass.getName());m.MC=ub.a;d.init=function(){this.sJ=[];this.ys=[];this.OE=[m.MC];this.nU={};this.nU[m.MC]={};this.AU={};this.sB=false;this.DL={};this.nR=false;};d.loadXML=function(e,b){if(b==null){b=m.MC;}else if(jsx3.util.arrIndexOf(this.OE,b)<0)this.OE.splice(1,0,b);var
L=this.nU[b];if(L==null)L=this.nU[b]={};for(var
wa=e.selectNodeIterator(ub.b);wa.hasNext();){var
ka=wa.next();var
Nb=ka.getAttribute(ub.c);var
eval=ka.getAttribute(ub.d);var
Hb=ka.getAttribute(ub.e);if(eval==ub.f||eval==ub.g)try{Hb=isNaN(Hb)?jsx3.eval(Hb):Number(Hb);}catch(Kb){pb.warn(jsx3._msg(ub.h,Nb,Hb),jsx3.NativeError.wrap(Kb));}L[Nb]=Hb;}this.sB=true;};d.addParent=function(e){this.sJ.splice(0,0,e);e.ys.push(this);this.kZ(true);};d.removeParent=function(k){var
Ka=jsx3.util.arrIndexOf(this.sJ,k);if(Ka>=0){this.sJ.splice(Ka,1);k.O0(this);this.kZ(true);}};d.O0=function(a){var
yb=jsx3.util.arrIndexOf(this.ys,a);if(yb>=0)this.ys.splice(yb,1);};d.removeAllParents=function(){if(this.sJ.length>0){for(var
M=0;M<this.sJ.length;M++)this.sJ[M].O0(this);this.sJ=[];this.nR=false;this.DL={};}};d.getParents=function(){return this.sJ.concat();};d.containsKey=function(r){if(this.sB)this.cW();return typeof this.AU[r]!=ub.i;};d.getKeys=function(){if(this.sB)this.cW();var
z=[];for(var qa in this.AU)z[z.length]=qa;return z;};d.get=function(p){if(this.sB)this.cW();if(typeof this.AU[p]!=ub.i)return this.AU[p];if(this.nR)this.ZT();return this.DL[p];};d.set=function(k,s){if(typeof s==ub.i)throw new
jsx3.IllegalArgumentException(ub.j,s);this.nU[m.MC][k]=s;this.AU[k]=s;this.kZ();};d.remove=function(r){for(var Aa in this.nU)delete this.nU[Aa][r];delete this.AU[r];this.kZ();};d.cW=function(){this.sB=false;var
ob=this.AU={};for(var
vb=this.OE.length-1;vb>=0;vb--){var
ab=this.nU[this.OE[vb]];for(var Ua in ab)ob[Ua]=ab[Ua];}};d.ZT=function(){this.nR=false;var
Da=this.DL={};for(var
sa=this.sJ.length-1;sa>=0;sa--){var
Db=this.sJ[sa];if(Db.sB)Db.cW();if(Db.nR)Db.ZT();var
Ua=Db.AU;var
ea=Db.DL;for(var fa in ea)Da[fa]=ea[fa];for(var fa in Ua)Da[fa]=Ua[fa];}};d.kZ=function(a){var
Kb=a?[this]:this.ys.concat();while(Kb.length>0){var
Jb=Kb.shift();if(!Jb.nR){Jb.nR=true;Kb.push.apply(Kb,Jb.ys);}}};});jsx3.Class.defineClass("jsx3.app.PropsBundle",jsx3.app.Properties,null,function(e,j){var
ub={a:".",b:"::",c:"propbn.err_key",d:"",e:"*",f:"propbn.err_file",g:"/data/locale",h:"key",i:"Parent of bundle ",j:" (",k:") is null.",l:"locales",m:/\s*,\s*/};var
Na=jsx3.util.Logger.getLogger(e.jsxclass.getName());var
Ja=jsx3.util.Job;e.w6=ub.a;e.xS=-1;e.uv={};e.q9={};e.Ky=new
jsx3.util.JobGraph();e.FZ=new
e();e.getProps=function(g,m,i){if(!m)m=jsx3.System.getLocale();var
G=g+ub.b+m;if(!e.q9[G]){var
La=e.Ky;if(La.node(g))return e.FZ;var
pb=new
Ja(g);e.K4(g,m,i,false,pb);}var
Aa=e.q9[G];if(Aa==e.xS)throw new
jsx3.Exception(jsx3._msg(ub.c,g,m));return Aa;};e.getPropsFT=function(r,p,f){try{return e.getProps(r,p,f);}catch(Kb){}var
C=jsx3.util.Locale.ROOT;if(!p||!p.equals(C))try{return e.getProps(r,C,f);}catch(Kb){}return new
e();};e.getPropsAsync=function(g,k,s,i){if(!k)k=jsx3.System.getLocale();var
H=g+ub.b+k;var
A=new
Ja(null,function(){var
ya=e.q9[H];s(ya!=e.xS?ya:null);});e.K4(g,k,i,true,A);};e.K4=function(b,h,n,k,o){var
La=e.Ky;b=b.toString();La.pause();La.add(o);var
Eb=o;var
L=h.getSearchPath();for(var
Ia=0;Ia<L.length;Ia++){var
la=L[Ia];var
kb=b+ub.b+la;if(e.q9[kb])break;var
_a=La.node(kb);if(!_a){_a=e.OH(kb,b,la,n,k);La.add(_a);_a.add(Eb);}else{_a.add(Eb);break;}Eb=_a;}La.start();};e.OH=function(b,f,r,c,g){return new
Ja(b,function(){var
va=this;e.TU(b,f,r,c,g,function(){va.finish();});return 0;});};e.TU=function(d,q,i,r,o,l){var
mb=e.q9,Qa=e.uv;var
db=false,Oa=false;if(mb[d]){Oa=true;}else if(i.toString()==ub.d){db=true;}else if(!Qa[q][i]){var
wb=i.getSearchPath();for(var
ya=1;!mb[d]&&ya<wb.length;ya++){var
O=wb[ya];var
_=q+ub.b+O;mb[d]=mb[_];}Oa=true;}if(Oa){l();return;}var
wa;if(db){Qa[q]={};wa=q;}else{var
Ua=q.lastIndexOf(ub.a);wa=q.substring(0,Ua)+e.w6+i+q.substring(Ua);}var
x=null,za=false;if(r)x=r.getDocument(wa);if(x){za=true;r=null;}else{x=new
jsx3.xml.Document();if(o){x.setAsync(true);x.subscribe(ub.e,e,function(n){e.wZ(d,q,i,r,n.target,l);});}else za=true;x.load(wa);}if(za)e.wZ(d,q,i,r,x,l);};e.wZ=function(g,d,a,l,i,r){var
V=i.getSourceURL();if(!i.hasError()){if(l&&V)l.setDocument(V,i);e.yB(d,i);e.jB(d,a,i);}else{Na.error(jsx3._msg(ub.f,V,i.getError()));e.q9[g]=e.xS;}r();};e.jB=function(c,i,m){for(var
La=m.selectNodeIterator(ub.g);La.hasNext();){var
la=La.next();var
xb=la.getAttribute(ub.h)||ub.d;e.ap(c,xb,la);e.uv[c][xb]=true;}if(!e.q9[c+ub.b+i])e.ap(c,i.toString(),m);};e.ap=function(h,c,r){var
Pa=e.q9;var
Ga=new
e();Ga.loadXML(r);Ga.nM=h;Ga.fu=jsx3.util.Locale.valueOf(c);Pa[h+ub.b+c]=Ga;if(c){var
Va=Ga.fu.getSearchPath();for(var
ab=1;ab<Va.length;ab++){var
Ca=Pa[h+ub.b+Va[ab]];if(Ca){Ga.addParent(Ca);return;}}Na.error(ub.i+h+ub.j+c+ub.k);}};e.yB=function(g,q){var
la=q.getAttribute(ub.l);if(e.uv[g]==null)e.uv[g]={};if(la!=null){var
Aa=la.split(ub.m);for(var
z=0;z<Aa.length;z++)if(Aa[z])e.uv[g][Aa[z]]=true;}};j.getLocale=function(){return this.fu;};j.getPath=function(){return this.nM;};e.clearCache=function(a,g){if(a){delete e.uv[a];var
Ea=a+ub.b;for(var H in e.q9)if(H.indexOf(Ea)==0)delete e.q9[H];if(g){var
Q=g.keys();for(var
Ra=0;Ra<Q.length;Ra++)if(Q[Ra].indexOf(a)==0)g.clearById(Q[Ra]);}}else{e.uv={};e.q9={};}};});jsx3.Class.defineClass("jsx3.lang.System",null,null,function(g,o){var
ub={a:"_",b:"jsx:///locale/locale.xml",c:"",d:" ",e:"_jsx_",f:"namespace",g:"apppathrel",h:"apppath",i:"3.9.1_971mx",j:/\d/,k:"3.9.1"};var
jb=jsx3.app.PropsBundle;g.LJSS=new
jsx3.app.Properties();g.JSS=new
jsx3.app.Properties();g.JSS.addParent(g.LJSS);g.m6={};g.getProperty=function(r){return g.JSS.get(r);};g.getLocale=function(){if(g.fu==null&&jsx3.util.Locale){var
ba=jsx3.app.Browser.getLocaleString();if(ba){var
Eb=ba.split(ub.a);g.fu=new
jsx3.util.Locale(Eb[0],Eb[1]);}else g.fu=jsx3.util.Locale.US;}return g.fu;};g.setLocale=function(l){if(l!=g.fu){g.JSS.removeParent(g.getLocaleProperties());g.fu=l;g.JSS.addParent(g.getLocaleProperties());}};g.reloadLocalizedResources=function(){if(jb){var
Nb=g.LJSS.getParents();g.LJSS.removeAllParents();for(var
Bb=0;Bb<Nb.length;Bb++)g.LJSS.addParent(jb.getPropsFT(Nb[Bb].getPath(),g.getLocale(),jsx3.getSystemCache()));}};g.WJ=jsx3.resolveURI(ub.b);g.getLocaleProperties=function(j){return jb.getPropsFT(g.WJ,j,jsx3.getSystemCache());};g.getMessage=function(r,i){var
Y=g.LJSS.get(r);var
x=ub.c;if(arguments.length>1){var
z=jsx3.Method.argsAsArray(arguments,1);if(Y!=null&&jsx3.util.MessageFormat){try{var
ka=new
jsx3.util.MessageFormat(Y);return ka.format(z);}catch(Kb){}}else x=ub.d+z.join(ub.d);}if(Y==null)Y=r;return Y+x;};g.GO=function(r,d){var
mb=null;if(r!=null)if(r.indexOf(ub.e)==0){var
eb=jsx3.app.DOM.getNamespaceForId(r);if(d&&d!=eb)return null;if(g.m6[eb])mb=g.m6[eb].getJSXById(r);}else if(d){if(g.m6[d])mb=g.m6[d].getJSXByName(r);}else for(var Ha in g.m6)if((mb=g.m6[Ha].getJSXByName(r))!=null)return mb;return mb;};g.getApp=function(s){return g.m6[s];};g.getAllApps=function(){var
Gb=[];for(var bb in g.m6)Gb.push(g.m6[bb]);return Gb;};g.registerApp=function(p){var
vb=p.getEnv(ub.f);jsx3.lang.setVar(vb,p);g.m6[vb]=p;};g.deregisterApp=function(p){var
ha=p.getEnv(ub.f);var
Lb=jsx3.lang.getVar(ha);if(p==Lb)jsx3.lang.setVar(p.getEnv(ub.f),null);if(g.m6[ha]==p)delete g.m6[ha];};g.activateApp=function(q){jsx3.registerApp(q);};g.getAppByPath=function(f){for(var H in g.m6){var
kb=g.m6[H];if(kb.getEnv(ub.g)==f||kb.getEnv(ub.h)==f)return kb;}return null;};g.bM=[];g.Wz={};g.registerAddin=function(b,a){jsx3.lang.setVar(b,a);g.bM.push(a);g.Wz[a.getKey()]=a;};g.getAddins=function(){return g.bM.concat();};g.getAddin=function(i){return g.Wz[i];};g.getVersion=function(){var
ca=ub.i;return ca.match(ub.j)?ca:ub.k;};});jsx3.GO=jsx3.lang.System.GO;jsx3.getApp=jsx3.lang.System.getApp;jsx3.registerApp=jsx3.lang.System.registerApp;jsx3.activateApp=jsx3.lang.System.activateApp;jsx3.deregisterApp=jsx3.lang.System.deregisterApp;jsx3.getVersion=jsx3.lang.System.getVersion;jsx3.Class.defineClass("jsx3.app.DOM",null,[jsx3.util.EventDispatcher],function(e,q){var
ub={a:"change",b:"_jsx_",c:"_",d:"mH",e:"QH",f:""};e.Xz={};e.U4={};e.j6={};e.Z8=0;e.TYPEADD=0;e.TYPEREMOVE=1;e.TYPEREARRANGE=2;e.EVENT_CHANGE=ub.a;e.newId=function(d){var
la=e.D9(d);return ub.b+la+ub.c+(e.NU(la)).toString(36);};e.D9=function(m){if(e.U4[m]==null){var
Eb=(e.Z8++
).toString(36);e.U4[m]=Eb;e.j6[Eb]=m;}return e.U4[m];};e.NU=function(m){if(e.Xz[m]==null)e.Xz[m]=0;return ++e.Xz[m];};e.getNamespaceForId=function(i){var
G=i.substring(5,i.indexOf(ub.c,5));return e.j6[G];};q.init=function(){this.mH={};this.QH={};};q.destroy=function(){delete this[ub.d];delete this[ub.e];};q.get=function(d){return this.mH[d]||this.getByName(d);};q.getByName=function(i){var
Jb=this.QH[i];return Jb!=null?Jb.get(0):null;};e.l9=[];q.getAllByName=function(j){var
W=this.QH[j];return W!=null?W.toArray():e.l9;};q.getById=function(f){return this.mH[f];};q.add=function(b){this.mH[b.getId()]=b;var
gb=b.getName();if(gb!=null&&gb!==ub.f)if(this.QH[gb]==null)this.QH[gb]=jsx3.util.List.wrap([b]);else this.QH[gb].add(b,0);};q.remove=function(i){delete this.mH[i.getId()];var
ka=this.QH[i.getName()];if(ka!=null)ka.remove(i);};q.onNameChange=function(d,s){var
O=this.QH[s];if(O!=null)O.remove(d);var
ta=d.getName();if(ta!=null&&ta!==ub.f)if(this.QH[ta]==null)this.QH[ta]=jsx3.util.List.wrap([d]);else this.QH[ta].add(d,0);};q.onChange=function(f,l,g){this.publish({subject:ub.a,type:f,parentId:l,jsxId:g});};});jsx3.DOM=jsx3.app.DOM;jsx3.Class.defineClass("jsx3.app.Server",null,[jsx3.util.EventDispatcher,jsx3.net.URIResolver],function(o,a){var
ub={A:"@Solid Light",Aa:"height:",B:"GUIREF",Ba:"HEIGHT",C:"NAMESPACE",Ca:'<div id="',D:"JSXINVISIBLE",Da:'" style="position:',E:'<div class="jsx30block jsx30env">',Ea:'"></div>',F:"<b>Version:</b> ",Fa:"serv.err_paint",G:"3.9.1; build 971mx",Ga:"onload",H:"<br/>",Ha:"serv.err_onload",I:"<b>XML Version:</b> ",Ia:"jsx3.app.Server.help.",J:"<b>System Locale:</b> ",Ja:"jsx3.app.Server.help",K:"<b>Browser:</b> ",Ka:"R9",L:"<b>Operating System:</b> ",La:"objectseturl",M:" (",Ma:"px",N:")",Na:"?",O:"<hr/>",Oa:"&",P:"<b>",Pa:"css",Q:"namespace",Qa:"jss",R:"</b>",Ra:"ljss",S:"<div>",Sa:"serv.err_jss",T:"<b>Path:</b> ",Ta:"xml",U:"version",Ua:"xsl",V:"</div>",Va:"script",W:"config.xml",Wa:"services",X:"JSX_SETTINGS",Xa:"jsx3.net.Service",Y:"serv.err_set",Ya:"strType",Z:"apppath",Za:"serv.err_unload",_:"onunload",_a:"includes",a:"inited",aa:"serv.err_onun",ab:"serv.err_badid",b:"help",ba:"jsx3.gui.Painted",bb:"=",c:"JSX",ca:"LIQUID",cb:"; expires=",d:"jsxsettings",da:"_jsxje",db:"; path=",e:/\/*$/,ea:"change",eb:"; domain=",f:"",fa:"keydown",fb:"; secure",g:"undefined",ga:"checkHotKeys",gb:"; ",h:"object",ha:"jsx3.gui.Alerts",hb:"jsx3.gui.Window",i:"/",ia:"BODYHOTKEYS",ib:"JSXWINDOWS",j:"JSXAPPS",ja:"C2",jb:"strName",k:"liquid",ka:"jsx3.app.Server.",kb:"serv.win_err",l:"eventsvers",la:"();",lb:"serv.win_notwin",m:"jsxversion",ma:"if (jsx3.EventHelp.isDragging()) jsx3.EventHelp.reset();",mb:"serv.win_name",n:"3.1",na:"OVERFLOW",nb:"3.2",o:"jsxabspath",oa:"overflow:auto;",ob:"apppathuri",p:"serv.no_ns",pa:"overflow:hidden;",pb:"apppathabs",q:"caption",qa:"POSITION",qb:"apppathrel",r:"cancelrightclick",ra:"relative",rb:"jsxapp",s:"return false;",sa:"absolute",sb:/\//g,t:"cancelerror",ta:"left:",tb:"!",u:"jsx3.gui.Block",ua:"LEFT",ub:/!/g,v:"JSXROOT",va:";",vb:"default_locale",w:"jsxbgcolor",wa:"top:",wb:"addins",x:"@Solid DarkShadow",xa:"TOP",xb:" ",y:"JSXBODY",ya:"width:",yb:":",z:"100%",za:"WIDTH",zb:"3.00.00"};jsx3.util.EventDispatcher.jsxclass.mixin(o);var
Pa=jsx3.gui.Event;var
Qa=jsx3.net.URIResolver;var
Sa=jsx3.app.Browser;var
ea=null;var
na=jsx3.util.Logger.getLogger(o.jsxclass.getName());o.Z_DIALOG=2;o.Z_DRAG=3;o.Z_MENU=4;o.INITED=ub.a;o.HELP=ub.b;o.TV=ub.c;o.TL=new
jsx3.util.List();a.JSXROOT=null;a.JSXBODY=null;a.Cache=null;a.ENVIRONMENT=null;a.DOM=null;a.JSS=null;a.init=function(m,h,p,r){this.DOM=new
jsx3.app.DOM();this.Cache=new
jsx3.app.Cache();this.Cache.addParent(jsx3.getSharedCache());if(r){if(r.jsxsettings){this._jsxkX=r.jsxsettings;delete r[ub.d];}var
U={};for(var W in r)U[W.toLowerCase()]=r[W];r=U;}else r={};this.ENVIRONMENT=r;r.apppath=m.replace(ub.e,ub.f);var
Va=this.getSettings();var
ba=Va.get();for(var W in ba){var
fa=W.toLowerCase();if(typeof r[fa]==ub.g&&typeof ba[W]!=ub.h)r[fa]=ba[W];}r.apppathuri=new
jsx3.net.URI(r.apppath+ub.i);if(r.jsxappbase)r.apppathuri=r.apppathuri.resolve(r.jsxappbase);var
S=r.apppath.indexOf(ub.j);if(S>=0)r.apppathrel=r.apppath.substring(S+"JSXAPPS".length+1);r.apppathabs=(Sa.getLocation()).resolve(r.apppathuri);if(r[ub.k]==null)r[ub.k]=true;if(r[ub.l]==null)r[ub.l]=3;if(r[ub.m]==null)r[ub.m]=ub.n;r.abspath=jsx3.getEnv(ub.o);r.guiref=h;r.namespace=r.jsxappns||r.namespace;if(r.namespace==null)throw new
jsx3.Exception(jsx3._msg(ub.p,m));if(h&&this.getEnv(ub.q))h.ownerDocument.title=this.getEnv(ub.q);if(h&&this.getEnv(ub.r))h.ownerDocument.oncontextmenu=new
Function(ub.s);if(this.getEnv(ub.t))jsx3.NativeError.initErrorCapture();o.TL.add(this);jsx3.registerApp(this);this.JSS=new
jsx3.app.Properties();this.LJSS=new
jsx3.app.Properties();this.JSS.addParent(this.LJSS);this.JSS.addParent(jsx3.System.JSS);o.publish({subject:o.INITED,target:this});if(p)this.paint();};a.cP=function(){jsx3.require(ub.u);ea=jsx3.gui.Block;if(this.JSXROOT)return;var
xb=this.JSXROOT=this._r(ub.v);xb.setDynamicProperty(ub.w,ub.x);xb.setRelativePosition(0);xb.setOverflow(3);xb.setAlwaysCheckHotKeys(true);xb.setIndex(1);var
C=this.JSXBODY=new
ea(ub.y,0,0,ub.z,ub.z,ub.f);C.setDynamicProperty(ub.w,ub.A);C.setRelativePosition(0);C.setZIndex(1);(C.setOverflow(3)).setIndex(0);xb.setChild(C);};a.onResize=function(){if(jsx3.CLASS_LOADER.IE){window.clearTimeout(this.resize_timeout_id);var
I=this;this.resize_timeout_id=window.setTimeout(function(){I.vM();},250);}else this.vM();};a.vM=function(){var
vb=this.getEnv(ub.B);if(vb)(this.getRootBlock()).Mc({left:0,top:0,parentwidth:vb.clientWidth,parentheight:vb.clientHeight},true);};a.getNextZIndex=function(s){if(this.sY==null){this.sY=[];this.sY[0]=0;this.sY[1]=1000;this.sY[o.Z_DIALOG]=5000;this.sY[o.Z_DRAG]=7500;this.sY[o.Z_MENU]=10000;this.sY[5]=25000;}return this.sY[s]++;};o.allServers=function(){return o.TL.toArray();};a._r=function(g){if(this._jsxje==null)this._jsxje=[];var
ab=new
ea(g,0,0,ub.z,ub.z,ub.f);ab._jsxoo=this.getEnv(ub.C);ab._jsxid=jsx3.app.DOM.newId(this.getEnv(ub.C));ab._jsxYn=this;this.DOM.add(ab);this._jsxje.push(ab);return ab;};a.getInvisibleRoot=function(){if(this.INVISIBLE==null)this.INVISIBLE=this._r(ub.D);return this.INVISIBLE;};a.getEnv=function(q){var
Mb=this.ENVIRONMENT;return Mb[q]||Mb[q.toLowerCase()];};o.C2=function(r){var
G=[ub.E];G.push(ub.F,ub.G,ub.H);G.push(ub.I,jsx3.getXmlVersion(),ub.H);G.push(ub.J,(jsx3.System.getLocale()).getDisplayName(),ub.H);G.push(ub.K,jsx3.CLASS_LOADER+ub.H);G.push(ub.L,jsx3.app.Browser.getSystem()+ub.M+navigator.userAgent+ub.N);G.push(ub.O);var
ua=null;var
Lb=o.allServers();for(var
x=0;x<Lb.length;x++){var
Va=Lb[x];G.push(ub.P,Va.getEnv(ub.Q),ub.R,ub.S);G.push(ub.T,Va.getAppPath(),ub.H);G.push(ub.F,Va.getEnv(ub.U),ub.H);G.push(ub.V);if(ua==null){ua=Va.getRootBlock();if(ua.getRendered()==null)ua=null;}}G.push(ub.V);G=G.join(ub.f);if(ua)ua.showSpy(G,Math.round((ua.getRendered()).clientWidth/2),Math.round((ua.getRendered()).clientHeight/2-100));else window.alert(G);};a.getSettings=function(){if(this._jsxkX==null){var
wa=(this.getCache()).getOrOpenDocument(jsx3.resolveURI(this.getAppPath()+ub.i+ub.W),ub.X);if(wa.hasError()){na.error(jsx3._msg(ub.Y,this,wa.getError()));wa=null;}this._jsxkX=new
jsx3.app.Settings(wa);}return this._jsxkX;};a.getAppPath=function(){return this.getEnv(ub.Z);};o.wM=function(q){return q instanceof jsx3.gui.WindowBar&&q.getType()==3;};a.getTaskBar=function(f){if(!jsx3.gui.WindowBar)return null;if(f==null)f=this.JSXROOT;return f.findDescendants(o.wM,false,false,false,true);};a.destroy=function(){var
Kb=this.getEnv(ub._);if(Kb)try{this.eval(Kb);}catch(Nb){na.error(jsx3._msg(ub.aa,this),jsx3.NativeError.wrap(Nb));}if(jsx3.Class.forName(ub.ba))jsx3.gui.Painted.Box.unregisterServer(this,this.getEnv(ub.ca));if(this.JSXROOT){var
Fb=this.JSXROOT.getRendered();if(Fb){if(Fb.parentNode.id==o.TV)Fb=Fb.parentNode;jsx3.html.removeNode(Fb);}}if(this._jsxje)for(var
Ya=0;Ya<this._jsxje.length;Ya++){var
G=this._jsxje[Ya];G.removeChildren();}delete this[ub.da];this.DOM.unsubscribeAllFromAll();this.DOM.destroy();this.Cache.unsubscribeAll(ub.ea);this.Cache.destroy();jsx3.deregisterApp(this);o.TL.remove(this);Pa.unsubscribe(ub.fa,this,ub.ga);this.ENVIRONMENT={};};a.paint=function(m){jsx3.require(ub.ha,ub.u);ea=jsx3.gui.Block;if(!jsx3.gui.Alerts.jsxclass.isAssignableFrom(o.jsxclass))o.jsxclass.addInterface(jsx3.gui.Alerts.jsxclass);jsx3.html.getMode(this.getEnv(ub.B));this.cP();jsx3.gui.Painted.Box.registerServer(this,this.getEnv(ub.ca));if(this.getEnv(ub.ia))Pa.subscribe(ub.fa,this,ub.ga);var
Aa=ub.ja;this.registerHotKey(new
Function(ub.ka+Aa+ub.la),74,true,true,true);this.registerHotKey(new
Function(ub.ma),27,false,false,false);this._regHelpKey();var
hb=this.getEnv(ub.B);if(hb){var
Ba=ub.f;var
ya=this.getEnv(ub.na);if(ya==1){Ba=ub.oa;}else if(ya==2)Ba=ub.pa;var
I,mb=ub.f,ga=ub.f;if(this.getEnv(ub.qa)==0){I=ub.ra;}else{I=ub.sa;mb=ub.ta+this.getEnv(ub.ua)+ub.va;ga=ub.wa+this.getEnv(ub.xa)+ub.va;}var
u=ub.ya+this.getEnv(ub.za)+ub.va;var
Db=ub.Aa+this.getEnv(ub.Ba)+ub.va;hb.innerHTML=ub.Ca+o.TV+ub.Da+I+ub.va+Ba+mb+ga+u+Db+ub.Ea;hb=hb.lastChild;hb.className=jsx3.CLASS_LOADER.getCssClass();this.JSXROOT.pj({left:0,top:0,parentwidth:hb.clientWidth,parentheight:hb.clientHeight});if(hb)hb.innerHTML=this.JSXROOT.paint();}try{this.Ji(m);}catch(Kb){na.fatal(jsx3._msg(ub.Fa,this),jsx3.NativeError.wrap(Kb));}try{this.eval(this.getEnv(ub.Ga));}catch(Kb){na.fatal(jsx3._msg(ub.Ha,this),jsx3.NativeError.wrap(Kb));}};a._regHelpKey=function(){var
Ka=this.getDynamicProperty(ub.Ia+jsx3.app.Browser.getSystem())||this.getDynamicProperty(ub.Ja);if(Ka)this.registerHotKey(jsx3.gui.HotKey.valueOf(Ka,jsx3.makeCallback(ub.Ka,this)));};a.Ji=function(s){var
da=null;if(s){da=this.JSXBODY.loadXML(s,true);}else{var
db=this.getEnv(ub.La);if(db)da=this.JSXBODY.load(db,true);}if(da)da.setPersistence(1);};a.setDimensions=function(f,i,n,j){if(jsx3.$A.is(f)){i=f[1];n=f[2];j=f[3];f=f[0];}var
da=this.JSXROOT.getRendered();if(da){if(f)da.parentNode.style.left=f+ub.Ma;if(i)da.parentNode.style.top=i+ub.Ma;if(n)da.parentNode.style.width=n+ub.Ma;if(j)da.parentNode.style.height=j+ub.Ma;}};a.loadInclude=function(d,e,r,l){if(e==null)e=ub.f;var
S=l?((d+ub.f).indexOf(ub.Na)==-1?ub.Na:ub.Oa)+(new
Date()).valueOf():ub.f;if(r==ub.Pa){jsx3.CLASS_LOADER.loadResource(d+S,e,r);}else if(r==ub.Qa||r==ub.Ra&&!jsx3.app.PropsBundle){var
Ha=this.Cache.openDocument(d,e);if(Ha.hasError()){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Sa,+d,Ha.getError()));}else (this.getProperties()).loadXML(Ha,e);}else if(r==ub.Ra){var
Z=this.getCache();if(l){var
Nb=this.LJSS.getParents();for(var
Bb=0;Bb<Nb.length;Bb++)if(Nb[Bb].getPath()==d)this.LJSS.removeParent(Nb[Bb]);jsx3.app.PropsBundle.clearCache(d,Z);}this.LJSS.addParent(jsx3.app.PropsBundle.getPropsFT(d,this.getLocale(),Z));}else if(r==ub.Ta||r==ub.Ua){return this.Cache.openDocument(d,e);}else if(r==ub.Va){this.unloadInclude(e);jsx3.CLASS_LOADER.loadResource(d+S,e,r);}else if(r==ub.Wa){jsx3.require(ub.Xa);return (new
jsx3.net.Service(d)).setNamespace(this);}else throw new
jsx3.IllegalArgumentException(ub.Ya,r);};a.unloadInclude=function(c){var
ab=(this.getRootDocument()).getElementById(c);try{if(ab)ab.parentNode.removeChild(ab);}catch(Kb){na.warn(jsx3._msg(ub.Za,c,this),jsx3.NativeError.wrap(Kb));}};a.loadResource=function(r){var
da=this.getSettings();var
jb=((jsx3.util.List.wrap(da.get(ub._a))).filter(function(i){return i.id==r;})).toArray(true);var
ob;for(var
ma=0;ma<jb.length;ma++){var
rb=jb[ma];ob=this.loadInclude(this.resolveURI(rb.src),rb.id,rb.type);}if(jb.length==0)na.warn(jsx3._msg(ub.ab,r));return ob;};a.setDynamicProperty=function(e,m){var
Va=this.getProperties();Va.set(e,m);};a.getDynamicProperty=function(h,s){var
X=(this.getProperties()).get(h);if(arguments.length>1&&jsx3.util.MessageFormat)try{var
Hb=new
jsx3.util.MessageFormat(X);var
N=new
Array(arguments.length-1);for(var
Ma=1;Ma<arguments.length;Ma++)N[Ma-1]=arguments[Ma];return Hb.format(N);}catch(Kb){}return X;};a.setCookie=function(l,g,r,c,m,j,f){(this.getRootDocument()).cookie=l+ub.bb+(f?g:escape(g))+(r?ub.cb+r.toGMTString():ub.f)+(c?ub.db+c:ub.f)+(m?ub.eb+m:ub.f)+(j?ub.fb:ub.f);};a.getCookie=function(d,q){var
wb=this.getRootDocument();var
Cb=wb.cookie;var
H=d+ub.bb;var
Kb=Cb.indexOf(ub.gb+H);if(Kb==-1){Kb=Cb.indexOf(H);if(Kb!=0)return null;}else Kb=Kb+2;var
Ka=wb.cookie.indexOf(ub.va,Kb);if(Ka==-1)Ka=Cb.length;var
Ya=Cb.substring(Kb+H.length,Ka);return q?Ya:unescape(Ya);};a.deleteCookie=function(d,n,b){this.setCookie(d,ub.f,new
Date(1970,0,1),n,b);};a.getRootBlock=function(){if(this.JSXROOT==null)this.cP();return this.JSXROOT;};a.getAlertsParent=function(){return this.getRootBlock();};a.getBodyBlock=function(){if(this.JSXROOT==null)this.cP();return this.JSXBODY;};a.getRootObjects=function(){return (this.JSXBODY.getChildren()).concat();};a.getCache=function(){return this.Cache;};a.getProperties=function(){return this.JSS;};a.getDOM=function(){return this.DOM;};a.getJSX=function(i){return this.DOM.get(i);};a.getJSXByName=function(p){return this.DOM.getByName(p);};a.getJSXById=function(m){return this.DOM.getById(m);};a.beep=function(){if(!jsx3.gui.WindowBar)return;var
Db=this.JSXROOT.findDescendants(function(s){return s instanceof jsx3.gui.WindowBar&&s.getType()==2;},false,false);if(Db!=null)Db.beep();};a.createAppWindow=function(m){jsx3.require(ub.hb);if(this.WINDOWS==null)this.WINDOWS=this._r(ub.ib);if(this.WINDOWS.getChild(m)!=null)throw new
jsx3.IllegalArgumentException(ub.jb,m);var
ba=new
jsx3.gui.Window(m);this.WINDOWS.setChild(ba);return ba;};a.loadAppWindow=function(n,j){jsx3.require(ub.hb);if(this.WINDOWS==null)this.WINDOWS=this._r(ub.ib);var
fa=null;if(n instanceof jsx3.xml.Entity)fa=this.WINDOWS.loadXML(n,false,j);else fa=this.WINDOWS.load(n,false,j);if(fa==null)throw new
jsx3.Exception(jsx3._msg(ub.kb,n));if(!(fa instanceof jsx3.gui.Window)){(fa.getParent()).removeChild(fa);throw new
jsx3.Exception(jsx3._msg(ub.lb,n,fa.getClass()));}if(this.WINDOWS.getChild(fa.getName())!=fa){(fa.getParent()).removeChild(fa);throw new
jsx3.Exception(jsx3._msg(ub.mb,n,fa.getName()));}return fa;};a.getAppWindow=function(f){if(this.WINDOWS!=null)return this.WINDOWS.getChild(f);return null;};a.getDocumentOf=function(e){var
Kb=e;while(Kb!=null){if(jsx3.gui.Window&&Kb instanceof jsx3.gui.Window)return Kb.getDocument();if(Kb._jsxYn!=null)return this.getRootDocument();Kb=Kb.getParent();}return this.getRootDocument();};a.getRootDocument=function(){var
ma=this.getEnv(ub.B);return ma!=null?ma.ownerDocument:null;};a.getRenderedOf=function(l){var
D=l.getId();var
Jb=this.getRootDocument();if(Jb==null)return null;var
lb=Jb.getElementById(D);if(lb==null&&this.WINDOWS!=null){var
Kb=this.WINDOWS.getChildren();for(var
U=0;lb==null&&U<Kb.length;U++){var
O=Kb[U].getDocument();if(O)lb=O.getElementById(D);}}return lb;};a.registerHotKey=function(b,m,p,f,s){return (this.getRootBlock()).registerHotKey(b,m,p,f,s);};a.checkHotKeys=function(j){return (this.getRootBlock()).checkHotKeys(j.event);};a.getServer=function(){return this;};a.isAtLeastVersion=function(r){return jsx3.util.compareVersions(this.getEnv(ub.m),r)>=0;};a.resolveURI=function(m){var
w=jsx3.net.URI.valueOf(m);if(this.isAtLeastVersion(ub.nb)&&!Qa.isAbsoluteURI(w)){var
qb=this.getEnv(ub.ob);w=qb.resolve(w);}return Qa.DEFAULT.resolveURI(w);};a.getUriPrefix=function(){return (this.getEnv(ub.ob)).toString();};a.relativizeURI=function(p,d){var
Jb=Sa.getLocation();var
Ib=this.getEnv(ub.pb);var
wb=Ib.relativize(Jb.resolve(p));if(wb.isAbsolute()||d){return wb;}else{var
Ta=this.getEnv(ub.qb);if(Ta){return jsx3.net.URI.fromParts(ub.rb,null,Ta.replace(ub.sb,ub.tb),null,ub.i+wb.getPath(),wb.getQuery(),wb.getFragment());}else return jsx3.net.URI.fromParts(null,null,null,null,this.getEnv(ub.Z)+ub.i+wb.getPath(),wb.getQuery(),wb.getFragment());}};Qa.register(ub.rb,function(k){var
B=k.getHost();if(B){var
y=B.replace(ub.ub,ub.i);var
ua=jsx3.System.getAppByPath(y);return ua||new
o.Resolver(y);}return Qa.DEFAULT;});a.getLocale=function(){if(this.fu==null)this.fu=this.getDefaultLocale();return this.fu!=null?this.fu:jsx3.System.getLocale();};a.setLocale=function(j){this.fu=j;};a.getDefaultLocale=function(){var
_a=(this.getSettings()).get(ub.vb);if(_a==null)return null;_a=jsx3.util.strTrim(_a.toString());return _a.length>0&&jsx3.util.Locale?jsx3.util.Locale.valueOf(_a):null;};a.reloadLocalizedResources=function(){var
v=this.LJSS.getParents();this.LJSS.removeAllParents();for(var
Ab=0;Ab<v.length;Ab++){var
w=jsx3.app.PropsBundle.getPropsFT(v[Ab].getPath(),this.getLocale(),this.getCache());this.LJSS.addParent(w);}};a.R9=function(c){var
ra=jsx3.html.getJSXParent(c.srcElement(),this);if(!ra)ra=this.JSXROOT;return ra?this.invokeHelp(ra):false;};a.invokeHelp=function(p){var
Ea=null;while(p&&!Ea){Ea=p.getHelpId();p=p.getParent();}if(Ea)this.publish({subject:o.HELP,helpid:Ea,model:p});return Boolean(Ea);};a.getAddins=function(){var
Za=[];var
Db=(this.getSettings()).get(ub.wb);if(Db)for(var
Bb=0;Bb<Db.length;Bb++){var
X=jsx3.System.getAddin(Db[Bb]);if(X)Za.push(X);}return Za;};a.toString=function(){return this.jsxsuper()+ub.xb+this.getAppPath()+ub.yb+this.getEnv(ub.Q);};o.getVersion=function(){return ub.zb;};});if(jsx3.gui.Alerts)jsx3.app.Server.jsxclass.addInterface(jsx3.gui.Alerts.jsxclass);jsx3.Server=jsx3.app.Server;jsx3.Class.defineClass("jsx3.app.Server.Resolver",null,[jsx3.net.URIResolver],function(d,b){var
ub={a:"jsxhomepath",b:"JSXAPPS",c:"/",d:/!/g,e:"jsxapp"};var
Ba=jsx3.net.URIResolver;b.init=function(m){this._host=m;this._uri=new
jsx3.net.URI(jsx3.getEnv(ub.a)+ub.b+ub.c+m.replace(ub.d,ub.c)+ub.c);};b.resolveURI=function(j){var
Ka=jsx3.net.URI.valueOf(j);if(!Ba.isAbsoluteURI(Ka))Ka=Ba.DEFAULT.resolveURI(this._uri.resolve(Ka));return Ba.DEFAULT.resolveURI(Ka);};b.getUriPrefix=function(){return this._uri.toString();};b.relativizeURI=function(f,m){var
sb=this._uri.relativize(f);if(sb.isAbsolute()||m)return sb;else return jsx3.net.URI.fromParts(ub.e,null,this._host,null,ub.c+sb.getPath(),sb.getQuery(),sb.getFragment());};b.toString=function(){return this._uri.toString();};});jsx3.Class.defineClass("jsx3.app.Model",null,[jsx3.util.EventDispatcher],function(g,j){var
ub={A:/^\[(\w+)(\(\))?(\*)?=\"?(.*?)\"?\]$/,Aa:"jsx1:strings | jsx1:variants | jsx1:dynamics | jsx1:properties | jsx1:events | jsx1:xslparameters",B:"undefined",Ba:"_jsxSi",C:"serialization",Ca:"jsxcustom",D:"jsxversion",Da:"_jsxHj",E:"dynamics",Ea:"jsxxslparams",F:"properties",Fa:"onafter",G:"events",Ga:"model.onafter",H:"xslparameters",Ha:"response",I:"object",Ia:"error",J:"type",Ja:"timeout",K:"variants",Ka:"@",L:"strings",La:" ",M:"model.async_convt",Ma:"/",N:"include",Na:"3.00.00",O:"src",P:"async",Q:"true",R:"false",S:"model.child_notarr",T:"_jsx",U:"'",V:"[",W:",",X:"]",Y:"new Date(",Z:")",_:"model.bad_comp",a:"urn:tibco.com/v3.0",aa:"model.bad_compobj",b:"http://xsd.tns.tibco.com/gi/cif/2006",ba:"jsx3.xml.Template",c:"JSXFRAG",ca:"name",d:"jsx:///xsl/cif_resolver.xsl",da:"icon",e:"jsx3.app.Model",ea:"description",f:"string",fa:"onBeforeDeserialize",g:"url",ga:"onAfterDeserialize",h:"_jsxDW",ha:"objXML",i:"vntItem",ia:"model.bad_vers",j:"_jsxxK",ja:"xmlns",k:"intIndex",ka:"model.future_vers",l:"number",la:"/jsx1:serialization/",m:".",ma:"xmlns:jsx1='",n:"model.clone_frag",na:"jsx1:onBeforeDeserialize",o:"function",oa:"model.onbefore",p:"unshift",pa:"jsx1:object | ",q:"push",qa:"jsx1:objects/jsx1:object | /jsx1:object",r:/(\b\w+\b)|(\#[a-zA-Z_]\w*)|(\.[\w\-]+)|(\:[\w\-]+(?:\([^\)]*\))?)|(\[\w+(?:\(\))?\*?=[^\]]*\])|(\*)|( *> *)|( +)/g,ra:"jsx1:",s:"strExpr",sa:"strKey",t:/_/g,ta:"jsx1:variants/@jsxloadtype",u:"",ua:"jsx3.gui.Painted",v:/\s+/,va:"model.load_cls",w:":first",wa:"model.bad_type",x:":last",xa:"jsx1:object | jsx1:include | jsx1:children/jsx1:object | jsx1:children/jsx1:include",y:/:nth(?:\-child)?\( *(\d+) *\)/,ya:"@{",z:/:instanceof\( *(\S+?) *\)/,za:"}"};var
ka=jsx3.xml.Entity;var
Sa=jsx3.xml.Document;var
G=jsx3.IllegalArgumentException;g.PERSISTNONE=0;g.PERSISTEMBED=1;g.PERSISTREF=2;g.PERSISTREFASYNC=3;g.LT_NORMAL=0;g.LT_SLEEP_PAINT=1;g.LT_SLEEP_DESER=2;g.LT_SLEEP_PD=3;g.LT_SHOW_PAINT=4;g.LT_SHOW_DESER=5;g.CURRENT_VERSION=ub.a;g.CIF_VERSION=ub.b;g.FRAGMENTNS=ub.c;g.ASYNC_LOAD_TIMEOUT=60000;g.XT=jsx3.resolveURI(ub.d);j._jsxid=null;j._jsxxK=null;j._jsxSZ=null;j._jsxoo=null;j._jsxYn=null;j._jsxDW=null;j._jsxX2=null;j._jsxFY=null;j._jsxhq=true;j.init=function(c,f){this.jsxsuper();this._jsxinstanceof=f==null?ub.e:f;this.jsxname=c;};j.getChild=function(f){var
da=null;if(this._jsxSZ!=null){if(typeof f==ub.f||isNaN(f)){var
Za=-1;var
Na=this.getChildren();var
yb=Na.length;for(var
Ta=0;Ta<yb;Ta++)if(f==Na[Ta].getName()){da=Ta;break;}}else da=f;if(da>=0&&da<this._jsxSZ.length)return this._jsxSZ[da];}return null;};j.getFirstChild=function(){return this.getChild(0);};j.getLastChild=function(){return this.getChild((this.getChildren()).length-1);};j.getNextSibling=function(){if(!this._jsxxK)return null;return this._jsxxK.getChild(this.getChildIndex()+1);};j.getPreviousSibling=function(){if(!this._jsxxK)return null;return this._jsxxK.getChild(this.getChildIndex()-1);};j.getChildren=function(){if(this._jsxSZ==null)this._jsxSZ=[];return this._jsxSZ;};j.getPersistence=function(){return this._jsxX2;};j.getPersistenceUrl=function(){return this.getMetaValue(ub.g);};j.setPersistence=function(c){this._jsxX2=c;return this;};j.setChild=function(o,q,h,i){if(!this.onSetChild(o)||!o.onSetParent(this))return false;var
ia=false;if(i==null&&this._jsxoo==null){i=ub.c;}else if(i!=null){ia=true;}else i=this._jsxoo;var
Ib=this.getServer();if(i!=ub.c&&Ib&&this._jsxoo==i){this.Yp(o,i,o._jsxDW!=null,Ib);}else this._jsxDW=1;var
ta=this._jsxSZ;if(!ta)ta=this._jsxSZ=[];ta[ta.length]=o;o._jsxxK=this;if(q==null)q=0;o._jsxX2=q;if(h&&(q==2||q==3))o.setMetaValue(ub.g,h.toString());this.onChildAdded(o);if(!ia&&i!=ub.c)(Ib.getDOM()).onChange(0,this.getId(),o.getId());return this;};j.onSetChild=function(f){return true;};j.onSetParent=function(r){return true;};j.onRemoveChild=function(p,c){};j.onChildAdded=function(b){};j.Yp=function(n,h,d,l){n._jsxoo=h;n.Pe(h);(l.getDOM()).add(n);if(d){delete n[ub.h];var
Fb=n.getChildren();var
O=Fb.length;for(var
kb=0;kb<O;kb++)n.Yp(Fb[kb],h,true,l);}};j.Pe=function(o){this._jsxid=jsx3.app.DOM.newId(o);};j.removeChild=function(r){var
Db=-1;if(!isNaN(r)){Db=Number(r);}else if(r instanceof jsx3.app.Model){Db=r._jsxxK==this?r.getChildIndex():-1;}else throw new
G(ub.i,r);var
x=this.getChild(Db);if(x!=null){var
Za=this.getServer();this.uy(Db,Za);this.onRemoveChild(x,Db);if(Za)(Za.getDOM()).onChange(1,this.getId(),x.getId());}};j.uy=function(r,o,l){if(r>=0&&r<(this.getChildren()).length){var
R=this.getChild(r);if(!l)R.Kj(this);var
ca=(R.getChildren()).length;for(var
mb=ca-1;mb>=0;mb--)R.uy(mb,o,true);if(o)(o.getDOM()).remove(R);delete R[ub.j];if(!l)this._jsxSZ.splice(r,1);else if(r==0)this._jsxSZ.splice(0,this._jsxSZ.length);R.onDestroy(this);}else throw new
G(ub.k,r);};j.removeChildren=function(p){var
D=this.getServer();if(p==null){p=(this.getChildren()).concat();for(var
O=p.length-1;O>=0;O--){p[O].Kj(this);this.uy(O,D,true);}}else{var
aa=null;p=p.concat();for(var
O=p.length-1;O>=0;O--){var
bb=p[O];if(typeof bb==ub.l){aa=bb;p[O]=this.getChild(aa);}else aa=bb.getChildIndex();this.uy(aa,D,false);}}if(p.length>0)this.onRemoveChild(p,null);return this;};j.getServer=function(){var
Ma=this;while(Ma){if(Ma._jsxYn)return Ma._jsxYn;Ma=Ma._jsxxK;}return null;};j._getLocale=function(){var
Ia=this.getServer();return Ia!=null?Ia.getLocale():jsx3.System.getLocale();};j.Nk=function(p,e){if(e)p=e.jsxclass.getName()+ub.m+p;return (jsx3.System.getLocaleProperties(this._getLocale())).get(p);};j.adoptChild=function(n,k,c){this.kE(n.getChildIndex(),n,k,c,false);};j.adoptChildrenFrom=function(s,h,b,l){if(!h)h=(s.getChildren()).concat();if(h.length>0){for(var
A=0;A<h.length;A++)this.kE(h[A].getChildIndex(),h[A],b,l,true);s.onRemoveChild(h,null);for(var
A=0;A<h.length;A++)this.onChildAdded(h[A]);}};j.OV=function(q,b){if(q==b||q==b-1)return false;var
ba=this.getChildren();var
N=q<b?b-1:b;var
ob=ba.splice(q,1);var
Bb=ba.splice(0,N);this._jsxSZ=Bb.concat(ob,ba);this.onChildAdded(ob[0]);var
ya=this.getServer();if(ya)(ya.getDOM()).onChange(2,this.getId(),b);return true;};j.insertBefore=function(d,l,r){var
X=true;if(!d._jsxxK||!l){X=this.setChild(d);}else if(d._jsxxK!=this)X=this.kE(d.getChildIndex(),d,false,true,true);if(X){if(l)X=this.OV(d.getChildIndex(),l.getChildIndex());if(r!==false)this.repaint();}return X;};j.kE=function(b,o,i,d,r){if(d){this.onSetChild(o);o.onSetParent(this);}else if(!this.onSetChild(o)||!o.onSetParent(this))return false;var
Ra=o._jsxxK;delete o[ub.j];if(o.clearBoxProfile)o.clearBoxProfile(true);if(Ra._jsxSZ!=null)Ra._jsxSZ.splice(b,1);o.Kj(Ra);if(!r)Ra.onRemoveChild(o,b);var
T=Ra.getServer();var
Bb=this.getServer();var
ib=T!=Bb;if(ib)this.nX(o,Ra,T,Bb);if(T)(T.getDOM()).onChange(1,Ra.getId(),o.getId());var
t=this._jsxSZ;if(!t)t=this._jsxSZ=[];t[t.length]=o;o._jsxxK=this;if(!r)this.onChildAdded(o);if(i!==false)this.Im(o,r&&Ra._jsxSZ.length>0);if(Bb)(Bb.getDOM()).onChange(0,this.getId(),o.getId());return this;};j.Im=function(f,d){};j.Kj=function(c){};j.nX=function(e,k,a,p){(a.getDOM()).remove(e);e._jsxoo=this._jsxoo;(p.getDOM()).add(e);e.onChangeServer(p,a);var
Mb=e.getChildren();for(var
wa=0;wa<Mb.length;wa++)e.nX(Mb[wa],null,a,p);};j.onChangeServer=function(h,i){};j.doClone=function(f,m){var
wb=m==2?(this.getServer()).getRootBlock():this._jsxxK;if(wb){var
sa=wb.rx(this.toXMLDoc(),m<1,f,null,null,m==2?ub.c:null);return sa?sa[0]:null;}else throw new
jsx3.Exception(jsx3._msg(ub.n,this));};j.getDescendantOfName=function(q,h,b){return this.findDescendants(function(k){return k.getName()==q;},h,false,b,false);};j.getFirstChildOfType=function(h,p){if(p){var
H=null;if(typeof h==ub.f)H=jsx3.Class.forName(h);else if(typeof h==ub.o&&h.jsxclass instanceof jsx3.Class)H=h.jsxclass;else if(h instanceof jsx3.Class)H=h;return this.findDescendants(function(b){return (b.getClass()).equals(H);},false,false,true,false);}else return this.findDescendants(function(i){return i.instanceOf(h);},false,false,true,false);};j.getDescendantsOfType=function(p,f){return this.findDescendants(function(h){return h.instanceOf(p);},false,true,f,false);};j.findDescendants=function(d,o,e,h,a){var
Pa=o?ub.p:ub.q;var
pb=e?[]:null;var
ya=a?[this]:(this.getChildren()).concat();while(ya.length>0){var
xb=ya.shift();if(d.call(null,xb))if(e)pb[pb.length]=xb;else return xb;if(!h)ya[Pa].apply(ya,xb.getChildren());}return pb;};j.selectDescendants=function(q,s){var
ua=ub.r;var
Va=jsx3.$A([this]);var
Lb=null;var
Xa=true;var
I=true;var
B=(this.getServer()).getRootBlock()==this;var
A=false;ua.lastIndex=0;var
Eb=0,eb=null;while((eb=ua.exec(q))&&!A){if(Eb!=eb.index)throw new
G(ub.s,q);var
ja=null;if(eb[1]){if(Lb)throw new
G(ub.s,q);var
zb=eb[1].replace(ub.t,ub.m);ja=(function(m){return (m.getClass()).getName()==zb;});}else if(eb[2]){var
ga=eb[2].substring(1);if(B){Lb=jsx3.$A(((this.getServer()).getDOM()).getAllByName(ga));}else ja=(function(o){return o.getName()==ga;});}else if(eb[3]){var
zb=eb[3].substring(1);ja=(function(k){return typeof k.getClassName==ub.o&&(jsx3.$A((k.getClassName()||ub.u).split(ub.v))).contains(zb);});}else if(eb[4]){if(eb[4]==ub.w){ja=(function(k){return k.getChildIndex()==0;});}else if(eb[4]==ub.x){ja=(function(m){var
vb=(m.getParent()).getChildren();return m===vb[vb.length-1];});}else if(ub.y.test(eb[4])){var
Ua=parseInt(RegExp.$1);ja=(function(f){return f.getChildIndex()==Ua;});}else if(ub.z.test(eb[4])){var
vb=jsx3.Class.forName(RegExp.$1);ja=(function(a){return vb&&a.instanceOf(vb);});}else throw new
G(ub.s,q);}else if(eb[5]){ub.A.test(eb[5]);var
nb=RegExp.$1,C=RegExp.$2,bb=RegExp.$3,ba=RegExp.$4;ja=(function(b){var
sa=C?b[nb]():b[nb];sa=sa==null?ub.u:String(sa);return bb?ba.length>0&&sa.indexOf(ba)>=0:sa===ba;});}else if(eb[6]){ja=(function(d){return true;});}else if(!Lb)throw new
G(ub.s,q);else if(Lb.length==0)A=true;else{Va=Lb;Lb=null;Xa=Boolean(eb[8]);I=(B=false);}if(ja)if(Lb)Lb=Lb.filter(ja);else{Lb=jsx3.$A();Va.each(function(n){Lb.addAll(n.findDescendants(ja,false,true,!Xa,I));});Lb=Lb.unique();}Eb=ua.lastIndex;}if(!A&&Eb!=q.length)throw new
G(ub.s,q);return s?Lb[0]:Lb;};j.onDestroy=function(i){this.z1();};j.z1=function(){var
Gb=this.getName();var
t=this._jsxgd;if(t&&t.Md[Gb]==this)delete t.Md[Gb];};j.getId=function(){return this._jsxid;};j.getChildIndex=function(){var
O=this._jsxxK;if(O!=null)return jsx3.util.arrIndexOf(O.getChildren(),this);return -1;};j.getName=function(){return this.jsxname;};j.setName=function(q){if(q!=null){var
N=this.jsxname;this.jsxname=q;var
ya=this.getServer();if(ya)(ya.getDOM()).onNameChange(this,N);}return this;};j.getHelpId=function(){return this.jsxhelpid;};j.setHelpId=function(i){this.jsxhelpid=i;};j.getLoadType=function(){return this.jsxloadtype||0;};j.setLoadType=function(s){this.jsxloadtype=s;};j.getParent=function(){return this._jsxxK;};j.getAncestorOfType=function(q){return this.findAncestor(function(a){return a.instanceOf(q);},false);};j.getAncestorOfName=function(b){return this.findAncestor(function(m){return m.getName()==b;},false);};j.findAncestor=function(q,p){var
Cb=p?this:this._jsxxK;while(Cb!=null){if(q.call(null,Cb))return Cb;Cb=Cb._jsxxK;}return null;};j.toXML=function(n){return (this.toXMLDoc(n)).serialize(true,n!=null?n.charset:null);};j.toXMLDoc=function(o){if(o==null){o=this._jsxFY;if(o==null)o={};}else if(this._jsxFY!=null){o=jsx3.clone(o);for(var Ua in this._jsxFY)if(typeof o[Ua]==ub.B)o[Ua]=this._jsxFY[Ua];}var
Ga=g.CURRENT_VERSION;var
yb=new
jsx3.xml.Document();var
S=yb.createDocumentElement(ub.C,Ga);S.setAttribute(ub.D,g.Wr());for(var Ua in g.rp)if(typeof o[Ua]!=ub.B){var
J=g.rp[Ua];var
jb=yb.createNode(1,J,Ga);jb.appendChild(yb.createNode(4,o[Ua],Ga));S.appendChild(jb);}if(o.children){var
wa=(this.getChildren()).length;for(var
C=0;C<wa;C++)S.appendChild((this.getChild(C)).toXMLElm(yb,o));}else S.appendChild(this.toXMLElm(yb,o));return yb;};g.Wr=function(){var
Ga=(jsx3.System.getVersion()).split(ub.m);return Ga[0]+ub.m+Ga[1];};g.up={_jsxSi:ub.E,jsxcustom:ub.F,_jsxHj:ub.G,jsxxslparams:ub.H};g.uq={"boolean":1,number:1};j.toXMLElm=function(k,m){var
y=k.getNamespaceURI();var
ma=k.createNode(1,ub.I,y);var
F=this.getClass();var
v=F!=null?F.getName():null;if(v==null)v=this._jsxinstanceof;ma.setAttribute(ub.J,v);var
Ha=k.createNode(1,ub.K,y);var
S=k.createNode(1,ub.L,y);ma.appendChild(Ha);ma.appendChild(S);for(var Va in g.up){var
ra=this[Va];if(ra!=null&&typeof ra==ub.I){var
hb=g.c4(k,g.up[Va],ra);if(hb!=null){ma.appendChild(hb);if(g.up[Va]==ub.E&&this._jsxAo)for(var Eb in this._jsxAo)hb.removeAttribute(Eb);}}}var
ea=this._jsxSZ;if(ea)if(jsx3.$A.is(ea)){var
Db=ea.length;if(Db>0)for(var
Ma=0;Ma<Db;Ma++){var
Nb=ea[Ma];var
u=Nb._jsxX2;if(u==2||u==3){if(u==3&&Ma!=Db-1){jsx3.util.Logger.GLOBAL.warn(jsx3._msg(ub.M,this));u=Nb._jsxX2=2;}var
xb=k.createNode(1,ub.N,y);xb.setAttribute(ub.O,Nb.getPersistenceUrl());xb.setAttribute(ub.P,u==3?ub.Q:ub.R);ma.appendChild(xb);}else if(u==1||m.persistall)ma.appendChild(Nb.toXMLElm(k,m));}}else jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.S,this,this[Eb]));for(var Eb in this){var
Xa=this[Eb];var
N=typeof Xa;if(N==ub.o||Eb.indexOf(ub.T)==0||Xa==null){}else if(jsx3.$A.is(Xa)){var
Ca=new
Array(Xa.length);for(var
Ma=0;Ma<Xa.length;Ma++){var
C=Xa[Ma];Ca[Ma]=g.uq[typeof C]?C:ub.U+C+ub.U;}Ha.setAttribute(Eb,ub.V+Ca.join(ub.W)+ub.X);}else if(N==ub.I){if(Xa instanceof Date)Ha.setAttribute(Eb,ub.Y+Xa.getTime()+ub.Z);}else if(this._jsxSi==null||this._jsxSi[Eb]==null)if(g.uq[N]){Ha.setAttribute(Eb,String(Xa));}else S.setAttribute(Eb,Xa);}return ma;};g.c4=function(d,h,k){var
D=null;for(var z in k){if(D==null)D=d.createNode(1,h,g.CURRENT_VERSION);D.setAttribute(z,String(k[z]));}return D;};j.getNS=function(){return this._jsxoo;};j.getUriResolver=function(){var
Na=this;while(Na!=null){if(Na._jsxgd&&Na._jsxgd.resolver)return Na._jsxgd.resolver;if(Na._jsxYn!=null)return Na._jsxYn;Na=Na._jsxxK;}return null;};j.load=function(m,p,i){var
ob=(i||this.getUriResolver()).resolveURI(m);var
v=(new
Sa()).load(ob);if(v.hasError())throw new
jsx3.Exception(jsx3._msg(ub._,ob,v.getError()));return (this.rx(v,p,null,ob,m,null,null,i,null))[0];};j.loadXML=function(n,f,l){var
M=n instanceof Sa?n:(new
Sa()).loadXML(n);if(M.hasError()){var
lb=M.getSourceURL();var
U=lb?ub._:ub.aa;throw new
jsx3.Exception(jsx3._msg(U,lb,M.getError()));}return (this.rx(M,f,null,M.getSourceURL(),M.getSourceURL(),null,null,l,null))[0];};j.loadAndCache=function(i,h,d,f){if(d==null)d=(this.getServer()).getCache();var
Oa=(f||this.getUriResolver()).resolveURI(i);var
Gb=d.getOrOpenDocument(Oa);if(Gb.hasError())throw new
jsx3.Exception(jsx3._msg(ub._,Oa,Gb.getError()));return (this.rx(Gb,h,null,Oa,i,null,d,f,null))[0];};g.qp=function(h){jsx3.require(ub.ba);var
Va=(jsx3.getSystemCache()).getOrOpenDocument(g.XT,null,jsx3.xml.XslDocument.jsxclass);return Va.transformToObject(h);};g.rp={name:ub.ca,icon:ub.da,description:ub.ea,onbefore:ub.fa,onafter:ub.ga};j.rx=function(e,l,o,f,q,h,b,d,k){if(e==null)throw new
G(ub.ha,e);if(((e.getRootNode()).getNamespaceURI()).indexOf(g.CIF_VERSION)==0){e=g.qp(e);if(e==null)throw new
G(ub.ha,e);}if(((e.getRootNode()).getNamespaceURI()).indexOf(g.CURRENT_VERSION)!=0){throw new
jsx3.Exception(jsx3._msg(ub.ia,f,(e.getRootNode()).getAttribute(ub.ja)));}else{var
da=(e.getRootNode()).getAttribute(ub.D);if(da&&jsx3.util.compareVersions(da,jsx3.System.getVersion())>0)throw new
jsx3.Exception(jsx3._msg(ub.ka,f,da));}var
Kb=h==ub.c;var
ma=ub.la;e.setSelectionNamespaces(ub.ma+g.CURRENT_VERSION+ub.U);var
ua=e.selectSingleNode(ma+ub.na);if(ua!=null){var
va=ua.getValue();if(va&&!e._jsxQm)try{jsx3.eval(va,{objPARENT:this,objXML:e});e._jsxQm=true;}catch(Nb){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.oa,f),jsx3.NativeError.wrap(Nb));}}if(h==null)h=this._jsxoo;var
S=this.getUriResolver()||k;if(d==null){d=jsx3.net.URIResolver.getResolver(q);}else if(q)if(d.getUriPrefix()!=S.getUriPrefix()){q=jsx3.net.URI.valueOf(q);if(!jsx3.net.URIResolver.isAbsoluteURI(q))q=d.relativizeURI(q);}var
pa=this.getServer();if(k==null)k=pa;var
bb=d||S;var
wa=e.selectNodeIterator(ma+ub.pa+ma+ub.qa);var
oa=[];var
xb={uri:f,resolver:d,Md:{}};while(wa.hasNext()){var
sa=wa.next();var
Ga=this.Ji(sa,f,h,k,b,bb,xb);if(Ga!=null){oa[oa.length]=Ga;if(!Kb)var
eb=this.setChild(Ga,o,f,h);if(eb===false)return false;if(oa.length==1){if(q)Ga.setMetaValue(ub.g,q.toString());for(var Ma in g.rp){var
ha=e.selectSingleNode(ma+ub.ra+g.rp[Ma]);if(ha!=null)Ga.setMetaValue(Ma,ha.getValue());}}if(pa!=null)Ga.onAfterAttach();}}if(!Kb&&oa.length>0&&pa)(pa.getDOM()).onChange(0,this.getId(),oa[0].getId());if(l!==false)for(var
Z=0;Z<oa.length;Z++)this.Im(oa[Z],Z<oa.length-1);return oa;};g.META_FIELDS={url:1,name:1,icon:1,description:1,onafter:1,onattach:1,onbefore:1,unicode:1};j.getMetaValue=function(a){if(g.META_FIELDS[a])return this._jsxFY?this._jsxFY[a]:ub.u;else throw new
G(ub.sa,a);};j.setMetaValue=function(o,d){if(g.META_FIELDS[o]){if(this._jsxFY==null)this._jsxFY={};this._jsxFY[o]=d;}else throw new
G(ub.sa,o);};j.Ji=function(d,c,h,l,r,e,b){if(d==null)return null;if(!d._jsxbm){var
fb=d.selectSingleNode(ub.ta);fb=fb?parseInt(fb.getValue()):0;if(fb==2||fb==3||fb==5){jsx3.require(ub.ua);var
ga=new
g.Loading(d,fb,[c,h,l,r,e,b]);ga._jsxoo=h;return ga;}}var
db=d.getAttribute(ub.J);var
pa=jsx3.Class.forName(db);if(pa==null)pa=jsx3.getClass(db);if(pa==null)try{pa=jsx3.CLASS_LOADER.loadClass(db);}catch(Kb){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.va,db),jsx3.NativeError.wrap(Kb));}if(pa==null){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.wa,c,db));return null;}var
ga=null;if(pa instanceof jsx3.Class){ga=pa.bless();}else{ga=new
pa(jsx3.DESERIALIZE);ga._jsxinstanceof=db;}ga._jsxgd=b;ga._jsxoo=h;ga.onBeforeAssemble(this,l);var
ob=ga.assembleFromXML(d);var
sb=ga.getName();if(sb)if(jsx3.util.isName(sb))b.Md[sb]=ga;if(ob){var
Db=d.selectNodeIterator(ub.xa);while(Db.hasNext()){var
hb=Db.next();if(hb.getBaseName()==ub.I){var
zb=ga.Ji(hb,c,h,l,r,e,b);if(zb)ga.setChild(zb,1,null,h);}else if(hb.getBaseName()==ub.N){var
ta=hb.getAttribute(ub.O);var
La=e.resolveURI(ta);var
A=true;if(hb.getAttribute(ub.P)==ub.Q){A=false;if(Db.hasNext()){jsx3.util.Logger.GLOBAL.warn(jsx3._msg(ub.M,ga));A=true;}}if(A){var
ra=r!=null?r.getOrOpenDocument(La):(new
Sa()).load(La);if(ra.hasError())throw new
jsx3.Exception(jsx3._msg(ub._,La,d.getError()));ga.rx(ra,false,2,La,ta,h,r,null,l);}else ga.XO(La,ta,h,r,l);}else throw new
jsx3.Exception();}}ga.onAfterAssemble(this,l);return ga;};j.assembleFromXML=function(i){var
v=i.getAttributeNames();for(var
x=0;x<v.length;x++){var
Qa=v[x];if(Qa!=ub.J){var
y=i.getAttribute(Qa);if(y.indexOf(ub.ya)==0&&y.lastIndexOf(ub.za)==y.length-1)this.setDynamicProperty(Qa,y.substring(2,y.length-1));else this[Qa]=isNaN(y)?y:Number(y);}}for(var
x=i.selectNodeIterator(ub.Aa);x.hasNext();){var
Ua=x.next();var
Qa=Ua.getBaseName();if(Qa==ub.L)g.TZ(this,Ua);else if(Qa==ub.K)g.kU(this,Ua);else if(Qa==ub.E)g.pw(this,Ua,ub.Ba);else if(Qa==ub.F)g.pw(this,Ua,ub.Ca);else if(Qa==ub.G)g.pw(this,Ua,ub.Da);else if(Qa==ub.H)g.pw(this,Ua,ub.Ea);}return true;};j.onBeforeAssemble=function(n,p){};j.onAfterAssemble=function(i,k){};j.onAfterAttach=function(){var
D=(this.getChildren()).concat();for(var
ra=D.length-1;ra>=0;ra--)if(D[ra]._jsxxK==this)D[ra].onAfterAttach();this.applyDynamicProperties();var
Ka=this.getMetaValue(ub.Fa);if(Ka)try{var
Ra=this._jsxgd;var
Nb=Ra?(jsx3.$O(Ra.Md)).clone():{};Nb.objJSX=this;this.eval(Ka,Nb);}catch(Kb){var
oa=this.getMetaValue(ub.g);jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Ga,oa),jsx3.NativeError.wrap(Kb));}};j.setDynamicProperty=function(a,n,p){if(this._jsxSi==null)this._jsxSi={};if(this._jsxAo==null)this._jsxAo={};if(n==null){delete this._jsxSi[a];delete this._jsxAo[a];}else{this._jsxSi[a]=n;if(p)this._jsxAo[a]=n;else delete this._jsxAo[a];}return this;};j.getDynamicProperty=function(p){if(this._jsxSi)return this._jsxSi[p];};j.applyDynamicProperties=function(){if(this._jsxSi!=null){var
Fa=this.getServer();if(Fa==null)return;var
Ya=Fa.getProperties();for(var Fb in this._jsxSi)this[Fb]=Ya.get(this._jsxSi[Fb]);}};j.XO=function(m,a,l,d,p){var
rb=this;if(d!=null&&d.getDocument(m.toString())!=null){var
S=d.getDocument(m.toString());jsx3.sleep(function(){this.rx(S,true,3,m,a,l,d,null,p);},null,this);}else{var
S=new
Sa();S.setAsync(true);S.subscribe(ub.Ha,function(k){if(d!=null)d.setDocument(m,k.target);rb.rx(k.target,true,3,m,a,l,d,null,p);});S.subscribe([ub.Ia,ub.Ja],function(c){throw new
jsx3.Exception(jsx3._msg(ub._,m,c.target.getError()));});S.load(m,g.ASYNC_LOAD_TIMEOUT);}};g.TZ=function(b,d){var
_=d.getAttributeNames();for(var
Ia=0;Ia<_.length;Ia++){var
x=_[Ia];b[x]=d.getAttribute(x);}};g.kU=function(q,h){var
jb=h.getAttributeNames();for(var
J=0;J<jb.length;J++){var
Oa=jb[J];var
Nb=h.getAttribute(Oa);q[Oa]=isNaN(Nb)?q.eval(Nb):Number(Nb);}};g.pw=function(n,k,f){var
Cb=n[f]={};var
L=k.getAttributeNames();for(var
Gb=0;Gb<L.length;Gb++){var
Jb=L[Gb];Cb[Jb]=k.getAttribute(Jb);}};j.Pk=function(s){try{var
Ia=this.getServer();return Ia.getJSX(s)||(Ia.getRootBlock()).selectDescendants(s,true);}catch(Kb){return null;}};j.toString=function(){return ub.Ka+(this.getClass()).getName()+ub.La+this.getId()+ub.Ma+this.getName();};g.getVersion=function(){return ub.Na;};});jsx3.Model=jsx3.app.Model;jsx3.Class.defineClass("jsx3.xml.CDFSchema",jsx3.app.Model,null,function(h,a){var
ub={a:"type",b:"jsxname",c:"object",d:"a",e:"children",f:"record",g:"jsx"};a.init=function(e){if(e)for(var M in e)this.setProp(M,e[M]);};a.assembleFromXML=function(e){var
Ja=e.getAttributeNames();var
K=this.getProps();for(var
t=0;t<Ja.length;t++){var
ca=Ja[t];if(ca==ub.a)continue;else if(ca==ub.b)this.jsxname=e.getAttribute(ca);else K[ca.substring(1)]=e.getAttribute(ca);}};a.toXMLElm=function(m,p){var
O=m.createNode(1,ub.c,m.getNamespaceURI());var
S=this.getProps();O.setAttribute(ub.a,(this.getClass()).getName());if(this.getName())O.setAttribute(ub.b,this.getName());for(var B in S)if(S[B])O.setAttribute(ub.d+B,S[B]);return O;};a.getProps=function(){if(!this._jsxp)this._jsxp={};return this._jsxp;};a.getProp=function(n){return (this.getProps())[n]||(n==ub.e?ub.f:ub.g+n);};a.setProp=function(f,m){(this.getProps())[f]=m;};});jsx3.Class.defineInterface("jsx3.xml.CDF",null,function(e,b){var
ub={A:"string",B:"cdf.adopt_col",C:"cdf.adopt_dest",D:"cdf.adopt_src",E:"adoptRecord() no object with id: ",F:"cdf.before_col",G:"cdf.before_rec",H:"jsx",I:"//",J:"",K:"'",L:"//*[@",M:"='",N:"']",O:'="',P:'"]',Q:"[not(@",R:")]",S:/\[(\w+)\]$/,T:"name()='",U:" or ",V:"substring(.,1,1)='{' and substring(.,string-length(.),1)='}'",W:"//@*[(",X:") and (",Y:"undefined",Z:"//@",_:" | //@",a:"data",aa:"{",b:"record",ba:"}",c:"jsxid",ca:'<data jsxid="jsxroot"/>',d:"jsxtext",da:"jsx_",e:"jsxexecute",ea:"3.00.00",f:"jsxdisabled",g:"jsxselected",h:"jsxunselectable",i:"jsximg",j:"jsxtip",k:"jsxkeycode",l:"jsxstyle",m:"jsxclass",n:"onAfterAttach",o:"_onAfterAttach",p:"onChildAdded",q:"onRemoveChild",r:"id",s:"children",t:"*",u:"objRecord",v:"objRecordNode",w:"cdf.prop_ins",x:"cdf.prop_del",y:"strRecordId",z:"intAction"};e.dK=jsx3.util.Logger.getLogger(e.jsxclass.getName());e.DELETE=0;e.INSERT=1;e.UPDATE=2;e.INSERTBEFORE=3;e.ELEM_ROOT=ub.a;e.ELEM_RECORD=ub.b;e.ATTR_ID=ub.c;e.ATTR_TEXT=ub.d;e.ATTR_EXECUTE=ub.e;e.ATTR_DISABLED=ub.f;e.ATTR_SELECTED=ub.g;e.ATTR_UNSELECTABLE=ub.h;e.ATTR_IMG=ub.i;e.ATTR_TIP=ub.j;e.ATTR_KEYCODE=ub.k;e.bV=[ub.d,ub.j,ub.i,ub.k,ub.l,ub.m];e.Zx=1;e.DEFAULT_SCHEMA=new
jsx3.xml.CDFSchema();b.setSchema=function(d){this.NV=d;};b.getSchema=function(){return this.NV||this._jsxNS||e.DEFAULT_SCHEMA;};b.hn=function(d){return (this.getSchema()).getProp(d);};b.Sf=function(s,i,n){var
la=this.hn(i);if(arguments.length>=3){if(s.setAttribute)s.setAttribute(la,n);else s[la]=n;}else if(s)return s.getAttribute?s.getAttribute(la):s[la];};b._onAfterAttach=function(){this._jsxNS=(this.getDescendantsOfType(jsx3.xml.CDFSchema,true))[0];};jsx3.app.Model.jsxclass.addMethodMixin(ub.n,e.jsxclass,ub.o);jsx3.app.Model.jsxclass.addMethodMixin(ub.p,e.jsxclass,ub.o);jsx3.app.Model.jsxclass.addMethodMixin(ub.q,e.jsxclass,ub.o);b.insertRecord=function(g,s,r){if(g instanceof Object){var
Xa=this.getXML();var
Bb=1;var
gb=Xa.selectSingleNode(this.Ee(this.Sf(g,ub.r)));if(gb!=null){Bb=2;}else{var
fb=this.hn(ub.s);gb=Xa.createNode(1,fb==ub.t?ub.b:fb);var
pb=s!=null?Xa.selectSingleNode(this.Ee(s)):null;if(pb==null)pb=Xa.getRootNode();pb.appendChild(gb);}for(var S in g)if(g[S]!=null)gb.setAttribute(S,g[S].toString());if(r!==false)this.redrawRecord(this.Sf(g,ub.r),Bb);return gb;}else throw new
jsx3.IllegalArgumentException(ub.u,g);};b.insertRecordNode=function(j,l,f){if(j instanceof jsx3.xml.Entity){var
na=this.getXML();var
tb=1;var
ga=na.selectSingleNode(this.Ee(this.Sf(j,ub.r)));if(ga!=null){tb=2;(ga.getParent()).replaceNode(j,ga);}else{var
Da=l!=null?na.selectSingleNode(this.Ee(l)):null;if(Da==null)Da=na.getRootNode();Da.appendChild(j);}if(f!==false)this.redrawRecord(this.Sf(j,ub.r),tb);}else throw new
jsx3.IllegalArgumentException(ub.v,j);};b.insertRecordProperty=function(g,a,q,r){var
yb=this.getRecordNode(g);if(yb!=null){yb.setAttribute(a,q);if(r!==false)this.redrawRecord(g,2);}else e.dK.debug(jsx3._msg(ub.w,g));return this;};b.deleteRecordProperty=function(n,h,i){var
Nb=this.getXML();var
J=Nb.selectSingleNode(this.Ee(n));if(J!=null){J.removeAttribute(h);if(i!==false)this.redrawRecord(n,2);}else e.dK.debug(jsx3._msg(ub.x,n));};b.redrawRecord=jsx3.Method.newAbstract(ub.y,ub.z);b.adoptRecord=function(h,f,q,a){var
ka=h;if(typeof h==ub.A)ka=jsx3.GO(h);if(ka!=null){var
yb=ka.getRecordNode(f);if(yb!=null){var
ma=q==null?(this.getXML()).getRootNode():this.getRecordNode(q);if(ma!=null){var
H=ma;while(H!=null&&!H.equals(yb))H=H.getParent();if(H==null){if(ka!=this){var
nb=this.getRecordNode(f);if(nb!=null){e.dK.debug(jsx3._msg(ub.B,this,f));return;}}var
Ka=ka.deleteRecord(f);this.insertRecordNode(Ka,q,a);return this.getRecordNode(f);}else{}}else e.dK.debug(jsx3._msg(ub.C,this,f,q));}else e.dK.debug(jsx3._msg(ub.D,this,f,ka));}else e.dK.debug(ub.E+h);};b.insertRecordBefore=function(m,j,q){var
ea=this.getXML();var
ca=ea.selectSingleNode(this.Ee(this.Sf(m,ub.r)));if(ca){e.dK.debug(jsx3._msg(ub.F,this.Sf(m,ub.r),this));}else{var
zb=ea.selectSingleNode(this.Ee(j));if(zb!=null&&zb.getParent()!=null){var
G=this.insertRecord(m,this.Sf(zb.getParent(),ub.r),false);if(G){this.adoptRecordBefore(this,this.Sf(m,ub.r),j,q);return G;}}else e.dK.debug(jsx3._msg(ub.G,j,this));}};b.adoptRecordBefore=function(r,o,n,j){var
ja=r;if(typeof r==ub.A)ja=jsx3.GO(r);if(ja==this&&o==n){}else{var
Ua=(this.getRecordNode(n)).getParent();var
La=this.Sf(Ua,ub.H);var
Q=this.adoptRecord(r,o,La,false);if(Q){var
Mb=this.getRecordNode(n);Ua.insertBefore(Q,Mb);if(j!==false)this.redrawRecord(this.Sf(Q,ub.r),3);return Q;}}};b.deleteRecord=function(q,l){var
fa=this.getXML();var
da=fa.selectSingleNode(this.Ee(q));if(da!=null){da=(da.getParent()).removeChild(da);if(l!==false)this.redrawRecord(q,0);return da;}return null;};b.getRecord=function(h){var
Jb=this.getRecordNode(h);if(Jb!=null){var
E={};var
L=Jb.getAttributeNames();for(var
Fb=0;Fb<L.length;Fb++)E[L[Fb]]=Jb.getAttribute(L[Fb]);return E;}return null;};b.getRecordIds=function(){var
Oa=[];var
Hb=this.getXML();var
Ea=Hb.selectNodeIterator(ub.I+this.hn(ub.s));while(Ea.hasNext()){var
Kb=Ea.next();Oa.push(this.Sf(Kb,ub.r));}return Oa;};b.getRecordNode=function(c){var
aa=this.getXML();return aa.selectSingleNode(this.Ee(c));};b.Ee=function(o){return (o+ub.J).indexOf(ub.K)==-1?ub.L+this.hn(ub.r)+ub.M+o+ub.N:ub.L+this.hn(ub.r)+ub.O+o+ub.P;};b.resetData=function(i){if(jsx3.xml.Cacheable&&this.instanceOf(jsx3.xml.Cacheable)){this.clearXmlData();if(i)this.repaint();}};b.reloadFromSource=function(h){if(jsx3.xml.Cacheable&&this.instanceOf(jsx3.xml.Cacheable))this.resetXmlCacheData();};b.assignIds=function(){var
F=this.getXML();for(var
ba=F.selectNodeIterator(ub.I+this.hn(ub.s)+ub.Q+this.hn(ub.r)+ub.R);ba.hasNext();){var
nb=ba.next();nb.setAttribute(this.hn(ub.r),e.getKey());}};e.zw=ub.S;b.convertProperties=function(q,l,m){if(l==null)l=e.bV;else if(m)l.push.apply(l,e.bV);if(jsx3.getXmlVersion()>3&&!jsx3.CLASS_LOADER.SAF){var
xb=new
Array(l.length);for(var
w=0;w<l.length;w++)xb[w]=ub.T+l[w]+ub.K;var
Ga=xb.join(ub.U);var
O=ub.V;var
Va=ub.W+Ga+ub.X+O+ub.R;for(var
w=(this.getXML()).selectNodeIterator(Va);w.hasNext();){var
Cb=w.next();var
Za=Cb.getValue();var
D=Za.substring(1,Za.length-1);var
ca=null;if(D.match(e.zw)){D=RegExp.leftContext;ca=RegExp.$1;}var
db=q.get(D);if(typeof db!=ub.Y)if(ca!=null&&db instanceof Object)Cb.setValue(db[ca]);else Cb.setValue(db);}}else{var
Va=ub.Z+l.join(ub._);for(var
T=(this.getXML()).selectNodeIterator(Va);T.hasNext();){var
Cb=T.next();var
Za=Cb.getValue();if(Za.indexOf(ub.aa)==0&&jsx3.util.strEndsWith(Za,ub.ba)){var
D=Za.substring(1,Za.length-1);var
ca=null;if(D.match(e.zw)){D=RegExp.leftContext;ca=RegExp.$1;}var
db=q.get(D);if(typeof db!=ub.Y)if(ca!=null&&db instanceof Object)Cb.setValue(db[ca]);else Cb.setValue(db);}}}};e.newDocument=function(){var
eb=new
jsx3.xml.Document();eb.loadXML(ub.ca);return eb;};e.getKey=function(){return ub.da+(e.Zx++
).toString(36);};e.getVersion=function(){return ub.ea;};});jsx3.Class.defineClass("jsx3.xml.CDF.Document",jsx3.xml.Document,[jsx3.xml.CDF],function(f,n){var
ub={a:'<data jsxid="jsxroot"/>'};n.getXML=function(){return this;};n.redrawRecord=function(h,s){};n.cloneDocument=function(){return f.wrap(this.jsxsuper());};f.newDocument=function(){var
_=new
f();_.loadXML(ub.a);return _;};f.wrap=function(l){return new
f(l.getNativeDocument());};});jsx3.CDF=jsx3.xml.CDF;jsx3.require("jsx3.xml.Template","jsx3.xml.CDF");jsx3.Class.defineInterface("jsx3.xml.Cacheable",null,function(b,e){var
xb={A:"load.",B:"string",C:"xml.err_load_xsl",D:"_XSL",E:/\s*,\s*/g,F:",",G:"xml.trans_bad",H:"xml.trans_err",I:"3.00.00",a:"jsx:///xsl/xml.xsl",b:"JSX_XML_XSL",c:"",d:"attr",e:"jsxasyncmessage",f:"jsx3.xml.Cacheable.",g:"jsx3.xml.Cacheable.data",h:"xml.err_trans",i:/\s*<\/?JSX_FF_WELLFORMED_WRAPPER( [^>]*)?\/?>\s*/g,j:"jsxxslparams",k:"xml.err_load",l:"data",m:"jsxassignids",n:"1",o:"_XML",p:"xmlbind",q:"load",r:"onChangeServer",s:"h7",t:"onAfterAttach",u:"TC",v:"_jsxbG",w:"onDestroy",x:"lV",y:"loading",z:"k1"};var
Db=jsx3.xml.Document;var
ub=jsx3.xml.CDF;var
Ib=jsx3.util.Logger.getLogger(b.jsxclass.getName());b.DEFAULTSTYLESHEET=jsx3.resolveURI(xb.a);b.DEFAULTXSLCACHEID=xb.b;b.CLEANUPRESOURCES=0;b.SHARERESOURCES=1;e.doTransform=function(q){var
ya=this.getXML();if(this.getNodeSet())ya=this.getNodeSet();var
Ea=this.getXSL();if(ya.hasError()||Ea.hasError())return xb.c;if(!q)q=this.jsxxslparams||{};if(this.getSchema)(jsx3.$H((this.getSchema()).getProps())).each(function(p,g){q[xb.d+p]=g;});var
Ja=xb.c;var
jb=null;if(Ea instanceof jsx3.xml.XslDocument){jb=Ea;jb.reset();}else jb=new
jsx3.xml.Template(Ea);if(!jb.hasError()){jb.setParams(q);if(ya.getNamespaceURI()==jsx3.app.Cache.XSDNS){var
x=this.getServer();jb.setParam(xb.e,x.getDynamicProperty(xb.f+ya.getNodeName(),q.jsxtitle||x.getDynamicProperty(xb.g)));}Ja=jb.transform(ya);if(jb.hasError()){Ib.error(jsx3._msg(xb.h,this,jb.getError()));Ja=xb.c;}}else Ib.error(jsx3._msg(xb.h,this,jb.getError()));return Ja;};e.vo=function(n){return n.replace(xb.i,xb.c);};e.getXSLParams=function(){if(this.jsxxslparams==null)this.jsxxslparams={};return this.jsxxslparams;};e.setXSLParam=function(l,c){if(c!=null)(this.getXSLParams())[l]=c;else delete this.getXSLParams()[l];return this;};e.removeXSLParam=function(k){delete this.getXSLParams()[k];return this;};e.removeXSLParams=function(){delete this[xb.j];return this;};e.getNodeSet=function(){return this._jsxbG;};e.setNodeSet=function(g){this._jsxbG=g;};e.resetCacheData=function(h){var
O=(h||this.getServer()).getCache();O.clearById(this.getXSLId());O.clearById(this.getXMLId());};e.resetXmlCacheData=function(g){var
Gb=(g||this.getServer()).getCache();Gb.clearById(this.getXMLId());};e.resetXslCacheData=function(p){var
I=(p||this.getServer()).getCache();I.clearById(this.getXSLId());};e.clearXmlData=function(){((this.getServer()).getCache()).setDocument(this.getXMLId(),ub.newDocument());};e.getShareResources=function(){return this.jsxshare==null?0:this.jsxshare;};e.setShareResources=function(h){this.jsxshare=h;return this;};e.getXML=function(){var
_a=this.getServer();if(_a==null)return ub.newDocument();var
ma=_a.getCache();var
Ha=this.getXMLId();var
F=ma.getDocument(Ha);var
gb=false;if(F==null){var
Hb=this.getXMLString();if(!jsx3.util.strEmpty(Hb)){F=new
Db();F.loadXML(Hb);}else{var
Cb=this.getXMLURL();if(!jsx3.util.strEmpty(Cb)){Cb=(this.getUriResolver()).resolveURI(Cb);if(this.jsxxmlasync){F=ma.getOrOpenAsync(Cb,Ha);gb=true;this.lz(0,F);}else F=(new
Db()).load(Cb);}else F=ub.newDocument();}if(F.hasError()){Ib.error(jsx3._msg(xb.k,this,F.getError()));return F;}F=this.setSourceXML(F,ma,gb);}return F;};e.setSourceXML=function(f,c,a){if(!c)c=(this.getServer()).getCache();var
F=this.XC(f);var
ea=this.getXMLId();if(!a)c.setDocument(ea,F);else if(F!=f)c.ic(ea,F);this.k0(F);return F;};e.k0=function(n){if(this.instanceOf(ub))if(!n._jsxEF){n._jsxEF=true;if(n.getNodeName()==xb.l&&n.getAttribute(xb.m)==xb.n)this.assignIds();this.convertProperties((this.getServer()).getProperties());}};e.getXMLId=function(){return this.jsxxmlid||this.getId()+xb.o;};e.setXMLId=function(o){this.jsxxmlid=o;return this;};e.getXMLString=function(){return this.jsxxml;};e.setXMLString=function(j){this.jsxxml=j;return this;};e.getXMLURL=function(){return this.jsxxmlurl;};e.setXMLURL=function(k){this.jsxxmlurl=k;return this;};e.getXmlAsync=function(){return this.jsxxmlasync;};e.setXmlAsync=function(d){this.jsxxmlasync=jsx3.Boolean.valueOf(d);return this;};e.getXmlBind=function(){return this.jsxxmlbind;};e.setXmlBind=function(k){this.jsxxmlbind=jsx3.Boolean.valueOf(k);this.lz(this.jsxxmlbind);return this;};e.onXmlBinding=function(n){var
Ab=n.target.getDocument(n.id);if(this.publish)this.publish({subject:xb.p,xml:Ab});};e.k1=function(i){var
tb=i.action==xb.q;if(this.jsxxmlbind&&!tb||!this.jsxxmlbind&&tb){var
Fb=i.target.getDocument(i.id);this.lz(0,Fb);if(tb)this.setSourceXML(Fb,null,true);this.onXmlBinding(i);}};e.h7=function(i,h){var
ga=h.getCache(),za=i.getCache();var
S=this.getXMLId(),Ra=this.getXSLId();var
Ua=ga.getDocument(S);var
ea=ga.getDocument(Ra);if(this.getShareResources()!=1)this.resetCacheData(h);if(Ua)za.setDocument(S,Ua);if(ea)za.setDocument(Ra,ea);this.lz(false,0,h);this.lz(this.jsxxmlbind,0,i);};jsx3.app.Model.jsxclass.addMethodMixin(xb.r,b.jsxclass,xb.s);e.TC=function(){this.lz(this.jsxxmlbind);};jsx3.app.Model.jsxclass.addMethodMixin(xb.t,b.jsxclass,xb.u);e.lV=function(s){var
ia=s.getServer();this.lz(false,0,ia);if(this.getShareResources()==0)this.resetCacheData(ia);delete this[xb.v];};jsx3.app.Model.jsxclass.addMethodMixin(xb.w,b.jsxclass,xb.x);e.lz=function(k,h,c){if(!c)c=this.getServer();if(c){var
Z=c.getCache();var
xa=this.getXMLId();var
Ja=null;if(h){if(!this.jsxxmlbind)Ja=!h.hasError()&&h.getNamespaceURI()==jsx3.app.Cache.XSDNS&&h.getNodeName()==xb.y;}else Ja=k;if(Ja!=null&&Boolean(this._jsxqs)!=Ja){if(Ja){Z.subscribe(xa,this,xb.z);Z.subscribe(xb.A+xa,this,xb.z);}else{Z.unsubscribe(xa,this);Z.unsubscribe(xb.A+xa,this);}this._jsxqs=Ja;}}};e.getXSL=function(){return this.nd(b.DEFAULTSTYLESHEET);};e.nd=function(m,a){var
R=jsx3.xml.XslDocument;var
ka=this.getXSLId();var
ib=(this.getServer()).getCache();var
Ea=ib.getDocument(ka);if(Ea==null){if(this.getXSLString()!=null){Ea=(new
R()).loadXML(this.getXSLString());}else if(this.getXSLURL()!=null){Ea=(new
R()).load((this.getUriResolver()).resolveURI(this.getXSLURL()));}else{var
vb=jsx3.getSharedCache();if(a){Ea=vb.getDocument(m);if(!Ea){Ea=typeof a==xb.B?(new
R()).loadXML(a):a;vb.setDocument(m,Ea);}}else Ea=vb.getOrOpenDocument(m,null,R.jsxclass);}if(Ea.hasError()){Ib.error(jsx3._msg(xb.C,this,Ea.getError()));return Ea;}ib.setDocument(ka,Ea);}return Ea;};e.getXSLId=function(){var
ha=null;ha=this.jsxxslid;return ha||this.getId()+xb.D;};e.setXSLId=function(d){this.jsxxslid=d;return this;};e.getXSLString=function(){return this.jsxxsl;};e.setXSLString=function(n){this.jsxxsl=n;return this;};e.getXSLURL=function(){return this.jsxxslurl;};e.setXSLURL=function(j){this.jsxxslurl=j;return this;};e.getXMLTransformers=function(){return this.jsxxmltrans!=null?this.jsxxmltrans.split(xb.E):[];};e.setXMLTransformers=function(r){this.jsxxmltrans=r!=null?jsx3.$A.is(r)?r.join(xb.F):r:null;};e.XC=function(a){var
ja=this.getXMLTransformers();if(ja.length>0){var
ea=this.getServer();var
Ea=ea.getCache();var
Da=a;for(var
Fb=0;Fb<ja.length;Fb++){var
F=ja[Fb];var
Bb=Ea.getDocument(F);if(Bb==null){F=(this.getUriResolver()).resolveURI(F);Bb=Ea.openDocument(F,F);}if(Bb==null||Bb.hasError()){Ib.warn(jsx3._msg(xb.G,F,this,Bb.getError()));Ea.clearById(F);continue;}var
Ab=new
jsx3.xml.Template(Bb);Ab.setParams(this.getXSLParams());Da=Ab.transformToObject(Da);if(Ab.hasError())throw new
jsx3.Exception(jsx3._msg(xb.H,F,this,Ab.getError()));if(Da.hasError())throw new
jsx3.Exception(jsx3._msg(xb.H,F,this,Da.getError()));}return Da;}else return a;};b.getVersion=function(){return xb.I;};});jsx3.xml.Cacheable.prototype.resetData=jsx3.xml.Cacheable.prototype.clearXmlData;jsx3.Class.defineInterface("jsx3.gui.Form",null,function(p,c){var
ub={A:"</xsl:choose>",a:"#a8a8b5",b:"#d8d8e5",c:"Error binding key '",d:"' to ",e:": ",f:"background-color:",g:";",h:"",i:"color:",j:' disabled="disabled" ',k:"pointer",l:"default",m:"cursor:",n:' name="',o:'"',p:"3.00.00",q:"none",r:"Not implemented.",s:/\{/g,t:"{{",u:/\}/g,v:"}}",w:"<xsl:choose xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"><xsl:when test=\"@jsxnomask='1'\"></xsl:when><xsl:when test=\"@jsxdisabled='1'\">",x:"</xsl:when>",y:"<xsl:otherwise>",z:"</xsl:otherwise>"};var
kb=jsx3.gui.Event;p.DEFAULTDISABLEDCOLOR=ub.a;p.DEFAULTDISABLEDBACKGROUNDCOLOR=ub.b;p.STATEINVALID=0;p.STATEVALID=1;p.STATEDISABLED=0;p.STATEENABLED=1;p.OPTIONAL=0;p.REQUIRED=1;c.doKeyBinding=function(s,k){try{var
z=jsx3.gui.HotKey.valueOf(k,s);return (this.Qt()).registerHotKey(z);}catch(Kb){(jsx3.util.Logger.getLogger(p.jsxclass.getName())).error(ub.c+k+ub.d+this+ub.e+jsx3.NativeError.wrap(Kb));return null;}};c.Qt=function(){var
ba=jsx3.gui.Window!=null;var
Cb=jsx3.gui.Dialog!=null;var
Wa=this;while(Wa!=null){if(ba&&Wa instanceof jsx3.gui.Window)return Wa.getRootBlock();if(Cb&&Wa instanceof jsx3.gui.Dialog)return Wa;var
V=Wa.getParent();if(V==null)return Wa.getServer();Wa=V;}return null;};c.getKeyBinding=function(){return this.jsxkeycode==null?null:this.jsxkeycode;};c.setKeyBinding=function(i){this.jsxkeycode=i;return this;};c.getDisabledBackgroundColor=function(){return this.jsxdisabledbgcolor;};c.setDisabledBackgroundColor=function(g){this.jsxdisabledbgcolor=g;return this;};c.ch=function(){var
db=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor();return db?ub.f+db+ub.g:ub.h;};c.getDisabledColor=function(){return this.jsxdisabledcolor;};c.setDisabledColor=function(j){this.jsxdisabledcolor=j;return this;};c.getEnabled=function(){return this.jsxenabled==null?1:this.jsxenabled;};c.getValue=function(){return this.jsxvalue;};c.setValue=function(g){this.jsxvalue=g;return this;};c.setEnabled=function(a,g){if(this.jsxenabled!=a){this.jsxenabled=a;if(g)this.repaint();}return this;};c.jc=function(){if(this.getEnabled()!=0){var
Ea=this.getColor();return Ea?ub.i+Ea+ub.g:ub.h;}else return ub.i+(this.getDisabledColor()?this.getDisabledColor():p.DEFAULTDISABLEDCOLOR)+ub.g;};c.pc=function(){return this.getEnabled()==1?ub.h:ub.j;};c.Rl=function(){return jsx3.gui.Block.prototype.Rl.call(this,this.getIndex()||Number(0));};c.mi=function(j){var
P=this.getCursor();if(!P&&j)P=this.getEnabled()==1?ub.k:ub.l;return P?ub.m+P+ub.g:ub.h;};c.Lj=function(){var
Ra=this.getName();return Ra?ub.n+Ra+ub.o:ub.h;};c.getRequired=function(){return this.jsxrequired==null?0:this.jsxrequired;};c.setRequired=function(d){this.jsxrequired=d;return this;};c.getValidationState=function(){return this._jsxuV==null?1:this._jsxuV;};c.setValidationState=function(d){this._jsxuV=d;return this;};c.doValidate=jsx3.Method.newAbstract();c.doReset=function(){this.setValidationState(1);return this;};c.getInputId=function(){return this.getId();};p.validate=function(k,j){var
Qa=k.getDescendantsOfType(jsx3.gui.Form);if(k.instanceOf(jsx3.gui.Form))Qa.unshift(k);var
ab=1;for(var
t=0;t<Qa.length;t++){var
Ta=Qa[t].doValidate();if(j)j(Qa[t],Ta);if(Ta!=1)ab=Ta;}return ab;};p.reset=function(e){var
ya=e.getDescendantsOfType(jsx3.gui.Form);if(e.instanceOf(jsx3.gui.Form))ya.unshift(e);for(var
K=0;K<ya.length;K++)ya[K].doReset();};p.getVersion=function(){return ub.p;};c.emInit=function(k){if(this.emGetType()==jsx3.gui.Matrix.EditMask.NORMAL){this.setRelativePosition(0,true);this.setDisplay(ub.q,true);}this._jsxdl=this.getWidth();this._jsxvh=this.getHeight();};c.emGetType=function(){return jsx3.gui.Matrix.EditMask.NORMAL;};c.emPaintTemplate=function(){throw new
jsx3.Exception(ub.r);};c.emGetTemplate=function(l,a){l=(l.replace(ub.s,ub.t)).replace(ub.u,ub.v);a=(a.replace(ub.s,ub.t)).replace(ub.u,ub.v);return ub.w+a+ub.x+ub.y+l+ub.z+ub.A;};c.emBeginEdit=function(a,n,h,f,e,i,l){if(this.emGetType()==jsx3.gui.Matrix.EditMask.NORMAL){this.setRelativePosition(0,true);this.emUpdateDisplay(n,h);this.setDisplay(ub.h,true);this.setZIndex(10,true);this.focus();this.emFocus();}this.emSetValue(a);};c.emEndEdit=function(){if(this.emGetType()==jsx3.gui.Matrix.EditMask.NORMAL)this.emRestoreDisplay();return this.emGetValue();};c.emSetValue=function(e){this.setValue(e);};c.emGetValue=function(){var
Ia=this.getValue();return Ia!=null?Ia.toString():null;};c.emUpdateDisplay=function(g,h){var
bb=isNaN(this._jsxdl)?g.W:Math.min(parseInt(this._jsxdl),g.W);var
T=isNaN(this._jsxvh)?g.H:Math.min(parseInt(this._jsxvh),g.H);this.setDimensions(g.L,g.T,bb,T,true);};c.emRestoreDisplay=function(){this.setDisplay(ub.q,true);};c.emFocus=function(){};});jsx3.Form=jsx3.gui.Form;jsx3.Class.defineClass("jsx3.gui.HotKey",null,[jsx3.util.EventDispatcher],function(p,o){var
ub={A:"\u21A9",B:"\u238B",C:"\u21E5",D:"\u2326",E:"\u2423",F:"\u232B",G:"\u2191",H:"\u2193",I:"\u2190",J:"\u2192",K:"Insert",L:"\u2196",M:"\u2198",N:"\u21DE",O:"\u21DF",P:"Meta",Q:"Alt",R:"Ctrl",S:"Shift",T:"Enter",U:"Esc",V:"Tab",W:"Del",X:"Space",Y:"Backspace",Z:"Up",_:"Down",a:"invoked",aa:"Left",b:"+",ba:"Right",c:"ctrl",ca:"Home",d:"shift",da:"End",e:"alt",ea:"PgUp",f:"meta",fa:"PgDn",g:"string",ga:"@HotKey key:",h:/^\[(\d+)\]$/,ha:" shift:",i:"",ia:" ctrl:",j:"function",ja:" alt:",k:"callback",ka:" meta:",l:"number",la:/^[fF](\d\d?)$/,m:"key",ma:"F",n:"meta+",o:"alt+",p:"ctrl+",q:"shift+",r:"[",s:"]",t:"gui.hk.dest",u:"u4",v:"\u2318",w:"\u2325",x:"\u2303",y:"\u21EA",z:"\u21E7"};var
Ea=jsx3.gui.Event;p.WAS_INVOKED=ub.a;o.u4=null;o.hH=null;o.Up=false;o.Iy=false;o.fV=false;o._L=false;o.ZY=true;o.JQ=false;p.valueOf=function(k,s){var
wb=(k.toLowerCase()).split(ub.b);var
Aa=wb.pop();var
C=wb.indexOf(ub.c)>=0;var
ua=wb.indexOf(ub.d)>=0;var
wa=wb.indexOf(ub.e)>=0;var
fb=wb.indexOf(ub.f)>=0;if(typeof Aa==ub.g&&Aa.match(ub.h))Aa=parseInt(RegExp.$1);return new
p(s||new
Function(ub.i),Aa,ua,C,wa,fb);};o.init=function(h,i,a,j,b,n){if(!(typeof h==ub.j))throw new
jsx3.IllegalArgumentException(ub.k,h);this.u4=h;this.Up=a==null?null:Boolean(a);this.Iy=j==null?null:Boolean(j);this._L=b==null?null:Boolean(b);this.fV=n==null?null:Boolean(n);this.hH=typeof i==ub.l?i:p.keyDownCharToCode(i);if(this.hH==null)throw new
jsx3.IllegalArgumentException(ub.m,i);};o.getKey=function(){var
Z=ub.i;if(this.fV)Z=Z+ub.n;if(this._L)Z=Z+ub.o;if(this.Iy)Z=Z+ub.p;if(this.Up)Z=Z+ub.q;var
xa=p.keyDownCodeToChar(this.hH);Z=Z+(xa!=null?xa:ub.r+this.hH+ub.s);return Z;};o.getKeyCode=function(){return this.hH;};o.isMatch=function(h){var
mb=h.keyCode()==this.hH&&(this.Up==null||h.shiftKey()==this.Up)&&(this.Iy==null||h.ctrlKey()==this.Iy)&&(this.fV==null||h.metaKey()==this.fV)&&(this._L==null||h.altKey()==this._L);return mb;};o.invoke=function(e,d){if(this.JQ||!this.ZY)throw new
jsx3.Exception(jsx3._msg(ub.t,this));var
za=this.u4.apply(e,d);this.publish({subject:ub.a});return za;};o.isEnabled=function(){return this.ZY;};o.setEnabled=function(n){this.ZY=n;};o.isDestroyed=function(){return this.JQ;};o.destroy=function(){this.JQ=true;delete this[ub.u];};o.getFormatted=function(){var
Aa=null,Fb=null;if(jsx3.app.Browser.macosx){Aa=ub.i;Fb=p.eV;}else{Aa=ub.b;Fb=p.sF;}var
Lb=ub.i;if(this.Iy)Lb=Lb+(Fb.ctrl[0]+Aa);if(this._L)Lb=Lb+(Fb.alt[0]+Aa);if(this.Up)Lb=Lb+(Fb.shift[0]+Aa);if(this.fV)Lb=Lb+(Fb.meta[0]+Aa);var
bb=p.keyDownCodeToChar(this.hH,true);Lb=Lb+(bb!=null?bb.length==1?bb.toUpperCase():bb:ub.r+this.hH+ub.s);return Lb;};p.eV={meta:[ub.v,224],alt:[ub.w,18],ctrl:[ub.x,17],shift:[jsx3.CLASS_LOADER.FX&&jsx3.CLASS_LOADER.getVersion()<3?ub.y:ub.z,16],enter:[ub.A,13],esc:[ub.B,27],tab:[ub.C,9],del:[ub.D,46],space:[ub.E,32],backspace:[ub.F,8],up:[ub.G,38],down:[ub.H,40],left:[ub.I,37],right:[ub.J,39],insert:[ub.K,45],home:[ub.L,36],end:[ub.M,35],pgup:[ub.N,33],pgdn:[ub.O,34]};p.sF={meta:[ub.P,224],alt:[ub.Q,18],ctrl:[ub.R,17],shift:[ub.S,16],enter:[ub.T,13],esc:[ub.U,27],tab:[ub.V,9],del:[ub.W,46],space:[ub.X,32],backspace:[ub.Y,8],up:[ub.Z,38],down:[ub._,40],left:[ub.aa,37],right:[ub.ba,39],insert:[ub.K,45],home:[ub.ca,36],end:[ub.da,35],pgup:[ub.ea,33],pgdn:[ub.fa,34]};o.toString=function(){return ub.ga+this.hH+ub.ha+this.Up+ub.ia+this.Iy+ub.ja+this._L+ub.ka+this.fV;};p.rR={39:222,44:188,45:189,46:190,47:191,59:186,61:187,91:219,92:220,93:221,96:192};p.keyDownCharToCode=function(d){var
nb=null;if(d.length==1){var
La=d.charCodeAt(0);if(La>=65&&La<=90)nb=La;else if(La>=97&&La<=122)nb=La-32;else if(La>=48&&La<=57)nb=La;else nb=p.rR[La];}else if(p.sF[d.toLowerCase()]){nb=p.sF[d.toLowerCase()][1];}else if(d.match(ub.la))nb=parseInt(RegExp.$1)+112-1;return nb;};p.keyDownCodeToChar=function(a,l){var
t=null;if(a>=65&&a<=90)t=String.fromCharCode(a+97-65);else if(a>=48&&a<=57)t=String.fromCharCode(a);else if(a>=112&&a<=126)t=ub.ma+(a-112+1);else{for(var Da in p.rR)if(p.rR[Da]==a){t=String.fromCharCode(Da);break;}if(t==null){var
Cb=l&&jsx3.app.Browser.macosx?p.eV:p.sF;for(var Da in Cb)if(Cb[Da][1]==a){t=Cb[Da][0];break;}}}return t;};});jsx3.Class.defineClass("jsx3.gui.Painted",jsx3.app.Model,null,function(r,f){var
ub={A:"border",B:"jsxafterresizeview",C:"jsxdomholder",D:"1",a:" ",b:'="',c:/\"/g,d:"&quot;",e:'"',f:"",g:"jsxcustom",h:"object",i:'<span id="',j:'" style="display:none;" jsxdomholder="1"></span>',k:"jsx3.gui.Painted.domPaint",l:"beforeEnd",m:"repaint",n:"jsx3.gui.Painted.repaint",o:"_jsxHK",p:"_jsxFD",q:"_jsxxw",r:/\s*;\s*/g,s:/\s*:\s*/,t:/(-\S)/gi,u:"Top",v:"Right",w:"Bottom",x:"Left",y:"padding",z:"margin"};var
Fa=jsx3.html;r.MASK_NO_EDIT={NN:false,EE:false,SS:false,WW:false,MM:false};r.MASK_ALL_EDIT={NN:true,EE:true,SS:true,WW:true,MM:true};f.init=function(p){this.jsxsuper(p);};f.getAbsolutePosition=function(h,e){if(e==null)e=this.getRendered(h);if(e==null)return {L:0,T:0,W:0,H:0};if(h==null)h=(this.Jw()).getRendered(e);return Fa.getRelativePosition(h,e);};f.setAttribute=function(k,d){(this.getAttributes())[k]=d;return this;};f.getAttribute=function(k){return (this.getAttributes())[k];};f.getAttributes=function(){if(this.jsxcustom==null)this.jsxcustom={};return this.jsxcustom;};f.renderAttributes=function(b,s){var
w=[];if(this.jsxcustom!=null){var
ua=jsx3.gui.Interactive;var
ka=ua&&this.instanceOf(ua);for(var Qa in this.jsxcustom){var
oa=b!=null&&(jsx3.$A.is(b)&&jsx3.util.arrIndexOf(b,Qa)>=0||b[Qa])||s&&ka&&ua.isBridgeEventHandler(Qa);var
gb=this.jsxcustom[Qa];if(!oa&&gb!=null)w[w.length]=ub.a+Qa+ub.b+gb.replace(ub.c,ub.d)+ub.e;}}return w.join(ub.f);};f.removeAttribute=function(p){delete this.getAttributes()[p];return this;};f.removeAttributes=function(){delete this[ub.g];return this;};f.focus=function(){var
Qa=this.getRendered();if(Qa)Fa.focus(Qa);return Qa;};f.getMaskProperties=function(){return r.MASK_NO_EDIT;};f.getRendered=function(g){var
bb=null;if(g&&g instanceof jsx3.gui.Event){if(g.srcElement())bb=(g.srcElement()).ownerDocument;}else if(g&&typeof g==ub.h)bb=g.ownerDocument||(g.getElementById?g:null);if(bb==null)bb=this.getDocument();return bb!=null?bb.getElementById(this.getId()):null;};f.containsHtmlElement=function(d){var
_a=this.getRendered(d);if(_a)while(d!=null){if(_a==d)return true;d=d.parentNode;}return false;};f.getDocument=function(){var
Ib=this;while(Ib!=null){if(jsx3.gui.Window&&Ib instanceof jsx3.gui.Window)return Ib.getDocument();else if(Ib._jsxYn!=null)return Ib._jsxYn.getRootDocument();Ib=Ib.getParent();}return null;};f.Jw=function(){var
ha=this;while(ha!=null){if(jsx3.gui.Window&&ha instanceof jsx3.gui.Window)return ha.getRootBlock();else if(ha._jsxYn!=null)return ha._jsxYn.getRootBlock();ha=ha.getParent();}return null;};r.dJ=null;f.repaint=function(){var
ea=this.getRendered();if(this.isDomPaint()){if(ea!=null){var
Ib=ea.previousSibling;var
I=this.paintDom();if(I!=ea)ea.parentNode.replaceChild(I,ea);else if(I.parentNode==null)Ib.parentNode.insertBefore(I,Ib);}return null;}else{var
wa=null;if(ea!=null){wa=this.paint();Fa.setOuterHTML(ea,wa);r.gg(this,ea);}return wa;}};f.paint=jsx3.Method.newAbstract();f.onAfterPaint=function(m){};r.gg=function(p,n){var
Ra=[p];while(Ra.length>0){var
Ab=Ra.shift();if(Ab.onAfterPaint!=f.onAfterPaint){var
Ta=Ab.getRendered(n);if(Ta)Ab.onAfterPaint(Ta);}var
wa=Ab.getDescendantsOfType(r,true);if(wa.length>0)Ra.unshift.apply(Ra,wa);}};f.onAfterRestoreView=function(k){};r._onAfterRestoreViewCascade=function(n,b){var
Na=[n];while(Na.length>0){var
U=Na.shift();if(U.onAfterRestoreView!=f.onAfterRestoreView){var
ba=U.getRendered(b);if(ba)U.onAfterRestoreView(ba);}var
ib=U.getDescendantsOfType(r,true);if(ib.length>0)Na.unshift.apply(Na,ib);}};f.isDomPaint=function(){return false;};f.paintDom=function(){throw new
jsx3.Exception();};f.AD=function(){return ub.i+this.getId()+ub.j;};r.CK=[];r.jC=function(p){r.CK.push(p);jsx3.sleep(r.uS,ub.k);};r.uS=function(){for(var
Na=0;Na<r.CK.length;Na++){var
Ja=r.CK[Na];var
Ea=Ja.getRendered();if(Ea!=null){var
ab=Ja.paintDom();Ea.parentNode.replaceChild(ab,Ea);}}r.CK.splice(0,r.CK.length);};f.paintChild=function(g,d,j,h){if(j==null)j=this.getRendered();if(j!=null&&g instanceof r){if(!h)if(g.isDomPaint()){j.appendChild(g.paintDom());}else Fa.insertAdjacentHTML(j,ub.l,g.paint());r.gg(g,j);}};f.Im=function(s,p){this.paintChild(s,p);};f.insertHTML=function(p){this.paintChild(p);return this;};f.paintChildren=function(i){if(i==null)i=this.getChildren();var
Aa=new
Array(i.length);for(var
ja=0;ja<i.length;ja++){var
Ba=i[ja];if(!(Ba instanceof r))continue;if(Ba.isDomPaint()){Aa[ja]=Ba.AD();r.jC(Ba);}else{var
qb=Ba.getLoadType();if(qb==1||qb==2||qb==3){Aa[ja]=Ba.AD();jsx3.sleep(jsx3.makeCallback(ub.m,Ba),ub.n+Ba.getId());}else if((qb==5||qb==4)&&!Ba.nf()){Aa[ja]=Ba.AD();}else Aa[ja]=Ba.paint();}}return Aa.join(ub.f);};f._conditionalPaint=function(){var
F;if(this.isDomPaint()){F=this.AD();r.jC(this);}else{var
t=this.getLoadType();if(t==1||t==2||t==3){F=this.AD();jsx3.sleep(jsx3.makeCallback(ub.m,this),ub.n+this.getId());}else if((t==5||t==4)&&!this.nf()){F=this.AD();}else F=this.paint();}return F;};f.Wl=function(q,h){if(this._jsxHK)this.clearBoxProfile();if(this._jsxxw==null&&q)this._jsxxw=this.zd(h);return this._jsxxw;};f.Ed=function(c){this._jsxxw=c;};f.Qf=function(){this._jsxHK=true;};f.clearBoxProfile=function(k){var
Qa=[this];while(Qa.length>0){var
ma=Qa.shift();delete ma[ub.o];delete ma[ub.p];if(ma._jsxxw){delete ma[ub.q];if(k){var
Kb=ma.getChildren();if(Kb.length>0)Qa.push.apply(Qa,Kb);}}}};r.Ql=function(p,o,a){if(o){var
Ib=(jsx3.util.strTrim(o)).split(ub.r);for(var
Aa=0;Aa<Ib.length;Aa++){var
tb=Ib[Aa];if(tb==ub.f)continue;var
E=tb.split(ub.s);if(E&&E.length==2){var
xa=E[0].replace(ub.t,function(g,d){return (d.substring(1)).toUpperCase();});p.style[xa]=E[1];}}}else if(a){var
wb=[ub.u,ub.v,ub.w,ub.x];for(var
Aa=0;Aa<4;Aa++){var
xa=a+wb[Aa];p.style[xa]=ub.f;}}};f.recalcBox=function(p){this.findDescendants(function(l){l.clearBoxProfile(false);},true,true,false,true);this.pj(this.getParent()?(this.getParent()).Id(this):null,this.getRendered());if(p){var
I=this.getRendered();if(I!=null){var
x=this.Wl(true);for(var
ib=0;ib<p.length;ib++)if(p[ib]==ub.y){r.Ql(I,x.Hi(),ub.y);}else if(p[ib]==ub.z){r.Ql(I,x.Be(),ub.z);}else if(p[ib]==ub.A)r.Ql(I,x.Il(),ub.A);}}};f.Id=function(){var
Y=this._jsxxw;return Y!=null?{parentwidth:Y.ee(),parentheight:Y.ld()}:{};};f.Gi=function(p){var
Z=this._jsxFD?this._jsxFD[p]:null;return Z;};f.Ei=function(h,s){if(!this._jsxFD)this._jsxFD=[];this._jsxFD[h]=s;return s;};f.flushCachedClientDimensions=function(g){};f.zd=function(c){return new
r.Box({});};f.Hj=function(s,p,m){this.sk(s,p,m,1);};f.sk=function(j,c,l,q){if(q==1){this.Qf();if(c!=null)l.addRepaint(this);}else if(q==2||q==4){var
sa=this.Wl(true,j);var
xb=sa.recalculate(j,c,l);if(xb.w||xb.h){if(!r._RESIZE_EVENT&&jsx3.gui.Interactive)r._RESIZE_EVENT={subject:ub.B};if(r._RESIZE_EVENT)this.publish(r._RESIZE_EVENT);var
Db=this.getChildren();var
mb=q==4&&c?Math.max(0,c.childNodes.length-Db.length):0;for(var
ba=Db.length-1;ba>=0;ba--){var
Ab=Db[ba];var
ja=Ab.Wl(false);if(ja&&ja.wF())continue;var
Cb=ba+mb;var
Ia=c?c.childNodes[Cb]?c.childNodes[Cb]:true:null;l.add(Ab,{parentwidth:sa.ee(),parentheight:sa.ld()},Ia,true);}}else{}}else if(q==3){var
sa=this.Wl(true,j);if(c)sa.recalculate(j,c,l);}};f.Mc=function(j,g){var
R=new
r.Queue();R.add(this,j,g);R.start();};r.T8={};r.T8.add=function(s,d,q){s.xI(this,d,q);};r.T8.addRepaint=function(i){i.repaint();};f.pj=function(m,j){r.T8.add(this,m,j);};f.xI=function(m,s,p){this.applyDynamicProperties();delete this[ub.p];this.Hj(s,p,m);};f.nf=function(){return this._jsxshowstate;};f.bc=function(h){if(this._jsxshowstate!=h){this._jsxshowstate=h;if(h){var
Cb=this.getRendered();if(Cb&&(!Cb.firstChild||Cb.getAttribute(ub.C)==ub.D))this.repaint();}}};f.Kj=function(a){var
Ra=a.getServer();if(Ra){var
O=(a.getServer()).getRenderedOf(this);if(O)jsx3.html.removeNode(O);}};});jsx3.Class.defineClass("jsx3.gui.Painted.Queue",jsx3.lang.Object,[jsx3.util.EventDispatcher],function(c,b){var
ub={a:"jsx3.gui.Painted.queue",b:"unshift",c:"push",d:"done",e:"e7",f:"{Painted.Queue ",g:" ",h:"-",i:"}"};c.RQ=250;c.Zx=0;c.dY=new
jsx3.util.List();c.gY=true;c.Dy=false;c.enableChunking=function(d){c.gY=d;};c.yN=function(){c.doChunk();};c.doChunk=function(){if(c.gY){if(c.Dy)return;c.Dy=true;var
sb=(new
Date()).getTime()+c.RQ;var
O=(new
Date()).getTime();var
Ta=c.dY.removeAt(0);while(Ta!=null&&O<sb)if(Ta.e7.length>0){var
G=Ta.e7.shift();if(jsx3.$A.is(G))G[0].xI(Ta,G[1],G[2]);else G.repaint();O=(new
Date()).getTime();}else{Ta.destroy();Ta=c.dY.removeAt(0);}if(Ta!=null){c.dY.add(Ta,0);jsx3.sleep(c.doChunk,ub.a);}c.Dy=false;}else while(c.dY.size()>0){var
Ta=c.dY.removeAt(0);while(Ta.e7.length>0){var
G=Ta.e7.shift();if(jsx3.$A.is(G))G[0].xI(Ta,G[1],G[2]);else G.repaint();}}};b.init=function(){this.xs=
++c.Zx;this.e7=[];c.dY.add(this);};b.add=function(q,f,g,r){if(g===true)g=q.getRendered();this.e7[r?ub.b:ub.c]([q,f,g]);};b.addRepaint=function(r,l){this.e7[l?ub.b:ub.c](r);};b.start=function(){c.yN();};b.destroy=function(){this.publish({subject:ub.d});delete this[ub.e];c.dY.remove(this);};b.toString=function(){return ub.f+this.xs+ub.g+(this.e7!=null?this.e7.length:ub.h)+ub.i;};});jsx3.Class.defineClass("jsx3.gui.Painted.Box",jsx3.lang.Object,null,function(n,e){var
ub={A:"box",Aa:/-right/,B:"0px",Ba:/-bottom/,C:"string",Ca:/-left/,D:"number",Da:/border(?:(?:-top(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,E:"object",Ea:/border(?:(?:-top(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,F:"%",Fa:/border(?:(?:-top(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,G:";",Ga:/border(?:(?:-right(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,H:"px",Ha:/border(?:(?:-right(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,I:"px;",Ia:/border(?:(?:-right(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,J:"px ",Ja:/border(?:(?:-bottom(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,K:":",Ka:/border(?:(?:-bottom(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,L:"relativebox",La:/border(?:(?:-bottom(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,M:"<",Ma:/border(?:(?:-left(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,N:" ",Na:/border(?:(?:-left(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,O:"width:",Oa:/border(?:(?:-left(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,P:"height:",Pa:"IMPLICIT:\n",Q:'"/>',Qa:": ",R:'">',Ra:"\n",S:"left:0px",Sa:"\nEXPLICIT:\n",T:"left:",U:"top:0px",V:"top:",W:"position:absolute;",X:' style="',Y:"position:relative;",Z:"</",_:">",a:/[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)/,aa:"resize",b:/\b(\d*)px/g,ba:"onResize",c:"boxtype",ca:/input\[(\S*)\]/i,d:"tagname",da:"input",e:"margin",ea:/(^[;\s]*)|([;\s]*$)/g,f:"padding",fa:"pseudo",g:"border",ga:"border-top:",h:"left",ha:"border-right:",i:"top",ia:"border-bottom:",j:"width",ja:"border-left:",k:"height",ka:"text",l:"empty",la:"password",m:"container",ma:"textarea",n:"BW",na:"td",o:"m3",oa:"body",p:"lT",pa:'<div id="_jsx3_html_scr" class="jsx30block" style="padding:0px;margin:0px;border-width:0px;position:absolute;width:100px;height:100px;left:-100px;top:-100px;overflow:scroll;">&#160;</div>',q:"U0",qa:"beforeEnd",r:"Nt",ra:"_jsx3_html_scr",s:"yy",sa:"not matched",t:"E3",ta:"0",u:"_o",ua:/(\s*(padding|padding-top|padding-right|padding-bottom|padding-left)\s*:\s*(\d+)(px)?\s*((\d+)(px)?)?\s*((\d+)(px)?)?\s*((\d+)(px)?)?\s*;)+/ig,v:"right",va:/(\s*(margin|margin-top|margin-right|margin-bottom|margin-left)\s*:\s*(-*\d+)(px)?\s*((-*\d+)(px)?)?\s*((-*\d+)(px)?)?\s*((-*\d+)(px)?)?\s*;)+/ig,w:"bottom",wa:"Missing Semicolon",x:"",xa:/[^\s*]/i,y:"display:inline-block;",ya:"Mismatch Rule",z:"display:-moz-inline-box;",za:/-top/};var
pa=jsx3.html;n.lP=ub.a;n.sG=ub.b;n.RG=[ub.c,ub.d,ub.e,ub.f,ub.g,ub.h,ub.i,ub.j,ub.k,ub.l,ub.m];n.v1=[ub.c,ub.h,ub.i,ub.j,ub.k];n.VB={width:ub.n,height:ub.o,top:ub.p,left:ub.q,padding:ub.r,border:ub.s,margin:ub.t,tagname:ub.u};n.RZ=[ub.i,ub.v,ub.w,ub.h];n.Gv=null;if(jsx3.CLASS_LOADER.SAF){n.Cu=[ub.x,ub.y,ub.x,ub.y];}else if(jsx3.CLASS_LOADER.IE){n.Cu=[ub.x,ub.x,ub.y,ub.x];}else if(jsx3.CLASS_LOADER.FX&&jsx3.CLASS_LOADER.getVersion()>=3)n.Cu=[ub.x,ub.y,ub.x,ub.y];else n.Cu=[ub.x,ub.z,ub.x,ub.z];n.ay={pad:ub.f,mar:ub.e,e:ub.x,box:ub.A,zpx:ub.B,str:ub.C,num:ub.D,obj:ub.E,pct:ub.F,semi:ub.G,px:ub.H,pxs:ub.I,pxc:ub.J,c:ub.K,rbox:ub.L,bor:ub.g};n.aL={hph:{height:1,parentheight:1},wpw:{width:1,parentwidth:1}};n.gM=[ub.M,ub.N,ub.O,ub.P,ub.Q,ub.R,ub.S,ub.T,ub.U,ub.V,ub.W,ub.X,ub.Y,ub.Z,ub._,ub.x];n.getCssFix=function(){return n.Cu[pa.getMode()];};e.vv=ub.x;e.KK=ub.x;e.xV=ub.x;e.I6=true;e.styles=ub.x;e.attributes=ub.x;e.init=function(b){this.implicit=b||{};this.calculate();};e.reset=function(){this.I6=true;};e.paint=function(){this.I6=false;var
Cb=new
Array(2);var
Lb=n.gM[0]+this.Ts.tagname+n.gM[1]+this.attributes;var
M=this.getPaintedWidth();M=M!=null?n.gM[2]+Math.max(0,M)+n.ay.pxs:n.ay.e;var
aa=this.getPaintedHeight();aa=aa!=null?n.gM[3]+Math.max(0,aa)+n.ay.pxs:n.ay.e;var
da=this.Ts.empty?n.gM[4]:n.gM[5];if(this.Ts.boxtype==n.ay.box){var
T=this.Ts.left;T=T==null?n.gM[6]:n.gM[7]+T+n.ay.pxs;var
kb=this.Ts.top;kb=kb==null?n.gM[8]:n.gM[9]+kb+n.ay.pxs;var
zb=this.implicit.omitpos?n.ay.e:n.gM[10];Cb[0]=Lb+n.gM[11]+zb+M+aa+T+kb+this.Hi()+this.Be()+this.Il()+this.styles+da;}else if(this.Ts.boxtype==n.ay.rbox){var
zb=this.implicit.omitpos?n.ay.e:n.gM[12];Cb[0]=Lb+n.gM[11]+zb+this.K3()+M+aa+this.Hi()+this.Be()+this.Il()+this.styles+da;}else{var
T=this.Ts.left;T=T==null?n.ay.e:n.gM[7]+T+n.ay.pxs;var
kb=this.Ts.top;kb=kb==null?n.ay.e:n.gM[9]+kb+n.ay.pxs;var
zb=this.implicit.omitpos?n.ay.e:n.gM[12];Cb[0]=Lb+n.gM[11]+zb+M+aa+T+kb+this.Hi()+this.Be()+this.Il()+this.styles+da;}Cb[1]=this.Ts.empty?n.gM[15]:n.gM[13]+this.Ts.tagname+n.gM[14];return Cb;};e.setStyles=function(f){this.styles=f;return this;};e.setAttributes=function(d){this.attributes=d;return this;};e.K3=function(){return this.Ts.container&&(pa.getMode()==3||pa.getMode()==1)?n.ay.e:n.getCssFix();};e.wF=function(){var
Mb=this.implicit;return (typeof Mb.width!=n.ay.str||Mb.width.indexOf(n.ay.pct)<0)&&(typeof Mb.height!=n.ay.str||Mb.height.indexOf(n.ay.pct)<0)&&(typeof Mb.left!=n.ay.str||Mb.left.indexOf(n.ay.pct)<0)&&(typeof Mb.top!=n.ay.str||Mb.top.indexOf(n.ay.pct)<0);};n._RECALC_VALS=[[[[{n:1},{h:1}],[{w:1},{w:1,h:1}]],[[{t:1},{t:1,h:1}],[{t:1,w:1},{t:1,w:1,h:1}]]],[[[{l:1},{l:1,h:1}],[{l:1,w:1},{l:1,w:1,h:1}]],[[{l:1,t:1},{l:1,t:1,h:1}],[{l:1,t:1,w:1},{l:1,t:1,w:1,h:1,a:1}]]]];e.recalculate=function(j,s){var
bb=this.I6;var
R=0,Ta=0,sa=0,kb=0;for(var eb in j)if(this.implicit[eb]!=j[eb]){this.implicit[eb]=j[eb];bb=true;if(!sa&&n.aL.wpw[eb])sa=1;if(!kb&&n.aL.hph[eb])kb=1;}if(bb){this.calculate(n.v1);if(s&&s.style){var
za=s.style;if(this.Ts.boxtype==n.ay.box&&this.Ts.left!=null&&this.Ts.top!=null){if(parseInt(za.left)!=this.Ts.left){za.left=this.Ts.left+n.ay.px;R=1;}if(parseInt(za.top)!=this.Ts.top){za.top=this.Ts.top+n.ay.px;Ta=1;}}if(j.parentheight!=null||j.parentwidth!=null||j.width!=null||j.height!=null){var
qa=this.getPaintedWidth();var
N=this.getPaintedHeight();if(qa!=null&&parseInt(za.width)!=qa){za.width=Math.max(0,qa)+n.ay.px;sa=1;}else sa=0;if(N!=null&&parseInt(za.height)!=N){za.height=Math.max(0,N)+n.ay.px;kb=1;}else kb=0;}}}this.I6=false;return n._RECALC_VALS[R][Ta][sa][kb];};n.UX={left:1,top:1};n.GC=function(){};n.GC.prototype={padding:ub.x,margin:ub.x,border:ub.x,bwidth:0,bheight:0,btop:0,bleft:0,pwidth:0,pheight:0,ptop:0,pleft:0};e.calculate=function(a){if(!a)a=n.RG;if(!this.Ts)this.Ts=new
n.GC();var
vb=this.Ts;for(var
Ab=0;Ab<a.length;Ab++){var
Gb=a[Ab];var
wb=this.implicit[Gb];if(n.UX[Gb]&&(wb==null||wb==n.ay.e)&&this.implicit.boxtype==n.ay.box){vb[Gb]=0;}else{var
yb=n.VB[Gb];if(yb){if(wb===n.ay.e)wb=null;this[yb](wb);}else this.Ts[Gb]=wb;}}};n.registerServer=function(k,m){if(m)jsx3.gui.Event.subscribe(ub.aa,k,ub.ba);};n.unregisterServer=function(o,s){if(s)jsx3.gui.Event.unsubscribe(ub.aa,o,ub.ba);};e.BW=function(a){if(a==null){this.Ts.width=this.Ts.clientwidth=null;}else{if(typeof a==n.ay.str&&a.indexOf(n.ay.pct)>=0)a=Math.round(this.implicit.parentwidth*parseInt(a)/100);else a=Number(a);this.Ts.width=a;this.Ts.clientwidth=Math.max(0,a-this.Ts.pwidth-this.Ts.bwidth);}};e.m3=function(j){if(j==null){this.Ts.height=this.Ts.clientheight=null;}else{if(typeof j==n.ay.str&&j.indexOf(n.ay.pct)>=0)j=Math.round(this.implicit.parentheight*parseInt(j)/100);else j=Number(j);this.Ts.height=j;this.Ts.clientheight=Math.max(0,j-this.Ts.pheight-this.Ts.bheight);}};e.U0=function(j){this.Ts.left=typeof j==n.ay.str&&j.indexOf(n.ay.pct)>=0?Math.round(this.implicit.parentwidth*parseInt(j)/100):j==null?j:Number(j);};e.lT=function(m){this.Ts.top=typeof m==n.ay.str&&m.indexOf(n.ay.pct)>=0?Math.round(this.implicit.parentheight*parseInt(m)/100):m==null?m:Number(m);};e._o=function(d){if(d==null){this.Ts.tagname=d;this.Ts.type=d;}else if(d.search(ub.ca)>-1){this.Ts.tagname=ub.da;this.Ts.type=RegExp.$1.toLowerCase();}else this.Ts.tagname=d;};e.yy=function(f){if(f==null)f=n.ay.e;if(this.vv===f)return;this.vv=f;var
Ua=null,Lb=null;if(typeof f==n.ay.str&&f.indexOf(ub.K)>=0){var
O=n.U7(f);if(typeof O!=n.ay.obj)Ua=O.split(n.ay.semi);}else{f=f.replace(ub.ea,n.ay.e);if(f!==n.ay.e)Ua=f.split(n.ay.semi);}if(Ua&&Ua.length>1){var
gb=true;for(var
Wa=0;gb&&Wa<Ua.length-1&&Wa<3;Wa++)if(Ua[Wa]!=Ua[Wa+1])gb=false;if(gb)Ua.splice(1,Ua.length);}if(!Ua){Lb=[0,0,0,0];}else if(Ua.length==1){var
kb=Ua[0].match(n.sG);var
ab=kb?parseInt(kb[0]):0;if(isNaN(ab))ab=0;Lb=[ab,ab,ab,ab];}else{Lb=[];for(var
Wa=0;Wa<4;Wa++){var
kb=Ua[Wa].match(n.sG);var
ab=kb?parseInt(kb[0]):0;if(isNaN(ab))ab=0;Lb[Wa]=ab;}}this.Ts.bwidth=Lb[1]+Lb[3];this.Ts.bheight=Lb[0]+Lb[2];this.Ts.bleft=Lb[3];this.Ts.btop=Lb[0];if(Ua)for(var
Wa=0;Wa<Ua.length;Wa++)if(Ua[Wa].indexOf(ub.fa)>=0)Ua[Wa]=n.ay.e;if(Ua==null){this.Ts.border=n.ay.e;}else if(Ua.length==1){this.Ts.border=Ua[0]?n.ay.bor+n.ay.c+(Lb[0]>0?Ua[0]:n.ay.zpx)+n.ay.semi:n.ay.e;}else if(Ua.length==4)this.Ts.border=(Ua[0]?ub.ga+(Lb[0]>0?Ua[0]:n.ay.zpx)+n.ay.semi:n.ay.e)+(Ua[1]?ub.ha+(Lb[1]>0?Ua[1]:n.ay.zpx)+n.ay.semi:n.ay.e)+(Ua[2]?ub.ia+(Lb[2]>0?Ua[2]:n.ay.zpx)+n.ay.semi:n.ay.e)+(Ua[3]?ub.ja+(Lb[3]>0?Ua[3]:n.ay.zpx)+n.ay.semi:n.ay.e);};e.E3=function(l){if(l==null)l=n.ay.e;if(this.KK===l)return;this.KK=l;var
aa=null;if(typeof l==n.ay.str&&l.indexOf(ub.K)>-1){var
eb=n.LU(l,n.ay.mar);if(typeof eb!=n.ay.obj)aa=eb.match(n.lP);}else if(typeof l==n.ay.num){aa=[l];}else{l=jsx3.util.strTrim(String(l));if(l!==n.ay.e)if(isNaN(l))aa=l.match(n.lP);else aa=[Number(l)];}if(aa==null)this.Ts.margin=n.ay.e;else if(aa.length==1)this.Ts.margin=n.ay.mar+n.ay.c+aa[0]+n.ay.pxs;else this.Ts.margin=n.ay.mar+n.ay.c+aa[1]+n.ay.pxc+aa[2]+n.ay.pxc+aa[3]+n.ay.pxc+aa[4]+n.ay.pxs;};e.Nt=function(p){if(p==null)p=n.ay.e;if(this.xV===p)return;this.xV=p;var
eb=null;if(typeof p==n.ay.str&&p.indexOf(ub.K)>-1){var
Z=n.LU(p,n.ay.pad);if(typeof Z!=n.ay.obj)eb=Z.match(n.lP);}else if(typeof p==n.ay.num){eb=[p];}else{p=jsx3.util.strTrim(String(p));if(p!==n.ay.e)if(isNaN(p))eb=p.match(n.lP);else eb=[Number(p)];}var
fb=null;if(eb==null){fb=[0,0,0,0];this.Ts.padding=n.ay.e;}else if(eb.length==1){var
ra=eb[0];fb=[ra,ra,ra,ra];this.Ts.padding=n.ay.pad+n.ay.c+ra+n.ay.pxs;}else{fb=[];for(var
D=1;D<5;D++){var
ra=parseInt(eb[D]);if(isNaN(ra))ra=0;fb[D-1]=ra;}this.Ts.padding=n.ay.pad+n.ay.c+fb[0]+n.ay.pxc+fb[1]+n.ay.pxc+fb[2]+n.ay.pxc+fb[3]+n.ay.pxs;}this.Ts.pwidth=fb[1]+fb[3];this.Ts.pheight=fb[0]+fb[2];this.Ts.ptop=fb[0];this.Ts.pleft=fb[3];};e.cl=function(l){var
na=this.ys;if(!na)na=this.ys=[];na[na.length]=l;};e.lg=function(a){return this.ys?this.ys[a]:null;};e.qk=function(){return this.Ts.bleft+this.Ts.pleft;};e.hj=function(){return this.Ts.btop+this.Ts.ptop;};e.ee=function(){return this.Ts.clientwidth;};e.ld=function(){return this.Ts.clientheight;};e.getOffsetWidth=function(){return this.Ts.width;};e.getOffsetHeight=function(){return this.Ts.height;};e.getBorderWidth=function(){return this.Ts.bwidth;};e.getBorderHeight=function(){return this.Ts.bheight;};e.getPaintedWidth=function(){var
nb=this.Ts.type;var
Eb=pa.getMode();if(jsx3.CLASS_LOADER.SAF){var
fb=(nb==ub.ka||nb==ub.la||this.Ts.tagname==ub.ma||this.Ts.tagname==ub.na)&&Eb==1?this.Ts.width:this.Ts.clientwidth;}else var
fb=Eb==0||(nb==ub.ka||nb==ub.la||this.Ts.tagname==ub.ma)&&Eb==1?this.Ts.width:this.Ts.clientwidth;return fb===n.ay.e||isNaN(fb)?null:fb;};e.getPaintedHeight=function(){var
fb=this.Ts.type;var
sb=pa.getMode();var
B=sb==0||(fb==ub.ka||fb==ub.la||this.Ts.tagname==ub.ma)&&sb==1?this.Ts.height:this.Ts.clientheight;return B===n.ay.e||isNaN(B)?null:B;};e.getPaintedLeft=function(){return this.Ts.left;};e.getPaintedTop=function(){return this.Ts.top;};e.getBoxType=function(){return this.Ts.boxtype;};e.Be=function(){return this.Ts.margin||n.ay.e;};e.Hi=function(){return this.Ts.padding||n.ay.e;};e.Il=function(){return this.Ts.border||n.ay.e;};n.getBody=function(){return (document.getElementsByTagName(ub.oa))[0];};n.getScrollSize=function(m){if(n.Gv==null){var
jb=m||n.getBody();var
Fb=ub.pa;pa.insertAdjacentHTML(jb,ub.qa,Fb);var
ya=document.getElementById(ub.ra);n.Gv=100-parseInt(ya.clientWidth);jb.removeChild(ya);}return n.Gv;};n.getScrollSizeOffset=function(g){var
ra=n.getScrollSize();return pa.getScrollSizeOffset(ra,g);};n.LU=function(m,q){var
W=ub.sa;var
Fb=ub.ta;var
N=ub.ta;var
H=ub.ta;var
wa=ub.ta;var
Ua=ub.ua;var
ka=ub.va;var
ea=q==n.ay.pad?Ua:ka;var
Ha=m.split(n.ay.semi);if(Ha)for(var
Oa=0;Oa<Ha.length;Oa++){var
Gb=Ha[Oa]+n.ay.semi;var
bb=Gb.search(ea);if(bb>0){return {desc:ub.wa,cause:Ha[Oa]};}else if(bb==-1){if(Ha[Oa].search(ub.xa)>=0)return {desc:ub.ya,cause:Ha[Oa]};}else{W=Gb.replace(ea,function(d,c,b,a,s,r,l,p,o,k,j,i,h){if(b.match(ub.za)){Fb=a==null?ub.ta:a;}else if(b.match(ub.Aa)){N=a==null?ub.ta:a;}else if(b.match(ub.Ba)){H=a==null?ub.ta:a;}else if(b.match(ub.Ca)){wa=a==null?ub.ta:a;}else{Fb=jsx3.util.strEmpty(a)?ub.ta:a;N=jsx3.util.strEmpty(l)?Fb:l;H=jsx3.util.strEmpty(k)?Fb:k;wa=jsx3.util.strEmpty(h)?N:h;}return Fb+ub.N+N+ub.N+H+ub.N+wa;});W=Fb+ub.N+N+ub.N+H+ub.N+wa;}}return W;};var
Ja=ub.Da;var
La=ub.Ea;var
Ga=ub.Fa;var
Na=ub.Ga;var
_a=ub.Ha;var
Ka=ub.Ia;var
U=ub.Ja;var
F=ub.Ka;var
A=ub.La;var
w=ub.Ma;var
mb=ub.Na;var
fa=ub.Oa;n.U7=function(q){var
M={top:{width:0,color:ub.x,style:ub.x},right:{width:0,color:ub.x,style:ub.x},bottom:{width:0,color:ub.x,style:ub.x},left:{width:0,color:ub.x,style:ub.x}};while(Ja.exec(q))M.top.width=RegExp.$1;while(La.exec(q))M.top.color=RegExp.$1;while(Ga.exec(q))M.top.style=RegExp.$1;while(Na.exec(q))M.right.width=RegExp.$1;while(_a.exec(q))M.right.color=RegExp.$1;while(Ka.exec(q))M.right.style=RegExp.$1;while(U.exec(q))M.bottom.width=RegExp.$1;while(F.exec(q))M.bottom.color=RegExp.$1;while(A.exec(q))M.bottom.style=RegExp.$1;while(w.exec(q))M.left.width=RegExp.$1;while(mb.exec(q))M.left.color=RegExp.$1;while(fa.exec(q))M.left.style=RegExp.$1;return M.top.width+n.ay.pxc+M.top.style+ub.N+M.top.color+n.ay.semi+M.right.width+n.ay.pxc+M.right.style+ub.N+M.right.color+n.ay.semi+M.bottom.width+n.ay.pxc+M.bottom.style+ub.N+M.bottom.color+n.ay.semi+M.left.width+n.ay.pxc+M.left.style+ub.N+M.left.color;};e.toString=function(){var
ca=ub.Pa;for(var wb in this.implicit)ca=ca+(wb+ub.Qa+this.implicit[wb]+ub.Ra);ca=ca+ub.Sa;for(var wb in this.Ts)ca=ca+(wb+ub.Qa+this.Ts[wb]+ub.Ra);return ca;};});jsx3.Class.defineClass("jsx3.app.Model.Loading",jsx3.gui.Painted,null,function(b,n){var
ub={a:"undefined",b:"jsx1:strings/@jsxname"};n.init=function(s,r,k){this._jsxSW=s;s._jsxbm=true;this._jsxyt=r;this._jsxy3=k;if(r==2||r==3)jsx3.sleep(function(){var
ta=this.A9();if(r==2)this.Mq();else jsx3.sleep(function(){this.Mq();},null,this);},null,this);};n.A9=function(){var
db=this.getParent();var
ya=db.Ji.apply(this,[this._jsxSW].concat(this._jsxy3));db.setChild(ya,1,null,this._jsxy3[1]);db.insertBefore(ya,this,false);var
na=db.getDocument();if(na){var
Ta=na.getElementById(this._jsxid);if(Ta)Ta.id=ya._jsxid;}db.removeChild(this);this._jsxV3=ya;if(this._jsxyt==5)this.Mq();return ya;};n.getName=function(){if(typeof this._jsxE6==ub.a){var
Eb=this._jsxSW.selectSingleNode(ub.b);this._jsxE6=Eb?Eb.getValue():null;}return this._jsxE6;};n.getType=function(){return this._jsxyt;};n.Gj=function(e,s){return this._jsxSW.cloneNode(true);};n.Mq=function(){this._jsxV3.repaint();};n.paint=function(){return this.AD();};n.getRendered=function(){return null;};n.bc=function(q){if(q&&this._jsxyt==5)this.A9();this.jsxsuper(q);return this._jsxV3;};});jsx3.Class.defineClass("jsx3.gui.Heavyweight",null,null,function(a,s){var
ub={A:"jsxdestroy",Aa:" ",B:"yr",Ba:"/",C:"px",Ca:"3.00.00",D:"hidden",E:"1px",F:'<span class="jsx30scroller" style="position:absolute;top:0px;left:0px;width:',G:"px;height:",H:"px;background-image:url(",I:');"',J:"mouseover",K:"R3",L:"mouseout",M:"QW",N:">&#160;</span>",O:'<span class="jsx30scroller" style="position:absolute;top:',P:"px;left:0px;width:",Q:"SC",R:"_jsxXY",S:"yp",T:" on",U:'="',V:"jsx3.gui.Heavyweight.GO('",W:"').",X:"(event,this,'",Y:"');",Z:"0/0",_:"clientWidth",a:"jsx:///images/menu/scroll_up.gif",aa:"offsetWidth",b:"jsx:///images/menu/scroll_down.gif",ba:"left",c:"jsx_heavyweight_",ca:"width",d:"resize",da:"scrollLeft",e:"body",ea:"borderTopWidth",f:"gui.hw.doc",fa:"borderBottomWidth",g:"gui.hw.own",ga:"clientHeight",h:"",ha:"offsetHeight",i:"width:",ia:"top",j:"px;",ja:"height",k:"height:",ka:"scrollTop",l:'<div class="jsx30scrollpane" style="top:0px;">',la:"borderLeftWidth",m:"</div>",ma:"borderRightWidth",n:"mousewheel",na:"E",o:"ae",oa:"S",p:'<span id="',pa:"100px",q:'"',qa:"object",r:' style="position:absolute;overflow:;',ra:"number",s:"left:0px;top:0px;z-index:",sa:"N",t:';visibility:hidden;"',ta:"W",u:">",ua:"NE",v:"</span>",va:"SE",w:"beforeEnd",wa:"SW",x:"Y",xa:"NW",y:"X",ya:"O",z:"visible",za:' class="jsx30block jsx30heavy '};var
Lb=jsx3.util.Logger.getLogger(a.jsxclass.getName());var
pb=jsx3.gui.Event;a.TL={};a.Zx=1;a.u3=jsx3.resolveURI(ub.a);a.HO=jsx3.resolveURI(ub.b);a.N6=75;a.V6=12;a.AW=18;a.DEFAULTZINDEX=32000;a.jH=10;s.init=function(p,e){this.H0=p!=null?p:a.gV();this.Ev=e;if(a.TL[this.H0]!=null)a.TL[this.H0].destroy();a.TL[this.H0]=this;};a.gV=function(){return ub.c+a.Zx++;};a.UJ=function(){var
N=a.TL;var
ya=false;for(var ca in N){N[ca].hide();if(!ya&&N[ca].Ev){N[ca].Ev.focus();ya=true;}}};pb.subscribe(ub.d,a.UJ);s.wt=function(){if(this.Ev){var
ca=this.Ev.getDocument();if(ca)return (ca.getElementsByTagName(ub.e))[0];else Lb.warn(jsx3._msg(ub.f,this));}else Lb.warn(jsx3._msg(ub.g,this));return null;};a.GO=function(j){return a.TL[j];};s.show=function(e){var
Db=this.getId();var
va=this.getHTML();if(jsx3.util.strEmpty(va))return;var
D=this.getWidth();var
Ua=D==null?ub.h:ub.i+D+ub.j;var
Aa=this.getHeight();var
N=Aa==null?ub.h:ub.k+Aa+ub.j;var
L=ub.h;if(this.jZ){va=ub.l+va+ub.m;L=this.FN(ub.n,ub.o);}var
Y=ub.p+Db+ub.q+this.dd()+ub.r+Ua+N+ub.s+this.getZIndex()+ub.t+L+ub.u+va+ub.v;var
Jb=this.getDomParent();jsx3.html.insertAdjacentHTML(Jb,ub.w,Y);var
rb=this.getRendered();var
wb=this.c9(rb);this.applyRatio(wb);var
la=wb.offsetWidth,Ta=wb.offsetHeight;this.applyRules(ub.x,Ta);this.applyRules(ub.y,la);if(e!=false)this.setVisibility(ub.z);if(this.Ev)this.Ev.subscribe(ub.A,this,ub.B);if(this.jZ){var
ea=rb.childNodes[0];ea.style.width=rb.offsetWidth+ub.C;ea.style.height=rb.offsetHeight+ub.C;rb.style.overflow=ub.D;this.rC(rb);}};s.ae=function(i,d){this.dO(i.getWheelDelta()*2);};s.rC=function(l){var
D=l.childNodes[0];var
ha=this.c9(l);var
db=l.childNodes[1];var
Bb=l.childNodes[2];var
mb=D.clientWidth,ab=D.clientHeight;var
Ma=new
jsx3.gui.Painted.Box({width:mb,height:a.AW,border:ub.E});Ma.calculate();var
eb=Ma.getPaintedWidth();var
ia=Ma.getPaintedHeight();if(ha.offsetHeight>ab){if(!db)jsx3.html.insertAdjacentHTML(l,ub.w,ub.F+eb+ub.G+ia+ub.H+a.u3+ub.I+this.FN(ub.J,ub.K)+this.FN(ub.L,ub.M)+ub.N);if(!Bb)jsx3.html.insertAdjacentHTML(l,ub.w,ub.O+(ab-a.AW)+ub.P+eb+ub.G+ia+ub.H+a.HO+ub.I+this.FN(ub.J,ub.Q)+this.FN(ub.L,ub.M)+ub.N);this.Wu(l);}else{if(db)jsx3.html.removeNode(db);if(Bb)jsx3.html.removeNode(Bb);}};s.Wu=function(h){var
jb=h.childNodes[1];var
wb=h.childNodes[2];var
ba=h.offsetHeight,Cb=h.childNodes[0].childNodes[0].offsetHeight,ga=parseInt(h.childNodes[0].style.top);if(jb)jb.style.visibility=ga>=0?ub.D:ub.z;if(wb)wb.style.visibility=ba>=Cb+ga?ub.D:ub.z;};s.R3=function(p,i){this.xB(p,i,1);};s.SC=function(c,m){this.xB(c,m,-1);};s.QW=function(k,b){window.clearInterval(this._jsxXY);delete this[ub.R];};s.xB=function(i,l,h){if(this._jsxXY==null){var
B=this;this._jsxXY=window.setInterval(function(){B.dO(h);},a.N6);B.dO(h);}};s.dO=function(h){var
nb=this.getRendered();if(nb){var
Fb=nb.childNodes[0];var
U=nb.offsetHeight,N=Fb.childNodes[0].offsetHeight,F=parseInt(Fb.style.top);var
pa=Math.min(0,Math.max(F+h*a.V6,U-N));Fb.style.top=pa+ub.C;this.Wu(nb);}else this.QW();};s.scrollTo=function(d){var
Ea=this.getRendered();if(!Ea||!Ea.childNodes[1])return;Ea.scrollTop=0;var
ib=Ea.childNodes[0];var
Va=Ea.offsetHeight,ua=ib.childNodes[0].offsetHeight,v=-1*parseInt(ib.style.top),M=d.offsetTop,Ma=d.offsetHeight;var
Y=null;if(M<v+a.AW){Y=M-a.AW;}else if(M>Va+v-a.AW-Ma)Y=M-Va+a.AW+Ma;if(Y!=null){ib.style.top=Math.min(0,Math.max(-1*Y,Va-ua))+ub.C;this.Wu(Ea);}};s.FN=function(e,r){var
Oa=ub.S;return ub.T+e+ub.U+ub.V+this.getId()+ub.W+Oa+ub.X+r+ub.Y+ub.q;};s.yp=function(h,r,o){this[o].call(this,pb.wrap(h),r);};s.applyRatio=function(d){var
Ea=this.getRatio();if(Ea&&d&&d.style){var
cb=null,nb=null;cb=d.offsetHeight;nb=d.offsetWidth;var
v=Math.max(Math.round(Math.sqrt(nb*cb*Ea)),nb);d.style.width=v+ub.C;}};s.c9=function(k){return jsx3.html.selectSingleElm(k,this.jZ?ub.Z:0);};s.applyRules=function(f,n){var
v=this.getRendered();var
la=this.getDomParent();if(v==null||la==null)return;var
Aa,aa,nb,Ja,Nb,xa,U,w;if(f==ub.y){Aa=ub._;nb=ub.aa;aa=ub.ba;Ja=ub.ca;Nb=ub.da;xa=this.getWidth();U=ub.ea;w=ub.fa;}else{Aa=ub.ga;nb=ub.ha;aa=ub.ia;Ja=ub.ja;Nb=ub.ka;xa=this.getHeight();U=ub.la;w=ub.ma;}var
Ya=(this.getPositionRules())[f].length;var
Ma=la[Aa];var
z=0;var
fb=null;for(var
vb=0;vb<Ya&&!fb;vb++){var
V=this.getPositionRule(vb,f);var
Ta=V.xZ==ub.na||V.xZ==ub.oa;if(V.qF==null){z=Ma-n;}else{var
ma=this.getPoint(v,V.xZ);z=Ta?V.qF-ma[f]-n:V.qF-ma[f];}if(Ta){V.WZ=Math.max(a.jH+la[Nb],z);V.yw=V.qF-a.jH;}else{V.WZ=Math.max(0,z);V.yw=Math.min(Ma+2*la[Nb]-a.jH-V.qF,Ma+2*la[Nb]-2*a.jH);}if(n>V.yw){}else fb=V;}var
Va=fb!=null;if(!fb)for(var
vb=0;vb<Ya;vb++){var
V=this.getPositionRule(vb,f);if(!fb||fb.yw<V.yw)fb=V;}if(fb){var
rb=fb.WZ;var
ta=Math.min(n,fb.yw);v.style[aa]=rb+ub.C;if(xa==null){v.style[Ja]=ta+ub.C;if(!Va){var
Ib=v.childNodes[0];Ib.style[Ja]=ub.pa;var
ia=Ib[nb]-100;Ib.style[Ja]=Math.max(0,ta-ia)+ub.C;}}}};s.hide=function(){var
U=this.getRendered();if(U)jsx3.html.removeNode(U);if(this.Ev)this.Ev.unsubscribe(ub.A,this);};s.yr=function(m){var
ua=m.context.objPARENT;var
Qa=(ua.getDocument()).getElementById(this.getId());if(Qa)jsx3.html.removeNode(Qa);this.Ev.unsubscribe(ub.A,this);this.Ev=null;delete a.TL[this.getId()];this.H0=null;};s.destroy=function(){if(!a.TL[this.H0])return;this.hide();this.Ev=null;delete a.TL[this.H0];this.H0=null;};s.getRendered=function(r){var
Ja=this.getId();if(Ja==null)return null;var
Q=null;if(r instanceof pb){if(r.srcElement())Q=(r.srcElement()).ownerDocument;}else if(r!=null)Q=r.getElementById?r:r.ownerDocument;if(!Q&&this.Ev)Q=this.Ev.getDocument();if(Q)return Q.getElementById(Ja);else if(this.Ev!=null&&this.Ev.getServer()!=null)Lb.warn(jsx3._msg(ub.f,this));return null;};s.containsHtmlElement=function(l){var
G=this.getRendered(l);if(G)while(l!=null){if(G==l)return true;l=l.parentNode;}return false;};s.getId=function(){return this.H0;};s._setId=function(f){this.H0=f;};s.getHTML=function(){return this.html;};s.setHTML=function(c,l){this.html=c;if(l){var
x=this.getRendered();if(x!=null)x.innerHTML=c;}return this;};s.getDomParent=function(){return this.dC==null?this.wt():this.dC;};s.setDomParent=function(i){this.dC=i;return this;};s.getRatio=function(){return this.l2;};s.setRatio=function(b){this.l2=b;return this;};s.getOverflow=function(){return this.Qs==null?2:this.Qs;};s.setOverflow=function(h){this.Qs=h;return this;};s.setScrolling=function(e){this.jZ=e;};s.setVisibility=function(h){var
Ua=this.getRendered();if(Ua)Ua.style.visibility=h;return this;};s.getZIndex=function(){return this.qr!=null?this.qr:a.DEFAULTZINDEX;};s.setZIndex=function(i){this.qr=i;return this;};s.getWidth=function(){return this.Vv==null?null:this.Vv;};s.setWidth=function(d){this.Vv=d;return this;};s.getHeight=function(){return this.rz==null?null:this.rz;};s.setHeight=function(d){this.rz=d;return this;};s.addXRule=function(j,k,r,m){var
da=j instanceof jsx3.gui.Event?j.clientX():(this.getPoint(j,k)).X;this.addRule(da,r,m,ub.y);return this;};s.addYRule=function(r,c,g,e){var
Pa=r instanceof jsx3.gui.Event?r.clientY():(this.getPoint(r,c)).Y;this.addRule(Pa,g,e,ub.x);return this;};s.addRule=function(k,h,l,n){var
va=this.getPositionRules();var
Pa=va[n];Pa[Pa.length]={qF:k==null?a.jH:k+l,xZ:h};return this;};s.getPositionRule=function(d,n){return (this.getPositionRules())[n][d];};s.getPositionRules=function(){if(typeof this.zz!=ub.qa){this.zz={};this.zz.X=[];this.zz.Y=[];}return this.zz;};s.getPoint=function(q,i){if(typeof q==ub.ra)return {X:q,Y:q};var
Hb=null;if(q instanceof jsx3.gui.Block)Hb=q.getAbsolutePosition(this.getDomParent());else Hb=jsx3.html.getRelativePosition(this.getDomParent(),q);switch(i){case ub.sa:return {X:Hb.L+Math.floor(Hb.W/2),Y:Hb.T};case ub.oa:return {X:Hb.L+Math.floor(Hb.W/2),Y:Hb.T+Hb.H};case ub.na:return {X:Hb.L+Hb.W,Y:Hb.T+Math.floor(Hb.H/2)};case ub.ta:return {X:Hb.L,Y:Hb.T+Math.floor(Hb.H/2)};case ub.ua:return {X:Hb.L+Hb.W,Y:Hb.T};case ub.va:return {X:Hb.L+Hb.W,Y:Hb.T+Hb.H};case ub.wa:return {X:Hb.L,Y:Hb.T+Hb.H};case ub.xa:return {X:Hb.L,Y:Hb.T};case ub.ya:return {X:Hb.L+Math.floor(Hb.W/2),Y:Hb.T+Math.floor(Hb.H/2)};}};s.getClassName=function(){return this.jsxclassname;};s.setClassName=function(g){this.jsxclassname=g;return this;};s.dd=function(){var
xb=this.getClassName();return ub.za+(xb?ub.Aa+xb:ub.h)+ub.q;};s.toString=function(){return this.jsxsuper()+ub.Aa+this.getId()+ub.Ba+this.Ev;};a.getVersion=function(){return ub.Ca;};});jsx3.Heavyweight=jsx3.gui.Heavyweight;jsx3.require("jsx3.gui.HotKey");jsx3.Class.defineInterface("jsx3.gui.Interactive",null,function(f,e){var
ub={A:"jsxbeforeedit",Aa:"dl",B:"jsxbeforemove",Ba:/\"/g,C:"jsxbeforeresize",Ca:"&quot;",D:"jsxbeforeselect",Da:";",E:"jsxbeforesort",Ea:"string",F:"jsxcanceldrop",Fa:"jsx3.",G:"jsxctrldrop",Ga:"(event,this,'",H:"jsxdestroy",Ha:"',",I:"jsxdata",Ia:");",J:"jsxdrag",Ja:"jsx3.GO('",K:"jsxdrop",Ka:"').",L:"jsxexecute",La:"');",M:"jsxhide",Ma:" ",N:"jsxincchange",Na:'="',O:"jsxinput",Oa:"",P:"jsxmenu",Pa:'"',Q:"jsxscroll",Qa:/;\s*$/,R:"jsxselect",Ra:"gui.int.br",S:"jsxshow",Sa:"id",T:"jsxspy",Ta:"body",U:"jsxtoggle",Ua:"gui.int.eb",V:/\S/,Va:"absolute",W:"function",Wa:"JSXDragId",X:"blur",Xa:"JSXDragType",Y:"change",Ya:"_jsxspy",Z:"click",Za:"jsx3.gui.Heavyweight",_:"dblclick",_a:'<span class="jsx30spyglassbuffer"><div class="jsx30spyglass">',a:"jsxblur",aa:"focus",ab:"</div></span>",b:"jsxchange",ba:"keydown",bb:"W",c:"jsxclick",ca:"keypress",cb:"E",d:"jsxdblclick",da:"keyup",db:"S",e:"jsxfocus",ea:"mousedown",eb:"N",f:"jsxkeydown",fa:"mousemove",fb:"X",g:"jsxkeypress",ga:"mouseout",gb:"Y",h:"jsxkeyup",ha:"mouseover",hb:"_jsxIu",i:"jsxload",ia:"mouseup",ib:"_jsxsP",j:"jsxmousedown",ja:"mousewheel",jb:"jsxspystylekeys",k:"jsxmouseout",ka:"ah",kb:"jsxspystylevalues",l:"jsxmouseover",la:"Ml",lb:/ *; */,m:"jsxmouseup",ma:"nj",mb:/(-\S)/gi,n:"jsxmousewheel",na:"Xj",nb:":",o:"text-decoration:underline",oa:"Vl",ob:"jsxmodal",p:"jsxadopt",pa:"_ebKeyDown",pb:"vntCallback",q:"jsxafterappend",qa:"Lh",qb:"3.00.00",r:"jsxaftercommit",ra:"mc",rb:"EVENTSVERS",s:"jsxafteredit",sa:"Fo",sb:"onDestroy",t:"jsxaftermove",ta:"_ebMouseMove",tb:"rB",u:"jsxafterreorder",ua:"Uc",v:"jsxafterresize",va:"Ri",w:"jsxafterresizeview",wa:"yo",x:"jsxaftersort",xa:"ae",y:"jsxbeforeappend",ya:"on",z:"jsxbeforedrop",za:"yp"};var
N=jsx3.gui.Event;f.JSXBLUR=ub.a;f.JSXCHANGE=ub.b;f.JSXCLICK=ub.c;f.JSXDOUBLECLICK=ub.d;f.JSXFOCUS=ub.e;f.JSXKEYDOWN=ub.f;f.JSXKEYPRESS=ub.g;f.JSXKEYUP=ub.h;f.JSXLOAD=ub.i;f.JSXMOUSEDOWN=ub.j;f.JSXMOUSEOUT=ub.k;f.JSXMOUSEOVER=ub.l;f.JSXMOUSEUP=ub.m;f.JSXMOUSEWHEEL=ub.n;f.FOCUS_STYLE=ub.o;f.ADOPT=ub.p;f.AFTER_APPEND=ub.q;f.AFTER_COMMIT=ub.r;f.AFTER_EDIT=ub.s;f.AFTER_MOVE=ub.t;f.AFTER_REORDER=ub.u;f.AFTER_RESIZE=ub.v;f.AFTER_RESIZE_VIEW=ub.w;f.AFTER_SORT=ub.x;f.BEFORE_APPEND=ub.y;f.BEFORE_DROP=ub.z;f.BEFORE_EDIT=ub.A;f.BEFORE_MOVE=ub.B;f.BEFORE_RESIZE=ub.C;f.BEFORE_SELECT=ub.D;f.BEFORE_SORT=ub.E;f.CANCEL_DROP=ub.F;f.CHANGE=ub.b;f.CTRL_DROP=ub.G;f.DESTROY=ub.H;f.DATA=ub.I;f.DRAG=ub.J;f.DROP=ub.K;f.EXECUTE=ub.L;f.HIDE=ub.M;f.INCR_CHANGE=ub.N;f.INPUT=ub.O;f.MENU=ub.P;f.SCROLL=ub.Q;f.SELECT=ub.R;f.SHOW=ub.S;f.SPYGLASS=ub.T;f.TOGGLE=ub.U;e.ah=function(q,o){this.doEvent(ub.a,{objEVENT:q});};e.Ml=function(a,l){this.doEvent(ub.b,{objEVENT:a});};e.nj=function(n,r){this.doEvent(ub.c,{objEVENT:n});};e.Xj=function(s,m){this.doEvent(ub.d,{objEVENT:s});};e.Vl=function(d,i){this.doEvent(ub.e,{objEVENT:d});};e._ebKeyDown=function(k,b){var
Eb=false;if(this.hasHotKey())Eb=this.checkHotKeys(k);if(!Eb)this.doEvent(ub.f,{objEVENT:k});return Eb;};e.Lh=function(l,a){this.doEvent(ub.g,{objEVENT:l});};e.mc=function(r,n){this.doEvent(ub.h,{objEVENT:r});};e.Fo=function(n,r){this.doEvent(ub.j,{objEVENT:n});};e.Uc=function(m,s){this.doEvent(ub.k,{objEVENT:m});};e.Ri=function(q,o){this.doEvent(ub.l,{objEVENT:q});};e.yo=function(n,r){var
ma=null;this.doEvent(ub.m,{objEVENT:n});if(n.rightButton()&&(ma=this.getMenu())!=null){var
Db=this.Pk(ma);if(Db!=null){var
pb=this.doEvent(ub.P,{objEVENT:n,objMENU:Db,_gipp:1});if(pb!==false){if(pb instanceof Object&&pb.objMENU instanceof jsx3.gui.Menu)Db=pb.objMENU;Db.showContextMenu(n,this);}}}};e.ae=function(p,i){this.doEvent(ub.n,{objEVENT:p});};e.setEvent=function(g,d){(this.getEvents())[d]=g;return this;};e.getEvents=function(){if(this._jsxHj==null)this._jsxHj={};return this._jsxHj;};e.getEvent=function(r){if(this._jsxHj)return this._jsxHj[r];};e.hasEvent=function(q){return this._jsxHj!=null&&this._jsxHj[q]!=null&&this._jsxHj[q].match(ub.V);};e.doEvent=function(b,s){var
Z=this.getEvent(b);if(typeof this.publish==ub.W)this.publish({subject:b,context:s});return this.eval(Z,this._getEvtContext(s));};e._getEvtContext=function(s){var
I=this._jsxgd;if(I)s=((jsx3.$O(I.Md)).clone()).extend(s);return s;};e.removeEvent=function(c){if(this._jsxHj!=null)delete this._jsxHj[c];return this;};e.removeEvents=function(){this._jsxHj={};return this;};e.setCanMove=function(m){this.jsxmove=m;return this;};e.getCanMove=function(){return this.jsxmove||0;};e.setCanDrag=function(l){this.jsxdrag=l;return this;};e.getCanDrag=function(){return this.jsxdrag||0;};e.setCanDrop=function(l){this.jsxdrop=l;return this;};e.getCanDrop=function(){return this.jsxdrop||0;};e.setCanSpy=function(p){this.jsxspy=p;return this;};e.getCanSpy=function(){return this.jsxspy||0;};e.getMenu=function(){return this.jsxmenu;};e.setMenu=function(d){this.jsxmenu=d;return this;};f.yg=[ub.X,ub.Y,ub.Z,ub._,ub.aa,ub.ba,ub.ca,ub.da,ub.ea,ub.fa,ub.ga,ub.ha,ub.ia,ub.ja];f.mn={};f.mn[ub.X]=ub.ka;f.mn[ub.Y]=ub.la;f.mn[ub.Z]=ub.ma;f.mn[ub._]=ub.na;f.mn[ub.aa]=ub.oa;f.mn[ub.ba]=ub.pa;f.mn[ub.ca]=ub.qa;f.mn[ub.da]=ub.ra;f.mn[ub.ea]=ub.sa;f.mn[ub.fa]=ub.ta;f.mn[ub.ga]=ub.ua;f.mn[ub.ha]=ub.va;f.mn[ub.ia]=ub.wa;f.mn[ub.ja]=ub.xa;f.isBridgeEventHandler=function(i){if(f.wC==null){f.wC={};for(var
ja=0;ja<f.yg.length;ja++)f.wC[ub.ya+f.yg[ja]]=true;}return f.wC[i];};f._BRIDGE=ub.za;f._EB=ub.Aa;e.qj=function(i,s){var
na={};if((i==null||!i[ub.ba])&&(this.hasHotKey()||this.getAlwaysCheckHotKeys()))na[ub.ba]=true;if((i==null||!i[ub.ia])&&this.getMenu())na[ub.ia]=true;var
S=[];var
Va=this.instanceOf(jsx3.gui.Painted);var
ib=this.getId();for(var
Gb=0;Gb<f.yg.length;Gb++){var
G=f.yg[Gb];var
gb=ub.ya+G;var
ga=[];var
yb=Va?this.getAttribute(gb):null;if(yb)ga[ga.length]=yb.replace(ub.Ba,ub.Ca)+ub.Da;var
Sa=i&&i[G]||na[G];if(Sa){if(typeof Sa!=ub.Ea)Sa=f.mn[G];if(s!=null)ga[ga.length]=ub.Fa+f._EB+ub.Ga+Sa+ub.Ha+s+ub.Ia;else ga[ga.length]=ub.Ja+ib+ub.Ka+f._BRIDGE+ub.Ga+Sa+ub.La;}if(ga.length>0)S[S.length]=ub.Ma+gb+ub.Na+ga.join(ub.Oa)+ub.Pa;}return S.join(ub.Oa);};e.Fg=function(o,r,c){var
Ta=ub.ya+o;var
cb=ub.Oa;var
S=false;if(S){var
pb=this.getAttribute(Ta);if(pb){cb=cb+pb;if(!pb.match(ub.Qa))cb=cb+ub.Da;}}var
qb=c!=null?ub.Fa+f._EB+ub.Ga+r+ub.Ha+c+ub.Ia:ub.Ja+this.getId()+ub.Ka+f._BRIDGE+ub.Ga+r+ub.La;return ub.Ma+Ta+ub.Na+cb+qb+ub.Pa;};e.yp=function(l,c,k){var
nb;if(!l&&c&&(nb=c.ownerDocument.parentWindow))l=nb.event;if(l){var
qb=this[k];var
Va=jsx3.gui.Event.wrap(l);if(qb){qb.call(this,Va,c);}else throw new
jsx3.Exception(jsx3._msg(ub.Ra,k,Va.getType(),this));}};jsx3.dl=function(m,s,j,q){var
Eb=s;q=q||Number(0);for(var
Mb=0;Mb<q;Mb++)Eb=Eb.parentNode;var
gb=Eb.getAttribute(ub.Sa);var
Na=jsx3.GO(gb);if(Na!=null)Na.yp(m,s,j);else if(jsx3.html.getElmUpByTagName(s,ub.Ta)!=null)throw new
jsx3.Exception(jsx3._msg(ub.Ua,gb,q,s));};f._beginMove=function(c,j,k,l){var
Mb=j.ownerDocument;jsx3.gui.Event.preventSelection(Mb);var
ca=c.getTrueX();var
Ua=j.offsetLeft;jsx3.EventHelp.constrainY=l;jsx3.EventHelp.xOff=Ua-ca;var
Ta=c.getTrueY();var
ab=j.offsetTop;jsx3.EventHelp.constrainX=k;jsx3.EventHelp.yOff=ab-Ta;jsx3.EventHelp.Fr=j;jsx3.EventHelp.FLAG=1;jsx3.EventHelp.beginTrackMouse(c);c.setCapture(j);c.cancelReturn();c.cancelBubble();};f._beginMoveConstrained=function(k,b,p){var
Db=b.ownerDocument;jsx3.gui.Event.preventSelection(Db);jsx3.EventHelp.startX=k.getTrueX();jsx3.EventHelp.startY=k.getTrueY();jsx3.EventHelp.xOff=b.offsetLeft;jsx3.EventHelp.yOff=b.offsetTop;jsx3.EventHelp.dragRounder=p;jsx3.EventHelp.Fr=b;jsx3.EventHelp.FLAG=3;jsx3.EventHelp.iL=false;jsx3.EventHelp.beginTrackMouse(k);k.setCapture(b);k.cancelReturn();k.cancelBubble();};e.doBeginMove=function(m,s){if(!m.leftButton())return;if(s==null)s=this.getRendered();var
Fa=s.ownerDocument;var
Ab=this.doEvent(ub.B,{objEVENT:m});var
wa=Ab===false;if(s!=null&&!wa){s.style.zIndex=(this.getServer()).getNextZIndex(jsx3.app.Server.Z_DRAG);jsx3.gui.Event.preventSelection(Fa);var
W=m.getTrueX();var
Ka=s.style.position==ub.Va?parseInt(s.style.left)||0:s.scrollLeft;if(Ab&&Ab.bCONSTRAINY)jsx3.EventHelp.constrainY=true;jsx3.EventHelp.xOff=Ka-W;var
lb=m.getTrueY();var
aa=s.style.position==ub.Va?parseInt(s.style.top)||0:s.scrollTop;if(Ab&&Ab.bCONSTRAINX)jsx3.EventHelp.constrainX=true;jsx3.EventHelp.yOff=aa-lb;jsx3.EventHelp.Fr=s;jsx3.EventHelp.FLAG=1;jsx3.EventHelp.iL=false;jsx3.EventHelp.beginTrackMouse(m);m.setCapture(s);}};e.doEndMove=function(m,s){if(s==null)s=this.getRendered();if(s!=null){s.style.zIndex=this.getZIndex();m.releaseCapture(s);var
Va=parseInt(s.style.left);var
Lb=parseInt(s.style.top);this.setLeft(Va);this.setTop(Lb);this.doEvent(ub.t,{objEVENT:m,intL:Va,intT:Lb,_gipp:1});}};e.doDrag=function(n,r,j,c){n.cancelAll();if(r==null){r=n.srcElement();while(r!=null&&r.getAttribute(ub.Wa)==null){r=r.parentNode;if(r=(r.ownerDocument.getElementsByTagName(ub.Ta))[0])r=null;}if(r==null)return;}var
Z=r.getAttribute(ub.Wa);var
ja=r.getAttribute(ub.Xa);if(c==null)c={};c.strDRAGID=r.getAttribute(ub.Wa);c.strDRAGTYPE=r.getAttribute(ub.Xa);c.objGUI=r;c.objEVENT=n;if(this.doEvent(ub.J,c)===false)return;jsx3.EventHelp.DRAGTYPE=c.strDRAGTYPE;jsx3.EventHelp.DRAGID=c.strDRAGID;if(jsx3.$A.is(c.strDRAGIDS))jsx3.EventHelp.DRAGIDS=c.strDRAGIDS;jsx3.EventHelp.JSXID=this;if(j==null)j=jsx3.EventHelp.drag;var
C=j(r,this,jsx3.EventHelp.DRAGTYPE,jsx3.EventHelp.DRAGID);if(C==null){return false;}else{jsx3.EventHelp.dragItemHTML=C;jsx3.EventHelp.FLAG=2;jsx3.EventHelp.iL=true;jsx3.EventHelp.beginTrackMouse(n);}jsx3.EventHelp.constrainX=false;jsx3.EventHelp.constrainY=false;};e.doDrop=function(s,m,b){if(jsx3.EventHelp.DRAGID!=null){var
oa=jsx3.EventHelp.JSXID;var
ka=jsx3.EventHelp.DRAGID;var
qb=jsx3.EventHelp.DRAGTYPE;var
hb={objEVENT:s,objSOURCE:oa,strDRAGID:ka,strDRAGTYPE:qb};if(b==jsx3.EventHelp.ONDROP&&jsx3.gui.isMouseEventModKey(s)){hb.objGUI=s.srcElement();this.doEvent(ub.G,hb);jsx3.EventHelp.reset();}else if(b==jsx3.EventHelp.ONDROP){hb.objGUI=s.srcElement();this.doEvent(ub.K,hb);jsx3.EventHelp.reset();}else if(b==jsx3.EventHelp.ONBEFOREDROP){hb.objGUI=s.toElement();this.doEvent(ub.z,hb);}else if(b==jsx3.EventHelp.ONCANCELDROP){hb.objGUI=s.fromElement();this.doEvent(ub.F,hb);}}};e.doSpyOver=function(b,k,o){var
Da=b.getTrueX();var
Ja=b.getTrueY();if(this._jsxspytimeout)return;if(o==null)o={};b.yh();o.objEVENT=b;var
Jb=this;this._jsxspytimeout=window.setTimeout(function(){if(Jb.getParent()==null)return;Jb._jsxspytimeout=null;var
Aa=Jb.doEvent(ub.T,o);if(Aa)Jb.showSpy(Aa,b);},jsx3.EventHelp.SPYDELAY);};e.doSpyOut=function(m,s){if(m.isFakeOut(s))return;if(!jsx3.gui.Heavyweight)return;var
Ha=jsx3.gui.Heavyweight.GO(ub.Ya);if(Ha){var
Cb=Ha.getRendered();if(Cb&&m.isFakeOut(Cb))return;}window.clearTimeout(this._jsxspytimeout);this._jsxspytimeout=null;f.hideSpy();};e.showSpy=function(h,s,o){if(h!=null){jsx3.require(ub.Za);f.hideSpy();h=ub._a+h+ub.ab;var
_a=new
jsx3.gui.Heavyweight(ub.Ya,this);_a.setHTML(h);_a.setRatio(1.4);if(s instanceof N){_a.addXRule(s,ub.bb,ub.bb,12);_a.addXRule(s,ub.cb,ub.cb,-12);_a.addYRule(s,ub.db,ub.eb,6);_a.addYRule(s,ub.eb,ub.db,-6);}else{_a.addRule(s,ub.bb,-2,ub.fb);_a.addRule(s,ub.cb,12,ub.fb);_a.addRule(null,ub.bb,-24,ub.fb);_a.addRule(o,ub.eb,-2,ub.gb);_a.addRule(o,ub.db,-6,ub.gb);_a.setOverflow(3);}_a.show();var
ea=_a.getRendered();if(ea){var
Ca=(ea.ownerDocument.getElementsByTagName(ub.Ta))[0];if(parseInt(ea.style.width)+parseInt(ea.style.left)>Ca.offsetWidth)_a.applyRules(ub.fb);}N.subscribe(ub.ea,jsx3.gui.Interactive.hideSpy);}};f.hideSpy=function(){if(jsx3.gui.Heavyweight){var
ab=jsx3.gui.Heavyweight.GO(ub.Ya);if(ab){ab.destroy();N.unsubscribe(ub.ea,jsx3.gui.Interactive.hideSpy);}}};e.getSpyStyles=function(i){return this.jsxspystyle?this.jsxspystyle:i?i:null;};e.setSpyStyles=function(s){delete this[ub.hb];delete this[ub.ib];delete this[ub.jb];delete this[ub.kb];this.jsxspystyle=s;};e.qO=function(){var
ua={};if(jsx3.util.strEmpty(this.getSpyStyles())&&this.jsxspystylekeys!=null){var
aa=(this.jsxspystylekeys||ub.Oa).split(ub.lb);var
Pa=(this.jsxspystylevalues||ub.Oa).split(ub.lb);for(var
Na=0;Na<aa.length;Na++)ua[aa[Na]]=Pa[Na];}else{var
Ra=this.getSpyStyles(ub.o);var
E=ub.mb;var
ua={};var
W=Ra.split(ub.Da);for(var
Na=0;Na<W.length;Na++){var
pb=W[Na]+ub.Oa;var
Ia=pb.split(ub.nb);if(Ia&&Ia.length==2){var
za=Ia[0].replace(E,function(k,j){return (j.substring(1)).toUpperCase();});ua[za]=Ia[1];}}}return ua;};e.applySpyStyle=function(q){if(this._jsxIu==null)this._jsxIu=this.qO();if(this._jsxsP==null){this._jsxsP={};for(var Hb in this._jsxIu)this._jsxsP[Hb]=q.style[Hb];}try{for(var Hb in this._jsxIu)q.style[Hb]=this._jsxIu[Hb];}catch(Kb){}};e.removeSpyStyle=function(s){try{for(var ca in this._jsxsP)s.style[ca]=this._jsxsP[ca];}catch(Kb){}};e.checkHotKeys=function(h){if(this._jsxVY==null)return false;if(h.isModifierKey())return false;var
Gb=false;var
sb=h.getAttribute(ub.ob);for(var ya in this._jsxVY){var
Va=this._jsxVY[ya];if(Va instanceof jsx3.gui.HotKey){if(Va.isDestroyed()){delete this._jsxVY[ya];continue;}else if(!Va.isEnabled())continue;if(Va.isMatch(h)){var
va=true;if(!sb)va=Va.invoke(this,[h]);if(va!==false)Gb=true;}}}if(Gb)h.cancelAll();return Gb;};e.registerHotKey=function(p,r,k,a,b){var
I;if(p instanceof jsx3.gui.HotKey){I=p;}else{var
ga=typeof p==ub.W?p:this[p];if(!(typeof ga==ub.W))throw new
jsx3.IllegalArgumentException(ub.pb,p);I=new
jsx3.gui.HotKey(ga,r,k,a,b);}if(this._jsxVY==null)this._jsxVY={length:0};var
U=I.getKey();this._jsxVY.length+=(this._jsxVY[U]?0:1);this._jsxVY[U]=I;return I;};e.hasHotKey=function(){return this._jsxVY!=null&&this._jsxVY.length>0;};e.setAlwaysCheckHotKeys=function(i){this.jsxalwayscheckhk=i;return this;};e.getAlwaysCheckHotKeys=function(){return this.jsxalwayscheckhk;};e.clearHotKeys=function(){this._jsxVY=null;};f.getVersion=function(){return ub.qb;};e.isOldEventProtocol=function(){var
Db=this.getServer();return Db&&Db.getEnv(ub.rb)<3.1;};e.rB=function(l){this.doEvent(ub.H,{objPARENT:l});};jsx3.app.Model.jsxclass.addMethodMixin(ub.sb,f.jsxclass,ub.tb);});jsx3.Event=jsx3.gui.Interactive;jsx3.Class.defineClass("jsx3.EventHelp",null,null,function(j,q){var
ub={a:"mousemove",b:"mouseup",c:"",d:/<[^>]*>/gi,e:" ",f:"...",g:"... ... ...",h:"<span class='jsx30block_drag'>",i:"</span>",j:"px",k:"dragRounder",l:"_jsxdrag",m:"body",n:'<div id="_jsxdrag"',o:' style="position:absolute;left:',p:"px;top:",q:"px;min-width:10px;z-index:",r:';">',s:"</div>",t:"beforeEnd"};j.ONBEFOREDROP=0;j.ONDROP=1;j.ONCANCELDROP=2;j.DRAGICONINDEX=32000;j.DEFAULTSPYLEFTOFFSET=5;j.DEFAULTSPYTOPOFFSET=5;j.SPYDELAY=300;j.FLAG=0;j.iL=false;j.yOff=0;j.xOff=0;j.Fr=null;j.beginTrackMouse=function(e){jsx3.gui.Event.subscribe(ub.a,j.mouseTracker);jsx3.gui.Event.subscribe(ub.b,j.mouseUpTracker);};j.endTrackMouse=function(){jsx3.gui.Event.unsubscribe(ub.a,j.mouseTracker);jsx3.gui.Event.unsubscribe(ub.b,j.mouseUpTracker);};j.mouseTracker=function(f){j.doMouseMove(f.event);};j.mouseUpTracker=function(b){j.reset();};j.drag=function(n,s,l,c){var
Aa=n&&n.innerHTML?jsx3.util.strTruncate((n.innerHTML+ub.c).replace(ub.d,ub.e),25,ub.f,0.5):ub.g;return ub.h+Aa+ub.i;};j.doMouseMove=function(f){if(j.FLAG==1||j.FLAG==3){var
Xa=j.Fr.ownerDocument;if(j.FLAG==1){if(!j.constrainX)j.Fr.style.left=f.getTrueX()+j.xOff+ub.j;if(!j.constrainY)j.Fr.style.top=f.getTrueY()+j.yOff+ub.j;}else{var
_=f.getTrueX()-j.startX;var
Ka=f.getTrueY()-j.startY;var
ya=j[ub.k](j.xOff+_,j.yOff+Ka,f);if(ya[0]!=j.offsetLeft||ya[1]!=j.offsetTop){if(!isNaN(ya[0]))j.Fr.style.left=ya[0]+ub.j;if(!isNaN(ya[1]))j.Fr.style.top=ya[1]+ub.j;}}}else if(j.FLAG==2){var
Xa=j.JSXID.getDocument();var
pa=Xa.getElementById(ub.l);if(pa)jsx3.html.removeNode(pa);var
ua=(Xa.getElementsByTagName(ub.m))[0];j.xOff=10;j.yOff=10;jsx3.gui.Event.preventSelection(Xa);var
y=ub.n+jsx3.html._d+ub.o+(j.constrainX?parseInt(j.Fr.style.left):f.getTrueX()+j.xOff)+ub.p+(j.constrainY?parseInt(j.Fr.style.top):f.getTrueY()+j.yOff)+ub.q+j.DRAGICONINDEX+ub.r+j.dragItemHTML+ub.s;jsx3.html.insertAdjacentHTML(ua,ub.t,y);j.Fr=Xa.getElementById(ub.l);j.FLAG=1;}else j.endTrackMouse();};j.reset=function(){j.DRAGTYPE=null;j.DRAGID=null;j.DRAGIDS=null;j.FLAG=0;j.endTrackMouse();if(j.Fr){if(j.Fr.id==ub.l)jsx3.html.removeNode(j.Fr);if(jsx3.CLASS_LOADER.IE)j.Fr.releaseCapture();j.Fr=null;j.constrainX=false;j.constrainY=false;}};j.isDragging=function(){return j.Fr!=null&&j.iL;};j.getDragIcon=function(){return j.Fr;};j.getDragSource=function(){return j.JSXID;};j.getDragType=function(){return j.DRAGTYPE;};j.getDragId=function(){return j.DRAGID;};j.getDragIds=function(){return jsx3.$A.is(j.DRAGIDS)?j.DRAGIDS:[j.DRAGID];};});jsx3.Class.defineInterface("jsx3.gui.Alerts",null,function(j,g){var
ub={a:"jsxexecute",b:"xml/components/dialog_alert.xml",c:"ok",d:"title",e:"message",f:"y0",g:"this.",h:"(this.getAncestorOfType(jsx3.gui.Dialog));",i:"xml/components/dialog_prompt.xml",j:"cancel",k:"var d = this.getAncestorOfType(jsx3.gui.Dialog); this.",l:"(d, d.getDescendantOfName('value').getValue());",m:"value",n:"xml/components/dialog_confirm.xml",o:"no",p:"",q:"bold"};var
wa=ub.a;g.getAlertsParent=jsx3.Method.newAbstract();g.alert=function(c,r,d,o,s){var
ha=jsx3.net.URIResolver.JSX;var
Kb=(this.getAlertsParent()).loadAndCache(ub.b,false,jsx3.getSharedCache(),ha);var
vb=Kb.getDescendantOfName(ub.c);if(c!=null)(Kb.getDescendantOfName(ub.d)).setText(c);if(r!=null)(Kb.getDescendantOfName(ub.e)).setText(r);if(o===false)Kb.hideButton();else if(o!=null)vb.setText(o);if(d!=null){var
ta=ub.f;vb.y0=d;vb.setEvent(ub.g+ta+ub.h,wa);}this.configureAlert(Kb,s);(this.getAlertsParent()).paintChild(Kb);Kb.focus();return Kb;};g.prompt=function(f,b,c,m,l,r,p){var
Ab=jsx3.net.URIResolver.JSX;var
Kb=(this.getAlertsParent()).loadAndCache(ub.i,false,jsx3.getSharedCache(),Ab);var
Gb=Kb.getDescendantOfName(ub.c);var
pa=Kb.getDescendantOfName(ub.j);if(f!=null)(Kb.getDescendantOfName(ub.d)).setText(f);if(b!=null)(Kb.getDescendantOfName(ub.e)).setText(b);if(l!=null)Gb.setText(l);if(r!=null)pa.setText(r);if(c!=null){var
zb=ub.f;Gb.y0=c;Gb.setEvent(ub.k+zb+ub.l,wa);}if(m!=null){var
zb=ub.f;pa.y0=m;pa.setEvent(ub.g+zb+ub.h,wa);}this.configureAlert(Kb,p);(this.getAlertsParent()).paintChild(Kb);jsx3.sleep(function(){(Kb.getDescendantOfName(ub.m)).focus();});return Kb;};g.confirm=function(d,f,n,b,h,a,i,c,s,l){var
ab=jsx3.net.URIResolver.JSX;var
Ka=(this.getAlertsParent()).loadAndCache(ub.n,false,jsx3.getSharedCache(),ab);var
Z=Ka.getDescendantOfName(ub.c);var
Ab=Ka.getDescendantOfName(ub.j);var
ia=Ka.getDescendantOfName(ub.o);var
ba=[Z,Ab,ia];i=i!=null?i-1:0;if(d!=null)(Ka.getDescendantOfName(ub.d)).setText(d);if(f!=null)(Ka.getDescendantOfName(ub.e)).setText(f);if(h!=null)Z.setText(h);if(a!=null)Ab.setText(a);if(b!=null){var
Ca=ub.f;Ab.y0=b;Ab.setEvent(ub.g+Ca+ub.h,wa);}if(n!=null){var
Ca=ub.f;Z.y0=n;Z.setEvent(ub.g+Ca+ub.h,wa);}if(c!=null||s!=null||i==3){if(s)ia.setText(s);if(c){var
Ca=ub.f;ia.y0=c;ia.setEvent(ub.g+Ca+ub.h,wa);}ia.setDisplay(ub.p);}var
sa=ba[i];if(sa){sa.setFontWeight(ub.q);Ka.registerHotKey(function(o){if(o.enterKey()){(this.getDescendantOfName(sa.getName())).doExecute(o);o.cancelBubble();}},13,false,false,false);}this.configureAlert(Ka,l);(this.getAlertsParent()).paintChild(Ka);Ka.focus();return Ka;};g.configureAlert=function(p,h){if(h==null)return;if(h.width)p.setWidth(h.width,false);if(h.height)p.setHeight(h.height,false);if(h.noTitle)p.removeChild(p.getChild(ub.d));if(h.nonModal)p.setModal(0);};});jsx3.Alerts=jsx3.gui.Alerts;jsx3.require("jsx3.gui.Painted","jsx3.gui.Interactive");jsx3.Class.defineClass("jsx3.gui.Block",jsx3.gui.Painted,[jsx3.gui.Interactive],function(l,k){var
ub={A:/<[^>]*>/gi,Aa:"&quot;",B:" ",Ba:' title="',C:"...",Ca:"visibility:hidden;",D:"... ... ...",Da:"z-index:",E:"<span class='jsx30block_drag'>",Ea:"onfocus",F:"</span>",Fa:"_mask",G:"padding",Ga:"jsxbgcolor",H:"0px",Ha:"@Solid Shadow",I:"top",Ia:"jsxbg",J:"position",Ja:"@Mask 70%",K:"relative",Ka:"jsxcursor",L:"absolute",La:"@Wait",M:"visibility",Ma:"if (objEVENT.tabKey() && objEVENT.shiftKey()) { this.getParent().focus(); }",N:"zIndex",Na:"var objEVENT = jsx3.gui.Event.wrap(event); if (objEVENT.shiftKey()) { jsx3.GO(this.id).getParent().focus(); }",O:"box",Oa:"_jsxcQ",P:"100%",Pa:"tabIndex",Q:"div",Qa:"_jsxZs",R:"jsx3.gui.CDF",Ra:"3.00.00",S:"jsxdblclick",T:"dblclick",U:"jsxclick",V:"click",W:"jsxkeydown",X:"keydown",Y:"mouseover",Z:"mouseout",_:"mousedown",a:"Verdana",aa:"doBeginMove",b:"#000000",ba:"doBeginDrag",c:"&#160;",ca:' JSXDragId="',d:"jsx30block",da:'" JSXDragType="JSX_GENERIC"',e:"span",ea:' id="',f:"bold",fa:'"',g:"normal",ga:' class="',h:"",ha:'" ',i:"none",ia:' label="',j:"visible",ja:"background-color:",k:"hidden",ka:";",l:"left",la:"color:",m:"center",ma:"cursor:",n:"right",na:"block",o:"jsx:///images/spc.gif",oa:"display:block;",p:"backgroundColor",pa:"display:none;",q:"border",qa:"font-family:",r:"color",ra:"font-size:",s:"cursor",sa:"px;",t:"relativebox",ta:"font-weight:",u:/display:([^;]*);?/i,ua:' tabindex="',v:"$1",va:'" jsxtabindex="',w:"display",wa:"overflow:auto;",x:"margin",xa:"overflow:hidden;",y:"mouseup",ya:"text-align:",z:"doEndMove",za:/\"/g};var
ga=jsx3.gui.Event;var
F=jsx3.gui.Interactive;l.SCROLLSIZE=16;l.OVERFLOWSCROLL=1;l.OVERFLOWHIDDEN=2;l.OVERFLOWEXPAND=3;l.DEFAULTFONTNAME=ub.a;l.DEFAULTFONTSIZE=10;l.DEFAULTCOLOR=ub.b;l.DEFAULTTEXT=ub.c;l.DEFAULTCLASSNAME=ub.d;l.DEFAULTTAGNAME=ub.e;l.FONTBOLD=ub.f;l.FONTNORMAL=ub.g;l.DISPLAYBLOCK=ub.h;l.DISPLAYNONE=ub.i;l.VISIBILITYVISIBLE=ub.j;l.VISIBILITYHIDDEN=ub.k;l.NULLSTYLE=-1;l.ALIGNLEFT=ub.l;l.ALIGNCENTER=ub.m;l.ALIGNRIGHT=ub.n;l.ABSOLUTE=0;l.RELATIVE=1;l.MASK_NO_EDIT=jsx3.gui.Painted.MASK_NO_EDIT;l.MASK_ALL_EDIT=jsx3.gui.Painted.MASK_ALL_EDIT;l.MASK_MOVE_ONLY={MM:true};l.MASK_EAST_ONLY={NN:false,EE:true,SS:false,WW:false,MM:false};l.SPACE=jsx3.resolveURI(ub.o);if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(l.SPACE);k.init=function(n,r,f,e,i,s){this.jsxsuper(n);if(r!=null)this.setLeft(r);if(f!=null)this.setTop(f);if(e!=null)this.setWidth(e);if(i!=null)this.setHeight(i);if(s!=null)this.setText(s);};k.getBackgroundColor=function(){return this.jsxbgcolor;};k.setBackgroundColor=function(n,j){this.jsxbgcolor=n;if(j)this.updateGUI(ub.p,n==l.NULLSTYLE?ub.h:n);return this;};k.getBackground=function(){return this.jsxbg;};k.setBackground=function(p){this.jsxbg=p;return this;};k.getBorder=function(){return this.jsxborder;};k.setBorder=function(n,e){this.jsxborder=n;if(e)this.recalcBox([ub.q]);else this.Qf();return this;};k.getColor=function(){return this.jsxcolor;};k.setColor=function(m,e){this.jsxcolor=m;if(e)this.updateGUI(ub.r,m==l.NULLSTYLE?ub.h:m);return this;};k.getCursor=function(){return this.jsxcursor;};k.setCursor=function(c,e){this.jsxcursor=c;if(e)this.updateGUI(ub.s,c);return this;};k.getCSSOverride=function(){return this.jsxstyleoverride;};k.setCSSOverride=function(h){this.jsxstyleoverride=h;return this;};k.getClassName=function(){return this.jsxclassname;};k.setClassName=function(h){this.jsxclassname=h;return this;};k.getDisplay=function(){return this.jsxdisplay;};k.setDisplay=function(a,d){if(this.jsxdisplay!=a){this.jsxdisplay=a;if(d){if(a!=ub.i){var
W=this.Wl();if(!(this.getRelativePosition()==0||W&&W.getBoxType()!=ub.t)){var
Ka=(jsx3.gui.Painted.Box.getCssFix()).replace(ub.u,ub.v);if(!jsx3.util.strEmpty(Ka))a=Ka;}}if(a==ub.i)jsx3.html.persistScrollPosition(this.getRendered());this.updateGUI(ub.w,a);if(a!=ub.i){jsx3.gui.Painted._onAfterRestoreViewCascade(this,this.getRendered());jsx3.html.restoreScrollPosition(this.getRendered());}}}return this;};k.getFontName=function(){return this.jsxfontname;};k.setFontName=function(d){this.jsxfontname=d;return this;};k.getFontSize=function(){return this.jsxfontsize;};k.setFontSize=function(f){this.jsxfontsize=f;return this;};k.getFontWeight=function(){return this.jsxfontweight;};k.setFontWeight=function(f){this.jsxfontweight=f;return this;};k.getHeight=function(){return this.jsxheight;};k.setHeight=function(g,e){this.jsxheight=g;if(e){this.Mc({height:g},true);}else this.Qf();return this;};k.getIndex=function(){return this.jsxindex;};k.setIndex=function(c,b){this.jsxindex=c;if(b){var
ra=this.getRendered();if(ra!=null)ra.tabIndex=c;}return this;};l.getJSXParent=function(q){return jsx3.html.getJSXParent(q);};k.getLeft=function(){return this.jsxleft;};k.setLeft=function(s,r){this.jsxleft=s;if(r){if(isNaN(s))s=0;this.Mc({left:s},true);}else this.clearBoxProfile(false);return this;};k.setDimensions=function(c,f,q,g,h){if(jsx3.$A.is(c)){h=f;g=c[3];q=c[2];f=c[1];c=c[0];}if(c!=null)this.jsxleft=c;if(f!=null)this.jsxtop=f;if(q!=null)this.jsxwidth=q;if(g!=null)this.jsxheight=g;if(h){this.Mc({left:this.jsxleft,top:this.jsxtop,width:this.jsxwidth,height:this.jsxheight},true);}else this.Qf();};k.getDimensions=function(){return [this.getLeft(),this.getTop(),this.getWidth(),this.getHeight()];};k.getMargin=function(){return this.jsxmargin;};k.setMargin=function(g,j){this.jsxmargin=g;if(j)this.recalcBox([ub.x]);else this.Qf();return this;};k.getMaskProperties=function(){var
xa={};xa.NN=true;xa.SS=true;xa.EE=true;xa.WW=true;xa.MM=this.getRelativePosition()==0;return xa;};k.doBeginMove=function(r,n){if(r.leftButton()){this.jsxsupermix(r,n);ga.subscribe(ub.y,this,ub.z);r.cancelAll();}};k.doEndMove=function(o){o=o.event;var
za=this.getRendered(o);if(o.leftButton()){ga.unsubscribe(ub.y,this,ub.z);this.jsxsupermix(o,za);}else this.yo(o,za);};k.getDragIcon=function(p,s,j,e){var
Cb=p&&p.innerHTML?jsx3.util.strTruncate((p.innerHTML+ub.h).replace(ub.A,ub.B),25,ub.C,0.5):ub.D;return ub.E+Cb+ub.F;};k.doBeginDrag=function(m,s){if(m.leftButton())this.doDrag(m,s,this.getDragIcon);};k.getOverflow=function(){return this.jsxoverflow;};k.setOverflow=function(q){this.jsxoverflow=q;return this;};k.getPadding=function(){return this.jsxpadding;};k.setPadding=function(r,a){this.jsxpadding=r;if(a)this.recalcBox([ub.G]);else this.Qf();return this;};k.getPropertiesPath=function(){return null;};k.getModelEventsPath=function(){return null;};k.getRelativePosition=function(){return this.jsxrelativeposition;};k.setRelativePosition=function(c,b){if(this.jsxrelativeposition!=c){this.Qf();this.jsxrelativeposition=c;if(b){if(c==0){this.setDimensions(this.getLeft()||Number(0),this.getTop()||Number(0),null,null,true);this.updateGUI(ub.x,ub.H);}else{this.updateGUI(ub.l,ub.H);this.updateGUI(ub.I,ub.H);if(this.getMargin())this.setMargin(this.getMargin(),true);}this.updateGUI(ub.J,c==1?ub.K:ub.L);if(this.getDisplay()!=ub.i)this.setDisplay(ub.h,true);}}return this;};k.getTagName=function(){return this.jsxtagname;};k.setTagName=function(o){this.jsxtagname=o;this.Qf();return this;};k.getText=function(){return this.jsxtext;};k.setText=function(b,o){this.jsxtext=b;if(o)if(this.getChild(0)!=null||(this.Wl(true)).lg(0)!=null){this.repaint();}else{var
Qa=this.getRendered();if(Qa!=null)Qa.innerHTML=b;}return this;};k.getTextAlign=function(){return this.jsxtextalign;};k.setTextAlign=function(m){this.jsxtextalign=m;return this;};k.getTip=function(){return this.jsxtip;};k.setTip=function(b){this.jsxtip=b;var
va;if(va=this.getRendered())va.title=b;return this;};k.getTop=function(){return this.jsxtop;};k.setTop=function(e,b){this.jsxtop=e;if(b){if(isNaN(e))e=0;this.Mc({top:e},true);}else this.clearBoxProfile(false);return this;};k._findGUI=function(r){return this.getRendered();};k.updateGUI=function(j,m){var
Z=this._findGUI(j);if(Z!=null)try{Z.style[j]=m;}catch(Kb){}};k.getVisibility=function(){return this.jsxvisibility;};k.setVisibility=function(c,o){if(c!=ub.k)c=ub.j;this.jsxvisibility=c;if(o)this.updateGUI(ub.M,c);return this;};k.getWidth=function(){return this.jsxwidth;};k.setWidth=function(i,d){this.jsxwidth=i;if(d){this.Mc({width:i},true);}else this.Qf();return this;};k.getZIndex=function(){return this.jsxzindex;};k.setZIndex=function(a,q){this.jsxzindex=a;if(q)this.updateGUI(ub.N,a);return this;};k.Hj=function(d,a,n){this.sk(d,a,n,4);};k.zd=function(q){this.applyDynamicProperties();if(this.getParent()&&(q==null||isNaN(q.parentwidth)||isNaN(q.parentheight))){q=(this.getParent()).Id(this);}else if(q==null)q={};var
Ba=q.boxtype&&q.boxtype!=ub.O||this.getRelativePosition()!=0;var
Gb=Ba?null:q.left?q.left:this.getLeft();var
Xa=Ba?null:q.top?q.top:this.getTop();if(!Ba&&!Gb)Gb=0;if(!Ba&&!Xa)Xa=0;var
Ja,ra,sb,Z;if(!q.boxtype)q.boxtype=Ba?ub.t:ub.O;if(q.tagname==null)q.tagname=(Ja=this.getTagName())?Ja.toLowerCase():jsx3.gui.Block.DEFAULTTAGNAME;if(q.left==null&&q.boxtype==ub.O)q.left=Gb;if(q.top==null&&q.boxtype==ub.O)q.top=Xa;if(q.width==null)q.width=q.width?q.width:this.getWidth();if(q.height==null)q.height=q.height?q.height:this.getHeight();if(q.width==ub.P||q.tagname==ub.Q&&this.il()==ub.h){if(q.tagname==ub.e)q.tagname=ub.Q;q.container=true;}if((ra=this.getPadding())!=null&&ra!=ub.h)q.padding=ra;if(Ba&&(sb=this.getMargin())!=null&&sb!=ub.h)q.margin=sb;if((Z=this.getBorder())!=null&&Z!=ub.h)q.border=Z;return new
jsx3.gui.Painted.Box(q);};k.setCDFId=function(r){this.jsxcdfid=r;var
I=this.getAncestorOfType(ub.R);if(I)I.read();};k.getCDFId=function(){return this.jsxcdfid;};k.setCDFAttribute=function(s){this.jsxcdfattribute=s;var
Ja=this.getAncestorOfType(ub.R);if(Ja)Ja.read();};k.getCDFAttribute=function(){return this.jsxcdfattribute;};k.paint=function(h){this.applyDynamicProperties();h=h==null?this.il():h;var
yb=this.getId();var
tb={};if(this.hasEvent(ub.S))tb[ub.T]=true;if(this.hasEvent(ub.U))tb[ub.V]=true;if(this.hasEvent(ub.W))tb[ub.X]=true;var
Fb=ub.h;if(this.getCanSpy()==1){tb[ub.Y]=true;tb[ub.Z]=true;}if(this.getCanMove()==1){if(this.getCanMove()==1)tb[ub._]=ub.aa;}else if(this.getMenu()!=null){tb[ub.y]=true;}else if(this.getCanDrop()==1)tb[ub.y]=true;if(tb[ub._]==null&&this.getCanDrag()==1){tb[ub._]=ub.ba;Fb=Fb+(ub.ca+yb+ub.da);}var
B=this.qj(tb,0)+Fb;var
zb=this.renderAttributes(null,true);var
Oa=this.Wl(true);Oa.setAttributes(this.Rl()+this.nk()+B+ub.ea+yb+ub.fa+this.Ak()+ub.ga+this.dd()+ub.ha+zb);Oa.setStyles(this.cd()+this.ch()+this.ke()+this.jc()+this.Mm()+this._k()+this.Wi()+this.wk()+this.Pb()+this.mi()+this.ad()+this.paintBlockDisplay()+this.Bg());return (Oa.paint()).join(h+this.paintChildren());};k.Ri=function(j,c){if(this.getCanSpy()==1)this.doSpyOver(j,c);if(this.getCanDrop()==1)this.doDrop(j,c,jsx3.EventHelp.ONBEFOREDROP);};k.Uc=function(n,r){if(this.getCanSpy()==1)this.doSpyOut(n,r);if(this.getCanDrop()==1)this.doDrop(n,r,jsx3.EventHelp.ONCANCELDROP);};k.yo=function(j,c){if(this.getCanDrop()==1)this.doDrop(j,c,jsx3.EventHelp.ONDROP);else this.jsxsupermix(j,c);};k.Ak=function(){var
Ia=this.getName();return Ia!=null?ub.ia+Ia+ub.fa:ub.h;};k.ch=function(){var
Ea=this.getBackgroundColor();return Ea?ub.ja+Ea+ub.ka:ub.h;};k.ke=function(){return this.getBackground()?this.getBackground()+ub.ka:ub.h;};k.jc=function(){var
Xa=this.getColor();return Xa?ub.la+Xa+ub.ka:ub.h;};k.mi=function(){var
Ca=this.getCursor();return Ca?ub.ma+Ca+ub.ka:ub.h;};k.Bg=function(){return this.getCSSOverride()?this.getCSSOverride():ub.h;};k.dd=function(){var
X=this.getClassName();return l.DEFAULTCLASSNAME+(X?ub.B+X:ub.h);};k.paintBlockDisplay=function(){if(jsx3.util.strEmpty(this.getDisplay())||this.getDisplay()==ub.na){if(this.getWidth()==ub.P){return ub.oa;}else return ub.h;}else if(this.getDisplay()==ub.i)return ub.pa;return ub.h;};k.lc=function(){var
qa=this.getDisplay();return jsx3.util.strEmpty(qa)||qa==ub.h?ub.h:ub.pa;};k._k=function(){var
aa=this.getFontName();return aa?ub.qa+aa+ub.ka:ub.h;};k.cd=function(){var
Na=parseInt(this.getFontSize());return isNaN(Na)?ub.h:ub.ra+Na+ub.sa;};k.wk=function(){var
W=this.getFontWeight();return W?ub.ta+W+ub.ka:ub.h;};k.Rl=function(c){if(c==null)c=this.getIndex();return c!=null&&this.jsxenabled!=0?ub.ua+c+ub.va+c+ub.fa:ub.h;};k.Mm=function(){if(this.getOverflow()==1){return ub.wa;}else if(this.getOverflow()==2){return ub.xa;}else return ub.h;};k.il=function(){return this.getText()?this.getText():ub.h;};k.Pb=function(){var
Sa=this.getTextAlign();return Sa?ub.ya+Sa+ub.ka:ub.h;};k.nk=function(){var
wb=this.getTip();if(wb!=null){wb=wb.replace(ub.za,ub.Aa);return wb?ub.Ba+wb+ub.ha:ub.h;}else if(jsx3.gui.Form&&this.instanceOf(jsx3.gui.Form)){var
C=this.getKeyBinding();return C?ub.Ba+C.replace(ub.za,ub.Aa)+ub.ha:ub.h;}else return ub.h;};k.ad=function(){return this.getVisibility()==ub.k?ub.Ca:ub.h;};k.Wi=function(){var
Xa=this.getZIndex();return isNaN(Xa)?ub.h:ub.Da+Xa+ub.ka;};k.showMask=function(q){if(this._jsxcQ)this.hideMask();var
S;if(S=this.getRendered()){var
jb=(this.getAbsolutePosition()).H;if(S.onfocus)S._jsxZs=S.onfocus;jsx3.html.addEventListener(S,ub.Ea,l.Ww);if(S.tabIndex)S._jsxtabindex=S.tabIndex;S.tabIndex=0;this._jsxcQ=this.getId()+ub.Fa;var
Z=(((((((((new
l(this._jsxcQ,0,0,ub.P,ub.P,q)).setOverflow(2)).setFontWeight(ub.f)).setTextAlign(ub.m)).setIndex(0)).setRelativePosition(0)).setZIndex(32000)).setDynamicProperty(ub.Ga,ub.Ha)).setDynamicProperty(ub.Ia,ub.Ja)).setDynamicProperty(ub.Ka,ub.La);Z.setWidth(ub.P);Z.setHeight(ub.P);Z.setPadding(parseInt(jb/2));Z.setEvent(ub.Ma,ub.W);Z.setAttribute(ub.Ea,ub.Na);this.setChild(Z);this.paintChild(Z);Z.focus();}};l.Ww=function(p){var
tb=jsx3.GO(this.id);if(tb){var
ma=ga.wrap(p||window.event);if(!ma.shiftKey())if((tb.getChildren()).length)(tb.getLastChild()).focus();}};k.hideMask=function(){var
wb;if(wb=this.getChild(this._jsxcQ)){this.removeChild(wb);delete this[ub.Oa];var
O;if(O=this.getRendered()){if(O._jsxtabindex){O.tabIndex=O._jsxtabindex;}else O.removeAttribute(ub.Pa);jsx3.html.removeEventListener(O,ub.Ea,l.Ww);if(O._jsxZs){O.onfocus=O._jsxZs;delete O[ub.Qa];}else{}}}};l.getVersion=function(){return ub.Ra;};});jsx3.Block=jsx3.gui.Block;jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.ToolbarButton",jsx3.gui.Block,[jsx3.gui.Form],function(r,d){var
ub={A:"span",B:"relativebox",C:"div",D:"box",E:"0 0 0 4",F:"0px;0px;0px;solid 1px ",G:"5 4 5 0",H:"background-image:url(",I:");",J:"id='",K:"' ",L:" class='jsx30toolbarbutton'",M:"class='jsx30toolbarbutton_img'",N:"class='jsx30toolbarbutton_lbl'",O:"&#160;",P:"class='jsx30toolbarbutton_cap'",Q:"overflow:hidden;",R:"background-color:",S:";",T:"3.0.00",U:"pt",a:"jsx:///images/tbb/down.gif",b:"jsx:///images/tbb/on.gif",c:"jsx:///images/tbb/over.gif",d:"jsx:///images/tbb/default.gif",e:"#9B9BB7",f:"",g:"url(",h:")",i:"jsxmenu",j:"#808080",k:"jsxexecute",l:"border",m:"padding",n:"jsxchange",o:"click",p:"BT",q:"keydown",r:"mousedown",s:"mouseup",t:"mouseout",u:"mouseover",v:"blur",w:"Uc",x:"focus",y:"Ri",z:"1 4 1 0"};var
Oa=jsx3.gui.Form;var
z=jsx3.gui.Interactive;var
nb=jsx3.gui.Event;r.TYPENORMAL=0;r.TYPECHECK=1;r.TYPERADIO=2;r.STATEOFF=0;r.STATEON=1;r.IMAGEDOWN=jsx3.resolveURI(ub.a);r.IMAGEON=jsx3.resolveURI(ub.b);r.IMAGEOVER=jsx3.resolveURI(ub.c);r.DEFAULTIMAGE=jsx3.resolveURI(ub.d);r.BORDERCOLOR=ub.e;if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(r.IMAGEDOWN,r.IMAGEON,r.IMAGEOVER,r.DEFAULTIMAGE);d._jsxRL=null;d.init=function(s,j,b){this.jsxsuper(s,null,null,null,null);if(j!=null)this.setType(j);if(b!=null)this.setTip(b);};d.getDisabledImage=function(){return this.jsxdisabledimage!=null&&jsx3.util.strTrim(this.jsxdisabledimage)!=ub.f?this.jsxdisabledimage:this.getImage();};d.setDisabledImage=function(o){this.jsxdisabledimage=o;return this;};d.doValidate=function(){var
sa=this.getType==0||this.getRequired()==0||this.getState()==1;return (this.setValidationState(sa?1:0)).getValidationState();};d.getImage=function(){return this.jsximage!=null&&jsx3.util.strTrim(this.jsximage)!=ub.f?this.jsximage:null;};d.setImage=function(g){this.jsximage=g;return this;};d.getType=function(){return this.jsxtype==null?0:this.jsxtype;};d.setType=function(h){this.jsxtype=h;return this;};d._ebKeyDown=function(f,g){if(f.spaceKey()||f.enterKey()){this.BT(f,g);f.cancelAll();}};d.getMaskProperties=function(){return jsx3.gui.Block.MASK_NO_EDIT;};d.Fo=function(p,n){if(!p.leftButton())return;n.style.backgroundImage=ub.g+r.IMAGEDOWN+ub.h;n.childNodes[3].style.backgroundColor=r.BORDERCOLOR;if(this.getEvent(ub.i)!=null)n.childNodes[2].style.backgroundImage=ub.g+r.IMAGEDOWNMENU+ub.h;};d.yo=function(s,m){if(s.leftButton()){var
Bb=this.jsxstate==1;m.style.backgroundImage=Bb?ub.g+r.IMAGEON+ub.h:ub.f;m.childNodes[3].style.backgroundColor=Bb?r.BORDERCOLOR:ub.f;}else if(s.rightButton())this.jsxsupermix(s,m);};d.Ri=function(s,m){if(this.getState()==0){m.style.backgroundImage=ub.g+r.IMAGEOVER+ub.h;m.childNodes[3].style.backgroundColor=ub.j;}};d.Uc=function(s,m){if(this.getState()==0){m.style.backgroundImage=ub.f;m.childNodes[3].style.backgroundColor=ub.f;}};d.doExecute=function(c){if(c==null)c=true;this.BT(c,this.getRendered(c instanceof nb?c:null));};d.doClick=function(){this.BT(true,this.getRendered());};d.BT=function(j,c){var
ua=this.doEvent(ub.k,{objEVENT:j instanceof nb?j:null});if(ua!==false)if(this.getType()==2){this.EK(1,j,c);}else if(this.getType()==1)this.EK(this.getState()==1?0:1,j,c);};d.getGroupName=function(){return this.jsxgroupname!=null&&this.getType()==2?this.jsxgroupname:null;};d.setGroupName=function(f){if(this.getType()==2)this.jsxgroupname=f;return this;};d.getDivider=function(){return this.jsxdivider!=null?this.jsxdivider:0;};d.setDivider=function(q,j){this.jsxdivider=q;if(j)this.recalcBox([ub.l,ub.m]);else this.Qf();return this;};d.getState=function(){return this.getType()==0?0:this.jsxstate==null?0:this.jsxstate;};d.setState=function(j){var
v=null;v=this.isOldEventProtocol();this.EK(j,v,this.getRendered());return this;};d.EK=function(a,k,b){var
V=false;if(this.getType()==2&&a==1){var
Db=this.getGroupName();var
Ba=(this.getParent()).findDescendants(function(h){return h instanceof r&&h.getGroupName()==Db;},false,true,true);for(var
Ea=Ba.length-1;Ea>=0;Ea--)if(Ba[Ea]!=this&&Ba[Ea].getType()==2){Ba[Ea].jsxstate=0;var
B=Ba[Ea].getRendered(b);if(B!=null){B.style.backgroundImage=ub.f;B.childNodes[3].style.backgroundColor=ub.f;if(Ba[Ea].getEvent(ub.i)!=null)B.childNodes[2].style.backgroundImage=ub.g+r.IMAGEOFFMENU+ub.h;}}else if(Ba[Ea]==this)if(b!=null){b.style.backgroundImage=ub.g+r.IMAGEON+ub.h;b.childNodes[3].style.backgroundColor=r.BORDERCOLOR;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEONMENU+ub.h;}V=true;}else if(this.getType()==2){if(b!=null){b.style.backgroundImage=ub.f;b.childNodes[3].style.backgroundColor=ub.f;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEOFFMENU+ub.h;}V=true;}else if(this.getType()==1){if(b!=null)if(a==1){b.style.backgroundImage=ub.g+r.IMAGEON+ub.h;b.childNodes[3].style.backgroundColor=r.BORDERCOLOR;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEONMENU+ub.h;}else{b.style.backgroundImage=ub.f;b.childNodes[3].style.backgroundColor=ub.f;if(this.getEvent(ub.i)!=null)b.childNodes[2].style.backgroundImage=ub.g+r.IMAGEOFFMENU+ub.h;}V=true;}this.jsxstate=a;if(V&&k){var
da=null;if(k instanceof nb)da={objEVENT:k,_gipp:1};this.doEvent(ub.n,da);}return this;};d.setEnabled=function(e,o){if(this._jsxRL!=null)this._jsxRL.setEnabled(e==1);return this.jsxsupermix(e,o);};r.yg={};r.yg[ub.o]=ub.p;r.yg[ub.q]=true;r.yg[ub.r]=true;r.yg[ub.s]=true;r.yg[ub.t]=true;r.yg[ub.u]=true;r.yg[ub.v]=ub.w;r.yg[ub.x]=ub.y;d.Hj=function(c,s,o){this.sk(c,s,o,3);};d.zd=function(){var
H=this.getRelativePosition()!=0;var
Ua,P,ea;var
Xa={};Xa.height=22;if(H){Xa.margin=(Ua=this.getMargin())!=null&&Ua!=ub.f?Ua:ub.z;Xa.tagname=ub.A;Xa.boxtype=ub.B;}else{Xa.left=(P=this.getLeft())!=null&&P!=ub.f?P:0;Xa.top=(ea=this.getTop())!=null&&ea!=ub.f?ea:0;Xa.tagname=ub.C;Xa.boxtype=ub.D;}if(this.getDivider()==1){Xa.padding=ub.E;Xa.border=ub.F+r.BORDERCOLOR;}var
Ca=new
jsx3.gui.Painted.Box(Xa);Xa={};Xa.width=this.getImage()!=null&&this.getImage()!=ub.f?22:3;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
Qa=new
jsx3.gui.Painted.Box(Xa);Ca.cl(Qa);Xa={};if(jsx3.util.strEmpty(this.getText())){Xa.width=1;}else Xa.padding=ub.G;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
wb=new
jsx3.gui.Painted.Box(Xa);Ca.cl(wb);Xa={};Xa.width=1;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
Pa=new
jsx3.gui.Painted.Box(Xa);Ca.cl(Pa);Xa={};Xa.width=1;Xa.height=22;Xa.tagname=ub.A;Xa.boxtype=ub.B;var
T=new
jsx3.gui.Painted.Box(Xa);Ca.cl(T);return Ca;};d.paint=function(){this.applyDynamicProperties();var
Da;if((Da=this.getKeyBinding())!=null){var
na=this;if(this._jsxRL!=null)this._jsxRL.destroy();this._jsxRL=this.doKeyBinding(function(q){na.BT(q,na.getRendered());},Da);if(this._jsxRL)this._jsxRL.setEnabled(this.getEnabled()!=0);}var
Bb=this.getState()==1?ub.H+r.IMAGEON+ub.I:ub.f;var
Va=this.ad();var
ja=this.lc();var
pb=null,cb=null,B=null;if(this.getEnabled()==1){pb=this.qj(r.yg,0);cb=(this.getUriResolver()).resolveURI(this.getImage());B=ub.f;}else{pb=ub.f;cb=(this.getUriResolver()).resolveURI(this.getDisabledImage());B=jsx3.html.getCSSOpacity(0.4);}var
U=this.renderAttributes(null,true);var
K=this.Wl(true);K.setAttributes(ub.J+this.getId()+ub.K+this.Rl()+this.nk()+this.Ak()+pb+ub.L+U);K.setStyles(this.mi(true)+Bb+Va+ja+B+this.Wi()+this.Bg());var
Xa=K.lg(0);Xa.setStyles(cb!=null?ub.H+cb+ub.I:ub.f);Xa.setAttributes(ub.M+jsx3.html._d);var
G=K.lg(1);G.setAttributes(ub.N+jsx3.html._d);var
wb;if((wb=this.getText())!=null&&wb!=ub.f){G.setStyles(this.jc()+this._k()+this.cd()+this.wk());}else{wb=ub.O;G.setStyles(jsx3.html.co);}var
ib=K.lg(2);ib.setAttributes(ub.P);var
kb=K.lg(3);kb.setAttributes(ub.P);kb.setStyles(ub.Q+(this.getState()==1?ub.R+r.BORDERCOLOR+ub.S:ub.f));return (K.paint()).join((Xa.paint()).join(ub.O)+(G.paint()).join(wb)+(ib.paint()).join(ub.O)+(kb.paint()).join(ub.O));};r.getVersion=function(){return ub.T;};d.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};d.emInit=function(e){this.jsxsupermix(e);if(this.getType()==2)this.setType(0);this.subscribe(ub.k,this,ub.U);};d.emSetValue=function(a){};d.emGetValue=function(){return null;};d.emBeginEdit=function(c,l,a,h,e,k,j){var
Qa=j.childNodes[0].childNodes[0];if(Qa){this.jsxsupermix(c,l,a,h,e,k,j);jsx3.html.focus(Qa);}else return false;};d.emPaintTemplate=function(){this.setEnabled(0);var
Ja=this.paint();this.setEnabled(1);var
ta=this.paint();return this.emGetTemplate(ta,Ja);};d.pt=function(l){var
Eb=this.emGetSession();if(Eb){}};d.onDestroy=function(s){if(this._jsxRL)this._jsxRL.destroy();this.jsxsuper(s);};d.onSetChild=function(l){return false;};});jsx3.ToolbarButton=jsx3.gui.ToolbarButton;jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.WindowBar",jsx3.gui.Block,null,function(a,f){var
ub={A:"text-align:",B:"right",C:"left",D:"none",E:"#FFFFFF",F:"2.4.00",a:"#c8c8d5",b:"#aaaacb",c:"solid 1px #e8e8f5;solid 0px;solid 1px #a8a8b5;solid 0px;",d:"solid 1px #9898a5",e:"bold",f:"jsx3.gui.Form",g:"mousedown",h:"doBeginMove",i:"100%",j:"inline",k:"box",l:"div",m:"0 0 0 4",n:"span",o:'class="jsx30windowbar_lbl"',p:"cursor:move;",q:"cursor:default;",r:"",s:'id="',t:'"',u:' class="jsx30windowbar"',v:"background-color:",w:";",x:"font-weight:",y:"font-size:",z:"px;"};var
u=jsx3.gui.Block;a.DEFAULTHEIGHT=26;a.DEFAULTBACKGROUND=jsx3.html.getCSSFade(false);a.DEFAULTBG=ub.a;a.DEFAULTBGCAPTION=ub.b;a.DEFAULTBORDER=ub.c;a.DEFAULTBORDERCAPTION=ub.d;a.DEFAULTFONTWEIGHT=ub.e;a.DEFAULTFONTSIZE=11;a.TYPECAPTION=0;a.TYPETOOL=1;a.TYPEMENU=2;a.TYPETASK=3;f.init=function(m,r){this.jsxsuper(m);this.setRelativePosition(1);if(r!=null)this.setType(r);};f.getMaskProperties=function(){return this.getRelativePosition()==0?u.MASK_MOVE_ONLY:u.MASK_NO_EDIT;};f.getType=function(){return this.jsxbartype==null?0:this.jsxbartype;};f.setType=function(j){this.jsxbartype=j;this.Qf();return this;};f.setText=function(j,c){this.jsxsuper(j,c);if(c)if(this.getType()==0){var
ga=this.getParent();if(ga instanceof jsx3.gui.Dialog&&ga.getRendered()!=null)ga.em();}return this;};f.doBeginMove=function(p,i){if(!(jsx3.html.getJSXParent(p.srcElement())).instanceOf(ub.f))(this.getParent()).doBeginMove(p,i);};a.yg={};a.yg[ub.g]=ub.h;f.Hj=function(k,h,g){this.sk(k,h,g,this.getType()==0?4:2);};f.zd=function(s){this.applyDynamicProperties();if(this.getParent()&&(s==null||!isNaN(s.parentwidth)&&!isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};var
Gb=this.getBorder();var
w=this.getRelativePosition()!==0;if(s.left==null&&!w&&!jsx3.util.strEmpty(this.getLeft()))s.left=this.getLeft();if(s.top==null&&!w&&!jsx3.util.strEmpty(this.getTop()))s.top=this.getTop();if(s.width==null)s.width=ub.i;if(s.height==null)s.height=this.getHeight()||a.DEFAULTHEIGHT;if(!s.boxtype)s.boxtype=w?ub.j:ub.k;s.tagname=ub.l;s.padding=this.getPadding()||ub.m;s.border=Gb!=null?Gb:this.getType()==0?a.DEFAULTBORDERCAPTION:a.DEFAULTBORDER;var
kb=new
jsx3.gui.Painted.Box(s);if(this.getType()==0){var
Hb={};Hb.left=6;Hb.top=6;Hb.tagname=ub.n;Hb.boxtype=ub.k;var
La=new
jsx3.gui.Painted.Box(Hb);kb.cl(La);}return kb;};f.paint=function(){this.applyDynamicProperties();var
Qa=this.Wl(true);var
ga=null,Za=null,v=null;if(this.getType()==0){var
_a=Qa.lg(0);_a.setAttributes(ub.o);_a.setStyles(this.jc()+this.wk()+this._k()+this.cd());v=(_a.paint()).join(this.il());ga=ub.p;Za=this.qj(a.yg,0);}else{ga=ub.q;Za=ub.r;v=ub.r;}var
da=this.renderAttributes(null,true);Qa.setAttributes(ub.s+this.getId()+ub.t+this.Ak()+this.nk()+this.Rl()+Za+ub.u+da);Qa.setStyles(ga+this.Pb()+this.ch()+this.Wi()+this.ke()+this.Bg());return (Qa.paint()).join(v+this.paintChildren());};f.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};f.ch=function(){var
cb=this.getBackgroundColor();return cb==null||cb!=ub.r?ub.v+(cb?cb:this.getType()==0?a.DEFAULTBGCAPTION:a.DEFAULTBG)+ub.w:ub.r;};f.ke=function(){if(this.getType()==2)return ub.r;var
t=this.getBackground();return t==null?a.DEFAULTBACKGROUND:t;};f.getHeight=function(){var
ca=this.jsxsuper();if(ca==null||isNaN(ca))ca=a.DEFAULTHEIGHT;return ca;};f.wk=function(){return this.getFontWeight()?ub.x+this.getFontWeight()+ub.w:ub.x+ub.e+ub.w;};f.cd=function(){return ub.y+(this.getFontSize()?this.getFontSize():a.DEFAULTFONTSIZE)+ub.z;};f.Pb=function(){return ub.A+(this.getTextAlign()?this.getTextAlign():this.getType()==0?ub.B:ub.C)+ub.w;};f.il=function(){return this.getText()?this.getText():ub.r;};f.beep=function(){jsx3.gui.no(this.getRendered(),{filter:ub.D,backgroundColor:ub.E,backgroundImage:ub.r});};a.getVersion=function(){return ub.F;};});jsx3.WindowBar=jsx3.gui.WindowBar;jsx3.require("jsx3.gui.Alerts","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Dialog",jsx3.gui.Block,[jsx3.gui.Alerts],function(b,r){var
ub={A:"mouseup",Aa:";",B:"doEndMove",Ba:"<span style='display:none;'>&#160;</span>",C:"BeforeMove model event error for the control, ",Ca:'class="jsx30dialog_content"',D:".\nDescription:\n",Da:'class="jsx30dialog_mask"',E:"hidden",Ea:"overflow:hidden;visibility:hidden;",F:"-1px",Fa:"overflow:hidden;cursor:se-resize;z-index:12;background-image:url(",G:"px",Ga:");",H:"body",Ha:"yF",I:"AfterMove model event error for the control, ",Ia:"overflow:hidden;z-index:1;background-image:url(",J:"jsxaftermove",Ja:"&#160;",K:"doEndMove: ",Ka:"jsxmodal",L:"_jsxAW",La:"var d = jsx3.GO('",M:"jsx3.gui.Dialog.restore",Ma:"'); d.doToggleState(d.isFront() ? jsx3.gui.Dialog.MINIMIZED : jsx3.gui.Dialog.MAXIMIZED); false;",N:"@Restore Icon",Na:"@Task Icon",O:"number",Oa:"repaint",P:"jsxbeforeresize",Pa:"overflow:hidden;",Q:"tG",Qa:"overflow:auto;",R:"_jsxEz",Ra:"jsx30dialog",S:"jsxafterresize",Sa:" ",T:"jsxleft",Ta:"#FFFFFF",U:"jsxtop",Ua:"3.0.00",V:"jsxwidth",W:"jsxheight",X:"1px pseudo",Y:"div",Z:"box",_:"100%",a:"#e8e8f5",aa:"0",b:"jsx:///images/dialog/resize.gif",ba:"display:none;",c:"JSXTBB_",ca:"jsxkeypress",d:"jsx3.gui.WindowBar",da:"keypress",e:"jsx3.gui.ToolbarButton",ea:"mousedown",f:"_cbar",fa:"wV",g:"JSXFRAG",ga:"height:",h:"_btn_min",ha:"px;",i:"this.getParent().getParent().doToggleState();",ia:'<div id="',j:"jsxexecute",ja:'" ',k:"jsximage",ka:"keydown",l:"@Min Icon",la:"jX",m:"jsxtip",ma:' style="width:100%;height:100%;position:absolute;left:0px;top:0px;z-index:',n:"jsx3.gui.Dialog.min",na:';"',o:"_btn_max",oa:">",p:"this.getParent().getParent().doMaximize(this);",pa:'<div class="jsx30dialog_modal"',q:"@Max Icon",qa:"xY",r:"jsx3.gui.Dialog.max",ra:"Qq",s:"_btn_close",sa:">&#160;</div>",t:"this.getParent().getParent().doClose();",ta:"<span ",u:"@Close Icon",ua:' style="position:absolute;left:-1px;top:0px;width:1px;height:1px;overflow:hidden;"></span></div>',v:"jsx3.gui.Dialog.close",va:' class="',w:"",wa:"z-index:1;",x:"none",xa:'id="',y:"display",ya:'"',z:"focus",za:"z-index:"};var
Ea=jsx3.gui.Event;var
Ja=jsx3.gui.Interactive;var
sb=jsx3.util.Logger.getLogger(b.jsxclass.getName());b.MINIMIZED=0;b.MAXIMIZED=1;b.DEFAULTBACKGROUNDCOLOR=ub.a;b.FIXED=0;b.RESIZEABLE=1;b.RESIZABLE=1;b.o7=jsx3.resolveURI(ub.b);b.MODAL=1;b.NONMODAL=0;b.XS=[null,32,32,32];b.OP=[10,10,10,10];b.uJ=10;b.kN=ub.c;r.init=function(h,f,c,k){this.jsxsuper(h,null,null,f,c);jsx3.require(ub.d,ub.e);var
Lb=new
jsx3.gui.WindowBar(h+ub.f);if(k!=null)Lb.setText(k);this.setChild(Lb,1,null,ub.g);var
vb=new
jsx3.gui.ToolbarButton(this.getName()+ub.h,null);vb.setEvent(ub.i,ub.j);vb.setDynamicProperty(ub.k,ub.l);vb.setDynamicProperty(ub.m,ub.n);Lb.setChild(vb,1,null,ub.g);vb=new
jsx3.gui.ToolbarButton(this.getName()+ub.o,null);vb.setEvent(ub.p,ub.j);vb.setDynamicProperty(ub.k,ub.q);vb.setDynamicProperty(ub.m,ub.r);Lb.setChild(vb,1,null,ub.g);vb=new
jsx3.gui.ToolbarButton(this.getName()+ub.s,null);vb.setEvent(ub.t,ub.j);vb.setDynamicProperty(ub.k,ub.u);vb.setDynamicProperty(ub.m,ub.v);Lb.setChild(vb,1,null,ub.g);};r.onAfterAssemble=function(i,k){if(this.getWindowState()==1)this.setZIndex(k.getNextZIndex(jsx3.app.Server.Z_DIALOG));};r.getMaskProperties=function(){return this.getModal()==0?jsx3.gui.Block.MASK_ALL_EDIT:jsx3.gui.Block.MASK_NO_EDIT;};r.doToggleState=function(h){var
X=h!=null?h:this.getWindowState()==1?0:1;var
F;if((F=this.getTaskButton())!=null){this.setWindowState(X);var
ua=null;if(X==1){this.setDisplay(ub.w,true);this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG)*this.getZMultiplier(),true);ua=this;}else{this.setDisplay(ub.x,true);ua=F;}F.setState(X==1?1:0);ua.focus();}else{var
rb=this.NK();if(X==1){rb.childNodes[1].style.display=ub.w;var
la=this.Wl(true);la.recalculate({height:this.getHeight()},rb);var
ja=la.lg(1);ja.recalculate({height:this.getHeight()},rb.childNodes[2]);if(this.getResize()){rb.childNodes[3].style.display=ub.w;rb.childNodes[4].style.display=ub.w;}this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG)*this.getZMultiplier(),true);this.setWindowState(1);}else{jsx3.html.persistScrollPosition(rb.childNodes[1]);rb.childNodes[1].style.display=ub.x;var
la=this.Wl(true);myCaptionBar=this.getCaptionBar();var
Jb=la.getBorderHeight()+(myCaptionBar!=null?myCaptionBar.getHeight():0)+2*this.getBuffer(2);la.recalculate({height:Jb},rb);var
ja=la.lg(1);ja.recalculate({height:Jb},rb.childNodes[2]);if(this.getResize()){rb.childNodes[3].style.display=ub.x;rb.childNodes[4].style.display=ub.x;}this.setWindowState(0);}}if(this.getWindowState()==1){jsx3.gui.Painted._onAfterRestoreViewCascade(this,this.NK());jsx3.html.restoreScrollPosition(this.NK());}};r.setDisplay=function(i,s){this.jsxdisplay=i;if(s){if(i==ub.x)jsx3.html.persistScrollPosition(this.NK());this.updateGUI(ub.y,i);}return this;};r._findGUI=function(e){return this.NK();};r.focus=function(c){if(!c){jsx3.sleep(function(){this.focus(true);},ub.z+this.getId(),this);return;}var
X=this.NK();if(!X)return;if(this.getWindowState()==0){if(this.getTaskButton())this.doToggleState(1);else jsx3.html.focus(this.NK());}else{var
L=jsx3.app.Browser.isTableMoveBroken();if(L)X.childNodes[1].style.display=ub.x;this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG),true);var
_=this.getCaptionBar();if(_!=null)_.focus();else jsx3.html.focus(this.NK());if(L)X.childNodes[1].style.display=ub.w;}};r.isFront=function(){if(this.getWindowState()==0)return false;var
C=this.getParent();var
fa=C.getDescendantsOfType(b,true);for(var
ra=0;ra<fa.length;ra++)if(fa[ra]!=this&&fa[ra].getWindowState()==1&&fa[ra].getZIndex()>this.getZIndex())return false;return true;};r.wV=function(i,d){if(!this.isFront()){var
Hb=this.fC();var
O=Hb.style.display;var
va=jsx3.app.Browser.isTableMoveBroken();if(O!=ub.x&&va)Hb.style.display=ub.x;this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG),true);if(O!=ub.x&&va)Hb.style.display=O;}};r.fC=function(){var
Y=this.NK();return Y!=null?Y.childNodes[1]:null;};r.getTaskButton=function(k){if(k==null){var
Db=this.getServer();if(Db!=null)k=Db.getTaskBar();}if(k!=null)return k.getChild(b.kN+this.getId());return null;};r.paintChild=function(h,j){var
G=this.NK();if(G!=null)if(this.getCaptionBar()==h){this.repaint();}else this.jsxsuper(h,j,G.childNodes[1]);};r.doClose=function(){(this.getParent()).removeChild(this);};r.onSetParent=function(j){var
ia=this.getServer();if(ia!=null&&ia!=j.getServer())this.m7(ia);return true;};r.onSetChild=function(l){this.jsxsuper(l);if(!this.getCaptionBar()&&b.vP(l))this.clearBoxProfile(true);return true;};r.m7=function(h){if(h==null)h=this.getServer();var
xa=this.getTaskButton(h.getTaskBar());if(xa!=null)(xa.getParent()).removeChild(xa);};r.onDestroy=function(p){this.m7(p.getServer());this.jsxsuper(p);};r.getWindowState=function(){return this.jsxwindowstate!=null?this.jsxwindowstate:1;};r.setWindowState=function(i){this.jsxwindowstate=i;return this;};r.getZMultiplier=function(){return this.jsxzmultiplier!=null?this.jsxzmultiplier:1;};r.setZMultiplier=function(i){this.jsxzmultiplier=i;return this;};r.getModal=function(){return this.jsxmodal!=null?this.jsxmodal:0;};r.setModal=function(k){this.jsxmodal=k;return this;};r.doBeginMove=function(k,a){if(k.leftButton()){this._jsxK0=true;var
Va=this.NK();var
Pa=Va.childNodes[2];Pa.style.visibility=ub.w;jsx3.html.focus(Va.childNodes[0]);try{this.jsxsupermix(k,Pa);Ea.subscribe(ub.A,this,ub.B);this.setZIndex((this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG),true);}catch(Kb){var
Na=jsx3.lang.NativeError.wrap(Kb);sb.error(ub.C+this.getName()+ub.D+Na);this.tx(Pa);}}};r.tx=function(a){a.style.visibility=ub.E;a.style.left=ub.F;a.style.top=ub.F;this._jsxK0=false;Ea.unsubscribe(ub.A,this,ub.B);};r.doEndMove=function(d){if(this._jsxK0){var
db=this.NK();var
ra=db.childNodes[2];db.style.left=parseInt(parseInt(db.style.left)+parseInt(ra.style.left)+1)+ub.G;db.style.top=parseInt(parseInt(db.style.top)+parseInt(ra.style.top)+1)+ub.G;this.tx(ra);d=d.event;if((db.ownerDocument.getElementsByTagName(ub.H))[0]){try{this.jsxsupermix(d,db);}catch(Kb){var
qb=jsx3.lang.NativeError.wrap(Kb);sb.error(ub.I+this.getName()+ub.D+qb);}if(!this.getEvent(ub.J))this.constrainPosition();}else sb.error(ub.K+jsx3.html.getOuterHTML(d.srcElement()));}this.focus(true);};r.NK=function(){var
ob=this.getRendered();if(ob!=null&&this.jsxmodal){return ob.childNodes[1];}else return ob;};r.getAbsolutePosition=function(s){return this.jsxsuper(s,this.NK());};r.setLeft=function(d,k){this.jsxleft=d;if(k){this.vX({left:d});}else this.Qf();return this;};r.setTop=function(m,q){this.jsxtop=m;if(q){this.vX({top:m});}else this.Qf();return this;};r.setWidth=function(c,j){this.jsxwidth=c;if(j){this.vX({width:this.jsxwidth});}else this.Qf();return this;};r.setHeight=function(p,l){this.jsxheight=p;if(l){this.vX({height:this.jsxheight});}else this.Qf();return this;};r.doMaximize=function(l){if(this.getWindowState()==0)this.doToggleState(1);if(this._jsxAW!=null){var
D=this.BK(this._jsxAW.jsxwidth,this._jsxAW.jsxheight);this.yS(this._jsxAW.jsxleft,this._jsxAW.jsxtop,D[0],D[1]);delete this[ub.L];var
fa={left:this.getLeft(),top:this.getTop(),width:this.getWidth(),height:this.getHeight()};this.vX(fa,true);if(l)((l.setDynamicProperty(ub.m,ub.r)).setDynamicProperty(ub.k,ub.q)).repaint();}else{this._jsxAW={};this._jsxAW.jsxwidth=this.getWidth();this._jsxAW.jsxheight=this.getHeight();this._jsxAW.jsxtop=this.getTop();this._jsxAW.jsxleft=this.getLeft();var
va=(this.getParent()).getAbsolutePosition();var
Xa=this.NK();var
D=this.BK(va.W-b.OP[1]-b.OP[3],va.H-b.OP[0]-b.OP[2]);this.yS(Math.min(parseInt(Xa.style.left),va.W-D[0]-b.OP[1]),Math.min(parseInt(Xa.style.top),va.H-D[1]-b.OP[2]),D[0],D[1]);var
fa={left:this.getLeft(),top:this.getTop(),width:this.getWidth(),height:this.getHeight()};this.vX(fa,true);if(l)((l.setDynamicProperty(ub.m,ub.M)).setDynamicProperty(ub.k,ub.N)).repaint();}};r.getResize=function(){return this.jsxresize==null?1:this.jsxresize;};r.setResize=function(g){this.jsxresize=g;this.Qf();return this;};r.setResizeParameters=function(m,k,l,e,f,h){this.jsxresize=m;this.jsxminx=k;this.jsxminy=l;this.jsxmaxx=e;this.jsxmaxy=f;};r.BK=function(s,q){s=Math.max(s,this.TO());q=Math.max(q,this.Vy());if(typeof this.jsxmaxx==ub.O)s=Math.min(s,this.jsxmaxx);if(typeof this.jsxmaxy==ub.O)q=Math.min(q,this.jsxmaxy);return [s,q];};r.getCaptionBar=function(){return this.findDescendants(b.vP,false,false,true);};b.vP=function(c){return jsx3.gui.WindowBar&&c instanceof jsx3.gui.WindowBar&&c.getType()==0;};r.yF=function(i,d){if(!i.leftButton())return;var
z=this.doEvent(ub.P,{objEVENT:i});if(z!==false){b._jsxEz=d.parentNode.childNodes[2];b._jsxEz.style.visibility=ub.w;b._jsxEz.style.zIndex=11;d.style.zIndex=12;var
Ma=(this.Wl(true)).lg(1);b._jsxoffx=b.uJ+2;b._jsxoffy=b.uJ+2;var
G=this;jsx3.gui.Interactive._beginMoveConstrained(i,d,function(k,c){return G.UH(k,c);});Ea.subscribe(ub.A,this,ub.Q);}};r.UH=function(o,n){if(b._jsxEz){this._jsxsT=o+b._jsxoffx;this._jsxjP=n+b._jsxoffy;this._jsxsT=Math.max(this._jsxsT,this.TO());this._jsxjP=Math.max(this._jsxjP,this.Vy());if(typeof this.jsxmaxx==ub.O)this._jsxsT=Math.min(this._jsxsT,this.jsxmaxx);if(typeof this.jsxmaxy==ub.O)this._jsxjP=Math.min(this._jsxjP,this.jsxmaxy);var
gb=(this.Wl()).lg(1);gb.recalculate({width:this._jsxsT,height:this._jsxjP},b._jsxEz);return [this._jsxsT-b._jsxoffx,this._jsxjP-b._jsxoffy];}return [o,n];};r.TO=function(){var
Fb=Number(this.jsxminx)||-1;return Math.max(25,Fb);};r.Vy=function(){var
Ta=Number(this.jsxminy)||-1;var
Y=15;if(this.getCaptionBar()!=null)Y=Y+30;return Math.max(Y,Ta);};r.tG=function(p){p=p.event;Ea.unsubscribe(ub.A,this,ub.Q);Ea.publish(p);if(!b._jsxEz)return;var
Sa=(this.Wl()).lg(1);var
H=Sa.getOffsetWidth();var
fa=Sa.getOffsetHeight();b._jsxEz.style.visibility=ub.E;b._jsxEz.style.zIndex=0;delete b[ub.R];this.yS(H,fa);this.vX({width:H,height:fa});this.doEvent(ub.S,{objEVENT:p,intW:this.getWidth(),intH:this.getHeight(),_gipp:1});};r.yS=function(o,g,d,s){if(arguments.length==4){this.setDynamicProperty(ub.T,null);this.jsxleft=o;this.setDynamicProperty(ub.U,null);this.jsxtop=g;}else{d=o;s=g;}this.setDynamicProperty(ub.V,null);this.jsxwidth=d;this.setDynamicProperty(ub.W,null);this.jsxheight=s;};r.recalcBox=function(){this.jsxsuper();this.vX();};r.Id=function(n){var
La=n==this.getCaptionBar()?this.Wl(true):(this.Wl(true)).lg(0);return {parentwidth:La.ee(),parentheight:La.ld()};};r.vX=function(d,s){if(s&&(d.left==null||d.top==null)){var
La=(this.getParent()).getAbsolutePosition();if(d.left==null)d.left=Math.max(0,parseInt((La.W-d.width)/2));if(d.top==null)d.top=Math.max(0,parseInt((La.H-d.height)/2));}this.Mc(d,true);};r.zd=function(n){var
Cb=this.getWindowState()==0&&(this.getServer()).getTaskBar()==null;var
v=this.getParent();if(v==null){v={H:this.getHeight(),W:this.getWidth()};}else{v=v.getAbsolutePosition();if(v==null||v.W==0)v={H:this.getHeight(),W:this.getWidth()};}var
gb=jsx3.util.strEmpty(this.getTop())?Math.max(0,parseInt((v.H-this.getHeight())/2)):this.getTop();var
x=jsx3.util.strEmpty(this.getLeft())?Math.max(0,parseInt((v.W-this.getWidth())/2)):this.getLeft();var
zb=this.getCaptionBar();if(n==null)n={};if(n.left==null)n.left=x;if(n.top==null)n.top=gb;if(n.width==null)n.width=this.getWidth();var
kb=this.getBorder(ub.X);if(n.height==null)if(Cb){n.height=(new
jsx3.gui.Painted.Box({border:kb})).getBorderHeight()+(zb!=null?zb.getHeight():0)+2*this.getBuffer(2);}else n.height=this.getHeight();n.tagname=ub.Y;n.boxtype=ub.Z;n.padding=this.getBuffer(2);n.border=kb;var
Ia=new
jsx3.gui.Painted.Box(n);var
Jb={};Jb.parentwidth=Ia.ee();Jb.parentheight=Ia.ld();Jb.width=ub._;Jb.height=Ia.ld()-(zb!=null?zb.getHeight()+this.getBuffer(2):0);Jb.top=zb!=null?zb.getHeight()+this.getBuffer(2)*2:this.getBuffer(2);Jb.left=this.getBuffer(2);Jb.tagname=ub.Y;Jb.boxtype=ub.Z;Jb.border=this.getContentBorder(ub.X);var
Kb=new
jsx3.gui.Painted.Box(Jb);Ia.cl(Kb);Jb={};Jb.left=-1;Jb.top=-1;Jb.width=this.getWidth();Jb.height=n.height;Jb.tagname=ub.Y;Jb.boxtype=ub.Z;Jb.padding=ub.aa;Jb.border=ub.X;var
ua=new
jsx3.gui.Painted.Box(Jb);Ia.cl(ua);Jb={};Jb.left=this.getWidth()-(b.uJ+2);Jb.top=this.getHeight()-(b.uJ+2);Jb.width=b.uJ+1;Jb.height=b.uJ+1;Jb.tagname=ub.Y;Jb.boxtype=ub.Z;var
P=new
jsx3.gui.Painted.Box(Jb);Ia.cl(P);Jb={};Jb.left=this.getWidth()-(b.uJ+2);Jb.top=this.getHeight()-(b.uJ+2);Jb.width=b.uJ;Jb.height=b.uJ;Jb.tagname=ub.Y;Jb.boxtype=ub.Z;var
Eb=new
jsx3.gui.Painted.Box(Jb);Ia.cl(Eb);return Ia;};r.Hj=function(j,g,h){var
db=this.Wl(true,j);if(g!=null)g=this.NK();if(g!=null){var
C=this.getCaptionBar();var
Ab=db.recalculate(j,g,h);if(!Ab.w&&!Ab.h)return;var
Gb=db.lg(0);var
T=db.ld()-(C!=null?C.getHeight()+this.getBuffer(2):0);Gb.recalculate({parentwidth:db.ee(),parentheight:db.ld(),width:ub._,height:T},g.childNodes[1],h);var
Ra=db.lg(1);Ra.recalculate({width:this.getWidth(),height:this.getHeight()},g.childNodes[2],h);if(this.getResize()==1){var
xa=db.lg(2);xa.recalculate({top:this.getHeight()-(b.uJ+2),left:this.getWidth()-(b.uJ+2)},g.childNodes[3],h);var
fb=db.lg(3);fb.recalculate({top:this.getHeight()-(b.uJ+2),left:this.getWidth()-(b.uJ+2)},g.childNodes[4],h);}if(C)h.add(C,{width:ub._,parentwidth:db.ee(),height:C.getHeight()},g.childNodes[0],true);var
Jb=this.getChildren();var
D=0;var
hb=g.childNodes[C?1:0];if(hb){var
W=hb.childNodes;for(var
R=0;R<Jb.length;R++)if(Jb[R]!=C){h.add(Jb[R],{parentwidth:Gb.ee(),parentheight:Gb.ld()},true,true);}else D=1;}}};r.paint=function(){this.applyDynamicProperties();var
Ha=this.getId();var
J=this.getWindowState()==0&&(this.getServer()).getTaskBar()==null;var
db=J?ub.ba:ub.w;var
fb=this.getServer()!=null?(this.getServer()).getNextZIndex(jsx3.app.Server.Z_DIALOG)*this.getZMultiplier():5000;var
wa={};if(this.getEvent(ub.ca)!=null)wa[ub.da]=true;if(this.getModal()!=1)wa[ub.ea]=ub.fa;var
pa=this.getModal()==1;var
bb=this.qj(wa,pa?1:0);var
Ga=this.renderAttributes(null,true);this.em();var
_=this.Wl(true);if(J){var
C=_.getOffsetHeight()-_.getPaintedHeight();var
Hb=ub.ga+(32-C)+ub.ha;}else var
Hb=ub.w;Hb=ub.w;if(pa){var
Pa=[ub.ia+Ha+ub.ja+this.Ak()+this.Rl()+this.Fg(ub.ka,ub.la,0)+ub.ma+fb+this.ad()+ub.na+ub.oa+ub.pa+this.Fg(ub.ea,ub.qa,1)+this.Fg(ub.A,ub.ra,1)+ub.sa,ub.ta+this.Rl()+this.Fg(ub.ka,ub.la,1)+ub.ua];_.setAttributes(bb+this.Rl()+ub.va+this.dd()+ub.ja+Ga);_.setStyles(ub.wa+this.ch()+this.ke()+this.lc()+this.Bg()+Hb);}else{var
Pa=[ub.w,ub.w];_.setAttributes(ub.xa+Ha+ub.ya+this.Ak()+bb+this.Rl()+ub.va+this.dd()+ub.ja+Ga);_.setStyles(ub.za+fb+ub.Aa+this.ch()+this.ke()+this.ad()+this.lc()+this.Bg()+Hb);}var
oa=this.getCaptionBar();var
xa=oa!=null?oa.paint():ub.Ba;var
Va=_.lg(0);Va.setAttributes(ub.Ca);Va.setStyles(this.Pb()+this.Mm()+db);var
va=(this.getChildren()).filter(function(p){return p!=oa;});var
Ua=this.paintChildren(va);var
Ba=_.lg(1);Ba.setAttributes(ub.Da);Ba.setStyles(ub.Ea+Hb);if(this.getResize()==1){var
La=_.lg(2);La.setStyles(ub.Fa+jsx3.gui.Block.SPACE+ub.Ga+db);La.setAttributes(this.Fg(ub.ea,ub.Ha,pa?2:1));var
U=_.lg(3);U.setStyles(ub.Ia+b.o7+ub.Ga+db);var
Ta=(La.paint()).join(ub.w)+(U.paint()).join(ub.w);}else var
Ta=ub.w;return Pa[0]+(_.paint()).join(xa+(Va.paint()).join(Ua)+(Ba.paint()).join(ub.Ja)+Ta)+Pa[1];};r.jX=function(q,o){if(q.srcElement()==o&&q.tabKey()){q.cancelReturn();(this.getCaptionBar()||this).focus();}else q.setAttribute(ub.Ka,1);};r.xY=function(a,l){(this.beep()).focus();a.cancelBubble();};r.Qq=function(d,i){this.focus();d.cancelBubble();};r.em=function(){var
Ma=this.getId();var
Aa;if(this.getServer()!=null&&(Aa=(this.getServer()).getTaskBar())!=null&&this.getModal()!=1){var
Lb=this.getCaptionBar();var
H=this.getTaskButton();if(Lb!=null){Lb.applyDynamicProperties();if(H==null){jsx3.require(ub.e);var
ta=new
jsx3.gui.ToolbarButton(b.kN+Ma,1,Lb.getText());Aa.setChild(ta);ta.setEvent(ub.La+Ma+ub.Ma,ub.j);ta.setState(this.getWindowState()==1?1:0);ta.setText(jsx3.util.strTruncate(Lb.getText()||ub.w,20));ta.setDynamicProperty(ub.k,ub.Na);if(Aa.getRendered()==null){jsx3.sleep(Aa.repaint,ub.Oa+Aa.getId(),Aa);}else Aa.paintChild(ta);}else{var
lb=Lb.getText();if(lb)((H.setText(jsx3.util.strTruncate(lb,20))).setTip(lb)).repaint();}}else if(H!=null)(H.getParent()).removeChild(H);}};r.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};r.Mm=function(){if(this.getOverflow()==2){return ub.Pa;}else return ub.Qa;};r.dd=function(){var
mb=this.getClassName();return ub.Ra+(mb?ub.Sa+mb:ub.w);};r.getAlertsParent=function(){return this;};r.constrainPosition=function(e){var
N=this.getRendered();var
La=N!=null;var
Za=null;if(N){Za=N.parentNode;}else if(this.getParent())Za=(this.getParent()).getRendered();if(Za==null)return;var
ib=parseInt(Za.style.width);var
U=parseInt(Za.style.height);if(e===true){var
db=ib-b.OP[1]-b.OP[3];var
w=U-b.OP[0]-b.OP[2];if(this.getWidth()>db)this.setWidth(db,La);if(this.getHeight()>w)this.setHeight(w,La);var
za=ib-this.getWidth()-b.OP[1];var
D=U-this.getHeight()-b.OP[2];if(this.getLeft()<b.OP[3])this.setLeft(b.OP[3],La);else if(this.getLeft()>za)this.setLeft(za,La);if(this.getTop()<b.OP[0])this.setTop(b.OP[0],La);else if(this.getTop()>D)this.setTop(D,La);}else{var
ca=this.getDimensions();if(!e)e=b.XS;e=e.concat();if(e[0]==null)e[0]=ca[3];else if(e[0]<0)e[0]=ca[3]+e[0];if(e[1]==null)e[1]=ca[2];else if(e[1]<0)e[1]=ca[2]+e[1];if(e[2]==null)e[2]=ca[3];else if(e[2]<0)e[2]=ca[3]+e[2];if(e[3]==null)e[3]=ca[2];else if(e[3]<0)e[3]=ca[2]+e[3];if(ca[0]<e[3]-ca[2])this.setLeft(e[3]-ca[2],La);else if(ca[0]>ib-e[1])this.setLeft(ib-e[1],La);if(ca[1]<e[0]-ca[3])this.setTop(e[0]-ca[3],La);else if(ca[1]>U-e[2])this.setTop(U-e[2],La);}};r.onRemoveChild=function(q,d){this.jsxsuper(q,d);if(jsx3.$A.is(q)){this.Qf();this.repaint();}else if(b.vP(q)){this.Qf();this.repaint();}};r.beep=function(){var
fa=this.getCaptionBar();if(fa!=null){fa.beep();}else{var
Za=this.NK();jsx3.gui.no(Za,{backgroundColor:ub.Ta});}return this;};r.getAlwaysCheckHotKeys=function(){return true;};r.getContentBorder=function(l){return jsx3.util.strEmpty(this.jsxcontentborder)&&l?l:this.jsxcontentborder;};r.setContentBorder=function(e){this.jsxcontentborder=e;this.clearBoxProfile(true);return this;};r.getBorder=function(j){return jsx3.util.strEmpty(this.jsxborder)&&j?j:this.jsxborder;};r.setBorder=function(q){this.jsxborder=q;this.clearBoxProfile(true);return this;};r.getBuffer=function(p){return jsx3.util.strEmpty(this.jsxbuffer)&&p!=null?p:+this.jsxbuffer;};r.setBuffer=function(d){this.jsxbuffer=!isNaN(d)?parseInt(d):d;this.clearBoxProfile(true);return this;};b.getVersion=function(){return ub.Ua;};});jsx3.Dialog=jsx3.gui.Dialog;jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Button",jsx3.gui.Block,[jsx3.gui.Form],function(r,b){var
ub={A:" ",B:"",C:"3.0.00",D:"pt",a:"#e8e8f5",b:"#f6f6ff",c:"#a6a6af",d:"jsx30button",e:"jsxexecute",f:"solid 1px ",g:"click",h:"BT",i:"keydown",j:"mousedown",k:"mouseup",l:"mouseout",m:"relativebox",n:"box",o:"span",p:"2",q:";solid 1px ",r:"100%",s:"div",t:"inline",u:'id="',v:'"',w:' class="',x:' class="jsx30button_text"',y:"background-color:",z:";"};var
zb=jsx3.gui.Event;var
Gb=jsx3.gui.Form;r.DEFAULTBACKGROUNDCOLOR=ub.a;r.DEFAULTHIGHLIGHT=ub.b;r.DEFAULTSHADOW=ub.c;r.DEFAULTHEIGHT=17;b._jsxRL=null;r.DEFAULTCLASSNAME=ub.d;b.init=function(k,h,d,f,c){this.jsxsuper(k,h,d,f);this.setText(c);};b.doValidate=function(){return (this.setValidationState(1)).getValidationState();};b._ebKeyDown=function(i,d){if(i.spaceKey()||i.enterKey()){this.BT(i,d);i.cancelAll();}};b.doClick=function(){var
ka=zb.getCurrent();this.BT(ka);};b.focus=function(){var
J=this.getRendered();if(J){J=J.childNodes[0];jsx3.html.focus(J);return J;}};b.doExecute=function(a){this.BT(a);};b.BT=function(q,o){if(q==null||q.leftButton()||!q.isMouseEvent())this.doEvent(ub.e,{objEVENT:q});};b.Fo=function(s,m){if(!s.leftButton())return;if(!this.getBorder()){m.style.border=ub.f+r.DEFAULTSHADOW;m.style.borderRightColor=r.DEFAULTHIGHLIGHT;m.style.borderBottomColor=r.DEFAULTHIGHLIGHT;}jsx3.html.focus(m.childNodes[0]);};b.yo=function(e,h){if(e.leftButton())if(!this.getBorder()){h.style.border=ub.f+r.DEFAULTHIGHLIGHT;h.style.borderRightColor=r.DEFAULTSHADOW;h.style.borderBottomColor=r.DEFAULTSHADOW;}this.jsxsupermix(e,h);};b.Uc=function(q,o){if(!this.getBorder()){o.style.border=ub.f+r.DEFAULTHIGHLIGHT;o.style.borderRightColor=r.DEFAULTSHADOW;o.style.borderBottomColor=r.DEFAULTSHADOW;}};b.getValue=function(){return this.getText();};b.setEnabled=function(l,o){if(this._jsxRL!=null)this._jsxRL.setEnabled(l==1);return this.jsxsupermix(l,o);};r.yg={};r.yg[ub.g]=ub.h;r.yg[ub.i]=true;r.yg[ub.j]=true;r.yg[ub.k]=true;r.yg[ub.l]=true;b.Hj=function(f,c,l){var
Mb=this.Wl(true,f);if(c){var
Fb=Mb.recalculate(f,c,l);if(Fb.w||Fb.h){var
Ka=Mb.lg(0);Ka.recalculate({parentwidth:Mb.ee(),parentheight:Mb.ld()},c.childNodes[0],l);}}};b.zd=function(g){this.applyDynamicProperties();if(this.getParent()&&(g==null||isNaN(g.parentwidth)||isNaN(g.parentheight))){g=(this.getParent()).Id(this);}else if(g==null)g={};var
ka=this.getRelativePosition()!=0;if(!g.boxtype)g.boxtype=ka?ub.m:ub.n;g.tagname=ub.o;if(g.width==null&&!jsx3.util.strEmpty(this.getWidth()))g.width=this.getWidth();g.height=this.getHeight()==null?r.DEFAULTHEIGHT:this.getHeight();if(ka){if(!jsx3.util.strEmpty(this.getMargin()))g.margin=this.getMargin();}else{g.left=!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;g.top=!jsx3.util.strEmpty(this.getTop())?this.getTop():0;}g.padding=!jsx3.util.strEmpty(this.getPadding())?this.getPadding():ub.p;g.border=this.getBorder()||ub.f+r.DEFAULTHIGHLIGHT+ub.q+r.DEFAULTSHADOW+ub.q+r.DEFAULTSHADOW+ub.q+r.DEFAULTHIGHLIGHT;var
pb=new
jsx3.gui.Painted.Box(g);var
Bb={};Bb.parentwidth=pb.ee();Bb.parentheight=pb.ld();Bb.height=ub.r;if(g.width){Bb.width=ub.r;Bb.tagname=ub.s;Bb.boxtype=ub.t;}else{Bb.tagname=ub.o;Bb.boxtype=ub.m;}var
Lb=new
jsx3.gui.Painted.Box(Bb);pb.cl(Lb);return pb;};b.paint=function(){this.applyDynamicProperties();var
va;if((va=this.getKeyBinding())!=null){var
ob=this;if(this._jsxRL!=null)this._jsxRL.destroy();this._jsxRL=this.doKeyBinding(function(q){ob.BT(q);},va);if(this._jsxRL)this._jsxRL.setEnabled(this.getEnabled()!=0);}var
Ia=this.qj(this.getEnabled()==1?r.yg:null,0);var
Ua=this.renderAttributes(null,true);var
Ra=this.Wl(true);Ra.setAttributes(ub.u+this.getId()+ub.v+this.Ak()+this.nk()+Ia+ub.w+this.dd()+ub.v+Ua);Ra.setStyles(this.ad()+this.lc()+this.mi(true)+this.cd()+this._k()+this.wk()+this.jc()+this.ch()+this.Wi()+this.Pb()+this.Bg());var
ca=Ra.lg(0);ca.setAttributes(this.Rl()+ub.x);ca.setStyles(this.Pb()+this.Mm());return (Ra.paint()).join((ca.paint()).join(this.il())+this.paintChildren());};b.setRelativePosition=function(f,e){if(this.jsxrelativeposition!=f){this.jsxrelativeposition=f;this.Qf();if(e)this.repaint();}return this;};b.setWidth=function(o,j){this.jsxwidth=o;this.Qf();if(j)this.repaint();return this;};b.ch=function(){var
hb=this.getEnabled()!=0?this.getBackgroundColor()||r.DEFAULTBACKGROUNDCOLOR:this.getDisabledBackgroundColor()||Gb.DEFAULTDISABLEDBACKGROUNDCOLOR;return ub.y+hb+ub.z;};b.dd=function(){var
ka=this.getClassName();return r.DEFAULTCLASSNAME+(ka?ub.A+ka:ub.B);};r.getVersion=function(){return ub.C;};b.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};b.emInit=function(l){this.jsxsupermix(l);this.subscribe(ub.e,this,ub.D);};b.emSetValue=function(o){};b.emGetValue=function(){return null;};b.emBeginEdit=function(o,p,l,d,g,a,n){var
Ra=jsx3.html.selectSingleElm(n,0,0,0);if(Ra){this.jsxsupermix(o,p,l,d,g,a,n);jsx3.html.focus(Ra);}else return false;};b.emPaintTemplate=function(){this.setEnabled(0);var
E=this.paint();this.setEnabled(1);var
ea=this.paint();return this.emGetTemplate(ea,E);};b.pt=function(e){var
Za=this.emGetSession();if(Za){}};b.onDestroy=function(p){if(this._jsxRL)this._jsxRL.destroy();this.jsxsuper(p);};b.onSetChild=function(o){return false;};});jsx3.Button=jsx3.gui.Button;jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.TextBox",jsx3.gui.Block,[jsx3.gui.Form],function(d,m){var
ub={A:"textarea",B:"inline",C:"box",D:"2 0 0 2",E:"solid 1px #a6a6af;solid 1px #e6e6e6;solid 1px #e6e6e6;solid 1px #a6a6af",F:"keypress",G:"jsxkeydown",H:"keydown",I:"keyup",J:"blur",K:"jsxfocus",L:"focus",M:"jsxdblclick",N:"dblclick",O:"jsxclick",P:"click",Q:"jsxmousedown",R:"mousedown",S:"jsxmousewheel",T:"mousewheel",U:' id="',V:'"',W:' value="',X:'" class="',Y:'" ',Z:' class="',_:"overflow:",a:"",aa:";",b:"auto",ba:' wrap="',c:"scroll",ca:"virtual",d:"#ffffff",da:"off",e:"none",ea:"background-color:",f:"ssn",fa:' type="',g:"phone",ga:"text",h:"email",ha:"password",i:"number",ia:' maxlength="',j:"letter",ja:" ",k:"uszip",ka:' readonly="readonly" ',l:"jsx30textbox",la:"#FFFF66",m:/[\s\S]*/,ma:"3.0.00",n:/^\d{3}-\d{2}-\d{4}$/,na:"1;",o:/^[0-9\-\(\) ]+$/,oa:"FV",p:/^([a-zA-Z0-9_~\-\.]+)@([a-zA-Z0-9\-]+\.){1,}[a-zA-Z0-9]{2,}$/,q:/^\d+$/,r:/^[a-zA-Z ,-\.]+$/,s:/^\d{5}(-\d{4})?$/,t:"jsxexecute",u:"jsxkeypress",v:"jsxchange",w:"jsxkeyup",x:"jsxincchange",y:"input[text]",z:"input[password]"};var
ga=jsx3.gui.Event;var
F=jsx3.gui.Interactive;var
Ka=jsx3.html;d.TYPETEXT=0;d.TYPETEXTAREA=1;d.TYPEPASSWORD=2;d.WRAPYES=1;d.WRAPNO=0;d.OVERFLOWNORMAL=ub.a;d.OVERFLOWAUTO=ub.b;d.OVERFLOWSCROLL=ub.c;jsx3.gui.TextBox.DEFAULTBACKGROUNDCOLOR=ub.d;d.VALIDATIONNONE=ub.e;d.VALIDATIONSSN=ub.f;d.VALIDATIONPHONE=ub.g;d.VALIDATIONEMAIL=ub.h;d.VALIDATIONNUMBER=ub.i;d.VALIDATIONLETTER=ub.j;d.VALIDATIONUSZIP=ub.k;d.DEFAULTCLASSNAME=ub.l;d.hI={};d.hI[ub.e]=ub.m;d.hI[ub.f]=ub.n;d.hI[ub.g]=ub.o;d.hI[ub.h]=ub.p;d.hI[ub.i]=ub.q;d.hI[ub.j]=ub.r;d.hI[ub.k]=ub.s;m.init=function(s,f,a,q,n,o,b){this.jsxsuper(s,f,a,q,n);if(o!=null){this.setDefaultValue(o);this.setValue(o);}if(b!=null)this.setType(b);};m.Lh=function(i,c){if(i.enterKey()&&this.getEvent(ub.t)){this.doEvent(ub.t,{objEVENT:i});}else this.doEvent(ub.u,{objEVENT:i});};m.ah=function(r,n){this.jsxsupermix(r,n);var
W=this.parseValue(n.value);if(this.jsxvalue!==W){var
O=this.doEvent(ub.v,{objEVENT:r,strPREVIOUS:this.jsxvalue,strVALUE:W,_gipp:1});if(O===false){n.value=this.formatValue(this.jsxvalue);return;}else this.jsxvalue=W;}var
Sa=this.formatValue(W);if(Sa!=n.value)n.value=Sa;};m.formatValue=function(n){if(n==null)return ub.a;return ub.a+n;};m.parseValue=function(c){return c;};m.mc=function(s,j){this.doEvent(ub.w,{objEVENT:s});if(this.getType()==1){var
Gb=this.getMaxLength();if(Gb>0){var
Wa=j.value;if(Wa&&Wa.length>Gb)j.value=Wa.substring(0,Gb);}}if(this.hasEvent(ub.x)){var
ob=this.parseValue(j.value);if(this._jsxYp!=ob){var
wb=this.doEvent(ub.x,{objEVENT:s,strPREVIOUS:this._jsxYp,strVALUE:ob});if(wb===false){j.value=this._jsxYp!=null?this._jsxYp:ub.a;}else this._jsxYp=j.value;}}};m.getMaxLength=function(){return this.jsxmaxlength!=null?this.jsxmaxlength:null;};m.setMaxLength=function(c){this.jsxmaxlength=c;return this;};m.getType=function(){return this.jsxtype==null?0:this.jsxtype;};m.setType=function(p){this.jsxtype=p;this.Qf();return this;};m.getValue=function(){var
G=this.getRendered();if(G!=null){return this.parseValue(G.value);}else return this.jsxvalue!=null?this.jsxvalue:this.getDefaultValue();};m.hV=function(){var
ea=this.getRendered();if(ea)this.jsxvalue=this.parseValue(ea.value);};m.rA=function(){return jsx3.util.strEscapeHTML(this.formatValue(this.jsxvalue));};m.il=function(){return this.getText()?this.getText():ub.a;};m.getDefaultValue=function(){return this.il();};m.setValue=function(h){this.jsxvalue=h;this._jsxYp=h;var
Nb=this.getRendered();if(Nb!=null)Nb.value=this.formatValue(h);return this;};m.setDefaultValue=function(n){this.setText(n);return this;};m.getWrap=function(){return this.jsxwrap==null?1:this.jsxwrap;};m.setWrap=function(n){this.jsxwrap=n;return this;};m.Hj=function(n,j,e){this.sk(n,j,e,3);};m.zd=function(s){if(this.getParent()&&(s==null||isNaN(s.parentwidth)||isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};this.applyDynamicProperties();var
vb=this.getRelativePosition()!=0;var
v,Qa,_a,Ra,sb;var
tb=!vb&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
Ya=!vb&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(s.left==null)s.left=Ya;if(s.top==null)s.top=tb;if(s.width==null)s.width=this.getWidth();if(s.height==null)s.height=this.getHeight();var
y=this.getType();if(y==0){s.tagname=ub.y;s.empty=true;}else if(y==2){s.tagname=ub.z;s.empty=true;}else s.tagname=ub.A;if(!s.boxtype)s.boxtype=vb?ub.B:ub.C;s.padding=(v=this.getPadding())!=null&&v!=ub.a?v:ub.D;if(s.tagname!=ub.A)s.margin=vb&&(Qa=this.getMargin())!=null&&Qa!=ub.a?Qa:null;s.border=(_a=this.getBorder())!=null&&_a!=ub.a?_a:ub.E;var
B=new
jsx3.gui.Painted.Box(s);return B;};m.paint=function(){this.applyDynamicProperties();this.hV();var
ib=this.getId();var
jb=this.getType();var
ja={};if(this.hasEvent(ub.t)||this.hasEvent(ub.u))ja[ub.F]=true;if(this.hasEvent(ub.G))ja[ub.H]=true;if(this.hasEvent(ub.w)||this.hasEvent(ub.x)||this.getType()==1&&this.getMaxLength()>0){ja[ub.I]=true;this._jsxYp=this.getValue();}ja[ub.J]=true;if(this.hasEvent(ub.K))ja[ub.L]=true;if(this.hasEvent(ub.M))ja[ub.N]=true;if(this.hasEvent(ub.O))ja[ub.P]=true;if(this.hasEvent(ub.Q))ja[ub.R]=true;if(this.hasEvent(ub.S))ja[ub.T]=true;var
Ea=this.qj(ja,0);var
mb=this.renderAttributes(null,true);var
xa=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
db=this.Wl(true);if(jb==0||jb==2){db.setAttributes(this.iH()+ub.U+ib+ub.V+this.Lj()+this.pc()+this.V3()+this.aW()+this.Rl()+this.nk()+Ea+ub.W+this.rA()+ub.X+this.dd()+ub.Y+mb);db.setStyles(xa);var
Eb=ub.a;}else{db.setAttributes(ub.U+ib+ub.V+this.Lj()+this.pc()+this.V3()+this.Rl()+this.nk()+Ea+ub.Z+this.dd()+ub.Y+this.renderAttributes()+this.vT());db.setStyles(xa+this.Mm());var
Eb=this.rA();}return (db.paint()).join(Eb);};m.Mm=function(){return ub._+(this.getOverflow()?this.getOverflow():ub.a)+ub.aa;};m.vT=function(){return ub.ba+(this.getWrap()==1?ub.ca:ub.da)+ub.V;};m.ch=function(){var
Aa=this.getEnabled()!=0?this.getBackgroundColor()||d.DEFAULTBACKGROUNDCOLOR:this.getDisabledBackgroundColor()||jsx3.gui.Form.DEFAULTDISABLEDBACKGROUNDCOLOR;return ub.ea+Aa+ub.aa;};m.iH=function(){return ub.fa+(this.getType()==0?ub.ga:ub.ha)+ub.V;};m.aW=function(q){return this.getMaxLength()!=null?ub.ia+parseInt(this.getMaxLength())+ub.Y:ub.a;};m.dd=function(){var
_a=this.getClassName();return d.DEFAULTCLASSNAME+(_a?ub.ja+_a:ub.a);};m.getReadonly=function(){return this.jsxreadonly;};m.setReadonly=function(c){this.jsxreadonly=c?1:0;};m.V3=function(){return this.getReadonly()?ub.ka:ub.a;};m.getValidationType=function(){return jsx3.util.strEmpty(this.jsxvalidationtype)?ub.e:this.jsxvalidationtype;};m.setValidationType=function(k){this.jsxvalidationtype=k;return this;};m.getValidationExpression=function(){return jsx3.util.strEmpty(this.jsxvalidationexpression)?null:this.jsxvalidationexpression;};m.setValidationExpression=function(n){this.jsxvalidationexpression=n;return this;};m.doValidate=function(){this.setValidationState(1);var
nb=this.getValue();if(nb!=null)nb=String(nb);var
ca=null;if(nb==null||jsx3.util.strTrim(nb)==ub.a){if(this.getRequired()==1)this.setValidationState(0);}else{var
ya=this.getValidationExpression();if(ya==null){ca=d.hI[this.getValidationType()];}else ca=new
RegExp(ya);this.setValidationState(nb.search(ca)==0?1:0);}return this.getValidationState();};m.onSetChild=function(s){return false;};m.beep=function(){jsx3.gui.no(this.getRendered(),{backgroundColor:ub.la});};m.getSelection=function(){var
B=this.getRendered();if(B){var
pa=Ka.getSelection(B);return [pa.getStartIndex(),pa.getEndIndex()];}return [0,0];};m.setSelection=function(l,k){var
tb=this.getRendered();if(tb){if(arguments.length==0){l=0;k=tb.value.length;}var
lb=Ka.getSelection(tb);lb.setRange(l,k);}};d.getVersion=function(){return ub.ma;};m.emInit=function(a){this.jsxsupermix(a);var
_=ub.G;if(!this.hasEvent(_))this.setEvent(ub.na,_);this.subscribe(_,this,ub.oa);};m.emUpdateDisplay=function(r,p){if(this.getType()==1){var
la=isNaN(this._jsxdl)?r.W:Math.min(parseInt(this._jsxdl),r.W);var
ra=isNaN(this._jsxvh)?r.H:Math.min(parseInt(this._jsxvh),p.H-r.T);this.setDimensions(r.L,r.T,la,ra,true);}else this.jsxsupermix(r,p);};m.emGetValue=function(){var
z=(this.emGetSession()).value;var
pa=this.getValue();return z===null&&pa===ub.a?z:pa;};m.FV=function(j){var
P=j.context.objEVENT;var
Ia=false;if(!P.hasModifier(true)){var
vb=P.keyCode();var
Hb=false;if(this.getType()==1){Ia=!P.shiftKey()&&vb==13;Hb=P.isArrowKey();}else Hb=vb==37||vb==39;if(!Ia&&Hb){var
R=this.getRendered(P);var
eb=Ka.getSelection(R);var
ea=R.value;var
Ua=vb==37||vb==38;Ia=Ua&&(eb.getStartIndex()>0||eb.getEndIndex()>0)||!Ua&&(eb.getStartIndex()<ea.length||eb.getEndIndex()<ea.length);}}if(Ia)P.cancelBubble();};});jsx3.TextBox=jsx3.gui.TextBox;jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.CheckBox",jsx3.gui.Block,[jsx3.gui.Form],function(n,f){var
ub={A:";",B:' for="',C:'_input"',D:"_ebLabelClick",E:"&#160;",F:' checked="checked" ',G:" ",H:"_input",I:"3.0.00",J:"tM",K:"disabled",L:/<(input .*?)\/>/g,M:"<$1><xsl:if test=\"{0}='1'\"><xsl:attribute name=\"checked\">checked</xsl:attribute></xsl:if></input>",a:"jsx30checkbox",b:/^false|0|null$/i,c:"jsxtoggle",d:"",e:"visible",f:"hidden",g:"click",h:"keydown",i:"span",j:"relativebox",k:"box",l:"div",m:"inline",n:"input[checkbox]",o:"label",p:"0 0 0 18",q:"0/0/0",r:"background-color:#999999;",s:' id="',t:'"',u:' class="',v:"overflow-x:hidden;",w:' class="jsx30checkbox_tristate" ',x:'_input" type="checkbox"',y:' class="jsx30checkbox_partial" ',z:"visibility:"};n.UNCHECKED=0;n.CHECKED=1;n.PARTIAL=2;n.DEFAULTCLASSNAME=ub.a;f.jsxdefaultchecked=0;var
mb=ub.b;f.init=function(c,h,q,a,l,g,s){this.jsxsuper(c,h,q,a,l,g);this.setDefaultChecked(s==null?1:s);this.jsxchecked=s;};f.getDefaultChecked=function(){return this.jsxdefaultchecked;};f.setDefaultChecked=function(p){this.jsxdefaultchecked=p;return this;};f.getChecked=function(){return this.jsxchecked!=null?this.jsxchecked:this.getDefaultChecked();};f.setChecked=function(o){if(this.jsxchecked!=o){this.jsxchecked=o;this.Wx();if(this.isOldEventProtocol())this.doEvent(ub.c,{intCHECKED:o});}return this;};f.getValue=function(){return this.getChecked();};f.setValue=function(r){this.setChecked(!jsx3.util.strEmpty(r)&&(r+ub.d).search(mb)!=0?1:0);return this;};f.nj=function(k,b){this.focus(b);if(!k.leftButton()&&k.isMouseEvent())return;if(this.getEnabled()==1){var
ib=this.getChecked()==1?0:1;this.jsxchecked=ib;this.Wx(b);this.doEvent(ub.c,{objEVENT:k,intCHECKED:ib,_gipp:1});}};f.Wx=function(o){if(o==null)o=this.getRendered();if(o!=null){(jsx3.html.selectSingleElm(o,0,0,0)).checked=this.jsxchecked==1;(jsx3.html.selectSingleElm(o,0,0,1)).style.visibility=this.jsxchecked==2?ub.e:ub.f;}};f._ebKeyDown=function(r,p){if(r.enterKey()){this.nj(r,p);r.cancelAll();}};f._ebLabelClick=function(q,o){q.preventDefault();};n.yg={};n.yg[ub.g]=true;n.yg[ub.h]=true;f.Hj=function(q,p,a){this.sk(q,p,a,3);};f.zd=function(p){if(this.getParent()&&(p==null||isNaN(p.parentwidth)||isNaN(p.parentheight))){p=(this.getParent()).Id(this);}else if(p==null)p={};var
ca=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
xa,sb,tb,Fa;if(p.tagname==null)p.tagname=ub.i;if((xa=this.getBorder())!=null&&xa!=ub.d)p.border=xa;if(ca&&(sb=this.getMargin())!=null&&sb!=ub.d)p.margin=sb;if(!p.boxtype)p.boxtype=ca?ub.j:ub.k;if(p.left==null)p.left=!ca&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(p.top==null)p.top=!ca&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(p.height==null)p.height=(tb=this.getHeight())!=null?tb:18;if(p.width==null)if((Fa=this.getWidth())!=null)p.width=Fa;var
Ma=new
jsx3.gui.Painted.Box(p);var
Ha={};Ha.tagname=ub.l;Ha.boxtype=ub.m;var
S=new
jsx3.gui.Painted.Box(Ha);Ma.cl(S);var
Ha={};Ha.tagname=ub.i;Ha.boxtype=ub.k;Ha.width=16;Ha.parentheight=Ma.ld();Ha.height=18;Ha.left=0;Ha.top=0;var
fa=new
jsx3.gui.Painted.Box(Ha);S.cl(fa);var
Ha={};Ha.tagname=ub.n;Ha.empty=true;Ha.omitpos=true;var
Y=new
jsx3.gui.Painted.Box(Ha);fa.cl(Y);var
Ha={};Ha.tagname=ub.i;Ha.boxtype=ub.k;Ha.left=3;Ha.top=7;Ha.width=7;Ha.height=2;var
ma=new
jsx3.gui.Painted.Box(Ha);fa.cl(ma);var
Ha={};Ha.tagname=ub.o;Ha.boxtype=ub.m;Ha.top=2;Ha.parentheight=Ma.ld();Ha.height=18;Ha.padding=ub.p;var
oa=new
jsx3.gui.Painted.Box(Ha);Ma.cl(oa);return Ma;};f.focus=function(m){if(!m)m=this.getRendered();if(m)jsx3.html.focus(jsx3.html.selectSingleElm(m,ub.q));};f.paint=function(){this.applyDynamicProperties();var
z=this.getEnabled()==1;var
Ha=z?this.qj(n.yg,0):ub.d;var
v=this.renderAttributes(null,true);var
ka=this.getChecked()==2?ub.e:ub.f;var
yb=z?ub.d:ub.r;var
cb=this.Wl(true);cb.setAttributes(ub.s+this.getId()+ub.t+this.Ak()+ub.u+this.dd()+ub.t+this.nk()+Ha+v);cb.setStyles((cb.getPaintedWidth()?ub.v:ub.d)+this.mi(true)+this._k()+this.cd()+this.wk()+this.jc()+this.ch()+this.ad()+this.lc()+this.Wi()+this.Bg());var
ya=cb.lg(0);var
Ab=ya.lg(0);Ab.setAttributes(ub.w);var
Db=Ab.lg(0);Db.setAttributes(ub.s+this.getId()+ub.x+this.Lj()+this.pc()+this.HF()+this.Rl());var
I=Ab.lg(1);I.setAttributes(ub.y);I.setStyles(ub.z+ka+ub.A+yb);var
qa=this.il();var
Fb=cb.lg(1);Fb.setAttributes((qa?ub.B+this.getId()+ub.C:ub.d)+jsx3.html._d+this.Fg(ub.g,ub.D));return (cb.paint()).join((ya.paint()).join((Ab.paint()).join((Db.paint()).join(ub.d)+(I.paint()).join(ub.E))+(Fb.paint()).join(qa)));};f.HF=function(){return this.getChecked()==1?ub.F:ub.d;};f.dd=function(){var
ia=this.getClassName();return n.DEFAULTCLASSNAME+(ia?ub.G+ia:ub.d);};f.doValidate=function(){this.setValidationState(this.getRequired()==0||this.getChecked()==1?1:0);return this.getValidationState();};f.getInputId=function(){return this.getId()+ub.H;};n.getVersion=function(){return ub.I;};f.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};f.emInit=function(e){this.jsxsupermix(e);this.subscribe(ub.c,this,ub.J);};f.emSetValue=function(q){this.jsxchecked=Number(q)==1?1:0;};f.emGetValue=function(){var
Jb=this.emGetSession();if(Jb)return Jb.column.getValueForRecord(Jb.recordId);return null;};f.emBeginEdit=function(o,s,p,a,j,d,q){var
Ua=jsx3.html.selectSingleElm(q,0,0,0,0,0);if(Ua&&!Ua.getAttribute(ub.K)){this.jsxsupermix(o,s,p,a,j,d,q);jsx3.html.focus(Ua);}else return false;};f.emPaintTemplate=function(){this.jsxchecked=0;this.setText(ub.d);this.setEnabled(0);var
la=this.paint();this.setEnabled(1);var
Bb=this.paint();var
S=this.emGetTemplate(Bb,la);S=S.replace(ub.L,ub.M);return S;};f.tM=function(d){var
ua=this.emGetSession();if(ua){var
Db=d.context.intCHECKED;this.jsxchecked=Db;ua.column.setValueForRecord(ua.recordId,Db.toString());}};f.onSetChild=function(b){return false;};});jsx3.CheckBox=jsx3.gui.CheckBox;jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.RadioButton",jsx3.gui.Block,[jsx3.gui.Form],function(k,f){var
ub={A:' name="',B:'" value="',C:'" ',D:' for="',E:'_input"',F:"0/0/0",G:' checked="checked" ',H:" ",I:"_input",J:"3.0.00",K:"C0",L:"disabled",M:/<(input .*?)\/>/g,N:"<$1><xsl:if test=\"{0}='1'\"><xsl:attribute name=\"checked\">checked</xsl:attribute></xsl:if><xsl:if test=\"@jsxdisabled='1'\"><xsl:attribute name=\"disabled\">disabled</xsl:attribute></xsl:if></input>",O:"//record[@",P:"='1']",Q:"1",a:"jsx30radio",b:"jsxselect",c:"input",d:"radio",e:"click",f:"keydown",g:"span",h:"",i:"relativebox",j:"box",k:"div",l:"inline",m:"input[radio]",n:"label",o:"100%",p:"0 0 0 18",q:' id="',r:'"',s:' class="',t:"overflow-x:hidden;",u:' class="jsx30radio_tristate" ',v:'_input" type="radio" ',w:"focus",x:"Vl",y:"blur",z:"ah"};k.UNSELECTED=0;k.SELECTED=1;k.DEFAULTCLASSNAME=ub.a;f.init=function(e,a,o,c,s,j,n,r,g){this.jsxsuper(e,a,o,c,s,j);this.setGroupName(r);this.setValue(n);this.setDefaultSelected(g==null?1:g);if(g!=null)this.setSelected(g);};f.getGroupName=function(){return this.jsxgroupname;};f.setGroupName=function(e){this.jsxgroupname=e;};f.nj=function(c,j){this.focus(j);if(!c.leftButton()&&c.isMouseEvent())return;if(this.getSelected()!=1){var
ob=this.doEvent(ub.b,{objEVENT:c,_gipp:1});if(ob!==false)this.setSelected(1,j);}};f._ebKeyDown=function(s,m){if(s.enterKey()){this.nj(s,m);s.cancelAll();}};f.getDefaultSelected=function(){return this.jsxdefaultselected;};f.setDefaultSelected=function(g){this.jsxdefaultselected=g;return this;};f.getSelected=function(){return this.jsxselected!=null?this.jsxselected:this.getDefaultSelected();};f.setSelected=function(q,a){q=q!=null?q:1;this.jsxselected=q;if(a==null)a=this.getRendered();if(a){(jsx3.html.selectSingleElm(a,0,0,0)).checked=q==1;if(q==1){var
lb=this.getSiblings();for(var
Da=0;Da<lb.length;Da++)lb[Da].jsxselected=0;}}return this;};f.getSiblings=function(l){var
ya=[];var
oa=this.getDocument();if(oa==null)return ya;var
Ia=this.getId();var
N=oa.getElementsByName(this.getGroupName());for(var
Ib=0;Ib<N.length;Ib++){var
Fa=N[Ib];if(Fa.nodeName.toLowerCase()==ub.c&&Fa.type.toLowerCase()==ub.d){var
ea=Fa.parentNode.parentNode.parentNode;if(ea.id!=Ia)ya.push(l?[jsx3.GO(ea.id),ea]:jsx3.GO(ea.id));}}return ya;};k.getValue=function(a){var
Ba=document;if(Ba!=null){var
Y=Ba.getElementsByName(a);if(Y!=null){var
wa=Y.length;for(var
bb=0;bb<wa;bb++)if(Y[bb].checked)return Y[bb].value;}}};k.setValue=function(g,b){var
ya=document;if(ya==null)return null;var
Ab=ya.getElementsByName(g);if(Ab!=null){var
Fb=Ab.length;for(var
T=0;T<Fb;T++)if(Ab[T].value==b){var
_=jsx3.GO(Ab[T].parentNode.parentNode.parentNode.id);_.setSelected(1);return _;}}return null;};f.getValue=function(){return this.jsxvalue;};f.setValue=function(p){this.jsxvalue=p;return this;};f.getGroupValue=function(){if(this.getSelected()==1)return this.getValue();var
Pa=this.getSiblings();for(var
Eb=0;Eb<Pa.length;Eb++){var
H=Pa[Eb];if(H.getSelected()==1)return H.getValue();}return null;};f.setGroupValue=function(p){if(this.getValue()==p){if(this.getSelected()!=1)this.setSelected(1);}else{this.jsxselected=0;var
yb=this.getSiblings(true);for(var
T=0;T<yb.length;T++){var
K=yb[T][0];var
ma=yb[T][1];var
X=K.getValue()==p;K.jsxselected=X?1:0;(jsx3.html.selectSingleElm(ma,0,0,0)).checked=X;}}};f.doValidate=function(){this.setValidationState(this.getRequired()==0||this.getGroupValue()!=null?1:0);return this.getValidationState();};k.yg={};k.yg[ub.e]=true;k.yg[ub.f]=true;f.Hj=function(m,j,e){this.sk(m,j,e,3);};f.zd=function(g){if(this.getParent()&&(g==null||isNaN(g.parentwidth)||isNaN(g.parentheight))){g=(this.getParent()).Id(this);}else if(g==null)g={};var
Q=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
hb,ra,w,na;if(g.tagname==null)g.tagname=ub.g;if((hb=this.getBorder())!=null&&hb!=ub.h)g.border=hb;if(Q&&(ra=this.getMargin())!=null&&ra!=ub.h)g.margin=ra;if(!g.boxtype)g.boxtype=Q?ub.i:ub.j;if(g.left==null)g.left=!Q&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(g.top==null)g.top=!Q&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(g.height==null)g.height=(w=this.getHeight())!=null?w:18;if(g.width==null)if((na=this.getWidth())!=null)g.width=na;var
Ga=new
jsx3.gui.Painted.Box(g);var
yb={};yb.tagname=ub.k;yb.boxtype=ub.l;var
Aa=new
jsx3.gui.Painted.Box(yb);Ga.cl(Aa);yb={};yb.tagname=ub.g;yb.boxtype=ub.j;yb.width=16;yb.parentheight=Ga.ld();yb.height=18;var
_=new
jsx3.gui.Painted.Box(yb);Aa.cl(_);yb={};yb.tagname=ub.m;yb.empty=true;yb.omitpos=true;var
Za=new
jsx3.gui.Painted.Box(yb);_.cl(Za);yb={};yb.tagname=ub.n;yb.boxtype=ub.l;yb.top=2;yb.parentheight=Ga.ld();yb.height=ub.o;yb.padding=ub.p;var
Ca=new
jsx3.gui.Painted.Box(yb);Ga.cl(Ca);return Ga;};f.paint=function(){this.applyDynamicProperties();var
ea=this.getEnabled()==1;var
Ia=ea?this.qj(k.yg,0):ub.h;var
Q=this.renderAttributes(null,true);var
H=this.Wl(true);H.setAttributes(ub.q+this.getId()+ub.r+this.Ak()+ub.s+this.dd()+ub.r+this.nk()+Ia+Q);H.setStyles((H.getPaintedWidth()?ub.t:ub.h)+this.mi(true)+this._k()+this.cd()+this.wk()+this.jc()+this.ch()+this.ad()+this.lc()+this.Wi()+this.Bg());var
Ba=H.lg(0);var
Ib=Ba.lg(0);Ib.setAttributes(ub.u);var
O=Ib.lg(0);O.setAttributes(ub.q+this.getId()+ub.v+this.Fg(ub.w,ub.x,3)+this.Fg(ub.y,ub.z,3)+ub.A+this.getGroupName()+ub.B+this.getValue()+ub.C+this.pc()+this.paintSelected()+this.Rl());var
eb=this.il();var
Ja=H.lg(1);Ja.setAttributes((eb?ub.D+this.getId()+ub.E:ub.h)+jsx3.html._d);return (H.paint()).join((Ba.paint()).join((Ib.paint()).join((O.paint()).join(ub.h))+(Ja.paint()).join(eb)));};f.focus=function(d){if(!d)d=this.getRendered();if(d)jsx3.html.focus(jsx3.html.selectSingleElm(d,ub.F));};f.paintSelected=function(){return this.getSelected()==1?ub.G:ub.h;};f.dd=function(){var
B=this.getClassName();return k.DEFAULTCLASSNAME+(B?ub.H+B:ub.h);};f.getInputId=function(){return this.getId()+ub.I;};f.onSetChild=function(i){return false;};k.getVersion=function(){return ub.J;};f.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};f.emInit=function(d){this.jsxsupermix(d);this.subscribe(ub.b,this,ub.K);};f.emSetValue=function(l){this.jsxselected=Number(l)==1?1:0;};f.emGetValue=function(){var
ma=this.emGetSession();if(ma)return ma.column.getValueForRecord(ma.recordId);return null;};f.emBeginEdit=function(a,n,h,m,e,i,l){var
L=jsx3.html.selectSingleElm(l,0,0,0,0,0);if(L&&!L.getAttribute(ub.L)){this.jsxsupermix(a,n,h,m,e,i,l);jsx3.html.focus(L);}else return false;};f.emPaintTemplate=function(){this.jsxselected=0;this.setText(ub.h);this.setEnabled(0);var
da=this.paint();this.setEnabled(1);var
La=this.paint();var
ia=this.emGetTemplate(La,da);ia=ia.replace(ub.M,ub.N);return ia;};f.C0=function(l){var
qb=this.emGetSession();if(qb){var
sa=qb.column.getPath();var
aa=(qb.matrix.getXML()).selectNodeIterator(ub.O+sa+ub.P);while(aa.hasNext()){var
yb=aa.next();yb.removeAttribute(sa);}qb.column.setValueForRecord(qb.recordId,ub.Q);}};});jsx3.RadioButton=jsx3.gui.RadioButton;jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.LayoutGrid",jsx3.gui.Block,null,function(g,j){var
ub={a:"33%",b:"34%",c:"*",d:"50%,50%",e:/\s*,\s*/g,f:",",g:"_jsxcachedrows",h:"_jsxcachedcols",i:"string",j:"%",k:"box",l:"100%",m:"relativebox",n:"div",o:"true",p:"",q:"3.0.00"};g.ORIENTATIONCOL=0;g.ORIENTATIONROW=1;g.DEFAULTORIENTATION=0;g.DEFAULTREPEAT=3;g.DEFAULTDIMENSIONS=[ub.a,ub.a,ub.b];g.ABSOLUTE=0;g.ADAPTIVE=1;j.init=function(c){this.jsxsuper(c);this.setCols(ub.c);this.setRows(ub.d);};j.onAfterAttach=function(){this.jsxsuper();if(this.jsxsizearray&&!(this.jsxrows||this.jsxcols))this.setDimensionArray(this.jsxsizearray,false);};j.onRemoveChild=function(a,n){this.jsxsuper(a,n);this.e2();};j.paintChild=function(i,l){if(!l){this.recalcBox();this.repaint();}};j.getOrientation=function(){return this.jsxorientation==null?g.DEFAULTORIENTATION:this.jsxorientation;};j.setOrientation=function(l){this.jsxorientation=l;return this;};j.getBestGuess=function(){return this.jsxbestguess;};j.setBestGuess=function(k){this.jsxbestguess=k;return this;};j.getRepeat=function(){return this.jsxrepeat;};j.setRepeat=function(o){this.jsxrepeat=o;return this;};j.getDimensionArray=function(){var
gb=this.getOrientation()==g.ORIENTATIONCOL?this.getRows():this.getCols();return gb!=null?gb.split(ub.e):[];};j.setDimensionArray=function(l,b){return this.getOrientation()==g.ORIENTATIONCOL?this.setRows(l.join(ub.f),b):this.setCols(l.join(ub.f),b);};j.getCols=function(){return this.jsxcols||ub.c;};j.setCols=function(p,q){this.jsxcols=jsx3.$A.is(p)?p.join(ub.f):p;if(q)this.e2();return this;};j.getRows=function(){return this.jsxrows||ub.c;};j.setRows=function(i,h){this.jsxrows=jsx3.$A.is(i)?i.join(ub.f):i;if(h)this.e2();return this;};j.e2=function(){this.V8();var
_a=this.getRendered();if(_a!=null)this.Mc({},_a);};j.uK=function(m,r){var
Ab=m?ub.g:ub.h;var
N=this.Wl(true);if(N[Ab] instanceof Array)return N[Ab];if(r==null||isNaN(r))r=m?N.ld():N.ee();if(isNaN(r))return [];var
R=0;var
_a=0;var
ib=m?this.getRows():this.getCols();if(!jsx3.$A.is(ib))ib=ib!=null?ib.split(ub.e):[];var
y=new
Array(ib.length);for(var
x=0;x<ib.length;x++){var
Na=ib[x];if(Na==ub.c){y[x]=ub.c;}else if(typeof Na==ub.i&&Na.indexOf(ub.j)>=0){var
Ba=parseInt(Na);y[x]=isNaN(Ba)?ub.c:Ba/100*r;}else{var
Ba=parseInt(Na);y[x]=isNaN(Ba)?ub.c:Ba;}if(y[x]==ub.c)_a++;else R=R+y[x];}if(_a>0){var
nb=Math.max(0,r-R)/_a;for(var
x=0;x<y.length;x++)if(y[x]==ub.c)y[x]=nb;}var
T=0;for(var
x=0;x<y.length;x++){T=T+y[x]%1;y[x]=Math.floor(y[x]);if(T>=1||x==y.length-1&&T>0.5){y[x]++;T--;}}N[Ab]=y;return y;};j.Id=function(m,s){if(s==null)s=m.getChildIndex();var
t=this.Gi(s);if(!t)this.qH();return this.Gi(s)||{boxtype:ub.k,left:0,top:0,width:0,height:0,parentwidth:0,parentheight:0};};j.qH=function(){var
hb=(this.getParent()).Id(this);var
Ba=hb.width?hb.width:hb.parentwidth;var
Na=hb.height?hb.height:hb.parentheight;var
sa=this.uK(true,Na);var
qa=this.uK(false,Ba);var
U=sa.length*qa.length;var
Sa=(this.getChildren()).length;var
Va=Math.min(U,Sa);var
Fb=0;var
Ca=0;for(var
oa=0;oa<sa.length;oa++){var
u=0;for(var
Cb=0;Cb<qa.length&&Fb<Va;Cb++){this.Ei(Fb++
,{boxtype:ub.k,left:u,top:Ca,width:ub.l,height:ub.l,parentwidth:qa[Cb],parentheight:sa[oa]});u=u+qa[Cb];}Ca=Ca+sa[oa];}};j.Hj=function(s,p,r){if(!p){this.clearBoxProfile(true);return;}if(this.getParent()&&(!isNaN(s.parentwidth)&&!isNaN(s.parentheight)||s.width==null&&s.height==null)){s=(this.getParent()).Id(this);}else if(s==null)s={};var
Q=this.Wl(true,s);var
nb=Q._jsxcachedrows!=null&&Q._jsxcachedcols!=null;nb=nb&&!Q.recalculate(s,p,r);if(nb)return;this.V8(Q);var
D=this.getChildren();for(var
sa=0;sa<D.length;sa++)r.add(D[sa],this.Id(D[sa],sa),p?p.childNodes[sa]:null,true);};j.V8=function(q){if(!q)q=this.Wl(false);if(q){delete q[ub.g];delete q[ub.h];}};j.zd=function(o){if(this.getParent()&&(o==null||!isNaN(o.parentwidth)&&!isNaN(o.parentheight)||!isNaN(o.width)&&!isNaN(o.height))){o=(this.getParent()).Id(this);}else if(o==null)o={};var
sb=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);if(!o.boxtype)o.boxtype=sb||o.left==null||o.top==null?ub.m:ub.k;if(o.boxtype==ub.m){if(o.left==null)o.left=0;if(o.top==null)o.top=0;}if(o.width==null)o.width=ub.l;if(o.height==null)o.height=ub.l;o.tagname=ub.n;o.container=ub.o;var
V;if((V=this.getBorder())!=null&&V!=ub.p)o.border=V;return new
jsx3.gui.Painted.Box(o);};j.paint=function(){this.applyDynamicProperties();this.setOverflow(2);var
ba=this.getChildren();for(var
Ra=0;Ra<ba.length;Ra++)ba[Ra].pj(this.Id(ba[Ra],Ra));return this.jsxsuper();};g.getVersion=function(){return ub.q;};});jsx3.LayoutGrid=jsx3.gui.LayoutGrid;jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Tab",jsx3.gui.Block,null,function(p,d){var
ub={A:"The jsx3.gui.Tab instance with the id, '",B:"', could not be painted on-screen, because it does not belong to a jsx3.gui.TabbedPane parent.",C:'id="',D:'"',E:' class="jsx30tab" ',F:' class="jsx30tab_text"',G:"background-image:url(",H:");background-repeat:repeat-x;background-position:top left;",I:"cursor:pointer;",J:"background-color:",K:";",L:"3.0.00",a:"jsx:///images/tab/bevel.gif",b:"#e8e8f5",c:"#d8d8e5",d:"#f6f6ff",e:"#a6a6af",f:"jsx:///images/tab/on.gif",g:"jsx:///images/tab/off.gif",h:"_content",i:"100%",j:"JSXFRAG",k:"url(",l:")",m:"px",n:"none",o:"click",p:"keydown",q:"mouseover",r:"mouseout",s:"span",t:"relativebox",u:"",v:"3 4 1 4",w:"0px pseudo;2px pseudo;0px pseudo;1px pseudo",x:"div",y:"inline",z:"t21"};var
Kb=jsx3.gui.Event;var
Sa=jsx3.gui.Interactive;p.DEFAULTBEVELIMAGE=jsx3.resolveURI(ub.a);p.DEFAULTACTIVECOLOR=ub.b;p.DEFAULTINACTIVECOLOR=ub.c;p.DEFAULTHIGHLIGHT=ub.d;p.DEFAULTSHADOW=ub.e;p.ACTIVEBEVEL=jsx3.resolveURI(ub.f);p.INACTIVEBEVEL=jsx3.resolveURI(ub.g);if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(p.DEFAULTBEVELIMAGE,p.ACTIVEBEVEL,p.INACTIVEBEVEL);p.CHILDBGCOLOR=ub.b;p.STATEDISABLED=0;p.STATEENABLED=1;d.init=function(q,l,o,b,a){this.jsxsuper(q,null,null,o,null,l);if(b!=null)this.setActiveColor(b);if(a!=null)this.setInactiveColor(a);var
nb=new
jsx3.gui.Block(q+ub.h,null,null,ub.i,ub.i);nb.setOverflow(1);nb.setRelativePosition(0);nb.setBackgroundColor(b==null?p.CHILDBGCOLOR:b);this.setChild(nb,1,null,ub.j);};d.onSetParent=function(i){return jsx3.gui.TabbedPane&&i instanceof jsx3.gui.TabbedPane;};d.getBevel=function(){return this.jsxbevel;};d.setBevel=function(a){this.jsxbevel=a;return this;};d.getMaskProperties=function(){return jsx3.gui.Block.MASK_EAST_ONLY;};d.Ri=function(r,n){n.style.backgroundImage=ub.k+p.ACTIVEBEVEL+ub.l;if(jsx3.EventHelp.isDragging())this.Y4(r,false);};d.Uc=function(q,o){o.style.backgroundImage=ub.k+p.INACTIVEBEVEL+ub.l;};d.nj=function(n,r){jsx3.html.focus(r);if(n.leftButton())this.Y4(n);};d.doClickTab=function(a,l){this.Y4(this.isOldEventProtocol(),l);};d.doShow=function(){this.Y4(false);var
ib=this.getParent();var
V=ib.al();var
ha=(ib.Id()).parentwidth;if(V>ha){var
Ua=ib.vn();var
Q=this.getAbsolutePosition(ib.getRendered());if(Q.L+Q.W>ha&&this.getChildIndex()>0){Ua.style.left=parseInt(Ua.style.left)-(Q.L+Q.W-ha)+ub.m;}else if(Q.L<0)Ua.style.left=parseInt(Ua.style.left)-Q.L+ub.m;ib.nn();}};d.Y4=function(s,l){(this.getParent()).Vn(s,this);};d.getActiveColor=function(){return this.jsxactivecolor;};d.setActiveColor=function(n){this.jsxactivecolor=n;return this;};d.getInactiveColor=function(){return this.jsxinactivecolor;};d.setInactiveColor=function(a){this.jsxinactivecolor=a;return this;};d.getEnabled=function(){return this.jsxenabled==null?1:this.jsxenabled;};d.setEnabled=function(c){this.jsxenabled=c;return this;};d.isFront=function(){var
qa=this.getChildIndex();return qa>=0&&(this.getParent()).getSelectedIndex()==qa;};d._ebKeyDown=function(k,b){if(this.jsxsupermix(k,b))return;var
Q=this.getChildIndex();var
Oa=this.getParent();if(k.leftArrow()||k.rightArrow()){var
gb=(Oa.getChildren()).length;var
B=k.leftArrow()?-1:1;var
wa=jsx3.util.numMod(Q+B,gb);var
O=Oa.getChild(wa);while(O!=this&&(!O.getEnabled()||O.getDisplay()==ub.n)){wa=jsx3.util.numMod(wa+B,gb);O=Oa.getChild(wa);}if(O!=this)Oa.Vn(k,wa,null,true);k.cancelAll();}else if(k.downArrow()){Oa.Vn(k,Q,null,true);(this.getContentChild()).focus();k.cancelAll();}};p.yg={};p.yg[ub.o]=true;p.yg[ub.p]=true;p.yg[ub.q]=true;p.yg[ub.r]=true;d.Id=function(o){return this.Gi(0)||this.Ei(0,this.getParent()?(this.getParent()).ve(this):{});};d.Hj=function(m,j,e){this.sk(m,j,e,3);};d.zd=function(h){if(h==null||isNaN(h.parentwidth)||isNaN(h.parentheight)){h=(this.getParent()).Id(this);}else if(h==null)h={};var
ga=this.getPadding();if(this.getWidth()!=null&&!isNaN(parseInt(this.getWidth())))h.width=this.getWidth();h.height=ub.i;h.tagname=ub.s;h.boxtype=ub.t;h.padding=ga!=null&&ga!=ub.u?ga:ub.v;h.border=this.getBorder()||ub.w;h.margin=this.getMargin();var
fa=new
jsx3.gui.Painted.Box(h);var
ra={};ra.parentwidth=fa.ee();ra.parentheight=fa.ld();ra.height=ub.i;if(!(this.getWidth()==null||isNaN(this.getWidth()))){ra.width=ub.i;ra.tagname=ub.x;ra.boxtype=ub.y;}else{ra.tagname=ub.s;ra.boxtype=ub.t;}var
Db=new
jsx3.gui.Painted.Box(ra);fa.cl(Db);return fa;};d.paint=function(){if(!(this.getParent() instanceof jsx3.gui.TabbedPane)){jsx3.util.Logger.doLog(ub.z,ub.A+this.getId()+ub.B);return ub.u;}this.applyDynamicProperties();var
xb=this.getEnabled()==1?this.qj(p.yg,0):ub.u;var
gb=this.renderAttributes(null,true);var
ea=this.Wl(true);ea.setAttributes(ub.C+this.getId()+ub.D+this.Ak()+this.Rl()+this.nk()+xb+ub.E+gb);ea.setStyles(this.Bl()+this.mi()+this.ch()+this.jc()+this._k()+this.cd()+this.wk()+this.Pb()+this.lc()+this.Bg());var
na=ea.lg(0);na.setAttributes(ub.F+jsx3.html._d);na.setStyles(this.Pb());return (ea.paint()).join((na.paint()).join(this.il()));};d.setWidth=function(m,c){this.jsxsuper(m);if(c)this.repaint();};d.setText=function(g,f){this.jsxsuper(g,f);if(f&&this.getParent())(this.getParent()).nn();};d.Bl=function(){return ub.G+p.INACTIVEBEVEL+ub.H;};d.mi=function(){return this.getEnabled()==1?ub.I:ub.u;};d.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};d.Jj=function(){return this.getActiveColor()?this.getActiveColor():p.DEFAULTACTIVECOLOR;};d.Zn=function(){return this.getInactiveColor()?this.getInactiveColor():p.DEFAULTINACTIVECOLOR;};d.ch=function(){var
xa=this.getChildIndex()!=(this.getParent()).getSelectedIndex()?this.Zn():this.Jj();return xa?ub.J+xa+ub.K:ub.u;};p.getVersion=function(){return ub.L;};d.getContentChild=function(){return this.getChild(0);};d.Kj=function(a){var
Mb=this.getContentChild();if(Mb)Mb.Kj(a);this.jsxsuper(a);};});jsx3.Tab=jsx3.gui.Tab;jsx3.require("jsx3.gui.Block","jsx3.gui.Tab");jsx3.Class.defineClass("jsx3.gui.TabbedPane",jsx3.gui.Block,null,function(s,k){var
ub={A:"mouseout",B:"D2",C:'class="jsx30tabbedpane_autoscroller_r" jsxscrolltype="right" ',D:"0px",E:"jsxscrolltype",F:"left",G:"px",H:"-",I:"_jsxxJ",J:"jsxexecute",K:"jsxshow",L:"3.0.00",a:"jsx:///images/tab/l.png",b:"jsx:///images/tab/r.png",c:"solid 1px #f6f6ff;solid 1px #a6a6af;solid 1px #a6a6af;solid 1px #f6f6ff",d:"beforeEnd",e:"visible",f:"",g:"none",h:"jsxhide",i:"jsxchange",j:"box",k:"div",l:"100%",m:"relativebox",n:"white-space:nowrap;",o:"jsxdrop",p:"jsxctrldrop",q:"mouseup",r:'id="',s:'" class="jsx30tabbedpane"',t:"&#160;",u:"visibility:hidden;",v:'class="jsx30tabbedpane_controlbox"',w:"display:none;",x:'class="jsx30tabbedpane_autoscroller_l" jsxscrolltype="left" ',y:"mouseover",z:"aq"};var
V=jsx3.gui.Tab;var
pb=jsx3.gui.Event;var
Bb=jsx3.gui.Block;var
Mb=jsx3.gui.Interactive;s.AUTO_SCROLL_INTERVAL=50;s.LSCROLLER=jsx3.html.getCSSPNG(jsx3.resolveURI(ub.a));s.RSCROLLER=jsx3.html.getCSSPNG(jsx3.resolveURI(ub.b));s.DEFAULTTABHEIGHT=20;s.CONTENTBORDER=ub.c;k.init=function(i){this.jsxsuper(i);};k.paintChild=function(l,c){var
ca=this.getRendered();if(ca!=null){if(this.getShowTabs())jsx3.html.insertAdjacentHTML(ca.childNodes[0].childNodes[0],ub.d,l.paint());var
lb=l.getContentChild();var
jb=(this.getChildren()).length==1;lb=this.yI(lb,jb);jsx3.html.insertAdjacentHTML(ca,ub.d,l.paintChildren([lb]));this.jsxsuper(lb,c,ca,true);if(jb)this.Vn(null,l);}this.nn();};k.onSetChild=function(a){if(!(a instanceof V))return false;var
T=a.getContentChild();if(T&&T instanceof Bb)T.setVisibility(ub.e);if((this.getChildren()).length==0)this.jsxselectedindex=-1;return true;};k.yI=function(o,g){o=o.bc(g)||o;if(o instanceof Bb)o.setDisplay(g?ub.f:ub.g,true);return o;};k.onRemoveChild=function(o,b){this.jsxsuper(o,b);if(jsx3.$A.is(o)){var
Ma=o[this.getSelectedIndex()];if(Ma)Ma.doEvent(ub.h);this.doEvent(ub.i);this.setSelectedIndex(-1);this.Qf();this.repaint();}else{var
jb=this.getSelectedIndex();var
xa=Math.min((this.getChildren()).length-1,jb);if(jb==b)o.doEvent(ub.h);if(xa>=0)this.Vn(false,xa,true);else this.doEvent(ub.i);this.nn();}};k.getSelectedIndex=function(){return this.jsxselectedindex==null?(this.getChildren()).length>0?0:-1:this.jsxselectedindex;};k.setSelectedIndex=function(r,m){if(m){this.Vn(false,r);}else this.jsxselectedindex=r instanceof V?r.getChildIndex():r;return this;};k.yo=function(r,n){this.doDrop(r,n,jsx3.EventHelp.ONDROP);};k.Id=function(j){if(this.getParent()){var
H=(this.getParent()).Id(this);var
la=H.width?H.width:H.parentwidth;var
Ca=this.getShowTabs()?this.paintTabSize()+1:0;return {parentwidth:la,parentheight:Ca};}else return {};};k.ve=function(){if(this.getParent()){var
oa=(this.getParent()).Id(this);var
xa=oa.width!=null&&!isNaN(oa.width)?oa.width:oa.parentwidth;var
wb=this.getShowTabs()?this.paintTabSize():0;var
ba=(oa.height!=null&&!isNaN(oa.height)?oa.height:oa.parentheight)-wb;var
Na={left:0,top:wb,width:xa,height:ba,parentwidth:xa,parentheight:ba,boxtype:ub.j,tagname:ub.k,border:this.getBorder()};if(this.getShowTabs()&&Na.border==null&&Na.border!=ub.f)Na.border=s.CONTENTBORDER;return Na;}return {};};k.Hj=function(j,g,h){var
Z=this.Wl(true,j);if(g){Z.recalculate(j,g,h);var
jb=Z.lg(0);jb.recalculate({parentwidth:Z.ee(),height:this.paintTabSize()+1},g!=null?g.childNodes[0]:null,h);var
A=jb.lg(0);A.recalculate({parentwidth:Z.ee(),height:this.paintTabSize()+1},g!=null?g.childNodes[0].childNodes[0]:null,h);var
H=jb.lg(2);H.recalculate({left:jb.ee()-22},g!=null?g.childNodes[0].childNodes[2]:null,h);var
t=this.getChildren();var
Ia=this.Id();for(var
u=0;u<t.length;u++){var
D=t[u];h.add(D,this.Id(),g!=null,true);var
F=D.getContentChild();if(F!=null){var
Ca=this.getSelectedIndex()==u;F=this.yI(F,Ca);if(Ca)h.add(F,this.ve(),F.getRendered(g),true);}}this.nn();}};k.zd=function(b){if(this.getParent()&&(b==null||!isNaN(b.parentwidth)&&!isNaN(b.parentheight)||!isNaN(b.width)&&!isNaN(b.height))){b=(this.getParent()).Id(this);}else if(b==null)b={};if(b.left==null)b.left=0;if(b.top==null)b.top=0;if(b.width==null)b.width=ub.l;if(b.height==null)b.height=ub.l;if(b.tagname==null)b.tagname=ub.k;if(!b.boxtype)b.boxtype=ub.m;var
sb=new
jsx3.gui.Painted.Box(b);var
wa={};wa.parentwidth=b.parentwidth;wa.width=ub.l;wa.height=this.paintTabSize()+1;wa.left=0;wa.top=0;wa.tagname=ub.k;wa.boxtype=ub.j;var
ta=new
jsx3.gui.Painted.Box(wa);sb.cl(ta);wa={};wa.parentwidth=b.parentwidth;wa.width=ub.l;wa.height=this.paintTabSize()+1;wa.left=0;wa.top=0;wa.tagname=ub.k;wa.boxtype=ub.j;var
_=new
jsx3.gui.Painted.Box(wa);_.setStyles(ub.n);ta.cl(_);wa={};wa.width=14;wa.height=14;wa.left=2;wa.top=2;wa.tagname=ub.k;wa.boxtype=ub.j;var
xa=new
jsx3.gui.Painted.Box(wa);ta.cl(xa);wa={};wa.width=14;wa.height=14;wa.left=ta.ee()-16;wa.top=2;wa.tagname=ub.k;wa.boxtype=ub.j;var
ab=new
jsx3.gui.Painted.Box(wa);ta.cl(ab);return sb;};k.paint=function(){this.applyDynamicProperties();var
bb=this.getId();var
rb=this.getShowTabs();var
Wa=this.getSelectedIndex();if(Wa<0||Wa>=(this.getChildren()).length){Wa=0;this.setSelectedIndex(Wa);}var
sa={};if(this.hasEvent(ub.o)||this.hasEvent(ub.p))sa[ub.q]=true;var
ma=this.qj(sa,0);var
la=this.renderAttributes(null,true);var
Ta=this.Wl(true);Ta.setAttributes(ub.r+bb+ub.s+this.Ak()+this.Rl()+this.nk()+ma+la);Ta.setStyles(this.Wi()+this.ch()+this.ke()+this.ad()+this.lc()+this.Bg());var
ea=Ta.lg(0);if(rb){var
ab=this.getChild(Wa);ab=ab==null?this.getChild(0):ab;if(ab!=null)if(!ab.getEnabled()){var
U=(this.getChildren()).length-1;for(var
ya=0;ya<=U;ya++)if((this.getChild(ya)).getEnabled()){this.setSelectedIndex(ya);break;}}var
x=this.paintChildren();ea.setStyles(this.Pb());}else{var
x=ub.t;ea.setStyles(ub.u);}ea.setAttributes(ub.v);var
Ua=this.getChildren();var
Ba=[];for(var
ya=0;ya<Ua.length;ya++){var
da=this.getSelectedIndex()==ya;var
pa=Ua[ya].getContentChild();if(pa!=null){pa=this.yI(pa,da);pa.pj(this.ve());Ba.push(pa);}}jsx3.sleep(function(){this.nn();},null,this);var
xa=ea.lg(0);var
K=ea.lg(1);K.setStyles(ub.w+s.LSCROLLER);K.setAttributes(ub.x+this.Fg(ub.y,ub.z)+this.Fg(ub.A,ub.B));var
Fb=ea.lg(2);Fb.setStyles(ub.w+s.RSCROLLER);Fb.setAttributes(ub.C+this.Fg(ub.y,ub.z)+this.Fg(ub.A,ub.B));return (Ta.paint()).join((ea.paint()).join((xa.paint()).join(x)+(K.paint()).join(ub.t)+(Fb.paint()).join(ub.t))+this.paintChildren(Ba));};k.nn=function(){var
Ba=this.al();var
D=(this.Id()).parentwidth;var
z=this.vn();if(z)if(D<Ba){z.nextSibling.style.display=parseInt(z.style.left)<0?ub.f:ub.g;z.nextSibling.nextSibling.style.display=ub.f;}else{z.nextSibling.style.display=ub.g;z.nextSibling.nextSibling.style.display=ub.g;z.style.left=ub.D;}};k.al=function(){var
Ea=this.vn();if(Ea){var
Eb=Ea.childNodes;var
yb=Eb.length-1,ib=null;while(yb>=0&&!ib){if(Eb[yb].nodeType==1)ib=Eb[yb];yb--;}if(ib){var
Va=jsx3.html.getRelativePosition(Ea,ib);return Va.L+Va.W;}}};k.aq=function(a,l){var
jb=this;this._jsxxJ={direction:l.getAttribute(ub.E),totalwidth:this.al()-(this.Id()).parentwidth};this._jsxxJ.interval=window.setInterval(function(){jb.iw();},s.AUTO_SCROLL_INTERVAL);};k.vn=function(){var
ta=this.getRendered();return ta?ta.childNodes[0].childNodes[0]:null;};k.iw=function(){var
ma=this.vn();var
H=parseInt(ma.style.left);if(this._jsxxJ.direction==ub.F){if(H-5<0){ma.style.left=H+5+ub.G;ma.nextSibling.nextSibling.style.display=ub.f;}else{ma.style.left=ub.D;ma.nextSibling.style.display=ub.g;this.D2();}}else if(Math.abs(H)+5<=this._jsxxJ.totalwidth){ma.style.left=H-5+ub.G;ma.nextSibling.style.display=ub.f;}else{ma.style.left=ub.H+this._jsxxJ.totalwidth+ub.G;ma.nextSibling.nextSibling.style.display=ub.g;this.D2();}};k.D2=function(f,g){if(this._jsxxJ){window.clearInterval(this._jsxxJ.interval);delete this[ub.I];}};k.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};k.paintTabSize=function(){return this.getTabHeight()!=null&&!isNaN(this.getTabHeight())?this.getTabHeight():s.DEFAULTTABHEIGHT;};k.getTabHeight=function(){return this.jsxtabheight;};k.setTabHeight=function(b){this.jsxtabheight=b;this.clearBoxProfile(true);return this;};k.getShowTabs=function(){return this.jsxshowtabs==null||this.jsxshowtabs===ub.f?1:this.jsxshowtabs;};k.setShowTabs=function(p){this.jsxshowtabs=p;this.clearBoxProfile(true);return this;};k.Vn=function(b,c,o,p){if(!(c instanceof V))c=this.getChild(c);if(c){var
t=this.getShowTabs();var
F=c.getChildIndex();var
aa=this.getSelectedIndex();if(o||aa!=F){this.setSelectedIndex(F);var
yb=(this.getChildren()).length;for(var
ba=0;ba<yb;ba++){var
za=this.getChild(ba);var
hb=za.getContentChild();var
tb=ba==F;if(hb)hb=this.yI(hb,tb);if(t)za.setBackgroundColor(tb?za.Jj():za.Zn(),true);if(tb)hb.Mc(this.ve(),true);}}if(b)c.doEvent(ub.J,{objEVENT:b instanceof pb?b:null});if(!o){var
ya=this.getChild(aa);if(ya)ya.doEvent(ub.h);}if(p)c.focus();c.doEvent(ub.K,{_gipp:1});this.doEvent(ub.i);}};s.getVersion=function(){return ub.L;};});jsx3.TabbedPane=jsx3.gui.TabbedPane;jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Heavyweight","jsx3.gui.Block","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Select",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(i,q){var
ub={A:"url(",Aa:"S",B:")",Ba:"N",C:"children",Ca:"px",D:"text",Da:"div",E:"id",Ea:"_jsxopening",F:"'",Fa:"_",G:"//",Ga:"Error focusing first object: ",H:"[@",Ha:"uu",I:"='",Ia:"span",J:"' or (not(@",Ja:"solid 1px #a6a6af;solid 1px #e6e6e6;solid 1px #e6e6e6;solid 1px #a6a6af",K:") and @",Ka:"relativebox",L:"')]",La:"box",M:'="',Ma:"0 0 0 0",N:'" or (not(@',Na:"0 19 0 0",O:'")]',Oa:"100%",P:"_jsxo2",Pa:"2 0 0 3",Q:"jsxchange",Qa:"inline",R:"x",Ra:"input[text]",S:"body",Sa:"0 0 0 4",T:"sel",Ta:"solid 0px;solid 1px #c8c8d5;solid 0px;solid 0px",U:"jsx3.lc",Ua:"jsxkeyup",V:"jsx3.uc",Va:"keyup",W:"JSX_GENERIC",Wa:"JF",X:"null",Xa:"focus",Y:"jsxabspath",Ya:"NQ",Z:"jsxhomepath",Za:' id="',_:"jsxtext",_a:' class="',a:"#ffffff",aa:"combo",ab:'" jsxtype="Select" ',b:"- Select -",ba:/\<div/i,bb:"background-image:url(",c:"jsx:///xsl/jsxselect.xsl",ca:"dataUnavailable",cb:");background-repeat:no-repeat;background-position:right 0px;",d:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"lc\">abcdefghijklmnopqrstuvwxyz</xsl:param><xsl:param name=\"uc\">ABCDEFGHIJKLMNOPQRSTUVWXYZ</xsl:param><xsl:param name=\"jsxtabindex\">0</xsl:param><xsl:param name=\"jsxselectedimage\"/><xsl:param name=\"jsxselectedimagealt\"/><xsl:param name=\"jsxtransparentimage\"/><xsl:param name=\"jsxdragtype\">JSX_GENERIC</xsl:param><xsl:param name=\"jsxselectedid\">null</xsl:param><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxid\">_jsx</xsl:param><xsl:param name=\"jsxtext\"/><xsl:param name=\"jsxmode\">0</xsl:param><xsl:param name=\"jsxdisableescape\">no</xsl:param><xsl:param name=\"jsxshallowfrom\"/><xsl:param name=\"jsxcasesensitive\">0</xsl:param><xsl:param name=\"jsxnocheck\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsx_type\">select</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><div class=\"jsx30select_{$jsxmode}_option\"><span><xsl:value-of select=\"$jsxasyncmessage\"/></span></div></xsl:when><xsl:when test=\"$jsxshallowfrom\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsxshallowfrom]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"$jsx_type='select'\"><xsl:apply-templates mode=\"select\" select=\".\"/></xsl:when><xsl:otherwise><xsl:apply-templates mode=\"combo\" select=\".\"/></xsl:otherwise></xsl:choose></xsl:for-each></xsl:when><xsl:otherwise><xsl:for-each select=\"descendant::*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"$jsx_type='select'\"><xsl:apply-templates mode=\"select\" select=\".\"/></xsl:when><xsl:otherwise><xsl:apply-templates mode=\"combo\" select=\".\"/></xsl:otherwise></xsl:choose></xsl:for-each></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"*\" mode=\"select\"><xsl:param name=\"myjsxid\" select=\"@*[name() = $attrid]\"/><div class=\"jsx30select_{$jsxmode}_option {@*[name() = $attrclass]}\" id=\"{$jsxid}_{$myjsxid}\" jsxid=\"{$myjsxid}\" jsxtype=\"Option\" tabindex=\"{$jsxtabindex}\" title=\"{@*[name() = $attrtip]}\"><xsl:if test=\"@*[name() = $attrstyle]\"><xsl:attribute name=\"style\"><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:attribute></xsl:if><xsl:if test=\"$jsxnocheck != '1'\"><xsl:choose><xsl:when test=\"$jsxselectedid=$myjsxid\"><img alt=\"{$jsxselectedimagealt}\" class=\"jsx30select_check\" src=\"{$jsxselectedimage}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img alt=\"\" class=\"jsx30select_check\" src=\"{$jsxtransparentimage}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose></xsl:if><xsl:if test=\"@*[name() = $attrimg] and @*[name() = $attrimg] != ''\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30select_icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:if><span><xsl:apply-templates mode=\"jsxtext\" select=\".\"/></span></div></xsl:template><xsl:template match=\"*\" mode=\"combo\"><xsl:variable name=\"mytext\"><xsl:choose><xsl:when test=\"@*[name() = $attrtext]\"><xsl:value-of select=\"@*[name() = $attrtext]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:otherwise></xsl:choose></xsl:variable><xsl:if test=\"(not($jsxcasesensitive = 1) and starts-with(translate($mytext, $lc, $uc), translate($jsxtext, $lc, $uc)))         or ($jsxcasesensitive = 1 and starts-with($mytext, $jsxtext))\"><div class=\"jsx30select_{$jsxmode}_option {@*[name() = $attrclass]}\" id=\"{$jsxid}_{@*[name() = $attrid]}\" jsxid=\"{@*[name() = $attrid]}\" jsxtype=\"Option\" tabindex=\"{$jsxtabindex}\" title=\"{@*[name() = $attrtip]}\"><xsl:if test=\"@*[name() = $attrstyle]\"><xsl:attribute name=\"style\"><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:attribute></xsl:if><xsl:if test=\"$jsxnocheck != '1'\"><xsl:choose><xsl:when test=\"$jsxselectedid=@*[name() = $attrid]\"><img alt=\"{$jsxselectedimagealt}\" class=\"jsx30select_check\" src=\"{$jsxselectedimage}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img alt=\"\" class=\"jsx30select_check\" src=\"{$jsxtransparentimage}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose></xsl:if><xsl:if test=\"@*[name() = $attrimg] and @*[name() = $attrimg] != ''\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30select_icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:if><span><xsl:apply-templates mode=\"jsxtext\" select=\".\"><xsl:with-param name=\"value\" select=\"$mytext\"/></xsl:apply-templates></span></div></xsl:if></xsl:template><xsl:template match=\"*\" mode=\"jsxtext\"><xsl:param name=\"value\" select=\"@*[name() = $attrtext]\"/><xsl:choose><xsl:when test=\"$jsxdisableescape='yes'\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\"$value\"/></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select=\"$value\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"disable-output-escp\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\".\"/></xsl:call-template></xsl:template><xsl:template name=\"disable-output-escp\"><xsl:param name=\"value\" select=\".\"/><xsl:choose><xsl:when test=\"function-available('msxsl:node-set')\"><xsl:value-of disable-output-escaping=\"yes\" select=\"$value\"/></xsl:when><xsl:otherwise><span class=\"disable-output-escp\"><xsl:value-of select=\"$value\"/></span></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",da:"noMatch",db:' class="jsx30select_display" jsxtype="Display" ',e:"JSX_SELECT_XSL",ea:"0px;1px;0px;1px",eb:' jsxtype="Text" class="jsx30select_text"',f:"JSX_COMBO_XSL",fa:'<div style="height:1px;width:',fb:'class="jsx30combo"',g:"jsx:///images/select/arrow.gif",ga:"px;position:relative;left:0px;top:0px;",gb:' class="jsx30combo_text" value="',h:"jsx:///images/select/selectover.gif",ha:'padding:0px;margin:0px 0px -1px 0px;overflow:hidden;">&#160;</div>',hb:'" jsxtype="Text" ',i:"jsx:///images/select/selected.gif",ia:'<div tabindex="0" jsxselid="',ib:"blur",j:"<div tabIndex='0' class='jsx30select_option' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();'>- data unavailable -</div>",ja:'"',jb:"KW",k:"<div tabIndex='0' class='jsx30select_option' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();'>- no match found -</div>",ka:"keydown",kb:"input",l:'<div tabIndex="0" class="jsx30select_option jsx30select_none" onmousedown="var e=jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();"><span style="left:0px;">{0}</span></div>',la:"gu",lb:"jsxbeforeselect",m:"jsx30curvisibleoptions",ma:"click",mb:"jsxselect",n:"jsx30select_select",na:"hO",nb:"3.0.00",o:"background-color:",oa:"mousedown",ob:' maxlength="',p:";",pa:"UC",pb:'" ',q:"",qa:"mouseover",qb:" ",r:"defaultText",ra:"j8",rb:/^(?:display|margin|left|top|position|backgroundColor|color|visibility|zIndex)$/,s:"jsxtype",sa:' jsxtype="Options" class="jsx30select_optionlist" style="',sb:/^(?:backgroundColor|color)$/,t:"jsxid",ta:"min-width:",tb:"C0",u:"Display",ua:"px;",v:"Text",va:'">',w:"Select",wa:"</div>",x:"focusPrevious",xa:"jsx30shadow",y:"focusNext",ya:"W",z:"jsxselid",za:"E"};var
ab=jsx3.util.Logger.getLogger(i.jsxclass.getName());var
M=jsx3.gui.Interactive;var
Qa=jsx3.gui.Event;var
ba=jsx3.html;i.DEFAULTBACKGROUNDCOLOR=ub.a;i.DEFAULTTEXT=ub.b;i.DEFAULTXSLURL=jsx3.resolveURI(ub.c);i.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.d);i.SELECTXSLURL=i.DEFAULTXSLURL;i.SELECTXSLID=ub.e;i.COMBOXSLURL=i.DEFAULTXSLURL;i.COMBOXSLID=ub.f;i.ARROWICON=jsx3.resolveURI(ub.g);i.OVERIMAGE=jsx3.resolveURI(ub.h);i.SELECTEDIMAGE=jsx3.resolveURI(ub.i);if(jsx3.CLASS_LOADER.IE6)ba.loadImages(i.ARROWICON,i.OVERIMAGE,i.SELECTEDIMAGE);i.NODATAMESSAGE=ub.j;i.NOMATCHMESSAGE=ub.k;i.QG=new
jsx3.util.MessageFormat(ub.l);i.TYPESELECT=0;i.TYPECOMBO=1;i.TYPEAHEADDELAY=250;i.dY=null;i.tO=null;i.fW=ub.m;i.DEFAULTCLASSNAME=ub.n;q.init=function(l,m,h,j,g,k){this.jsxsuper(l,m,h,j,g);this.jsxvalue=k;};q.getXSL=function(){return this.nd(i.DEFAULTXSLURL,i.Ip);};q.doValidate=function(){var
ha=jsx3.gui.Form;var
O=this.getRequired()==0;if(!O){var
rb=this.getValue();if(this.getType()==0){O=this.getRecordNode(rb)!=null;}else O=rb!=null&&rb.length>0;}this.setValidationState(O?1:0);return this.getValidationState();};q.ch=function(){var
ka=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor()||jsx3.gui.Form.DEFAULTDISABLEDBACKGROUNDCOLOR;return ka?ub.o+ka+ub.p:ub.q;};q.getType=function(){return this.jsxtype==null?0:this.jsxtype;};q.setType=function(d){this.jsxtype=d;this.Qf();return this;};q.getDefaultText=function(){return this.jsxdefaulttext!=null&&this.jsxdefaulttext!=null?this.jsxdefaulttext:this.Nk(ub.r,i);};q.setDefaultText=function(d){this.jsxdefaulttext=d;return this;};q.NQ=function(a,l){if(this._ebKeyDown(a,l))return;var
U=a.srcElement();var
ya=U.getAttribute(ub.s);var
A=U.getAttribute(ub.t);var
Wa=a.hasModifier();if((a.spaceKey()||a.enterKey())&&A!=null){this.Vp(a,U.getAttribute(ub.t));this.hide(true);}else if(ya==ub.u||ya==ub.v||ya==ub.w){if(a.downArrow()&&!Wa){this.Fy();}else return;}else if(a.leftArrow()||a.escapeKey()){this.hide(true);}else if(a.downArrow()){if(Wa)return;if(U==l.lastChild||A==null){this.h6(l.firstChild.nextSibling);}else this.h6(U.nextSibling);}else if(a.upArrow()){if(Wa)return;if(U==l.firstChild.nextSibling||A==null){this.h6(l.lastChild);}else this.h6(U.previousSibling);}else if(a.tabKey()){if(a.hasModifier(true))return;this.Vp(a,U.getAttribute(ub.t));ba[a.shiftKey()?ub.x:ub.y](this.getRendered(a),a);this.hide(false);return;}else return;a.cancelAll();};q.VE=function(s){var
L=jsx3.gui.Heavyweight.GO(i.fW);var
zb=L?(L.getRendered(s)).childNodes[0].childNodes[0]:null;var
Ba=zb&&zb.getAttribute(ub.z)==this.getId();return Ba?[Ba,zb.childNodes[1].getAttribute(ub.t),zb]:false;};q.JF=function(p,b){if(this._ebKeyDown(p,b))return;var
ca=p.hasModifier();if(!ca&&(p.downArrow()||p.enterKey())){var
La=this.VE(p);if(La){if(p.downArrow()){if(La[1])this.h6(La[2].childNodes[1]);}else{this.hide(false);this.KW(p,this.g4(b));}}else{var
zb=p.enterKey()?ub.q:this.getText();this.Fy(zb);}p.cancelAll();}else if(p.tabKey()&&p.shiftKey()&&!p.hasModifier(true)){ba.focusPrevious(this.getRendered(p),p);}else if(!ca&&(p.rightArrow()||p.leftArrow())){var
Cb=p.leftArrow();var
C=this.g4();var
ra=C.value;var
Wa=ba.getSelection(C);if(Cb&&(Wa.getStartIndex()>0||Wa.getEndIndex()>0)||!Cb&&(Wa.getStartIndex()<ra.length||Wa.getEndIndex()<ra.length))p.cancelBubble();}else{var
R=this.g4();var
bb=R.value;jsx3.sleep(function(){if(this.getParent()==null)return;var
ib=R.value;if(bb!=ib){if(i.tO)window.clearTimeout(i.tO);var
X=this;i.tO=window.setTimeout(function(){if(X.getParent()==null)return;i.tO=null;X.Fy(ib);},i.TYPEAHEADDELAY);}},null,this);}};q.gu=function(n,r){this.NQ(n,r);};q.g4=function(k){k=this.getRendered(k);return k?this.getType()==1?k.childNodes[0].childNodes[0].childNodes[0]:k.childNodes[0].childNodes[0]:null;};q.show=function(){var
v=this.getRendered();if(v)this.Fy();};q.hO=function(o,m){var
qb=o.srcElement();while(qb!=null&&(!qb.getAttribute||qb.getAttribute(ub.t)==null)){qb=qb.parentNode;if(qb==m)qb=null;}if(qb!=null)this.Vp(o,qb.getAttribute(ub.t));this.hide(true);};q.h6=function(d){if(this._jsxsW){try{this._jsxsW.style.backgroundImage=ub.A+jsx3.gui.Block.SPACE+ub.B;}catch(Kb){}this._jsxsW=null;}if(d){ba.focus(d);d.style.backgroundImage=ub.A+i.OVERIMAGE+ub.B;this._jsxsW=d;var
na=jsx3.gui.Heavyweight.GO(i.fW);na.scrollTo(d);}};q.KW=function(n,r){var
ua=r.value;var
Db=this.hn(ub.C);var
ka=this.hn(ub.D);var
zb=this.hn(ub.E);var
_a=ua.indexOf(ub.F)==-1?[ub.G+Db+ub.H+ka+ub.I,ua,ub.J+ka+ub.K+zb+ub.I,ua,ub.L].join(ub.q):[ub.G+Db+ub.H+ka+ub.M,ua,ub.N+ka+ub.K+zb+ub.M,ua,ub.O].join(ub.q);var
Gb=(this.getXML()).selectSingleNode(_a);var
u=this.VE(n);if(!u){delete this[ub.P];if(Gb!=null){this.Vp(n,this.Sf(Gb,ub.E));}else if(ua!=this.jsxvalue){var
ia=this.doEvent(ub.Q,{objEVENT:n,strVALUE:ua});if(ia!==false){this.jsxvalue=ua;}else this.redrawRecord(this.jsxvalue);}}else this._jsxo2=1;};q.hide=function(n){if(i.dY==this){var
Hb=jsx3.gui.Heavyweight.GO(i.fW);if(Hb)Hb.destroy();if(n)try{this.focus();}catch(Kb){}Qa.unsubscribeLoseFocus(this);i.dY=null;}if(i.tO){i.tO=null;window.clearTimeout(i.tO);}};i.hideOptions=function(){if(i.dY!=null)i.dY.hide();};i.n8=function(){var
Fb=ba.getMode();if(Fb==2&&jsx3.CLASS_LOADER.getVersion()>=7)Fb=Fb+ub.R;return Fb;};q.Fy=function(b){if(this._jsxopening)return;var
rb=this.getRendered();if(rb!=null){var
Ga=this.getType();var
Gb=rb.ownerDocument;if(i.dY!=null)i.dY.hide(false);i.dY=this;var
kb=this.getAbsolutePosition((Gb.getElementsByTagName(ub.S))[0]);var
I=kb.W;var
Za=this.getType()==1;var
Y={};Y.jsxtabindex=this.getIndex()?this.getIndex():0;Y.jsxselectedimage=i.SELECTEDIMAGE;Y.jsxselectedimagealt=this.Nk(ub.T,i);Y.lc=this.Nk(ub.U);Y.uc=this.Nk(ub.V);Y.jsxtransparentimage=jsx3.gui.Block.SPACE;Y.jsxdragtype=ub.W;Y.jsxid=this.getId();Y.jsxselectedid=this.getValue()==null?ub.X:this.getValue();Y.jsxpath=jsx3.getEnv(ub.Y);Y.jsxpathapps=jsx3.getEnv(ub.Z);Y.jsxpathprefix=(this.getUriResolver()).getUriPrefix();Y.jsxappprefix=(this.getServer()).getUriPrefix();Y.jsxmode=i.n8();if(Za){Y.jsxsortpath=ub._;Y.jsx_type=ub.aa;}if(b!=null)Y.jsxtext=b;var
Ha=this.getXSLParams();for(var na in Ha)Y[na]=Ha[na];var
xa=this.doTransform(Y);if(!jsx3.xml.Template.supports(1))xa=ba.removeOutputEscapingSpan(xa);xa=this.vo(xa);if(!xa.match(ub.ba))xa=i.QG.format(this.Nk(Ga==0?ub.ca:ub.da,i));var
tb=new
jsx3.gui.Painted.Box({width:I,height:1,border:ub.ea});tb.calculate();var
wa=tb.ee();var
X=ub.fa+wa+ub.ga+ub.ha;var
ua=ub.ia+this.getId()+ub.ja+this.Fg(ub.ka,ub.la)+this.Fg(ub.ma,ub.na)+this.Fg(ub.oa,ub.pa)+this.Fg(ub.qa,ub.ra)+ub.sa+this.ch()+ub.ta+wa+ub.ua+this._k()+this.cd()+this.wk()+this.Pb()+ub.va+X+xa+ub.wa;var
O=new
jsx3.gui.Heavyweight(i.fW,this);O.setHTML(ua);O.setScrolling(true);O.setClassName(ub.xa);O.addXRule(rb,ub.ya,ub.ya,0);O.addXRule(rb,ub.za,ub.za,0);O.addYRule(rb,ub.Aa,ub.Ba,0);O.addYRule(rb,ub.Ba,ub.Aa,0);O.show();var
G=O.getRendered();var
Jb=G.childNodes[0].childNodes[0];var
W=Math.max(Jb.offsetWidth-2,Jb.clientWidth)+ub.Ca;if(jsx3.CLASS_LOADER.IE)for(var
_a=0;_a<Jb.childNodes.length;_a++){var
t=Jb.childNodes[_a];if(t.nodeName&&t.nodeName.toLowerCase()==ub.Da&&t.getAttribute(ub.t))Jb.childNodes[_a].style.width=W;}if(Ga==0||b==null){this._jsxopening=true;jsx3.sleep(function(){if(this.getParent()==null)return;delete this[ub.Ea];var
Fa=this.getRecordNode(this.getValue());var
C=Fa?(this.getDocument()).getElementById(this.getId()+ub.Fa+this.getValue()):null;try{if(C)this.h6(C);else ba.focus(Jb);}catch(Kb){ab.info(ub.Ga+jsx3.NativeError.wrap(Kb));}},null,this);}else ba.focus(this.g4());Qa.subscribeLoseFocus(this,rb,ub.Ha);}};q.uu=function(d){var
D=d.event.srcElement();if(!this.containsHtmlElement(D)){this.hide(false);if(this._jsxo2||this._jsxsW&&this.getType()==1){var
lb=this.g4();if(lb)this.KW(d,lb);}}};q.Hj=function(f,c,l){var
sa=this.Wl(true,f);if(c){var
xb=sa.recalculate(f,c,l);if(!xb.w&&!xb.h)return;var
La=sa.lg(0);La.recalculate({parentwidth:sa.ee(),parentheight:sa.ld()},c?c.childNodes[0]:null,l);var
db=La.lg(0);if(this.getType()!=0){var
jb=db.lg(0);jb.recalculate({parentwidth:La.ee()-1,parentheight:La.ld()},c?ba.selectSingleElm(c,0,0,0):null,l);}else db.recalculate({parentwidth:La.ee(),parentheight:La.ld()},c?c.childNodes[0].childNodes[0]:null,l);}};q.zd=function(s){if(this.getParent()&&(s==null||isNaN(s.parentwidth)||isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};var
ib=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
da,P,A,Mb,Ba;s.tagname=ub.Ia;s.border=(da=this.getBorder())!=null&&da!=ub.q?da:ub.Ja;s.margin=ib&&(P=this.getMargin())!=null&&P!=ub.q?P:null;if(!s.boxtype)s.boxtype=ib?ub.Ka:ub.La;if(s.left==null)s.left=!ib&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(s.top==null)s.top=!ib&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(s.width==null)s.width=(Mb=this.getWidth())!=null?Mb:100;if(s.height==null)s.height=(Ba=this.getHeight())!=null?Ba:18;s.padding=ub.Ma;var
kb=new
jsx3.gui.Painted.Box(s);var
Hb={};Hb.tagname=ub.Da;Hb.boxtype=ub.Ka;if((A=this.getPadding())!=null&&A!=ub.q){Hb.padding=A;}else Hb.padding=ub.Na;Hb.parentwidth=kb.ee();Hb.parentheight=kb.ld();Hb.left=0;Hb.top=0;Hb.width=ub.Oa;Hb.height=ub.Oa;var
La=new
jsx3.gui.Painted.Box(Hb);kb.cl(La);if(this.getType()==0){Hb={};Hb.tagname=ub.Da;Hb.boxtype=ub.Ka;Hb.padding=ub.Pa;Hb.parentwidth=La.ee();Hb.parentheight=La.ld();Hb.width=ub.Oa;Hb.height=ub.Oa;var
L=new
jsx3.gui.Painted.Box(Hb);La.cl(L);}else{Hb={};Hb.tagname=ub.Da;Hb.boxtype=ub.Qa;var
L=new
jsx3.gui.Painted.Box(Hb);La.cl(L);Hb={};Hb.tagname=ub.Ra;Hb.boxtype=ub.Ka;Hb.parentwidth=La.ee()-1;Hb.parentheight=La.ld();Hb.width=ub.Oa;Hb.height=ub.Oa;Hb.padding=ub.Sa;Hb.empty=true;Hb.border=ub.Ta;var
Ia=new
jsx3.gui.Painted.Box(Hb);L.cl(Ia);}return kb;};q.paint=function(){this.applyDynamicProperties();if(this.getXmlAsync())var
Xa=this.getXML();var
_a=this.getId();var
ua=this.getEnabled()==1;var
pb={};if(ua){pb[ub.oa]=true;if(this.hasEvent(ub.Ua))pb[ub.Va]=true;if(this.getType()==1){pb[ub.ka]=ub.Wa;pb[ub.Xa]=true;}else pb[ub.ka]=ub.Ya;}var
ib=this.qj(pb,0);var
Ma=this.renderAttributes(null,true);var
X=this.Wl(true);X.setAttributes(ub.Za+_a+ub.ja+this.Ak()+ub._a+this.dd()+ub.ab+Ma+ib+this.Rl());X.setStyles(this.jc()+this.ch()+ub.bb+this.getIcon(i.ARROWICON)+ub.cb+this.Wi()+this.ad()+this.lc()+this.Bg()+this.mi(1));var
v=X.lg(0);v.setAttributes(ub.db+this.nk());v.setStyles(ub.q);if(this.getType()==0){var
wb=v.lg(0);wb.setAttributes(ub.eb+ba._d);wb.setStyles(this._k()+this.cd()+this.wk()+this.jc()+this.Pb());var
Wa=(X.paint()).join((v.paint()).join((wb.paint()).join(jsx3.util.strEscapeHTML(this.il()))));}else{var
wb=v.lg(0);wb.setAttributes(ub.fb);var
Z=wb.lg(0);Z.setAttributes(this.Rl()+this.paintMaxLength()+this.pc()+ub.gb+jsx3.util.strEscapeHTML(this.il())+ub.hb+this.Fg(ub.ib,ub.jb,3));Z.setStyles(this._k()+this.cd()+this.wk()+this.jc()+this.Pb()+this.ch());var
Wa=(X.paint()).join((v.paint()).join((wb.paint()).join((Z.paint()).join(ub.q))));}return Wa;};q.onXmlBinding=function(s){this.jsxsupermix(s);this.redrawRecord(this.getValue(),2);if(i.dY==this){this.hide();this.Fy(this.getValue());}};q.Fo=function(f,g){if(!f.leftButton())return;if((f.srcElement()).tagName.toLowerCase()!=ub.kb){if(i.dY==this){this.hide(true);}else this.Fy();}else this.h6();};q.Vl=function(r,n){ba.focus(this.g4(n));this.h6();};q.UC=function(s,d){s.cancelBubble();};q.j8=function(f,g){var
O=i.rH(f,g);if(O){if(f.isFakeOver(O))return;this.h6(O);}};i.rH=function(h,e){var
I=h.srcElement();while(I!=null&&I.getAttribute(ub.t)==null){I=I.parentNode;if(I==e||I==e.ownerDocument)I=null;}return I;};q.setText=function(m){this.Nq(m);return this;};q.Nq=function(c){var
ta=this.g4();if(ta)if(this.getType()==1)ta.value=c;else ta.innerHTML=jsx3.util.strEscapeHTML(c);};q.focus=function(){var
yb=this.getType()==1?this.g4():this.getRendered();if(yb)ba.focus(yb);return yb;};q.setValue=function(k){this.Vp(this.isOldEventProtocol(),k);return this;};q.Vp=function(o,k){if(k!=this.getValue()){var
K=true;if(o instanceof Qa)K=this.doEvent(ub.lb,{objEVENT:o,strRECORDID:k});if(K===false)return;this.jsxvalue=k;this.redrawRecord(k,2);if(o)this.doEvent(ub.mb,{objEVENT:o instanceof Qa?o:null,strRECORDID:k,_gipp:1});}};q.getIcon=function(n){return !jsx3.util.strEmpty(this.jsxicon)?(this.getServer()).resolveURI(this.jsxicon):n;};q.setIcon=function(j){this.jsxicon=j;};q.getValue=function(){return this.jsxvalue!=null?this.jsxvalue:null;};q.getText=function(){var
W=this.getType()==1;if(W){var
tb=this.g4();if(tb)return tb.value;}var
ha=this.getRecordNode(this.getValue());if(ha!=null){var
fa=this.Sf(ha,ub.D);return fa!=null?fa:this.Sf(ha,ub.E);}else return W||this.getValue()!=null?this.getValue():this.getDefaultText();};q.redrawRecord=function(b,m){if(this.getValue()==b){var
za=this.getRecordNode(b);if(za!=null){var
na=this.Sf(za,ub.D);this.Nq(na!=null?na:this.Sf(za,ub.E));}else this.Nq(this.getType()==0?this.getDefaultText():b!=null?b:ub.q);}return this;};i.getVersion=function(){return ub.nb;};q.containsHtmlElement=function(o){var
ja=jsx3.gui.Heavyweight.GO(i.fW);return this.jsxsuper(o)||ja!=null&&ja.containsHtmlElement(o);};q.getMaxLength=function(){return this.jsxmaxlength!=null?this.jsxmaxlength:null;};q.setMaxLength=function(f){f=parseInt(f);this.jsxmaxlength=f>0?f:null;return this;};q.paintMaxLength=function(h){return this.getMaxLength()!=null?ub.ob+this.getMaxLength()+ub.pb:ub.q;};q.dd=function(){var
ja=this.getClassName();return i.DEFAULTCLASSNAME+(ja?ub.qb+ja:ub.q);};q.updateGUI=function(h,k){if(h.search(ub.rb)==0)this.jsxsuper(h,k);if(h.search(ub.sb)==0){var
vb=this.g4();if(vb)try{vb.style[h]=k;}catch(Kb){}}};q.emInit=function(m){this.jsxsupermix(m);this.subscribe(ub.mb,this,ub.tb);};q.emCollapseEdit=function(o){this.hide(false);};q.C0=function(l){this.commitEditMask(l.context.objEVENT,true);};});jsx3.Select=jsx3.gui.Select;jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Heavyweight","jsx3.gui.Block","jsx3.gui.ToolbarButton","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Menu",jsx3.gui.Block,[jsx3.xml.Cacheable,jsx3.xml.CDF,jsx3.gui.Form],function(o,r){var
ub={A:"']",Aa:"|",B:"id",Ba:"//record[@jsxkeycode]",C:"selected",Ca:"keycode",D:"jsxselected",Da:"record",E:"jsxindex",Ea:"mouseout",F:"url(",Fa:"blur",G:")",Ga:"Uc",H:"jsxid",Ha:"focus",I:"jsxtype",Ia:"Ri",J:"Book",Ja:"1 4 1 0",K:"focusPrevious",Ka:"span",L:"focusNext",La:"relativebox",M:"none",Ma:"box",N:"jsxspy",Na:"0 0 0 4",O:"jsxhide",Oa:"0px;0px;0px;solid 1px ",P:"jsxmenu",Pa:"5 4 5 0",Q:"Menu.showTopMenu",Qa:");",R:"jsx30menu_",Ra:"id='",S:"_list",Sa:"' ",T:'<div tabindex="0" jsxindex="',Ta:" class='jsx30toolbarbutton'",U:'"',Ua:"class='jsx30toolbarbutton_img'",V:"mouseover",Va:"class='jsx30toolbarbutton_lbl'",W:"j8",Wa:"&#160;",X:"keydown",Xa:"class='jsx30toolbarbutton_mnu'",Y:"gu",Ya:"overflow:hidden;",Z:"click",Za:"background-color:",_:"hO",_a:";",a:"background-image:url(",aa:"mousedown",ab:"class='jsx30toolbarbutton_cap'",b:"jsx:///images/menu/bg.gif",ba:"UC",bb:"execute",c:");background-repeat:repeat-y;",ca:"mouseup",cb:"jsxexecute",d:"#ffffff",da:"yz",db:"#808080",e:"jsx:///xsl/jsxmenu.xsl",ea:' class="',eb:"3.0.00",f:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"attrselected\">jsxselected</xsl:param><xsl:param name=\"attrdisabled\">jsxdisabled</xsl:param><xsl:param name=\"attrdivider\">jsxdivider</xsl:param><xsl:param name=\"attrkeycode\">jsxkeycode</xsl:param><xsl:param name=\"attrlazy\">jsxlazy</xsl:param><xsl:param name=\"jsxtabindex\">0</xsl:param><xsl:param name=\"jsxleftbuffer\">36</xsl:param><xsl:param name=\"jsxselectedimage\"/><xsl:param name=\"jsxselectedimagealt\"/><xsl:param name=\"jsxtransparentimage\"/><xsl:param name=\"jsxsubmenuimage\"/><xsl:param name=\"jsxdragtype\">JSX_GENERIC</xsl:param><xsl:param name=\"jsxrootid\">jsxroot</xsl:param><xsl:param name=\"jsxid\">jsxroot</xsl:param><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:param name=\"jsxdisableescape\">no</xsl:param><xsl:param name=\"jsxmode\">0</xsl:param><xsl:param name=\"jsxkeycodes\"/><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><xsl:value-of select=\"$jsxasyncmessage\"/></xsl:when><xsl:otherwise><xsl:apply-templates select=\"//*[@*[name() = $attrid]=$jsxrootid]\"/></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"*\"><xsl:param name=\"mystyle\" select=\"@*[name() = $attrstyle]\"/><xsl:param name=\"myclass\" select=\"@*[name() = $attrclass]\"/><xsl:variable name=\"jsxleftbuffer_sel\"><xsl:text>left:</xsl:text><xsl:choose><xsl:when test=\"$jsxleftbuffer &gt; 12\"><xsl:value-of select=\"$jsxleftbuffer - 11\"/></xsl:when><xsl:otherwise><xsl:text>-9</xsl:text></xsl:otherwise></xsl:choose><xsl:text>px</xsl:text></xsl:variable><xsl:variable name=\"jsxleftbuffer_txt\"><xsl:text>padding-left:</xsl:text><xsl:value-of select=\"$jsxleftbuffer\"/><xsl:text>px</xsl:text></xsl:variable><xsl:for-each select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"@*[name() = $attrdivider][.='1']\"><div class=\"jsx30menu_{$jsxmode}_div\" jsxdisabled=\"1\" jsxtype=\"Divider\"><div>&#160;</div></div></xsl:when></xsl:choose><div id=\"{$jsxid}_{@*[name() = $attrid]}\" jsxid=\"{@*[name() = $attrid]}\" tabindex=\"{$jsxtabindex}\"><xsl:choose><xsl:when test=\"@*[name() = $attrdisabled]='1' or (*[$attrchildren='*' or name()=$attrchildren] and not(*[$attrchildren='*' or name()=$attrchildren][not(@*[name() = $attrdisabled]='1')]))\"><xsl:attribute name=\"class\">jsx30menu_<xsl:value-of select=\"$jsxmode\"/>_itemdis</xsl:attribute></xsl:when><xsl:otherwise><xsl:attribute name=\"class\">jsx30menu_<xsl:value-of select=\"$jsxmode\"/>_item</xsl:attribute></xsl:otherwise></xsl:choose><xsl:choose><xsl:when test=\"@*[name() = $attrtip]\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:when></xsl:choose><xsl:if test=\"@*[name() = $attrdisabled]='1'\"><xsl:attribute name=\"jsxdisabled\">1</xsl:attribute></xsl:if><xsl:attribute name=\"jsxtype\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] or (@*[name() = $attrlazy] &gt; 0)\">Book</xsl:when><xsl:otherwise>Leaf</xsl:otherwise></xsl:choose></xsl:attribute><xsl:choose><xsl:when test=\"@*[name() = $attrimg]\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" src=\"{$src1}\" style=\"position:absolute;left:2px;top:2px;width:16px;height:16px;\"/></xsl:when></xsl:choose><xsl:choose><xsl:when test=\"@*[name() = $attrselected] = 1\"><img alt=\"{$jsxselectedimagealt}\" class=\"jsx30menu_{$jsxmode}_sel\" src=\"{$jsxselectedimage}\" style=\"{$jsxleftbuffer_sel}\"/></xsl:when></xsl:choose><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] or (@*[name() = $attrlazy] &gt; 0)\"><div class=\"jsx30menu_{$jsxmode}_kc {$myclass}\" style=\"{$mystyle};{$jsxleftbuffer_txt}\"><table class=\"jsx30menu_{$jsxmode}_kct\"><tr><td class=\"name\"><xsl:apply-templates mode=\"jsxtext\" select=\".\"/></td><td class=\"keycode\" style=\"background-image:url({$jsxsubmenuimage});background-position:right 2px;background-repeat:no-repeat;\">&#160;</td></tr></table></div></xsl:when><xsl:otherwise><div class=\"jsx30menu_{$jsxmode}_kc {$myclass}\" style=\"{$mystyle};{$jsxleftbuffer_txt}\"><table class=\"jsx30menu_{$jsxmode}_kct\"><tr><td class=\"name\"><xsl:apply-templates mode=\"jsxtext\" select=\".\"/></td><xsl:if test=\"@*[name() = $attrkeycode]\"><td class=\"keycode\"><xsl:apply-templates mode=\"keycode\" select=\".\"/></td></xsl:if></tr></table></div></xsl:otherwise></xsl:choose></div></xsl:for-each></xsl:template><xsl:template match=\"*\" mode=\"keycode\"><xsl:variable name=\"after\" select=\"substring-after($jsxkeycodes, concat(@*[name() = $attrid],':'))\"/><xsl:choose><xsl:when test=\"$after\"><xsl:value-of select=\"substring-before($after, '|')\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrkeycode]\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"*\" mode=\"jsxtext\"><xsl:choose><xsl:when test=\"$jsxdisableescape='yes'\"><xsl:apply-templates mode=\"disable-output-escp\" select=\"@*[name() = $attrtext]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrtext]\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"disable-output-escp\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\".\"/></xsl:call-template></xsl:template><xsl:template name=\"disable-output-escp\"><xsl:param name=\"value\" select=\".\"/><xsl:choose><xsl:when test=\"function-available('msxsl:node-set')\"><xsl:value-of disable-output-escaping=\"yes\" select=\"$value\"/></xsl:when><xsl:otherwise><span class=\"disable-output-escp\"><xsl:value-of select=\"$value\"/></span></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",fa:'" style="',fb:"td",g:"JSX_MENU_XSL",ga:'">',gb:"jsx3.gui.Matrix",h:"<div tabIndex='0' class='jsx30menu_0_list' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble(); e.cancelReturn();'>- no data -</div>",ha:"</div>",hb:"pt",i:'<div tabIndex="0" class="jsx30menu_{0}_item" onmousedown="var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble(); e.cancelReturn();"><div class="jsx30menu_{0}_kc"><table class="jsx30menu_{0}_kct"><tr><td class="name">{1}</td><td class="keycode"></td></tr></table></div></div>',ia:"jsx30shadow",ib:"border",j:"jsx:///images/menu/submenuarrow.gif",ja:"E",jb:"padding",k:"jsx:///images/menu/selectover.gif",ka:"W",l:"jsx:///images/menu/selected.gif",la:"N",m:"jsx:///images/menu/down_menu.gif",ma:"S",n:"jsx:///images/menu/off_menu.gif",na:"Y",o:"jsx:///images/menu/on_menu.gif",oa:"div",p:"jsx:///images/menu/over_menu.gif",pa:"px",q:"jsx:///images/tbb/down.gif",qa:"Divider",r:"jsx:///images/tbb/on.gif",ra:"key",s:"#9B9BB7",sa:"Ru",t:"jsx30curvisiblemenu_",ta:"x",u:"",ua:"sel",v:"jsxdisabled",va:"JSX_GENERIC",w:"1",wa:"jsxabspath",x:"disabled",xa:"jsxhomepath",y:"groupname",ya:"noData",z:"//record[@jsxgroupname='",za:":"};var
fb=jsx3.util.Logger.getLogger(o.jsxclass.getName());var
C=jsx3.gui.Event;var
wb=jsx3.gui.Interactive;var
Ya=jsx3.html;o.DEFAULTBACKGROUND=ub.a+jsx3.resolveURI(ub.b)+ub.c;o.DEFAULTBACKGROUNDCOLOR=ub.d;o.DEFAULTXSLURL=jsx3.resolveURI(ub.e);o.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.f);o.DEFAULTXSLCACHEID=ub.g;o.DEFAULTCONTEXTLEFTOFFSET=10;o.NODATAMESSAGE=ub.h;o.B7=new
jsx3.util.MessageFormat(ub.i);o.zq=0;o.W4=1;o.bz=12;o.H4=jsx3.resolveURI(ub.j);o.e1=jsx3.resolveURI(ub.k);o.L4=jsx3.resolveURI(ub.l);o.Sz=jsx3.resolveURI(ub.m);o.TT=jsx3.resolveURI(ub.n);o.Iv=jsx3.resolveURI(ub.o);o.WF=jsx3.resolveURI(ub.p);o.CZ=jsx3.resolveURI(ub.q);o.SD=jsx3.resolveURI(ub.r);if(jsx3.CLASS_LOADER.IE6)Ya.loadImages(ub.b,o.Sz,o.TT,o.Iv,o.WF,o.L4,o.e1,o.H4,o.CZ,o.SD);o.F9=ub.s;o.A1=null;o.L9=[];o.DU=[];o.ZA=null;o.p0=null;o.mA=null;o.rU=250;o.xq=150;o.Wp=ub.t;o.mT=1000;r.init=function(n,i){this.jsxsuper(n);if(i!=null)this.setText(i);};r.getImage=function(){return this.jsximage!=null&&jsx3.util.strTrim(this.jsximage)!=ub.u?this.jsximage:null;};r.setImage=function(j){this.jsximage=j;return this;};r.getXSL=function(){return this.nd(o.DEFAULTXSLURL,o.Ip);};r.disableItem=function(j){return this.enableItem(j,false);};r.enableItem=function(h,a){if(a||a==null)this.deleteRecordProperty(h,ub.v,false);else this.insertRecordProperty(h,ub.v,ub.w,false);return this;};r.isItemEnabled=function(j){var
Fb=this.getRecordNode(j);return Fb&&this.Sf(Fb,ub.x)!=ub.w;};r.selectItem=function(i,c){if(c||c==null){var
za=this.getRecordNode(i);if(za!=null){var
ma=this.Sf(za,ub.y);if(ma)for(var
Ib=(this.getXML()).selectNodeIterator(ub.z+ma+ub.A);Ib.hasNext();){var
L=Ib.next();if(this.Sf(L,ub.B)!=i)this.Sf(L,ub.C,null);}}this.insertRecordProperty(i,ub.D,1,false);}else this.deleteRecordProperty(i,ub.D,false);return this;};r.deselectItem=function(l){return this.selectItem(l,false);};r.isItemSelected=function(f){var
gb=this.getRecordNode(f);return gb!=null&&this.Sf(gb,ub.C)==ub.w;};r.h6=function(a,c,g){if(g==null)g=parseInt(c.parentNode.parentNode.getAttribute(ub.E));var
J=o.DU[g];if(J&&J!=c){try{J.style.backgroundImage=ub.F+jsx3.gui.Block.SPACE+ub.G;}catch(Kb){}o.DU[g]=null;}var
R=false;if(c.getAttribute(ub.v)!=ub.w){var
B=c.getAttribute(ub.H);R=this.KS(B);c.style.backgroundImage=ub.F+o.e1+ub.G;o.DU[g]=c;Ya.focus(c);var
Ia=o.L9[g-1];if(Ia)Ia.scrollTo(c);}else Ya.focus(c.parentNode.parentNode);this.xQ(R?g+1:g);};r.xQ=function(q,a){if(o.L9.length>q&&(o.mM==null||o.mM>q)){if(o.mA)window.clearTimeout(o.mA);this.HR(q,null);o.mM=q;var
A=this;o.mA=window.setTimeout(function(){if(A.getParent()==null)return;o.mA=null;o.mM=null;A.ED(q+1,true);},a?0:o.xq);}};r.KS=function(m){if(this._jsxP4)return jsx3.util.arrIndexOf(this._jsxP4,m)>=0;return false;};r.HR=function(q,g){if(q<1)return;if(this._jsxP4==null)this._jsxP4=[];if(g==null){this._jsxP4.splice(q-1,this._jsxP4.length);}else this._jsxP4.splice(q-1,this._jsxP4.length,g);};r._ebKeyDown=function(j,c){if(this.jsxsupermix(j,c))return;var
yb=j.keyCode();if((yb==40||yb==13||yb==32)&&!j.hasModifier()){this.showMenu(j,c,1);j.cancelAll();}else if(yb==39){this.YW(true);}else if(yb==37)this.YW(false);};r.Fo=function(d,i){if(!d.leftButton())return;this.aG(d,i);i.childNodes[2].style.backgroundImage=ub.F+o.Sz+ub.G;if(this.getState()==o.W4){if(!this._jsxX1)this.ED();}else this.showMenu(d,i,1);};r.Ri=function(h,e){if(h.isFakeOver(e))return;if(o.p0)window.clearTimeout(o.p0);this.ju(h,e);if(this.getState()==o.zq)e.childNodes[2].style.backgroundImage=ub.F+o.WF+ub.G;if(o.A1!=null&&this!=o.A1&&o.A1.getParent()==this.getParent()||jsx3.EventHelp.FLAG==1&&this.getCanDrop()==1)this.showMenu(h,e,1);};r.Uc=function(q,m){if(q.isFakeOut(m))return;if(o.p0)window.clearTimeout(o.p0);if(this.getState()==o.zq||m!=this._jsxB9[0]){this.YA(q,m);m.childNodes[2].style.backgroundImage=ub.F+o.TT+ub.G;}};r.gu=function(e,h){if(e.hasModifier(true))return;var
_=o.rH(e,h);var
N=parseInt(h.getAttribute(ub.E));var
Cb=_?_.getAttribute(ub.H):null;var
Ua=_&&_.getAttribute(ub.v)==ub.w;var
Ja=e.keyCode();if((Ja==32||Ja==13)&&!Ua){this.e0(e,Cb);this.ED();}else if(Ja==39){if(_&&_.getAttribute(ub.I)==ub.J&&!Ua){this.showMenu(e,_,N+1,Cb);}else this.YW(true);}else if(Ja==37){if(N>1)this.ED(N);else this.YW(false);}else if(Ja==27){this.ED();}else if(Ja==40){if(!_)_=h.lastChild;for(var
U=_;true;){if(U==U.parentNode.lastChild){U=U.parentNode.firstChild;}else U=U.nextSibling;if(U==_)break;if(U.getAttribute(ub.v)!=ub.w){this.h6(e,U,N);break;}}}else if(Ja==38){if(!_)_=h.firstChild;for(var
U=_;true;){if(U==U.parentNode.firstChild){U=U.parentNode.lastChild;}else U=U.previousSibling;if(U==_)break;if(U.getAttribute(ub.v)!=ub.w){this.h6(e,U,N);break;}}}else if(Ja==9){Ya[e.shiftKey()?ub.K:ub.L](this.getRendered(e),e);return;}else return;e.cancelAll();};r.YW=function(p){var
w=(this.getParent()).getChildren();var
V=this.getChildIndex();var
Va=p?1:-1;for(var
Aa=V;true;){Aa=jsx3.util.numMod(Aa+Va,w.length);if(Aa==V)break;var
tb=w[Aa];if(tb instanceof o&&tb.getDisplay()!=ub.M){try{tb.focus();}catch(Kb){}break;}}};r.UC=function(q,c){if(!q.leftButton()){q.cancelBubble();return;}var
Q=parseInt(c.getAttribute(ub.E));var
t=o.rH(q,c);if(t&&t.getAttribute(ub.I)==ub.J)this.showMenu(q,t,Q+1,t.getAttribute(ub.H));q.cancelBubble();};r.yz=function(k,b){if(!k.leftButton())k.cancelBubble();};r.j8=function(p,n){var
Hb=o.rH(p,n);if(Hb&&p.isFakeOver(Hb))return;if(o.p0)window.clearTimeout(o.p0);o.PY();var
D=parseInt(n.getAttribute(ub.E));if(Hb){var
Pa=Hb.getAttribute(ub.I);var
lb=Hb.getAttribute(ub.v)==ub.w;var
aa=Hb.getAttribute(ub.H);this.h6(p,Hb,D);if(Pa==ub.J)if(!this.KS(aa)){var
na=this;p.yh();o.p0=window.setTimeout(function(){if(na.getParent()==null)return;o.p0=null;na.showMenu(p,Hb,D+1,aa);},o.rU);}if(aa!=null)this.C1(p,aa,Pa==ub.J);}};r.C1=function(b,e,i){if(this.hasEvent(ub.N)){b.yh();var
Ua=this;o.fP=window.setTimeout(function(){if(Ua.getParent()==null)return;o.fP=null;var
Ka=Ua.doEvent(ub.N,{objEVENT:b,strRECORDID:e});if(Ka){jsx3.gui.Interactive.hideSpy();Ua.showSpy(Ka,b);}},i?o.mT:jsx3.EventHelp.mT);}};o.PY=function(){if(o.fP){window.clearTimeout(o.fP);o.fP=null;}jsx3.gui.Interactive.hideSpy();};o.rH=function(m,s){var
P=m.srcElement();while(P!=null&&P.getAttribute(ub.I)==null){P=P.parentNode;if(P==s||P==s.ownerDocument)P=null;}return P;};r.hO=function(k,b){if(!k.leftButton()){k.cancelBubble();return;}var
ib=o.rH(k,b);if(ib){var
Jb=ib.getAttribute(ub.I);var
w=ib.getAttribute(ub.v);if(Jb!=ub.J&&!w){this.e0(k,ib.getAttribute(ub.H));this.ED();}}};r.Ru=function(m){this.ED(1,true);};r.ED=function(s,f){if(this!=o.A1)return;if(s==null)s=1;if(s==1)C.unsubscribeLoseFocus(this,this);if(o.mA)window.clearTimeout(o.mA);o.PY();this.HR(s-1,null);for(var
ya=o.L9.length-1;ya>=s-1;ya--){var
Ca=o.L9[ya];if(Ca)Ca.destroy();}o.L9.splice(s-1,o.L9.length);o.DU.splice(s,o.DU.length);if(s==1){this.EK(o.zq);this.doEvent(ub.O);o.A1=null;o.TI=false;}if(!f)try{if(this._jsxB9[s-1])this._jsxB9[s-1].focus();else if(s==1)this.focus();}catch(Kb){}this._jsxB9.splice(s-1,this._jsxB9.length);};r.showContextMenu=function(h,m,c,q){o.TI=true;this._jsxZ3=m;this._jsxiO=c;this.showMenu(h,null,1,null,q);};r.getContextParent=function(){return this._jsxZ3;};r.getContextRecordId=function(){return this._jsxiO;};r.showMenu=function(q,a,f,c,e){var
Qa=this.doEvent(ub.P,{objEVENT:q,objANCHOR:a,intINDEX:f,strPARENTID:c,_gipp:1});if(Qa===false)return;if(a==null&&c!=null)a=this.getRendered(q);if(f==1){if(o.A1)o.A1.ED(1,true);o.A1=this;this._jsxX1=true;}q.yh();jsx3.sleep(function(){this.h8(q,a,f,c,e);},ub.Q,this,true);if(this._jsxB9==null)this._jsxB9=[];};r.h8=function(d,l,n,j,m){if(n>1&&!o.L9[n-2])return;this._jsxB9[n-1]=l;this.HR(n,j);var
Oa=o.Wp+n;var
Ab=this.aY(j,n);var
ob=ub.R+o.n8()+ub.S;var
Xa=ub.T+n+ub.U+this.Fg(ub.V,ub.W)+this.Fg(ub.X,ub.Y)+this.Fg(ub.Z,ub._)+this.Fg(ub.aa,ub.ba)+this.Fg(ub.ca,ub.da)+ub.ea+ob+ub.fa+this.ch()+this.ke()+ub.ga+Ab+ub.ha;var
ra=o.L9[n-1];if(ra)ra.destroy();var
Ta=o.L9[n-1]=new
jsx3.gui.Heavyweight(Oa,this);Ta.setHTML(Xa);Ta.setScrolling(true);Ta.setClassName(ub.ia);if(l&&j!=null){Ta.addXRule(l,ub.ja,ub.ka,-4);Ta.addXRule(l,ub.ka,ub.ja,8);Ta.addYRule(l,ub.la,ub.la,0);Ta.addYRule(l,ub.la,ub.ma,24);Ta.addRule(null,ub.la,0,ub.na);}else if(l){Ta.addXRule(l,ub.ka,ub.ka,0);Ta.addXRule(l,ub.ja,ub.ja,0);Ta.addYRule(l,ub.ma,ub.la,0);Ta.addYRule(l,ub.la,ub.ma,0);}else{Ta.addXRule(m?m.L:d,null,ub.ka,o.DEFAULTCONTEXTLEFTOFFSET);Ta.addXRule(m?m.L:d,null,ub.ja,-o.DEFAULTCONTEXTLEFTOFFSET);Ta.addYRule(m?m.T:d,null,ub.la,o.bz);Ta.addYRule(m?m.T:d,null,ub.ma,-o.bz);Ta.addRule(null,ub.la,0,ub.na);}if(n==1&&!o.TI)this.EK(o.W4,l);Ta.show();var
pa=Ta.getRendered(l);var
Za=pa.childNodes[0].childNodes[0];if(jsx3.CLASS_LOADER.IE){var
x=Math.max(Za.offsetWidth-2,Za.clientWidth);for(var
Jb=0;Jb<Za.childNodes.length;Jb++){var
sa=Za.childNodes[Jb];if(sa.nodeName&&sa.nodeName.toLowerCase()==ub.oa)if(sa.getAttribute(ub.H))Za.childNodes[Jb].style.width=x+ub.pa;else if(sa.getAttribute(ub.I)==ub.qa&&sa.offsetWidth<30)Za.childNodes[Jb].style.width=Math.max(0,x-(sa.offsetWidth-1))+ub.pa;}}if(n>1&&(d.getType()).indexOf(ub.ra)==0){this.h6(d,Za.childNodes[0],n);}else Ya.focus(Za);if(n==1){C.subscribeLoseFocus(this,this,ub.sa);jsx3.sleep(function(){this._jsxX1=false;},null,this);}};r.repaint=function(){this.ED();return this.jsxsuper();};o.n8=function(){var
Ma=Ya.getMode();if(Ma==2&&jsx3.CLASS_LOADER.getVersion()>=7)Ma=Ma+ub.ta;return Ma;};r.aY=function(m,e){var
ra={jsxtabindex:this.getIndex()?this.getIndex():0,jsxselectedimage:o.L4,jsxselectedimagealt:this.Nk(ub.ua,o),jsxtransparentimage:jsx3.gui.Block.SPACE,jsxdragtype:ub.va,jsxid:this.getId(),jsxsubmenuimage:o.H4,jsxmode:o.n8(),jsxpath:jsx3.getEnv(ub.wa),jsxpathapps:jsx3.getEnv(ub.xa),jsxpathprefix:(this.getUriResolver()).getUriPrefix(),jsxappprefix:(this.getServer()).getUriPrefix(),jsxkeycodes:this.oA(m)};if(m!=null)ra.jsxrootid=m;var
ea=this.getXSLParams();for(var Ba in ea)ra[Ba]=ea[Ba];var
Sa=this.doTransform(ra);if(!jsx3.xml.Template.supports(1))Sa=Ya.removeOutputEscapingSpan(Sa);Sa=this.vo(Sa);if(jsx3.util.strTrim(Sa)==ub.u)Sa=o.B7.format((o.n8()).toString(),this.Nk(ub.ya,o));return Sa;};r.oA=function(m){if(this._jsxVY==null)return ub.u;var
M=[];for(var ga in this._jsxVY)M[M.length]=ga+ub.za+this._jsxVY[ga].getFormatted();M[M.length]=ub.u;return M.join(ub.Aa);};r.clearCachedContent=function(){};r.getState=function(){return this._jsxBA!=null?this._jsxBA:o.zq;};r.EK=function(a,b){if(b==null)b=this.getRendered(b);if(b!=null)if(a==o.W4){if(o.ZA==this)return this;if(o.ZA!=null)o.ZA.EK(o.zq);b.style.backgroundImage=ub.F+o.SD+ub.G;b.childNodes[3].style.backgroundColor=o.F9;b.childNodes[2].style.backgroundImage=ub.F+o.Iv+ub.G;o.ZA=this;}else{b.style.backgroundImage=ub.u;b.childNodes[3].style.backgroundColor=ub.u;b.childNodes[2].style.backgroundImage=ub.F+o.TT+ub.G;if(o.ZA==this)o.ZA=null;}this._jsxBA=a;return this;};r.nH=function(){if(this._jsxVY!=null)for(var Ib in this._jsxVY)this._jsxVY[Ib].destroy();this._jsxVY={};var
sa=this.getId();var
ga=this.getXML();if(ga!=null)for(var
K=ga.selectNodeIterator(ub.Ba);K.hasNext();){var
Ab=K.next();var
B=(this.Sf(Ab,ub.Ca)).toLowerCase();var
ea=this.Sf(Ab,ub.B);var
ha=jsx3.makeCallback(function(sa,d){this.zs(d,sa);},this,ea);var
O=this.doKeyBinding(ha,B);if(O)this._jsxVY[ea]=O;}};r.zs=function(p,h){var
_a=this.getRecordNode(h);if(_a==null)return;var
V=_a.getParent();var
mb=V!=null&&V.getNodeName()==ub.Da?V.getAttribute(ub.H):null;var
sa=this.doEvent(ub.P,{objEVENT:p,objANCHOR:null,intINDEX:null,strPARENTID:mb});if(sa===false)return;if(this.isItemEnabled(h))this.e0(p,h);};o.yg={};o.yg[ub.X]=true;o.yg[ub.aa]=true;o.yg[ub.Ea]=true;o.yg[ub.V]=true;o.yg[ub.Fa]=ub.Ga;o.yg[ub.Ha]=ub.Ia;r.Hj=function(f,c,s){this.sk(f,c,s,3);};r.zd=function(){this.applyDynamicProperties();var
ab=this.getRelativePosition()!=0;var
gb={height:22};if(ab){var
Y=this.getMargin();gb.margin=Y!=null&&Y!=ub.u?Y:ub.Ja;gb.tagname=ub.Ka;gb.boxtype=ub.La;}else{var
ea=this.getLeft();var
V=this.getTop();gb.left=ea!=null&&ea!=ub.u?ea:0;gb.top=V!=null&&V!=ub.u?V:0;gb.tagname=ub.oa;gb.boxtype=ub.Ma;}if(this.getDivider()==1){gb.padding=ub.Na;gb.border=ub.Oa+o.F9;}var
Xa=new
jsx3.gui.Painted.Box(gb);gb={height:22,tagname:ub.Ka,boxtype:ub.La};gb.width=this.getImage()!=null&&this.getImage()!=ub.u?22:3;var
ia=new
jsx3.gui.Painted.Box(gb);Xa.cl(ia);gb={height:22,tagname:ub.Ka,boxtype:ub.La};if(jsx3.util.strEmpty(this.getText())){gb.width=1;}else gb.padding=ub.Pa;var
A=new
jsx3.gui.Painted.Box(gb);Xa.cl(A);var
Ta=new
jsx3.gui.Painted.Box({width:11,height:22,tagname:ub.Ka,boxtype:ub.La});Xa.cl(Ta);var
_=new
jsx3.gui.Painted.Box({width:1,height:22,tagname:ub.Ka,boxtype:ub.La});Xa.cl(_);return Xa;};r.paint=function(){this.applyDynamicProperties();if(this.getXmlAsync())var
O=this.getXML();this.nH();var
Jb=this;var
Pa=this.getState()==o.W4?ub.a+o.SD+ub.Qa:ub.u;var
Db=this.ad();var
ha=this.lc();var
ea=null,W=null,ab=null;if(this.getEnabled()==1){ea=this.qj(o.yg,0);ab=ub.u;}else{ea=ub.u;ab=Ya.getCSSOpacity(0.4);}if(this.getImage()!=null)W=(this.getUriResolver()).resolveURI(this.getImage());var
J=this.renderAttributes(null,true);var
wa=this.Wl(true);wa.setAttributes(ub.Ra+this.getId()+ub.Sa+this.Rl()+this.nk()+this.Ak()+ea+ub.Ta+J);wa.setStyles(this.mi(true)+Pa+Db+ha+ab+this.Wi()+this.Bg());var
Lb=wa.lg(0);Lb.setStyles(W!=null?ub.a+W+ub.Qa:ub.u);Lb.setAttributes(ub.Ua+Ya._d);var
ga=wa.lg(1);ga.setAttributes(ub.Va+Ya._d);var
ta=this.getText();if(ta!=null&&ta!=ub.u){ga.setStyles(this.jc()+this._k()+this.cd()+this.wk());}else{ta=ub.Wa;ga.setStyles(Ya.co);}var
Xa=wa.lg(2);Xa.setStyles(ub.a+(this.getState()==o.W4?o.Iv:o.TT)+ub.Qa);Xa.setAttributes(ub.Xa);var
ja=wa.lg(3);ja.setStyles(ub.Ya+(this.getState()==o.W4?ub.Za+o.F9+ub._a:ub.u));ja.setAttributes(ub.ab);return (wa.paint()).join((Lb.paint()).join(ub.Wa)+(ga.paint()).join(ta)+(Xa.paint()).join(ub.Wa)+(ja.paint()).join(ub.Wa));};r.onXmlBinding=function(n){this.jsxsupermix(n);this.nH();};r.ch=function(){return ub.Za+(this.getBackgroundColor()?this.getBackgroundColor():o.DEFAULTBACKGROUNDCOLOR)+ub._a;};r.ke=function(){return this.getBackground()?this.getBackground()+ub._a:o.DEFAULTBACKGROUND;};r.executeRecord=function(c){this.e0(this.isOldEventProtocol(),c);return this;};r.e0=function(e,b){var
sa=null;if((sa=this.getRecordNode(b))!=null){this._jsxvalue=b;var
B=this.Sf(sa,ub.bb);var
v=true;var
ca={strRECORDID:b,objRECORD:sa,_gipp:1};if(e instanceof jsx3.gui.Event)ca.objEVENT=e;v=jsx3.util.strEmpty(B)?true:this.eval(B,this._getEvtContext(ca));if(v!==false&&e)this.doEvent(ub.cb,ca);}};r.redrawRecord=function(){if(this==o.A1)this.ED();return this;};r.getValue=function(){return this._jsxvalue;};r.doValidate=function(){return (this.setValidationState(1)).getValidationState();};r.beep=function(){var
G=this.getRendered();jsx3.gui.no(G.childNodes[2],{backgroundImage:ub.F+o.Sz+ub.G});jsx3.gui.no(G,{backgroundImage:ub.F+o.CZ+ub.G});jsx3.gui.no(G.childNodes[3],{backgroundColor:ub.db});return this;};o.getVersion=function(){return ub.eb;};r.emGetSession=function(d){if(!d){return jsx3.gui.Matrix.EditMask.prototype.emGetSession.call(this);}else{var
ta=d.srcElement();while(ta&&ta.tagName.toLowerCase()!=ub.fb)ta=ta.parentNode;var
Ra=ta.parentNode.getAttribute(ub.H);var
U=this.getAncestorOfType(ub.gb);var
y=(U.sm())[ta.cellIndex];var
qb=y.getValueForRecord(Ra);return {matrix:U,column:y,recordId:Ra,td:ta,value:qb};}};r.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};r.emInit=function(m){this.jsxsupermix(m);this.subscribe(ub.cb,this,ub.hb);};r.emSetValue=function(p){};r.emGetValue=function(){return null;};r.emBeginEdit=function(q,f,i,c,h,a,d){var
Fa=d.childNodes[0].childNodes[0];if(Fa){this.jsxsupermix(q,f,i,c,h,a,d);Ya.focus(Fa);}else return false;};r.emPaintTemplate=function(){this.setEnabled(0);var
nb=this.paint();this.setEnabled(1);var
X=this.paint();return this.emGetTemplate(X,nb);};r.pt=function(p){var
ea=this.emGetSession();if(ea){Ya.focus(ea.td);this.ED(1,true);}};r.containsHtmlElement=function(d){var
sa=this.jsxsuper(d);if(!sa&&this==o.A1)for(var
nb=0;nb<o.L9.length&&!sa;nb++){var
R=o.L9[nb];if(R)sa=R.containsHtmlElement(d);}return sa;};r.getDivider=function(){return this.jsxdivider!=null?this.jsxdivider:0;};r.setDivider=function(e,j){this.jsxdivider=e;if(j)this.recalcBox([ub.ib,ub.jb]);else this.Qf();return this;};r.emCollapseEdit=function(s){this.ED(1,true);};});jsx3.gui.Menu.prototype.aG=jsx3.gui.ToolbarButton.prototype.Fo;jsx3.gui.Menu.prototype.ju=jsx3.gui.ToolbarButton.prototype.Ri;jsx3.gui.Menu.prototype.YA=jsx3.gui.ToolbarButton.prototype.Uc;jsx3.Menu=jsx3.gui.Menu;jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Matrix.Column",jsx3.gui.Block,null,function(o,c){var
ub={A:"There is a signature/type error when evaluating the format handler: ",B:"Error evaluating the format handler string: ",C:"100%",D:"inline",E:"td",F:"div",G:'id="',H:'"',I:"mousedown",J:"xm",K:"click",L:"Nh",M:'class="jsx30matrixcolumn_value"',N:"background-image:url(",O:"ascending",P:");",Q:"url(",R:")",S:'<colgroup style="',T:'"></colgroup>',U:"background-color:",V:";",W:"{$jsx_rowbg}",X:"color:",Y:"cursor:",Z:"font-family:",_:"font-size:",a:"text",aa:"px;",b:"number",ba:"font-weight:",c:"top",ca:"white-space:nowrap;overflow:hidden;",d:"default",da:"text-align:",e:'<xsl:template xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n  <xsl:param name="jsx_row_number"/>\n  <xsl:if test="@*[name() = $attrcellstyle]">\n    <xsl:attribute name="style"><xsl:value-of select="@*[name() = $attrcellstyle]"/></xsl:attribute>\n  </xsl:if>\n  <xsl:value-of select="{0}"/>&#160;\n</xsl:template>',ea:"left",f:"empty",fa:"vertical-align:",g:'<xsl:template xmlns:xsl="http://www.w3.org/1999/XSL/Transform"></xsl:template>',ga:"jsxautorow",h:"unescape",i:'<xsl:template xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n  <xsl:param name="jsx_row_number"/>\n  <xsl:if test="@*[name() = $attrcellstyle]">\n    <xsl:attribute name="style"><xsl:value-of select="@*[name() = $attrcellstyle]"/></xsl:attribute>\n  </xsl:if>\n  <xsl:value-of select="{0}" disable-output-escaping="yes"/>&#160;\n</xsl:template>',j:"image",k:"<xsl:template xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n  <xsl:if test=\"@*[name() = $attrcellstyle]\">\n    <xsl:attribute name=\"style\"><xsl:value-of select=\"@*[name() = $attrcellstyle]\"/></xsl:attribute>\n  </xsl:if>\n  <xsl:if test=\"{0} and not ({0} = '')\"><img style=\"position:relative;\"",l:' alt="{{0}alt}">\n',m:'    <xsl:attribute name="src"><xsl:apply-templates select="{0}" mode="uri-resolver"/></xsl:attribute>\n',n:"  </img></xsl:if>\n",o:"</xsl:template>",p:"@",q:"The following value template type is not supported: ",r:"<xsl:template",s:"id",t:"function",u:"object",v:"_jsxgF",w:"",x:"undefined",y:"var fn = ",z:"; fn;"};var
Ab=jsx3.util.Logger.getLogger(o.jsxclass.getName());var
Lb=jsx3.gui.Event;o.DEFAULT_WIDTH=100;o.TYPE_TEXT=ub.a;o.TYPE_NUMBER=ub.b;o.DEFAULT_VALIGN=ub.c;o.TEMPLATES={};o.TEMPLATES[ub.d]=ub.e;o.TEMPLATES[ub.f]=ub.g;o.TEMPLATES[ub.h]=ub.i;o.TEMPLATES[ub.j]=ub.k+jsx3.html._d+ub.l+ub.m+ub.n+ub.o;c.init=function(i){this.jsxsuper(i);};c.getValueTemplate=function(m){if(this.jsxvaluetemplate!=null)if(this.jsxvaluetemplate.charAt(0)==ub.p){var
ab=o.TEMPLATES[this.jsxvaluetemplate.substring(1)];if(ab){return ab;}else Ab.error(ub.q+this.jsxvaluetemplate);}else if((jsx3.util.strTrim(this.jsxvaluetemplate)).indexOf(ub.r)==0)return this.jsxvaluetemplate;if(m!=null)return m;};c.setValueTemplate=function(f){this.jsxvaluetemplate=f;this.i5();};c.getResizable=function(){return this.jsxresize;};c.setResizable=function(b){this.jsxresize=b;this.mt();};c.getTriggers=function(){return this.jsxtriggers;};c.setTriggers=function(b){this.jsxtriggers=b;};c.getPath=function(){return this.jsxpath==null?(this.getParent()).hn(ub.s):this.jsxpath;};c.setPath=function(d,f){this.jsxpath=d;this.i5();if(!f&&this.getParent())(this.getParent()).repaint();};c.getSortPath=function(){return this.jsxsortpath!=null?this.jsxsortpath:this.getPath();};c.setSortPath=function(i){this.jsxsortpath=i;};c.getDataType=function(){return this.jsxdatatype==null?ub.a:this.jsxdatatype;};c.setDataType=function(l){this.jsxdatatype=l;};c.getSortDataType=function(){return this.jsxsortdatatype==null?this.getDataType():this.jsxsortdatatype;};c.setSortDataType=function(p){this.jsxsortdatatype=p;};c.getCanSort=function(){return this.jsxsort;};c.setCanSort=function(q){this.jsxsort=q;this.mt();};c.setFormatHandler=function(b){if(typeof b==ub.t){this._jsxgF=new
jsx3.gui.Matrix.ColumnFormat();this._jsxgF.format=b;}else if(b&&typeof b==ub.u&&typeof b.format==ub.t){this._jsxgF=b;}else{delete this[ub.v];this.jsxformathandler=b!=null?b+ub.w:null;}};c.getFormatHandler=function(){return this.jsxformathandler;};c.Rm=function(){if(typeof this._jsxgF==ub.x)if(this.jsxformathandler){this._jsxgF=jsx3.gui.Matrix.ColumnFormat.getInstance(this.jsxformathandler,this);if(this._jsxgF==null)try{var
ab=this.eval(ub.y+this.jsxformathandler+ub.z);if(typeof ab==ub.u&&typeof ab.format==ub.t&&typeof ab.validate==ub.t){this._jsxgF=ab;}else if(typeof ab==ub.t){this._jsxgF=new
jsx3.gui.Matrix.ColumnFormat();this._jsxgF.format=ab;}else Ab.error(ub.A+this.jsxformathandler);}catch(Kb){Ab.error(ub.B+this.jsxformathandler,jsx3.NativeError.wrap(Kb));}}else this._jsxgF=null;return this._jsxgF;};c.Hj=function(h,e,j){var
Ca=this.Wl(true,h);var
Db=Ca.recalculate(h,null,j);var
ea=this.getParent();var
ca=Ca.lg(0);ca.recalculate({height:Ca.ld()},null,j);var
H=Ca.lg(1);var
ya={parentwidth:h.parentwidth};if(this.BY()){var
bb=ea.getRowHeight(jsx3.gui.Matrix.DEFAULT_ROW_HEIGHT);ya.height=bb?bb:jsx3.gui.Matrix.DEFAULT_ROW_HEIGHT;}H.recalculate(ya,null,j);if(this.BY()){var
Ea=H.lg(0);Ea.recalculate({height:H.ld()},null,j);}if(Db.w)ea.resetXslCacheData();return Db;};c.zd=function(g){this.applyDynamicProperties();var
za=this.getParent();if(za&&(g==null||isNaN(g.parentwidth)||isNaN(g.parentheight))){g=za.Id(this);}else if(g==null)g={};g.width=ub.C;g.height=ub.C;g.boxtype=ub.D;g.tagname=ub.E;var
vb,fb;if((vb=this.getBorder())!=null&&vb!=ub.w)g.border=vb;if((fb=this.getPadding())!=null&&fb!=ub.w)g.padding=fb;var
O=new
jsx3.gui.Painted.Box(g);var
ib={};ib.height=O.ld();ib.boxtype=ub.D;ib.tagname=ub.F;var
Ba=new
jsx3.gui.Painted.Box(ib);O.cl(Ba);var
G={};if(this.BY()){var
Jb=za.getRowHeight(jsx3.gui.Matrix.DEFAULT_ROW_HEIGHT);G.height=Jb?Jb:jsx3.gui.Matrix.DEFAULT_ROW_HEIGHT;}G.width=ub.C;G.boxtype=ub.D;G.tagname=ub.E;G.parentwidth=g.parentwidth;if((vb=this.getCellBorder())!=null&&vb!=ub.w)G.border=vb;if((fb=this.getCellPadding())!=null&&fb!=ub.w)G.padding=fb;var
qa=new
jsx3.gui.Painted.Box(G);O.cl(qa);var
P={};if(this.BY())P.height=qa.ld();P.boxtype=ub.D;P.tagname=ub.F;var
Oa=new
jsx3.gui.Painted.Box(P);qa.cl(Oa);return O;};c.BY=function(){var
ab=this.getParent();if(ab){if(ab.getPagingModel()==3)return true;return ab.getRowHeight()!=0;}return true;};c.paint=function(){this.applyDynamicProperties();var
N=this.getParent();var
Aa=this.Wl(true);Aa.setAttributes(ub.G+this.getId()+ub.H+jsx3.html._d+this.nk()+N.Fg(ub.I,ub.J)+N.Fg(ub.K,ub.L));Aa.setStyles(this.mi()+this.ch()+this.ke()+this.jc()+this.wk()+this.Pb()+this.paintVAlign());var
cb=Aa.lg(0);cb.setAttributes(ub.M+jsx3.html._d);cb.setStyles(this.paintWrap()+this._k()+this.cd()+this.kz());return (Aa.paint()).join((cb.paint()).join(this.il()));};c.repaint=function(){this.mt();};c.kz=function(){if(this.getSortPath()==(this.getParent()).getSortPath())return ub.N+((this.getParent()).getSortDirection()==ub.O?jsx3.gui.Matrix.SORT_ASCENDING_IMG:jsx3.gui.Matrix.SORT_DESCENDING_IMG)+ub.P;return ub.w;};c._applySortIcon=function(j){(this.getRendered()).childNodes[0].style.backgroundImage=j?ub.Q+((this.getParent()).getSortDirection()==ub.O?jsx3.gui.Matrix.SORT_ASCENDING_IMG:jsx3.gui.Matrix.SORT_DESCENDING_IMG)+ub.R:ub.w;};c.LV=function(){return ub.S+this.Zm()+ub.T;};c.setWidth=function(d,l){this.jsxwidth=d;var
D=this.getParent();if(D)D.Mc((D.getParent()).Id(D),true);return this;};c.setDisplay=function(p,k){this.jsxdisplay=p;var
y=this.getParent();if(y){y.Bk();if(k)y.repaint();}return this;};c.getDisplayIndex=function(){var
I=this.getParent();if(I){var
sb=I.sm();for(var
X=0;X<sb.length;X++)if(sb[X]==this)return X;}};c.Zm=function(){return this.getCellBackgroundColor()?ub.U+this.getCellBackgroundColor()+ub.V:ub.W;};c.cc=function(){return this.getCellBorder()?this.getCellBorder()+ub.V:ub.w;};c.Qi=function(){return this.getCellColor()?ub.X+this.getCellColor()+ub.V:ub.V;};c.gh=function(){return this.getCellCursor()?ub.Y+this.getCellCursor()+ub.V:ub.w;};c.Yi=function(){if(!this.getCellFontName())return ub.w;return ub.Z+(this.getCellFontName()?this.getCellFontName():jsx3.gui.Block.DEFAULTFONTNAME)+ub.V;};c.Ii=function(){if(!this.getCellFontSize())return ub.w;return ub._+(this.getCellFontSize()?this.getCellFontSize():jsx3.gui.Block.DEFAULTFONTSIZE)+ub.aa;};c.oj=function(){return this.getCellFontWeight()?ub.ba+this.getCellFontWeight()+ub.V:ub.w;};c.paintWrap=function(){return this.getWrap(0)==0?ub.ca:ub.w;};c.Lm=function(){return this.getCellWrap(0)==0?ub.ca:ub.w;};c.Gd=function(){return ub.da+(this.getCellTextAlign()?this.getCellTextAlign():ub.ea)+ub.V;};c.paintVAlign=function(){return ub.fa+(this.getVAlign()?this.getVAlign():ub.c)+ub.V;};c.Qk=function(){return ub.fa+(this.getCellVAlign()?this.getCellVAlign():ub.c)+ub.V;};c.getCellBackgroundColor=function(){return this.jsxcellbgcolor;};c.setCellBackgroundColor=function(d){this.jsxcellbgcolor=d;this.i5();};c.getCellBorder=function(){return this.jsxcellborder;};c.setCellBorder=function(a,q){this.jsxcellborder=a;this.i5();if(!q&&this.getParent())(this.getParent()).repaint();};c.getCellColor=function(){return this.jsxcellcolor;};c.setCellColor=function(q){this.jsxcellcolor=q;this.i5();};c.getCellCursor=function(){return this.jsxcellcursor;};c.setCellCursor=function(i){this.jsxcellcursor=i;this.i5();};c.getCellFontName=function(){return this.jsxcellfontname;};c.setCellFontName=function(m){this.jsxcellfontname=m;this.i5();};c.getCellFontSize=function(){return this.jsxcellfontsize;};c.setCellFontSize=function(h){this.jsxcellfontsize=h;this.i5();};c.getCellFontWeight=function(){return this.jsxcellfontweight;};c.setCellFontWeight=function(f){this.jsxcellfontweight=f;this.i5();};c.getCellPadding=function(){return this.jsxcellpadding;};c.setCellPadding=function(e,m){this.jsxcellpadding=e;this.i5();if(!m&&this.getParent())(this.getParent()).repaint();};c.getCellTextAlign=function(){return this.jsxcelltextalign;};c.setCellTextAlign=function(l){this.jsxcelltextalign=l;this.i5();};c.getCellVAlign=function(){return this.jsxcellvalign;};c.setCellVAlign=function(l){this.jsxcellvalign=l;this.i5();};c.getCellWrap=function(m){return this.jsxcellwrap!=null?this.jsxcellwrap:m!=null?m:null;};c.setCellWrap=function(m){this.jsxcellwrap=m;this.i5();};c.setBorder=function(l){this.jsxborder=l;this.clearBoxProfile();this.mt();};c.setPadding=function(l){this.jsxpadding=l;this.clearBoxProfile();this.mt();};c.getWrap=function(s){return this.jsxwrap!=null?this.jsxwrap:s!=null?s:null;};c.setWrap=function(d){this.jsxwrap=d;this.mt();};c.getVAlign=function(){return this.jsxvalign;};c.setVAlign=function(i){this.jsxvalign=i;this.mt();};c.setText=function(d,i){this.jsxtext=d;var
ea;if(i&&(ea=this.getRendered())!=null)ea.childNodes[0].innerHTML=d;return this;};c.getEditMask=function(){return this.getChild(0);};c.getEditMasks=function(){return this.getChildren();};c.getValueForRecord=function(k){var
Ra=(this.getParent()).getRecordNode(k);if(Ra)return Ra.getAttribute(this.getPath());else if(k==ub.ga)return ((this.getParent()).getAutoRowSession())[this.getPath()];};c.setValueForRecord=function(l,d){var
oa=(this.getParent()).getRecordNode(l);if(oa)oa.setAttribute(this.getPath(),d);else if(l==ub.ga)((this.getParent()).getAutoRowSession())[this.getPath()]=d;};c.onSetParent=function(f){return jsx3.gui.Matrix&&f instanceof jsx3.gui.Matrix;};c.i5=function(){var
J=this.getParent();if(J)J.Bk();};c.mt=function(){var
Q=this.getParent();if(Q)Q.repaintHead();};});jsx3.gui.MatrixColumn=jsx3.gui.Matrix.Column;jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block","jsx3.gui.Matrix.Column","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Matrix",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(m,q){var
ub={A:"Race condition with view...",Aa:"z-index:10;overflow:scroll;",Ab:"jsxselect",Ac:"_body",Ad:"tu",B:"px",Ba:'src="',Bb:"jsxchange",Bc:"N",Bd:"blur",C:"table",Ca:'" alt=""',Cb:"jsxautorow",Cc:"S",Cd:"W3",D:"jsxcolspan",Da:"FS",Db:"jsxbeforeedit",Dc:"W",Dd:' colspan="{$jsx_colspan}" jsxcolspan="{$jsx_colspan}" ',E:"jsxindent",Ea:"xD",Eb:"undefined",Ec:"lazy",Ed:' jsxtype="cell" class="jsx30matrixcolumn_cell" id="{$jsx_id}_jsx_{$jsx_cdfkey}_jsx_',F:"0+",Fa:' class="jsx30matrix_scrollh"',Fb:"tH",Fc:"E",Fd:'"',G:"0",Ga:"z-index:10;overflow:auto;",Gb:"_jsxyP",Gc:"escape key ",Gd:"{$jsx_selection_bg}{$jsx_rowbg}",H:"object",Ha:"overflow:hidden;background-color:#e8e8f5;z-index:11;",Hb:"jsxbeforeappend",Hc:"focusPrevious",Hd:'class="jsx30matrixcolumn_cell_value"',I:"",Ia:"_ebMouseOutDropIcon",Ib:"jsxroot",Ic:"focusNext",Id:"test",J:/\d*%/,Ja:"&#160;",Jb:"jsxafterappend",Jc:"colgroup",Jd:"$jsx_cell_value_template_id='",K:"*",Ka:'<div class="jsx30matrix_scroll_info"><span class="jsx30matrix_scroll_info">&#160;</span></div>',Kb:"true",Kc:"dq",Kd:"_value'",L:"Matrix Width Recalc, Pass 1 (",La:'<div class="jsx30matrix_resize_bar">&#160;</div>',Lb:"_jsxOM",Lc:"vG",Ld:"//xsl:call-template",M:"): ",Ma:'<div class="jsx30matrix_drop_icon" ',Mb:"jsxafteredit",Mc:"visibility:hidden;",Md:"name",N:"Matrix Width Recalc, Pass 2a (",Na:">&#160;</div>",Nb:"jsxaftercommit",Nc:'<div class="jsx30matrix_resize_anchor" jsxindex="',Nd:"_value",O:"Matrix Width Recalc, Pass 2b (",Oa:"Pp",Ob:"jsxtype",Oc:'" style="left:',Od:"ui_controller",P:"Matrix Width Recalc, Pass 3 (",Pa:'<div id="',Pb:"plusminus",Pc:"px;",Pd:"//xsl:template[@name='ui_controller']//xsl:call-template",Q:"Matrix Width Recalc, Pass 4 (",Qa:'_masks" class="jsx30matrix_masks">',Qb:"paged",Qc:"width:",Qd:"Error with column ",R:"100%",Ra:"</div>",Rb:"record",Rc:"px;background-image:url(",Rd:": ",S:"relativebox",Sa:"_masks",Sb:"./",Sc:");height:",Sd:/width:\d*px;/,T:"div",Ta:'_head" class="jsx30matrix_head"',Tb:"open",Tc:'px;" ',Td:"{$jsx_first_row_width_style}",U:"box",Ua:'cellspacing="0" cellpadding="0" class="jsx30matrix_head_table"',Ub:"Fetch the content belonging to: ",Uc:"jsxindex",Ud:"default",V:"inline",Va:"_head",Vb:"position:relative;",Vc:"jsxbeforeresize",Vd:/\{0\}/g,W:"tr",Wa:'<table id="',Wb:"jsxcontextindex",Wc:"Xy",Wd:"@",X:"If the header border and body border do not share the same pixel width, the columns in the matrix may not align as expected (",Xa:'_ghost" cellspacing="0" cellpadding="0" class="jsx30matrix_ghost" style="width:',Xb:"jsxtoggle",Xc:"jsxafterresize",Xd:/<\/xsl:template>\s*$/,Y:")\nHeader Border (",Ya:'px;"><tr>',Yb:"pagedfocusdelay",Yc:"-6px",Yd:"</xsl:template>",Z:") != Body Border (",Za:"</tr></table>",Zb:"<div id='JSX' class='jsx30matrix_dragicon' style='",Zc:"Panel pool max (",Zd:"jsx_use_categories",_:")",_a:"BeforeEnd",_b:"'>",_c:") exceeded by: ",_d:"jsxabspath",a:"jsx:///images/matrix/select.gif",aa:"img",ab:"Cw",ac:"<table class='",ad:"reaping panel: ",ae:"jsxhomepath",b:"jsx:///images/matrix/insert_before.gif",ba:"mouseover",bb:"jsxmenu",bc:"class",bd:"structure",be:"<tr",c:"jsx:///images/matrix/append.gif",ca:"mouseout",cb:"jsxbeforesort",cc:"' style='",cd:"jsx_",ce:"loading",d:"font-weight:bold",da:"dblclick",db:"jsxaftersort",dc:"style",dd:"tbody",de:"kH",e:"jsx:///images/matrix/minus.gif",ea:"keydown",eb:"_jsxDY",ec:"<tr class='",ed:"_jsx_",ee:"_jsxBF",f:"jsx:///images/matrix/plus.gif",fa:"mousedown",fb:"text",fc:"</tr></table></div>",fd:"-",fe:"sort",g:"jsx:///images/matrix/file.gif",ga:"click",gb:"jsxafterreorder",gc:/input|textarea/i,gd:"jsxscroll",ge:/<ids>([\s\S]*)\s*,\s*<\/ids>/,h:"ascending",ha:"mouseup",hb:"focusdelay",hc:"jsxbeforedrop",hd:"horizontal",he:"[",i:"descending",ia:'id="',ib:"_jsxX6",ic:"7px",id:"seek",ie:"]",j:"jsx:///images/matrix/sort_desc.gif",ja:'" class="jsx30matrix',jb:/(-\S)/gi,jc:"dropverb",jd:"Matrix_timeout",je:"count",k:"jsx:///images/matrix/sort_asc.gif",ka:" ",kb:";",kc:"insertbefore",kd:"vertical",ke:"attr",l:'<xsl:call-template xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="{0}">\n  <xsl:with-param name="jsx_is_first_panel_row" select="$jsx_is_first_panel_row"/>\n  <xsl:with-param name="jsx_row_number" select="$jsx_row_number"/>\n  <xsl:with-param name="jsx_rowbg" select="$jsx_rowbg"/>\n  <xsl:with-param name="jsx_cdfkey" select="$jsx_cdfkey"/>\n  <xsl:with-param name="jsx_descendant_index" select="$jsx_descendant_index"/>\n</xsl:call-template>',la:'" ',lb:":",lc:"12px",ld:"X1",le:/(\d+)/,m:"<xsl:when xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" test=\"$jsx_cell_value_template_id=''{0}''\">\n  <xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_record_context]\">\n    <xsl:call-template name=\"{0}\">\n    </xsl:call-template>\n  </xsl:for-each>\n</xsl:when>\n",ma:"_onMouseUp",mb:"unselectable",mc:"append",md:"fetching panel: ",me:"Getting Record Count: ",n:"<xsl:template xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" name=\"{0}\">\n  <xsl:param name=\"jsx_is_first_panel_row\"/>\n  <xsl:param name=\"jsx_row_number\"/>\n  <xsl:param name=\"jsx_rowbg\"/>\n  <xsl:param name=\"jsx_cdfkey\"/>\n  <xsl:param name=\"jsx_descendant_index\"/>\n  <xsl:param name=\"jsx_selection_bg\"><xsl:choose>\n     <xsl:when test=\"@*[name() = $attrselected]=1\">background-image:url(<xsl:value-of select=\"$jsx_selection_bg_url\"/>);</xsl:when>\n   </xsl:choose></xsl:param>\n  <xsl:param name=\"jsx_cell_width\" select=\"''{2}''\"/>\n  <xsl:param name=\"jsx_true_width\">\n    <xsl:choose><xsl:when test=\"$jsx_use_categories!=''0'' and not(@*[name() = $attrcategory]=''0'') and (@*[name() = $attrcategory] or *[$attrchildren='*' or name()=$attrchildren])\">{3}</xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_cell_width\"/></xsl:otherwise></xsl:choose>\n  </xsl:param>\n  <xsl:param name=\"jsx_first_row_width_style\">\n    <xsl:choose><xsl:when test=\"$jsx_is_first_panel_row\">width:<xsl:value-of select=\"$jsx_true_width\"/>px;</xsl:when></xsl:choose>\n  </xsl:param>\n  <xsl:param name=\"jsx_colspan\">\n    <xsl:choose><xsl:when test=\"$jsx_use_categories!=''0'' and not(@*[name() = $attrcategory]=''0'') and (@*[name() = $attrcategory] or *[$attrchildren='*' or name()=$attrchildren])\"><xsl:value-of select=\"$jsx_column_count\"/></xsl:when><xsl:otherwise>1</xsl:otherwise></xsl:choose>\n  </xsl:param>\n  {1}\n</xsl:template>",na:"selectstart",nb:"1",nc:"rowcontext",nd:"contextnodes",ne:"The paging model was overridden (disabled) because the rendering mode is hierarchical and stepped paging was not explicitly set.",o:'<xsl:call-template name="{0}">\n  <xsl:with-param name="jsx_cell_width" select="$jsx_true_width"/>\n  <xsl:with-param name="jsx_row_number" select="$jsx_row_number"/>\n  <xsl:with-param name="jsx_descendant_index" select="$jsx_descendant_index"/>\n</xsl:call-template>',oa:"HZ",ob:"execute",oc:"jsxspy",od:"jsxrownumber",oe:".//",p:"Viewing rows {0} to {1} of {2}",pa:'_body" class="jsx30matrix_body" ',pb:"jsxexecute",pc:"_jsxMK",pd:"Matrix2pass",pe:"JSXDRAGID",q:"jsxpaintpage",qa:"mousewheel",qb:"jsxid",qc:"jsx30spyglassbuffer",qd:"position:absolute;left:0px;top:",qe:"\\b(",r:"deep",ra:"ae",rb:"_jsxhU",rc:"jsxcanceldrop",rd:"autorow",re:")\\b",s:"shallow",sa:"RI",sb:"_jsxUY",sc:"body",sd:"panel",se:"BeforeBegin",t:"hierarchical",ta:"FR",tb:"//",tc:"hierachical",td:"Fetching records: ",te:"td",u:"jsx:///xsl/jsxmatrix.xsl",ua:"gN",ub:"children",uc:"jsx30matrix_drop_icon",ud:" - to - ",ue:"*[",v:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"attropen\">jsxopen</xsl:param><xsl:param name=\"attrgroupname\">jsxgroupname</xsl:param><xsl:param name=\"attrselected\">jsxselected</xsl:param><xsl:param name=\"attrcategory\">jsxcategory</xsl:param><xsl:param name=\"attrcellstyle\">jsxcellstyle</xsl:param><xsl:param name=\"jsx_id\"/><xsl:param name=\"jsx_1\"/><xsl:param name=\"jsx_2\"/><xsl:param name=\"jsx_3\"/><xsl:param name=\"jsx_4\"/><xsl:param name=\"jsx_5\"/><xsl:param name=\"jsx_6\"/><xsl:param name=\"jsx_7\"/><xsl:param name=\"jsx_8\"/><xsl:param name=\"jsx_9\"/><xsl:param name=\"jsx_10\"/><xsl:param name=\"jsx_use_categories\">0</xsl:param><xsl:param name=\"jsx_column_count\">1</xsl:param><xsl:param name=\"jsx_drag_type\">JSX_GENERIC</xsl:param><xsl:param name=\"jsx_panel_index\"/><xsl:param name=\"jsx_column_widths\"/><xsl:param name=\"jsx_panel_css\"/><xsl:param name=\"jsx_icon\"/><xsl:param name=\"jsx_icon_minus\"/><xsl:param name=\"jsx_icon_plus\"/><xsl:param name=\"jsx_transparent_image\"/><xsl:param name=\"jsx_paging_model\">0</xsl:param><xsl:param name=\"jsx_mode\">panel</xsl:param><xsl:param name=\"jsx_cell_value_template_id\">_jsx_{serverns}_{serial}_value</xsl:param><xsl:param name=\"jsx_record_context\">cdfkey</xsl:param><xsl:param name=\"jsx_min_exclusive\">-1</xsl:param><xsl:param name=\"jsx_max_exclusive\">1000000</xsl:param><xsl:param name=\"jsx_column_index\">-1</xsl:param><xsl:param name=\"jsx_sort_path\" select=\"$attrid\"/><xsl:param name=\"jsx_sort_direction\">ascending</xsl:param><xsl:param name=\"jsx_sort_type\">text</xsl:param><xsl:param name=\"jsx_selection_bg_url\">JSX/images/list/select.gif</xsl:param><xsl:param name=\"jsx_selection_model\">1</xsl:param><xsl:param name=\"jsx_rowbg1\"/><xsl:param name=\"jsx_rowbg2\"/><xsl:param name=\"jsx_treehead_bgcolor\"/><xsl:param name=\"jsx_treehead_fontweight\"/><xsl:param name=\"jsx_autorow_style\">background-color:#fbf89f;</xsl:param><xsl:param name=\"jsx_rendering_model\">hierarchical</xsl:param><xsl:param name=\"jsx_rendering_context\">jsxroot</xsl:param><xsl:param name=\"jsx_rendering_context_child\"/><xsl:param name=\"jsx_indent\">16</xsl:param><xsl:param name=\"jsx_context_index\">1</xsl:param><xsl:param name=\"jsx_no_tip\">0</xsl:param><xsl:param name=\"jsx_no_empty_indent\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}_asyncmsg\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><tr><td style=\"padding: 3px;\"><xsl:value-of select=\"$jsxasyncmessage\"/></td></tr></table></xsl:when><xsl:when test=\"$jsx_mode = 'cellvalue'\"><xsl:choose><xsl:when test=\"0\"/></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'shallow'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren])\"/></xsl:when><xsl:when test=\"$jsx_mode = 'autorow'\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_-1\" jsxautorow=\"true\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\">-1</xsl:with-param></xsl:call-template></table></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:if test=\"@*[name() = $attrid] = $jsx_rendering_context_child\"><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:if></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"sort\" select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_{$jsx_panel_index}\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'deep'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren])\"/></xsl:when><xsl:when test=\"$jsx_mode = 'autorow'\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_-1\" jsxautorow=\"true\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\">-1</xsl:with-param></xsl:call-template></table></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:if test=\"@*[name() = $attrid] = $jsx_rendering_context_child\"><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:if></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"sort\" select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_{$jsx_panel_index}\" style=\"{$jsx_panel_css}width:{$jsx_column_widths}px;\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></xsl:when><xsl:when test=\"$jsx_rendering_model = 'hierarchical'\"><xsl:choose><xsl:when test=\"$jsx_mode = 'count'\"><xsl:value-of select=\"count(//*[@*[name() = $attrid]=$jsx_rendering_context]//*[$attrchildren='*' or name()=$attrchildren])\"/></xsl:when><xsl:when test=\"$jsx_mode = 'record'\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren][@*[name() = $attrid]=$jsx_rendering_context_child]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_column_widths\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_context_index\"/></xsl:apply-templates></xsl:for-each></xsl:when><xsl:when test=\"$jsx_mode = 'sort'\"><ids><xsl:apply-templates mode=\"hierarchical_sort\" select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></ids></xsl:when><xsl:otherwise><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsx_rendering_context]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_column_widths\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_context_index\"/></xsl:apply-templates></xsl:for-each></xsl:otherwise></xsl:choose></xsl:when></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"node()\" mode=\"entry\"><xsl:param name=\"jsx_row_number\"/><xsl:choose><xsl:when test=\"$jsx_row_number = '-1' or ($jsx_row_number &gt; $jsx_min_exclusive and $jsx_row_number &lt; $jsx_max_exclusive)\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_row_number\"/></xsl:call-template></xsl:when></xsl:choose></xsl:template><xsl:template match=\"node()\" mode=\"sort\">\"<xsl:value-of select=\"@*[name() = $attrid]\"/>\",</xsl:template><xsl:template match=\"node()\" mode=\"hierarchical_sort\">\"<xsl:value-of select=\"@*[name() = $attrid]\"/>\",<xsl:apply-templates mode=\"hierarchical_sort\" select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/></xsl:apply-templates></xsl:template><xsl:template match=\"node()\" mode=\"hierarchical_entry\"><xsl:param name=\"jsx_row_number\"/><xsl:param name=\"jsx_adjusted_width\"/><xsl:param name=\"jsx_descendant_index\"/><div jsxtype=\"structure\" style=\"position:relative;\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" id=\"{$jsx_id}jsx_0\" style=\"{$jsx_panel_css}width:{$jsx_adjusted_width}px;\"><xsl:call-template name=\"row_template\"><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_min_exclusive + 1\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index\"/></xsl:call-template></table><div jsxcontextindex=\"{$jsx_descendant_index + 1}\" style=\"display:none;\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:choose><xsl:when test=\"@*[name() = $attropen]='1'\"><xsl:attribute name=\"style\">position:relative;display:block;</xsl:attribute></xsl:when></xsl:choose><xsl:choose><xsl:when test=\"@*[name() = $attropen]='1' or $jsx_paging_model != 4 \"><xsl:for-each select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsx_sort_type}\" order=\"{$jsx_sort_direction}\" select=\"@*[name()=$jsx_sort_path]\"/><xsl:apply-templates mode=\"hierarchical_entry\" select=\".\"><xsl:with-param name=\"jsx_row_number\" select=\"position()\"/><xsl:with-param name=\"jsx_adjusted_width\" select=\"$jsx_adjusted_width\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index + 1\"/></xsl:apply-templates></xsl:for-each></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></div></div></xsl:template><xsl:template name=\"ui_controller\"><xsl:param name=\"jsx_descendant_index\"/><xsl:param name=\"jsx_cell_width\"/><xsl:param name=\"jsx_row_number\">0</xsl:param><xsl:param name=\"jsx_style\" select=\"@*[name() = $attrstyle]\"/><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30matrix_rowtable\" jsxindent=\"{($jsx_descendant_index -1) * $jsx_indent}\"><xsl:attribute name=\"style\">width:<xsl:value-of select=\"$jsx_cell_width - (($jsx_descendant_index -1) * $jsx_indent)\"/>px;position:relative;margin-left:<xsl:value-of select=\"($jsx_descendant_index -1) * $jsx_indent\"/>px;height:16px;</xsl:attribute><tr style=\"{$jsx_style}\"><xsl:if test=\"@*[name() = $attrclass]\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@*[name() = $attrclass]\"/></xsl:attribute></xsl:if><td jsxtype=\"plusminus\"><xsl:attribute name=\"jsxtype\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and $jsx_paging_model = 4 and not(@*[name() = $attropen]=1)\">paged</xsl:when><xsl:otherwise>plusminus</xsl:otherwise></xsl:choose></xsl:attribute><xsl:attribute name=\"style\">vertical-align:top;width:<xsl:choose><xsl:when test=\"$jsx_no_empty_indent='1' and not(../*[$attrchildren='*' or name()=$attrchildren]/*[$attrchildren='*' or name()=$attrchildren])\">0</xsl:when><xsl:otherwise>16</xsl:otherwise></xsl:choose>px;background-image:url(<xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and @*[name() = $attropen]=1\"><xsl:value-of select=\"$jsx_icon_minus\"/></xsl:when><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and $jsx_paging_model = 4\"><xsl:value-of select=\"$jsx_icon_plus\"/></xsl:when><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:value-of select=\"$jsx_icon_plus\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_transparent_image\"/></xsl:otherwise></xsl:choose>);background-repeat:no-repeat;</xsl:attribute><xsl:text>&#160;</xsl:text></td><td jsxtype=\"icon\" unselectable=\"on\"><xsl:choose><xsl:when test=\"@*[name() = $attrimg] = ''\"><xsl:attribute name=\"style\">width:1px;</xsl:attribute><span style=\"display:none;width:1px;height:1px;\"/></xsl:when><xsl:when test=\"@*[name() = $attrimg]\"><xsl:attribute name=\"style\">width:16px;vertical-align:top;</xsl:attribute><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30matrix_plusminus\" jsxtype=\"icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:when><xsl:when test=\"$jsx_icon=''\"><xsl:attribute name=\"style\">width:1px;</xsl:attribute><span style=\"display:none;width:1px;height:1px;\"><xsl:text>&#160;</xsl:text></span></xsl:when><xsl:otherwise><xsl:attribute name=\"style\">width:16px;vertical-align:top;</xsl:attribute><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30matrix_plusminus\" jsxtype=\"icon\" src=\"{$jsx_icon}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose><xsl:text>&#160;</xsl:text></td><td jsxtype=\"text\" style=\"vertical-align:top;\"><xsl:attribute name=\"jsxtreenode\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\">branch</xsl:when><xsl:otherwise>leaf</xsl:otherwise></xsl:choose></xsl:attribute><xsl:call-template name=\"ui_controller\"><xsl:with-param name=\"jsx_cell_width\" select=\"$jsx_cell_width\"/><xsl:with-param name=\"jsx_row_number\" select=\"$jsx_row_number\"/><xsl:with-param name=\"jsx_descendant_index\" select=\"$jsx_descendant_index\"/></xsl:call-template></td></tr></table></xsl:template><xsl:template name=\"row_template\"><xsl:param name=\"jsx_descendant_index\"/><xsl:param name=\"jsx_row_number\">0</xsl:param><xsl:param name=\"jsxdragtype\" select=\"$jsx_drag_type\"/><xsl:param name=\"jsx_style\"><xsl:choose><xsl:when test=\"$jsx_row_number = -1\"><xsl:value-of select=\"$jsx_autorow_style\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrstyle]\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_cdfkey\"><xsl:choose><xsl:when test=\"$jsx_row_number = -1\">jsxautorow</xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_groupname\"><xsl:choose><xsl:when test=\"@*[name() = $attrgroupname]\"><xsl:value-of select=\"@*[name() = $attrgroupname]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_id\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsx_rowbg\"><xsl:choose><xsl:when test=\"$jsx_rendering_model != 'hierarchical' and ($jsx_rowbg1 or $jsx_rowbg2) and $jsx_row_number != -1\"><xsl:text>background-color:</xsl:text><xsl:choose><xsl:when test=\"$jsx_row_number mod 2 = 0\"><xsl:value-of select=\"$jsx_rowbg1\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsx_rowbg2\"/></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:when><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren] and ($jsx_rendering_model = 'hierarchical') and $jsx_treehead_bgcolor\"><xsl:text>background-color:</xsl:text><xsl:value-of select=\"$jsx_treehead_bgcolor\"/><xsl:text>;font-weight:</xsl:text><xsl:value-of select=\"$jsx_treehead_fontweight\"/><xsl:text>;border-right-color:</xsl:text><xsl:value-of select=\"$jsx_treehead_bgcolor\"/><xsl:text>;</xsl:text></xsl:when></xsl:choose></xsl:param><xsl:param name=\"jsx_is_first_panel_row\" select=\"$jsx_row_number - 1 = $jsx_min_exclusive or $jsx_row_number = -1\"/><tr JSXDragId=\"{$jsx_cdfkey}\" JSXDragType=\"{$jsx_drag_type}\" id=\"{$jsx_id}_jsx_{$jsx_cdfkey}\" jsxid=\"{$jsx_cdfkey}\" jsxrownumber=\"{$jsx_row_number}\" jsxtype=\"record\" style=\"{$jsx_rowbg}{$jsx_style}\"><xsl:if test=\"@*[name() = $attrclass]\"><xsl:attribute name=\"class\"><xsl:value-of select=\"@*[name() = $attrclass]\"/></xsl:attribute></xsl:if><xsl:if test=\"@*[name() = $attrtip] and $jsx_no_tip != '1'\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:if><xsl:choose><xsl:when test=\"$jsx_use_categories='0' or @*[name() = $attrcategory]='0' or (not(@*[name() = $attrcategory]='1') and not(*[$attrchildren='*' or name()=$attrchildren]))\"></xsl:when></xsl:choose></tr></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",va:"mousemove",vb:"[@",vc:"JSX_GENERIC",vd:"//xsl:template[@name='row_template']//tr",ve:/^(on(?:mousedown|click|focus|blur|mouseup|mouseover|mouseout|dblclick|scroll|keydown|keypress))/i,w:"_jsxb6",wa:"au",wb:"selected",wc:"jsxadopt",wd:"//xsl:template[@name='row_template']//tr/xsl:choose/xsl:when",we:/(?:border:|border-top|border-left|border-bottom|border-right|padding|height|width|background-color)[^;]*;/gi,x:"scroll",xa:"Jt",xb:"='1']",xc:"jsxctrldrop",xd:"//xsl:choose/xsl:when/xsl:choose",xe:"strId",y:"none",ya:' class="jsx30matrix_scrollv" tabindex="-1"',yb:"id",yc:"jsxdrop",yd:' tabindex="-1"',z:"block",za:"display:none;",zb:"url(",zc:"jsxselected",zd:"focus"};var
Qa=jsx3.util.Logger.getLogger(m.jsxclass.getName());var
gb=jsx3.gui.Event;var
La=jsx3.gui.Interactive;var
A=jsx3.xml.CDF;var
Ya=jsx3.gui.Block;var
Ca=jsx3.gui.Painted;var
Ha=Ca.Box;var
pa=jsx3.html;m.YJ=500;m.y6=1;m.O9=150;m.AUTO_SCROLL_INTERVAL=50;m.SELECTION_BG=ub.a;m.INSERT_BEFORE_IMG=jsx3.resolveURI(ub.b);m.APPEND_IMG=jsx3.resolveURI(ub.c);m.FOCUS_STYLE=ub.d;m.ICON_MINUS=ub.e;m.ICON_PLUS=ub.f;m.ICON=ub.g;m.SORT_ASCENDING=ub.h;m.SORT_DESCENDING=ub.i;m.SORT_DESCENDING_IMG=jsx3.resolveURI(ub.j);m.SORT_ASCENDING_IMG=jsx3.resolveURI(ub.k);m.MINIMUM_COLUMN_WIDTH=8;m.DEFAULT_HEADER_HEIGHT=20;m.AUTOROW_NONE=0;m.AUTOROW_LAST_ROW=1;m.AUTOROW_FIRST_ROW=2;m.tQ=(new
jsx3.xml.Document()).loadXML(ub.l);m.AV=(new
jsx3.xml.Document()).loadXML(ub.m);m.RB=new
jsx3.util.MessageFormat(ub.n);m.vV=new
jsx3.util.MessageFormat(ub.o);m.DEFAULT_INFO_LABEL=ub.p;m.ON_PAINT_PAGE=ub.q;m.PAGING_OFF=0;m.PAGING_2PASS=1;m.PAGING_CHUNKED=2;m.PAGING_PAGED=3;m.PAGING_STEPPED=4;m.SELECTION_UNSELECTABLE=0;m.SELECTION_ROW=1;m.SELECTION_MULTI_ROW=2;m.REND_DEEP=ub.r;m.REND_SHALLOW=ub.s;m.REND_HIER=ub.t;m.DEFAULT_ROW_HEIGHT=20;m.DEFAULT_PANEL_POOL_COUNT=5;m.DEFAULT_ROWS_PER_PANEL=50;m.DEFAULT_REAPER_INTERVAL=250;m.DEFAULT_PANEL_QUEUE_SIZE=3;m.DEFAULTXSLURL=jsx3.resolveURI(ub.u);m.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.v);m.DEFAULT_XSL_URL=m.DEFAULTXSLURL;m.SCROLL_INC=36;q._jsxTv=[];q.init=function(g){this.jsxsuper(g);};q.Hj=function(j,g,h){var
sb=this.Wl(true,j);delete this[ub.w];var
hb=Ha.getScrollSize()+1;var
qa=this.getScaleWidth()==1?j.parentwidth-hb:this.x8();var
Na=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);sb.recalculate(j,g,h);var
U=sb.lg(0);U.recalculate({parentwidth:this.a7(),parentheight:Na},g?g.childNodes[0]:null,h);var
Ra=(U.lg(0)).lg(0);Ra.recalculate({parentwidth:qa,parentheight:Na},g&&g.childNodes[0]?pa.selectSingleElm(g,0,0,0):null,h);var
Ab=sb.ld()-Na;var
eb=sb.lg(1);eb.recalculate({parentwidth:this.a7(),parentheight:Ab},g?g.childNodes[1]:null,h);var
u=eb.hj()+eb.ld();Ab=sb.ld()-this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);var
Ta={};Ta.left=eb.getOffsetWidth()-1;Ta.top=0;Ta.height=u+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-(hb-Ha.getScrollSizeOffset(ub.x));var
G=sb.lg(2);G.recalculate(Ta,g?g.childNodes[2]:null,h);var
fa={};fa.top=u+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-hb;fa.width=eb.ee();var
ra=sb.lg(3);ra.recalculate(fa,g?g.childNodes[3]:null,h);var
va=ra.lg(0);var
Db=this.getScaleWidth()||qa-hb<=sb.ee()?0:qa;va.recalculate({width:Db},g&&g.childNodes[3]?g.childNodes[3].childNodes[0]:null,h);if(g&&g.childNodes[3])if(this.getSuppressHScroller(0)==1||this.getScaleWidth()==1||va.ee()<=ra.ee()){g.childNodes[3].style.display=ub.y;this.setScrollLeft(0);}else g.childNodes[3].style.display=ub.z;var
lb={};lb.left=Ta.left+1;lb.top=u+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-hb;lb.height=sb.ld()-lb.top;var
Aa=sb.lg(4);Aa.recalculate(lb,g&&g.childNodes[4]?g.childNodes[4]:null,h);var
mb=this.sm();var
t=this.oC(eb.ee());var
ib=false;for(var
ab=0;ab<mb.length;ab++){var
ea=mb[ab].Hj({parentwidth:t[ab],parentheight:Na},g?mb[ab].getRendered():null,h);ib=ib||ea==null||ea.w;}if(!ib){}else if(g&&g.childNodes[0]){var
Gb=[];for(var
ab=0;ab<mb.length;ab++)Gb.push((mb[ab].Wl(true)).getPaintedWidth());this.oF(g.childNodes[0].childNodes[0],Gb);t=[];for(var
ab=0;ab<mb.length;ab++)t.push((mb[ab].Wl(true)).getOffsetWidth());this.sS(g.childNodes[0].childNodes[0],t);Gb=[];for(var
ab=0;ab<mb.length;ab++)Gb.push(((mb[ab].Wl(true)).lg(1)).getPaintedWidth());if(this.getRenderingModel()==m.REND_HIER){var
F=this.EH({contextnodes:g.childNodes[1].childNodes[0].childNodes});this.Qu(F,Gb);}else this.oF(g.childNodes[1].childNodes[0],Gb);}else{Qa.trace(ub.A);jsx3.sleep(function(){if(this.getParent())this.Mc((this.getParent()).Id(this),true);},null,this);}this._Z();};q.sS=function(a,g){var
Da=0;for(var
J=1;J<a.childNodes.length;J++){var
O=a.childNodes[J];Da=Da+g[J-1];O.style.left=Da-4+ub.B;}};q.oF=function(n,a){var
Lb=this.x8();for(var
oa=0;oa<n.childNodes.length;oa++){var
Q=n.childNodes[oa];if(Q.tagName.toLowerCase()==ub.C){Q.style.width=Lb+ub.B;var
sb=this.mI(Q);if(jsx3.CLASS_LOADER.FX3){while(sb){for(var
va=0;va<sb.childNodes.length;va++)sb.childNodes[va].style.width=a[va]+ub.B;sb=sb.nextSibling;}}else if(sb)for(var
va=0;va<sb.childNodes.length;va++)sb.childNodes[va].style.width=a[va]+ub.B;}}};q.Qu=function(p,e){var
fa=this.x8();var
Oa=fa-(this.oC())[0]+e[0];for(var
Ra=0;Ra<p.length;Ra++){var
na=p[Ra];if(!(na&&na.childNodes))continue;var
N=na.parentNode;if(N.tagName.toLowerCase()!=ub.C)N=N.parentNode;N.style.width=fa+ub.B;for(var
xa=0;xa<na.childNodes.length;xa++){var
S=xa==0&&na.childNodes[0].getAttribute(ub.D)>1?Oa:e[xa];na.childNodes[xa].style.width=S+ub.B;if(xa==0&&this.getRenderNavigators(1)!=0){N=na.childNodes[xa].childNodes[0].childNodes[0];var
G=S-N.getAttribute(ub.E);N.style.width=Math.max(0,G)+ub.B;}}}};q.x8=function(d){if(!d)d=this.oC();return eval(d.join(ub.F)+ub.G)/10;};q.oC=function(g){if(typeof this._jsxb6==ub.H){return this._jsxb6.truewidths;}else{if(!g){g=this.a7();var
I={width:1000,height:10};var
Oa=this.getBodyBorder();if(Oa!=null&&Oa!=ub.I)I.border=Oa;g=g-(I.width-(new
Ha(I)).ee());}var
Ka=[];var
G=0;var
Ga;var
K=0;var
u=this.sm();var
P={percent:[],wildcard:[],pixel:[]};for(var
fa=0;fa<u.length;fa++){var
V=u[fa].getWidth();if((jsx3.util.strTrim(String(V))).search(ub.J)==0){P.percent.unshift(fa);Ga=parseInt(parseInt(V)/100*g);}else if(!isNaN(V)){P.pixel.unshift(fa);Ga=Number(V);}else{P.wildcard.unshift(fa);if(this.getScaleWidth()){K++;Ga=ub.K;}else Ga=m.Column.DEFAULT_WIDTH;}if(!isNaN(Ga))G=G+Ga;Ka.push(Ga);}Qa.trace(ub.L+this.getName()+ub.M+Ka);if(this.getScaleWidth()){var
aa=g-G;var
ka;if(K&&aa>=0&&parseInt(aa/K)>8){var
T=K;var
Lb=aa/K;if(Lb>parseInt(Lb)){Lb=parseInt(Lb);ka=aa-(K-1)*Lb;}else ka=Lb;for(var
fa=0;fa<Ka.length;fa++)if(Ka[fa]==ub.K){Ka[fa]=K==1?ka:Lb;K--;}K=T;}else if(K)for(var
fa=0;fa<Ka.length;fa++)if(Ka[fa]==ub.K)Ka[fa]=8;Qa.trace(ub.N+this.getName()+ub.M+Ka);var
Fb=this.x8(Ka);var
Da=Fb-g;if(Da>0){var
S=Da;if(P.wildcard.length)S=this.qT(Ka,P.wildcard,Da);if(P.percent.length&&S>0)S=this.qT(Ka,P.percent,S);if(P.pixel.length&&S>0)S=this.qT(Ka,P.pixel,S);}Qa.trace(ub.O+this.getName()+ub.M+Ka);}for(var
fa=0;fa<Ka.length;fa++)if(Ka[fa]<8)Ka[fa]=8;Qa.trace(ub.P+this.getName()+ub.M+Ka);var
Fb=this.x8(Ka);var
aa=g-Fb;if(aa>0)Ka[Ka.length-1]+=aa;Qa.trace(ub.Q+this.getName()+ub.M+Ka);this._jsxb6={truewidths:Ka};return Ka;}};q.qT=function(o,s,f){var
ia=0;var
xa=parseInt(f/s.length);for(var
P=0;P<s.length;P++){var
fb=s[P];if(P==s.length-1)xa=f-(s.length-1)*xa;if(o[fb]-xa<8){ia=ia+(8-(o[fb]-xa));o[fb]=8;}else o[fb]-=xa;}return ia;};q.a7=function(){var
X=((this.getParent()).Id(this)).parentwidth;return this.getSuppressVScroller(0)==1?X:X-Ha.getScrollSize();};q.Id=function(i){var
Nb=i.getDisplayIndex();return {parentwidth:Nb!=null?(this.oC())[Nb]:null,parentheight:((this.Wl(true)).lg(0)).ld()};};q.zd=function(c){this.applyDynamicProperties();if(this.getParent()&&(c==null||isNaN(c.parentwidth)||isNaN(c.parentheight))){c=(this.getParent()).Id(this);this.Bk();}else if(c==null)c={};var
Za=Ha.getScrollSize()+1;c.left=0;c.top=0;c.width=ub.R;c.height=ub.R;c.boxtype=ub.S;c.tagname=ub.T;var
ba=new
Ha(c);var
sa=this.getScaleWidth()==1?this.a7():this.x8();var
wa={};wa.left=0;wa.top=0;wa.height=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);wa.width=ub.R;wa.parentwidth=this.a7();wa.boxtype=ub.U;wa.tagname=ub.T;var
u;if((u=this.getHeaderBorder())!=null&&u!=ub.I)wa.border=u;var
I=new
Ha(wa);ba.cl(I);var
ia={};ia.tagname=ub.T;ia.boxtype=ub.U;ia.top=0;ia.left=0;var
xa=new
Ha(ia);I.cl(xa);var
lb={};lb.left=0;lb.top=0;lb.width=ub.R;lb.parentwidth=I.ee();lb.boxtype=ub.U;lb.tagname=ub.C;var
Ua=new
Ha(lb);xa.cl(Ua);var
B={};B.boxtype=ub.V;B.tagname=ub.W;var
Ea=new
Ha(B);Ua.cl(Ea);var
Mb=ba.ld()-this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);var
fa={};fa.left=0;fa.top=this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT);fa.parentwidth=this.a7();fa.width=ub.R;fa.parentheight=Mb;fa.height=ub.R;fa.boxtype=ub.U;fa.tagname=ub.T;if((u=this.getBodyBorder())!=null&&u!=ub.I)fa.border=u;var
Na=new
Ha(fa);ba.cl(Na);if(this.getHeaderHeight()!=0&&I.getBorderWidth()!=Na.getBorderWidth())Qa.warn(ub.X+this.getName()+ub.Y+this.getHeaderBorder()+ub.Z+this.getBodyBorder()+ub._);var
S={};S.tagname=ub.T;S.boxtype=ub.U;S.top=0;S.left=0;var
ra=new
Ha(S);Na.cl(ra);var
fb=Na.hj()+Na.ld();var
Ab={};Ab.boxtype=ub.U;Ab.tagname=ub.T;Ab.left=Na.getOffsetWidth()-1;Ab.top=0;Ab.width=Za;Ab.height=fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-(Za-Ha.getScrollSizeOffset(ub.x));var
ma=new
Ha(Ab);ba.cl(ma);var
z={};z.boxtype=ub.V;z.tagname=ub.aa;z.empty=true;z.left=0;z.top=0;z.width=1;z.height=this.getPagingModel()!=3?0:this.LE()+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)+Za;var
Fa=new
Ha(z);ma.cl(Fa);var
w={};w.boxtype=ub.U;w.tagname=ub.T;w.left=Na.qk();w.top=fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-Za;w.height=Za;w.width=Na.ee();var
P=new
Ha(w);ba.cl(P);var
Cb={};Cb.boxtype=ub.V;Cb.tagname=ub.aa;Cb.empty=true;Cb.left=0;Cb.top=0;Cb.width=sa-Za<=ba.ee()?0:sa;Cb.height=1;var
G=new
Ha(Cb);P.cl(G);var
yb={};yb.boxtype=ub.U;yb.tagname=ub.T;yb.left=Ab.left+1;yb.top=fb+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)-Za;yb.width=Za-1;yb.height=ba.ld()-yb.top;var
rb=new
Ha(yb);ba.cl(rb);return ba;};m.yg={};m.yg[ub.ba]=true;m.yg[ub.ca]=true;m.yg[ub.da]=true;m.yg[ub.ea]=true;m.yg[ub.fa]=true;m.yg[ub.ga]=true;m.yg[ub.ha]=true;q.paint=function(){this.applyDynamicProperties();var
x=this.getId();var
wb=this.getClassName();var
P=this.Wl(true);P.setAttributes(ub.ia+x+ub.ja+(wb?ub.ka+wb:ub.I)+ub.la+this.Ak()+this.Fg(ub.ha,ub.ma));var
_a=this.qj(m.yg,1);if(jsx3.CLASS_LOADER.IE)_a=_a+this.Fg(ub.na,ub.oa,1);var
Va=P.lg(1);Va.setAttributes(ub.ia+x+ub.pa+_a+this.Rl());var
fb=Va.lg(0);fb.setStyles(this.ch()+this.ke());fb.setAttributes(this.Fg(ub.qa,ub.ra,2));var
hb=P.lg(2);hb.setAttributes(this.Fg(ub.x,ub.sa)+this.Fg(ub.ba,ub.ta)+this.Fg(ub.ca,ub.ua)+this.Fg(ub.va,ub.wa)+this.Fg(ub.fa,ub.xa)+pa._d+ub.ya);var
Eb=this.getSuppressVScroller(0)==1?ub.za:ub.I;hb.setStyles(ub.Aa+Eb);var
za=hb.lg(0);za.setAttributes(ub.Ba+Ya.SPACE+ub.Ca);var
Hb=P.lg(3);Hb.setAttributes(this.Fg(ub.x,ub.Da)+this.Fg(ub.fa,ub.Ea)+pa._d+ub.Fa);Eb=this.getSuppressHScroller(0)==1||this.getScaleWidth()==1||(Hb.lg(0)).ee()<=Hb.ee()?ub.za:ub.I;Hb.setStyles(ub.Ga+Eb);var
G=Hb.lg(0);G.setAttributes(ub.Ba+Ya.SPACE+ub.Ca);var
ab=P.lg(4);ab.setStyles(ub.Ha);var
la=ub.I;var
ma=this.getPagingModel(0);if(ma==0||ma==4){if(this.MQ()==2)la=la+this.S5(-1);la=la+this.S5(0);if(this.MQ()==1)la=la+this.S5(-1);}var
ia=this.qz(true);var
Xa=this.Fg(ub.ca,ub.Ia);var
rb=(P.paint()).join(this.h3()+(Va.paint()).join((fb.paint()).join(la+ia))+(hb.paint()).join((za.paint()).join(ub.I))+(Hb.paint()).join((G.paint()).join(ub.I))+(ab.paint()).join(ub.Ja)+ub.Ka+ub.La+ub.Ma+Xa+ub.Na);return rb;};q.onAfterPaint=function(j){var
la=this.getPagingModel(0);if(la==0||la==4){this.Pp();}else if(this.vR()||!this._jsxgU)jsx3.sleep(this.Pp,ub.Oa+this.getId(),this);};q.onAfterRestoreView=function(a){this.synchronizeVScroller();};q.qz=function(o){var
xa=this.getPagingModel(0);var
Kb=xa==0||xa==4;if(o&&Kb||!o&&!Kb){var
M=this.sm();var
pb=[];for(var
ha=0;ha<M.length;ha++){var
Ua=M[ha];var
Fa=Ua.getEditMasks();for(var
sa=0;sa<Fa.length;sa++){var
fb=Fa[sa];if(m.ZJ(fb,Ua))if(fb.emGetType()==m.EditMask.NORMAL||fb.emGetType()==m.EditMask.DIALOG)pb.push(fb);}}var
ga=ub.Pa+this.getId()+ub.Qa+this.paintChildren(pb)+ub.Ra;return ga;}return ub.I;};q.resetMask=function(){this.endEditSession();};q.repaintData=function(){var
hb=this.vD();if(hb){var
x=this.getScrollTop();var
ta=this.getScrollLeft();var
E=ub.I;var
da=this.getPagingModel(0);if(da==0||da==4){this.nx();if(this.MQ()==2)E=E+this.S5(-1);E=E+this.S5(0);if(this.MQ()==1)E=E+this.S5(-1);}var
ya=this.getDocument(hb);var
S=ya.getElementById(this.getId()+ub.Sa);if(S){S.style.display=ub.y;hb.parentNode.appendChild(S);}hb.innerHTML=E;this.Pp(false,true);if(S){S.style.display=ub.I;hb.appendChild(S);}jsx3.sleep(function(){this.WU(x,ta);},null,this);}};q.WU=function(o,s){var
_=this.vD();if(o==null)o=this.getScrollTop();var
t=_?_.offsetHeight:0;if(t<o){this.setScrollTop(t);}else this.setScrollTop(o);this.setScrollLeft(s?s:0);this._Z(_);};q.h3=function(){var
O=this.getId();var
ba=this.Wl(true);var
M=((this.Wl(true)).lg(0)).ld();var
u=ba.lg(0);u.setAttributes(ub.ia+O+ub.Ta);var
Ka=u.lg(0);var
tb=Ka.lg(0);tb.setAttributes(ub.Ua);var
Z=tb.lg(0);var
z=[];var
S=this.oC();var
lb=this.sm();for(var
vb=0;vb<lb.length;vb++){lb[vb].pj({parentwidth:S[vb],parentheight:M},null);z.push(lb[vb].paint());}var
_=(u.paint()).join((Ka.paint()).join((tb.paint()).join((Z.paint()).join(z.join(ub.I)))+this.PV(lb)));return _;};q.repaintHead=function(){var
P=this.getDocument();var
Ta=P.getElementById(this.getId()+ub.Va);if(Ta){var
Lb=this.h3();pa.setOuterHTML(Ta,Lb);}};q.xm=function(e,h){var
Cb=(this.getServer()).getJSXById(h.id);var
Hb=Cb.getDisplayIndex();this.YM(Hb);if(e.leftButton()&&Hb>=this.getFixedColumnIndex(0)&&this.getCanReorder()!=0){gb.publish(e);var
za=ub.Wa+this.getId()+ub.Xa+parseInt(h.offsetWidth)+ub.Ya+pa.getOuterHTML(h)+ub.Za;var
Ba=(this.getRendered(e)).childNodes[0].childNodes[0];pa.insertAdjacentHTML(Ba,ub._a,za);var
qa=Ba.lastChild;var
Gb=this.oC();var
M=0;for(var
_a=0;_a<this.LK();_a++)M=M+Gb[_a];qa.style.left=M+ub.B;this._jsxi4=M;var
Za=this.a7();var
H=this.x8();var
t=this;var
Ra=(t.getRendered()).childNodes[3];var
Z=Ra.style.display!=ub.y;var
ua=this.getScrollLeft();var
qb=Ra.scrollWidth-Ra.clientWidth;La._beginMoveConstrained(e,qa,function(i,b){if(H>0&&Z){var
z=parseInt((i-ua)/Za*H);z=z>qb?qb:z;t.setScrollLeft(z);i=i+z-ua;}return [i,0];});gb.subscribe(ub.ha,this,ub.ab);}else if(e.rightButton()){var
vb=Cb.getMenu();if(vb){var
U=Cb.Pk(vb);if(U!=null){var
Wa={objEVENT:e,objMENU:U};var
Mb=Cb.doEvent(ub.bb,Wa);if(Mb!==false){if(Mb instanceof Object&&Mb.objMENU instanceof jsx3.gui.Menu)U=Mb.objMENU;U.showContextMenu(e,Cb);}}}}};q.Cw=function(k){jsx3.EventHelp.reset();gb.unsubscribe(ub.ha,this,ub.ab);var
ob=(this.getRendered(k.event)).childNodes[0].childNodes[0].lastChild;var
_=parseInt(ob.style.left);pa.removeNode(ob);var
Ka=this.sm();var
jb=Ka[this.LK()];if(_==this._jsxi4){if(this.getCanSort()!=0)this.Nh(k.event);}else if(this.getCanReorder()!=0){var
U=this.oC();var
wa=0;for(var
ca=0;ca<Ka.length;ca++){if(wa>=_){var
zb=Ka[ca];this.sC(k.event,jb,zb);return;}wa=wa+U[ca];}this.sC(k.event,jb,Ka[Ka.length-1],true);}};q.IV=function(l){return l.getSortPath();};q.QV=function(r){return r.getSortDataType();};q.Nh=function(e){var
I=this.sm();var
ba=I[this.LK()];if(ba&&ba.getCanSort()!=0&&this.getCanSort()!=0){this.sD();var
mb=this.IV(ba);var
ta=this.QV(ba);var
ua=this.doEvent(ub.cb,{objEVENT:e,objCOLUMN:ba,strSORTPATH:mb,strSORTTYPE:ta});if(ua!==false){if(ua!=null&&typeof ua==ub.H)if(ua.objCOLUMN!=null){ba=ua.objCOLUMN;mb=this.IV(ba);ta=this.QV(ba);}this.setSortPath(mb);this.setSortType(ta);this.doSort();this.doEvent(ub.db,{objEVENT:e,objCOLUMN:ba,strSORTPATH:mb,strSORTTYPE:ta,strDIRECTION:this.getSortDirection(),_gipp:1});}}};q.doSort=function(n){if(n){this.setSortDirection(n);}else this.setSortDirection(this.getSortDirection()==ub.h?ub.i:ub.h);var
Fa=this.getSortPath();var
Xa=this.sm();for(var
Ea=0;Ea<Xa.length;Ea++)Xa[Ea]._applySortIcon(Xa[Ea].getSortPath()==Fa);delete this[ub.eb];this.repaintData();};q.getSortPath=function(){return this.jsxsortpath==null?ub.I:this.jsxsortpath;};q.setSortPath=function(h){this.jsxsortpath=h;};q.getSortType=function(){return this.jsxsorttype==null?ub.fb:this.jsxsorttype;};q.setSortType=function(a){this.jsxsorttype=a;};q.getSortDirection=function(){return this.jsxsortdirection==null?ub.h:this.jsxsortdirection;};q.setSortDirection=function(r){this.jsxsortdirection=r;};q.getCanSort=function(){return this.jsxsort;};q.setCanSort=function(f){this.jsxsort=f;};q.sC=function(p,j,f,k){var
Ja=this.sm();var
ib=jsx3.util.arrIndexOf(Ja,j);var
Eb=jsx3.util.arrIndexOf(Ja,f);var
ua=this.getFixedColumnIndex(-1);var
db=j.getChildIndex();if(ib<=ua)return;if(Eb<ua)f=(this.sm())[ua];if(!f)return;var
fa=this.getScrollTop();var
N=this.getScrollLeft();var
eb=k?this.adoptChild(j,true)||1:this.insertBefore(j,f,true);jsx3.sleep(function(){this.WU(fa,N);},null,this);if(eb){var
t=j.getChildIndex();this.doEvent(ub.gb,{objEVENT:p,intOLDINDEX:db,intNEWINDEX:t,_gipp:1});}};q.adoptChild=function(s,f,h){this.jsxsuper(s,false,h);this.Bk();if(f!==false)this.repaint();};q.insertBefore=function(d,l,r){var
w=this.jsxsuper(d,l,false);if(w){this.Bk();if(r!=false)this.repaint();}return w;};q.getCanReorder=function(){return this.jsxreorder;};q.setCanReorder=function(a){this.jsxreorder=a;};q.focusRowById=function(n){this.focusCellByIndex(n,0);};q.focusCellById=function(g,i){if(this.getRenderingModel()==m.REND_HIER)this.revealRecord(g);var
qb=this.Fq(g,i);if(qb){pa.focus(qb);}else if(this.DJ(g))jsx3.sleep(function(){jsx3.sleep(function(){this.focusCellById(g,i);},ub.hb,this);},ub.hb,this);};q.focusCellByIndex=function(f,c){if(this.getRenderingModel()==m.REND_HIER)this.revealRecord(f);var
ib=this.jO(f,c);if(ib){pa.focus(ib);}else if(this.DJ(f))jsx3.sleep(function(){jsx3.sleep(function(){this.focusCellByIndex(f,c);},ub.hb,this);},ub.hb,this);};q.DJ=function(c){if(this.getPagingModel()==3){var
hb=this.getSortedIds();var
sa=hb.length;for(var
I=0;I<sa;I++)if(hb[I]==c){this.setScrollTop(this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*I);this._jsxDY=this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*I;(this.rS()).unshift({index:this.O3()});this.X1();return true;}}return false;};q.tu=function(j,c){this.dw(j,c,true);this._scrollIntoView(c);};q.W3=function(h,e){};q.getFocusStyle=function(s){return this.jsxfocusstyle?this.jsxfocusstyle:s?s:null;};q.setFocusStyle=function(b){delete this[ub.ib];this.jsxfocusstyle=b;};q.HU=function(i,j){if(typeof this._jsxX6!=ub.H)this._jsxX6=this.IP(this.getFocusStyle(m.FOCUS_STYLE));this.Z0(i,this._jsxX6,j);};q.IP=function(e){var
ja=ub.jb;var
_={};var
O=e.split(ub.kb);for(var
fb=0;fb<O.length;fb++){var
qa=O[fb]+ub.I;var
Ib=qa.split(ub.lb);if(Ib&&Ib.length==2){var
bb=Ib[0].replace(ja,function(s,r){return (r.substring(1)).toUpperCase();});_[bb]=Ib[1];}}return _;};q.Z0=function(o,f,b){if(b){for(var oa in f)o.style[oa]=f[oa];}else for(var oa in f)o.style[oa]=ub.I;};q.Y6=function(){return this._jsxcU;};q.LG=function(d){if(this._jsxcU!=d){var
qb=this.hL();if(qb)this.HU(qb,false);}this._jsxcU=d;};q.resetFocusContext=function(f){this.LG();};q.hL=function(){return (this.getDocument()).getElementById(this.Y6());};q.dw=function(k,b,f){this.Ko(k);var
xb=true;var
Xa=this.sm();var
M=Xa[b.cellIndex];var
da=M.getEditMasks();for(var
Ab=0;Ab<da.length;Ab++){var
Pa=da[Ab];if(m.ZJ(Pa,M))if(Pa.emGetType()!=m.EditMask.NORMAL){xb=false;break;}}if(!f&&xb)pa.focus(b);this.LG(b.id);this.HU(b,true);this._I(k,b);};q.Xj=function(p,i){this.Jm(p);};q.Jm=function(f,h){if(h==null)h=this.getSelectedIds();for(var
xa=0;xa<h.length;xa++){var
Gb=h[xa];var
kb=this.getRecordNode(Gb);if(this.Sf(kb,ub.mb)==ub.nb)continue;this.eval(this.Sf(kb,ub.ob),this._getEvtContext({strRECORDID:Gb}));}if(h.length)this.doEvent(ub.pb,{objEVENT:f,strRECORDID:h[0],strRECORDIDS:h});};q.executeRecord=function(j){var
x=this.getRecordNode(j);if(x)this.eval(this.Sf(x,ub.ob),this._getEvtContext({strRECORDID:j}));};q._I=function(o,k){var
Mb=this.getSelectionModel(1);var
Ea=this.sE(k);var
t=Ea.cell;var
E=t?t.cellIndex:null;var
xa=Ea.row;var
db=xa.getAttribute(ub.qb);var
ab=this.MQ()&&this.gJ(xa);if(!ab)if((this.I3()).ctrl){this.XK(db);if(this.isRecordSelected(db)){this.YH(o,db,null);}else this.SV(o,db,xa,true,E);}else if((this.I3()).shift){var
xb=this.uD();if(xb){this.SI(o,xa,E);}else{this.XK(db);this.SV(o,db,null,false,E);}}else{this.XK(db);if(!this.isRecordSelected(db))this.SV(o,db,null,false,E);}this.h9(o,t,(this.sm())[E],ab);delete this[ub.rb];};q.kL=function(){if(!this._jsxUY)this._jsxUY={bg:(this.getServer()).resolveURI(this.getSelectionBG(m.SELECTION_BG))};return this._jsxUY.bg;};q.getSelectionBG=function(b){return this.jsxselectionbg?this.jsxselectionbg:b?b:null;};q.setSelectionBG=function(o){delete this[ub.sb];this.jsxselectionbg=o;};q.XK=function(g){this._jsxuW=g;};q.uD=function(){return this._jsxuW;};q.X2=function(){return (this.getDocument()).getElementById(this.uD());};q.JI=function(e,l,i){i.push(e);var
ua=e.getParent();return !ua.equals(l)?this.JI(ua,l,i):i;};q.getSelectedNodes=function(){return (this.getXML()).selectNodes(ub.tb+this.hn(ub.ub)+ub.vb+this.hn(ub.wb)+ub.xb);};q.getSelectedIds=function(){var
kb=[];var
L=(this.getXML()).selectNodeIterator(ub.tb+this.hn(ub.ub)+ub.vb+this.hn(ub.wb)+ub.xb);while(L.hasNext()){var
t=L.next();kb[kb.length]=this.Sf(t,ub.yb);}return kb;};q.Ig=function(a){var
sa=this.getRecordNode(a);return sa&&this.Sf(sa,ub.mb)!=ub.nb;};q.isRecordSelected=function(r){var
ma=this.getRecordNode(r);return ma&&this.Sf(ma,ub.wb)==ub.nb;};q.selectRecord=function(k){if(this.getSelectionModel()==0)return;if(!this.Ig(k))return;this.SV(false,k,null,this.getSelectionModel()==2);};q.deselectRecord=function(a){this.YH(false,a,null);};q.deselectAllRecords=function(){var
Ra=this.getSelectedIds();var
L=Ra.length;for(var
wa=0;wa<L;wa++)this.YH(false,Ra[wa]);};q.SV=function(p,j,f,e,l){var
Xa=this.getSelectionModel(1);var
Ib=this.getRecordNode(j);var
I=e||p&&this.getCanDrag()==1;if(Xa==0||!Ib||this.Sf(Ib,ub.wb)==ub.nb&&I||this.Sf(Ib,ub.mb)==ub.nb)return false;var
B=e&&Xa==2;if(!B)this.deselectAllRecords();this.Sf(Ib,ub.wb,ub.nb);f=f||this.jS(j);if(f!=null){var
M=ub.zb+this.kL()+ub._;for(var
Eb=0;Eb<f.childNodes.length;Eb++)f.childNodes[Eb].style.backgroundImage=M;}this.gE(p,j,l);return true;};q.YH=function(o,k,e){var
ba=this.getRecordNode(k);if(!ba||this.Sf(ba,ub.wb)!=ub.nb)return false;this.Sf(ba,ub.wb,null);e=e||this.jS(k);if(e!=null&&e.childNodes){e.style.backgroundImage=ub.I;for(var
hb=0;hb<e.childNodes.length;hb++)e.childNodes[hb].style.backgroundImage=ub.I;}this.gE(o);return true;};q.SI=function(s,l,a){if(!l)return;var
Z=this.uD();var
zb=l.getAttribute(ub.qb);if(!this.Ig(Z)||!this.Ig(zb))return;var
hb=this.getSelectedIds();var
va=hb.length;for(var
Lb=0;Lb<va;Lb++)this.YH(false,hb[Lb],this.jS(hb[Lb]));hb=this.getSortedIds();var
lb=new
jsx3.util.List(hb);var
Aa=lb.indexOf(Z);var
Ua=lb.indexOf(zb);var
aa=Math.min(Aa,Ua);var
B=Math.max(Aa,Ua);var
_a=hb.length;var
Gb=0;for(var
Lb=aa;Lb<=B;Lb++)this.SV(false,hb[Lb],this.jS(hb[Lb]),true,a);this.gE(s,zb,a);};q.gE=function(i,g,j){if(i&&i instanceof gb){this.doEvent(ub.Ab,{objEVENT:i,strRECORDID:g,strRECORDIDS:this.getSelectedIds(),objCOLUMN:j!=null?(this.sm())[j]:null,_gipp:1});this.doEvent(ub.Bb,{objEVENT:i});}};q.h9=function(f,a,h,l){var
Ib=h.getEditMask();if(Ib!=null){var
u,_a;if(l){var
t=this.jW();_a=t[h.getPath()];u=ub.Cb;}else{u=a.parentNode.getAttribute(ub.qb);_a=h.getValueForRecord(u);}var
Ja=this.getRendered(a);var
B=this.vD();var
qb=Ib.emGetType()==m.EditMask.NORMAL||Ib.emGetType()==m.EditMask.DIALOG;if(qb){var
qa=this.doEvent(ub.Db,{objEVENT:f,strRECORDID:u,objCOLUMN:h});if(qa===false)return;if(qa!=null&&typeof qa==ub.H)if(typeof qa.objMASK!=ub.Eb)Ib=qa.objMASK;}var
L=pa.getRelativePosition(B,a);var
xa=pa.getRelativePosition(Ja,Ja);xa.W-=parseInt(B.style.left);xa.H-=parseInt(B.style.top);var
Ka=this._jsxOM;if(Ka&&Ka.mask&&Ka.mask.emGetSession())this.endEditSession();if(Ib.cB(_a,L,xa,this,h,u,a)){this._jsxOM={mask:Ib,column:h,recordId:u,value:_a};gb.subscribeLoseFocus(this,(this.getRendered(a)).childNodes[1],ub.Fb);}}};q.getAutoRowSession=function(){return this.jW();};q.jW=function(){if(!this._jsxyP){this._jsxyP={jsxid:jsx3.xml.CDF.getKey()};this._jsxVK={jsxid:this._jsxyP.jsxid};}return this._jsxyP;};q.Tu=function(){if(this._jsxyP)for(var Pa in this._jsxyP)if(this._jsxVK[Pa]!=this._jsxyP[Pa]&&!(jsx3.util.strEmpty(this._jsxyP[Pa])&&jsx3.util.strEmpty(this._jsxVK[Pa])))return true;return false;};q.qx=function(h){var
Za=this.jW();Za[h.column.getPath()]=h.newvalue;};q.NP=function(s,i){if(i!==false)this.Ko(s);var
ob=this.jW();if(ob!=null&&!jsx3.util.strEmpty(ob.jsxid)){delete this[ub.Gb];var
Xa;if(s)Xa=this.doEvent(ub.Hb,{objEVENT:s,objRECORD:ob});if(Xa!==false){var
ba=this.insertRecord(ob,this.getRenderingContext(ub.Ib),true);if(s)this.doEvent(ub.Jb,{objEVENT:s,objRECORDNODE:ba,_gipp:1});}var
_={jsxid:ub.Cb};this.insertRecord(_,null,false);this.redrawRecord(ub.Cb,2);this.deleteRecord(ub.Cb,false);}};q.commitAutoRowSession=function(p,e){this.NP(p,false);if(!isNaN(e)){var
sb=this.jS(ub.Cb);if(sb&&sb.childNodes[+e])pa.focus(sb.childNodes[+e]);}};q.JM=function(){delete this[ub.Gb];};q.gJ=function(s){if(!s)return false;if(s.getAttribute(ub.qb)!=ub.Cb)return false;var
Wa=s.parentNode;if(Wa.tagName.toLowerCase()!=ub.C)Wa=Wa.parentNode;return Wa.getAttribute(ub.Cb)==ub.Kb;};q.Ko=function(h,i){var
ba=this._jsxOM;if(ba!=null){if(!i){delete this[ub.Lb];gb.unsubscribeLoseFocus(this);}var
Kb=i?ba.mask.emGetValue():ba.mask.DW();var
Eb=ba.recordId==ub.Cb&&this.MQ()&&this.gJ(this.jS(ub.Cb));var
L=true;if(h&&Eb){var
D=this.jS(ub.Cb);L=pa.findElementUp(h.srcElement(),function(p){return p==D;},true)==null;}if(!(L&&Eb&&this.Tu()))if(ba.value===Kb)return;var
ea=ba.mask.emGetType()==m.EditMask.NORMAL||ba.mask.emGetType()==m.EditMask.DIALOG;var
t=true;if(ea){if(h!=null)t=this.doEvent(ub.Mb,{objEVENT:h,strRECORDID:ba.recordId,objCOLUMN:ba.column,strNEWVALUE:Kb});if(t!=null&&typeof t==ub.H)if(typeof t.strNEWVALUE!=ub.Eb)Kb=t.strNEWVALUE;var
Ea=ba.column.getPath()==ub.qb;if(Ea&&this.getRecordNode(Kb))t=false;if(t!==false){if(i)ba.value=Kb;if(Eb){ba.newvalue=Kb;this.qx(ba);var
mb=this.jW();var
Q={};for(var yb in mb)Q[yb]=mb[yb];Q.jsxid=ub.Cb;this.insertRecord(Q,null,false);this.redrawCell(ub.Cb,ba.column);this.deleteRecord(ub.Cb,false);if(L&&!i&&this.Tu())this.NP(h,false);}else if(Ea){this.insertRecordProperty(ba.recordId,ub.qb,Kb,false);this.redrawCell(Kb,ba.column);}else{ba.column.setValueForRecord(ba.recordId,Kb);this.redrawCell(ba.recordId,ba.column);}}}if(h!=null&&t!==false)this.doEvent(ub.Nb,{objEVENT:h,strRECORDID:ba.recordId,objCOLUMN:ba.column,strVALUE:Kb,_gipp:1});}};q.endEditSession=function(r){this.Ko(r);};q.collapseEditSession=function(j,o){var
Kb=this._jsxOM;if(Kb!=null){Kb.mask.emCollapseEdit(j);this.endEditSession(j);pa.focus(o);}};q.tH=function(a){var
ea=a.event.srcElement();var
B=this._jsxOM;if(B&&!B.f1&&!B.mask.containsHtmlElement(ea))this.Ko(a.event);};m.ZJ=function(d,p){if(d._jsxkO)return true;if(d.instanceOf(jsx3.gui.Form)){m.EditMask.jsxclass.mixin(d,true);}else if(jsx3.gui.Dialog&&d instanceof jsx3.gui.Dialog){m.DialogMask.jsxclass.mixin(d,false);m.BlockMask.jsxclass.mixin(d,true);m.EditMask.jsxclass.mixin(d,true);}else if(d instanceof Ya){m.BlockMask.jsxclass.mixin(d,true);m.EditMask.jsxclass.mixin(d,true);}else return false;d.emInit(p);d._jsxkO=true;return true;};q.nj=function(a,l){a.cancelBubble();gb.publish(a);var
ca=a.srcElement();var
Ja=this.sE(ca);var
ja=ca.getAttribute(ub.Ob);if(ja==ub.Pb||ja==ub.Qb){this.P5(a,ca);}else while(ca&&ca!=l){if(ca.getAttribute(ub.Ob)==ub.Rb)if(!jsx3.gui.isMouseEventModKey(a)&&!a.shiftKey()){var
Ta=Ja.row.getAttribute(ub.qb);var
R=this.getSelectedIds();var
va=R.length==1&&Ta==R[0]?false:a;this.deselectAllRecords();this.SV(va,Ta,Ja.row,false,Ja.cell?Ja.cell.cellIndex:null);return;}ca=ca.parentNode;}};q.P5=function(o,k,c){var
fa=this.DC(k);var
Ib=(this.mI(fa.previousSibling)).getAttribute(ub.qb);var
yb=this.getRecordNode(Ib);if(!yb.selectSingleNode(ub.Sb+this.hn(ub.ub)))return;if(c==null)c=false;if(k.nodeType==3)k=k.parentNode;var
J=k.getAttribute(ub.Ob);if(fa.style.display==ub.y||c){c=true;this.Sf(yb,ub.Tb,ub.nb);fa.style.display=ub.I;if(this.getRenderNavigators(1)!=0)k.style.backgroundImage=ub.zb+(this.getUriResolver()).resolveURI(this.getIconMinus(m.ICON_MINUS))+ub._;if(this.GZ(fa)){Qa.trace(ub.Ub+Ib);var
la={};la.jsx_panel_css=ub.Vb;la.jsx_column_widths=this.x8();la.jsx_rendering_context=Ib;la.jsx_context_index=fa.getAttribute(ub.Wb);fa.innerHTML=this.doTransform(la);if(this.getRenderNavigators(1)!=0)k.setAttribute(ub.Ob,ub.Pb);var
eb={painted:1,token:m.getToken(),contextnodes:fa.childNodes};(this.ox())[0]=eb;this.iB(eb);}}else{this.Sf(yb,ub.Tb,null);fa.style.display=ub.y;if(this.getRenderNavigators(1)!=0)k.style.backgroundImage=ub.zb+(this.getUriResolver()).resolveURI(this.getIconPlus(m.ICON_PLUS))+ub._;}this._Z();if(o)this.doEvent(ub.Xb,{objEVENT:o,strRECORDID:Ib,objRECORD:yb,bOPEN:c,_gipp:1});};q.toggleItem=function(e,i){var
wa=this.jO(e,0);if(wa!=null){while(wa&&wa.getAttribute&&wa.getAttribute(ub.Ob)!=ub.Pb&&wa.getAttribute(ub.Ob)!=ub.Qb)wa=wa.childNodes[0];this.P5(false,wa,i);}};q.revealRecord=function(c){var
ha=this.getRecordNode(c);if(ha){if(this.getRenderingModel()==m.REND_HIER){var
t=[];do
t.push(this.Sf(ha,ub.yb));while((ha=ha.getParent())!=null&&ha.getParent());for(var
Ba=t.length-1;Ba>=0;Ba--)this.toggleItem(t[Ba],true);}this.synchronizeVScroller();var
aa=this.jO(c,0);if(aa){this._scrollIntoView(aa);}else if(this.DJ(c))jsx3.sleep(function(){jsx3.sleep(function(){var
aa=this.jO(c,0);if(aa)this._scrollIntoView(aa);},ub.Yb,this);},ub.Yb,this);}};q.DC=function(i){while(!i.tagName||i&&i.tagName&&i.tagName.toLowerCase()!=ub.C||i.id==ub.I)i=i.parentNode;return i.nextSibling;};q.getDragIcon=function(l,o,n,a){var
ja=jsx3.EventHelp.DRAGIDS;var
Z=ub.I;var
M=l.id;var
R=0.4;var
Ab=l.getAttribute(ub.qb);if(o.Ig(Ab)&&jsx3.util.arrIndexOf(ja,Ab)==-1)ja.push(Ab);for(var
da=0;da<ja.length&&da<4;da++){var
Y=o.jS(ja[da]);if(Y)Z=Z+o.iE(Y,R);R=R-0.1;}return Z;};q.iE=function(l,g){var
qb=l;while(qb.tagName.toLowerCase()!=ub.C)qb=qb.parentNode;return ub.Zb+pa.getCSSOpacity(g)+ub._b+ub.ac+qb.getAttribute(ub.bc)+ub.cc+qb.getAttribute(ub.dc)+ub._b+ub.ec+l.getAttribute(ub.bc)+ub.cc+l.getAttribute(ub.dc)+ub._b+l.innerHTML+ub.fc;};if(jsx3.CLASS_LOADER.IE)q.HZ=function(i,d){var
Bb=i.srcElement();var
fa=this.getSelectionModel()!=0;if(fa&&!(Bb&&Bb.tagName.search(ub.gc)==0))i.cancelAll();};q.Fo=function(h,e){var
u=true;this.ZI(h);if(h.leftButton()){var
qa=h.srcElement();var
ba=this.sE(qa);if(ba==null)return;if(ba){e=ba.cell;if(this.Y6()!=e.id){pa.focus(e);}else{this.e6();this.dw(h,e);}if(this.getCanDrag()==1&&this.getSelectionModel(1)>0){var
Sa=this.getSelectedIds();var
Pa=ba.row.getAttribute(ub.qb);var
Ib=jsx3.util.List.wrap(Sa);if(Ib.indexOf(Pa)==-1)Sa=[Pa];if(this.Ig(Pa)&&jsx3.util.arrIndexOf(Sa,Pa)==-1)Sa.push(Pa);this.doDrag(h,ba.row,this.getDragIcon,{strDRAGIDS:Sa});u=true;}else u=this._jsxOM!=null;}}if(u){gb.publish(h);h.cancelAll();}};q.Ri=function(l,a){var
db=l.toElement();if(!db)return;var
H=db.getAttribute(ub.Ob);var
nb=this.sE(db);if(!nb)return;var
t=nb.row.getAttribute(ub.qb);a=this.op(nb.row);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null){if(H==ub.Pb&&this.Sf(this.getRecordNode(t),ub.Tb)!=ub.nb||H==ub.Qb){var
_=this;l.yh();m.TOGGLETIMEOUT=window.setTimeout(function(){if(_.getParent()!=null)_.P5(l,db);},m.YJ);}var
C=this.doEvent(ub.hc,{objEVENT:l,strRECORDID:t,objSOURCE:jsx3.EventHelp.getDragSource(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),objGUI:a});if(!(C===false)){var
Ab=this.getRendered(l);var
jb=this.getAbsolutePosition(Ab,nb.row);var
ka=this.yR(Ab);var
Fb=this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0?parseInt(nb.row.childNodes[0].childNodes[0].childNodes[0].getAttribute(ub.E)):4;if(this.getRenderingModel()!=m.REND_HIER||jb.H/3>l.getOffsetY()){ka.style.top=jb.T-4+ub.B;ka.style.width=this.a7()-Fb-8+ub.B;ka.style.height=ub.ic;ka.style.backgroundImage=ub.zb+m.INSERT_BEFORE_IMG+ub._;ka.setAttribute(ub.jc,ub.kc);}else{Fb=Fb+26;ka.style.width=ub.lc;ka.style.height=ub.lc;ka.style.top=jb.T-10+jb.H+ub.B;ka.style.backgroundImage=ub.zb+m.APPEND_IMG+ub._;ka.setAttribute(ub.jc,ub.mc);}ka.style.left=Fb+ub.B;ka.setAttribute(ub.nc,t);ka.style.display=ub.z;}}else if(this.getEvent(ub.oc)){this.applySpyStyle(db);var
Da=l.clientX()+jsx3.EventHelp.DEFAULTSPYLEFTOFFSET;var
rb=l.clientY()+jsx3.EventHelp.DEFAULTSPYTOPOFFSET;l.yh();var
_=this;var
X=(this.sm())[nb.cell.cellIndex];if(m.SPYTIMEOUT)window.clearTimeout(m.SPYTIMEOUT);m.SPYTIMEOUT=window.setTimeout(function(){m.SPYTIMEOUT=null;if(_.getParent()!=null)_.Az(l,t,X,db);},jsx3.EventHelp.SPYDELAY);}};q.Az=function(l,n,s,f){this.removeSpyStyle(f);var
tb=this.doEvent(ub.oc,{objEVENT:l,objCOLUMN:s,strRECORDID:n});if(tb)this.showSpy(tb,l);};q.FR=function(d,i){this.qP(i.parentNode);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null){var
vb=this;this._jsxMK={offsety:d.getOffsetY(),offsetheight:i.offsetHeight,scrollheight:i.scrollHeight};this._jsxMK.interval=window.setInterval(function(){vb.iw();},m.AUTO_SCROLL_INTERVAL);}};q.iw=function(){if(this._jsxMK.offsety<this._jsxMK.offsetheight/2){if(this.getScrollTop()>0)this.setScrollTop(this.getScrollTop()-20);}else if(this.getScrollTop()<this._jsxMK.scrollheight)this.setScrollTop(this.getScrollTop()+20);};q.gN=function(s,j){if(this._jsxMK){window.clearInterval(this._jsxMK.interval);delete this[ub.pc];}};q.au=function(e,h){if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1&&(jsx3.EventHelp.getDragIds())[0]!=null&&this._jsxMK){this._jsxMK.offsety=e.getOffsetY();this._jsxMK.offsetheight=h.offsetHeight;this._jsxMK.scrollheight=h.scrollHeight;}};q._ebMouseOutDropIcon=function(h,e){if(!h.isFakeOut(e.parentNode.childNodes[1]))this.qP(e.parentNode);};q.Uc=function(e,s){var
Ib=e.fromElement();if(e.isFakeOut(s))this.qP(s.parentNode);if(!jsx3.EventHelp.isDragging()&&this.getEvent(ub.oc)){var
R=e.toElement();var
C=false;try{C=!R||R.className!=ub.qc;}catch(Kb){C=true;}if(C){jsx3.sleep(La.hideSpy);this.removeSpyStyle(Ib);if(m.SPYTIMEOUT)window.clearTimeout(m.SPYTIMEOUT);}}if(Ib==null||e.isFakeOut(s.parentNode)&&Ib.getAttribute(ub.Ob)!=ub.Pb)return;var
Z=Ib.getAttribute(ub.Ob);var
ja=this.sE(Ib);if(!ja)return;var
Sa=ja.row.getAttribute(ub.qb);s=this.op(ja.row);if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1){if(Z==ub.Pb)window.clearTimeout(m.TOGGLETIMEOUT);var
fb=this.doEvent(ub.rc,{objEVENT:e,strRECORDID:Sa,objSOURCE:jsx3.EventHelp.getDragSource(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),objGUI:s});this.qP(this.getRendered(e));}};q.sE=function(p){var
v=p;var
Ka=null;while(v&&v.getAttribute(ub.Ob)!=ub.Rb){Ka=v;v=v.parentNode;if(!v||!v.tagName||v.tagName.toLowerCase()==ub.sc||v.id==this.getId())return null;}return {row:v,cell:Ka};};q.op=function(j){if(this.getRenderingModel()==ub.tc){j=(this.DC(j)).parentNode;}else if(this.getPagingModel(0)!=3)while(j.tagName.toLowerCase()!=ub.C)j=j.parentNode;return j;};q.yo=function(f,g){};q.ae=function(i,d){var
Ea=i.getWheelDelta();var
ob=this.vD();var
Ga=this.getScrollTop();Ga=Math.max(0,Math.min(Ga-Ea*m.SCROLL_INC,ob.offsetHeight));this.collapseEditSession(i,d);this.setScrollTop(Ga,d);i.cancelAll();};q._isDescendantOrSelf=function(h,g){while(h&&g){if(h.equals(g))return true;h=h.getParent();}return false;};q._onMouseUp=function(h,e){var
Ka=h.srcElement()&&(h.srcElement()).className==ub.uc?(this.jS((h.srcElement()).getAttribute(ub.nc))).childNodes[0]:h.srcElement();var
z=this.sE(Ka);if(this.getCanDrop()==1&&jsx3.EventHelp.isDragging()){if(jsx3.EventHelp.getDragType()==ub.vc){jsx3.sleep(function(){this.qP();},null,this);var
Lb=jsx3.EventHelp.getDragSource();if(Lb&&Lb.instanceOf(jsx3.xml.CDF)){var
Z=jsx3.gui.isMouseEventModKey(h);var
F=Lb.doEvent(ub.wc,{objEVENT:h,strRECORDID:jsx3.EventHelp.getDragId(),strRECORDIDS:jsx3.EventHelp.getDragIds(),objTARGET:this,bCONTROL:Z});var
la=this.yR(this.getRendered(h));var
Ta=la.getAttribute(ub.jc)==ub.kc;var
U=z?z.row.getAttribute(ub.qb):null;var
ta={objEVENT:h,objSOURCE:Lb,strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:jsx3.EventHelp.getDragType(),strDRAGID:jsx3.EventHelp.getDragId(),strRECORDID:U,bINSERTBEFORE:Ta,objCOLUMN:z!=null?(this.sm())[z.cell.cellIndex]:null,bALLOWADOPT:F!==false};var
Da=this.doEvent(Z?ub.xc:ub.yc,ta);if(F!==false&&Da!==false){var
Y=jsx3.EventHelp.getDragIds();var
Ab=z?this.getRecordNode(z.row.getAttribute(ub.qb)):null;for(var
Sa=0;Sa<Y.length;Sa++){var
t=Lb.getRecordNode(Y[Sa]);if(Ab&&Ab.equals(t)&&Ta&&Ab.getNextSibling()){Ab=Ab.getNextSibling();U=this.Sf(Ab,ub.yb);}if(!(this==Lb&&z&&this._isDescendantOrSelf(Ab,t))){Lb.deleteRecordProperty(Y[Sa],ub.zc,false);var
Ea;if(Ta){Ea=true;var
zb=this.adoptRecordBefore(Lb,Y[Sa],U);}else{Ea=z!=null;var
Ja;if(this.getRenderingModel()==m.REND_HIER&&z){Ja=z.row.getAttribute(ub.qb);}else Ja=this.getRenderingContext();var
zb=this.adoptRecord(Lb,Y[Sa],Ja,z!=null);}}}if(!Ea&&!z)this.repaint();}}}jsx3.EventHelp.reset();}else if(h.rightButton()){var
Aa=this.getMenu();if(Aa){var
qa=this.Pk(Aa);if(qa!=null){var
Hb,ab;if(z){Hb=(this.sm())[z.cell.cellIndex];ab=z.row.getAttribute(ub.qb);}var
R={objEVENT:h,objMENU:qa,strRECORDID:ab,objCOLUMN:Hb};var
Va=this.doEvent(ub.bb,R);if(Va!==false){if(Va instanceof Object&&Va.objMENU instanceof jsx3.gui.Menu)qa=Va.objMENU;qa.showContextMenu(h,this,ab);}}}}};q.ZI=function(o){this._jsxhU={ctrl:jsx3.gui.isMouseEventModKey(o),shift:o.shiftKey(),alt:o.altKey()};};q.I3=function(){return this._jsxhU!=null?this._jsxhU:{};};q._ebKeyDown=function(h,e){if(this.jsxsupermix(h,e))return;var
E=h.keyCode();var
Na=h.hasModifier(true);var
F=E==9&&!Na;var
db=this.getSelectionModel(1);this.ZI(h);if(this.Y6()==null){var
Kb=this.qt();if(Kb){this.LG(Kb.id);}else return;}var
tb=this.hL();var
w=h.srcElement();var
K=w&&w.id==this.getId()+ub.Ac;var
wa=this.MQ()&&tb&&this.gJ(tb.parentNode);var
v=false;if(wa&&(E==13||E==40||E==38||tb.parentNode.lastChild==tb&&(F&&!h.shiftKey()||E==39)||tb.parentNode.firstChild==tb&&(F&&h.shiftKey()||E==37))){var
Ma=tb.cellIndex;if(E==13){this.Ko(h);var
ib=tb.parentNode;if(!ib)ib=this.jS(ub.Cb);if(ib&&ib.childNodes[Ma])pa.focus(ib.childNodes[Ma]);}else if(this.MQ()==2&&E==40){var
Cb=this.nI();if(Cb){var
eb=this.mI(Cb);if(eb)pa.focus(eb.childNodes[Ma]);}}else if(this.MQ()==1&&E==38){var
Cb=this.gS();if(Cb){var
eb=this.uL(Cb);if(eb)pa.focus(eb.childNodes[Ma]);}}else if(tb.parentNode.lastChild==tb&&(F&&!h.shiftKey()||E==39)){pa.focus(tb.parentNode.firstChild);}else if(tb.parentNode.firstChild==tb&&(F&&h.shiftKey()||E==37))pa.focus(tb.parentNode.lastChild);v=true;}else if(tb){var
Ma=tb.cellIndex;var
aa=tb.parentNode.getAttribute(ub.qb);if(E==38||E==13&&h.shiftKey()){var
ma=this.P2(ub.Bc,tb,true,Ma);v=this.G6(ma);}else if(E==40||E==13&&!h.shiftKey()&&db==0){var
ma=this.P2(ub.Cc,tb,true,Ma);v=this.G6(ma);}else if(E==37||F&&h.shiftKey()){if(this.getRenderingModel()==m.REND_HIER&&Ma==0&&this.getSuppressVScroller()!=1){var
ja=tb.parentNode.getAttribute(ub.qb);var
xa=this.getRecordNode(ja);var
yb=this.Sf(xa,ub.Tb);if(yb==1&&xa.selectSingleNode(this.hn(ub.ub))){var
Ra=this.tX(tb);this.P5(h,Ra,false);v=true;}else{var
ma=this.P2(ub.Dc,tb,true,Ma);v=this.G6(ma);}}if(!v&&!K){var
ma=this.P2(ub.Dc,tb,true,Ma);if(ma!=tb)v=this.G6(ma);}}else if(E==39||F&&!h.shiftKey()){if(this.getRenderingModel()==m.REND_HIER&&Ma==0&&this.getSuppressVScroller()!=1){var
ja=tb.parentNode.getAttribute(ub.qb);var
xa=this.getRecordNode(ja);var
yb=this.Sf(xa,ub.Tb);if(yb!=1&&(this.Sf(xa,ub.Ec)==ub.nb||xa.selectSingleNode(this.hn(ub.ub)))){var
Ra=this.tX(tb);this.P5(h,Ra,true);v=true;}else{var
ma=this.P2(ub.Fc,tb,true,Ma);v=this.G6(ma);}}if(!v&&!K){var
ma=this.P2(ub.Fc,tb,true,Ma);if(ma!=tb)v=this.G6(ma);}}else if(E==13){this.Jm(h);v=true;}else if(E==27){jsx3.log(ub.Gc+this);this.collapseEditSession(h,e);this.focus();v=true;}}if(!v&&F)pa[h.shiftKey()?ub.Hc:ub.Ic](this.getRendered(h),h);if(v)h.cancelAll();};q.focus=function(){var
Bb=this.getRendered();if(Bb)jsx3.html.focus(Bb.ownerDocument.getElementById(this.getId()+ub.Ac));};q.G6=function(d){if(d){jsx3.sleep(function(){try{pa.focus(d);}catch(Kb){}});return true;}};q.tX=function(i){var
Fa=i.childNodes[0].childNodes[0];var
T=this.mI(Fa);if(T)return T.childNodes[0];};q.nz=function(){return this._jsxP9;};q.e6=function(h){this._jsxP9=h;};q.P2=function(p,j,i,s){var
ca=this.getSelectionModel(1);if(p==ub.Fc){this.e6();if(j.parentNode.lastChild!=j){return j.nextSibling;}else if(j.parentNode.lastChild==j&&ca>0){return j.parentNode.firstChild;}else{p=ub.Cc;j=j.parentNode.firstChild;s=0;}}else if(p==ub.Dc){this.e6();if(j.parentNode.firstChild!=j){return j.previousSibling;}else if(j.parentNode.firstChild==j&&ca>0){return j.parentNode.lastChild;}else{p=ub.Bc;j=j.parentNode.lastChild;s=j.cellIndex;}}var
xb=this.AL(p,j.parentNode,i);if(xb){if(this.nz()&&(p==ub.Bc||p==ub.Cc)&&xb.childNodes.length>1){s=this.nz();this.e6();}var
Ra=xb.childNodes[s];if(Ra){return Ra;}else{this.e6(s);return xb.childNodes[0];}}else return null;};q.AL=function(a,i,b){if(a==ub.Dc)a=ub.Bc;else if(a==ub.Fc)a=ub.Cc;if(this.getRenderingModel()==m.REND_HIER)return this.XZ(a,i);if(a==ub.Bc&&i.previousSibling&&i.previousSibling.tagName.toLowerCase()!=ub.Jc){return i.previousSibling;}else if(a==ub.Cc&&i.nextSibling){return i.nextSibling;}else{var
O=this.F7(this.kw(i));var
tb;var
sa=this.getRenderingModel()==m.REND_HIER?this.vR():(this.ox()).length;if(a==ub.Bc&&O==0||a==ub.Cc&&O==sa-1){if(a==ub.Bc&&this.MQ()==2||a==ub.Cc&&this.MQ()==1)return this.mI(this.mQ());else return null;}else if(a==ub.Bc&&(tb=this.lx(O-1))!=null){var
R=this.getRenderingModel()==m.REND_HIER?1:this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL);return this.uL(tb);}else if(a==ub.Cc&&(tb=this.lx(O+1))!=null)return this.mI(tb);}return null;};q.XZ=function(f,l){var
ea=l;if(f==ub.Bc){while(ea.tagName.toLowerCase()!=ub.C)ea=ea.parentNode;var
ma=this.zu(ea.parentNode.previousSibling);if(ma)return ma;var
L=ea.parentNode.parentNode.previousSibling;return this.mI(L);}else if(f==ub.Cc){while(ea.tagName.toLowerCase()!=ub.C)ea=ea.parentNode;var
Y=ea.nextSibling;if(Y&&Y.style.display.toLowerCase()!=ub.y){var
Pa=Y.childNodes[0].childNodes[0];return this.mI(Pa);}Y=ea.parentNode.nextSibling;if(Y){var
Pa=Y.childNodes[0];return this.mI(Pa);}return this.f4(ea.parentNode);}return null;};q.zu=function(f){if(f){var
pb=f.childNodes[1];if(pb&&pb.style.display.toLowerCase()!=ub.y&&pb.childNodes.length){var
rb=pb.lastChild;pb=rb.childNodes[1];if(pb&&pb.style.display.toLowerCase()!=ub.y&&pb.childNodes.length){return this.zu(rb);}else return this.mI(rb.childNodes[0]);}return this.mI(f.childNodes[0]);}return null;};q.f4=function(j){var
fb=j.parentNode.parentNode.nextSibling;if(fb){return this.mI(fb.childNodes[0]);}else{var
rb=j.parentNode.parentNode;if(rb)return this.f4(rb);}return null;};q._scrollIntoView=function(h){var
S=this.getRendered(h);if(S){var
y=pa.getRelativePosition(this.vD(S),h);var
J=this.getScrollTop();var
ca=y.T;var
Kb=Ha.getScrollSize();var
Bb=S.childNodes[3].style.display==ub.y?0:Kb;var
Xa=parseInt(((this.Wl(true)).lg(1)).ld()-Bb+1);if(!(ca>J&&ca+y.H<J+Xa)){var
ia=Math.abs(ca-J);var
Jb=Math.abs(ca-(J+Xa)+y.H+1);if(Jb<ia){if(Jb==0)Jb=y.H;this.setScrollTop(J+Jb);}else this.setScrollTop(ca-(Kb+1));}if(this.getScaleWidth()!=1){var
ma=this.getScrollLeft();var
Db=y.L;var
I=parseInt(((this.Wl(true)).lg(1)).ee()-Kb+1);if(!(Db>ma&&Db+y.W<ma+(I-(Kb+1)))){var
z=Math.abs(Db-ma);var
sb=Math.abs(Db-(ma+I));if(sb<z){this.setScrollLeft(Db);}else this.setScrollLeft(Db-(Kb+1));}}}};q.PV=function(b){var
Y=[];var
O=0;var
J=(this.Wl()).lg(0);var
v=J.ld();var
Q=this.oC();for(var
wa=0;wa<b.length;wa++){var
vb=b[wa].Wl();O=O+vb.getOffsetWidth();var
X=this.getResizable()!=0&&wa<b.length-1&&b[wa].getResizable()!=0;if(X){var
I=this.Fg(ub.fa,ub.Kc,3)+this.Fg(ub.da,ub.Lc,3);var
ab=ub.I;}else{var
I=ub.I;var
ab=ub.Mc;}Y.push(ub.Nc+wa+ub.Oc+(O-4)+ub.Pc+ab+ub.Qc+4+ub.Rc+Ya.SPACE+ub.Sc+v+ub.Tc+I+ub.Na);}return Y.join(ub.I);};q.dq=function(r,s){if(!r.leftButton())return;gb.publish(r);this.collapseEditSession(r,s);var
la=jsx3.util.arrIndexOf(this.getDescendantsOfType(Ca,true),(this.sm())[Number(s.getAttribute(ub.Uc))]);this.YM(la);if(typeof this._jsxZ2==ub.H&&(new
Date()).valueOf()-this._jsxZ2.timestamp<200)return;var
Jb=this.doEvent(ub.Vc,{objEVENT:r,intCOLUMNINDEX:la});if(!(Jb===false)){var
R=this.WQ();var
Ab=parseInt(s.style.left)-this.getScrollLeft();this._jsxresizeorigin={origin:Ab};R.style.left=Ab+ub.B;La._beginMoveConstrained(r,R,function(k,j){return [k,0];});gb.subscribe(ub.ha,this,ub.Wc);}this._jsxZ2={timestamp:(new
Date()).valueOf()};r.cancelAll();};q.vG=function(h,c){if(!h.leftButton())return;gb.publish(h);var
Ba=this.LK(Ba);var
vb=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var
y=this.getChild(this.LK());var
U=y.getPath();var
qb=0;var
R=this.getXML();var
Cb=R.selectNodeIterator(ub.tb+this.hn(ub.ub));while(Cb.hasNext()){var
D=Cb.next();qb=Math.max((D.getAttribute(U)).length,qb);}var
qa=vb*qb;(this.getChild(this.LK())).setWidth(qa,true);this.WU();h.cancelAll();};q.LK=function(){return this._jsxp4;};q.YM=function(n){this._jsxp4=n;};q.WQ=function(){return (this.getRendered()).childNodes[6];};q.yR=function(n){if(!n)n=this.getRendered();return n.childNodes[7];};q.qP=function(h){var
tb=this.yR(h);tb.style.display=ub.y;tb.removeAttribute(ub.jc);tb.removeAttribute(ub.nc);};q.Xy=function(j){jsx3.EventHelp.reset();gb.unsubscribe(ub.ha,this,ub.Wc);if(parseInt((this.WQ()).style.left)!=this._jsxresizeorigin.origin){var
ib=this.vw();var
qa=this.LK();var
Db=this.doEvent(ub.Xc,{objEVENT:j.event,vntWIDTH:ib,intCOLUMNINDEX:qa,_gipp:1});if(!(Db===false))(this.getChild(this.LK())).setWidth(ib,true);this.WU();}(this.WQ()).style.left=ub.Yc;};q.vw=function(){var
Fa=this.WQ();var
la=parseInt(Fa.style.left);var
C=this.sm();var
z=this.oC();var
S=(this.getChild(this.LK())).getDisplayIndex();for(var
Hb=0;Hb<S;Hb++)la=la-z[Hb];la=la+this.getScrollLeft();return la<8?8:la;};q.getResizable=function(){return this.jsxresize;};q.setResizable=function(g){this.jsxresize=g;};q.nx=function(){this.sD();var
mb=Math.max(1,Math.ceil(this.vR(true)/this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL)));this.OO(new
Array(mb));};q.Pp=function(j,h){if(this.getParent()==null)return;this.JM();this.endEditSession();this.e6();this.XK();this.LG();this.nx();var
Lb=(this.ox()).length;var
Ma=this.getPagingModel(0);if(Ma==0||Ma==4){var
z={painted:1,token:m.getToken(),index:0};if(this.getRenderingModel()==m.REND_HIER)z.contextnodes=(this.vD()).childNodes;(this.ox())[0]=z;this.iB(z,true);if(this.MQ()){var
Ia={painted:1,token:m.getToken(),index:-1};this.iB(Ia,true);}}else{(this.vD()).innerHTML=ub.I;if(Ma==3){(this.vD()).style.height=this.LE()+ub.B;var
L=this.O3()?this.O3():0;var
ra;var
Hb=this.getPanelQueueSize(m.DEFAULT_PANEL_QUEUE_SIZE);var
ib=parseInt(Hb/2);var
cb=Hb-ib;for(var
R=L+cb;R>=L-ib;R--)if(R>=0&&this.xL(R))(this.rS()).unshift({index:R});this.X1();}else if(Ma==2){for(var
R=0;R<Lb;R++)(this.rS()).push({index:R});if(this.MQ()==2){(this.rS()).unshift({index:-1});}else if(this.MQ()==1)(this.rS()).push({index:-1});this.X1();}else if(Ma==1){(this.rS()).unshift({index:0});if(this.MQ()==2){(this.rS()).unshift({index:-1});}else if(this.MQ()==1)(this.rS()).push({index:-1});this.X1();}if(!h){var
w=this.qz(false);if(w){var
Ra=this.vD();if(Ra.lastChild)pa.insertAdjacentHTML(Ra.lastChild,ub._a,w);else Ra.innerHTML=w;}}}if(j!==false)this.WU();};q.MQ=function(){return this.getPagingModel()==3||this.getRenderingModel()==m.REND_HIER?0:this.getAutoRow();};q.getAutoRow=function(){return this.jsxautorow;};q.setAutoRow=function(c){this.jsxautorow=c;};q.pp=function(){if(this.getPagingModel()==3){var
Nb=this.ox();var
Ba=(this.vD()).childNodes.length;var
Wa=this.getPanelPoolSize(m.DEFAULT_PANEL_POOL_COUNT);var
Fa=Ba-Wa;if(Fa>0){Qa.trace(ub.Zc+Wa+ub._c+Fa);var
v=this.O3();var
F=Nb.length;if(F/2>v){Fa=this.cF(Nb,F-1,v+1,Fa,-1);if(Fa<=0)return;Fa=this.cF(Nb,0,v-1,Fa,1);if(Fa<=0)return;}else{Fa=this.cF(Nb,0,v-1,Fa,1);if(Fa<=0)return;Fa=this.cF(Nb,F-1,v+1,Fa,-1);if(Fa<=0)return;}}}};q.cF=function(r,f,l,g,e){for(var
ka=f;e==-1&&ka>l||e==1&&ka<l;ka=ka+e){if(r[ka]!=null){if(this._jsxm4&&this._jsxm4.length){var
Da=r[ka].token;var
U=new
jsx3.util.List(this._jsxm4);this._jsxm4=(U.filter(function(k){return Da!=k[5].token;})).toArray();}r[ka]=null;g--;Qa.trace(ub.ad+ka);var
w=this.lx(ka);if(w)pa.removeNode(w);}if(g<=0)return 0;}return g;};q.nI=function(){var
za=this.vD();var
Na=za.childNodes;for(var
Da=0;Da<Na.length;Da++)if(Na[Da].tagName.toLowerCase()==ub.C&&Na[Da].getAttribute(ub.Cb)!=ub.Kb||this.getRenderingModel()==m.REND_HIER&&Na[Da].getAttribute(ub.Ob)==ub.bd)return this.getRenderingModel()==m.REND_HIER?Na[Da].firstChild:Na[Da];};q.gS=function(){var
Jb=this.vD();var
Xa=Jb.childNodes;for(var
Ib=Xa.length-1;Ib>=0;Ib--)if(Xa[Ib].tagName.toLowerCase()==ub.C&&Xa[Ib].getAttribute(ub.Cb)!=ub.Kb||this.getRenderingModel()==m.REND_HIER&&Xa[Ib].getAttribute(ub.Ob)==ub.bd)return this.getRenderingModel()==m.REND_HIER?Xa[Ib].firstChild:Xa[Ib];};q.mQ=function(){return this.lx(-1);};q.lx=function(l){var
B=this.getDocument();return B.getElementById(this.getId()+ub.cd+l);};q.F7=function(d){return parseInt((d.id+ub.I).replace(this.getId()+ub.cd,ub.I));};q.kw=function(g){if(g.parentNode.tagName.toLowerCase()==ub.C)return g.parentNode;return g.parentNode.parentNode;};q.Qr=function(s,g){if(!isNaN(s))s=this.lx(s);if(s){var
Ea=0;for(var
Ta=0;Ta<s.childNodes.length;Ta++)if(s.childNodes[Ta].tagName.toLowerCase()==ub.dd){return s.childNodes[Ta].childNodes[g];}else if(s.childNodes[Ta].tagName.toLowerCase()==ub.W){return s.childNodes[g+Ea];}else Ea++;}return null;};q.jS=function(b){var
Z=this.getId()+ub.ed+b;var
la=this.getDocument();return la.getElementById(Z);};q.qq=function(h){var
Ba=this.jS(h);return Ba?(this.kw(this.jS(h))).parentNode:null;};q.Fq=function(i,s){var
Ua=this.sm();for(var
sb=0;sb<Ua.length;sb++)if(Ua[sb].getPath()==s){var
Xa=this.getId()+ub.ed+i+ub.ed+sb;var
Gb=this.getDocument();return Gb.getElementById(Xa);}return null;};q.jO=function(j,r){var
Oa=this.jS(j);return Oa?Oa.childNodes[r]:null;};q.qt=function(){var
W=this.Qr(0,0);return W?W.childNodes[0]:null;};q.mI=function(j){return this.Qr(j,0);};q.uL=function(l){var
Ma=this.Qr(l,0);return Ma?Ma.parentNode.lastChild:null;};q.xD=function(c,j){this.collapseEditSession(c,j);};q.Jt=function(e,s){this.collapseEditSession(e,s);};q.FS=function(c,j){var
ta=j.parentNode;var
db=ta.childNodes[0].childNodes[0];var
Ga=ta.childNodes[1].childNodes[0];var
Eb=j.scrollLeft;ta.childNodes[1].scrollLeft=0;db.style.left=ub.fd+Eb+ub.B;Ga.style.left=ub.fd+Eb+ub.B;if(c)this.doEvent(ub.gd,{objEVENT:c,strDIRECTION:ub.hd,intPOSITION:Eb});};q.RI=function(e,h){var
Ka=this.vD(h.parentNode);Ka.parentNode.scrollTop=0;this._jsxDY=h.scrollTop;Ka.style.top=ub.fd+this._jsxDY+ub.B;var
ha=this.O3();if(this.getPagingModel(0)==3){var
aa=this.getScrollInfoLabel(this.Nk(ub.id,m));if(aa!=ub.I){(this.pv(h.parentNode)).style.display=ub.z;window.clearTimeout(this._jsxFq);var
xa=this;this._jsxFq=window.setTimeout(function(){if(h&&h.parentNode)(xa.pv(h.parentNode)).style.display=ub.y;},1000);jsx3.sleep(function(){if(this.getParent()==null)return;if(h&&h.parentNode){var
ya=this.getRowHeight(m.DEFAULT_ROW_HEIGHT);var
lb=parseInt(this._jsxDY/ya)+1;var
ob=(this.Wl(true)).ld();var
ca=this.vR();var
ta=lb+parseInt(ob/ya)-1;if(ta>ca)ta=ca;var
ra=new
jsx3.util.MessageFormat(aa);(this.pv(h.parentNode)).childNodes[0].innerHTML=ra.format(lb,ta,ca);}},ub.jd+this.getId(),this);}var
tb;var
Ib=this.getPanelQueueSize(m.DEFAULT_PANEL_QUEUE_SIZE);var
hb=parseInt(Ib/2);var
Ba=Ib-hb;for(var
M=ha+Ba;M>=ha-hb;M--)if(M>=0&&this.xL(M)){(this.rS()).unshift({index:M});if((this.rS()).length>Ib)var
Ta=(this.rS()).pop();tb=true;}if(tb)this.X1(Ka);}this.doEvent(ub.gd,{objEVENT:e,strDIRECTION:ub.kd,intPOSITION:this._jsxDY});};q.pv=function(b){return b.childNodes[5];};q.O3=function(){return parseInt(this._jsxDY/(this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL)*this.getRowHeight(m.DEFAULT_ROW_HEIGHT)));};q.X1=function(b){jsx3.sleep(function(){if(this.getParent()==null)return;if((this.rS()).length){var
t=(this.rS()).shift();if(this.xL(t.index))this.WE(this.S5(t.index),b,t.index);if((this.rS()).length)this.X1(b);}},ub.ld+this.getId(),this);};q.rS=function(){return this._jsxTv;};q.sD=function(){this._jsxTv=[];};q.WE=function(o,b,d){if(!b)b=this.vD();if(b){var
Bb={index:d,painted:1,token:m.getToken()};(this.ox())[d]=Bb;Qa.trace(ub.md+d);pa.insertAdjacentHTML(b,ub._a,o);this.iB(Bb);this._Z(b);var
ia=this;window.setTimeout(function(){if(ia.getParent()==null)return;ia.pp();},this.getReaperInterval(m.DEFAULT_REAPER_INTERVAL));}};q.getIterableRows=function(){var
sb,Wa;var
eb=[];Wa=this.getRendered();if(Wa)if(this.getRenderingModel()==m.REND_HIER){var
z=this.getRenderingContext(ub.Ib);var
u=this.getRecordNode(z);var
aa=[];for(var
Sa=u.selectNodeIterator(ub.Sb+this.hn(ub.ub));Sa.hasNext();){var
Cb=Sa.next();var
X=this.Sf(Cb,ub.yb);aa.push(this.qq(X));}eb=this.EH({contextnodes:aa});}else{var
Ea=Wa.childNodes[1].childNodes[0].childNodes;var
Db;for(var
Sa=0;Sa<Ea.length;Sa++){Db=Ea[Sa];Db=this.mI(Db);if(Db){Db=Db.parentNode;var
Ka=Db.childNodes.length;for(var
ma=0;ma<Ka;ma++){var
na=Db.childNodes[ma];if(na.tagName.toLowerCase()==ub.W)eb.push(na);}}}}return eb;};q.EH=function(f){var
E=[];if(f.contextnodes){for(var
Lb=0;Lb<f.contextnodes.length;Lb++)if(f.contextnodes[Lb].getAttribute(ub.Ob)==ub.bd)E.push.apply(E,this.KP(f.contextnodes[Lb]));}else{var
S=f.index;var
Xa=this.lx(S);if(Xa){Xa=this.mI(Xa);if(Xa){Xa=Xa.parentNode;var
Ra=Xa.childNodes.length;for(var
nb=0;nb<Ra;nb++){var
v=Xa.childNodes[nb];if(v.tagName.toLowerCase()==ub.W)E.push(v);}}}}return E;};q.KP=function(j,l){if(l==null)l=[];l.push(this.mI(j.firstChild));if(j.lastChild){var
I=j.lastChild.childNodes;for(var
y=0;y<I.length;y++)if(I[y].tagName)this.KP(I[y],l);}return l;};m.K7=0;m.getToken=function(){m.K7+=1;return m.K7;};q.getContentElement=function(i,s){var
Kb=this.Fq(i,s);if(Kb)if(Kb.cellIndex==0&&this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0){var
P=Kb.childNodes[0].childNodes[0];while(P&&P.tagName.toLowerCase()!=ub.W)P=P.childNodes[0];if(P)return P.lastChild.firstChild;}else return Kb.childNodes[0];};q.iB=function(l,n){if(!jsx3.$A.is(this._jsxm4))this._jsxm4=[];var
kb=this._jsxm4;if(this.vR()==0&&!this.MQ())return;var
O=this.getServer();var
Oa=this.sm();var
ua=new
Array(Oa.length);var
H=false;for(var
Mb=0;Mb<Oa.length;Mb++){var
tb=Oa[Mb].Rm();if(tb){ua[Mb]=tb;H=true;}}if(!H)return;var
P=this.EH(l);if(l.contextnodes){l.index=true;delete l[ub.nd];}var
Ga=P.length;var
v=this.getRenderingModel()==m.REND_HIER&&this.getRenderNavigators(1)!=0;var
Fb=[];for(var
Mb=0;Mb<Oa.length;Mb++){var
tb=ua[Mb];if(tb)Fb.push([Mb,tb,Oa[Mb]]);}for(var
Da=0;Da<Ga;Da++){var
ta=P[Da];var
J=ta.getAttribute(ub.qb);var
nb=ta.getAttribute(ub.od);for(var
Xa=0;Xa<Fb.length;Xa++){var
da=null;var
Mb=Fb[Xa][0];var
tb=Fb[Xa][1];var
R=Fb[Xa][2];if(v&&Mb==0){var
Cb=ta.childNodes[0].childNodes[0].childNodes[0];while(Cb&&Cb.tagName.toLowerCase()!=ub.W)Cb=Cb.childNodes[0];if(Cb)da=Cb.lastChild.firstChild;}else if(ta.childNodes[Mb])da=ta.childNodes[Mb].childNodes[0];if(da)if(n){tb.format(da,J,this,R,nb,O);}else kb[kb.length]=[tb,da,J,R,nb,l];}}if(Fb.length>0&&P.length>0)jsx3.sleep(this.HD,ub.pd+this.getId(),this);};q.HD=function(){if(this.getParent()==null){this._jsxm4=[];return;}var
N=this.getServer();var
Ia=(new
Date()).getTime();var
u=Ia;while(this._jsxm4.length>0&&u-Ia<m.O9){var
T=this._jsxm4.shift();var
za=T[5];var
F=za.index;if(!F){var
mb=(this.ox())[za.index];F=mb!=null&&mb.token==za.token;}if(F){T[0].format(T[1],T[2],this,T[3],T[4],N);u=(new
Date()).getTime();}}if(this._jsxm4.length>0)jsx3.sleep(this.HD,ub.pd+this.getId(),this);};q.vD=function(r){if(!r)r=this.getRendered();return r?r.childNodes[1].childNodes[0]:null;};q.LE=function(){var
O=this.getPagingModel(0);var
Aa=null;if(O==3){Aa=this.vR()*this.getRowHeight(m.DEFAULT_ROW_HEIGHT);}else{var
tb=this.vD();Aa=tb?parseInt(tb.offsetHeight):0;}return Aa;};q.xL=function(c){if(c==-1||c>=0&&c<(this.ox()).length&&(this.ox())[c]==null){var
Ab=this.getDocument();var
M=Ab.getElementById(this.getId()+ub.cd+c);return !M;}return false;};q.S5=function(c){var
ra=this.Wl(true);var
K=this.getRowsPerPanel(m.DEFAULT_ROWS_PER_PANEL);var
Fa=this.getPagingModel(0);if(Fa==3){var
ab=this.getRowHeight(m.DEFAULT_ROW_HEIGHT);var
Gb=ub.qd+K*ab*c+ub.Pc;var
Ia=K*c;var
Eb=Ia+K+1;}else{var
Gb=ub.Vb;var
H=ub.I;if(Fa==2){var
Ia=K*c;var
Eb=Ia+K+1;}else{var
ob=this.vR();var
Ia=0;var
Eb=ob+1;}}var
Jb={};Jb.jsx_min_exclusive=Ia;Jb.jsx_max_exclusive=Eb;Jb.jsx_panel_index=c;Jb.jsx_panel_css=Gb;Jb.jsx_column_widths=this.x8();Jb.jsx_rendering_context=this.getRenderingContext(ub.Ib);Jb.jsx_mode=c==-1?ub.rd:ub.sd;Qa.trace(ub.td+Ia+ub.ud+Eb);return this.doTransform(Jb);};q.resetXmlCacheData=function(e){if(this.getPagingModel()==3)this.setScrollTop(0);this.Bk(true);this.jsxsupermix(e);};q.resetCacheData=function(b){if(this.getPagingModel()==3)this.setScrollTop(0);this.Bk(true);this.jsxsupermix(b);};q.setXMLId=function(b){this.Bk(true);return this.jsxsupermix(b);};q.repaint=function(){this.Bk(true);return this.jsxsuper();};q.setXMLString=function(d){this.Bk(true);return this.jsxsupermix(d);};q.setXMLURL=function(r){this.Bk(true);return this.jsxsupermix(r);};q.getXSL=function(){return this.yk();};q.yk=function(k){var
ba=m.Ip||(jsx3.getSharedCache()).getOrOpenDocument(m.DEFAULTXSLURL,null,jsx3.xml.XslDocument.jsxclass);if(k)return ba;var
ga=(this.getServer()).getCache();var
xb=ga.getDocument(this.getXSLId());if(xb==null){xb=ba.cloneDocument();ga.setDocument(this.getXSLId(),xb);var
Mb=this.getRenderingModel(m.REND_DEEP);var
mb=this.sm();var
qa=xb.selectSingleNode(ub.vd);var
ha=xb.selectSingleNode(ub.wd);var
lb=xb.selectSingleNode(ub.xd);var
B=this.x8();var
da=ub.yd+this.Fg(ub.zd,ub.Ad)+this.Fg(ub.Bd,ub.Cd);for(var
cb=0;cb<mb.length;cb++){var
Z=mb[cb];var
Lb=Z.getId();var
P=(Z.Wl(true)).lg(1);var
Da=P.lg(0);var
w=cb==0&&Mb==m.REND_HIER?ub.Dd:ub.I;P.setAttributes(da+w+ub.Ed+cb+ub.Fd);P.setStyles(Z.Qk()+Z.Zm()+Z.Ii()+Z.Yi()+Z.oj()+Z.Qi()+Z.gh()+ub.Gd);Da.setAttributes(ub.Hd);Da.setStyles(Z.Lm()+Z.Gd());var
O=m.AV.cloneDocument();O.setAttribute(ub.Id,ub.Jd+Lb+ub.Kd);(O.selectSingleNode(ub.Ld)).setAttribute(ub.Md,Lb+ub.Nd);lb.appendChild(O);if(Mb==m.REND_HIER&&cb==0&&this.getRenderNavigators(1)!=0){var
Hb=m.vV.format(ub.Od);var
Db=xb.selectSingleNode(ub.Pd);Db.setAttribute(ub.Md,Lb+ub.Nd);var
u=(Da.paint()).join(ub.I);O.loadXML(u);if(!O.hasError()){(Db.getParent()).appendChild(O);O.appendChild(Db);}else Qa.error(ub.Qd+Z+ub.Rd+O.getError());}else var
Hb=m.vV.format(Lb+ub.Nd);var
Hb=((P.paint()).join((Da.paint()).join(Hb))).replace(ub.Sd,ub.Td);var
Ta=P.getPaintedWidth();var
y=cb==0?B-(this.oC())[0]+Ta:Ta;var
fb=m.RB.format(Lb,Hb,String(Ta),String(y));O.loadXML(fb);if(!O.hasError()){xb.appendChild(O);}else Qa.error(ub.Qd+Z+ub.Rd+O.getError());var
X=(Z.getValueTemplate(m.Column.TEMPLATES[ub.Ud])).replace(ub.Vd,ub.Wd+Z.getPath());var
Ab=Z.getEditMask();if(Ab!=null&&m.ZJ(Ab)&&Ab.emGetType()==m.EditMask.FORMAT){var
fa=new
jsx3.xml.Document();X=X.replace(ub.Xd,(Ab.emPaintTemplate()).replace(ub.Vd,ub.Wd+Z.getPath())+ub.Yd);}O.loadXML(X);if(!O.hasError()){O.setAttribute(ub.Md,Lb+ub.Nd);xb.appendChild(O);}O=m.tQ.cloneNode(true);O.setAttribute(ub.Md,Lb);if(cb==0)qa.insertBefore(O,ha.getParent());else ha.appendChild(O);}}return xb;};m.gF=function(o){return o&&o.getDisplay()!=ub.y;};q.sm=function(){return (this.getDescendantsOfType(Ca,true)).filter(m.gF);};q.doTransform=function(k){if(!k)k={};k.jsx_id=this.getId();k.jsx_rendering_model=this.getRenderingModel(m.REND_DEEP);k.jsx_paging_model=this.getPagingModel(0);var
jb=this.getUriResolver();if(k.jsx_rendering_model==ub.t){var
na=this.getIcon(m.ICON),ua=this.getIconMinus(m.ICON_MINUS),Ga=this.getIconPlus(m.ICON_PLUS);if(k.jsx_icon==null)k.jsx_icon=na?jb.resolveURI(na):ub.I;if(k.jsx_icon_minus==null)k.jsx_icon_minus=ua?jb.resolveURI(ua):ub.I;if(k.jsx_icon_plus==null)k.jsx_icon_plus=Ga?jb.resolveURI(Ga):ub.I;k.jsx_transparent_image=Ya.SPACE;}k.jsx_sort_path=this.getSortPath();k.jsx_sort_direction=this.getSortDirection();k.jsx_sort_type=this.getSortType();k.jsx_selection_model=this.getSelectionModel(1);k.jsx_selection_bg_url=this.kL();var
Eb=this.getXSLParams();for(var Sa in Eb)k[Sa]=Eb[Sa];if(k.jsx_use_categories&&this.getRenderingModel()!=m.REND_HIER)delete k[ub.Zd];k.jsx_column_count=(this.sm()).length;k.jsxpath=jsx3.getEnv(ub._d);k.jsxpathapps=jsx3.getEnv(ub.ae);k.jsxpathprefix=(this.getUriResolver()).getUriPrefix();k.jsxappprefix=(this.getServer()).getUriPrefix();var
E=this.jsxsupermix(k);E=this.vo(E);return !k.jsx_return_at_all_costs&&E.indexOf(ub.be)==-1?ub.I:E;};q.onXmlBinding=function(k){this.jsxsupermix(k);this.repaintData();};q.getXML=function(){var
va=this.jsxsupermix();if(!this._jsxgU){var
Ja=!va.hasError()&&va.getNamespaceURI()==jsx3.app.Cache.XSDNS&&va.getNodeName()==ub.ce;if(Ja){var
Hb=this.getServer();if(Hb){this._jsxgU=true;(Hb.getCache()).subscribe(this.getXMLId(),this,ub.de);}}}return va;};q.kH=function(i){i.target.unsubscribe(i.subject,this);this._jsxgU=false;this.Bk(true);jsx3.sleep(this.Pp,ub.Oa+this.getId(),this);};q.Bk=function(k){if(!this.getServer())return;delete this[ub.ee];if(!k){this.resetXslCacheData();this.clearBoxProfile(true);delete this[ub.w];}};q.getSortedIds=function(){var
hb=this.doTransform({jsx_mode:ub.fe,jsx_rendering_context:this.getRenderingContext(ub.Ib),jsx_return_at_all_costs:true});return hb.search(ub.ge)>-1?window.eval(ub.he+RegExp.$1+ub.ie):[];};q.vR=function(o){if(o)delete this[ub.ee];if(this._jsxBF){return this._jsxBF.maxlen;}else{if((this.getXML()).hasError())return 0;var
C={};C.jsx_mode=ub.je;C.jsx_rendering_model=this.getRenderingModel(m.REND_DEEP);C.jsx_rendering_context=this.getRenderingContext(ub.Ib);(jsx3.$H((this.getSchema()).getProps())).each(function(r,g){C[ub.ke+r]=g;});var
Z=this.yk(true);Z.reset();Z.setParams(C);var
Y=Z.transform(this.getXML());var
Fa=Y.search(ub.le)>-1?parseInt(RegExp.$1):0;Qa.trace(ub.me+Fa);this._jsxBF={maxlen:Fa};if(this.getPagingModel()==3){var
Mb=this.Wl();var
Ea=this.getRendered();if(Mb&&Ea){Mb=(Mb.lg(2)).lg(0);var
ca=this.getRowHeight(m.DEFAULT_ROW_HEIGHT)*Fa;Mb.recalculate({height:ca+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)},Ea.childNodes[2].childNodes[0],null);}}return Fa;}};q.ox=function(){return this._jsxcN||[];};q.OO=function(i){this._jsxcN=i;};q.getSelectionModel=function(f){return this.jsxselectionmodel!=null?this.jsxselectionmodel>2?0:this.jsxselectionmodel:f!=null?f:null;};q.setSelectionModel=function(i){this.jsxselectionmodel=i;};q.getRowHeight=function(f){return this.jsxrowheight!=null?this.jsxrowheight:f!=null?f:null;};q.setRowHeight=function(e,i){this.jsxrowheight=e;this.Bk();if(!i)this.repaint();};q.getRowsPerPanel=function(l){return this.jsxrowsperpanel?this.jsxrowsperpanel:l?l:null;};q.setRowsPerPanel=function(k,h){this.jsxrowsperpanel=k;this.Bk(true);if(!h)this.repaint();};q.getPanelQueueSize=function(n){return this.jsxpaintqueuesize?this.jsxpaintqueuesize:n?n:null;};q.setPanelQueueSize=function(s){this.jsxpaintqueuesize=s;};q.getReaperInterval=function(k){return this.jsxreaperinterval?this.jsxreaperinterval:k?k:null;};q.setReaperInterval=function(c){this.jsxreaperinterval=c;};q.getPanelPoolSize=function(e){return this.jsxpanelpoolsize?this.jsxpanelpoolsize:e?e:null;};q.setPanelPoolSize=function(d){this.jsxpanelpoolsize=d;this.Bk(true);};q.getPagingModel=function(h){if(this.getRenderingModel()==m.REND_HIER&&this.jsxpagingmodel!=4){Qa.trace(ub.ne);return 0;}return !isNaN(this.jsxpagingmodel)?this.jsxpagingmodel:!isNaN(h)?h:null;};q.setPagingModel=function(l){this.jsxpagingmodel=l;this.Bk();};q.getHeaderHeight=function(a){return this.jsxheaderheight!=null?Number(this.jsxheaderheight):a?a:null;};q.setHeaderHeight=function(o,r){this.jsxheaderheight=o;this.clearBoxProfile(true);if(!r)this.repaint();};q.getScrollInfoLabel=function(h){return this.jsxscrollinfolabel!=null?this.jsxscrollinfolabel:h?h:null;};q.setScrollInfoLabel=function(l){this.jsxscrollinfolabel=l;};q.getScrollLeft=function(){var
w=this.getRendered();return w?w.childNodes[3].scrollLeft:0;};q.setScrollLeft=function(a){var
X=this.getRendered();if(X&&X.childNodes[3]){X.childNodes[3].scrollLeft=a;if(X.childNodes[3].style.display==ub.y)this.FS(false,X.childNodes[3]);}};q.getScrollTop=function(){return this._jsxDY?this._jsxDY:0;};q.Ms=function(){var
aa=this.getRendered();return aa&&aa.childNodes[2]?aa.childNodes[2].scrollTop:this.getScrollTop();};q.setScrollTop=function(s,k){if(s<0)s=0;k=this.getRendered(k);if(k&&k.childNodes[2]){if(k.childNodes[2].scrollTop==0&&s==0)k.childNodes[2].scrollTop=1;k.childNodes[2].scrollTop=s;}};q.synchronizeVScroller=function(){this._Z();};q._Z=function(k){if(!k)k=this.vD();if(!k)return;if(this.getPagingModel()!=3){var
R=((this.Wl(true)).lg(2)).lg(0);R.recalculate({height:k.offsetHeight+this.getHeaderHeight(m.DEFAULT_HEADER_HEIGHT)},k.parentNode.parentNode.childNodes[2].childNodes[0],null);var
v=this.Ms();if(this.getScrollTop()!=v){this.setScrollTop(v);k.style.top=ub.fd+v+ub.B;}}else if(this.getScrollTop()!=this.Ms())this.setScrollTop(this.Ms()-1);if(k.parentNode.parentNode.childNodes[3].style.display==ub.y){this.setScrollLeft(0);}else if(this.getScaleWidth()!=1){var
Db=this.getScrollLeft();var
ob=!k.offsetWidth?Db:k.offsetWidth-k.parentNode.parentNode.offsetWidth;if(Db>ob)this.setScrollLeft(ob);}this.xx();};q.xx=function(){var
Ta=this.getRendered();if(Ta)Ta.childNodes[4].style.display=this.getSuppressVScroller(0)==1?ub.y:ub.I;};q.getScaleWidth=function(){return this.jsxscalewidth;};q.setScaleWidth=function(c){this.jsxscalewidth=c;this.Qf();return this;};q.onSetChild=function(a){if(a instanceof m.Column||!(a instanceof jsx3.gui.Painted)){this.Bk();return true;}return false;};q.paintChild=function(b,g){if(!g)this.repaint();};q.onRemoveChild=function(o,b){this.jsxsuper(o,b);this.Bk();this.repaint();};q.getHeaderBorder=function(){return this.jsxheaderborder;};q.setHeaderBorder=function(e){this.jsxheaderborder=e;this.clearBoxProfile(true);this.repaintHead();};q.getBodyBorder=function(){return this.jsxbodyborder;};q.setBodyBorder=function(h,j){this.jsxbodyborder=h;this.Bk();if(!j)this.repaint();};q.getValue=function(){var
oa=this.getSelectionModel();if(oa==2){return this.getSelectedIds();}else return (this.getSelectedIds())[0];};q.doValidate=function(){var
ib=(this.getSelectedNodes()).size()>0||this.getRequired()==0;this.setValidationState(ib?1:0);return this.getValidationState();};q.getRenderingModel=function(h){return this.jsxrenderingmodel?this.jsxrenderingmodel:h?h:null;};q.setRenderingModel=function(g,l){this.jsxrenderingmodel=g;this.Bk();if(!l)this.repaint();};q.getRenderingContext=function(k){return this.jsxrenderingcontext!=null&&this.jsxrenderingcontext!=ub.I?this.jsxrenderingcontext:k!=null?k:null;};q.setRenderingContext=function(b,r){this.jsxrenderingcontext=b;this.Bk(true);if(!r)this.repaint();};q.getSuppressHScroller=function(h){return this.jsxsuppresshscroll!=null?this.jsxsuppresshscroll:h!=null?h:null;};q.setSuppressHScroller=function(k){this.jsxsuppresshscroll=k;var
W=this.getRendered();if(W&&W.childNodes[3]){W.childNodes[3].style.display=k!=1?ub.z:ub.y;this.xx();}};q.getSuppressVScroller=function(g){return this.jsxsuppressvscroll!=null?this.jsxsuppressvscroll:g!=null?g:null;};q.setSuppressVScroller=function(d,j){this.jsxsuppressvscroll=d;this.Bk();if(j){var
Ea=this.getRendered();if(Ea&&Ea.childNodes[2]){Ea.childNodes[2].style.display=d!=1?ub.z:ub.y;this.xx();}}else this.repaint();};q.getFixedColumnIndex=function(g){return this.jsxfixedcolumnindex!=null?this.jsxfixedcolumnindex:g!=null?g:null;};q.setFixedColumnIndex=function(l){this.jsxfixedcolumnindex=l;};q.getRenderNavigators=function(n){return this.jsxrendernavigators!=null?this.jsxrendernavigators:n!=null?n:null;};q.setRenderNavigators=function(g,e){this.jsxrendernavigators=g;this.Bk();if(!e)this.repaint();};q.getIcon=function(e){return this.jsxicon!=null&&this.jsxicon!=ub.I?this.jsxicon:e?e:null;};q.setIcon=function(k){this.jsxicon=k;};q.getIconMinus=function(p){return this.jsxiconminus!=null&&this.jsxiconminus!=ub.I?this.jsxiconminus:p?p:null;};q.setIconMinus=function(b){this.jsxiconminus=b;};q.getIconPlus=function(o){return this.jsxiconplus!=null&&this.jsxiconplus!=ub.I?this.jsxiconplus:o?o:null;};q.setIconPlus=function(a){this.jsxiconplus=a;};q.deleteRecord=function(r,h){var
ca=this.getXML();var
sa=ca.selectSingleNode(this.Ee(r));if(sa!=null){sa=(sa.getParent()).removeChild(sa);if(h!==false){this.redrawRecord(r,0);if(this.getRenderingModel()!=m.REND_HIER){var
ea=sa.selectNodes(ub.oe+this.hn(ub.ub));for(var
jb=ea.size()-1;jb>=0;jb--){var
y=ea.get(jb);this.redrawRecord(this.Sf(y,ub.yb),0);}}}return sa;}return null;};q.insertRecordProperty=function(p,j,n,k){if(j==ub.qb){var
Kb=this.jsxsupermix(p,j,n,false);var
cb=this.jS(p);if(cb){cb.setAttribute(ub.qb,n);cb.setAttribute(ub.pe,n);var
S=this.getId()+ub.ed+n;cb.setAttribute(ub.yb,S);var
Aa=cb.childNodes;S=S+ub.ed;for(var
B=0;B<Aa.length;B++)Aa[B].setAttribute(ub.yb,S+B);if(k!=false)this.redrawRecord(n,2);return Kb;}}else return this.jsxsupermix(p,j,n,k);};q.redrawCell=function(n,s,o,k){var
_=s.getDisplayIndex();var
Cb=this.jO(n,_);if(Cb){var
D;if(this.getRenderingModel()==m.REND_HIER){var
rb=this.qq(n);var
pb=rb.parentNode;var
Sa=this.D5(n,pb.getAttribute(ub.Wb));var
_a=new
jsx3.xml.Document();if(!k){k=_a.loadXML(Sa);while(k&&k.getBaseName()!=ub.W)k=k.getFirstChild();if(!k)return;}if(s.getChildIndex()==0&&this.getRenderNavigators(1)!=0){var
S=k.getFirstChild();while(S&&S.getBaseName()!=ub.W)S=S.getFirstChild();var
C=Cb.childNodes[0];while(C&&C.tagName.toLowerCase()!=ub.W)C=C.childNodes[0];if(!S||!C)return;D=this.iD(S,C,2);}else D=this.iD(k,Cb.parentNode,_);}else{var
C=Cb.parentNode;if(!k)k=this.ZG(n);if(this.getRenderingModel()==m.REND_HIER){while(k&&k.getBaseName()!=ub.W)k=k.getFirstChild();if(!k)return;}D=this.iD(k,C,_);}D=D.childNodes[0];var
T=s.Rm();if(T){var
qb=Cb.parentNode;T.format(D,qb.getAttribute(ub.qb),this,s,qb.getAttribute(ub.od),this.getServer());}if(!o){var
hb=this.sm();var
ra=new
RegExp(ub.qe+s.getPath()+ub.re);for(var
Ab=0;Ab<hb.length;Ab++){var
eb=hb[Ab].getTriggers()+ub.I;if(hb[Ab]!=s&&(hb[Ab].getPath()==s.getPath()||eb.search(ra)>=0))this.redrawCell(n,hb[Ab],true,k);}}}};q.redrawMappedCells=function(l,d){var
Ra=this.sm();for(var
_a=0;_a<Ra.length;_a++)if(Ra[_a].getPath()==d){this.redrawCell(l,Ra[_a],false);return;}};q.D5=function(g,j){return this.doTransform({jsx_mode:ub.Rb,jsx_panel_css:ub.Vb,jsx_column_widths:this.x8(),jsx_context_index:j?j:1,jsx_rendering_context:this.Sf((this.getRecordNode(g)).getParent(),ub.yb),jsx_rendering_context_child:g});};q.redrawRecord=function(b,d,l){var
Fa=this.vD();if(b!=null&&d==2){if(this.getRenderingModel()==m.REND_HIER){var
Y=this.qq(b);var
Ka=Y.parentNode;var
Ia=this.D5(b,Ka.getAttribute(ub.Wb));pa.setOuterHTML(Y,Ia);Y=this.qq(b);var
Q={painted:1,token:m.getToken(),contextnodes:[Y]};(this.ox())[0]=Q;this.iB(Q);}else{var
Mb=this.Ex(this.jS(b),b);this.w0(Mb,b);}}else if(b!=null&&d==0){if(this.getRenderingModel()==m.REND_HIER){var
wb=this.qq(b);if(wb){var
ba=wb.parentNode;pa.removeNode(wb);if(ba.childNodes.length==0){var
w=ba.previousSibling;var
va=this.mI(w);if(va){var
Fb=va.getAttribute(ub.qb);this.redrawRecord(Fb,2);}}this._Z();}}else if(this.getPagingModel(0)!=3){var
wb=this.jS(b);if(wb){var
ja=wb.parentNode;if(ja.childNodes.length==1){if(ja.tagName.toLowerCase()!=ub.C)ja=ja.parentNode;pa.removeNode(ja);}else{var
Ua=wb.nextSibling;if(wb.parentNode.firstChild==wb&&Ua)for(var
J=0;J<wb.childNodes.length;J++)Ua.childNodes[J].style.width=wb.childNodes[J].style.width;pa.removeNode(wb);this._Z();}}}else this.repaint();}else if(b!=null&&d==3){if(this.getPagingModel(0)!=3){var
_a=this.getRecordNode(b);var
la=_a.getNextSibling();var
v=this.Sf(la,ub.yb);if(this.getRenderingModel()==m.REND_HIER){var
F=this.qq(v);var
Ia=this.D5(b,F.parentNode.getAttribute(ub.Wb));pa.insertAdjacentHTML(F,ub.se,Ia);var
Q={painted:1,token:m.getToken(),contextnodes:[F.previousSibling]};(this.ox())[0]=Q;this.iB(Q);this._Z(Fa);}else{var
Ib=this.jS(v);var
db=Ib.parentNode;var
Mb=this.TY(db,b);db.insertBefore(Mb,Ib);if(db.firstChild==Mb)for(var
J=0;J<Mb.childNodes.length;J++){Mb.childNodes[J].style.width=Ib.childNodes[J].style.width;Ib.childNodes[J].style.width=ub.I;}this.w0(Mb,b);this._Z(Fa);if(l!==false)this.j1(_a);}}else this.repaint();}else if(b!=null&&d==1)if(this.getPagingModel(0)!=3){if(this.getRenderingModel()==m.REND_HIER){var
P=this.Sf((this.getRecordNode(b)).getParent(),ub.yb);var
Y=this.qq(P);var
Ka=Y.lastChild;if(this.GZ(Ka)){this.toggleItem(P,true);}else{var
Ia=this.D5(b,Ka.getAttribute(ub.Wb));pa.insertAdjacentHTML(Ka,ub._a,Ia);var
Q={painted:1,token:m.getToken(),contextnodes:[Ka.lastChild]};(this.ox())[0]=Q;this.iB(Q);this._Z(Fa);}}else{var
db=this.gS();if(db==null||db.firstChild==null){this.repaintData();}else{if(db.firstChild.tagName.toLowerCase()==ub.dd)db=db.firstChild;var
Mb=this.TY(db,b);db.appendChild(Mb);this.w0(Mb,b);this._Z(Fa);if(l!==false)this.j1(this.getRecordNode(b));}}}else this.repaint();};q.j1=function(n){if(this.getRenderingModel(m.REND_DEEP)==m.REND_DEEP){var
ja=n.selectNodeIterator(ub.oe+this.hn(ub.ub));while(ja.hasNext()){n=ja.next();this.redrawRecord(this.Sf(n,ub.yb),1,false);}}};q.GZ=function(a){return a.childNodes.length==0||a.childNodes.length==1&&a.childNodes[0].nodeType!=1;};q.w0=function(e,k){if(!e)return;var
Za=this.sm();for(var
ib=0;ib<Za.length;ib++){var
nb=Za[ib];var
xb=nb.Rm();if(xb){var
Db=e.childNodes[ib].childNodes[0];xb.format(Db,k,this,nb,e.getAttribute(ub.od),this.getServer());}}};q.TY=function(b,e){var
K=this.getDocument();var
fa=this.ZG(e);var
Ba=K.createElement(ub.W);m._H(fa,Ba,true);for(var
bb=fa.getChildIterator();bb.hasNext();){fa=bb.next();var
H=K.createElement(ub.te);m._H(fa,H,true);Ba.appendChild(H);H.innerHTML=(fa.getFirstChild()).getXML();}return Ba;};q.ZG=function(f){var
U={};U.jsx_column_widths=this.x8();U.jsx_rendering_context=this.Sf((this.getRecordNode(f)).getParent(),ub.yb);U.jsx_rendering_context_child=f;U.jsx_mode=ub.Rb;var
t=this.doTransform(U);var
Fb=new
jsx3.xml.Document();Fb.loadXML(t);return Fb.getRootNode();};q.Ex=function(r,g){if(!r)return;var
fa=this.ZG(g);m._H(fa,r,false);var
z=0;for(var
Ba=fa.getChildIterator();Ba.hasNext();){fa=Ba.next();var
H=r.childNodes[z];m._H(fa,H,false);H.innerHTML=(fa.getFirstChild()).getXML();z++;}return r;};q.iD=function(i,s,k){var
lb=i.selectSingleNode(ub.ue+(k+1)+ub.ie);var
da=s.childNodes[k];m._H(lb,da,false);da.innerHTML=(lb.getFirstChild()).getXML();return da;};m._H=function(h,o,n){var
ka=h.getAttributeNames();var
Bb=ub.ve;var
I=ub.we;for(var
Ia=0;Ia<ka.length;Ia++){var
K=ka[Ia];var
V=h.getAttribute(K);if(K.match(Bb)){if(jsx3.CLASS_LOADER.IE){pa.addEventListener(o,K.toLowerCase(),V);}else o.setAttribute(K.toLowerCase(),V);}else if(K==ub.bc){o.className=V;}else if(K==ub.dc){jsx3.gui.Painted.Ql(o,n?V:V.replace(I,ub.I));}else o.setAttribute(K,V);}};q.setValue=function(g){this.deselectAllRecords();if(g){if(jsx3.$A.is(g)){if(this.getSelectionModel()!=2&&g.length>1)throw new
jsx3.IllegalArgumentException(ub.xe,g);}else g=[g];for(var
E=0;E<g.length;E++)this.selectRecord(g[E]);this.revealRecord(g[0]);}else{this.synchronizeVScroller();this.setScrollTop(0);}return this;};q.getMaskProperties=function(){return Ya.MASK_NO_EDIT;};});jsx3.Class.defineClass("jsx3.gui.Matrix.ColumnFormat",null,null,function(r,h){var
ub={A:"",a:"short",b:"long",c:"oZ",d:"jE",e:"JE",f:"@",g:/^@(datetime|date|time|number)\b/,h:"{0,",i:"}",j:"@message",k:"objDiv",l:"strCDFKey",m:"objMatrix",n:"objMatrixColumn",o:"intRowNumber",p:"objServer",q:/&lt;/g,r:"<",s:/&gt;/g,t:">",u:/&quot;/g,v:'"',w:/&amp;/g,x:"&",y:"function",z:"text"};var
J=jsx3.gui.Matrix;r.ax={medium:2,full:4};r.ax[ub.a]=1;r.ax[ub.b]=3;r.Bx={integer:1,percent:1,currency:1};r.kF={unescape:ub.c,unescape_all:ub.d,lookup:ub.e};r.getInstance=function(n,c){var
aa=null;var
ia=null;if(n.charAt(0)==ub.f&&(ia=r.kF[n.substring(1)])!=null){aa=new
r();aa.format=r[ia];}else if(n.match(ub.g)){aa=new
J.MessageFormat(c,ub.h+n.substring(1)+ub.i);}else if(n.indexOf(ub.j)==0)aa=new
J.MessageFormat(c,n.substring(9));return aa;};h.init=function(){};h.validate=function(){return true;};h.format=jsx3.Method.newAbstract(ub.k,ub.l,ub.m,ub.n,ub.o,ub.p);r.oZ=function(q,p,m,j,k,l){r.jE(q,p,m,j,k,l,jsx3.xml.Template.supports(1));};r.jE=function(q,o,n,i,l,k,g){if(!g)q.innerHTML=(((q.innerHTML.replace(ub.q,ub.r)).replace(ub.s,ub.t)).replace(ub.u,ub.v)).replace(ub.w,ub.x);};r.JE=function(e,f,d,s,b,k){var
hb=s.getEditMask();if(hb&&hb.OK)hb=hb.OK();if(hb!=null&&typeof hb.getRecordNode==ub.y){var
Jb=d.getRecordNode(f);if(Jb){var
ta=s.getValueForRecord(f);var
pa=hb.getRecordNode(ta);e.innerHTML=jsx3.util.strEscapeHTML(pa?d.Sf(pa,ub.z):ta!=null?ta:ub.A);}}};});jsx3.Class.defineClass("jsx3.gui.Matrix.MessageFormat",jsx3.gui.Matrix.ColumnFormat,null,function(i,l){l.init=function(e,d){this.jL=new
jsx3.util.MessageFormat(d,(e.getServer()).getLocale());};l.format=function(e,h,a,c,r,d){var
tb=c.getValueForRecord(h);if(tb)try{var
Za=d.getLocale();if(Za!=this.jL._locale)this.jL.setLocale(Za);try{tb=this.jL.format(tb);}catch(Kb){}e.innerHTML=tb;}catch(Kb){jsx3.util.Logger.GLOBAL.error(this.jL,jsx3.NativeError.wrap(Kb));}};});jsx3.Class.defineInterface("jsx3.gui.Matrix.EditMask",null,function(r,e){var
ub={a:"jsxbeginmask",b:"_jsxTy"};var
ta=jsx3.gui.Matrix;r.NORMAL=1;r.FORMAT=2;r.DIALOG=3;e.emInit=function(d){};e.emGetType=function(){return r.NORMAL;};e.emPaintTemplate=function(){return this.paint();};e.cB=function(a,n,h,f,q,i,l){this._jsxTy={matrix:f,column:q,recordId:i,td:l,value:a};var
qb=this.emBeginEdit(a,n,h,f,q,i,l)!==false;if(qb)this.doEvent(ub.a,{objMATRIX:f,objCOLUMN:q,strRECORDID:i,strVALUE:a,_gipp:1});return qb;};e.replayMask=function(d){this._jsxTy={matrix:d.objMATRIX,column:d.objCOLUMN,recordId:d.strRECORDID,td:null,value:d.strVALUE};};e.emBeginEdit=function(c,l,a,h,g,k,j){};e.DW=function(){var
X=this.emEndEdit();delete this[ub.b];return X;};e.emEndEdit=function(){return this.emGetValue();};e.emGetValue=function(){return null;};e.suspendEditSession=function(){(this.getAncestorOfType(ta))._jsxOM.f1=true;};e.resumeEditSession=function(){(this.getAncestorOfType(ta))._jsxOM.f1=false;};e.emGetSession=function(){return this._jsxTy;};e.commitEditMask=function(l,f){if(this._jsxTy)this._jsxTy.matrix.Ko(l,f);};e.emCollapseEdit=function(j){};});jsx3.Class.defineInterface("jsx3.gui.Matrix.BlockMask",jsx3.gui.Matrix.EditMask,function(p,a){var
ub={a:"none",b:""};var
_=jsx3.gui.Matrix;var
jb=jsx3.gui.Block;var
vb=jsx3.html;a.emInit=function(g){this.setDisplay(ub.a,true);this.setDimensions(0,0,null,null,true);this.setRelativePosition(0,true);this._jsxdl=this.getWidth();this._jsxvh=this.getHeight();var
rb=this.OK();if(rb){var
Gb=rb.getRelativePosition();var
eb=rb.getDisplay();_.ZJ(rb,g);rb.setRelativePosition(Gb,true);rb.setDisplay(eb,true);}};a.emGetType=function(){return _.EditMask.NORMAL;};a.emBeginEdit=function(q,f,i,c,h,l,o){var
sa=isNaN(this._jsxdl)?f.W:parseInt(this._jsxdl);var
Ka=isNaN(this._jsxvh)?f.H:parseInt(this._jsxvh);this.setMaskValue(q);this.setDimensions(f.L,f.T,sa,Ka,true);this.setDisplay(ub.b,true);var
ea=this.getMaskFirstResponder()||this;vb.focus(ea);};a.emGetValue=function(){return this.getMaskValue();};a.getMaskFirstResponder=function(){return this.OK();};a.getMaskValue=function(){var
J=this.OK();return J!=null?J.getValue():null;};a.setMaskValue=function(i){var
O=this.OK();if(O!=null)O.setValue(i);};a.OK=function(){return (this.getDescendantsOfType(jsx3.gui.Form))[0];};a.emEndEdit=function(){var
Fa=this.getMaskValue();this.setDisplay(ub.a,true);return Fa;};});jsx3.Class.defineInterface("jsx3.gui.Matrix.DialogMask",jsx3.gui.Matrix.BlockMask,function(f,e){var
ub={a:"",b:"none"};var
Ba=jsx3.gui.Matrix;var
Nb=jsx3.html;e.emInit=function(l){Ba.BlockMask.prototype.emInit.call(this,l);var
pb=this.getParent();while(pb!=null){if(jsx3.gui.Window&&pb instanceof jsx3.gui.Window){pb=pb.getRootBlock();break;}else if(jsx3.gui.Dialog&&pb instanceof jsx3.gui.Dialog)break;pb=pb.getParent();}if(pb==null)pb=(this.getServer()).getRootBlock();pb.paintChild(this);};e.emGetType=function(){return Ba.EditMask.DIALOG;};e.emBeginEdit=function(d,k,g,i,b,l,c){this._jsxTy={matrix:i,column:b,recordId:l,td:c};var
Kb=(this.getRendered(c)).parentNode.parentNode;var
Na=Nb.getRelativePosition(Kb,Kb);var
Sa=Nb.getRelativePosition(Kb,c);var
sb=this._jsxdl;var
fb=this._jsxvh;var
N=[Na.W-Sa.L-k.W,Sa.L,k.W];var
ba=-1;for(var
nb=0;nb<N.length&&ba<0;nb++)if(sb<=N[nb])ba=nb;if(ba<0)L4:for(var
nb=0;nb<N.length&&ba<0;nb++){for(var
ha=0;ha<N.length;ha++)if(N[nb]<N[ha])continue L4;ba=nb;}var
xa=ba==2;var
w=[Na.H-Sa.T-(xa?k.H:0),Sa.T+(xa?0:k.H)];var
vb=-1;for(var
nb=0;nb<w.length&&vb<0;nb++)if(fb<=w[nb])vb=nb;if(vb<0)L5:for(var
nb=0;nb<w.length&&vb<0;nb++){for(var
ha=0;ha<w.length;ha++)if(w[nb]<w[ha])continue L5;vb=nb;}sb=Math.min(sb,N[ba]);fb=Math.min(fb,w[vb]);var
P=[Sa.L+k.W,Sa.L-sb,Sa.L][ba];var
zb=[Sa.T+(xa?k.H:0),Sa.T-fb+(xa?0:k.H)][vb];this.setMaskValue(d);this.setDimensions(P,zb,sb,fb,true);this.setDisplay(ub.a,true);Nb.updateCSSOpacity(this.getRendered(),0.9);var
xb=this.getMaskFirstResponder()||this;Nb.focus(xb);};e.OK=function(){var
v=this.getChild(0)==this.getCaptionBar()?this.getChild(1):this.getChild(0);return v!=null?(v.getDescendantsOfType(jsx3.gui.Form))[0]:null;};e.emCollapseEdit=function(r){this.setDisplay(ub.b,true);};e.em=function(){};});jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Image",jsx3.gui.Block,[],function(s,h){var
ub={a:' width="',b:'"',c:"",d:' height="',e:"<img",f:' class="jsx30image" src="',g:"/>",h:' alt="',i:/\"/g,j:"&quot;",k:'" ',l:' alt=""'};h.paint=function(){this.applyDynamicProperties();var
V=this.Wl(true);var
Db=(this.getUriResolver()).resolveURI(this.jsxsrc);var
Na=this.getWidth()!=null?ub.a+V.ee()+ub.b:ub.c;var
F=this.getHeight()!=null?ub.d+V.ld()+ub.b:ub.c;return this.jsxsuper(ub.e+jsx3.html._d+ub.f+Db+ub.b+Na+F+this.nk()+this.il()+ub.g);};h.onSetChild=function(b){return false;};h.Hj=function(e,b,m){this.sk(e,b,m,1);};h.getRenderedWidth=function(){var
Ta=this.getRendered();return Ta&&Ta.childNodes[0]?Ta.childNodes[0].width:null;};h.getRenderedHeight=function(){var
W=this.getRendered();return W&&W.childNodes[0]?W.childNodes[0].height:null;};h.getSrc=function(){return this.jsxsrc;};h.setSrc=function(g){this.jsxsrc=g;return this;};h.il=function(){var
Jb=this.getText();return Jb?ub.h+Jb.replace(ub.i,ub.j)+ub.k:ub.l;};});jsx3.Class.defineClass("jsx3.net.Service",null,[jsx3.util.EventDispatcher],function(c,g){var
ub={A:"1.00",Aa:"SOAP-ENV",Ab:".",Ac:" ==> ",Ad:'.getDocument("',Ae:'",jsx3.xml.CDF.Document.newDocument());',Af:"@",B:"positiveInteger",Ba:"http://schemas.xmlsoap.org/soap/envelope/",Bb:"I",Bc:"1.0",Bd:'").selectSingleNode("',Be:'this.CDFCONTEXT.context.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");',Bf:'<xsl:template match="*|@*" mode="x',C:"100",Ca:"SOAP-ENC",Cb:"stubsrc",Cc:"headers/record",Cd:'").getValue();',Ce:"jsxid",Cf:'">',D:"negativeInteger",Da:"http://schemas.xmlsoap.org/soap/encoding/",Db:"namespace",Dc:"name",Dd:"The map has a rule that references an invalid path to a node in the XML cache document, ",De:'this.CDFCONTEXT.context.setAttribute("',Df:"mappings/record[@name='CDF Document' or @name='CDF Record' or @name='CDF Attribute']",E:"-30",Ea:"xsi",Eb:"The server namespace referenced by this jsx3.net.Service instance could not be resolved. Please validate that the namespace is correct: ",Ec:"value",Ed:": ",Ee:'","',Ef:'<data jsxid="jsxroot">',F:"nonPositiveInteger",Fa:"http://www.w3.org/2001/XMLSchema-instance",Fb:"jsx3.IDE",Fc:"Invalid method. setTimeouts() no longer valid. Use setTimeout() instead.",Fd:"The map has a rule that references an invalid XML document in the cache: ",Fe:"*[name()='record' and (record or mappings or (@xpointer and not(@xpointer='')))]",Ff:"</data>",G:"-40",Ga:"xsd",Gb:"When using the XML Mapping Utility, you must have at lease one GUI component open for edit within GI Builder. Otherwise, there is no server instance to to use as the server context. For now, the IDE context will be used.",Gc:"timeout",Gd:"CDF Document",Ge:"*[local-name()='",Gf:'<record jsxid="{generate-id()}">',H:"nonNegativeInteger",Ha:"http://www.w3.org/2001/XMLSchema",Hb:"stubpath",Hc:"//record[@jsxskip]",Hd:"Map to CDF Document",He:"record[@jsxtext='",Hf:"</record>",I:"-10",Ia:"xml",Ib:"O",Ic:"jsxskip",Id:'");',Ie:"The call to the operation, '",If:'<xsl:attribute name="',J:"duration",Ja:"http://www.w3.org/XML/1998/namespace",Jb:"The URL for the rules file does not reference a valid CXF document. Please make sure that the URL is correct (",Jc:"Creating the request message for the operation, '",Jd:"CDF Record",Je:"', hosted at '",Jf:'"><xsl:value-of select="."/></xsl:attribute>',K:"1696-09-01T00:00:00",Ka:"http://xsd.tns.tibco.com/gi/json/2007/",Kb:") and that it returns a valid document:\n\t",Kc:"', using the rules file located at, '",Kd:"Map to CDF Record",Ke:"' just returned with the HTTP Status code, ",Kf:'<xsl:apply-templates select="',L:"dateTime",La:"onSuccess",Lb:"jsxrulesxml",Lc:"/",Ld:'this.CDFCONTEXT.records.next().selectNodes("record");',Le:"' has returned an error (HTTP Status Code: '",Lf:'" mode="x',M:"10-25-2004T11:34:01",Ma:"onError",Mb:"//record[@opname='",Mc:/^([^:]*)(:)/,Md:"CDF Attribute",Me:"').\nDescription: ",Mf:'"/>',N:"gYear",Na:"onTimeout",Nb:"']",Nc:"The stub path (typically the path to the SOAP Envelope Body) does not return a valid node (",Nd:"Map to CDF Attribute",Ne:"The static JSON string did not return a valid JSON object when evaluated. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.",Nf:"</xsl:template>",O:"2005",Oa:"onInvalid",Ob:"//record[@type='T']",Oc:").",Od:'this.CDFCONTEXT.context.getAttribute("',Oe:"The static JSON string did not return a valid JSON object when evaluated. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.\nDescription:",Of:"record[not(mappings/record[@name='CDF Record' and @value and not(@value='')])]",P:"10-25-2004",Pa:"onProcessRule",Pb:"record[@type='",Pc:"The outbound stub URL does not reference a valid document.  Please make sure that the URL is correct (",Pd:"Script",Pe:"' did not return a valid response document. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.\nDescription: ",Q:"gMonthDay",Qa:"response",Qb:"function",Qc:"jsx",Qd:"Map to Script",Qe:"Executing in Static mode, using service message proxy, '",R:"12-25",Ra:"onResponse",Rb:"object",Rc:"xmlns:",Rd:"this.eval(",Re:"'.",S:"gDay",Sa:"",Sb:"jsxhttprequest",Sc:"mappings/record[@name='CDF Record' and @value and not(@value='')]/@value",Sd:");",Se:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound filter and inbound mappings will NOT be run.",T:"25",Ta:"\t:\t",Tb:"//record[@type='W']",Tc:"//record[@jsxid='",Td:"???",Te:"The Cache document, '",U:"gMonth",Ua:"\r\n",Ub:"src",Uc:"The rule node identified by the jsxid, '",Ud:"restrictions/record[@name='nillable' and @value='true']",Ue:"', is being referenced as a bound CDF document for the operation, '",V:"12",Va:"{",Vb:"endpoint",Vc:"', cannot be located. Processing will proceed normally with the active rule and will not be handled by the referenced (unresolved) rule.",Vd:"repeat",Ve:"'. However, this document cannot be located.",W:"gYearMonth",Wa:",",Wb:"Executing the Outbound Filter.",Wc:"type",Wd:"groupref",We:"mode",X:"2004-12",Xa:"}",Xb:"onbeforesend",Xc:"A",Xd:"soaparray",Xe:"Executing the Inbound Mappings.",Y:"base64Binary",Ya:"The XML document could not be converted to JSON, because it does not belong to the namespace, ",Yb:"Executing the Inbound Filter.",Yc:"jsxtext",Yd:"soaparraytype",Ye:"F",Z:"bGJpcmRlYXVAdGliY28uY29t",Za:"safename",Zb:"onafterreceive",Zc:":",Zd:"Array",Ze:"This operation uses a compiled XSLT document to transform the server results to CDF.",_:"float",_a:"array",_b:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound filter will not be run.",_c:"D",_d:"arrayType",_e:"jsx3.xml.Template",a:"Lorem ipsum dolor sit amet consectetuer adipiscing elit In pharetra wisi non dolor Pellentesque a ipsum Nulla laoreet erat a nulla In porta luctus justo Pellentesque arcu odio sollicitudin ac hendrerit non ornare et risus Proin aliquam viverra ligula Aliquam eget lectus eu lorem convallis volutpat Aliquam erat volutpat",aa:"134.52",ab:"array/literal",ac:"method",ad:"ancestor-or-self::record[(@type='I' or @type='O') and @soapuse='encoded' and @soapencstyle='",ae:"record[@jsxtext='arrayType']/@ttns",af:"The compiled transformation was successful. Adding the CDF to the server's cache.",b:"string",ba:"0.923874",bb:'"',bc:"POST",bd:"datatype",be:"record[@jsxtext='arrayType']/@datatype",bf:".//record/mappings/record[@name='CDF Document']",c:"int",ca:"anyURI",cb:'":[',cc:"jsonp",cd:"simple",ce:"./*",cf:"The CDF document that was just created could not be cached, because it has no name. Update the Rules document to use a name for the CDF document being created.",d:"1000",da:"http://www.generalinterface.org/",db:"[",dc:"record",dd:/[^:]*[:]?/,de:"restrictions/record[@name!='minoccur' and @name!='maxoccur']",df:"CDF Mappings require that the first mapping be of type 'CDF Document' and that this mapping type exist only once for an output. Update the Rules document to use a a CDF Document mapping.",e:"integer",ea:"NMTOKEN",eb:"literal",ec:"tns",ed:"xsd:",ee:"restrictions/record[@name='enumeration' and @value='",ef:"The merge failed and a CDF Document could not be created, using the compiled CXF. Run this operation in an uncompiled state to better discern the cause of this error:\n\t",f:"2000",fa:"Y",fb:"]",fc:"Running in static mode. Using sample response document at '",fd:"ttns",fe:"enumeration",ff:"jsx:",g:"double",ga:"NMTOKENS",gb:"simpletype",gc:"'",gd:"xsi:type",ge:"maxExclusive",gf:"xmlns:jsx='",h:"1.234",ha:"NO",hb:"simpletype/literal",hc:"get",hd:"Create Node",he:"maxInclusive",hf:"//",i:"boolean",ia:"Name",ib:'":',ic:"The static response URL does not reference a valid file. The transaction has been cancelled.  Please make sure that the URL is correct (",id:"<",ie:"minInclusive",j:"true",ja:"abc",jb:/^true$|^false$|^null$|^[1-9]+(?:(?:[0-9]*\.*)|\.*)[0-9]*$/,jc:") and that it returns a valid JSON object:\n\t",jd:">",je:"minExclusive",jf:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound mappings will not be run.",k:"date",ka:"NCName",kb:/^xml|^\d|[\W]/i,kc:"The static response URL does not reference a valid document. The transaction has been cancelled.  Please make sure that the URL is correct (",kd:"mappings/record",ke:"length",kf:"//*[@xmlns:",l:"2005-10-19Z",la:"abcdefg",lb:"( ",lc:/^script$/i,ld:"DOM",le:"maxLength",lf:"]/@xmlns:",m:"time",ma:"token",mb:")",mc:"Contacting JSON Service at '",md:"Map to DOM",me:"minLength",mf:"jsx3.net.Service.getURLForNS",n:"22:33:12Z",na:"language",nb:"svc.json",nc:"jsxservicecallback_",nd:'jsx3.GO("',ne:"pattern",nf:"Could not finde the URI for the given namespace prefix.",o:"short",oa:"en-cockney",ob:"json",oc:"callback",od:',"',oe:"Invalidate",of:"3.0.00",p:"1",pa:"normalizedString",pb:"null",pc:"?",pd:").getValue();",pe:" != ",pf:'<?xml version="1.0" ?>',q:"unsignedLong",qa:"ID",qb:"number",qc:"-1",qd:"OUTBOUND",qe:"INBOUND",qf:'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" ',r:"26216842",ra:"IDREFS",rb:"val",rc:"&",rd:"Could not map the JSX object named, '",re:"jsx3.gui.Form",rf:'<xsl:output method="xml" omit-xml-declaration="no"/>',s:"unsignedInt",sa:"ENTITY",sb:"enum",sc:"=",sd:"', because it is null.",se:"jsx3.gui.RadioButton",sf:"</xsl:stylesheet>",t:"10",ta:"ENTITIES",tb:/^\W/g,tc:"jsxservicecall_",td:"NODE",te:"jsx3.gui.CheckBox",tf:'="',u:"unsignedShort",ua:"QName",ub:"x",uc:"script",ud:"CACHE",ue:"false",uf:" ",v:"unsignedByte",va:"qname",vb:/^xml/i,vc:"Using static request document located at '",vd:"::",ve:"jsx3.gui.Block",vf:' exclude-result-prefixes="',w:"byte",wa:"hexBinary",wb:"xxx",wc:"The static request URL does not reference a valid document. The transaction has been cancelled.  Please make sure that the URL is correct (",wd:"Map to Cache Node",we:"Locate Node",wf:'" >',x:"long",xa:"\\u255\\u254",xb:/^\d/,xc:"The request message could not be generated. The transaction has been cancelled",xd:'jsx3.getApp("',xe:').setValue("',xf:"\n",y:"48216842",ya:"notation",yb:"d",yc:"Sending request to remote service located at '",yd:'")',ye:'").setValue("',yf:"The XSLT could not be compiled from the CXF source document:\n\t",z:"decimal",za:"here is a note",zb:/\W/g,zc:"Setting HTTP Request Header, ",zd:"jsx3.CACHE",ze:'.setDocument("',zf:'<xsl:template match="/">'};c.simpletypes={};c.simpletypestext=ub.a;c.simpletypes[ub.b]=function(){var
zb=parseInt(Math.random()*(c.simpletypestext.length-15));return jsx3.util.strTrim(c.simpletypestext.substring(zb,zb+15));};c.simpletypes[ub.c]=ub.d;c.simpletypes[ub.e]=ub.f;c.simpletypes[ub.g]=ub.h;c.simpletypes[ub.i]=ub.j;c.simpletypes[ub.k]=ub.l;c.simpletypes[ub.m]=ub.n;c.simpletypes[ub.o]=ub.p;c.simpletypes[ub.q]=ub.r;c.simpletypes[ub.s]=ub.t;c.simpletypes[ub.u]=ub.p;c.simpletypes[ub.v]=ub.t;c.simpletypes[ub.w]=ub.t;c.simpletypes[ub.x]=ub.y;c.simpletypes[ub.z]=ub.A;c.simpletypes[ub.B]=ub.C;c.simpletypes[ub.D]=ub.E;c.simpletypes[ub.F]=ub.G;c.simpletypes[ub.H]=ub.t;c.simpletypes[ub.F]=ub.I;c.simpletypes[ub.J]=ub.K;c.simpletypes[ub.L]=ub.M;c.simpletypes[ub.N]=ub.O;c.simpletypes[ub.k]=ub.P;c.simpletypes[ub.Q]=ub.R;c.simpletypes[ub.S]=ub.T;c.simpletypes[ub.U]=ub.V;c.simpletypes[ub.W]=ub.X;c.simpletypes[ub.Y]=ub.Z;c.simpletypes[ub._]=ub.aa;c.simpletypes[ub.z]=ub.ba;c.simpletypes[ub.ca]=ub.da;c.simpletypes[ub.ea]=ub.fa;c.simpletypes[ub.ga]=ub.ha;c.simpletypes[ub.ia]=ub.ja;c.simpletypes[ub.ka]=ub.la;c.simpletypes[ub.ma]=ub.fa;c.simpletypes[ub.na]=ub.oa;c.simpletypes[ub.pa]=c.simpletypes[ub.b];c.simpletypes[ub.qa]=ub.qa;c.simpletypes[ub.ra]=ub.ra;c.simpletypes[ub.sa]=ub.sa;c.simpletypes[ub.ta]=ub.ta;c.simpletypes[ub.ua]=ub.va;c.simpletypes[ub.wa]=ub.xa;c.simpletypes[ub.ya]=ub.za;c.inc_inc=0;c.IE={};c.IE[ub.Aa]=ub.Ba;c.IE[ub.Ca]=ub.Da;c.IE[ub.Ea]=ub.Fa;c.IE[ub.Ga]=ub.Ha;c.IE[ub.Ia]=ub.Ja;c.json_namespace=ub.Ka;c.ON_SUCCESS=ub.La;c.ON_ERROR=ub.Ma;c.ON_TIMEOUT=ub.Na;c.ON_INVALID=ub.Oa;c.ON_PROCESS_RULE=ub.Pa;g.init=function(i,d,s,p){this.setRulesURL(i);this.setOperationName(d);if(s!=null)this.setOutboundURL(s);if(p!=null)this.setInboundURL(p);var
za=new
jsx3.net.Request();za.subscribe(ub.Qa,this,ub.Ra);this.setRequest(za);};g.getSupportedNamespaces=function(){var
hb=ub.Sa;for(var cb in c.IE)hb=hb+(cb+ub.Ta+c.IE[cb]+ub.Ua);return hb;};c.XML2JSON=function(b){var
Hb=b.getRootNode();if(Hb&&Hb.getNamespaceURI()==ub.Ka){var
O=[];for(var
sa=Hb.getChildIterator();sa.hasNext();)O.push(c._convertXML(sa.next()));return ub.Va+O.join(ub.Wa)+ub.Xa;}else c.Q2(2,ub.Ya+ub.Ka);};c._convertXML=function(b){var
lb=b.getNamespaceURI();var
M=b.getAttribute(ub.Za)||b.getBaseName();var
Fb,Eb,S;if(lb==ub.Ka+ub._a||lb==ub.Ka+ub.ab){Fb=lb==ub.Ka+ub._a?ub.bb+M+ub.cb:ub.db;var
wb=[];for(var
sb=b.getChildIterator();sb.hasNext();){var
cb=sb.next();for(var
ha=cb.getChildIterator();ha.hasNext();){var
V=ha.next();var
U=V.getNamespaceURI();wb.push(U.indexOf(ub.eb)>-1?c._convertXML(V):ub.Va+c._convertXML(V)+ub.Xa);}}Eb=wb.join(ub.Wa);S=ub.fb;}else if(lb.indexOf(ub.Ka+ub.gb)==0){Fb=lb.indexOf(ub.hb)==-1?ub.bb+M+ub.ib:ub.Sa;if(c._jsonstringreg.exec(b.getValue())){Eb=b.getValue();}else Eb=jsx3.util.strEscapeJSON(b.getValue());S=ub.Sa;}else{var
pa=(b.getChildNodes()).size()>=1;Fb=ub.bb+M+ub.ib+(pa?ub.Va:ub.Sa);var
wb=[];for(var
sb=b.getChildIterator();sb.hasNext();)wb.push(c._convertXML(sb.next()));Eb=wb.join(ub.Wa);S=pa?ub.Xa:ub.Sa;}return Fb+Eb+S;};c._jsonstringreg=ub.jb;c._saferegname=ub.kb;c.JSON2XML=function(k){if(typeof k==ub.b)try{k=jsx3.eval(ub.lb+k+ub.mb);}catch(Kb){var
ab=jsx3.lang.NativeError.wrap(Kb);var
Va=jsx3._msg(ub.nb,k,ab.getMessage());throw new
jsx3.Exception(Va);}var
xa=new
jsx3.xml.Document();xa.createDocumentElement(ub.ob,ub.Ka);c._convertObject(k,xa);return xa;};c._convertObject=function(m,n){var
Jb=typeof m;if(m==null){Jb=ub.pb;m=ub.pb;}if(Jb==ub.b||Jb==ub.qb||Jb==ub.i||Jb==ub.pb){var
Ua=n.createNode(1,ub.rb,ub.Ka+ub.hb);n.appendChild(Ua);Ua.setValue(m);}else if(jsx3.$A.is(m)){var
_a=n.createNode(1,ub.rb,ub.Ka+ub.ab);n.appendChild(_a);for(var
Kb=0;Kb<m.length;Kb++){var
Ua=_a.createNode(1,ub.sb,ub.Ka+ub.sb);_a.appendChild(Ua);c._convertObject(m[Kb],Ua);}}else for(var la in m){var
S=c._saferegname.exec(la)?((((la.replace(ub.tb,ub.ub)).replace(ub.vb,ub.wb)).replace(ub.vb,ub.wb)).replace(ub.xb,ub.yb)).replace(ub.zb,ub.Ab):null;var
pa=m[la];Jb=typeof pa;if(pa==null){Jb=ub.pb;pa=ub.pb;}if(Jb==ub.b||Jb==ub.qb||Jb==ub.i||Jb==ub.pb){var
Ua=n.createNode(1,S||la,ub.Ka+ub.gb);n.appendChild(Ua);if(S)Ua.setAttribute(ub.Za,la,c.IE[ub.Ia]);Ua.setValue(pa);}else if(jsx3.$A.is(pa)){var
_a=n.createNode(1,S||la,ub.Ka+ub._a);n.appendChild(_a);if(S)_a.setAttribute(ub.Za,la,c.IE[ub.Ia]);for(var
Kb=0;Kb<pa.length;Kb++){var
Ua=_a.createNode(1,ub.sb,ub.Ka+ub.sb);_a.appendChild(Ua);c._convertObject(pa[Kb],Ua);}}else{var
Ua=n.createNode(1,S||la,ub.Ka);n.appendChild(Ua);if(S)Ua.setAttribute(ub.Za,la,c.IE[ub.Ia]);c._convertObject(pa,Ua);}}};g.getRulesURL=function(){return this.jsxrulesurl;};g.setRulesURL=function(b){this.jsxrulesurl=b;this.resetRulesTree();return this;};g._getOutboundStubDocument=function(){if(this.jsxstubdocument instanceof jsx3.xml.Document)return this.jsxstubdocument;};g.setOutboundStubDocument=function(a){this.jsxstubdocument=a;return this;};g.getOutboundStubURL=function(){if(this.jsxstuburl==null){var
yb=this.getMEPNode(ub.Bb);if(yb){var
Pa=yb.getAttribute(ub.Cb);return Pa!=null&&jsx3.util.strTrim(Pa)!=ub.Sa?Pa:null;}}else return this.jsxstuburl;};g.setOutboundStubURL=function(m){this.jsxstuburl=m;return this;};g.getNamespace=function(){var
Jb=this.getServer();return Jb!=null?Jb.getEnv(ub.Db):null;};g.getServer=function(){if(this._jsxYn){return this._jsxYn;}else if(this.jsxserverns){var
J=jsx3.lang.System.getApp(this.jsxserverns);if(J instanceof jsx3.app.Server){return J;}else c.Q2(2,ub.Eb+this.jsxserverns);}else{var
ra=jsx3.System.getAllApps();for(var
ba=0;ba<ra.length;ba++)if(ra[ba].getEnv(ub.Db)!=ub.Fb)return ra[ba];}if(jsx3.IDE){c.Q2(2,ub.Gb);return jsx3.IDE;}};g.setNamespace=function(h){if(h instanceof jsx3.app.Server){this._jsxYn=h;this.jsxserverns=h.getEnv(ub.Db);}else{this._jsxYn=null;this.jsxserverns=h;}return this;};g.getOutboundStubPath=function(){if(this.jsxstubpath==null){var
Ba=this.getMEPNode(ub.Bb);if(Ba){var
T=Ba.getAttribute(ub.Hb);return T!=null&&jsx3.util.strTrim(T)!=ub.Sa?T:null;}}else return this.jsxstubpath;};g.setOutboundStubPath=function(o){this.jsxstubpath=o;return this;};g.getInboundURL=function(){if(this.jsxinboundurl==null){var
v=this.getMEPNode(ub.Ib);if(v){var
_=v.getAttribute(ub.Cb);return _!=null&&jsx3.util.strTrim(_)!=ub.Sa?_:null;}}else return this.jsxinboundurl;};g.setInboundURL=function(o){this.jsxinboundurl=o;return this;};g.getOutboundURL=function(){return this.jsxoutboundurl;};g.setOutboundURL=function(l){this.jsxoutboundurl=l;return this;};g.getOperationName=function(){return this.operation;};g.setOperationName=function(k){this.operation=k;return this;};g.getRulesXML=function(){if(!this.jsxrulesxml){var
Aa=this.getRulesURL();var
Lb=new
jsx3.xml.Document();Lb.load(Aa);if(Lb.hasError()){c.Q2(2,ub.Jb+Aa+ub.Kb+Lb.getError());}else this.jsxrulesxml=Lb;}return this.jsxrulesxml;};g.setRulesXML=function(b){this.jsxrulesxml=b;};g.resetRulesTree=function(){delete this[ub.Lb];return this;};g.getOperationNode=function(){var
F=this.getRulesXML();if(F){var
Gb=F.selectSingleNode(ub.Mb+this.getOperationName()+ub.Nb);return Gb?Gb:(this.getRulesXML()).selectSingleNode(ub.Ob);}};g.getMEPNode=function(n){var
T=this.getOperationNode();return T?T.selectSingleNode(ub.Pb+n+ub.Nb):null;};g.getUserName=function(){return this.jsxusername;};g.setUserName=function(j){this.jsxusername=j;return this;};g.getUserPass=function(){return this.jsxuserpass;};g.setUserPass=function(j){this.jsxuserpass=j;return this;};g.setOnSuccess=function(q){this.jsxonsuccess=q;return this;};g.setOnError=function(q){this.jsxonerror=q;return this;};g.onSuccess=function(){this.publish({subject:ub.La});var
_a=typeof this.jsxonsuccess;if(_a==ub.Qb||_a==ub.Rb){this.jsxonsuccess(this);}else if(_a==ub.b)this.eval(this.jsxonsuccess);};g.onError=function(){this.publish({subject:ub.Ma});var
S=typeof this.jsxonerror;if(S==ub.Qb||S==ub.Rb){this.jsxonerror(this);}else if(S==ub.b)this.eval(this.jsxonerror);};g.setRequest=function(e){if(e!=null){this.jsxhttprequest=e;}else delete this[ub.Sb];};g.getRequest=function(){return this.jsxhttprequest;};g.getInboundDocument=function(){return this.jsxinbounddocument==null?null:this.jsxinbounddocument;};g.setInboundDocument=function(i){this.jsxinbounddocument=i;};g.getOutboundDocument=function(){return this.jsxoutbounddocument==null?null:this.jsxoutbounddocument;};g.setOutboundDocument=function(j){this.jsxoutbounddocument=j;};g.getWSDL=function(){if(this.wsdl==null){var
Gb=(this.getRulesXML()).selectSingleNode(ub.Tb);if(Gb){var
Fa=Gb.getAttribute(ub.Ub);}else return;}return this.wsdl==null?this.wsdl=jsx3.CACHE.openDocument(Fa):this.wsdl;};g.getEndpointURL=function(){return this.jsxserviceurl==null?(this.getOperationNode()).getAttribute(ub.Vb):this.jsxserviceurl;};g.setEndpointURL=function(m){this.jsxserviceurl=m;return this;};g.doOutboundFilter=function(n){c.Q2(5,ub.Wb);if(n==null)n=(this.getMEPNode(ub.Bb)).getAttribute(ub.Xb);this.eval(n);};g.doInboundFilter=function(q){c.Q2(5,ub.Yb);if(q==null){var
Mb=this.getMEPNode(ub.Ib);if(Mb){q=Mb.getAttribute(ub.Zb);}else{c.Q2(5,ub._b);return;}}this.eval(q);};g.getMethod=function(){if(this.jsxmethod==null){var
vb=(this.getOperationNode()).getAttribute(ub.ac);if(jsx3.util.strEmpty(vb))vb=ub.bc;this.jsxmethod=vb;}return this.jsxmethod;};g.setMethod=function(o){this.jsxmethod=o;};g.getJSONP=function(){if(this.jsxjsonp==null)this.jsxjsonp=(this.getOperationNode()).getAttribute(ub.cc)==ub.p;return this.jsxjsonp;};g.setJSONP=function(k){this.jsxjsonp=k;};g._setValid=function(e){this.S6=e;};g._isValid=function(){return this.S6;};g._isJSON=function(n){var
E=this.getMEPNode(n);var
ga=E.selectSingleNode(ub.dc);return ga&&ga.getAttribute(ub.ec)==ub.Ka;};g.doCall=function(q){var
Na=this.getRulesXML();if(Na!=null)if(!this.getMode()){var
kb=(this.getServer()).resolveURI(this.getInboundURL());c.Q2(5,ub.fc+kb+ub.gc);if(this._isJSON(ub.Ib)){var
Qa=jsx3.net.Request.open(ub.hc,kb,false);Qa.send();var
y=Qa.getResponseText();if(!jsx3.util.strEmpty(y)){jsx3.sleep(function(){this.onResponse({target:{getResponseText:function(){return y;}}});},null,this);}else c.Q2(2,ub.ic+kb+ub.jc+w.getError());}else{var
w=((this.getServer()).getCache()).getOrOpenDocument(kb,kb);if(w.hasError()){c.Q2(2,ub.kc+kb+ub.Kb+w.getError());}else{w=w.cloneDocument();jsx3.sleep(function(){this.onResponse({target:{getResponseXML:function(){return w;}}});},null,this);}}}else if((this.getMethod()).search(ub.lc)==0){var
lb=((this.getServer()).resolveURI(this.getEndpointURL())).toString();c.Q2(5,ub.mc+lb+ub.gc);var
Lb=this.getUniqueId();if(this.getJSONP()){var
N=ub.nc+Lb;var
u=this;window[N]=function(k){u.doRespond(k);};var
tb=typeof this.getJSONP()==ub.b?this.getJSONP():ub.oc;lb=lb+(lb.indexOf(ub.pc)==ub.qc?ub.pc:ub.rc)+tb+ub.sc+N;}(this.getServer()).loadInclude(lb,ub.tc+Lb,ub.uc,false);}else{var
ba=this.getOutboundURL();var
I;if(ba){ba=(this.getServer()).resolveURI(ba);c.Q2(5,ub.vc+ba+ub.gc);I=((this.getServer()).getCache()).getOrOpenDocument(ba,ba);if(I.hasError()){c.Q2(2,ub.wc+ba+ub.Kb+I.getError());return;}else I=I.cloneDocument();}else{I=this.getServiceMessage();if((this.getMethod()).toUpperCase()==ub.bc&&!I){c.Q2(4,ub.xc);return;}}if(!this._isValid()&&q){return false;}else{this.setOutboundDocument(I);this.doOutboundFilter();c.Q2(5,ub.yc+this.getEndpointURL()+ub.gc);var
fb=this.getRequest();fb.open(this.getMethod(),this.getEndpointURL(),true,this.getUserName(),this.getUserPass());var
t=this.getHeaders();var
vb;for(vb in t)if(!(typeof t[vb]==ub.Qb||typeof t[vb]==ub.Rb)){fb.setRequestHeader(vb.toString(),t[vb]);c.Q2(5,ub.zc+vb+ub.Ac+t[vb]+ub.gc);}var
Db;if(this._isJSON(ub.Bb)){Db=c.XML2JSON(I);}else Db=I!=null&&I instanceof jsx3.xml.Document&&!I.hasError()?I.serialize(ub.Bc):null;fb.send(Db,this.getTimeout());return true;}}};g.setRequestHeader=function(f,i){var
Ea=this.getHeaders();Ea[f]=i;};g.getHeaders=function(){if(this.jsxheaders==null){this.jsxheaders={};var
da=(this.getOperationNode()).selectNodes(ub.Cc);for(var
Y=da.iterator();Y.hasNext();){var
qa=Y.next();this.jsxheaders[qa.getAttribute(ub.Dc)+ub.Sa]=qa.getAttribute(ub.Ec)+ub.Sa;}}return this.jsxheaders;};g.setTimeouts=function(s,n,i,q){c.Q2(4,ub.Fc);return this;};g.onTimeout=function(){this.publish({subject:ub.Na});};g.setTimeout=function(s,q,d){(this.getRequest()).subscribe(ub.Gc,this,ub.Na);this.subscribe(ub.Na,q,d);this.jsxtimeout=s;return this;};g.getTimeout=function(){return this.jsxtimeout;};g.resetRules=function(){var
x=(this.getRulesXML()).selectNodes(ub.Hc);for(var
Ya=x.iterator();Ya.hasNext();)(Ya.next()).removeAttribute(ub.Ic);return this;};g._resetNamespaceRegistry=function(){this.nshash={};this.nsinc=0;};c.Q2=function(h,l){if(c.dK==null)if(jsx3.util.Logger){c.dK=jsx3.util.Logger.getLogger(c.jsxclass.getName());if(c.dK==null)return;}else return;c.dK.log(h,l);};g._reset=function(){this.resetRules();this._setValid(true);this._resetNamespaceRegistry();};g.getServiceMessage=function(d,k){var
G,Oa;this._reset();var
_=this.getOperationNode();c.Q2(5,ub.Jc+this.getOperationName()+ub.Kc+this.getRulesURL()+ub.gc);if(!k){G=this._getOutboundStubDocument();k=this.getOutboundStubURL();}if(k||G instanceof jsx3.xml.Document){var
Aa=this.getServer();if(!(G instanceof jsx3.xml.Document)){k=Aa.resolveURI(k);G=((this.getServer()).getCache()).getOrOpenDocument(k,k);}if(!G.hasError()){var
aa=this.getOutboundStubPath();var
Pa=aa.split(ub.Lc);var
L={};for(var
Ua=0;Ua<Pa.length;Ua++)if(Pa[Ua].search(ub.Mc)>-1)L[RegExp.$1]=1;G=G.cloneDocument();Oa=G.selectSingleNode(aa,G.getDeclaredNamespaces(L));if(!Oa){c.Q2(2,ub.Nc+aa+ub.Oc);return;}}else{c.Q2(2,ub.Pc+k+ub.Kb+G.getError());return;}}var
kb=_.selectSingleNode(ub.Pb+(d==null?ub.Bb:(d.substring(0,1)).toUpperCase())+ub.Nb);var
qb=kb.selectNodes(ub.dc);var
D;for(var
Ua=qb.iterator();Ua.hasNext();)D=this.doAddAndRecurse(G,Oa,Ua.next(),d,true);return G?G:D;};g.registerNamespace=function(s,q,b){var
Ib=ub.Sa;var
Mb=null;if(s==c.IE[ub.Ia]){Ib=ub.Ia;Mb=s;}else if(s!=ub.Sa&&this.nshash[s]!=null){Mb=s;Ib=this.nshash[s];}else if(s!=ub.Sa){this.nsinc++;this.nshash[s]=ub.Qc+this.nsinc;Mb=s;Ib=ub.Qc+this.nsinc;if(b!=true){var
kb=q.getRootNode();kb.setAttribute(ub.Rc+Ib,Mb);}}return {prefix:Ib,uri:Mb};};g.doAddAndRecurse=function(_jsxc,_jsxl,h,p,f){if(h.getAttribute(ub.Ic))return;var
xa=false;var
Ka=this;var
Da=function(m){m.setAttribute(ub.Ic,ub.p);};var
Db=function(a){a.removeAttribute(ub.Ic);};var
gb=function(b){(b.getParent()).removeChild(b);};var
ua=function(d){Ka.setNodeValue(va,d);};var
x=function(a){return Ka.getNamedNodeChild(a,h);};var
Ib=function(q){(Ka.getNamedRuleChild(q,h)).setAttribute(ub.Ic,ub.p);};var
F=function(a){(Ka.getNamedRuleChild(a,h)).setAttribute(ub.Ic,ub.p);};var
B=function(a){(Ka.getNamedRuleChild(a,h)).removeAttribute(ub.Ic);};var
Jb=function(o){Ka.CDFCONTEXT.context=Ka.CDFCONTEXT.context.selectSingleNode(o);};var
vb=function(j){Ka.CDFCONTEXT.records=Ka.CDFCONTEXT.context.selectNodes(j);};var
t=h.selectSingleNode(ub.Sc);if(t){var
Pa=h.selectSingleNode(ub.Tc+t.getValue()+ub.Nb);if(Pa!=null){if(this.CDFCONTEXT&&this.CDFCONTEXT.records&&this.CDFCONTEXT.records.hasNext())h=Pa;}else c.Q2(2,ub.Uc+t.getValue()+ub.Vc);}var
na=h.getAttribute(ub.ec);var
Ca=na?this.registerNamespace(na,_jsxc,f||h.getAttribute(ub.Wc)==ub.Xc):{prefix:ub.Sa,uri:null};var
Ra=h.getAttribute(ub.Yc);if(h.getAttribute(ub.Wc)==ub.Xc){var
Bb=true;var
va=_jsxc.createNode(2,Ca.prefix+(Ca.prefix!=ub.Sa?ub.Zc:ub.Sa)+Ra,Ca.uri);_jsxl.setAttributeNode(va);}else if(h.getAttribute(ub.Wc)==ub._c){var
Bb=false;var
va=_jsxc.createNode(4);_jsxl.appendChild(va);}else{var
Bb=false;if(_jsxc){var
va=_jsxc.createNode(1,Ca.prefix+(Ca.prefix!=ub.Sa?ub.Zc:ub.Sa)+Ra,Ca.uri);_jsxl.appendChild(va);}else{_jsxc=new
jsx3.xml.Document();var
va=_jsxc.createDocumentElement(Ca.prefix+(Ca.prefix!=ub.Sa?ub.Zc:ub.Sa)+h.getAttribute(ub.Yc),Ca.uri);}var
Q=h.selectSingleNode(ub.ad+c.IE[ub.Ca]+ub.Nb);if(Q!=null&&Q!=ub.Sa){var
S;if((S=h.getAttribute(ub.bd))!=null&&S!=ub.Sa){var
Y=h.getAttribute(ub.cd);if(Y!=null&&Y!=ub.Sa){if(S.indexOf(ub.Zc)>0)S=S.replace(ub.dd,ub.Sa);S=ub.ed+S;}else{if(S.indexOf(ub.Zc)>0)S=S.replace(ub.dd,ub.Sa);na=h.getAttribute(ub.fd);Ca=this.registerNamespace(na,_jsxc,f);S=Ca.prefix==ub.Sa?S:Ca.prefix+ub.Zc+S;}var
Za=_jsxc.createNode(2,ub.gd,ub.Fa);Za.setValue(S);va.setAttributeNode(Za);}}}this.publish({subject:ub.Pa,rule:h,action:ub.hd,description:ub.id+va.getNodeName()+ub.jd,level:6});var
L=h.selectNodes(ub.kd);var
nb=false;var
ta;var
P,Ja;for(var
I=L.iterator();I.hasNext();){var
_a=this.CDFCONTEXT?this.CDFCONTEXT.context:null;var
D=this.CDFCONTEXT?this.CDFCONTEXT.records:null;var
Nb=this.CDFCONTEXT&&this.CDFCONTEXT.parentContext?this.CDFCONTEXT.parentcontext:null;var
wb=I.next();var
Eb=wb.getAttribute(ub.Dc);var
oa=wb.getAttribute(ub.Ec);var
ia=this.getNamespace();if(ia==null||jsx3.util.strTrim(ia)==ub.Sa)ia=null;if(Eb==ub.ld){var
Ua=jsx3.GO(oa,ia);if(Ua!=null){this.publish({subject:ub.Pa,rule:h,action:ub.md,description:ub.nd+oa+ub.bb+(ia?ub.od+ia+ub.bb:ub.Sa)+ub.pd,level:6});this.doMapAndUpdate(va,Ua,ub.qd,h);}else c.Q2(2,ub.rd+oa+ub.sd);}else if(Eb==ub.td||Eb==ub.ud){var
pb=oa.split(ub.vd);var
X=pb[0];var
C=this.getServer();if(C!=null){var
Na=(C.getCache()).getDocument(X);}else var
Na=jsx3.CACHE.getDocument(X);if(Na!=null){var
W=Na.selectSingleNode(pb[1]);if(W!=null){this.publish({subject:ub.Pa,rule:h,action:ub.wd,description:(ia?ub.xd+ia+ub.yd:ub.zd)+ub.Ad+pb[0]+ub.Bd+pb[1]+ub.Cd,level:6});this.updateNode(va,W,ub.qd);}else c.Q2(2,ub.Dd+pb[0]+ub.Ed+pb[1]+ub.Ab);}else c.Q2(2,ub.Fd+pb[0]+ub.Ab);}else if(Eb==ub.Gd){this.publish({subject:ub.Pa,rule:h,action:ub.Hd,description:(ia?ub.xd+ia+ub.yd:ub.zd)+ub.Ad+oa+ub.Id,level:6});this.getCDFDocument(oa,ub.qd,ia);}else if(Eb==ub.Jd){var
_;if(_=this.CDFCONTEXT.records.next()){this.publish({subject:ub.Pa,rule:h,action:ub.Kd,description:ub.Ld,level:6});P=_;Ja=_.selectNodes(ub.dc);this.CDFCONTEXT=new
c.CdfContext(P,this.CDFCONTEXT,Ja);ta=true;nb=true;}else{gb(va);xa=true;ta=false;}}else if(Eb==ub.Md){var
Va=this.CDFCONTEXT.context.getAttribute(oa);if(Va){this.publish({subject:ub.Pa,rule:h,action:ub.Nd,description:ub.Od+oa+ub.Id,level:6});ua(Va);}}else if(Eb==ub.Pd){this.publish({subject:ub.Pa,rule:h,action:ub.Qd,description:ub.Rd+oa+ub.Sd,level:6});var
jb={RULENODE:h,MESSAGENODE:va,my:Ka,OBJECTNAME:oa,OBJECTTYPE:Eb,CDFCONTEXTPARENT:Nb,CDFCONTEXT:_a,CDFRECORDS:D,setCDFRecords:vb,setCDFContext:Jb,enableNamedRule:B,disableNamedRule:F,enableReferencedRule:Da,disableReferencedRule:Db,skipNamedRule:Ib,getNamedChild:x,setValue:ua,removeChild:gb};var
Xa=this.eval(oa,jb);}}if(va.getValue()==ub.Sa&&p!=null&&h.selectSingleNode(ub.dc)==null){var
Z=h.getAttribute(ub.bd);if(Z!=null&&Z!=ub.Sa){var
y=c.simpletypes[Z.substring(Z.indexOf(ub.Zc)+1)];var
pa=y!=null?typeof y==ub.Qb?y():y:ub.Td;va.setValue(pa);}}else if(!xa&&va.getValue()==ub.Sa&&h.selectSingleNode(ub.dc)==null&&h.getAttribute(ub.Wc)!=ub.Xc&&!f&&h.selectSingleNode(ub.Ud)==null){gb(va);xa=true;}if(xa!=true)this.validate(va,h);if(ta==null){var
Sa=(Sa=h.getAttribute(ub.Vd))!=null?Sa:false;ta=this.eval(Sa);}if(!xa&&h.getAttribute(ub.Wd)!=ub.p&&(h.getParent()).getAttribute(ub.Wd)==ub.p){var
O=false;var
w=_jsxl;var
Cb=h.getParent();while(Cb.getAttribute(ub.Wd)==ub.p){Cb=Cb.getParent();var
K=w;w=w.getParent();}if(Bb){_jsxl.removeAttributeNode(va);w.setAttributeNode(va);}else w.insertBefore(va,K);}else if(h.getAttribute(ub.Wd)==ub.p){var
O=true;}else var
O=false;var
la=h.selectNodes(ub.dc);for(var
I=la.iterator();I.hasNext();)this.doAddAndRecurse(_jsxc,va,I.next(),p,null);if(nb&&this.CDFCONTEXT)this.CDFCONTEXT=this.CDFCONTEXT.parentcontext;var
na=h.getAttribute(ub.Xd);if(na!=null&&na!=ub.Sa){Ca=this.registerNamespace(na,_jsxc,f);va.setValue(Ca.prefix+ub.Zc+h.getAttribute(ub.Yd));}if(h.getAttribute(ub.bd)==ub.Zd&&h.getAttribute(ub.fd)==ub.Da){var
qa=va.getAttributes();for(var
I=qa.iterator();I.hasNext();){var
E=I.next();if(E.getBaseName()==ub._d){var
Aa=(h.selectSingleNode(ub.ae)).getValue();var
Gb=this.nshash[Aa];var
z=Gb+ub.Zc+(h.selectSingleNode(ub.be)).getValue()+ub.db+(va.selectNodes(ub.ce)).size()+ub.fb;E.setValue(z);}}}if(ta&&!O){this.doAddAndRecurse(_jsxc,_jsxl,h,p,null);}else if(O&&!Bb)(va.getParent()).removeChild(va);return _jsxc;};g.findNameByValue=function(h,p){for(var Jb in h)if(h[Jb]==p)return Jb.toString();};g.validate=function(r,j){var
Kb=j.selectNodes(ub.de);var
X=true;if(Kb.size()>0){var
Ca=r.getValue()+ub.Sa;if(!j.selectSingleNode(ub.ee+Ca+ub.Nb))for(var
sa=Kb.iterator();X&&sa.hasNext();){var
yb=sa.next();var
kb=yb.getAttribute(ub.Dc);var
Q=yb.getAttribute(ub.Ec);if(kb==ub.fe){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.ge&&!(Ca<Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.he&&!(Ca<=Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.ie&&!(Ca>=Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.je&&!(Ca>Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.ke&&Ca.length!=Number(Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.le&&Ca.length>Number(Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.me&&Ca.length<Number(Q)){this.invalidate(r,j,Ca,kb,Q);X=false;}else if(kb==ub.ne){var
Gb=new
RegExp(Q);if(Ca.search(Gb)!=0){this.invalidate(r,j,Ca,kb,Q);X=false;}}}}return X;};g.invalidate=function(q,k,h,l,a){this._setValid(false);this.publish({subject:ub.Oa,rule:k,message:q,type:l,value:a});this.publish({subject:ub.Pa,rule:k,action:ub.oe,description:h+ub.pe+l+ub.Zc+a,level:3});};g.updateNode=function(j,l,d){if(d==ub.qe){var
Da=j;var
I=l;}else{var
Da=l;var
I=j;}var
T=this.getNodeValue(Da);this.setNodeValue(I,T);};g.setNodeValue=function(s,a){s.setValue(a+ub.Sa);};g.getNodeValue=function(j){return j.getValue();};g.doMapAndUpdate=function(m,s,b,l){if(jsx3.gui.Form&&s.instanceOf(ub.re)){if(jsx3.gui.RadioButton&&s.instanceOf(ub.se)){if(b==ub.qe){s.setGroupValue(this.getNodeValue(m));}else{var
Hb=s.getGroupValue();this.setNodeValue(m,Hb==null?ub.Sa:Hb);}}else if(jsx3.gui.CheckBox&&s.instanceOf(ub.te)){if(b==ub.qe){var
Ca=this.getNodeValue(m);s.setChecked(this.eval(Ca)?1:0);}else this.setNodeValue(m,s.getChecked()?ub.j:ub.ue);}else if(b==ub.qe){s.setValue(this.getNodeValue(m));}else if(b==ub.qd)this.setNodeValue(m,s.getValue()+ub.Sa);}else if(jsx3.gui.Block&&s.instanceOf(ub.ve))if(b==ub.qe){s.setText(this.getNodeValue(m),true);}else this.setNodeValue(m,s.getText());};g.doReadAndRecurse=function(a,k){var
Cb=this;var
Wa=function(r){return Cb.getNamedNodeChild(r,a);};var
va=k.selectSingleNode(ub.Sc);if(va){var
ca=k.selectSingleNode(ub.Tc+va.getValue()+ub.Nb);if(ca!=null){k=ca;}else c.Q2(2,ub.Uc+va.getValue()+ub.Vc);}this.publish({subject:ub.Pa,rule:k,action:ub.we,description:ub.id+a.getNodeName()+ub.jd,level:6});var
zb=k.selectNodes(ub.kd);var
Ua=true;var
L=false;for(var
W=zb.iterator();W.hasNext();){var
S=this.CDFCONTEXT?this.CDFCONTEXT.context:null;var
da=W.next();var
Db=da.getAttribute(ub.Dc);var
ma=da.getAttribute(ub.Ec);var
J=this.getNamespace();if(Db==ub.ld){var
Ea=jsx3.GO(ma,J);if(Ea!=null){this.publish({subject:ub.Pa,rule:k,action:ub.md,description:ub.nd+ma+ub.bb+(J?ub.od+J+ub.bb:ub.Sa)+ub.xe+a.getValue()+ub.Id,level:6});this.doMapAndUpdate(a,Ea,ub.qe,k);}else c.Q2(2,ub.rd+ma+ub.sd);}else if(Db==ub.td||Db==ub.ud){var
jb=ma.split(ub.vd);var
ia=jb[0];var
Sa=this.getServer();if(Sa!=null){var
Ba=(Sa.getCache()).getDocument(ia);}else var
Ba=jsx3.CACHE.getDocument(ia);if(Ba!=null){var
_=Ba.selectSingleNode(jb[1]);if(_!=null){this.publish({subject:ub.Pa,rule:k,action:ub.wd,level:6,description:(J?ub.xd+J+ub.yd:ub.zd)+ub.Ad+jb[0]+ub.Bd+jb[1]+ub.ye+jsx3.util.strTruncate(a.getValue(),30,null,0.6666666666666666)+ub.Id});this.updateNode(a,_,ub.qe);}else c.Q2(2,ub.Dd+jb[0]+ub.Ed+jb[1]+ub.Ab);}else c.Q2(2,ub.Fd+jb[0]+ub.Ab);}else if(Db==ub.Gd){this.publish({subject:ub.Pa,rule:k,action:ub.Hd,description:(J?ub.xd+J+ub.yd:ub.zd)+ub.ze+ma+ub.Ae,level:6});this.getCDFDocument(ma,ub.qe,J);}else if(Db==ub.Jd){this.publish({subject:ub.Pa,rule:k,action:ub.Kd,description:ub.Be,level:6});var
V=this.CDFCONTEXT.context.createNode(1,ub.dc);V.setAttribute(ub.Ce,this.getUniqueId());this.CDFCONTEXT.context.appendChild(V);this.CDFCONTEXT=new
c.CdfContext(V,this.CDFCONTEXT);L=true;}else if(Db==ub.Md){this.publish({subject:ub.Pa,rule:k,action:ub.Nd,description:ub.De+ma+ub.Ee+jsx3.util.strTruncate(a.getValue(),30,null,0.6666666666666666)+ub.Id,level:6});this.CDFCONTEXT.context.setAttribute(ma,a.getValue());Ua=false;}else if(Db==ub.Pd){this.publish({subject:ub.Pa,rule:k,action:ub.Qd,description:ub.Rd+ma+ub.Sd,level:6});var
P={my:Cb,OBJECTNAME:ma,OBJECTTYPE:Db,CDFCONTEXT:S,MESSAGENODE:a,RULENODE:k,RECURSE:Ua,getNamedChild:Wa};this.eval(ma,P);}}if(Ua)this._doReadAndRecurse(k,a);if(L)this.CDFCONTEXT=this.CDFCONTEXT.parentcontext;};g._doReadAndRecurse=function(l,b){var
hb=l.selectNodes(ub.Fe);for(var
V=hb.iterator();V.hasNext();){var
za=V.next();var
ba=za.getAttribute(ub.Yc);if(za.getAttribute(ub.Wc)==ub.Xc){var
Ib=b.getAttributes();L6:for(var
La=Ib.iterator();La.hasNext();){var
Nb=La.next();if(Nb.getBaseName()==ba){this.doReadAndRecurse(Nb,za);break L6;}}}else if(za.getAttribute(ub.Wd)==ub.p){this._doReadAndRecurse(za,b);}else{var
Ib=b.selectNodes(ub.Ge+ba+ub.Nb);for(var
La=Ib.iterator();La.hasNext();)this.doReadAndRecurse(La.next(),za);}}};c.CdfContext=function(k,n,s){this.context=k;this.parentcontext=n;this.records=s;};g.getNamedNodeChild=function(d,a){var
ab=a.getChildNodes();for(var
ib=ab.iterator();ib.hasNext();){var
ea=ib.next();var
ia=ea.getBaseName();if(ia==d)return ea;}};g.doval=function(s){this.eval(s);};g.getNamedRuleChild=function(f,h){return h.selectSingleNode(ub.He+f+ub.Nb);};g.getUniqueId=function(){return jsx3.xml.CDF.getKey();};g.doRespond=function(s){if(this._isJSON(ub.Ib)&&!(s.target&&s.target.getResonseText instanceof Function)){this.onResponse({target:{getResponseText:function(){return s;}}});}else this.onResponse(s);};g.onResponse=function(b){var
wb=b.target;var
Da;if(wb instanceof jsx3.net.Request){var
jb=false;this.status=wb.getStatus();this.statusText=wb.getStatusText();c.Q2(5,ub.Ie+this.getOperationName()+ub.Je+this.getEndpointURL()+ub.Ke+this.status);if(this.status!=200&&this.status!=202){c.Q2(2,ub.Ie+this.getOperationName()+ub.Je+wb.getURL()+ub.Le+this.status+ub.Me+this.statusText);this.onError();return;}if(this._isJSON(ub.Ib)){var
tb=wb.getResponseText();try{Da=c.JSON2XML(tb);if(!Da){c.Q2(2,ub.Ne);this.onError();return;}}catch(Kb){var
Ma=jsx3.lang.NativeError.wrap(Kb);c.Q2(2,ub.Oe+Ma.getMessage());this.onError();return;}}else Da=wb.getResponseXML();if(Da&&!Da.hasError()){this.setInboundDocument(Da);}else if(this.getMEPNode(ub.Ib)){c.Q2(2,ub.Ie+this.getOperationName()+ub.Je+this.getEndpointURL()+ub.Pe+this.statusText);this.onError();return;}}else{if(this._isJSON(ub.Ib)){var
tb=wb.getResponseText();try{Da=c.JSON2XML(tb);if(!Da){c.Q2(2,ub.Ne);this.onError();return;}}catch(Kb){var
Ma=jsx3.lang.NativeError.wrap(Kb);c.Q2(2,ub.Oe+Ma.getMessage());this.onError();return;}}else Da=wb.getResponseXML();this.setInboundDocument(Da);this.status=200;this.statusText=ub.Qe+this.getInboundURL()+ub.Re;jb=this.getStatus()!=200&&this.getStatus()!=202;}var
qb=this.getMEPNode(ub.Ib);if(qb){this.doInboundFilter();this.doInboundMap();}else c.Q2(5,ub.Se);if(jb){this.onError();}else this.onSuccess();};g.getCDFDocument=function(o,a,h){var
ga=this.getServer();var
T=ga!=null?ga.getCache():jsx3.CACHE;if(a==ub.qd){var
rb=T.getDocument(o);if(rb){this.CDFCONTEXT=new
c.CdfContext(rb.getRootNode(),null,(rb.getRootNode()).selectNodes(ub.dc));}else c.Q2(2,ub.Te+o+ub.Ue+this.getOperationName()+ub.Ve);}else{var
rb=jsx3.xml.CDF.Document.newDocument();T.setDocument(o,rb);this.CDFCONTEXT=new
c.CdfContext(rb.getRootNode(),null);this._jsxallcdfs[o]=T;}};g.getStatus=function(){var
R=this._status||this.status;return !R?200:R;};g.setStatus=function(h){this._status=h;};g.getMode=function(){return this._jsxmode!=null?this._jsxmode:(this.getServer()).getEnv(ub.We);};g.setMode=function(l){this._jsxmode=l;};g.doInboundMap=function(){c.Q2(5,ub.Xe);var
Mb=this.getOperationNode();if(Mb){var
pb=this.getInboundDocument();var
fb=this.getStatus();var
G=fb!=200&&fb!=202&&fb!=0?ub.Ye:ub.Ib;if(G==ub.Ib&&this.dh instanceof jsx3.xml.Document){c.Q2(5,ub.Ze);jsx3.require(ub._e);var
gb=new
jsx3.xml.Template(this.dh);var
La=jsx3.xml.CDF.Document.wrap(gb.transformToObject(pb));if(!La.hasError()){c.Q2(5,ub.af);var
vb=this.getMEPNode(ub.Ib);var
P=vb.selectSingleNode(ub.bf);if(P){var
ka=P.getAttribute(ub.Ec);if(ka&&(ka=jsx3.util.strTrim(String(ka)))!=ub.Sa){var
R=this.getServer();var
ha=R!=null?R.getCache():jsx3.CACHE;ha.setDocument(ka,La);}else c.Q2(2,ub.cf);}else c.Q2(2,ub.df);}else c.Q2(2,ub.ef+La.getError());}else{var
V=this.getMEPNode(G);if(V==null&&G==ub.Ye)V=this.getMEPNode(ub.Ib);if(V){var
kb=V.selectNodes(ub.dc);for(var
x=kb.iterator();x.hasNext();){var
oa=x.next();var
Ra=oa.getAttribute(ub.Yc);var
hb=oa.getAttribute(ub.ec);var
_=ub.Sa;if(hb!=null&&jsx3.util.strTrim(hb)!=ub.Sa){_=ub.ff;pb.setSelectionNamespaces(ub.gf+hb+ub.gc);}var
Ma=ub.hf+_+Ra;var
Jb=pb.selectSingleNode(Ma);if(Jb!=null){this._jsxallcdfs={};if(!Jb.equals(pb.getRootNode())){var
ba=Jb.getParent();var
Ta=ba.selectNodes(_+Ra);for(var
ya=Ta.iterator();ya.hasNext();)this.doReadAndRecurse(ya.next(),oa);}else this.doReadAndRecurse(Jb,oa);for(var wb in this._jsxallcdfs){var
Wa=this._jsxallcdfs[wb];Wa.setDocument(wb,Wa.getDocument(wb));}}}}else c.Q2(5,ub.jf);}}};c.getNSForURL=function(q,i){var
qb=(q.getRootNode()).getAttributes();for(var
bb=qb.size()-1;bb>=0;bb--)if((qb.get(bb)).getValue()==i)return (qb.get(bb)).getBaseName();};c.getURLForNS=function(a,s){if(jsx3.util.strEmpty(s))return null;try{var
Hb=a.selectSingleNode(ub.kf+s+ub.lf+s);}catch(Kb){var
Gb={};Gb.FUNCTION=ub.mf;Gb.PREFIX=s+ub.Sa;Gb.DESCRIPTION=ub.nf;jsx3.util.Logger.logError(Gb);return null;}return Hb?Hb.getValue():null;};c.getVersion=function(){return ub.of;};g.compile=function(){this._resetCompiler();var
wb=this.getMEPNode(ub.Ib);var
Na=[];Na.push(ub.pf);Na.push(ub.qf);Na.push(ub.rf);this._compile(wb,Na,true);Na.push(ub.sf);var
ea=[],D=[];for(var pa in this.Xm){ea.push(this.Xm[pa]);D.push(ub.Rc+this.Xm[pa]+ub.tf+pa+ub.bb);}Na[1]+=(D.join(ub.uf)+ub.vf+ea.join(ub.uf)+ub.wf);var
Db=Na.join(ub.xf);var
sa=new
jsx3.xml.Document();sa.loadXML(Db);if(sa.hasError()){c.Q2(2,ub.yf+sa.getError());return;}else this.dh=sa;return sa;};g._compile=function(l,n,m){var
Ib=this.qL(l);if(m){n.push(ub.zf);}else{var
ka=Ib?Ib.prefix+ub.Zc:ub.Sa;var
Ca=l.getAttribute(ub.Yc);if(l.getAttribute(ub.Wc)==ub.Xc)Ca=ub.Af+Ca;var
oa=l.getAttribute(ub.Ce);n.push(ub.Bf+oa+ub.Cf);}var
Z=l.selectNodes(ub.Df);var
X=[];for(var
aa=Z.iterator();aa.hasNext();){var
fa=aa.next();var
Cb=fa.getAttribute(ub.Dc);var
pb=fa.getAttribute(ub.Ec);if(Cb==ub.Gd){n.push(ub.Ef);X.push(ub.Ff);}else if(Cb==ub.Jd){n.push(ub.Gf);X.push(ub.Hf);}else n.push(ub.If+pb+ub.Jf);}var
Ya=l.selectNodes(ub.dc);for(var
aa=Ya.iterator();aa.hasNext();){var
La=aa.next();var
nb;var
wb=La.selectSingleNode(ub.Sc);if(wb){var
Ka=La.selectSingleNode(ub.Tc+wb.getValue()+ub.Nb);if(Ka!=null){nb=La.getAttribute(ub.Yc);La=Ka;}}var
da=this.qL(La);var
ka=da?da.prefix+ub.Zc:ub.Sa;if(m)ka=ub.hf+ka;var
Ca=nb||La.getAttribute(ub.Yc);if(La.getAttribute(ub.Wc)==ub.Xc)Ca=ub.Af+Ca;var
oa=La.getAttribute(ub.Ce);n.push(ub.Kf+ka+Ca+ub.Lf+oa+ub.Mf);}for(var
aa=X.length-1;aa>=0;aa--)n.push(X[aa]);n.push(ub.Nf);Ya=l.selectNodes(ub.Of);for(var
aa=Ya.iterator();aa.hasNext();){var
La=aa.next();this._compile(La,n);}};g._resetCompiler=function(){this.dh=null;this.Xm={};this.fo=0;};g.qL=function(f){var
Qa=f.getAttribute(ub.ec);if(Qa==c.IE[ub.Ia]){return;this.Xm[Qa]=ub.Ia;return {prefix:ub.Ia,namespace:Qa};}else if(Qa&&(Qa=jsx3.util.strTrim(String(Qa)))!=ub.Sa){if(!this.Xm[Qa]){this.fo+=1;this.Xm[Qa]=ub.Qc+this.fo;}return {prefix:ub.Qc+this.fo,namespace:Qa};}};});jsx3.net.Service.prototype.getOperation=jsx3.net.Service.prototype.getOperationName;jsx3.net.Service.prototype.setOperation=jsx3.net.Service.prototype.setOperationName;jsx3.net.Service.prototype.getStubURL=jsx3.net.Service.prototype.getOutboundStubURL;jsx3.net.Service.prototype.setStubURL=jsx3.net.Service.prototype.setOutboundStubURL;jsx3.net.Service.prototype.addHeader=jsx3.net.Service.prototype.setRequestHeader;jsx3.net.Service.prototype.setServiceURL=jsx3.net.Service.prototype.setEndpointURL;jsx3.Service=jsx3.net.Service;