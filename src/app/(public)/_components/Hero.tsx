import Image from 'next/legacy/image'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 min-h-screen/2 flex justify-center items-center">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/images/hero.jpg" // замените на свой путь к изображению
            alt="Иннокентий"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold text-white">
            Hi 👋, My name is Innokenty 👨‍💻
          </h1>
          <p className="text-2xl text-gray-300">Software Developer</p>
          <p className="text-lg text-gray-300">
            I develop various software. Telegram bots, Telegram mini-apps, VPN
            services, scraping projects, web apps and other projects.
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            <a
              href="https://github.com/Kennix88"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="https://img.shields.io/github/followers/Kennix88?logo=github&style=for-the-badge&color=0891b2&labelColor=1c1917"
                alt="Github"
              />
            </a>
            <a
              href="https://t.me/Kennix88"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="https://img.shields.io/badge/Send-2CA5E0?style=for-the-badge&color=0891b2&labelColor=1c1917&label=My%20Telegram&logo=telegram&logoColor=26A5E4"
                alt="Telegram"
              />
            </a>
            <a
              href="https://t.me/KennixDev"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="https://img.shields.io/endpoint?style=for-the-badge&color=0891b2&labelColor=1c1917&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2Fkennixdev&label=Channel"
                alt="Telegram Channel"
              />
            </a>
            <a
              href="https://t.me/KennixDevGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="https://img.shields.io/endpoint?label=Group&style=for-the-badge&color=0891b2&labelColor=1c1917&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2FKennixDevGroup"
                alt="Telegram Group"
              />
            </a>
            <a
              href="https://www.twitch.tv/kennix88"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="https://img.shields.io/twitch/status/kennix88?style=for-the-badge&color=0891b2&labelColor=1c1917&logo=twitch&logoColor=9146FF"
                alt="Twitch"
              />
            </a>
            <a
              href="https://www.youtube.com/@KennixDev"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="https://img.shields.io/youtube/channel/views/UC5h06O3iKZZTI1puc0T2fLA?label=Youtube&style=for-the-badge&color=0891b2&labelColor=1c1917&logo=youtube&logoColor=FF0000"
                alt="Youtube"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
