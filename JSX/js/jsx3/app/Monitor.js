/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.Class.defineClass("jsx3.app.Monitor",jsx3.util.Logger.FormatHandler,null,function(b,o){var
ub={a:"jsx_monitor_path",b:"jsx:///html/jsx3.app.Monitor.html",c:"jsx3.lang.System",d:"TR",e:"m",f:"namespace",g:"memory",h:"Monitor_",i:"directories=no,location=no,menubar=no,status=yes,personalbar=no,titlebar=yes,toolbar=no,resizable=yes,scrollbars=no,width=500,height=400",j:"function"};var
Ta=jsx3.app.Server;b.F0=false;b.Np=jsx3.net.URIResolver.DEFAULT.resolveURI(jsx3.getEnv(ub.a)||ub.b);b.ideDidLoad=function(){b.F0=true;};o.VH=false;o.n5=true;o.YF=null;o.Gx=false;o.yu=null;o.Jo=null;o.init=function(c){this.jsxsuper(c);};o.onAfterInit=function(){if(this.YF!=null){var
sa=null;if(jsx3.Class.forName(ub.c))sa=jsx3.System.getApp(this.YF);if(sa!=null){this.MO(sa);}else Ta.subscribe(Ta.INITED,this,ub.d);}else{this.n5=false;this.Gx=false;this.VH=true;this.bI();}};o.MO=function(p){this.VH=true;this.yu=p;if(this.Gx){var
V=this;p.registerHotKey(function(l){V.mL();},ub.e,false,true,true);}else this.bI();};o.TR=function(q){var
B=q.target;if(B.getEnv(ub.f)==this.YF){if(!b.F0||!this.n5)this.MO(B);Ta.unsubscribe(Ta.INITED,this);}};o.handle=function(l){if(this.VH&&(!b.F0||!this.n5)){var
O=this.Jo;if(O){if(O.closed)if(!this.Gx)this.bI();try{if(!O.closed&&O.appendMessage){if(O.isFirstTime()){var
bb=jsx3.util.Logger.Manager.getManager();var
va=bb.getHandler(ub.g);if(va)(jsx3.$A(va.getRecords())).each((jsx3.$F(function(e){if(e!==l)O.appendMessage(this.format(e),jsx3.util.Logger.levelAsString(e.getLevel()));})).bind(this));}O.appendMessage(this.format(l),jsx3.util.Logger.levelAsString(l.getLevel()));}}catch(Kb){}}}};o.mL=function(){if(this.Jo==null||this.Jo.closed)this.bI();};o.bI=function(){this.Jo=window.open(b.Np,ub.h+this.getName(),ub.i);if(this.Jo){if(this.yu)if(typeof this.Jo.setName==ub.j)this.Jo.setName(this.yu.getEnv(ub.f));else this.Jo._jsxname=this.yu.getEnv(ub.f);window.focus();}};o.getDisableInIDE=function(){return this.n5;};o.setDisableInIDE=function(d){this.n5=d;};o.getServerNamespace=function(){return this.YF;};o.setServerNamespace=function(c){this.YF=c;};o.getActivateOnHotKey=function(){return this.Gx;};o.setActivateOnHotKey=function(p){this.Gx=p;};});jsx3.util.Logger.Handler.registerHandlerClass(jsx3.app.Monitor.jsxclass);
