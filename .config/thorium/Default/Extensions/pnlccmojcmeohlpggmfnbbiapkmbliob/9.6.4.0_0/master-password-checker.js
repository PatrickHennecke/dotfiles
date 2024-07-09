// Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[563],{60759:function(a,b,c){c.r(b),c.d(b,{
MasterPasswordCompromisationChecker:function(){return f}});var d=c(20855),e=c(67793);function f(a){const b=new Set;return{
IsPasswordCompromised:async function(c,f){if(b.has(c))return!0;const g=(0,d.j8)(a),h=e.s8;await g.SetServerAddress(h)
;const i=await g.GetUserDataBreaches({password:c},f);let j=!1;i&&i.length>0&&(j=i.some((a=>1===a.m_type)));j&&b.add(c);return j}
}}}}]);