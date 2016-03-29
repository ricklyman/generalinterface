(function(q){var
ub={A:"undefined",B:"with (__api) { ",C:" }",D:"div",E:"jsconsole-command",F:"span",G:"jsconsole-command-text",H:"jsx3.ide.jsconsole.Response",I:"info",J:"jsconsole-response-text",K:"jsconsole-response-",L:"jsconsole-formatted-",M:"_format",N:"_formatValue",O:/([\\\/])/g,P:"\\$1",Q:/\\(\/[gim]*)$/,R:"[",S:", ",T:"...",U:"]",V:"error-message",W:"jsx3.ide.jsconsole.ObjectSection",X:"section",Y:"title-collapsed",Z:"image",_:"name name-",a:"jsconsole",aa:"onclick",b:"console-history",ba:"ol",c:"jsx3.ide.jsconsole.Util",ca:"properties",d:/<br(\s+)?\/?>/ig,da:"none",e:"\n",ea:"title-expanded",f:"",fa:"block",g:"insertHtml",ga:'<div class="info">No Properties</div>',h:"character",ha:"li",i:"object",ia:"warning",j:"null",ja:"jsx3.ide.jsconsole.Property",k:"date",ka:"key",l:"regexp",la:"inherited-key",m:"array",ma:"value value-",n:"error",na:": ",o:"giobject",oa:"image-collapsed",p:"string",pa:"image-expanded",q:'"',qa:"jsconsole-function-context",r:"Array",ra:"jsx3.ide.jsconsole.Console",s:"function",sa:"templates/",t:"Function",ta:"console_xml",u:"Object",ua:"jsConsolePrompt",v:"[object]",va:"_jsxtempscript",w:/\[object\s\w+\]/,wa:"jsConsoleOutput",x:/\[object\s(\w+)\]/,xa:"<br style='position:relative'/>",y:"$1",z:"jsx3.ide.jsconsole.Command"};var
ga=100;q.isMultiInstance=function(){return true;};q.getHistory=function(){if(jsx3.IDE){var
E=jsx3.ide.getIDESettings();return E.get(ub.a,ub.b)||[];}else return this._jsxCachedHistory||[];};q.storeHistory=function(b){var
E=this.getHistory();E.push(b);this.setHistory(E);};q.setHistory=function(s){if(s&&s.length>=2){for(var
N=s.length-2;N>=0;N--)if(s[s.length-1]==s[N]){s=(s.splice(0,N)).concat(s.shift(),s);break;}if(s.length>ga)s.splice(0,s.length-ga);}if(jsx3.IDE){var
za=jsx3.ide.getIDESettings();za.set(ub.a,ub.b,s);}else this._jsxCachedHistory=s;};jsx3.lang.Class.defineClass(ub.c,null,null,function(Qa){Qa.getInnerText=function(b){if(jsx3.CLASS_LOADER.FX){var
D=b.cloneNode(true);D.innerHTML=D.innerHTML.replace(ub.d,ub.e);return D.textContent;}return b.textContent||b.innerText||ub.f;};Qa.setInnerText=function(l,g){if(jsx3.CLASS_LOADER.IE){l.innerText=g;}else l.textContent=g;};Qa.insertHTML=function(d){if(jsx3.CLASS_LOADER.IE){var
Bb=document.selection.createRange();Bb.select();Bb.pasteHTML(d);Bb.collapse(true);}else document.execCommand(ub.g,false,d);};Qa.moveCaretToEnd=function(c,f){var
lb;if(document.selection){range=document.body.createTextRange();range.moveToElementText(c);range.moveStart(ub.h,1);range.collapse(false);range.select();}else{var
qb=window.getSelection();range=document.createRange();range.setStart(c,c.childNodes.length);range.setEnd(c,c.childNodes.length);qb.removeAllRanges();qb.addRange(range);}if(f)c.focus();};Qa.getType=function(o){var
U=typeof o;if(U===ub.i&&o===null){U=ub.j;return U;}if(o instanceof Date)U=ub.k;if(o instanceof RegExp)U=ub.l;if(o instanceof Array)U=ub.m;if(o instanceof Error)U=ub.n;if(o instanceof jsx3.lang.Object)U=ub.o;if(o instanceof jsx3.lang.Exception)U=ub.n;return U;};Qa.getObjectDisplayName=function(n){var
Ab=Qa.getType(n);if(Ab==ub.j)return ub.j;if(Ab==ub.p)return ub.q+n+ub.q;if(Ab==ub.m)return ub.r;if(Ab==ub.s)return ub.t;if(Ab==ub.o){var
hb=n.toString?n.toString():ub.u;return hb;}if(Ab==ub.i){var
hb=n.toString?n.toString():ub.u;if(hb==ub.v)hb=ub.u;if(hb.match(ub.w))hb=hb.replace(ub.x,ub.y);return hb;}return n;};Qa.getElementsByXPath=function(m,a){var
Y=document;if(a&&a.ownerDocument)Y=a.ownerDocument;var
ia=Y.evaluate(m,a||Y,null,0,null);var
xb,hb=[];switch(ia.resultType){case ia.STRING_TYPE:return ia.stringValue;case ia.NUMBER_TYPE:return ia.numberValue;case ia.BOOLEAN_TYPE:return ia.booleanValue;default:while(xb=ia.iterateNext())hb.push(xb);return hb;}};Qa.injectedAPI={"$":function(a){return document.getElementById(a);},"$$":function(){if(document.querySelectorAll)return document.querySelectorAll.apply(document,arguments);},"$x":function(i,e){if(document.evaluate)return Qa.getElementsByXPath(i,e);},keys:function(k){var
kb=[];for(k in k)kb.push(k);return kb;},values:function(p){var
vb=[];for(k in p)try{vb.push(p[k]);}catch(Kb){}return vb;}};});var
Qa=jsx3.ide.jsconsole.Util;jsx3.lang.Class.defineClass(ub.z,null,null,function(s,b){b.init=function(j,i){this._script=j;this._console=i;this._console.cacheMessageObject(this);};b.executeScript=function(){var
Lb={};var
Eb=jsx3.IDE?jsx3.ide.getActiveServer():null;if(Eb)(Eb.getBodyBlock()).findDescendants(function(h){var
Ua=h.getName();if(Ua&&!Lb[Ua]&&jsx3.util.isName(Ua))Lb[Ua]=h;},false,false,false,true);var
ha=ub.A;try{ha=this.doEval(this._script,Lb);return new
jsx3.ide.jsconsole.Response(this._script,ha,false,this._console);}catch(ab){return new
jsx3.ide.jsconsole.Response(this._script,ab,true,this._console);}};b.doEval=function(h,e,o){if(h!=null&&h!==ub.f){var
__api=e;for(var bb in Qa.injectedAPI)__api[bb]=Qa.injectedAPI[bb];return eval(ub.B+h+ub.C);}};b.toHtmlElement=function(){var
_=document.createElement(ub.D);_.className=ub.E;var
A=document.createElement(ub.F);A.className=ub.G;Qa.setInnerText(A,this._script);_.appendChild(A);return _;};b.destroy=function(){this._console=null;};});jsx3.lang.Class.defineClass(ub.H,null,null,function(r,a){a.init=function(j,e,l,b){this._script=j;this._result=e;this.catalog=ub.I;if(l)this.catalog=ub.n;this._console=b;this.formattedResponse=this._format(e);this._console.cacheMessageObject(this);};a.toHtmlElement=function(){if(this.isInlineResponse){var
ea=document.createElement(ub.F);ea.className=ub.J;ea.appendChild(this.formattedResponse);return ea;}else{var
ra=document.createElement(ub.D);ra.className=ub.K+this.catalog;var
ea=document.createElement(ub.F);ea.className=ub.J;ea.appendChild(this.formattedResponse);ra.appendChild(ea);return ra;}};a._format=function(f){var
Sa=Qa.getType(f);var
ka=document.createElement(ub.F);ka.className=ub.L+Sa;var
H=ub.M+(Sa.substring(0,1)).toUpperCase()+Sa.substring(1);var
sa=this[H]?H:ub.N;this[sa](f,ka);return ka;};a._formatNull=function(f,p){p.appendChild(document.createTextNode(ub.j));};a._formatValue=function(h,i){i.appendChild(document.createTextNode(h));};a._formatFunction=function(n,i){Qa.setInnerText(i,n);};a._formatString=function(e,c){c.appendChild(document.createTextNode(ub.q+e+ub.q));};a._formatRegexp=function(l,d){var
kb=(((String(l)).replace(ub.O,ub.P)).replace(ub.Q,ub.y)).substring(1);d.appendChild(document.createTextNode(kb));};a._formatArray=function(e,o){o.appendChild(document.createTextNode(ub.R));for(var
Ib=0;Ib<e.length;++Ib){o.appendChild(this._format(e[Ib]));if(Ib<e.length-1)o.appendChild(document.createTextNode(ub.S));if(Ib>=50){o.appendChild(document.createTextNode(ub.T));break;}}o.appendChild(document.createTextNode(ub.U));};a._formatObject=function(n,h){h.appendChild((new
jsx3.ide.jsconsole.ObjectSection(n,this._console)).toHtmlElement());};a._formatGiobject=function(l,d){this._formatObject(l,d);};a._formatError=function(m,j){var
xb=document.createElement(ub.F);xb.className=ub.V;var
w=jsx3.NativeError.wrap(m);result=w.printStackTrace();Qa.setInnerText(xb,result);j.appendChild(xb);};a.destroy=function(){this._result=null;this.formattedResponse=null;};});jsx3.lang.Class.defineClass(ub.W,null,null,function(p,r){r.init=function(m,f){this._object=m;this._expanded=false;this._populated=false;this._console=f;this._console.cacheMessageObject(this);};r.toHtmlElement=function(){this.element=document.createElement(ub.D);this.element.className=ub.X;this.titleElement=document.createElement(ub.D);this.titleElement.className=ub.Y;this.imgElement=document.createElement(ub.F);this.imgElement.className=ub.Z;this.nameElement=document.createElement(ub.F);this.nameElement.className=ub._+Qa.getType(this._object);Qa.setInnerText(this.nameElement,Qa.getObjectDisplayName(this._object));this.titleElement.appendChild(this.imgElement);this.titleElement.appendChild(this.nameElement);this.clickHandler=(jsx3.$F(this.onClickHandler)).bind(this);jsx3.html.DOM.addEventListener(this.titleElement,ub.aa,this.clickHandler);this.propertiesElement=document.createElement(ub.ba);this.propertiesElement.className=ub.ca;this.propertiesList=[];this.element.appendChild(this.titleElement);this.element.appendChild(this.propertiesElement);return this.element;};r.onClickHandler=function(k){if(this._expanded){this.titleElement.className=ub.Y;this.propertiesElement.style.display=ub.da;}else{if(!this.populated){this.populate();this.populated=true;}this.titleElement.className=ub.ea;this.propertiesElement.style.display=ub.fa;}this._expanded=!this._expanded;};r.populate=function(){var
Ib=[];for(var Ka in this._object)Ib.push(Ka);Ib.sort();this.propertiesList=[];for(var
ta=0;ta<Ib.length;++ta){var
sa=this._object;var
ba=Ib[ta];var
Oa=new
jsx3.ide.jsconsole.Property(sa,ba,this._console);this.propertiesList.push(Oa);try{this.propertiesElement.appendChild(Oa.toHtmlElement());}catch(Kb){}}if(!this.propertiesList.length){var
G=ub.ga;var
Aa=document.createElement(ub.ha);Aa.className=ub.ia;Aa.innerHTML=G;this.propertiesElement.appendChild(Aa);}};r.destroy=function(){jsx3.html.DOM.removeEventListener(this.titleElement,ub.aa,this.clickHandler);this._object=null;this.element=null;this.titleElement=null;this.imgElement=null;this.nameElement=null;this.propertiesElement=null;};});jsx3.lang.Class.defineClass(ub.ja,null,null,function(a,c){c.init=function(n,p,f){this._object=n;this._propertyName=p;this._console=f;this._console.cacheMessageObject(this);};c.toHtmlElement=function(){var
t=this._object[this._propertyName];var
Ja=false;var
y=typeof t;if(t&&(y===ub.i||y===ub.s))for(subPropertyName in t){Ja=true;break;}this.hasChildren=Ja;this.element=document.createElement(ub.ha);this.imgElement=document.createElement(ub.F);this.imgElement.className=ub.Z;this.nameElement=document.createElement(ub.F);this.nameElement.className=ub.ka;if(this._object.constructor&&t===this._object.constructor.prototype[this._propertyName]||this._object.__jsxclass__&&t===this._object.__jsxclass__.prototype[this._propertyName])this.nameElement.className=ub.la;Qa.setInnerText(this.nameElement,this._propertyName);this.valueElement=document.createElement(ub.F);this.valueElement.className=ub.ma+Qa.getType(this._object[this._propertyName]);var
Bb=Qa.getObjectDisplayName(this._object[this._propertyName]);if(Bb==ub.r){this.hasChildren=false;var
V=new
jsx3.ide.jsconsole.Response(ub.f,this._object[this._propertyName],false,this._console);V.isInlineResponse=true;this.valueElement.appendChild(V.toHtmlElement());}else if(Bb==ub.t){Qa.setInnerText(this.valueElement,Bb);this.hasChildren=true;this.isFunctionObject=true;}else Qa.setInnerText(this.valueElement,Bb);this.element.appendChild(this.imgElement);this.element.appendChild(this.nameElement);this.element.appendChild(document.createTextNode(ub.na));this.element.appendChild(this.valueElement);if(this.hasChildren){this.imgElement.className=ub.oa;this.clickHandler=(jsx3.$F(this.onClickHandler)).bind(this);jsx3.html.DOM.addEventListener(this.nameElement,ub.aa,this.clickHandler);jsx3.html.DOM.addEventListener(this.imgElement,ub.aa,this.clickHandler);this.propertiesElement=document.createElement(ub.ba);this.propertiesElement.className=ub.ca;this.propertiesList=[];this.element.appendChild(this.propertiesElement);this._expanded=false;this.populated=false;}return this.element;};c.onClickHandler=function(){if(this._expanded){this.imgElement.className=ub.oa;this.propertiesElement.style.display=ub.da;}else{if(!this.populated){this.populate();this.populated=true;}this.imgElement.className=ub.pa;this.propertiesElement.style.display=ub.fa;}this._expanded=!this._expanded;};c.populate=function(){if(this.isFunctionObject){var
G=document.createElement(ub.ha);var
Eb=document.createElement(ub.D);Eb.className=ub.qa;Qa.setInnerText(Eb,this._object[this._propertyName].toString());G.appendChild(Eb);this.propertiesElement.appendChild(G);return;}var
Ib=this._object[this._propertyName];var
Da=[];for(var ha in Ib)Da.push(ha);Da.sort();this.propertiesList=[];for(var
T=0;T<Da.length;++T){var
C=Ib;var
Ba=Da[T];var
B=new
jsx3.ide.jsconsole.Property(C,Ba,this._console);this.propertiesList.push(B);try{this.propertiesElement.appendChild(B.toHtmlElement());}catch(Kb){}}if(!this.propertiesList.length){var
ra=ub.ga;this.propertiesElement.appendChild(G);}};c.destroy=function(){if(this.clickHandler){jsx3.html.DOM.removeEventListener(this.nameElement,ub.aa,this.clickHandler);jsx3.html.DOM.removeEventListener(this.imgElement,ub.aa,this.clickHandler);}this._object=null;this.element=null;this.imgElement=null;this.nameElement=null;this.valueElement=null;this.propertiesElement=null;};});jsx3.lang.Class.defineClass(ub.ra,jsx3.gui.Template.Block,[jsx3.xml.Cacheable,jsx3.xml.CDF],function(k,m){k.TEMPLATE_PATH=q.resolveURI(ub.sa);m.getPlugIn=function(){return q;};m._history=jsx3.$A([]);m._historyOffset=0;m._msgObject=[];m.cacheMessageObject=function(h){this._msgObject.push(h);};m.destroyMessageObjects=function(){var
x;while(x=this._msgObject.pop())if(x.destroy)try{x.destroy();}catch(Kb){}};m.recoverHistory=function(){this._history=jsx3.$A((this.getPlugIn()).getHistory());this._historyOffset=0;};m.loadTemplate=function(){var
fa=(q.getResource(ub.ta)).getData();jsx3.gui.Template.compile(fa,this.getClass());this.getTemplateXML=function(){return fa;};};m.onAfterPaint=function(){this.jsxsuper();var
Ta=this.getRenderedBox(ub.ua);this.updatePrompt(null);if(Ta)Ta.focus();};m.getPromptText=function(){return Qa.getInnerText(this.getRenderedBox(ub.ua));};m.onClick=function(d,i){};m.onBodyClick=function(l,b){var
u=l.srcElement();if(u==b||u.className==ub.E)(this.getRenderedBox(ub.ua)).focus();};m.onMouseUp=function(o,i){var
ib=null;if(o.rightButton()&&(ib=this.getMenu())!=null){var
Kb=this.getDescendantOfName(ib);if(Kb!=null)Kb.showContextMenu(o,this);}};m.onKeyDown=function(b,d){var
_=this.getRenderedBox(ub.ua);if(b.enterKey()){if(b.hasModifier())return;var
Cb=this.getPromptText();if(!Cb.length){b.cancelKey();return;}var
La=new
jsx3.ide.jsconsole.Command(Cb,this);var
U=La.executeScript();if(Cb!==this._history[this._history.length-1]){(this.getPlugIn()).storeHistory(Cb);this._history.push(Cb);}this._historyOffset=0;this.addHtmlElement(La);this.addHtmlElement(U);this.updatePrompt(null);b.cancelKey();b.cancelReturn();}else if(b.upArrow()){b.cancelKey();b.cancelReturn();if(this._historyOffset==this._history.length)return;if(this._historyOffset===0)this._jsxtempscript=this.getPromptText();this._historyOffset++;this.updatePrompt(this._history[this._history.length-this._historyOffset]);}else if(b.downArrow()){b.cancelKey();b.cancelReturn();if(this._historyOffset===0)return;this._historyOffset--;if(this._historyOffset===0){this.updatePrompt(this._jsxtempscript);delete this[ub.va];return;}this.updatePrompt(this._history[this._history.length-this._historyOffset]);}else if(b.backspaceKey()){Cb=this.getPromptText();if(Cb.length==1){b.cancelKey();b.cancelReturn();this.updatePrompt(null);}if(Cb.length==0){b.cancelKey();b.cancelReturn();}}};m.clear=function(){window.setTimeout((jsx3.$F(function(){this.destroyMessageObjects();this.repaint();})).bind(this),100);};m.addHtmlElement=function(d){(this.getRenderedBox(ub.wa)).appendChild(d.toHtmlElement());};m.updatePrompt=function(p){var
ya=this.getRenderedBox(ub.ua);if(!p){ya.innerHTML=ub.f;if(jsx3.CLASS_LOADER.FX){ya.innerHTML=ub.xa;}else Qa.moveCaretToEnd(ya,true);ya.scrollIntoView(false);}else{Qa.setInnerText(ya,p);Qa.moveCaretToEnd(ya,true);ya.scrollIntoView(false);}};m.onDestroy=function(){this.destroyMessageObjects();};m.loadTemplate();});})(this);
