(jsx3.$O(this)).extend({openApiHelp:function(f){var
ub={a:"apihelp",b:"aswindow",c:"doOpenApiHelp window:",d:"api_help",e:"as_window"};var
t=jsx3.ide.getIDESettings();if(f==null){f=t.get(ub.a,ub.b);if(f==null)f=false;}else t.set(ub.a,ub.b,f);(this.getLog()).debug(ub.c+f);var
ma=(this.getServer()).getAppWindow(ub.d);var
V=false;if(f){if(ma==null){((this.getResource(ub.e)).load()).when((jsx3.$F(function(){ma=(this.getServer()).loadAppWindow((this.getResource(ub.e)).getData(),this);ma.getPlugIn=(jsx3.$F(function(){return this;})).bind(this);ma.subscribe(jsx3.gui.Window.DID_OPEN,this,this._onWindowOpen);ma.subscribe(jsx3.gui.Window.WILL_CLOSE,this,this._saveWindowState);ma.subscribe(jsx3.gui.Window.DID_FOCUS,this,this._saveWindowState);this._openWindow2(ma,f);})).bind(this));return;}else this._openWindow2(ma,f);}else this._openWindow2(ma,f);},_openWindow2:function(q,a){var
ub={a:"jsx_ide_api_dialog",b:"switching to dialog: ",c:"doOpenApiHelp loading dialog component",d:"as_dialog"};var
M=false;if(a&&q){if(q.isOpen())q.focus();else q.open();M=q.isOpen();}if(!M){var
Db=((this.getServer()).getRootBlock()).getChild(ub.a);(this.getLog()).debug(ub.b+Db);if(Db==null){(this.getLog()).debug(ub.c);((this.getResource(ub.d)).load()).when((jsx3.$F(function(){Db=this.loadRsrcComponent(ub.d,(this.getServer()).getRootBlock());this._openDialog2(Db,q);})).bind(this));}else this._openDialog2(Db,q);}},_openDialog2:function(j,q){var
ub={a:"doOpenApiHelp adopting API help content",b:"doOpenApiHelp loading API help content component",c:"ui"};if(!j.getHelpBlock())if(q&&q.getHelpBlock()){(this.getLog()).debug(ub.a);(j.getHelpBlockParent()).adoptChild(q.getHelpBlock());}else{(this.getLog()).debug(ub.b);jsx3.sleep(function(){this.loadRsrcComponent(ub.c,j.getHelpBlockParent());},null,this);}if(q&&q.isOpen())q.close();jsx3.sleep(function(){j.focus();});},_onWindowOpen:function(f){(this.getLog()).debug("_onWindowOpen "+f.target.getName());var
N=f.target;if(N.getHelpBlock()==null){var
x=((this.getServer()).getRootBlock()).getChild("jsx_ide_api_dialog");if(x&&x.getHelpBlock()){(this.getLog()).debug("_onWindowOpen adopting");(N.getHelpBlockParent()).adoptChild(x.getHelpBlock());}else{(this.getLog()).debug("_onWindowOpen loading");this.loadRsrcComponent("ui",N.getHelpBlockParent());}if(x)(x.getParent()).removeChild(x);}var
Ya=jsx3.ide.getIDESettings();var
La=Ya.get("apihelp","wposition");if(La&&La.left){N.moveTo(La.left,La.top);N.setWidth(La.width);N.setHeight(La.height);N.constrainToScreen();}},_saveWindowState:function(s){var
I=s.target;if(I.isOpen()){var
y=jsx3.ide.getIDESettings();var
Ca={left:I.getOffsetLeft(),top:I.getOffsetTop(),width:I.getWidth(),height:I.getHeight()};y.set("apihelp","wposition",Ca);}},onApiHelpMenu:function(m){var
nb=jsx3.ide.getIDESettings();var
Kb=nb.get("apihelp","settings");if(Kb)for(var
qb=(m.getXML()).selectNodeIterator("/data/record");qb.hasNext();){var
u=(qb.next()).getAttribute("jsxid");if(Kb[u]!=null)m.selectItem(u,Kb[u]);}},onApiHelpSettingsSet:function(i,o){var
kb=i.isItemSelected(o);var
da=jsx3.ide.getIDESettings();da.set("apihelp","settings",o,!kb);var
ia=i;while(ia&&ia.getHelpBlock==null)ia=ia.getParent();if(ia)(ia.getHelpBlock()).onSettingsChange(o,!kb);}});
