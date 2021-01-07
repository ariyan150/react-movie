(this["webpackJsonptest-todo-react"]=this["webpackJsonptest-todo-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(4),r=c.n(i),o=c(2),l=(c(11),c(12),c(5)),d=Object(l.a)();var b=function(e){var t=e.user;return Object(n.useEffect)((function(){d.reveal(".header",{origin:"top",duration:1e3,delay:150,distance:"500px",scale:1})}),[]),Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("h1",{children:["Movies | ",t," | React App"]})})};c(13);var j=function(e){var t=e.setSelectedMovie,c=Object(n.useState)([]),a=Object(o.a)(c,2),i=a[0],r=a[1],l=Object(n.useState)([""]),b=Object(o.a)(l,2),j=b[0],u=b[1];function h(e,t){return e.length>t?e.substr(0,t-1)+"...":e}return Object(n.useEffect)((function(){d.reveal(".container",{duration:2e3,delay:150,distance:"500px",scale:1})}),[j]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"search bar mt-3",children:Object(s.jsx)("input",{class:"form-control",value:j,onChange:function(e){e.preventDefault(),u(e.target.value),fetch("http://www.omdbapi.com/?s=".concat(e.target.value,"&apikey=af3d009a")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?(r(e.Search),console.log(e.Search)):r([])}))},type:"text",placeholder:"Search for movies","aria-label":"default input example"})}),Object(s.jsx)("div",{className:"movies",id:"row_movies",children:i.map((function(e){return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsxs)("div",{className:"title",children:[h(e.Title,10)," (",h(e.Year,5),")"]}),Object(s.jsx)("div",{className:"poster",children:Object(s.jsx)("img",{src:e.Poster,alt:e.Title})}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-success",onClick:function(){return t(e.imdbID)},children:"Info"}),Object(s.jsx)("button",{type:"button",class:"btn btn-danger",children:"Trailers"}),Object(s.jsx)("button",{type:"button",class:"btn btn-primary",children:"Parents Guid"}),Object(s.jsx)("button",{type:"button",class:"btn btn-warning",children:"Movies like this"})]})]})}))})]})};c(14);var u=function(e){var t,c,a=e.selectedMovie,i=e.setSelectedMovie,r=Object(n.useState)((function(){return""})),l=Object(o.a)(r,2),b=l[0],j=l[1],u=Object(n.useState)(null),h=Object(o.a)(u,2),x=(h[0],h[1]);return Object(n.useEffect)((function(){d.reveal(".movie_page",{origin:"top",duration:2e3,delay:150,distance:"500px"})}),[]),Object(n.useEffect)((function(){fetch("http://www.omdbapi.com/?i=".concat(a,"&apikey=af3d009a")).then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]),Object(n.useEffect)((function(){fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=".concat(b.Title).concat(b.Year," trailer"),{method:"GET",headers:{"x-rapidapi-key":"ea4ba8f6aamsh23ffbbac2f6a618p1bd384jsna311b8e29f36","x-rapidapi-host":"youtube-search-results.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){e.items&&x("https://www.youtube.com/embed/"+e.items[1].id)}))}),[b]),Object(s.jsxs)("div",{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&i(null)},children:[Object(s.jsx)("button",{type:"button",className:"btn btn-danger rounded-circle",id:"close_modal",onClick:function(){return i(null)},children:"X"}),Object(s.jsxs)("div",{className:"movie_page",children:[Object(s.jsxs)("div",{className:"name",children:[b.Title," (",b.Year,")"]}),Object(s.jsx)("div",{className:"poster",children:Object(s.jsx)("img",{src:b.Poster})}),Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsxs)("div",{className:"director",children:[Object(s.jsx)("div",{className:"title_box",children:"Director"}),Object(s.jsx)("div",{className:"body_box",children:b.Director?b.Director:"Unkown"})]}),Object(s.jsxs)("div",{className:"actors",children:[Object(s.jsx)("div",{className:"title_box",children:"Actors"}),Object(s.jsx)("div",{className:"body_box",children:b.Actors?b.Actors:"Unkown"})]}),Object(s.jsxs)("div",{className:"genre",children:[Object(s.jsx)("div",{className:"title_box",children:"Genre"}),Object(s.jsx)("div",{className:"body_box",children:b.Genre?b.Genre:"Unkown"})]}),Object(s.jsxs)("div",{className:"rated",children:[Object(s.jsx)("div",{className:"title_box",children:"Rated"}),Object(s.jsx)("div",{className:"body_box",children:b.Rated?b.Rated:"Unkown"})]}),Object(s.jsxs)("div",{className:"time",children:[Object(s.jsx)("div",{className:"title_box",children:"Time"}),Object(s.jsx)("div",{className:"body_box",children:b.Runtime?b.Runtime:"Unkown"})]}),Object(s.jsxs)("div",{className:"boxOffice",children:[Object(s.jsx)("div",{className:"title_box",children:"boxOffice"}),Object(s.jsx)("div",{className:"body_box",children:b.BoxOffice?b.BoxOffice:"Unkown"})]}),Object(s.jsxs)("div",{className:"rates",children:[Object(s.jsx)("div",{className:"title_box",children:"Rates"}),Object(s.jsxs)("div",{className:"body_box",id:"rate_body_box",children:[Object(s.jsx)("section",{className:"body_box_sub",children:b.imdbRating}),Object(s.jsx)("section",{className:"body_box_sub",children:b.Metascore})]})]}),Object(s.jsxs)("div",{className:"plot",children:[Object(s.jsx)("div",{className:"title_box",children:"Plot"}),Object(s.jsx)("div",{className:"body_box",children:(t=b.Plot||"none",c=160,t.length>c?t.substr(0,c-1)+"...":t)})]})]})]})]})};var h=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{user:"Ariyan"}),Object(s.jsx)(j,{setSelectedMovie:a,className:"Movies"}),c&&Object(s.jsx)(u,{selectedMovie:c,setSelectedMovie:a})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),x()}],[[15,1,2]]]);
//# sourceMappingURL=main.c4ae2f8a.chunk.js.map