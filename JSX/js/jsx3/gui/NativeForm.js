/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.NativeForm",jsx3.gui.Block,null,function(q,f){var
ub={A:"box",B:' id="',C:'"',D:"submit",E:"Q6",F:' action="',G:'" method="',H:'" enctype="',I:'" target="',J:' class="',K:'" ',L:"",M:"complete",N:"loaded",O:"htfrm.bad_xml",P:"UniversalBrowserRead",Q:"htfrm.bad_dt",R:" ",a:"jsx3nativeform",b:"get",c:"post",d:"_blank",e:"_self",f:"_top",g:"application/x-www-form-urlencoded",h:"multipart/form-data",i:"method",j:"action",k:"enctype",l:"target",m:"beforeEnd",n:"jsxdata",o:"error",p:"_iframe",q:'<iframe id="',r:'" name="',s:'" src="about:blank"',t:"load",u:"r0",v:"></iframe>",w:"about:blank",x:"100%",y:"form",z:"inline"};q.DEFAULTCLASSNAME=ub.a;var
O=jsx3.util.Logger.getLogger(q.jsxclass.getName());var
ja=jsx3.gui.Event;q.GET=ub.b;q.POST=ub.c;q.IFRAME=0;q.BLANK=1;q.SELF=2;q.TOP=3;q.eA={1:ub.d,2:ub.e,3:ub.f};q.sK=ub.g;q.kP=ub.h;f.getMethod=function(){return this.jsxmethod;};f.setMethod=function(n){n=n!=null?n.toLowerCase():ub.b;this.jsxmethod=n;var
Ba=this.hJ();if(Ba)Ba.setAttribute(ub.i,n);};f.getAction=function(){return this.jsxaction;};f.setAction=function(g){this.jsxaction=g;var
J=this.hJ();if(J)J.setAttribute(ub.j,(this.getUriResolver()).resolveURI(g));};f.getMultipart=function(){return this.jsxmulti;};f.setMultipart=function(h){this.jsxmulti=h;var
K=this.hJ();if(K)K.setAttribute(ub.k,h?q.kP:q.sK);};f.getTarget=function(){return this.jsxtarget;};f.setTarget=function(d){this.jsxtarget=d;var
Pa=this.hJ();if(Pa)Pa.setAttribute(ub.l,this.Aw(d));var
gb=this.N4();var
F=this.er();if(gb&&!F){gb.parentNode.removeChild(gb);}else if(!gb&&F)jsx3.html.insertAdjacentHTML(Pa,ub.m,this.AX());};f.getIFrame=function(){return this.jsxiframe;};f.setIFrame=function(a){this.jsxiframe=a;};f.submit=function(){var
Na=this.hJ();if(Na){this.Q6();try{Na.submit();}catch(Kb){if(jsx3.CLASS_LOADER.IE)window.clearInterval(this.pq);this.doEvent(ub.n,{type:ub.o,message:(jsx3.NativeError.wrap(Kb)).toString()});}}};f.reset=function(){var
Ba=this.hJ();if(Ba)Ba.reset();};f.s7=function(){if(jsx3.CLASS_LOADER.IE){try{return this.eval(this.getId()+ub.p);}catch(Kb){}}else return this.N4();};f.N4=function(){return (this.getDocument()).getElementById(this.getId()+ub.p);};f.Aw=function(m){var
v;if(this.jsxiframe){v=this.Pk(this.jsxiframe);if(v)v=v.getIFrameId();}return v||q.eA[m]||this.getId()+ub.p;};f.hJ=function(){return this.getRendered();};f.er=function(){return this.jsxtarget==0||this.jsxtarget==null;};f.AX=function(){var
Xa=this.getId()+ub.p;return ub.q+Xa+ub.r+Xa+ub.s+this.Fg(ub.t,ub.u,1)+ub.v;};f.r0=function(n,r){var
y=this.s7();if(y&&y.contentDocument&&y.contentDocument.location.href!=ub.w)this.doEvent(ub.n,{type:ub.t});};f.Q6=function(r,n){if(jsx3.CLASS_LOADER.IE){var
Q=(this.s7()).document;this.pq=window.setInterval((jsx3.$F(function(){this.dT(Q!==(this.s7()).document);})).bind(this),250);}};f.Hj=function(j,c,l){this.sk(j,c,l,4);};f.zd=function(s){if(this.getParent()&&(s==null||isNaN(s.parentwidth)||isNaN(s.parentheight))){s=(this.getParent()).Id(this);}else if(s==null)s={};this.applyDynamicProperties();var
la=this.getRelativePosition()!=0;var
Sa,A,wb;var
Ja=!la&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
t=!la&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(s.left==null)s.left=0;if(s.top==null)s.top=0;if(s.width==null)s.width=ub.x;if(s.height==null)s.height=ub.x;s.tagname=ub.y;if(!s.boxtype)s.boxtype=la?ub.z:ub.A;return new
jsx3.gui.Painted.Box(s);};f.paint=function(){this.applyDynamicProperties();var
Aa=this.getId();var
C=this.renderAttributes(null,true);var
Fb=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
Va=this.Wl(true);Va.setAttributes(ub.B+Aa+ub.C+this.Fg(ub.D,ub.E)+ub.F+(this.getUriResolver()).resolveURI(this.jsxaction)+ub.G+this.jsxmethod+ub.H+(this.jsxmulti?q.kP:q.sK)+ub.I+this.Aw(this.jsxtarget)+ub.C+this.Rl()+this.nk()+ub.J+this.dd()+ub.K+C);Va.setStyles(Fb);return (Va.paint()).join((this.er()?this.AX():ub.L)+this.paintChildren());};if(jsx3.CLASS_LOADER.IE){f.dT=function(o){var
v=this.s7();try{v.document.readyState==ub.L;}catch(Kb){window.clearInterval(this.pq);this.pq=null;this.doEvent(ub.n,{type:ub.o});return;}if(o&&(v.document.readyState==ub.M||v.document.readyState==ub.N)){window.clearInterval(this.pq);this.pq=null;this.doEvent(ub.n,{type:ub.t});}};f.getResponseText=function(){var
ia=this.s7();if(!ia)return null;var
hb=ia.document;var
v=hb?hb.documentElement:null;if(v&&v.textContent){return v.textContent;}else if(hb.body&&hb.body.childNodes[0])return hb.body.childNodes[0].innerHTML;return null;};f.getResponseXML=function(){var
D=this.s7();if(!D)return null;var
Nb=D.document;var
Oa=new
jsx3.xml.Document();if(Nb.XMLDocument&&Nb.XMLDocument.documentElement){Oa.loadXML(Nb.XMLDocument.documentElement.xml);}else{var
R=null;if(Nb.documentElement){R=window.XMLSerializer?(new
XMLSerializer()).serializeToString(Nb):Nb.xml;}else if(Nb.body)R=Nb.body.innerHTML;Oa.loadXML(R);if(Oa.hasError()){O.error(jsx3._msg(ub.O,Oa.getError()));Oa=null;}}return Oa;};}else{f.getResponseText=function(){var
Ha=this.s7();if(!Ha)return null;try{if(window.netscape&&netscape.security)netscape.security.PrivilegeManager.enablePrivilege(ub.P);}catch(Kb){}var
aa=Ha.contentDocument;if(aa instanceof HTMLDocument&&aa.body&&aa.body.childNodes[0]){return aa.body.childNodes[0].innerHTML;}else if(aa.childNodes){return (new
XMLSerializer()).serializeToString(aa);}else{O.warn(jsx3._msg(ub.Q,aa));return ub.L;}};f.getResponseXML=function(){var
v=this.s7();if(!v)return null;try{if(window.netscape&&netscape.security)netscape.security.PrivilegeManager.enablePrivilege(ub.P);}catch(Kb){}var
Na=v.contentDocument;var
D=new
jsx3.xml.Document();if(Na instanceof HTMLDocument){D.loadXML(jsx3.html.getOuterHTML(Na));}else if(Na.childNodes){D.loadXML((new
XMLSerializer()).serializeToString(Na));}else{O.warn(jsx3._msg(ub.Q,Na));D=null;}if(D.hasError()){O.error(jsx3._msg(ub.O,D.getError()));D=null;}return D;};}f.dd=function(){var
va=this.getClassName();return q.DEFAULTCLASSNAME+(va?ub.R+va:ub.L);};});
