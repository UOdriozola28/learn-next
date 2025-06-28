import { Inter, Lusitana, Onest } from 'next/font/google'

export const onest = Onest({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const inter = Inter({
  weight: '200',
  subsets: ['latin']
})

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400'
})