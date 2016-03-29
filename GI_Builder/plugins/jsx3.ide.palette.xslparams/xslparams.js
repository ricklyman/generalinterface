(jsx3.$O(this)).extend({_attrChanged:function(c){(jsx3.$A(c)).each(function(p){if(p.getPersistence()!=jsx3.app.Model.PERSISTNONE){var
R=jsx3.ide.getEditorForJSX(p);R.setDirty(true);}});},onXslParameterEdit:function(h,s,l){if(l)(l.getRecordNode(h)).removeAttribute("jsxmulti");var
pa=jsx3.ide.getSelected();s=jsx3.util.strTrim(s);for(var
V=0;V<pa.length;V++)if(pa[V].instanceOf(jsx3.xml.Cacheable)){pa[V].setXSLParam(h,s);pa[V].repaint();}this._attrChanged(pa);this.publish({subject:"changed",o:pa,key:h,value:s});return {strNEWVALUE:s};},onXslParameterAdd:function(n,a){this.onXslParameterEdit(n,a);this.onXslParameterChange();},onXslParameterDelete:function(f){if(f==null||typeof f!="string"){var
bb=((this.getPalette()).getUIObject()).getList();f=bb.getValue();}if(f){var
R=jsx3.ide.getSelected();for(var
vb=0;vb<R.length;vb++)if(R[vb].instanceOf(jsx3.xml.Cacheable)){R[vb].removeXSLParam(f);R[vb].repaint();}this.onXslParameterChange();this._attrChanged(R);this.publish({subject:"changed",o:R,key:f,value:null});}},onXslParameterChange:(jsx3.$F(function(){var
z=((this.getPalette()).getUIObject()).getList();var
w=jsx3.ide.getSelected();var
ib=[];for(var
fa=0;fa<w.length;fa++)if(w[fa].instanceOf(jsx3.xml.Cacheable))ib.push(w[fa]);if(ib.length>0){z.clearXmlData();var
Ka={},Eb={};for(var
fa=0;fa<ib.length;fa++){var
Ma=ib[fa].getXSLParams();for(var Jb in Ma){var
cb=String(Ma[Jb]);if(fa==0)Ka[Jb]=cb;else if(typeof Ka[Jb]=="undefined")Eb[Jb]=true;else if(Ka[Jb]!==cb){Eb[Jb]=true;delete Ka[Jb];}}for(var Jb in Ka)if(typeof Ma[Jb]=="undefined"){Eb[Jb]=true;delete Ka[Jb];}}for(var Jb in Ka)z.insertRecord({value:Ka[Jb],jsxid:Jb,jsxtext:Jb},null,false);for(var Jb in Eb)z.insertRecord({jsxid:Jb,jsxtext:Jb,jsxmulti:1},null,false);z.repaintData();var
Kb=((this.getPalette()).getUIObject()).getNameInput();if(Kb){var
_a=new
jsx3.util.List();for(var
fa=0;fa<ib.length;fa++){var
ab=jsx3.ide.getTemplateForObject("xsl",ib[fa]);if(ab&&_a.indexOf(ab)<0)_a.add(ab);}if(_a.size()==1){(jsx3.IDE.getCache()).setDocument(Kb.getXMLId(),_a.get(0));}else Kb.clearXmlData();}}})).throttled(),allAreCacheable:function(p){var
Db=p.length>0;for(var
R=0;R<p.length&&Db;R++)if(!p[R].instanceOf(jsx3.xml.Cacheable))Db=false;return Db;}});
