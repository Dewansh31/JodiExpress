import React , { useState,useEffect }from 'react'
import "./Sidebar2.css"
import Sidebar2 from './Sidebar2'
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth"; 
import { collection, query,getCountFromServer ,where} from "firebase/firestore";
import './AddReligion.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

import {

  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  
  
} from 'chart.js';



const firestore = getFirestore(app)


ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale);



function Dashboard2(props) {

  //members counts
  const [totalMembers,setTotalMembers] = useState(0);
  const [featuredMembers,setFeaturedMembers] = useState(0);
  const [freeMembers,setFreeMembers] = useState(0);
  const [ncouples,setNCouples] = useState(0);

  //religionwise counts
  const [nHindu,setNHindu] = useState(0);
  const [nMuslim,setNMuslim] = useState(0);
  const [nChristian,setNChristian] = useState(0);
  const [nSikh,setNSikh] = useState(0);
  const [nBuddhist,setNBuddhist] = useState(0);
  const [nZoroastrian,setNZoroastrian] = useState(0);
  const [nJain,setNJain] = useState(0);
  const [nJudaism,setNJudaism] = useState(0);
  const [nNR,setNNR] = useState(0);

  //RashiWise counts
   //religionwise counts
   const [nMesh,setNMesh] = useState(0);
   const [nVrishabh,setNVrishabh] = useState(0);
   const [nMithun,setNMithun] = useState(0);
   const [nKark,setNKark] = useState(0);
   const [nSinh,setNSinh] = useState(0);
   const [nKanya,setNKanya] = useState(0);
   const [nTula,setNTula] = useState(0);
   const [nVrishchik,setNVrishchik] = useState(0);
   const [nDhanu,setNDhanu] = useState(0);
   const [nMakar,setNMakar] = useState(0);
   const [nKumbh,setNKumbh] = useState(0);
   const [nMeen,setNMeen] = useState(0);



  const getCoupleNo = async() =>{


    const docRef = doc(firestore, `marriages`, `successful`)
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
    
    setNCouples(data.couples.length);
  }


  const getReligionWise = async() => {

    
    const HinduRef = collection(firestore, "users");
    const q1 = query(HinduRef, where("religion", "==", "Hindu"));
    const snapshot = await getCountFromServer(q1);
    // console.log('count: ', snapshot.data().count);
    setNHindu(snapshot.data().count)
    // console.log("Hindu members:",snapshot.data().count);

    const MuslimRef = collection(firestore, "users");
    const q2 = query(MuslimRef, where("religion", "==", "Muslim"));
    const snapshot2 = await getCountFromServer(q2);
    // console.log('count: ', snapshot.data().count);
    setNMuslim(snapshot2.data().count)

    const ChristianRef = collection(firestore, "users");
    const q3 = query(ChristianRef, where("religion", "==", "Christian"));
    const snapshot3 = await getCountFromServer(q3);
    // console.log('count: ', snapshot.data().count);
    setNChristian(snapshot3.data().count)

    const SikhRef = collection(firestore, "users");
    const q4 = query(SikhRef, where("religion", "==", "Sikh"));
    const snapshot4 = await getCountFromServer(q4);
    // console.log('count: ', snapshot.data().count);
    setNSikh(snapshot4.data().count)

    const BuddhistRef = collection(firestore, "users");
    const q5 = query(BuddhistRef, where("religion", "==", "Bauddhist"));
    const snapshot5 = await getCountFromServer(q5);
    // console.log('count: ', snapshot.data().count);
    setNBuddhist(snapshot5.data().count)

    const ZoroastrianRef = collection(firestore, "users");
    const q6 = query(ZoroastrianRef, where("religion", "==", "Zoroastrian"));
    const snapshot6 = await getCountFromServer(q6);
    // console.log('count: ', snapshot.data().count);
    setNZoroastrian(snapshot6.data().count)

    const JudaismRef = collection(firestore, "users");
    const q7 = query(JudaismRef, where("religion", "==", "Judaism"));
    const snapshot7 = await getCountFromServer(q7);
    // console.log('count: ', snapshot.data().count);
    setNJudaism(snapshot7.data().count)

    const JainRef = collection(firestore, "users");
    const q8 = query(JainRef, where("religion", "==", "Jain"));
    const snapshot8 = await getCountFromServer(q8);
    // console.log('count: ', snapshot.data().count);
    setNJain(snapshot8.data().count)

    const nrRef = collection(firestore, "users");
    const q9 = query(nrRef, where("religion", "==", "Non-Religious"));
    const snapshot9 = await getCountFromServer(q9);
    // console.log('count: ', snapshot.data().count);
    setNNR(snapshot9.data().count)

  }

  const getRashiWise = async() => {

    
    const ref1 = collection(firestore, "users");
    const q1 = query(ref1, where("rashi", "==", "Mesh"));
    const snapshot = await getCountFromServer(q1);
    // console.log('count: ', snapshot.data().count);
    setNMesh(snapshot.data().count)
    // console.log("Hindu members:",snapshot.data().count);

    const ref2 = collection(firestore, "users");
    const q2 = query(ref2, where("rashi", "==", "Vrishabh"));
    const snapshot2 = await getCountFromServer(q2);
    // console.log('count: ', snapshot.data().count);
    setNVrishabh(snapshot2.data().count)

    const ref3 = collection(firestore, "users");
    const q3 = query(ref3, where("rashi", "==", "Mithun"));
    const snapshot3 = await getCountFromServer(q3);
    // console.log('count: ', snapshot.data().count);
    setNMithun(snapshot3.data().count)

    const ref4 = collection(firestore, "users");
    const q4 = query(ref4, where("rashi", "==", "Kark"));
    const snapshot4 = await getCountFromServer(q4);
    // console.log('count: ', snapshot.data().count);
    setNKark(snapshot4.data().count)

    const ref5 = collection(firestore, "users");
    const q5 = query(ref5, where("rashi", "==", "Sinh"));
    const snapshot5 = await getCountFromServer(q5);
    // console.log('count: ', snapshot.data().count);
    setNSinh(snapshot5.data().count)

    const ref6 = collection(firestore, "users");
    const q6 = query(ref6, where("rashi", "==", "Kanya"));
    const snapshot6 = await getCountFromServer(q6);
    // console.log('count: ', snapshot.data().count);
    setNKanya(snapshot6.data().count)

    const ref7 = collection(firestore, "users");
    const q7 = query(ref7, where("rashi", "==", "Tula"));
    const snapshot7 = await getCountFromServer(q7);
    // console.log('count: ', snapshot.data().count);
    setNTula(snapshot7.data().count)

    const ref12 = collection(firestore, "users");
    const q8 = query(ref12, where("rashi", "==", "Vrishchik"));
    const snapshot8 = await getCountFromServer(q8);
    // console.log('count: ', snapshot.data().count);
    setNVrishchik(snapshot8.data().count)

    const ref8= collection(firestore, "users");
    const q9 = query(ref8, where("rashi", "==", "Dhanu"));
    const snapshot9 = await getCountFromServer(q9);
    // console.log('count: ', snapshot.data().count);
    setNDhanu(snapshot9.data().count)

    const ref9 = collection(firestore, "users");
    const q10 = query(ref9, where("rashi", "==", "Makar"));
    const snapshot10 = await getCountFromServer(q10);
    // console.log('count: ', snapshot.data().count);
    setNMakar(snapshot10.data().count)

    const ref10 = collection(firestore, "users");
    const q11 = query(ref10, where("rashi", "==", "Kumbh"));
    const snapshot11 = await getCountFromServer(q11);
    // console.log('count: ', snapshot.data().count);
    setNKumbh(snapshot11.data().count)

    const ref11 = collection(firestore, "users");
    const q12 = query(ref11, where("rashi", "==", "Meen"));
    const snapshot12 = await getCountFromServer(q12);
    // console.log('count: ', snapshot.data().count);
    setNMeen(snapshot12.data().count)

  }


  const getstats = async() =>{

    const coll = collection(firestore, "users");
    const q = query(coll);
    const snapshot = await getCountFromServer(q);
    // console.log('count: ', snapshot.data().count);
    setTotalMembers(snapshot.data().count);


    const coll2 = collection(firestore, "users");
    const q2 = query(coll2, where("featured", "==", true));
    const snapshot2 = await getCountFromServer(q2);
    // console.log('count: ', snapshot2.data().count);
    setFeaturedMembers(snapshot2.data().count)

    setFreeMembers(totalMembers-featuredMembers)

    

  }

  const data = {
    labels: ['Total Members', 'Free Members', 'Featured Members'],
    datasets: [
      {
        label: 'Members',
        data: [totalMembers, freeMembers, featuredMembers],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Zoroastrian', 'Jain', 'Judaism', 'Non-religious'],
    datasets: [
      {
        label: '# of Votes',
        data: [nHindu, nMuslim, nChristian, nSikh, nBuddhist, nZoroastrian,nJain,nJudaism,nNR],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(150, 142, 182, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  


  
  useEffect(() => {

    getstats();
    getCoupleNo();
    getReligionWise();
    getRashiWise();
    // eslint-disable-next-line
  }, [totalMembers,featuredMembers,freeMembers,ncouples]);



  return (
    <div>

    <Sidebar2 name={props.name}/>

    <div className="amain-content">
       <main>
      <div className="page-header" style={{padding:"0 0 0 0"}}>
        <h1 style={{padding:"10px 0 "}}>Dashboard</h1>
       
      </div>
      <div className="page-content">
        <div className="analytics">
          <div className="acard">
            <div className="acard-head">
              <h2>{totalMembers}</h2>
              <span className="las la-user-friends" />
            </div>
            <div className="acard-progress">
              <small>Total Member</small>
              <div className="acard-indicator">
                <div className="indicator one" style={{width: '60%'}} />
              </div>
            </div>
          </div>
          <div className="acard">
            <div className="acard-head">
              <h2>{featuredMembers}</h2>
              <span className="las la-eye" />
            </div>
            <div className="acard-progress">
              <small>Premium Member</small>
              <div className="acard-indicator">
                <div className="indicator two" style={{width: '80%'}} />
              </div>
            </div>
          </div>
          <div className="acard">
            <div className="acard-head">
              <h2>{freeMembers}</h2>
              <span className="las la-shopping-cart" />
            </div>
            <div className="acard-progress">
              <small>Free Member</small>
              <div className="acard-indicator">
                <div className="indicator three" style={{width: '65%'}} />
              </div>
            </div>
          </div>
          <div className="acard" >
            <div className="acard-head">
              <h2>{ncouples}</h2>
              <span className="las la-envelope" />
            </div>
            <div className="acard-progress">
              <small>Successful Couples</small>
              <div className="acard-indicator">
                <div className="indicator four" style={{width: '90%'}} />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 ">
        <div className="row">
         



       <div className=' d-flex flex-row' >

       <div className="col-md-6 mb-4">
            <div className="acard " >
              <div className="acard-body">
              <Pie data={data} className='c1' />
              
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="acard " >
              <div className="acard-body">
              <Doughnut data={data2} className='c1' />
              
              </div>
            </div>
          </div>
          
       </div>
          

        </div>

        <div className="row">
         



         <div className=' d-flex flex-row' >
  
         <div className="col-md-6 mb-4">
              <div className="acard " >
                <div className="acard-body">
                
                <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Mesh", "Vrishabh", "Mithun", "Kark","Sinh", "Kanya","Tula", "Vrishchik", "Dhanu","Makar", "Kumbh", "Meen"],
            datasets: [
              {
                // Label for bars
                label: "Rashi Wise Members",
                // Data or value of your each variable
                data: [nMesh, nVrishabh, nMithun, nKark,nSinh, nKanya, nTula, nVrishchik,nDhanu, nMakar, nKumbh, nMeen],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow","aqua", "green", "red", "yellow","aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow","aqua", "green", "red", "yellow","aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>

                
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 mb-4">
              <div className="acard " >
                <div className="acard-body">
                <Doughnut data={data2} className='c1' />
                
                </div>
              </div>
            </div> */}
            
         </div>
            
  
          </div>

      </div>
      </div>
    </main>
    </div>
    </div>
  )
}

export default Dashboard2
