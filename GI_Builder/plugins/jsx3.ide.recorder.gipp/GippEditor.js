jsx3.Class.defineClass("jsx3.ide.gipp.Editor",jsx3.ide.recorder.Editor,null,function(q,r){var
ub={A:"Save Before Launching?",B:"Save file before launching it in GIPP?",C:"Save",D:"Continue",E:"jsx3.ide.testing",F:"You must configure the GIPP plug-in in the IDE Settings dialog before launching this file in GIPP.",G:"You must save this file before launching it in GIPP.",a:"/* BEGIN GIPP RECORDER */",b:"/* END GIPP RECORDER */",c:"testcasedelim",d:"Launch in GIPP",e:"The file could not be parsed.",f:"// Do NOT edit the text in this file from the BEGIN to the END comments.\n// Doing so will prevent the file from being read by General Interface Builder.\n\n",g:"\n\n// Insert manual tests here using gi.test.gipp.recorder.insertBefore() and insertAfter().\n\n// Do not modify the following line.\ngi.test.gipp.recorder.playbackTests(recorderTests);",h:"\n\n",i:"saved",j:"var recorderTests = [\n  ",k:"label",l:"target",m:"action",n:"value",o:"{label:",p:", target:",q:", action:",r:", value:",s:"}",t:",\n  ",u:"\n];",v:"; recorderTests;",w:"Error loading file: ",x:"jsxwait_",y:"jsxclass",z:""};var
H=jsx3.gui;q.START=ub.a;q.END=ub.b;q._DIVCLASS=ub.c;r.render=function(i){var
aa=this.jsxsuper(i);(aa.getPlayerBtn()).setText(ub.d,true);aa.setGIPP(true);return aa;};r.loadFromFile=function(){var
K=this.getOpenFile();this._error=false;if(K&&K.isFile()){var
wa=K.read();var
sb=wa.indexOf(q.START);var
Sa=wa.indexOf(q.END);if(sb>=0&&Sa>=0&&Sa>sb){var
O=wa.substring(sb+q.START.length,Sa);this.UW(O);this._prefix=wa.substring(0,sb);this._suffix=wa.substring(Sa+q.END.length);}else{((this.getPlugIn()).getServer()).alert(null,ub.e);this._error=true;}}else{this._prefix=ub.f;this._suffix=ub.g;}};r.save=function(l){if(this._error){return false;}else{var
xb=this._prefix+q.START+ub.h+this.j9()+ub.h+q.END+this._suffix;if(jsx3.ide.writeUserFile(l||this.getOpenFile(),xb)){this.setDirty(false);this.publish({subject:ub.i});return true;}else return false;}};r.j9=function(){var
xa=ub.j;for(var
Hb=((this.Kd()).getXML()).getChildIterator();Hb.hasNext();){var
db=Hb.next();var
F=jsx3.$O.json(db.getAttribute(ub.k));var
U=jsx3.$O.json(db.getAttribute(ub.l));var
ga=jsx3.$O.json(db.getAttribute(ub.m));var
_=jsx3.$O.json(db.getAttribute(ub.n));xa=xa+(ub.o+F+ub.p+U+ub.q+ga+ub.r+_+ub.s);if(Hb.hasNext())xa=xa+ub.t;}xa=xa+ub.u;return xa;};r.UW=function(d){try{var
Ea=jsx3.eval(d+ub.v);var
la=this.Kd();var
nb=jsx3.xml.CDF.Document.newDocument();for(var
P=0;P<Ea.length;P++){var
fa=Ea[P];fa.jsxid=jsx3.xml.CDF.getKey();if(this.Ay(fa))fa.jsxclass=q._DIVCLASS;nb.insertRecord(fa);}la.setSourceXML(nb);la.repaint();}catch(Kb){var
Za=jsx3.NativeError.wrap(Kb);jsx3.ide.LOG.error(ub.w+Za,Za);}};r.getPlugIn=function(){return jsx3.IDE.GippEditorPlugin;};r.Ay=function(e){return e.label||e.action&&e.action.indexOf(ub.x)==0;};r.onInsertRecord=function(n){if(n&&this.Ay(n))n.jsxclass=q._DIVCLASS;this.jsxsuper(n);};r.onEditRecord=function(o,n){if(n.getPath()==ub.k||n.getPath()==ub.m){var
V=this.Kd();var
w=(this.Kd()).getRecord(o);if(this.Ay(w)){V.insertRecordProperty(o,ub.y,q._DIVCLASS,true);}else V.insertRecordProperty(o,ub.y,ub.z,true);}this.setDirty(true);};r.onLaunchPlayer=function(l){var
Hb=this.getOpenFile();if(Hb&&Hb.isFile()){if(!l&&this.isDirty()){jsx3.IDE.confirm(ub.A,ub.B,(jsx3.$F(function(p){p.doClose();this.save();this.onLaunchPlayer(true);})).bind(this),(jsx3.$F(function(m){m.doClose();this.onLaunchPlayer(true);})).bind(this),ub.C,ub.D,2);}else{var
db=((this.getPlugIn()).getEngine()).getPlugIn(ub.E);if(db&&db.isGIPPConfigured()){db.launchGIPP((jsx3.ide.PROJECT.getDirectory()).relativePathTo(Hb),50);}else ((this.getPlugIn()).getServer()).alert(null,ub.F);}}else ((this.getPlugIn()).getServer()).alert(null,ub.G);};});
