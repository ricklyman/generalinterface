/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.NativeFileUpload",jsx3.gui.Block,[jsx3.gui.Form],function(p,g){var
ub={a:"jsx3nativefile",b:"background-color:",c:";",d:"",e:"input",f:"inline",g:"box",h:"click",i:"jsxblur",j:"blur",k:"jsxfocus",l:"focus",m:' type="file" id="',n:'"',o:' class="',p:'" ',q:"jsxexecute",r:" "};p.DEFAULTCLASSNAME=ub.a;var
W=jsx3.gui.Event;var
L=jsx3.gui.Form;var
xb=jsx3.gui.Interactive;g.doValidate=function(){this.setValidationState(1);return this.getValidationState();};g.ch=function(){var
Da=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor()||L.DEFAULTDISABLEDBACKGROUNDCOLOR;return Da?ub.b+Da+ub.c:ub.d;};g.Hj=function(l,i,f){this.sk(l,i,f,3);};g.zd=function(m){if(this.getParent()&&(m==null||isNaN(m.parentwidth)||isNaN(m.parentheight))){m=(this.getParent()).Id(this);}else if(m==null)m={};this.applyDynamicProperties();var
na=this.getRelativePosition()!=0;var
F,G,Ya;var
zb=!na&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
Lb=!na&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(m.left==null)m.left=Lb;if(m.top==null)m.top=zb;if(m.width==null)m.width=this.getWidth();if(m.height==null)m.height=this.getHeight();m.tagname=ub.e;if(!m.boxtype)m.boxtype=na?ub.f:ub.g;F=this.getPadding();G=this.getMargin();Ya=this.getBorder();if(F!=null&&F!=ub.d)m.padding=F;if(na&&(G=this.getMargin())!=null&&G!=ub.d)m.margin=G;if(Ya!=null&&Ya!=ub.d)m.border=Ya;return new
jsx3.gui.Painted.Box(m);};g.paint=function(){this.applyDynamicProperties();var
Ea=this.getId();var
ua={};ua[ub.h]=true;if(this.hasEvent(ub.i))ua[ub.j]=true;if(this.hasEvent(ub.k))ua[ub.l]=true;var
w=this.qj(ua,0);var
fa=this.renderAttributes(null,true);var
Ua=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
tb=this.Wl(true);tb.setAttributes(ub.m+Ea+ub.n+this.Lj()+this.pc()+this.Rl()+this.nk()+w+ub.o+this.dd()+ub.p+fa);tb.setStyles(Ua);return (tb.paint()).join(ub.d);};g.nj=function(h,e){this.doEvent(ub.q,{objEVENT:h});};g.dd=function(){var
Fa=this.getClassName();return p.DEFAULTCLASSNAME+(Fa?ub.r+Fa:ub.d);};g.getValue=function(){var
Y=this.getRendered();return Y?Y.value:null;};g.setValue=function(f){};g.onSetChild=function(c){return false;};});
