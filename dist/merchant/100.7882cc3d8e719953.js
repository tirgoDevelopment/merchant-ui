"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[100],{100:(w,p,n)=>{n.r(p),n.d(p,{default:()=>j});var g=n(4755),e=n(2223),u=n(9401),d=n(1728),C=n(1292),f=n(9114),h=n(430),P=n(9609),l=n(8467),v=n(2480),T=n(3844),F=n(1600),y=n(3648),b=n(8657),A=n(1217),a=n(5580),V=n(7406),x=n(1709),Z=n(8951);function E(i,c){1&i&&(e.TgZ(0,"span"),e._uU(1,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),e.qZA())}function I(i,c){1&i&&e._UZ(0,"mat-progress-spinner",13),2&i&&e.Q6J("diameter",24)("mode","indeterminate")}let J=(()=>{class i{constructor(o,s,t,r){this.data=o,this.cdr=s,this.dialogRef=t,this.router=r,this.authService=(0,e.f3M)(Z.e),this.toastr=(0,e.f3M)(y._W),this.loading=!1,this.countdown=119,this.isCodeExpired=!1,this.codeEntered=!1}ngOnInit(){this.smsCode=this.data.code,this.startCountdown()}sendVerifyedCode(){this.loading=!0,this.isCodeExpired?(this.loading=!1,this.toastr.error("\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f SMS-\u043a\u043e\u0434\u0430 \u0438\u0441\u0442\u0435\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439."),this.dialogRef.close()):this.smsCode!==this.verifyCode?(this.loading=!1,this.toastr.error("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442")):this.smsCode==this.verifyCode&&(this.dialogRef.close(),this.router.navigate(["auth/sign-up"],{queryParams:{phone:this.data.phone}}))}retrySms(){this.loading=!0,this.authService.verifyPhone({phone:this.data.phone,countryCode:this.data.countryCode}).subscribe(o=>{o.success&&(this.smsCode=o.data.code,this.loading=!1,this.isCodeExpired=!1,this.countdown=119,this.startCountdown())})}startCountdown(){this.intervalId=setInterval(()=>{this.countdown>=0?(this.formatTime(this.countdown),this.countdown--):(this.stopCountdown(),this.isCodeExpired=!0)},1e3)}stopCountdown(){clearInterval(this.intervalId)}formatTime(o){const s=Math.floor(o/60),t=o%60;this.count=`${"0"+s}:${t<10?"0":""}${t}`,this.cdr.detectChanges()}closeModal(){this.dialogRef.close()}onCodeChanged(o){this.codeEntered=6==o.length,this.verifyCode=o}onCodeCompleted(o){this.sendVerifyedCode()}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(a.WI),e.Y36(e.sBO),e.Y36(a.so),e.Y36(v.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["verification-code"]],standalone:!0,features:[e.jDz],decls:19,vars:9,consts:[["align","end"],["svgIcon","heroicons_outline:x-mark",1,"cursor-pointer",3,"click"],[1,"font-bold","text-3xl","flex","justify-center"],[1,"mat-typography","m-auto"],[1,"flex","justify-center"],[1,"text-black","flex","justify-center","mb-4"],[3,"disabled","isCodeHidden","codeLength","codeChanged","codeCompleted"],["align","center"],["mat-flat-button","",1,"fuse-mat-button-large","dark","w-full","mt-6",3,"disabled","color","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"inline-flex","items-center","justify-between","w-full","mt-4"],["disabled","loading",1,"text-md","font-medium","m-auto","cursor-pointer",3,"click"],[3,"diameter","mode"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"mat-icon",1),e.NdJ("click",function(){return t.closeModal()}),e.qZA()(),e.TgZ(2,"div",2),e._uU(3,"\u041f\u041e\u0414\u0422\u0412\u0415\u0420\u0416\u0414\u0415\u041d\u0418\u0415"),e.qZA(),e.TgZ(4,"mat-dialog-content",3)(5,"div",4),e._uU(6,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 6 \u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 "),e.qZA(),e.TgZ(7,"b",5),e._uU(8),e.qZA(),e.TgZ(9,"code-input",6),e.NdJ("codeChanged",function(m){return t.onCodeChanged(m)})("codeCompleted",function(m){return t.onCodeCompleted(m)}),e.qZA()(),e.TgZ(10,"mat-dialog-actions",7)(11,"div"),e._uU(12),e.qZA(),e.TgZ(13,"button",8),e.NdJ("click",function(){return t.sendVerifyedCode()}),e.YNc(14,E,2,0,"span",9),e.YNc(15,I,1,2,"mat-progress-spinner",10),e.qZA(),e.TgZ(16,"div",11)(17,"a",12),e.NdJ("click",function(){return t.retrySms()}),e._uU(18,"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),e.qZA()()()),2&s&&(e.xp6(8),e.hij(" ",null==t.data?null:t.data.phone,""),e.xp6(1),e.Q6J("disabled",t.loading)("isCodeHidden",!1)("codeLength",6),e.xp6(3),e.Oqu(t.count?t.count:"01:59"),e.xp6(1),e.Q6J("disabled",t.loading||!t.codeEntered)("color","primary"),e.xp6(1),e.Q6J("ngIf",!t.loading),e.xp6(1),e.Q6J("ngIf",t.loading))},dependencies:[x.oY,x.Oz,g.O5,l.Cq,l.Ou,d.ot,d.lW,h.Ps,h.Hw,u.UX,u.u5,b.Ky,C.p9,A.si,V.Tx,a.Is,a.xY,a.H8],styles:[".mat-mdc-dialog-container .mdc-dialog__surface{max-width:500px!important}\n"],encapsulation:2,changeDetection:0})}return i})();const N=["verifyPhoneNgForm"],U=["phone"];function D(i,c){1&i&&(e.TgZ(0,"span"),e._uU(1,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),e.qZA())}function Q(i,c){1&i&&e._UZ(0,"mat-progress-spinner",15),2&i&&e.Q6J("diameter",24)("mode","indeterminate")}const M=function(){return["uz"]},Y=function(){return["uz","kz","tj","kg","ru","af"]},S=function(){return["/auth/sign-in"]},j=[{path:"",component:(()=>{class i{constructor(o,s){this.formBuilder=o,this.dialog=s,this.toastr=(0,e.f3M)(y._W),this.authService=(0,e.f3M)(Z.e),this.phoneCountry=""}ngOnInit(){this.verifyPhoneForm=this.formBuilder.group({phone:["",[u.kI.required]],countryCode:["uz",[u.kI.required]]})}verifyPhone(){"INVALID"!=this.verifyPhoneForm.status||this.verifyPhoneForm.value.phone?(this.verifyPhoneForm.patchValue({countryCode:this.phone.selectedCountry.iso2}),this.verifyPhoneForm.disable(),this.authService.verifyPhone(this.verifyPhoneForm.value).subscribe(o=>{this.showVerifyCode(o.data),this.verifyPhoneForm.enable()})):this.toastr.error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430")}showVerifyCode(o){this.dialog.open(J,{autoFocus:!1,disableClose:!0,data:{countryCode:this.phone.selectedCountry.iso2,phone:this.verifyPhoneForm.value.phone,code:o.code}}).afterClosed().subscribe(t=>{this.verifyPhoneForm.enable()})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(u.qu),e.Y36(a.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["auth-verify-phone"]],viewQuery:function(s,t){if(1&s&&(e.Gf(N,5),e.Gf(U,5)),2&s){let r;e.iGM(r=e.CRH())&&(t.verifyPhoneNgForm=r.first),e.iGM(r=e.CRH())&&(t.phone=r.first)}},standalone:!0,features:[e.jDz],decls:19,vars:11,consts:[[1,"flex","justify-center","items-center","h-full","w-full"],[1,"login-contianer"],[1,"mt-10","p-8","login-card"],[1,"text-5xl","md:text-4xl","sm:text-3xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"mt-8",3,"formGroup","ngSubmit"],["verifyPhoneNgForm","ngForm"],[1,"form-width"],[1,"w-full"],["formControlName","phone","name","phone",3,"preferredCountries","onlyCountries"],["phone",""],["mat-flat-button","",1,"fuse-mat-button-large","dark","w-full","mt-6",3,"color","disabled"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"inline-flex","items-center","justify-between","w-full","mt-8"],[1,"text-md","font-medium","m-auto",3,"routerLink"],[3,"diameter","mode"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," \u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"),e.qZA(),e.TgZ(5,"form",4,5),e.NdJ("ngSubmit",function(){return t.verifyPhone()}),e.TgZ(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),e._uU(10,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),e.qZA(),e._UZ(11,"ngx-mat-intl-tel-input",8,9),e.qZA()(),e.TgZ(13,"button",10),e.YNc(14,D,2,0,"span",11),e.YNc(15,Q,1,2,"mat-progress-spinner",12),e.qZA(),e.TgZ(16,"div",13)(17,"a",14),e._uU(18,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f "),e.qZA()()()()()()),2&s&&(e.xp6(5),e.Q6J("formGroup",t.verifyPhoneForm),e.xp6(6),e.Q6J("preferredCountries",e.DdM(8,M))("onlyCountries",e.DdM(9,Y)),e.xp6(2),e.Q6J("color","primary")("disabled",t.verifyPhoneForm.disabled),e.xp6(1),e.Q6J("ngIf",!t.verifyPhoneForm.disabled),e.xp6(1),e.Q6J("ngIf",t.verifyPhoneForm.disabled),e.xp6(2),e.Q6J("routerLink",e.DdM(10,S)))},dependencies:[v.rH,g.O5,u.u5,u._Y,u.JJ,u.JL,u.UX,u.sg,u.u,f.lN,f.KE,f.hX,P.c,d.ot,d.lW,h.Ps,C.p9,l.Cq,l.Ou,F.d],styles:[".login-contianer{width:485px;flex-shrink:0}.login-contianer .login-card{background:#E8E8E8;border-radius:30px}.country-selector{opacity:1!important}ngx-mat-intl-tel-input div button{margin:4px 0}\n"],encapsulation:2,data:{animation:T.L}})}return i})()}]}}]);