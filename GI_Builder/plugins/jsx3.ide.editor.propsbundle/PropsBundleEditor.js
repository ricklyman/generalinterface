jsx3.Class.defineClass("jsx3.ide.PropsBundleEditor",jsx3.ide.PropertiesEditor,null,function(i,c){var
ub={a:"editor",b:"jsxpropsbundleeditor",c:"coldefault",d:" : ",e:"/data/locale",f:"key",g:"_default",h:"jsxid",i:"jsxtext",j:'<data jsxnamespace="propsbundle" locales=""/>',k:"locale",l:"record",m:"Add Locale",n:"Enter the key of the new locale. Example: en_US.",o:"Locale ",p:" already exists in properties bundle.",q:"//*[@",r:"]",s:"#FFFFFF",t:"#000000",u:"_",v:"#EEEEEE",w:"#999999"};c.render=function(f){var
kb=(jsx3.IDE.PropsBundleEditorPlugin.getResource(ub.a)).getData();return f.loadXML(kb,false,this.getPlugIn());};c.Do=function(){return (this.getContent()).getDescendantOfName(ub.b);};c.nm=function(n){var
U=this.Do();U.setSourceXML(this.g2(n));var
qb=U.getChild(ub.c);for(var
Wa=(U.getChildren()).length-1;Wa>qb.getChildIndex();Wa--)U.removeChild(Wa);var
Ab=this.RA(n);Ab.sort();for(var
Wa=0;Wa<Ab.length;Wa++)this._addColumn(Ab[Wa],U,qb);};c._addColumn=function(f,n,p){if(n==null)n=this.Do();if(p==null)p=n.getChild(ub.c);var
Nb=jsx3.util.Locale.valueOf(f);var
Db=p.doClone();Db.setName(Nb.toString());Db.setText(Nb.getDisplayName()||Nb.toString());Db.setPath(Nb.toString());Db.setTip(Nb.toString()+ub.d+Nb.getDisplayName());Db.setFormatHandler(i.FORMATTER);};c.Bc=function(){return this.vL((this.Do()).getXML());};c.g2=function(n){var
N=jsx3.xml.CDF.Document.newDocument();var
wb={};for(var
kb=n.selectNodeIterator(ub.e);kb.hasNext();){var
la=kb.next();var
ra=la.getAttribute(ub.f);if(jsx3.util.strEmpty(ra))ra=ub.g;for(var
lb=la.getChildIterator();lb.hasNext();){var
Qa=lb.next();var
cb=Qa.getAttribute(ub.h);var
T=Qa.getAttribute(ub.i);if(wb[cb]==null)wb[cb]=N.insertRecord({jsxid:cb});wb[cb].setAttribute(ra,T);}}return N;};c.vL=function(k){var
Hb=(new
jsx3.xml.Document()).loadXML(ub.j);var
z={};for(var
Va=k.getChildIterator();Va.hasNext();){var
sa=Va.next();var
O=sa.getAttribute(ub.h);var
K=sa.getAttributeNames();for(var
pa=0;pa<K.length;pa++){var
ab=K[pa];if(ab==ub.h)continue;if(z[ab]==null){var
P=z[ab]=Hb.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.k);if(ab!=ub.g)P.setAttribute(ub.f,ab);Hb.appendChild(P);}var
x=Hb.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.l);x.setAttribute(ub.h,O);x.setAttribute(ub.i,sa.getAttribute(ab));z[ab].appendChild(x);}}return Hb;};c.RA=function(b){var
eb=[];for(var
ba=b.selectNodeIterator(ub.e);ba.hasNext();){var
ca=(ba.next()).getAttribute(ub.f);if(ca!=null)eb.push(ca);}return eb;};c.addLocaleColumn=function(){var
T=this;var
rb=this.Do();((this.getPlugIn()).getServer()).prompt(ub.m,ub.n,function(e,l){e.doClose();l=jsx3.util.strTrim(l);if(rb.getChild(l)){((this.getPlugIn()).getLog()).error(ub.o+l+ub.p);}else if(l.length>0){T._addColumn(l);T.setDirty(true);}});};c.removeLocaleColumn=function(a){var
Ga=a.getParent();var
Mb=Ga.getXML();var
L=a.getPath();for(var
gb=Mb.selectNodeIterator(ub.q+L+ub.r);gb.hasNext();)(gb.next()).removeAttribute(L);Ga.removeChild(a);this.setDirty(true);};i.FORMATTER=function(q,p,m,j,k,l){var
ta=m.getRecordNode(p);if(!ta)return;var
nb=j.getPath();var
Wa=ta.getAttribute(nb);if(Wa!=null){q.parentNode.style.backgroundColor=ub.s;q.style.color=ub.t;}else while(true){if(nb==ub.g)break;else if(nb.indexOf(ub.u)<0)nb=ub.g;else nb=nb.substring(0,nb.indexOf(ub.u));Wa=ta.getAttribute(nb);if(Wa!=null){jsx3.html.setInnerText(q,Wa);q.parentNode.style.backgroundColor=ub.v;q.style.color=ub.w;return;}}};});
