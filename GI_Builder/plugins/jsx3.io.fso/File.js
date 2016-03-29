jsx3.Class.defineClass("jsx3.io.FSOFileSystem",jsx3.io.FileSystem,null,function(i,b){var
ub={a:"Scripting.FileSystemObject",b:"jsx3.ide",c:"Could not instantiate ActiveX Scripting.FileSystemObject.",d:/^[a-zA-Z]:\\/,e:"string",f:"file:///",g:/\\/g,h:"/",i:"file://",j:"",k:"WScript.Shell",l:"Desktop",m:"MyDocuments",n:":\\"};var
La=jsx3.io.FileSystem;try{i.k7=new
ActiveXObject(ub.a);}catch(Kb){(jsx3.util.Logger.getLogger(ub.b)).error(ub.c,jsx3.NativeError.wrap(Kb));i.k7=null;}i._WINPATH=ub.d;b.getFile=function(d){if(typeof d==ub.e&&d.match(i._WINPATH))d=ub.f+d.replace(ub.g,ub.h);var
xa=jsx3.net.URI.valueOf(d);if(!xa.getScheme())xa=new
jsx3.net.URI(ub.i+((xa.getPath()).indexOf(ub.h)!=0?ub.h:ub.j)+xa.getPath());return new
jsx3.io.FSOFile(this,xa);};b.x7=function(){var
z=new
ActiveXObject(ub.k);var
w=z.specialFolders(ub.l);return (this.getFile(w)).getParentFile();};b.getUserDocuments=function(){var
Sa=new
ActiveXObject(ub.k);var
X=Sa.specialFolders(ub.m);var
Lb=this.getFile(X);return Lb.isDirectory()?Lb:this.x7();};b.getRoots=function(){var
Xa=[];var
Kb=new
Enumerator(i.k7.Drives);for(;!Kb.atEnd();Kb.moveNext()){var
L=Kb.item();Xa.push(this.getFile(L.DriveLetter+ub.n));}return Xa;};b.createTempFile=function(o){var
ka=i.k7.GetTempName();var
wa=(jsx3.app.Browser.getLocation()).resolve(ka);var
ra=this.getFile(wa);if(!ra.exists()){var
sa=i.k7.CreateTextFile(ra.getPath(),true,false);sa.Close();}return ra;};});jsx3.Class.defineClass("jsx3.io.FSOFile",jsx3.io.File,null,function(e,s){var
ub={a:"\\",b:"file",c:"scheme is not 'file': ",d:":",e:"/",f:/\//g,g:"utf-16",h:/\r\n|\r|\n/g,i:"Could not write file ",j:" with character encoding ",k:"",l:".",m:"Failed to write file ",n:" because the content contains unsupported characters.",o:" because the file in not writable.",p:"ADODB.Stream",q:"Failed to read file ",r:": ",s:"Cannot list contents of non-existent file ",t:"Cannot delete non-existent file ",u:"Cannot rename file ",v:" to itself.",w:"Cannot move non-existent file ",x:/\\/g};var
Ea=jsx3.io.File;var
ba=jsx3.io.FSOFileSystem;e.PATH_SEPARATOR=ub.a;e.p7=1;e.L8=2;e.i1=4;s.nM=null;s.init=function(g,k){this.jsxsuper(g,k);if(k!=null){if(k.getScheme()!=ub.b)throw new
jsx3.Exception(ub.c+k);this.nM=k.isAbsolute()&&k.getPath()?(k.getPath()).substring(1):k.getPath();if((jsx3.$S(this.nM)).endsWith(ub.d))this.nM+=ub.e;this.nM=this.nM.replace(ub.f,ub.a);}else this._uri=null;};s.write=function(l,a){if(!a)a={};var
db=a.charset;var
Nb=a.linebreakmode;var
C=a.charsetfailover;var
T=a.quiet;var
ka=jsx3.ide.LOG;var
ra=db!=null&&db.toLowerCase()==ub.g;if(Nb)l=(l.split(ub.h)).join(Ea.LINE_SEP[Nb]);if(db&&!ra)try{this.l6(l,db);return true;}catch(Kb){if(!T)ka.error(ub.i+this+(db?ub.j+db:ub.k)+ub.l,jsx3.NativeError.wrap(Kb));if(!C)return false;}var
y=null;try{y=ba.k7.CreateTextFile(this.getPath(),true,ra);y.Write(l);y.Close();return true;}catch(Kb){if(y!=null)y.close();if(!T)if((Kb.number&65535)==5){ka.error(ub.m+this+ub.n,jsx3.NativeError.wrap(Kb));}else if((Kb.number&65535)==70){ka.error(ub.m+this+ub.o,jsx3.NativeError.wrap(Kb));}else ka.error(ub.m+this+ub.l,jsx3.NativeError.wrap(Kb));}return false;};s.l6=function(p,c){var
E=new
ActiveXObject(ub.p);E.Mode=3;E.Type=2;E.Open();E.CharSet=c;E.WriteText(p);E.SaveToFile(this.getAbsolutePath(),this.exists()?2:1);E.Close();};s.read=function(){try{if(this.isFile()&&(this.getStat()).size==0)return ub.k;var
M=this.MU();var
lb=M.OpenAsTextStream(1,-2);var
ea=lb.ReadAll();lb.Close();return ea;}catch(Kb){jsx3.ide.LOG.warn(ub.q+this+ub.r+jsx3.NativeError.wrap(Kb));}return null;};s.isDirectory=function(){var
_=this.MU();return _!=null&&(_.Attributes&24)>0;};s.isFile=function(){var
Ib=this.MU();return Ib!=null&&(Ib.Attributes&24)==0;};s.getParentPath=function(){var
vb=this.getAbsolutePath();var
Ha=vb.lastIndexOf(ub.a);if(Ha==vb.length-1){vb=vb.substring(0,vb.length-1);Ha=vb.lastIndexOf(ub.a);}if(Ha<0)return null;return vb.substring(0,Ha);};s.listFiles=function(){var
Ja=jsx3.$A();if(this.isDirectory()){var
S=this.MU();var
ka=new
Enumerator(S.SubFolders);for(;!ka.atEnd();ka.moveNext()){var
Ib=e.Eu(this.getFileSystem(),ka.item());Ja.push(Ib);}ka=new
Enumerator(S.Files);for(;!ka.atEnd();ka.moveNext()){var
Ib=e.Eu(this.getFileSystem(),ka.item());Ja.push(Ib);}}else throw new
jsx3.Exception(ub.s+this+ub.l);return Ja;};s.mkdir=function(){ba.k7.CreateFolder(this.getPath());};s.deleteFile=function(){var
jb=this.MU();if(jb!=null){jb.Delete();}else throw new
jsx3.Exception(ub.t+this+ub.l);};s.getPath=function(){if(this.nM==null&&this.sP!=null)this.nM=this.sP.Path;return this.nM;};s.getAbsolutePath=function(){if(this.NB==null){var
Qa=this.MU();if(Qa!=null){this.NB=Qa.Path;}else this.NB=ba.k7.GetAbsolutePathName(this.getPath());}return this.NB;};s.getName=function(){return ba.k7.GetFileName(this.getAbsolutePath());};s.renameTo=function(f){if(this.equals(f))throw new
jsx3.Exception(ub.u+this+ub.v);var
zb=this.MU();if(zb!=null){if(f.isFile())f.deleteFile();zb.Move(f.getPath());}else throw new
jsx3.Exception(ub.w+this+ub.l);};s.isHidden=function(){var
nb=this.MU();return nb!=null?(nb.Attributes&e.L8)>0:false;};s.isReadOnly=function(){var
xa=this.MU();return xa!=null?(xa.Attributes&e.p7)>0:false;};s.setReadOnly=function(d){var
J=this.MU();if(J!=null)if(d)J.Attributes|=e.p7;else if((J.Attributes&e.p7)>0)J.Attributes-=e.p7;};s.isRoot=function(){var
T=this.MU();return T!=null?T.IsRootFolder:false;};s.getType=function(){var
va=this.MU();return va!=null?va.Type:null;};s.getStat=function(){var
Wa=this.MU();if(Wa!=null){var
aa={mtime:new
Date(Wa.DateLastModified)};if(this.isFile())aa.size=Wa.Size;return aa;}else return null;};s.MU=function(){if(this.sP!=null)return this.sP;if(this.nM==null)return null;var
yb=this.getPath();if(ba.k7.FileExists(yb))this.sP=ba.k7.GetFile(yb);else if(ba.k7.FolderExists(yb))this.sP=ba.k7.GetFolder(yb);else this.sP=null;return this.sP;};s.toURI=function(){var
Za=this._uri;if(Za==null||!(jsx3.$S(Za.getPath())).endsWith(ub.e)&&this.isDirectory()){var
Ib=(this.getAbsolutePath()).replace(ub.x,ub.e)+(this.isDirectory()?ub.e:ub.k);if(Ib.substring(0,1)!=ub.e)Ib=ub.e+Ib;if(Za){this._uri=jsx3.net.URI.fromParts(Za.getScheme(),Za.getUserInfo(),Za.getHost(),Za.getPort(),Ib,Za.getQuery(),Za.getFragment());}else this._uri=jsx3.net.URI.fromParts(ub.b,null,null,null,Ib,null,null);}return this._uri;};s.getRootDirectory=function(){var
S=this.MU();if(S!=null){while(S.ParentFolder!=null)S=S.ParentFolder;return e.Eu(this.getFileSystem(),S);}else{var
ma=this;while(!ma.exists()){var
lb=ma.getParentPath();if(!lb||ma.getPath()==lb)return null;ma=ba.getFile(lb);}if(ma.exists())return ma.getRootDirectory();}return null;};e.Eu=function(n,m){var
M=new
e(n);M.sP=m;return M;};});
