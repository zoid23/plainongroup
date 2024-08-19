
'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

  const [ displayImage, setDisplayImage ] = useState( product.images[0] );


  return (
    <div className="rounded-md overflow-hidden fade-in">
{/* 
        <Image
        src={`/products/${ product.images[0]}`}
        alt={product.title}
        className="w-full object-cover rounded"
        width={ 500 }
        height={ 500 }
        ></Image>

        <div className='p-4 flex flex-col'>

            <Link href={`/product/${product.slug}`}>
                {product.title}
            </Link>

            <span className='font-bold'>${product.price}</span>

        </div> */}

        
      <Link href={ `/producto/${ product.slug }` }>
        <Image
          src={ product.images[0] }
          alt={ product.description }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            setDisplayImage(product.images[0]);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            setDisplayImage(product.images[0]);
          }}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/producto/${ product.slug }` }>
          { product.description }
        </Link>
        <span className="font-bold">${ product.price }</span>
        <span className="font-sans">{ product.name}</span>
        <span className="font-thin">{ product.description }</span>

      </div>

    </div>
  );
};
