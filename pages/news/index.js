
import Link from "next/link"



export default function News() {
    return (
      <>
      The news page
      <ul>
        <li>
          <Link href='/news/Nextjs'>
          NextJs is a Great Framework
          </Link>
          </li>
        <li>
          <Link href='/news/reactjs'>
          Reacts is a Great Library
          </Link>
          </li>
      </ul>
      </>
    )
  }
   