/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Painted");jsx3.Class.defineClass("jsx3.gui.NativeHidden",jsx3.gui.Painted,[jsx3.gui.Form],function(g,b){var
ub={a:'<input type="hidden" id="',b:'"',c:"/>",d:' value="',e:""};b.doValidate=function(){this.setValidationState(1);return this.getValidationState();};b.Hj=function(n,k,d){};b.zd=function(h){return new
jsx3.gui.Painted.Box(h);};b.paint=function(){this.applyDynamicProperties();var
mb=this.renderAttributes(null,true);return ub.a+this.getId()+ub.b+this.Lj()+this.paintValue()+mb+ub.c;};b.paintValue=function(){var
ob=this.getValue();return ob!=null?ub.d+jsx3.util.strEscapeHTML(ob)+ub.b:ub.e;};b.setValue=function(i){this.jsxvalue=i;var
C=this.getRendered();if(C!=null)C.value=i;return this;};b.onSetChild=function(i){return false;};});
