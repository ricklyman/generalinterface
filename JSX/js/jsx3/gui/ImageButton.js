/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.ImageButton",jsx3.gui.Block,[jsx3.gui.Form],function(p,n){var
ub={A:'" ',B:' alt=""',a:"click",b:"mouseover",c:"mouseout",d:"mousedown",e:"mouseup",f:"keydown",g:'id="',h:'"',i:' class="',j:"jsx30imagebutton",k:"jsx30imagebutton_disabled",l:' width="',m:"",n:' height="',o:'<img src="',p:"/>",q:"span",r:"relativebox",s:"box",t:"div",u:"inline",v:"jsxtoggle",w:"jsxexecute",x:' alt="',y:/\"/g,z:"&quot;"};var
Va=jsx3.gui.Event;var
Za=jsx3.gui.Interactive;var
ga=jsx3.gui.Form;p.TYPE_NORMAL=0;p.TYPE_TOGGLE=1;p.STATE_OFF=0;p.STATE_ON=1;n.jsximage=null;n.jsxoverimage=null;n.jsxdownimage=null;n.jsxonimage=null;n.jsxdisabledimage=null;n.jsxprefetch=1;n.jsxtype=0;n.jsxstate=0;n._jsxRL=null;n.init=function(s,i,d,q,k){this.jsxsuper(s,i,d,q,k);};n.getImage=function(){return this.jsximage;};n.setImage=function(g){this.jsximage=g;return this;};n.getOverImage=function(){return this.jsxoverimage;};n.setOverImage=function(s){this.jsxoverimage=s;return this;};n.getDownImage=function(){return this.jsxdownimage;};n.setDownImage=function(q){this.jsxdownimage=q;return this;};n.getOnImage=function(){return this.jsxonimage;};n.setOnImage=function(m){this.jsxonimage=m;return this;};n.getDisabledImage=function(){return this.jsxdisabledimage;};n.setDisabledImage=function(c){this.jsxdisabledimage=c;return this;};n.getState=function(){return this.jsxstate;};n.setState=function(c){this.jsxstate=c;var
rb=this.getRendered();if(rb)rb.childNodes[0].childNodes[0].src=this.WI(false,false);return this;};n.getType=function(){return this.jsxtype;};n.setType=function(k){this.jsxtype=k;return this;};n.isPreFetch=function(){return this.jsxprefetch;};n.setPreFetch=function(d){this.jsxprefetch=jsx3.Boolean.valueOf(d);return this;};n.setEnabled=function(c,e){if(this._jsxRL!=null)this._jsxRL.setEnabled(c==1);return this.jsxsupermix(c,e);};p.yg={};p.yg[ub.a]=true;p.yg[ub.b]=true;p.yg[ub.c]=true;p.yg[ub.d]=true;p.yg[ub.e]=true;p.yg[ub.f]=true;n.paint=function(){this.applyDynamicProperties();var
Pa=this.getEnabled()==1;var
mb=this.getKeyBinding();if(mb){var
P=this;if(this._jsxRL!=null)this._jsxRL.destroy();this._jsxRL=this.doKeyBinding(function(i){P.nj(i,P.getRendered());},mb);if(this._jsxRL)this._jsxRL.setEnabled(Pa);}var
Kb=this.qj(Pa?p.yg:null,0);var
ca=this.renderAttributes(null,true);var
ka=this.Wl(true);ka.setAttributes(ub.g+this.getId()+ub.h+this.Ak()+this.Rl()+ub.i+(Pa?ub.j:ub.k)+ub.h+Kb+ca);ka.setStyles(this.mi(true)+this.ad()+this.lc()+this.Wi()+this.ch()+this.Bg());var
Hb=ka.ee();Hb=Hb!=null?ub.l+Hb+ub.h:ub.m;var
na=ka.ld();na=na!=null?ub.n+na+ub.h:ub.m;var
jb=ub.o+this.WI(false,false)+ub.h+Hb+na+this.nk()+this.il()+ub.p;if(!this._jsxDB&&this.isPreFetch()){var
nb=this.getUriResolver();var
eb=[this.getImage(),this.getOverImage(),this.getDownImage(),this.getOnImage(),this.getDisabledImage()].map(function(o){return o?nb.resolveURI(o):null;});jsx3.html.loadImages(eb);this._jsxDB=true;}var
S=ka.lg(0);return (ka.paint()).join((S.paint()).join(jb));};n.zd=function(){this.applyDynamicProperties();var
ab=this.getRelativePosition()!=0;var
la=this.getParent()?(this.getParent()).Id(this)||{}:{};if(!ab&&la.left==null&&!jsx3.util.strEmpty(this.getLeft()))la.left=this.getLeft();if(!ab&&la.top==null&&!jsx3.util.strEmpty(this.getTop()))la.top=this.getTop();if(la.width==null&&!(this.getWidth()==null||isNaN(this.getWidth())))la.width=this.getWidth();if(la.height==null&&!(this.getHeight()==null||isNaN(this.getHeight())))la.height=this.getHeight();la.tagname=ub.q;if(la.boxtype==null)la.boxtype=ab||la.left==null||la.top==null?ub.r:ub.s;if(la.padding=null)la.padding=this.getPadding();if(la.margin==null&&ab&&this.getMargin()!=null)la.margin=this.getMargin();if(la.border==null&&this.getBorder()!=null)la.border=this.getBorder();var
Ma=new
jsx3.gui.Painted.Box(la);la={tagname:ub.t,boxtype:ub.u,height:Ma.ld()};Ma.cl(new
jsx3.gui.Painted.Box(la));return Ma;};n.Hj=function(m,j,e){this.sk(m,j,e,1);};n.WI=function(c,j){var
Kb=null;if(this.getEnabled()==1){if(c)Kb=this.getOverImage();else if(j)Kb=this.getDownImage();if(this.getType()==1&&this.getState()==1)Kb=Kb||this.getOnImage();}else Kb=this.getDisabledImage();Kb=Kb||this.getImage();return Kb?(this.getUriResolver()).resolveURI(Kb):ub.m;};n.nj=function(j,c){if(!j.leftButton()&&j.isMouseEvent())return;if(this.getType()==1){var
eb=this.getState()==0?1:0;var
Ja=this.doEvent(ub.v,{objEVENT:j,intSTATE:eb,_gipp:1});if(Ja!==false){this.setState(eb);c.childNodes[0].childNodes[0].src=this.WI(false,false);}}this.doEvent(ub.w,{objEVENT:j});};n.Ri=function(i,d){d.childNodes[0].childNodes[0].src=this.WI(true,false);};n.Uc=function(q,o){o.childNodes[0].childNodes[0].src=this.WI(false,false);};n.Fo=function(s,m){if(s.leftButton())m.childNodes[0].childNodes[0].src=this.WI(false,true);};n.yo=function(i,d){if(i.rightButton())this.jsxsupermix(i,d);else if(i.leftButton())d.childNodes[0].childNodes[0].src=this.WI(false,false);};n._ebKeyDown=function(k,r){if(k.enterKey()||k.spaceKey()){this.nj(k,r);k.cancelAll();}};n.doValidate=function(){var
Wa=null;if(this.getType()==p.NORMAL)Wa=1;else Wa=this.getState()==1||this.getRequired()==0?1:0;this.setValidationState(Wa);return Wa;};n.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};n.emInit=function(e){this.jsxsupermix(e);};n.emSetValue=function(i){};n.emGetValue=function(){return null;};n.emBeginEdit=function(b,m,g,s,d,j,k){var
Ua=k.childNodes[0].childNodes[0];if(Ua){this.jsxsupermix(b,m,g,s,d,j,k);jsx3.html.focus(Ua);}else return false;};n.emPaintTemplate=function(){this.setEnabled(0);var
Lb=this.paint();this.setEnabled(1);var
Ea=this.paint();return this.emGetTemplate(Ea,Lb);};n.il=function(){var
fa=this.getText();return fa?ub.x+fa.replace(ub.y,ub.z)+ub.A:ub.B;};n.onDestroy=function(d){if(this._jsxRL)this._jsxRL.destroy();this.jsxsuper(d);};n.onSetChild=function(f){return false;};});
