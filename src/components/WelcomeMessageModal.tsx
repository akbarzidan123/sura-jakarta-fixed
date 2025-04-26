'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { motion } from 'framer-motion'

const messages = [
  '🤗 Sebelum mulai menjelajahi web ini, dibaca dulu ya beberapa pesan ini sampai baca text "selesai" jangan dipencet dulu tombol "close" nya 😈',
  '🎵 Jangan lupa ke tab musik ya buat milih musik kesukaan kamu!!! 🎵',
  '📖 Kalo udah milih musik coba buka tab cerita, ada tulisan yang aku janjiin itu loh. 📖',
  '❤️ Buka tab foto deh, ada orang cantik tuh disana. ❤️',
  '💜 Tab Tentang itu merupakan tab terakhir di web ini, banyak hal yang aku ungkapin disana. 💜',
  '💙 SUDAH SELESAI PESAN PEMBUKA INI, SELAMAT MENIKMATI WEB NYA SAYANG. 💙',
]

export default function WelcomeMessageModal() {
  const [open, setOpen] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-2xl p-8 flex flex-col justify-between items-center gap-4 '>
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className='text-lg font-medium text-purple-1000 text-center space-y-4'
        >
          {messages[currentIndex]}
        </motion.p>
        <button
          onClick={() => setOpen(false)}
          className='mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow-lg transition'
        >
          Close!
        </button>
      </DialogContent>
    </Dialog>
  )
}
