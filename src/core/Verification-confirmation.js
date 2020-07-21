import React, {Fragment, useState, useEffect} from "react";
import logo from '../fmbxjpg.jpg';
import { verified } from "../auth"
import Layout from '../componets/Layout'

const ThankYou = ({match}) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const init = (userId) => {
      verified(userId).then(data => {
          if (data.error) {
             setError(data.error)
          }else{
              setData(data)
             
    
          }
      });
    };
      
    useEffect(() => {
      init(match.params.userId);
    },[]);



  return(
    <Fragment>
 <Layout title="Your email has been verified" description="You can now signin to access your user dashboard " />
    </Fragment>
  )

}

export default ThankYou