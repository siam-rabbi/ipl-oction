import React,{useState} from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/finish.png'


const PlayerCard = ({ purchasedPlayers, setPurchasedPlayers, player, setAvailableBalance , availableBalance}) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
<div key={player.player_name} className="card bg-base-100 shadow-sm p-4">
          <figure>
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={player.player_image}
              alt={player.player_name}
            />
          </figure>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <img src={userImg} className="w-10 h-10 rounded-full" alt="Player" />
              <h2 className="card-title ml-2">{player.player_name}</h2>
            </div>

            <div className="flex items-center justify-between mt-2 border-b-2 border-gray-300 pb-2">
              <div className="flex items-center gap-2 mt-2">
                <img src={flagImg} className="w-6 h-6" alt="Country" />
                <span className="ml-2">{player.player_country}</span>
              </div>
              <button className="btn">{player.playing_role}</button>
            </div>

            <div className='flex justify-between'>
              <span className='font-semibold'>Rating</span>
              <span>{player.rating}</span>
            </div>

            <div className='flex justify-between'>
              <span className='font-semibold'>{player.player_battingstyle}</span>
              <span>{player.player_bowlingstyle}</span>
            </div>

            <div className="card-actions flex justify-between items-center mt-4">
              <p className="font-semibold">Price: ₹ {player.price}Cr</p>
              <button className="btn" disabled={isSelected} onClick={()=> {
                setIsSelected(true);
                setAvailableBalance(availableBalance - player.price);
                setPurchasedPlayers([...purchasedPlayers, player]);
              }}>
                {isSelected === true ? 'Selected' : 'Choose Player'}
              </button>
            </div>
          </div>
        </div>
    );
};

export default PlayerCard;