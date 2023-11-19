export default function ArticleContainer({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <div className="divide-stone-500 flex-1 flex flex-col space-y-6 bg-gray-50">
            {children}
          </div>
    )
  }