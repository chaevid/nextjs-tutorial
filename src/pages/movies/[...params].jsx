import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  // console.log(router);
  // console.log(router.query);
  // console.log(router.query.params);
  // console.log(title);
  // console.log(id);
  // "Loading ..." 메세지는 홈페이지를 거지 않고 상세페이지로 바로 접속할 때 발생
  return (
    <>
      <Seo title={title} />
      <h1>{title || 'Loading ...'}</h1>
      <h4>Detail Movie ID : {id}</h4>
    </>
  );
}

// # Server Side Rendering
export async function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
