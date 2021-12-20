import { useRouter } from 'next/router';

import { useEffect } from "react";

export default function Entrar() {
  const router = useRouter();

  useEffect(() => {
    router.push('/maintenance');
  }, []);

  return <div />
}