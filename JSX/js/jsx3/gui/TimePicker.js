/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block","jsx3.util.NumberFormat");jsx3.Class.defineClass("jsx3.gui.TimePicker",jsx3.gui.Block,[jsx3.gui.Form],function(f,m){var
ub={A:"inline",Aa:"&#160;",B:"input[text]",Ba:"ampm",C:"1 1 0 0",Ca:"O1",D:"solid 0px;solid 0px;solid 0px;solid 0px",Da:"MS",E:"0",Ea:"jsxchange",F:"solid 0px;solid 0px;solid 0px;solid 1px #d8d8e5",Fa:"jsxblur",G:"keydown",Ga:"_jsxj2",H:"zy",Ha:"_jsxhI",I:"blur",Ia:"jsxfocus",J:"c0",Ja:/^(?:display|margin|left|top|position|backgroundColor|visibility|zIndex)$/,K:"focus",Ka:"int",L:"P3",La:"native",M:"mousewheel",N:"wy",O:'id="',P:'" class="jsx30timepicker" ',Q:"background-color:",R:";",S:"text-align:right;width:",T:"px;top:0px;height:",U:"px;position:absolute;",V:"hour",W:"minute",X:' class="fields"',Y:' jsxfield="hour" size="2" maxlength="2" value="',Z:'"',_:' jsxfield="minute" size="2" maxlength="2" value="',a:"jsx:///images/jsxtimepicker/spin_up.gif",aa:'<div style="',b:"jsx:///images/jsxtimepicker/spin_down.gif",ba:"left:",c:"00",ca:'px;">',d:"000",da:"</div>",e:"time.24hour",ea:"second",f:"HH",fa:' jsxfield="second" size="2" maxlength="2" value="',g:"h",ga:"milli",h:"time.sep.hour-min",ha:' jsxfield="milli" size="3" maxlength="3" value="',i:"mm",ia:"time.ampm",j:"time.sep.min-sec",ja:' jsxfield="ampm" size="2" maxlength="2" value="',k:"ss",ka:"position:absolute;left:",l:"time.sep.sec-milli",la:"cursor:pointer;",m:"SSS",ma:' class="spinner"',n:"time.sep.ampm",na:"<img",o:"a",oa:' style="top:0px;left:0px;position:absolute;',p:"number",pa:'" width="11" height="8" src="',q:"1/1/1970 ",qa:'" alt="',r:"input",ra:"up",s:"jsxfield",sa:"click",t:"",ta:"q7",u:"width",ua:"mousedown",v:"relativebox",va:"YO",w:"box",wa:"/>",x:"span",xa:' style="top:8px;left:0px;position:absolute;',y:"solid 1px #9898a5;solid 1px #d8d8e5;solid 1px #d8d8e5;solid 1px #9898a5",ya:"down",z:"div",za:"U8"};var
db=jsx3.gui.Event;var
M=jsx3.gui.Interactive;f.SPINNER_UP=jsx3.resolveURI(ub.a);f.SPINNER_DOWN=jsx3.resolveURI(ub.b);if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(f.SPINNER_UP,f.SPINNER_DOWN);f.FQ=new
jsx3.util.NumberFormat(ub.c);f.vI=new
jsx3.util.NumberFormat(ub.d);m.jsxshowsecs=0;m.jsxshowmillis=0;m.jsx24hour=null;m.init=function(q,n,j,e){this.jsxsuper(q,n,j,0,e);this.jsxhours=0;this.jsxminutes=0;this.jsxseconds=0;this.jsxmillis=0;};m.getShowSeconds=function(){return this.jsxshowsecs!=null?this.jsxshowsecs:m.jsxshowsecs;};m.getShowMillis=function(){return this.jsxshowmillis!=null?this.jsxshowmillis:m.jsxshowmillis;};m.is24Hour=function(){return this.jsx24hour!=null?this.jsx24hour:this.Nk(ub.e);};m.setFontSize=function(i){this.jsxsuper(i);this.Qf();return this;};m.setShowSeconds=function(i){this.jsxshowsecs=jsx3.Boolean.valueOf(i);this.Qf();return this;};m.setShowMillis=function(n){this.jsxshowmillis=jsx3.Boolean.valueOf(n);this.Qf();return this;};m.set24Hour=function(r){this.jsx24hour=r!=null?jsx3.Boolean.valueOf(r):null;this.Qf();return this;};m.getHours=function(){return this.jsxhours||Number(0);};m.setHours=function(n){this.jsxhours=Math.max(0,Math.min(23,n));this.F4();};m.getMinutes=function(){return this.jsxminutes||Number(0);};m.setMinutes=function(j){this.jsxminutes=Math.max(0,Math.min(59,j));this.F4();};m.getSeconds=function(){return this.jsxseconds||Number(0);};m.setSeconds=function(a){this.jsxseconds=Math.max(0,Math.min(59,a));this.F4();};m.getMilliseconds=function(){return this.jsxmillis||Number(0);};m.setMilliseconds=function(q){this.jsxmillis=Math.max(0,Math.min(999,q));this.F4();};m.getDate=function(s){if(this.jsxhours==null&&this.jsxminutes==null)return null;if(s==null)s=new
Date();s.setHours(this.jsxhours);s.setMinutes(this.jsxminutes);s.setSeconds(this.jsxseconds||Number(0));s.setMilliseconds(this.jsxmillis||Number(0));return s;};m.L6=function(s,a,n,b){if(s==null)s=this.jsxhours;if(a==null)a=this.jsxminutes;if(n==null)n=this.jsxseconds;if(b==null)b=this.jsxmillis;return [s,a,n,b];};m.I4=function(h){this.jsxhours=h[0];this.jsxminutes=h[1];this.jsxseconds=h[2];this.jsxmillis=h[3];};f._dateArrToDate=function(h){if(h[0]==null||h[1]==null)return null;var
ua=new
Date();ua.setHours(h[0]);ua.setMinutes(h[1]);ua.setSeconds(h[2]||Number(0));ua.setMilliseconds(h[3]||Number(0));return ua;};m.getValue=function(){var
Gb=(this.is24Hour()?ub.f:ub.g)+this.Nk(ub.h)+ub.i;if(this.getShowSeconds()){Gb=Gb+(this.Nk(ub.j)+ub.k);if(this.getShowMillis())Gb=Gb+(this.Nk(ub.l)+ub.m);}if(!this.is24Hour())Gb=Gb+(this.Nk(ub.n)+ub.o);return (new
jsx3.util.DateFormat(Gb)).format(this.getDate());};m.setValue=function(d){if(d instanceof Date){this.setDate(d);}else if(typeof d==ub.p){var
Ra=new
Date();Ra.setTime(d);this.setDate(Ra);}else if(d&&!jsx3.util.strEmpty(d)){this.setDate(new
Date(ub.q+d));}else this.setDate(null);return this;};m.setDate=function(l){if(l==null){this.jsxhours=this.jsxminutes=this.jsxseconds=this.jsxmillis=null;}else{this.jsxhours=l.getHours();this.jsxminutes=l.getMinutes();this.jsxseconds=l.getSeconds();this.jsxmillis=l.getMilliseconds();}this.F4();};m.F4=function(){var
ga=this.getRendered();if(ga!=null){var
Z=ga.childNodes[0].childNodes;for(var
Ab=0;Ab<Z.length;Ab++){var
tb=Z[Ab];if(tb.tagName&&tb.tagName.toLowerCase()==ub.r&&tb.getAttribute(ub.s)){var
V=f.bt[tb.getAttribute(ub.s)];var
D=V.f7(this);tb.value=D!=null?V.jL(this,D):ub.t;}}}};m.Hj=function(d,a,n){if(a){delete d[ub.u];var
Mb=this.Wl(true,d);var
qa=Mb.recalculate(d,a,n);if(!qa.w&&!qa.h)return;var
pa=Mb.lg(0);var
Oa=a.childNodes[0];pa.recalculate({height:Mb.ld()},Oa,n);var
D=pa.lg(0);D.recalculate({height:pa.ld()},Oa.childNodes[0],n);var
Ka=pa.lg(1);Ka.recalculate({height:pa.ld()},Oa.childNodes[2],n);var
mb=2;if(this.jsxshowsecs){mb=mb+2;var
kb=pa.lg(2);kb.recalculate({height:pa.ld()},Oa.childNodes[mb],n);if(this.jsxshowsecs&&this.jsxshowmillis){mb=mb+2;var
hb=pa.lg(3);hb.recalculate({height:pa.ld()},Oa.childNodes[mb],n);}}if(!this.is24Hour()){mb=mb+2;var
Ha=pa.lg(4);Ha.recalculate({height:pa.ld()},Oa.childNodes[mb],n);}var
ja=pa.lg(5);mb++;ja.recalculate({height:pa.ld()},Oa.childNodes[mb],n);}};m.zd=function(c){if(this.getParent()&&(c==null||isNaN(c.parentwidth)||isNaN(c.parentheight))){c=(this.getParent()).Id(this);}else if(c==null)c={};var
Aa=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var
ca=Aa;var
Eb=Aa*2;var
Da=Math.round(Aa*2.2);var
Sa=Aa*3;var
sa=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
bb=sa?null:this.getLeft();var
eb=sa?null:this.getTop();if(!c.boxtype)c.boxtype=sa?ub.v:ub.w;c.tagname=ub.x;if(sa&&this.getMargin())c.margin=this.getMargin();if(c.left==null&&bb!=null)c.left=bb;if(c.top==null&&eb!=null)c.top=eb;if(c.height==null&&this.getHeight())c.height=this.getHeight();var
sb;if((sb=this.getBorder())!=null&&sb!=ub.t){c.border=sb;}else c.border=ub.y;var
yb;if((yb=this.getPadding())!=null&&yb!=ub.t)c.padding=yb;var
Ra=new
jsx3.gui.Painted.Box(c);var
Pa={};Pa.tagname=ub.z;Pa.boxtype=ub.A;Pa.height=Ra.ld();var
X=new
jsx3.gui.Painted.Box(Pa);Ra.cl(X);var
bb=0;Pa={tagname:ub.B,empty:true,boxtype:ub.w,left:bb,top:0,padding:ub.C,width:Eb,height:X.ld(),border:ub.D};X.cl(new
jsx3.gui.Painted.Box(Pa));bb=bb+(Eb+ca);Pa={tagname:ub.B,empty:true,boxtype:ub.w,left:bb,top:0,padding:ub.C,width:Eb,height:X.ld(),border:ub.D};X.cl(new
jsx3.gui.Painted.Box(Pa));bb=bb+(Eb+ca);Pa={tagname:ub.B,empty:true,boxtype:ub.w,left:bb,top:0,padding:ub.C,width:Eb,height:X.ld(),border:ub.D};X.cl(new
jsx3.gui.Painted.Box(Pa));if(this.jsxshowsecs)bb=bb+(Eb+ca);Pa={tagname:ub.B,empty:true,boxtype:ub.w,left:bb,top:0,padding:ub.C,width:Sa,height:X.ld(),border:ub.D};X.cl(new
jsx3.gui.Painted.Box(Pa));if(this.jsxshowsecs&&this.jsxshowmillis)bb=bb+(Sa+ca);Pa={tagname:ub.B,empty:true,boxtype:ub.w,left:bb,top:0,padding:ub.C,width:Da,height:X.ld(),border:ub.D};X.cl(new
jsx3.gui.Painted.Box(Pa));if(!this.is24Hour())bb=bb+Da;Pa={tagname:ub.x,boxtype:ub.w,left:bb,top:0,padding:ub.E,width:12,height:X.ld(),border:ub.F};X.cl(new
jsx3.gui.Painted.Box(Pa));bb=bb+12;X.recalculate({width:bb});Ra.recalculate({width:bb+Ra.getBorderWidth()});return Ra;};m.paint=function(){this.applyDynamicProperties();var
Na=this.getEnabled()==1?this.getBackgroundColor():this.getDisabledBackgroundColor();var
y=this.getEnabled()==1?this.Fg(ub.G,ub.H,2)+this.Fg(ub.I,ub.J,2)+this.Fg(ub.K,ub.L,2)+this.Fg(ub.M,ub.N,2):ub.t;y=y+(this.Rl()+this.pc());var
Fb=this.Wl(true);Fb.setAttributes(ub.O+this.getId()+ub.P+this.nk()+this.Ak()+this.qj(null,0)+this.renderAttributes(null,true));Fb.setStyles(this.Wi()+this.ad()+this.lc()+this.Bg()+(Na!=null?ub.Q+Na+ub.R:ub.t));var
Nb=Math.round((this.getFontSize()||jsx3.gui.Block.DEFAULTFONTSIZE)*3/4);var
Q=this.jc()+this.wk()+this._k()+this.cd();var
J=this.jc()+this.wk()+this._k()+this.cd()+ub.S+Nb+ub.T+((Fb.lg(0)).lg(0)).ld()+ub.U;var
yb=this.jsxhours!=null?f.bt[ub.V].jL(this,this.jsxhours):ub.t;var
_=this.jsxminutes!=null?f.bt[ub.W].jL(this,this.jsxminutes):ub.t;var
I=Fb.lg(0);I.setAttributes(ub.X);var
V=ub.t;var
L=0;var
ab=I.lg(0);ab.setAttributes(y+ub.Y+yb+ub.Z);ab.setStyles(Q);V=V+(ab.paint()).join(ub.t);L=L+ab.getPaintedWidth();var
ma=I.lg(1);ma.setAttributes(y+ub._+_+ub.Z);ma.setStyles(Q);V=V+(ub.aa+J+ub.ba+L+ub.ca+this.Nk(ub.h)+ub.da);V=V+(ma.paint()).join(ub.t);L=L+(ma.getPaintedWidth()+Nb);if(this.jsxshowsecs){var
Da=this.jsxseconds!=null?f.bt[ub.ea].jL(this,this.jsxseconds):ub.t;var
D=I.lg(2);D.setAttributes(y+ub.fa+Da+ub.Z);D.setStyles(Q);V=V+(ub.aa+J+ub.ba+L+ub.ca+this.Nk(ub.j)+ub.da);V=V+(D.paint()).join(ub.t);L=L+(D.getPaintedWidth()+Nb);if(this.jsxshowmillis){var
O=this.jsxmillis!=null?f.bt[ub.ga].jL(this,this.jsxmillis):ub.t;var
Eb=I.lg(3);Eb.setAttributes(y+ub.ha+O+ub.Z);Eb.setStyles(Q);V=V+(ub.aa+J+ub.ba+L+ub.ca+this.Nk(ub.l)+ub.da);V=V+(Eb.paint()).join(ub.t);L=L+(Eb.getPaintedWidth()+Nb);}}if(!this.is24Hour()){var
aa=this.jsxhours!=null?(this.Nk(ub.ia))[this.jsxhours<12?0:1]:ub.t;var
wb=I.lg(4);wb.setAttributes(y+ub.ja+aa+ub.Z);wb.setStyles(Q);V=V+(ub.aa+J+ub.ka+L+ub.ca+this.Nk(ub.n)+ub.da);V=V+(wb.paint()).join(ub.t);}var
ya=I.lg(5);var
E=this.getEnabled()==1?ub.la:ub.t;ya.setAttributes(jsx3.html._d+ub.ma);var
kb=ub.na+jsx3.html._d+ub.oa+E+ub.pa+f.SPINNER_UP+ub.qa+this.Nk(ub.ra,f)+ub.Z+this.Fg(ub.sa,ub.ta,3)+this.Fg(ub.ua,ub.va,3)+ub.wa+ub.na+jsx3.html._d+ub.xa+E+ub.pa+f.SPINNER_DOWN+ub.qa+this.Nk(ub.ya,f)+ub.Z+this.Fg(ub.sa,ub.za,3)+this.Fg(ub.ua,ub.va,3)+ub.wa;return (Fb.paint()).join((I.paint()).join(V+(ya.paint()).join(kb)+ub.Aa));};f.bt={hour:{O1:function(l,n){if(isNaN(n))n=l.is24Hour()?-1:0;else n=Number(n);return l.is24Hour()?(n+1)%24:n%12+1;},MS:function(b,d){if(isNaN(d))d=b.is24Hour()?23:12;else d=Number(d);return b.is24Hour()?jsx3.util.numMod(d-1,24):jsx3.util.numMod(d-2,12)+1;},jL:function(h,q){if(q==null)return ub.t;return h.is24Hour()?f.FQ.format(q):(jsx3.util.numMod(q-1,12)+1).toString();},sy:function(o,j){var
Fb=null;if(j==null||j===ub.t){}else if(isNaN(j)){Fb=0;}else if(o.is24Hour()||j==null){Fb=Number(j);}else{j=Number(j);var
T=o.Nk(ub.ia);var
Ha=o.vY(ub.Ba);if(Ha!=null&&Ha.value!=null&&Ha.value.toLowerCase()==T[1].toLowerCase())Fb=j==12?j:j+12;else Fb=j==12?0:j;}return o.L6(Fb);},f7:function(l){if(l.is24Hour()||l.jsxhours==null){return l.jsxhours;}else return jsx3.util.numMod(l.jsxhours-1,12)+1;},L3:function(b){return b.vY(ub.W);},hr:function(a){return null;},B5:function(l,g,a,o){if(!(a>=48&&a<=57)||o)return true;var
Ea=g.value;jsx3.sleep(function(){if(l.getParent()==null)return;var
y=g.value;if(Ea==y)g.value=y=String.fromCharCode(a);var
jb=Number(g.value);if(!isNaN(jb)){if(jb>(l.is24Hour()?23:12)){g.value=String.fromCharCode(a);jb=Number(g.value);}if(jb>(l.is24Hour()?2:1))jsx3.html.focus(this.L3(l));}},null,this);}},minute:{O1:function(q,h){return ((Number(h)||0)+1)%60;},MS:function(b,d){return jsx3.util.numMod((isNaN(d)?60:Number(d))-1,60);},jL:function(d,b){return b==null?ub.t:f.FQ.format(b);},sy:function(b,d){return b.L6(null,Number(d)||0);},f7:function(h){return h.jsxminutes;},L3:function(d){return d.vY(d.jsxshowsecs?ub.ea:ub.Ba);},hr:function(h){return h.vY(ub.V);},B5:function(o,c,q,l){if(!(q>=48&&q<=57)||l)return true;var
Qa=c.value;jsx3.sleep(function(){if(o.getParent()==null)return;var
Jb=c.value;if(Qa==Jb)c.value=Jb=String.fromCharCode(q);var
ha=Number(c.value);if(!isNaN(ha)){if(ha>=60){c.value=String.fromCharCode(q);ha=Number(c.value);}if(ha>=6){var
Ab=this.L3(o);if(Ab)jsx3.html.focus(Ab);}}},null,this);}},second:{O1:function(d,b){return ((Number(b)||0)+1)%60;},MS:function(k,n){return jsx3.util.numMod((isNaN(n)?60:Number(n))-1,60);},jL:function(j,o){return o==null?ub.t:f.FQ.format(o);},sy:function(l,n){return l.L6(null,null,Number(n)||0);},f7:function(q){return q.jsxseconds;},L3:function(l){return l.vY(l.jsxshowmillis?ub.ga:ub.Ba);},hr:function(s){return s.vY(ub.W);},B5:function(r,s,n,i){return f.bt[ub.W].B5.call(this,r,s,n,i);}},milli:{O1:function(e,a){return ((Number(a)||0)+1)%1000;},MS:function(a,e){return jsx3.util.numMod((isNaN(e)?1000:Number(e))-1,1000);},jL:function(k,n){return n==null?ub.t:f.vI.format(n);},sy:function(d,b){return d.L6(null,null,null,Number(b)||0);},f7:function(c){return c.jsxmillis;},L3:function(j){return j.vY(ub.Ba);},hr:function(n){return n.vY(ub.ea);},B5:function(o,c,q,l){if(!(q>=48&&q<=57)||l)return true;var
u=c.value;jsx3.sleep(function(){if(o.getParent()==null)return;var
S=c.value;if(u==S)c.value=S=String.fromCharCode(q);var
Db=Number(c.value);if(!isNaN(Db))if(S.length==3){var
Wa=this.L3(o);if(Wa)jsx3.html.focus(Wa);}},null,this);}},ampm:{O1:function(a,e){var
wa=a.Nk(ub.ia);return e!=null&&e.toLowerCase()==wa[0].toLowerCase()?wa[1]:wa[0];},MS:function(q,l){var
ua=q.Nk(ub.ia);return l!=null&&l.toLowerCase()==ua[1].toLowerCase()?ua[0]:ua[1];},jL:function(n,k){return k;},sy:function(r,g){var
qa=r.Nk(ub.ia);var
gb=Number((r.vY(ub.V)).value);var
pb=null;if(!isNaN(gb))if(g!=null&&g.toLowerCase()==qa[1].toLowerCase())pb=gb==12?gb:gb+12;else pb=gb==12?0:gb;return r.L6(pb);},f7:function(l){return (l.Nk(ub.ia))[l.jsxhours<12?0:1];},L3:function(c){return null;},hr:function(d){return d.vY(d.jsxshowsecs?d.jsxshowmillis?ub.ga:ub.ea:ub.W);},B5:function(k,g,b,p){var
Va=String.fromCharCode(b);var
Ea=k.Nk(ub.ia);for(var
P=0;P<Ea.length;P++)if(Va==(Ea[P].charAt(0)).toUpperCase()){g.value=Ea[P];break;}return true;}}};m.zy=function(c,j){if(c.hasModifier(true)||c.isModifierKey())return;var
D=j.getAttribute(ub.s);var
ha=f.bt[D];var
kb=c.keyCode();if(kb>=96&&kb<=105)kb=kb+(48-96);if(kb==38||kb==40){var
va=kb==38?ub.Ca:ub.Da;var
Ua=ha[va](this,j.value);var
mb=ha.sy(this,Ua);if(this.doEvent(ub.Ea,{objEVENT:c,strFIELD:D,newDATE:f._dateArrToDate(mb),_gipp:1})!==false){j.value=ha.jL(this,Ua);this.I4(mb);}}else if(kb==9||kb==13){var
Xa=c.shiftKey()?ha.hr(this):ha.L3(this);if(Xa==null)return;jsx3.html.focus(Xa);}else if(kb>=48&&kb<=57||kb>=65&&kb<=90){var
qa=ha.B5(this,j,kb,c.shiftKey());if(!qa)return;}else if(c.isArrowKey()||c.isFunctionKey()||c.escapeKey()||kb==8||kb==46){return;}else{}c.cancelAll();};m.c0=function(a,g){this.doEvent(ub.Fa,{objEVENT:a});var
Q=g.getAttribute(ub.s);var
ga=f.bt[Q];var
L=ga.f7(this);var
ra=jsx3.util.numIsNaN(g.value)?jsx3.util.strEmpty(g.value)?null:g.value:Number(g.value);if(L!==ra){var
u=ga.sy(this,ra);if(this.doEvent(ub.Ea,{objEVENT:a,strFIELD:Q,newDATE:f._dateArrToDate(u),_gipp:1})!==false){this.I4(u);if(ra!=null)g.value=ga.jL(this,ga.f7(this));}else g.value=ga.jL(this,L);}else g.value=ga.jL(this,L);var
sb=this;this._jsxj2=window.setTimeout(function(){delete sb[ub.Ga];delete sb[ub.Ha];},0);};m.P3=function(r,n){this.doEvent(ub.Ia,{objEVENT:r});if(this._jsxj2){window.clearTimeout(this._jsxj2);delete this[ub.Ga];}this._jsxhI=n.getAttribute(ub.s);};m.wy=function(d,i){var
Oa=d.getWheelDelta();if(Oa!=0){var
Wa=i.getAttribute(ub.s);var
wa=f.bt[Wa];var
Eb=Oa>0?ub.Ca:ub.Da;var
xa=wa[Eb](this,i.value);var
X=wa.sy(this,xa);if(this.doEvent(ub.Ea,{objEVENT:d,strFIELD:Wa,newDATE:f._dateArrToDate(X),_gipp:1})!==false){i.value=wa.jL(this,xa);this.I4(X);}}d.cancelAll();};m.YO=function(e,s){db.publish(e);e.cancelAll();};m.q7=function(e,h){this.T0(e,h,ub.Ca);};m.U8=function(h,e){this.T0(h,e,ub.Da);};m.T0=function(b,k,a){if(this.getEnabled()!=1)return;var
U=this._jsxhI||ub.V;var
ba=this.vY(U);var
Wa=f.bt[U];var
Fb=Wa[a](this,ba.value);var
Za=Wa.sy(this,Fb);if(this.doEvent(ub.Ea,{objEVENT:b,strFIELD:U,newDATE:f._dateArrToDate(Za),_gipp:1})!==false){ba.value=Wa.jL(this,Fb);this.I4(Za);if(this._jsxhI==null)jsx3.html.focus(ba);}};m.vY=function(c){var
ia=this.getRendered();if(ia!=null){var
Fa=ia.childNodes[0].childNodes;for(var
D=0;D<Fa.length;D++){var
F=Fa[D];if(F.getAttribute&&F.getAttribute(ub.s)==c)return F;}}return null;};m.updateGUI=function(b,e){if(b.search(ub.Ja)==0){this.jsxsuper(b,e);}else this.repaint();};m.onSetChild=function(b){return false;};m.emSetValue=function(q){var
Xa=this.emGetSession();var
Q=null;if(jsx3.util.strEmpty(q)){Xa.datetype=ub.Ka;}else if(!isNaN(q)&&!isNaN(parseInt(q))){Q=new
Date();Q.setTime(parseInt(q));Xa.datetype=ub.Ka;}else{Q=new
Date(q);if(isNaN(Q)){Q=null;}else Xa.datetype=ub.La;}Xa.olddate=Q;this.setDate(Q);};m.emGetValue=function(){var
la=this.emGetSession();var
ta=this.getDate();var
Ma=(this.emGetSession()).datetype||ub.t;if(ta==null)return null;switch(Ma){case ub.La:return ta.toString();default:return (ta.getTime()).toString();}};m.emFocus=function(){var
bb=this.getRendered();if(bb)bb.childNodes[0].childNodes[0].focus();};m.doValidate=function(){var
v=this.getDate()!=null||this.getRequired()==0?1:0;this.setValidationState(v);return v;};});
