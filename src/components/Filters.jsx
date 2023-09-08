import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';

const Filters = () => {
  const { meta } = useLoaderData();
  const { categories, companies } = meta;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        name="category"
        label="select category"
        list={categories}
        size="select-sm"
      />
      {/* COMPANY */}
      <FormSelect
        name="company"
        label="select company"
        list={companies}
        size="select-sm"
      />
      {/* SORT BY */}
      <FormSelect
        name="order"
        label="sort by"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange name="price" label="select price" size="range-sm" />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
