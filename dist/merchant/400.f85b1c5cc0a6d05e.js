"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[400],{9400:(Z,x,c)=>{c.r(x),c.d(x,{default:()=>Fe});var d=c(1728),S=c(3314),u=c(1217),m=c(430),h=c(7406),L=c(3627),g=c(3617),v=c(2480),j=c(5707),z=c(6205),e=c(2223);let Q=(()=>{class n{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(i,a){1&i&&e._UZ(0,"router-outlet")},dependencies:[v.lC,j.y4,m.Ps,d.ot,u.si,h.Tx,g.Nh,S.vV,z.X,L.p0],styles:[".login-contianer{width:485px;flex-shrink:0}.login-contianer .login-card{background:#E8E8E8;border-radius:30px}.country-selector{opacity:1!important}ngx-mat-intl-tel-input div button{margin:4px 0}.active{background-color:#f97c00!important;box-shadow:0 0 5px #f97c00!important}.stepper-item{position:relative;width:32px;height:32px;border-radius:50%;background-color:#cdcdcd;box-shadow:0 0 5px #c0bebb}.stepper-item span{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:700}.step-arrow-active{color:#f97c00}\n"],encapsulation:2,changeDetection:0})}return n})();var f=c(4755),s=c(9401),A=c(1292),_=c(9114),y=c(9609),k=c(8467),T=c(3844),H=c(1274),B=c(8023),q=c(8930);let J=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[q.vT]})}return n})();var V=c(7579);c(1591);let C=(()=>{class n{constructor(){this.changes=new V.x,this.optionalLabel="Optional",this.completedLabel="Completed",this.editableLabel="Editable"}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const ae={provide:C,deps:[[new e.FiY,new e.tp0,C]],useFactory:function ie(n){return n||new C}};let E=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({providers:[ae,u.rD],imports:[u.BQ,f.ez,B.eL,J,m.Ps,u.si,u.BQ]})}return n})();var I=c(787),N=c(5656),P=c(8951),R=c(3648);const se=["signUpNgForm"];function ce(n,r){if(1&n&&e._UZ(0,"img",38),2&n){const t=e.oxw();e.Q6J("src",t.passportFilePath,e.LSH)}}function le(n,r){if(1&n&&e._UZ(0,"img",38),2&n){const t=e.oxw();e.Q6J("src",t.registrationCertificateFilePath,e.LSH)}}function pe(n,r){if(1&n&&e._UZ(0,"img",38),2&n){const t=e.oxw();e.Q6J("src",t.logoFilePath,e.LSH)}}function de(n,r){if(1&n&&e._UZ(0,"img",38),2&n){const t=e.oxw();e.Q6J("src",t.transportationCertificateFilePath,e.LSH)}}function ue(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1," \u041f\u0440\u043e\u0434\u0430\u043b\u0436\u0438\u0442\u044c "),e.qZA())}function me(n,r){1&n&&e._UZ(0,"mat-progress-spinner",39),2&n&&e.Q6J("diameter",24)("mode","indeterminate")}const O=function(){return["uz"]},U=function(){return["uz","kz","tj","kg","ru","af"]};let he=(()=>{class n{constructor(t,i,a,o,p){this.authService=t,this.toastr=i,this.formBuilder=a,this.router=o,this.cdr=p,this.formData=new FormData,this.logoFilePath=null,this.registrationCertificateFilePath=null,this.passportFilePath=null,this.transportationCertificateFilePath=null,this.showBankAccount2=!1,this.showTrashIcon=!1}ngOnInit(){this.data={certificate_registration:"",supervisor_passport:""},this.currentUser=(0,N.o)(localStorage.getItem("merchant")),this.authService.getMerchantById(this.currentUser.merchantId).subscribe(t=>{t.success&&(this.merchant=t.data,this.initForm(this.merchant))}),this.signUpForm=this.formBuilder.group({merchantId:[""],companyName:[""],companyType:[""],password:[""],email:[""],supervisorFirstName:["",[s.kI.required]],supervisorLastName:["",[s.kI.required]],phoneNumber:["",[s.kI.required]],responsiblePersonFistName:["",[s.kI.required]],responsiblePersonLastName:["",[s.kI.required]],responsbilePersonPhoneNumber:["",[s.kI.required]],factAddress:[""],legalAddress:["",[s.kI.required]],logoFilePath:[""],passportFilePath:[""],registrationCertificateFilePath:[""],transportationCertificateFilePath:[""]})}initForm(t){this.signUpForm.patchValue({merchantId:this.merchant.id,companyName:this.merchant.companyName,companyType:this.merchant.companyType,password:this.merchant.password,email:this.merchant.email,supervisorFirstName:t.supervisorFirstName,supervisorLastName:t.supervisorLastName,phoneNumber:t.phoneNumber,responsiblePersonFistName:t.responsiblePersonFistName,responsiblePersonLastName:t.responsiblePersonLastName,responsbilePersonPhoneNumber:t.responsbilePersonPhoneNumber,legalAddress:t.legalAddress,factAddress:t.factAddress})}signUp(){this.signUpForm.disable(),""===this.signUpForm.value.supervisorFirstName?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0418\u043c\u044f \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f")):""===this.signUpForm.value.supervisorLastName?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f")):""===this.signUpForm.value.phoneNumber?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f")):""===this.signUpForm.value.responsiblePersonFistName?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0418\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430")):""===this.signUpForm.value.responsiblePersonLastName?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430")):""===this.signUpForm.value.responsbilePersonPhoneNumber?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430")):""===this.signUpForm.value.address?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441")):(this.formData.append("merchantId",this.currentUser.merchantId),this.formData.append("supervisorFirstName",this.signUpForm.value.supervisorFirstName),this.formData.append("supervisorLastName",this.signUpForm.value.supervisorLastName),this.formData.append("responsiblePersonFistName",this.signUpForm.value.responsiblePersonFistName),this.formData.append("responsiblePersonLastName",this.signUpForm.value.responsiblePersonLastName),this.formData.append("responsbilePersonPhoneNumber",this.signUpForm.value.responsbilePersonPhoneNumber),this.formData.append("factAddress",this.signUpForm.value.factAddress),this.formData.append("legalAddress",this.signUpForm.value.legalAddress),this.authService.merchantUpdate(this.formData).subscribe(t=>{t.success&&(this.signUpForm.enable(),this.router.navigate(["register/step3"]))},t=>{this.signUpForm.enable(),this.toastr.error(t.message)}))}selectFile(t,i){const a=t.target.files[0];if(a){this.formData.append(i,a,(new Date).getTime().toString()+".jpg");const o=new FileReader;o.onload=()=>{this[i]=o.result,this.cdr.detectChanges()},o.readAsDataURL(a)}}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(P.e),e.Y36(R._W),e.Y36(s.qu),e.Y36(v.F0),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["auth-step-2"]],viewQuery:function(i,a){if(1&i&&e.Gf(se,5),2&i){let o;e.iGM(o=e.CRH())&&(a.signUpNgForm=o.first)}},standalone:!0,features:[e.jDz],decls:105,vars:36,consts:[[1,"flex","justify-center","items-center","h-full","w-full"],[1,"login-contianer"],[1,"mt-2","p-8","login-card"],[1,"flex","justify-between","items-center"],[1,"text-5xl","md:text-4xl","sm:text-3xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-center","gap-1"],[1,"stepper-item","active"],["svgIcon","heroicons_outline:arrow-long-right",1,"step-arrow-active"],["svgIcon","heroicons_outline:arrow-long-right",1,"step-arrow"],[1,"stepper-item"],[1,"mt-8","w-full",3,"formGroup"],["signInNgForm","ngForm"],[1,"flex","w-full","gap-2"],[1,"w-full"],["matInput","",3,"formControlName"],["name","phoneNumber",3,"formControlName","preferredCountries","onlyCountries"],["phone",""],["formControlName","responsbilePersonPhoneNumber","name","responsbilePersonPhoneNumber",3,"preferredCountries","onlyCountries"],["responsbilePersonPhoneNumber",""],[1,"flex","items-end","gap-8"],[1,"w-32"],[1,"font-bold"],[1,"relative","flex","items-center","justify-center","w-32","h-32","overflow-hidden"],[1,"absolute","inset-0","bg-black","bg-opacity-50","z-10","rounded-md"],[1,"absolute","inset-0","flex","items-center","justify-center","z-20"],["formControlName","passportFilePath","id","avatar-file-input1","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","avatar-file-input1","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"text-white",3,"svgIcon"],["class","object-fill w-full h-full",3,"src",4,"ngIf"],["formControlName","registrationCertificateFilePath","id","avatar-file-input4","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","avatar-file-input4","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],["formControlName","logoFilePath","id","avatar-file-input2","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","avatar-file-input2","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],["formControlName","transportationCertificateFilePath","id","avatar-file-input3","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","avatar-file-input3","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],["mat-flat-button","",1,"fuse-mat-button-large","dark","w-full","mt-10",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"object-fill","w-full","h-full",3,"src"],[3,"diameter","mode"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5," \u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f "),e.qZA(),e.TgZ(6,"div",5)(7,"div",6)(8,"span"),e._uU(9,"1"),e.qZA()(),e._UZ(10,"mat-icon",7),e.TgZ(11,"div",6)(12,"span"),e._uU(13,"2"),e.qZA()(),e._UZ(14,"mat-icon",8),e.TgZ(15,"div",9)(16,"span"),e._uU(17,"3"),e.qZA()()()(),e.TgZ(18,"form",10,11)(20,"div",12)(21,"mat-form-field",13)(22,"mat-label"),e._uU(23,"\u0418\u043c\u044f \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f"),e.qZA(),e._UZ(24,"input",14),e.qZA(),e.TgZ(25,"mat-form-field",13)(26,"mat-label"),e._uU(27,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f"),e.qZA(),e._UZ(28,"input",14),e.qZA(),e.TgZ(29,"mat-form-field",13)(30,"mat-label"),e._uU(31,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),e.qZA(),e._UZ(32,"ngx-mat-intl-tel-input",15,16),e.qZA()(),e.TgZ(34,"div",12)(35,"mat-form-field",13)(36,"mat-label"),e._uU(37,"\u0418\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430"),e.qZA(),e._UZ(38,"input",14),e.qZA(),e.TgZ(39,"mat-form-field",13)(40,"mat-label"),e._uU(41,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430"),e.qZA(),e._UZ(42,"input",14),e.qZA(),e.TgZ(43,"mat-form-field",13)(44,"mat-label"),e._uU(45,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043b\u0438\u0446\u0430"),e.qZA(),e._UZ(46,"ngx-mat-intl-tel-input",17,18),e.qZA()(),e.TgZ(48,"div",12)(49,"mat-form-field",13)(50,"mat-label"),e._uU(51,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441"),e.qZA(),e._UZ(52,"input",14),e.qZA(),e.TgZ(53,"mat-form-field",13)(54,"mat-label"),e._uU(55,"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441"),e.qZA(),e._UZ(56,"input",14),e.qZA()(),e.TgZ(57,"div",19)(58,"div",20)(59,"mat-label",21),e._uU(60,"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f"),e.qZA(),e.TgZ(61,"div",22),e._UZ(62,"div",23),e.TgZ(63,"div",24)(64,"div")(65,"input",25),e.NdJ("change",function(p){return a.selectFile(p,"passportFilePath")}),e.qZA(),e.TgZ(66,"label",26),e._UZ(67,"mat-icon",27),e.qZA()()(),e.YNc(68,ce,1,1,"img",28),e.qZA()(),e.TgZ(69,"div",20)(70,"mat-label",21),e._uU(71,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"),e.qZA(),e.TgZ(72,"div",22),e._UZ(73,"div",23),e.TgZ(74,"div",24)(75,"div")(76,"input",29),e.NdJ("change",function(p){return a.selectFile(p,"registrationCertificateFilePath")}),e.qZA(),e.TgZ(77,"label",30),e._UZ(78,"mat-icon",27),e.qZA()()(),e.YNc(79,le,1,1,"img",28),e.qZA()(),e.TgZ(80,"div",20)(81,"mat-label",21),e._uU(82,"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"),e.qZA(),e.TgZ(83,"div",22),e._UZ(84,"div",23),e.TgZ(85,"div",24)(86,"div")(87,"input",31),e.NdJ("change",function(p){return a.selectFile(p,"logoFilePath")}),e.qZA(),e.TgZ(88,"label",32),e._UZ(89,"mat-icon",27),e.qZA()()(),e.YNc(90,pe,1,1,"img",28),e.qZA()(),e.TgZ(91,"div",20)(92,"mat-label",21),e._uU(93,"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438 \u0433\u0440\u0443\u0437\u0430"),e.qZA(),e.TgZ(94,"div",22),e._UZ(95,"div",23),e.TgZ(96,"div",24)(97,"div")(98,"input",33),e.NdJ("change",function(p){return a.selectFile(p,"transportationCertificateFilePath")}),e.qZA(),e.TgZ(99,"label",34),e._UZ(100,"mat-icon",27),e.qZA()()(),e.YNc(101,de,1,1,"img",28),e.qZA()()(),e.TgZ(102,"button",35),e.NdJ("click",function(){return a.signUp()}),e.YNc(103,ue,2,0,"span",36),e.YNc(104,me,1,2,"mat-progress-spinner",37),e.qZA()()()()()),2&i&&(e.xp6(18),e.Q6J("formGroup",a.signUpForm),e.xp6(6),e.Q6J("formControlName","supervisorFirstName"),e.xp6(4),e.Q6J("formControlName","supervisorLastName"),e.xp6(4),e.Q6J("formControlName","phoneNumber")("preferredCountries",e.DdM(32,O))("onlyCountries",e.DdM(33,U)),e.xp6(6),e.Q6J("formControlName","responsiblePersonFistName"),e.xp6(4),e.Q6J("formControlName","responsiblePersonLastName"),e.xp6(4),e.Q6J("preferredCountries",e.DdM(34,O))("onlyCountries",e.DdM(35,U)),e.xp6(6),e.Q6J("formControlName","legalAddress"),e.xp6(4),e.Q6J("formControlName","factAddress"),e.xp6(9),e.Q6J("multiple",!1)("accept","image/jpeg, image/png"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:camera"),e.xp6(1),e.Q6J("ngIf",a.passportFilePath),e.xp6(8),e.Q6J("multiple",!1)("accept","image/jpeg, image/png"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:camera"),e.xp6(1),e.Q6J("ngIf",a.registrationCertificateFilePath),e.xp6(8),e.Q6J("multiple",!1)("accept","image/jpeg, image/png"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:camera"),e.xp6(1),e.Q6J("ngIf",a.logoFilePath),e.xp6(8),e.Q6J("multiple",!1)("accept","image/jpeg, image/png"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:camera"),e.xp6(1),e.Q6J("ngIf",a.transportationCertificateFilePath),e.xp6(1),e.Q6J("color","primary")("disabled",a.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!a.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",a.signUpForm.disabled))},dependencies:[E,f.ez,f.O5,A.p9,m.Ps,m.Hw,I.LD,_.KE,_.hX,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.UX,s.sg,s.u,_.lN,y.c,y.Nt,d.ot,d.lW,k.Cq,k.Ou,H.d],styles:[".login-contianer{width:1040px}\n"],encapsulation:2,data:{animation:T.L}})}return n})();var fe=c(5441);let ve=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[fe.U8,B.eL,f.ez,d.ot,u.BQ,u.BQ]})}return n})();var xe=c(3933),Se=c(2621);const ye=["signUpNgForm"];function ke(n,r){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Ce(n,r){if(1&n&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Ie(n,r){if(1&n&&(e.TgZ(0,"div",14)(1,"mat-form-field",15)(2,"mat-label"),e._uU(3,"\u0420\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"),e.qZA(),e._UZ(4,"input",31),e.TgZ(5,"mat-select",32),e.YNc(6,Ce,2,2,"mat-option",18),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(6),e.Q6J("ngForOf",t.currencies)}}function Me(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "),e.qZA())}function Ae(n,r){1&n&&e._UZ(0,"mat-progress-spinner",33),2&n&&e.Q6J("diameter",24)("mode","indeterminate")}function Te(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),e._uU(5," \u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f "),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"span"),e._uU(9,"1"),e.qZA()(),e._UZ(10,"mat-icon",8),e.TgZ(11,"div",7)(12,"span"),e._uU(13,"2"),e.qZA()(),e._UZ(14,"mat-icon",8),e.TgZ(15,"div",7)(16,"span"),e._uU(17,"3"),e.qZA()()()(),e.TgZ(18,"form",9,10)(20,"div",11)(21,"mat-form-field",12)(22,"mat-label"),e._uU(23,"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430"),e.qZA(),e._UZ(24,"input",13),e.qZA(),e.TgZ(25,"div",14)(26,"mat-form-field",15)(27,"mat-label"),e._uU(28,"\u0420\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"),e.qZA(),e._UZ(29,"input",16),e.TgZ(30,"mat-select",17),e.YNc(31,ke,2,2,"mat-option",18),e.qZA()()(),e.YNc(32,Ie,7,1,"div",19),e.TgZ(33,"button",20),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.toggleShowBankAccount2())}),e.TgZ(34,"mat-icon"),e._uU(35),e.qZA()()(),e.TgZ(36,"div",21)(37,"mat-form-field",12)(38,"mat-label"),e._uU(39,"\u0418\u041d\u041d"),e.qZA(),e._UZ(40,"input",22),e.qZA(),e.TgZ(41,"mat-form-field",12)(42,"mat-label"),e._uU(43,"\u041a\u043e\u0434 \u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u0430 \u041d\u0414\u0421"),e.qZA(),e._UZ(44,"input",23),e.qZA(),e.TgZ(45,"mat-form-field",12)(46,"mat-label"),e._uU(47,"\u041e\u041a\u042d\u0414"),e.qZA(),e._UZ(48,"input",24),e.qZA()(),e.TgZ(49,"div",21)(50,"mat-form-field",12)(51,"mat-label"),e._uU(52,"\u041c\u0424\u041e"),e.qZA(),e._UZ(53,"input",24),e.qZA(),e.TgZ(54,"mat-form-field",12)(55,"mat-label"),e._uU(56,"DUNS \u043d\u043e\u043c\u0435\u0440"),e.qZA(),e._UZ(57,"input",22),e.qZA(),e.TgZ(58,"mat-form-field",12)(59,"mat-label"),e._uU(60,"IBAN \u043d\u043e\u043c\u0435\u0440"),e.qZA(),e._UZ(61,"input",25),e.qZA()(),e.TgZ(62,"div",21)(63,"mat-form-field",12)(64,"mat-label"),e._uU(65,"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"),e.qZA(),e._UZ(66,"input",13),e.qZA()(),e.TgZ(67,"div",26)(68,"button",27),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.signUp())}),e.YNc(69,Me,2,0,"span",28),e.YNc(70,Ae,1,2,"mat-progress-spinner",29),e.qZA()()()()()()}if(2&n){const t=e.oxw();e.xp6(18),e.Q6J("formGroup",t.signUpForm),e.xp6(6),e.Q6J("formControlName","bankName"),e.xp6(7),e.Q6J("ngForOf",t.currencies),e.xp6(1),e.Q6J("ngIf",t.showBankAccount2),e.xp6(3),e.Oqu(t.showTrashIcon?"delete":"add"),e.xp6(5),e.Q6J("formControlName","inn"),e.xp6(4),e.Q6J("formControlName","taxPayerCode"),e.xp6(4),e.Q6J("formControlName","oked"),e.xp6(5),e.Q6J("formControlName","mfo"),e.xp6(4),e.Q6J("formControlName","dunsNumber"),e.xp6(4),e.Q6J("formControlName","ibanNumber"),e.xp6(5),e.Q6J("formControlName","notes"),e.xp6(2),e.Q6J("color","primary")("disabled",t.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!t.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",t.signUpForm.disabled)}}function Be(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",34)(2,"div",35)(3,"div",36)(4,"div",37),e._UZ(5,"img",38),e.qZA(),e.TgZ(6,"p",39),e._uU(7,"\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0430 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443"),e.qZA(),e.TgZ(8,"p",40),e._uU(9,"\u041e\u0442\u0432\u0435\u0442 \u043f\u0440\u0438\u0434\u0435\u0442 \u043a \u0432\u0430\u043c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"),e.qZA(),e.TgZ(10,"a",41),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.authService.signOut())}),e._uU(11," \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f "),e.qZA()()()()()}2&n&&(e.xp6(10),e.Q6J("color","primary"))}const Fe=[{path:"",component:Q,resolve:{},children:[{path:"step2",component:he},{path:"step3",component:(()=>{class n{constructor(t,i,a,o){this.authService=t,this.typesService=i,this.toastr=a,this.formBuilder=o,this.showBankAccount2=!1,this.showTrashIcon=!1,this.completed=!1}ngOnInit(){this.currentUser=(0,N.o)(localStorage.getItem("merchant")),this.authService.getMerchantById(this.currentUser.merchantId).subscribe(t=>{t.success&&(this.merchant=t.data,this.merchant.completed&&!this.merchant.verified&&!this.merchant.rejected&&(this.completed=!0))}),this.signUpForm=this.formBuilder.group({companyName:[null],companyType:[null],password:[null],email:[null],phoneNumber:[null],merchantId:[null],responsiblePersonLastName:[null],responsiblePersonFistName:[null],registrationCertificateFilePath:[null],passportFilePath:[null],logoFilePath:[null],responsbilePersonPhoneNumber:[null],supervisorFirstName:[null],supervisorLastName:[null],legalAddress:[null],factAddress:[null],bankAccounts:[null],currency:[null,[s.kI.required]],bankAccount:[null,[s.kI.required,s.kI.maxLength(20),s.kI.minLength(20),s.kI.pattern("^[0-9]*$")]],currency2:[null],bankAccount2:[null,[s.kI.minLength(20),s.kI.maxLength(20),s.kI.pattern("^[0-9]*$")]],bankName:[null,[s.kI.required]],inn:[null,[s.kI.required]],taxPayerCode:[null,[s.kI.minLength(12),s.kI.maxLength(12),s.kI.required]],oked:[null,[s.kI.required]],mfo:[null,[s.kI.required,s.kI.required,s.kI.maxLength(5),s.kI.minLength(5),s.kI.pattern("^[0-9]*$")]],dunsNumber:[null],ibanNumber:[null],notes:[null]}),this.typesService.getCurrencies().subscribe(t=>{t.success&&(this.currencies=t.data,this.signUpForm.patchValue({currency:this.currencies[0].id,currency2:this.currencies[0].id}))})}signUp(){this.signUpForm.disable(),""===this.signUpForm.value.bankName?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430")):""===this.signUpForm.value.bankAccount?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0420\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442")):""===this.signUpForm.value.inn?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0418\u041d\u041d")):""===this.signUpForm.value.taxPayerCode?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u041a\u043e\u0434 \u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u0430 \u041d\u0414\u0421")):""===this.signUpForm.value.oked?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u041a\u043e\u0434 \u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u0430 \u041e\u041a\u042d\u0414")):""===this.signUpForm.value.mfo?(this.signUpForm.enable(),this.toastr.error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u041a\u043e\u0434 \u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u0430 \u041c\u0424\u041e")):(this.signUpForm.patchValue(""==this.signUpForm.value.bankAccount2?{responsiblePersonLastName:this.merchant.responsiblePersonLastName,responsiblePersonFistName:this.merchant.responsiblePersonFistName,registrationCertificateFilePath:this.merchant.registrationCertificateFilePath,passportFilePath:this.merchant.passportFilePath,logoFilePath:this.merchant.logoFilePath,responsbilePersonPhoneNumber:this.merchant.responsbilePersonPhoneNumber,supervisorFirstName:this.merchant.supervisorFirstName,supervisorLastName:this.merchant.supervisorLastName,legalAddress:this.merchant.legalAddress,factAddress:this.merchant.factAddress,merchantId:+this.merchant.id,companyName:this.merchant.companyName,companyType:this.merchant.companyType,password:this.merchant.password,phoneNumber:this.merchant.phoneNumber,email:this.merchant.email,bankAccounts:[{account:+this.signUpForm.value.bankAccount,currencyId:this.signUpForm.value.currency},{account:+this.signUpForm.value.bankAccount2,currencyId:this.signUpForm.value.currency2}]}:{responsiblePersonLastName:this.merchant.responsiblePersonLastName,responsiblePersonFistName:this.merchant.responsiblePersonFistName,registrationCertificateFilePath:this.merchant.registrationCertificateFilePath,passportFilePath:this.merchant.passportFilePath,logoFilePath:this.merchant.logoFilePath,responsbilePersonPhoneNumber:this.merchant.responsbilePersonPhoneNumber,supervisorFirstName:this.merchant.supervisorFirstName,supervisorLastName:this.merchant.supervisorLastName,legalAddress:this.merchant.legalAddress,factAddress:this.merchant.factAddress,merchantId:+this.merchant.id,companyName:this.merchant.companyName,companyType:this.merchant.companyType,password:this.merchant.password,phoneNumber:this.merchant.phoneNumber,email:this.merchant.email,bankAccounts:[{account:+this.signUpForm.value.bankAccount,currencyId:this.signUpForm.value.currency}]}),this.signUpForm.enable(),this.authService.merchantComplete(this.signUpForm.value).subscribe(t=>{t.success&&(this.completed=!0,this.signUpForm.enable())},t=>{this.signUpForm.enable(),this.toastr.error(t.error.message)}))}toggleShowBankAccount2(){this.showBankAccount2=!this.showBankAccount2,this.showTrashIcon=!this.showTrashIcon}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(P.e),e.Y36(Se.K),e.Y36(R._W),e.Y36(s.qu))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["auth-step-3"]],viewQuery:function(i,a){if(1&i&&e.Gf(ye,5),2&i){let o;e.iGM(o=e.CRH())&&(a.signUpNgForm=o.first)}},standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[["class","flex justify-center items-center h-full w-full",4,"ngIf"],[1,"flex","justify-center","items-center","h-full","w-full"],[1,"login-contianer"],[1,"mt-2","p-8","login-card"],[1,"flex","justify-between","items-center"],[1,"text-5xl","md:text-4xl","sm:text-3xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-center","gap-1"],[1,"stepper-item","active"],["svgIcon","heroicons_outline:arrow-long-right",1,"step-arrow-active"],[1,"mt-8","w-full",3,"formGroup"],["signInNgForm","ngForm"],[1,"flex","items-center","w-full","gap-2"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","w-full"],[1,"flex-auto"],["matInput","","formControlName","bankAccount","type","text","mask","99999999999999999999"],["formControlName","currency","matPrefix",""],[3,"value",4,"ngFor","ngForOf"],["class","flex w-full",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","dark",3,"click"],[1,"flex","w-full","gap-2"],["matInput","","type","text","mask","999999999",3,"formControlName"],["matInput","","type","text","mask","999999999999",3,"formControlName"],["matInput","","type","text","mask","99999",3,"formControlName"],["matInput","","type","text","mask","999999999999999999",3,"formControlName"],[1,"flex","gap-4","mt-6"],["mat-flat-button","",1,"fuse-mat-button-large","dark","w-full",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[3,"value"],["matInput","","formControlName","bankAccount2","type","text","mask","99999999999999999999"],["formControlName","currency2","matPrefix",""],[3,"diameter","mode"],[1,"form-done","rounded-lg"],[1,"login-card"],[2,"text-align","center"],[1,"flex","items-center","justify-center","mt-10","mb-5"],["src","../../../../../assets/icons/success.svg","alt","Success Icon",2,"width","90px !important","height","90px !important"],[1,"font-bold","text-3xl","mt-5","mb-5","w-80","m-auto"],[1,"text-stone-400","mb-5"],["mat-flat-button","",1,"fuse-mat-button-large","dark","me-auto","mt-6","mb-6",3,"color","click"]],template:function(i,a){1&i&&(e.YNc(0,Te,71,16,"div",0),e.YNc(1,Be,12,1,"div",0)),2&i&&(e.Q6J("ngIf",!a.completed),e.xp6(1),e.Q6J("ngIf",a.completed))},dependencies:[ve,xe.Z6,E,f.ez,f.sg,f.O5,A.p9,m.Ps,m.Hw,I.LD,_.KE,_.hX,_.qo,I.gD,u.ey,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.UX,s.sg,s.u,_.lN,y.c,y.Nt,d.ot,d.zs,d.lW,k.Cq,k.Ou],styles:[".form-done{width:500px;background-color:#e8e8e8}.form_done_icon{font-size:90px;height:90px!important;width:90px!important}.login-contianer{width:1040px}\n"],encapsulation:2,data:{animation:T.L}})}return n})()}]}]},2621:(Z,x,c)=>{c.d(x,{K:()=>m});var d=c(2340),S=c(2223),u=c(3144);let m=(()=>{class h{constructor(g){this.http=g}getCities(g,v){return this.http.get(d.O.apiReferences+"/references/cities?city="+g+"&lang="+v)}getTransportTypes(){return this.http.get(d.O.apiReferences+"/references/transport-types/all")}getTransportKinds(){return this.http.get(d.O.apiReferences+"/references/transport-kinds/all")}getCargoTypes(){return this.http.get(d.O.apiReferences+"/references/cargo-type-groups/all")}getCurrencies(){return this.http.get(d.O.apiReferences+"/references/currencies/all")}getPackages(){return this.http.get(d.O.apiReferences+"/references/cargo-packages/all")}getCargoLoadingMethod(){return this.http.get(d.O.apiReferences+"/references/cargo-loading-method/all")}getStatuses(){return this.http.get(d.O.apiReferences+"/references/cargo-statuses/all")}static#e=this.\u0275fac=function(v){return new(v||h)(S.LFG(u.eN))};static#t=this.\u0275prov=S.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);