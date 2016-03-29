/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Tree",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(j,b){var
ub={A:"wQ",Aa:"focus",B:"jsx30tree_texton",Ba:"relativebox",C:"selected",Ca:"div",D:"id",Da:"100%",E:"//",Ea:'<img alt="" src="',F:"children",Fa:'"',G:"[@",Ga:"Vl",H:"='1']",Ha:' style="position:absolute;left:0px;top:0px;width:1px;height:1px;" ',I:"text",Ia:"/>",J:"relative",Ja:' id="',K:"_",Ka:' class="jsx30tree" ',L:"jsxtype",La:'<div class="jsx30tree_drop_icon">&#160;</div>',M:"plusminus",Ma:"col",N:"icon",Na:"exp",O:"unselectable",Oa:"JSX_GENERIC",P:"<div id='JSX' class='jsx30tree_dragicon' style='",Pa:"jsxabspath",Q:"'>",Qa:"jsxhomepath",R:"</div>",Ra:"3.0.00",S:"jsxlazy",T:"open",U:"jsxdata",V:"object",W:"lazy",X:"jsxtoggle",Y:"block",Z:"none",_:"JSXDragId",a:"JSX_TREE_XSL",aa:"mouseup",b:"jsx:///xsl/jsxtree.xsl",ba:"ux",c:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtext\">jsxtext</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrstyle\">jsxstyle</xsl:param><xsl:param name=\"attrclass\">jsxclass</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"attrselected\">jsxselected</xsl:param><xsl:param name=\"attropen\">jsxopen</xsl:param><xsl:param name=\"attrlazy\">jsxlazy</xsl:param><xsl:param name=\"jsxtabindex\">0</xsl:param><xsl:param name=\"jsxicon\"/><xsl:param name=\"jsxiconminus\"/><xsl:param name=\"jsxiconplus\"/><xsl:param name=\"jsxiconminusalt\"/><xsl:param name=\"jsxiconplusalt\"/><xsl:param name=\"jsxtransparentimage\"/><xsl:param name=\"jsxdragtype\">JSX_GENERIC</xsl:param><xsl:param name=\"jsxrootid\">jsxnull</xsl:param><xsl:param name=\"jsxselectedimage\"/><xsl:param name=\"jsxid\">_jsx_JSX1_12</xsl:param><xsl:param name=\"jsxuseroot\">1</xsl:param><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxdeepfrom\">jsxnull</xsl:param><xsl:param name=\"jsxfragment\">0</xsl:param><xsl:param name=\"jsxindent\">20</xsl:param><xsl:param name=\"jsx_no_empty_indent\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><xsl:value-of select=\"$jsxasyncmessage\"/></xsl:when><xsl:when test=\"$jsxdeepfrom != 'jsxnull' and $jsxfragment != '1'\"><xsl:apply-templates select=\"//*[@*[name() = $attrid]=$jsxdeepfrom]\"/></xsl:when><xsl:when test=\"$jsxuseroot=1\"><xsl:apply-templates select=\"//*[@*[name() = $attrid]=$jsxrootid]\"/></xsl:when><xsl:otherwise><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsxrootid]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:apply-templates select=\".\"/></xsl:for-each></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"*\"><xsl:param name=\"myjsxid\" select=\"@*[name() = $attrid]\"/><xsl:param name=\"mystyle\" select=\"@*[name() = $attrstyle]\"/><xsl:param name=\"myclass\" select=\"@*[name() = $attrclass]\"/><xsl:variable name=\"_jsxstyle\"><xsl:if test=\"$jsxselectedimage\">background-image:url(<xsl:value-of select=\"$jsxselectedimage\"/>);</xsl:if></xsl:variable><div class=\"jsx30tree_item\" id=\"{$jsxid}_{$myjsxid}\" jsxid=\"{$myjsxid}\" jsxtype=\"item\" unselectable=\"on\"><div class=\"jsx30tree_caption\" jsxtype=\"caption\" unselectable=\"on\"><xsl:if test=\"@*[name() = $attrtip]\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:if><xsl:choose><xsl:when test=\"(*[$attrchildren='*' or name()=$attrchildren] or (@*[name() = $attrlazy] &gt; 0)) and @*[name() = $attropen]=1\"><img alt=\"{$jsxiconminusalt}\" class=\"jsx30tree_pm\" jsxtype=\"plusminus\" src=\"{$jsxiconminus}\"/></xsl:when><xsl:when test=\"(*[$attrchildren='*' or name()=$attrchildren] or (@*[name() = $attrlazy] &gt; 0))\"><img alt=\"{$jsxiconplusalt}\" class=\"jsx30tree_pm\" jsxtype=\"plusminus\" src=\"{$jsxiconplus}\"/></xsl:when><xsl:when test=\"$jsx_no_empty_indent='1' and not(../*[$attrchildren='*' or name()=$attrchildren]/*[$attrchildren='*' or name()=$attrchildren])\"><span class=\"jsx30tree_empty\"><xsl:text>&#160;</xsl:text></span></xsl:when><xsl:otherwise><img alt=\"\" class=\"jsx30tree_pm\" jsxtype=\"space\" src=\"{$jsxtransparentimage}\"/></xsl:otherwise></xsl:choose><xsl:choose><xsl:when test=\"@*[name() = $attrimg]='' or (not(@*[name() = $attrimg]) and $jsxicon='')\"><span class=\"jsx30tree_empty\"><xsl:text>&#160;</xsl:text></span></xsl:when><xsl:when test=\"@*[name() = $attrimg]\"><xsl:variable name=\"jsximg_resolved\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@*[name() = $attrimg]\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@*[name() = $attrimg]\"/></xsl:otherwise></xsl:choose></xsl:variable><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30tree_icon\" jsxtype=\"icon\" src=\"{$jsximg_resolved}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img alt=\"{@*[name() = $attrimgalt]}\" class=\"jsx30tree_icon\" jsxtype=\"icon\" src=\"{$jsxicon}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose><span JSXDragType=\"{$jsxdragtype}\" jsxtype=\"text\" tabindex=\"{$jsxtabindex}\" unselectable=\"on\"><xsl:attribute name=\"class\"><xsl:text>jsx30tree_text </xsl:text><xsl:if test=\"@*[name() = $attrselected]='1'\"><xsl:text>jsx30tree_texton </xsl:text></xsl:if><xsl:value-of select=\"$myclass\"/></xsl:attribute><xsl:attribute name=\"style\"><xsl:if test=\"@*[name() = $attrselected]='1'\"><xsl:value-of select=\"$_jsxstyle\"/></xsl:if><xsl:value-of select=\"@*[name() = $attrstyle]\"/><xsl:value-of select=\"$mystyle\"/></xsl:attribute><xsl:attribute name=\"JSXSpyglass\"><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:attribute><xsl:attribute name=\"JSXDragId\"><xsl:value-of select=\"@*[name() = $attrid]\"/></xsl:attribute><xsl:value-of select=\"@*[name() = $attrtext]\"/></span></div><div class=\"jsx30tree_content\" jsxtype=\"content\" unselectable=\"on\"><xsl:choose><xsl:when test=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:attribute name=\"style\"><xsl:if test=\"@*[name() = $attropen]='1'\">display:block;</xsl:if><xsl:text>padding-left:</xsl:text><xsl:value-of select=\"$jsxindent\"/><xsl:text>px;</xsl:text></xsl:attribute><xsl:for-each select=\"*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:apply-templates select=\".\"/></xsl:for-each></xsl:when><xsl:otherwise><xsl:text>&#160;</xsl:text></xsl:otherwise></xsl:choose></div></div></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",ca:"dropverb",d:"jsx:///images/tree/minus.gif",da:"insertbefore",e:"jsx:///images/tree/plus.gif",ea:"rowcontext",f:"jsx:///images/tree/file.gif",fa:"jsxadopt",g:"jsx:///images/tree/select.gif",ga:"jsxctrldrop",h:"jsx:///images/matrix/insert_before.gif",ha:"jsxdrop",i:"jsx:///images/matrix/append.gif",ia:"jsxmenu",j:"url(",ja:"jsxspy",k:"jsx:///images/tree/over.gif",ka:"aZ",l:")",la:"jsxbeforedrop",m:"#8CAEDF",ma:"px",n:"#ffffff",na:"7px",o:"&#160;",oa:"12px",p:"jsxselected",pa:"append",q:"1",qa:"jsxcanceldrop",r:"",ra:"_jsxspy",s:"null",sa:"jsxexecute",t:"background-color:",ta:"click",u:";",ua:"dblclick",v:"strRecordId",va:"mouseover",w:"jsxselect",wa:"mouseout",x:"jsxchange",xa:"mousedown",y:"string",ya:"mousemove",z:"jsxid",za:"keydown"};var
lb=jsx3.gui.Event;var
db=jsx3.gui.Interactive;var
B=jsx3.html;j.DEFAULTXSLID=ub.a;j.DEFAULTXSLURL=jsx3.resolveURI(ub.b);j.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.c);j.ICONMINUS=ub.d;j.ICONPLUS=ub.e;j.ICON=ub.f;j.SELECTEDIMAGE=jsx3.resolveURI(ub.g);j.INSERT_BEFORE_IMG=jsx3.resolveURI(ub.h);j.APPEND_IMG=jsx3.resolveURI(ub.i);j.ONDROPBGIMAGE=ub.j+jsx3.resolveURI(ub.k)+ub.l;if(jsx3.CLASS_LOADER.IE6)B.loadImages(j.ICONMINUS,j.ICONPLUS,j.ICON,j.SELECTEDIMAGE,ub.k,j.INSERT_BEFORE_IMG,j.APPEND_IMG);j.BORDERCOLOR=ub.m;j.DEFAULTBACKGROUNDCOLOR=ub.n;j.DEFAULTNODATAMSG=ub.o;j.aZ=null;j.II=500;j.Us=null;j.jK=250;j.bq=null;j.MULTI=1;j.SINGLE=0;b.init=function(i,e){this.jsxsuper(i);if(e!=null)this.insertRecordProperty(e,ub.p,ub.q,false);};b.onAfterAttach=function(){this.jsxsuper();if(this.jsxvalue!=null&&this.jsxvalue!=ub.r&&this.jsxvalue!=ub.s)this.setValue(this.jsxvalue);};b.getXSL=function(){return this.nd(j.DEFAULTXSLURL,j.Ip);};b.doValidate=function(){var
za=this.c8();var
Ba=za.length>0||this.getRequired()==0;this.setValidationState(Ba?1:0);return this.getValidationState();};b.ch=function(){return ub.t+(this.getBackgroundColor()?this.getBackgroundColor():j.DEFAULTBACKGROUNDCOLOR)+ub.u;};b.setValue=function(g,c){var
za=this.getValue();var
wa=this.getMultiSelect()==1;var
gb=false;gb=this.isOldEventProtocol();if(jsx3.$A.is(g)){if(!wa)throw new
jsx3.IllegalArgumentException(ub.v,g);}else if(wa)g=[g];if(wa){this.fM();for(var
Z=0;Z<g.length;Z++){var
Fb=g[Z];if(Fb!=null&&!this.Ig(Fb))continue;this.FF(Fb);}if(c&&g.length>0)this.revealRecord(g[0]);if(gb)this.doEvent(ub.w,{strRECORDID:g[0],strRECORDIDS:g});}else{if(g!=null&&!this.Ig(g))return this;this.fM();if(g!=null){this.FF(g);if(c)this.revealRecord(g);}if(gb)this.doEvent(ub.w,{strRECORDID:g,strRECORDIDS:[g]});}if(gb)this.doEvent(ub.x,{objEVENT:null,preVALUE:za,newVALUE:this.getValue(),_gipp:1});return this;};b.a8=function(r,h,s,f,p){var
ea=this.getValue();var
v=this.getMultiSelect()==1;if(v&&s){if(h!=null&&!this.Ig(h))return;var
Nb=false;if(this.Dp(h)){if(f)this.QK(h);}else{this.FF(h);Nb=true;}if(Nb&&!p)this.doEvent(ub.w,{objEVENT:r,strRECORDID:h,strRECORDIDS:[h]});}else{var
xa=this.getValue()==h;if(!f&&xa&&!s)return;this.fM();if(h!=null&&!this.Ig(h))h=null;if(h!=null)if(xa)this.QK(h);else this.FF(h);if(!p){var
Z=xa?null:h;var
sb=xa?[]:[Z];this.doEvent(ub.w,{objEVENT:r,strRECORDID:Z,strRECORDIDS:sb});}}if(!p)this.doEvent(ub.x,{objEVENT:r,preVALUE:ea,newVALUE:this.getValue(),_gipp:1});};b.wX=function(k){var
gb=typeof k==ub.y?this.BB(k):k;if(gb!=null&&gb.getAttribute){k=gb.getAttribute(ub.z);if(k)try{B.focus(gb.childNodes[0].childNodes[2]);this.nv(gb.getAttribute(ub.z));}catch(Kb){}}else this.nv(null);};b.nv=function(o){if(o!=null){if(this._jsxf2==null)if(this.getMultiSelect()==1)lb.subscribeLoseFocus(this,this.getRendered(),ub.A);this._jsxf2=o;}else{if(this._jsxf2!=null)lb.unsubscribeLoseFocus(this);this._jsxf2=null;}};b.wQ=function(e){lb.unsubscribeLoseFocus(this);this._jsxf2=null;};b.lF=function(r){var
pb=this.BB(r);if(pb!=null){var
eb=B.selectSingleElm(pb,0,2);jsx3.html.addClass(eb,ub.B);eb.style.backgroundImage=ub.j+j.SELECTEDIMAGE+ub.l;}};b.lD=function(p){var
jb=this.BB(p);if(jb!=null){var
qa=B.selectSingleElm(jb,0,2);jsx3.html.removeClass(qa,ub.B);qa.style.backgroundImage=ub.r;}};b.fM=function(){for(var
M=this.ND();M.hasNext();){var
pb=M.next();this.Sf(pb,ub.C,null);this.lD(this.Sf(pb,ub.D));}};b.QK=function(q){this.deleteRecordProperty(q,ub.p,false);this.lD(q);};b.FF=function(f){this.insertRecordProperty(f,ub.p,ub.q,false);this.lF(f);};b.ND=function(){return (this.getXML()).selectNodeIterator(ub.E+this.hn(ub.F)+ub.G+this.hn(ub.C)+ub.H);};b.c8=function(){var
O=this.ND();var
Eb=[];while(O.hasNext()){var
V=O.next();Eb[Eb.length]=this.Sf(V,ub.D);}return Eb;};b.revealRecord=function(o,p){var
Eb=this.getRecordNode(o);var
Ia=Eb?Eb.getParent():null;while(Ia!=null){this.toggleItem(this.Sf(Ia,ub.D),true);Ia=Ia.getParent();}var
Kb=this.BB(o);if(Kb){var
tb=p?p.getRendered(Kb):this.getRendered(Kb);if(tb)B.scrollIntoView(Kb,tb,0,10);}};b.getValue=function(){return this.getMultiSelect()==0?(this.c8())[0]:this.c8();};b.getKeyListener=function(){return this.jsxkeylistener==null?1:this.jsxkeylistener;};b.setKeyListener=function(q){this.jsxkeylistener=q;return this;};b.getText=function(){var
La=(this.ND()).next();return La!=null?this.Sf(La,ub.I):null;};b.getMultiSelect=function(){return this.jsxmultiselect==null?0:this.jsxmultiselect;};b.setMultiSelect=function(k){this.jsxmultiselect=k;return this;};b.redrawRecord=function(i,p){var
D=this.BB(i);if(p==0){if(D)if(D.parentNode.childNodes.length>1){var
na=D.parentNode.parentNode;na.style.position=ub.r;B.removeNode(D);na.style.position=ub.J;}else{var
na=D.parentNode.parentNode;var
E=na.getAttribute(ub.z);B.setOuterHTML(na,this.doTransform(E));}return this;}if(D==null){var
Gb=this.getRecordNode(i);if(Gb!=null)if(this.getParent()!=null){Gb=Gb.getParent();var
E=this.Sf(Gb,ub.D);var
na=this.BB(E);if(na!=null)B.setOuterHTML(na,this.doTransform(E));}}else B.setOuterHTML(D,this.doTransform(i));return this;};b.getRoot=function(){return this.jsxuseroot!=null?this.jsxuseroot:1;};b.setRoot=function(o){this.jsxuseroot=o;return this;};b.getIcon=function(){return this.jsxicon!=null?this.jsxicon:j.ICON;};b.setIcon=function(i){this.jsxicon=i;return this;};b.getIconMinus=function(){return this.jsxiconminus!=null?this.jsxiconminus:j.ICONMINUS;};b.setIconMinus=function(c){this.jsxiconminus=c;return this;};b.getIconPlus=function(){return this.jsxiconplus!=null?this.jsxiconplus:j.ICONPLUS;};b.setIconPlus=function(s){this.jsxiconplus=s;return this;};b.BB=function(e){var
Eb=this.getDocument();return Eb!=null?Eb.getElementById(this.getId()+ub.K+e):null;};b.Vl=function(a,l){if(l!=a.srcElement())return;var
Hb=(this.c8())[0];if(Hb){this.wX(Hb);}else{var
Ua=(this.getRendered(l)).childNodes[0];if(Ua!=null)this.wX(Ua);}};b.nj=function(q,o){if(!q.leftButton())return;o=q.srcElement();var
da=this.getRendered(o);while(jsx3.util.strEmpty(o.getAttribute(ub.L))&&o!=da)o=o.parentNode;if(o.getAttribute(ub.L)!=null){if(o.getAttribute(ub.L)==ub.M){this.PL(q,o.parentNode.parentNode.getAttribute(ub.z));}else if(o.getAttribute(ub.L)==ub.I||o.getAttribute(ub.L)==ub.N){var
J=o.parentNode.parentNode.getAttribute(ub.z);var
Eb=this.yH();this.wX(o.parentNode.parentNode);if(!o.parentNode)o=(this.BB(J)).childNodes[0].childNodes[2];if(this.Ig(J))if(q.shiftKey()&&this.getMultiSelect()==1){if(Eb){this.revealRecord(Eb);this.lu(q,Eb,J);}else this.a8(q,J,false,true);}else{var
Fb=jsx3.gui.isMouseEventModKey(q);if(Fb||!this.Dp(J))this.a8(q,J,Fb,Fb);}}else this.wX((this.c8())[0]);}else this.wX((this.c8())[0]);};b.yH=function(){if(this._jsxf2!=null)return this._jsxf2;var
bb=this.c8();if(bb.length==1)return bb[0];return null;};b.lu=function(f,q,c){var
yb=this.getValue();var
ra=false;var
Sa=!jsx3.gui.isMouseEventModKey(f)||!this.Dp(c);var
C=[q];var
Ia=q;while((Ia=this.cA(Ia))!=null){C.push(Ia);if(Ia==c){ra=true;break;}}if(!ra){C=[q];Ia=q;while((Ia=this.Yz(Ia))!=null){C.push(Ia);if(Ia==c){ra=true;break;}}if(!ra)return;}var
Oa=[];for(var
Z=0;Z<C.length;Z++){var
hb=this.Dp(C[Z]);if(!hb)Oa.push(C[Z]);}if(!jsx3.gui.isMouseEventModKey(f))this.fM();for(var
Z=0;Z<C.length;Z++){var
ua=C[Z];var
hb=this.Dp(ua);if(Sa||hb)this.a8(null,ua,true,!Sa&&hb,true);}if(Sa)this.doEvent(ub.w,{objEVENT:f,strRECORDID:Oa[0],strRECORDIDS:Oa});this.doEvent(ub.x,{objEVENT:f,preVALUE:yb,newVALUE:this.getValue(),_gipp:1});};b.Ig=function(p){return this.Sf(this.getRecordNode(p),ub.O)!=ub.q;};b.Dp=function(n){return this.Sf(this.getRecordNode(n),ub.C)==ub.q;};j.getDragIcon=function(a,e,f,i){return ub.P+B.getCSSOpacity(0.75)+ub.Q+B.getOuterHTML(a.parentNode.childNodes[1])+B.getOuterHTML(a)+ub.R;};b.toggleItem=function(k,c){var
Ya=this.getRecordNode(k);var
Da=this.BB(k);if(Da!=null)this.JR(Ya,Da,c);return this;};b.PL=function(i,q,p,e){var
Lb=this.getRecordNode(q);var
va=this.BB(q);if(va!=null){var
Bb=null;if(Lb.getAttribute(ub.S)==ub.q&&this.Sf(Lb,ub.T)!=ub.q&&(p==null||p===true)){B.updateCSSOpacity(va.childNodes[0].childNodes[0],0.5);jsx3.sleep(function(){if(this.getParent()==null)return;var
Ha=this.doEvent(ub.U,{objXML:this.getXML(),objNODE:Lb});if(Ha&&typeof Ha==ub.V){if(Ha.bCLEAR)this.Sf(Lb,ub.W,null);if(Ha.arrNODES!=null){Lb.removeChildren();for(var
qa=0;qa<Ha.arrNODES.length;qa++)Lb.appendChild(Ha.arrNODES[qa]);}}else this.Sf(Lb,ub.W,null);this.redrawRecord(q,2);if(e!=null)e();},null,this);this.Sf(Lb,ub.T,ub.q);Bb=true;}else{var
Mb=jsx3.gui.isMouseEventModKey(i);Bb=this.JR(Lb,va,p,Mb);}this.doEvent(ub.X,{objEVENT:i,strRECORDID:q,objRECORD:Lb,bOPEN:Bb,_gipp:1});}};b.JR=function(e,h,l,p){var
ra=this.Sf(e,ub.T)==ub.q;if(l==null)l=!ra;if(ra==l)return l;if(l){h.childNodes[0].childNodes[0].src=(this.getUriResolver()).resolveURI(this.getIconMinus());h.childNodes[1].style.display=ub.Y;this.Sf(e,ub.T,ub.q);}else{h.childNodes[0].childNodes[0].src=(this.getUriResolver()).resolveURI(this.getIconPlus());h.childNodes[1].style.display=ub.Z;this.Sf(e,ub.T,null);}if(p)for(var
oa=e.selectNodeIterator(this.hn(ub.F));oa.hasNext();){var
y=oa.next();if((y.getChildIterator()).hasNext()){var
ba=this.BB(this.Sf(y,ub.D));if(ba)this.JR(y,ba,l,true);}}return l;};b.Fo=function(o,k){if(this.getCanDrag()==1&&!o.rightButton()){var
R=o.srcElement();if(R==null)return;var
L=false;if(jsx3.util.strEmpty(R.getAttribute(ub.L)))R=R.parentNode;if(R.getAttribute(ub.L)==ub.N){L=true;R=R.parentNode.childNodes[2];}if(R.getAttribute(ub.L)==ub.I){if(!this.Ig(R.getAttribute(ub._)))return;var
La=this;o.yh();j.bq=window.setTimeout(function(){j.bq=null;lb.unsubscribe(ub.aa,La,ub.ba);if(La.getParent()!=null){La.nj(o,k);La.doDrag(o,R,j.getDragIcon,{strDRAGIDS:La.c8()});}},j.jK);lb.subscribe(ub.aa,this,ub.ba);if(L){lb.publish(o);o.cancelAll();}}}};b.ux=function(c){lb.unsubscribe(ub.aa,this,ub.ba);if(j.bq)window.clearTimeout(j.bq);};b.yo=function(a,l){var
w=a.srcElement();if(w==null)return;var
M=w.getAttribute(ub.L);if(jsx3.util.strEmpty(M))w=w.parentNode;M=w.getAttribute(ub.L);if(this.getCanDrop()==1&&jsx3.EventHelp.isDragging()){var
ia=this.yR(a);var
gb=ia.getAttribute(ub.ca)==ub.da;var
Ta=ia.getAttribute(ub.ea);if(Ta!=null){var
O=jsx3.EventHelp.JSXID;var
Y=jsx3.EventHelp.getDragId();var
L=jsx3.EventHelp.getDragIds();var
xa=jsx3.EventHelp.DRAGTYPE;var
Za=jsx3.gui.isMouseEventModKey(a);if(O==null)return;var
J=O.doEvent(ub.fa,{objEVENT:a,strRECORDID:Y,strRECORDIDS:L,objTARGET:this,bCONTROL:Za});var
Ea={objEVENT:a,strRECORDID:Ta,objSOURCE:O,strDRAGID:Y,strDRAGIDS:L,strDRAGTYPE:xa,bINSERTBEFORE:gb,bALLOWADOPT:J!==false};var
fa=this.doEvent(Za?ub.ga:ub.ha,Ea);if(J!=false&&fa!==false&&O.instanceOf(jsx3.xml.CDF)){for(var
ra=0;ra<L.length;ra++)if(gb)this.adoptRecordBefore(O,L[ra],Ta);else this.adoptRecord(O,L[ra],Ta);this.revealRecord(L[0]);}}}else if((M==ub.I||M==ub.N)&&a.rightButton()&&this.getMenu()){var
Ta=w.parentNode.parentNode.getAttribute(ub.z);var
Lb=this.Pk(this.getMenu());if(Lb!=null&&this.Ig(Ta)){var
D=this.doEvent(ub.ia,{objEVENT:a,objMENU:Lb,strRECORDID:Ta});if(D!==false){if(D instanceof Object&&D.objMENU instanceof jsx3.gui.Menu)Lb=D.objMENU;var
fb=a.shiftKey()||jsx3.gui.isMouseEventModKey(a);if(this.Dp(Ta))this.wX(Ta);else this.a8(a,Ta,fb,fb);Lb.showContextMenu(a,this,Ta);}}}this.qP(a);};b.Ri=function(o,k){var
oa=o.toElement();if(oa==null)return;var
vb=oa.getAttribute(ub.L);if(vb==ub.I&&this.hasEvent(ub.ja)){var
na=oa;while(na.getAttribute(ub.z)==null&&na!=k)na=na.parentNode;if(na==k)return;var
Fa=na.getAttribute(ub.z);this.applySpyStyle(oa);var
Ib=o.clientX()+jsx3.EventHelp.DEFAULTSPYLEFTOFFSET;var
Fb=o.clientY()+jsx3.EventHelp.DEFAULTSPYTOPOFFSET;o.yh();var
S=this;if(j.Us)window.clearTimeout(j.Us);j.Us=window.setTimeout(function(){j.Us=null;if(S.getParent()!=null)S.Az(o,Fa,oa,na);},jsx3.EventHelp.SPYDELAY);}};b._ebMouseMove=function(a,r){if(jsx3.EventHelp.isDragging()&&this.getCanDrop()==1){var
hb=a.srcElement();if(hb==null)return;var
Ka=hb.getAttribute(ub.L);var
M=hb;while(M.getAttribute(ub.z)==null&&M!=r)M=M.parentNode;if(M==r)return;var
x=M.getAttribute(ub.z);if(Ka==ub.M){var
jb=this.Sf(this.getRecordNode(x),ub.T)==ub.q;if(!jb&&!j.aZ){var
Lb=this;a.yh();j.aZ=window.setTimeout(function(){delete j[ub.ka];if(Lb.getParent()!=null)Lb.PL(a,x);},j.II);}}else if(Ka==ub.I){var
Fb=jsx3.EventHelp.getDragSource();var
ra=jsx3.EventHelp.getDragType();var
Bb=this.getAbsolutePosition(r,M.childNodes[0]);var
yb=Bb.H/3>a.getOffsetY();var
V=this.doEvent(ub.la,{objEVENT:a,strRECORDID:x,objSOURCE:Fb,strDRAGID:jsx3.EventHelp.getDragId(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:ra,objGUI:M,bINSERTBEFORE:yb});if(V===false){this.qP(M);return;}var
ma=this.getAbsolutePosition(r,M);var
va=this.yR(r);var
zb=va.style;var
na=ma.L;if(yb){var
Nb=this.getAbsolutePosition(r,r);zb.top=Bb.T-4+ub.ma;zb.width=Math.max(0,Nb.W-na-8)+ub.ma;zb.height=ub.na;zb.backgroundImage=ub.j+j.INSERT_BEFORE_IMG+ub.l;va.setAttribute(ub.ca,ub.da);}else{na=na+26;zb.width=ub.oa;zb.height=ub.oa;zb.top=Bb.T-10+Bb.H+ub.ma;zb.backgroundImage=ub.j+j.APPEND_IMG+ub.l;va.setAttribute(ub.ca,ub.pa);}zb.left=na+ub.ma;va.setAttribute(ub.ea,x);zb.display=ub.Y;}}};b.yR=function(a){return (this.getRendered(a)).lastChild;};b.qP=function(l){var
wa=this.yR(l);wa.style.display=ub.Z;wa.removeAttribute(ub.ca);wa.removeAttribute(ub.ea);};b.Az=function(f,d,q,c){this.removeSpyStyle(q);var
O=this.doEvent(ub.ja,{objEVENT:f,strRECORDID:d});if(O)this.showSpy(O,f);};b.Uc=function(f,s){var
T=f.isFakeOut(s);var
N=f.fromElement();if(N==null)return;var
Na=N.getAttribute(ub.L);if(!T&&jsx3.EventHelp.isDragging()&&this.getCanDrop()==1){this.qP(f);window.clearTimeout(j.aZ);var
eb=jsx3.EventHelp.JSXID;var
ga=jsx3.EventHelp.DRAGTYPE;var
Eb=N.parentNode.parentNode.getAttribute(ub.z);var
Y=N.parentNode.parentNode;var
Ib=this.doEvent(ub.qa,{objEVENT:f,strRECORDID:Eb,objSOURCE:eb,strDRAGID:jsx3.EventHelp.getDragId(),strDRAGIDS:jsx3.EventHelp.getDragIds(),strDRAGTYPE:ga,objGUI:Y});}else if(Na==ub.I&&this.hasEvent(ub.ja)){var
na=f.toElement();if(!na||na.id!=ub.ra){jsx3.sleep(jsx3.gui.Interactive.hideSpy);this.removeSpyStyle(N);if(j.Us)window.clearTimeout(j.Us);}}};b._ebKeyDown=function(o,e){if(this.jsxsupermix(o,e))return;var
Ya=o.keyCode();var
qa=(o.srcElement()).parentNode.parentNode;if(qa!=null&&qa.getAttribute(ub.z)!=null){var
S=qa.getAttribute(ub.z);if(Ya>=37&&Ya<=40){var
Ta=this.getRecordNode(S);var
t=Ta.getAttribute(ub.S)==ub.q;if(t||Ta.selectSingleNode(this.hn(ub.F))!=null){var
u=true;var
tb=this.Sf(Ta,ub.T)==ub.q;}else var
u=false;if(Ya==37){if(u&&tb){this.PL(o,S,false);}else this.wq(Ta);}else if(Ya==38){this.wq(Ta);}else if(Ya==39){if(t&&!tb){var
T=this;this.PL(o,S,true,function(){T.wX(S);});}else if(u&&!tb){this.PL(o,S,true);}else this.SY(Ta);}else if(Ya==40)this.SY(Ta);o.cancelAll();}else if(Ya==9){if(o.shiftKey()){B.focusPrevious(this.getRendered(e),o);}else B.focusNext(this.getRendered(e),o);}else if(o.spaceKey()||o.enterKey()){var
ib=this.Dp(S);if(ib&&o.enterKey()){this.n2(o);}else this.a8(o,S,jsx3.gui.isMouseEventModKey(o)||o.shiftKey(),true);o.cancelAll();}}};b.wq=function(g){var
Ca=this.Yz(this.Sf(g,ub.D));if(Ca!=null)this.wX(Ca);};b.SY=function(f){var
ob=this.cA(this.Sf(f,ub.D));if(ob!=null)this.wX(ob);};b.Yz=function(r){var
jb=this.BB(r);if(jb!=null){var
Ea=jb.previousSibling;if(Ea!=null){while(Ea.childNodes[1].style.display==ub.Y){var
Ya=Ea.childNodes[1].lastChild;if(Ya==null)break;Ea=Ya;}return Ea.getAttribute(ub.z);}else return jb.parentNode.parentNode.getAttribute(ub.z);}return null;};b.cA=function(c){var
gb=this.BB(c);if(gb!=null){if(gb.childNodes[1].style.display==ub.Y){var
Ta=gb.childNodes[1].firstChild;if(Ta!=null)return Ta.getAttribute(ub.z);}var
yb=gb.nextSibling;if(yb!=null){return yb.getAttribute(ub.z);}else{var
Eb=this.getId();var
aa=gb.parentNode.parentNode;while(aa!=null&&aa.id&&aa.id.indexOf(Eb)==0){if(aa.nextSibling!=null)return aa.nextSibling.getAttribute(ub.z);aa=aa.parentNode.parentNode;}}}return null;};b.executeRecord=function(q){var
N=null;N=this.isOldEventProtocol();this.n2(N,q);};b.n2=function(f,p){var
R=null;if(p==null)R=this.c8();else if(!jsx3.$A.is(p))R=[p];else R=p;for(var
F=0;F<R.length;F++){var
Ha=R[F];if(Ha==null||!this.Ig(Ha))continue;var
Bb=this.getRecordNode(Ha);var
Ib=Bb.getAttribute(ub.sa);if(Ib){var
D={strRECORDID:Ha};D.objRECORD=Bb;if(f instanceof jsx3.gui.Event)D.objEVENT=f;this.eval(Ib,this._getEvtContext(D));}}if(f)this.doEvent(ub.sa,{objEVENT:f,objRECORD:this.getRecordNode(R[0]),strRECORDIDS:R,strRECORDID:R[0]});};b.Xj=function(c,k){var
J=null;var
Va=c.srcElement();if(Va!=null&&jsx3.util.strEmpty(Va.getAttribute(ub.L)))Va=Va.parentNode;if(Va!=null&&Va.getAttribute(ub.L)!=null&&(Va.getAttribute(ub.L)==ub.I||Va.getAttribute(ub.L)==ub.N))J=Va.parentNode.parentNode.getAttribute(ub.z);if(J)this.n2(c);};j.yg={};j.yg[ub.ta]=true;j.yg[ub.ua]=true;j.yg[ub.va]=true;j.yg[ub.wa]=true;j.yg[ub.aa]=true;j.yg[ub.xa]=true;j.yg[ub.ya]=true;j.yg[ub.za]=true;j.yg[ub.Aa]=true;b.Hj=function(d,a,n){this.sk(d,a,n,3);};b.zd=function(o){this.applyDynamicProperties();if(this.getParent()&&(o==null||isNaN(o.parentwidth)||isNaN(o.parentheight))){o=(this.getParent()).Id(this);}else if(o==null)o={};o.boxtype=ub.Ba;o.tagname=ub.Ca;if(o.left==null)o.left=0;if(o.top==null)o.top=0;if(o.width==null)o.width=ub.Da;if(o.height==null)o.height=ub.Da;var
L,z;if((L=this.getBorder())!=null&&L!=ub.r)o.border=L;if((z=this.getPadding())!=null&&z!=ub.r)o.padding=z;return new
jsx3.gui.Painted.Box(o);};b.paint=function(){this.applyDynamicProperties();var
ia=this.getId();var
ib=this.doTransform();if(!ib)ib=this.getNoDataMessage();ib=ib+(ub.Ea+jsx3.gui.Block.SPACE+ub.Fa+this.Fg(ub.Aa,ub.Ga)+ub.Ha+this.Rl()+ub.Ia);var
Ib=ub.r;if(this.getEnabled()==1)Ib=this.qj(j.yg,0);var
E=this.renderAttributes(null,true);var
T=this.Wl(true);T.setAttributes(this.nk()+Ib+ub.Ja+ia+ub.Fa+this.Ak()+ub.Ka+E);T.setStyles(this.cd()+this.ch()+this.ke()+this.jc()+this.Mm()+this._k()+this.wk()+this.mi()+this.ad()+this.lc()+this.Bg());return (T.paint()).join(ib+ub.La);};b.doTransform=function(l){var
Ta={};var
za=l!=null;if(!za){var
xa=this.getXML();if(xa){var
ha=xa.getChildIterator();if(ha.hasNext())l=this.Sf(ha.next(),ub.D);}}var
Ca=this.getUriResolver();var
bb=this.getIcon(),v=this.getIconMinus(),Sa=this.getIconPlus();if(l!=null)Ta.jsxrootid=l;Ta.jsxtabindex=this.getIndex()==null?0:this.getIndex();Ta.jsxselectedimage=j.SELECTEDIMAGE;Ta.jsxicon=bb?Ca.resolveURI(bb):ub.r;Ta.jsxiconminus=v?Ca.resolveURI(v):ub.r;Ta.jsxiconplus=Sa?Ca.resolveURI(Sa):ub.r;Ta.jsxiconminusalt=this.Nk(ub.Ma,j);Ta.jsxiconplusalt=this.Nk(ub.Na,j);Ta.jsxtransparentimage=jsx3.gui.Block.SPACE;Ta.jsxdragtype=ub.Oa;Ta.jsxid=this.getId();Ta.jsxuseroot=za?1:this.getRoot();Ta.jsxfragment=za?1:0;Ta.jsxpath=jsx3.getEnv(ub.Pa);Ta.jsxpathapps=jsx3.getEnv(ub.Qa);Ta.jsxpathprefix=(this.getUriResolver()).getUriPrefix();Ta.jsxappprefix=(this.getServer()).getUriPrefix();var
wb=this.getXSLParams();for(var gb in wb)Ta[gb]=wb[gb];return this.vo(this.jsxsupermix(Ta));};b.onXmlBinding=function(a){this.jsxsupermix(a);this.repaint();};b.getNoDataMessage=function(){return this.jsxnodata==null?j.DEFAULTNODATAMSG:this.jsxnodata;};b.onSetChild=function(o){return !(o instanceof jsx3.gui.Painted);};j.getVersion=function(){return ub.Ra;};});jsx3.Tree=jsx3.gui.Tree;
