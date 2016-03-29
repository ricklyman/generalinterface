jsx3.Class.defineClass("jsx3.ide.mapper.LogHandler",jsx3.util.Logger.FormatHandler,null,function(b,c){var
ub={a:"0",b:"instance"};c.init=function(q){this._queue=[];this.jsxsuper(q);};c.handle=function(e){if(this.x1)window.clearTimeout(this.x1);var
Va=e.getParameters();if(Va){var
Jb;for(var Fa in Va)if(Fa==ub.a&&(Jb=Va[Fa][ub.b])!=null)break;if(Jb){var
yb=this;(this.getQueue()).push([jsx3.util.strEscapeHTML(this.format(e)),e.getLevel()]);this.x1=window.setTimeout(function(){Jb._out(yb.getQueue());yb.resetQueue();},100);}}};c.getQueue=function(){return this._queue;};c.resetQueue=function(){this._queue=[];};});jsx3.util.Logger.Handler.registerHandlerClass(jsx3.ide.mapper.LogHandler.jsxclass);jsx3.Class.defineClass("jsx3.ide.mapper.Mapper",jsx3.gui.Block,null,function(c,l){var
ub={A:"undefined",Aa:"Outdated Schema Version: '",Ab:"E",Ac:"ancestor-or-self::*",Ad:"Adding        -Message: ",Ae:":group | .//",Af:"      objService.doCall();\n",Ag:"components/Rules/outbound_node.xml",Ah:" | ",B:"_jsx_sn_hash",Ba:"'. Must update to version, '",Bb:"D",Bc:"@",Bd:"soapstyle",Be:":attributeGroup | .//",Bf:"    };\n\n",Bg:"method",Bh:"Sample ",C:"jsx_schema_log",Ca:"'. The parse will continue, but may fail.",Cb:"A",Cc:"[",Cd:"Response",Ce:":element",Cf:"    service.on#2Success = function(objEvent) {\n",Cg:"jsx_schema_mapnode_method",Ch:" Message",D:"beforeEnd",Da:"Document Type: XML",Db:"mappings",Dc:"]",Dd:"soaprpcns",De:":restriction",Df:"      //var responseXML = objEvent.target.getInboundDocument();\n",Dg:"jsonp",Dh:"jsx_schema_mapnode_mappings_XML",E:"<pre class='jsxide_sysout'>",Ea:"The URL, ",Eb:"Script",Ec:"/",Ed:"Adding         -RPC Name: ",Ee:" type=",Ef:'      objEvent.target.getServer().alert("Success","The service call was successful.");\n',Eg:"repeat",Eh:"jsx_schema_mapnode_restrictions_XML",F:"</pre>",Fa:", does not return a valid XML document.",Fb:'setValue("',Fc:"WSDL (",Fd:":message[@name='",Fe:"restrictions",Ff:"    service.on#2Error = function(objEvent) {\n",Fg:"stubsrc",Fh:"jsx_schema_mapnode_headers_XML",G:"",Ga:"xsl/schema_support.xsl",Gb:'");',Gc:"W",Gd:"The mapper failed to fully parse one or more of the the 'parts' for the ",Ge:"value",Gf:"      var myStatus = objEvent.target.getRequest().getStatus();\n",Gg:"stubpath",Gh:"jsx_schema_mapnode_mappings_XSL",H:"<pre class='jsxide_sysout jsxide_",Ha:/<\/?transformiix:result[^>]*>/gi,Hb:"xmlns:",Hc:"Adding     -WSDL",Hd:" message.",He:"simple",Hf:'      objEvent.target.getServer().alert("Error","The service call failed. The HTTP Status code is: " + myStatus);\n',Hg:"onbeforesend",Hh:"jsx_schema_mapnode_restrictions_XSL",I:"'>",Ia:"Input Schema Profile:",Ib:"xmlns",Ic:":definitions/",Id:":part",Ie:"Converting     -Simple: ",If:"    service.on#2Invalid = function(objEvent) {\n",Ig:"onafterreceive",Ih:"jsx_schema_mapnode_headers_XSL",J:"_showtimeout",Ja:"location",Jb:"tns",Jc:":service/",Jd:/[\s,;]/,Je:"wsdl:arrayType",Jf:'      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\\n\\n" + objEvent.message);\n',Jg:"jsx1",K:"namespace",Ka:"Parsing    -WSDL Import: '",Kb:"type",Kc:":port/",Kd:"@name='",Ke:"arrayType",Kf:"  }\n",Kg:"jsx3",L:"jsx3.IDE",La:"' has already been added. The mapper will only import a file once and does not give priority to subsequent, duplicate imports or includes.",Lb:"C",Lc:":address",Ld:" or ",Le:/[\[]]/,Lf:");\n\n",Lg:"jsx4",M:"At least one component file must be open for edit in order to use the XML Mapping Utility. You must either create a new component or open an existing component to provide the mapper with the appropriate server context.",Ma:"import",Mb:"Validating -Checking Rules File: '",Mc:"Service (",Md:"Defining       -A parts element was encountered that specifies a more-specific part list: ",Me:"restriction",Mf:/#1/g,Mg:/([^\[]*)/,N:"properties/Mapper.xml",Na:"Import Failure. Could not resolve:\n",Nb:"'.",Nc:"S",Nd:"element",Ne:"item",Nf:/#3/g,Ng:/\[index\(\)\s*=\s*(\d*)\]/g,O:"events/Mapper.xml",Oa:"Recursing  -WSDL Import: ",Ob:"//record[@src]",Oc:"binding",Od:":element[@name='",Oe:"Array",Of:/#2/g,Og:"<wsdl/>",P:"\n",Pa:"The WSDL import located at '",Pb:"No inputs (patter master) could be found for the CTF document, '",Pc:":binding[@name='",Pd:"Adding         -Part (Element): ",Pe:"extension",Pf:"Code Generator",Pg:"components/Profiles/show_wsdl_button.xml",Q:"testerid",Qa:"' could not be parsed and added to the WSDL. Please make sure the document exists and that it is a valid WSDL import document.",Qb:"record",Qc:"Adding      -Service: ",Qd:"The schema element, '",Qe:"[@targetNamespace='",Qf:"The generated JavaScript code has been copied to the clipboard.",Qg:"R",R:/^<\?xml[^\?^]*\?>/,Ra:"schemaLocation",Rb:"Document Type: JSON",Rc:"Defining     -SOAP Style: ",Rd:"', could not be located. This is most commonly due to a schema or wsdl import that failed to load.",Re:"group",Rf:"Error: Path Unavailable",Rg:"xml/profiles/",S:'<?xml version="1.0"?>\n',Sa:"Parsing    -Schema Import: '",Sb:"jsx3.xml.Document",Sc:"The WSDL located at '",Sd:" Warning        -The message part, '",Se:"_jsx_null_jsx_",Sf:"The JavaScript code cannot be generated until the rules file has been saved.",Sg:"none",T:":",Ta:"' xmlns:wsdl='http://schemas.xmlsoap.org/wsdl/'",Tb:"//record[@jsxid='jsxwsdlroot']",Tc:"' does not contain a concrete address (i.e., '/wsdl:definitions/wsdl:service/wsdl:port/soap:address'). Abstract WSDLs as well as protocols such as FTP and HTTP are not supported by the mapper.",Td:"', is used in a document literal context, but does not specify a concrete 'element' (it uses a 'type'). Validate the 'Target Namespace' field for this node using the Rule Node Profile editor.",Te:"Adding         -",Tf:"jsx3.ide.mapper.ServiceTest",Tg:"jsx3.gui.TextBox",U:"jsx_schema_rulestree",Ua:"The Schema import located at '",Ub:"jsxnamespace",Uc:"' does not contain a valid reference to a supported version of SOAP. At this time only the following namespace(s) are supported: '",Ud:"Adding         -Part (Simple):",Ue:"Complex",Uf:"components/ServiceTest/service_test_dialog.xml",Ug:"jsx3.gui.Select",V:"_jsxuri",Va:"' could not be parsed and added. Please make sure the document exists and that it is a valid WSDL import document.",Vb:"jsxversion",Vc:".//",Vd:":complexType[@name='",Ve:"Simple",Vf:"jsxdom",Vg:"_",W:"components/Inputs/wsdl.xml",Wa:"jsx_schema_rules_container",Wb:"jsx3.xml.Mapper",Wc:":*[@style='document']",Wd:"'] | ",We:": ",Wf:"DOM",Wg:"String",X:"jsx_schema_sourcexml",Xa:"<div>parsing inputs, please wait...</div>",Xb:"1.0",Xc:"document",Xd:":simpleType[@name='",Xe:"maxOccurs",Xf:"F",Xg:"/data/*",Y:"<not_applicable/>",Ya:"Invalid WSDL",Yb:"//record[@soaparray]",Yc:"rpc",Yd:"Adding         -Part (RPC): ",Ye:"maxoccur",Yf:"//record[@jsxid='",Yg:"jsx_schema_mapnode_",Z:"jsx_schema_profile",Za:"The document, <b>",Zb:"Validating -The XML document located at '",Zc:":operation",Zd:"jsxtext",Ze:"minOccurs",Zf:"record[",Zg:"jsx3.io.browser",_:"------------------\nXML Mapping Utility about to be reset...",_a:"</b>, is not in a supported WSDL format (the mapper has identified its format as <i>",_b:"' can not be updated from its 3.1.x format, because it contains SOAP Arary mappings. Mapping rules created prior to version 3.2 are missing critical information found only in the source WSDL, requiring that the WSDL be reparsed.",_c:"POST",_d:"datatype",_e:"minoccur",_f:"@jsxid!='",_g:"jsxdialog",a:"jsx3.ide.mapping",aa:"FK",ab:"</i>). Refer to the mapper log for more information.",ac:" Validating -The Rules file located at '",ad:"P",ae:"ttns",af:"nillable",ag:" and ",ah:"Choose Mapping Rules File",b:"LogHandler",ba:"jsx_schema_mapper_body",bb:"x",bc:"' is outdated (older than v3.2) and was updated when opened. Once saved, this file will no longer be compatible with previous versions of the mapper.",bd:"Adding       -Operation: ",be:"simpleType",bf:"true",bg:"rule_node",bh:"OK",c:"[%l] - %t - %M",ca:"components/default.xml",cb:"//*[@jsxid='",cc:"jsx3.ide.mapper.Mapper",cd:"soapAction",ce:"The type attribute, '",cf:"form",cg:"jsxopen",ch:"jsx_schema_source",d:"rules/_new.xml",da:"src",db:"Operation (Transaction)",dc:"' is outdated (v3.0) and was updated when opened. Once saved, this file will no longer be compatible with previous versions of the mapper.",dd:'""',de:"', references a type that cannot be found in the WSDL or any of its imported schemas.",df:"qualifed",dg:"descendant-or-self::record",dh:"components/Profiles/",e:"xml",ea:"jsx_schema_binding",eb:"T",ec:"' is not a valid Rules File and cannot be opened.",ed:"SOAPAction",ee:"The message part, '",ef:"unqualified",eg:"jsxselected",eh:"jsx_schema_rdo_schema",f:"wsdl",fa:"sourcedoc",fb:"1",fc:"' is invalid cannot be opened.",fd:"Failed to parse messages for the operation, ",fe:"' does not have a 'type' attribute which is required for rpc style WSDLs.",ff:"elementFormDefault",fg:"Cannot clone the root rule.",fh:"sample",g:"schema",ga:"//record[@opname='",gb:"jsxtransaction",gc:"Validating -An instance of the jsx3.xml.Document class was expected.",gd:"Desc: ",ge:"ancestor-or-self::*[attribute::",gf:"0",gg:"CDF Record",gh:"quicktest",h:"json",ha:"']",hb:"SCRIPT",hc:" Converting -The Legacy Rules file from CDF to CXF",hd:"opname",he:"]/attribute::",hf:"attributeFormDefault",hg:"record[@type='A' or @type='E']",hh:"reparse",i:"jsx://xml/stubs/soap.xml",ia:/^\/|^(http[s]?:\/\/)/i,ib:"headers",ic:"xsl/cdf_to_cxf.xsl",id:":portType/",ie:"attribute::",ig:"CDF Attribute",ih:"11",j:"/SOAP-ENV:Envelope/SOAP-ENV:Body",ja:"jsx_shema_input_types",jb:"Content-Type",jc:" Converting -The Legacy Rules file from CXF (3.1.1HF2) to CXF (3.2.0)",jd:":operation[@name='",je:" or @targetNamespace='",jf:"attribute",jg:".//restrictions/record[@name='enumeration']",jh:"12",k:"_jsx_",ka:"components/Inputs/",kb:"text/xml",kc:"//record/@path",kd:"input",ke:":schema[",kf:"//record[@type='P' or @type='T']",kg:"label",kh:"13",l:"http://schemas.xmlsoap.org/wsdl/",la:".xml",lb:"jsxid",lc:"//record[@type='W']",ld:"output",le:":import[@namespace and @schemaLocation]",lf:"includes",lg:'descendant::record[attribute::type="A" or attribute::type="E"]',lh:"21",m:"http://www.w3.org/1999/XMLSchema",ma:"components/main.xml",mb:"Input (request)",mc:"path",md:"fault",me:"@targetNamespace='",mf:"jsx3.lang.Package.definePackage(\n",mg:"restrictions/record[attribute::name='enumeration']",mh:"22",n:"http://www.w3.org/2001/XMLSchema",na:"Resolving URL: ",nb:"I",nc:"/jsx1:definitions",nd:"Fault (response variant)",ne:":element | .//",nf:'  "eg.service",                //the full name of the package to create\n',ng:'<data jsxid="jsxroot">\n',nh:"23",o:"http://www.w3.org/1999/XMLSchema-instance",oa:"Parsing Document: ",ob:"Output (response)",oc:"//record/@stubsrc",od:"jsxparts",oe:":attribute",of:"  function(service) {          //name the argument of this function\n\n",og:'<record jsxid="',oh:"Reparse Selected Branch",p:"http://www.w3.org/2001/XMLSchema-instance",pa:"Document Type: WSDL (",pb:"O",pc:"JSX/addins/mapping/",pd:":binding/",pe:":simpleType",pf:"    //call this method to begin the service call (eg.service.call#2();)\n",pg:'" jsxtext="',ph:"Reparsing this branch of the tree will remove any existing descendant rules from the selected item. Do you wish to proceed?",q:"http://schemas.xmlsoap.org/wsdl/soap/",qa:")",qb:"endpoint",qc:"jsx://",qd:"']/",qe:/^(A|D)$/,qf:"    service.call#2 = function() {\n",qg:'"/>\n',qh:"Reparse",r:"http://schemas.xmlsoap.org/soap/encoding/",ra:"Validating -Schema Namespace: '",rb:"JSON file could not be converted into a valid XML document: ",rc:"//@jsxid",rd:":body",re:"ref",rf:'      var objService = #3.loadResource("#1");\n',rg:"</data>",rh:"Cancel",s:"http://schemas.xmlsoap.org/soap/envelope/",sa:"'",sb:"Parsing JSON file: ",sc:"xcvt",sd:"use",se:":complexType | .//",sf:'      objService.setOperation("#2");\n\n',sg:"Invalid Target",sh:/></g,t:"proto/TextBox.xml",ta:"xmlns:xsd='",tb:"get",tc:"//record",td:"Defining       -SOAP Use: ",te:":choice | .//",tf:"      //subscribe\n",tg:"You must first select a <b>jsx3.gui.Block</b> Element in the <b>DOM</b> palette before auto-mapping.",th:">\n<",u:"proto/Select.xml",ua:"' xmlns:wsdl='http://schemas.xmlsoap.org/wsdl/' xmlns:soap='http://schemas.xmlsoap.org/wsdl/soap/' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/'",ub:"//",uc:"ancestor::",ud:"parts",ue:":sequence | .//",uf:"      objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.on#2Success);\n",ug:" ",uh:"components/ServiceTest/simulated_message.xml",v:"proto/CDF.xml",va:"/wsdl:definitions/wsdl:import[@location]",vb:":schema/",vc:":schema",vd:"Defining       -SOAP Body Parts:  ",ve:":all",vf:"      objService.subscribe(jsx3.net.Service.ON_ERROR, service.on#2Error);\n",vg:"xml/context_fields.xml",vh:"jsxpreviewmarkup",w:"jsx_schema_loglevel",wa:"/wsdl:definitions/wsdl:types",wb:":element[@name]",wc:"targetNamespace",wd:"Defining       -SOAP Namespace: ",we:"attributeGroup",wf:"      objService.subscribe(jsx3.net.Service.ON_INVALID, service.on#2Invalid);\n\n",wg:"xsl/context_fields.xsl",wh:"jsxpreviewmarkup_raw",x:"jsx_schema_log_title",xa:"wsdl:types",xb:"Adding         -Global: ",xc:":schema[@targetNamespace='",xd:"encodingStyle",xe:":extension",xf:"      //PERFORMANCE ENHANCEMENT: uncomment the following line of code to use XSLT to convert the server response to CDF (refer to the API docs for jsx3.net.Service.compile for implementation details)\n",xg:"components/Rules/rule_node.xml",xh:"\t",y:"Mapper Log - (",ya:"//xsd:schema/xsd:import[@schemaLocation] | //xsd:schema/xsd:include[@schemaLocation]",yb:"name",yc:"']//",yd:"Defining       -SOAP Encoding Style: ",ye:"base",yf:"      //objService.compile();\n\n",yg:"components/Rules/operation_node.xml",yh:"  ",z:" Level)",za:"Document Type: Schema (",zb:"CDATA",zc:"[@name='",zd:"message",ze:"/*[@name='",zf:"      //call the service\n",zg:"components/Rules/inbound_node.xml",zh:"jsxcaptionbar"};var
Fa=jsx3.ide.getPlugIn(ub.a);var
Qa=jsx3.util.Logger;c.dK=Qa.getLogger(c.jsxclass.getName());c.dK.setLevel(Qa.INFO);c.dK.setUseParentHandlers(false);var
Ra=new
jsx3.ide.mapper.LogHandler(c.jsxclass.getName()+ub.b);Ra.setFormat(ub.c);c.dK.addHandler(Ra);c.NEW_FILE_PATH=Fa.resolveURI(ub.d);c.TYPE_XML=ub.e;c.TYPE_WSDL=ub.f;c.TYPE_SCHEMA=ub.g;c.TYPE_JSON=ub.h;c.EXPAND_TO_DEPTH=1;c.SOAP_STUB_SRC=ub.i;c.SOAP_STUB_PATH=ub.j;c.delimiter=ub.k;c.IE={};c.IE.wsdl=ub.l;c.IE.schema1999=ub.m;c.IE.schema2001=ub.n;c.IE.schemaInstance1999=ub.o;c.IE.schemaInstance2001=ub.p;c.IE.soap=ub.q;c.IE.soapencoding=ub.r;c.IE.soapenvelope=ub.s;c.TEXTBOX_PROJECTION=Fa.resolveURI(ub.t);c.SELECT_PROJECTION=Fa.resolveURI(ub.u);c.CDF_PROJECTION=Fa.resolveURI(ub.v);l.init=function(){this.jsxsuper();};l._setLogLevel=function(e){var
za=this.getDescendantOfName(ub.w);za.selectItem(e,true);var
F=this.getDescendantOfName(ub.x);var
y=(za.getRecord(e)).jsxtext;F.setText(ub.y+y+ub.z,true);c.dK.setLevel(e);};l.getNSMap=function(e){if(!e)e=this.getSourceDocumentURL();var
Sa=this.getNSMaps();if(!Sa[e]){var
za=this.getSourceDocument(e);if(za){za.createNamespaceAxis();Sa[e]=za.getDeclaredNamespaces();}else return;}return Sa[e];};l.getNSMaps=function(){if(typeof this._jsx_sn_hash==ub.A)this._jsx_sn_hash={};return this._jsx_sn_hash;};l.resetNSMap=function(){delete this[ub.B];};l.getOut=function(){return this.getDescendantOfName(ub.C);};l.out=function(r){var
la=(this.getOut()).getRendered();jsx3.html.insertAdjacentHTML(la,ub.D,ub.E+r+ub.F);this.showLast();};l._out=function(i){var
w=ub.G;var
Z=i.length;for(var
zb=0;zb<Z;zb++)w=w+(ub.H+jsx3.util.Logger.levelAsString(i[zb][1])+ub.I+i[zb][0]+ub.F);var
ma=(this.getOut()).getRendered();jsx3.html.insertAdjacentHTML(ma,ub.D,w);this.showLast();};l.showLast=function(){if(this._showtimeout==null){var
J=this;this._showtimeout=window.setTimeout(function(){delete J[ub.J];var
na=(J.getOut()).getRendered();if(na&&na.lastChild)na.scrollTop=na.lastChild.offsetTop;},0);}};l._getManagedServer=function(){var
rb=jsx3.System.getAllApps();for(var
bb=0;bb<rb.length;bb++)if(rb[bb].getEnv(ub.K)!=ub.L&&rb[bb])return rb[bb];c.dK.error(ub.M,{instance:this});};l.getPropertiesPath=function(){return Fa.resolveURI(ub.N);};l.getModelEventsPath=function(){return Fa.resolveURI(ub.O);};l.getSupportedNamespaces=function(){var
wa=ub.G;for(var S in c.IE)wa=wa+(c.IE[S]+ub.P);return wa;};l.getEditor=function(){if(typeof this._editor==ub.A){if((z=this.getAncestorOfType(jsx3.gui.Dialog))==null){var
z={};z.setDirty=function(b){};z.getDirty=function(){return true;};z.reset=function(){};}this._editor=z;}return this._editor;};l.getTester=function(s){var
eb=s!=null?s.getServer():this.getServer();return eb.getJSXById(this.testerid);};l.setTesterId=function(n){if(n!=null){this.testerid=n;}else delete this[ub.Q];};l.getContent=function(){var
oa=this.getRulesXML()+ub.G;var
ia=ub.R;var
A=oa.search(ia)==0?ub.G:ub.S;return A+oa;};l.isSimpleNode=function(i,f){if(f&&f!=ub.G){var
Ka=f.split(ub.T);if(Ka.length==2){return this._isSimpleNode(i,Ka[0]);}else return typeof jsx3.net.Service.simpletypes[f]!=ub.A;}return false;};l._isSimpleNode=function(i,f){for(var
mb=(i.getAttributes()).iterator();mb.hasNext();){var
E=mb.next();if(E.getBaseName()==f&&E.getValue()==c.IE.schema2001)return true;}var
ta=i.getParent();return ta!=null?this._isSimpleNode(ta,f):false;};l.getBaseName=function(d){var
C=d.split(ub.T);if(C.length>1)d=C[1];return d;};l.getPrefix=function(e){var
lb=e.split(ub.T);return lb.length>1?lb[0]:null;};l.getRulesTree=function(){return this.getDescendantOfName(ub.U);};l.resetRulesTree=function(){var
N=this.getRulesTree();if(N){((this.getServer()).getCache()).setDocument(N.getXMLId(),(new
jsx3.xml.Document()).load(Fa.resolveURI(N.getXMLURL())));N.setValue(ub.G);N.repaint();}};l.resetEditorPane=function(){var
db=this.getEditorPane();delete db[ub.V];db.removeChildren();db.load(ub.W);};l.resetSourcePane=function(){var
B,V;if((B=this.getDescendantOfName(ub.X))!=null){B.setDisplay(jsx3.gui.Block.DISPLAYNONE,true);var
G=new
jsx3.xml.Document();G.loadXML(ub.Y);((this.getServer()).getCache()).setDocument(B.getXMLId(),G);}else if((V=this.getDescendantOfName(ub.Z))!=null){((V.getServer()).getCache()).clearById(V.getXMLId());V.repaintData();}};l.reset=function(){c.dK.trace(ub._,{instance:this});delete this[ub.aa];this.resetCacheData();(this.getOut()).setText(ub.G,true);this.resetRulesTree();this.resetSourceDocument();var
Va=this.getDescendantOfName(ub.ba);Va.removeChildren();Va.load(ub.ca,true);if(this.getTester())(this.getTester()).close();(this.getEditor()).onParse(0);};l.getSourceDocumentURL=function(r){if(r){var
Y;while(r!=null&&(Y=r.getAttribute(ub.da))==null)r=r.getParent();return Y;}return this.sourcedocurl;};l.setSourceDocumentURL=function(p){this.sourcedocurl=p;};l.getEditorPane=function(){return this.getDescendantOfName(ub.ea);};l.addSourceDocument=function(m,e){if(this.sourcedoc==null)this.sourcedoc={};this.sourcedoc[e]=m;this.setSourceDocumentURL(e);};l.getSourceDocument=function(b){if(!b)b=this.getSourceDocumentURL();if(this.sourcedoc!=null)return this.sourcedoc[b];};l.resetSourceDocument=function(){delete this[ub.fa];};l.getSchemaNS=function(){return this._schemans;};l.setSchemaNS=function(o){this._schemans=o;};l.getRulesXML=function(){return (this.getRulesTree()).getXML();};l.getRulesOperation=function(p){return (this.getRulesXML()).selectSingleNode(ub.ga+p+ub.ha);};l.isDescendant=function(b,q){if(q!=null){var
u=b.getParent();var
Oa=u.getRootNode();while(!u.equals(Oa)){if(u.equals(q))return true;u=u.getParent();}}return false;};l.isDescendantArray=function(n,a){for(var
rb=0;rb<a.length;rb++)if(this.isDescendant(n,a[rb]))return true;return false;};l.isAbsoluteURL=function(o){var
Ua=ub.ia;return o.search(Ua)==0;};l.setInputType=function(k){this._inputtype=k;};l.getInputType=function(){return this._inputtype;};l.toggleInputType=function(a){var
Bb=this.getDescendantOfName(ub.ja);Bb.removeChildren();Bb.load(ub.ka+a+ub.la,true);};l.loadRulesPane=function(){var
Ha=this.getDescendantOfName(ub.ba);Ha.removeChildren();Ha.load(ub.ma,true);};l.resolveSchemaVersion=function(j){return c.IE.schema2001;};l.openSourceDocument=function(s){this.fx={};var
ea=this._getManagedServer();if(!ea)return;c.dK.trace(ub.na+s,{instance:this});s=ea.resolveURI(s);c.dK.trace(ub.oa+s,{instance:this});var
ba=new
jsx3.xml.Document();ba.load(s);var
db=new
jsx3.net.URI(s);if(!ba.hasError()){var
sa=ba.getRootNode();var
S=sa.getNamespaceURI();if(S==c.IE.wsdl){c.dK.trace(ub.pa+c.IE.wsdl+ub.qa,{instance:this});var
bb=this.resolveSchemaVersion(ba);c.dK.trace(ub.ra+bb+ub.sa,{instance:this});this.setSchemaNS(bb);ba.setSelectionNamespaces(ub.ta+bb+ub.ua);var
ca=ba.selectNodes(ub.va);for(var
Ha=ca.iterator();Ha.hasNext();){var
Ba=Ha.next();this.loadWSDLImports(db,ba,Ba,Ba);}var
W=ba.selectSingleNode(ub.wa);if(!W){var
w=(ba.getRootNode()).createNode(jsx3.xml.Entity.TYPEELEMENT,ub.xa,c.IE.wsdl);(ba.getRootNode()).appendChild(w);}ca=ba.selectNodes(ub.ya);var
_=ba.selectSingleNode(ub.wa);for(var
Ha=ca.iterator();Ha.hasNext();){var
Ba=Ha.next();this.loadSchemaImports(db,ba,Ba,_);}this.setInputType(c.TYPE_WSDL);}else if(S==c.IE.schema2001||S==c.IE.schema1999){c.dK.trace(ub.za+S+ub.qa,{instance:this});if(S==c.IE.schema1999)c.dK.error(ub.Aa+c.IE.schema1999+ub.Ba+c.IE.schema2001+ub.Ca,{instance:this});this.setSchemaNS(S);this.setInputType(c.TYPE_SCHEMA);ba.setSelectionNamespaces(ub.ta+S+ub.sa);var
ca=ba.selectNodes(ub.ya);for(var
Ha=ca.iterator();Ha.hasNext();){var
Ba=Ha.next();this.loadSchemaImports(db,ba,Ba);}}else{c.dK.trace(ub.Da,{instance:this});this.setInputType(c.TYPE_XML);}}else c.dK.error(ub.Ea+s+ub.Fa,{instance:this});if(c.dK.getLevel()==Qa.TRACE&&(this.getInputType()==c.TYPE_WSDL||this.getInputType()==c.TYPE_SCHEMA)){var
Za=Fa.resolveURI(ub.Ga);var
N=(jsx3.IDE.getCache()).getOrOpenDocument(Za,null,jsx3.xml.XslDocument.jsxclass);var
U=N.transform(ba);if(jsx3.CLASS_LOADER.SAF||jsx3.CLASS_LOADER.FX)U=U.replace(ub.Ha,ub.G);c.dK.trace(ub.Ia+U,{instance:this});}return ba;};l.loadWSDLImports=function(a,i,r,h){var
Ka=r.getAttribute(ub.Ja);if(!this.isAbsoluteURL(Ka))Ka=(a.resolve(Ka)).toString();if(this.fx[Ka]==1){c.dK.trace(ub.Ka+Ka+ub.La,{instance:this});}else{this.fx[Ka]=1;c.dK.trace(ub.Ka+Ka+ub.sa,{instance:this});var
wa=new
jsx3.xml.Document();wa.load(Ka);var
Xa=wa.getError();if(Xa.code==0){a=new
jsx3.net.URI(Ka);if((wa.getRootNode()).getNodeName()==ub.g){i.insertBefore(wa.getRootNode(),h);}else{var
La=(wa.getRootNode()).getChildIterator();while(La.hasNext()){var
E=La.next();if(E.getNodeType()==jsx3.xml.Entity.TYPEELEMENT)if(E.getBaseName()!=ub.Ma){var
Ta=E.cloneNode(true);if(Ta!=null&&Ta instanceof jsx3.xml.Entity){i.insertBefore(Ta,h);}else c.dK.error(ub.Na+E,{instance:this});}else{c.dK.trace(ub.Oa+E,{instance:this});this.loadWSDLImports(a,i,E,h);}}}}else c.dK.error(ub.Pa+Ka+ub.Qa,{instance:this});}};l.loadSchemaImports=function(k,s,h,r){var
ha=h.getAttribute(ub.Ja)||h.getAttribute(ub.Ra);if(!this.isAbsoluteURL(ha))ha=(k.resolve(ha)).toString();if(this.fx[ha]==1){c.dK.trace(ub.Sa+ha+ub.La,{instance:this});}else{this.fx[ha]=1;c.dK.trace(ub.Sa+ha+ub.sa,{instance:this});var
yb=new
jsx3.xml.Document();yb.load(ha);var
Ab=yb.getError();if(Ab.code==0){var
Fb=this.resolveSchemaVersion(yb);yb.setSelectionNamespaces(ub.ta+Fb+ub.Ta);var
ob=yb.selectNodes(ub.ya);k=new
jsx3.net.URI(ha);for(var
wb=ob.iterator();wb.hasNext();){var
xa=wb.next();this.loadSchemaImports(k,s,xa,r);}if(r)r.appendChild(yb.getRootNode());else s.insertBefore(yb.getRootNode(),h);}else c.dK.error(ub.Ua+ha+ub.Va,{instance:this});}};l.parseWSDL=function(k,d){this.loadRulesPane();(this.getDescendantOfName(ub.Wa)).showMask(ub.Xa);var
R=this;window.setTimeout(function(){R.parseWSDLDelay(k,d);},250);};l.parseWSDLDelay=function(h,g){var
Pa=this.openSourceDocument(h);if(this.getInputType()==c.TYPE_WSDL){this.resetRulesTree();this.setSourceDocumentURL(h);this.addSourceDocument(Pa,h);this.parseServices();this.onParse();}else (this.getServer()).alert(ub.Ya,ub.Za+jsx3.util.strTruncate(h,40,null,0.6666666666666666)+ub._a+this.getInputType()+ub.ab);};l.parseDocuments=function(i,q){this.loadRulesPane();(this.getDescendantOfName(ub.Wa)).showMask(ub.Xa);var
U=this;window.setTimeout(function(){U.parseDocumentsDelay(i,q);},250);};l.parseJSON=function(p){this.loadRulesPane();(this.getDescendantOfName(ub.Wa)).showMask(ub.Xa);var
lb=this;window.setTimeout(function(){lb.parseJSONDelay(p);},250);};l.getKey=function(){var
Ta=this.getRulesXML();do{var
sb=ub.bb+parseInt(Math.random()*100000);var
cb=Ta.selectSingleNode(ub.cb+sb+ub.ha);}while(cb!=null);return sb;};l._buildTransactionTree=function(j){this.resetRulesTree();var
Q={};Q.jsxid=this.getKey();var
nb=Q.jsxid;Q.jsxtext=ub.db;Q.type=ub.eb;Q.jsxopen=ub.fb;Q.opname=ub.gb;if(this.getInputType()==c.TYPE_JSON){Q.method=ub.hb;Q.jsonp=ub.fb;}var
sa=(this.getRulesTree()).insertRecord(Q,null,false);var
Cb=[];if(j){var
oa=this.getComplexRule(sa,ub.ib);(this.getRulesTree()).insertRecord({jsxid:this.getKey(),name:ub.jb,value:ub.kb},oa.getAttribute(ub.lb),false);var
Q={};Q.jsxid=this.getKey();Q.jsxtext=ub.mb;Q.type=ub.nb;Q.jsxopen=ub.fb;Cb.push((this.getRulesTree()).insertRecord(Q,nb,false));}var
Q={};Q.jsxid=this.getKey();Q.jsxtext=ub.ob;Q.type=ub.pb;Q.jsxopen=ub.fb;Cb.push((this.getRulesTree()).insertRecord(Q,nb,false));return Cb;};l.parseJSONDelay=function(s){this.setInputType(c.TYPE_JSON);var
jb=(this._buildTransactionTree())[0];if(s){var
Ma=this._openJSON(s);if(Ma){var
Ab;try{Ab=jsx3.net.Service.JSON2XML(Ma);}catch(Kb){c.dK.error((jsx3.NativeError.wrap(Kb)).getMessage(),{instance:this});}if(Ab){this.addSourceDocument(Ab,s);jb.setAttribute(ub.da,s);(jb.getParent()).setAttribute(ub.qb,s);this.parseXML(Ab,jb,false,s);}else c.dK.error(ub.rb+arguments[i],{instance:this});}}this.onParse();};l._openJSON=function(j){var
Eb=this._getManagedServer();if(!Eb)return;c.dK.trace(ub.na+j,{instance:this});j=Eb.resolveURI(j);c.dK.trace(ub.sb+j,{instance:this});var
w=jsx3.net.Request.open(ub.tb,j,false);w.send();var
O=w.getResponseText();return jsx3.util.strEmpty(O)?null:O;};l.parseDocumentsDelay=function(k,s){var
la=this._buildTransactionTree(true);for(var
vb=0;vb<2;vb++)if(arguments[vb]){var
wb=this.openSourceDocument(arguments[vb]);if(this.getInputType()){this.addSourceDocument(wb,arguments[vb]);la[vb].setAttribute(ub.da,arguments[vb]);if(this.getInputType()==c.TYPE_SCHEMA){this.parseGlobals(wb,la[vb],arguments[vb]);}else if(this.getInputType()==c.TYPE_XML)this.parseXML(wb,la[vb],vb==0,arguments[vb]);}}this.onParse();};l.parseGlobals=function(n,s,b){var
jb=this.getNSMap(b);var
_=n.selectNodes(ub.ub+jb[this.getSchemaNS()]+ub.vb+jb[this.getSchemaNS()]+ub.wb,jb);var
B=s.getAttribute(ub.lb);for(var
eb=_.iterator();eb.hasNext();){var
Na=eb.next();c.dK.trace(ub.xb+Na.getAttribute(ub.yb),{instance:this});this.parseComplex(B,Na,true);}};l.parseXML=function(b,r,i){this.parseXMLRecurse(b.getRootNode(),this.getRulesTree(),r.getAttribute(ub.lb),0,i);};l.parseXMLRecurse=function(n,k,e,h,d){var
Ha=n.getNodeType();var
ba={};ba.jsxtext=(Ha==jsx3.xml.Entity.TYPECDATA?ub.zb:n.getNodeName())+ub.G;if(ba.jsxtext.indexOf(ub.T)>0)ba.jsxtext=this.getBaseName(ba.jsxtext);ba.tns=n.getNamespaceURI();ba.jsxid=this.getKey();ba.type=Ha==jsx3.xml.Entity.TYPEELEMENT?ub.Ab:Ha==jsx3.xml.Entity.TYPECDATA?ub.Bb:ub.Cb;if(Ha==jsx3.xml.Entity.TYPEELEMENT)ba.path=this.getMyPath(n);if(h<c.EXPAND_TO_DEPTH)ba.jsxopen=1;var
J=k.insertRecord(ba,e,false);if(d&&Ha!=jsx3.xml.Entity.TYPEELEMENT)this.bindComplexRule(k,J,ub.Db,ub.Eb,ub.Fb+jsx3.util.strEscapeHTML(n.getValue())+ub.Gb);if(n.getNodeType()==jsx3.xml.Entity.TYPEELEMENT){for(var
aa=(n.getAttributes()).iterator();aa.hasNext();){var
Nb=aa.next();if((Nb.getNodeName()).indexOf(ub.Hb)==0||Nb.getNamespaceURI()==jsx3.xml.Document.SEARCHABLE_NAMESPACE){}else if((Nb.getNodeName()).indexOf(ub.Ib)==0){if(n.getPrefix()==ub.G)J.setAttribute(ub.Jb,Nb.getValue());}else this.parseXMLRecurse(Nb,k,ba.jsxid,h+1,d);}var
La=false;for(var
aa=n.getChildIterator();aa.hasNext();){var
Ja=aa.next();if(Ja.getNodeType()==jsx3.xml.Entity.TYPEELEMENT){this.parseXMLRecurse(Ja,k,ba.jsxid,h+1,d);}else if(Ja.getNodeType()==jsx3.xml.Entity.TYPETEXT){La=true;}else if(Ja.getNodeType()==jsx3.xml.Entity.TYPECDATA)this.parseXMLRecurse(Ja,k,ba.jsxid,h+1,d);}if(!La||Ha==jsx3.xml.Entity.TYPECDATA)J.setAttribute(ub.Kb,ub.Lb);}};l.getComplexRule=function(s,p){var
eb=s.selectSingleNode(p);if(!eb){var
eb=s.createNode(jsx3.xml.Entity.TYPEELEMENT,p);eb.setAttribute(ub.lb,this.getKey());s.appendChild(eb);}return eb;};l.bindComplexRule=function(p,o,b,q,h,r){var
z=this.getComplexRule(o,b);return p.insertRecord({jsxid:r?r:this.getKey(),name:q,value:h},z.getAttribute(ub.lb),false);};l.onOpen=function(p){this.resetCacheData();this.loadRulesPane();(this.getDescendantOfName(ub.Wa)).showMask(ub.Xa);if(p!=c.NEW_FILE_PATH){var
lb=this;window.setTimeout(function(){lb.onOpenDelay(p);},250);}else this.reset();};l.onOpenDelay=function(s){var
w=(((this.getRulesTree()).getServer()).getCache()).openDocument(s);c.dK.trace(ub.Mb+s+ub.Nb,{instance:this});var
w=this.validateOnOpen(w);if(w)if(s!=c.NEW_FILE_PATH){var
Xa=w.selectNodes(ub.Ob);if(Xa.size()==0){c.dK.trace(ub.Pb+s+ub.Nb,{instance:this});}else for(var
Mb=Xa.iterator();Mb.hasNext();){var
ab=Mb.next();var
bb=ab.getAttribute(ub.da);var
A=ab.selectSingleNode(ub.Qb);if(A&&A.getAttribute(ub.Jb)==jsx3.net.Service.json_namespace){var
R=this._openJSON(bb);if(R){c.dK.trace(ub.Rb,{instance:this});try{var
Oa=jsx3.net.Service.JSON2XML(R);}catch(Kb){c.dK.error((jsx3.NativeError.wrap(Kb)).getMessage(),{instance:this});}if(Oa){this.setInputType(c.TYPE_JSON);this.addSourceDocument(Oa,bb);}else c.dK.error(ub.rb+bb,{instance:this});}}else this.addSourceDocument(this.openSourceDocument(bb),bb);}(((this.getRulesTree()).getServer()).getCache()).setDocument((this.getRulesTree()).getXMLId(),w);this.onParse();}};l.validateOnOpen=function(b){if(b&&b.getClass&&b.getClass()==ub.Sb){if(!b.hasError()){var
ea=b.selectSingleNode(ub.Tb);if(ea||(b.getRootNode()).getAttribute(ub.Ub)){var
ja=(b.getRootNode()).getAttribute(ub.Ub);var
T=(b.getRootNode()).getAttribute(ub.Vb);if(ja==ub.Wb&&T==ub.Xb){if(b.selectSingleNode(ub.Yb)){c.dK.error(ub.Zb+(this.getEditor()).getFilePath()+ub._b,{instance:this});return false;}else{c.dK.warn(ub.ac+(this.getEditor()).getFilePath()+ub.bc,{instance:this});b=this.convert31Rule(b);(this.getEditor()).setDirty(true);}}else if(!(ja==ub.cc&&T==ub.Xb)){c.dK.warn(ub.ac+(this.getEditor()).getFilePath()+ub.dc,{instance:this});b=this.convert30Rule(b);if(b&&!b.hasError()){if(b.selectSingleNode(ub.Yb)){c.dK.error(ub.Zb+(this.getEditor()).getFilePath()+ub._b,{instance:this});return false;}else{b=this.convert31Rule(b);(this.getEditor()).setDirty(true);}}else return false;}return b;}else c.dK.error(ub.Zb+(this.getEditor()).getFilePath()+ub.ec,{instance:this});}else c.dK.error(ub.Zb+(this.getEditor()).getFilePath()+ub.fc,{instance:this});}else c.dK.error(ub.gc,{instance:this});(this.getEditor()).onParse(0);return false;};l.convert30Rule=function(j){c.dK.info(ub.hc,{instance:this});var
Ab=Fa.resolveURI(ub.ic);var
aa=(jsx3.IDE.getCache()).getOrOpenDocument(Ab,null,jsx3.xml.XslDocument.jsxclass);return aa.transformToObject(j);};l.convert31Rule=function(a){c.dK.info(ub.jc,{instance:this});var
db=a.selectNodes(ub.kc);for(var
Za=db.iterator();Za.hasNext();){var
zb=Za.next();zb.setValue(c.resolveElementPrefixes(zb.getValue()));}var
H=a.selectSingleNode(ub.lc);if(H)H.setAttribute(ub.mc,ub.nc);(a.getRootNode()).setAttribute(ub.Ub,ub.cc);var
db=a.selectNodes(ub.oc);for(var
Za=db.iterator();Za.hasNext();){var
zb=Za.next();var
A=zb.getValue();if(A.indexOf(ub.pc)==0)zb.setValue(A.replace(ub.pc,ub.qc));}var
db=a.selectNodes(ub.rc);for(var
Za=db.iterator();Za.hasNext();)(Za.next()).setValue(ub.sc+Za);return a;};l.onParse=function(){(this.getDescendantOfName(ub.Wa)).hideMask();var
Sa=this.getRulesTree();Sa.repaint();Sa.setValue(((Sa.getXML()).selectSingleNode(ub.tc)).getAttribute(ub.lb));this.onRuleSelect();(this.getEditor()).onParse(1);if(this.getTester())(this.getTester()).close();};l.getMyPath=function(p){if(p){var
wb=this.getNSMap();var
B=p.getBaseName();if(B!=ub.g&&p.getNamespaceURI()==this.getSchemaNS()){var
eb=p.getAttribute(ub.yb);if(eb){var
Lb=p.selectSingleNode(ub.uc+wb[this.getSchemaNS()]+ub.vc,wb);if(Lb){var
ca=Lb.getAttribute(ub.wc);if(!jsx3.util.strEmpty(ca)){var
F=ub.ub+wb[this.getSchemaNS()]+ub.xc+ca+ub.yc+wb[this.getSchemaNS()]+ub.T+B+ub.zc+eb+ub.ha;var
zb=this.getSourceDocument();var
Cb=zb.selectNodes(F,wb);if(Cb.size()==1)return F;}}}}var
Cb=p.selectNodes(ub.Ac);var
bb=Cb.size();var
_a=ub.G;for(var
Eb=0;Eb<bb;Eb++){var
D=Cb.get(Eb);var
t=D.getNamespaceURI();var
B=D.getBaseName();if(D.getNodeType()==jsx3.xml.Entity.TYPEATTRIBUTE)B=ub.Bc+B;var
za=(t!=ub.G?wb[t]+ub.T:ub.G)+B;var
L=ub.G;if(Eb>0&&D.getNodeType()==jsx3.xml.Entity.TYPEELEMENT){var
S=(Cb.get(Eb-1)).selectNodes(za,wb);var
Aa=S.size();for(var
Ca=1;Ca<Aa;Ca++)if((S.get(Ca)).equals(D))L=ub.Cc+(Ca+1)+ub.Dc;}_a=_a+ub.Ec+za+L;}return _a;}return ub.G;};l.parseServices=function(){var
Ga=this.getSourceDocumentURL();var
ga=this.getSourceDocument();var
C=this.getNSMap();var
Mb={};var
wa=this.getKey();Mb.jsxid=wa;Mb.jsxtext=ub.Fc+Ga+ub.qa;Mb.jsxopen=ub.fb;Mb.src=Ga;Mb.type=ub.Gc;Mb.path=this.getMyPath(ga.getRootNode());c.dK.trace(ub.Hc,{instance:this});(this.getRulesTree()).insertRecord(Mb,null,false);if(C[c.IE.soap]){var
Z=ub.Ec+C[c.IE.wsdl]+ub.Ic+C[c.IE.wsdl]+ub.Jc+C[c.IE.wsdl]+ub.Kc+C[c.IE.soap]+ub.Lc;var
M=ga.selectNodes(Z,C);if(M.size()>0){for(var
Eb=M.iterator();Eb.hasNext();){var
Nb=Eb.next();var
ya=Nb.getAttribute(ub.Ja);var
Mb={};Mb.jsxid=this.getKey();Mb.jsxtext=ub.Mc+jsx3.util.strTruncate(ya,40,null,0.6666666666666666)+ub.qa;Mb.jsxopen=ub.fb;Mb.path=this.getMyPath(Nb);Mb.type=ub.Nc;var
ka=this.getBaseName((Nb.getParent()).getAttribute(ub.Oc));var
Z=ub.Ec+C[c.IE.wsdl]+ub.Ic+C[c.IE.wsdl]+ub.Pc+ka+ub.ha;var
qb=ga.selectSingleNode(Z,C);Mb.soapstyle=this.getBindingStyle(qb);c.dK.trace(ub.Qc+ya,{instance:this});(this.getRulesTree()).insertRecord(Mb,wa,false);c.dK.trace(ub.Rc+Mb.soapstyle,{instance:this});this.parseOperations(qb,Mb.jsxid,ya);}return true;}else c.dK.error(ub.Sc+Ga+ub.Tc,{instance:this});}else c.dK.error(ub.Sc+Ga+ub.Uc+c.IE.soap+ub.Nb,{instance:this});(this.getRulesTree()).setValue(wa);(this.getRulesTree()).repaint();return false;};l.getBindingStyle=function(i){var
M=this.getNSMap();var
_=ub.Vc+M[c.IE.soap]+ub.Wc;return i.selectSingleNode(_,M)!=null?ub.Xc:ub.Yc;};l.parseOperations=function(b,i,a){var
Bb=this.getNSMap();var
ob=b.selectNodes(Bb[c.IE.wsdl]+ub.Zc,Bb);for(var
ja=ob.iterator();ja.hasNext();){var
Ya=ja.next();var
rb=Ya.getAttribute(ub.yb);var
jb={};jb.jsxid=this.getKey();jb.jsxtext=rb;jb.jsxopen=ub.fb;jb.opname=rb;jb.endpoint=a;jb.method=ub._c;jb.type=ub.ad;jb.path=this.getMyPath(Ya);c.dK.trace(ub.bd+rb,{instance:this});var
S=(this.getRulesTree()).insertRecord(jb,i,false);var
mb=this.getComplexRule(S,ub.ib);var
V=Ya.selectSingleNode(Bb[c.IE.soap]+ub.Zc,Bb);var
La=V?V.getAttribute(ub.cd):ub.G;if(La==ub.G)La=ub.dd;var
jb={};jb.jsxid=this.getKey();jb.name=ub.ed;jb.value=La;(this.getRulesTree()).insertRecord(jb,mb.getAttribute(ub.lb),false);(this.getRulesTree()).insertRecord({jsxid:this.getKey(),name:ub.jb,value:ub.kb},mb.getAttribute(ub.lb),false);try{this.parseMessages(S,Bb);}catch(Kb){c.dK.error(ub.fd+Ya.getAttribute(ub.yb),{instance:this});var
Xa=jsx3.lang.NativeError.wrap(Kb);c.dK.error(ub.gd+Xa.getMessage(),{instance:this});}}};l.parseMessages=function(j,n){var
wa=j.getAttribute(ub.hd);var
Ia=j.getAttribute(ub.lb);var
Oa=ub.Ec+n[c.IE.wsdl]+ub.Ic+n[c.IE.wsdl]+ub.id+n[c.IE.wsdl]+ub.jd+wa+ub.ha;var
D=(this.getSourceDocument()).selectSingleNode(Oa,n);this.parseMessage(ub.kd,wa,Ia,D,ub.mb,n);this.parseMessage(ub.ld,wa,Ia,D,ub.ob,n);this.parseMessage(ub.md,wa,Ia,D,ub.nd,n);};l.setMessageEncoding=function(b,q,f,g){delete this[ub.od];var
qb=ub.Ec+g[c.IE.wsdl]+ub.Ic+g[c.IE.wsdl]+ub.pd+g[c.IE.wsdl]+ub.jd+f+ub.qd+g[c.IE.wsdl]+ub.T+q+ub.Ec+g[c.IE.soap]+ub.rd;var
Lb,La,nb,na,da;if(Lb=(this.getSourceDocument()).selectSingleNode(qb,g)){if(La=Lb.getAttribute(ub.sd)){c.dK.trace(ub.td+La,{instance:this});b.soapuse=La;}if(nb=Lb.getAttribute(ub.ud)){c.dK.trace(ub.vd+nb,{instance:this});this.jsxparts=nb;}if(na=Lb.getAttribute(ub.K)){c.dK.trace(ub.wd+na,{instance:this});b.soaprpcns=na;}if(da=Lb.getAttribute(ub.xd)){c.dK.trace(ub.yd+da,{instance:this});b.soapencstyle=da;}}};l.getMEPElement=function(j,s,k){var
la;if((la=j.selectSingleNode(k[c.IE.wsdl]+ub.T+s,k))!=null)return this.getBaseName(la.getAttribute(ub.zd));};l.parseMessage=function(q,j,o,r,g,b){var
Ga=this.getSourceDocument();var
Sa=this.getRulesTree();var
eb;if((eb=this.getMEPElement(r,q,b))!=null){c.dK.trace(ub.Ad+q,{instance:this});var
Ya={};Ya.jsxid=this.getKey();Ya.jsxtext=g;Ya.type=(q.substring(0,1)).toUpperCase();if(q==ub.kd){Ya.stubsrc=c.SOAP_STUB_SRC;Ya.stubpath=c.SOAP_STUB_PATH;}this.setMessageEncoding(Ya,q,j,b);var
ya=Sa.insertRecord(Ya,o,false);if(((this.getRulesOperation(j)).getParent()).getAttribute(ub.Bd)==ub.Yc){var
Ya={};Ya.jsxtext=j+(q==ub.ld?ub.Cd:ub.G);Ya.jsxid=this.getKey();Ya.type=ub.Lb;Ya.tns=ya.getAttribute(ub.Dd);c.dK.trace(ub.Ed+Ya.jsxtext,{instance:this});var
ya=Sa.insertRecord(Ya,ya.getAttribute(ub.lb),false);var
J=true;}else var
J=false;var
x=ub.Ec+b[c.IE.wsdl]+ub.Ic+b[c.IE.wsdl]+ub.Fd+eb+ub.ha;var
K=Ga.selectSingleNode(x,b);if(K)ya.setAttribute(ub.mc,this.getMyPath(K));try{this.parseParts(K,Ya.jsxid,J,b);}catch(Kb){c.dK.error(ub.Gd+q+ub.Hd,{instance:this});var
Q=jsx3.lang.NativeError.wrap(Kb);c.dK.error(ub.gd+Q.getMessage(),{instance:this});}}};l.parseParts=function(d,i,n,e){var
J=this.getSourceDocument();var
Ha=this.getRulesTree();var
rb=e[c.IE.wsdl]+ub.Id;if(this.jsxparts!=null&&typeof this.jsxparts!=ub.A){var
R=this.jsxparts.split(ub.Jd);rb=rb+ub.Cc;var
ja=ub.G;for(var
hb=0;hb<R.length;hb++){rb=rb+(ja+ub.Kd+R[hb]+ub.sa);ja=ub.Ld;}rb=rb+ub.Dc;c.dK.trace(ub.Md+rb,{instance:this});}var
R=d.selectNodes(rb,e);for(var
hb=R.iterator();hb.hasNext();){var
db=hb.next();var
ma=db.getAttribute(ub.Kb);var
wb;if((wb=db.getAttribute(ub.Nd))!=null&&wb!=ub.G&&!n||jsx3.util.strEmpty(ma)&&!jsx3.util.strEmpty(wb)){var
ta=this.getTargetedSchemaQuery(wb,J,e);var
x=ub.ub+e[this.getSchemaNS()]+ub.vc+ta+ub.Ec+e[this.getSchemaNS()]+ub.Od+this.getBaseName(wb)+ub.ha;var
ha=J.selectSingleNode(x,e);if(ha!=null){c.dK.trace(ub.Pd+wb,{instance:this});var
T=this.parseComplex(i,ha,true);}else c.dK.error(ub.Qd+wb+ub.Rd,{instance:this});}else if(!jsx3.util.strEmpty(ma)){if(this.isSimpleNode(db,ma)){var
Ka={};Ka.jsxtext=db.getAttribute(ub.yb);Ka.jsxid=this.getKey();Ka.type=ub.Ab;Ka.datatype=this.getBaseName(ma);Ka.simple=ub.fb;Ka.path=this.getMyPath(db);if(!n)c.dK.warn(ub.Sd+Ka.jsxtext+ub.Td,{instance:this});c.dK.trace(ub.Ud+Ka.jsxtext,{instance:this});Ha.insertRecord(Ka,i,false);}else{var
qb=this.getTargetedSchemaQuery(ma,J,e);var
x=ub.ub+e[this.getSchemaNS()]+ub.vc+qb+ub.Ec+e[this.getSchemaNS()]+ub.Vd+this.getBaseName(ma)+ub.Wd+ub.ub+e[this.getSchemaNS()]+ub.vc+qb+ub.Ec+e[this.getSchemaNS()]+ub.Xd+this.getBaseName(ma)+ub.ha;var
ha=J.selectSingleNode(x,e);if(ha!=null){c.dK.trace(ub.Yd+ma,{instance:this});var
T=this.parseComplex(i,ha,true);var
oa;if((oa=Ha.getRecordNode(T))!=null){oa.setAttribute(ub.Zd,db.getAttribute(ub.yb));oa.setAttribute(ub._d,this.getBaseName(ma));oa.setAttribute(ub.ae,this.getTargetURI(ma,J,e));if(ha.getBaseName()==ub.be)this.parseSimple(T,ha,false,false);}}else c.dK.error(ub.ce+ma+ub.de,{instance:this});}}else c.dK.error(ub.ee+db.getAttribute(ub.yb)+ub.fe,{instance:this});}};l.getTargetedSchemaQuery=function(j,a,n){var
Fb=j.split(ub.T);var
Ma=ub.G;if(Fb.length>1){var
K=ub.ge+n[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Fb[0]+ub.he+n[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Fb[0];var
fa=a.selectNodes(K,n);if(fa.size()>0){var
x=(fa.get(fa.size()-1)).getValue();Ma=ub.ie+n[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Fb[0]+ub.je+x+ub.sa;var
Na=ub.ub+n[this.getSchemaNS()]+ub.ke+Ma+ub.Dc;var
Da=a.selectSingleNode(Na,n);if(Da){var
Aa=Da.selectNodes(n[this.getSchemaNS()]+ub.le,n);for(var
kb=Aa.iterator();kb.hasNext();)Ma=Ma+ub.Ld+ub.me+(kb.next()).getAttribute(ub.K)+ub.sa;}Ma=ub.Cc+Ma+ub.Dc;}}return Ma;};l.getTargetURI=function(g,p,j){var
Sa=g.split(ub.T);if(Sa.length>1){var
qb=ub.ge+j[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Sa[0]+ub.he+j[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Sa[0];var
rb=p.selectNodes(qb,j);if(rb.size()>0)return (rb.get(rb.size()-1)).getValue();}else{var
qb=ub.uc+j[this.getSchemaNS()]+ub.vc;var
rb=p.selectNodes(qb,j);if(rb.size()>0)return (rb.get(rb.size()-1)).getAttribute(ub.wc);}return ub.G;};l.findParsableObjects=function(d,r,o,a,b,j,g){var
La=[];var
w=this.getNSMap();var
zb=o.selectNodes(a,w);var
na=null;for(var
X=zb.iterator();X.hasNext();){var
Kb=X.next();if(!j)La.push(Kb);if(!this.isDescendant(Kb,na)&&(g==null||g!=null&&!this.isDescendantArray(Kb,g))){var
Lb=this.parseComplex(b,Kb,null,true,j);if(Kb.getAttribute(ub.Kb)==null&&Kb.selectSingleNode(ub.Vc+w[this.getSchemaNS()]+ub.ne+w[this.getSchemaNS()]+ub.oe,w)==null)if(Kb.selectSingleNode(ub.Vc+w[this.getSchemaNS()]+ub.pe,w)!=null)this.parseSimple(Lb,Kb,j,false);na=Kb;}}if(na!=null)d.redrawRecord(b,jsx3.xml.CDF.UPDATE);if(La.length>0)return La;};l.doDrill=function(d,e,f,o,q){if(e)if(q||o&&(o.selectNodes(ub.Qb)).size()==0&&!ub.qe.test(o.getAttribute(ub.Kb)+ub.G)){var
x=this.getSourceDocument(this.getSourceDocumentURL(o));var
Jb=this.getNSMap();var
hb=o.getAttribute(ub.mc);q=!q?x.selectSingleNode(hb,Jb):q;if(!q)return;var
xa=q.getAttribute(ub.Kb);(this.getEditor()).setDirty(true);if(xa!=null&&xa!=ub.G&&this.isSimpleNode(q,xa)){this.parseSimple(d,q);return;}else if(xa!=null&&xa!=ub.G){var
L=this.getTargetedSchemaQuery(xa,q,Jb);var
xb=ub.ub+Jb[this.getSchemaNS()]+ub.vc+L+ub.ub+Jb[this.getSchemaNS()]+ub.Vd+this.getBaseName(xa)+ub.ha;q=x.selectSingleNode(xb,Jb);if(q==null){q=x.selectSingleNode(ub.ub+Jb[this.getSchemaNS()]+ub.vc+L+ub.ub+Jb[this.getSchemaNS()]+ub.Xd+this.getBaseName(xa)+ub.ha,Jb);if(q)this.parseSimple(d,q);return;}}else if(o.getAttribute(ub.re)!=null){var
aa=q.selectSingleNode(ub.Vc+Jb[this.getSchemaNS()]+ub.se+Jb[this.getSchemaNS()]+ub.te+Jb[this.getSchemaNS()]+ub.ue+Jb[this.getSchemaNS()]+ub.ve,Jb);if(aa==null&&q.getBaseName()!=ub.we){this.parseSimple(d,q);return;}}else if(q.getBaseName()==ub.be){this.parseSimple(d,q);return;}var
G=q.selectSingleNode(ub.Vc+Jb[this.getSchemaNS()]+ub.xe,Jb);if(G!=null){xa=G.getAttribute(ub.ye);if(xa!=null&&xa!=ub.G&&!this.isSimpleNode(G,xa)){var
L=this.getTargetedSchemaQuery(xa,G,Jb);G=G.selectSingleNode(ub.ub+Jb[this.getSchemaNS()]+ub.vc+L+ub.ze+this.getBaseName(xa)+ub.ha,Jb);if(G!=null)this.doDrill(d,true,f,o,G);}}var
la=ub.Vc+Jb[this.getSchemaNS()]+ub.Ae+Jb[this.getSchemaNS()]+ub.Be+Jb[this.getSchemaNS()]+ub.Ce;var
y=this.findParsableObjects(f,x,q,la,d,false);la=ub.Vc+Jb[this.getSchemaNS()]+ub.oe;this.findParsableObjects(f,x,q,la,d,true,y);}};l.parseSimple=function(g,o,n,a){var
C=(this.getRulesTree()).getRecordNode(g);var
Ea=this.getNSMap();if((Fb=o.selectSingleNode(ub.Vc+Ea[this.getSchemaNS()]+ub.De,Ea))!=null)if((B=Fb.getAttribute(ub.ye))!=null&&B!=ub.G){if(!this.isSimpleNode(o,B)){var
zb=this.getTargetedSchemaQuery(B,o,Ea);var
Ca=o.selectSingleNode(ub.ub+Ea[this.getSchemaNS()]+ub.vc+zb+ub.ub+Ea[this.getSchemaNS()]+ub.Xd+this.getBaseName(B)+ub.ha,Ea);if(Ca){var
Fb=Ca.selectSingleNode(ub.Vc+Ea[this.getSchemaNS()]+ub.De,Ea);if(Fb){var
B=Fb.getAttribute(ub.ye);if(B==null||B==ub.G)return;}else return;}else return;}if(this.isSimpleNode(o,B)){var
eb=C.getAttribute(ub.Zd);var
ta=eb.indexOf(ub.Ee);if(ta>-1)eb=eb.substring(0,ta);var
X=this.getComplexRule(C,ub.Fe);var
Hb=X.getAttribute(ub.lb);var
u=this.getRulesTree();var
oa=Fb.getChildIterator();if(oa.hasNext()>0){a=true;while(oa.hasNext()){var
Eb=oa.next();var
aa={};aa.jsxid=this.getKey();aa.name=Eb.getBaseName();aa.value=Eb.getAttribute(ub.Ge);u.insertRecord(aa,Hb,false);}}var
Oa;if((Oa=C.getAttribute(ub._d))==null||Oa==ub.G)C.setAttribute(ub._d,B);C.setAttribute(ub.Zd,eb);}else return;}else return;C.setAttribute(ub.Kb,n?ub.Cb:ub.Ab);var
mb=C.getAttribute(ub._d);if(mb&&Fb&&this.isSimpleNode(Fb,mb)){C.setAttribute(ub.He,ub.fb);C.setAttribute(ub._d,this.getBaseName(mb));}C.setAttribute(ub.mc,this.getMyPath(o));this.setFormDefaults(C,o);c.dK.trace(ub.Ie+C.getAttribute(ub.Zd),{instance:this});this.readMappings(this.getRulesTree(),C,ub.Fe);if(a!==false)(this.getRulesTree()).redrawRecord(g,jsx3.xml.CDF.UPDATE);};l.getSoapArrayType=function(h){var
v=h.getAttribute(ub.Je);for(var
F=(h.getAttributes()).iterator();F.hasNext();){var
ca=F.next();if(ca.getBaseName()==ub.Ke)return ca.getValue();}return v;};l.parseSoapArray=function(n,p,h){var
U=this.getNSMap();var
Db=this.getTargetedSchemaQuery(n,h,U);var
fa=n;var
Sa=n.split(ub.T);if(Sa.length==2){var
Ea=Sa[0];n=Sa[1];}else var
Ea=ub.G;n=n.replace(ub.Le,ub.G);var
_={};_.jsxtext=ub.Ke;_.jsxid=this.getKey();_.datatype=n;_.tns=c.IE.soapencoding;_.ttns=this.getTargetURI(fa,h,U);_.type=ub.Cb;_.path=this.getMyPath(h);(this.getRulesTree()).insertRecord(_,p,false);var
D=h;while(D&&D.getBaseName()!=ub.Me)D=D.getParent();if(D){var
D=D.selectSingleNode(ub.Vc+U[this.getSchemaNS()]+ub.Ce,U);if(D)return;}var
h=h.selectSingleNode(ub.ub+U[this.getSchemaNS()]+ub.vc+Db+ub.ze+n+ub.ha,U);var
_={};_.jsxtext=ub.Ne;_.jsxid=this.getKey();_.jsxopen=ub.fb;if(this.isSimpleNode(h,n)){_.datatype=n;_.ttns=this.getSchemaNS();_.type=ub.Ab;}else if(Ea!=ub.G){_.datatype=n;_.ttns=this.getTargetURI(Ea+ub.T+n,h,U);_.type=ub.Lb;_.ref=ub.fb;_.path=this.getMyPath(h);}else{var
z=h.selectSingleNode(ub.ub+U[this.getSchemaNS()]+ub.vc+Db+ub.Ec+U[this.getSchemaNS()]+ub.Vd+n+ub.ha,U);if(z){var
Ha=z.getParent();_.ttns=Ha.getAttribute(ub.wc);_.type=ub.Lb;_.ref=ub.fb;_.path=this.getMyPath(h);_.datatype=n;}else return;}(this.getRulesTree()).insertRecord(_,p,false);(this.getRulesTree()).redrawRecord(p,jsx3.xml.CDF.UPDATE);};l.parseComplex=function(r,f,h,d,k){var
Nb=f.getAttribute(ub.Kb);var
Bb=this.getRulesTree();var
Ea=this.getNSMap();var
Lb=false;var
Ib=false;var
Ba=false;var
ka;if(!h&&!d&(Nb==null||Nb==ub.G)){if(f)this.parseSimple(r,f,k);return;}if(k){var
Pa=ub.Cb;}else if(f.getFirstChild()||!this.isSimpleNode(f,Nb)){Ba=true;var
Pa=ub.Lb;}else var
Pa=ub.Ab;var
pb;if((pb=f.getAttribute(ub.yb))==null||pb==ub.G){var
rb=f.getAttribute(ub.re);var
Ab=this.getBaseName(rb);var
Z=this.getTargetURI(rb,f,Ea);var
zb;if(Ab==ub.Ke&&Z==c.IE.soapencoding){var
ca=Bb.getRecordNode(r);ca.setAttribute(ub._d,ub.Oe);ca.setAttribute(ub.ae,c.IE.soapencoding);var
ja=this.getSoapArrayType(f);this.parseSoapArray(ja,r,f);return;}else if(f.getBaseName()==ub.Pe){pb=f.getAttribute(ub.ye);}else{pb=f.getAttribute(ub.re);ka=f;zb=!jsx3.util.strEmpty(Z)?ub.Qe+Z+ub.ha:ub.G;}if(pb!=null&&pb!=ub.G&&!this.isSimpleNode(f,pb)){zb=zb||this.getTargetedSchemaQuery(pb,f,Ea);var
f=f.selectSingleNode(ub.ub+Ea[this.getSchemaNS()]+ub.vc+zb+ub.ze+this.getBaseName(pb)+ub.ha,Ea);if(f==null)return;if((Nb=f.getAttribute(ub.Kb))==null||Nb==ub.G){var
Ba=true;Pa=ub.Lb;var
Lb=true;var
Ib=f.getBaseName()==ub.Re||f.getBaseName()==ub.we;}}else pb=ub.Se;}var
gb=ub.G+pb;var
ta=this.getKey();var
t={};t.jsxid=ta;t.jsxtext=this.getBaseName(gb);t.jsxopen=ub.fb;t.type=Pa;t.path=this.getMyPath(f);t.datatype=Nb==null||Nb==ub.G?ub.G:Nb;if(!Ba){t.simple=ub.fb;t.datatype=this.getBaseName(t.datatype);}else if(Nb==null||Nb==ub.G){t.datatype=ub.G;}else{t.datatype=this.getBaseName(Nb);t.ttns=this.getTargetURI(Nb,f,Ea);}if(Lb)t.ref=ub.fb;if(Ib)t.groupref=ub.fb;if(!h)c.dK.trace(ub.Te+(Ba?ub.Ue:ub.Ve)+ub.We+t.jsxtext,{instance:this});var
Oa=Bb.insertRecord(t,r,false);this.setFormDefaults(Oa,f);var
H=(ka||f).getAttribute(ub.Xe);if(H!=null&&H!=ub.G)this.bindComplexRule(Bb,Oa,ub.Fe,ub.Ye,H);var
V=(ka||f).getAttribute(ub.Ze);if(V!=null&&V!=ub.G&&V!=1)this.bindComplexRule(Bb,Oa,ub.Fe,ub._e,V);if((ka||f).getAttribute(ub.af)==ub.bf){this.bindComplexRule(Bb,Oa,ub.Fe,ub._e,0);this.bindComplexRule(Bb,Oa,ub.Fe,ub.af,ub.bf);}return ta;};l.setFormDefaults=function(p,d){var
Ga=d.getAttribute(ub.cf);var
T,kb;if(Ga==ub.df){T=1;}else if(Ga!=ub.ef){var
cb=d;while(d.getBaseName()!=ub.g)d=d.getParent();var
U=d.getAttribute(ub.wc);if(U==null)U=ub.G;T=d.getAttribute(ub.ff);T=T==null||T==ub.ef||cb.getBaseName()!=ub.Nd?ub.gf:ub.fb;if(T==ub.gf&&cb.getBaseName()==ub.Nd&&(cb.getParent()).equals(d))T=ub.fb;var
kb=d.getAttribute(ub.hf);kb=kb==null||kb==ub.ef||cb.getBaseName()!=ub.jf?ub.gf:ub.fb;}if(T==ub.fb||kb==ub.fb)p.setAttribute(ub.Jb,U);};l.listOperations=function(m){m.clearXmlData();m.clearCachedContent();var
ua;if((ua=this.getRulesXML())!=null){var
fa=ua.selectNodes(ub.kf);for(var
mb=fa.iterator();mb.hasNext();){var
Ab=mb.next();m.insertRecord({jsxid:Ab.getAttribute(ub.hd),jsxtext:Ab.getAttribute(ub.Zd)},null,false);}}return true;};l.generateCode=function(g){var
K=(this.getEditor()).getFilePath();var
da=jsx3.ide.getSystemRelativeFile(K);var
O=(jsx3.ide.PROJECT.getDirectory()).relativePathTo(da);var
Ya=((jsx3.util.List.wrap((jsx3.ide.SERVER.getSettings()).get(ub.lf))).filter(function(b){return b.src==O;})).toArray(true);if(Ya.length){var
oa=Ya[Ya.length-1].id;var
sb=g.getValue();var
A=ub.mf;A=A+ub.nf;A=A+ub.of;A=A+ub.pf;A=A+ub.qf;A=A+ub.rf;A=A+ub.sf;A=A+ub.tf;A=A+ub.uf;A=A+ub.vf;A=A+ub.wf;A=A+ub.xf;A=A+ub.yf;A=A+ub.zf;A=A+ub.Af;A=A+ub.Bf;A=A+ub.Cf;A=A+ub.Df;A=A+ub.Ef;A=A+ub.Bf;A=A+ub.Ff;A=A+ub.Gf;A=A+ub.Hf;A=A+ub.Bf;A=A+ub.If;A=A+ub.Jf;A=A+ub.Bf;A=A+ub.Kf;A=A+ub.Lf;A=(A.replace(ub.Mf,oa)).replace(ub.Nf,jsx3.ide.SERVER.getEnv(ub.K));A=sb==ub.gb?A.replace(ub.Of,ub.G):A.replace(ub.Of,sb);jsx3.html.copy(A);(this.getServer()).alert(ub.Pf,ub.Qf,null,null,{width:280,height:150});}else (this.getServer()).alert(ub.Rf,ub.Sf,null,null,{width:280,height:150});};l.openTester=function(){jsx3.require(ub.Tf);var
Ga=((this.getServer()).getRootBlock()).getDescendantsOfType(jsx3.ide.mapper.ServiceTest);if(Ga.length==0){var
wb=((this.getServer()).getRootBlock()).load(ub.Uf,true,Fa);var
gb=(wb.getDescendantsOfType(jsx3.ide.mapper.ServiceTest))[0];this.setTesterId(gb.getId());gb.initialize(this.getId());}else (Ga[0].getAncestorOfType(jsx3.gui.Dialog)).doToggleState(1,true);};l.onRuleDrop=function(q,e,d,n,s){var
cb,u;var
Aa=d[0];if(e.getName()==ub.Vf&&(cb=q.getRecordNode(n))!=null&&(u=jsx3.GO(Aa))!=null){if((q.getValue()).length==1)this.writeMappings(true);var
Ha=this.bindComplexRule(q,cb,ub.Db,ub.Wf,u.getName());q.redrawRecord(n,jsx3.xml.CDF.UPDATE);if((q.getValue()).length==1&&(q.getValue())[0]==n){this.readMappings(q,cb,ub.Db);}else{q.setValue(n);this.onRuleSelect();}var
Bb;if((Bb=this.getTester())!=null)Bb.listRules();}else if(e.getName()==ub.U){var
z=q.getRecordNode(n);if(s)z=z.getParent();var
fb=z.getAttribute(ub.Kb);var
ib;var
F;for(var
M=0;M<d.length;M++){Aa=d[M];if(Aa!=n){var
Va=q.getRecordNode(Aa);var
ea=Va.getParent();var
X=Va.getAttribute(ub.Kb);if(fb==ub.nb||fb==ub.pb||fb==ub.Xf||fb==ub.Lb||fb==ub.Ab||fb==ub.Cb||fb==ub.Bb)if(X==ub.Cb||X==ub.Lb||X==ub.Ab||X==ub.Bb){if(s){bCurSucess=q.adoptRecordBefore(q,Aa,n,false);}else bCurSucess=q.adoptRecord(q,Aa,n,false);if(bCurSucess){ib=true;if(ea.selectSingleNode(ub.Qb)==null&&ea.getAttribute(ub.Kb)==ub.Lb){ea.setAttribute(ub.Kb,ub.Ab);q.redrawRecord(ea.getAttribute(ub.lb));}}}}}if(ib){if(fb==ub.Ab||fb==ub.Cb||fb==ub.Bb)z.setAttribute(ub.Kb,ub.Lb);q.redrawRecord(z.getAttribute(ub.lb));}}return false;};l.onDelete=function(d){(this.getRulesTree()).redrawRecord((this.getRulesTree()).getValue(),jsx3.xml.CDF.UPDATE);(this.getEditor()).setDirty(true);};l.doRemoveComplexStructure=function(a){(this.getEditor()).setDirty(true);var
x=this.getRulesTree();var
na=x.getValue();for(var
Eb=0;Eb<na.length;Eb++){var
Nb=na[Eb];var
Mb=(this.getRulesXML()).selectSingleNode(ub.Yf+Nb+ub.qd+a);if(Mb){var
Ia=Mb.getParent();Ia.removeChild(Mb);(this.getRulesTree()).redrawRecord(Nb,jsx3.xml.CDF.UPDATE);this.readMappings(x,Ia,a);}}var
Aa;if((Aa=this.getTester())!=null)Aa.listRules();};l.doRemoveBranch=function(){(this.getEditor()).setDirty(true);var
X=this.getRulesTree();var
xa=X.getValue();var
Ga;for(var
Xa=0;Xa<xa.length;Xa++){var
ab=X.getRecordNode(xa[Xa]);if(ab){var
Ga=(ab.getParent()).getAttribute(ub.lb);X.deleteRecord(xa[Xa],xa.length==1);}}if(xa.length>1)X.repaint();if(X.getRecord(Ga)){X.setValue(Ga);this.onRuleSelect();}var
S;if((S=this.getTester())!=null)S.reset();};l.execute=function(p){var
va=this.getRulesTree();var
y=va.getRecordNode(p);var
qa=new
jsx3.net.Service();qa.setRulesXML(this.getRulesXML());var
za;if((za=y.getAttribute(ub.hd))!=null)qa.setOperationName(za);qa.setNamespace(jsx3.ide.SERVER.getEnv(ub.K));qa.doCall();};l.doRemoveSiblingBranches=function(){var
z=this.getRulesTree();var
Ga=z.getValue();var
na;for(var
N=0;N<Ga.length;N++)if(N==0){na=(z.getRecordNode(Ga[N])).getParent();}else{var
lb=(z.getRecordNode(Ga[N])).getParent();if(!lb.equals(na))return;}(this.getEditor()).setDirty(true);var
pb=ub.G;var
ha=ub.Zf;for(var
N=0;N<Ga.length;N++){ha=ha+(pb+ub._f+Ga[N]+ub.sa);var
pb=ub.ag;}ha=ha+ub.Dc;var
Kb=z.getRecordNode(Ga[0]);var
na=Kb.getParent();var
sb=na.selectNodes(ha);for(var
N=sb.size()-1;N>=0;N--)na.removeChild(sb.get(N));z.redrawRecord(na.getAttribute(ub.lb),jsx3.xml.CDF.UPDATE);var
Ya;if((Ya=this.getTester())!=null)Ya.reset();};l.doAddChildNode=function(q,h){(this.getEditor()).setDirty(true);var
Ha=(this.getRulesTree()).getRecordNode(q);var
E={};E.jsxid=this.getKey();E.jsxtext=ub.bg;E.type=h;(this.getRulesTree()).insertRecord(E,q,false);var
yb;if((yb=((this.getRulesTree()).getRecordNode(q)).getAttribute(ub.Kb))!=ub.pb&&yb!=ub.nb&&yb!=ub.Xf)(this.getRulesTree()).insertRecordProperty(q,ub.Kb,ub.Lb,false);(this.getRulesTree()).insertRecordProperty(q,ub.cg,ub.fb,true);};l.doCloneNode=function(i){(this.getEditor()).setDirty(true);var
Va=(this.getRulesTree()).getRecordNode(i);var
hb=Va.getAttribute(ub.Kb);if(hb!=ub.Gc&&hb!=ub.eb){var
ha=Va.cloneNode(true);(Va.getParent()).appendChild(ha);var
sb=ha.selectNodeIterator(ub.dg);while(sb.hasNext())(sb.next()).setAttribute(ub.lb,this.getKey());ha.removeAttribute(ub.eg);(this.getRulesTree()).redrawRecord(ha.getAttribute(ub.lb),jsx3.xml.CDF.INSERT);}else c.dK.error(ub.fg,{instance:this});};l.doAutoMap=function(e){var
Aa=this.getRulesTree();var
eb=Aa.getValue();if(eb.length==1)this.writeMappings(true);for(var
qa=0;qa<eb.length;qa++){var
G=eb[qa];var
wb=Aa.getRecordNode(G);var
la=wb.getAttribute(ub.Kb);if(la==ub.Cb||la==ub.Ab||la==ub.Lb||la==ub.Bb){(this.getEditor()).setDirty(true);(jsx3.ide.getActiveEditor()).setDirty(true);if(e==ub.gg){this.bindComplexRule(Aa,wb,ub.Db,e,ub.G);var
A=wb.selectNodes(ub.hg);for(var
Ya=A.iterator();Ya.hasNext();){var
y=Ya.next();this.bindComplexRule(Aa,y,ub.Db,ub.ig,y.getAttribute(ub.Zd));}}else if(e==ub.ig){this.bindComplexRule(Aa,wb,ub.Db,e,wb.getAttribute(ub.Zd));}else{var
yb=(jsx3.ide.getSelected())[0];if(yb&&(yb.getClass()).equals(jsx3.gui.Block.jsxclass)){if(la!=ub.Lb&&(wb.selectNodes(ub.jg)).size()==0){var
ib=wb.getAttribute(ub.Zd);this.bindComplexRule(Aa,wb,ub.Db,ub.Wf,ib);var
ab=yb.load(c.TEXTBOX_PROJECTION,false);ab.setPersistence(jsx3.app.Model.PERSISTEMBED);var
ea=ab.findDescendants(function(p){return p.getName()==ub.kg;},true,true,false,false);if(ea.length)ea[0].setText(this.fromCamelCase(ib));(ab.getDescendantsOfType(jsx3.gui.TextBox))[0].setName(ib);}else{var
A=wb.selectNodes(ub.lg);if(A.size()==0)A=wb.selectNodes(ub.Yf+G+ub.ha);for(var
Ya=A.iterator();Ya.hasNext();){wb=Ya.next();var
ib=wb.getAttribute(ub.Zd);var
E=this.bindComplexRule(Aa,wb,ub.Db,ub.Wf,ib);var
Ta=wb.selectNodes(ub.mg);if(Ta.size()>0){var
ab=yb.load(c.SELECT_PROJECTION,false);ab.setPersistence(jsx3.app.Model.PERSISTEMBED);var
La=(ab.getDescendantsOfType(jsx3.gui.Select))[0];La.setName(ib);var
kb=ub.ng;for(var
Ab=Ta.iterator();Ab.hasNext();){var
db=(Ab.next()).getAttribute(ub.Ge);kb=kb+(ub.og+db+ub.pg+db+ub.qg);}kb=kb+ub.rg;La.setXMLString(kb);}else{var
ab=yb.load(c.TEXTBOX_PROJECTION,false);ab.setPersistence(jsx3.app.Model.PERSISTEMBED);(ab.getDescendantsOfType(jsx3.gui.TextBox))[0].setName(ib);}var
ea=ab.findDescendants(function(r){return r.getName()==ub.kg;},true,true,false,false);if(ea.length)ea[0].setText(this.fromCamelCase(ib));}}yb.repaint();}else (this.getServer()).alert(ub.sg,ub.tg);}}Aa.redrawRecord(G,jsx3.xml.CDF.UPDATE);var
oa;if((oa=this.getTester())!=null)oa.reset();}if(eb.length==1)this.readMappings(Aa,wb,ub.Db);};l.fromCamelCase=function(n){if(n.toUpperCase()!=n){var
ba=n.length;var
mb=n.substring(0,1);for(var
ab=1;ab<ba-1;ab++){var
ya=n.substring(ab,ab+1);var
_a=n.substring(ab+1,ab+2);if(ya.toUpperCase()==ya&&_a.toUpperCase()!=_a)mb=mb+ub.ug;mb=mb+ya;}return mb+n.substring(ba-1);}return n;};l.doSpyContextFields=function(){var
T=jsx3.IDE.getCache();var
yb=T.getOrOpenDocument(Fa.resolveURI(ub.vg));var
ca=T.getOrOpenDocument(Fa.resolveURI(ub.wg),null,jsx3.xml.XslDocument.jsxclass);return ca.transform(yb);};l.getEditorForType=function(b){if(((this.getRulesTree()).getValue()).length==1)if(b==ub.Cb||b==ub.Lb||b==ub.Ab||b==ub.Bb){return ub.xg;}else if(b==ub.ad||b==ub.eb){return ub.yg;}else if(b==ub.pb){return ub.zg;}else if(b==ub.nb)return ub.Ag;};l.onRuleSelect=function(){this.writeMappings(false);var
Bb=this.getRulesTree();var
Na=Bb.getValue();var
Ia=(Bb.getXML()).selectSingleNode(ub.Yf+Na+ub.ha);this.FK=Na;var
la=this.getEditorPane();if(Ia){var
Db=Ia.getAttribute(ub.Kb);var
L=this.getEditorForType(Db);if(L!=la._jsxuri&&(la.getChildren()).length>0)for(var
J=0;J<(la.getChildren()).length;J++)(la.getChild(J)).setDisplay(jsx3.gui.Block.DISPLAYNONE,true);var
Hb;if(L&&L!=la._jsxuri){if(Hb=this.getDescendantOfName(L)){Hb.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);}else{var
Hb=la.load(L);Hb.setName(L);}la._jsxuri=L;}else if(!L)delete la[ub.V];if(L!=null)if(Db==ub.ad||Db==ub.eb){this.readMappings(Bb,Ia,ub.ib);this.readMapping(Ia,ub.qb);this.readMapping(Ia,ub.Bg);this.onMethodChange(this.getDescendantOfName(ub.Cg),Ia.getAttribute(ub.Dg)==ub.fb);}else if(Db==ub.Cb||Db==ub.Lb||Db==ub.Ab||Db==ub.Bb){this.readMappings(Bb,Ia,ub.Db);this.readMappings(Bb,Ia,ub.Fe);this.readMapping(Ia,ub.Eg);}else if(Db==ub.nb){this.readMapping(Ia,ub.Fg);this.readMapping(Ia,ub.Gg);this.readMapping(Ia,ub.Hg);}else if(Db==ub.pb){this.readMapping(Ia,ub.Fg);this.readMapping(Ia,ub.Ig);}if(this.getProfileType()==ub.g){this.showSchema(Ia);}else this.showProfile(Ia);}else{for(var
J=0;J<(la.getChildren()).length;J++)(la.getChild(J)).setDisplay(jsx3.gui.Block.DISPLAYNONE,true);delete la[ub.V];this.resetSourcePane();}};var
P={definitions:ub.Jg,types:ub.Jg,message:ub.Jg,part:ub.Jg,service:ub.Jg,port:ub.Jg,operation:ub.Jg,binding:ub.Jg,schema:ub.Kg,complexType:ub.Kg,complexContent:ub.Kg,simpleContent:ub.Kg,extension:ub.Kg,element:ub.Kg,group:ub.Kg,all:ub.Kg,choice:ub.Kg,sequence:ub.Kg,any:ub.Kg,anyAttribute:ub.Kg,attribute:ub.Kg,attributeGroup:ub.Kg,unique:ub.Kg,key:ub.Kg,keyref:ub.Kg,selector:ub.Kg,field:ub.Kg,include:ub.Kg,address:ub.Lg};var
pa=ub.Mg;var
ra=ub.Ng;c.resolveElementPrefixes=function(d){var
ga=[];var
M=d.split(ub.Ec);var
T=M.length;for(var
gb=0;gb<T;gb++)if(M[gb]){var
Ib=M[gb].split(ub.T);var
S=Ib.length==2?Ib[1]:Ib[0];var
S=S.replace(pa,function(m,b){return P[b]+ub.T+b;});ga.push(S);}var
za=ub.Ec+ga.join(ub.Ec);za=za.replace(ra,function(n,e){return e==0?ub.G:ub.Cc+(+e+1)+ub.Dc;});return za;};l.showSchema=function(k,h){if(!k){var
C=this.getRulesTree();k=(C.getXML()).selectSingleNode(ub.Yf+C.getValue()+ub.ha);}var
Bb=k.getAttribute(ub.mc);var
wa=k.getAttribute(ub._d);if(!h&&Bb==ub.nc){var
_=new
jsx3.xml.Document();_.loadXML(ub.Og);var
K=this.getDescendantOfName(ub.X);((this.getServer()).getCache()).setDocument(K.getXMLId(),_);K.loadAndCache(ub.Pg,false);K.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,false);K.repaint();}else if(Bb==null||Bb==ub.G){this.resetSourcePane();}else{(this.getDescendantOfName(ub.X)).removeChildren();var
Q=this.getDescendantOfName(ub.X);if(Q){Q.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);var
J=this.getSourceDocument(this.getSourceDocumentURL(k));if(J!=null&&!J.hasError()){var
S=this.getNSMap(this.getSourceDocumentURL(k));var
Ha=J.selectSingleNode(Bb,S);if(Ha){var
A;if((A=k.getAttribute(ub._d))!=null&&!this.isSimpleNode(k,A)){var
Ga=this.getTargetedSchemaQuery(A,J,S);var
gb=J.selectSingleNode(ub.ub+S[this.getSchemaNS()]+ub.vc+Ga+ub.ub+S[this.getSchemaNS()]+ub.Vd+this.getBaseName(A)+ub.ha,S);if(gb==null)gb=J.selectSingleNode(ub.ub+S[this.getSchemaNS()]+ub.vc+Ga+ub.ub+S[this.getSchemaNS()]+ub.Xd+this.getBaseName(A)+ub.ha,S);if(gb!=null)Ha=gb;}}if(Ha){var
R=Ha.getXML();var
_=new
jsx3.xml.Document();_.loadXML(R);var
K=this.getDescendantOfName(ub.X);((this.getServer()).getCache()).setDocument(K.getXMLId(),_);K.repaint();}else this.resetSourcePane();}else this.resetSourcePane();}}};l.showProfile=function(h){var
ea=h.getAttribute(ub.Kb);if(ea==ub.Cb||ea==ub.Lb||ea==ub.Ab||ea==ub.Bb)ea=ub.Qg;var
R=this.getDescendantOfName(ub.Z);if(R){var
bb=((R.getServer()).getCache()).openDocument(Fa.resolveURI(ub.Rg+ea+ub.la),R.getXMLId());var
O=bb.selectNodes(ub.tc);for(var
t=O.iterator();t.hasNext();){var
Fb=t.next();var
Kb=h.getAttribute(Fb.getAttribute(ub.lb));if(Kb)Fb.setAttribute(ub.Ge,Kb);}R.repaintData();}};l.onMethodChange=function(e,s){if(e.getValue()==ub.hb){(e.getNextSibling()).setDisplay(ub.G,true);(e.getNextSibling()).setChecked(s!==false?1:0);}else{(e.getNextSibling()).setDisplay(ub.Sg,true);(e.getNextSibling()).setChecked(0);}};l.writeMappings=function(b){if(this.FK){var
pb=this.FK;if(!b)delete this[ub.aa];var
Ya=this.getRulesTree();var
xb=(Ya.getXML()).selectSingleNode(ub.Yf+pb+ub.ha);if(xb){var
Gb=false;var
Lb=this.getDescendantOfName((this.getEditorPane())._jsxuri);if(Lb)Lb.findDescendants(function(d){if(jsx3.gui.TextBox&&d.instanceOf(ub.Tg)||jsx3.gui.Select&&d.instanceOf(ub.Ug)){if(d.getEnabled()!==0){var
w=d.getName();var
v=w.substring(w.lastIndexOf(ub.Vg)+1);var
xa=d.getValue();if(typeof xa==ub.Wg)xa=jsx3.util.strTrim(xa);var
Ka;if((Ka=xb.getAttribute(v))!=null&&(xa==null||xa==ub.G)){Gb=true;xb.removeAttribute(v);}else if(((Ka=xb.getAttribute(v))==null||Ka==ub.G||Ka!=xa)&&xa!=null&&xa!=ub.G){Gb=true;xb.setAttribute(v,xa);}}}else if(d instanceof jsx3.gui.Matrix){var
Hb=(d.getXML()).selectSingleNode(ub.tc);var
Q=(d.getXML()).selectSingleNode(ub.Xg);var
Ma=Q.getAttribute(ub.lb);var
Pa=xb.selectSingleNode(Q.getNodeName());if(Hb){var
y=((d.getXML()).selectSingleNode(ub.Xg)).cloneNode(true);if(Pa){xb.replaceNode(y,Pa);}else xb.appendChild(y);}else if(Pa)(Pa.getParent()).removeChild(Pa);}else if(typeof jsx3.gui.CheckBox!=ub.A&&d instanceof jsx3.gui.CheckBox)if(d.getChecked()){if(jsx3.util.strEmpty(xb.getAttribute(ub.Dg))){Gb=true;xb.setAttribute(ub.Dg,ub.fb);}}else if(!jsx3.util.strEmpty(xb.getAttribute(ub.Dg))){Gb=true;xb.removeAttribute(ub.Dg);}},true,true,false,true);if(Gb){(this.getEditor()).setDirty(Gb);Ya.redrawRecord(pb,jsx3.xml.CDF.UPDATE);}}}};l.readMapping=function(g,a){(this.getDescendantOfName(ub.Yg+a)).setValue(g.getAttribute(a));};l.readMappings=function(k,j,q){var
S=this.getDescendantOfName(ub.Yg+q);var
Cb=j.selectSingleNode(q);var
M=jsx3.xml.CDF.Document.newDocument();var
Ib=M.getRootNode();if(Cb){var
ja=Cb.cloneNode(true);var
B=Cb.getAttribute(ub.lb);}else{var
B=this.getKey();var
ja=Ib.createNode(jsx3.xml.Entity.TYPEELEMENT,q);ja.setAttribute(ub.lb,B);}Ib.appendChild(ja);((S.getServer()).getCache()).setDocument(S.getXMLId(),M);S.setRenderingContext(B,true);S.repaintData();};l.browseURL=function(k){(jsx3.ide.getPlugIn(ub.Zg)).chooseFile(jsx3.IDE.getRootBlock(),{name:ub._g,modal:true,title:ub.ah,okLabel:ub.bh,folder:jsx3.ide.getCurrentDirectory(),onChoose:(jsx3.$F(function(s){var
ga=this.getDescendantOfName(k);ga.setValue(jsx3.net.URI.decode((jsx3.ide.PROJECT.getDirectory()).relativePathTo(s)));jsx3.ide.setCurrentDirectory(s.getParentFile());})).bind(this)});};l.updateProfilePane=function(i){var
D=this.getDescendantOfName(ub.ch);var
ua=this.getRulesTree();var
Da=(ua.getXML()).selectSingleNode(ub.Yf+ua.getValue()+ub.ha);var
ca=D.getChild(ub.X);var
wa=D.getChild(ub.Z);if(i.getValue()==ub.g){if(wa)wa.setDisplay(ub.Sg,true);if(!ca)D.load(ub.dh+i.getValue()+ub.la,true);else ca.setDisplay(ub.G,true);this.showSchema(Da);}else{if(ca)ca.setDisplay(ub.Sg,true);if(!wa)D.load(ub.dh+i.getValue()+ub.la,true);else wa.setDisplay(ub.G,true);this.showProfile(Da);}};l.getProfileType=function(){var
Ka=this.getDescendantOfName(ub.eh);return Ka&&Ka.getGroupValue();};l.onProfileEdit=function(q,j){(this.getRulesTree()).insertRecordProperty((this.getRulesTree()).getValue(),q,j.getValue(),true);(this.getEditor()).setDirty(true);};l.prioritizeRow=function(q,b,r){if(!b)return;var
wa=jsx3.GO(q);var
W=wa.getRecordNode(b);if(W){(this.getEditor()).setDirty(true);var
Fb=W.getParent();var
N=Fb.getChildNodes();if(r){for(var
ua=1;ua<N.size();ua++)if((N.get(ua)).equals(W)){Fb.insertBefore(W,N.get(ua-1));wa.repaintData();return;}}else for(var
ua=N.size()-2;ua>=0;ua--)if((N.get(ua)).equals(W)){Fb.insertBefore(N.get(ua+1),W);wa.repaintData();return;}}};l.insertRow=function(s,j){return true;};l.onInsertRow=function(){(this.getEditor()).setDirty(true);if(this.getTester())(this.getTester()).listRules();this.writeMappings(true);(this.getRulesTree()).redrawRecord(((this.getRulesTree()).getValue())[0]);};l.formatMenu=function(h){var
Nb=this.getRulesTree();var
Eb=Nb.getValue();var
va;var
sa=0;var
x=0;var
Jb=0;for(var
La=0;La<Eb.length;La++){var
Xa=(Nb.getRecordNode(Eb[La])).getAttribute(ub.Kb);if(Xa==ub.nb||Xa==ub.pb||Xa==ub.Xf){if(va!==false)va=true;}else va=false;if(Xa==ub.ad||Xa==ub.eb){if(sa!=-1)sa=sa+1;}else sa=-1;if(Xa==ub.Xf||Xa==ub.nb||Xa==ub.pb){if(x!=-1)x=x+1;Jb=-1;}else if(Xa==ub.Lb||Xa==ub.Ab||Xa==ub.Cb||Xa==ub.Bb){if(x!=-1)x=x+1;if(Jb!=-1)Jb=Jb+1;}else{x=-1;Jb=-1;}}if(va==true)h.enableItem(ub.fh);else h.disableItem(ub.fh);if(sa==1)h.enableItem(ub.gh);else h.disableItem(ub.gh);if(x==1&&Jb<=0){h.disableItem(ub.hh);h.enableItem(ub.ih);h.disableItem(ub.jh);h.disableItem(ub.kh);}else if(Jb==1&&x<=0){h.enableItem(ub.hh);h.disableItem(ub.ih);h.enableItem(ub.jh);h.enableItem(ub.kh);}else if(Jb==1&&x==1){h.enableItem(ub.hh);h.enableItem(ub.ih);h.enableItem(ub.jh);h.enableItem(ub.kh);}else{h.disableItem(ub.hh);h.disableItem(ub.ih);h.disableItem(ub.jh);h.disableItem(ub.kh);}};l.formatToolbar=function(b){var
Lb=this.getRulesTree();var
ya=Lb.getValue();var
ba=0;for(var
ab=0;ab<ya.length;ab++){var
gb=(Lb.getRecordNode(ya[ab])).getAttribute(ub.Kb);if(gb==ub.Lb||gb==ub.Ab||gb==ub.Cb){if(ba!=-1)ba=ba+1;}else ba=-1;}if(ba>0){b.enableItem(ub.lh);b.enableItem(ub.mh);b.enableItem(ub.nh);}else{b.disableItem(ub.lh);b.disableItem(ub.mh);b.disableItem(ub.nh);}};l.reparseBranch=function(r){var
X=this.getRulesTree();var
Mb=X.getRecordNode(r);if(Mb){var
A=this;(this.getAncestorOfType(jsx3.gui.Dialog)).confirm(ub.oh,ub.ph,function(p){p.doClose();(A.getEditor()).setDirty(true);var
Ia=Mb.selectNodeIterator(ub.Qb);while(Ia.hasNext())Mb.removeChild(Ia.next());X.redrawRecord(Mb.getAttribute(ub.lb),jsx3.xml.CDF.UPDATE);A.doDrill(r,true,X,Mb);},null,ub.qh,ub.rh,1);}};l.generateSample=function(){var
Na=ub.G;var
Ca=(this.getRulesTree()).getValue();var
gb=200;var
A=200;for(var
Q=0;Q<Ca.length;Q++){var
ob=Ca[Q];var
lb=(this.getRulesTree()).getRecordNode(ob);var
Ua=lb.getAttribute(ub.Kb);if(Ua==ub.nb||Ua==ub.pb||Ua==ub.Xf){var
ta=lb.getParent();var
_=ta.getAttribute(ub.hd);var
mb=new
jsx3.net.Service();mb.setRulesXML(this.getRulesXML());if(_)mb.setOperationName(_);mb.setNamespace(jsx3.ide.SERVER.getEnv(ub.K));var
Ya;if(Ua==ub.nb)Ya=ub.kd;if(Ua==ub.pb)Ya=ub.ld;if(Ua==ub.Xf)Ya=ub.md;Na=((mb.getServiceMessage(Ya)).getRootNode()).getXML();mb.resetRulesTree();Na=Na.replace(ub.sh,ub.th);var
hb=(jsx3.IDE.getRootBlock()).load(ub.uh,null,Fa);hb.setLeft(gb=gb+20,true);hb.setTop(A=A+20,true);var
w=hb.getDescendantOfName(ub.vh);var
za=hb.getDescendantOfName(ub.wh);var
ob=w.getXMLId();var
cb=new
jsx3.xml.Document();cb.loadXML(Na);za.setValue((cb.getXML()).replace(ub.xh,ub.yh));((w.getServer()).getCache()).setDocument(ob,cb);w.repaint();var
Aa=hb.getDescendantOfName(ub.zh);Aa.setText((_?_+ub.Ah:ub.G)+ub.Bh+Ya.toUpperCase()+ub.Ch,true);}}};l.resetCacheData=function(){var
Ja=jsx3.IDE.getCache();Ja.clearById(ub.Dh,true);Ja.clearById(ub.Eh,true);Ja.clearById(ub.Fh,true);Ja.clearById(ub.Gh,true);Ja.clearById(ub.Hh,true);Ja.clearById(ub.Ih,true);};l.onDestroy=function(i){this.jsxsuper(i);this.resetCacheData();c.dK.setLevel(Qa.INFO);var
Bb;if((Bb=this.getTester(i))!=null)Bb.close();};});
