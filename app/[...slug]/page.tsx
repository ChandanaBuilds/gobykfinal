import { Site } from '@/components/site'

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  return <Site page={slug.join('-')} />
}
