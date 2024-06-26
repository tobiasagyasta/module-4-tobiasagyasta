import { useField } from "formik";

const SingleInput = (props: any) => {
	const [field, meta, helpers] = useField(props.name);

	const setTouchOnFocus = () => {
		helpers.setTouched(true);
	};
	return (
		<>
			<input
				autoComplete='off'
				className='block my-2 py-2 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-auto focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				type={props.type}
				name={props.name}
				onChange={field.onChange}
				value={field.value}
				onFocus={setTouchOnFocus}
				placeholder=''
			/>
			{meta.error && <div className='text-sm text-red-600'>{meta.error}</div>}
		</>
	);
};
export default SingleInput;
