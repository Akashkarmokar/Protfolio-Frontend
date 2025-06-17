import { useEffect, useState } from 'react';
import Modal from '../Modal.jsx';
import RichTextEditor from '../RichTextEditor/Tiptap.jsx'; // Assuming you have a rich text editor component
import { useLocation, NavLink } from "react-router-dom";
import MultiSelectDropdown from '../MultiselectDropDownWithCheckBox.jsx';
import { gql, useMutation, useQuery } from '@apollo/client'; 
import { makeToast } from '../../Helpers/index.js';


const PostEdit = ({ blogDetails, setAllPosts, setModalClose })=> {
    const [ contentTitle, setContentTitle ] = useState(blogDetails?.title?? "");
    const [ content, setContent ] = useState(blogDetails?.content?? "");
    const [ selectedStatus, setSelectedStatus ] = useState(blogDetails?.status ?? "");

    useEffect(()=> {
        // console.log("Modal UseEffect Called !!");
        return () => {
            // console.log("Post Edit Modal Unmount Fn Called !!")
        }
    }, [])
    const UpdatePostMutation = gql`
        mutation Mutation($inputData: UpdatePostInput) {
            UpdatePost(inputData: $inputData) {
                content
                id
                short_preview_content
                status
                title
            }
        }  
    `;
    const [ updatePostContent, { data:PostUpdatedData, loading:doesPostUpdateOnLoad, error: postUpdateError }] = useMutation(UpdatePostMutation); 


    const handleSubmitAction = async (e)=> {
        try {
            const response = await updatePostContent({variables: {
                inputData: {
                    id: blogDetails.id,
                    title: contentTitle,
                    content: content
                }
            }})
            // console.log("RES: ", response)
            if(response?.data){
                setAllPosts((preValue)=> {
                    const idx = preValue.findIndex((value)=> {
                        // console.log("stat id: ", value.id, "updated value id: ", response?.data?.UpdatePost?.id)
                        return value.id === response?.data?.UpdatePost?.id
                    })
                    // console.log("Index: ", idx)
                    if(idx !== -1) {
                        preValue.splice(idx, 1, {...response?.data?.UpdatePost });
                        return preValue;
                    }
                })
                makeToast("Post Updated successfully")
            }
            setModalClose()
            return;
        }catch(err) {
            makeToast("Someting went wrong.")
            return;
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='mx-auto border rounded-md w-full my-5'>
                <input 
                    type="text" 
                    onChange={(e) => setContentTitle(e.target.value) } 
                    value={contentTitle} 
                    className='w-full outline-none ring-0 focus:ring-0 focus:outline-none border bg-transparent  p-2 rounded' 
                    placeholder='Content Title' 
                />
            </div>
            <div 
                className='border rounded-md w-full my-5'
            >
                {/* <input type="text" onChange={(e) => setContentTitle(e.target.value)} value={contentTitle} className=' w-full outline-none ring-0 focus:ring-0 focus:outline-none border bg-transparent  p-2 rounded' placeholder='Content Title' /> */}
                <MultiSelectDropdown/>
            </div>
            
            <RichTextEditor
                initialContent={content} 
                setInitialContent={setContent}
            />
            
            <div className='m-2 p-2 w-full flex items-center justify-end'>
                <select onChange={(e)=> setSelectedStatus(e.target.value)} value={selectedStatus} className='border border-[#64E09A] bg-transparent rounded' name="status" id="status">
                    <option className='bg-white text-black' value="DRAFT">Draft</option>
                    <option className='bg-white text-black' value="ACTIVE">Active</option>
                    <option className= 'bg-white text-black' value="INACTIVE">Inactive</option>
                </select>
                
                <button
                    className="mx-2 bg-transparent text-lg font-semibold hover:bg-[#64E09A] hover:text-[#242424] py-2 px-4 border border-[#64E09A] hover:border-transparent rounded"
                    onClick={
                        (e) => {
                            /**
                             * If APi call after make submit is successful then
                             * setOpen(false) will close the modal
                             */
                            // setOpen(true);
                            handleSubmitAction(e)
                        }
                    }
                > Submit
                </button>
            </div>
        </div>
    )
}


const BlogList = () => {


    const [ open , setOpen ] = useState(false);
    const [ initialContent, setInitialContent ] = useState('<p>Hello world!</p>');
    const [ short_preview_content, set_short_preview_content ] = useState('');
    const [ contentTitle, setContentTitle ] = useState(''); 
    const [ AllPosts, setAllPosts ] = useState([]);
    const [ selectedStatus, setSelectedStatus ] = useState(null);
    
    const [ postEditOpen, setPostEditOpen ] = useState(-1);

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
    // console.log("LIST: ", postListingData)

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
            // console.log("Modal closed");
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
                        status: selectedStatus,
                        short_preview_content: short_preview_content
                    }
                }
            });
            // console.log("RES: ", response)
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

    const handlePostEdit = (e, blogDetails, index) => {
        // console.log("INDEX : ", index)
        // console.log("postEditOpen", postEditOpen)
        setPostEditOpen(index)
        // console.log("INDEX : ", index)
        // console.log("postEditOpen", postEditOpen)
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
                        
                        {/* <div className='border rounded-md w-full my-5'>
                            <MultiSelectDropdown/>
                        </div> */}

                        <div className= "w-full" >
                            <RichTextEditor
                                initialContent={short_preview_content} 
                                setInitialContent={set_short_preview_content}
                                doesShowMenuBar = { false }
                                height = "min-h-[100px]"
                            />
                        </div>
                    
                        
                        <RichTextEditor
                             initialContent={initialContent} 
                             setInitialContent={setInitialContent}
                             doesShowMenuBar = { true }
                             height = "min-h-[280px]"
                        />
                        
                        <div className='m-2 p-2 w-full flex items-center justify-end'>
                            <select onChange={(e)=> setSelectedStatus(e.target.value)} className='border border-[#64E09A] bg-transparent rounded' name="status" id="status">
                                <option className='bg-white text-black' value="DRAFT">Draft</option>
                                <option className='bg-white text-black' value="ACTIVE">Active</option>
                                <option className= 'bg-white text-black' value="INACTIVE">Inactive</option>
                            </select>
                            
                            <button
                                className="mx-2 bg-transparent text-lg font-semibold hover:bg-[#64E09A] hover:text-[#242424] py-2 px-4 border border-[#64E09A] hover:border-transparent rounded"
                                onClick={
                                    () => {
                                        setOpen(true);
                                        handleCreateBlogPost()
                                    }
                                }
                            > Submit
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
                :
                null
            }
            
            <div className="space-y-5">
                {AllPosts.map((blog, index) => (
                    <div className='text-white rounded-lg shadow-md border border-white p-2'>
                        <div onClick={()=> console.log("HELLO")} key={index} className={`bg-[#3E403F] cursor-pointer rounded-lg shadow-md  min-w-[700px]`}>
                            <NavLink to={`/blog/${blog.id}`} className="flex flex-col items-start justify-start">
                                <h3 className="p-2 text-xl text-white-600 font-semibold">{blog.title}</h3>
                                {/* <p className=" p-2 text-white-600">{blog.content}</p> */}
                                
                            </NavLink>
                        </div>
                        <div className='prose text-white p-2 min-w-full' dangerouslySetInnerHTML={ { __html: blog.content }}/>
                        <div className='flex items-start justify-end'>
                            <button 
                                onClick={ (e)=> { handlePostEdit(e, blog, index + 1 ) }}
                                className='p-2 rounded border'
                            >
                                Edit
                            </button>
                        </div>
                        {
                            postEditOpen == index + 1
                            ?
                            <Modal open = { postEditOpen } onClose = { ()=> setPostEditOpen(-1) }>
                                <PostEdit blogDetails={blog} setAllPosts= {setAllPosts} setModalClose = { ()=> {setPostEditOpen(-1) } }/> 
                            </Modal>
                            :
                            null
                        }
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;