/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Splitter",jsx3.gui.Block,null,function(m,f){var
ub={A:"mouseup",B:"_doResizeEnd",C:"z-index",D:"jsxsubcontainer1pct",E:",",F:/\s*,\s*/g,G:"*",H:"*,",I:",*",J:"Error setting container 1 as an integer: Name contains an errant comma: ",K:"jsxafterresize",L:"Error: Name contains an errant comma: ",M:"50%",N:"number",O:"%",P:"49.999%",Q:/background-image\s*:\s*url\(/,R:"background-image:url(",S:");",T:"3.0.00",a:"jsx:///images/splitter/v.gif",b:"jsx:///images/splitter/h.gif",c:"#2050df",d:"#c8c8d5",e:"#ffffff",f:"_",g:"100%",h:"",i:"JSXFRAG",j:"default",k:"box",l:"div",m:"relativebox",n:"mousedown",o:"doBeginMove",p:' id="',q:'" class="jsx30splitter"',r:' class="jsx30splitter_',s:"h",t:"v",u:'bar"',v:"cursor:default;",w:"&#160;",x:"background-color:",y:";",z:"jsxbeforeresize"};var
W=jsx3.gui.Event;var
Q=jsx3.gui.Interactive;m.ORIENTATIONH=0;m.ORIENTATIONV=1;m.w7=ub.a;m.SK=ub.b;if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(m.w7,m.SK);m.y9=ub.c;m.B6=ub.d;m.Ds=ub.e;f.init=function(b,g){this.jsxsuper(b);if(g!=null)this.setOrientation(g);for(var
K=1;K<=2;K++){var
Ua=new
jsx3.gui.Block(b+ub.f+K,null,null,ub.g,ub.g,ub.h);Ua.setRelativePosition(1);Ua.setBackgroundColor(m.Ds);this.setChild(Ua,1,null,ub.i);}};f.paintChild=function(g,o){if(!o)this.repaint();};f.setEnabled=function(h){if(this.jsxenabled!=h){this.jsxenabled=h;var
_=this.getRendered();if(_)_.firstChild.style.cursor=this._isEnabled()?ub.h:ub.j;}};f.getEnabled=function(){return this.jsxenabled;};f._isEnabled=function(){return this.jsxenabled!==0&&this.jsxenabled!==false;};f.Id=function(e){var
Ra=e.getChildIndex();var
I=this.Gi(Ra);if(I)return I;var
Ca=(this.getParent()).Id(this);var
Eb=Ca.parentwidth;var
O=Ca.parentheight;var
sb=this.ep();var
F=this.getOrientation()==0;var
Aa=F?Eb:O;var
Fa=this.getSubcontainer1Min();var
Ha=this.getSubcontainer2Min();var
Wa=Math.round(Aa*sb);if(Wa<Fa||Fa+Ha>Aa)Wa=Fa;else if(Aa-Wa<Ha)Wa=Aa-Ha;var
Ea,bb=0;if(Ra==0){Ea=Wa;}else{bb=Wa+8;Ea=Aa-bb;}var
fb,ab,Ka,Nb;if(F){fb=bb;ab=0;Ka=Ea;Nb=O;}else{fb=0;ab=bb;Ka=Eb;Nb=Ea;}return this.Ei(Ra,{boxtype:ub.k,tagname:ub.l,left:fb,top:ab,width:Ka,height:Nb,parentwidth:Ka,parentheight:Nb});};f.Hj=function(b,r,p){var
tb=this.Wl(true,b);if(r){tb.recalculate(b,r,p);var
Eb=this.getOrientation()==0;var
Ra=this.getChildren();var
rb=Math.min(2,Ra.length);var
Na=0;var
Ia,Mb;for(var
mb=0;mb<rb;mb++){var
Ab=this.Id(Ra[mb]);if(mb==1){var
fa=tb.lg(0);if(Eb){fa.recalculate({left:Na,parentheight:Mb},r?r.childNodes[0]:null,p);}else fa.recalculate({top:Na,parentwidth:Ia},r?r.childNodes[0]:null,p);}p.add(Ra[mb],Ab,r?r.childNodes[mb+1]:null,true);Ia=Ab.width;Mb=Ab.height;Na=Eb?Ia:Mb;}}};f.zd=function(p){this.applyDynamicProperties();if(this.getParent()&&(p==null||!isNaN(p.parentwidth)&&!isNaN(p.parentheight)||!isNaN(p.width)&&!isNaN(p.height))){p=(this.getParent()).Id(this);}else if(p==null)p={};var
Va=this.getRelativePosition()!=0;if(p.left==null||!Va&&!jsx3.util.strEmpty(this.getLeft()))p.left=this.getLeft();if(p.top==null||!Va&&!jsx3.util.strEmpty(this.getTop()))p.top=this.getTop();if(p.width==null)p.width=ub.g;if(p.height==null)p.height=ub.g;p.tagname=ub.l;if(!p.boxtype)p.boxtype=ub.m;var
yb=new
jsx3.gui.Painted.Box(p);var
Ea={};Ea.tagname=ub.l;Ea.boxtype=ub.k;var
B=this.ep();Ea.parentwidth=yb.ee();Ea.parentheight=yb.ld();var
ib=this.Id(this.getChild(0));var
xb=this.getOrientation()==0?ib.width:ib.height;if(this.getOrientation()==0){Ea.left=xb;Ea.top=0;Ea.width=8;Ea.height=ub.g;}else{Ea.left=0;Ea.top=xb;Ea.width=ub.g;Ea.height=8;}var
Qa=new
jsx3.gui.Painted.Box(Ea);yb.cl(Qa);return yb;};f.paint=function(){this.applyDynamicProperties();var
R=this.Fg(ub.n,ub.o,1);var
V=this.renderAttributes(null,true);var
w=this.Wl(true);w.setAttributes(this.Rl()+this.nk()+ub.p+this.getId()+ub.q+this.Ak()+V);w.setStyles(this.ch()+this.ad()+this.lc()+this.Bg());var
la=w.lg(0);la.setAttributes(R+ub.r+(this.getOrientation()==0?ub.s:ub.t)+ub.u);var
Hb=this._isEnabled()?ub.h:ub.v;la.setStyles(Hb+this.ch()+(this.getOrientation()==0?this.HI():this.t0()));var
Fb,Xa;if((Fb=this.getChild(0))!=null)Fb.pj(this.Id(Fb));if((Xa=this.getChild(1))!=null)Xa.pj(this.Id(Xa));return (w.paint()).join((la.paint()).join(ub.w)+this.paintChildren());};f.ch=function(){return ub.x+(this.getBackgroundColor()?this.getBackgroundColor():m.B6)+ub.y;};f.doBeginMove=function(s,j){if(!s.leftButton()||!this._isEnabled())return;if(this.doEvent(ub.z,{objEVENT:s,objGUI:j})===false)return;j.style.backgroundColor=m.y9;this.focus();this._jsxmoving=true;if(this.getOrientation()==0){jsx3.EventHelp.constrainY=true;}else jsx3.EventHelp.constrainX=true;this.jsxsupermix(s,j);W.subscribe(ub.A,this,ub.B);};f._doResizeEnd=function(q){q=q.event;var
U=(this.getRendered(q)).childNodes[0];W.unsubscribe(ub.A,this,ub.B);if(!this._jsxmoving)return;this._jsxmoving=false;q.releaseCapture(U);var
Db=this.getBackgroundColor();U.style.backgroundColor=Db==-1?ub.h:Db||m.B6;var
fb,gb;if(this.getOrientation()==0){fb=parseInt(U.style.left);gb=U.parentNode.offsetWidth;}else{fb=parseInt(U.style.top);gb=U.parentNode.offsetHeight;}jsx3.html.removeStyle(U,ub.C);var
_=this.getSubcontainer1Min();var
Xa=this.getSubcontainer2Min();if(fb<_)fb=_;else if(gb-fb<Xa)fb=gb-Xa;var
ib=this.Wl();if(ib)(ib.lg(0)).reset();this.setDynamicProperty(ub.D,null);var
Pa=this.getSubcontainer1Pct();var
Sa=fb/gb*100;if(Pa.indexOf(ub.E)>-1){var
zb=Pa.split(ub.F);if(zb.length==2){Sa=zb[0]==ub.G?ub.H+(gb-fb):fb+ub.I;}else jsx3.log(ub.J+Pa);}this.setSubcontainer1Pct(Sa,true);this.doEvent(ub.K,{objEVENT:q,objGUI:U,fpPCT1:Sa,_gipp:1});};f.ep=function(){var
db=this.getSubcontainer1Pct();var
P;if(db.indexOf(ub.E)>-1){var
Db=db.split(ub.F);if(Db.length==2){var
ia=(this.getParent()).Id(this);var
la=this.getOrientation()==0?ia.parentwidth:ia.parentheight;P=Db[0]==ub.G?(la-Db[1])/la:Db[0]/la;}else{jsx3.log(ub.L+db);P=0.5;}}else P=parseFloat(db)/100;return P;};f.getSubcontainer1Pct=function(){return this.jsxsubcontainer1pct==null?ub.M:this.jsxsubcontainer1pct;};f.setSubcontainer1Pct=function(l,q){if(typeof l==ub.N)l=l+ub.O;this.jsxsubcontainer1pct=l;if(q){var
ia=this.getRendered();if(ia!=null)this.Mc({parentwidth:ia.offsetWidth,parentheight:ia.offsetHeight},ia);}return this;};f.getSubcontainer2Pct=function(){return this.jsxsubcontainer2pct==null?ub.P:this.jsxsubcontainer2pct;};f.setSubcontainer2Pct=function(d){this.jsxsubcontainer2pct=d;return this;};f.getSubcontainer1Min=function(){return this.jsxsubcontainer1min==null?1:this.jsxsubcontainer1min;};f.setSubcontainer1Min=function(r){this.jsxsubcontainer1min=r;return this;};f.getSubcontainer2Min=function(){return this.jsxsubcontainer2min==null?8:this.jsxsubcontainer2min;};f.setSubcontainer2Min=function(c){this.jsxsubcontainer2min=c;return this;};f.getOrientation=function(){return this.jsxorientation==null?0:this.jsxorientation;};f.setOrientation=function(p){this.jsxorientation=p;this.Qf();return this;};f.getVSplitImage=function(){return this.jsxvsplitimage==null?m.w7:this.jsxvsplitimage;};f.setVSplitImage=function(p){this.jsxvsplitimage=p;return this;};f.getHSplitImage=function(){return this.jsxhsplitimage==null?m.SK:this.jsxhsplitimage;};f.setHSplitImage=function(d){this.jsxhsplitimage=d;return this;};f.t0=function(){var
R=this.getVSplitImage();return R.search(ub.Q)!=-1?R:ub.R+jsx3.resolveURI(R)+ub.S;};f.HI=function(){var
ra=this.getHSplitImage();return ra.search(ub.Q)!=-1?ra:ub.R+jsx3.resolveURI(ra)+ub.S;};f.onSetChild=function(g){return (this.getChildren()).length<2;};m.getVersion=function(){return ub.T;};});jsx3.Splitter=jsx3.gui.Splitter;
