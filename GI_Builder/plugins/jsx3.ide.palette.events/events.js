(jsx3.$O(this)).extend({onModelEventEdit:function(l,h,s){var
aa=jsx3.ide.getSelected();var
ha=(l.getRecord(h)).jsxexecute;for(var
U=0;U<aa.length;U++){var
H=aa[U];if(ha){H.eval(ha,{objJSX:H,strType:h,strValue:s});}else{var
Qa=H.hasEvent(h);H.setEvent(s,h);if(Qa!=H.hasEvent(h))H.repaint();}}this.publish({subject:"eventChanged",o:aa,key:h,value:s});for(var
U=0;U<aa.length;U++)if(aa[U].getPersistence()!=jsx3.app.Model.PERSISTNONE){(jsx3.ide.getEditorForJSX(aa[U])).setDirty(true);break;}},onModelEventMenuExecute:function(n){var
fa=jsx3.ide.getSelected();for(var
u=0;u<fa.length;u++){fa[u].removeEvent(n);fa[u].repaint();}this.publish({subject:"eventChanged",o:fa,key:n,value:null});this.onModelEventChange();},onModelEventChangeSleep:function(){jsx3.sleep(this.onModelEventChange,"jsx3.ide.onModelEventChange",this);},onModelEventChange:function(){var
u=jsx3.IDE.getJSXByName("jsxmodelevents");if(u==null)return;var
Q=true;var
qa=jsx3.ide.getSelected();var
P=new
jsx3.util.List();for(var
Aa=0;Aa<qa.length&&Q;Aa++){if(!qa[Aa].instanceOf(jsx3.gui.Interactive)){Q=false;break;}var
ab=jsx3.ide.getTemplateForObject("event",qa[Aa]);if(!ab){Q=false;(this.getLog()).error("Error loading events file for class "+objJSX.getClass()+".");}else if(P.indexOf(ab)<0)P.add(ab);}if(Q)if(P.size()==1){var
ab=P.get(0);var
fb=ab.selectNodes("/data/record");var
La={},R={};for(var
Aa=0;Aa<qa.length;Aa++)for(var
Xa=fb.iterator();Xa.hasNext();){var
ea=Xa.next();var
W=ea.getAttribute("jsxid");var
N=qa[Aa].getEvent(W);if(Aa==0)La[W]=N;else if(La[W]!==N){R[W]=true;delete La[W];}}for(var
Xa=fb.iterator();Xa.hasNext();){var
ea=Xa.next();var
W=ea.getAttribute("jsxid");ea.setAttribute("value",La[W]);ea.setAttribute("jsxmulti",R[W]?"1":null);}(jsx3.IDE.getCache()).setDocument(u.getXMLId(),ab);u.repaintData();}else Q=false;return Q;}});
