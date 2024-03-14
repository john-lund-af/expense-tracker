import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { categories, capitalize, Expense } from './utils';

interface Props {
  handleExpense: (expense: Expense) => void
}

const schema = z.object({
  description: z.string().min(3, { message: 'Description must be at least 3 characters' }),
  amount: z.number({ invalid_type_error: 'Amount field is required' }),
  category: z.enum(categories, { errorMap: () => ({ message: 'Category is required' }) })
});

type FormData = z.infer<typeof schema>


const Form = ({ handleExpense }: Props) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<FormData>({ resolver: zodResolver(schema) })


  const handleFormData = (data: FieldValues) => {
    if (isValid) {
      const id = Date.now().toString();
      const description = data.description;
      const amount = data.amount;
      const category = data.category;

      handleExpense({ id, description, amount, category });

      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormData)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">Description</label>
        <input {...register('description')} id="description" type="text" className="form-control" />
        {errors.description && <div className="alert alert-danger mt-2">{errors.description.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input {...register('amount', { valueAsNumber: true })} id="amount" type="number" className="form-control" />
        {errors.amount && <div className="alert alert-danger mt-2">{errors.amount.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select {...register('category')} name="category" id="category" className="form-select">
          <option value=""></option>
          {categories.map(category => <option key={category} value={category}>{capitalize(category)}</option>)}
        </select>
        {errors.category && <div className="alert alert-danger mt-2">{errors.category.message}</div>}
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form