jsx3.Class.defineClass("jsx3.ide.ApiSearcher",null,[jsx3.util.EventDispatcher],function(l,q){var
ub={A:"constructor",B:"method[not(@inherited)]",C:"jsxtext",D:"param",E:"return",F:"throws",G:"method",H:"@",I:/^\/.*\/(i|g|ig|gi)?$/,J:"new RegExp(",K:")",a:"onProgress",b:"onComplete",c:"text",d:"@name",e:"@since",f:"deprecated",g:"author",h:"@version",i:"@fullname",j:"@text",k:" ",l:"name",m:"string",n:"object",o:"*",p:"no XML document for ",q:"error in XML document ",r:": ",s:"/*",t:"record",u:"type",v:"class",w:"jsxidfk",x:"id",y:"jsxtip",z:"field"};l.PROGRESS=ub.a;l.COMPLETE=ub.b;l.PW=[ub.c,ub.d,ub.e,ub.f,ub.g,ub.h];l.Nz=[ub.c,ub.i,ub.e,ub.f];l.e3=[ub.c,ub.d,ub.e,ub.f];l.dy=[ub.d,ub.j];l.fI=[ub.j];l.NS=[ub.j];l.Y8=function(m,f){var
B=ub.k+m.getAttribute(ub.l);var
X=ub.k+f.getAttribute(ub.l);return B==X?0:B>X?1:-1;};q.AY=null;q.init=function(){this.KU=jsx3.xml.CDF.newDocument();this.fR=0;this.EZ=0;};q.searchDocuments=function(d,m){this.fR=d.size();this.EZ=0;this.UQ(d.toArray(),this.zN(m));};q.cancel=function(){if(this.AY){window.clearTimeout(this.AY);this.AY=null;}};q.UQ=function(c,s){this.AY=null;if(c.length==0){this.publish({subject:l.COMPLETE});return;}var
pa=c.shift();var
va=null,Za=null;if(typeof pa==ub.m||pa instanceof jsx3.net.URI){va=new
jsx3.xml.Document();Za=jsx3.IDE.resolveURI(pa);}else if(typeof pa==ub.n)if(pa instanceof jsx3.xml.Entity){va=pa;}else if(pa instanceof jsx3.io.File){va=new
jsx3.xml.Document();Za=jsx3.ide.relativePathTo(pa);}if(va){if(Za){va.setAsync(true);va.subscribe(ub.o,(jsx3.$F(this._onXmlDone)).bind(this,[va,Za,c,s]));va.load(Za);}else this._onXmlDone(va,Za,c,s);}else jsx3.ide.LOG.error(ub.p+pa);};q._onXmlDone=function(j,c,g,o){if(!j.hasError()){this.fY(j,o);}else{var
sa=j.getError();jsx3.ide.LOG.error(ub.q+c+ub.r+sa);}this.publish({subject:l.PROGRESS,objXML:j,strPath:c,total:this.fR,done:this.fR-g.length});this.AY=window.setTimeout((jsx3.$F(this.UQ)).bind(this,[g,o]),0);};q.fY=function(k,i){for(var
kb=k.selectNodeIterator(ub.s);kb.hasNext();)this.O4(kb.next(),i);};q.O4=function(a,s){var
za=null;if(this.tJ(a,l.PW,s)){za=this.KU.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.t);za.setAttribute(ub.u,ub.v);za.setAttribute(ub.v,a.getAttribute(ub.l));za.setAttribute(ub.w,a.getAttribute(ub.x));var
Ea=a.selectSingleNode(ub.c);if(Ea)za.setAttribute(ub.y,jsx3.util.strTruncate(Ea.getValue(),50));(this.KU.getRootNode()).appendChild(za);this.EZ++;}var
X=(a.selectNodes(ub.z)).toArray();X.sort(l.Y8);for(var
Db=0;Db<X.length;Db++)this.W7(X[Db],s,za);var
Ha=a.selectSingleNode(ub.A);if(Ha)this.My(Ha,s,za);var
Oa=(a.selectNodes(ub.B)).toArray();Oa.sort(l.Y8);for(var
Db=0;Db<Oa.length;Db++)this.My(Oa[Db],s,za);};q.W7=function(g,n,p){if(this.tJ(g,l.Nz,n)){var
T=this.KU.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.t);T.setAttribute(ub.u,ub.z);T.setAttribute(ub.w,g.getAttribute(ub.x));T.setAttribute(ub.v,(g.getParent()).getAttribute(ub.l));T.setAttribute(ub.C,g.getAttribute(ub.l));var
Ta=g.selectSingleNode(ub.c);if(Ta)T.setAttribute(ub.y,jsx3.util.strTruncate(Ta.getValue(),50));(p||this.KU.getRootNode()).appendChild(T);this.EZ++;}};q.My=function(g,n,p){var
nb=this.tJ(g,l.e3,n);if(!nb)for(var
Qa=g.getChildIterator();!nb&&Qa.hasNext();){var
fa=Qa.next();var
A=fa.getNodeName();if(A==ub.D)nb=this.tJ(fa,l.dy,n);else if(A==ub.E)nb=this.tJ(fa,l.fI,n);else if(A==ub.F)nb=this.tJ(fa,l.NS,n);}if(nb){var
E=this.KU.createNode(jsx3.xml.Entity.TYPEELEMENT,ub.t);E.setAttribute(ub.u,ub.G);E.setAttribute(ub.w,g.getAttribute(ub.x));E.setAttribute(ub.v,(g.getParent()).getAttribute(ub.l));E.setAttribute(ub.C,g.getAttribute(ub.l));var
Gb=g.selectSingleNode(ub.c);if(Gb)E.setAttribute(ub.y,jsx3.util.strTruncate(Gb.getValue(),50));(p||this.KU.getRootNode()).appendChild(E);this.EZ++;}};q.tJ=function(o,g,f){for(var
Qa=0;Qa<g.length;Qa++){var
qa=g[Qa];if(qa.charAt(0)==ub.H){if(f(o.getAttribute(qa.substring(1))))return true;}else for(var
pa=o.selectNodeIterator(qa);pa.hasNext();)if(f((pa.next()).getValue()))return true;}return false;};q.zN=function(j){var
yb=null;if(j.match(ub.I))try{var
X=jsx3.eval(ub.J+j+ub.K);yb=(function(n){return n&&X.test(n);});}catch(Kb){}if(yb==null){var
T=j.toLowerCase();yb=(function(k){return k!=null&&(k.toLowerCase()).indexOf(T)>=0;});}return yb;};q.getResults=function(){return this.KU;};q.getResultCount=function(){return this.EZ;};});
