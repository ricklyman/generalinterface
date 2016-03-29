(jsx3.$O(this)).extend({_getDataMatrix:function(){var
kb=(this.getPalette()).getUIObject();return kb?kb.getDataMatrix():null;},onJsxPropertyChange:function(n){var
v=jsx3.ide.getActiveEditor();var
fb=this._getDataMatrix();fb.redrawCell(n.prop,fb.getChild("jsxproperties_value"));},onPropertyEdit:function(o,e,p){var
Va=jsx3.ide.getSelected();var
Ba=jsx3.ide.getSelected();var
v=o.getRecord(e);if(typeof (jsx3.ide.PROJECT.getServer()).getDynamicProperty(p)!="undefined"){this.fH(this._getDataMatrix(),jsx3.ide.getSelected(),e,p);this._updatePropertyNode(o,Va,e);o.redrawCell(e,o.getChild("jsxproperties_value"));return false;}else{if(typeof p=="string")p=jsx3.util.strTrim(p);return this._editObjectProperty(v,Ba,e,p);}},_editObjectProperty:function(b,m,p,q){var
ca=q!=null?q.toString():"";if(b.disallow){var
Wa=b.disallow.indexOf("/")==0?jsx3.eval(b.disallow):new
RegExp(b.disallow);if(ca.match(Wa)){(this.getLog()).error("input '"+jsx3.util.strEscapeHTML(ca)+"' for property "+p+" is invalid, must not match "+Wa);return false;}}if(b.validate){var
Wa=b.validate.indexOf("/")==0?jsx3.eval(b.validate):new
RegExp(b.validate);if(!ca.match(Wa)){(this.getLog()).error("input '"+jsx3.util.strEscapeHTML(ca)+"' for property "+p+" is invalid, must match "+Wa);return false;}}if(b["eval"]=="1")try{q=this.eval(q);}catch(Kb){(this.getLog()).error("error evaluating expression '"+(q!=null?jsx3.util.strEscapeHTML(q):null)+"': "+jsx3.NativeError.wrap(Kb));return false;}var
Cb=b["jsxexecute"];if(b.validatehtml)if(jsx3.util.strEndsWith((jsx3.app.Browser.getLocation()).getPath(),".xhtml")){var
vb=(new
jsx3.xml.Document()).loadXML("<jsxtext>"+q+"</jsxtext>");if(vb.hasError()){(this.getLog()).error("When working in XHTML mode, the "+b.jsxid+" property must be well-formed XML. ("+vb.getError()+")");return false;}}for(var
Da=0;Da<m.length;Da++){var
M=m[Da];if(Cb!=null){try{this.eval(Cb,{vntValue:q,objJSX:M});}catch(Kb){(this.getLog()).error("error evaluating expression '"+Cb+"': "+jsx3.NativeError.wrap(Kb));return false;}}else{M[p]=q;M.repaint();}}if(b.domchanged)this.publish({subject:"domChanged",objs:m});this.publish({subject:"propChanged",objs:m,prop:p});for(var
Da=0;Da<m.length;Da++)if(m[Da].getPersistence()!=jsx3.app.Model.PERSISTNONE){(jsx3.ide.getEditorForJSX(m[Da])).setDirty(true);break;}return true;},onPropertyBeforeEdit:function(s,m,a){if(m!=s.getChild(1))return false;var
D=s.getRecordNode(a);var
la=D.getAttribute("jsxmask");if(!la)return false;if(D.getAttribute("uneditable")=="1")return false;if(D.getAttribute("jsxdynamic")!=null)return false;var
M=m.getChild(la)||m.getChild("jsxtextbox");if(M instanceof jsx3.gui.Select){M.clearXmlData();for(var
Ib=D.selectNodeIterator("enum");Ib.hasNext();){var
y=Ib.next();var
_=y.getAttribute("jsxvalue");var
T=y.getAttribute("jsxtext");M.insertRecord({jsxid:_,jsxtext:T});}M.redrawRecord(M.getValue());}return {objMASK:M};},onPropertyMenu:function(i,o){i.setSourceXML(((this.getResource("contextmenu")).getData()).cloneDocument());var
x=this._getDataMatrix();var
db=x.getRecordNode(o);if(db.getAttribute("uneditable")=="1")return false;if(db.selectSingleNode("record")!=null)return false;i.enableItem("jsxdpclear",db.getAttribute("nullable")!=="0");var
Ua=db.getAttribute("jsxtype");if(!Ua)Ua=o;var
qb=this._getPropertyIdsForType(Ua);var
na={};for(var
T=0;T<qb.length;T++){var
Bb=qb[T];var
hb=Bb.split(".");var
ha=na;for(var
Ab=0;Ab<hb.length-1;Ab++){var
u=hb[Ab];if(typeof ha[u]=="object"){}else if(typeof ha[u]=="number"){ha[u]={__leaf:1};}else ha[u]={};ha=ha[hb[Ab]];}var
_a=hb[hb.length-1];if(!ha[_a])ha[_a]=1;else ha[_a].__leaf=1;}var
Ra=jsx3.xml.CDF.newDocument();this.lH(Ra,Ra,na,"");for(var
T=Ra.getChildIterator();T.hasNext();)this.Tt(T.next());if(Ra.getFirstChild())(Ra.getFirstChild()).setAttribute("jsxdivider","1");var
G=(i.getXML()).getRootNode();for(var
T=(Ra.getChildNodes()).iterator();T.hasNext();)G.appendChild(T.next());var
za=jsx3.ide.getSelected();var
ya=true;for(var
T=0;T<za.length&&ya;T++)ya=ya&&za[T].getDynamicProperty(o)!=null;i.enableItem("jsxdpconvert",ya);return true;},lH:function(r,p,e,l){for(var ma in e){if(ma=="__leaf")continue;var
hb=l?l+"."+ma:ma;var
B=r.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");B.setAttribute("jsxid",hb);B.setAttribute("jsxtext",ma);if(typeof e[ma]=="object"){if(e[ma].__leaf){var
nb=r.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");nb.setAttribute("jsxid",hb);nb.setAttribute("jsxtext",ma);p.appendChild(nb);}this.lH(r,B,e[ma],hb);}p.appendChild(B);}},Tt:function(h){var
Xa=false;do{Xa=false;var
M=h.getChildNodes();if(M.size()==1){var
t=M.get(0);var
xb=t.getChildNodes();if(xb.size()>0){Xa=true;for(var
U=0;U<xb.size();U++)h.appendChild(xb.get(U));h.setAttribute("jsxtext",h.getAttribute("jsxtext")+"."+t.getAttribute("jsxtext"));h.removeChild(t);}}}while(Xa);M=h.getChildNodes();for(var
U=0;U<M.size();U++)this.Tt(M.get(U));},onPropertyMenuExecute:function(n,j){var
Y=jsx3.ide.getSelected();var
Db=this._getDataMatrix();var
xa=n.getContextRecordId();var
L=Db.getRecordNode(xa);var
sa;if(j=="jsxdpclear"){for(var
Ea=0;Ea<Y.length;Ea++)Y[Ea].setDynamicProperty(xa);this._editObjectProperty(Db.getRecord(xa),Y,xa,null);}else if(j=="jsxdpconvert"){for(var
Ea=0;Ea<Y.length;Ea++)Y[Ea].setDynamicProperty(xa);this.publish({subject:"propChanged",objs:Y,prop:xa,lookup:true});}else if((sa=L.getAttribute("lookupid"))!=null){for(var
Ea=0;Ea<Y.length;Ea++)Y[Ea].setDynamicProperty(sa);var
Ja=L.getAttribute("eval")==="0"?j:this.eval(j);this._editObjectProperty(Db.getRecord(xa),Y,xa,Ja);}else this.fH(Db,Y,xa,j);this._updatePropertyNode(null,Y,null,L);Db.redrawRecord(xa,jsx3.xml.CDF.UPDATE,Db.getChild("jsxproperties_value"));},fH:function(n,b,k,a){for(var
Z=0;Z<b.length;Z++)b[Z].setDynamicProperty(k,a);this._editObjectProperty(n.getRecord(k),b,k,(b[0].getServer()).getDynamicProperty(a));},onPropertiesChange:function(){var
eb=this._getDataMatrix();if(eb==null)return;var
da=jsx3.ide.getSelected();var
tb=false;if(da.length>0){var
Mb=this._getMergedPropertiesDoc(da);if(Mb!=null){(jsx3.IDE.getCache()).setDocument(eb.getXMLId(),Mb);tb=true;}}else (jsx3.IDE.getCache()).setDocument(eb.getXMLId(),jsx3.xml.CDF.newDocument());if(tb){eb.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);eb.repaintData();}else eb.setDisplay(jsx3.gui.Block.DISPLAYNONE,true);},_getMergedPropertiesDoc:function(f){var
ka=new
jsx3.util.List();var
R=new
Array(f.length);for(var
B=0;B<f.length;B++){if(!f[B])return null;R[B]=this._getClassPropertiesDoc(f[B]);if(!R[B])return null;if(ka.indexOf(R[B])<0)ka.add(R[B]);}var
w=null;if(ka.size()==1){var
Ia=R[0];for(var
B=Ia.selectNodeIterator("//record[not(@group)]");B.hasNext();)this._updatePropertyNode(null,f,null,B.next());return Ia;}else{for(var
B=0;B<f.length;B++){var
A=f[B];var
Ia=R[B];if(B==0){w=new
jsx3.util.List((Ia.selectNodes("//record[not(@group)]")).toArray());}else for(var
O=w.iterator();O.hasNext();){var
Da=O.next();var
I=Da.getAttribute("jsxid");if(Ia.selectSingleNode("//record[not(@group) and @jsxid='"+I+"']")==null)O.remove();}}var
Ia=(new
jsx3.xml.Document()).loadXML('<data jsxid="jsxroot"/>');for(var
O=w.iterator();O.hasNext();)Ia.appendChild((O.next()).cloneNode(true));w=Ia.selectNodes("//record");}for(var
B=w.iterator();B.hasNext();)this._updatePropertyNode(null,f,null,B.next());return Ia;},_updatePropertyNode:function(d,s,g,c){if(c==null)c=d.getRecordNode(g);else if(g==null)g=c.getAttribute("jsxid");var
da=c.getAttribute("getter");g=c.getAttribute("jsxid");s=jsx3.$A(s);var
Gb=null,oa=null,ia=null;for(var
w=0;w<s.length;w++){var
Fa=s[w];var
M=null,E=null;E=Fa.getDynamicProperty(g);if(da){if(jsx3.util.isName(da))M=Fa[da]();else M=Fa.eval(da);}else if(Fa[g]!=null)M=Fa[g];if(w==0){Gb=M;oa=E;}else if(Gb!==M||oa!==E){ia=1;Gb=(oa=null);break;}}c.setAttribute("value",Gb);c.setAttribute("jsxdynamic",oa);c.setAttribute("jsxmulti",ia);},_getClassPropertiesDoc:function(f){var
Eb=jsx3.IDE.getCache();var
wa="PROPERTIES_TEMPLATE_"+(f.getClass()).getName()+(f._subPropId?f._subPropId():"");var
da=Eb.getDocument(wa);if(da!=null)return da;var
L=jsx3.ide.getTemplateForObject("prop",f);if(L==null)return null;var
E=new
jsx3.net.URI(L.getSourceURL());L.convertProperties(jsx3.IDE.getProperties());var
N=null;var
O=0;do{N=L.selectNodes("//record[@include]");for(var
ba=N.iterator();ba.hasNext();){var
wb=ba.next();var
Ra=wb.getAttribute("absinclude");if(Ra==null)Ra=(E.resolve(wb.getAttribute("include"))).toString();var
Za=wb.getAttribute("path");var
va=wb.getAttribute("group");var
Oa=wb.getAttribute("children");var
za="PROPERTIES_MASTER_"+Ra;var
v=Eb.getDocument(za);if(v==null){v=Eb.openDocument(Ra,za);if(v.hasError()){(this.getLog()).error("Error parsing properties file '"+Ra+"' for class "+f.getClass()+": "+v.getError());return null;}}if(!Za&&va)Za="/data/record[@jsxid = '"+va+"']"+(Oa?"/*":"");if(!Za)Za="/data/*";var
na=null;for(var
vb=v.selectNodeIterator(Za);vb.hasNext();){var
cb=(vb.next()).cloneNode(true);this._fixPropsIncludeAttr(cb,Ra);if(na==null)na=cb;var
P=(wb.getParent()).insertBefore(cb,wb);if(P.getNative()==null)(this.getLog()).error("insert failed");}if(na!=null)for(var
vb=wb.selectNodeIterator("./record");vb.hasNext();)na.appendChild((vb.next()).cloneNode(true));var
P=(wb.getParent()).removeChild(wb);if(P.getNative()==null)(this.getLog()).error("remove failed");}}while(N.size()>0&&O++
<6);for(var
ba=L.selectNodeIterator("//enum");ba.hasNext();){var
wb=ba.next();var
qa=wb.getAttribute("jsxid");if(wb.getAttribute("eval")!=="0")qa=jsx3.eval(qa);wb.setAttribute("jsxvalue",qa);}for(var
ba=L.selectNodeIterator("//record[record]");ba.hasNext();){var
wb=ba.next();wb.setAttribute("jsxopen","1");wb.setAttribute("jsxunselectable","1");}if(L._idecacheable)Eb.setDocument(wa,L);return L;},_fixPropsIncludeAttr:function(g,d){var
G=new
jsx3.net.URI(d);var
sb=jsx3.util.List.wrap([g]);while(sb.size()>0){var
v=sb.removeAt(0);var
Qa=v.getAttribute("include");if(Qa)v.setAttribute("absinclude",(G.resolve(Qa)).toString());sb.addAll(v.selectNodes("record"));}},FX:null,LI:null,constructPropertyTypeIndex:function(){var
ta=this.FX={};var
w=[jsx3.getSystemCache(),jsx3.getSharedCache(),(jsx3.ide.PROJECT.getServer()).getCache()];for(var
v=0;v<w.length;v++){var
J=w[v];var
hb=J.keys();for(var
Ya=0;Ya<hb.length;Ya++){var
Cb=J.getDocument(hb[Ya]);if(Cb!=null){if(Cb.hasError()){(this.getLog()).warn("XML property file has error: "+Cb.getSourceURL());continue;}var
U=Cb;if(Cb.getAttribute("jsxnamespace")=="propsbundle")U=Cb.selectSingleNode("//locale[not(@key)]");if(U)for(var
Qa=U.getChildIterator();Qa.hasNext();){var
sa=Qa.next();if(sa.getNodeName()=="record"){var
fb=sa.getAttribute("type");if(fb){var
K=sa.getAttribute("jsxid");ta[K]=fb;}}}}}}var
Ia=this.LI={_empty:[]};for(var ab in ta){var
fb=ta[ab];if(Ia[fb]==null)Ia[fb]=[];Ia[fb].push(ab);}},_getPropertyIdsForType:function(n){return this.LI[n]||this.LI["_empty"];},openColorPickerMask:function(e){var
ub={a:"colorpicker",b:"colorPicker"};e.suspendEditSession();((this.getResource(ub.a)).load()).when((jsx3.$F(function(){var
Da=this.loadRsrcComponent(ub.a,(this.getServer()).getRootBlock(),false);(Da.getDescendantOfName(ub.b)).setValue(e.getMaskValue());Da.onColorPick((Da.getDescendantOfName(ub.b)).getRGB());Da.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);Da._jsxmask=e;(Da.getParent()).paintChild(Da);Da.focus();})).bind(this));},_colorPickerMaskChoose:function(a,c){var
ha=c._jsxmask;var
Gb=(c.getDescendantOfName("colorPicker")).getRGB();var
L="#"+(((16777216+Gb).toString(16)).substring(1)).toUpperCase();ha.setMaskValue(L);c.doClose();(ha.getDescendantOfName("btnCP")).focus();ha.resumeEditSession();ha.commitEditMask(a,true);},_colorPickerMaskCancel:function(a,c){var
Kb=c._jsxmask;c.doClose();(Kb.getDescendantOfName("btnCP")).focus();Kb.resumeEditSession();},openCdfMask:function(o){var
ub={a:"jsx3.ide.palette.properties",b:"columneditor/columneditor.xml",c:"Error with cdf document. ",d:"execBtn",e:"1;",f:"cancelBtn",g:"ibUp",h:"ibDown"};var
Ia=jsx3.ide.getPlugIn(ub.a);var
_a=(jsx3.IDE.getRootBlock()).loadAndCache(ub.b,false,null,Ia);var
Gb=(_a.getDescendantsOfType(jsx3.gui.Matrix))[0];var
Ua=o.getMaskValue();var
Mb=new
jsx3.xml.CDF.Document.newDocument();if(!jsx3.util.strEmpty(Ua)){Mb.loadXML(Ua);if(Mb.hasError()){(this.getLog()).error(ub.c+(Mb.getError()).description);Mb=new
jsx3.xml.CDF.Document.newDocument();}}((Gb.getServer()).getCache()).setDocument(Gb.getXMLId(),Mb);var
zb=_a.getDescendantOfName(ub.d);zb.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);zb.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(j){this.gz(j.context.objEVENT,zb.getAncestorOfName(_a.getName()));});var
Da=_a.getDescendantOfName(ub.f);Da.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);Da.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(d){this.aD(d.context.objEVENT,zb.getAncestorOfName(_a.getName()));});var
hb=_a.getDescendantOfName(ub.g);hb.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);hb.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(i){var
wa=i.target;if(wa.emGetSession())this.H3(wa.getAncestorOfType(jsx3.gui.Matrix),(wa.emGetSession()).recordId,true);});var
B=_a.getDescendantOfName(ub.h);B.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);B.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(j){var
wb=j.target;if(wb.emGetSession())this.H3(wb.getAncestorOfType(jsx3.gui.Matrix),(wb.emGetSession()).recordId,false);});o.suspendEditSession();_a._jsxmask=o;(_a.getParent()).paintChild(_a);_a.focus();},gz:function(h,k){var
Fb=k._jsxmask;var
G=(k.getDescendantsOfType(jsx3.gui.Matrix))[0];var
H=(G.getXML()).getXML();Fb.setMaskValue(H);k.doClose();(Fb.getDescendantOfName("btnTable")).focus();Fb.resumeEditSession();Fb.commitEditMask(h,true);},aD:function(e,n){var
Ab=n._jsxmask;n.doClose();(Ab.getDescendantOfName("btnTable")).focus();Ab.resumeEditSession();},H3:function(s,b,r){if(!b)return;var
Ba=s.getRecordNode(b);if(Ba){var
eb=Ba.getParent();if(r){var
Ea=Ba.getPreviousSibling();if(Ea){eb.insertBefore(Ba,Ea);s.repaintData();}}else{var
M=Ba.getNextSibling();if(M){eb.insertBefore(M,Ba);s.repaintData();}}}}});
