!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=2)}([,,function(e,t,i){e.exports=i(3)},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"undefined"===n(Craft.SproutEmail)&&(Craft.SproutEmail={}),Craft.SproutEmail.SentEmailElementEditor=Craft.BaseElementEditor.extend({showHud:function(e,t){if(this.onEndLoading(),"success"===t){var i=$();if(e.sites){var n=$('<div class="hud-header"/>'),o=$('<div class="select"/>').appendTo(n);this.$siteSelect=$("<select/>").appendTo(o),this.$siteSpinner=$('<div class="spinner hidden"/>').appendTo(n);for(var r=0;r<e.sites.length;r++){var s=e.sites[r];$('<option value="'+s.id+'"'+(s.id===e.siteId?' selected="selected"':"")+">"+s.name+"</option>").appendTo(this.$siteSelect)}this.addListener(this.$siteSelect,"change","switchSite"),i=i.add(n)}this.$form=$("<div/>"),this.$fieldsContainer=$('<div class="fields"/>').appendTo(this.$form),this.updateForm(e),this.onCreateForm(this.$form);var d=$('<div class="hud-footer"/>').appendTo(this.$form),a=$('<div class="buttons right"/>').appendTo(d);if(this.$cancelBtn=$('<div class="btn">'+Craft.t("app","Cancel")+"</div>").appendTo(a),this.$spinner=$('<div class="spinner hidden"/>').appendTo(a),i=i.add(this.$form),this.hud)this.hud.updateBody(i),this.hud.updateSizeAndPosition();else{var u=this.settings.hudTrigger||this.$element;this.hud=new Garnish.HUD(u,i,{bodyClass:"body elementeditor",closeOtherHUDs:!1,onShow:$.proxy(this,"onShowHud"),onHide:$.proxy(this,"onHideHud"),onSubmit:$.proxy(this,"saveElement")}),this.hud.$hud.data("elementEditor",this),this.hud.on("hide",$.proxy((function(){delete this.hud}),this))}i.find(".text:first").focus(),this.addListener(this.$cancelBtn,"click",(function(){this.hud.hide()}))}}})}]);