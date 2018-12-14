/*! 
Plugin Name : Boom Table
Plugin ID : yesoreyeram-boomtable-panel
Plugin URL : https://github.com/yesoreyeram/yesoreyeram-boomtable-panel
Plugin Author : Sriramajeyam Sugumaran https://www.google.com/search?q=Sriramajeyam+Sugumaran
Plugin Version : v0.6.0
Built on : 2018-12-14 16:03
*/
System.register(["lodash","app/core/utils/kbn","app/plugins/sdk","./app/config","./app/app"],function(exports_1,context_1){"use strict";var lodash_1,kbn_1,sdk_1,config_1,app_1,GrafanaBoomTableCtrl,__extends=this&&this.__extends||function(){var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();context_1&&context_1.id;return{setters:[function(lodash_1_1){lodash_1=lodash_1_1},function(kbn_1_1){kbn_1=kbn_1_1},function(sdk_1_1){sdk_1=sdk_1_1},function(config_1_1){config_1=config_1_1},function(app_1_1){app_1=app_1_1}],execute:function(){sdk_1.loadPluginCss({dark:"plugins/"+config_1.plugin_id+"/css/default.dark.css",light:"plugins/"+config_1.plugin_id+"/css/default.light.css"}),GrafanaBoomTableCtrl=function(_super){function GrafanaBoomTableCtrl($scope,$injector,$sce){var _this=_super.call(this,$scope,$injector)||this;return _this.unitFormats=kbn_1["default"].getUnitFormats(),_this.valueNameOptions=config_1.config.valueNameOptions,_this.optionOverrides=config_1.config.optionOverrides,lodash_1["default"].defaults(_this.panel,config_1.config.panelDefaults),_this.events.on("data-received",_this.onDataReceived.bind(_this)),_this.events.on("data-snapshot-load",_this.onDataReceived.bind(_this)),_this.events.on("init-edit-mode",_this.onInitEditMode.bind(_this)),_this.panel.activePatternIndex===-1&&(_this.panel.activePatternIndex=_this.panel.patterns.length),_this.$sce=$sce,_this}return __extends(GrafanaBoomTableCtrl,_super),GrafanaBoomTableCtrl.prototype.onInitEditMode=function(){this.addEditorTab("Patterns","public/plugins/"+config_1.plugin_id+"/partials/patterns.html",2),this.addEditorTab("Options","public/plugins/"+config_1.plugin_id+"/partials/options.html",3)},GrafanaBoomTableCtrl.prototype.onDataReceived=function(data){this.dataReceived=data,this.render()},GrafanaBoomTableCtrl.prototype.link=function(scope,elem,attrs,ctrl){scope&&(scope=scope),attrs&&(attrs=attrs),this.ctrl=ctrl,this.elem=elem},GrafanaBoomTableCtrl.prototype.addPattern=function(){var newPattern={name:"New Pattern",pattern:"^server.*cpu$",disabled:!1,delimiter:".",valueName:"avg",row_name:this.panel.row_col_wrapper+"0"+this.panel.row_col_wrapper,col_name:this.panel.row_col_wrapper+"1"+this.panel.row_col_wrapper,thresholds:"70,90",time_based_thresholds:[],enable_time_based_thresholds:!1,enable_bgColor:!1,bgColors:"green|orange|red",enable_bgColor_overrides:!1,bgColors_overrides:"0->green|2->red|1->yellow",enable_TextColors:!1,textColors:"green|orange|red",enable_TextColor_overrides:!1,textColors_overrides:"0->green|2->red|1->yellow",enable_transform:!1,transform_values:"_value_|_value_|_value_",enable_transform_overrides:!1,transform_values_overrides:"0->down|1->up",decimals:2,tooltipTemplate:"Series : _series_ | Value : _value_",format:"none",null_color:"darkred",null_text_color:"white",null_value:"No data",enable_clickable_cells:!1,clickable_cells_link:"",filter:{value_below:"",value_above:""}};this.panel.patterns.push(newPattern),this.panel.activePatternIndex=this.panel.patterns.length-1,this.render()},GrafanaBoomTableCtrl.prototype.movePattern=function(direction,index){var tempElement=this.panel.patterns[index];"UP"===direction&&(this.panel.patterns[index]=this.panel.patterns[index-1],this.panel.patterns[index-1]=tempElement,this.panel.activePatternIndex=index-1),"DOWN"===direction&&(this.panel.patterns[index]=this.panel.patterns[index+1],this.panel.patterns[index+1]=tempElement,this.panel.activePatternIndex=index+1),this.render()},GrafanaBoomTableCtrl.prototype.removePattern=function(index){this.panel.patterns.splice(index,1),this.panel.activePatternIndex=this.panel.patterns&&this.panel.patterns.length>0?this.panel.patterns.length-1:-1,this.render()},GrafanaBoomTableCtrl.prototype.clonePattern=function(index){var copiedPattern=Object.assign({},this.panel.patterns[index]);this.panel.patterns.push(copiedPattern),this.render()},GrafanaBoomTableCtrl.prototype.add_time_based_thresholds=function(index){var new_time_based_threshold={name:"Early morning of everyday",from:"0000",to:"0530",enabledDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat",threshold:"70,90"};index===this.panel.patterns.length||index===-1?(this.panel.defaultPattern.time_based_thresholds=this.panel.defaultPattern.time_based_thresholds||[],this.panel.defaultPattern.time_based_thresholds.push(new_time_based_threshold)):(this.panel.patterns[index].time_based_thresholds=this.panel.patterns[index].time_based_thresholds||[],this.panel.patterns[index].time_based_thresholds.push(new_time_based_threshold)),this.render()},GrafanaBoomTableCtrl.prototype.remove_time_based_thresholds=function(patternIndex,index){patternIndex===this.panel.patterns.length||patternIndex===-1?this.panel.defaultPattern.time_based_thresholds.splice(index,1):this.panel.patterns[patternIndex].time_based_thresholds.splice(index,1),this.render()},GrafanaBoomTableCtrl.prototype.inverseBGColors=function(index){index===this.panel.patterns.length||index===-1?this.panel.defaultPattern.bgColors=this.panel.defaultPattern.bgColors.split("|").reverse().join("|"):this.panel.patterns[index].bgColors=this.panel.patterns[index].bgColors.split("|").reverse().join("|"),this.render()},GrafanaBoomTableCtrl.prototype.inverseTextColors=function(index){index===this.panel.patterns.length||index===-1?this.panel.defaultPattern.textColors=this.panel.defaultPattern.textColors.split("|").reverse().join("|"):this.panel.patterns[index].textColors=this.panel.patterns[index].textColors.split("|").reverse().join("|"),this.render()},GrafanaBoomTableCtrl.prototype.inverseTransformValues=function(index){index===this.panel.patterns.length||index===-1?this.panel.defaultPattern.transform_values=this.panel.defaultPattern.transform_values.split("|").reverse().join("|"):this.panel.patterns[index].transform_values=this.panel.patterns[index].transform_values.split("|").reverse().join("|"),this.render()},GrafanaBoomTableCtrl.prototype.setUnitFormat=function(subItem,index){index===this.panel.patterns.length||index===this.panel.patterns.length?this.panel.defaultPattern.format=subItem.value:this.panel.patterns[index].format=subItem.value,this.render()},GrafanaBoomTableCtrl.prototype.limitText=function(text,maxlength){return text.split("").length>maxlength&&(text=text.substring(0,maxlength-3)+"..."),text},GrafanaBoomTableCtrl.prototype.setOptionOverride=function(propertyName,value,text){var newOverrides=[];0===lodash_1["default"].filter(this.panel.currentOptionOverrides,function(o){return o.propertyName===propertyName}).length&&newOverrides.push({propertyName:propertyName,value:value,text:text}),this.panel.currentOptionOverrides.length>0&&lodash_1["default"].each(this.panel.currentOptionOverrides,function(o){o.propertyName===propertyName?newOverrides.push({propertyName:propertyName,value:value,text:text}):newOverrides.push(o)}),this.panel.currentOptionOverrides=newOverrides,this.render()},GrafanaBoomTableCtrl.prototype.removeOptionOverride=function(option){var newOverrides=[];this.panel.currentOptionOverrides.length>0&&lodash_1["default"].each(this.panel.currentOptionOverrides,function(o){o.propertyName!==option&&newOverrides.push(o)}),this.panel.currentOptionOverrides=newOverrides,this.render()},GrafanaBoomTableCtrl.prototype.adjustPanelHeight=function(panelHeight){var rootElem=this.elem.find(".table-panel-scroll"),maxheightofpanel=this.panel.debug_mode?panelHeight-71:panelHeight-31;rootElem.css({"max-height":maxheightofpanel+"px"})},GrafanaBoomTableCtrl.templateUrl="partials/module.html",GrafanaBoomTableCtrl}(sdk_1.MetricsPanelCtrl),exports_1("PanelCtrl",GrafanaBoomTableCtrl),GrafanaBoomTableCtrl.prototype.render=function(){var panelOptions={row_col_wrapper:this.panel.row_col_wrapper,no_match_text:this.panel.no_match_text},rendering_options={default_title_for_rows:this.panel.default_title_for_rows,show_footers:"true"===app_1.getOptionOverride(this.panel.currentOptionOverrides,"SHOW_FOOTERS"),hide_headers:"true"===app_1.getOptionOverride(this.panel.currentOptionOverrides,"HIDE_HEADERS"),hide_first_column:"true"===app_1.getOptionOverride(this.panel.currentOptionOverrides,"HIDE_FIRST_COLUMN"),text_align_table_header:app_1.getOptionOverride(this.panel.currentOptionOverrides,"TEXT_ALIGN_TABLE_HEADER"),text_align_first_column:app_1.getOptionOverride(this.panel.currentOptionOverrides,"TEXT_ALIGN_FIRST_COLUMN"),text_align_table_cells:app_1.getOptionOverride(this.panel.currentOptionOverrides,"TEXT_ALIGN_TABLE_CELLS")},output=app_1.computeRenderingData(this.dataReceived,this.panel.patterns,this.panel.defaultPattern||config_1.config.panelDefaults.defaultPattern,panelOptions,rendering_options,this.panel.debug_mode);output.error?this.panel.error=output.error:(this.elem.find("#boomtable_output_body_headers").html(output.output_html.header),this.elem.find("#boomtable_output_body").html(output.output_html.body),this.elem.find("#boomtable_output_body_footers").html(output.output_html.footer),this.elem.find("[data-toggle='tooltip']").tooltip({boundary:"scrollParent"}),this.panel.debug_mode===!0&&this.elem.find("#boomtable_debug_table_holder").html(output.output_html.debug)),this.adjustPanelHeight(this.ctrl.height)}}}});