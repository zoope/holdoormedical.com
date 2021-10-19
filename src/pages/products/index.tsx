import { history } from 'umi';

export default function ProductsPage() {
  const products = (window as any).products;

  const renderProducts = () => {
    return products.map((item: any) => (
      <a
        key={item.code}
        onClick={() => history.push(`/product/${item.code}`)}
        style={{ marginRight: '20px' }}
      >
        {item.title}
      </a>
    ));
  };
  return <div>{renderProducts()}</div>;
}
