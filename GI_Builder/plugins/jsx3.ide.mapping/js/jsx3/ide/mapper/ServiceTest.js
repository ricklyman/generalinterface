jsx3.Class.defineClass("jsx3.ide.mapper.ServiceTest",jsx3.gui.Block,null,function(l,b){var
ub={A:"jsx_schema_wsdlurl_inbound_filter",Aa:"Service Error: ",B:"onafterreceive",Ba:"\r\n\r\n(NOTE: You may still resume the step-through test by pasting a valid SOAP response within this field and clicking the 'play/resume' icon on the following tab.)",C:"jsx_schema_outbound_url",Ca:"jsx_schema_tabinboundmapping",D:"jsx_schema_headers",Da:"jsx_schema_pause_3",E:"jsx_schema_envelope",Ea:"ServiceTest  -executing inbound filter code",F:"jsx_schema_headers_response",Fa:"var k = ",G:"jsx_schema_envelope_response",Ga:";k;",H:"jsx_schema_username",Ha:"json couldn't be converted to XML.",I:"jsx_schema_userpass",Ia:"jsx_schema_pause_4",J:"jsx_schema_method",Ja:" ServiceTest  -the response cannot be mapped. format unknown.",K:"method",Ka:"ServiceTest------------------end test]",L:"POST",La:"ServiceTest  -mapping Server Response",M:"jsx_schema_test_execute",Ma:"']/record[@type='O']/@stubsrc",N:"jsx_schema_play_1",Na:"0",O:"jsx_schema_play_2",Oa:"ServiceTest  -Error parsing/locating the alternate inbound document at '",P:"jsx_schema_play_3",Pa:"'. The system will instead attempt to generate a test document based upon the inbound mapping rules.\n",Q:"jsx_schema_play_4",Qa:/></g,R:"jsx_schema_label_0",Ra:">\r\n<",S:"jsx_schema_label_1",Sa:"output",T:"jsx_schema_label_2",U:"jsx_schema_label_3",V:"jsx_schema_label_4",W:"jsx_schema_label_5",X:"jsx_schema_taboutboundmapping",Y:"']/headers/record",Z:"=",_:"\n",a:"jsx_schema_oplist",aa:"ServiceTest----------------begin test]",b:"jsx3.net.Service",ba:"ServiceTest  -cancelling existing test connections",c:"namespace",ca:"ServiceTest  -creating request document",d:"_onProcessRule",da:"#a0e05f",e:"ServiceTest  [",ea:"ServiceTest  -persisting request document",f:"] ",fa:"jsx_schema_pause_1",g:"service",ga:"ServiceTest  -executing outbound filter code",h:"//record[@type='S'] | /data/record/[@type='T']",ha:"jsx_schema_taboutboudanchor",i:"MapTester",ia:"1.0",j:"No valid CXF source document (an empty rules tree).",ja:"jsx_schema_pause_2",k:"//record[@type='S']/record | /data/record[@type='T']",ka:"jsx_schema_tabinboundanchor",l:"opname",la:"contacting service...",m:"jsxtext",ma:"ServiceTest  -opening the connection with service, '",n:"I",na:"'",o:"O",oa:/^script$/i,p:"//record[@opname='",pa:"GET",q:"']",qa:"onResponse",r:"record[@type='",ra:"ServiceTest  -adding HTTP request header: ",s:"']//mappings/record",sa:":",t:"jsxid",ta:"ServiceTest  -sending request",u:"serverns",ua:"jsx_schema_status",v:"name",va:"ServiceTest  -receiving response (status: ",w:"value",wa:")",x:"jsx_schema_wsdlurl_outbound_filter",xa:"200",y:"onbeforesend",ya:"202",z:"",za:"ServiceTest  -call failed: "};b.init=function(){this.jsxsuper();};b.initialize=function(f){this.mapperid=f;this.listOperations();};b.getMapper=function(g){var
Wa=g!=null?g.getServer():this.getServer();if(Wa==null)Wa=jsx3.IDE;return ((Wa.getRootBlock()).getDescendantsOfType(jsx3.ide.mapper.Mapper))[0];};b.getOperationList=function(){return this.getDescendantOfName(ub.a);};b.getOperationName=function(){return (this.getOperationList()).getValue();};b.getService=function(){if(this.service==null){jsx3.require(ub.b);var
lb=new
jsx3.net.Service();lb.setOperationName(this.getOperationName());lb.setRulesXML((this.getMapper()).getRulesXML());lb.setNamespace(jsx3.ide.SERVER.getEnv(ub.c));lb.subscribe(jsx3.net.Service.ON_PROCESS_RULE,this,ub.d);this.service=lb;}return this.service;};b._onProcessRule=function(d){jsx3.ide.mapper.Mapper.dK.log(d.level,ub.e+d.action+ub.f+d.description,{instance:this.getMapper()});};b.resetService=function(){if(this.service){this.service.setOutboundDocument();this.service.setInboundDocument();this.service.resetRulesTree();delete this[ub.g];}};b.getRequest=function(k,j,a,c,p){return this._request=jsx3.net.Request.open(k,j,a,c,p);};b.resetRequest=function(){if(this._request){this._request.abort();this._request=null;}};b.onRestore=function(){var
Lb=this.getMapper();if(Lb&&(Lb.getEditor()).getDirty())Lb.writeMappings(true);this.reset(true);};b.reset=function(a){var
jb=a?(this.getOperationList()).getValue():null;if(this.timeoutid)window.clearTimeout(this.timeoutid);this.resetService();this.resetRequest();this.listOperations();(this.getOperationList()).setValue(jb);this.select();};b.listOperations=function(){var
v=this.getOperationList();var
W=this.getMapper();var
L=W.getRulesXML();if(L){var
R=L.selectSingleNode(ub.h);if(R==null)R=L.getRootNode();if(R==null){jsx3.util.Logger(ub.i,ub.j,9);}else{v.clearXmlData(false);v.setValue();var
ya=L.selectNodes(ub.k);for(var
ja=ya.iterator();ja.hasNext();){var
Oa=ja.next();v.insertRecord({jsxid:Oa.getAttribute(ub.l),jsxtext:Oa.getAttribute(ub.m)},null,false);}v.repaint();}}};b.listRules=function(){var
vb=this.getDescendantsOfType(jsx3.gui.Matrix);if(vb&&vb.length>1){this.listRule(vb[0],ub.n);this.listRule(vb[1],ub.o);}};b.listRule=function(h,m){var
cb=(this.getMapper()).getRulesXML();var
ka=cb.selectSingleNode(ub.p+this.getOperationName()+ub.q);h.clearXmlData(false);if(ka){var
pa=ka.selectNodes(ub.r+m+ub.s);for(var
E=pa.iterator();E.hasNext();){var
pb=E.next();var
vb={};vb.jsxid=pb.getAttribute(ub.t);vb.rulename=((pb.getParent()).getParent()).getAttribute(ub.m);vb.serverns=pb.getAttribute(ub.u);vb.name=pb.getAttribute(ub.v);vb.value=pb.getAttribute(ub.w);h.insertRecord(vb,null,false);}}h.repaintData();};b.select=function(){this.resetRequest();this.resetService();var
F=this.getOperationName()!=null;if(F)var
Fa=this.getService();var
tb;if((tb=this.getDescendantOfName(ub.x))!=null)tb.setValue(F&&Fa.getMEPNode(ub.n)?(Fa.getMEPNode(ub.n)).getAttribute(ub.y):ub.z);if((tb=this.getDescendantOfName(ub.A))!=null)tb.setValue(F&&Fa.getMEPNode(ub.o)?(Fa.getMEPNode(ub.o)).getAttribute(ub.B):ub.z);if((tb=this.getDescendantOfName(ub.C))!=null)tb.setValue(F?Fa.getEndpointURL():ub.z);if((tb=this.getDescendantOfName(ub.D))!=null)tb.setValue(F?this.getHeaders():ub.z);if((tb=this.getDescendantOfName(ub.E))!=null)tb.setValue(ub.z);if((tb=this.getDescendantOfName(ub.F))!=null)tb.setValue(ub.z);if((tb=this.getDescendantOfName(ub.G))!=null)tb.setValue(ub.z);if((tb=this.getDescendantOfName(ub.H))!=null)tb.setValue(ub.z);if((tb=this.getDescendantOfName(ub.I))!=null)tb.setValue(ub.z);var
ia;if((tb=this.getDescendantOfName(ub.J))!=null)tb.setValue(F?(ia=(Fa.getOperationNode()).getAttribute(ub.K))!=null?ia:ub.L:ub.L);this.listRules();if((tb=this.getDescendantOfName(ub.M))!=null)tb.setEnabled(F?1:0,true);if((tb=this.getDescendantOfName(ub.N))!=null)tb.setEnabled(0,true);if((tb=this.getDescendantOfName(ub.O))!=null)tb.setEnabled(0,true);if((tb=this.getDescendantOfName(ub.P))!=null)tb.setEnabled(F?1:0,true);if((tb=this.getDescendantOfName(ub.Q))!=null)tb.setEnabled(0,true);if((tb=this.getDescendantOfName(ub.R))!=null)tb.setBackgroundColor(ub.z,true);if((tb=this.getDescendantOfName(ub.S))!=null)tb.setBackgroundColor(ub.z,true);if((tb=this.getDescendantOfName(ub.T))!=null)tb.setBackgroundColor(ub.z,true);if((tb=this.getDescendantOfName(ub.U))!=null)tb.setBackgroundColor(ub.z,true);if((tb=this.getDescendantOfName(ub.V))!=null)tb.setBackgroundColor(ub.z,true);if((tb=this.getDescendantOfName(ub.W))!=null)tb.setBackgroundColor(ub.z,true);if((tb=this.getDescendantOfName(ub.X))!=null)tb.doExecute();};b.getHeaders=function(){var
qb=((this.getMapper()).getRulesXML()).selectNodes(ub.p+this.getOperationName()+ub.Y);var
Ia=ub.z;for(var
D=qb.iterator();D.hasNext();){var
Aa=D.next();Ia=Ia+(ub.Z+Aa.getAttribute(ub.v)+ub.Z+Aa.getAttribute(ub.w)+ub._);}return Ia;};b.start=function(){jsx3.ide.mapper.Mapper.dK.trace(ub.aa,{instance:this.getMapper()});jsx3.ide.mapper.Mapper.dK.trace(ub.ba,{instance:this.getMapper()});if(this.timeoutid)window.clearTimeout(this.timeoutid);this.resetRequest();this.resetService();this.mapAndCreate();};b.mapAndCreate=function(){jsx3.ide.mapper.Mapper.dK.trace(ub.ca,{instance:this.getMapper()});(this.getDescendantOfName(ub.R)).setBackgroundColor(ub.da,true);(this.getDescendantOfName(ub.X)).doExecute();var
Ra=this.getService();var
J=Ra.getServiceMessage();jsx3.ide.mapper.Mapper.dK.trace(ub.ea,{instance:this.getMapper()});Ra.setOutboundDocument(J);(this.getDescendantOfName(ub.R)).setBackgroundColor(ub.z,true);(this.getDescendantOfName(ub.S)).setBackgroundColor(ub.da,true);if((this.getDescendantOfName(ub.fa)).getState()==0){var
jb=this;this.timeoutid=window.setTimeout(function(){jb.outboundFilter();},1000);}else (this.getDescendantOfName(ub.N)).setEnabled(1,true);};b.outboundFilter=function(){jsx3.ide.mapper.Mapper.dK.trace(ub.ga,{instance:this.getMapper()});(this.getDescendantOfName(ub.ha)).doExecute();(this.getService()).doOutboundFilter((this.getDescendantOfName(ub.x)).getValue());(this.getDescendantOfName(ub.S)).setBackgroundColor(ub.z,true);(this.getDescendantOfName(ub.T)).setBackgroundColor(ub.da,true);var
w=(this.getService()).getOutboundDocument();if(w)(this.getDescendantOfName(ub.E)).setValue(w.serialize(ub.ia));if((this.getDescendantOfName(ub.ja)).getState()==0){var
H=this;this.timeoutid=window.setTimeout(function(){H.send();},1000);}else (this.getDescendantOfName(ub.O)).setEnabled(1,true);};b.getUserName=function(){var
bb=jsx3.util.strTrim((this.getDescendantOfName(ub.H)).getValue());return bb==ub.z?null:bb;};b.getUserPass=function(){var
Nb=jsx3.util.strTrim((this.getDescendantOfName(ub.I)).getValue());return Nb==ub.z?null:Nb;};b.send=function(){(this.getDescendantOfName(ub.ka)).doExecute();(this.getDescendantOfName(ub.G)).setValue(ub.la);(this.getDescendantOfName(ub.T)).setBackgroundColor(ub.z,true);(this.getDescendantOfName(ub.U)).setBackgroundColor(ub.da,true);var
Xa=(this.getDescendantOfName(ub.C)).getValue();var
xa=(this.getDescendantOfName(ub.D)).getValue();var
T=(this.getDescendantOfName(ub.E)).getValue();var
zb=(this.getDescendantOfName(ub.J)).getValue();jsx3.ide.mapper.Mapper.dK.trace(ub.ma+Xa+ub.na,{instance:this.getMapper()});if(zb.search(ub.oa)==0)zb=ub.pa;var
hb=this.getRequest(zb,Xa,true,this.getUserName(),this.getUserPass());hb.subscribe(jsx3.net.Request.EVENT_ON_RESPONSE,this,ub.qa);var
Ea=xa.split(ub._);for(var
t=0;t<Ea.length;t++){var
cb=jsx3.util.strTrim(Ea[t]);if(cb.length>0){var
fa=cb.substring(0,1);cb=cb.substring(1);var
sa=cb.split(fa);if(sa.length==2){jsx3.ide.mapper.Mapper.dK.trace(ub.ra+sa[0]+ub.sa+sa[1],{instance:this.getMapper()});hb.setRequestHeader(sa[0],sa[1]);}}}jsx3.ide.mapper.Mapper.dK.trace(ub.ta,{instance:this.getMapper()});hb.send(zb==ub.L?T:null);};b.onResponse=function(i){this._request=null;var
eb=i.target;var
mb=eb.getAllResponseHeaders();var
J=eb.getStatus();var
ia=eb.getResponseText();(this.getDescendantOfName(ub.F)).setValue(mb);(this.getDescendantOfName(ub.ua)).setValue(J);jsx3.ide.mapper.Mapper.dK.trace(ub.va+J+ub.wa,{instance:this.getMapper()});if((J+ub.z!=ub.xa&&J+ub.z!=ub.ya)&&ia==ub.z){jsx3.ide.mapper.Mapper.dK.error(ub.za+eb.getStatusText(),{instance:this.getMapper()});var
da=ub.Aa+eb.getStatusText();da=da+ub.Ba;(this.getDescendantOfName(ub.G)).setValue(da);(this.getDescendantOfName(ub.P)).setEnabled(1,true);(this.getDescendantOfName(ub.U)).setBackgroundColor(ub.z,true);(this.getDescendantOfName(ub.V)).setBackgroundColor(ub.da,true);}else{(this.getDescendantOfName(ub.G)).setValue(ia);var
Ia=this;this.timeoutid=window.setTimeout(function(){(Ia.getDescendantOfName(ub.Ca)).doExecute();},1000);(this.getDescendantOfName(ub.U)).setBackgroundColor(ub.z,true);(this.getDescendantOfName(ub.V)).setBackgroundColor(ub.da,true);if((this.getDescendantOfName(ub.Da)).getState()==0){var
Ia=this;this.timeoutid=window.setTimeout(function(){Ia.inboundFilter();},1000);}else (this.getDescendantOfName(ub.P)).setEnabled(1,true);}};b.inboundFilter=function(){jsx3.ide.mapper.Mapper.dK.trace(ub.Ea,{instance:this.getMapper()});(this.getDescendantOfName(ub.V)).setBackgroundColor(ub.z,true);var
bb=(this.getDescendantOfName(ub.G)).getValue();var
qa;if((this.getService())._isJSON(ub.o)){try{var
ja=jsx3.eval(ub.Fa+bb+ub.Ga);if(ja){qa=jsx3.net.Service.JSON2XML(ja);if(!qa){jsx3.ide.LOG.warn(ub.Ha);return;}}}catch(Kb){var
qb=jsx3.lang.NativeError.wrap(Kb);jsx3.ide.LOG.warn(qb.getMessage());return;}}else{qa=new
jsx3.Document();qa.loadXML(bb);}var
Q=(this.getDescendantOfName(ub.A)).getValue();if(!qa.hasError()){(this.getService()).setInboundDocument(qa);var
vb=jsx3.util.strTrim((this.getDescendantOfName(ub.ua)).getValue());if(vb==ub.z||isNaN(vb))vb=0;(this.getService()).status=vb;(this.getService()).doInboundFilter(Q);(this.getDescendantOfName(ub.W)).setBackgroundColor(ub.da,true);if((this.getDescendantOfName(ub.Ia)).getState()==0){var
kb=this;this.timeoutid=window.setTimeout(function(){kb.inboundMap();},1000);}else (this.getDescendantOfName(ub.Q)).setEnabled(1,true);}else{jsx3.ide.mapper.Mapper.dK.warn(ub.Ja,{instance:this.getMapper()});(this.getService()).setInboundDocument(bb);(this.getService()).doInboundFilter(Q);(this.getDescendantOfName(ub.X)).doExecute();jsx3.ide.mapper.Mapper.dK.trace(ub.Ka,{instance:this.getMapper()});}};b.inboundMap=function(h){jsx3.ide.mapper.Mapper.dK.trace(ub.La,{instance:this.getMapper()});(this.getService()).doInboundMap();(this.getDescendantOfName(ub.W)).setBackgroundColor(ub.z,true);(this.getDescendantOfName(ub.X)).doExecute();jsx3.ide.mapper.Mapper.dK.trace(ub.Ka,{instance:this.getMapper()});};b.getAlternateResponse=function(){var
P=((this.getMapper()).getRulesXML()).selectSingleNode(ub.p+this.getOperationName()+ub.Ma);if(P!=null){var
oa=new
jsx3.xml.Document();var
ra=((this.getService()).getServer()).resolveURI(P.getValue());oa.load(ra);if((oa.getError()).code!=ub.Na){jsx3.ide.mapper.Mapper.dK.error(ub.Oa+ra+ub.Pa+oa.getError(),{instance:this.getMapper()});}else{var
I=oa.toString();I=I.replace(ub.Qa,ub.Ra);(this.getDescendantOfName(ub.G)).setValue(I);return;}}var
I=((this.getService()).getServiceMessage(ub.Sa)).toString();I=I.replace(ub.Qa,ub.Ra);(this.getDescendantOfName(ub.G)).setValue(I);};b.close=function(){if(this.timeoutid)window.clearTimeout(this.timeoutid);this.resetService();this.resetRequest();(this.getAncestorOfType(jsx3.gui.Dialog)).doClose();};b.onDestroy=function(j){this.jsxsuper(j);var
N;if((N=this.getMapper(j))!=null)N.setTesterId();};});
