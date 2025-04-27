import { useRef, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUp, XIcon, MusicIcon } from 'lucide-react'
import Cerita from './Cerita'
import AboutContent from './about/AboutComponent'
import FotoCard from './FotoCard'
import { AnimatePresence, motion } from 'framer-motion'
import WelcomeMessageModal from './WelcomeMessageModal'
import ClosingOverlay from './shared/ClosingOverlay'
import { cn } from '@/lib/utils'

const songs = [
  { title: 'Enchanted - Taylor Swift', src: '/audio/enchanted.weba' },
  { title: 'Down Bad - Taylor Swift', src: '/audio/down.weba' },
  { title: 'Backburner - Niki', src: '/audio/backburner.weba' },
  {
    title: 'Oceans And Engines - Niki',
    src: '/audio/oceanandEngine.weba',
  },
  { title: 'Take A Chance With Me - Niki', src: '/audio/take.weba' },
  { title: 'Everything U Are - Hindia', src: '/audio/everything_you_are.weba' },
  {
    title: 'We Dont Talk Any More - Charlie Puth',
    src: '/audio/we_dont_talk_any_more.weba',
  },
]

const tabs = [
  { value: 'cerita', label: 'Cerita' },
  { value: 'foto', label: 'Foto' },
  { value: 'musik', label: 'Musik' },
  { value: 'tentang', label: 'Tentang' },
]
const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function SurakartaMemory() {
  const [currentSong, setCurrentSong] = useState(songs[0])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showTop, setShowTop] = useState(false)
  const [showPlayer, setShowPlayer] = useState(true)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showClosing, setShowClosing] = useState(false)

  const playSong = (song: (typeof songs)[0]) => {
    setCurrentSong(song)
    setTimeout(() => {
      audioRef.current?.play()
    }, 100)
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    setShowTop(scrollTop > 300)
  }

  const scrollToTop = () => {
    document.getElementById('content')?.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <WelcomeMessageModal></WelcomeMessageModal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='w-full min-h-screen bg-gradient-to-br from-[#a2b6f5] to-[#d6a0f7] text-gray-900 p-4'
      >
        <div className='w-full min-h-screen bg-gradient-to-br from-[#a2b6f5] to-[#d6a0f7] text-gray-900 p-4'>
          {/* GLOBAL AUDIO PLAYER */}
          {/* Tombol toggle & mini player */}
          <div className='fixed top-4 left-4 z-50 flex flex-col items-start space-y-2'>
            <button
              onClick={() => setShowPlayer(!showPlayer)}
              className='bg-white/80 text-gray-800 p-2 rounded-full shadow hover:bg-white transition'
            >
              {showPlayer ? <XIcon size={20} /> : <MusicIcon size={20} />}
            </button>

            {showPlayer && (
              <div className='bg-white/90 backdrop-blur-md rounded-lg p-3 shadow w-64'>
                <p className='text-sm font-medium mb-2'>{currentSong.title}</p>{' '}
                <audio
                  ref={audioRef}
                  controls
                  className='w-full'
                  src={currentSong.src}
                />
              </div>
            )}
          </div>

          {/* Closing modal */}
          <div className='fixed top-4 right-4 z-50'>
            <button
              onClick={() => setShowConfirmModal(true)}
              className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-semibold'
            >
              ✨ Selesai
            </button>
          </div>
          <AnimatePresence>
            {showConfirmModal && (
              <motion.div
                className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className='bg-white p-8 rounded-2xl shadow-2xl text-center space-y-6 max-w-md mx-auto'
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <h2 className='text-2xl font-bold text-gray-800'>
                    Udah selesai buka semua kontennya Sayang?
                  </h2>
                  <div className='flex justify-center gap-6'>
                    <button
                      onClick={() => {
                        setShowConfirmModal(false)
                        setShowClosing(true)
                      }}
                      className='px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold'
                    >
                      SUDAH SAYANG!!!
                    </button>
                    <button
                      onClick={() => setShowConfirmModal(false)}
                      className='px-6 py-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold'
                    >
                      BELUM SAYANG!!!
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <Tabs defaultValue='cerita' className='w-full max-w-4xl mx-auto'>
            <TabsList className='w-full flex justify-between gap-2 bg-[#c6c4fc] p-2 rounded-xl'>
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    'w-full px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out text-center',
                    'data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:scale-105',
                    'data-[state=inactive]:bg-white data-[state=inactive]:text-purple-600 data-[state=inactive]:hover:bg-purple-100'
                  )}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value='cerita'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key='cerita'
                  variants={fadeVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    className='mt-4 container-gradient backdrop-blur p-4 max-h-[90vh] overflow-y-auto'
                    id='content'
                    onScroll={handleScroll}
                  >
                    <CardContent className='max-w-3xl mx-auto space-y-6 text-base leading-relaxed text-gray-800 '>
                      <div className='flex justify-center items-center'>
                        <div className='space-y-6 px-2 md:px-4 w-full max-w-3xl'>
                          <Cerita />
                        </div>
                      </div>
                      {showTop && (
                        <Button
                          onClick={scrollToTop}
                          className='fixed bottom-8 right-8 rounded-full shadow-lg bg-white/70 backdrop-blur hover:bg-white'
                        >
                          <ArrowUp />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            <TabsContent value='foto'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key='musik'
                  variants={fadeVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <FotoCard></FotoCard>
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            {/* MUSIK */}
            <TabsContent value='musik'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key='musik'
                  variants={fadeVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className='mt-4 bg-white/30 backdrop-blur p-4'>
                    <CardContent>
                      <div className='space-y-2'>
                        {songs.map((song) => (
                          <button
                            key={song.title}
                            onClick={() => playSong(song)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition ${
                              currentSong.title === song.title
                                ? 'bg-purple-200 font-semibold'
                                : 'bg-white/60 hover:bg-white'
                            }`}
                          >
                            🎵 {song.title}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            <TabsContent value='tentang'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key='musik'
                  variants={fadeVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <AboutContent></AboutContent>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
      {showClosing && <ClosingOverlay />}
    </>
  )
}
