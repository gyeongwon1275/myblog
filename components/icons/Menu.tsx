type MenuProps = { fill: string }

export default function Menu({ fill }: MenuProps): JSX.Element {
  return (
    <svg
      viewBox='0 0 24 24'
      height='24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 0h24v24H0z' fill={fill || 'none'}></path>
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
    </svg>
  )
}
