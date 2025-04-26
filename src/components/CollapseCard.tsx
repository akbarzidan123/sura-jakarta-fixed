'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const CollapseCard = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mb-6'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left p-4 bg-purple-200 rounded-2xl text-lg font-bold shadow-md hover:bg-purple-300 transition-all'
      >
        {title}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='overflow-hidden p-4 mt-2 bg-white rounded-2xl shadow-md'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CollapseCard
