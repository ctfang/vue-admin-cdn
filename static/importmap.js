const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify({
  imports: {
    "@/": "./",
    vue: "/modules/vue.js",
    "element-plus": "/modules/element-plus.js",
    "vue-router": "https://unpkg.com/vue-router@4.0.15/dist/vue-router.esm-browser.js",
    "@vue/devtools-api": "https://unpkg.com/@vue/devtools-api@6.6.1/lib/esm/index.js",
  },
});
document.currentScript.after(im);
