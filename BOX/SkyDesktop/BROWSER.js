SkyDesktop.Noti=METHOD({run:t=>{let e=UUI.PANEL({style:{position:"fixed",right:10,bottom:10,backgroundColor:"#333",borderRadius:5},contentStyle:{padding:"5px 10px"},c:t}).appendTo(BODY);UANI.SHOW_SLIDE_UP({node:e}),DELAY(2,()=>{UANI.HIDE_SLIDE_DOWN({node:e},e.remove)})}}),SkyDesktop.File=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{padding:"5px 8px",cursor:"default"},icon:IMG({src:SkyDesktop.R("file.png")}),spacing:5,on:{mouseover:(t,e)=>{e.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})},mouseout:(t,e)=>{e.addStyle({backgroundColor:"transparent"})}}}}}),SkyDesktop.FileTree=CLASS({preset:()=>{return UUI.LIST}}),SkyDesktop.Folder=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{padding:"5px 8px",cursor:"default"},listStyle:{marginLeft:10},icon:IMG({src:SkyDesktop.R("folder.png")}),spacing:5,on:{mouseover:(t,e)=>{e.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})},mouseout:(t,e)=>{e.addStyle({backgroundColor:"transparent"})}}}},init:(t,e,o)=>{let n,i;void 0!==o&&(n=o.listStyle,i=o.isOpened);let r=UUI.LIST({style:n});e.after(r);let d=e.open=(()=>{r.show()}),u=e.close=(()=>{r.hide()});i!==!0&&u(),e.on("tap",()=>{r.checkIsShowing()===!0?u():d()});let c=e.addItem=(t=>{r.addItem(t)});void 0!==o&&void 0!==o.items&&EACH(o.items,(t,e)=>{c({key:e,item:t})});e.removeItem=(t=>{r.removeItem(t)}),e.removeAllItems=(()=>{r.removeAllItems()})}}),SkyDesktop.HorizontalTabList=CLASS({preset:()=>{return DIV},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#333":"#ccc"}}},init:(t,e,o)=>{let n=[],i=CLEAR_BOTH(),r=()=>{let t=0,o=0;EACH(n,e=>{void 0===e.getSize()?o+=1:t+=e.getSize(),e.addStyle({width:0})});let i=t/(n.length-o);t+=i*o,EACH(n,o=>{void 0===o.getSize()&&o.setSize(i),o.addStyle({width:(e.getWidth()-10*(n.length-1))*o.getSize()/t})})},d=e.addTab=(t=>{if(n.length>0){let o,i,r=n[n.length-1];e.append(DIV({style:{flt:"left",width:8,height:"100%",cursor:"e-resize"},on:{touchstart:e=>{let n=e.getLeft(),d=r.getWidth(),u=t.getWidth();BODY.addStyle({cursor:"e-resize"}),void 0!==o&&o.remove(),o=EVENT("touchmove",e=>{let o=e.getLeft()-n;d+o<100&&(o=100-d),u-o<100&&(o=u-100),r.addStyle({width:d+o}),t.addStyle({width:u-o})}),void 0!==i&&i.remove(),i=EVENT("touchend",()=>{BODY.addStyle({cursor:"auto"}),r.setSize(r.getSize()*r.getWidth()/d),t.setSize(t.getSize()*t.getWidth()/u),o.remove(),o=void 0,i.remove(),i=void 0}),e.stop()}}}))}t.addStyle({flt:"left"}),e.append(t),e.append(i),n.push(t),r()});void 0!==o&&void 0!==o.tabs&&EACH(o.tabs,d),e.on("show",r);let u=EVENT("resize",r);e.on("remove",()=>{u.remove(),u=void 0})}}),SkyDesktop.Tab=CLASS({preset:()=>{return DIV},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#000":"#fff",color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#fff":"#000"}}},init:(t,e,o)=>{let n,i,r;void 0!==o&&(n=o.icon,i=o.title,r=o.size);e.setIcon=(t=>{n=t,e.fireEvent("iconchange")}),e.getIcon=(()=>{return n}),e.setTitle=(t=>{i=t,e.fireEvent("titlechange")}),e.getTitle=(()=>{return i}),e.setSize=(t=>{r=t}),e.getSize=(()=>{return r})}}),SkyDesktop.TabGroup=CLASS({preset:()=>{return TABLE},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#333":"#ccc"}}},init:(t,e,o)=>{let n,i,r=[],d=[],u=CLEAR_BOTH();TR({c:i=TD({style:{height:26}})}).appendTo(e);let c;TR({c:c=TD()}).appendTo(e);let s=e.addTab=(t=>{let e,o=d.length;i.append(e=UUI.BUTTON_H({style:{padding:"5px 10px",flt:"left",cursor:"default"},icon:t.getIcon(),spacing:5,title:t.getTitle(),on:{mouseover:()=>{n!==o&&e.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})},mouseout:()=>{n!==o&&e.addStyle({backgroundColor:"transparent"})},tap:()=>{a(o)}}})),i.append(u),r.push(e),t.on("iconchange",()=>{e.setIcon(t.getIcon())}),t.on("titlechange",()=>{e.setTitle(t.getTitle())}),c.append(t),d.push(t),t.hide()});void 0!==o&&void 0!==o.tabs&&EACH(o.tabs,s);let a=e.activeTab=(t=>{n=t,EACH(r,t=>{t.addStyle({backgroundColor:"transparent"})}),EACH(d,t=>{t.hide()}),r[t].addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#000":"#fff"}),d[t].show()});a(0)}}),SkyDesktop.VerticalTabList=CLASS({preset:()=>{return DIV},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#333":"#ccc"}}},init:(t,e,o)=>{let n=[],i=()=>{let t=0,o=0;EACH(n,e=>{void 0===e.getSize()?o+=1:t+=e.getSize(),e.addStyle({height:0})});let i=t/(n.length-o);t+=i*o,EACH(n,o=>{void 0===o.getSize()&&o.setSize(i),o.addStyle({height:(e.getHeight()-10*(n.length-1))*o.getSize()/t})})},r=e.addTab=(t=>{if(n.length>0){let o,i,r=n[n.length-1];e.append(DIV({style:{height:8,cursor:"n-resize"},on:{touchstart:e=>{let n=e.getTop(),d=r.getHeight(),u=t.getHeight();BODY.addStyle({cursor:"n-resize"}),void 0!==o&&o.remove(),o=EVENT("touchmove",e=>{let o=e.getTop()-n;d+o<100&&(o=100-d),u-o<100&&(o=u-100),r.addStyle({height:d+o}),t.addStyle({height:u-o})}),void 0!==i&&i.remove(),i=EVENT("touchend",()=>{BODY.addStyle({cursor:"auto"}),r.setSize(r.getSize()*r.getHeight()/d),t.setSize(t.getSize()*t.getHeight()/u),o.remove(),o=void 0,i.remove(),i=void 0}),e.stop()}}}))}e.append(t),n.push(t),i()});void 0!==o&&void 0!==o.tabs&&EACH(o.tabs,r),e.on("show",i);let d=EVENT("resize",i);e.on("remove",()=>{d.remove(),d=void 0})}}),SkyDesktop.Toolbar=CLASS({preset:()=>{return UUI.V_CENTER},params:()=>{return{style:{backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#666":"#ccc",color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#fff":"#000",height:"100%",borderBottom:"1px solid #999"}}},init:(t,e,o)=>{let n=[],i=CLEAR_BOTH(),r=()=>{let t=0;EACH(n,t=>{t.showTitle()}),EACH(n,e=>{t+=e.getWidth()}),e.getWidth()<t&&EACH(n,t=>{t.hideTitle()})},d=e.addButton=(t=>{e.append(t),e.append(i),n.push(t),r()});void 0!==o&&void 0!==o.buttons&&EACH(o.buttons,d),e.on("show",r),DELAY(r);let u=EVENT("resize",r);e.on("remove",()=>{u.remove(),u=void 0})}}),SkyDesktop.ToolbarButton=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{flt:"left",padding:"5px 8px"},spacing:5,on:{mouseover:(t,e)=>{e.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})},mouseout:(t,e)=>{e.addStyle({backgroundColor:"transparent"})}}}},init:(t,e,o)=>{let n=o.icon,i=o.title;e.hideTitle=(()=>{n.addStyle({marginRight:0}),e.setTitle("")}),e.showTitle=(()=>{n.addStyle({marginRight:5}),e.setTitle(i)})}});