jsx3.Class.defineClass("jsx3.ide.gitak.Editor",jsx3.ide.recorder.Editor,null,function(q,r){var
ub={A:"value",B:"saved",C:"Save Before Launching?",D:"Save file before launching it in GITAK?",E:"Save",F:"Continue",G:"jsx3.ide.testing",H:"You must configure the GITAK plug-in in the IDE Settings dialog before launching this file in GITAK.",I:"You must save this file before launching it in GITAK.",J:"jsxselector=",K:"do_",a:"Launch in GITAK",b:"Test file is not valid XML: ",c:'<html gitak="true">\n<head>\n  <title>Recorded Tests for ',d:"</title>\n",e:"</head>\n",f:"<body>\n",g:'  <table cellpadding="1" cellspacing="1" border="1">\n',h:"    <caption>Tests recorded by General Interface Builder</caption>\n",i:"    <tbody>\n",j:"      <tr>\n",k:'        <td rowspan="1" colspan="3">',l:"</td>\n",m:"      </tr>\n",n:"        <td>jsxopen</td><td>${GI}/shell.html?jsxapppath=${APP}</td>&amp;nbsp;<td></td>\n",o:"    </tbody>\n",p:"  </table>\n",q:"</body>\n",r:"</html>\n",s:" ",t:"",u:"//tr",v:"//tbody",w:"tr",x:"td",y:"action",z:"target"};r.render=function(g){var
S=this.jsxsuper(g);(S.getPlayerBtn()).setText(ub.a,true);S.setGIPP(false);return S;};r.loadFromFile=function(){var
Ma=this.getOpenFile();this._error=false;if(Ma&&Ma.isFile()){var
T=(new
jsx3.xml.Document()).loadXML(Ma.read());if(T.hasError()){this._error=true;((this.getPlugIn()).getLog()).warn(ub.b+T.getError());}else this._loadFromXML(T);}else{var
Qa=(new
jsx3.xml.Document()).loadXML(ub.c+jsx3.ide.PROJECT.getTitle()+ub.d+ub.e+ub.f+ub.g+ub.h+ub.i+ub.j+ub.k+jsx3.ide.PROJECT.getTitle()+ub.l+ub.m+ub.j+ub.n+ub.m+ub.o+ub.p+ub.q+ub.r);this._loadFromXML(Qa);}};r._loadFromXML=function(s){this._xml=s;var
Fa=function(a){var
Ya=a.getValue();if(Ya&&Ya.length==1&&Ya.charCodeAt(0)==160||Ya==ub.s)return ub.t;return Ya;};var
Ab=this.Kd();var
Ja=jsx3.xml.CDF.Document.newDocument();for(var
Va=s.selectNodeIterator(ub.u);Va.hasNext();){var
Hb=Va.next();var
sb=Hb.getChildNodes();var
jb=sb.getItem(0);var
H=sb.getItem(1);var
Eb=sb.getItem(2);if(!(jb&&H&&Eb))continue;var
w={jsxid:jsx3.xml.CDF.getKey(),action:Fa(jb),target:Fa(H),value:Fa(Eb)};Ja.insertRecord(w);}Ab.setSourceXML(Ja);Ab.repaint();};r._toXML=function(){var
x=this._xml.cloneDocument();var
R=(x.selectNodes(ub.u)).toArray();for(var
ba=0;ba<R.length;ba++)if((R[ba].getChildNodes()).size()>=3)(R[ba].getParent()).removeChild(R[ba]);var
ab=x.selectSingleNode(ub.v);var
X=function(a,R){var
Ib=a.getAttribute(R);if(Ib==null||Ib==ub.t)return ub.s;return Ib;};var
G=(this.Kd()).getXML();for(var
ba=G.getChildIterator();ba.hasNext();){var
hb=ba.next();var
S=x.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.w);var
E=(x.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.x)).setValue(X(hb,ub.y));var
ia=(x.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.x)).setValue(X(hb,ub.z));var
Sa=(x.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.x)).setValue(X(hb,ub.A));S.appendChild(E);S.appendChild(ia);S.appendChild(Sa);ab.appendChild(S);}return x;};r.save=function(c){if(this._error){return false;}else{var
M=this._toXML();if(jsx3.ide.writeUserXmlFile(c||this.getOpenFile(),jsx3.ide.makeXmlPretty(M,true))){this.setDirty(false);this.publish({subject:ub.B});return true;}else return false;}};r.getPlugIn=function(){return jsx3.IDE.GitakEditorPlugin;};r.onEditRecord=function(o,k){this.setDirty(true);};r.onLaunchPlayer=function(c){var
Xa=this.getOpenFile();if(Xa&&Xa.isFile()){if(!c&&this.isDirty()){jsx3.IDE.confirm(ub.C,ub.D,(jsx3.$F(function(f){f.doClose();this.save();this.onLaunchPlayer(true);})).bind(this),(jsx3.$F(function(l){l.doClose();this.onLaunchPlayer(true);})).bind(this),ub.E,ub.F,2);}else{var
E=((this.getPlugIn()).getEngine()).getPlugIn(ub.G);if(E&&E.isGITAKConfigured()){E.launchGITAK((jsx3.ide.PROJECT.getDirectory()).relativePathTo(Xa));}else ((this.getPlugIn()).getServer()).alert(null,ub.H);}}else ((this.getPlugIn()).getServer()).alert(null,ub.I);};r.vf=function(h){var
B=this.jsxsuper(h);return B?ub.J+B:B;};r.Lr=function(d,s){var
Qa=d?ub.K+d:d;return Qa;};});
