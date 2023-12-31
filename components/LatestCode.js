import userData from "@constants/data"
import { useState } from "react"

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories)

  return (
    <section className='bg-[#F1F1F1] dark:bg-[#1f2430] pb-40 mt-0'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10'>
          <h1 className='text-xl lg:text-6xl max-w-lg font-bold text-[#5c6166] my-20 md:my-0 md:text-white dark:text-[#5c6166] text-[#5C6166]enter lg:text-left'>
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className='mb-20 md:mb-0 px-8 py-4 rounded-md shadow-lg text-lfont-semibold flex flex-row space-x-4 items-center dark:text-[#5c6166]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-up-right-square'
              stroke='4'
              strokeWidth='4'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20'>
        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key='idx' />
          ))}
      </div>
    </section>
  )
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className='github-repo'>
      <h1 className='font-semibold text-l dark:text-[#565b66] text-[#5c6166]'>
        {latestRepo.name}
      </h1>
      <p className='text-base font-normal my-4 text-[#5c6166]'>
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className='font-semibold group flex flex-row space-x-2 w-full items-center'>
        <p>View Repository </p>
        <div className='transform  group-hover:translate-x-2 transition duration-300'>
          &rarr;
        </div>
      </a>
    </div>
  )
}
