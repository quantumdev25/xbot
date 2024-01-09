import Link from 'next/link';
import Image from "next/image"

interface propsCourse{
  image: string,
  title: string, 
  description: string
}

export default function Cursos (props: propsCourse) {
  const {image, title, description} = props;
    return(
        <Link
        href="/"
        className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <div className="flex justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
            src={image}
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {title}
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {description}
        </p>
      </Link>
    )
}