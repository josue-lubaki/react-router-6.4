import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
// import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import DeferredBlogPosts, { loader as deferredPostsLoader } from './pages/DeferredBlogPosts';
import ErrorPage from './pages/Error';
import NewPostPage, { action as NewPostAction } from './pages/NewPost';
import PostDetailPage, { loader as postDetailLoader } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <WelcomePage /> },
			{
				path: '/blog',
				element: <BlogLayout />,
				children: [
					{
						index: true,
						element: <DeferredBlogPosts />,
						loader: deferredPostsLoader,
					},
					{
						path: ':id',
						element: <PostDetailPage />,
						loader: postDetailLoader,
					},
					{
						path: 'new',
						element: <NewPostPage />,
						action: NewPostAction,
					},
				],
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
