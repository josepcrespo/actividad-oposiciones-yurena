(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{779:function(e,t,n){var content=n(817);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("07314f8b",content,!0,{sourceMap:!1})},816:function(e,t,n){"use strict";n(779)},817:function(e,t,n){var o=n(11)((function(i){return i[1]}));o.push([e.i,".yrn-exercise-solution-fill-text-gaps__input-placeholder{border-radius:10px;font-family:MartelSans,monospace;height:20px;padding:10px 2px 6px;text-align:center}.theme--dark .yrn-exercise-solution-fill-text-gaps__input-placeholder{color:#fff!important}.theme--light .yrn-exercise-solution-fill-text-gaps__input-placeholder{color:#000}",""]),o.locals={},e.exports=o},850:function(e,t,n){"use strict";n.r(t);var o=n(702),l=n(701),r=n(1),c=(n(24),n(3),n(6),n(8),n(21),n(251),n(26),n(37),n(56),{name:"YrnExerciseSolutionFillGaps",props:{activityId:{required:!0,type:[Number,String]},challengeId:{required:!0,type:[Number,String]},exerciseId:{required:!0,type:[Number,String]}},computed:{autoFillTextGaps:function(){return this.fillTextGaps(this.exerciseSolutionTextToFillGaps)},exercise:function(){return this.getExercise(this.activityId,this.challengeId,this.exerciseId)},exerciseSections:function(){var e,t;return null!==(e=null===(t=this.exercise)||void 0===t?void 0:t.sections)&&void 0!==e?e:[]},exerciseSolutionExpected:function(){var e;return null===(e=this.exercise)||void 0===e||null===(e=e.solution)||void 0===e?void 0:e.expected},exerciseRouterRedirection:function(){var e,t;return null!==(e=null===(t=this.exercise)||void 0===t?void 0:t.routerRedirection)&&void 0!==e?e:null},exerciseSolutionStatement:function(){var e;return null===(e=this.exercise)||void 0===e||null===(e=e.solution)||void 0===e||null===(e=e.statement)||void 0===e?void 0:e[this.$i18n.locale]},exerciseSolutionTextToFillGaps:function(){var e;return null===(e=this.exercise)||void 0===e||null===(e=e.solution)||void 0===e||null===(e=e.textToFillGaps)||void 0===e?void 0:e[this.$i18n.locale]},solutionsFromUser:function(){var e=this,t=[];return this.exerciseSolutionExpected.forEach((function(n){var o,l=Object.keys(n)[0],c=null===(o=e.getExerciseSection(l))||void 0===o||null===(o=o.solution)||void 0===o?void 0:o.fromUser,d=Object(r.a)({},l,c);t.push(d)})),t}},methods:{getExercise:function(e,t,n){var o;return null===(o=this.$store)||void 0===o?void 0:o.getters["learningUnit/getExercise"](e,t,n)},getExerciseSection:function(e){var t;return null===(t=this.$store)||void 0===t?void 0:t.getters["learningUnit/getExerciseSection"](this.activityId,this.challengeId,this.exerciseId,e)},fillTextGaps:function(e){var t=this,n=e;return this.exerciseSections.forEach((function(section){var e,o,l=section.sectionId,r=null===(e=t.getExerciseSection(l))||void 0===e||null===(e=e.solution)||void 0===e?void 0:e.expected,c=null===(o=t.getExerciseSection(l))||void 0===o||null===(o=o.solution)||void 0===o?void 0:o.fromUser,d=c==r,x=d?"green":"deep-orange darken-4",v=String(r).length,h='<input\n            autocomplete="off"\n            class="yrn-exercise-solution-fill-text-gaps__input-placeholder '.concat(x,'"\n            name="placeholder-').concat(l,'"\n            placeholder="').concat(l,'"\n            readonly\n            size="').concat(v,'"\n            type="text"\n            value="').concat(d?c:"",'"\n          >'),f=new RegExp("\\$\\{\\{\\s*".concat(l,"\\s*\\}\\}"),"g");n=n.replace(f,h);var m=new RegExp("\\$\\{\\{".concat(l,"\\}\\}"),"g");n=n.replace(m,h)})),n}}}),d=(n(816),n(23)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"yrn-exercise-solution-fill-text-gaps"},[t(o.a,[t("h2",{staticClass:"mt-8 mb-4"},[e._v("\n      "+e._s(e.exerciseSolutionStatement)+"\n    ")]),e._v(" "),t("p",{staticClass:"font-weight-medium",domProps:{innerHTML:e._s(e.autoFillTextGaps)}})])],1)}),[],!1,null,null,null);t.default=component.exports}}]);