import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import 'react-bootstrap'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [result, setResult] = useState([])
  const url = 'kalender.json'
  const imgUrl = 'https://www.minden.de'
  const options =
  {
    method: 'get',
    url: url,
    // responseType: 'stream'
  }
  fetch = () => {


    axios.request(options).then(function(response) {

      console.log(response.data.slice(50, 107))
      console.log(response.data)
      setResult(response.data.slice(70, 107))

    }).catch(err => {

      console.log(err.message)

    })

  }


  useEffect(() => {

    fetch()


  }, [])

  return (

    <div className="container ">
      <div className="row col-md-12 col-lg-offset-6 centered">
        <div className="row">
          <h1>Termine in Minden</h1>

          {

            result.map((results) => (
              <>
                <div className="col border bg-primary">
                  <div clasName="col">


                    <div className="col-lg-8 col-xs-offset-2 centered">



                      <div className="row">
                        <div className="col-lg-12">




                          <h3 className="row">{results.title}</h3>
                          <img className="row" style={{ width: 200, height: 200 }} src={imgUrl + results.imageSrc} />
                          <h4 className="row">Wann: {results.start} Uhr</h4>
                          <h4 className="row">Wo: {results.location.name === undefined ? null : results.location.name} </h4

                          >
                          {/*
                          <a className="row" href={imgUrl + results.website}>mehr infos Online</a>*/}
                          <button className="btn btn-danger" onClick={()=>{window.open(imgUrl + results.website)}}>mehr Infos</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>


            ))

          }
        </div>
      </div>
    </div>

  )
}
