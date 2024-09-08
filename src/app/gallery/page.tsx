'use client'
import NavBar from '../components/NavBar'
import ImageGallery from '../components/ImageGallery'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[black]'>
      <NavBar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <NavBar />
        <ImageGallery />
      </div>
    </main>
  )
}
