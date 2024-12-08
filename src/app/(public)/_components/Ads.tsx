import Script from 'next/script'

export default function Ads() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center p-4">Ads</h2>
      <div
        id="ads"
        className="flex flex-wrap justify-center items-start gap-2 min-h-[500px]">
        <div className="adbytes-display-ad" data-adspace-id="164039E0B5"></div>
        <div className="adbytes-display-ad" data-adspace-id="ABDC25FAF1"></div>
        <iframe
          data-aa="2368188"
          src="//ad.a-ads.com/2368188?size=320x50"
          style={{
            width: 320,
            height: 50,
            border: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}></iframe>
        <Script id="atADS1" type="text/javascript">
          {`atOptions = {
            'key': '672e7e6b18ee4ee86c6e33a48a148b6c',
            'format': 'iframe',
            'height': 50,
            'width': 320,
            'params': {},
          };`}
        </Script>
      </div>

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
      {/*<Script id="atADS" type="text/javascript">*/}
      {/*  {`atOptions = {*/}
      {/*      'key': '78fd6fef97e158e801e0fc1e6c487594',*/}
      {/*      'format': 'iframe',*/}
      {/*      'height': 250,*/}
      {/*      'width': 300,*/}
      {/*      'params': {},*/}
      {/*    };`}*/}
      {/*</Script>*/}
      <Script
        id="atADS2"
        type="text/javascript"
        src="//www.highperformanceformat.com/672e7e6b18ee4ee86c6e33a48a148b6c/invoke.js"></Script>
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
