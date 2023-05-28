import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom'
const BlogDetails = ()=>{
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(id === 'blog-slug'){
            navigate('*');
        }
    })
    return (
        <>
            <div>
                <p>Blog - details</p>
            </div>
        </>
    )
}

export default BlogDetails;