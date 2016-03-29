(jsx3.$O(this)).extend({_resolvers:{},_getSystemLibraries:function(){var
ub={a:"jsxapp:/images/icon_7.gif",b:"components",c:"Components",d:"1",e:"system",f:"System",g:"a",h:"prototypes",i:"addins",j:"Addins",k:"b",l:"addins/",m:"folder",n:"jsxid",o:"other",p:"Other",q:"d",r:"other/",s:/_/g,t:" "};var
B=this.resolveURI(ub.a);var
v=jsx3.xml.CDF.Document.newDocument();var
Va=v.insertRecord({jsxid:ub.b,jsxtext:ub.c,jsxopen:ub.d});var
kb=null;kb=v.insertRecord({jsxid:ub.e,jsxtext:ub.f,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.g},ub.b);this._doPLDirectoryRead(v,kb,jsx3.ide.getBuilderRelativeFile(ub.h),this.getServer());this._resolvers[ub.e]=this.getServer();var
Bb=jsx3.System.getAddins();kb=v.insertRecord({jsxid:ub.i,jsxtext:ub.j,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.k},ub.b);(jsx3.$A(Bb)).each((jsx3.$F(function(o){var
L=jsx3.ide.getSystemRelativeFile(o.resolveURI(jsx3.app.AddIn.PROTOTYPES_DIR));if(L.isDirectory()){var
cb=v.insertRecord({jsxid:ub.l+o.getKey(),jsxtext:o.getName(),type:ub.m,jsxunselectable:ub.d,syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(L),jsximg:B,jsxlazy:ub.d},ub.i);this._resolvers[cb.getAttribute(ub.n)]=o;}})).bind(this));if((kb.getChildNodes()).size()==0)(kb.getParent()).removeChild(kb);if(this._otherFolders){kb=v.insertRecord({jsxid:ub.o,jsxtext:ub.p,type:ub.o,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.q},ub.b);var
z=0;this._otherFolders.each((jsx3.$F(function(g){var
Ia=g.path,Db=g.resolver,Ua=g.label;var
C=jsx3.ide.getSystemRelativeFile(Db.resolveURI(Ia));if(C.isDirectory()){var
ia=v.insertRecord({jsxid:ub.r+
++z,jsxtext:Ua||(C.getName()).replace(ub.s,ub.t),jsxunselectable:ub.d,syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(C),jsximg:B,jsxlazy:ub.d},ub.o);this._resolvers[ia.getAttribute(ub.n)]=Db;}})).bind(this));}return v;},_doPLDirectoryRead:function(i,q,n,f){var
ha=jsx3.ide.getSystemDirFile();var
E=this.resolveURI("jsxapp:/images/icon_46.gif");if(n.isDirectory()){var
Ta=n.listFiles();for(var
jb=0;jb<Ta.length;jb++){var
Na=Ta[jb];if(jsx3.ide.isFileToIgnore(Na))continue;var
_a=Na.getName();if(Na.isDirectory()){i.insertRecord({jsxid:q.getAttribute("jsxid")+"/"+_a,jsxtext:_a.replace(/_/g," "),type:"folder",jsxlazy:"1",jsximg:q.getAttribute("jsximg"),sorton:"a_"+(_a.charAt(0)=="~"?"z"+_a:_a),syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(Na)},q.getAttribute("jsxid"));}else if(Na.getExtension()=="xml"){var
D=i.insertRecord({jsxid:q.getAttribute("jsxid")+"/"+_a,jsxtext:_a,type:"component",path:f!=null&&!(this.getServer()).equals(f)?f.relativizeURI(ha.relativePathTo(Na)):jsx3.ide.SERVER.relativizeURI(ha.relativePathTo(Na),true),jsximg:E,sorton:"b_"+_a,syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(Na)},q.getAttribute("jsxid"));this.G1(D,Na,f);}}}else return false;return true;},doPLDirData:function(n,m){var
ab=n.getXML();var
wa=jsx3.ide.getSystemRelativeFile(m.getAttribute("syspath"));var
ya=null;var
I=m;while(I!=null&&ya==null){ya=this._resolvers[I.getAttribute("jsxid")];I=I.getParent();}this._doPLDirectoryRead(ab,m,wa,ya);return {bCLEAR:true};},HL:new
RegExp('<(?:meta name=")?name(?:")?>(<!\\[CDATA\\[)?(.*?)(\\]\\]>)?</'),tz:new
RegExp('<(?:meta name=")?icon(?:")?>(<!\\[CDATA\\[)?(.*?)(\\]\\]>)?</'),Au:new
RegExp('<(?:meta name=")?description(?:")?>(<!\\[CDATA\\[)?([\\s\\S]*?)(\\]\\]>)?</'),_u:new
RegExp("<object type=['\"]([\\.\\w]+)['\"]"),G1:function(d,a,i){var
Jb=null,Xa=null,bb="";var
ob=a.read();var
eb=this.HL.exec(ob);if(eb&&eb[0])Jb=eb[2];var
F=this.tz.exec(ob);if(F&&F[0])Xa=F[2];var
Na=this.Au.exec(ob);if(Na&&Na[0])bb=Na[2].replace(/\s+/g," ");var
Bb=this._u.exec(ob);if(Bb&&Bb[0])bb="["+Bb[1]+"] "+bb;if(Jb){d.setAttribute("jsxtext",Jb);d.setAttribute("sorton","b_"+Jb);}if(Xa)d.setAttribute("jsximg",i?i.resolveURI(Xa):Xa);if(bb)d.setAttribute("jsxtip",bb);},reloadSystemLibraries:function(j){var
J=this._getSystemLibraries();j.setSourceXML(J);this.publish({subject:"reloaded"});},moveUserComponent:function(d,k){var
ha=jsx3.ide.getSystemRelativeFile(d);if(ha.exists()){var
x=jsx3.ide.getSystemRelativeFile(k);if(x.isDirectory()){var
y=jsx3.ide.getSystemRelativeFile(x+"/"+ha.getName());if((ha.getParentFile()).equals(x)){}else if(y.exists()){(this.getLog()).error("File already exists: "+y);}else if(!x.isDescendantOf(ha)){ha.renameTo(y);return y;}else;}else (this.getLog()).error("Not a directory: "+x);}else (this.getLog()).error("Not a file: "+ha);return false;},deleteUserComponent:function(r){var
aa=jsx3.ide.getSystemRelativeFile(r);if(aa.exists()){aa.deleteFile();return true;}else (this.getLog()).error("Not a file: "+aa);},createUserFolder:function(r,a){var
Ga=jsx3.ide.getSystemRelativeFile(r+"/"+a);if(!Ga.exists()){Ga.mkdir();return Ga.isDirectory();}}});
