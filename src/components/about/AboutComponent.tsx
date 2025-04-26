import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import TypingCardTabs from '@/components/TypingCardText'
export default function AboutContent() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Card className='bg-white/90 backdrop-blur-md shadow-lg rounded-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Tentang Web Ini
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6 text-gray-800 text-base leading-relaxed'>
          <TypingCardTabs></TypingCardTabs>
        </CardContent>
      </Card>
    </div>
  )
}
