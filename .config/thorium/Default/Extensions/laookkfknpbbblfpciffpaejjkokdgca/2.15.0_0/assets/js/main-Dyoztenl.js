import"./VueBase-CjPGMLuv.js";import{b as o}from"./bookmarkUtils-BELSVhnR.js";import{n as s,A as t,r as e,o as i}from"./promisifiedChrome-CheD9WtZ.js";import{_ as r}from"./icon-back-arrow-CiRQJ6G-.js";import{_ as a}from"./icon-ellipsis-D3jS4u3x.js";import{_ as n}from"./folder-CwWTWsnJ.js";import{p as l}from"./reactiveCustomization-CrL2eTrh.js";import{V as k}from"./ResizeSensor-CXS_pGRc.js";import"./dashboard-CF_jRhAY.js";import"./main--IJuvtTE.js";import"./localStorage-B4mFdj8F.js";import"./preload-helper-D7CfCCEq.js";import"./Logger-Dqn8sDPg.js";import"./environmentVariables-Cy83xda0.js";import"./migrateLegacyUserMessageHandler-CU6TUnqH.js";import"./timestampDb-sTUCijT1.js";import"./index-CJJH83pl.js";import"./string-KTo4Qfpe.js";const h=new t({feature:"bookmarks"});const d=s({name:"Bookmark",props:{bookmark:{type:Object,default:()=>({})},showIconsOnly:Boolean},methods:{favicon:s=>o.favicon(s),open(){if(this.bookmark.back)return this.$emit("closeMostVisited");this.captureEvent(),o.open(this.bookmark.url)},openInNewTab(){this.bookmark.back||(this.captureEvent(),o.openInNewTab(this.bookmark.url))},captureEvent(){this.bookmark.analyticsId?h.capture(`${this.bookmark.analyticsId} click`):h.batchCapture("bookmark click")}}},(function(){var o=this,s=o._self._c;return s("a",{staticClass:"bookmark",class:{local:o.bookmark.local},attrs:{draggable:"false",title:o.bookmark.title},on:{click:[function(s){return s.ctrlKey||s.shiftKey||s.altKey||s.metaKey?null:o.open.apply(null,arguments)},function(s){return s.metaKey?o.openInNewTab.apply(null,arguments):null}],mouseup:function(s){return"button"in s&&1!==s.button||s.ctrlKey||s.shiftKey||s.altKey||s.metaKey?null:o.openInNewTab.apply(null,arguments)}}},[s("span",{staticClass:"bookmark-icon-wrapper"},[o.bookmark.back?s("span",{staticClass:"icon-back-wrapper"},[s("inline-svg",{staticClass:"bookmark-icon icon-back bookmark-child-icon",attrs:{src:r}})],1):o.bookmark.img?s("img",{staticClass:"bookmark-icon bookmark-img",attrs:{draggable:"false",src:o.bookmark.img}}):s("img",{staticClass:"bookmark-icon",attrs:{draggable:"false",src:o.favicon(o.bookmark.url)}})]),o.bookmark.title&&!o.showIconsOnly?s("span",{staticClass:"bookmark-label"},[o._v(o._s(o.bookmark.title))]):o._e()])}),[],!1,null,"cf07d9dc").exports;const c=s({name:"BookmarkFolder",props:{bookmark:{type:Object,default:()=>({})},showIconsOnly:Boolean,index:{type:Number,default:0}},data:()=>({showChildren:!1,shiftToLeft:!1,path:[]}),computed:{children(){let o=this.bookmark;return this.path.forEach((s=>{o=o.children.find((o=>o.id===s))})),o.children},showBack(){return!!this.path.length},isOverflow(){return"overflow________"===this.bookmark.id}},created(){m.on("globalEvent:esc",this.handleEsc)},destroyed(){m.off("globalEvent:esc",this.handleEsc)},methods:{handleEsc(){this.showBack?this.goBack():this.closeFolder()},closeFolder(){this.path=[],this.showChildren=!1},toggleFolder(o){this.$refs.folderDropdown&&this.$refs.folderDropdown.contains(o.target)||(this.showChildren=!this.showChildren,this.shiftToLeft=!1,this.showChildren?this.$nextTick(this.checkFolderIsNotOutsideOfView):this.path=[])},openSubFolder(o,s){o.preventDefault(),o.stopPropagation(),this.path.push(s)},goBack(o){o&&(o.preventDefault(),o.stopPropagation()),this.path.splice(-1,1)},checkFolderIsNotOutsideOfView(){const o=this.$refs.folderDropdown;if(!o)return;const s=o.getBoundingClientRect();this.shiftToLeft=!(s.top>=0&&s.left>=0&&s.right<=window.innerWidth)},favicon:s=>o.favicon(s),open(s){o.open(s.url)},openInNewTab(s){this.isOverflow||(s.children?s.children.forEach((s=>{s.children||o.openInNewTab(s.url)})):o.openInNewTab(s.url))}}},(function(){var o=this,s=o._self._c;return s("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:o.closeFolder,expression:"closeFolder"}],staticClass:"bookmark folder",class:{"shift-to-left":o.shiftToLeft||o.isOverflow,"icon-only":o.showIconsOnly,active:o.showChildren},attrs:{draggable:"false",title:o.bookmark.title,"data-test":"folder"},on:{click:function(s){return s.ctrlKey||s.shiftKey||s.altKey||s.metaKey?null:o.toggleFolder.apply(null,arguments)}}},[s("div",{staticClass:"folder-wrapper",on:{click:function(s){return s.metaKey?o.openInNewTab(o.bookmark):null},mouseup:function(s){return"button"in s&&1!==s.button||s.ctrlKey||s.shiftKey||s.altKey||s.metaKey?null:o.openInNewTab(o.bookmark)}}},[o.isOverflow?[s("inline-svg",{staticClass:"icon icon-ellipsis more-icon",attrs:{draggable:"false",src:a}})]:[o.showIconsOnly&&o.bookmark.title?s("span",{staticClass:"folder-icon-label bookmark-child-icon",attrs:{"data-test":"folder-icon-label"}},[o._v(o._s(o.bookmark.title[0]))]):o._e(),s("inline-svg",{staticClass:"bookmark-icon icon-folder bookmark-child-icon",attrs:{draggable:"false",src:n}}),o.showIconsOnly?o._e():s("span",{staticClass:"bookmark-label"},[o._v(o._s(o.bookmark.title))])]],2),o.showChildren?s("div",{ref:"folderDropdown",staticClass:"app dropdown more-dropdown dash-dropdown folder-dropdown nipple nipple-top-left",attrs:{"data-test":"folder-dropdown"}},[s("div",{staticClass:"dropdown-wrapper"},[s("ul",{staticClass:"dropdown-list"},[o.showBack?s("li",{staticClass:"dropdown-item back-item",attrs:{"data-test":"folder-back"}},[s("a",{staticClass:"bookmark bookmark-child",on:{click:o.goBack}},[s("span",{staticClass:"icon-back-wrapper"},[s("inline-svg",{staticClass:"bookmark-icon icon-back bookmark-child-icon",attrs:{src:r}})],1),s("span",{staticClass:"bookmark-label"},[o._v("Back")])])]):o._e(),o._l(o.children,(function(t){return s("li",{key:t.id,staticClass:"dropdown-item",attrs:{"data-test":"folder-bookmark"},on:{click:[function(s){if(s.ctrlKey||s.shiftKey||s.altKey||s.metaKey)return null;t.children?o.openSubFolder(s,t.id):o.open(t)},function(s){return s.metaKey?o.openInNewTab(t):null}],mouseup:function(s){return"button"in s&&1!==s.button||s.ctrlKey||s.shiftKey||s.altKey||s.metaKey?null:o.openInNewTab(t)}}},[s("a",{staticClass:"bookmark bookmark-child",class:{local:t.local},attrs:{draggable:"false",title:t.title}},[t.children?s("div",{staticClass:"folder-wrapper bookmark-child"},[s("inline-svg",{staticClass:"bookmark-icon icon-folder bookmark-child-icon",attrs:{draggable:"false",src:n}})],1):s("span",{staticClass:"bookmark-icon-wrapper"},[s("img",{staticClass:"bookmark-icon bookmark-child-icon",attrs:{draggable:"false",src:o.favicon(t.url)}})]),s("span",{staticClass:"bookmark-label",attrs:{"data-test":"nested-folder-label"}},[o._v(o._s(t.title))])])])})),o.children.length?o._e():s("li",{staticClass:"dropdown-item folder-empty",attrs:{"data-test":"folder-bookmark"}},[o._m(0)])],2)])]):o._e()])}),[function(){var o=this._self._c;return o("a",{staticClass:"bookmark bookmark-child",attrs:{title:"This folder is empty."}},[o("span",{staticClass:"bookmark-label"},[this._v("(empty)")])])}],!1,null,"3816f3e6").exports;const b=s({name:"Bookmarks",enabling:e.appsReady,components:{Bookmark:d,BookmarkFolder:c},bb:()=>({settings:m.models.bookmarksSettings}),data:()=>({showBookmarks:m.models.customization.get("bookmarksVisible"),bookmarksMenu:[],bookmarksFetched:!1,originalbookmarks:[],bookmarks:[],topSites:[],originalTopSites:[],otherBookmarks:[],overflowBookmarks:[],currentTabDefaultMostVisited:!1}),computed:{isChromiumAndNotTopSites(){return m.utils.isChromium()&&!this.currentTabDefaultMostVisited},showChromeTab(){return this.settings&&"bookmarks"===this.settings.chromeTabLocation},containsMostVisited(){return this.bookmarks&&-1!==this.bookmarks.findIndex((o=>o.id===this.mostVisitedId))},containsOthers(){return this.bookmarks&&-1!==this.bookmarks.findIndex((o=>o.id===this.otherId))},containsOverflow(){return this.bookmarks&&-1!==this.bookmarks.findIndex((o=>o.id===this.overflowId))},containChromeTab(){return this.bookmarks&&-1!==this.bookmarks.findIndex((o=>o.url===this.chromeTabUrl))},containsChromeBookmarksManager(){return this.bookmarks&&-1!==this.bookmarks.findIndex((o=>o.url===this.chromeBookmarksUrl))}},watch:{"settings.iconsOnly"(){this.removeOverflowAndCheckWithinView()},"settings.includeMostVisited"(o){this.bookmarksFetched&&(o?this.addMostVisitedToBookmarks():this.removeMostVisited())},"settings.defaultMostVisited"(o){this.bookmarksFetched&&(this.currentTabDefaultMostVisited=o,o&&this.currentTabDefaultMostVisited&&this.bookmarksFetched?this.showMostVisited():this.closeMostVisited())},"settings.includeBookmarks"(o){this.bookmarksFetched&&(o?this.showChromeBookmarksManager():this.removeChromeBookmarksManager())},"settings.includeOtherBookmarks"(o){this.bookmarksFetched&&(o?this.addOtherBookmarks():this.removeOtherBookmarks())},showChromeTab(o){this.bookmarksFetched&&(o?this.showChromeTabItem():this.removeChromeTabItem())}},created(){this.chromeTabUrl=i(),this.chromeBookmarksUrl="chrome://bookmarks",this.isFirefox="Firefox"===m.utils.getBrowserName(),this.firefoxBookmarksMenu="Bookmarks Menu",this.mostVisitedId="mostVisited________",this.otherId="other________",this.overflowId="overflow________",this.getBookmarks(),m.on("appsReady",this.isWithinView),m.models.customization.on("m.customization: change:bookmarksVisible",this.bookmarksVisibleChanged),window.addEventListener("resize",this.debouncedRemoveOverflowAndCheckWithinView)},destroyed(){m.off("appsReady",this.isWithinView),m.models.customization.off("m.customization: change:bookmarksVisible",this.bookmarksVisibleChanged),window.removeEventListener("resize",this.debouncedRemoveOverflowAndCheckWithinView)},methods:{async getBookmarks(){if(m.utils.getBrowser().bookmarks&&m.utils.getBrowser().topSites)o.requestFaviconPermissionIfNeeded("Bookmarks Bar");else{const o={permissions:m.models.bookmarksSettings.permissions.permissions};if(!(await new Promise((s=>{m.cmd("modal.open","PERMISSION_REQUEST",{resolve:s,permissions:o,widgetName:"Momentum",permissionExplanation:"To display your bookmarks"})}))))return l.bookmarksVisible=!1,void m.models.bookmarksSettings.set("defaultMostVisited",!1)}m.utils.getBrowser().bookmarks.getTree((o=>{this.isChrome=m.utils.isChrome(),this.isEdge=m.utils.isEdge();let s="BOOKMARKS BAR";this.isFirefox?s="BOOKMARKS TOOLBAR":this.isEdge&&(s="FAVORITES BAR");let t=o&&o.length&&o[0].children.find((o=>o.title.toUpperCase()===s));t||(t=o&&o.length&&o[0].children[0]),m.utils.getBrowser().topSites.get((s=>{this.bookmarks=t.children,this.originalbookmarks=[...t.children],this.topSites=s,this.originalTopSites=[...s],this.settings.includeMostVisited&&this.addMostVisitedToBookmarks(),this.settings.defaultMostVisited&&(this.currentTabDefaultMostVisited=!0,this.showMostVisited()),this.showChromeSpecificItems();const e=this.isEdge?"OTHER FAVORITES":"OTHER BOOKMARKS";let i=o[0].children.find((o=>o.title.toUpperCase()===e));i||(i=o&&o.length&&o[0].children[1]),this.otherBookmarks=i.children,this.settings.includeOtherBookmarks&&this.addOtherBookmarks(),this.addFirefoxBookmarksMenu(o),this.bookmarksFetched=!0,this.bookmarksReadyListener(),this.isWithinView()}))}))},resetBookmarks(){this.removeOverflow(),this.bookmarks=[...this.originalbookmarks],this.settings.includeMostVisited&&this.addMostVisitedToBookmarks(),this.settings.includeOtherBookmarks&&this.addOtherBookmarks(),this.showChromeSpecificItems(),this.addFirefoxBookmarksMenu()},bookmarksReadyListener(){"photo"===m.models.customization.persistentSettings.get("themeColour")?m.on("theme:set",this.bookmarksReady):this.bookmarksReady()},bookmarksReady(){m.widgetManager.appReady("bookmarks")},removeOverflowAndCheckWithinView(){this.removeOverflow(),this.isWithinView()},debouncedRemoveOverflowAndCheckWithinView(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.removeOverflowAndCheckWithinView()}),50)},bookmarksVisibleChanged(){const o=m.models.customization.get("bookmarksVisible");o&&0===this.bookmarks.length&&this.getBookmarks(),this.showBookmarks=o,localStorage.setItem("bookmarksEnabled",o)},addMostVisitedToBookmarks(){if(!this.containsMostVisited&&!this.currentTabDefaultMostVisited){let o=this.bookmarks.findIndex((o=>o.url===this.chromeBookmarksUrl));-1===o&&(o=this.bookmarks.findIndex((o=>o.url===this.chromeTabUrl))),-1===o?o=0:o++,this.bookmarks.splice(o,0,{children:[...this.originalTopSites],id:this.mostVisitedId,index:o,title:"Top Sites"})}this.removeOverflowAndCheckWithinView()},showMostVisited(){this.removeOverflow(),this.addMostVisitedToBookmarks(),this.bookmarks=[...this.originalTopSites],this.containsMostVisited||this.bookmarks.unshift({title:"Bookmarks",id:"mostVisitedBack________",back:!0})},removeMostVisited(){const o=this.bookmarks.findIndex((o=>o.id===this.mostVisitedId));-1!==o&&(this.bookmarks.splice(o,1),this.removeOverflowAndCheckWithinView())},closeMostVisited(){this.currentTabDefaultMostVisited=!1,this.resetBookmarks(),this.isWithinView()},addOtherBookmarks(){if(!this.settings.includeOtherBookmarks||this.currentTabDefaultMostVisited)return;const o={children:this.otherBookmarks,id:this.otherId,title:"Other"};this.containsOverflow&&-1===this.overflowBookmarks.findIndex((o=>o.id===this.otherId))?this.overflowBookmarks.push(o):this.containsOverflow||this.containsOthers||(this.bookmarks.push(o),this.removeOverflowAndCheckWithinView())},removeOtherBookmarks(){let o=this.bookmarks.findIndex((o=>o.id===this.otherId));if(-1===o){if(o=this.overflowBookmarks.findIndex((o=>o.id===this.otherId)),-1===o)return;this.overflowBookmarks.splice(o,1),this.overflowBookmarks.length||this.removeOverflow()}else this.bookmarks.splice(o,1)},reorderOtherBookmarksToBeAtEnd(){let o=this.bookmarks.findIndex((o=>o.id===this.otherId));if(-1===o){if(o=this.overflowBookmarks.findIndex((o=>o.id===this.otherId)),-1===o)return;const s=this.overflowBookmarks[this.overflowBookmarks.length-1];this.overflowBookmarks[o]=s,this.overflowBookmarks[this.overflowBookmarks.length-1]=this.otherBookmarks}else this.bookmarks.splice(o,1)},addToOverflow(o){if(!o||o.id===this.overflowId)return;const s=this.bookmarks.findIndex((s=>s===o));this.bookmarks.splice(s,1),this.overflowBookmarks.includes(o)||this.overflowBookmarks.unshift(o),-1===this.bookmarks.findIndex((o=>o.id===this.overflowId))&&this.bookmarks.push({children:this.overflowBookmarks,id:this.overflowId,index:-1})},removeOverflow(){this.overflowBookmarks.forEach((o=>{this.bookmarks.includes(o)||this.bookmarks.push(o)}));const o=this.bookmarks.findIndex((o=>o.id===this.overflowId));-1!==o&&(this.bookmarks.splice(o,1),this.overflowBookmarks=[])},showChromeSpecificItems(){this.showChromeTabItem(),this.showChromeBookmarksManager()},showChromeTabItem(){this.isChromiumAndNotTopSites&&this.showChromeTab&&!this.containChromeTab&&(this.bookmarks.unshift({url:this.chromeTabUrl,local:!0,title:m.utils.getBrowserName()+" Tab",id:"chromeTab________",img:"img/icon-"+m.utils.getBrowserName().toLowerCase()+".svg",analyticsId:"browser tab"}),this.removeOverflowAndCheckWithinView())},removeChromeTabItem(){this.bookmarks.splice(0,1),this.removeOverflowAndCheckWithinView()},showChromeBookmarksManager(){if(this.isChromiumAndNotTopSites&&this.settings.includeBookmarks&&!this.containsChromeBookmarksManager){let o=this.bookmarks.findIndex((o=>o.url===this.chromeTabUrl));-1===o?o=0:o++,this.bookmarks.splice(o,0,{url:this.chromeBookmarksUrl,local:!0,title:"Bookmarks",id:"chromeBookmarksManager________"}),this.removeOverflowAndCheckWithinView()}},removeChromeBookmarksManager(){if(this.isChromiumAndNotTopSites){const o=this.bookmarks.findIndex((o=>o.url===this.chromeBookmarksUrl));this.bookmarks.splice(o,1),this.removeOverflowAndCheckWithinView()}},addFirefoxBookmarksMenu(o){this.isFirefox&&(o&&(this.bookmarksMenu=o[0].children[0].children),this.currentTabDefaultMostVisited||this.bookmarks.push({children:this.bookmarksMenu,id:"menu________",parentId:"root________",title:this.firefoxBookmarksMenu}))},isWithinView(){this.$nextTick((()=>{const o=document.documentElement.clientWidth;for(let s=this.bookmarks.length-1;s>0;s--){const t=this.$refs.bookmark.find((o=>o.id===this.bookmarks[s].id));if(!(t&&t.offsetLeft+t.clientWidth>o)){this.isOverflowWithinView();break}this.addToOverflow(this.bookmarks[s])}}))},isOverflowWithinView(){this.$nextTick((()=>{const o=document.documentElement.clientWidth,s=this.$refs.overflow&&this.$refs.overflow[0]&&this.$refs.overflow[0].$el;if(s&&s.offsetLeft+s.clientWidth>o){const o=this.bookmarks[this.bookmarks.length-2];this.addToOverflow(o)}}))}}},(function(){var o=this,s=o._self._c;return s("transition",{attrs:{name:"slide",appear:o.$options.enabling},on:{enter:o.isWithinView}},[o.showBookmarks?s("div",{staticClass:"app-container bookmarks",attrs:{id:"bookmarks-vue","data-test":"bookmarks"}},[s("ul",{staticClass:"bookmarks-list",class:{"most-visited":o.currentTabDefaultMostVisited,"icons-only":o.settings.iconsOnly}},o._l(o.bookmarks,(function(t,e){return s("li",{key:t.id,ref:"bookmark",refInFor:!0,staticClass:"bookmarks-item",class:{overflow:"overflow________"===t.id,back:t.back},attrs:{id:t.id,"data-test":"bookmark"}},[t.children?s("bookmark-folder",{ref:"overflow________"===t.id?"overflow":"",refInFor:!0,attrs:{bookmark:t,"show-icons-only":o.settings.iconsOnly,index:e}}):s("bookmark",{attrs:{bookmark:t,"show-icons-only":o.settings.iconsOnly},on:{closeMostVisited:o.closeMostVisited}})],1)})),0)]):o._e()])}),[],!1,null,"4a0da77b").exports,f=document.createElement("div");document.querySelector(".top-bar").appendChild(f),new k({render:o=>o(b)}).$mount(f);