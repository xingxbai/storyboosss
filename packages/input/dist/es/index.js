function e(e,t,n,o,r,i,s,a,d,p){"boolean"!=typeof s&&(d=a,a=s,s=!1);const u="function"==typeof n?n.options:n;let c;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),o&&(u._scopeId=o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):t&&(c=s?function(e){t.call(this,p(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(u.functional){const e=u.render;u.render=function(t,n){return c.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,c):[c]}return n}const t=e({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",e._b({attrs:{type:e.type},domProps:{value:e.value},on:{input:e.handleInput}},"input",e.$attrs,!1))])},staticRenderFns:[]},undefined,{inheritAttrs:!1,name:"xxbInput",props:{type:{type:String,default:"text"},value:String},methods:{handleInput(e){this.$emit("input",e.target.value);const t=(e=>{for(;e&&"xxbFormItem"!==e.$options.name;)e=e.$parent;return e})(this.$parent);t&&t.$emit("validate")}}},undefined,false,undefined,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)};export default t;
