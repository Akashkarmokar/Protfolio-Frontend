import { useState } from 'react';
import Modal from '../Modal.jsx';


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
    return (
        <div className="flex-col justify-center items-start">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold mb-4">Blog List</h2>
                <button
                 className="bg-transparent text-2xl font-semibold hover:bg-[#64E09A] hover:text-[#242424] py-2 px-4 border border-[#64E09A] hover:border-transparent rounded"
                 onClick={() => setOpen(true)}
                > Create Blog 
                </button>
                <Modal open = { open } onClose = { ()=> setOpen(false) }>
                    <div className='text-center'>
                        <div>
                            <h3>Inside the model</h3>
                        </div>
                        <div>
                            <h3>Inside the model</h3>
                        </div>
                        <div>
                            <h3>Inside the model</h3>
                        </div>
                        <div>
                            <h3>Inside the model</h3>
                        </div>
                        <div>
                            <h3>Inside the model</h3>
                        </div>
                        <div>
                            <h3>Inside the model</h3>
                        </div>
                    </div>
                </Modal>
            </div>
            <ul className="space-y-4">
                {blogs.map((blog) => (
                <li key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    <p className="text-gray-600">{blog.content}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;