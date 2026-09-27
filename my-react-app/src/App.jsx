import { Suspense, useState } from 'react'

import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/AvailablePlayers/SelectedPlayers/SelectedPlayers'
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
 const playersPromise = fetchPlayers()
function App() {
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600.00)
  // console.log('purchasedPlayers', purchasedPlayers)
  const removePlayer = (p)=>{
     const filerData =purchasedPlayers.filter(player=> player.player_name !== p.player_name)
      setPurchasedPlayers(filerData)
      setAvailableBalance(availableBalance + p.price)
  }

 

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center p-4 mt-2'>
        <h1 className='font-bold text-2xl'>{
         toggle ? 'Available Players' : `Selected Players (${purchasedPlayers.length})`
         }
        </h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`btn p-3 border border-gray-300 rounded-l-2xl border-r-0 ${toggle === true ? 'bg-blue-500 text-white' : ''}`}>
            Available
          </button>
          <button onClick={() => setToggle(false)} className={`btn p-3 border border-gray-300 rounded-r-2xl ${toggle === false ? 'bg-blue-500 text-white' : ''}`}>
            Selected <span>{purchasedPlayers.length}</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<div>Loading players...</div>}>
          <AvailablePlayers  purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise} />
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer} />
      )}
      
    </>
  )
}

export default App
