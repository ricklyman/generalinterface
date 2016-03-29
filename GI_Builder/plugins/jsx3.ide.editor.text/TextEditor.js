jsx3.Class.defineClass("jsx3.ide.TextEditor",jsx3.ide.Editor,null,function(q,m){var
ub={a:"saved",b:"Cannot save file to blank url.",c:"editor"};m.save=function(s){s=s||this.getOpenFile();if(s){var
w=this.getEditorText();if(jsx3.ide.writeUserFile(s,w)){this.setDirty(false);this.publish({subject:ub.a});return true;}}else ((this.getPlugIn()).getLog()).error(ub.b);return false;};m.getPlugIn=function(){return jsx3.IDE.TextEditorPlugin;};m.render=function(f){var
Ha=((this.getPlugIn()).getResource(ub.c)).getData();return f.loadXML(Ha,false,this.getPlugIn());};m.loadFromFile=function(){var
u=this.getOpenFile();if(u&&u.isFile())this.setEditorText(u.read());};m.getEditorText=function(){var
G=this.getContent();if(G)return G.getTextValue();};m.setEditorText=function(r){var
db=this.getContent();if(db)db.setTextValue(r);};m.supportsReload=function(){return true;};m.onTextChange=function(){this.setDirty(true);};m.onKeyDown=function(){if(!this.isDirty()){var
Cb=this.getEditorText();jsx3.sleep(function(){if(Cb!=this.getEditorText())this.setDirty(true);},null,this);}};});
