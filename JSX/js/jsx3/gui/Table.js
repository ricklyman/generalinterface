/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Table",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(h,a){var
ub={A:"1",Aa:"jsxabspath",B:"url(",Ba:"jsxhomepath",C:")",Ca:"white-space:nowrap;",D:"",Da:"noData",E:"jsxposition",Ea:"//xsl:template/tr",F:"jsxchange",Fa:"match",G:"jsxindex",Ga:"The column profile document has errors. A new, empty CDF Document will be used instead. (Description: ",H:"path",Ha:"width",I:"pathtype",Ia:"{$jsxid}_{@jsxid}jsx",J:"jsxbeforesort",Ja:"style",K:"object",Ka:"width:",L:"jsxaftersort",La:";{$myselectionbg}{$jsxcellstyle}",M:/^td/i,Ma:"//xsl:with-param",N:"jsxmenu",Na:'xmlns:xsl="http://www.w3.org/1999/XSL/Transform"',O:"jsxspy",Oa:"select",P:"_jsxspy",Pa:"'",Q:"execute",Qa:"<xsl:template",R:"jsxexecute",Ra:"_jsxZM",S:"click",T:"dblclick",U:"mouseover",V:"mouseout",W:"mouseup",X:"mousedown",Y:"_syncheadtobody",Z:"relativebox",_:"div",a:"jsx:///xsl/jsxtable.xsl",aa:"100%",b:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:param name=\"attrchildren\">record</xsl:param><xsl:param name=\"attrid\">jsxid</xsl:param><xsl:param name=\"attrtip\">jsxtip</xsl:param><xsl:param name=\"attrimg\">jsximg</xsl:param><xsl:param name=\"attrimgalt\">jsximgalt</xsl:param><xsl:param name=\"attrselected\">jsxselected</xsl:param><xsl:param name=\"jsxtabindex\">0</xsl:param><xsl:param name=\"jsxselectionbgurl\">JSX/images/matrix/select.gif</xsl:param><xsl:param name=\"jsxid\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxshallowfrom\">jsxroot</xsl:param><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxheaderheight\"/><xsl:param name=\"jsxrowstyle1\"/><xsl:param name=\"jsxrowclass1\"/><xsl:param name=\"jsxrowstyle2\"/><xsl:param name=\"jsxrowclass2\"/><xsl:param name=\"jsxcellstyle\"/><xsl:param name=\"jsxcellclass\"/><xsl:param name=\"jsxcellwrap\"/><xsl:param name=\"jsxtablestyles\"/><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsx_1\"/><xsl:param name=\"jsx_2\"/><xsl:param name=\"jsx_3\"/><xsl:param name=\"jsx_4\"/><xsl:param name=\"jsx_5\"/><xsl:param name=\"jsx_6\"/><xsl:param name=\"jsx_7\"/><xsl:param name=\"jsx_8\"/><xsl:param name=\"jsx_9\"/><xsl:param name=\"jsx_10\"/><xsl:param name=\"jsxmininclusive\">0</xsl:param><xsl:param name=\"jsxmaxinclusive\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><xsl:value-of select=\"$jsxasyncmessage\"/></xsl:when><xsl:when test=\"$jsxmaxinclusive\"><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30table\" style=\"top:{$jsxheaderheight}px;{$jsxtablestyles}\"><xsl:for-each select=\"//*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"position() &gt;= $jsxmininclusive and position() &lt;= $jsxmaxinclusive\"><xsl:apply-templates mode=\"record\" select=\".\"><xsl:with-param name=\"position\" select=\"position()-1\"/></xsl:apply-templates></xsl:when></xsl:choose></xsl:for-each></table></xsl:when><xsl:otherwise><table cellpadding=\"0\" cellspacing=\"0\" class=\"jsx30table\" style=\"top:{$jsxheaderheight}px;{$jsxtablestyles}\"><xsl:for-each select=\"//*[@*[name() = $attrid]=$jsxshallowfrom]/*[$attrchildren='*' or name()=$attrchildren]\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:apply-templates mode=\"record\" select=\".\"><xsl:with-param name=\"position\" select=\"position()-1\"/></xsl:apply-templates></xsl:for-each></table></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"*\" mode=\"record\"><xsl:param name=\"position\"/><xsl:param name=\"myselectionbg\"><xsl:if test=\"@*[name() = $attrselected]='1'\">background-image:url(<xsl:value-of select=\"$jsxselectionbgurl\"/>);</xsl:if></xsl:param><xsl:param name=\"jsxrowclass\"><xsl:choose><xsl:when test=\"$position mod 2 = 0\"><xsl:value-of select=\"$jsxrowclass2\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsxrowclass1\"/></xsl:otherwise></xsl:choose></xsl:param><xsl:param name=\"jsxrowstyle\"><xsl:choose><xsl:when test=\"$position mod 2 = 0\"><xsl:value-of select=\"$jsxrowstyle2\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"$jsxrowstyle1\"/></xsl:otherwise></xsl:choose><xsl:text>;</xsl:text></xsl:param><tr class=\"jsx30table {$jsxrowclass}\" id=\"{$jsxid}_{@*[name() = $attrid]}\" jsxid=\"{@*[name() = $attrid]}\" jsxposition=\"{$position}\" style=\"{$jsxrowstyle}\" tabindex=\"{$jsxtabindex}\"><xsl:if test=\"@*[name() = $attrtip]\"><xsl:attribute name=\"title\"><xsl:value-of select=\"@*[name() = $attrtip]\"/></xsl:attribute></xsl:if></tr></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"disable-output-escp\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\".\"/></xsl:call-template></xsl:template><xsl:template name=\"disable-output-escp\"><xsl:param name=\"value\" select=\".\"/><xsl:choose><xsl:when test=\"function-available('msxsl:node-set')\"><xsl:value-of disable-output-escaping=\"yes\" select=\"$value\"/></xsl:when><xsl:otherwise><span class=\"disable-output-escp\"><xsl:value-of select=\"$value\"/></span></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",ba:' id="',c:"text",ca:'"',d:"number",da:' class="jsx30table" ',e:"jsx:///images/table/select.gif",ea:'<div class="jsx30table_body" ',f:"ascending",fa:"scroll",g:"descending",ga:"nE",h:"jsx:///images/table/sort_desc.gif",ha:">",i:"jsx:///images/table/sort_asc.gif",ia:"</div>",j:"<td id=\"{$jsxid}_{@jsxid}jsx#ATTNAME#\" class=\"jsx30table {$jsxcellclass}\" unselectable=\"on\" \n  style=\"width:#WIDTH#;{$myselectionbg} {$jsxcellstyle} \">\n  <xsl:apply-templates select=\".\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n    <xsl:with-param name=\"attname\" select=\"'#ATTNAME#'\"/>\n  </xsl:apply-templates>\n</td>",ja:'<div class="jsx30table_head_port" style="height:',k:'<xsl:template match="*" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n <xsl:param name="attname"/>\n <div unselectable="on" class="{@jsxclass}" style="{@jsxstyle};{$jsxcellwrap}">\n   <xsl:choose>\n     <xsl:when test="$attname = $attrimg and @*[name() = $attrimg]">\n       <xsl:variable name="jsximg_resolved">\n         <xsl:apply-templates select="attribute::*[name()=$attname]" mode="uri-resolver"/>\n       </xsl:variable>\n       <img unselectable="on" src="{$jsximg_resolved}" alt="{@*[name() = $attrimgalt]}"/>\n     </xsl:when>\n     <xsl:otherwise>\n       <xsl:value-of select="attribute::*[name()=$attname]"/>\n       <xsl:if test="not(attribute::*[name()=$attname])">&#160;</xsl:if>\n     </xsl:otherwise>\n   </xsl:choose>\n </div>\n</xsl:template>',ka:"px;width:",l:"strId",la:'px;">',m:"_",ma:'<div class="jsx30table_head_pane ',n:"jsx",na:' style="',o:"-",oa:";",p:"px",pa:'">',q:/^tr/i,qa:"background-image:url(",r:"jsxid",ra:");",s:"_jsxUY",sa:'<div jsxindex="',t:"//",ta:'" ',u:"children",ua:"Nh",v:"[@",va:' class="jsx30table_header_cell" style="width:100px;height:',w:"selected",wa:"px;",x:"='1']",xa:"</div></div>",y:"id",ya:"beforeEnd",z:"unselectable",za:"jsxroot"};var
qb=jsx3.util.Logger.getLogger(h.jsxclass.getName());var
Mb=jsx3.gui.Event;var
V=jsx3.gui.Interactive;var
cb=jsx3.xml.CDF;h.DEFAULTXSLURL=jsx3.resolveURI(ub.a);h.Ip=(new
jsx3.xml.XslDocument()).loadXML(ub.b);h.TYPE_TEXT=ub.c;h.TYPE_NUMBER=ub.d;h.Us=null;h.SELECTION_BG=ub.e;h.SELECTION_UNSELECTABLE=0;h.SELECTION_ROW=1;h.SELECTION_MULTI_ROW=2;h.SORT_ASCENDING=ub.f;h.SORT_DESCENDING=ub.g;h.SORT_DESCENDING_IMG=jsx3.resolveURI(ub.h);h.SORT_ASCENDING_IMG=jsx3.resolveURI(ub.i);h.DEFAULT_HEADER_HEIGHT=20;h.RB=(new
jsx3.xml.Document()).loadXML(ub.j);h.DEFAULT_CELL_VALUE_TEMPLATE=ub.k;a.init=function(k){this.jsxsuper(k);};a.doValidate=function(){var
eb=this.getSelectedIds();var
w=eb.length>0||this.getRequired()==0;this.setValidationState(w?1:0);return this.getValidationState();};a.getValue=function(){var
R=this.getSelectionModel();if(R==2){return this.getSelectedIds();}else return (this.getSelectedIds())[0];};a.setValue=function(l){this.deselectAllRecords();if(l){if(jsx3.$A.is(l)){if(this.getSelectionModel()!=2&&l.length>1)throw new
jsx3.IllegalArgumentException(ub.l,l);}else l=[l];for(var
aa=0;aa<l.length;aa++)this.selectRecord(l[aa]);}return this;};a.jS=function(o){var
Qa=this.getDocument();return Qa.getElementById(this.getId()+ub.m+o);};a.Fq=function(n,e){var
Bb=this.getDocument();return Bb.getElementById(this.getId()+ub.m+n+ub.n+e);};a.getContentElement=function(s,j){var
ca=this.Fq(s,j);if(ca)return ca;};a.focusRowById=function(l){var
M=this.jS(l);if(M)jsx3.html.focus(M);};a.nE=function(i,l){if(l.parentNode.childNodes[1]){var
Lb=l.scrollLeft;l.parentNode.childNodes[1].childNodes[0].style.left=ub.o+Lb+ub.p;}};a.getSelectionModel=function(p){return this.jsxselectionmodel!=null?this.jsxselectionmodel>2?0:this.jsxselectionmodel:p!=null?p:null;};a.setSelectionModel=function(g){this.jsxselectionmodel=g;};a.nj=function(l,n){var
Ab=l.srcElement();if(Ab==null)return;var
Pa=this.getRendered(n);while(Ab&&Ab!=Pa&&Ab.tagName.search(ub.q)==-1)Ab=Ab.parentNode;if(Ab==Pa)return;var
ma=Ab.getAttribute(ub.r);if(jsx3.gui.isMouseEventModKey(l)){this.XK(ma);if(this.isRecordSelected(ma)){this.YH(l,ma,null);}else this.SV(l,ma,null,true);}else if(l.shiftKey()){var
t=this.uD();if(t){var
bb=this.jS(t);if(bb)this.SI(l,bb,Ab);}else{this.XK(ma);this.SV(l,ma,null,false);}}else{this.XK(ma);if(!this.isRecordSelected(ma))this.SV(l,ma,null,false);}this.focus();};a.kL=function(){if(!this._jsxUY)this._jsxUY={bg:(this.getServer()).resolveURI(this.getSelectionBG(h.SELECTION_BG))};return this._jsxUY.bg;};a.getSelectionBG=function(q){return this.jsxselectionbg?this.jsxselectionbg:q?q:null;};a.setSelectionBG=function(d){delete this[ub.s];this.jsxselectionbg=d;};a.XK=function(j){this._jsxuW=j;};a.uD=function(){return this._jsxuW;};a.X2=function(){return (this.getDocument()).getElementById(this.uD());};a.getSelectedNodes=function(){return (this.getXML()).selectNodes(ub.t+this.hn(ub.u)+ub.v+this.hn(ub.w)+ub.x);};a.getSelectedIds=function(){var
bb=[];var
na=(this.getXML()).selectNodeIterator(ub.t+this.hn(ub.u)+ub.v+this.hn(ub.w)+ub.x);while(na.hasNext()){var
Q=na.next();bb[bb.length]=this.Sf(Q,ub.y);}return bb;};a.Ig=function(f){var
Za=this.getRecordNode(f);return Za&&this.Sf(Za,ub.z)!=ub.A;};a.isRecordSelected=function(r){var
Ea=this.getRecordNode(r);return Ea&&this.Sf(Ea,ub.w)==ub.A;};a.selectRecord=function(b){if(this.getSelectionModel()==0)return;if(!this.Ig(b))return;this.SV(false,b,null,this.getSelectionModel()==2);};a.deselectRecord=function(q){this.YH(false,q,null);};a.deselectAllRecords=function(){var
Ab=this.getSelectedIds();var
Ha=Ab.length;for(var
_a=0;_a<Ha;_a++)this.YH(false,Ab[_a]);};a.SV=function(m,r,q,i){var
I=this.getSelectionModel(1);var
da=this.getRecordNode(r);var
P=i||m&&this.getCanDrag()==1;if(I==0||!da||this.Sf(da,ub.w)==ub.A&&P||this.Sf(da,ub.z)==ub.A)return false;var
Qa=i&&I==2;if(!Qa)this.deselectAllRecords();this.Sf(da,ub.w,ub.A);q=q||this.jS(r);if(q!=null){var
lb=ub.B+this.kL()+ub.C;for(var
X=0;X<q.childNodes.length;X++)q.childNodes[X].style.backgroundImage=lb;}this.gE(m,r);return true;};a.YH=function(r,j,f){var
C=this.getRecordNode(j);if(!C||this.Sf(C,ub.w)!=ub.A)return false;this.Sf(C,ub.w,null);f=f||this.jS(j);if(f!=null&&f.childNodes){f.style.backgroundImage=ub.D;for(var
da=0;da<f.childNodes.length;da++)f.childNodes[da].style.backgroundImage=ub.D;}this.gE(r);return true;};a.SI=function(q,m,n){if(!m||!n)return;var
lb=m.getAttribute(ub.r);var
zb=n.getAttribute(ub.r);if(!this.Ig(lb)||!this.Ig(zb))return;var
R=m.getAttribute(ub.E);var
Ia=n.getAttribute(ub.E);var
ba=Math.min(R,Ia);var
W=Math.max(R,Ia);var
Wa=this.getSelectedIds();var
ja=Wa.length;var
I={};for(var
z=0;z<ja;z++){var
C=this.jS(Wa[z]);if(C.getAttribute(ub.E)<ba||C.getAttribute(ub.E)>W){this.YH(false,Wa[z],C);}else I[Wa[z]]=1;}var
J=n.parentNode;for(var
z=ba;z<=W;z++){var
T=J.childNodes[z].getAttribute(ub.r);if(!I[T])this.SV(false,T,J.childNodes[z],true);}this.gE(q,zb);};a.gE=function(f,j){if(!this._jsxJX)this._jsxJX=[];if(f&&f instanceof Mb){var
Ba=this.getValue();this.doEvent(ub.F,{objEVENT:f,strRECORDID:j,strRECORDIDS:Ba,preVALUE:this._jsxJX,_gipp:1});this._jsxJX=Ba;}};a.tt=function(m){var
S=(this.getColumnProfileDocument()).selectNodeIterator(ub.t+this.hn(ub.u));var
Eb=0;while(S.hasNext()){var
mb=S.next();if(Eb==m)return mb;Eb++;}};a.Nh=function(o,q){if(this.getCanSort()!=0){var
Aa=Number(q.getAttribute(ub.G));var
za=this.tt(Aa);var
Fb=this.Sf(za,ub.H);var
qa=this.Sf(za,ub.I)||ub.c;this.setSortPath(Fb);this.setSortType(qa);var
ta=this.doEvent(ub.J,{objEVENT:o,intCOLUMNINDEX:Aa,strSORTPATH:Fb,strSORTTYPE:qa});if(ta!==false){if(ta!=null&&typeof ta==ub.K){if(ta.strSORTPATH)this.setSortPath(ta.strSORTPATH);if(ta.strSORTTYPE)this.setSortType(ta.strSORTTYPE);}this.doSort();this.doEvent(ub.L,{objEVENT:o,intCOLUMNINDEX:Aa,strSORTPATH:this.getSortPath(),strSORTTYPE:this.getSortType(),_gipp:1});}}};a.doSort=function(g){if(g){this.setSortDirection(g);}else this.setSortDirection(this.getSortDirection()==ub.f?ub.g:ub.f);if(this.getHeaderHeight()>0){var
Pa=this.getSortPath();var
D=(this.getColumnProfileDocument()).selectNodeIterator(ub.t+this.hn(ub.u));var
db=0;var
Xa=(this.getRendered()).childNodes[1].childNodes[0];while(D.hasNext())this.Fv(Xa,db++
,this.Sf(D.next(),ub.H)==Pa);}this.repaintData();};a.Fv=function(o,g,l){o.childNodes[g].style.backgroundImage=l?ub.B+(this.getSortDirection()==ub.f?h.SORT_ASCENDING_IMG:h.SORT_DESCENDING_IMG)+ub.C:ub.D;};a.getSortPath=function(){return this.jsxsortpath==null?ub.D:this.jsxsortpath;};a.setSortPath=function(j){this.jsxsortpath=j;};a.getSortType=function(){return this.jsxsorttype==null?ub.c:this.jsxsorttype;};a.setSortType=function(f){this.jsxsorttype=f;};a.getSortDirection=function(){return this.jsxsortdirection==null?ub.f:this.jsxsortdirection;};a.setSortDirection=function(j){this.jsxsortdirection=j;};a.getCanSort=function(){return this.jsxsort;};a.setCanSort=function(r){this.jsxsort=r;};a.redrawRecord=function(g,r){this.repaint();return this;};a.yo=function(i,d){if(i.rightButton()&&this.getMenu()){var
Jb=i.srcElement();if(Jb==null)return;var
Ma=this.getRendered(d);while(Jb&&Jb!=Ma&&Jb.tagName.search(ub.M)==-1)Jb=Jb.parentNode;if(Jb==Ma)return;var
X=Jb.parentNode.getAttribute(ub.r);var
ab=this.Pk(this.getMenu());if(ab!=null&&this.Ig(X)){var
sa=this.doEvent(ub.N,{objEVENT:i,objMENU:ab,strRECORDID:X,intCOLUMNINDEX:Jb.cellIndex});if(sa!==false){if(sa instanceof Object&&sa.objMENU instanceof jsx3.gui.Menu)ab=sa.objMENU;ab.showContextMenu(i,this,X);}}}};a.Ri=function(m,l){var
T=m.srcElement();if(T==null)return;var
ma=this.getRendered(l);while(T&&T!=ma&&T.tagName.search(ub.M)==-1)T=T.parentNode;if(T==ma)return;if(this.hasEvent(ub.O)){var
na=T.parentNode;var
Nb=na.getAttribute(ub.r);var
S=m.clientX()+jsx3.EventHelp.DEFAULTSPYLEFTOFFSET;var
_=m.clientY()+jsx3.EventHelp.DEFAULTSPYTOPOFFSET;m.yh();var
W=this;if(h.Us)window.clearTimeout(h.Us);h.Us=window.setTimeout(function(){h.Us=null;if(W.getParent()!=null)W.Az(m,Nb,na,T.cellIndex);},jsx3.EventHelp.SPYDELAY);}};a.Az=function(m,i,l,k){this.removeSpyStyle(l);var
la=this.doEvent(ub.O,{objEVENT:m,strRECORDID:i,intCOLUMNINDEX:k});if(la)this.showSpy(la,m);};a.Uc=function(e,o){var
Db=e.isFakeOut(o);var
Na=e.fromElement();if(Na==null)return;if(this.hasEvent(ub.O)){var
Ka=e.toElement();if(!Ka||Ka.id!=ub.P){jsx3.sleep(jsx3.gui.Interactive.hideSpy);if(h.Us)window.clearTimeout(h.Us);}}};a._ebKeyDown=function(f,n){if(this.jsxsupermix(f,n))return;};a.n2=function(b,e){var
db=null;if(e==null)db=this.getSelectedIds();else if(!jsx3.$A.is(e))db=[e];else db=e;for(var
T=0;T<db.length;T++){var
va=db[T];if(va==null||!this.Ig(va))continue;var
z=this.getRecordNode(va);var
Q=this.Sf(z,ub.Q);if(Q){var
Wa={strRECORDID:va};if(b instanceof Mb)Wa.objEVENT=b;this.eval(Q,this._getEvtContext(Wa));}}if(b)this.doEvent(ub.R,{objEVENT:b,strRECORDIDS:this.getSelectedIds(),strRECORDID:db[0]});};a.Xj=function(o,q){var
P=o.srcElement();if(P==null)return;var
C=this.getRendered(q);while(P&&P!=C&&P.tagName.search(ub.q)==-1)P=P.parentNode;if(P==C)return;var
la=P.getAttribute(ub.r);if(la)this.n2(o,la);};h.yg={};h.yg[ub.S]=true;h.yg[ub.T]=true;h.yg[ub.U]=true;h.yg[ub.V]=true;h.yg[ub.W]=true;h.yg[ub.X]=true;a.Hj=function(m,j,e){this.sk(m,j,e,3);if(j)jsx3.sleep(function(){this.es(this.getRendered());},this.getId()+ub.Y,this);};a.zd=function(m){this.applyDynamicProperties();if(this.getParent()&&(m==null||isNaN(m.parentwidth)||isNaN(m.parentheight))){m=(this.getParent()).Id(this);}else if(m==null)m={};m.boxtype=ub.Z;m.tagname=ub._;if(m.left==null)m.left=0;if(m.top==null)m.top=0;if(m.width==null)m.width=ub.aa;if(m.height==null)m.height=ub.aa;var
Z;if((Z=this.getBorder())!=null&&Z!=ub.D)m.border=Z;return new
jsx3.gui.Painted.Box(m);};a.paint=function(){this.applyDynamicProperties();var
Z=this.getId();var
za=this.doTransform();if(!za)za=this.getNoDataMessage();var
Sa=ub.D;if(this.getEnabled()==1)Sa=this.qj(h.yg,0);var
Xa=this.renderAttributes(null,true);var
ab=this.Wl(true);ab.setAttributes(this.nk()+Sa+ub.ba+Z+ub.ca+this.Ak()+ub.da+Xa);ab.setStyles(this.cd()+this.ch()+this.jc()+this._k()+this.wk()+this.mi()+this.ad()+this.lc()+this.Bg());return (ab.paint()).join(ub.ea+this.Fg(ub.fa,ub.ga)+ub.ha+za+ub.ia);};a.onAfterPaint=function(n){this.h3(n);};a.onAfterRestoreView=function(l){this.es(l);};a.h3=function(b){var
ha=this.getId();var
T=this.getHeaderHeight();if(T){var
lb=b.childNodes[0];if(lb!=null){do
lb=lb.childNodes[0];while(lb&&lb.tagName&&lb.tagName.search(ub.q)==-1);var
D=[];D.push(ub.ja+T+ub.ka+b.childNodes[0].offsetWidth+ub.la+ub.ma+this.getHeaderClass(ub.D)+ub.ca+ub.na+this.ke()+ub.oa+this.getHeaderStyle(ub.D)+ub.pa);var
Ha=this.getSortPath();var
w=ub.qa+(this.getSortDirection()==ub.f?h.SORT_ASCENDING_IMG:h.SORT_DESCENDING_IMG)+ub.ra;var
Ua=(this.getColumnProfileDocument()).selectNodeIterator(ub.t+this.hn(ub.u));var
J=0;while(Ua.hasNext()){var
ia=Ua.next();var
tb=Ha&&this.Sf(ia,ub.H)==Ha?w:ub.D;var
ja=this.Sf(ia,ub.c)||ub.D;D.push(ub.sa+J+++ub.ta+this.Fg(ub.S,ub.ua)+ub.va+T+ub.wa+tb+ub.pa+ja+ub.ia);}D.push(ub.xa);if(b.childNodes.length==2){jsx3.html.setOuterHTML(b.childNodes[1],D.join(ub.D));}else jsx3.html.insertAdjacentHTML(b,ub.ya,D.join(ub.D));this.es(b);}}};a.es=function(c){if(!this.getParent())return;if(this.getHeaderHeight()>0){var
H=c.childNodes[0];if(c.childNodes.length==2){this.nE(false,c.childNodes[0]);do
H=H.childNodes[0];while(H&&H.tagName&&H.tagName.search(ub.q)==-1);var
Xa=c.childNodes[1].childNodes[0];if(!Xa)return;var
ob=0;if(H){c.childNodes[1].style.width=c.childNodes[0].clientWidth+ub.p;for(var
fa=0;fa<H.childNodes.length;fa++){var
zb=H.childNodes[fa].offsetWidth;var
B=Xa.childNodes[fa].offsetWidth;var
wb=zb-B+window.parseInt(Xa.childNodes[fa].style.width);ob=ob+wb;Xa.childNodes[fa].style.width=wb+ub.p;}}else{var
ca=c.clientWidth;c.childNodes[1].style.width=ca+ub.p;var
ja=parseInt(ca/Xa.childNodes.length);var
Z=ca-ja*(Xa.childNodes.length-1);for(var
fa=0;fa<Xa.childNodes.length;fa++){var
zb=fa==Xa.childNodes.length-1?Z:ja;var
B=Xa.childNodes[fa].offsetWidth;var
wb=zb-B+window.parseInt(Xa.childNodes[fa].style.width);ob=ob+wb;Xa.childNodes[fa].style.width=wb+ub.p;}}Xa.style.width=ob+ub.p;}}};a.repaintHead=function(){this.h3(this.getRendered());};a.repaintData=function(){var
_a=this.getRendered();if(_a)_a.childNodes[0].innerHTML=this.doTransform();};a.doTransform=function(){var
Sa={};Sa.jsxshallowfrom=this.getRenderingContext(ub.za);Sa.jsxtabindex=this.getIndex()==null?0:this.getIndex();Sa.jsxid=this.getId();Sa.jsxsortpath=this.getSortPath();Sa.jsxsortdirection=this.getSortDirection();Sa.jsxsorttype=this.getSortType();Sa.jsxpath=jsx3.getEnv(ub.Aa);Sa.jsxpathapps=jsx3.getEnv(ub.Ba);Sa.jsxpathprefix=(this.getUriResolver()).getUriPrefix();Sa.jsxappprefix=(this.getServer()).getUriPrefix();Sa.jsxselectionbgurl=this.kL();Sa.jsxheaderheight=this.getHeaderHeight(h.DEFAULT_HEADER_HEIGHT);Sa.jsxcellstyle=this.getCellStyle();Sa.jsxcellclass=this.getCellClass();Sa.jsxrowstyle1=this.getRowStyle();Sa.jsxrowclass1=this.getRowClass();Sa.jsxrowstyle2=this.getAlternateRowStyle(Sa.jsx_rowstyle1);Sa.jsxrowclass2=this.getAlternateRowClass(Sa.jsx_rowclass1);Sa.jsxtablestyles=this.cd()+this.jc()+this._k()+this.wk();Sa.jsxcellwrap=this.getWrap(0)?ub.D:ub.Ca;var
Xa=this.getXSLParams();for(var Wa in Xa)Sa[Wa]=Xa[Wa];return jsx3.html.emptyToClosed(this.vo(this.jsxsupermix(Sa)));};a.getHeaderStyle=function(r){return this.jsxheaderstyle?this.jsxheaderstyle:r?r:null;};a.setHeaderStyle=function(p){this.jsxheaderstyle=p;};a.getHeaderClass=function(o){return this.jsxheaderclass?this.jsxheaderclass:o?o:ub.D;};a.setHeaderClass=function(f){this.jsxheaderclass=f;};a.getRowStyle=function(){return this.jsxrowstyle;};a.setRowStyle=function(q){this.jsxrowstyle=q;};a.getAlternateRowStyle=function(i){return this.jsxaltrowstyle?this.jsxaltrowstyle:i?i:null;};a.setAlternateRowStyle=function(i){this.jsxaltrowstyle=i;};a.getCellStyle=function(){return this.jsxcellstyle;};a.setCellStyle=function(n){this.jsxcellstyle=n;};a.getRowClass=function(){return this.jsxrowclass;};a.setRowClass=function(k){this.jsxrowclass=k;};a.getAlternateRowClass=function(o){return this.jsxaltrowclass?this.jsxaltrowclass:o?o:null;};a.setAlternateRowClass=function(m){this.jsxaltrowclass=m;};a.getCellClass=function(){return this.jsxcellclass;};a.setCellClass=function(q){this.jsxcellclass=q;};a.getWrap=function(i){return this.jsxwrap!=null?this.jsxwrap:i!=null?i:null;};a.setWrap=function(k){this.jsxwrap=k;};a.onXmlBinding=function(i){this.jsxsupermix(i);this.repaint();};a.getNoDataMessage=function(){return this.jsxnodata==null?this.Nk(ub.Da,h):this.jsxnodata;};a.onSetChild=function(k){return !(k instanceof jsx3.gui.Painted);};a.getXSL=function(){return this.yk();};a.yk=function(){var
rb=h.Ip||(jsx3.getSharedCache()).getOrOpenDocument(h.DEFAULTXSLURL,null,jsx3.xml.XslDocument.jsxclass);var
Ra=(this.getServer()).getCache();var
y=Ra.getDocument(this.getXSLId());if(y==null){y=rb.cloneDocument();Ra.setDocument(this.getXSLId(),y);var
jb=y.selectSingleNode(ub.Ea);var
Ya=this.getValueTemplate(h.DEFAULT_CELL_VALUE_TEMPLATE);var
Hb=new
jsx3.xml.Document();Hb.loadXML(Ya);if(!Hb.hasError()){Hb.setAttribute(ub.Fa,this.hn(ub.u));y.appendChild(Hb);}else{qb.error(ub.Ga+(Hb.getError()).description+ub.C);return;}var
ja=(this.getColumnProfileDocument()).selectNodeIterator(ub.t+this.hn(ub.u));while(ja.hasNext()){var
Gb=ja.next();var
Sa={jsxpath:this.Sf(Gb,ub.H),jsxwidth:this.Sf(Gb,ub.Ha)};if(jsx3.util.strEmpty(Sa.jsxwidth)){Sa.jsxwidth=ub.D;}else if(!isNaN(Sa.jsxwidth))Sa.jsxwidth+=ub.p;Hb=h.RB.cloneDocument();Hb.setAttribute(ub.y,ub.Ia+Sa.jsxpath);Hb.setAttribute(ub.Ja,ub.Ka+Sa.jsxwidth+ub.La);(Hb.selectSingleNode(ub.Ma,ub.Na)).setAttribute(ub.Oa,ub.Pa+Sa.jsxpath+ub.Pa);jb.appendChild(Hb);}}return y;};a.getValueTemplate=function(l){if(this.jsxvaluetemplate!=null&&(jsx3.util.strTrim(this.jsxvaluetemplate)).indexOf(ub.Qa)==0)return this.jsxvaluetemplate;if(l!=null)return l;};a.setValueTemplate=function(p){this.jsxvaluetemplate=p;this.Bk();};a.Bk=function(o){this.resetXslCacheData();};a.getColumnProfileDocument=function(){if(!this._jsxZM){this._jsxZM=cb.Document.newDocument();if(!jsx3.util.strEmpty(this.jsxcolumnprofile)){this._jsxZM.loadXML(this.jsxcolumnprofile);if(this._jsxZM.hasError()){qb.error(ub.Ga+(this._jsxZM.getError()).description+ub.C);this._jsxZM=cb.Document.newDocument();}else this._jsxZM.convertProperties((this.getServer()).getProperties());}}return this._jsxZM.cloneDocument();};a.getColumnProfile=function(){return this.jsxcolumnprofile;};a.setColumnProfile=function(e){this.jsxcolumnprofile=e+ub.D;delete this[ub.Ra];this.Bk();};a.getRenderingContext=function(r){return this.jsxrenderingcontext!=null&&this.jsxrenderingcontext!=ub.D?this.jsxrenderingcontext:r!=null?r:null;};a.setRenderingContext=function(d,k){this.jsxrenderingcontext=d;this.Bk(true);if(!k)this.repaint();};a.getHeaderHeight=function(f){return this.jsxheaderheight!=null?Number(this.jsxheaderheight):f?f:null;};a.setHeaderHeight=function(e,i){this.jsxheaderheight=e;if(!i)this.repaint();};});
