import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-full item-centers justify-center'>
      <Image src='/imgs/shoe-bg.png' alt='shoe-bg' width={100} height={500} />
    </div>
  ) 
}

export default Page