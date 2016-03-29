/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block","jsx3.gui.Column");jsx3.Class.defineClass("jsx3.gui.List",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(m,o){var
ub={A:"rh",Aa:"jsxid",Ab:"TD",B:"-10px",Ba:"strRecordId",Bb:"jsxafterappend",C:"_jsxhead",Ca:"jsxspy",Cb:"A new row could not be appended to ",D:"",Da:"_curSpyRow",Db:" because of an XML error: ",E:"%",Ea:"mouseover",Eb:/&lt;/g,F:"jsxafterresize",Fa:"mouseout",Fb:"<",G:"_jsxghost",Ga:"dblclick",Gb:/&gt;/g,H:"box",Ha:"keydown",Hb:/&amp;/g,I:"div",Ia:"mousedown",Ib:"&",J:"100%",Ja:"<span",Jb:"list.update.1",K:"solid 1px #ffffff;solid 1px #9898a5;solid 1px #9898a5;solid 1px #ffffff",Ka:"zn",Kb:"A row could not be updated, due to the following reasons(s): ",L:" ",La:' id="',Lb:/(on(?:mousedown|click|focus|blur|mouseup|scroll|keydown|keypress))/gi,M:"padding",Ma:'_jsxcolresize" style="background-color:',Mb:"class",N:"Yk",Na:';" class="jsx30list_colresize"></span>',Nb:"style",O:"click",Oa:'<div id="',Ob:/(on(?:mousedown|click|focus|blur|mouseup|scroll|mouseup|keydown|keypress))/gi,P:"jsxbeforesort",Pa:'" class="jsx30list" ',Pb:"relative",Q:"hidden",Qa:'style="',Qb:/(<(?:img|input)[^>]*)(>)/gi,R:"jsxaftersort",Ra:'"',Rb:"/>",S:"<span id='JSX' style='font-family:Verdana;font-size:10px;padding:0px;height:22px;width:200px;overflow:hidden;text-overflow:ellipsis;filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=1, StartColorStr=#eedfdfe8, EndColorStr=#00ffffff);'><table style='font-family:verdana;font-size:10px;color:#a8a8a8;' cellpadding='3' cellspacing='0'>",Sa:">",Sb:/&nbsp;/g,T:/id=/g,Ta:'<table class="jsx30list_table" border="0" cellpadding="0" cellspacing="0" style="">',Tb:"&#160;",U:"tempid=",Ua:'<tr><td height="',Ub:/&/g,V:/BACKGROUND/g,Va:'" style="position:relative;overflow:hidden;">',Vb:"&amp;",W:"bg",Wa:'_jsxhead" class="jsx30list_headspan" style="',Wb:"text",X:/class=/g,Xa:'">',Xb:"3.0.00",Y:"jsxc=",Ya:"</div>",Z:"</table></span>",Za:'_jsxghost"',_:"JSXDragId",_a:' class="jsx30list_ghost">&#160;</div>',a:"jsx:///xsl/",aa:"normal",ab:"</td></tr>",b:"ie",ba:"No list with id ",bb:" onscroll=\"this.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.left = -this.scrollLeft + 'px';\" ",c:"fx",ca:".",cb:'" valign="top" style="position:relative;height:',d:"/jsx30list.xsl",da:"bold",db:'_jsxbody"',e:"url(",ea:"JSX_GENERIC",eb:' style="',f:"jsx:///images/list/select.gif",fa:"jsxadopt",fb:";height:",g:")",ga:"jsxctrldrop",gb:'" class="jsx30list_bodyspan">',h:"background-image:url(",ha:"jsxdrop",hb:"</table>",i:"jsx:///images/list/header.gif",ia:"jsxmenu",ib:"background-color:",j:");",ja:"td",jb:";",k:"#F3F2F4",ka:"cellIndex",kb:"height:",l:"#c8cfd8",la:"tr",lb:"px;",m:"ascending",ma:"_jsxbody",mb:'<table cellspacing="0" cellpadding="3" border="0" style="position:absolute;left:0px;top:0px;table-layout:fixed;',n:"descending",na:"tbody",nb:'<tr style="',o:"#2050df",oa:"jsxexecute",ob:'" ',p:"jsx30list_r1",pa:"jsxunselectable",pb:"</tr></table>",q:"//xsl:comment[.='JSXUNCONFIGURED']",qa:"1",qb:'<table jsxid="',r:"JSXCONFIGURED",ra:"//record[@jsxid='",rb:'" cellspacing="0" cellpadding="3" border="0" style="table-layout:fixed;',s:"Error loading XSL for column #",sa:"' and @",sb:';">',t:" of ",ta:"jsxselected",tb:"@",u:": ",ua:"='1']",ub:"jsxafteredit",v:"none",va:"jsxselect",vb:"jsxgroupname",w:"px",wa:"jsxchange",wb:"//record[@jsxgroupname='",x:"jsxbeforeresize",xa:"_jsxV6",xb:"']",y:"visible",ya:"_",yb:"jsxbeforeappend",z:"mouseup",za:"//record[@",zb:"TR"};var
ta=jsx3.gui.Event;var
eb=jsx3.gui.Interactive;var
vb=jsx3.xml.CDF;var
Ba=jsx3.html;var
Ab=jsx3.util.Logger.getLogger(m.jsxclass.getName());m.DEFAULTXSLURL=jsx3.resolveURI(ub.a+(jsx3.CLASS_LOADER.IE?ub.b:ub.c)+ub.d);m.SELECTBGIMAGE=ub.e+jsx3.resolveURI(ub.f)+ub.g;m.DEFAULTBACKGROUNDHEAD=ub.h+jsx3.resolveURI(ub.i)+ub.j;if(jsx3.CLASS_LOADER.IE6)Ba.loadImages(ub.f,ub.i);m.DEFAULTBACKGROUNDCOLOR=ub.k;m.DEFAULTBACKGROUNDCOLORHEAD=ub.l;m.SORTASCENDING=ub.m;m.SORTDESCENDING=ub.n;m.DEFAULTHEADERHEIGHT=20;m.MULTI=1;m.SINGLE=0;m.NOTSELECTABLE=2;m.RESIZEBARBGCOLOR=ub.o;m.DEFAULTROWCLASS=ub.p;o.init=function(a){this.jsxsuper(a);this._jsxff=null;this._jsxV6=null;this._jsxO3=null;this._jsxCX=null;};o.onRemoveChild=function(b,h){this.jsxsuper(b,h);this.resetXslCacheData();this.repaint();};o.paintChild=function(h,a){if(!a){this.resetXslCacheData();this.repaint();}};o.nd=function(s){var
U=this.jsxsupermix(s);if(U.getSourceURL()==s)U=U.cloneDocument();this._configXSL(U);return U;};o.getXSL=function(){return this.nd(m.DEFAULTXSLURL);};o._configXSL=function(d){var
sb=d.selectSingleNode(ub.q);if(sb!=null){sb.setValue(ub.r);var
Ua=this.Ld();var
Ja=Ua.length;if(Ja>0)for(var
Ta=0;Ta<=Ja;Ta++){var
ca=new
jsx3.xml.Document();var
Cb=Ta==Ja?Ua[Ja-1].paintXSLString(true):Ua[Ta].paintXSLString();ca.loadXML(Cb);if(ca.hasError()){Ab.error(ub.s+Ta+ub.t+this+ub.u+ca.getError());}else (sb.getParent()).insertBefore(ca.getRootNode(),sb);}}};o.clearXSL=function(){this.resetXslCacheData();return this;};m.gF=function(e){return e&&e.getDisplay()!=ub.v;};o.Ld=function(){return (this.getChildren()).filter(m.gF);};o.doValidate=function(){var
Mb=(this.getSelectedNodes()).size()>0||this.getRequired()==0;this.setValidationState(Mb?1:0);return this.getValidationState();};o.getResizable=function(){return this.jsxresize==null?1:this.jsxresize;};o.setResizable=function(l){this.jsxresize=l;return this;};o.zn=function(j,c){if(!j.leftButton())return;ta.publish(j);if(this.getCanResize()!=0){var
Ga=c;var
x=(this.getRendered()).childNodes[1];var
u=parseInt(Ga.parentNode.parentNode.parentNode.parentNode.parentNode.style.left);var
F=Ga.parentNode.parentNode.offsetLeft+u;x.style.left=F+ub.w;this._jsxO3=F;this._jsxCX=Ga.parentNode.parentNode.cellIndex;var
_=this._jsxCX-1;var
Db=this.doEvent(ub.x,{objEVENT:j,intINDEX:_,intCOLUMNINDEX:_})===false;if(!Db){x.style.visibility=ub.y;jsx3.gui.Event.subscribe(ub.z,this,ub.A);jsx3.gui.Interactive._beginMove(j,x,false,true);}else x.style.left=ub.B;}j.cancelReturn();j.cancelBubble();};o.rh=function(q,l){var
q=q.event;jsx3.gui.Event.unsubscribe(ub.z,this,ub.A);if(l==null)l=(this.getRendered()).childNodes[1];q.releaseCapture(l);var
da=parseInt(l.style.left);var
pb=da-this._jsxO3;var
ca=this._jsxCX-1;var
na=this.Ld();var
H=this.getDocument();var
T=H.getElementById(this.getId()+ub.C);var
bb=T.childNodes[0].childNodes[0].childNodes[0].childNodes[ca];var
W=bb.offsetWidth;var
ab=na[ca].getWidth()+ub.D;var
oa;if(oa=ab.indexOf(ub.E)>-1){var
Jb=(this.getAbsolutePosition()).W;var
v=W+pb;v=parseInt(v/Jb*1000)/10;if(v<2)v=2;v=v+ub.E;}else{var
v=W+pb;if(v<4)v=4;}l.style.left=ub.B;var
Ya={objEVENT:q,intDIFF:pb,intINDEX:ca,intOLDWIDTH:W,vntWIDTH:v,intCOLUMNINDEX:ca};var
Na=this.doEvent(ub.F,Ya);if(!(Na===false)){var
ha=Na instanceof Object&&Na.vntWIDTH?Na.vntWIDTH:v;na[ca].setWidth(ha);this.resetXslCacheData();this.repaintBody();this.repaintHead();}};o.uh=function(h,e){if(!h.leftButton())return;ta.publish(h);var
lb=(this.getDocument()).getElementById(this.getId()+ub.G);lb.innerHTML=ub.D;var
Fb=parseInt(e.parentNode.parentNode.parentNode.style.left);var
N={};N.boxtype=ub.H;N.tagname=ub.I;N.left=e.offsetLeft+Fb;N.top=0;N.parentheight=e.offsetHeight;N.parentwidth=parseInt(e.offsetWidth);N.width=ub.J;N.height=ub.J;N.border=ub.K;N.padding=parseInt(e.childNodes[0].offsetTop)+ub.L+(e.style.paddingRight?parseInt(e.style.paddingRight):0)+ub.L+(e.style.paddingBottom?parseInt(e.style.paddingBottom):0)+ub.L+(e.style.paddingLeft?parseInt(e.style.paddingLeft):0);var
M=new
jsx3.gui.Painted.Box(N);lb.style.left=M.getPaintedLeft()+ub.w;lb.style.top=M.getPaintedTop()+ub.w;lb.style.width=M.getPaintedWidth()+ub.w;lb.style.height=M.getPaintedHeight()+ub.w;lb.style.fontName=e.style.fontName;lb.style.fontSize=e.style.fontSize;lb.style.textAlign=e.style.textAlign;lb.style.fontWeight=e.style.fontWeight;lb.style.visibility=ub.y;jsx3.gui.Painted.Ql(lb,M.Hi(),ub.M);lb.innerHTML=Ba.getOuterHTML(e.childNodes[0]);this._jsxO3=e.offsetLeft+Fb;this._jsxCX=e.cellIndex;jsx3.gui.Event.subscribe(ub.z,this,ub.N);jsx3.gui.Interactive._beginMove(h,lb,false,true);};o.Cl=function(b,k){var
zb=b.getType()==ub.O?k.cellIndex:this._jsxCX;var
ba=(this.Ld())[zb];var
ob=(this.getChildren()).indexOf(ba);if(this.getCanSort()!=0&&ba!=null&&ba.getCanSort()!=0){var
xa={objEVENT:b,intCOLUMNINDEX:ob};var
E=this.doEvent(ub.P,xa);if(E!==false){var
ca=E instanceof Object&&E.intCOLUMNINDEX!=null?E.intCOLUMNINDEX:ob;this.DD(b,ca);}}};o.Yk=function(r,n){var
r=r.event;jsx3.gui.Event.unsubscribe(ub.z,this,ub.N);var
Ib=(this.getDocument()).getElementById(this.getId()+ub.G);if(n==null)var
n=Ib;r.releaseCapture(Ib);Ib.style.visibility=ub.Q;if(this._jsxO3==parseInt(Ib.style.left)){this.Cl(r,n);}else if(this.getCanReorder()!=0){var
la=parseInt(Ib.style.left);var
ua=this.Ld();var
Mb=(this.getChildren()).length;var
ma=(ua[0].getRendered()).parentNode;var
za=(this.getChildren()).indexOf(ua[this._jsxCX]);var
y=0;for(var
Fb=0;Fb<Mb;Fb++)if(m.gF(this.getChild(Fb))){var
Ya=ma.childNodes[y].offsetLeft;if(la<Ya){if(za!=Fb)this.qh(za,Fb-1);jsx3.EventHelp.reset();return;}y++;}if(za!=Mb-1)this.qh(za,Mb-1);}};o.setSortColumn=function(c){this.DD(this.isOldEventProtocol(),c);};o.DD=function(h,f){this.jsxsortcolumn=f;this.doSort();if(h)this.doEvent(ub.R,{objEVENT:h instanceof jsx3.gui.Event?h:null,intCOLUMNINDEX:f});return this;};o.getSortColumn=function(){return this.jsxsortcolumn;};o.Jn=function(){var
La=this.jsxsortcolumn!=null?this.getChild(this.jsxsortcolumn)==null?null:(this.getChild(this.jsxsortcolumn)).getSortPath():this.getSortPath();return La?La.substring(1):ub.D;};o.qh=function(r,c){var
za=this.getChildren();var
Ra=za.length;var
ca=this.getChild(r);if(c<r){for(var
ab=r;ab>c;ab--)if(ab>0)za[ab]=za[ab-1];za[c+1]=ca;}else{for(var
ab=r;ab<=c;ab++)if(ab<=Ra-2)za[ab]=za[ab+1];za[c]=ca;}this.resetXslCacheData();this.repaint();((this.getServer()).getDOM()).onChange(0,this.getId(),(this.getChild(0)).getId());};o.doSort=function(i){if(i!=null){this.setSortDirection(i);}else this.setSortDirection(this.getSortDirection()==ub.m?ub.n:ub.m);this.repaintBody();this.repaintHead();};o.getSortPath=function(){return this.jsxsortpath==null?ub.D:this.jsxsortpath;};o.setSortPath=function(n){this.jsxsortpath=n;return this;};o.getSortDirection=function(){return this.jsxsortdirection==null?ub.m:this.jsxsortdirection;};o.setSortDirection=function(e){this.jsxsortdirection=e;return this;};o.getMultiSelect=function(){return this.jsxmultiselect==null?1:this.jsxmultiselect;};o.setMultiSelect=function(p){this.jsxmultiselect=p;if(p==2)this.deselectAllRecords();return this;};o.getCanReorder=function(){return this.jsxreorder==null?1:this.jsxreorder;};o.setCanReorder=function(k){this.jsxreorder=k;return this;};o.getCanSort=function(){return this.jsxsort==null?1:this.jsxsort;};o.setCanSort=function(l){this.jsxsort=l;return this;};o.getBackgroundColorHead=function(){return this.jsxbgcolorhead;};o.setBackgroundColorHead=function(l){this.jsxbgcolorhead=l;return this;};o.getBackgroundHead=function(){return this.jsxbghead;};o.setBackgroundHead=function(s){this.jsxbghead=s;return this;};o.getHeaderHeight=function(){return this.jsxheaderheight;};o.setHeaderHeight=function(k){this.jsxheaderheight=k;return this;};m.kI=function(r,h,e,g){return ub.S+(((Ba.getOuterHTML(r)).replace(ub.T,ub.U)).replace(ub.V,ub.W)).replace(ub.X,ub.Y)+ub.Z;};m.doBlurItem=function(f){var
cb=f.getAttribute(ub._);var
Sa=f.id.substring(0,f.id.length-(cb.length+1));var
W=jsx3.GO(Sa);f.style.fontWeight=ub.aa;if(W!=null)W._jsxff=null;};m.doFocusItem=function(f){var
A=f.getAttribute(ub._);var
Ia=f.id.substring(0,f.id.length-(A.length+1));var
wb=jsx3.GO(Ia);if(wb==null){Ab.warn(ub.ba+Ia+ub.ca);return;}if(!wb.Ig(A))return;Ba.focus(f);f.style.fontWeight=ub.da;wb._jsxff=f;};o.Fo=function(q,k){if(this.getCanDrag()==1&&q.leftButton()){var
bb=q.srcElement();var
Wa=this.OI(bb);if(Wa[0]!=null){if(!this.Ig(Wa[0]))return;ta.publish(q);this.doDrag(q,Wa[2],m.kI,{strRECORDID:Wa[0],intCOLUMNINDEX:Wa[1]});}}};o.yo=function(j,c){var
mb=this.OI(j.srcElement());if(this.getCanDrop()==1&&jsx3.EventHelp.isDragging()&&jsx3.EventHelp.JSXID!=this){if(jsx3.EventHelp.DRAGTYPE==ub.ea){var
F=jsx3.EventHelp.JSXID.getId();var
Ja=jsx3.EventHelp.DRAGID;var
Ra=jsx3.GO(F);if(Ra==null)return;var
D=jsx3.gui.isMouseEventModKey(j);var
Q=Ra.doEvent(ub.fa,{objEVENT:j,strRECORDID:Ja,strRECORDIDS:[Ja],objTARGET:this,bCONTROL:D});var
ea={objEVENT:j,objSOURCE:Ra,strDRAGID:Ja,strDRAGTYPE:jsx3.EventHelp.DRAGTYPE,strRECORDID:mb[0],intCOLUMNINDEX:mb[1],bALLOWADOPT:Q!==false};var
Mb=this.doEvent(D?ub.ga:ub.ha,ea);if(Q!==false&&Mb!==false&&Ra.instanceOf(jsx3.xml.CDF))this.adoptRecord(Ra,Ja);}}else if(j.rightButton()){var
kb;if((kb=this.getMenu())!=null){var
pb=this.Pk(kb);if(pb!=null){var
Z={objEVENT:j,objMENU:pb,strRECORDID:mb[0],intCOLUMNINDEX:mb[1]};var
Ua=this.doEvent(ub.ia,Z);if(Ua!==false){if(Ua instanceof Object&&Ua.objMENU instanceof jsx3.gui.Menu)pb=Ua.objMENU;pb.showContextMenu(j,this,mb[0]);}}}}};o.OI=function(c){var
F=null;var
ob=null;var
_=null;while(c!=null&&F==null){if(c.tagName&&c.tagName.toLowerCase()==ub.ja)ob=c.getAttribute(ub.ka);else if(c.tagName&&c.tagName.toLowerCase()==ub.la){F=c.getAttribute(ub._);_=c;}c=c.parentNode;}return [F,F?ob:null,_];};o.PI=function(s,j,k){if(!this.Ig(j.getAttribute(ub._)))return;if(!this.Ig(k.getAttribute(ub._)))return;if(this.getMultiSelect()==2)return;var
ua=0;var
x=((this.getDocument()).getElementById(this.getId()+ub.ma)).childNodes[0].childNodes[0];var
ja=[],zb=[];for(var
wb=x.childNodes.length-1;wb>=0;wb--){if(x.childNodes[wb]==k)ua++;if(x.childNodes[wb]==j)ua++;if(ua>=1&&ua<=2){var
G=x.childNodes[wb];ja.push(G.getAttribute(ub._),G);}if(ua==2)break;}this.rD(s,ja,zb,false);m.doFocusItem(j);};o._ebKeyDown=function(f,g){if(this.jsxsupermix(f,g))return;if(this._jsxff==null)return;var
_a=(this.getId()).length;var
Ib=f.keyCode();var
xa=this.getMultiSelect()==1;var
sa=false;var
Ca=jsx3.gui.isMouseEventModKey(f);if(Ib==38){if(this._jsxff==this._jsxff.parentNode.firstChild)return;if(xa&&Ca){m.doFocusItem(this._jsxff.previousSibling);}else if(xa&&f.shiftKey()){this.PI(f,this._jsxff.previousSibling,this._jsxV6);}else{var
G=this._jsxff.previousSibling;this.SV(f,G.getAttribute(ub._),G,false);}sa=true;}else if(Ib==40){if(this._jsxff==this._jsxff.parentNode.lastChild)return;if(xa&&Ca){m.doFocusItem(this._jsxff.nextSibling);}else if(xa&&f.shiftKey()){this.PI(f,this._jsxff.nextSibling,this._jsxV6);}else{var
G=this._jsxff.nextSibling;this.SV(f,G.getAttribute(ub._),G,false);}sa=true;}else if(Ib==13){this.Jm(f);sa=true;}else if(Ib==32){if(xa&&Ca){var
nb=this._jsxff.getAttribute(ub._);if(this.isSelected(nb)){this.YH(f,nb,this._jsxff);}else this.SV(f,nb,this._jsxff,true);}else if(xa&&f.shiftKey()){this.PI(f,f.srcElement(),this._jsxV6);}else{var
G=this._jsxff;this.SV(f,G.getAttribute(ub._),G,false);}sa=true;}else if(Ib==9&&f.shiftKey()){this.focus();sa=true;}else if(Ib==9){Ba.focus((this.getRendered()).lastChild);sa=true;}if(sa)f.cancelAll();};o.nj=function(r,n){var
Da=false;var
sa=r.srcElement();if(sa.tagName&&sa.tagName.toLowerCase()==ub.na||sa==n){this.N2(r,this.getSelectedIds(),[]);return;}var
A=this.getRendered();while(jsx3.util.strEmpty(sa.getAttribute(ub._))&&sa!=A)sa=sa.parentNode;if(!sa||!sa.getAttribute(ub._)){this.N2(r,this.getSelectedIds(),[]);return;}var
Wa=this.getMultiSelect()==1;var
ea=jsx3.gui.isMouseEventModKey(r);if(Wa&&r.shiftKey()&&this._jsxV6!=null){this.PI(r,sa,this._jsxV6);Da=true;}else if(Wa&&ea){var
Ga=sa.getAttribute(ub._);if(this.isSelected(Ga)){this.YH(r,Ga,sa);}else{this.SV(r,Ga,sa,true);m.doFocusItem(sa);}Da=true;}else{if(this.isSelected(sa.getAttribute(ub._))){if(ea||r.shiftKey())this.YH(r,sa.getAttribute(ub._),sa);}else this.SV(r,sa.getAttribute(ub._),sa,false);Da=true;}if(Da){r.cancelBubble();r.cancelReturn();}};o.Xj=function(d,i){this.Jm(d);};o.executeRecord=function(j){var
na=this.getRecordNode(j);if(na!=null)this.eval(na.getAttribute(ub.oa),{strRECORDID:j});};o.doExecute=function(a){this.Jm(this.isOldEventProtocol(),a!=null?[a]:null);};o.Jm=function(q,r){if(r==null)r=this.getSelectedIds();for(var
ja=0;ja<r.length;ja++){var
_=r[ja];var
ha=this.getRecordNode(_);if(ha.getAttribute(ub.pa)==ub.qa)continue;this.eval(ha.getAttribute(ub.oa),{strRECORDID:_});}if(r.length>0&&q)this.doEvent(ub.oa,{objEVENT:q instanceof ta?q:null,strRECORDID:r[0],strRECORDIDS:r});};o.isSelected=function(h){return (this.getXML()).selectSingleNode(ub.ra+h+ub.sa+ub.ta+ub.ua)!=null;};o.doSelect=function(k,q,s,g){this.SV(!s&&this.isOldEventProtocol(),k,null,true);if(k&&g)this.revealRecord(k);return this;};o.selectRecord=function(l){if(!this.Ig(l))return;if(this.getMultiSelect()==2)return;this.SV(false,l,null,true);return this;};o.deselectRecord=function(i){this.YH(false,i,null);return this;};o.deselectAllRecords=function(){this.N2(false,this.getSelectedIds(),[]);return this;};o.SV=function(i,q,r,j){var
K=this.getRecordNode(q);if(!K||K.getAttribute(ub.ta)==ub.qa||K.getAttribute(ub.pa)==ub.qa||this.getMultiSelect()==2)return false;var
Sa=j&&this.getMultiSelect()==1;if(!Sa)this.deselectAllRecords();K.setAttribute(ub.ta,ub.qa);r=r||this.Jr(q);if(r!=null){if(!Sa){this._jsxV6=r;m.doFocusItem(r);}r.style.backgroundImage=m.SELECTBGIMAGE;}if(i){this.doEvent(ub.va,{objEVENT:i instanceof ta?i:null,strRECORDID:q,strRECORDIDS:[q]});this.doEvent(ub.wa,{objEVENT:i instanceof ta?i:null});}return true;};o.rD=function(p,q,s,e){if(!e)this.deselectAllRecords();for(var
pb=0;pb<q.length;pb++){var
D=this.SV(false,q[pb],s[pb],true);if(!D){q.splice(pb,1);s.splice(pb,1);pb--;}}if(p&&q.length>0){this.doEvent(ub.va,{objEVENT:p,strRECORDID:q[0],strRECORDIDS:q});this.doEvent(ub.wa,{objEVENT:p});}};o.YH=function(p,j,f){var
cb=this.getRecordNode(j);if(!cb||cb.getAttribute(ub.ta)!=ub.qa)return false;cb.removeAttribute(ub.ta);f=f||this.Jr(j);if(f!=null){if(this._jsxV6==f){delete this[ub.xa];m.doBlurItem(f);}f.style.backgroundImage=ub.D;}if(p){this.doEvent(ub.va,{objEVENT:p instanceof ta?p:null,strRECORDID:null,strRECORDIDS:[]});this.doEvent(ub.wa,{objEVENT:p instanceof ta?p:null});}return true;};o.N2=function(a,e,g){for(var
kb=0;kb<e.length;kb++){var
Oa=this.YH(false,e[kb],g[kb]);if(!Oa){e.splice(kb,1);g.splice(kb,1);kb--;}}if(a&&e.length>0){this.doEvent(ub.va,{objEVENT:a,strRECORDID:e[0],strRECORDIDS:e});this.doEvent(ub.wa,{objEVENT:a});}};o.focusRecord=function(i){var
nb=this.Jr(i);if(nb!=null)Ba.focus(nb);return this;};o.doDeselect=function(d,c){this.YH(this.isOldEventProtocol(),d,null);return this;};o.getActiveRow=function(){return this._jsxV6;};o.revealRecord=function(f,g){var
Ea=this.Jr(f);if(Ea){var
U=g?g.getRendered():this.getRendered();if(U)Ba.scrollIntoView(Ea,U,0,10);}};o.Jr=function(l){var
Ga=this.getDocument();return Ga!=null?Ga.getElementById(this.getId()+ub.ya+l):null;};o.redrawRecord=function(l,d){if(d==1){this.appendRow(this.getRecord(l),l);}else if(l!=null&&d==0){var
ya;if((ya=this.Jr(l))!=null)Ba.removeNode(ya);}else if(l!=null&&d==2)this.updateRow(l);};o.getSelectedNodes=function(){return (this.getXML()).selectNodes(ub.za+ub.ta+ub.ua);};o.getSelectedIds=function(){return ((this.getSelectedNodes()).map(function(c){return c.getAttribute(ub.Aa);})).toArray(true);};o.getValue=function(){var
La=this.getSelectedIds();return this.getMultiSelect()==1?La:La[0];};o.setValue=function(c){if(jsx3.$A.is(c)){if(this.getMultiSelect()!=1)throw new
jsx3.IllegalArgumentException(ub.Ba,c);}else c=c!=null?[c]:[];this.rD(false,c,[],false);return this;};o.Ri=function(n,r){if(this.getCanSpy()==1&&this.getEvent(ub.Ca)){var
Na=this.OI(n.srcElement());if(Na[0]){m._curSpyRow=Na[2];this.applySpyStyle(Na[2]);var
ka=n.clientX()+jsx3.EventHelp.DEFAULTSPYLEFTOFFSET;var
sb=n.clientY()+jsx3.EventHelp.DEFAULTSPYTOPOFFSET;var
Pa=this;n.yh();m.fP=window.setTimeout(function(){if(!this.getParent())return;var
pa={objEVENT:n,strRECORDID:Na[0],intCOLUMNINDEX:Na[1]};var
sa=Pa.doEvent(ub.Ca,pa);if(sa){jsx3.gui.Interactive.hideSpy();Pa.showSpy(sa,n);}},jsx3.EventHelp.SPYDELAY);}}};o.Uc=function(){if(m._curSpyRow){this.removeSpyStyle(m._curSpyRow);delete m[ub.Da];}window.clearTimeout(m.fP);jsx3.gui.Interactive.hideSpy();};m.yg={};m.yg[ub.Ea]=true;m.yg[ub.Fa]=true;m.yg[ub.O]=true;m.yg[ub.Ga]=true;m.yg[ub.Ha]=true;m.yg[ub.Ia]=true;m.yg[ub.z]=true;o.Hj=function(g,l,c){var
Ca=this.getDocument();if(Ca!=null){var
E=Ca.getElementById(this.getId()+ub.ma);if(E!=null){var
oa=this.getHeaderHeight()!=null?this.getHeaderHeight():m.DEFAULTHEADERHEIGHT;E.style.height=Math.max(0,g.parentheight-oa)+ub.w;}}};o.paint=function(){this.applyDynamicProperties();this._jsxV6=null;var
Ra=(this.getParent()).Id(this);var
Ja=this.getId();var
K=ub.D;var
ka=ub.Ja+this.Fg(ub.Ia,ub.Ka,1)+ub.La+Ja+ub.Ma+m.RESIZEBARBGCOLOR+ub.Na;var
Pa=this.getHeaderHeight()!=null?this.getHeaderHeight():m.DEFAULTHEADERHEIGHT;var
ra=ub.Oa+Ja+ub.Pa+ub.Qa+ub.D+this.lc()+this.ad()+this.Mm()+this.ch()+this.ke()+ub.Ra+this.Ak()+this.renderAttributes()+ub.Sa;ra=ra+ub.Ta;if(Pa>0){ra=ra+(ub.Ua+Pa+ub.Va);ra=ra+(ub.Oa+Ja+ub.Wa+this.qm()+this.ri()+ub.Xa);ra=ra+this.Mj();ra=ra+ub.Ya;ra=ra+(ub.Oa+Ja+ub.Za+ub._a);ra=ra+ub.ab;K=ub.bb;}var
Da=this.qj(m.yg,5);var
rb=Ra.parentheight-Pa;ra=ra+(ub.Ua+(Pa==0?ub.J:rb)+ub.cb+rb+ub.w+ub.Xa);ra=ra+(ub.Oa+Ja+ub.db+Da+K+ub.eb+this.ch()+this.getBorder()+ub.fb+rb+ub.w+ub.gb);ra=ra+this.Zg();ra=ra+this.Vk();ra=ra+ub.Ya;ra=ra+ub.ab;ra=ra+ub.hb;ra=ra+ka;ra=ra+ub.Ya;return ra;};o.ch=function(){return ub.ib+(this.getBackgroundColor()?this.getBackgroundColor():m.DEFAULTBACKGROUNDCOLOR)+ub.jb;};o.ke=function(){return this.getBackground()?this.getBackground()+ub.jb:ub.D;};o.qm=function(){return ub.ib+(this.getBackgroundColorHead()?this.getBackgroundColorHead():m.DEFAULTBACKGROUNDCOLORHEAD)+ub.jb;};o.ri=function(){return this.getBackgroundHead()?this.getBackgroundHead()+ub.jb:m.DEFAULTBACKGROUNDHEAD;};o.dd=function(){return this.getClassName()?this.getClassName():m.DEFAULTROWCLASS;};o.zl=function(){return ub.kb+(this.getHeaderHeight()?this.getHeaderHeight():m.DEFAULTHEADERHEIGHT)+ub.lb;};o.Vk=function(){return ub.D;};o.Mj=function(){var
P=ub.mb+this.zl()+ub.Xa;P=P+(ub.nb+this.zl()+ub.ob+this.nk()+ub.Sa);var
y=this.Ld();var
_a=this.getChildren();var
X=_a.length;var
Za=0;for(var
Va=0;Za<=y.length;Va++)if(_a[Va]==null||m.gF(_a[Va])){if(Za==y.length){if(y.length>0)P=P+y[y.length-1].paint(true);}else if(Va<_a.length){var
z=Va==this.getSortColumn()?this.getSortDirection():null;P=P+_a[Va].paint(false,z);}Za++;}P=P+ub.pb;return P;};o.Zg=function(){var
P=ub.qb+this.getId()+ub.rb+this.ke()+this.cd()+this._k()+this.wk()+ub.sb;P=P+this.doTransform();P=P+ub.hb;return P;};o.repaintBody=function(){var
G=this.getDocument();if(G!=null){var
R=G.getElementById(this.getId()+ub.ma);if(R!=null)Ba.setOuterHTML(R.childNodes[0],this.Zg());}};o.repaintHead=function(){var
Gb=this.getDocument();if(Gb!=null){var
Ua=Gb.getElementById(this.getId()+ub.C);if(Ua!=null){Ba.setOuterHTML(Ua.childNodes[0],this.Mj());this.scrollHead();}}};o.scrollHead=function(){var
z=this.getDocument();var
zb=z.getElementById(this.getId()+ub.ma);if(zb&&zb.scrollLeft!=0){var
da=z.getElementById(this.getId()+ub.C);if(da!=null)da.childNodes[0].style.left=-zb.scrollLeft+ub.w;}};o.doTransform=function(r){var
Nb={};if(r)Nb.jsxrowid=r;Nb.jsxtabindex=isNaN(this.getIndex())?0:this.getIndex();Nb.jsxselectionbg=m.SELECTBGIMAGE;Nb.jsxtransparentimage=jsx3.gui.Block.SPACE;Nb.jsxid=this.getId();Nb.jsxsortpath=this.Jn();Nb.jsxsortdirection=this.getSortDirection();Nb.jsxrowclass=this.dd();Nb.jsxsorttype=this.getSortType();var
db=this.getXSLParams();for(var A in db)Nb[A]=db[A];var
t=this.jsxsupermix(Nb);t=this.vo(t);return t;};m.onDelete=function(q,h){var
Bb=Ba.getJSXParent(h);if(Bb instanceof m)Bb.deleteRecord(q);};m.onCheck=function(f,g,s,k,h){var
ra=jsx3.gui.Event.getCurrent();if(g.substring(0,1)==ub.tb)g=g.substring(1);var
Qa=Ba.getJSXParent(s);if(k)s.checked=!s.checked;var
V=s.checked;var
tb=V?h[0]:h[1];Qa.insertRecordProperty(f,g,tb,false);Qa.doEvent(ub.ub,{objEVENT:ra,strATTRIBUTENAME:g,strATTRIBUTEVALUE:tb,strRECORDID:f,objGUI:s,objMASK:null});if(ra)ra.cancelReturn();};m.onRadio=function(f,g,s,k,h){if(g.substring(0,1)==ub.tb)g=g.substring(1);if(k)s.checked=true;m.onCheck(f,g,s,false,h);if(k){var
I=Ba.getJSXParent(s);var
fa=I.getRecordNode(f);var
ia;if(fa!=null&&(ia=fa.getAttribute(ub.vb))!=null){var
Z=(I.getXML()).selectNodes(ub.wb+ia+ub.xb);for(var
Cb=0;Cb<Z.getLength();Cb++){var
Ha=Z.getItem(Cb);if(Ha.getAttribute(ub.Aa)!=f)(Z.getItem(Cb)).setAttribute(g,h[1]);}}}};o.appendRow=function(p,g){var
E=this.getDocument();if(E!=null){var
ka=this.getId();var
yb=(E.getElementById(ka+ub.ma)).childNodes[0].childNodes[0];var
u=true;if(g==null){g=jsx3.xml.CDF.getKey();u=false;}if(p==null)p={jsxid:g};this.doEvent(ub.yb,{objMASTERRECORD:p});if(u==false)this.insertRecord(p,null,false);var
J=m.yJ(this.doTransform(g));if(J!=ub.D){var
L=new
jsx3.xml.Document();L.loadXML(J);if(!L.hasError()){var
ea=E.createElement(ub.zb);var
H=L.getRootNode();m._H(H,ea);var
C=H.selectNodes(ub.ja);for(var
z=0;z<C.getLength();z++){H=C.getItem(z);var
pb=E.createElement(ub.Ab);m._H(H,pb);ea.appendChild(pb);var
Ya=H.getChildNodes(true);var
Wa=ub.D;for(var
_a=0;_a<Ya.getLength();_a++)Wa=Wa+(Ya.getItem(_a)).toString();pb.innerHTML=Wa;}yb.appendChild(ea);this.doEvent(ub.Bb,{objMASTERRECORD:p,objTR:ea});}else Ab.warn(ub.Cb+this+ub.Db+L.getError());}}};o.updateRow=function(h){var
ma;if(this.getRecordNode(h)!=null&&(ma=this.Jr(h))!=null){var
y=m.yJ(this.doTransform(h));if(y!=ub.D){var
Ca=new
jsx3.xml.Document();Ca.loadXML(y);if(!Ca.hasError()){var
I=Ca.getRootNode();m._H(I,ma);var
D=I.selectNodes(ub.ja);for(var
Q=0;Q<D.getLength();Q++){I=D.getItem(Q);var
P=ma.childNodes.item(Q);m._H(I,P);var
V=I.getChildNodes(true);var
Hb=ub.D;for(var
la=0;la<V.getLength();la++)Hb=Hb+((((V.getItem(la)).toString()).replace(ub.Eb,ub.Fb)).replace(ub.Gb,ub.Sa)).replace(ub.Hb,ub.Ib);P.innerHTML=Hb;}}else jsx3.util.Logger.doLog(ub.Jb,ub.Kb+Ca.getError(),3,false);}}};m._H=function(i,p){var
mb=i.getAttributes();for(var
C=0;C<mb.getLength();C++){var
ga=mb.getItem(C);var
sb=ga.getNodeName();var
Aa=ub.Lb;var
xb=ga.getValue();if(sb.match(Aa)){p[sb.toLowerCase()]=new
Function(xb);}else if(sb==ub.Mb){p.className=xb;}else if(sb==ub.Nb){jsx3.gui.Painted.Ql(p,xb);}else p.setAttribute(sb,xb);}};m.Bv=function(g,l){var
ga=g.getAttributes();for(var
Kb=0;Kb<ga.getLength();Kb++){var
Ia=ga.getItem(Kb);var
Wa=Ia.getNodeName();var
_=ub.Ob;var
G=Ia.getValue();if(Wa.match(_)){l[Wa]=new
Function(G);}else if(Wa!=ub.Mb){l.setAttribute(Wa,G);}else l.className=G;}if(!l.tagName||l.tagName.toLowerCase()!=ub.la)l.style.position=ub.Pb;};m.yJ=function(d){var
ua=ub.Qb;d=d.replace(ua,function(e,k,c){return k+ub.Rb;});d=(d.replace(ub.Sb,ub.Tb)).replace(ub.Ub,ub.Vb);return d;};o.getGrowBy=function(){return this.jsxgrowby;};o.setGrowBy=function(d){this.jsxgrowby=d;return this;};o.getAutoExpand=function(){return jsx3.Boolean.valueOf(this.getGrowBy());};o.setAutoExpand=function(q){return this.setGrowBy(q?1:0);};o.getSortType=function(){if(this.jsxsorttype==null){if(this.jsxsortcolumn!=null)return this.getChild(this.jsxsortcolumn)==null?ub.Wb:(this.getChild(this.jsxsortcolumn)).getDataType();var
N=this.getSortPath();for(var
R=(this.getChildren()).length-1;R>=0;R--){var
ab=this.getChild(R);if(ab instanceof jsx3.gui.Column&&ab.getSortPath()==N)return (this.getChild(R)).getDataType();}return ub.Wb;}else return this.jsxsorttype;};o.setSortType=function(k){this.jsxsorttype=k;return this;};o.getMaskProperties=function(){return jsx3.gui.Block.MASK_NO_EDIT;};o.getWrap=function(){return this.jsxwrap==null?1:this.jsxwrap;};o.setWrap=function(c){this.resetXslCacheData();this.jsxwrap=c;return this;};o.onSetChild=function(r){return r instanceof jsx3.gui.Column;};o.Ig=function(k){var
G=this.getRecord(k);return G!=null&&(G[ub.pa]==null||G[ub.pa]!=ub.qa);};m.getVersion=function(){return ub.Xb;};});jsx3.gui.List.prototype.getResizeable=jsx3.gui.List.prototype.getResizable;jsx3.gui.List.prototype.setResizeable=jsx3.gui.List.prototype.setResizable;jsx3.gui.List.prototype.getCanResize=jsx3.gui.List.prototype.getResizable;jsx3.gui.List.prototype.setCanResize=jsx3.gui.List.prototype.setResizable;jsx3.gui.List.prototype.doClearSelections=jsx3.gui.List.prototype.deselectAllRecords;jsx3.gui.List.prototype.deselectRecords=jsx3.gui.List.prototype.deselectAllRecords;jsx3.List=jsx3.gui.List;
