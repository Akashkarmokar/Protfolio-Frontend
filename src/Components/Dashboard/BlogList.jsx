import { useEffect, useState } from 'react';
import Modal from '../Modal.jsx';
import RichTextEditor from '../RichTextEditor/Tiptap.jsx'; // Assuming you have a rich text editor component
import { useLocation, NavLink } from "react-router-dom";
import MultiSelectDropdown from '../MultiselectDropDownWithCheckBox.jsx';
import { gql, useMutation, useQuery } from '@apollo/client'; 
import { makeToast } from '../../Helpers/index.js';


const BlogList = () => {


    const [ open , setOpen ] = useState(false);
    const [ initialContent, setInitialContent ] = useState('<p>Hello world!</p>');
    const [ contentTitle, setContentTitle ] = useState(''); 
    const [ AllPosts, setAllPosts ] = useState([]);

    

    const { pathname } = useLocation();


    
    const CREATE_BLOG_POST = gql`
        mutation Mutation($inputData: CreatePostInput) {
            CreatePost(inputData: $inputData) {
                id
                title
                content
                status
            }
        }
    `;

    const PostListing = gql`
        query Query($inputData: PostListingInput) {
            PostListing(inputData: $inputData) {
                id
                title
                content
                status
            }
        }
    `;
    const [ createBlogPost, { data, loading, error: createPostError } ] = useMutation(CREATE_BLOG_POST);

    const { data: postListingData, loading: postListingLoading, error: postListingError } = useQuery(PostListing, {
        variables: {
            inputData: {
                status: 'ACTIVE',
            }
        },
        fetchPolicy: 'no-cache'
        // fetchPolicy: 'network-only'
    });
    console.log("LIST: ", postListingData)

    useEffect(() => {
        if (postListingData && postListingData.PostListing) {
            setAllPosts((prevPosts) => [...prevPosts, ...postListingData.PostListing]);
        }
        if (postListingError) {
            makeToast("Error fetching blog posts", "error");
            return;
        }
        
        return () => {
            setAllPosts([]);
        }
    }, [ postListingData, postListingError]);
    

    /**
     * Run If Model Closed Only
     */
    useEffect(() => {
        if(!open) {
            console.log("Modal closed");
        }
    }, [open])


    const handleCreateBlogPost = async () => {
        try {
            if(!contentTitle || !initialContent) {
                makeToast("Title and content cannot be empty", "error");
                return;
            }
            const response = await createBlogPost({
                variables: {
                    inputData: {
                        title: contentTitle,
                        content: initialContent,
                        status: 'ACTIVE' 
                    }
                }
            });
            console.log("RES: ", response)
            if (createPostError) {
                makeToast("Error creating blog post", "error");
                return;
            }
            
            setOpen(false); // Close the modal after successful creation
            setAllPosts((prevPosts) => [response.data.CreatePost,...prevPosts, ]);
        } catch (err) {
            if(createPostError) {
                makeToast(err.message, "error");
                return
            }
            makeToast("Something went wrong", "error");
            return
        }
    }

    
    return (
        <div className="flex-col justify-center items-start">
            {
                pathname === '/dashboard'
                ?
                <div className="flex justify-between items-center mb-6">
                {/* <h2 className="text-2xl font-bold mb-4">Blog List</h2> */}
                {
                    pathname === '/dashboard'  // This logic should be adjust after authentication is implemented
                    ? 
                    <button
                        className="bg-transparent text-2xl font-semibold hover:bg-[#64E09A] hover:text-[#242424] py-2 px-4 border border-[#64E09A] hover:border-transparent rounded"
                        onClick={() => setOpen(true)}
                    > Create Blog 
                    </button> : null
                }
                
                <Modal open = { open } onClose = { ()=> setOpen(false) }>
                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className='mx-auto border rounded-md w-full my-5'>
                            <input type="text" onChange={(e) => setContentTitle(e.target.value)} value={contentTitle} className=' w-full outline-none ring-0 focus:ring-0 focus:outline-none border bg-transparent  p-2 rounded' placeholder='Content Title' />
                        </div>
                        <div className='border rounded-md w-full my-5'>
                            {/* <input type="text" onChange={(e) => setContentTitle(e.target.value)} value={contentTitle} className=' w-full outline-none ring-0 focus:ring-0 focus:outline-none border bg-transparent  p-2 rounded' placeholder='Content Title' /> */}
                            <MultiSelectDropdown/>
                        </div>
                        
                        <RichTextEditor
                             initialContent={initialContent} 
                             setInitialContent={setInitialContent}
                        />
                        <button
                            className="mt-5 bg-transparent text-lg font-semibold hover:bg-[#64E09A] hover:text-[#242424] py-2 px-4 border border-[#64E09A] hover:border-transparent rounded"
                            onClick={
                                () => {
                                    /**
                                     * If APi call after make submit is successful then
                                     * setOpen(false) will close the modal
                                     */
                                    setOpen(true);
                                    handleCreateBlogPost()
                                }
                            }
                        > Submit
                        </button>
                    </div>
                </Modal>
            </div>
                :
                null
            }
            
            <ul className="space-y-5">
                {AllPosts.map((blog, index) => (
                    <li onClick={()=> console.log("HELLO")} key={index} className={`bg-[#3E403F] cursor-pointer rounded-lg shadow-md border border-[#00DF9A] min-w-[700px]`}>
                        <NavLink to={`/blog/${blog.id}`} className="flex flex-col items-start justify-start">
                            <h3 className="p-2 text-xl text-white-600 font-semibold">{blog.title}</h3>
                            <p className=" p-2 text-white-600">{blog.content}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;