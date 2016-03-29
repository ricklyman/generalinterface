jsx3.net.Request.addSchemeHandler("gears",jsx3.io.FileRequest.jsxclass);jsx3.Class.defineClass("com.google.gears.FileSystem",jsx3.io.FileSystem,null,function(s,i){var
ub={A:"Cannot create record with non-existent parent: ",B:"INSERT INTO file (name,pid,type) VALUES (?,?,?)",C:"file",D:"DELETE FROM file WHERE id=?",E:"SELECT id, name FROM file WHERE pid=?",F:"SELECT id FROM file WHERE pid=? AND name=?",a:"gears://",b:"/",c:"",d:"gears:///",e:"gears:///tmp",f:".",g:"GIBuilder",h:"beta.database",i:"CREATE TABLE IF NOT EXISTS file   (id INTEGER PRIMARY KEY AUTOINCREMENT,    pid INTEGER, name text, mtime INTEGER, type TEXT, size INTEGER, data BLOB)",j:"CREATE TRIGGER IF NOT EXISTS file_delete AFTER DELETE ON file BEGIN   DELETE FROM file WHERE pid=OLD.id; END",k:"SELECT * FROM file WHERE id=?",l:"INSERT INTO file (id,name,type) VALUES (?,?,?)",m:"folder",n:"SELECT id, size, mtime, type, pid, name",o:", data",p:" FROM file WHERE id=?",q:"data",r:"size",s:"mtime",t:"type",u:"pid",v:"name",w:"undefined",x:"UPDATE file SET ",y:"=?, ",z:"=? WHERE id=?"};i.init=function(){this.jsxsuper();this._initDB();};i.getFile=function(j){var
v=jsx3.net.URI.valueOf(j);if(!v.getScheme())v=new
jsx3.net.URI(ub.a+((v.getPath()).indexOf(ub.b)!=0?ub.b:ub.c)+v.getPath());return new
com.google.gears.File(this,v);};i.getUserDocuments=function(){return this.getFile(ub.d);};i.getRoots=function(){return [this.getFile(ub.d)];};i.createTempFile=function(l){var
Na=this.getFile(ub.e);if(!Na.isDirectory())Na.mkdir();var
Eb=null;do
Eb=Na.resolve(l+ub.f+(Math.round(Math.random()*16777215)).toString(16));while(Eb.exists());Eb.write(ub.c);return Eb;};s._DB=ub.g;i._getDB=function(){var
E=google.gears.factory.create(ub.h);E.open(s._DB);return E;};i._initDB=function(){var
N=this._getDB();N.execute(ub.i);N.execute(ub.j);var
Qa=N.execute(ub.k,[1]);if(!Qa.isValidRow())N.execute(ub.l,[1,ub.c,ub.m]);Qa.close();N.close();};i._getRecord=function(n,c){var
O=this._getDB();var
v=null;var
Db=O.execute(ub.n+(c?ub.o:ub.c)+ub.p,[n]);if(Db.isValidRow()){v={id:Db.field(0),size:Db.field(1),mtime:Db.field(2),type:Db.field(3),pid:Db.field(4),name:Db.field(5)};if(c)v.data=Db.field(6);}Db.close();O.close();return v;};s._SET_FIELDS=[ub.q,ub.r,ub.s,ub.t,ub.u,ub.v];i._setRecord=function(k,c){var
H=[];var
Xa=[];for(var
F=0;F<s._SET_FIELDS.length;F++){var
ja=s._SET_FIELDS[F];if(typeof c[ja]!=ub.w){H.push(ja);Xa.push(c[ja]);}}Xa.push(k);var
R=ub.x+H.join(ub.y)+ub.z;var
kb=this._getDB();kb.execute(R,Xa);kb.close();};i._createRecord=function(j,c){var
A=this._getPKForPath(c.slice(0,c.length-1));if(!A)throw new
jsx3.Exception(ub.A+c);var
Nb=this._getDB();Nb.execute(ub.B,[c[c.length-1],A,ub.C]);var
sb=Nb.lastInsertRowId;Nb.close();return sb;};i._deleteRecord=function(a){var
Ia=this._getDB();Ia.execute(ub.D,[a]);Ia.close();};i._getChildren=function(c){var
W=this._getDB();var
sb=W.execute(ub.E,[c]);var
ia=jsx3.$A();while(sb.isValidRow()){ia.push({id:sb.field(0),name:sb.field(1)});sb.next();}sb.close();W.close();return ia;};i._getPKForPath=function(n){if(n.length==0)return 1;if(n[n.length-1]==ub.c)return this._getPKForPath(n.slice(0,n.length-1));var
db=this._getPKForPath(n.slice(0,n.length-1));if(db==null)return null;var
Va=null;var
Na=this._getDB();var
va=Na.execute(ub.F,[db,n[n.length-1]]);if(va.isValidRow())Va=va.field(0);va.close();Na.close();return Va;};});jsx3.Class.defineClass("com.google.gears.File",jsx3.io.File,null,function(i,l){var
ub={a:"gears",b:"scheme is not 'gears': ",c:"/",d:"",e:/\r\n|\r|\n/g,f:"file",g:"folder",h:"File already exists: ",i:"Directory already exists: ",j:/\\/g};l.init=function(e,q,g){this.jsxsuper(e,q);if(q.getScheme()!=ub.a)throw new
jsx3.Exception(ub.b+q);this._pk=g;};l._getTokens=function(){var
wa=((this._uri.getPath()).substring(1)).split(ub.c);if(wa.length>1&&wa[wa.length-1]==ub.d)wa.splice(wa.length-1,1);return wa;};l._getPK=function(){if(!this._pk){var
bb=this._getTokens();this._pk=this._fs._getPKForPath(bb);}return this._pk;};l._getRec=function(k){var
db=this._getPK();return db?this._fs._getRecord(db,k):null;};l._setRec=function(b){var
ia=this._getPK();if(ia)this._fs._setRecord(ia,b);else{var
G=this._getTokens();ia=this._fs._createRecord(b,G);this._fs._setRecord(ia,b);}};l._delRec=function(){var
pb=this._getPK();if(pb)this._fs._deleteRecord(pb);};l.write=function(s,h){if(!h)h={};var
F=h.linebreakmode;if(F)s=(s.split(ub.e)).join(jsx3.io.File.LINE_SEP[F]);this._setRec({data:s,size:s.length,mtime:(new
Date()).getTime(),type:ub.f});return true;};l.read=function(){var
eb=this._getRec(true);return eb?eb.data:null;};l.isDirectory=function(){var
lb=this._getRec();return lb&&lb.type==ub.g;};l.isFile=function(){var
U=this._getRec();return U&&U.type==ub.f;};l.exists=function(){return this._getPK()!=null;};l.listFiles=function(){var
u=this._getPK();if(u){return (this._fs._getChildren(u)).map((jsx3.$F(function(k){return new
i(this._fs,(this.toURI()).resolve(k.name),k.id);})).bind(this));}else return [];};l.mkdir=function(){var
u=this._getRec();if(u){if(u.type==ub.f)throw new
jsx3.Exception(ub.h+this);}else this._setRec({type:ub.g});};l.deleteFile=function(){this._delRec();};l.renameTo=function(g){var
Fb=g._getRec();if(Fb)if(Fb.type==ub.f)g.deleteFile();else throw new
jsx3.Exception(ub.i+g);var
Ua=g.getParentFile();var
ha=Ua._getPK();this._setRec({pid:ha,name:g.getName()});};l.isHidden=function(){return false;};l.isReadOnly=function(){return false;};l.setReadOnly=function(q){};l.getStat=function(){var
Hb=this._getRec();return Hb?{mtime:Hb.mtime?new
Date(Hb.mtime):null,size:Hb.size}:{mtime:null,size:null};};l.toURI=function(){var
sa=this._uri;if(!(jsx3.$S(sa.getPath())).endsWith(ub.c)&&this.isDirectory()){var
Ra=(sa.getPath()).replace(ub.j,ub.c)+(this.isDirectory()?ub.c:ub.d);if(Ra.substring(0,1)!=ub.c)Ra=ub.c+Ra;this._uri=jsx3.net.URI.fromParts(sa.getScheme(),sa.getUserInfo(),sa.getHost(),sa.getPort(),Ra,sa.getQuery(),sa.getFragment());}return this._uri;};});
