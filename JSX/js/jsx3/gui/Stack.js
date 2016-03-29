/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Stack",jsx3.gui.Block,null,function(g,r){var
ub={A:"jsx30stack_textv",B:"jsx30stack_texth",C:"none",D:"visible",E:"right",F:"left",G:"text-align:",H:";",I:"5 5 5 5",J:"bold",K:"3.0.00",a:"#aaaafe",b:"#aaaacb",c:"#ffffff",d:"solid 1px #ffffff;solid 1px #9898a5;solid 1px #9898a5;solid 1px #ffffff",e:"solid 1px #c8c8d5;solid 1px #9898a5;solid 1px #9898a5;solid 1px #c8c8d5",f:"_content",g:"100%",h:"JSXFRAG",i:"jsxexecute",j:"jsxshow",k:"click",l:"XN",m:"keypress",n:"mouseover",o:"mouseout",p:"box",q:"div",r:"0 0 0 4",s:"span",t:"relativebox",u:"",v:'id="',w:'"',x:' class="',y:"overflow:hidden;",z:' class="jsx30stack_handle"'};var
Ja=jsx3.gui;var
ua=Ja.Event;var
Y=Ja.Block;g.ORIENTATIONV=0;g.ORIENTATIONH=1;g.ACTIVECOLOR=ub.a;g.INACTIVECOLOR=ub.b;g.CHILDBGCOLOR=ub.c;g.BORDER=ub.d;g.CAPTION_BORDER=ub.e;g.BACKGROUND=jsx3.html.getCSSFade(false);g.BACKGROUNDH=jsx3.html.getCSSFade(true);r.init=function(j,f){this.jsxsuper(j,null,null,null,null,f);var
ea=new
Y(j+ub.f,0,0,ub.g,ub.g);ea.setOverflow(1);ea.setBorder(g.BORDER);ea.setBackgroundColor(g.CHILDBGCOLOR);this.setChild(ea,1,null,ub.h);};r.onSetParent=function(e){return Ja.StackGroup&&e instanceof Ja.StackGroup;};r.doShowStack=function(){this.XN(this.isOldEventProtocol());};r.doShow=function(){this.XN(false);};r.XN=function(k,b){var
Da=this.getParent();if(k instanceof ua){var
D=jsx3.html.getJSXParent(k.srcElement());if(D!=null&&D!=this)return;}if(this==Da.getChild(Da.getSelectedIndex()))return;Da.setSelectedIndex(this.getChildIndex());var
hb=Da.Wl();Da.Mc({left:0,top:0,parentwidth:hb.getOffsetWidth(),parentheight:hb.getOffsetHeight()},true);if(k)this.doEvent(ub.i,{objEVENT:k instanceof ua?k:null});this.doEvent(ub.j,{_gipp:1});if(b)jsx3.html.focus(b);};r.Ri=function(m,s){s.style.backgroundColor=this.getActiveColor();return;if(jsx3.EventHelp.isDragging())this.XN(m);var
lb=jsx3.html.getCSSOpacity(0.75);Ja.Painted.Ql(s,lb);};r.Uc=function(q,o){o.style.backgroundColor=this.getInactiveColor();return;var
ib=jsx3.html.getCSSOpacity(1);Ja.Painted.Ql(o,ib);};r.getContentChild=function(){var
Kb=(this.getChildren()).length;for(var
Wa=0;Wa<Kb;Wa++){var
E=this.getChild(Wa);if(!(Ja.Menu&&E instanceof Ja.Menu)&&!(Ja.ToolbarButton&&E instanceof Ja.ToolbarButton))return E;}return null;};r._ebKeyDown=function(l,a){if(this.jsxsupermix(l,a))return;if(l.enterKey()||l.spaceKey()){this.XN(l);l.cancelAll();}};g.yg={};g.yg[ub.k]=ub.l;g.yg[ub.m]=true;g.yg[ub.n]=true;g.yg[ub.o]=true;r.Id=function(n){var
Ca=this.Gi(0);if(Ca)return Ca;var
tb={};if(this.getParent()){var
Lb=(this.getParent()).Id(this);var
eb=(this.getParent()).paintBarSize();var
qa=0,ba=0,z=Lb.parentwidth,Ta=Lb.parentheight;if(this.getOrientation()==0){ba=eb;Ta=Ta-eb;}else{qa=eb;z=z-eb;}tb={boxtype:ub.p,left:qa,top:ba,width:z,height:Ta,parentwidth:z,parentheight:Ta};}return this.Ei(0,tb);};r.Hj=function(h,e,j){var
Kb=this.Wl(true,h);if(e){var
V=Kb.recalculate(h,e,j);if(!V.w&&!V.h)return;var
eb=(this.getParent()).paintBarSize();var
Ta=Kb.ee();var
_=Kb.ld();var
hb={};if(this.getOrientation()==0){hb.height=eb;hb.parentwidth=h.parentwidth;}else{hb.width=eb;hb.parentheight=h.parentheight;}var
G=Kb.lg(0);G.recalculate(hb,e?e.childNodes[0]:null,j);var
t=this.getContentChild();if(t!=null){t=this.yI(t,this.isFront());if(this.isFront()){var
Mb=this.getOrientation()==0?{boxtype:ub.p,left:0,top:eb,width:Ta,height:_-eb,parentwidth:Ta,parentheight:_-eb}:{boxtype:ub.p,left:eb,top:0,width:Ta-eb,height:_,parentwidth:Ta-eb,parentheight:_};j.add(t,Mb,t.getRendered(e),true);}}}};r.zd=function(k){if(this.getParent()&&(k==null||isNaN(k.parentwidth)||isNaN(k.parentheight))){k=(this.getParent()).Id(this);}else if(k==null)k={};var
cb=this.getOrientation()==0;k.width=ub.g;k.height=ub.g;k.tagname=ub.q;k.boxtype=ub.p;var
Wa=new
Ja.Painted.Box(k);var
Bb=(this.getParent()).paintBarSize();var
Va={};Va.parentwidth=Wa.ee();Va.parentheight=Wa.ld();if(cb){Va.width=ub.g;Va.height=Bb;}else{Va.width=Bb;Va.height=ub.g;}Va.left=0;Va.top=0;Va.tagname=ub.q;Va.boxtype=ub.p;Va.border=g.CAPTION_BORDER;Va.padding=ub.r;var
D=new
Ja.Painted.Box(Va);Wa.cl(D);Va={};if(cb){Va.tagname=ub.q;Va.boxtype=ub.p;Va.left=Va.top=0;}else{Va.tagname=ub.s;Va.boxtype=ub.t;}Va.padding=this.getPadding();var
Cb=new
Ja.Painted.Box(Va);D.cl(Cb);return Wa;};r.paint=function(){if(!(this.getParent() instanceof Ja.StackGroup))return ub.u;this.applyDynamicProperties();var
u=this.Wl(true);u.setAttributes(ub.v+this.getId()+ub.w+this.Ak()+ub.x+this.dd()+ub.w);u.setStyles(ub.y);var
G=this.qj(g.yg,1);var
yb=this.renderAttributes(null,true);var
Lb=u.lg(0);Lb.setAttributes(this.Rl()+this.nk()+G+yb+ub.z);Lb.setStyles(this.ch()+this.ke()+this.jc()+this._k()+this.cd()+this.wk()+this.Pb()+this.Bg());var
T=this.getChildren();var
ob=[],Pa=[];for(var
wa=0;wa<T.length;wa++)if(Ja.Menu&&T[wa] instanceof Ja.Menu||Ja.ToolbarButton&&T[wa] instanceof Ja.ToolbarButton){Pa.push(T[wa]);}else if(ob.length==0){T[wa]=this.yI(T[wa],this.isFront());ob.push(T[wa]);}var
Q=this.paintChildren(Pa);var
sb=this.paintChildren(ob);var
ha=Lb.lg(0);var
Wa=this.getOrientation()==0?ub.A:ub.B;ha.setAttributes(ub.x+Wa+ub.w+jsx3.html._d);var
Ib=(ha.paint()).join(this.il());return (u.paint()).join((Lb.paint()).join(Ib+Q)+sb);};r.yI=function(h,d){var
Wa=h.bc(d);h=Wa||h;if(h instanceof Y){h.setDisplay(d?ub.u:ub.C,true);h.setVisibility(ub.D);}return h;};r.Pb=function(){var
da;if(this.getTextAlign()){da=this.getTextAlign();}else if(this.getParent()&&this.getOrientation()==0){da=ub.E;}else da=ub.F;return ub.G+da+ub.H;};r.setText=function(n,s){this.jsxsuper(n,false);var
I;if(s&&(I=this.getRendered())!=null)I.firstChild.firstChild.innerHTML=n;return this;};r.getPadding=function(){var
ma=this.jsxsuper();return ma!=null&&ma!=ub.u?ma:ub.I;};r.getFontWeight=function(){return this.jsxsuper()||ub.J;};r.ke=function(){return (this.getBackground()?this.getBackground():this.getOrientation()==1?g.BACKGROUNDH:g.BACKGROUND)+ub.H;};r.Rl=function(){return this.jsxsuper(this.getIndex()||Number(0));};r.getActiveColor=function(){return this.jsxactivecolor==null?g.ACTIVECOLOR:this.jsxactivecolor;};r.setActiveColor=function(k){this.jsxactivecolor=k;return this;};r.getInactiveColor=function(){return this.jsxinactivecolor==null?g.INACTIVECOLOR:this.jsxinactivecolor;};r.setInactiveColor=function(q){this.jsxinactivecolor=q;return this;};r.getOrientation=function(){return this.getParent()!=null?(this.getParent()).getOrientation():0;};r.focus=function(){this.doShow();this.jsxsuper();};r.isFront=function(){var
Ma=this.getChildIndex();return Ma>=0&&(this.getParent()).getSelectedIndex()==Ma;};r.getMaskProperties=function(){return Y.MASK_NO_EDIT;};g.getVersion=function(){return ub.K;};r.Kj=function(d){var
E=this.getContentChild();if(E)E.Kj(d);this.jsxsuper(d);};});jsx3.gui.Stack.prototype.getBackgroundColor=jsx3.gui.Stack.prototype.getInactiveColor;jsx3.gui.Stack.prototype.setBackgroundColor=jsx3.gui.Stack.prototype.setInactiveColor;jsx3.Stack=jsx3.gui.Stack;
