import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LandingPage = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'sheii') {
      onUnlock()
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#fef6ff] via-[#e0d7ff] to-[#f3e7ff] flex items-center justify-center p-6'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-2xl w-full max-w-md text-center space-y-6'
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='text-2xl font-bold text-purple-800'
        >
          Halo, Sheilla 💜
        </motion.h1>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='text-sm text-gray-700'
        >
          Hayo kira-kira apa passwordnya? 😋
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          animate={shake ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          className='space-y-4'
        >
          <Input
            placeholder='Masukin password rahasia...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`transition-all ${
              error ? 'border-red-400 ring-red-300' : ''
            }`}
          />
          <Button
            type='submit'
            className='w-full bg-purple-600 hover:bg-purple-700'
          >
            Buka 💌
          </Button>
        </motion.form>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-sm text-red-500'
          >
            Eitss... salah password yaa 😝 Hintnya adalah "nama panggilan" 5
            huruf
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default LandingPage
