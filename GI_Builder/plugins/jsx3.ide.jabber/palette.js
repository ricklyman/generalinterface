(jsx3.$O(this)).extend({_getTree:function(){var
Ab=(this.getPalette()).getUIObject();return Ab&&Ab.getXMPPTree();},getTreeDocument:function(l){var
ib=new
jsx3.xml.CDF.Document();ib.loadXML('<data jsxid="jsxroot"><record jsxid="jsxrootnode" jsxtext="rootnode" jsxunselectable="1" jsxopen="1" jsximg="jsxapp:/images/icon_7.gif"/></data>');return ib;},getToolbarItem:function(s){var
Ya=this.getPalette();if(Ya){var
Ja=Ya.getUIObject();if(Ja)return Ja.getDescendantOfName(s);}return null;},setUIState:function(b){var
xa=(this.getPalette()).getUIObject();var
H=jsx3.gui.Block;if(b==0&&!this.isConfigured()){(xa.getDescendantOfName("xmpp_conf_block")).setDisplay(H.DISPLAYBLOCK,true);(xa.getDescendantOfName("xmpp_list_block")).setDisplay(H.DISPLAYNONE,true);}else{(xa.getDescendantOfName("xmpp_list_block")).setDisplay(H.DISPLAYBLOCK,true);(xa.getDescendantOfName("xmpp_conf_block")).setDisplay(H.DISPLAYNONE,true);var
fb=xa.getDescendantOfName("btnadd");if(b==0){this.setUsername("Offline");fb.setEnabled(0,true);}else if(b==1){this.setUsername("Loading...");fb.setEnabled(0,true);}else if(b==2){this.setUsername(this.session.jid);fb.setEnabled(1,true);}}},setUsername:function(d){var
Sa=this.getToolbarItem("xmpp_username");if(Sa)Sa.setText(d,true);},isConfigured:function(){var
xb=this.getCredentials();return xb.server&&xb.username&&xb.password;},setTempPassword:function(k){this._temppw=k;},getCredentials:function(){var
ra=jsx3.ide.getIDESettings();var
Eb=this.getId();return {username:ra.get(Eb,"userid"),password:this._temppw||ra.get(Eb,"password"),server:ra.get(Eb,"server"),autologin:Boolean(ra.get(Eb,"autologin")),port:ra.get(Eb,"port"),bind:ra.get(Eb,"bind"),use_ssl:ra.get(Eb,"ssl")};},_presSorts:{none:9,offline:9,away:4,dnd:3,xa:5,online:1},_presImages:{none:"none",offline:"none",away:"away",dnd:"dnd",xa:"xa",online:"online"},_addStatusProperties:function(b,l){if(!b)b="none";var
aa=this._presSorts[b];if(!aa)(this.getLog()).debug("Unknown presence: "+b);var
ra=this._presImages[b];l.jsximg="images/"+ra+".gif";l.jsxsortlevel=aa;l.jsxsort=aa+"-"+(String(l.jsxtext)).toLowerCase();},_getRecord:function(d){var
I=d.name||d.jid;var
ba={jsxid:d.jid,jsxnick:d.name,jsxtext:I,jsximg:"images/none.gif"};this._addStatusProperties(d.presence,ba);return ba;},getGroupRecord:function(a){var
Nb=a=="jsxcontacts"?"Contacts":a;return {jsxid:a,jsxtext:Nb,jsximg:"",jsxgroup:a,jsxstyle:"font-weight:bold;",jsxsort:Nb.toLowerCase(),jsxnick:"",jsxopen:1,jsxunselectable:1};},connectSession:function(d){var
ub={A:"onSubscriptionRequest",B:"body",C:"TIBCO/GIChat",a:"@",b:"http://",c:":",d:"/",e:"",f:"http-bind",g:"file:",h:"onActive",i:"_onActive",j:"onRosterAdded",k:"_onRosterAdded",l:"onRosterChanged",m:"_onRosterChanged",n:"onRosterRemoved",o:"_onRosterRemoved",p:"onRosterUpdated",q:"_onRosterUpdated",r:"onPresenceUpdate",s:"_onPresenceUpdate",t:"onRegisterChatInstance",u:"_onRegisterChatInstance",v:"onTerminate",w:"error",x:"Received onTerminate message: ",y:"onLoginFailure",z:"Received onLoginFailure message: "};var
B=d.username.split(ub.a);var
ib=B[1];var
Qa=d.server;if(Qa.indexOf(ub.b)!=0)Qa=ub.b+Qa;if(d.port)Qa=Qa+(ub.c+d.port);Qa=Qa+((Qa.charAt(Qa.length-1)==ub.d?ub.e:ub.d)+(d.bind||ub.f)+ub.d);var
O=true;if(window.location.protocol==ub.g){if(dojo.isFF<3)O=false;}else if(window.location.hostname==d.server)O=false;this.session=new
dojox.xmpp.xmppSession({serviceUrl:Qa,secure:!(!d.ssl),useScriptSrcTransport:O,domain:ib});this.roster={};this.chatInstances={};this.chatDialogs={};dojo.connect(this.session,ub.h,this,ub.i);dojo.connect(this.session,ub.j,this,ub.k);dojo.connect(this.session,ub.l,this,ub.m);dojo.connect(this.session,ub.n,this,ub.o);dojo.connect(this.session,ub.p,this,ub.q);dojo.connect(this.session,ub.r,this,ub.s);dojo.connect(this.session,ub.t,this,ub.u);dojo.connect(this.session,ub.v,this,function(a,g,f){if(f==ub.w){(this.getLog()).error(ub.x+f);this.doShutdown();}});dojo.connect(this.session,ub.y,this,function(c){(this.getLog()).error(ub.z+c);this.doShutdown();});dojo.connect(this.session,ub.A,this,function(h){this.session.presenceService.approveSubscription(h);});var
Lb=dojo.body;dojo.body=function(){return dojo.doc.body||(dojo.doc.getElementsByTagName(ub.B))[0];};var
E=this.getTreeDocument();(this._getTree()).setSourceXML(E);this.setUIState(1);this.session.open(d.username,d.password,ub.C);dojo.body=Lb;},_updateTree:(jsx3.$F(function(){var
Y=this._getTree();if(Y){for(var
ob=0,Za=this.session.roster.length;ob<Za;ob++)this._addContactToRoster(this.session.roster[ob],Y);Y.repaint();}})).throttled(),_repaintTree:(jsx3.$F(function(){var
v=this._getTree();if(v)v.repaint();})).throttled(),_addContactToRoster:function(n,a){if(n.status=="from")this.session.presenceService.subscribe(n.jid);if(!a)a=this._getTree();if(a){var
Ea=a.getXML();var
Gb="jsxcontacts";this.roster[n.jid]=n;if(n.groups.length)Gb=n.groups[0];var
Ha=a.getRecordNode(n.jid);if(!Ha){var
ha=Ea.selectSingleNode('//record[@jsxgroup="'+Gb+'"]');if(!ha)a.insertRecord(this.getGroupRecord(Gb),"jsxrootnode",false);a.insertRecord(this._getRecord(n),Gb,false);}}},_onActive:function(){this.session.presenceService.publish({});this.setUIState(2);this._playSound("connect");},_onRosterAdded:function(m){(this.getLog()).trace("onRosterAdded "+jsx3.$O.json(m));var
Wa=this._getTree();this.session.roster.push(m);this.roster[m.jid]=m;if(Wa){this._addContactToRoster(m,Wa);this._repaintTree();}},_onRosterChanged:function(s,e){(this.getLog()).trace("onRosterChanged "+jsx3.$O.json(s)+" "+jsx3.$O.json(e));var
Xa=this._getTree();if(Xa){var
S=Xa.getRecord(e.jid);var
ob=s.name||s.jid;S.jsxtext=ob;S.jsxsort=S.jsxsortlevel+"-"+(String(ob)).toLowerCase();S.jsxnick=s.name;Xa.insertRecord(S,null,false);this._repaintTree();}if(this.chatDialogs[s.jid])this.chatDialogs[s.jid].initializeTitle(s);},_onRosterRemoved:function(l){(this.getLog()).trace("onRosterRemoved "+jsx3.$O.json(l));var
A=this._getTree();delete this.roster[l.id];if(A)A.deleteRecord(l.id,true);},_onRosterUpdated:function(){(this.getLog()).trace("onRosterUpdated "+jsx3.$O.json(arguments[0]));this._updateTree();},doStartChat:function(d){var
wb=new
dojox.xmpp.ChatService();this.session.registerChatInstance(wb);wb.invite(d);},_onRegisterChatInstance:function(h,o){var
ub={a:"onRegisterChatInstance ",b:" ",c:"onInvite",d:"onInvite ",e:"onNewMessage",f:"onNewMessage ",g:"setState",h:"setState "};(this.getLog()).trace(ub.a+jsx3.$O.json(h,false)+ub.b+jsx3.$O.json(o,false));var
Ga=this.chatInstances;if(h.uid){if(!Ga[h.uid]||Ga[h.uid].chatid!=h.chatid)this._newMessage(h,h.uid,o);Ga[h.uid]=h;}dojo.connect(h,ub.c,this,(jsx3.$F(function(k){Ga[k]=h;(this.getLog()).trace(ub.d+k+ub.b+h.chatid);this._newMessage(h,k,null);})).bind(this));dojo.connect(h,ub.e,this,(jsx3.$F(function(c){(this.getLog()).trace(ub.f+jsx3.$O.json(c,false)+ub.b+h.chatid);this._newMessage(h,h.uid,c);})).bind(this));dojo.connect(h,ub.g,this,(jsx3.$F(function(q){(this.getLog()).trace(ub.h+q+ub.b+h.chatid);})).bind(this));},_newMessage:function(l,s,k){var
ub={a:"xmpp_chat_dialog",b:"message"};var
Da=this.chatDialogs;if(!Da[s]||!Da[s].getParent()){((this.getResource(ub.a)).load()).when((jsx3.$F(function(){var
Ha=Da[s]=this.loadRsrcComponent(ub.a,(this.getServer()).getRootBlock(),false);(Ha.getParent()).paintChild(Ha);Ha.focus();Ha.initializeTitle(this.roster[s]||{jid:s});Ha.onNewMessage(l,k);})).bind(this));}else Da[s].onNewMessage(l,k);if(k)this._playSound(ub.b);},_playSound:function(n){var
_a=jsx3.ide.getIDESettings();if(_a.get(this.getId(),"sounds")){if(!this._soundsreged){this._soundsreged=true;jsx3.ide.registerSound(this.getId()+".message",this.resolveURI("sounds/message.wav"));jsx3.ide.registerSound(this.getId()+".connect",this.resolveURI("sounds/connect.wav"));jsx3.ide.registerSound(this.getId()+".disconnect",this.resolveURI("sounds/disconnect.wav"));}jsx3.ide.playSound(this.getId()+"."+n);}},_onPresenceUpdate:function(p){(this.getLog()).trace("onPresenceUpdate "+jsx3.$O.json(p));if(this.roster[p.from])this.roster[p.from].presence=p.show;var
oa=this._getTree();if(oa){var
Ib=oa.getRecord(p.from);if(Ib){this._addStatusProperties(p.show,Ib);oa.insertRecord(Ib,null,false);this._repaintTree();}}},isConnected:function(){return this.session&&this.session.state!=dojox.xmpp.xmpp.TERMINATE;},loadXMPP:jsx3.$Y(function(d){var
ub={a:"jsx3.util.Dojo",b:"dojox.xmpp.xmppSession",c:"jsx3.ide.xmpp",d:"undefined",e:"dojo/"};var
U=this.getEngine();((U.getPlugIn(ub.a)).load()).when(function(){var
Aa=jsx3.util.Dojo;var
za=jsx3.ide.getSystemRelativeFile(jsx3.resolveURI(Aa.getPath()));if(za.exists()&&za.isDirectory()){Aa.load();dojo.require(ub.b);d.done();}else{var
H=U.getPlugIn(ub.c);window.djConfig=typeof djConfig==ub.d?{baseUrl:(H.resolveURI(ub.e)).toString(),afterOnLoad:true}:djConfig;(H.load()).when(d);}});}),doPower:function(){if(this.isConnected()){this.doShutdown();}else{var
J=this.getCredentials();(this.loadXMPP()).when((jsx3.$F(function(){this.connectSession(J);})).bind(this));}},doShutdown:function(){if(this.session){try{this.session.close();}catch(Kb){(this.getLog()).warn("Error disconnecting: "+jsx3.NativeError.wrap(Kb));}this.session=null;this.roster={};this._playSound("disconnect");}var
eb=this._getTree();eb.setSourceXML(this.getTreeDocument(true));eb.repaint();this.setUIState(0);},doShowAddContact:function(){var
ub={a:"xmpp_add_dialog"};((this.getResource(ub.a)).load()).when((jsx3.$F(function(){var
R=this.loadRsrcComponent(ub.a,(this.getServer()).getRootBlock(),false);(R.getParent()).paintChild(R);R.focus();})).bind(this));},_doAddContact:function(i,b){var
J=b.getJID();J=(jsx3.$S(J)).trim();if(/^[^\@\s]+\@[^\@\s]+$/.test(J)){this.session.rosterService.addRosterItem(J,J);this.session.presenceService.subscribe(J);b.doClose();}else{(this.getLog()).error("Invalid Jabber ID: "+J);b.beep();}},editNickname:function(q){var
ub={a:"xmpp_nick_dialog"};((this.getResource(ub.a)).load()).when((jsx3.$F(function(){var
E=this.loadRsrcComponent(ub.a,(this.getServer()).getRootBlock());E.focus();E.setNickname(q.jsxid,q.jsxnick);})).bind(this));},_doEditNickname:function(d,p){var
Ea=p.getNickname();this.session.rosterService.updateRosterItem(p.jsxjid,Ea);p.doClose();},deleteFromRoster:function(m){var
ub={a:"xmpp_delete_dialog"};((this.getResource(ub.a)).load()).when((jsx3.$F(function(){var
Ya=this.loadRsrcComponent(ub.a,(this.getServer()).getRootBlock(),false);(Ya.getParent()).paintChild(Ya);Ya.focus();Ya.setInfo(m.jsxid,m.jsxtext);})).bind(this));},_doDeleteContact:function(a,m){this.session.rosterService.removeRosterItem(m.jid);m.doClose();}});
