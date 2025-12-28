'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchInput from '@/src/components/elements/SearchInput';

export default function TopNav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get('search') || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const search = formData.get('search') as string;
    
    if (search) {
      router.push(`/?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="mx-auto flex max-w-5xl w-full justify-between items-center flex-row">
        <div className="flex flex-row flex-grow items-center gap-6">
          <div>
            <Link href="/">
              <Image src="https://static.eneba.games/branding/v2/logoFull.svg" alt="Logo" width={150} height={75} />
            </Link>
          </div>

          <div className="max-w-96 flex-0 flex-grow">
            <form onSubmit={handleSubmit}>
              <SearchInput defaultValue={currentQuery} />
            </form>
          </div>

          <div className="flex gap-1">
            <Image src="https://static.eneba.games/flags/lang/v2/lithuania.svg" alt="Country - LT" width={16} height={16} />
            <p className="text-sm">English EU | EUR</p>
          </div>

        </div>
      </div>  
    </div>
  );
}