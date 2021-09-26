import { useDispatch } from 'react-redux';
import {
	useGetBooksQuery,
	useDeleteBookMutation,
	useUserLoginMutation,
} from '../app/services/bookServices.js';
import { setToken } from '../app/slices/authSlice';
const Books = () => {
	const dispatch = useDispatch();
	const { data = [], isLoading, isError } = useGetBooksQuery();
	const [userLogin] = useUserLoginMutation();
	const [deleteBook, { isLoading: loading, isError: error }] =
		useDeleteBookMutation();
	if (isLoading)
		return (
			<div className='container'>
				<h1>Loading</h1>
			</div>
		);
	return (
		<div className='container'>
			<button
				onClick={async () => {
					await userLogin({ email: 'shakilkhan@gmail.com', password: '12345' });
					dispatch(setToken('sfsdfsdfsdfsdfsdf'));
				}}>
				user login
			</button>
			{data.map((book) => (
				<div className='list' key={book.id}>
					<div className='list--name'>
						<span>name</span>
						{book.name}
					</div>
					<div className='list--author'>
						<span>author</span>
						{book.author}
					</div>
					<div className='list--button'>
						<button onClick={() => deleteBook(book.id)}>Delete Book</button>
					</div>
				</div>
			))}
		</div>
	);
};
export default Books;