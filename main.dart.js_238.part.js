self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
evj(d){return new B.a1o(!0,null)},
aAv:function aAv(d,e){this.a=d
this.b=e},
a1o:function a1o(d,e){this.c=d
this.a=e},
aIp:function aIp(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.z=!0
_.Q=f
_.ch=!1
_.d=g
_.a=null
_.b=h
_.c=null},
cLq:function cLq(d){this.a=d},
cLp:function cLp(d){this.a=d},
cLr:function cLr(d,e){this.a=d
this.b=e},
cLs:function cLs(d,e){this.a=d
this.b=e},
cLm:function cLm(d){this.a=d},
cLn:function cLn(d){this.a=d},
cLo:function cLo(d){this.a=d},
cLk:function cLk(){},
cLl:function cLl(d){this.a=d},
cLj:function cLj(){},
ezU(d,e,f,g){return new B.ays(d,f,e,g,null)},
ays:function ays(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.r=f
_.x=g
_.a=h},
bxn:function bxn(d){var _=this
_.d=null
_.f=!1
_.a=null
_.b=d
_.c=null},
dza:function dza(d){this.a=d},
dz9:function dz9(d){this.a=d},
dz8:function dz8(d){this.a=d},
dz7:function dz7(d){this.a=d},
dz6:function dz6(d){this.a=d},
aUL(d,e,f){return B.evV(d,e,f)},
evV(d,e,f){var x=0,w=A.r(y.w),v,u=2,t,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$aUL=A.n(function(g,a0){if(g===1){t=a0
x=u}while(true)switch(x){case 0:u=4
r=C.r.ct(E.eeO(d),null)
m=A.aAD("POST",A.d4("https://fluxbuilder.inspireui.com/job",0,null))
l=m.y
l.k(0,"themeJson",r)
l.k(0,"email",e)
l.k(0,"recaptcha",$.e6W)
k=y.w
l.E(0,A.b8(f,k,k))
q=m
A.S(q.y,null)
x=7
return A.l(J.dWC(q),$async$aUL)
case 7:p=a0
x=p.b===200?8:10
break
case 8:A.S("\u2b50\ufe0f Congratulation !!",null)
v=""
x=1
break
x=9
break
case 10:h=C.r
x=11
return A.l(C.a9.aiP(p.x),$async$aUL)
case 11:o=h.ad(0,a0,null)
A.S("\ud83d\udd34\ufe0f There is an issue",null)
A.S(A.i(o),null)
l=o
l=l==null?null:J.h(l,"message")
if(l==null)l="Unknown error"
v=l
x=1
break
case 9:u=2
x=6
break
case 4:u=3
i=t
n=A.aM(i)
A.S(n,null)
throw i
x=6
break
case 3:x=2
break
case 6:case 1:return A.p(v,w)
case 2:return A.o(t,w)}})
return A.q($async$aUL,w)}},A,C,E,J,D
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[8],B)
A=c[0]
C=c[2]
E=c[57]
J=c[1]
D=c[69]
B.aAv.prototype={
l(d){return"MessType."+this.b}}
B.a1o.prototype={
B(){var x=null
return new B.aIp(A.aO(x),A.aO(x),C.F,A.dd(!0,x,!0,x,x,!1),C.n)}}
B.aIp.prototype={
n(d){this.a8(0)},
J(){this.K5()
A.cr(C.L,new B.cLq(this),y.F)},
b2e(d,e){var x=this
switch(e.a){case 0:x.m(new B.cLr(x,d))
break
case 1:x.m(new B.cLs(x,d))
break}},
SD(){var x=0,w=A.r(y.b),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k
var $async$SD=A.n(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
if(r.ch){x=1
break}r.m(new B.cLm(r))
m=r.c
m.toString
q=A.B(m,!1,y.r).c.S()
m=r.c
m.toString
p=E.e6p(m)
x=7
return A.l(B.aUL(p,r.y.a.a,q),$async$SD)
case 7:o=e
x=J.ai(o)===0?8:10
break
case 8:x=11
return A.l($.F_().$1$0(y.s).iz("Int","lastTimeRequest",1000*Date.now()),$async$SD)
case 11:r.m(new B.cLn(r))
x=9
break
case 10:r.b2e(o,D.dnT)
r.m(new B.cLo(r))
case 9:u=2
x=6
break
case 4:u=3
k=t
n=A.aM(k)
A.S(n,null)
throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.p(v,w)
case 2:return A.o(t,w)}})
return A.q($async$SD,w)},
aWL(){var x,w=A.ee(J.h($.F_().$1$0(y.s).a,"lastTimeRequest"))
if(w==null)return 130
x=C.d.I(w/1000)
new A.aQ(x,!1).rk(x,!1)
x=C.f.bh(A.cm(0,0,0,Date.now()-x,0,0).a,1e6)
A.S("\u23f0 the difference run time "+x+" seconds",null)
return x},
p(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c
j.toString
x=y.r
w=A.B(j,!1,x).c.S()
if(w.h(0,"isBuilder")!=null)w.eg(w,new B.cLk())
A.S("\ud83e\udd16 serverConfig",k)
j=l.c
j.toString
A.S(A.B(j,!1,x).c.S(),k)
A.S("\u2b50\ufe0f get URL",k)
j=l.c
j.toString
A.S(A.Qd("fluxbuilder.inspireui.com",k,k,k,A.B(j,!1,x).c.S(),"https").gH4(),k)
x=y.n
A.B(e,!0,x)
l.x.saC(0,w.h(0,"url"))
j=y.x
v=y.u
u=A.b([new A.a1(k,e.C(j).f.a.b*0.08,k,k),A.v("Build Testing APK",k,k,k,k,k,A.k(e).v.r,k,k,k),C.bo],v)
l.a.toString
u.push(C.B)
C.b.E(u,A.Et("YOUR EMAIL",k,A.UW(e,k,k,"The Email Address to get the download APK file"),k))
t=l.y
l.a.toString
u.push(B.ezU(t,"Type your email",new B.cLl(l),!1))
u.push(C.B)
j=e.C(j).f
s=A.ae(9)
r=A.k(e).cy
q=C.d.I(127.5)
r=A.R(q,r.gj(r)>>>16&255,r.gj(r)>>>8&255,r.gj(r)&255)
p=new A.bB(A.k(e).cy,1,C.Z)
o=A.aX(C.kW,A.k(e).cx,18)
n=A.k(e).v.ch
n.toString
m=A.k(e).ch.f
u.push(A.y(k,A.y(k,A.N(A.b([o,C.a1,A.a7(A.v("You will receive a test APK which is used for previewing design only.\nDo not provide this APK to your customers. To build a release APK, please use the desktop version of FluxBuilder instead.",k,k,k,k,!0,n.a2S(A.R(153,m.gj(m)>>>16&255,m.gj(m)>>>8&255,m.gj(m)&255),C.aH,1.5),k,k,k),1)],v),C.l,k,C.j,C.i,k,k),C.e,k,k,new A.Z(r,k,new A.bW(p,p,p,p),s,k,k,k,C.q),k,k,k,k,C.m9,k,k,j.a.a*0.5),C.e,k,D.Mg,k,k,k,k,k,k,k,k,k))
u.push(C.a3)
j=l.c
j.toString
A.B(j,!0,x)
j=l.z
x=l.c
if(j){j=l.ch
x.toString
x=A.k(x)
v=t.a.a
t=A.c8("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+",!0,!1,!1,!1)
v=!t.b.test(v)
j=A.E_(x.cx,k,C.mu,v,j,l.gbRR(),"Create APK",k,k,120)}else{x.toString
j=A.k(x).v.ch
j.toString
x=l.c
x.toString
x=A.k(x).ch.f
v=A.N(A.b([A.v("The APK is generated and will be sent to your email shortly ",k,k,k,k,k,j.b5(A.R(q,x.gj(x)>>>16&255,x.gj(x)>>>8&255,x.gj(x)&255)),k,k,k)],v),C.l,k,C.j,C.i,k,k)
j=v}u.push(j)
u.push(C.a3)
u.push(l.Q)
return new A.T(C.aZ,A.bs(A.O(u,C.u,k,C.j,C.i,k,C.m),k,C.o,k,k,k,k,C.A),k)},
gbO(d){return this.Q}}
B.ays.prototype={
B(){return new B.bxn(C.n)}}
B.bxn.prototype={
Sl(){var x,w,v,u
try{x="(https?|http)://([-A-Z0-9.]+)(/[-A-Z0-9+&@#/%=~_|!:,.;]*)?(\\?[A-Z0-9+&@#/%=~_|!:\u200c\u200b,.;]*)?"
w=A.c8(x,!1,!1,!1,!1)
v=this.a.c.a.a
w=w.u2(v)
return w!=null}catch(u){return!1}},
J(){var x,w=this
w.f=w.Sl()
x=A.dd(!0,null,!0,null,null,!1)
w.d=x
x.aF(0,new B.dza(w))
w.O()},
p(d,e){var x,w,v,u,t,s=this,r=null,q=A.k(e),p=A.ae(5),o=s.a,n=o.c,m=s.d
o=o.x
x=A.b([new A.SE(A.c8("[a-zA-Z@/:.0-9-_]",!0,!1,!1,!1),!0,"")],y.y)
w=A.k(e).v.z
w.toString
v=A.k(e).ch.f
w=w.b5(A.R(C.d.I(255*(s.a.x?0.2:1)),v.gj(v)>>>16&255,v.gj(v)>>>8&255,v.gj(v)&255))
v=s.a.r
if(v==null)v="Type your website URL, ex: https://mstore.io"
u=A.k(e).ch.f
t=y.u
t=A.b([A.y(r,A.N(A.b([A.a7(A.dXD(!0,!1,n,C.rD,r,m,x,C.dCD,1,r,!1,new B.dz7(s),new B.dz8(s),r,C.oP,v,A.at(r,r,A.R(C.d.I(127.5),u.gj(u)>>>16&255,u.gj(u)>>>8&255,u.gj(u)&255),r,r,r,r,r,r,r,r,14,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,o,D.aqF,w,r,C.FD,C.a2,r),1)],t),C.l,r,C.j,C.i,r,r),C.e,r,D.Mg,new A.Z(q.cy,r,r,p,r,r,r,C.q),r,r,r,r,C.cf,r,r,r)],t)
s.a.toString
return new A.Fu(A.O(t,C.u,r,C.j,C.i,r,C.m),r)}}
var z=a.updateTypes(["~()"])
B.cLq.prototype={
$0(){var x=0,w=A.r(y.F),v=this,u
var $async$$0=A.n(function(d,e){if(d===1)return A.o(e,w)
while(true)switch(x){case 0:u=v.a
if(u.aWL()<30)u.m(new B.cLp(u))
return A.p(null,w)}})
return A.q($async$$0,w)},
$S:47}
B.cLp.prototype={
$0(){this.a.z=!1},
$S:0}
B.cLr.prototype={
$0(){var x=null
this.a.Q=A.v(this.b,x,x,x,x,x,C.kd,x,x,x)},
$S:0}
B.cLs.prototype={
$0(){var x=null,w=this.a,v=w.c
v.toString
w.Q=A.v(this.b,x,x,x,x,x,A.at(x,x,A.k(v).cx,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:0}
B.cLm.prototype={
$0(){var x=this.a
x.Q=C.F
x.ch=!0},
$S:0}
B.cLn.prototype={
$0(){var x=this.a
x.ch=x.z=!1},
$S:0}
B.cLo.prototype={
$0(){this.a.ch=!1},
$S:0}
B.cLk.prototype={
$2(d,e){return d==="isBuilder"},
$S:21}
B.cLl.prototype={
$1(d){return this.a.m(new B.cLj())},
$S:5}
B.cLj.prototype={
$0(){},
$S:0}
B.dza.prototype={
$0(){var x=this.a
x.m(new B.dz9(x))},
$S:0}
B.dz9.prototype={
$0(){this.a.d.gek()},
$S:0}
B.dz8.prototype={
$1(d){this.a.a.toString},
$S:5}
B.dz7.prototype={
$1(d){var x=this.a
x.m(new B.dz6(x))
x.a.e.$1(d)},
$S:5}
B.dz6.prototype={
$0(){var x=this.a
x.f=x.Sl()},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aIp.prototype,"gbRR","SD",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aAv,A.a62)
w(A.K,[B.a1o,B.ays])
x(B.aIp,A.Uy)
w(A.La,[B.cLq,B.cLp,B.cLr,B.cLs,B.cLm,B.cLn,B.cLo,B.cLj,B.dza,B.dz9,B.dz6])
x(B.cLk,A.Mf)
w(A.DB,[B.cLl,B.dz8,B.dz7])
x(B.bxn,A.M)})()
A.ek(b.typeUniverse,JSON.parse('{"aAv":{"ac":[]},"a1o":{"K":[],"j":[]},"aIp":{"M":["a1o"]},"ays":{"K":[],"j":[]},"bxn":{"M":["ays"]}}'))
var y={y:A.a9("I<PW>"),u:A.a9("I<j>"),x:A.a9("CJ"),F:A.a9("aF"),s:A.a9("TF"),w:A.a9("t"),n:A.a9("Q2"),r:A.a9("N0"),b:A.a9("@")};(function constants(){D.Mg=new A.aC(0,500,0,1/0)
D.aqF=new A.at2(1,"max")
D.dnT=new B.aAv(0,"error")
D.dPl=new B.aAv(1,"success")})()}
$__dart_deferred_initializers__["byvKZqhWvzjV02oGCVlCYNA48Es="] = $__dart_deferred_initializers__.current
