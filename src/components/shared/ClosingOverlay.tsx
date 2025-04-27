'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TypingText } from './TypingText'
const ClosingOverlay = () => {
  const farewellText =
    '    🌸Wahhhh ga kerasa ya sudah di bagin akhir web ini hihi, gimana suka kah? jangan lupa kasih feedback yaaa, Terima kasih ya sudah membuka semua bagian di web ini. Web yang telah ku buat dengan sepenuh hati, menjadi salah satu effort terbesar yang aku usahakan. Tidak kerasa sudah 1 tahun ya kita memulai hubungan ke arah yang lebih dekat. Terima kasih sudah ngasih aku kesempatan untuk tetap berhubungan baik dengan kamu bahkan sampai melakukan hal romantis, Terima kasih sudah mau memberikan perasaan romantis dan juga perasaan senang selama ini. Aku tau kita tidak bisa selamanya seperti ini, pasti akan waktunya dimana kita terpisah oleh jarak, namun bukan jarak dalam pengertian matematis, namun jarak dalam arti hubungan. Semoga sisa rasa sayang ini tersampaikan sepenuhnya melalui web ini. Terakhir yang ingin ku ucapkan. 💙Terima kasih banyak atas semuanya Sheilla Anjani, Aku sayang kamu selalu, Akbar Zidan💜🌸'

  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 w-full'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='bg-white text-white/80 p-8 rounded-2xl shadow-2xl w-full max-w-4xl text-center'
        // bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500
      >
        <h2 className='text-3xl font-bold text-lg text-purple-600 leading-relaxed text-center tracking-tight'>
          Terima Kasih Sudah Menjelajahi Web Ini
        </h2>
        <TypingText text={farewellText} speed={10} farewell={true}></TypingText>
      </motion.div>
    </div>
  )
}

export default ClosingOverlay
