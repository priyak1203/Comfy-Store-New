import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { categories, companies } = meta;
  const { search, category, company, order, price, shipping } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        name="category"
        label="select category"
        list={categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANY */}
      <FormSelect
        name="company"
        label="select company"
        list={companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* SORT BY */}
      <FormSelect
        name="order"
        label="sort by"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm mt-4">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm mt-4">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
