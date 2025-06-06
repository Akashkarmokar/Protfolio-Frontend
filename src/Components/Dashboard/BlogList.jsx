import { useState } from 'react';
import Modal from '../Modal.jsx';
import RichTextEditor from '../RichTextEditor/Tiptap.jsx'; // Assuming you have a rich text editor component
import { useLocation } from "react-router-dom";

const BlogList = (
    { 
        blogs = [
            {
                id: 1,
                title: "Understanding React Hooks",
                content: "React Hooks are functions that let you use state and other React features without writing a class."
            },
            {
                id: 2,
                title: "A Guide to JavaScript Promises",
                content: "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation."
            },
            {
                id: 3,
                title: "CSS Grid vs Flexbox",
                content: "CSS Grid and Flexbox are both powerful layout systems in CSS, each with its own strengths and use cases."
            }
        ] 
    }
) => {
    const [ open , setOpen ] = useState(false);
    const { pathname } = useLocation();
    console.log("Pathname: ", pathname);
    const [ initialContent, setInitialContent ] = useState('<p>Hello world!</p>');
    const [ contentTitle, setContentTitle ] = useState(''); // Assuming you want to manage the title of the blog post
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
                        <div className='mx-auto border rounded-md w-full'>
                            <input type="text" onChange={(e) => setContentTitle(e.target.value)} value={contentTitle} className=' w-full outline-none ring-0 focus:ring-0 focus:outline-none border bg-transparent  p-2 rounded' placeholder='Content Title' />
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
                                    console.log("Submitted Content: ", initialContent);
                                    console.log("Submitted Title: ", contentTitle);
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
                {blogs.map((blog, index) => (
                <li key={blog.id} className={`bg-[#3E403F] rounded-lg shadow-md border border-[#00DF9A] `}>
                    <h3 className="p-2 text-xl text-white-600 font-semibold">{blog.title}</h3>
                    <p className=" p-2 text-white-600">{blog.content}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;