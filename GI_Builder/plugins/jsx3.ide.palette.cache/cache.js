(function(r){var
ub={A:"xsl",B:"jsxapp:/images/icon_80.gif",C:"jsxapp:/images/icon_79.gif",D:"/data/record/record",E:"jsxstyle",a:"/data/record",b:"jsxid",c:"single",d:"1",e:"cache",f:"readonly",g:"Confirm Delete",h:"You have made unsaved changes to the following cache document(s): <b>",i:"</b>, <b>",j:"</b>. Procede with delete?",k:"Delete",l:"Cancel",m:"prefs",n:"builder",o:"cachewarn",p:"Delete the following cache document(s): <b>",q:"</b>?",r:"//record[record]",s:"jsxopen",t:"0",u:'<data jsxid="jsxroot"><record jsxid="jsx30xmlcache"/></data>',v:"_server",w:"namespace",x:"jsxapp:/images/icon_46.gif",y:"font-weight:bold;",z:""};r.CacheFile=function(d,f){this.cache=d;this.cacheid=f;};(jsx3.$O(r.CacheFile.prototype)).extend({equals:function(b){return b&&this.cache==b.cache&&this.cacheid==b.cacheid;}});(jsx3.$O(r)).extend({_getServerId:function(p){return (p.getRootBlock()).getId();},_getServerForId:function(e){var
O=jsx3.GO(e);if(O)return O.getServer();return null;},configCacheMenu:function(l,s){var
J=l.getValue();var
ra=J.length>1;for(var
ab=(s.getXML()).selectNodeIterator(ub.a);ab.hasNext();){var
u=ab.next();s.enableItem(u.getAttribute(ub.b),!(ra&&u.getAttribute(ub.c)==ub.d));}},getCacheDocByTreeId:function(h,i){var
F=h.getRecord(i);if(F){var
Ka=this._getServerForId(F.serverId)||jsx3.ide.SERVER;if(Ka)return (Ka.getCache()).getDocument(F.jsxid);}return null;},cw:function(g){var
J=jsx3.ide.SERVER.getViews();for(var
la=J.iterator();la.hasNext();){var
V=la.next();if((V.getCache()).isMyDocument(g))return V;}return jsx3.ide.SERVER;},_doOpenCacheDocument:jsx3.$Y(function(a){var
fa=(a.args())[0];var
rb=(this.cw(fa)).getCache();var
ga=new
this.CacheFile(rb,fa);return jsx3.ide.doOpenForEdit(ga,ub.e,false);}),editSelectedCacheDoc:jsx3.$Y(function(c){var
qb=(c.args())[0];var
Ya=jsx3.$A();var
ma=null;for(var
M=0;M<qb.length;M++){var
na=this._doOpenCacheDocument(qb[M]);Ya[M]=na;ma=ma?ma.and(na):na;na.when(function(p){Ya[Ya.indexOf(na)]=p;});}if(ma)ma.when(function(){c.done(Ya);});else c.done(Ya);}),viewSelectedCacheDoc:function(h){(this.editSelectedCacheDoc(h)).when(function(d){for(var
lb=0;lb<d.length;lb++)d[lb].setMode(ub.f);});},deleteCacheDocument:function(s,k){var
aa=this._getTree();if(s==null)s=aa.getValue();if(!k){var
Y=[];for(var
B=0;B<s.length;B++){var
Gb=s[B];var
wa=this._getEditorForCacheId(Gb);if(wa&&wa.isDirty())Y.push(Gb);}if(Y.length>0){jsx3.IDE.confirm(ub.g,ub.h+Y.join(ub.i)+ub.j,(jsx3.$F(function(e){e.doClose();this.deleteCacheDocument(s,true);})).bind(this),null,ub.k,ub.l);return;}}if(s.length>0){var
Eb=jsx3.ide.getIDESettings();if(Eb.get(ub.m,ub.n,ub.o)&&!k){jsx3.IDE.confirm(ub.g,ub.p+s.join(ub.i)+ub.q,(jsx3.$F(function(j){j.doClose();this.deleteCacheDocument(s,true);})).bind(this),null,ub.k,ub.l);return;}for(var
B=0;B<s.length;B++){var
Gb=s[B];var
wa=this._getEditorForCacheId(Gb);if(wa!=null)jsx3.IDE.EDITOR_MGR.close(wa);(jsx3.ide.SERVER.getCache()).clearById(Gb);}this.updateCache();}},_getTree:function(){var
ra=(this.getPalette()).getUIObject();return ra&&ra.getCacheTree();},updateCache:(jsx3.$F(function(){var
Hb=this._getTree();if(Hb){var
Y={};for(var
gb=(Hb.getXML()).selectNodeIterator(ub.r);gb.hasNext();){var
Fa=gb.next();Y[Fa.getAttribute(ub.b)]=Fa.getAttribute(ub.s)==ub.d?ub.d:ub.t;}var
Na=(new
jsx3.xml.CDF.Document()).loadXML(ub.u);var
Ca=((Na.getChildIterator()).next()).getAttribute(ub.b);var
Ra=jsx3.ide.getActiveEditor();var
qb=Ra&&jsx3.ide.ComponentEditor&&Ra instanceof jsx3.ide.ComponentEditor?Ra.getServer():null;var
Qa=jsx3.ide.SERVER.getCache();var
Q=Qa.keys();var
L=jsx3.ide.getAllEditors();var
db={jsxid:ub.v,jsxtext:jsx3.ide.SERVER.getEnv(ub.w),jsximg:ub.x,jsxopen:Y[ub.v]!=null?Y[ub.v]:ub.d,jsxunselectable:ub.d};Na.insertRecord(db,Ca,false);for(var
gb=0;gb<L.length;gb++){var
M=L[gb];if(M.getServer()==null)continue;var
pb=M.getServer();var
Bb=pb.getCache();var
z=this._getServerId(pb);var
Ab=pb==qb;for(var
P=0;P<Q.length;P++){var
Ta=Q[P];if(Bb.isMyDocument(Ta)){var
vb=Ca;if(Na.getRecordNode(z)==null){var
Fb={jsxid:z,jsxtext:M.getTitle(),jsxstyle:Ab?ub.y:ub.z,jsximg:ub.x,jsxopen:Y[z]!=null?Y[z]:ub.d,jsxunselectable:ub.d};Na.insertRecord(Fb,vb,false);}var
oa={jsxid:Ta,jsxtext:Ta,serverId:z,jsxstyle:Ab?ub.y:ub.z,jsximg:jsx3.ide.getDocumentType(Bb.getDocument(Ta))==ub.A?ub.B:ub.C};Na.insertRecord(oa,z,false);Q.splice(P--
,1);}}}for(var
P=0;P<Q.length;P++){var
Ta=Q[P];var
oa={jsxid:Ta,jsxtext:Ta,jsximg:jsx3.ide.getDocumentType(Qa.getDocument(Ta))==ub.A?ub.B:ub.C};Na.insertRecord(oa,ub.v,false);}Hb.setSourceXML(Na);Hb.repaint();}})).throttled(),updateCacheForActive:function(){var
U=this._getTree();if(U){var
N=jsx3.ide.getActiveEditor();var
Da=N&&jsx3.ide.ComponentEditor&&N instanceof jsx3.ide.ComponentEditor?N.getServer():null;var
Ja=Da?this._getServerId(Da):null;for(var
Kb=(U.getXML()).selectNodeIterator(ub.D);Kb.hasNext();){var
E=Kb.next();var
Aa=E.getAttribute(ub.b)==Ja?ub.y:ub.z;E.setAttribute(ub.E,Aa);for(var
hb=E.getChildIterator();hb.hasNext();)(hb.next()).setAttribute(ub.E,Aa);}U.repaint();}},cleanUpOrphanedCacheEditors:function(f){if(jsx3.ide.ComponentEditor&&f instanceof jsx3.ide.ComponentEditor&&f.getServer()){var
kb=f.getServer();var
ia=(kb.getCache()).keys();for(var
jb=0;jb<ia.length;jb++){var
Bb=ia[jb];var
va=this._getEditorForCacheId(Bb);if(va!=null)if(va.isDirty()){jsx3.IDE.EDITOR_MGR.close(va);}else jsx3.IDE.EDITOR_MGR.close(va);}}},_getEditorForCacheId:function(h){return (jsx3.ide.getAllEditors()).find(function(c){return jsx3.ide.CacheEditor&&c instanceof jsx3.ide.CacheEditor&&c.getCacheId()==h;});}});})(this);
