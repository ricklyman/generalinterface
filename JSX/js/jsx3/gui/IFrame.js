/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.IFrame",jsx3.gui.Block,null,function(p,s){var
ub={a:"yes",b:"no",c:"auto",d:' src="',e:'"',f:"",g:'<span id="',h:'" class="jsx30iframe" style="',i:">",j:'<iframe id="',k:'" name="',l:'" class="jsx30iframe" frameborder="0"',m:"load",n:"S2",o:"></iframe>",p:"</span>",q:"_iframe",r:"jsxload",s:"about:blank",t:"src",u:' scrolling="'};p.SCROLLYES=1;p.SCROLLNO=2;p.SCROLLAUTO=3;p.Bw={1:ub.a,2:ub.b,3:ub.c};s.paint=function(){this.applyDynamicProperties();var
K=this.getSrc();var
ya=this.getId();var
Lb=this.getIFrameId();K=K?ub.d+(this.getUriResolver()).resolveURI(K)+ub.e:ub.f;return ub.g+ya+ub.h+this.ad()+this.lc()+this.Bg()+ub.e+this.renderAttributes()+ub.i+ub.j+Lb+ub.k+Lb+ub.l+K+this.M8()+this.Fg(ub.m,ub.n,1)+ub.o+ub.p;};s.getIFrameId=function(){return this.getId()+ub.q;};s.getIFrame=function(){try{return this.eval(this.getIFrameId());}catch(Kb){return null;}};s.getContentDocument=function(){try{var
wa=this.getIFrame();if(wa)if(jsx3.CLASS_LOADER.IE){return wa.document;}else return wa.contentDocument;}catch(Kb){}return null;};s.S2=function(i,d){this.doEvent(ub.r,{objEVENT:i});};s.getSrc=function(){return this.jsxsrc;};s.setSrc=function(g){this.jsxsrc=g;if(g==null||g==ub.f)g=ub.s;if(jsx3.CLASS_LOADER.IE){var
B=this.getContentDocument();if(B)B.location.href=((this.getUriResolver()).resolveURI(g)).toString();}else{var
oa=this.getIFrame();if(oa&&oa.setAttribute)oa.setAttribute(ub.t,(this.getUriResolver()).resolveURI(g));else this.repaint();}return this;};s.getScrolling=function(){return this.jsxscroll;};s.setScrolling=function(f){this.jsxscroll=f;return this;};s.M8=function(){var
ha=p.Bw[this.jsxscroll];return ha?ub.u+ha+ub.e:ub.f;};s.onSetChild=function(l){return false;};s.zd=function(n){return null;};s.Hj=function(a,q,b){};});
