var e=document.querySelector(".container");null==e||e.addEventListener("click",function(l){var o,n,r,s,d,t,i=document.querySelector("tbody"),c=e.querySelector(".append-row"),v=e.querySelector(".remove-row"),a=e.querySelector(".append-column"),u=e.querySelector(".remove-column");if(l.target.classList.contains("append-row")&&(null==i?void 0:null===(o=i.rows)||void 0===o?void 0:o.length)<10&&i.append(i.rows[0].cloneNode(!0)),l.target.classList.contains("remove-row")&&i.rows.length>2&&i.rows[0].remove(),l.target.classList.contains("append-column")&&(null==i?void 0:null===(n=i.rows[0])||void 0===n?void 0:n.cells.length)<10)for(var w=0;w<i.rows.length;w++)i.rows[w].append(i.rows[w].cells[0].cloneNode(!0));if(l.target.classList.contains("remove-column")&&(null==i?void 0:null===(r=i.rows[0])||void 0===r?void 0:r.cells.length)>2)for(var g=0;g<i.rows.length;g++)i.rows[g].cells[0].remove();c.disabled=(null==i?void 0:null===(s=i.rows)||void 0===s?void 0:s.length)>=10,v.disabled=i.rows.length<=2,a.disabled=(null==i?void 0:null===(d=i.rows[0])||void 0===d?void 0:d.cells.length)>=10,u.disabled=(null==i?void 0:null===(t=i.rows[0])||void 0===t?void 0:t.cells.length)<=2});
//# sourceMappingURL=index.462e55a0.js.map
