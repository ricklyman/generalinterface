jsx3.require("jsx3.gui.Matrix");jsx3.Class.defineClass("jsx3.io.FileDialog",jsx3.gui.Dialog,null,function(q,c){var
ub={A:"jsxtext",B:", ",C:" is not a folder, cannot recover",D:"jsxbutton_goUp",E:"Open",F:"Choose",G:"Save",H:"New Folder",I:"Name of new folder:",J:'Could not create folder "',K:'".',L:"Create",M:"Cancel",N:'"',O:'" is not a valid folder name.',P:'" already exists.',Q:"Error creating folder '",R:"'.",S:'" is not a valid file name.',T:"The file ",U:" already exists. Overwrite?",V:"Overwrite",W:"file_list",X:"path_select",Y:"file_name",Z:"_",_:"K",a:"Open File",aa:"M",b:"Open Files",ba:"G",c:"Choose Folder",d:"Save File",e:"The 'folder' parameter is not an existing directory: ",f:"jsxbutton_newFolder",g:"btn_execute",h:"true",i:"false",j:"jsxapp:/images/icon_7l.gif",k:"jsxapp:/images/icon_29l.gif",l:"jsxapp:/images/icon_7.gif",m:"jsxapp:/images/icon_29.gif",n:"",o:"color:#999999;",p:"jsxid",q:"jsximg",r:"jsxapp:/images/icon_103.gif",s:"jsxapp:/images/icon_102.gif",t:"jsxstyle",u:"padding-left:",v:"px;",w:"jsxsortpath",x:"\\",y:"/",z:"record"};var
nb=jsx3.io.File;var
A=jsx3.gui.Form;var
F=jsx3.gui.Matrix;var
Z=jsx3.net.URI;q.OU=1;q._P=2;q.CHOOSE_FILE=4;q.CHOOSE_FILES=8;q.CHOOSE_FOLDER=16;q.TYPE_OPEN_FILE=q.OU|q.CHOOSE_FILE;q.TYPE_OPEN_FILES=q.OU|q.CHOOSE_FILES;q.TYPE_OPEN_FOLDER=q.OU|q.CHOOSE_FOLDER;q.TYPE_SAVE_FILE=q._P|q.CHOOSE_FILE;q._TITLES={5:ub.a,9:ub.b,17:ub.c,6:ub.d};q.zV={doc:1,zip:1,bin:1,exe:1};c.showFileDialog=function(b,p){this.Tr=b||q.TYPE_OPEN_FILE;var
ob,Ka;if(p){if(p.name)this.setName(p.name);if(p.modal)this.setModal(jsx3.gui.Dialog.MODAL);this.IL=p.title;this.lr=p.okLabel;this.cO=p.fileFilter;ob=p.folder;Ka=p.baseFolder;this._fctchoose=p.onChoose;this._fctcancel=p.onCancel;}if(!(ob&&ob.isDirectory()))throw new
jsx3.Exception(ub.e+ob);this.Ax=ob.getFileSystem();this.LD(ob,Ka);(this.getParent()).paintChild(this);};c.LD=function(b,n){this._current=b;this.nw=n;if(this.nw==null)this.roots=this.Ax.getRoots();if(this.nw!=null&&!this._current.isDescendantOf(this.nw))this.nw=this._current;var
Lb=this.Tr&q.OU;var
G=Lb&&this.Tr&q.CHOOSE_FILES;var
sa=this.Tr!=q.TYPE_OPEN_FILE&&this.Tr!=q.TYPE_OPEN_FILES;(this.JC()).setSelectionModel(G?F.SELECTION_MULTI_ROW:F.SELECTION_ROW);(this.b5()).setEnabled(Lb?A.STATEDISABLED:A.STATEENABLED,true);(this.hU(ub.f)).setEnabled(sa?A.STATEENABLED:A.STATEDISABLED,true);this.J7();var
Bb=this.IL||q._TITLES[this.Tr];this.setDialogTitle(Bb);this.bU();jsx3.sleep(function(){if(this.Tr&q.OU)(this.JC()).focus();else (this.b5()).focus();this.iY();},null,this);};c.setDialogTitle=function(s){(this.getCaptionBar()).setText(s,true);};c.setExecButtonLabel=function(k){(this.hU(ub.g)).setText(k,true);};c.gy=function(){var
ua=this._current;var
v=this.JC();v.clearXmlData();if(!ua.exists()){v.repaintData();return;}var
y=ua.listFiles();for(var
Lb=0;Lb<y.length;Lb++){ua=y[Lb];if(ua.isHidden()||!ua.exists())continue;var
Na=ua.getStat();var
Jb=Na.mtime;var
w=this.cO&&!this.cO(ua)?1:Number(0);var
sa=ua.isDirectory();var
cb={jsxid:(ua.toURI()).toString(),folder:sa?ub.h:ub.i,jsximg:ua.isReadOnly()?sa?ub.j:ub.k:sa?ub.l:ub.m,name:ua.getName(),bytes:Na.size!=null?Na.size:ub.n,size:Na.size!=null?q.r4(Na.size):ub.n,mtime:Jb?Jb.getTime():null,type:ua.getType(),jsxunselectable:w,jsxstyle:w?ub.o:ub.n};v.insertRecord(cb,null,false);}v.repaintData();};if(jsx3.app.Browser.macosx){c.dG=function(){var
x=this._current;var
aa=this.gZ();aa.clearXmlData();var
y=null;var
ra=aa.getXML();while(x!=null&&this.zL(x)){var
db=this.Tz(ra,x);if(y==null)y=db.getAttribute(ub.p);x=x.exists()?x.getParentFile():null;db.setAttribute(ub.q,x!=null?ub.l:ub.r);ra.appendChild(db);}aa.setValue(y);};}else c.dG=function(){var
Ua=this._current;var
W=this.gZ();W.clearXmlData();var
Cb=null;var
Ia=W.getXML();var
hb=[];while(Ua!=null&&this.zL(Ua)){var
H=this.Tz(Ia,Ua);if(Cb==null)Cb=H.getAttribute(ub.p);Ua=Ua.exists()?Ua.getParentFile():null;H.setAttribute(ub.q,Ua!=null?ub.l:ub.s);Ia.appendChild(H);hb.push(H);}for(var
Q=0;Q<hb.length;Q++)hb[Q].setAttribute(ub.t,ub.u+(4+12*(hb.length-Q-1))+ub.v);if(this.roots!=null){var
ca=this._current.getRootDirectory()||this._current;for(var
Q=0;Q<this.roots.length;Q++){var
ra=this.roots[Q];if(!ca.equals(ra)){var
M=this.Tz(Ia,ra);M.setAttribute(ub.q,ub.s);M.setAttribute(ub.t,ub.o);Ia.appendChild(M);}}}W.setValue(Cb);W.setXSLParam(ub.w,ub.p);};c.Tz=function(j,l){var
Bb=null;if(l.isRoot()||!l.exists()){Bb=l.getAbsolutePath();if(Bb.length>1&&(jsx3.util.strEndsWith(Bb,ub.x)||jsx3.util.strEndsWith(Bb,ub.y)))Bb=Bb.substring(0,Bb.length-1);}else Bb=l.getName();var
bb=j.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.z);bb.setAttribute(ub.p,(l.toURI()).toString());bb.setAttribute(ub.A,Bb);return bb;};c.doGoUp=function(){if(this._current==null)this.bU();var
ga=this._current.getParentFile();if(ga!=null&&this.zL(ga)){this._current=ga;this.iY();}else this.beep();};c.doPathSelect=function(r){var
Ua=this.gZ();var
hb=Ua.getRecordNode(r);if(hb!=null){this._current=this.Ax.getFile(new
Z(hb.getAttribute(ub.p)));this.iY();}};c.doFileSelect=function(f){var
cb=this.JC();var
Cb=ub.n;for(var
Ya=(cb.getSelectedNodes()).iterator();Ya.hasNext();){var
wa=(Ya.next()).getAttribute(ub.p);if(wa){var
Db=this.Ax.getFile(new
Z(wa));if(Cb)Cb=Cb+ub.B;Cb=Cb+Db.getName();}}var
ja=this.b5();ja.setValue(Cb,true);this.J7(true);};c.doFileExecute=function(d){this.doExecute();};c.doPathEdit=function(b){var
kb=this.JC();var
ob=kb.getSelectedNodes();if(ob.size()>0)kb.deselectAllRecords();var
Ma=(this.b5()).getValue();if(!Ma||b.deleteKey()||b.backspaceKey())jsx3.sleep(function(){this.J7(true);},null,this);};c.bU=function(){if(this._current==null||!this._current.isDirectory())this._current=jsx3.ide.getSystemDirFile();if(!this._current.isDirectory()){jsx3.ide.LOG.error(this._current+ub.C);this._current=null;}};c.doReload=function(){this.bU();this.iY();};c.iY=function(){this.dG();this.gy();var
K=this.b5();K.setValue(ub.n,true);var
ab=this._current.exists()&&this._current.getParentFile()!=null&&(this.nw==null||!this._current.equals(this.nw));(this.hU(ub.D)).setEnabled(ab,true);this.J7(true);};c.J7=function(a){var
Pa=(this.b5()).getValue();var
_=this.hU(ub.g);var
mb=ub.n,qb=false;switch(this.Tr){case q.TYPE_OPEN_FILE:mb=ub.E;qb=Pa;break;case q.TYPE_OPEN_FILES:mb=ub.E;qb=Pa;break;case q.TYPE_OPEN_FOLDER:mb=Pa?ub.E:ub.F;qb=true;break;case q.TYPE_SAVE_FILE:mb=ub.G;qb=Pa;break;case q.TYPE_SAVE_FOLDER:mb=Pa?ub.E:ub.F;qb=true;break;}if(!a)_.setText(this.lr||mb);_.setEnabled(qb?A.STATEENABLED:A.STATEDISABLED,true);};c.doNewFolder=function(){var
J=this;this.prompt(ub.H,ub.I,function(h,m){if(J.doNfCreate(m))h.doClose();else J.alert(null,ub.J+m+ub.K);},null,ub.L,ub.M,{noTitle:true,width:225,height:90});};c.doNfCreate=function(l){var
Za=this._current.resolve(Z.encode(l));if(!this.a0(Za)){this.alert(null,ub.N+l+ub.O);return false;}else if(Za.exists()){this.alert(null,ub.N+l+ub.P);return false;}else if(this.zL(Za))try{Za.mkdir();var
va=Za.isDirectory();if(va)this.gy();return va;}catch(Kb){jsx3.ide.LOG.warn(ub.Q+l+ub.R,jsx3.NativeError.wrap(Kb));return false;}};c.doCancel=function(){this.doClose();if(this._fctcancel)this._fctcancel.apply();};c.doExecute=function(b){var
Ua=this.JC();var
K=[];for(var
H=(Ua.getSelectedNodes()).iterator();H.hasNext();)K.push(this.Ax.getFile(new
Z((H.next()).getAttribute(ub.p))));if(K.length==0){var
Ha=(this.b5()).getValue();if(Ha){K[0]=this._current.resolve(Z.encode(Ha));}else K[0]=this._current;}var
_a=(this.Tr&q._P)>0;var
qb=null,t=null,aa=false;if(this.Tr==q.TYPE_OPEN_FILE||this.Tr==q.TYPE_SAVE_FILE){if(K[0].isDirectory())qb=K[0];else if(K[0].isFile()||this.Tr==q.TYPE_SAVE_FILE)t=K[0];}else if(this.Tr==q.TYPE_OPEN_FILES){var
U=[];for(var
H=0;H<K.length;H++)if(K[H].isFile())U.push(K[H]);if(U.length>0){t=U;}else if(K.length==1&&K[0].isDirectory()){qb=K[0];}else{Ua.deselectAllRecords();this.doFileSelect();}}else if(this.Tr==q.TYPE_OPEN_FOLDER||this.Tr==q.TYPE_SAVE_FOLDER)if(this._current==K[0])t=K[0];else if(K[0].isDirectory()){qb=K[0];}else{Ua.deselectAllRecords();this.doFileSelect();}if(this.Tr==q.TYPE_SAVE_FILE&&t!=null)if(!this.a0(t)){this.alert(null,ub.N+(this.b5()).getValue()+ub.S+t);return;}if(t!=null&&this.Tr==q.TYPE_SAVE_FILE)aa=!b&&t.exists();K=null;if(qb!=null&&!this.zL(qb)||t!=null&&!this.zL(t)){(this.b5()).setValue(ub.n,true);Ua.deselectAllRecords();return;}if(qb!=null){this._current=qb;this.iY();}else if(t!=null)if(aa){var
kb=this;this.confirm(null,ub.T+t.getName()+ub.U,function(l){l.doClose();kb.doExecute(true);},null,ub.V,ub.M,2,null,null,{noTitle:true,width:225,height:85});}else{this.doClose();if(this._fctchoose)this._fctchoose.apply(null,[t]);}};c.JC=function(){return this.hU(ub.W);};c.gZ=function(){return this.hU(ub.X);};c.b5=function(){return this.hU(ub.Y);};c.zL=function(m){if(this.nw==null)return true;var
O=true;if(jsx3.$A.is(m)){for(var
C=0;O&&C<m.length;C++)O=m[C].equals(this.nw)||m[C].isDescendantOf(this.nw);}else O=m.equals(this.nw)||m.isDescendantOf(this.nw);return O;};c.a0=function(i){if(jsx3.$A.is(i))return true;var
Mb=i.getParentFile();return Mb.exists()&&this._current.equals(Mb);};c.hU=function(e){var
aa=ub.Z+e;if(this[aa]==null)this[aa]=this.getDescendantOfName(e);return this[aa];};q.r4=function(h){if(h<1024)return h+ub.n;h=Math.ceil(h/1024);if(h<1024)return h+ub._;h=h/1024;if(h<1024)return Math.round(h*10)/10+ub.aa;h=Math.ceil(h/1024);return Math.round(h*10)/10+ub.ba;};});
