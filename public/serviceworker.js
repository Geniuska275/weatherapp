const CACHE_NAME="version-1"
const urlstocache=['index.html',"offline.html"]
const self=this
// install SW

self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("open cache")
            return cache.addAll(urlstocache)
        })
    )

})
//listen for requests
self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then(()=>{
            return fetch(event.request).catch(()=>catches.match("offline.html"))
        })
    )
    
})

self.addEventListener("activate",(event)=>{
    const cacheWhitelist=[]
    cacheWhitelist.push(CACHE_NAME)
    event.waitUntil(
        caches.keys().then((cachenames)=>{
            cachenames.map((cachename)=>{
                if(!cacheWhitelist.includes(cachename)){
                    return caches.delete(cachename)
                }
            })
        })
    )
    
})
