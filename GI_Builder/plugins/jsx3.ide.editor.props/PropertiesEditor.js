jsx3.require("jsx3.ide.Editor");jsx3.Class.defineClass("jsx3.ide.PropertiesEditor",jsx3.ide.Editor,null,function(r,c){var
ub={a:"grid",b:"jsxdynpropeditor",c:"jsxns",d:"urn:tibco.com/v3.0/dynamicproperties/1",e:"editor",f:"saved",g:"can't save file to blank url",h:"source",i:"mode_source",j:"Alert",k:"Changes made to the XML source caused the following XML parsing error: <br/><br/><b>",l:"</b><br/><br/> Please fix the error or revert to the last saved version before continuing."};c.Ol=ub.a;c.Do=function(){return (this.getContent()).getDescendantOfName(ub.b);};c.nm=function(i){var
J=this.Do();J.setSourceXML(i);J.repaintData();};c.Bc=function(){var
rb=(this.Do()).getXML();rb.setAttribute(ub.c,ub.d);return rb;};c.render=function(g){var
Y=((this.getPlugIn()).getResource(ub.e)).getData();return g.loadXML(Y,false,this.getPlugIn());};c.loadFromFile=function(){var
Wa=this.getOpenFile();if(Wa&&Wa.isFile()){var
X=jsx3.ide.relativePathTo(Wa);var
ia=(new
jsx3.xml.Document()).load(X);this.nm(ia);}};c.save=function(g){g=g||this.getOpenFile();if(g){var
Fb=jsx3.ide.makeXmlPretty(this.Bc(),true);if(jsx3.ide.writeUserXmlFile(g,Fb)){this.setDirty(false);this.publish({subject:ub.f});return true;}}else ((this.getPlugIn()).getLog()).error(ub.g);return false;};c.onBeforeSetMode=function(d){var
L=this.getMode();if(L==ub.h){var
lb=((this.getContent()).getModePane()).getChild(ub.i);if(lb.isDirty())if(!this.v6())return false;}};c.onSetMode=function(b,n){b.doShow();};c.getPlugIn=function(){return jsx3.IDE.PropertiesEditorPlugin;};c.v6=function(){var
wa=((this.getContent()).getModePane()).getChild(ub.i);var
eb=(new
jsx3.xml.Document()).loadXML(wa.getTextValue());if(!eb.hasError()){this.nm(eb);(this.Do()).repaintData();}else{((this.getPlugIn()).getServer()).alert(ub.j,ub.k+eb.getError()+ub.l,null,null,{width:400,height:225});return false;}return true;};c.supportsReload=function(){return true;};c.removeDP=function(o,l){l.deleteRecord(o,true);this.setDirty(true);};});
