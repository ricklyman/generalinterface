/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Label",jsx3.gui.Block,null,function(h,g){var
ub={a:"jsxdblclick",b:"dblclick",c:"jsxclick",d:"click",e:"jsxkeydown",f:"keydown",g:"mouseup",h:' id="',i:'"',j:' class="',k:'" ',l:"label",m:' for="',n:""};var
W=jsx3.gui.Event;var
Q=jsx3.gui.Interactive;g.getFor=function(){return this.jsxfor;};g.setFor=function(q){this.jsxfor=q;};g.paint=function(){this.applyDynamicProperties();var
pb=this.il();var
Nb=this.getId();var
w={};if(this.hasEvent(ub.a))w[ub.b]=true;if(this.hasEvent(ub.c))w[ub.d]=true;if(this.hasEvent(ub.e))w[ub.f]=true;if(this.getMenu()!=null)w[ub.g]=true;var
Xa=this.qj(w,0);var
ha=this.renderAttributes(null,true);var
ia=this.Wl(true);ia.setAttributes(this.Rl()+this.nk()+Xa+ub.h+Nb+ub.i+ub.j+this.dd()+ub.k+this.wJ()+ha);ia.setStyles(this.cd()+this.ch()+this.ke()+this.jc()+this.Mm()+this._k()+this.Wi()+this.wk()+this.Pb()+this.mi()+this.ad()+this.paintBlockDisplay()+this.Bg());return (ia.paint()).join(pb+this.paintChildren());};g.getTagName=function(){return ub.l;};g.wJ=function(){var
ra=this.Pk(this.jsxfor);return ra?ub.m+(ra.getInputId?ra.getInputId():ra.getId())+ub.i:ub.n;};});
