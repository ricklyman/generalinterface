(jsx3.$O(this)).extend({_getUserLibraries:function(){var
ya=this.resolveURI("jsxapp:/images/icon_7.gif");var
M=jsx3.xml.CDF.Document.newDocument();var
ba=jsx3.ide.getHomeRelativeFile("prototypes");var
ca=M.insertRecord({jsxid:"user",jsxtext:"Workspace",jsxopen:"1",jsximg:ya,type:"folder",syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(ba)});this._resolvers["user"]=null;this._doPLDirectoryRead(M,ca,ba,jsx3.net.URIResolver.USER);this._resolvers["user"]=jsx3.net.URIResolver.USER;return M;},reloadUserLibraries:function(j){var
S=this._getUserLibraries();j.setSourceXML(S);this.publish({subject:"user_reloaded"});},uploadUserPrototype:function(m,d){var
N=jsx3.ide.getIDESettings();var
Ga=this.getId();if(N.get(Ga,"username")){var
Cb=d.getRecord(d.getValue());var
Qa=this._loadComponentForUpload(Cb.path);if(Qa)m.setUploadDetail(Qa,Cb);}else m.setUserView("login");},_loadComponentForUpload:function(k){var
yb=jsx3.xml.Document;var
wa=new
yb();var
k=(jsx3.net.URIResolver.getResolver(k)).resolveURI(k);var
ea=wa.load(k);if(ea.hasError())return null;return ea;},_onAgreeLabelClick:function(s,j,h){var
x=s.srcElement();if(x.tagName.toLowerCase()!="a"){var
lb=j.getChecked();j.setChecked(!lb);h.setEnabled(!lb,true);}}});
