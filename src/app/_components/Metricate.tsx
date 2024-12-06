import Script from 'next/script'

export default function Metricate() {
  return (
    <>
      <Script id="yaAds">
        {`
         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
         m[i].l=1*new Date();
         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
         (window, document, "script", "https://mc.webvisor.org/metrika/tag_ww.js", "ym");
      
         ym(99142286, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              trackHash:true
         });`}
      </Script>
      {/*<Script id="googleAnalytics">*/}
      {/*  {`window.dataLayer = window.dataLayer || [];*/}
      {/*          function gtag(){dataLayer.push(arguments);}*/}
      {/*          gtag('js', new Date());*/}

      {/*          gtag('config', 'G-TSXZ0PJ4BP');`}*/}
      {/*</Script>*/}
      <Script id="yaContext">{`window.yaContextCb = window.yaContextCb || []`}</Script>
      <Script
        id="yaContextLoad"
        src="https://yandex.ru/ads/system/context.js"
        async></Script>
      <Script
        id="adsterra"
        type="text/javascript"
        src="//pl25205495.profitablecpmrate.com/4c/f1/ef/4cf1ef3e1f709aa60a9fb108f7399a7e.js"></Script>
    </>
  )
}
