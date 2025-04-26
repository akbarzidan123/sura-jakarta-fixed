import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import CollapseCard from './CollapseCard'

const FotoCard = () => {
  const fotoListDannn = [
    {
      src: '/img/AZ1.jpg',
      caption: 'Foto yang pose nya lucu gituuuu',
      style: 'object-cover w-full h-[250px] object-[center_30%]',
      positionX: '50%',
      positionY: '60%',
    },
    {
      src: '/img/AZ2.jpg',
      caption:
        'pose khas yang selalu menjadi pembahasan kita yaitu pose "mau tium"',
      style: 'object-cover w-full h-[250px] object-[100%_30%]',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ3.jpg',
      caption: 'Keliatan beda banget outfitnyaaa, lagi ada di acara genshin',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ4.jpg',
      caption: 'Foto close up dengan make up yang cakeppp',
      style: 'object-cover w-full h-[250px] object-[center_90%]',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ5.jpg',
      caption: 'awww pake outfit lebaran lucuuu banget sukaaa',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ6.jpg',
      caption: 'Pasminahan banget yaaa jadi terlihat bulet hihi',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ7.jpg',
      caption: 'FOTO BARENG HAMPERS AKUUUUUU',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ8.jpg',
      caption: 'Another pasminah outfit hehe',
      style: 'object-cover w-full h-[250px] object-[center_100%]',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ9.jpg',
      caption: 'Cute Pose',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ10.jpg',
      caption: 'Itu bibirnya mau dicium ya? 😈',
      style: 'object-cover w-full h-[250px] object-[center_30%]',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ11.jpg',
      caption: 'bare faceee bleh kali ya',
      style: 'object-cover w-full h-[250px] object-[center_30%]',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/AZ12.jpg',
      caption: 'maw sholat nakal dlu',
      style: 'object-cover w-full h-[250px] object-[center_30%]',
      positionX: '50%',
      positionY: '50%',
    },
  ]
  const fotoListSheii = [
    {
      src: '/img/SA1.jpg',
      caption: 'dateng ke event the wicked yg ada banyak instalasi lucuuu',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA2.jpg',
      caption: 'kayanya ini sehari sebelum aku potong rambut dehhh ahahah',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA3.jpg',
      caption: 'potongan favoritkuuu karena sesuai keinginanku bangeeeet',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA4.jpg',
      caption: 'chilling di kintamani 😆',
      positionX: '50%',
      positionY: '90%',
    },
    {
      src: '/img/SA5.jpg',
      caption: 'enak bgt liatin kapal di pulau kecil, bener2 biruuuuuuuu semua',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA6.jpg',
      caption: 'harusnya aku udah pernah ngasih si wkwk, foto lebaran',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA7.jpg',
      caption: 'I LOVE CAUSE IT’S SO FULL OF PURPLE!!!',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA8.jpg',
      caption: 'foto terakhir sebelum balik jkt, aku foto di depan SMP aku 😆',
      positionX: '50%',
      positionY: '100%',
    },
    {
      src: '/img/SA9.jpg',
      caption: 'office look',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA10.jpg',
      caption: 'office look 2',
      positionX: '30%',
      positionY: '50%',
    },
    {
      src: '/img/SA11.jpg',
      caption: 'bare faceee bleh kali ya',
      positionX: '50%',
      positionY: '50%',
    },
    {
      src: '/img/SA12.jpg',
      caption: 'maw sholat nakal dulu',
      positionX: '50%',
      positionY: '50%',
    },
  ]

  return (
    <>
      <CollapseCard title='FOTO - FOTO FAVORIT SHEILLA'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {fotoListSheii.map((foto, idx) => (
            <div
              key={idx}
              className='bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.03]'
            >
              <Image
                src={foto.src}
                alt={`Foto ${idx + 1}`}
                width={350}
                height={500}
                className={`object-cover w-full h-[400px] object-[${foto.positionX}_${foto.positionY}]`}
              />
              <div className='p-4 bg-gradient-to-t from-gray-100 to-white'>
                <p className='text-sm text-gray-700 font-medium text-center italic'>
                  {foto.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CollapseCard>

      <CollapseCard title='FOTO - FOTO FAVORIT DEVELOPER'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {fotoListDannn.map((foto, idx) => (
            <div
              key={idx}
              className='bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.03]'
            >
              <Image
                src={foto.src}
                alt={`Foto Dev ${idx + 1}`}
                width={350}
                height={500}
                className={`object-cover w-full h-[400px] object-[${foto.positionX}_${foto.positionY}]`}
              />
              <div className='p-4 bg-gradient-to-t from-gray-100 to-white'>
                <p className='text-sm text-gray-700 font-medium text-center italic'>
                  {foto.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CollapseCard>
    </>
  )
}

export default FotoCard
