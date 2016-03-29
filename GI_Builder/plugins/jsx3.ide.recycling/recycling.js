(jsx3.$O(this)).extend({getUI:function(){return (this.getServer()).getJSXByName("jsx_ide_recycling_bin");},doToggleRecycleBin:function(){var
Lb=(this.getServer()).getRootBlock();var
cb=this.getUI();var
S=jsx3.ide.getIDESettings();if(cb==null){cb=this.loadRsrcComponent("ui",Lb,false);var
u=S.get("recyclebin");if(u)cb.setDimensions(u.left,u.top,u.width,u.height);Lb.paintChild(cb);cb.focus();}else if(cb.isFront())cb.doClose();else cb.focus();},doRecycleRestore:function(){var
ub={a:"restored",b:"Restore Parent",c:"The parent of the restored object(s) is a top-level object in the recycle bin. Restore the parent as well?",d:"Restore",e:"Don't Restore",f:"Restore Ancestor",g:"The parent of the restored object(s) is a nested object in the recycle bin. Restore the top-level ancestor as well?",h:"Object(s) restored from recycling bin to component root because the previous parent was not found.",i:"Could not find recycled object with id '",j:"'"};var
Ea=(this.getUI()).getTree();var
X=Ea.getValue();var
K=jsx3.ide.getRecycleBin();var
Za=K.findDescendants(function(q){return q.getId()==X;},false,false,true);if(Za){var
L=false,G=false;var
sa=K.findDescendants(function(l){return l.getId()==Za._jsxformerparentid;},false,false,true);if(sa){L=true;}else{sa=K.findDescendants(function(o){return o.getId()==Za._jsxformerparentid;});if(sa){G=true;}else sa=jsx3.GO(Za._jsxformerparentid);}if(sa){if(Za._jsxisfolder){sa.adoptChildrenFrom(Za,null,!G,true);K.removeChild(Za);}else sa.adoptChild(Za,!G,true);this.publish({subject:ub.a,o:Za});this.fillRecycleBinTree();if(L){jsx3.IDE.confirm(ub.b,ub.c,(jsx3.$F(function(f){Ea.setValue(sa.getId());this.doRecycleRestore();f.doClose();})).bind(this),null,ub.d,ub.e,1);}else if(G){var
pb=sa;while(pb.getParent()!=K)pb=pb.getParent();jsx3.IDE.confirm(ub.f,ub.g,(jsx3.$F(function(f){Ea.setValue(pb.getId());this.doRecycleRestore();f.doClose();})).bind(this),null,ub.d,ub.e,1);}}else{sa=(jsx3.ide.getActiveServer()).getBodyBlock();if(Za._jsxisfolder){sa.adoptChildrenFrom(Za,null,true,true);K.removeChild(Za);}else sa.adoptChild(Za,true,true);this.publish({subject:ub.a,o:Za});this.fillRecycleBinTree();jsx3.ide.LOG.info(ub.h);}}else jsx3.IDE.alert(null,ub.i+X+ub.j);},emptyRecycleBin:function(l,d){var
ub={a:"emptied",b:"Confirm",c:"Are you sure you want to empty the recycle bin. Deleted items cannot be recovered.",d:"Empty",e:"Cancel"};var
Ga=(jsx3.$F(function(){var
J=jsx3.ide.getRecycleBin(l);(J.getParent()).removeChild(J);this.publish({subject:ub.a});this.fillRecycleBinTree();})).bind(this);if(d){Ga();}else jsx3.IDE.confirm(ub.b,ub.c,function(p){p.doClose();Ga();},null,ub.d,ub.e,2);},doSaveRecycleBinState:function(o){var
Xa=jsx3.ide.getIDESettings();var
Va={left:o.getLeft(),top:o.getTop(),width:o.getWidth(),height:o.getHeight()};Xa.set("recyclebin",Va);},fillRecycleBinTree:function(){var
pb=(this.getUI()).getTree();var
Hb=jsx3.ide.getRecycleBin();var
pa=pb.getValue();pb.clearXmlData();var
mb={jsxid:"_jsxbin",jsxtext:"Recycle Bin",jsxopen:"1",jsximg:"jsxapp:/images/icon_42.gif",jsxunselectable:"1"};pb.insertRecord(mb,null,false);if(Hb!=null){var
M=Hb.getChildren();for(var
La=0;La<M.length;La++){var
Mb=M[La];var
zb=null,wb=null;if(Mb._jsxisfolder){var
Da=jsx3.GO(Mb._jsxformerparentid);var
I=(Mb.getChildren()).length;zb=(I==1?"1 Descendant":I+" Descendants")+" of ";zb=zb+(Da!=null?Da.getName()+" : "+(Da.getClass()).getName():Mb._jsxformerparentid);wb="jsxapp:/images/icon_7.gif";}else{zb=Mb.getName()+" : "+(Mb.getClass()).getName();wb="jsxapp:/images/icon_46.gif";}var
nb={jsxid:Mb.getId(),jsxtext:zb,jsximg:wb,mayrestore:"1",isfolder:Mb._jsxisfolder?1:null};pb.insertRecord(nb,"_jsxbin",false);this._fillRecycleBinTreeRecurse(pb,nb.jsxid,Mb);}}pb.setValue(pa);pb.repaint();return Hb!=null;},_fillRecycleBinTreeRecurse:function(c,q,o){var
Ua=o.getChildren();for(var
Ib=0;Ib<Ua.length;Ib++){var
Na=Ua[Ib];var
oa={jsxid:Na.getId(),jsxtext:Na.getName()+" : "+(Na.getClass()).getName(),jsximg:"jsxapp:/images/icon_89.gif",jsxunselectable:"1"};c.insertRecord(oa,q,false);this._fillRecycleBinTreeRecurse(c,oa.jsxid,Na);}}});
