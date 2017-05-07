r=(a,b="",c={},d)=>Object.keys(a).map(e=>{d=b+e.toUpperCase()
c[e]="object"!=typeof a[e]||Array.isArray(a[e])?d:r(a[e],d+"_")})&&c

module.exports = r