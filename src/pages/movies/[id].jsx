import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router);
  // "Loading ..." 메세지는 홈페이지를 거지 않고 상세페이지로 바로 접속할 때 발생
  return (
    <>
      <h1>Detail Movie ${router.query['id']}</h1>
      {/* <h4>{router.query.id}</h4> */}
      <h4>{router.query.title || 'Loading ...'}</h4>
    </>
  );
}
