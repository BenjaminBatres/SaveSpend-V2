import Link from 'next/link'

interface IProps {
    headerDesc: string
    children: React.ReactNode
}

export default function AuthForm({headerDesc, children}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Purple-Theme">
      <div className="py-10 px-4 w-full">
        <div className="max-w-200 mx-auto w-full space-y-4">
          <div className="flex flex-col items-center gap-2">
            <h2>
              <Link href={"/"} className="text-3xl font-bold text-Purple">
                SaveSpend
              </Link>
            </h2>
            <p className="uppercase text-Gray-purple">
              {headerDesc}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
