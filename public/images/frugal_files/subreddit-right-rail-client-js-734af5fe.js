import"./faceplate-expandable-section-helper-23d529ba.js";import"./faceplate-tooltip-b2b6d871.js";import{_ as t,n as e,e as i,a as o,ay as s,eR as n,W as r,p as a,eS as d,ex as c,l,cQ as p,K as u}from"./shell-10899a6f.js";import{E as h,C as m}from"./community-widget-edit-modal-e8daac2b.js";import{s as b,x as y,A as g}from"./icon-732d0443.js";import{R as w}from"./rpl-tooltip-6969c4ab.js";import{C as f,a as j}from"./models-14fb5bcd.js";import"./community-appearance-entrypoint-d8604f45.js";import"./reddit-chat-anchor-2c1340e6.js";import"./achievements-entrypoint-4e21a8f4.js";import"./popper-controller-8ba8f4af.js";import"./makeEventDispatcher-0d7db2ea.js";import"./contains-73a8d10f.js";import"./faceplate-switch-input-11d7e644.js";import"./checked-input-element-9487863d.js";import"./faceplate-input-6d2f4135.js";import"./input-element-6687ec6f.js";import"./form-common-utils-0a9272bf.js";import"./shreddit-pubsub-publisher-002d2008.js";let k=class extends b{constructor(){super(...arguments),this.subredditName="",this.pageId=h.Main,this.openModal=async()=>{await this._activateCommunityWidgetEditModalFeature();document.querySelector(`community-widget-edit-modal#${m}`)?.showModal({pageId:this.pageId,widgetId:this.widgetId})},this.onClick=()=>{this.openModal()},this.onKeyPress=t=>{"Enter"!==t.key&&"Space"!==t.key||this.openModal()}}static get styles(){return[o]}_activateCommunityWidgetEditModalFeature(){return s({name:n,routeParams:{subreddit:this.subredditName}})}render(){return y`<slot @click="${this.onClick}" @keypress="${this.onKeyPress}"></slot>`}};t([e({type:String,attribute:"subreddit-name"})],k.prototype,"subredditName",void 0),t([e({type:String,attribute:"page-id"})],k.prototype,"pageId",void 0),t([e({type:String,attribute:"widget-id"})],k.prototype,"widgetId",void 0),k=t([i("community-widget-edit-button")],k);let v=class extends(r(w)){constructor(){super(...arguments),this.country=""}connectedCallback(){super.connectedCallback(),a.get(d)||(this.timeoutHandle=setTimeout((()=>{this.show(),c({country:this.country,name:d,value:"true"})}),1e3))}disconnectedCallback(){super.disconnectedCallback(),this.timeoutHandle&&clearTimeout(this.timeoutHandle)}async show(){const t=l({source:f.RightRailUpsell,action:p.View,noun:j.RightRailUpsell});return this.trackEvent(t),super.show()}async hide(){const t=l({source:f.RightRailUpsell,action:"dismiss",noun:j.RightRailUpsell});return this.trackEvent(t),super.hide()}};t([e({type:String})],v.prototype,"country",void 0),v=t([i("create-channel-coachmark")],v);let C=class extends b{constructor(){super(...arguments),this.container=null,this.dropdowns=null,this.containerSelector="html",this.hideDropdowns=()=>{this.dropdowns?.length&&[...this.dropdowns].forEach((t=>t.close()))},this.hideDropdownsDebounced=u(this.hideDropdowns,200,{leading:!0,trailing:!0})}connectedCallback(){super.connectedCallback(),this.container=document.querySelector(this.containerSelector),this.container&&(this.container.addEventListener("scroll",this.hideDropdownsDebounced,{passive:!0}),this.dropdowns=this.container.getElementsByTagName("faceplate-dropdown-menu"))}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.container.removeEventListener("scroll",this.hideDropdownsDebounced)}render(){return g}};t([e({type:String,attribute:"container-selector"})],C.prototype,"containerSelector",void 0),C=t([i("dropdown-close-on-scroll")],C);
//# sourceMappingURL=subreddit-right-rail-client-js-734af5fe.js.map
