jsx3.Class.defineClass("jsx3.io.XPCOMFileSystem",jsx3.io.FileSystem,null,function(e,b){var
ub={a:"UniversalXPConnect",b:"@mozilla.org/file/directory_service;1",c:"nsIProperties",d:"@mozilla.org/rdf/rdf-service;1",e:/^[a-zA-Z]:\\/,f:"string",g:"file:///",h:/\\/g,i:"/",j:"file://",k:"",l:"Desk",m:"nsIFile",n:"Documents",o:"My Documents",p:"rdf:files",q:"NC:FilesRoot",r:"http://home.netscape.com/NC-rdf#child",s:"Error determining file system roots: ",t:"TmpD"};var
Ab=netscape.security.PrivilegeManager.enablePrivilege;e.Xt=ub.a;try{Ab(e.Xt);e.xz={};e.xz.IU=Components.classes[ub.b].getService(Components.interfaces[ub.c]);e.xz.x3=Components.classes[ub.d].getService(Components.interfaces.nsIRDFService);}catch(Kb){jsx3.ide.LOG.fatal(jsx3.NativeError.wrap(Kb));}e._WINPATH=ub.e;b.getFile=function(d){if(typeof d==ub.f&&d.match(e._WINPATH))d=ub.g+d.replace(ub.h,ub.i);var
L=jsx3.net.URI.valueOf(d);if(!L.getScheme())L=new
jsx3.net.URI(ub.j+((L.getPath()).indexOf(ub.i)!=0?ub.i:ub.k)+L.getPath());return new
jsx3.io.XPCOMFile(this,L);};b._getHome=function(){Ab(e.Xt);var
Ra=e.xz.IU.get(ub.l,Components.interfaces[ub.m]);return Ra!=null?jsx3.io.XPCOMFile.Eu(this,Ra.parent):null;};b.getUserDocuments=function(){var
ba=this._getHome();var
F=ba.listFiles();for(var
ia=0;ia<F.length;ia++){var
Ca=F[ia];if(Ca.isDirectory())if(Ca.getName()==ub.n||Ca.getName()==ub.o)return Ca;}return ba;};b.getRoots=function(){try{Ab(e.Xt);var
Lb=e.xz.x3.GetDataSource(ub.p);var
L=e.xz.x3.GetResource(ub.q);var
x=e.xz.x3.GetResource(ub.r);var
Z=Lb.GetTargets(L,x,true);var
pa=[];while(Z.hasMoreElements()){var
gb=Z.getNext();if(gb instanceof Components.interfaces.nsIRDFResource){var
rb=this.getFile(new
jsx3.net.URI(gb.Value));pa.push(rb);}}return pa;}catch(ab){jsx3.ide.LOG.warn(ub.s+jsx3.NativeError.wrap(ab));return [];}};b.createTempFile=function(p){Ab(e.Xt);var
sa=493|jsx3.io.XPCOMFile.d6;var
N=e.xz.IU.get(ub.t,Components.interfaces[ub.m]);N.append(p);N.createUnique(0,sa);return jsx3.io.XPCOMFile.Eu(this,N);};});jsx3.Class.defineClass("jsx3.io.XPCOMFile",jsx3.io.File,null,function(m,c){var
ub={A:"Failed to read file ",B:": ",C:"Error creating directory ",D:": file already exists.",E:": parent directory does not exist.",F:": bad path.",G:"Error deleting file ",H:": this file does not exist.",I:":",J:"\\\\\\",K:"Error renaming file ",L:": destination directory does not exist.",M:"Folder",N:" File",O:/\\/g,a:"UniversalXPConnect",b:"@mozilla.org/file/local;1",c:"nsILocalFile",d:"initWithPath",e:"@mozilla.org/network/standard-url;1",f:"nsIURL",g:"@mozilla.org/scriptableinputstream;1",h:"nsIScriptableInputStream",i:"@mozilla.org/network/protocol;1?name=file",j:"nsIFileProtocolHandler",k:"@mozilla.org/network/io-service;1",l:"nsIIOService",m:"Error instantiating file system access.",n:"\\",o:"/",p:"file",q:"scheme is not 'file': ",r:/\r\n|\r|\n/g,s:"@mozilla.org/network/file-output-stream;1",t:"nsIFileOutputStream",u:"@mozilla.org/intl/converter-output-stream;1",v:"Could not write file ",w:" with character encoding ",x:"",y:".",z:"Failed to write to file "};var
Ba=jsx3.io.File;m.Tp=false;var
M=netscape.security.PrivilegeManager.enablePrivilege;m.Xt=ub.a;try{M(m.Xt);m.xz={};m.xz._3=new
Components.Constructor(ub.b,ub.c,ub.d);m.xz.Np=new
Components.Constructor(ub.e,ub.f);m.xz.Zw=new
Components.Constructor(ub.g,ub.h);m.xz.q6=Components.classes[ub.i].createInstance(Components.interfaces[ub.j]);m.xz.bv=Components.classes[ub.k].getService(Components.interfaces[ub.l]);m.Tp=true;}catch(Kb){jsx3.ide.LOG.error(ub.m,jsx3.NativeError.wrap(Kb));}m.isLoaded=function(){return m.Tp;};m.PATH_SEPARATOR=jsx3.app.Browser.getSystem()==jsx3.app.Browser.WIN32?ub.n:ub.o;m.FA=jsx3.app.Browser.getSystem()==jsx3.app.Browser.WIN32?3949:3967;m.d6=jsx3.app.Browser.getSystem()==jsx3.app.Browser.WIN32?146:128;c.nM=null;c.Z2=null;c.init=function(i,l){this.jsxsuper(i,l);M(m.Xt);if(l.getScheme()!=ub.p)throw new
jsx3.Exception(ub.q+l);try{this.Z2=m.xz.q6.getFileFromURLSpec(l.toString());this.nM=this.Z2.path;}catch(Kb){this.Z2=null;this.nM=l.getPath();}};c.write=function(l,a){if(!this.Z2)return false;if(!a)a={};var
sa=a.charset;var
Pa=a.linebreakmode;var
ib=a.charsetfailover;if(Pa)l=(l.split(ub.r)).join(Ba.LINE_SEP[Pa]);M(m.Xt);var
tb=493|m.d6;try{if(!this.Z2.exists())this.Z2.create(0,tb);var
Ha=Components.classes[ub.s].createInstance(Components.interfaces[ub.t]);Ha.init(this.Z2,32|2,tb,null);if(sa){var
ob=Components.classes[ub.u].createInstance(Components.interfaces.nsIConverterOutputStream);ob.init(Ha,sa,0,"?".charAt(0));ob.writeString(l);ob.close();}else{Ha.write(l,l.length);Ha.flush();}Ha.close();this.Z2=m.xz.q6.getFileFromURLSpec((this.toURI()).toString());return true;}catch(Kb){if(sa&&ib){jsx3.ide.LOG.error(ub.v+this+(sa?ub.w+sa:ub.x)+ub.y,jsx3.NativeError.wrap(Kb));return this.write(arguments[0],{linebreakmode:Pa});}else{jsx3.ide.LOG.error(ub.z+this+ub.y,jsx3.NativeError.wrap(Kb));return false;}}};c.read=function(){if(!this.Z2)return null;M(m.Xt);try{var
S=this.Z2.fileSize;var
Ab=m.xz.bv.newFileURI(this.Z2);var
C=m.xz.bv.newChannelFromURI(Ab);var
Y=new
m.xz.Zw();Y.init(C.open());var
Ta=Y.read(S);Y.close();return Ta;}catch(Kb){throw new
jsx3.Exception(ub.A+this+ub.B+Kb);}};c.isDirectory=function(){M(m.Xt);return this.Z2!=null&&this.Z2.exists()&&this.Z2.isDirectory();};c.isFile=function(){M(m.Xt);return this.Z2!=null&&this.Z2.exists()&&this.Z2.isFile();};c.getParentFile=function(){M(m.Xt);if(this.Z2){try{var
yb=this.Z2.parent;}catch(Kb){return null;}if(yb!=null&&!yb.equals(this.Z2))return m.Eu(this._fs,yb);}return null;};c.listFiles=function(){M(m.Xt);var
ja=jsx3.$A();if(this.Z2){var
z=this.Z2.directoryEntries;while(z.hasMoreElements()){var
va=(z.getNext()).QueryInterface(Components.interfaces[ub.c]);ja.push(m.Eu(this._fs,va));}}return ja;};c.mkdir=function(){M(m.Xt);if(this.Z2){if(this.Z2.parent&&this.Z2.parent.exists()&&this.Z2.parent.isDirectory()){if(this.Z2.exists()){if(!this.Z2.isDirectory())throw new
jsx3.Exception(ub.C+this+ub.D);}else this.Z2.create(1,493);}else throw new
jsx3.Exception(ub.C+this+ub.E);}else throw new
jsx3.Exception(ub.C+this+ub.F);};c.mkdirs=function(){M(m.Xt);if(this.Z2){if(!this.Z2.exists()||!this.Z2.isDirectory())this.Z2.create(1,493);}else throw new
jsx3.Exception(ub.C+this+ub.F);};c.deleteFile=function(){M(m.Xt);if(!(this.Z2&&this.Z2.exists()))throw new
jsx3.Exception(ub.G+this+ub.H);if(this.isDirectory()){this.Z2.remove(true);}else this.Z2.remove(false);};c.getAbsolutePath=function(){if(this.NB==null){M(m.Xt);try{var
ba=this.nM;if(jsx3.app.Browser.WIN32)if(this.nM.length<=3&&this.nM.charAt(1)==ub.I)ba=ba+ub.J;var
Va=new
m.xz._3(ba);Va.normalize();this.NB=Va.path;}catch(Kb){this.NB=this.nM;}}return this.NB;};c.getName=function(){M(m.Xt);return this.Z2&&this.Z2.leafName;};c.exists=function(){M(m.Xt);if(this.Z2!=null&&this.Z2.exists())if(this.Z2.isDirectory()){try{var
Z=this.Z2.directoryEntries.length;return true;}catch(Kb){this.Z2=null;}}else return true;return false;};c.renameTo=function(a){M(m.Xt);var
z=a.Z2;if(!(z&&this.Z2&&this.Z2.exists()))throw new
jsx3.Exception(ub.K+this+ub.H);var
ya=z.parent;var
Bb=z.leafName;if(!(ya.exists()&&ya.isDirectory()))throw new
jsx3.Exception(ub.K+this+ub.L);if(z.exists())a.deleteFile();this.Z2.moveTo(ya,Bb);};c.isHidden=function(){M(m.Xt);return this.Z2&&this.Z2.exists()&&this.Z2.isHidden();};c.isReadOnly=function(){M(m.Xt);return this.Z2&&this.Z2.exists()&&!this.Z2.isWritable();};c.setReadOnly=function(e){if(this.exists()){M(m.Xt);if(e){this.Z2.permissions&=m.FA;}else this.Z2.permissions|=m.d6;}};c.getType=function(){return this.isDirectory()?ub.M:(this.getExtension()).toUpperCase()+ub.N;};c.getStat=function(){M(m.Xt);var
Na={mtime:null,size:null};if(this.Z2){Na.mtime=new
Date(this.Z2.lastModifiedTime);if(this.isFile())Na.size=this.Z2.fileSize;}return Na;};c.toURI=function(){var
nb=this._uri;if(nb==null||!(jsx3.$S(nb.getPath())).endsWith(ub.o)&&this.isDirectory()){var
C=(this.getAbsolutePath()).replace(ub.O,ub.o)+(this.isDirectory()?ub.o:ub.x);if(C.substring(0,1)!=ub.o)C=ub.o+C;if(nb){this._uri=jsx3.net.URI.fromParts(nb.getScheme(),nb.getUserInfo(),nb.getHost(),nb.getPort(),C,nb.getQuery(),nb.getFragment());}else this._uri=jsx3.net.URI.fromParts(ub.p,null,null,null,C,null,null);}return this._uri;};m.Eu=function(n,i){var
aa=m.jsxclass.bless();aa._fs=n;aa.Z2=i;aa.nM=i.path;return aa;};});
