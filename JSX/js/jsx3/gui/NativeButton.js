/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.NativeButton",jsx3.gui.Block,[jsx3.gui.Form],function(a,f){var
ub={a:"jsx3nativebtn",b:"submit",c:"reset",d:"button",e:"background-color:",f:";",g:"",h:"input",i:"inline",j:"box",k:"click",l:"jsxblur",m:"blur",n:"jsxfocus",o:"focus",p:' type="',q:'" id="',r:'"',s:' class="',t:'" ',u:"jsxexecute",v:" ",w:' value="',x:"pt"};a.DEFAULTCLASSNAME=ub.a;var
W=jsx3.gui.Event;var
L=jsx3.gui.Form;var
xb=jsx3.gui.Interactive;a.BUTTON=0;a.SUBMIT=1;a.RESET=2;f.getType=function(){return this.jsxtype;};f.setType=function(h){this.jsxtype=h;};f.pC=function(){switch(this.getType()){case 1:return ub.b;case 2:return ub.c;default:return ub.d;}};f.doValidate=function(){this.setValidationState(1);return this.getValidationState();};f.ch=function(){var
sa=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor()||L.DEFAULTDISABLEDBACKGROUNDCOLOR;return sa?ub.e+sa+ub.f:ub.g;};f.Hj=function(b,r,p){this.sk(b,r,p,3);};f.zd=function(n){if(this.getParent()&&(n==null||isNaN(n.parentwidth)||isNaN(n.parentheight))){n=(this.getParent()).Id(this);}else if(n==null)n={};this.applyDynamicProperties();var
gb=this.getRelativePosition()!=0;var
Nb,Bb,Cb;var
Ka=!gb&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
tb=!gb&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(n.left==null)n.left=tb;if(n.top==null)n.top=Ka;if(n.width==null)n.width=this.getWidth();if(n.height==null)n.height=this.getHeight();n.tagname=ub.h;if(!n.boxtype)n.boxtype=gb?ub.i:ub.j;Nb=this.getPadding();Bb=this.getMargin();Cb=this.getBorder();if(Nb!=null&&Nb!=ub.g)n.padding=Nb;if(gb&&(Bb=this.getMargin())!=null&&Bb!=ub.g)n.margin=Bb;if(Cb!=null&&Cb!=ub.g)n.border=Cb;return new
jsx3.gui.Painted.Box(n);};f.paint=function(){this.applyDynamicProperties();var
Ga=this.getId();var
qa={};qa[ub.k]=true;if(this.hasEvent(ub.l))qa[ub.m]=true;if(this.hasEvent(ub.n))qa[ub.o]=true;var
Ea=this.qj(qa,0);var
Ta=this.renderAttributes(null,true);var
Da=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
Jb=this.Wl(true);Jb.setAttributes(ub.p+this.pC()+ub.q+Ga+ub.r+this.Lj()+this.pc()+this.Rl()+this.paintValue()+this.nk()+Ea+ub.s+this.dd()+ub.t+Ta);Jb.setStyles(Da);return (Jb.paint()).join(ub.g);};f.nj=function(b,k){this.doEvent(ub.u,{objEVENT:b});};f.dd=function(){var
da=this.getClassName();return a.DEFAULTCLASSNAME+(da?ub.v+da:ub.g);};f.paintValue=function(){var
Gb=this.getValue();return Gb!=null?ub.w+jsx3.util.strEscapeHTML(Gb)+ub.r:ub.g;};f.setValue=function(l){this.jsxvalue=l;var
ib=this.getRendered();if(ib!=null)ib.value=l;return this;};f.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};f.emInit=function(e){this.jsxsupermix(e);this.subscribe(ub.u,this,ub.x);};f.emSetValue=function(s){};f.emGetValue=function(){return null;};f.emBeginEdit=function(r,p,o,d,g,q,n){var
Aa=jsx3.html.selectSingleElm(n,0,0,0);if(Aa){this.jsxsupermix(r,p,o,d,g,q,n);jsx3.html.focus(Aa);}else return false;};f.emPaintTemplate=function(){this.setEnabled(0);var
Qa=this.paint();this.setEnabled(1);var
Bb=this.paint();return this.emGetTemplate(Bb,Qa);};f.pt=function(s){};f.onSetChild=function(j){return false;};});
