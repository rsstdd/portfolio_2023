import userData from '@constants/data'
import Image from 'next/image'
import { RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from './RainbowHighlight'

export default function Hero() {
  const colors = ['#39BAE6', '#d5ff80', '#FFD173', '#95E6C']
  return (
    <div className='flex flex-row justify-center items-start overflow-hidden'>
      <div className='w-full md:w-1/2 mx-auto text-[#5C6166] center md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className='text-4xl md:text-4xl font-bold text-[#5c6166] dark:text-[##707A8C] my-2 p-4'>
              Software Engineer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h3 className='text-4xl md:text-4xl font-bold text-[#5c6166] dark:text-[##707A8C] my-2 p-4'>
              Builder & Tinkerer
            </h3>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className='hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20'>
        <div className='w-3/4 '>
          <Image
            alt='avatar of the author'
            className='rounded-lg shadow'
            height='600'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            src={userData.avatarUrl}
            width='600'
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-90deg-up'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
                />
              </svg>
              <p className='font-mono dark:text-[#DFBFFF] text-[#A37ACC]'>That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
