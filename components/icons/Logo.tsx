import Image from 'next/image'

export default function Logo(): JSX.Element {
  return (
    <Image
      data-testid='Logo'
      src='/assets/light_logo.png'
      alt='Logo'
      width={151}
      height={32}
    />
  )
}
