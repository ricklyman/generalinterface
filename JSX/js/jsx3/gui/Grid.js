/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.List");jsx3.Class.defineClass("jsx3.gui.Grid",jsx3.gui.List,null,function(l,o){var
ub={A:"_jsxisblur",B:"\n",C:"onAfterEdit called for invalid row ",D:"function",E:"jsxafteredit",F:"_jsxcurmask",G:"_jsxvalidrow",H:"jsxexecute",I:"TBODY",J:"TR",K:"TD",L:"JSXDragId",M:"3.0.00",a:"jsx:///xsl/",b:"ie",c:"fx",d:"/jsx30grid.xsl",e:"url(",f:"jsx:///images/grid/select.gif",g:")",h:"background-image:url(",i:"jsx:///images/list/grid.gif",j:");",k:"jsx:///images/list/header.gif",l:"#c8cfd8",m:"jsx30list_r2",n:"background-color:",o:";",p:"hidden",q:"",r:"jsxmask",s:"jsxnull",t:"jsxselect",u:/@/g,v:"jsxbeforeedit",w:"_jsxbody",x:"visible",y:"sentence",z:"character"};var
B=jsx3.util.Logger.getLogger(l.jsxclass.getName());var
Ua=jsx3.gui.Event;l.DEFAULTXSLURL=jsx3.resolveURI(ub.a+(jsx3.CLASS_LOADER.IE?ub.b:ub.c)+ub.d);l.SELECTBGIMAGE=ub.e+jsx3.resolveURI(ub.f)+ub.g;l.DEFAULTBACKGROUND=ub.h+jsx3.resolveURI(ub.i)+ub.j;l.DEFAULTBACKGROUNDHEAD=ub.h+jsx3.resolveURI(ub.k)+ub.j;if(jsx3.CLASS_LOADER.IE6)jsx3.html.loadImages(ub.f,ub.i,ub.k);l.DEFAULTBACKGROUNDCOLOR=ub.l;l.DEFAULTBACKGROUNDCOLORHEAD=ub.l;l.DEFAULTROWCLASS=ub.m;o.init=function(f){this.jsxsuper(f);};o.IJ=function(){this._jsxff=null;this._jsxcellindex=null;this._jsxrowid=null;};o.getTabListener=function(){return this.jsxtablistener;};o.setTabListener=function(h){this.jsxtablistener=h;return this;};o.paint=function(){this.resetMask();this.IJ();return this.jsxsuper();};o.getClassName=function(){return this.jsxclassname==null?l.DEFAULTROWCLASS:this.jsxclassname;};o.getXSL=function(){return this.nd(l.DEFAULTXSLURL);};o.doValidate=function(){return (this.setValidationState(1)).getValidationState();};o.ch=function(){return ub.n+(this.getBackgroundColor()?this.getBackgroundColor():l.DEFAULTBACKGROUNDCOLOR)+ub.o;};o.ke=function(){return this.getBackground()?this.getBackground()+ub.o:l.DEFAULTBACKGROUND;};o.zn=function(e,h){this.resetMask();this.jsxsuper(e,h);};o.resetMask=function(c){if(c||(c=this.getActiveMask())!=null)((c.setVisibility(ub.p,true)).setLeft(0,true)).setTop(0,true);};o.doSort=function(c){var
xa;if(xa=this.getActiveMask())this.onAfterEdit(null,xa);this.resetMask();this.jsxsuper(c);};o.repaintBody=function(){this.resetMask();this.jsxsuper();};o.doBlurItem=function(g){};o.doFocusItem=function(a,n){var
fa=Ua.getCurrent();var
Y=a.ownerDocument;var
tb=a.parentNode.id.substring((this.getId()).length+1);if(!this.Ig(tb))return;var
J=a!=this._jsxff||n;if(J&&this._jsxcurmask!=null&&(n==true||n!=true&&!(this._jsxcurmask instanceof jsx3.gui.TextBox))){this.onAfterEdit(this._jsxff,this._jsxcurmask);}else if(J&&this._jsxcurmask!=null)this.resetMask();try{jsx3.html.focus(a);if(this._jsxff!=null)this._jsxff.style.backgroundImage=this._jsxff.prevBG!=null?this._jsxff.prevBG:ub.q;if(this.getGrowBy()>0&&a.parentNode==a.parentNode.parentNode.lastChild)this.appendRow();}catch(Kb){var
Mb=Y.getElementById(this._jsxrowid);if(Mb!=null)Mb.childNodes[this._jsxcellindex].style.backgroundImage=ub.q;return false;}a.prevBG=a.style.backgroundImage;a.style.backgroundImage=l.SELECTBGIMAGE;this._jsxff=a;this._jsxcellindex=a.cellIndex;this._jsxrowid=a.parentNode.id;var
ya=(this.Ld())[this._jsxcellindex];if(n==null){var
oa=a.getAttribute(ub.r);if(!jsx3.util.strEmpty(oa)&&oa!=ub.s){var
aa=ya.getDescendantOfName(oa)||this.getDescendantOfName(oa);this.jv(fa,a,aa);}else this.doEvent(ub.t,{objEVENT:fa,strRECORDID:tb,intCOLUMNINDEX:this._jsxcellindex});}};o.jv=function(n,r,j){this.resetMask();this._jsxcurmask=j;var
Za=((this.Ld())[this._jsxcellindex].getPath()).replace(ub.u,ub.q);var
ab=this.getSelectedId();j.setValue();var
Ya=this.doEvent(ub.v,{objEVENT:n,strATTRIBUTENAME:Za,strRECORDID:ab,objMASK:j,intCOLUMNINDEX:this._jsxcellindex});if(Ya!==false&&r!=null&&j!=null){var
ob=r.ownerDocument;var
v=this.getHeaderHeight()===0||this.getHeaderHeight()?this.getHeaderHeight():jsx3.gui.List.DEFAULTHEADERHEIGHT;j._jsxvalidrow=r.parentNode.id;var
zb=ob.getElementById(this.getId()+ub.w);var
X=this.getRecord(ab);var
pb=X[Za];if(pb==null)pb=ub.q;var
va=this.getAbsolutePosition(this.getRendered(),r);if(j instanceof jsx3.gui.TextBox){j.setLeft(va.L+zb.scrollLeft,true);j.setTop(va.T-v+zb.scrollTop,true);j.setWidth(va.W-1,true);j.setHeight(va.H-1,true);j.setValue(pb);j._jsxprevmaskvalue=pb;j.setVisibility(ub.x,true);if((r=j.getRendered())&&r.scrollHeight>r.offsetHeight)j.setHeight(va.H-1+va.H,true);if(j.getType()==1){j.focus();(j.getRendered()).select();}else{j.focus();if(ob.selection){var
Gb=ob.selection.createRange();Gb.move(ub.y,-1);Gb.moveEnd(ub.z,pb.length);Gb.select();}}}else if(j instanceof jsx3.gui.ToolbarButton||j instanceof jsx3.gui.Menu){j.setLeft(va.L+va.W-(j.getAbsolutePosition()).W+zb.scrollLeft+(j instanceof jsx3.gui.Menu?2:0),true);j.setTop(va.T-v+zb.scrollTop-2,true);j.setVisibility(ub.x,true);j._jsxvalue=pb==ub.q?null:pb;j._jsxprevmaskvalue=pb;if(n.ctrlKey())if(j instanceof jsx3.gui.Menu){j.showMenu(n,j.getRendered(),1);}else j.focus();}else if(j instanceof jsx3.gui.Select){if(j.getValue()==null){j.setValue(pb==ub.q?null:pb);j.setText(pb==null?ub.q:pb);}j.setLeft(va.L+zb.scrollLeft,true);j.setTop(va.T-v+zb.scrollTop,true);j.setWidth(va.W-1,true);j.setHeight(va.H-1,true);j._jsxprevmaskvalue=j.getValue();j.setVisibility(ub.x,true);if(n.ctrlKey()){j.show();}else j.focus();}delete this[ub.A];}};o.doMaskKeyDown=function(c,j){if(j==null)j=Ua.getCurrent();var
ob=false;var
ia=j.keyCode();var
ka=ia>36&&ia<41;if((j.enterKey()||j.tabKey())&&!j.ctrlKey()||ka&&(j.ctrlKey()||j.altKey())){if(j.enterKey()&&j.shiftKey()||ia==38){j.setKeyCode(38);}else if(j.enterKey()||ia==40){j.setKeyCode(40);}else if(j.tabKey()&&j.shiftKey()&&!(!this.getTabListener()||this.getTabListener()==1)){try{this.focus();return;}catch(Kb){}}else if(j.tabKey()&&!(!this.getTabListener()||this.getTabListener()==1))try{jsx3.html.focus((this.getRendered()).lastChild);return;}catch(Kb){}this._jsxisblur=this.getActiveMask()&&this.getActiveMask() instanceof jsx3.gui.TextBox;this._ebKeyDown(j,c);ob=true;}else if(j.ctrlKey()&&j.enterKey()){var
Aa=(this.getDocument()).selection.createRange();Aa.text=ub.B;Aa.select();ob=true;}else if(ka)ob=true;if(ob)j.cancelBubble();};o.getSelectedId=function(){if(this._jsxrowid!=null){var
na=this.getRendered();if(na){var
Ta=na.ownerDocument.getElementById(this._jsxrowid);if(Ta!=null)return this._jsxrowid.substring((this.getId()).length+1);}this.IJ();}return null;};o.getActiveMask=function(){return this._jsxcurmask;};o.getActiveCell=function(){return this._jsxff;};o.getActiveRow=function(){var
pb;return (pb=this.getActiveCell())?pb.parentNode:null;};o.getActiveAttribute=function(){if(this._jsxcellindex){var
xa=(this.Ld())[this._jsxcellindex];if(xa)return (xa.getPath()).replace(ub.u,ub.q);}return null;};o.onAfterEdit=function(n,j,s,p){var
Da=Ua.getCurrent();var
X=((this.Ld())[this._jsxcellindex].getPath()).replace(ub.u,ub.q);var
cb=this.getSelectedId();if(n==null)n=this._jsxff;var
Ha=n&&n.parentNode?n.parentNode.id:null;if(j._jsxvalidrow==null||j._jsxvalidrow!=Ha){B.warn(ub.C+Ha);return;}if(!(jsx3.util.strEmpty(n.getAttribute(ub.r))||n.getAttribute(ub.r)==ub.s))if(j==null||typeof j.getValue==ub.D&&j.getValue()!=j._jsxprevmaskvalue){var
Nb=this.doEvent(ub.E,{objEVENT:Da,strATTRIBUTENAME:X,strRECORDID:cb,objMASK:j,objGUI:n,intCOLUMNINDEX:this._jsxcellindex});if(Nb!==false&&j!=null){this.updateCell(X,cb,n,j);if(s&&j instanceof jsx3.gui.Menu)jsx3.html.focus(this.getActiveCell());}}if(j!=null&&p!==true){this.resetMask(j);delete this[ub.F];delete j[ub.G];}};o.updateCell=function(r,n,a,h){if(h==null)h=this.getActiveMask();if(a==null)a=this._jsxff;if(h&&a){if(r==null)r=((this.Ld())[this._jsxcellindex].getPath()).replace(ub.u,ub.q);if(n==null)n=this.getSelectedId();var
lb=typeof h.getMaskValue==ub.D?h.getMaskValue():h.getValue();if(lb==null)lb=ub.q;this.insertRecordProperty(n,r,lb,true);}};o._ebKeyDown=function(d,i){if(this.jsxsupermix(d,i))return;if(this._jsxff==null||this._jsxff.parentNode==null)return;var
Q=this._jsxff;var
Jb=(this.Ld()).length;var
u=d.keyCode();var
C=u>=37&&u<=40||u==9&&(!this.getTabListener()||this.getTabListener()==1);var
R=C;if(C){var
Ab=null;var
Ca=Q==Q.parentNode.firstChild;var
oa=Q.cellIndex>=Jb-1;var
gb=Q.parentNode==Q.parentNode.parentNode.firstChild;var
La=Q.parentNode==Q.parentNode.parentNode.lastChild;if(u==37||d.shiftKey()&&u==9){if(u==9)u=37;if(Ca){if(gb)Ab=Q;else Ab=Q.parentNode.previousSibling.childNodes[Jb-1];}else Ab=Q.previousSibling;}else if(u==38){if(gb)Ab=Q;else Ab=Q.parentNode.previousSibling.childNodes[Q.cellIndex];}else if(u==39||u==9){if(u==9)u=39;if(oa){if(La)Ab=Q;else Ab=Q.parentNode.nextSibling.childNodes[0];}else Ab=Q.nextSibling;}else if(u==40)if(La)Ab=Q;else Ab=Q.parentNode.nextSibling.childNodes[Q.cellIndex];this.doFocusItem(Ab,true);}else if(u==13){}else if(u==9&&d.shiftKey()){this.focus();R=true;}else if(u==9){jsx3.html.focus((this.getRendered()).lastChild);R=true;}if(R){d.cancelBubble();d.cancelReturn();}};o.doExecute=function(b,c){this.Jm(this.isOldEventProtocol(),b,c);};o.Jm=function(q,k,m){if(k==null&&this._jsxrowid)k=this._jsxrowid.substring((this.getId()).length+1);if(m==null)m=this._jsxcellindex;if(k==null)return;if(!this.Ig(k))return;var
L=this.getRecordNode(k);if(L!=null)this.eval(L.getAttribute(ub.H),{strRECORDID:k,intCOLUMNINDEX:m});if(q)this.doEvent(ub.H,{objEVENT:q instanceof Ua?q:null,strRECORDID:k,intCOLUMNINDEX:m});};o.nj=function(q,c){var
Lb=q.srcElement();if(Lb.tagName==ub.I||Lb.tagName==ub.J)return;var
xb=this.getRendered();while(Lb.tagName!=ub.K&&Lb!=xb)Lb=Lb.parentNode;if(Lb.tagName==ub.K){if(Lb.parentNode.getAttribute(ub.L)==null)return;if(Lb.cellIndex==(this.Ld()).length)return;jsx3.html.focus(Lb);q.cancelBubble();q.cancelReturn();}};o.Vk=function(){var
ya=ub.q;var
da=this.Ld();var
Ya=da.length;for(var
Ia=0;Ia<Ya;Ia++){var
w=da[Ia];var
qa=w.getChildren();for(var
la=0;la<qa.length;la++)ya=ya+qa[la].paint();}return ya;};o.redrawRecord=function(e,a){if(a==0)this.resetMask();this.jsxsuper(e,a);};l.getVersion=function(){return ub.M;};});jsx3.Grid=jsx3.gui.Grid;
