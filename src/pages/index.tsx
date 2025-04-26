// 'use client'
// import { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import SurakartaMemory from '../components/SurakartaMemory'
// import LandingPage from '../components/LandingPage'

// export default function Home() {
//   const [unlocked, setUnlocked] = useState(false)

//   return (
//     <AnimatePresence mode='wait'>
//       {!unlocked ? (
//         <motion.div
//           key='landing'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <LandingPage onUnlock={() => setUnlocked(true)} />
//         </motion.div>
//       ) : (
//         <motion.div
//           key='main'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <SurakartaMemory />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

'use client'
import { useRouter } from 'next/navigation'
import LandingPage from '../components/LandingPage'

export default function Home() {
  const router = useRouter()

  return <LandingPage onUnlock={() => router.push('/main')} />
}
