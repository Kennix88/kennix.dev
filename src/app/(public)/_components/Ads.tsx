import Script from 'next/script'

export default function Ads() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center p-4">Ads</h2>
      <div
        id="ads"
        className="flex flex-wrap justify-center items-start gap-2 min-h-[500px]">
        <div className="adbytes-display-ad" data-adspace-id="164039E0B5"></div>
        <div className="adbytes-display-ad" data-adspace-id="7B8973C309"></div>
        <div className="adbytes-display-ad" data-adspace-id="69CB7B0099"></div>
        <div className="adbytes-display-ad" data-adspace-id="ACD30426DC"></div>
        <div className="adbytes-display-ad" data-adspace-id="03FFBCBE04"></div>
      </div>
      {/*<iframe*/}
      {/*  data-aa="2368188"*/}
      {/*  src="//ad.a-ads.com/2368188?size=320x50"*/}
      {/*  style={{*/}
      {/*    width: 320,*/}
      {/*    height: 50,*/}
      {/*    border: 0,*/}
      {/*    padding: 0,*/}
      {/*    overflow: 'hidden',*/}
      {/*    backgroundColor: 'transparent',*/}
      {/*  }}></iframe>*/}
      {/*<iframe*/}
      {/*  data-aa="2369010"*/}
      {/*  src="//ad.a-ads.com/2369010?size=300x600"*/}
      {/*  style={{*/}
      {/*    width: 300,*/}
      {/*    height: 600,*/}
      {/*    border: 0,*/}
      {/*    padding: 0,*/}
      {/*    overflow: 'hidden',*/}
      {/*    backgroundColor: 'transparent',*/}
      {/*  }}></iframe>*/}
      <Script id="atADS" type="text/javascript">
        {`atOptions = {
            'key': '78fd6fef97e158e801e0fc1e6c487594',
            'format': 'iframe',
            'height': 250,
            'width': 300,
            'params': {},
          };`}
      </Script>
      <Script
        id="atADS2"
        type="text/javascript"
        src="//www.highperformanceformat.com/78fd6fef97e158e801e0fc1e6c487594/invoke.js"></Script>
      <Script
        id="adbytesADSs"
        type="text/javascript"
        src="https://adbytes.media/js/show_ads.js"></Script>
      <Script
        id="appshaPrmADSs"
        async
        src="https://appsha-prm.ctengine.io/js/script.js?wkey=9mDRaX1aNT"></Script>
      <Script
        id="adbytesADSs"
        type="text/javascript"
        src="https://adbytes.media/js/show_ads.js"></Script>
    </div>
  )
}
