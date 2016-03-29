(jsx3.$O(this)).extend({_FOCUS:{SQ:"NN",qA:"SS",V4:"EE",EN:"WW",c2:"MM",By:"nudge",k3:"#000000",iZ:"#1E90FF",Hp:"#FF901E",qN:"#999999",rs:2,mx:2,S4:3,eu:6,Yv:4,Io:{37:"W",38:"N",39:"E",40:"S"},d2:0,tT:"S",p9:"0",Pv:"0",MR:null,WT:null},_getSnapTo:function(){var
fb=jsx3.ide.getIDESettings();if(fb.get("prefs","dom","snapTo")){var
xa=fb.get("prefs","builder","snapto");return xa!=null?Math.max(1,xa):10;}else return 1;},toggleSnapToGrid:function(){var
kb=jsx3.ide.getIDESettings();var
Ta=!kb.get("prefs","dom","snapTo");kb.set("prefs","dom","snapTo",Ta);this.setBindableProp("snapOn",Ta);},toggleFocusRectangle:function(){var
gb=jsx3.ide.getIDESettings();var
qa=gb.get("prefs","dom","showFocus");this.showFocusRectangle(!qa,true,true);},showFocusRectangle:(jsx3.$F(function(e,a,c){var
xb={A:"px;top:",B:'<span id="_ide_SS"',C:'<span id="_ide_BB" unselectable="on" style="position:absolute;left:0px;top:0px;width:',D:"px;border:solid 1px ",E:';z-index:-1;font-size:4px;"></span>',F:'<span id="_ide_MM"',G:' jsxpoint="MM" unselectable="on" style="overflow:hidden;cursor:',H:"move",I:"</span>",J:"W",K:"N",L:"onmousedown",M:"ondblclick",N:"onkeydown",O:"onfocus",P:"onblur",Q:"jsxfocusrectangle_span",a:"jsxfocusrectangle",b:"boolean",c:"prefs",d:"dom",e:"showFocus",f:"rectangleOn",g:"component",h:"jsxtab_componenteditor_main",i:"",j:'<span tabindex="1" id="jsxfocusrectangle_span" style="position:absolute;width:100%;height:100%;left:2px;top:2px;">',k:'<span id="_ide_NN"',l:' jsxon="1"',m:' jsxpoint="',n:'" unselectable="on" style="overflow:hidden;cursor:',o:"N-resize",p:"normal",q:";position:absolute;background-color:",r:";left:",s:"px;top:-1px;width:",t:"px;height:",u:'px;">&#160;</span>',v:'<span id="_ide_WW"',w:"W-resize",x:";left:-1px;top:",y:"px;width:",z:'<span id="_ide_EE"'};var
Z=this._FOCUS;var
Ba=jsx3.gui.Heavyweight.GO(xb.a);if(Ba)Ba.destroy();var
ga=jsx3.ide.getIDESettings();if(typeof e!=xb.b){e=ga.get(xb.c,xb.d,xb.e);}else{c=true;ga.set(xb.c,xb.d,xb.e,e);this.setBindableProp(xb.f,e);}var
da=jsx3.ide.getActiveEditor();if(da==null||!(jsx3.ide.ComponentEditor&&da instanceof jsx3.ide.ComponentEditor&&da.getMode()==xb.g))return;var
db=jsx3.ide.getSelected();if(!e||db.length==0)return;var
qb=(da.getContent()).getDescendantOfName(xb.h);var
eb=qb.getAncestorOfType(jsx3.gui.TabbedPane);qb=qb.getRendered();var
Xa=null,Ja=Number.POSITIVE_INFINITY,_a=Number.NEGATIVE_INFINITY;var
A=Ja,Bb=_a;for(var
na=0;na<db.length;na++){if(!db[na]||!db[na].getMaskProperties)continue;var
wa=db[na].getMaskProperties();if(Xa==null){Xa=jsx3.clone(wa);}else{var
ib=[Z.SQ,Z.qA,Z.V4,Z.EN,Z.c2];for(var
ea=0;ea<ib.length;ea++)Xa[ib[ea]]=Xa[ib[ea]]&&wa[ib[ea]];}var
la=db[na].getAbsolutePosition(qb);Ja=Math.min(Ja,la.L);A=Math.min(A,la.T);_a=Math.max(_a,la.L+la.W);Bb=Math.max(Bb,la.T+la.H);}if(Xa==null)return;Z.MR={L:Ja,T:A,W:_a-Ja,H:Bb-A};var
Cb=db.length==1;var
ia=Xa[Z.c2]?Z.iZ:Z.Hp;var
Ga=Cb&&Xa[Z.SQ]&&Xa[Z.c2]?Z.SQ:xb.i;var
bb=Cb&&Xa[Z.qA]?Z.qA:xb.i;var
y=Cb&&Xa[Z.V4]?Z.V4:xb.i;var
B=Cb&&Xa[Z.EN]&&Xa[Z.c2]?Z.EN:xb.i;var
P=Xa[Z.c2]?Z.c2:xb.i;var
ja=Math.round((Z.MR.W-Z.eu)/2);var
Ib=Math.round((Z.MR.H-Z.eu)/2);var
ub=Z.MR.W,Eb=Z.MR.H;if(jsx3.html.getMode()!=jsx3.html.MODE_IE_QUIRKS){ub=ub-2;Eb=Eb-2;}var
Ra=xb.j;Ra=Ra+(xb.k+(Ga?xb.l:xb.i)+xb.m+Ga+xb.n+(Ga?xb.o:xb.p)+xb.q+(Ga?Z.qN:ia)+xb.r+ja+xb.s+Z.eu+xb.t+Z.S4+xb.u);Ra=Ra+(xb.v+(B?xb.l:xb.i)+xb.m+B+xb.n+(B?xb.w:xb.p)+xb.q+(B?Z.qN:ia)+xb.x+Ib+xb.y+Z.S4+xb.t+Z.eu+xb.u);Ra=Ra+(xb.z+(y?xb.l:xb.i)+xb.m+y+xb.n+(y?xb.w:xb.p)+xb.q+(y?Z.qN:ia)+xb.r+(Z.MR.W-2)+xb.A+Ib+xb.y+Z.S4+xb.t+Z.eu+xb.u);Ra=Ra+(xb.B+(bb?xb.l:xb.i)+xb.m+bb+xb.n+(bb?xb.o:xb.p)+xb.q+(bb?Z.qN:ia)+xb.r+ja+xb.A+(Z.MR.H-2)+xb.y+Z.eu+xb.t+Z.S4+xb.u);Ra=Ra+(xb.C+ub+xb.t+Eb+xb.D+ia+xb.E);Ra=Ra+(xb.F+(P?xb.l:xb.i)+xb.G+(P?xb.H:xb.p)+xb.q+(P?Z.qN:ia)+xb.r+Math.round((Z.MR.W-Z.Yv)/2)+xb.A+Math.round((Z.MR.H-Z.Yv)/2)+xb.y+Z.Yv+xb.t+Z.Yv+xb.u);Ra=Ra+xb.I;var
wb=jsx3.ide.SERVER.getRootBlock();Ba=new
jsx3.gui.Heavyweight(xb.a,eb);Ba.setDomParent(qb);Ba.setHTML(Ra);Ba.setWidth(Z.MR.W);Ba.setHeight(Z.MR.H);Ba.addXRule(wb,xb.J,xb.J,Z.MR.L-2);Ba.addYRule(wb,xb.K,xb.K,Z.MR.T-2);Ba.show();var
Db=(Ba.getRendered(qb)).firstChild;jsx3.html.addEventListener(Db,xb.L,(jsx3.$F(this._doFocusDown)).bind(this));jsx3.html.addEventListener(Db,xb.M,(jsx3.$F(this.showFocusRectangle)).bind(this,[false,true]));jsx3.html.addEventListener(Db,xb.N,(jsx3.$F(this._doFocusKeyDown)).bind(this,[Db]));jsx3.html.addEventListener(Db,xb.O,(jsx3.$F(this._doFocusFocus)).bind(this,[Db]));jsx3.html.addEventListener(Db,xb.P,(jsx3.$F(this._doFocusBlur)).bind(this,[Db]));jsx3.sleep(function(){var
Da=qb.ownerDocument.getElementById(xb.Q);if(c&&Da&&Da.clientHeight>0){Da.focus();qb.scrollTop=qb.scrollLeft=0;}});})).throttled(),_doFocusKeyDown:function(r,q){var
_=jsx3.gui.Event.wrap(q||window.event);var
xb=_.keyCode();var
x=this._FOCUS.Io[xb];if(x!=null){this._doFocusNudge(_,x);_.cancelAll();}else if(_.ctrlKey()&&!_.shiftKey()&&!_.altKey()&&!_.metaKey())if(xb==jsx3.gui.Event.KEY_BACKSPACE||xb==jsx3.gui.Event.KEY_DELETE)(jsx3.ide.getActiveEditor()).doRecycle();},_doFocusFocus:function(i){var
bb=i.childNodes;for(var
Fb=0;Fb<bb.length;Fb++){var
Lb=bb[Fb];if(Lb.getAttribute("jsxon")=="1")Lb.style.backgroundColor=this._FOCUS.k3;}try{i.parentNode.parentNode.scrollTop=i.parentNode.parentNode.scrollLeft=0;}catch(Kb){}},_doFocusBlur:function(e){var
Qa=e.childNodes;for(var
kb=0;kb<Qa.length;kb++){var
Y=Qa[kb];if(Y.getAttribute("jsxon")=="1")Y.style.backgroundColor=this._FOCUS.qN;}},_doFocusDown:function(p){var
H=this._FOCUS;var
Bb=jsx3.gui.Event.wrap(p||window.event);var
gb=Bb.srcElement();var
Db=gb.ownerDocument.getElementById("jsxfocusrectangle_span");if(Db){Db.focus();try{Db.parentNode.parentNode.scrollTop=Db.parentNode.parentNode.scrollLeft=0;}catch(p){}}var
Qa=jsx3.ide.getSelected();var
zb=gb.getAttribute("jsxpoint");if(zb||zb==H.c2&&Bb.ctrlKey()){H.WT={L:0,T:0,W:H.MR.W,H:H.MR.H};H.tT=zb;H.d2=1;var
qa=this._getSnapTo();if(zb==H.c2){H.p9=jsx3.util.numRound(Number(H.MR.L),qa)-H.MR.L;H.Pv=jsx3.util.numRound(Number(H.MR.T),qa)-H.MR.T;if(jsx3.gui.isMouseEventModKey(Bb)){gb.parentNode.childNodes[4].style.borderStyle="dashed";H.d2=2;}}else{H.p9=jsx3.util.numRound(Number(H.MR.W),qa)-H.MR.W;H.Pv=jsx3.util.numRound(Number(H.MR.H),qa)-H.MR.H;}H.boxStartW=H.MR.W;H.boxStartH=H.MR.H;H.eventStartX=Bb.getScreenX();H.eventStartY=Bb.getScreenY();jsx3.gui.Event.subscribe(jsx3.gui.Event.MOUSEMOVE,this,this._doFocusMove);jsx3.gui.Event.subscribe(jsx3.gui.Event.MOUSEUP,this,this._doFocusUp);}else{}},_doFocusMove:function(k){if(this._FOCUS.d2>0){var
P=k.event;var
ca=(P.srcElement()).ownerDocument.getElementById("jsxfocusrectangle_span");var
Xa=this._getSnapTo();var
va=jsx3.util.numRound(P.getScreenX()-this._FOCUS.eventStartX-this._FOCUS.p9,Xa)+this._FOCUS.p9;var
xb=jsx3.util.numRound(P.getScreenY()-this._FOCUS.eventStartY-this._FOCUS.Pv,Xa)+this._FOCUS.Pv;this._adjustSize(ca,va,xb);}},_doFocusNudge:function(k,r){var
Y=jsx3.gui.Heavyweight.GO("jsxfocusrectangle");if(Y==null)return;var
Nb=jsx3.ide.getSelected();var
La=0,zb=0;switch(r){case "W":La=-1;break;case "N":zb=-1;break;case "E":La=1;break;case "S":zb=1;break;}if(k.shiftKey()){La=La*10;zb=zb*10;}var
Jb=false;for(var
v=0;v<Nb.length;v++){var
N=Nb[v];if(!N||!N.getMaskProperties)continue;var
Sa=N.getMaskProperties();if(!Sa[this._FOCUS.c2])continue;if(La){var
nb=N.getLeft();N.setLeft((nb!=null?nb:0)+La,true);Jb=true;}if(zb){var
xa=N.getTop();N.setTop((xa!=null?xa:0)+zb,true);Jb=true;}}if(Jb){this.showFocusRectangle(null,null,true);this.publish({subject:"moved",targets:Nb});}},updateFocusOnModeChange:function(g){var
cb=jsx3.gui.Heavyweight.GO("jsxfocusrectangle");var
Ka=g.mode;if(Ka=="component")this.showFocusRectangle(null,false);else if(cb)cb.destroy();},_doFocusUp:function(d,e){jsx3.gui.Event.unsubscribe(jsx3.gui.Event.MOUSEMOVE,this,this._doFocusMove);jsx3.gui.Event.unsubscribe(jsx3.gui.Event.MOUSEUP,this,this._doFocusUp);if(this._FOCUS.d2>0){var
La=false,Sa=false;var
Fa=jsx3.ide.getSelected();if(this._FOCUS.d2==2){Fa=(jsx3.ide.getActiveEditor()).cloneJSX();jsx3.ide.setDomValue(Fa);}else{if(this._FOCUS.MR.W!=this._FOCUS.WT.W){Fa[0].setWidth(this._FOCUS.WT.W,true);La=true;}if(this._FOCUS.MR.H!=this._FOCUS.WT.H){Fa[0].setHeight(this._FOCUS.WT.H,true);La=true;}}for(var
ub=0;ub<Fa.length;ub++){var
ob=Fa[ub];if(this._FOCUS.WT.L!=0){var
cb=ob.getLeft();ob.setLeft((cb!=null?cb:0)+this._FOCUS.WT.L-this._FOCUS.rs,true);Sa=true;}if(this._FOCUS.WT.T!=0){var
ba=ob.getTop();ob.setTop((ba!=null?ba:0)+this._FOCUS.WT.T-this._FOCUS.mx,true);Sa=true;}}if(Sa)this.showFocusRectangle(null,null,true);if(La||Sa)this.publish({subject:"moved",targets:Fa});this._FOCUS.d2=0;}},_adjustSize:function(d,s,a){var
Ea=this._FOCUS.tT;if(Ea==this._FOCUS.c2||Ea==this._FOCUS.By){d.style.left=this._FOCUS.WT.L=s+this._FOCUS.rs;d.style.top=this._FOCUS.WT.T=a+this._FOCUS.mx;}else{var
gb=null,pb=null;var
Ua=jsx3.html.getMode()!=jsx3.html.MODE_IE_QUIRKS?-2:0;if(Ea==this._FOCUS.EN||Ea==this._FOCUS.SQ){gb=Math.max(1,this._FOCUS.boxStartW-s);pb=Math.max(1,this._FOCUS.boxStartH-a);if(Ea==this._FOCUS.EN)d.style.left=this._FOCUS.WT.L=s+this._FOCUS.rs;if(Ea==this._FOCUS.SQ)d.style.top=this._FOCUS.WT.T=a+this._FOCUS.rs;}else{gb=Math.max(1,this._FOCUS.boxStartW+s);pb=Math.max(1,this._FOCUS.boxStartH+a);}if(Ea==this._FOCUS.V4||Ea==this._FOCUS.EN){var
ga=Math.round((gb-this._FOCUS.eu)/2);d.childNodes[2].style.left=gb-this._FOCUS.rs;d.childNodes[4].style.width=gb+Ua;d.childNodes[0].style.left=ga;d.childNodes[3].style.left=ga;d.childNodes[5].style.left=Math.round((gb-this._FOCUS.Yv)/2);this._FOCUS.WT.W=gb;}else if(Ea==this._FOCUS.qA||Ea==this._FOCUS.SQ){var
Qa=Math.round((pb-this._FOCUS.eu)/2);d.childNodes[3].style.top=pb-this._FOCUS.mx;d.childNodes[4].style.height=pb+Ua;d.childNodes[1].style.top=Qa;d.childNodes[2].style.top=Qa;d.childNodes[5].style.top=Math.round((pb-this._FOCUS.Yv)/2);this._FOCUS.WT.H=pb;}}}});
