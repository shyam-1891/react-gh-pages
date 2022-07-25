import H2Heading from '../Heading/H2Heading';
import Bookitem from './Bookitem';

export default function Bookcompo({bookdata, test}) {
    const bookcompo = {
        'display': "flex",
        'flexWrap': "wrap",
        'justifyContent': 'center'
    }
    return(
        <section>
            <H2Heading heading="Book store"/> 
            <div className='book-compo-section sectionwrapper'> 
                <div className='book-compo' style={bookcompo}>
                    {bookdata.map((item, index)=>{
                        return <Bookitem bookitem={item} key={index}/>
                    })}
                </div> 
            </div>
        </section>
    );
}