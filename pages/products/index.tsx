import { fetchProductList } from '../../api/product';
import { ProductType } from '../../api/product/type';
import { ProductImage } from './style';

type Props = {
  productList: ProductType[];
};

const Product = ({ productList }: Props) => {
  return (
    <div>
      <h1>Product List</h1>

      {productList.map((product) => {
        return (
          <div
            style={{
              width: '240px',
            }}
            key={product.uuid}
          >
            <h4>{product.name}</h4>
            <img
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '4px',
                objectFit: 'cover',
              }}
              src={product.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Product;

export const getStaticProps = async () => {
  const { data } = await fetchProductList();
  return {
    props: {
      productList: data,
    },
  };
};
