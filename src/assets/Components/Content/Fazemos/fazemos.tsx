import { Link } from 'react-router-dom';
import './fazemos.css';
import Projeto from '../../../images/oProjeto.png'
import Estamos from '../../../images/ondeEstamos.png'

function Fazemos() {

    function pageUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section id='fazemos'>
                <div id="titleFazemos">
                    <h1>O QUE FAZEMOS</h1>
                </div>

                <div id="contentFazemos">
                    <div>
                        <p>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime debitis ut excepturi exercitationem veniam nam, labore inventore alias error doloribus facilis quas natus! Ratione laudantium asperiores sapiente officia, autem nesciunt delectus qui porro ut voluptates itaque veritatis hic quia impedit eius, totam, et voluptatibus quibusdam quae sed saepe optio dolore. Eveniet est, quam necessitatibus officiis, eius amet fuga pariatur impedit placeat aliquam ex id? Sed ullam labore, officia est qui deleniti, unde odio cupiditate enim adipisci numquam mollitia similique! Nihil eligendi, adipisci doloribus, officia iure facilis ab laboriosam culpa sapiente alias fugit. Enim tempora aliquid pariatur magnam soluta, molestias quo voluptatum error dolores quas natus architecto odio sapiente explicabo eveniet nostrum a doloremque ipsam. Architecto libero, temporibus officiis dolores ratione aperiam iusto esse quia mollitia assumenda in delectus excepturi. Sit sint explicabo exercitationem adipisci porro neque unde, aliquam excepturi itaque! Accusantium aliquid, commodi repellat soluta unde vero sit sint odit voluptas praesentium laboriosam, esse, quas ea. Veritatis, in? Accusamus ratione aliquam animi nobis, optio laborum, delectus sit iure obcaecati natus qui, suscipit perspiciatis! Similique delectus nam nobis dolorem nesciunt, provident molestiae a veniam eveniet doloribus aperiam consectetur ad, consequatur, quas dicta ab et maxime animi sunt beatae quia natus quis.

                        </p>
                    </div>

                    <div className='sugeridosFazemos'>
                        <h2>Sugeridos:</h2>
                        <div className='sugeridosCardFazemos'>

                            <Link to={'/onde'} onClick={pageUp}>
                                <img src={Estamos} alt="" />
                            </Link>



                            <Link to={'/projeto'} onClick={pageUp}>
                                <img src={Projeto} alt="" />
                            </Link>



                        </div>

                    </div>
                </div>

            </section>
        </>
    )

}

export default Fazemos;