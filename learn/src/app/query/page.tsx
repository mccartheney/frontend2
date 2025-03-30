"use client"

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

const queryClient = new QueryClient()

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const PostsList = () => {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Erro ao buscar posts')
      }
      return response.json()
    }
  })

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar os posts</div>

  return (
    <div className="space-y-4">
      {posts?.map(post => (
        <div key={post.id} className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-2">{post.body}</p>
        </div>
      ))}
    </div>
  )
}

const Page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Posts do JSONPlaceholder</h1>
        <PostsList />
      </div>
    </QueryClientProvider>
  )
}

export default Page