if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const o=e=>i(e,t),d={module:{uri:t},exports:n,require:o};a[t]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(s(...e),n)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/lojadoalex/_next/static/chunks/319-c7dffd9a93252afb.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/361-902b765b3682e517.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/477-0c185449aa2ce8c4.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/750-2c4e6d6d9c655498.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/app/about/page-617f11abc8f28ab1.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/app/layout-d723132929aff280.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/app/page-b402d60b9bc9eb66.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/app/products/page-b435232aa2631c1a.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/app/terms/page-2ef3b3219c529013.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/c15bf2b0-69d41aa00fd7e843.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/fd9d1056-186bb04d793e8055.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/main-app-51c7a0f09e3b1d88.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/main-e633e11ba758f014.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/lojadoalex/_next/static/chunks/webpack-5a91fc36738dc2fe.js",revision:"mq4hF_XGPqnwxqP2E7j8R"},{url:"/lojadoalex/_next/static/css/14f586ae76489f76.css",revision:"14f586ae76489f76"},{url:"/lojadoalex/_next/static/css/16b249ffe1fd4b8a.css",revision:"16b249ffe1fd4b8a"},{url:"/lojadoalex/_next/static/css/3d4acf80a3440ec8.css",revision:"3d4acf80a3440ec8"},{url:"/lojadoalex/_next/static/css/acfbed86ceeeae12.css",revision:"acfbed86ceeeae12"},{url:"/lojadoalex/_next/static/css/e791800029417cd2.css",revision:"e791800029417cd2"},{url:"/lojadoalex/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/lojadoalex/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/lojadoalex/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/lojadoalex/_next/static/media/apollo1.63ee57ed.jpg",revision:"6932487263962c8f68c82fe22a420d12"},{url:"/lojadoalex/_next/static/media/apollo2.ddec1f22.jpg",revision:"3a4e185f3e5170510dc4d21f3c6abfed"},{url:"/lojadoalex/_next/static/media/apollo3.638e682c.jpg",revision:"ad2daf8883666c90c21a87a5b4f15128"},{url:"/lojadoalex/_next/static/media/apollo4.b2288593.jpg",revision:"ae44cc811d046c8b7bf358cc7f7ceb74"},{url:"/lojadoalex/_next/static/media/apollo5.d1d6a402.jpg",revision:"ab11aef39b550319818de9b6acb0551a"},{url:"/lojadoalex/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/lojadoalex/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/lojadoalex/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/lojadoalex/_next/static/media/city1.b6da7e94.jpg",revision:"288575902015e033cd069a32fb068c03"},{url:"/lojadoalex/_next/static/media/city2.4665cacb.jpg",revision:"fa2346f4f04edccb1a79672c53ff2fe7"},{url:"/lojadoalex/_next/static/media/city3.9338f8fd.jpg",revision:"1be16f1059ba1f0b43560db0fc82decc"},{url:"/lojadoalex/_next/static/media/city4.c30031d7.jpg",revision:"15345e8b257e23124bcbadb62061ef91"},{url:"/lojadoalex/_next/static/media/city5.a8ab3c7c.jpg",revision:"78183f65dcdb1092ee4249bf72f3aab1"},{url:"/lojadoalex/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/lojadoalex/_next/static/media/ev31.32eaa932.jpg",revision:"46a35332a3983eb9a068721fe02657ee"},{url:"/lojadoalex/_next/static/media/ev32.7de00681.jpg",revision:"9ba45a429766c21fed17cc74d0e50173"},{url:"/lojadoalex/_next/static/media/ev33.46c95c6e.jpg",revision:"f0ed9e3ff76b690af3ad04c951cb3bb5"},{url:"/lojadoalex/_next/static/media/ev34.5041e23c.jpg",revision:"2d95931bfda5606b46e5d5ab8a299aac"},{url:"/lojadoalex/_next/static/media/ev35.05d96bc4.jpg",revision:"8576a419632bc8b314404a6547171ad3"},{url:"/lojadoalex/_next/static/media/left1.7b52fc03.jpg",revision:"749505f12a2d2924809791e941612896"},{url:"/lojadoalex/_next/static/media/left1.7b52fc03.jpg",revision:"7b52fc03"},{url:"/lojadoalex/_next/static/media/left2.50a1c319.jpg",revision:"0eb8586e246ea42426399b1336834860"},{url:"/lojadoalex/_next/static/media/left3.0fd3e99c.jpg",revision:"1b1ee36a4df3d7b0f5c47470bb9eccb2"},{url:"/lojadoalex/_next/static/media/macaw1.6d5a8ec5.jpg",revision:"ea68447a025172ef57eaa333a1e88186"},{url:"/lojadoalex/_next/static/media/macaw2.e56fe6e3.jpg",revision:"539ed3841610d9de216aaed4d0e95dd2"},{url:"/lojadoalex/_next/static/media/macaw3.60300b0f.jpg",revision:"442f3754905fc01fef314c9339ef3aef"},{url:"/lojadoalex/_next/static/media/macaw4.dc37fd47.jpg",revision:"e159b2b654bd6b3b38317c04c3defdfc"},{url:"/lojadoalex/_next/static/media/mclaren1.84e09d46.jpg",revision:"8f5e7dd94c16477ad3dfb958eda9f51f"},{url:"/lojadoalex/_next/static/media/mclaren2.431b3b54.jpg",revision:"f9174fe2f8d27212ecb752180adc953f"},{url:"/lojadoalex/_next/static/media/mclaren3.7ae214c7.jpg",revision:"b1af57cd5ef74aea960d9ea07550fa40"},{url:"/lojadoalex/_next/static/media/mclaren4.f4b06043.jpg",revision:"352a1491440868f1afff633bc513298c"},{url:"/lojadoalex/_next/static/media/mclaren5.4440258c.jpg",revision:"0692ccd1d925ab024b096b92ee013669"},{url:"/lojadoalex/_next/static/media/nitro1.e2cdec18.jpg",revision:"834bd902f51c44cddc2d7546422ac474"},{url:"/lojadoalex/_next/static/media/nitro2.1280d227.jpg",revision:"7a93cadc25c355e70b435875737b78c0"},{url:"/lojadoalex/_next/static/media/nitro3.6caa70f9.jpg",revision:"866192a62dc95092833cadde0eed099a"},{url:"/lojadoalex/_next/static/media/nitro4.bf19a879.jpg",revision:"b678625a650b7eef319954ebada38596"},{url:"/lojadoalex/_next/static/media/nitro5.71ef6da2.jpg",revision:"f777e018d0c1ccbb5bca694b7b4e9ff0"},{url:"/lojadoalex/_next/static/media/profile.80755836.jpg",revision:"89b47850d4168672521c8a708fc2b67e"},{url:"/lojadoalex/_next/static/media/profile2.1240555f.png",revision:"49c6693c9b48d1b3da04a56fcb318fd0"},{url:"/lojadoalex/_next/static/media/right1.83d16b69.jpg",revision:"ddeab4c39fffbbf872db3fa3c61cc20c"},{url:"/lojadoalex/_next/static/media/right2.155bb0d3.jpg",revision:"ce263661db43c4aec78a6a9a4d3c81c4"},{url:"/lojadoalex/_next/static/media/right3.b693efb8.jpg",revision:"66ec8deb1388c631d4d0903176c48bad"},{url:"/lojadoalex/_next/static/media/skyline.9d64e774.jpg",revision:"92a12787f8ccbdd60a079510e7633c44"},{url:"/lojadoalex/_next/static/media/speed1.8aa88fe5.jpg",revision:"eb0fdd728b19011a7d9ecd791c9219bf"},{url:"/lojadoalex/_next/static/media/speed2.1b0d16e2.jpg",revision:"6e4a95277bba0f5927e9122255dbf2df"},{url:"/lojadoalex/_next/static/media/speed3.3f94c627.jpg",revision:"571bccbcdc2c640a4ed480c2ed44c25c"},{url:"/lojadoalex/_next/static/media/speed4.1a0f36a6.jpg",revision:"6eeccfda5c6e80fca60dc4b23be8cde8"},{url:"/lojadoalex/_next/static/media/speed5.88a52263.jpg",revision:"74410a3b13df542ff965f750203d921b"},{url:"/lojadoalex/_next/static/media/speed6.4a21665d.jpg",revision:"80242ca21a37b91fb313889a34191163"},{url:"/lojadoalex/_next/static/mq4hF_XGPqnwxqP2E7j8R/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/lojadoalex/_next/static/mq4hF_XGPqnwxqP2E7j8R/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/lojadoalex",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
