import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom'
const BlogDetails = ()=>{
    const { blog_id = "" } = useParams();
    // console.log("PARAMS: ", params)
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        if(blog_id === 'blog-slug'){
            navigate('/not-found');
        }
    })

    return (
        <div className='main-container'>
            <div className='mt-10 flex-col items-center justify-center md:h-screen border rounded-md overflow-scroll scroll-hide'>
                <div className='p-5 flex-col items-center justify-start'>
                    <h2>Content Title</h2>
                    <p>Date</p>
                </div>
                <div className='p-5'>
                    <code>
                        <p>
                        {/* package main

                        import "fmt"

                        func main() {
                            fmt.Println("Hello, World!")
                        } */}

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. 
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere sapiente tenetur error nemo repudiandae recusandae aspernatur culpa. Eligendi distinctio quasi rem sunt commodi officia libero vitae reprehenderit deleniti iusto alias ipsum vero ab, minus animi expedita mollitia voluptatum maxime soluta sint. Laudantium consequuntur, incidunt, facere alias optio repellat sunt facilis itaque ut repellendus aspernatur. Illum in obcaecati ratione quae laborum unde voluptas odio doloremque a. Facilis voluptatem, non delectus fugiat cumque ipsum illum necessitatibus expedita. Rem error atque tenetur perspiciatis quis, tempora magnam impedit minus explicabo dolores odio dolore, sit veniam iure ex ipsum itaque! Similique molestiae cupiditate eligendi perspiciatis porro maiores? Officia amet doloremque, omnis aliquam blanditiis quo earum temporibus cumque alias maxime distinctio, cupiditate inventore fugiat voluptate quisquam. Itaque aut perspiciatis veniam autem cumque, magni maiores maxime sunt nemo eaque dicta molestiae fuga odio excepturi eos accusantium consequatur ea iusto quam nam eveniet id repellendus? Dolores quis culpa velit asperiores, eum autem vel, reiciendis tempora iste, temporibus quidem labore voluptate odio laudantium veniam. Magnam maiores ut, quis minima, nisi excepturi cum fugiat quisquam impedit veritatis voluptatum officiis aspernatur molestiae, quaerat ratione ipsa beatae deserunt consequuntur numquam ullam eos inventore nobis reiciendis ducimus. Suscipit magnam nemo eligendi, neque aliquid quam at ipsa vel quis quae aut earum amet quos rerum culpa veritatis dicta ipsam deleniti inventore aspernatur ducimus sequi iure est. Inventore non debitis incidunt aspernatur, beatae cum est. Quo unde qui delectus ab similique iure beatae amet deleniti suscipit, voluptatibus quos obcaecati consequatur ex repudiandae molestias voluptatem perferendis est! Debitis est rem minima magni enim neque iusto? Est eveniet fugit vitae nesciunt quasi cum eos incidunt dolores natus consequatur, neque possimus adipisci in dignissimos minus obcaecati reprehenderit error odit modi! Perferendis unde dolor doloremque vel dignissimos maiores, cumque itaque, ab ipsa quaerat in sint! Sed necessitatibus inventore eos rem, accusantium maxime quae fugit laudantium modi distinctio alias, voluptas nisi veritatis voluptate fuga quidem ducimus laborum aspernatur? Reprehenderit ipsam voluptas adipisci asperiores neque. Suscipit, corrupti minus minima doloremque vel cum ea deleniti similique sunt pariatur veniam, commodi alias libero rem voluptate laborum error vero debitis culpa natus. Eligendi, excepturi quo beatae minima reiciendis, similique pariatur alias, facere amet in laborum. Molestias, quam sapiente dolorem in minima facere corporis velit ad impedit quis nobis, nam perspiciatis magnam perferendis cupiditate veniam excepturi quo tempore nisi hic! Repellendus quod inventore praesentium nobis earum, accusamus minus corporis maxime quae? Laboriosam veniam aliquam labore ad et voluptatum minus odio dignissimos expedita ut consequuntur maiores minima quia voluptatem porro saepe cum, vel nobis delectus ipsa? Repellat ipsa amet voluptate eveniet, officiis quo corporis corrupti reiciendis ducimus eius obcaecati placeat rem fugit, soluta esse praesentium saepe, facilis laboriosam possimus tempore eaque commodi porro accusamus enim! Impedit provident quam, a vel ad fugit necessitatibus perferendis soluta ratione quod autem odit tempore esse beatae nam quasi qui facilis ducimus nihil ea. Earum ex sapiente dignissimos! Corporis rem velit qui laudantium possimus illo quos, deleniti modi provident reprehenderit officiis autem quas nam iure? Dolorem nostrum exercitationem sint quaerat!
                        </p>
                    </code>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;