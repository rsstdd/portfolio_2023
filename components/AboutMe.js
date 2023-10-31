import userData from "@constants/data"

export default function AboutMe() {
  return (
    <section className='bg-[#FCFCFC] dark:bg-[#242936]'>
      <div className='max-w-6xl mx-auto h-48 bg-[#FCFCFC] dark:bg-[#242936]'>
        <h1 className=' text-l md:text-xl font-bold py-20 text-[#5C6166] center md:text-left'>
          {userData.about.intro}
        </h1>
      </div>
      <div className='bg-[#FCFCFC] mt-10 dark:bg-[#242936]'>
        <div className='text-[#5C6166] container max-w-6xl mx-auto pt-20'>
          <h2 className='leading-loose text-xl mb-5 font-semibold text-[#FFB454] '>
            Career Overview:
          </h2>
          <ul>
            {userData.about.description?.map((desc, idx) => (
              <ul key={idx} className='text-l text-[#5c6166] mb-4 dark:text-[#CCCAC2] '>
                {desc}
              </ul>
            ))}
          </ul>
        </div>
      </div>
      <div className='bg-[#FCFCFC]  dark:bg-[#242936] px-4'>
        <div className='pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20'>
          <div className='inline-flex flex-col'>
            <div>
              <h1 className='text-xl font-semibold text-[#5c6166] dark:text-[#d5ff80]'>
                Contact
              </h1>
              <p className='text-[#5c6166] mt-4 dark:text-[#CCCAC2]'>
                <a
                  href={`mailto:${userData.email}`}
                  className='text-[#5c6166] border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-[#CCCAC2]'>
                  rssmtdd@gmail.com
                </a>{' '}
              </p>
            </div>
            <div className='mt-8'>
              <h1 className='text-xl font-semibold text-[#5c6166] dark:text-[#d5ff80]'>
                Resume
              </h1>
              <p className='text-[#5c6166] mt-4 dark:text-[#CCCAC2]'>
                <a
                  href={userData.resumeUrl}
                  target='__blank'
                  className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-[#CCCAC2]'>
                  CV
                </a>{' '}
              </p>
            </div>
            <h1 className='text-xl font-semibold text-[#5c6166] mt-8 dark:text-[#d5ff80]'>
              Social Links
            </h1>
            <div className='mt-4 ml-4'>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.socialLinks.github}
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-[#5c6166] font-mono relative overflow-hidden dark:text-[#CCCAC2]'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <a
                  href={userData.socialLinks.linkedin}
                  className='flex flex-row items-center space-x-4 group'>
                  <div className='my-4'>&rarr;</div>
                  <div className='text-lg text-[#5c6166] font-mono relative overflow-hidden dark:text-[#CCCAC2]'>
                    <div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2 pb-8'>
            <h1 className='dark:text-[#FFB454] text-3xl rounded-md px-2 py-1 inline-block font-bold text-[#F2AE49]'>
              Tech Stack
            </h1>
            <div className='flex-wrap'>
              {userData.keywords.map((item) => (
                <p className='flex flex-col text-[#5c6166] dark:text-[#CCCAC2] '>{`${item} \n`}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
