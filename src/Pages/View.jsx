import { useEffect, useState } from 'react';
import CardWithRating from './../Component/CardWithRating';
import { useParams } from 'react-router';
import axios from 'axios';
const View = () => {
    const params = useParams();
    const [search,setSearch]=useState('')
    const [searchData,setSearchData]=useState([]);
    const [sumData,setSumData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("Testing useEffect")
            console.log(params.search)
            const response = await axios.get('/api/search-data', {
              params: { search: params.search },
            });
            console.log(response.data);
            console.log(response.status);
            setSumData(response.data.count);
            setSearchData(response.data.data);
            console.log("product:")
          } catch (error) {
            console.error(error);
          }
        };
        if (params.search) {
          setSearch(params.search);
          fetchData();
        }
      }, [params.search]);

    return (
        <>
            <div>
                <p className='py-2'>Menampilkan {sumData} barang </p>
                <div className="grid grid-cols-4 gap-2">
                  {searchData.map((data)=>(
                      <CardWithRating
                        productName = {data.productName}
                        price = {data.price.$numberDecimal}
                        qty = {data.qty.$numberDecimal}
                        image = {data.productImage}
                        id = {data._id}
                        disc={data.discount && data.discount.$numberDecimal}
                      />
                  ))}
              </div>
            </div>
        </>
        
    );
}

export default View;