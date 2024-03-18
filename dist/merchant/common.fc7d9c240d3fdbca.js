"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[592],{1709:(v,f,c)=>{c.d(f,{Oz:()=>y,oY:()=>b});var C=c(5861),s=c(2223),p=c(4755);const m=["input"];function _(a,F){if(1&a){const t=s.EpF();s.TgZ(0,"span")(1,"input",1,2),s.NdJ("click",function(i){s.CHM(t);const n=s.oxw();return s.KtG(n.onClick(i))})("paste",function(i){const o=s.CHM(t).index,r=s.oxw();return s.KtG(r.onPaste(i,o))})("input",function(i){const o=s.CHM(t).index,r=s.oxw();return s.KtG(r.onInput(i,o))})("keydown",function(i){const o=s.CHM(t).index,r=s.oxw();return s.KtG(r.onKeydown(i,o))}),s.qZA()()}if(2&a){const t=s.oxw();s.ekj("code-hidden",t.isCodeHidden),s.xp6(1),s.Q6J("type",t.inputType)("disabled",t.disabled),s.uIk("inputmode",t.inputMode)("autocapitalize",t.autocapitalize)}}const h=new s.OlP("CodeInputComponentConfig"),g={codeLength:4,inputType:"tel",inputMode:"numeric",initialFocusField:void 0,isCharsCode:!1,isCodeHidden:!1,isPrevFocusableAfterClearing:!0,isFocusingOnLastByClickIfFilled:!1,code:void 0,disabled:!1,autocapitalize:void 0};var d=(()=>((d=d||{})[d.ready=0]="ready",d[d.reset=1]="reset",d))();let y=(()=>{class a{constructor(t){if(this.isNonDigitsCode=!1,this.codeChanged=new s.vpe,this.codeCompleted=new s.vpe,this.placeholders=[],this.inputs=[],this.inputsStates=[],this.state={isFocusingAfterAppearingCompleted:!1,isInitialFocusFieldEnabled:!1},Object.assign(this,g),t)for(const e in t)t.hasOwnProperty(e)&&g.hasOwnProperty(e)&&(this[e]=t[e])}ngOnInit(){this.state.isInitialFocusFieldEnabled=!this.isEmpty(this.initialFocusField),this.onCodeLengthChanges()}ngAfterViewInit(){this.inputsListSubscription=this.inputsList.changes.subscribe(this.onInputsListChanges.bind(this)),this.onInputsListChanges(this.inputsList)}ngAfterViewChecked(){this.focusOnInputAfterAppearing()}ngOnChanges(t){t.code&&this.onInputCodeChanges(),t.codeLength&&this.onCodeLengthChanges()}ngOnDestroy(){this.inputsListSubscription&&this.inputsListSubscription.unsubscribe()}reset(t=!1){this.onInputCodeChanges(),this.state.isInitialFocusFieldEnabled&&this.focusOnField(this.initialFocusField),t&&this.emitChanges()}focusOnField(t){if(t>=this._codeLength)throw new Error("The index of the focusing input box should be less than the codeLength.");this.inputs[t].focus()}onClick(t){if(!this.isFocusingOnLastByClickIfFilled)return;const i=this.inputs[this._codeLength-1];t.target===i||!(this.getCurrentFilledCode().length>=this._codeLength)||setTimeout(()=>i.focus())}onInput(t,e){const i=t.target,n=t.data||i.value;if(this.isEmpty(n))return;if(!this.canInputValue(n))return t.preventDefault(),t.stopPropagation(),this.setInputValue(i,null),void this.setStateForInput(i,d.reset);const o=n.toString().trim().split("");for(let u=0;u<o.length;u++){const l=u+e;if(l>this._codeLength-1)break;this.setInputValue(this.inputs[l],o[u])}this.emitChanges();const r=e+o.length;r>this._codeLength-1?i.blur():this.inputs[r].focus()}onPaste(t,e){t.preventDefault(),t.stopPropagation();const i=t.clipboardData?t.clipboardData.getData("text").trim():void 0;if(this.isEmpty(i))return;const n=i.split("");let o=0;for(let r=e;r<this.inputs.length&&o!==n.length;r++){const u=this.inputs[r],l=n[o];if(!this.canInputValue(l))return this.setInputValue(u,null),void this.setStateForInput(u,d.reset);this.setInputValue(u,l.toString()),o++}this.inputs[e].blur(),this.emitChanges()}onKeydown(t,e){var i=this;return(0,C.Z)(function*(){const n=t.target,o=i.isEmpty(n.value),r=e-1,u=yield i.isBackspaceKey(t),l=i.isDeleteKey(t);!u&&!l||(t.preventDefault(),i.setInputValue(n,null),o||i.emitChanges(),!(r<0||l)&&(o||i.isPrevFocusableAfterClearing)&&i.inputs[r].focus())})()}onInputCodeChanges(){if(!this.inputs.length)return;if(this.isEmpty(this.code))return void this.inputs.forEach(i=>{this.setInputValue(i,null)});const t=this.code.toString().trim().split("");let e=!0;for(const i of t)if(!this.canInputValue(i)){e=!1;break}this.inputs.forEach((i,n)=>{this.setInputValue(i,e?t[n]:null)})}onCodeLengthChanges(){if(this.codeLength)if(this._codeLength=this.codeLength,this._codeLength>this.placeholders.length){const t=Array(this._codeLength-this.placeholders.length).fill(1);this.placeholders.splice(this.placeholders.length-1,0,...t)}else this._codeLength<this.placeholders.length&&this.placeholders.splice(this._codeLength)}onInputsListChanges(t){if(t.length>this.inputs.length){const e=t.filter((n,o)=>o>this.inputs.length-1);this.inputs.splice(this.inputs.length,0,...e.map(n=>n.nativeElement));const i=Array(e.length).fill(d.ready);this.inputsStates.splice(this.inputsStates.length,0,...i)}else t.length<this.inputs.length&&(this.inputs.splice(t.length),this.inputsStates.splice(t.length));this.onInputCodeChanges()}focusOnInputAfterAppearing(){this.state.isInitialFocusFieldEnabled&&(this.state.isFocusingAfterAppearingCompleted||(this.focusOnField(this.initialFocusField),this.state.isFocusingAfterAppearingCompleted=document.activeElement===this.inputs[this.initialFocusField]))}emitChanges(){setTimeout(()=>this.emitCode(),50)}emitCode(){const t=this.getCurrentFilledCode();this.codeChanged.emit(t),t.length>=this._codeLength&&this.codeCompleted.emit(t)}getCurrentFilledCode(){let t="";for(const e of this.inputs)this.isEmpty(e.value)||(t+=e.value);return t}isBackspaceKey(t){return t.key&&"backspace"===t.key.toLowerCase()||t.keyCode&&8===t.keyCode?Promise.resolve(!0):t.keyCode&&229===t.keyCode?new Promise(i=>{setTimeout(()=>{const n=t.target,o=this.getStateForInput(n)===d.reset;o&&this.setStateForInput(n,d.ready),i(0===n.selectionStart&&!o)})}):Promise.resolve(!1)}isDeleteKey(t){return t.key&&"delete"===t.key.toLowerCase()||t.keyCode&&46===t.keyCode}setInputValue(t,e){const n="has-value",o="empty";this.isEmpty(e)?(t.value="",t.classList.remove(n),t.parentElement.classList.add(o)):(t.value=e,t.classList.add(n),t.parentElement.classList.remove(o))}canInputValue(t){return!this.isEmpty(t)&&(/^[0-9]+$/.test(t.toString())||this.isCharsCode||this.isNonDigitsCode)}setStateForInput(t,e){const i=this.inputs.indexOf(t);i<0||(this.inputsStates[i]=e)}getStateForInput(t){const e=this.inputs.indexOf(t);return this.inputsStates[e]}isEmpty(t){return null==t||!t.toString().length}static#t=this.\u0275fac=function(e){return new(e||a)(s.Y36(h,8))};static#e=this.\u0275cmp=s.Xpm({type:a,selectors:[["code-input"]],viewQuery:function(e,i){if(1&e&&s.Gf(m,5),2&e){let n;s.iGM(n=s.CRH())&&(i.inputsList=n)}},inputs:{codeLength:"codeLength",inputType:"inputType",inputMode:"inputMode",initialFocusField:"initialFocusField",isNonDigitsCode:"isNonDigitsCode",isCharsCode:"isCharsCode",isCodeHidden:"isCodeHidden",isPrevFocusableAfterClearing:"isPrevFocusableAfterClearing",isFocusingOnLastByClickIfFilled:"isFocusingOnLastByClickIfFilled",code:"code",disabled:"disabled",autocapitalize:"autocapitalize"},outputs:{codeChanged:"codeChanged",codeCompleted:"codeCompleted"},features:[s.TTD],decls:1,vars:1,consts:[[3,"code-hidden",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"type","disabled","click","paste","input","keydown"],["input",""]],template:function(e,i){1&e&&s.YNc(0,_,3,6,"span",0),2&e&&s.Q6J("ngForOf",i.placeholders)},dependencies:[p.sg],styles:["[_nghost-%COMP%]{--text-security-type: disc;--item-spacing: 4px;--item-height: 4.375em;--item-border: 1px solid #dddddd;--item-border-bottom: 1px solid #dddddd;--item-border-has-value: 1px solid #dddddd;--item-border-bottom-has-value: 1px solid #dddddd;--item-border-focused: 1px solid #dddddd;--item-border-bottom-focused: 1px solid #dddddd;--item-shadow-focused: 0px 1px 5px rgba(221, 221, 221, 1);--item-border-radius: 5px;--item-background: transparent;--item-font-weight: 300;--color: #171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:block;flex:1;padding-right:var(--item-spacing)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-left:var(--item-spacing)}[_nghost-%COMP%]   span.code-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;font-weight:var(--item-font-weight);border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translate3d(0,0,0);outline:none}[_nghost-%COMP%]   input.has-value[_ngcontent-%COMP%]{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}"]})}return a})(),b=(()=>{class a{static forRoot(t){return{ngModule:a,providers:[{provide:h,useValue:t}]}}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=s.oAB({type:a});static#i=this.\u0275inj=s.cJS({imports:[p.ez]})}return a})()}}]);