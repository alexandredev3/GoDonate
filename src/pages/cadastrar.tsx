import { useRouter } from 'next/router';

import { useEffect } from "react";

export default function Cadastrar() {
  const router = useRouter();

  useEffect(() => {
    router.push('/maintenance');
  }, []);

  return <div />
}