jsx3.Class.defineClass("jsx3.ide.recorder.Editor",jsx3.ide.Editor,null,function(f,j){var
ub={A:"exists",B:"function",C:"target",D:"_",E:"jsx3.gui.Event",F:":",G:":new Date('",H:"')",I:"jsx3.app.Model",J:"JSX(",K:"jsx3.xml.Entity",L:"XML(",M:":0x",N:"{",O:", ",P:"}",a:"editor",b:"jsxid",c:"recorder.html",d:"gipprecorder",e:"gippeditor",f:"A pop-up blocker prevented the recorder from opening.",g:"Stop Recorder",h:"Launch Recorder",i:"",j:"jsxuser:///",k:"Could not record event ",l:" because the event was published after the target DOM node '",m:"' was destroyed.",n:" ",o:"#",p:" > :nth(",q:")",r:"jsxwait_",s:"jsxassert_",t:"selected",u:"checked",v:"state",w:"front",x:"value",y:"number",z:"boolean"};var
ib=jsx3.gui;var
B=function(){return jsx3.IDE.RecorderEditorPlugin;};j.render=function(q){var
Ea=((B()).getResource(ub.a)).getData();return q.loadXML(Ea,false,B());};j.onBeforeClose=function(){if(this._running)this.onToggleLaunch();};j.onToggleLaunch=function(){if(this._running){if(this._recorder){this._recorder.close();this._recorder=null;this._running=false;}}else{var
A=this.Kd();if((A.getValue()).length==0){var
E=(A.getXML()).getLastChild();if(E)A.setValue([E.getAttribute(ub.b)]);}var
hb=window.open(((B()).resolveURI(ub.c)).toString(),ub.d);if(hb){hb[ub.e]=this;this._recorder=hb;}else ((B()).getServer()).alert(null,ub.f);}};j.onRecorderLaunched=function(){this._running=true;((this.getContent()).getLaunchBtn()).setText(ub.g,true);};j.onRecorderStopped=function(){if(this.isAlive()){this._running=false;this._recorder=null;((this.getContent()).getLaunchBtn()).setText(ub.h,true);}};j.onInsertRecord=function(b){var
E=this.Kd();var
ta=E.getValue();ta=ta[ta.length-1];E.endEditSession();if(!b)b={jsxid:jsx3.xml.CDF.getKey(),label:ub.i,target:ub.i,action:ub.i,value:ub.i};else if(!b.jsxid)b.jsxid=jsx3.xml.CDF.getKey();if(ta){var
J=(E.getRecordNode(ta)).getNextSibling();if(J)E.insertRecordBefore(b,J.getAttribute(ub.b));else E.insertRecord(b);}else{var
Ja=((E.getXML()).getChildIterator()).next();if(Ja)E.insertRecordBefore(b,Ja.getAttribute(ub.b));else E.insertRecord(b);}E.setValue(b.jsxid);this.setDirty(true);};j.onDeleteRecord=function(l){(this.Kd()).deleteRecord(l);this.setDirty(true);};j.onReorder=function(){this.setDirty(true);return true;};j.Kd=function(){return (this.getContent()).getGrid();};j.getJsxSrc=function(){return (((B()).resolveURI(ub.c)).relativize(jsx3.resolveURI(jsx3.MAIN_SCRIPT))).toString();};j.getJsxAppPath=function(){return (((B()).resolveURI(ub.c)).relativize(jsx3.resolveURI(ub.j+jsx3.ide.PROJECT.getPathFromHome()))).toString();};j.onModelEvent=function(r,o,h,a){if(a||h&&h._gipp)if(r.getServer()){this.onInsertRecord({label:ub.i,target:this.vf(r),action:this.Lr(o,h),value:this.JS(o,h)});this.setDirty(true);}else ((B()).getLog()).info(ub.k+o+ub.l+r.getName()+ub.m);};j.onAssert=function(b,h){var
Za=this.Kd();Za.endEditSession();var
O=this.bN(b,h);this.onInsertRecord({label:ub.i,target:this.vf(b),action:O[0],value:O[1]});this.setDirty(true);};j.vf=function(o){var
kb=(o.getServer()).getDOM();var
Ka=ub.i;while(o){var
mb=o.getParent();var
W=o.getName();var
Ua=kb.getAllByName(W);if(Ka)Ka=ub.n+Ka;if((Ua.length==1||!mb)&&jsx3.util.isName(W)){Ka=ub.o+W+Ka;break;}else if((mb.findDescendants(function(m){return m.getName()==W;},false,true)).length==1&&jsx3.util.isName(W)){Ka=ub.o+W+Ka;}else Ka=ub.p+o.getChildIndex()+ub.q+Ka;o=o.getParent();}return Ka;};j.bN=function(i,a){var
z=a?ub.r:ub.s;var
tb,va=null;if(f.EQ(i.getSelected)){tb=ub.t;va=jsx3.$O.json(i.getSelected());}else if(f.EQ(i.getChecked)){tb=ub.u;va=jsx3.$O.json(i.getChecked());}else if(f.EQ(i.getState)){tb=ub.v;va=jsx3.$O.json(i.getState());}else if(f.EQ(i.isFront)){tb=ub.w;va=jsx3.$O.json(i.isFront());}else if(f.EQ(i.getValue)){tb=ub.x;va=i.getValue();if(typeof va!=ub.y&&typeof va!=ub.z&&va!==null)va=jsx3.$O.json(va?va.toString():va);}else tb=ub.A;return [z+tb,va];};f.EQ=function(c){return typeof c==ub.B||c&&c.apply&&c.call;};j.Lr=function(l,k){return l;};j.JS=function(q,e){var
W=[];for(var Ia in e){if(Ia==ub.C||Ia.indexOf(ub.D)==0)continue;var
gb=e[Ia];if(this.ir(gb,ub.E)){var
ma={type:gb.getType()};if(gb.keyCode())ma.keyCode=gb.keyCode();if(gb.altKey())ma.altKey=true;if(gb.shiftKey())ma.shiftKey=true;if(gb.ctrlKey())ma.ctrlKey=true;if(gb.metaKey())ma.metaKey=true;W.push(Ia+ub.F+jsx3.$O.json(ma));}else if(gb&&gb.getUTCDate){W.push(Ia+ub.G+gb.toString()+ub.H);}else if(this.ir(gb,ub.I)){W.push(Ia+ub.F+jsx3.$O.json(ub.J+this.vf(gb)+ub.q));}else if(this.ir(gb,ub.K)){W.push(Ia+ub.F+jsx3.$O.json(ub.L+gb.toString()+ub.q));}else if(typeof gb==ub.y&&gb>=4095){W.push(Ia+ub.M+(gb.toString(16)).toUpperCase());}else if(gb&&gb.ownerDocument){}else W.push(Ia+ub.F+jsx3.$O.json(gb));}return ub.N+W.join(ub.O)+ub.P;};j.ir=function(l,i){if(l&&l.getClass){var
pb=l.getClass();while(pb){if(pb.getName()==i)return true;var
nb=pb.getInterfaces();for(var
T=0;T<nb.length;T++)if(nb[T].getName()==i)return true;pb=pb.getSuperClass();}}return false;};j.isAlive=function(){try{var
Ga=this.getContent();return Ga&&Ga.getRendered()&&(Ga.getRendered()).offsetWidth>0;}catch(Kb){((B()).getLog()).debug(jsx3.NativeError.wrap(Kb));return true;}};});
