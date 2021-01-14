import define1 from "./60ea978986bfd25e@1624.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Biblioteca`
)});
  main.variable(observer("url")).define("url", function(){return(
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQp6W9ydRLTaDYVo2m2pxcETeMs1QnFQ5CxqvsnlQpKKitkomfGlDS0-35DV0rgN7UWpUOeBcwdSU-7/pub?output=csv"
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  main.variable(observer("data")).define("data", ["d3","url"], function(d3,url){return(
d3.csv(url)
)});
  main.variable(observer("viewof tabla_biblioteca")).define("viewof tabla_biblioteca", ["table","data"], function(table,data){return(
table(data, { title: "Hi" })
)});
  main.variable(observer("tabla_biblioteca")).define("tabla_biblioteca", ["Generators", "viewof tabla_biblioteca"], (G, _) => G.input(_));
  const child1 = runtime.module(define1);
  main.import("table", child1);
  main.variable(observer("style")).define("style", ["html"], function(html){return(
() => html`<style>
.table-2.wide .scroll-zone {
  overflow-x: auto;
  max-width: 100%;
}
.table-2.narrow-columns td,
.table-2.narrow-columns th {
  border: 1px solid #eee;
  padding: 4px;
}
.table-2.narrow-columns th {
  background: #f9f9f9;
  border-right: 1px solid #eee;
}
.table-2.wide .pager {
  max-width: 100%;
}
.table-2 table th,
.table-2 table td {
  padding: 3px 0px;
}
.table-2 table th,
.table-2 table td {
  vertical-align: top;
}
.table-2 table td:not(:first-child),
.table-2 table th:not(:first-child) {
  padding-left: 4px;
}
.table-2 table thead th {
  ____text-transform: uppercase;
  font-weight:500;
}
.table-2 .pager .title {
  flex: auto;
  font-weight: 700;
}
.table-2 .pager {
  margin-bottom: 4px;
  box-sizing: border-box;
  border-bottom:1px solid #ccc;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  max-width: 640px;
  align-items: center;
  font-family: var(--sans-serif);
  justify-content: space-between;
}
.table-2 .pager .button.disabled {
  color: #ccc;
  pointer-events:none;
}
.table-2 .pager .button {
  display: inline-flex;
  align-items: center;
  color: #333;
}
.table-2 .pager .button:hover {
  color: #000;
  cursor: pointer;
}
.table-2 .pager select {
  font-family: var(--sans-serif);
}
.table-2 .pager .page-links {
  display: inline-flex;
  align-items: center;
}
.table-2 .pager .page-links div {
  padding: 2px 4px 2px 4px;
  cursor: pointer;
  color: #888;
}
.table-2 .pager .page-links div.current {
  padding: 2px 4px 0 4px;
  pointer-events: none;
  color: #000;
  border-bottom:2px solid #000;
}
.table-2 .pager .page-links .page-selector-container {
  padding: 4px 0;
}
.search {
  padding:5px 0;
  font-family: var(--sans-serif);
  font-size: 80%;
  border-bottom:1px solid #ccc;
  max-width: 640px;
  display: flex;
  justify-content: space-between;
}
.search .search-dropdown select {

td { vertical-align: top; }
th:not(:first-child):not(:last-child), td:not(:first-child):not(:last-child) { padding: 0 10px; }
th { vertical-align: bottom; }
.number {
  text-align: right;
  font-feature-settings: 'tnum';
}
tbody tr td.with-decimal {
  padding-left:10px !important;
  padding-right:0px !important;
}
tbody tr td.decimal {
  padding-left:0 !important;
  padding-right:10px !important;
}
</style>`
)});
  return main;
}
