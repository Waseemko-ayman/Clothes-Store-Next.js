import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Layer from '@/components/atoms/Layer';
import React from 'react';

const tabeleData = [
  {
    id: 1,
    title: 'Cart Subtotal',
    price: 335,
  },
  {
    id: 2,
    title: 'Shipping',
    status: 'Free',
  },
  {
    id: 3,
    title: 'Total',
    price: 335,
  },
];

const ApplyCoupon = () => {
  const TitleStyle = 'text-[var(--fifth-color)] text-lg mb-4 font-bold';
  const formElStyle = 'h-[35px] outline-none';
  const tdStyle = 'p-2.5 border border-[var(--seven-color)] w-[50%]';
  const highlite = (row: any) =>
    row.title.toLowerCase() === 'total'
      ? 'text-[var(--fifth-color)] font-bold'
      : 'text-[var(--six-color)]';
  return (
    <Layer>
      <Container otherClassName="flex items-start justify-between gap-5 max-[991px]:flex-wrap max-[991px]:justify-center max-[991px]:gap-[30px]">
        <div>
          <h3 className={TitleStyle}>Apply Coupon</h3>
          <form className="flex items-center gap-2.5 max-w-full w-full max-[991px]:flex-col max-[991px]:text-center">
            <input
              type="text"
              placeholder="Enter Your Coupon"
              className={`${formElStyle} p-2.5 max-w-full w-[400px] border border-[var(--seven-color)] max-md:w-[300px] placeholder:transition-all placeholder:duration-300 focus:placeholder:opacity-0`}
            />
            <Button
              variant="primary"
              otherClassName="py-[5px] px-[15px] max-[991px]:w-full"
            >
              Apply
            </Button>
          </form>
        </div>
        <div className="max-w-full w-[600px] border border-[var(--seven-color)] p-[30px]">
          <h3 className={TitleStyle}>Cart totals</h3>
          <table className="max-w-full w-full border-0 mb-[15px]">
            <tbody>
              {tabeleData.map((row) => (
                <tr key={row.id}>
                  <td className={`${tdStyle} ${highlite(row)}`}>{row.title}</td>
                  <td className={`${tdStyle} ${highlite(row)}`}>
                    {row.price ? `$${row.price}` : row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button variant="primary" otherClassName="!py-2.5 !px-5">
            Proceed to checkout
          </Button>
        </div>
      </Container>
    </Layer>
  );
};

export default ApplyCoupon;
