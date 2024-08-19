import { titleFont } from "@/config/fonts";
import Image from "next/image";
import { Pagination, Title } from "@/components";
import { redirect } from 'next/navigation';
import { initialData } from "@/seed/seed";
import { ProductGrid } from '../../components/productos/ProductGrid';
import { getPaginatedProductsWithImages } from "@/actions";

// const products = initialData.products;

interface Props {
  searchParams: {
    page?: string;
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;


  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page })

  if (products.length === 0) {
    redirect('/');
  }

  console.log(products)

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2">

      </Title>

      <ProductGrid
        products={products}
      ></ProductGrid>

    <Pagination totalPages={ totalPages } />

    </>
  );
}
