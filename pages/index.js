import useSWR from 'swr'
import Content from './components/content'

export default function Home() {
  let title = 'ともすた'

  // ここから追加
  const fetcher = (data) => data
  const {data, error} = useSWR('/api/hello', fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
    <Content>
      <h1>ともすたた</h1>
      <p>学ぶ。をちゃんと</p>
      <p>{data.message}</p>
    </Content>
    </>
  )
}