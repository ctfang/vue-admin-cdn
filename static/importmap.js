const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    vue: "/modules/vue.js",
    "element-plus": "/modules/element-plus.js",
  },
});
document.currentScript.after(im);
