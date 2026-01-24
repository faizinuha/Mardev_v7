import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full py-6 border-t border-border mt-16'>
      <div className='max-w-6xl mx-auto px-4 text-center space-y-2'>
        <p className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} <Link href="https://github.com/faizinuha" target="_blank" className='font-medium text-primary hover:underline'>Zaki</Link>. All rights reserved.
        </p>
        <p className='text-xs text-muted-foreground'>
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
