'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { TypingText } from './shared/TypingText'
import dynamic from 'next/dynamic'

// const TypingText = dynamic(() => import('@/components/shared/TypingText'), {
//   ssr: false,
// })

const cards = [
  {
    title: 'Alasan Kenapa Web Ini Dibikin',
    text: '   Alasan mengapa web ini dibikin adalah disaat aku membuat tulisan pada tab “cerita” tersirat pikiran bahwa “masa iya ngasih nya berupa dokumen aja? Kayaknya bisa lebih oke deh”, pikiran tersebut tetap ada di kepala namun aku belum menemukan cara yang menarik untuk dilakukan. Lalu entah kapan aku melihat sebuah landing page lucu berlatar ungu, pikiran ku langsung membayangkan Sheilla dan muncul ide untuk membungkus cerita yang ku bikin itu ke dalam sebuah web ini',
    quote: '“Mempersembahkan yang terbaik untuk orang tersayang”',
  },
  {
    title: 'Penilaianku Terhadap Sheilla',
    text: '    Sheilla, pertama kali aku bertemu dia di kantor tempat kita bekerja, penilaian pertama ku terhadapnya biasa saja tanpa reaksi apapun, setelahnya aku bertemu dengannya di saat pulang dari acara kantor yaitu outing, kita berada di satu bus yang sama bahkan tempat duduk kita depan-belakang. Awalnya ku kira bukan Sheilla yang ku maksud, namun aku memberanikan diri untuk chat dia duluan dan ternyata itu benar dia. Momen selanjutnya kita bertemu di kantor lama para divisi IT bekerja yaitu Cideng, sempat terjadi beberapa momen lucu di sana yang melibatkannya. Setelah dari momen itu, kita bertemu lagi pada acara kantor di Taman Impian Jaya Ancol. Kita satu tim dan menghabiskan cukup banyak waktu pada kegiatan tersebut. Selanjutnya hubungan kita cukup membaik, semakin dekat, dan semakin akrab. Sampai tiba momen dimana aku memberanikan diri untuk mengajaknya nonton bioskop lalu dia mengiyakan tawaran ku tersebut. Mulai lah kisah cinta ku dengannya pada saat itu.',
    quote: '“Sebuah kisah dengan seseorang yang berakhir dengan rasa nyaman”',
  },
  {
    title: 'Harapan Kedepannya Sekaligus Penutup ',
    text: '   Untuk harapannya dari aku, semoga apa yang kita harapankan bisa terwujud, semoga hubungan kita baik - baik saja, semoga kita bisa menjadi pribadi yang lebih baik lagi kedepannya, dari sisi karir semoga membaik ya untuk kita, buat modal kalo mau travelling hihi.',
    quote: '“Menjadi lebih baik di kemudian hari”',
  },
]

export default function TypingCardTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showFarewellModal, setShowFarewellModal] = useState(false)
  const { title, text, quote } = cards[activeIndex]

  return (
    <motion.div
      className='my-10'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Tombol Finish */}
      <div className='flex justify-center mb-6'>
        <button
          onClick={() => setShowConfirmModal(true)}
          className='px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition'
        >
          Finish
        </button>
      </div>

      {/* Tabs */}
      <div className='flex flex-wrap justify-center gap-2 mb-6'>
        {cards.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 ${
              activeIndex === idx
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 border-purple-400 hover:bg-purple-100'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Card content */}
      <Card className='shadow-xl transition-transform hover:scale-[1.01]'>
        <CardHeader>
          <motion.div
            className='mb-2 border-b-2 border-purple-400 inline-block pb-1'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2 }}
          >
            <CardTitle className='text-xl'>{title}</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p
            className='text-base leading-relaxed text-gray-800'
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            <TypingText text={text} />
          </motion.p>

          <motion.blockquote
            className='mt-6 italic text-purple-700 border-l-4 border-purple-300 pl-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            {quote}
          </motion.blockquote>
        </CardContent>
      </Card>

      {/* Modal Konfirmasi */}
      <AnimatePresence>
        {showConfirmModal && (
          <motion.div
            className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white rounded-xl p-6 space-y-4 text-center'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className='text-lg font-bold'>
                Udah selesai buka semua kontennya?
              </h2>
              <div className='flex justify-center gap-4 mt-4'>
                <button
                  onClick={() => {
                    setShowConfirmModal(false)
                    setShowFarewellModal(true)
                  }}
                  className='px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600'
                >
                  Iya
                </button>
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className='px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400'
                >
                  Belum
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Farewell */}
      <AnimatePresence>
        {showFarewellModal && (
          <motion.div
            className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white rounded-xl p-6 space-y-4 text-center max-w-lg mx-auto'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <FarewellTyping />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FarewellTyping() {
  const farewellText =
    '    🌸Wahhhh ga kerasa ya sudah di bagin akhir web ini hihi, gimana suka kah? jangan lupa kasih feedback yaaa, Terima kasih ya sudah membuka semua bagian di web ini. Web yang telah ku buat dengan sepenuh hati, menjadi salah satu effort terbesar yang aku usahakan. Tidak kerasa sudah 1 tahun ya kita memulai hubungan ke arah yang lebih dekat. Terima kasih sudah ngasih aku kesempatan untuk tetap berhubungan baik dengan kamu bahkan sampai melakukan hal romantis, Terima kasih sudah mau memberikan perasaan romantis dan juga perasaan senang selama ini. Aku tau kita tidak bisa selamanya seperti ini, pasti akan waktunya dimana kita terpisah oleh jarak, namun bukan jarak dalam pengertian matematis, namun jarang dalam arti hubungan. Terakhir yang ingin ku ucapkan. 💙Terima kasih banyak atas semuanya Sheilla Anjani, Aku sayang kamu selalu, Akbar Zidan💜🌸'
  return (
    <TypingText text={farewellText} speed={40} farewell={true}></TypingText>
  )
}
