import Script from 'next/script'

export default function Ads() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center p-4">Ads</h2>
      <div className="flex justify-center items-center gap-2">
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
        <iframe
          data-aa="2369010"
          src="//ad.a-ads.com/2369010?size=300x600"
          style={{
            width: 300,
            height: 600,
            border: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}></iframe>
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

        <div id="yandex_rtb_R-A-13228701-1" className="w-full h-[400px]"></div>
        <Script id="yaContextS">
          {`window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: 'R-A-13228701-1',
              renderTo: 'yandex_rtb_R-A-13228701-1',
            })
          })`}
        </Script>
      </div>
    </div>
  )
}
