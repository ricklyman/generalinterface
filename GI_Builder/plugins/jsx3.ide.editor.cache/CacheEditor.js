jsx3.require("jsx3.ide.TextEditor");jsx3.Class.defineClass("jsx3.ide.CacheEditor",jsx3.ide.TextEditor,null,function(f,n){var
ub={a:"readwrite",b:"http://www.w3.org/1999/XSL/Transform",c:"http://www.w3.org/TR/WD-xsl",d:"xsl",e:"xml",f:"",g:"reverted",h:"The cache document count not be saved because of the following XML parsing error: ",i:". Please fix the error or revert to the last saved version before continuing.",j:"saved",k:"The cache document count not be saved to disk because of the following XML parsing error: ",l:"Alert",m:"The XML source is not a valid XML document. The following XML parsing error occurred: <br/><br/><b>",n:"</b><br/><br/> Please fix the error before entering formatted markup view."};n.Ol=ub.a;n.getCache=function(){var
W=this.getOpenFile();return W&&W.cache;};n.getCacheId=function(){var
Na=this.getOpenFile();return Na&&Na.cacheid;};n.getFileType=function(){var
Ra=this.getCache();if(Ra){var
zb=Ra.getDocument(this.getCacheId());if(zb){var
rb=(zb.getRootNode()).getNamespaceURI();if(rb==ub.b||rb==ub.c)return ub.d;}}return ub.e;};n.getPlugIn=function(){return jsx3.IDE.CacheEditorPlugin;};n.isReadOnly=function(){return false;};n.getTitle=function(){return this.getCacheId();};n.loadFromFile=function(){var
Lb=this.getCache();if(Lb){var
Da=Lb.getDocument(this.getCacheId());this.setEditorText(Da?Da.toString():ub.f);}};n.revert=function(){var
u=this.getCache();this.setEditorText((u.getDocument(this.getCacheId())).toString());this.setDirty(false);this.publish({subject:ub.g});};n.save=function(b){var
Ya=new
jsx3.xml.Document();Ya.loadXML(this.getEditorText());if(Ya.hasError()){((this.getPlugIn()).getLog()).error(ub.h+Ya.getError()+ub.i);return false;}(this.getCache()).setDocument(this.getCacheId(),Ya);this.setDirty(false);this.publish({subject:ub.j});return true;};n.saveAs=function(d){var
Da=new
jsx3.xml.Document();Da.loadXML(this.getEditorText());if(Da.hasError()){((this.getPlugIn()).getLog()).error(ub.k+Da.getError()+ub.i);return false;}return jsx3.ide.writeUserXmlFile(d,Da);};n.onBeforeSetMode=function(i){var
w=this.getMode();if(w==ub.a){var
Fb=new
jsx3.xml.Document();Fb.loadXML(this.getEditorText());if(Fb.hasError()){var
Gb=Fb.getError();((this.getPlugIn()).getServer()).alert(ub.l,ub.m+Gb.description+ub.n,null,null,{width:400,height:225});return false;}}};n.onSetMode=function(g,s){var
Ka=this.getMode();if(s==ub.a){var
vb=new
jsx3.xml.Document();vb.loadXML(this.getEditorText());g.setSourceDocument(vb);}g.doShow();};n.supportsReload=function(){return false;};});
