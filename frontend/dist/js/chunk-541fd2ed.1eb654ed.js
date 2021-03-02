(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-541fd2ed"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),s=a("58df"),r=a("7e2b"),o=a("3206");e["a"]=Object(s["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"641f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SystemUserLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" USER PROFILE ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" berisi informasi profile user. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4"},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-toolbar",{attrs:{elevation:"2"}},[a("v-toolbar-title",[t._v("DATA USER")])],1),a("v-card-text",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",md:"3"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-img",{attrs:{src:t.$api.url+"/"+t.formdata.foto}})],1)],1),"mahasiswa"==t.dashboard?a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NIM / NIRM")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.nim)+" / "+t._s(t.data_mhs.nirm)+" ")])],1):t._e(),"mahasiswa"==t.dashboard?a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("PROGRAM STUDI")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.nama_prodi)+" ")])],1):t._e(),"mahasiswa"==t.dashboard?a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("KELAS")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.nama_kelas)+" ")])],1):t._e(),"mahasiswa"==t.dashboard?a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("DOSEN WALI")]),a("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.dosen_wali)+" ")])],1):t._e()],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"9"}},[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ID:")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("EMAIL:")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("USERNAME:")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.username)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ROLE:")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.default_role)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NOMOR HP:")]),a("v-card-subtitle",[t._v(" "+t._s(t.formdata.nomor_hp)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("STATUS:")]),a("v-card-subtitle",[a("v-chip",{attrs:{color:t.userstatus,label:"",outlined:""}},[t._v(" "+t._s(1==t.formdata.active?"AKTIF":"TIDAK AKTIF")+" ")])],1)],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("CREATED_AT:")]),a("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("UPDATED_AT:")]),a("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),a("v-row",["mahasiswa"==t.dashboard?a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}}):t._e(),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("GANTI PASSWORD")])]),a("v-card-text",[a("v-text-field",{attrs:{label:"PASSWORD BARU",type:"password",outlined:"",rules:t.rule_user_password},model:{value:t.formdata.password,callback:function(e){t.$set(t.formdata,"password",e)},expression:"formdata.password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)},s=[],r=(a("96cf"),a("1da1")),o=a("e0b6"),n=a("e477"),l={name:"UsersProfile",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.formdata=this.$store.getters["auth/User"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SYSTEM",disabled:!1,href:"#"},{text:"PROFILE USER",disabled:!0,href:"#"}],"mahasiswa"==this.dashboard&&this.fetchMahasiswa()},data:function(){return{dashboard:null,btnLoading:!1,datatable:[],avatar:null,data_mhs:{nim:"N.A",nirm:"N.A",nama_prodi:"N.A",nama_kelas:"N.A",dosen_wali:"N.A"},form_valid:!0,formdata:{id:0,username:"",password:"",name:"",email:"",nomor_hp:"",theme:"",foto:"",active:"",default_role:"",locked:"",created_at:"",updated_at:""},formdefault:{id:0,username:"",password:"",name:"",email:"",nomor_hp:"",theme:"",foto:"",active:"",default_role:"",locked:"",created_at:"",updated_at:""},rule_foto:[function(t){return!!t||"Mohon pilih gambar !!!"},function(t){return!t||t.size<2e6||"File foto harus kurang dari 2MB."}],rule_user_password:[function(t){return!!t||"Mohon untuk di isi password User !!!"},function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}]}},methods:{save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/users/updatepassword/"+this.$store.getters["auth/AttributeUser"]("id"),{_method:"PUT",password:this.formdata.password},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;t.$refs.frmdata.reset(),t.formdata.foto=a.foto,t.formdata=t.formdefault,t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))},previewImage:function(t){var e=this;if("undefined"===typeof t)this.avatar=null;else{var a=new FileReader;a.readAsDataURL(t),a.onload=function(t){e.photoUser=t.target.result}}},uploadFoto:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmuploadfoto.validate()){t.next=8;break}if(!this.formdata.foto){t.next=8;break}return this.btnLoading=!0,e=new FormData,e.append("foto",this.formdata.foto),t.next=7,this.$ajax.post("/setting/users/uploadfoto/"+this.$store.getters.User.id,e,{headers:{Authorization:this.$store.getters["auth/Token"],"Content-Type":"multipart/form-data"}}).then((function(t){var e=t.data;a.btnLoading=!1,a.$store.dispatch("updateFoto",e.user.foto)})).catch((function(){a.btnLoading=!1}));case 7:this.$refs.frmdata.reset();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),resetFoto:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/setting/users/resetfoto/"+this.$store.getters.User.id,{},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.btnLoading=!1,e.$store.dispatch("updateFoto",a.user.foto)})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchMahasiswa:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax.get("/akademik/kemahasiswaan/biodatamhs1/"+t.$store.getters["auth/AttributeUser"]("id"),{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;t.data_mhs=a.mahasiswa}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{photoUser:{get:function(){if(null==this.avatar){var t=this.$api.url+"/"+this.$store.getters.User.foto;return t}return this.avatar},set:function(t){this.avatar=t}},userstatus:function(){return 1==this.formdata.active?"green":"red"}},components:{SystemUserLayout:o["a"],ModuleHeader:n["a"]}},c=l,d=a("2877"),u=a("6544"),v=a.n(u),h=a("0798"),m=a("2bc5"),f=a("8336"),p=a("b0af"),_=a("99d9"),b=a("cc20"),g=a("62ad"),S=a("a523"),A=a("4bd4"),E=a("132d"),C=a("adda"),k=a("6b53"),T=a("0fd9"),y=a("2fa4"),w=a("8654"),$=a("71d9"),O=a("2a7f"),x=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=x.exports;v()(x,{VAlert:h["a"],VBreadcrumbs:m["a"],VBtn:f["a"],VCard:p["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VChip:b["a"],VCol:g["a"],VContainer:S["a"],VForm:A["a"],VIcon:E["a"],VImg:C["a"],VResponsive:k["a"],VRow:T["a"],VSpacer:y["a"],VTextField:w["a"],VToolbar:$["a"],VToolbarTitle:O["a"]})},"8adc":function(t,e,a){},cc20:function(t,e,a){"use strict";a("4de4");var i=a("3835"),s=a("5530"),r=(a("8adc"),a("58df")),o=a("0789"),n=a("9d26"),l=a("a9ad"),c=a("4e82"),d=a("7560"),u=a("f2e7"),v=a("1c87"),h=a("af2b"),m=a("d9bd");e["a"]=Object(r["a"])(l["a"],h["a"],v["a"],d["a"],Object(c["a"])("chipGroup"),Object(u["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-chip":!0},v["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(v["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(i["a"])(e,2),s=a[0],r=a[1];t.$attrs.hasOwnProperty(s)&&Object(m["a"])(s,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),i=a.tag,r=a.data;r.attrs=Object(s["a"])(Object(s["a"])({},r.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:r.attrs.tabindex}),r.directives.push({name:"show",value:this.active}),r=this.setBackgroundColor(this.color,r);var o=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(o,r),e)}})},e0b6:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),a("v-list-item",{attrs:{link:"",to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PROFIL USER ")])],1)],1),a("v-divider"),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?a("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-key")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?a("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-group")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?a("v-divider"):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PUSLAHTA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/puslahta"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PUSLAHTA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e(),"dosen"==t.dashboard?a("v-list-item",{attrs:{link:"",to:"/system-users/biodatadiridosen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e(),"mahasiswa"==t.dashboard?a("v-list-item",{attrs:{link:"",to:"/system-users/biodatadirimahasiswa"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e()],1)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),a("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-divider"),a("v-card-text",{staticClass:"py-2 white--text text-center"},[a("strong",[t._v("SIMAK (2021-2020)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),a("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],r=(a("ac1f"),a("5319"),a("5530")),o=a("2f62"),n={name:"SystemUserLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])({AUTHENTICATED:"auth/Authenticated",ACCESS_TOKEN:"auth/AccessToken",TOKEN:"auth/Token",DEFAULT_ROLE:"auth/DefaultRole",ROLE:"auth/Role",CAN_ACCESS:"auth/can",ATTRIBUTE_USER:"auth/AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=n,c=a("2877"),d=a("6544"),u=a.n(d),v=a("40dc"),h=a("5bc1"),m=a("8212"),f=a("8336"),p=a("b0af"),_=a("99d9"),b=a("ce7e"),g=a("553a"),S=a("132d"),A=a("adda"),E=a("8860"),C=a("da13"),k=a("8270"),T=a("5d23"),y=a("34c3"),w=a("f6c4"),$=a("e449"),O=a("f774"),x=a("2fa4"),R=a("afd9"),I=a("2a7f"),U=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=U.exports;u()(U,{VAppBar:v["a"],VAppBarNavIcon:h["a"],VAvatar:m["a"],VBtn:f["a"],VCard:p["a"],VCardText:_["c"],VDivider:b["a"],VFooter:g["a"],VIcon:S["a"],VImg:A["a"],VList:E["a"],VListItem:C["a"],VListItemAvatar:k["a"],VListItemContent:T["a"],VListItemIcon:y["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMain:w["a"],VMenu:$["a"],VNavigationDrawer:O["a"],VSpacer:x["a"],VSystemBar:R["a"],VToolbarTitle:I["a"]})}}]);
//# sourceMappingURL=chunk-541fd2ed.1eb654ed.js.map