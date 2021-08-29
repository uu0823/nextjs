import Link from 'next/link'

export default function About() {
  return (
    <>
    <h1>About</h1>
    <Link href={`/`}><a>トップへ</a></Link>
    <Link href={`/`}><button>トップへ</button></Link>
    </>
  )
}