/*
 * Copyright (c) 2001-2011, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block","jsx3.gui.Form");jsx3.Class.defineClass("jsx3.gui.ColorPicker",jsx3.gui.Block,[jsx3.gui.Form],function(j,q){var
ub={A:"_2_h",B:"px;background-color:#000000;",C:"_3_v",D:'px;">&#160;</span>',E:"_eb1DMouseDownPt",F:'<img src="',G:"_drag",H:'" width="6" height="9" alt="',I:"handle",J:'"/>',K:'6px;height:9px;">&#160;</span>',L:"&#160;",M:"relativebox",N:"box",O:"span",P:"div",Q:"inline",R:"100%",S:"cursor:pointer;overflow:hidden;",T:"cursor:pointer;",U:"1px solid #CCCCCC;",V:"overflow:hidden;",W:"1px solid #333333;",X:"px;",Y:'"',Z:'px;" alt=""/>',_:"mousemove",a:"jsx:///images/colorpicker/",aa:"RM",b:"d1arrow.gif",ba:"mouseup",c:"hue-v.png",ca:"yo",d:"hue-h.png",da:"q3",e:"saturation-v.png",ea:"_jsxoffsetx",f:"saturation-h.png",fa:"_jsxoffsety",g:"brightness-v.png",ga:"jsxchange",h:"string",ha:"px",i:"#",j:"0x",k:'id="',l:'" class="jsx30colorpicker" ',m:"mousedown",n:"Uq",o:"_eb1DMouseDown",p:"",q:"<span",r:' class="gradient" style="width:',s:"px;height:",t:"px;background-color:",u:';"></span>',v:"_1_v",w:"_1_h",x:"px;background-color:#FFFFFF;",y:'"></span>',z:"_2_v"};var
v=jsx3.gui.Interactive;var
jb=jsx3.gui.Block;var
Ma=jsx3.gui.Event;var
qa=jsx3.html;var
ba=qa.selectSingleElm;j.DEFAULT_WIDTH=324;j.DEFAULT_HEIGHT=300;j.HUE=1;j.SATURATION=2;j.BRIGHTNESS=3;j.ZO=16;j.Pu=8;j.hD=9;j.R5=9;var
Bb=ub.a;j.wp={_drag:jsx3.resolveURI(Bb+ub.b),_1_v:jsx3.resolveURI(Bb+ub.c),_1_h:jsx3.resolveURI(Bb+ub.d),_2_v:jsx3.resolveURI(Bb+ub.e),_2_h:jsx3.resolveURI(Bb+ub.f),_3_v:jsx3.resolveURI(Bb+ub.g)};if(jsx3.CLASS_LOADER.IE6)for(var da in j.wp)qa.loadImages(j.wp[da]);q.init=function(l,m,h,n,g){this.jsxsuper(l,m,h,n,g);this.jsxrgb=16711680;this.jsxaxis=1;};q.getValue=function(){return this.jsxrgb;};q.setValue=function(e){var
O=parseInt(e);if(!isNaN(O)){this.setRGB(O);}else if(typeof e==ub.h){if(e.indexOf(ub.i)==0)e=e.substring(1);O=parseInt(ub.j+e);if(!isNaN(O))this.setRGB(O);else this.setRGB(0);}else this.setRGB(0);};q.doValidate=function(){var
cb=1;this.setValidationState(cb);return cb;};q.getRGB=function(){return this.jsxrgb;};q.getRgbAsHex=function(){return ub.j+(((16777216+(this.jsxrgb||Number(0))).toString(16)).substring(1)).toUpperCase();};q.setRGB=function(m){this.jsxrgb=Math.max(0,Math.min(m,16777215));this.JO(true,true);};q.getAxis=function(){return this.jsxaxis||1;};q.setAxis=function(s){this.jsxaxis=s;this.Qf();return this;};q.setHSB=function(f,n,l){var
aa=j.HSBtoRGB(f,n,l);this.jsxrgb=(aa[0]<<16)+(aa[1]<<8)+aa[2];this.JO(true,true,[f,n,l]);};q.paint=function(){this.applyDynamicProperties();var
Aa=j.RGBtoHSB(this.jsxrgb);var
Fb=j.HSBtoRGB(Aa[0],1,1);var
sb=ub.i+j.T7(Fb[0],Fb[1],Fb[2]);var
za=this.renderAttributes(null,false);var
U=this.getAxis();var
Ja=this.Wl(true);Ja.setAttributes(ub.k+this.getId()+ub.l+this.Rl()+this.nk()+this.Ak()+za+qa._d);Ja.setStyles(this.Wi()+this.ad()+this.lc());var
Va=Ja.lg(0);var
B=Va.lg(0);B.setAttributes(this.Fg(ub.m,ub.n,2)+qa._d);var
Ha=Va.lg(1);Ha.setAttributes(this.Fg(ub.m,ub.o,2)+qa._d);var
R=ub.p,Nb=ub.p;var
X=Ha.ee(),mb=Ha.ld();var
aa=B.ee(),Ra=B.ld();var
bb=ub.q+qa._d+ub.r;if(U==1){R=R+(bb+aa+ub.s+Ra+ub.t+sb+ub.u);Nb=Nb+this.J9(j.wp[ub.v],X,mb);}else{R=R+this.J9(j.wp[ub.w],aa,Ra);Nb=Nb+(bb+X+ub.s+mb+ub.t+sb+ub.u);}if(U==2){R=R+(bb+aa+ub.s+Ra+ub.x+qa.getCSSOpacity(1-Aa[1])+ub.y);Nb=Nb+this.J9(j.wp[ub.z],X,mb);}else{R=R+this.J9(j.wp[U==1?ub.A:ub.z],aa,Ra);Nb=Nb+(bb+X+ub.s+mb+ub.x+qa.getCSSOpacity(1-Aa[1])+ub.y);}if(U==3){R=R+(bb+aa+ub.s+Ra+ub.B+qa.getCSSOpacity(1-Aa[2])+ub.y);Nb=Nb+this.J9(j.wp[ub.C],X,mb);}else{R=R+this.J9(j.wp[ub.C],aa,Ra);Nb=Nb+(bb+X+ub.s+mb+ub.B+qa.getCSSOpacity(1-Aa[2])+ub.y);}R=R+(bb+aa+ub.s+Ra+ub.D);Nb=Nb+(bb+X+ub.s+mb+ub.D);var
w=B.lg(0);R=R+(w.paint()).join(((w.lg(0)).paint()).join(ub.p));var
vb=Va.lg(2);vb.setAttributes(this.Fg(ub.m,ub.E,2)+qa._d);return (Ja.paint()).join((Va.paint()).join((B.paint()).join(R)+(Ha.paint()).join(Nb)+(vb.paint()).join(ub.F+j.wp[ub.G]+ub.H+this.Nk(ub.I,j)+ub.J+bb+ub.K)+ub.L));};q.zd=function(b){var
ma=jsx3.gui.Painted.Box;if(this.getParent()&&(b==null||isNaN(b.parentwidth)||isNaN(b.parentheight))){b=(this.getParent()).Id(this);}else if(b==null)b={};var
wb=this.getRelativePosition()!=0;var
pa=wb?null:this.getLeft();var
Da=wb?null:this.getTop();var
F=j.RGBtoHSB(this.jsxrgb);var
fa=this.Kr(F);if(!b.boxtype)b.boxtype=wb?ub.M:ub.N;b.tagname=ub.O;if(b.left==null&&pa!=null)b.left=pa;if(b.top==null&&Da!=null)b.top=Da;b.width=this.getWidth()||j.DEFAULT_WIDTH;b.height=this.getHeight()||j.DEFAULT_HEIGHT;var
Oa=new
ma(b);var
Ha=Oa.ee();var
va=Oa.ld();var
_a=new
ma({tagname:ub.P,boxtype:ub.Q,height:va,width:Ha});Oa.cl(_a);var
tb={tagname:ub.O,boxtype:ub.N,left:0,top:0,width:Ha-j.ZO-j.Pu,height:ub.R,border:this.getBorder(),parentwidth:Ha,parentheight:va};var
Kb=new
ma(tb);Kb.setStyles(ub.S);_a.cl(Kb);tb={tagname:ub.O,boxtype:ub.N,left:Ha-j.ZO,top:0,width:j.ZO,height:ub.R,border:this.getBorder(),parentwidth:Ha,parentheight:va};var
_=new
ma(tb);_.setStyles(ub.T);_a.cl(_);var
P=Math.round(fa[1]*(Kb.ee()-1))-Math.floor(j.R5/2);var
ta=Math.round(fa[2]*(Kb.ld()-1))-Math.floor(j.R5/2);tb={tagname:ub.O,boxtype:ub.N,left:P,top:ta,width:j.R5,height:j.R5,border:ub.U};var
xb=new
ma(tb);xb.setStyles(ub.V);var
Za=new
ma({tagname:ub.O,boxtype:ub.N,left:0,top:0,width:j.R5-2,height:j.R5-2,border:ub.W});Za.setStyles(ub.V);xb.cl(Za);Kb.cl(xb);ta=Math.round(fa[0]*(_.ld()-1))-Math.floor(j.hD/2)+_.hj();tb={tagname:ub.O,boxtype:ub.N,left:Ha-j.ZO-5,top:ta,width:6,height:j.hD};var
N=new
ma(tb);N.setStyles(ub.T);_a.cl(N);return Oa;};q.Hj=function(e,b,m){this.sk(e,b,m,1);};q.r9=function(h){switch(this.getAxis()){case 1:return [1-h[0],h[1],1-h[2]];case 2:return [1-h[1],1-h[0],1-h[2]];case 3:return [1-h[1],1-h[2],1-h[0]];default:throw new
jsx3.Exception();}};q.Kr=function(b){switch(this.getAxis()){case 1:return [1-b[0],b[1],1-b[2]];case 2:return [1-b[1],1-b[0],1-b[2]];case 3:return [1-b[2],1-b[0],1-b[1]];default:throw new
jsx3.Exception();}};q.J9=function(o,b,c){if(jsx3.CLASS_LOADER.IE6){return ub.q+qa._d+ub.r+b+ub.s+c+ub.X+qa.getCSSPNG(o)+ub.y;}else return ub.F+o+ub.Y+qa._d+ub.r+b+ub.s+c+ub.Z;};q.TN=function(a,l){Ma.unsubscribe(ub._,this);Ma.subscribe(ub._,this,ub.aa);Ma.subscribe(ub.ba,this,ub.ca);};q._eb1DMouseDownPt=function(k,b){var
na=qa.getRelativePosition(b.parentNode,b);this._jsxoffsety=k.getTrueY()-k.getOffsetY()-Math.max(-3,na.T);this.TN(k,b);};q._eb1DMouseDown=function(a,l){var
ua=qa.getRelativePosition(l,a.srcElement());this._jsxoffsety=a.getTrueY()-a.getOffsetY()-Math.max(0,ua.T);this.TN(a,l);this._2(a,(a.getOffsetY()+ua.T)/(l.offsetHeight-1),null,null);};q.Uq=function(h,e){Ma.unsubscribe(ub._,this);Ma.subscribe(ub._,this,ub.da);Ma.subscribe(ub.ba,this,ub.ca);var
ob=qa.getRelativePosition(e,h.srcElement());this._jsxoffsetx=h.getTrueX()-h.getOffsetX()-Math.max(0,ob.L);this._jsxoffsety=h.getTrueY()-h.getOffsetY()-Math.max(0,ob.T);this._2(h,null,(h.getOffsetX()+ob.L)/(e.offsetWidth-1),(h.getOffsetY()+ob.T)/(e.offsetHeight-1));};q.RM=function(r){r=r.event;var
ga=r.getTrueY()-this._jsxoffsety;var
ya=ba(this.getRendered(r),0,1);ga=Math.max(0,Math.min(ya.offsetHeight-1,ga));this._2(r,ga/(ya.offsetHeight-1),null,null);};q.q3=function(d){d=d.event;var
cb=d.getTrueX()-this._jsxoffsetx;var
ua=d.getTrueY()-this._jsxoffsety;var
Xa=ba(this.getRendered(d),0,0);cb=Math.max(0,Math.min(Xa.offsetWidth-1,cb));ua=Math.max(0,Math.min(Xa.offsetHeight-1,ua));this._2(d,null,cb/(Xa.offsetWidth-1),ua/(Xa.offsetHeight-1));};q.yo=function(k){Ma.unsubscribe(ub._,this);Ma.unsubscribe(ub.ba,this);delete this[ub.ea];delete this[ub.fa];};q._2=function(m,r,f,p){var
ua=this.Kr(j.RGBtoHSB(this.jsxrgb));if(r!=null)ua[0]=r;if(f!=null)ua[1]=f;if(p!=null)ua[2]=p;var
Kb=this.r9(ua);var
Ua=j.HSBtoRGB(Kb[0],Kb[1],Kb[2]);this.jsxrgb=(Ua[0]<<16)+(Ua[1]<<8)+Ua[2];this.JO(r!=null,f!=null||p!=null,Kb);this.doEvent(ub.ga,{objEVENT:m,intRGB:this.jsxrgb,_gipp:1});};q.JO=function(g,n,l){var
tb=this.getRendered();if(tb!=null){if(l==null)l=j.RGBtoHSB(this.jsxrgb);var
Ta=j.HSBtoRGB(l[0],1,1);var
Gb=this.getAxis();var
Sa=this.Kr(l);if(g){switch(Gb){case 1:(ba(tb,0,0,0)).style.backgroundColor=ub.i+j.T7(Ta[0],Ta[1],Ta[2]);break;case 2:qa.updateCSSOpacity(ba(tb,0,0,1),1-l[1]);break;case 3:qa.updateCSSOpacity(ba(tb,0,0,2),1-l[2]);break;default:throw new
jsx3.Exception();}var
Ba=ba(tb,0,2);var
t=((this.Wl(true)).lg(0)).lg(1);Ba.style.top=Math.round(Sa[0]*(t.ld()-1))-Math.floor(j.hD/2)+t.hj()+ub.ha;}if(n){switch(Gb){case 1:qa.updateCSSOpacity(ba(tb,0,1,1),1-l[1]);qa.updateCSSOpacity(ba(tb,0,1,2),1-l[2]);break;case 2:(ba(tb,0,1,0)).style.backgroundColor=ub.i+j.T7(Ta[0],Ta[1],Ta[2]);qa.updateCSSOpacity(ba(tb,0,1,2),1-l[2]);break;case 3:(ba(tb,0,1,0)).style.backgroundColor=ub.i+j.T7(Ta[0],Ta[1],Ta[2]);qa.updateCSSOpacity(ba(tb,0,1,1),1-l[1]);break;default:throw new
jsx3.Exception();}var
Ya=ba(tb,0,0,4);var
t=((this.Wl(true)).lg(0)).lg(0);Ya.style.left=Math.round(Sa[1]*(t.ee()-1))-Math.floor(j.R5/2)+ub.ha;Ya.style.top=Math.round(Sa[2]*(t.ld()-1))-Math.floor(j.R5/2)+ub.ha;}}};q.onSetChild=function(d){return false;};j.HSBtoRGB=function(f,n,b){var
Ga=0,Pa=0,T=0,w;f=360*(f-Math.floor(f));var
O=255*b;var
ab=O*n;var
ha=O-ab;if(f>=300||f<60){if(f>=300)f=f-360;Ga=O;w=f*ab/60;if(w<0){Pa=ha;T=Pa-w;}else{T=ha;Pa=T+w;}}else if(f>=60&&f<180){Pa=O;w=(f-120)*ab/60;if(w<0){T=ha;Ga=T-w;}else{Ga=ha;T=Ga+w;}}else if(f>=180&&f<300){T=O;w=(f-240)*ab/60;if(w<0){Ga=ha;Pa=Ga-w;}else{Pa=ha;Ga=Pa+w;}}return [Math.round(Ga),Math.round(Pa),Math.round(T)];};j.RGBtoHSB=function(b,m,r){if(arguments.length==1){r=b&255;m=(b&65280)>>8;b=(b&16711680)>>16;}var
hb=0,I=1,yb=1;var
ya=b>m?b:m;if(r>ya)ya=r;var
ha=b<m?b:m;if(r<ha)ha=r;yb=ya/255;if(ya!=0)I=(ya-ha)/ya;else I=0;if(I==0){hb=0;}else{var
Na=(ya-b)/(ya-ha);var
Y=(ya-m)/(ya-ha);var
za=(ya-r)/(ya-ha);if(b==ya)hb=za-Y;else if(m==ya)hb=2+Na-za;else hb=4+Y-Na;hb=hb/6;if(hb<0)hb=hb+1;}return [hb,I,yb];};j.T7=function(p,h,m){return ((16777216+(p<<16)+(h<<8)+m).toString(16)).substring(1);};});
